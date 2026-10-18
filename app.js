"use strict";
(() => {
  const STORAGE_KEY = "sideQuestManager.web.v1";
  const catalog = globalThis.JOURNEY_CATALOG;
  const Core = globalThis.JourneyCore;
  if (!catalog || !Core) throw new Error("支线管理网页资源未能加载。");
  Core.validateCatalog(catalog);

  let toastTimer;
  globalThis.showToast = text => {
    const toast = document.getElementById("toast");
    toast.textContent = text;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 6500);
  };

  let profiles = [];
  let activeProfileId = "";
  let saveWarning = "";
  let loadingWarning = "";
  let writeBlocked = false;

  const sortProfiles = () => profiles.sort((a, b) => (Date.parse(b.updatedAt) || 0) - (Date.parse(a.updatedAt) || 0));
  const current = () => profiles.find(profile => profile.id === activeProfileId) || profiles[0];
  const deepCopy = value => JSON.parse(JSON.stringify(value));
  const displayTime = value => {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? "" : date.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
  };

  function loadSaved() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (saved.format !== "sidequest-manager-web" || !Array.isArray(saved.profiles)) throw new Error("网页计划格式无效");
      profiles = saved.profiles.map(Core.normalizeProfile);
      const seen = new Set();
      for (const profile of profiles) {
        if (seen.has(profile.id)) throw new Error("网页计划中有重复的周目 ID");
        seen.add(profile.id);
      }
      activeProfileId = String(saved.activeProfileId || "");
    } catch (error) {
      profiles = [];
      activeProfileId = "";
      loadingWarning = "读取浏览器中已有的计划失败，原始数据仍保留。请先导出备份或清理后再继续。";
      writeBlocked = true;
      console.error("支线管理本地计划读取失败", error);
    }
  }

  function persist() {
    if (writeBlocked) return false;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ format: "sidequest-manager-web", version: 1, activeProfileId, profiles }));
      saveWarning = "";
      return true;
    } catch (error) {
      saveWarning = "当前浏览器无法写入本地计划；本次打开期间仍可使用，请导出备份保存进度。";
      console.error("支线管理本地计划保存失败", error);
      return false;
    }
  }

  loadSaved();
  if (!profiles.length) profiles = [Core.newProfile()];
  if (!profiles.some(profile => profile.id === activeProfileId)) activeProfileId = profiles[0].id;
  sortProfiles();
  persist();

  function payload(error = "") {
    const profile = current();
    return {
      type: "journeyPlanner", catalog, profiles: profiles.map(({ id, name }) => ({ id, name })), profile: deepCopy(profile),
      plan: Core.generate(catalog, profile), warning: [loadingWarning, saveWarning].filter(Boolean).join(" "), error,
      savedAt: displayTime(profile.updatedAt)
    };
  }

  function readName(data) {
    const name = String(data.name || "").trim();
    if (name.length < 1 || name.length > 60) throw new Error("计划名称需要 1～60 个字符。");
    return name;
  }

  function run(command, data = {}) {
    try {
      if (command === "load") return payload();
      const requestedId = String(data.profileId || activeProfileId);
      const original = profiles.find(profile => profile.id === requestedId);
      if (!original) throw new Error("找不到指定的周目计划。");
      if (command === "switch") {
        activeProfileId = original.id;
        persist();
        return payload();
      }

      const profile = deepCopy(original);
      const create = command === "new" || command === "clone";
      if (create) {
        profile.id = Core.createId();
        profile.name = readName(data);
        if (command === "new") { profile.choices = {}; profile.completed = []; profile.collected = []; }
      } else if (command === "rename") profile.name = readName(data);
      else if (command === "choose") {
        const questId = String(data.questId || ""), optionId = String(data.optionId || "");
        const quest = catalog.quests.find(value => value.id === questId);
        if (optionId === "skip") delete profile.choices[questId];
        else {
          if (!quest || !quest.options.some(option => option.id === optionId)) throw new Error("该 NPC 分支不存在。");
          profile.choices[questId] = optionId;
        }
      } else if (command === "selectGroup" || command === "clearGroup") {
        const category = String(data.category || "");
        if (!["base", "dlc"].includes(category)) throw new Error("分组无效。");
        for (const quest of catalog.quests.filter(value => value.category === category)) {
          if (command === "selectGroup" && !Object.hasOwn(profile.choices, quest.id)) profile.choices[quest.id] = quest.defaultOption;
          else if (command === "clearGroup") delete profile.choices[quest.id];
        }
      } else if (command === "toggle") {
        const stepId = String(data.stepId || ""), plan = Core.generate(catalog, profile);
        if (plan.issues.length || !plan.steps.some(step => step.id === stepId)) throw new Error("该步骤不在当前有效计划中。");
        const completed = new Set(profile.completed);
        if (data.completed) completed.add(stepId); else completed.delete(stepId);
        profile.completed = [...completed];
      } else if (command === "collect") {
        Core.setCollected(catalog, profile, String(data.itemId || ""), Boolean(data.collected));
      } else throw new Error("未知的计划操作。");

      const nextPlan = Core.generate(catalog, profile);
      if (!nextPlan.issues.length) {
        const validSteps = new Set(nextPlan.steps.map(step => step.id));
        profile.completed = profile.completed.filter(stepId => validSteps.has(stepId));
      }
      profile.catalogVersion = catalog.version;
      profile.updatedAt = new Date().toISOString();
      if (create) profiles.push(profile);
      else profiles[profiles.indexOf(original)] = profile;
      activeProfileId = profile.id;
      sortProfiles();
      persist();
      return payload();
    } catch (error) {
      console.error("支线计划操作失败", error);
      return payload("未保存本次修改：" + error.message);
    }
  }

  function download(filename, contents) {
    const blob = new Blob([contents], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob), link = document.createElement("a");
    link.href = url; link.download = filename; link.style.display = "none"; document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportProfiles() {
    const stamp = new Date().toISOString().slice(0, 10).replaceAll("-", "");
    download("支线管理计划备份_" + stamp + ".json", JSON.stringify({ format: "sidequest-manager-web", version: 1,
      activeProfileId, exportedAt: new Date().toISOString(), profiles }, null, 2));
    globalThis.showToast("已导出 " + profiles.length + " 个周目计划。请妥善保存备份文件。");
  }

  async function importProfiles(files) {
    const incoming = [], errors = [];
    for (const file of files) {
      try {
        const parsed = JSON.parse(await file.text());
        const candidates = parsed && parsed.format === "sidequest-manager-web" ? parsed.profiles : [parsed];
        if (!Array.isArray(candidates) || !candidates.length) throw new Error("文件中没有周目计划");
        for (const candidate of candidates) incoming.push(Core.normalizeProfile(candidate));
      } catch (error) { errors.push(file.name + "：" + error.message); }
    }
    if (!incoming.length) {
      globalThis.showToast(errors.join("；") || "没有找到可导入的计划。");
      return;
    }
    const ids = new Set(profiles.map(profile => profile.id));
    for (const profile of incoming) {
      if (ids.has(profile.id)) profile.id = Core.createId();
      ids.add(profile.id);
      profiles.push(profile);
    }
    activeProfileId = incoming[0].id;
    sortProfiles();
    persist();
    globalThis.requestJourneyPlanner?.();
    globalThis.showToast("已导入 " + incoming.length + " 个计划。" + (errors.length ? " 跳过：" + errors.join("；") : ""));
  }

  globalThis.WebJourney = Object.freeze({ run, exportProfiles, importProfiles });
  const offlineStatus = document.getElementById("offlineStatus");
  function setOfflineStatus(text, ready = false) {
    offlineStatus.textContent = text;
    offlineStatus.classList.toggle("ready", ready);
  }
  if (!window.isSecureContext || !("serviceWorker" in navigator)) {
    setOfflineStatus("离线缓存需要 HTTPS 或本机启动器");
  } else {
    navigator.serviceWorker.register("./service-worker.js", { scope: "./" })
      .then(() => navigator.serviceWorker.ready)
      .then(() => setOfflineStatus("离线缓存已就绪", true))
      .catch(error => {
        setOfflineStatus("离线缓存未就绪");
        console.warn("支线管理离线缓存注册失败", error);
      });
  }
  document.getElementById("planImport").addEventListener("click", () => document.getElementById("planImportFile").click());
  document.getElementById("planImportFile").addEventListener("change", event => {
    const files = [...event.target.files]; event.target.value = "";
    if (files.length) importProfiles(files);
  });
  document.getElementById("planExport").addEventListener("click", exportProfiles);
})();
