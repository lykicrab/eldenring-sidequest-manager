"use strict";
(() => {
  const own = (value, key) => Object.prototype.hasOwnProperty.call(value || {}, key);
  const distinct = values => [...new Set(values)];
  const byId = (left, right) => left < right ? -1 : left > right ? 1 : 0;
  const id = () => {
    if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") return globalThis.crypto.randomUUID().replaceAll("-", "");
    return Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
  };
  const read = (source, key, fallback) => source && (own(source, key) || own(source, key[0].toUpperCase() + key.slice(1)))
    ? (own(source, key) ? source[key] : source[key[0].toUpperCase() + key.slice(1)]) : fallback;
  const asArray = value => Array.isArray(value) ? value : [];

  function validateCatalog(catalog) {
    if (!catalog || !Array.isArray(catalog.quests) || !Array.isArray(catalog.milestones) || !Array.isArray(catalog.collections))
      throw new Error("支线规划数据格式无效。");
    const quests = new Map(catalog.quests.map(quest => [quest.id, quest]));
    if (quests.size !== catalog.quests.length) throw new Error("NPC 分支 ID 重复。");
    const stepIds = new Set();
    for (const quest of catalog.quests) {
      if (!quest.id || !quest.name || !quest.options?.length || new Set(quest.options.map(option => option.id)).size !== quest.options.length ||
          !quest.options.some(option => option.id === quest.defaultOption)) throw new Error("NPC 分支定义无效：" + (quest.id || "未知"));
      for (const step of quest.steps || []) {
        if (!step.id || !step.title || stepIds.has(step.id)) throw new Error("步骤 ID 重复或标题为空：" + (step.id || "未知"));
        stepIds.add(step.id);
        if ((step.options || []).some(optionId => !quest.options.some(option => option.id === optionId))) throw new Error("步骤引用了不存在的分支：" + step.id);
      }
      for (const requirement of quest.options.flatMap(option => option.requirements || [])) {
        const target = quests.get(requirement.questId);
        if (!target || !requirement.optionIds?.length || requirement.optionIds.some(optionId => !target.options.some(option => option.id === optionId)))
          throw new Error("NPC 前置定义无效：" + quest.id + " → " + requirement.questId);
      }
    }
    for (const step of catalog.milestones) {
      if (!step.id || !step.title || stepIds.has(step.id)) throw new Error("步骤 ID 重复或标题为空：" + (step.id || "未知"));
      stepIds.add(step.id);
    }
    for (const step of [...catalog.milestones, ...catalog.quests.flatMap(quest => quest.steps || [])])
      if ([...(step.needs || []), ...(step.after || [])].some(dependency => !stepIds.has(dependency))) throw new Error("步骤前置不存在：" + step.id);
    const collectionIds = new Set(), itemIds = new Set();
    const validRoute = route => {
      const quest = quests.get(route.questId);
      return !!quest && route.optionIds?.length > 0 && route.optionIds.every(optionId => quest.options.some(option => option.id === optionId));
    };
    for (const collection of catalog.collections) {
      if (!collection.id || collectionIds.has(collection.id) || !collection.title || !collection.routes?.length || !collection.items?.length ||
          !collection.stepIds?.length || collection.stepIds.some(stepId => !stepIds.has(stepId)) ||
          new Set(collection.routes.map(route => route.questId)).size !== collection.routes.length ||
          collection.routes.some(route => !Number.isInteger(route.count) || route.count <= 0 || !validRoute(route)) ||
          collection.routes.reduce((sum, route) => sum + route.count, 0) > collection.items.length) throw new Error("收集表定义无效：" + collection.id);
      collectionIds.add(collection.id);
      for (const item of collection.items) {
        if (!item.id || itemIds.has(item.id) || !item.name || !item.region || !item.detail || (item.when || []).some(route => !validRoute(route)))
          throw new Error("收集条目定义无效：" + item.id);
        itemIds.add(item.id);
      }
    }
    return true;
  }

  function newProfile(name = "我的第一周目") {
    return { id: id(), name, choices: {}, completed: [], collected: [], updatedAt: new Date().toISOString(), catalogVersion: 1 };
  }

  function normalizeProfile(source) {
    if (!source || typeof source !== "object" || Array.isArray(source)) throw new Error("计划文件格式无效。");
    const choices = read(source, "choices", {}), completed = read(source, "completed", []), collected = read(source, "collected", []);
    const name = String(read(source, "name", "")).trim();
    const profileId = String(read(source, "id", ""));
    if (!/^[a-f\d]{32}$/i.test(profileId) || !name || name.length > 60 || !choices || typeof choices !== "object" || Array.isArray(choices) ||
        !Array.isArray(completed) || !Array.isArray(collected)) throw new Error("计划名称、ID 或进度格式无效。");
    return {
      id: profileId.toLowerCase(), name,
      choices: Object.fromEntries(Object.entries(choices).filter(([key, value]) => typeof key === "string" && typeof value === "string")),
      completed: distinct(completed.filter(value => typeof value === "string")),
      collected: distinct(collected.filter(value => typeof value === "string")),
      updatedAt: String(read(source, "updatedAt", new Date().toISOString())),
      catalogVersion: Number(read(source, "catalogVersion", 1)) || 1
    };
  }

  function generate(catalog, profile) {
    const choices = profile.choices || {};
    const issues = [];
    const chosen = [];
    const quests = new Map(catalog.quests.map(quest => [quest.id, quest]));
    for (const [questId, optionId] of Object.entries(choices)) {
      if (optionId === "skip") continue;
      const quest = quests.get(questId), option = quest?.options.find(value => value.id === optionId);
      if (!quest || !option) issues.push({ message: "原计划中的分支已不存在：" + questId + " / " + optionId + "。请重新选择。", fixes: [{ questId, optionId: "skip", label: "移除失效选择" }] });
      else chosen.push({ quest, option });
    }
    function requireChoice(questId, optionIds, reason) {
      if (optionIds.includes(choices[questId])) return;
      const quest = quests.get(questId);
      const fixes = optionIds.map(optionId => {
        const option = quest.options.find(value => value.id === optionId);
        return { questId, optionId, label: quest.name + "：" + option.label };
      });
      if (!issues.some(issue => issue.message === reason)) issues.push({ message: reason, fixes });
    }
    for (const { option } of chosen)
      for (const requirement of option.requirements || []) requireChoice(requirement.questId, requirement.optionIds, requirement.reason);

    const endings = chosen.filter(entry => entry.option.ending);
    if (endings.length > 1) issues.push({
      message: "一个周目的最终结局只能选择一个。其他 NPC 可改为完成支线、保留结局道具。",
      fixes: endings.map(entry => ({ questId: entry.quest.id, optionId: entry.quest.defaultOption,
        label: entry.quest.name + "改为：" + entry.quest.options.find(option => option.id === entry.quest.defaultOption).label }))
    });
    const hyetta = choices.hyetta;
    const cleanse = hyetta === "cleanse" || (hyetta === "accept" && endings.some(entry => entry.option.ending !== "frenzy"));
    if (cleanse) requireChoice("millicent", ["assist"], "海妲线接受癫火后要走其他结局，需要米莉森的协助分支取得金针，并在龙王竞技场使用米凯拉的针。");

    const all = new Map();
    for (const step of catalog.milestones) all.set(step.id, { step, questId: "story", npc: "主线 / 共同前置" });
    for (const quest of catalog.quests)
      for (const step of quest.steps) all.set(step.id, { step, questId: quest.id, npc: quest.name });
    const included = new Map();
    function add(stepId) {
      if (included.has(stepId)) return;
      const node = all.get(stepId);
      if (!node) throw new Error("步骤定义不存在：" + stepId);
      if (node.questId !== "story" && (!own(choices, node.questId) || choices[node.questId] === "skip" ||
          (node.step.options?.length && !node.step.options.includes(choices[node.questId])))) {
        const quest = quests.get(node.questId);
        const fixes = quest.options.filter(option => !node.step.options?.length || node.step.options.includes(option.id))
          .sort((left, right) => Number(right.id === quest.defaultOption) - Number(left.id === quest.defaultOption))
          .map(option => ({ questId: quest.id, optionId: option.id, label: quest.name + "：" + option.label }));
        issues.push({ message: "步骤“" + node.step.title + "”需要先选择兼容的 " + node.npc + " 分支。", fixes });
        return;
      }
      included.set(stepId, node);
      for (const dependency of node.step.needs || []) add(dependency);
    }
    for (const { quest, option } of chosen)
      for (const step of quest.steps.filter(value => !value.options?.length || value.options.includes(option.id))) add(step.id);
    if (cleanse && choices.millicent === "assist") add("story.cleanse");
    if (chosen.some(entry => entry.option.ending || ["ranni", "fia", "goldmask", "dung"].includes(entry.quest.id))) add("story.final");

    const remaining = new Map();
    for (const [stepId, node] of included) remaining.set(stepId,
      new Set([...node.step.needs || [], ...node.step.after || []].filter(dependency => included.has(dependency))));
    const steps = [];
    while (remaining.size) {
      const ready = [...remaining].filter(([, dependencies]) => dependencies.size === 0).map(([stepId]) => included.get(stepId))
        .sort((left, right) => left.step.order - right.step.order || byId(left.step.id, right.step.id))[0];
      if (!ready) {
        issues.push({ message: "所选路线存在循环前置，无法生成可靠的顺序表。请保留当前选择并反馈路线组合。", fixes: [] });
        break;
      }
      const step = ready.step;
      steps.push({ id: step.id, questId: ready.questId, npc: ready.npc, title: step.title, detail: step.detail,
        region: step.region, warning: step.warning, prerequisites: distinct([...(step.needs || []), ...(step.after || [])].filter(dependency => included.has(dependency))),
        completed: profile.completed.includes(step.id) });
      remaining.delete(step.id);
      for (const dependencies of remaining.values()) dependencies.delete(step.id);
    }

    const uniqueIssues = [...new Map(issues.map(issue => [issue.message, issue])).values()];
    const collections = uniqueIssues.length ? [] : catalog.collections.map(collection => {
      const routes = collection.routes.filter(route => (route.optionIds || []).includes(choices[route.questId]));
      const items = collection.items.filter(item => (item.when || []).every(route => route.optionIds.includes(choices[route.questId])))
        .map(item => ({ id: item.id, name: item.name, region: item.region, detail: item.detail, warning: item.warning, collected: profile.collected.includes(item.id) }));
      return { id: collection.id, title: collection.title, description: collection.description, source: collection.source,
        requiredCount: routes.reduce((sum, route) => sum + route.count, 0), questIds: routes.map(route => route.questId),
        npcs: routes.map(route => quests.get(route.questId).name), stepIds: collection.stepIds.filter(stepId => included.has(stepId)), items };
    }).filter(collection => collection.questIds.length > 0);
    return { issues: uniqueIssues, steps: uniqueIssues.length ? [] : steps, selectedCount: chosen.length, cleansesFrenzy: cleanse, collections };
  }

  function setCollected(catalog, profile, itemId, collected) {
    const plan = generate(catalog, profile);
    if (plan.issues.length || !plan.collections.some(collection => collection.items.some(item => item.id === itemId)))
      throw new Error("该道具不在当前有效计划的收集表中。");
    const values = new Set(profile.collected);
    if (collected) values.add(itemId); else values.delete(itemId);
    profile.collected = [...values];
  }

  globalThis.JourneyCore = Object.freeze({ validateCatalog, newProfile, normalizeProfile, generate, setCollected, createId: id });
})();
