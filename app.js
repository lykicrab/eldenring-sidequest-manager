/* Browser-only quest progress and the NPC next-step interface. */
(() => {
  "use strict";
  const splitSteps = {
    "d.brother": "d.giveArmor",
    "ranni.blade": "ranni.findBlade",
    "ranni.astel": "ranni.defeatAstel",
    "ansbach.scroll": "ansbach.findScroll"
  };
  function syncSharedSteps(catalog, profile) {
    const completed = new Set(profile.completed);
    for (const group of catalog.sharedSteps || []) if (group.some(id => completed.has(id))) group.forEach(id => completed.add(id));
    profile.completed = [...completed];
  }
  function migrateProfile(catalog, core, source) {
    const profile = core.normalizeProfile(source);
    if (profile.catalogVersion < 2) {
      const completed = new Set(profile.completed);
      for (const [oldId, firstHalf] of Object.entries(splitSteps)) if (completed.has(oldId)) completed.add(firstHalf);
      profile.completed = [...completed];
      const ordered = new Set(profile.stepOrder);
      profile.stepOrder = profile.stepOrder.flatMap(id => splitSteps[id] && !ordered.has(splitSteps[id]) ? [splitSteps[id], id] : [id]);
      profile.catalogVersion = 2;
    }
    if (profile.catalogVersion < 3) profile.catalogVersion = 3;
    syncSharedSteps(catalog, profile);
    return profile;
  }
  function refreshModel(model) {
    model.plan = model.core.generate(model.catalog, model.profile);
    if (model.plan.issues.length) throw new Error("不能展示存在分支冲突的计划。");
    model.stepMap = new Map(model.plan.steps.map(step => [step.id, step]));
    model.storyMap = new Map(model.catalog.milestones.map(step => [step.id, step]));
    model.sourceSteps = new Map([...model.catalog.milestones, ...model.catalog.quests.flatMap(quest => quest.steps)].map(step => [step.id, step]));
    model.rows = model.catalog.quests.map(quest => {
      const steps = model.plan.steps.filter(step => step.questId === quest.id);
      return { quest, steps, next: steps.find(step => !step.completed), done: steps.filter(step => step.completed).length };
    });
  }
  function createModel(catalog, core, source) {
    const profile = migrateProfile(catalog, core, source), plan = core.generate(catalog, profile);
    if (plan.issues.length) throw new Error(plan.issues.map(issue => issue.message).join("\n"));
    const model = { catalog, core, profile }; refreshModel(model); return model;
  }
  function parseBackup(source, core, allowEmpty = false) {
    const candidates = source?.format === "sidequest-manager-web" ? source.profiles : [source];
    if (!Array.isArray(candidates) || (!allowEmpty && !candidates.length)) throw new Error("文件中没有周目计划。");
    if (!candidates.length) return { profiles: [], activeProfileId: "" };
    const profiles = candidates.map(profile => core.normalizeProfile(profile));
    const ids = new Set(profiles.map(profile => profile.id));
    if (ids.size !== profiles.length) throw new Error("文件中有重复的周目 ID。");
    const activeProfileId = ids.has(source?.activeProfileId) ? source.activeProfileId : profiles[0].id;
    return { profiles, activeProfileId };
  }
  function completionPrerequisites(model, step) {
    const explicit = model.sourceSteps.get(step.id)?.completionNeeds;
    if (explicit) return explicit.filter(id => model.stepMap.has(id));
    // Milestone `after` entries preserve optional quest content; they do not block story progress.
    return step.questId === "story" ? (model.storyMap.get(step.id)?.needs || []).filter(id => model.stepMap.has(id)) : step.prerequisites;
  }
  function prerequisiteSteps(model, step) {
    const ids = new Set();
    function visit(value) {
      for (const id of completionPrerequisites(model, value)) {
        if (ids.has(id)) continue;
        ids.add(id);
        const prerequisite = model.stepMap.get(id);
        if (prerequisite) visit(prerequisite);
      }
    }
    visit(step);
    return model.plan.steps.filter(value => ids.has(value.id));
  }
  function missingPrerequisites(model, step) { return prerequisiteSteps(model, step).filter(value => !value.completed); }
  function canComplete(model, step, memo = new Map(), visiting = new Set()) {
    if (memo.has(step.id)) return memo.get(step.id);
    if (visiting.has(step.id)) return false;
    visiting.add(step.id);
    const ready = completionPrerequisites(model, step).every(id => {
      const prerequisite = model.stepMap.get(id);
      return prerequisite?.completed && canComplete(model, prerequisite, memo, visiting);
    });
    visiting.delete(step.id); memo.set(step.id, ready); return ready;
  }
  function setCompleted(model, stepId, completed) {
    const step = model.stepMap.get(stepId);
    if (!step || (completed && !canComplete(model, step))) return false;
    const values = new Set(model.profile.completed);
    const shared = model.catalog.sharedSteps?.find(group => group.includes(stepId)) || [stepId];
    for (const id of shared) { if (completed) values.add(id); else values.delete(id); }
    model.profile.completed = [...values]; refreshModel(model); return true;
  }
  function applyChoices(model, choices) {
    const candidate = { ...model.profile, choices: { ...choices }, stepOrder: [] }, plan = model.core.generate(model.catalog, candidate);
    if (plan.issues.length) return plan.issues;
    const valid = new Set(plan.steps.map(step => step.id));
    candidate.completed = candidate.completed.filter(id => valid.has(id));
    model.profile = candidate; refreshModel(model); return [];
  }
  function cardDependencies(model, rows) {
    const ownerByStep = new Map(rows.map(row => [row.next.id, row.quest.id]));
    const dependencies = new Map(rows.map(row => [row.quest.id, new Set()]));
    for (const row of rows) for (const prerequisite of prerequisiteSteps(model, row.next)) {
      const owner = ownerByStep.get(prerequisite.id);
      if (owner && owner !== row.quest.id) dependencies.get(row.quest.id).add(owner);
    }
    return dependencies;
  }
  function safeCardOrder(preferred, dependencies) {
    const rank = new Map(preferred.map((id, index) => [id, index])), pending = new Set(preferred), result = [];
    while (pending.size) {
      const ready = [...pending].filter(id => [...dependencies.get(id)].every(prerequisite => !pending.has(prerequisite)))
        .sort((left, right) => rank.get(left) - rank.get(right));
      if (!ready.length) throw new Error("支线前置形成循环，顺序没有改变。");
      result.push(ready[0]); pending.delete(ready[0]);
    }
    return result;
  }
  function orderedQuestRows(model) {
    const rows = model.rows.filter(row => row.next), byId = new Map(rows.map(row => [row.quest.id, row]));
    const planRank = new Map(model.plan.steps.map((step, index) => [step.id, index]));
    const base = [...rows].sort((left, right) => planRank.get(left.next.id) - planRank.get(right.next.id));
    const preferred = (model.profile.questOrder || []).filter(id => byId.has(id)), used = new Set(preferred);
    for (const row of base) if (!used.has(row.quest.id)) preferred.push(row.quest.id);
    return safeCardOrder(preferred, cardDependencies(model, rows)).map(id => byId.get(id));
  }
  function reorderQuestCards(model, draggedId, targetId, after) {
    const rows = orderedQuestRows(model), current = rows.map(row => row.quest.id);
    const sourceIndex = current.indexOf(draggedId), targetIndex = current.indexOf(targetId);
    if (sourceIndex < 0 || targetIndex < 0 || draggedId === targetId) return { changed: false, movedIds: [], adjusted: false };
    const dependencies = cardDependencies(model, rows), boundary = targetIndex + Number(after);
    const descendants = new Set([draggedId]);
    let grew = true;
    while (grew) {
      grew = false;
      for (const [dependent, prerequisites] of dependencies) {
        if (!descendants.has(dependent) && [...prerequisites].some(id => descendants.has(id))) { descendants.add(dependent); grew = true; }
      }
    }
    // Only push dependent cards crossed by the drop; later cards can stay where they are.
    const movedIds = current.filter((id, index) => id === draggedId || (boundary > sourceIndex && index < boundary && descendants.has(id)));
    const group = new Set(movedIds), remaining = current.filter(id => !group.has(id));
    const insertAt = current.slice(0, boundary).filter(id => !group.has(id)).length;
    const desired = [...remaining.slice(0, insertAt), ...movedIds, ...remaining.slice(insertAt)];
    const sorted = safeCardOrder(desired, dependencies);
    const changed = sorted.some((id, index) => id !== current[index]);
    if (changed) model.profile.questOrder = sorted;
    return { changed, movedIds, adjusted: sorted.some((id, index) => id !== desired[index]) };
  }
  const shortActions = {
    "melina.accord": "接受约定，取得灵马",
    "melina.echoes": "回访教堂，听取梅琳娜对话",
    "melina.altus": "回访迪可达斯、亚坛与王城外围的新增对话",
    "melina.thorns": "检查黄金树树刺，回赐福交谈",
    "melina.chamber": "听取玛莉卡的传话",
    "melina.last": "点火前完成可用对话",
    "melina.ending": "修复法环，选择普通艾尔登之王结局",
    "varre.first": "初遇梵雷，觐见双指后回访",
    "boc.gold": "交付黄金缝衣针",
    "sellen.azur": "取得彗星亚兹勒，回报并领取封印钥匙",
    "rogier.letter": "回访并收取遗留信件与装备",
    "ranni.blade": "交付猎杀指头刀，领取卡利亚颠倒像",
    "blaidd.siofra": "寻找布莱泽，询问拉塔恩与星星的关联",
    "iji.report": "报告布莱泽结尾，刷新后收取遗物",
    "seluvis.potion": "领取初始药水",
    "pidia.shop": "从城寨屋顶下行，找到毕迪商店",
    "nepheli.village": "交谈、击败恶兆猎人，回圆桌询问后续",
    "kenneth.throne": "涅斐丽入主后，回访肯尼斯",
    "gostoc.shop": "涅斐丽入主后，查看古龙岩锻造石商品",
    "hyetta.fingerprint": "击败指痕维克，交付指痕葡萄",
    "d.dagger": "交出侵蚀短剑，刷新后查看新房间",
    "fia.dagger": "取得侵蚀短剑并交给 D，回访新房间",
    "goldmask.bridge": "告知柯林金面具位置，刷新后回访",
    "dung.curse": "取得温床诅咒，交谈领取下水道钥匙",
    "boggart.prawn": "买虾并交谈，推进迁往王城外围",
    "alexander.gael": "祭典前回访亚历山大",
    "diallos.manor": "反复回访，推进离开的决定",
    "jarbairn.diallos": "狄亚罗斯事件后交谈，离开刷新",
    "rya.altus": "回访并接受火山官邸传送邀请",
    "tanith.join": "加入官邸，取得客房钥匙与委托信",
    "bernahl.letter": "推进委托后，领取联合入侵书信",
    "millicent.repair": "击败老将欧尼尔，找格威修复金针",
    "enia.burning": "蒙葛特战后，询问树刺与点火",
    "ensha.invasion": "取得秘密符节右半后，击败恩夏入侵",
    "leda.entry": "初遇蕾妲，进入幽影之地后重逢",
    "hornsent.map": "领取地图，听完迁移前后对白",
    "freyja.cross": "初遇弗蕾亚，可召唤舞狮并回访",
    "ansbach.cross": "初遇安帕赫，询问穆尔并报告十字记号",
    "moore.shop": "购买任意物品，与穆尔交谈",
    "thiollier.cross": "初遇休里耶，开启毒药商店",
    "grandam.storeroom": "取得仓库钥匙，打开老妪仓库",
    "ymir.cathedral": "交谈并取得孔洞项链与第一张地图",
    "jolan.meet": "初遇约兰，遗迹回报后继续交谈",
    "queelign.town": "处理庭院中的昆兰入侵",
    "priestess.altar": "交谈，听取贝勒与埃贡的话题"
  };
  function stepHeadline(step) {
    const action = shortActions[step.id] || step.title;
    return (step.questId === "story" ? "" : step.npc + "｜") + step.region + "：" + action;
  }
  if (typeof module !== "undefined") module.exports = { createModel, parseBackup, canComplete, setCompleted, applyChoices, missingPrerequisites, stepHeadline, migrateProfile, orderedQuestRows, reorderQuestCards };
  if (typeof document === "undefined") return;

  const $ = id => document.getElementById(id);
  const node = (tag, cls, text) => {
    const element = document.createElement(tag);
    if (cls) element.className = cls;
    if (text !== undefined) element.textContent = text;
    return element;
  };
  const button = (text, cls) => { const value = node("button", cls, text); value.type = "button"; return value; };
  const catalog = window.JOURNEY_CATALOG, core = window.JourneyCore;
  const storageKey = "sideQuestManager.web.v1";
  const backupKey = storageKey + ".beforeNextStepsV3";
  let model, profiles = [], activeProfileId = "", saveError = "", storageBlocked = false;
  function showMessage(text, error = false) {
    $("profileMessage").textContent = text; $("profileMessage").hidden = !text;
    $("profileMessage").classList.toggle("is-error", error);
  }
  function showToast(text) {
    const toast = $("toast"); toast.textContent = text; toast.hidden = false;
    window.clearTimeout(toastTimer); toastTimer = window.setTimeout(() => { toast.hidden = true; }, 2400);
  }
  try {
    core.validateCatalog(catalog);
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      const saved = JSON.parse(raw);
      if (saved.version !== 1 || saved.format !== "sidequest-manager-web") throw new Error("本地周目格式无效。");
      const parsed = parseBackup(saved, core, true);
      profiles = parsed.profiles.map(profile => createModel(catalog, core, profile).profile);
      activeProfileId = parsed.activeProfileId;
    }
  } catch (error) {
    storageBlocked = true; saveError = "本地记录暂不可用，请导入备份后导出保存";
    showMessage("读取已保存的周目失败，已有记录未覆盖。" + error.message, true);
  }
  model = createModel(catalog, core, profiles.find(profile => profile.id === activeProfileId) || core.newProfile("待创建周目"));
  const expanded = new Set();
  let category = "all", activeNpc = "ranni", currentView = "next", draftChoices = null, choiceIssues = [], prerequisiteTargetId = "", draggedQuestId = "", toastTimer = 0;
  let dragPointerY = null, dragScrollFrame = 0, profileAction = "new";

  function persistLocal() {
    if (storageBlocked) return false;
    try {
      // Save the exact previous record once, before the first write using the revised catalogue.
      const previous = localStorage.getItem(storageKey);
      if (previous && localStorage.getItem(backupKey) === null) localStorage.setItem(backupKey, previous);
      localStorage.setItem(storageKey, JSON.stringify({ format: "sidequest-manager-web", version: 1, activeProfileId, profiles }));
      saveError = ""; return true;
    } catch (error) { saveError = "无法自动保存，请导出本地备份"; return false; }
  }
  function saveModel() {
    const index = profiles.findIndex(profile => profile.id === activeProfileId);
    if (index < 0) return;
    model.profile.updatedAt = new Date().toISOString(); model.profile.catalogVersion = catalog.version; profiles[index] = model.profile;
    persistLocal();
  }
  function renderProfiles() {
    const select = $("localProfile"); select.replaceChildren(); select.disabled = !profiles.length;
    if (!profiles.length) select.append(node("option", "", "请新建或导入周目"));
    profiles.forEach(profile => { const option = node("option", "", profile.name); option.value = profile.id; select.append(option); });
    if (profiles.length) select.value = activeProfileId;
    $("exportProfile").disabled = !profiles.length;
    $("cloneProfile").disabled = !profiles.length;
    $("renameProfile").disabled = !profiles.length;
    $("deleteProfile").disabled = !profiles.length;
    $("localSaveStatus").textContent = saveError;
    $("localSaveStatus").hidden = !saveError;
    $("localSaveStatus").classList.toggle("is-error", !!saveError);
  }
  async function importProfiles(files) {
    if (!files.length) return;
    $("importProfile").disabled = true;
    try {
      const incoming = new Map(); let requestedId = "";
      for (const file of files) {
        const parsed = parseBackup(JSON.parse(await file.text()), core);
        parsed.profiles.forEach(profile => { const imported = createModel(catalog, core, profile).profile; incoming.set(imported.id, imported); });
        requestedId = parsed.activeProfileId;
      }
      const merged = new Map(profiles.map(profile => [profile.id, profile]));
      incoming.forEach((profile, id) => merged.set(id, profile));
      profiles = [...merged.values()]; activeProfileId = requestedId;
      model = createModel(catalog, core, profiles.find(profile => profile.id === activeProfileId));
      draftChoices = null; choiceIssues = []; expanded.clear();
      storageBlocked = false; persistLocal(); renderAll();
      showMessage("");
    } catch (error) { showMessage("未导入，本地原记录未替换：" + error.message, true); }
    finally { $("importProfile").disabled = false; $("profileFile").value = ""; }
  }
  function openProfileDialog(action) {
    profileAction = action;
    $("profileNameTitle").textContent = ({ new: "新建周目", clone: "复制当前周目", rename: "修改周目名称" })[action];
    $("profileName").value = action === "new" ? (profiles.length ? "新周目" : "我的第一周目")
      : action === "clone" ? (model.profile.name.slice(0, 54) + "（副本）") : model.profile.name;
    $("newProfileRoutes").hidden = action !== "new";
    $("profileNameError").hidden = true;
    $("profileNameDialog").showModal(); $("profileName").focus(); $("profileName").select();
  }
  function submitProfileName(event) {
    event.preventDefault();
    const name = $("profileName").value.trim();
    if (!name || name.length > 60) {
      $("profileNameError").textContent = "请输入 1～60 个字符的周目名称。"; $("profileNameError").hidden = false; return;
    }
    let source;
    if (profileAction === "rename") source = { ...model.profile, name };
    else if (profileAction === "clone") source = { ...JSON.parse(JSON.stringify(model.profile)), id: core.createId(), name };
    else {
      source = core.newProfile(name);
      const categories = [$("newProfileBase").checked && "base", $("newProfileDlc").checked && "dlc"].filter(Boolean);
      source.choices = Object.fromEntries(catalog.quests.filter(quest => categories.includes(quest.category)).map(quest => [quest.id, quest.defaultOption]));
    }
    const next = createModel(catalog, core, source);
    next.profile.updatedAt = new Date().toISOString();
    if (profileAction === "rename") profiles[profiles.findIndex(profile => profile.id === activeProfileId)] = next.profile;
    else profiles.push(next.profile);
    model = next; activeProfileId = next.profile.id; storageBlocked = false;
    draftChoices = null; choiceIssues = []; expanded.clear(); persistLocal(); renderAll();
    $("profileNameDialog").close(); showMessage("");
    if (saveError) showToast(saveError);
  }
  function exportProfiles() {
    if (!profiles.length) return;
    const backup = { format: "sidequest-manager-web", version: 1, exportedAt: new Date().toISOString(), activeProfileId, profiles };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob), link = node("a", "");
    link.href = url; link.download = "支线管理备份_" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function deleteActiveProfile() {
    const index = profiles.findIndex(profile => profile.id === activeProfileId);
    if (index < 0) return;
    const removed = profiles[index], previousProfiles = profiles, previousActiveId = activeProfileId, previousModel = model;
    if (!window.confirm(`确定删除周目“${removed.name}”？该周目的进度、分支选择和收集记录都会从当前浏览器移除。此操作无法撤销。`)) return;
    profiles = profiles.filter(profile => profile.id !== removed.id);
    activeProfileId = profiles.length ? profiles[Math.min(index, profiles.length - 1)].id : "";
    model = createModel(catalog, core, profiles.find(profile => profile.id === activeProfileId) || core.newProfile("待创建周目"));
    draftChoices = null; choiceIssues = []; expanded.clear();
    if (!persistLocal()) {
      profiles = previousProfiles; activeProfileId = previousActiveId; model = previousModel;
      renderAll(); showToast(saveError); return;
    }
    renderAll();
    showMessage(profiles.length ? `已删除周目“${removed.name}”。` : `已删除周目“${removed.name}”。可以新建或导入周目。`);
  }

  function switchView(view) {
    currentView = view;
    for (const name of ["next", "npc", "collections"]) $(name + "View").hidden = name !== view;
    document.querySelectorAll("[data-view]").forEach(value => {
      const active = value.dataset.view === view;
      value.classList.toggle("active", active);
      if (active) value.setAttribute("aria-current", "page"); else value.removeAttribute("aria-current");
    });
    document.title = ({ next: "支线进度", npc: "NPC 个人进度", collections: "支线收集表" })[view] + " · 支线管理";
    if (view === "npc") renderPersonal();
  }
  function openPersonal(questId) {
    activeNpc = questId; switchView("npc");
    $("npcView").scrollIntoView({ block: "start", behavior: "smooth" });
  }
  function openPrerequisites(stepId) {
    prerequisiteTargetId = stepId;
    renderPrerequisites();
    if (!$("prerequisiteDialog").open) $("prerequisiteDialog").showModal();
  }
  function conditionItem(step) {
    const item = node("article", "condition-item");
    item.append(node("p", "condition-owner", step.questId === "story" ? "共同条件" : step.npc), node("h3", "", stepHeadline(step)));
    if (step.questId === "story") {
      if (!step.completed && !canComplete(model, step)) item.append(node("p", "condition-pending", "尚缺：" + missingPrerequisites(model, step).map(value => value.title).join("；")));
      else item.append(completeControl(step, "condition"));
    }
    else {
      const jump = button("查看 NPC 个人进度 →", "personal-link");
      jump.addEventListener("click", () => { $("prerequisiteDialog").close(); openPersonal(step.questId); }); item.append(jump);
    }
    if (step.detail || step.warning) {
      const detail = node("details", "condition-detail"); detail.append(node("summary", "", "操作细节"));
      if (step.detail) detail.append(node("p", "step-instructions", step.detail));
      if (step.warning) detail.append(node("p", "step-warning", step.warning)); item.append(detail);
    }
    return item;
  }
  function renderPrerequisites() {
    const step = model.stepMap.get(prerequisiteTargetId); if (!step) return;
    $("prerequisiteTarget").textContent = stepHeadline(step);
    const missing = missingPrerequisites(model, step);
    $("prerequisiteTitle").textContent = missing.length ? "未完成的前置条件" : "前置条件已满足";
    $("prerequisiteList").replaceChildren(...missing.map(conditionItem));
    if (!missing.length) $("prerequisiteList").append(node("p", "conditions-ready", "现在可以回到该任务勾选完成。"));
  }
  function detailsContent(step) {
    const content = node("div", "details-content");
    if (shortActions[step.id]) content.append(node("p", "original-step", "原步骤：" + step.title));
    if (step.detail) content.append(node("p", "step-instructions", step.detail));
    if (step.warning) content.append(node("p", "step-warning", step.warning));
    for (const collection of model.plan.collections.filter(value => value.stepIds.includes(step.id))) {
      const link = button("查看收集表：" + collection.title, "collection-link");
      link.addEventListener("click", () => {
        switchView("collections"); const target = $("collection-" + collection.id); target.open = true;
        target.scrollIntoView({ block: "start", behavior: "smooth" });
      }); content.append(link);
    }
    return content;
  }
  function prerequisitePanel(step) {
    const prerequisites = completionPrerequisites(model, step).map(id => model.stepMap.get(id)).filter(Boolean);
    const satisfied = value => value.completed && canComplete(model, value);
    const missing = prerequisites.filter(value => !satisfied(value));
    if (!missing.length) return null;
    const panel = node("section", "prerequisites has-missing");
    const listFor = values => {
      const list = node("ul", "dependency-list");
      for (const prerequisite of values) {
        const li = node("li", "pending");
        const jump = button(stepHeadline(prerequisite), "dependency-jump");
        jump.addEventListener("click", () => prerequisite.questId === "story" ? openPrerequisites(step.id) : openPersonal(prerequisite.questId));
        li.append(node("span", "dep-label", "!"), jump);
        if (prerequisite.completed) li.append(node("span", "ancestor-pending", "其前置仍未完成"));
        list.append(li);
      }
      return list;
    };
    const heading = node("div", "prerequisite-heading"), inspect = button(`未完成 ${missing.length} 项 →`, "prerequisite-inspect");
    inspect.addEventListener("click", () => openPrerequisites(step.id));
    heading.append(node("strong", "", "前置条件"), inspect); panel.append(heading, listFor(missing));
    return panel;
  }
  function completeControl(step, context) {
    if (!step.completed && !canComplete(model, step)) {
      const blocked = button("", "blocked-control");
      blocked.append(node("span", "blocked-checkbox", ""), node("span", "", "前置未完成"));
      blocked.setAttribute("aria-label", "查看未完成前置：" + step.title); blocked.setAttribute("aria-haspopup", "dialog");
      blocked.addEventListener("click", () => openPrerequisites(step.id)); return blocked;
    }
    const label = node("label", "complete-control"), check = node("input", "");
    check.type = "checkbox"; check.checked = step.completed;
    check.dataset.completeStep = step.id; check.dataset.context = context;
    check.setAttribute("aria-label", (step.completed ? "取消完成：" : "完成：") + step.title);
    label.append(check, node("span", "", step.completed ? "已完成" : "完成这一步")); return label;
  }
  function finishCardDrag() {
    draggedQuestId = ""; dragPointerY = null;
    window.cancelAnimationFrame(dragScrollFrame); dragScrollFrame = 0;
    document.querySelectorAll(".quest-card.is-dragging,.quest-card.drop-before,.quest-card.drop-after").forEach(card => card.classList.remove("is-dragging", "drop-before", "drop-after"));
  }
  function scrollWhileDragging() {
    if (!draggedQuestId) return;
    const edge = Math.min(100, window.innerHeight / 4);
    if (dragPointerY !== null) {
      const speed = dragPointerY < edge ? -Math.min(22, (edge - dragPointerY) / edge * 22)
        : dragPointerY > window.innerHeight - edge ? Math.min(22, (dragPointerY - window.innerHeight + edge) / edge * 22) : 0;
      if (speed) window.scrollBy(0, speed);
    }
    dragScrollFrame = window.requestAnimationFrame(scrollWhileDragging);
  }
  function moveCard(draggedId, targetId, after) {
    try {
      const result = reorderQuestCards(model, draggedId, targetId, after);
      if (result.changed) {
        const scrollTop = window.scrollY;
        saveModel(); renderQuests(); renderProfiles(); window.scrollTo(0, scrollTop);
      }
      if (saveError) showToast(saveError);
      else if (result.adjusted) showToast("已按前置关系保留可行顺序。");
      else if (result.changed && result.movedIds.length > 1) showToast(`已和 ${result.movedIds.length - 1} 条相关支线一起移动。`);
      else if (result.changed) showToast("顺序已保存。");
    } catch (error) { showToast(error.message); }
  }
  function cardFor(row, canReorder) {
    const { quest, next: step, steps, done } = row;
    const card = node("article", "quest-card"), body = node("div", "card-body"), heading = node("div", "card-heading"); card.dataset.npcId = quest.id;
    if (canReorder) {
      card.draggable = true; card.classList.add("is-draggable");
      let startedOnControl = false;
      card.addEventListener("pointerdown", event => { startedOnControl = !!event.target.closest("button,input,a,label,summary,details"); });
      card.addEventListener("dragstart", event => {
        if (startedOnControl) { event.preventDefault(); return; }
        draggedQuestId = quest.id; dragPointerY = event.clientY;
        event.dataTransfer.effectAllowed = "move"; event.dataTransfer.setData("text/plain", quest.id);
        card.classList.add("is-dragging"); scrollWhileDragging();
      });
      card.addEventListener("dragend", finishCardDrag);
      card.addEventListener("dragover", event => {
        if (!draggedQuestId || draggedQuestId === quest.id) return;
        event.preventDefault(); event.dataTransfer.dropEffect = "move";
        const rect = card.getBoundingClientRect(), after = event.clientY >= rect.top + rect.height / 2;
        card.classList.toggle("drop-after", after); card.classList.toggle("drop-before", !after);
      });
      card.addEventListener("dragleave", event => { if (!card.contains(event.relatedTarget)) card.classList.remove("drop-before", "drop-after"); });
      card.addEventListener("drop", event => {
        if (!draggedQuestId || draggedQuestId === quest.id) return;
        event.preventDefault();
        const rect = card.getBoundingClientRect(), after = event.clientY >= rect.top + rect.height / 2;
        const sourceId = draggedQuestId; finishCardDrag();
        moveCard(sourceId, quest.id, after);
      });
    }
    heading.append(node("span", "npc-mark", quest.name[0]), node("h3", "", quest.name));
    if (canReorder) {
      const grip = node("span", "card-drag-handle", "⠿"); grip.title = "拖动卡片调整顺序"; grip.setAttribute("aria-hidden", "true"); heading.append(grip);
    }
    heading.append(node("span", "card-progress", `${done} / ${steps.length} 步`));
    const actions = node("div", "card-actions"), personal = button("个人进度 →", "personal-link"); personal.dataset.openNpc = quest.id;
    actions.append(completeControl(step, "card"), personal);
    body.append(heading, node("h4", "step-title", stepHeadline(step)));
    const prerequisites = prerequisitePanel(step); if (prerequisites) body.append(prerequisites);
    body.append(actions);
    const details = node("details", "card-details"); details.open = expanded.has(step.id);
    details.append(node("summary", "", "操作细节"), detailsContent(step));
    details.addEventListener("toggle", () => { if (details.isConnected) { if (details.open) expanded.add(step.id); else expanded.delete(step.id); } });
    card.append(body, details); return card;
  }
  function renderQuests() {
    const pendingRows = model.rows.filter(row => row.next);
    $("nextCount").textContent = pendingRows.length; $("allCount").textContent = pendingRows.length;
    $("baseCount").textContent = pendingRows.filter(row => row.quest.category === "base").length;
    $("dlcCount").textContent = pendingRows.filter(row => row.quest.category === "dlc").length;
    const query = $("questSearch").value.trim().toLowerCase(), inCategory = row => category === "all" || row.quest.category === category;
    const matches = (row, step) => `${row.quest.name} ${step.title} ${step.region}`.toLowerCase().includes(query);
    const allOrdered = orderedQuestRows(model), visible = allOrdered.filter(row => inCategory(row) && matches(row, row.next));
    const finished = model.rows.filter(row => row.steps.length && !row.next && inCategory(row) && (!query || row.steps.some(step => matches(row, step))));
    const canReorder = profiles.length > 0 && category === "all" && !query;
    const grid = $("questGrid"); grid.replaceChildren(...visible.map(row => cardFor(row, canReorder)));
    if (!visible.length) grid.append(node("p", "empty-state", profiles.length ? "没有匹配的未完成步骤。" : "点击“新建周目”开始，或导入已有周目备份。"));
    const inconsistent = model.plan.steps.filter(step => step.completed && !canComplete(model, step));
    const warning = $("progressWarning"); warning.hidden = !inconsistent.length; warning.replaceChildren();
    if (inconsistent.length) {
      warning.append(node("strong", "", "以下已勾选步骤仍缺少前置："));
      const list = node("ul", "progress-warning-list");
      for (const step of inconsistent) {
        const item = node("li", ""), inspect = button(stepHeadline(step) + " →", "progress-warning-link");
        inspect.setAttribute("aria-haspopup", "dialog");
        inspect.setAttribute("aria-label", "查看未完成前置：" + stepHeadline(step));
        inspect.addEventListener("click", () => openPrerequisites(step.id));
        item.append(inspect, node("div", "", "尚缺：" + missingPrerequisites(model, step).map(stepHeadline).join("；")));
        list.append(item);
      }
      warning.append(list);
    }
    $("finishedCount").textContent = finished.length; const list = $("finishedList"); list.replaceChildren();
    for (const row of finished) {
      const item = button("", "finished-item"); item.dataset.openNpc = row.quest.id;
      item.append(node("span", "", "✓"), node("strong", "", row.quest.name + "支线已完成"), node("span", "", "个人进度 →")); list.append(item);
    }
    if (!finished.length) list.append(node("p", "step-instructions", "当前范围没有已完成的支线。"));
  }
  function chooseRoute(questId, optionId) {
    if (!profiles.length) return;
    const choices = { ...(draftChoices || model.profile.choices), [questId]: optionId };
    choiceIssues = applyChoices(model, choices); draftChoices = choiceIssues.length ? choices : null;
    if (choiceIssues.length) renderPersonal(); else { saveModel(); renderAll(); }
  }
  function renderPersonal() {
    $("npcPicker").value = activeNpc;
    const detail = $("npcDetail"); detail.replaceChildren();
    if (!profiles.length) { detail.append(node("p", "empty-state", "新建或导入周目后，可在这里查看个人进度和选择支线结局。")); return; }
    const conflict = $("choiceConflict"); conflict.replaceChildren(); conflict.hidden = !choiceIssues.length;
    if (choiceIssues.length) {
      conflict.append(node("strong", "", "这次分支选择尚未应用，当前进度仍按原分支展示。"));
      for (const issue of choiceIssues) {
        conflict.append(node("p", "", issue.message));
        for (const fix of issue.fixes) { const action = button(fix.label, "secondary-button"); action.addEventListener("click", () => chooseRoute(fix.questId, fix.optionId)); conflict.append(action); }
      }
      const cancel = button("取消这次分支修改", "secondary-button");
      cancel.addEventListener("click", () => { draftChoices = null; choiceIssues = []; renderPersonal(); }); conflict.append(cancel);
    }
    const quest = model.catalog.quests.find(value => value.id === activeNpc), row = model.rows.find(value => value.quest.id === activeNpc);
    const steps = row?.steps || [];
    const heading = node("div", "personal-heading");
    heading.append(node("h3", "", quest?.name || "NPC 个人进度"), node("span", "card-progress", `${steps.filter(step => step.completed).length} / ${steps.length} 步完成`)); detail.append(heading);
    if (quest) {
      const fieldset = node("fieldset", "route-options"), options = node("div", "route-option-list");
      fieldset.append(node("legend", "", "本周目分支 / 结局"), options);
      const currentChoice = (draftChoices || model.profile.choices)[quest.id] || "skip";
      for (const option of [...quest.options, { id: "skip", label: "本周目不安排", description: "" }]) {
        const label = node("label", "route-option"), radio = node("input", ""), copy = node("span", "");
        radio.type = "radio"; radio.name = "npc-route"; radio.value = option.id; radio.checked = currentChoice === option.id;
        label.classList.toggle("is-current", radio.checked);
        radio.addEventListener("change", () => chooseRoute(quest.id, option.id));
        copy.append(node("strong", "", option.label)); if (option.description) copy.append(node("span", "", option.description));
        label.append(radio, copy); options.append(label);
      } detail.append(fieldset);
    }
    const list = node("div", "flow-list");
    for (const [index, step] of steps.entries()) {
      const item = node("article", "flow-row" + (step.completed ? " completed" : "")), copy = node("div", "personal-step-copy");
      copy.append(node("p", "step-region", `第 ${String(index + 1).padStart(2, "0")} 步`), node("h4", "step-title", stepHeadline(step)));
      const prerequisites = prerequisitePanel(step); if (prerequisites) copy.append(prerequisites);
      const extra = node("details", ""); extra.append(node("summary", "", "操作细节"), detailsContent(step)); copy.append(extra);
      item.append(completeControl(step, "personal"), copy); list.append(item);
    }
    if (!steps.length) list.append(node("p", "empty-state", "当前周目未安排这条支线。")); detail.append(list);
  }
  function renderCollections() {
    const opened = new Set([...$("collectionList").querySelectorAll("details[open]")].map(value => value.id)); $("collectionList").replaceChildren();
    for (const collection of model.plan.collections) {
      const group = node("details", "collection-group"); group.id = "collection-" + collection.id; group.open = opened.has(group.id);
      const summary = node("summary", "", collection.title);
      summary.append(node("span", "collection-completion", `已取得 ${collection.items.filter(item => item.collected).length} / ${collection.items.length}`));
      group.append(summary, node("p", "collection-description", collection.description));
      const wrap = node("div", "collection-table-wrap"), table = node("table", "collection-table"), head = node("thead", ""), tr = node("tr", ""), tbody = node("tbody", "");
      for (const text of ["已取得", "道具 / 来源", "地点", "取得方式与注意事项"]) { const th = node("th", "", text); th.scope = "col"; tr.append(th); } head.append(tr);
      for (const item of collection.items) {
        const row = node("tr", ""), content = node("td", "", item.detail); if (item.warning) content.append(node("p", "step-warning", item.warning));
        const checkCell = node("td", ""), check = node("input", "");
        check.type = "checkbox"; check.checked = item.collected; check.dataset.collectItem = item.id;
        check.setAttribute("aria-label", "已取得：" + item.name); checkCell.append(check);
        row.append(checkCell, node("td", "", item.name), node("td", "", item.region), content); tbody.append(row);
      }
      table.append(head, tbody); wrap.append(table); group.append(wrap); $("collectionList").append(group);
    }
    if (!model.plan.collections.length) $("collectionList").append(node("p", "empty-state", profiles.length ? "当前选择尚无收集表。" : "新建或导入周目后显示对应收集表。"));
  }
  function renderAll() { renderProfiles(); renderQuests(); renderPersonal(); renderCollections(); }
  for (const [title, quests] of [["本体", model.catalog.quests.filter(quest => quest.category === "base")], ["黄金树幽影", model.catalog.quests.filter(quest => quest.category === "dlc")]]) {
    const group = node("optgroup", ""); group.label = title;
    quests.forEach(quest => { const option = node("option", "", quest.name); option.value = quest.id; group.append(option); }); $("npcPicker").append(group);
  }
  document.querySelectorAll("[data-view]").forEach(value => value.addEventListener("click", () => switchView(value.dataset.view)));
  document.querySelectorAll("[data-back]").forEach(value => value.addEventListener("click", () => switchView("next")));
  document.querySelector(".brand").addEventListener("click", event => { event.preventDefault(); switchView("next"); window.scrollTo({ top: 0, behavior: "smooth" }); });
  document.querySelectorAll("[data-category]").forEach(value => value.addEventListener("click", () => {
    category = value.dataset.category;
    document.querySelectorAll("[data-category]").forEach(item => { const active = item.dataset.category === category; item.classList.toggle("active", active); item.setAttribute("aria-pressed", String(active)); }); renderQuests();
  }));
  $("questSearch").addEventListener("input", renderQuests);
  $("newProfile").addEventListener("click", () => openProfileDialog("new"));
  $("cloneProfile").addEventListener("click", () => openProfileDialog("clone"));
  $("renameProfile").addEventListener("click", () => openProfileDialog("rename"));
  $("deleteProfile").addEventListener("click", deleteActiveProfile);
  $("profileNameForm").addEventListener("submit", submitProfileName);
  $("cancelProfileName").addEventListener("click", () => $("profileNameDialog").close());
  $("importProfile").addEventListener("click", () => $("profileFile").click());
  $("profileFile").addEventListener("change", () => importProfiles([...$("profileFile").files]));
  $("exportProfile").addEventListener("click", exportProfiles);
  $("backToTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => { $("backToTop").hidden = window.scrollY < 360; }, { passive: true });
  $("localProfile").addEventListener("change", () => {
    const profile = profiles.find(value => value.id === $("localProfile").value); if (!profile) return;
    activeProfileId = profile.id; model = createModel(catalog, core, profile);
    draftChoices = null; choiceIssues = []; expanded.clear(); persistLocal(); renderAll();
    showMessage("");
  });
  $("npcPicker").addEventListener("change", () => { activeNpc = $("npcPicker").value; renderPersonal(); });
  $("closePrerequisites").addEventListener("click", () => $("prerequisiteDialog").close());
  document.addEventListener("dragover", event => { if (draggedQuestId) dragPointerY = event.clientY; });
  document.addEventListener("dragleave", event => { if (!event.relatedTarget) dragPointerY = null; });
  document.addEventListener("drop", finishCardDrag);
  window.addEventListener("blur", finishCardDrag);
  $("questGrid").addEventListener("dragover", event => {
    if (draggedQuestId) event.preventDefault();
  });
  $("questGrid").addEventListener("drop", event => {
    if (!draggedQuestId || event.target.closest(".quest-card")) return;
    const cards = [...$("questGrid").querySelectorAll(".quest-card")];
    if (!cards.length) return;
    event.preventDefault();
    const target = cards.reduce((best, card) => {
      const rect = card.getBoundingClientRect();
      const distance = Math.hypot(event.clientX - rect.left - rect.width / 2, event.clientY - rect.top - rect.height / 2);
      return !best || distance < best.distance ? { card, rect, distance } : best;
    }, null);
    const sourceId = draggedQuestId; finishCardDrag();
    moveCard(sourceId, target.card.dataset.npcId, event.clientY >= target.rect.top + target.rect.height / 2);
  });
  document.addEventListener("click", event => { const target = event.target.closest("[data-open-npc]"); if (target) openPersonal(target.dataset.openNpc); });
  document.addEventListener("change", event => {
    const collectionInput = event.target.closest("[data-collect-item]");
    if (collectionInput) {
      if (!profiles.length) return;
      core.setCollected(catalog, model.profile, collectionInput.dataset.collectItem, collectionInput.checked);
      refreshModel(model); saveModel(); renderAll(); return;
    }
    const input = event.target.closest("[data-complete-step]"); if (!input) return;
    const step = model.stepMap.get(input.dataset.completeStep), completed = input.checked, context = input.dataset.context;
    const oldTop = input.closest(".quest-card")?.getBoundingClientRect().top;
    if (!setCompleted(model, step.id, completed)) { input.checked = step.completed; return; }
    saveModel();
    renderAll();
    if ($("prerequisiteDialog").open) renderPrerequisites();
    const next = model.rows.find(row => row.quest.id === step.questId)?.next;
    $("progressStatus").textContent = completed ? `已完成：${step.title}。${next ? "下一步：" + next.title : ""}` : `已取消完成：${step.title}`;
    if (context === "condition") {
      ($("prerequisiteList").querySelector("input:not(:checked)") || $("closePrerequisites")).focus({ preventScroll: true });
    } else if (context === "card") {
      const card = [...$("questGrid").querySelectorAll("[data-npc-id]")].find(value => value.dataset.npcId === step.questId);
      if (card && oldTop !== undefined) { window.scrollBy(0, card.getBoundingClientRect().top - oldTop); (card.querySelector("input:not(:disabled)") || card.querySelector("button")).focus({ preventScroll: true }); }
    } else if (currentView === "npc") {
      [...$("npcDetail").querySelectorAll("[data-complete-step]")].find(value => value.dataset.completeStep === step.id)?.focus({ preventScroll: true });
    }
  });
  renderAll();
  const offlineStatus = $("offlineStatus");
  if (window.isSecureContext && "serviceWorker" in navigator && /^https?:$/.test(window.location.protocol)) {
    navigator.serviceWorker.register("./service-worker.js", { scope: "./" })
      .then(() => navigator.serviceWorker.ready)
      .then(() => { offlineStatus.textContent = "离线缓存已就绪"; offlineStatus.classList.add("ready"); })
      .catch(() => { offlineStatus.textContent = "离线缓存未就绪"; });
  } else offlineStatus.textContent = "本机浏览器保存";
})();
