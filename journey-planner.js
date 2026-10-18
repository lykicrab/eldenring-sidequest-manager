/* Browser UI for NPC route planning. */
(() => {
  "use strict";
  let state = null, activeNpc = "", group = "base", tab = "choose", pending = false, nameCommand = "new";
  const $ = id => document.getElementById(id);
  const el = (tag, cls, text) => { const n=document.createElement(tag); if(cls)n.className=cls; if(text!==undefined)n.textContent=text; return n; };
  function act(command, data={}) {
    if(pending || !state)return;
    pending=true; setBusy();
    const result=window.WebJourney?.run(command,{profileId:state.profile.id,...data});
    if(!result){pending=false;setBusy();return showToast("网页计划模块尚未加载，请刷新页面。");}
    receive(result);
  }
  function setBusy(){
    document.querySelectorAll("[data-plan-write]").forEach(n=>n.disabled=pending||!state);
    const status=$("planSaveStatus");
    status.textContent=pending?"正在保存…":state?.warning?"本地保存不可用 · 请导出备份":state?"自动保存到本浏览器 · "+state.savedAt:"正在加载 NPC 目录…";
    status.title=state?.warning||"";
  }
  function choice(q){return state.profile.choices[q.id]||"skip";}
  function option(q){return q.options.find(o=>o.id===choice(q));}
  function button(text, fn, cls="plan-button"){
    const b=el("button",cls,text);b.type="button";b.dataset.planWrite="";b.addEventListener("click",fn);return b;
  }
  function receive(message){
    if(message.type!=="journeyPlanner")return;
    const scrolls=["npcList","npcDetail","planStepList","collectionList"].map(id=>[id,$(id).scrollTop]);
    const focus=document.activeElement?.id;
    state=message;pending=false;
    renderProfiles();renderNpcs();renderIssues();renderPlan();renderCollections();setBusy();
    scrolls.forEach(([id,top])=>$(id).scrollTop=top);
    if(focus)document.getElementById(focus)?.focus({preventScroll:true});
    $("planDataNotice").textContent=state.catalog.notice;
    $("planLoadWarning").textContent=state.warning||"";$("planLoadWarning").hidden=!state.warning;
    if(message.error)showToast(message.error);
  }
  function renderProfiles(){
    const select=$("planProfile");select.replaceChildren();
    state.profiles.forEach(p=>{const o=el("option","",p.name);o.value=p.id;select.append(o);});
    select.value=state.profile.id;
  }
  function switchTab(value){
    tab=value;
    document.querySelectorAll("[data-plan-tab]").forEach(b=>{b.classList.toggle("active",b.dataset.planTab===tab);b.setAttribute("aria-selected",String(b.dataset.planTab===tab));});
    $("npcChooser").hidden=tab!=="choose";$("planChecklist").hidden=tab!=="plan";$("planCollections").hidden=tab!=="collections";
    if(state){renderPlan();renderCollections();}
  }
  function renderNpcs(){
    const query=$("npcSearch").value.trim().toLowerCase();
    const all=state.catalog.quests;
    const visible=all.filter(q=>q.category===group&&(!query||`${q.name} ${q.summary}`.toLowerCase().includes(query)));
    if(!visible.some(q=>q.id===activeNpc))activeNpc=visible[0]?.id||"";
    $("npcList").replaceChildren();
    for(const q of visible){
      const b=el("button","npc-list-row"+(q.id===activeNpc?" active":""));b.type="button";
      const selected=option(q);const badge=el("span","npc-choice-badge"+(selected?" selected":""),selected?"✓":"○");
      const copy=el("span","npc-list-copy");copy.append(el("strong","",q.name),el("span","",selected?selected.label:"本周目不安排"));
      b.append(badge,copy);b.addEventListener("click",()=>{activeNpc=q.id;renderNpcs();$("npcDetail").scrollTop=0;});$("npcList").append(b);
    }
    if(!visible.length)$("npcList").append(el("p","plan-empty","没有匹配的人物。"));
    const selectedCount=all.filter(q=>q.category===group&&choice(q)!=="skip").length;
    $("npcCount").textContent=`${group==="base"?"本体":"黄金树幽影"} ${selectedCount} / ${all.filter(q=>q.category===group).length} 位已选`;
    document.querySelectorAll("[data-npc-group]").forEach(b=>b.classList.toggle("active",b.dataset.npcGroup===group));
    const detail=$("npcDetail");detail.replaceChildren();
    const q=visible.find(q=>q.id===activeNpc);
    if(!q){detail.append(el("p","plan-empty","选择 NPC，查看分支和影响。"));return;}
    detail.append(el("h2","",q.name),el("p","npc-summary",q.summary));
    const opts=[{id:"skip",label:"本周目不安排",description:"不为这位 NPC 生成步骤；若其他目标需要，会提示前置。"},...q.options];
    for(const o of opts){
      const label=el("label","npc-option"+(choice(q)===o.id?" selected":""));
      const input=el("input");input.type="radio";input.name="npcOption";input.value=o.id;input.checked=choice(q)===o.id;input.dataset.planWrite="";input.id="npcOption-"+o.id;
      input.addEventListener("change",()=>act("choose",{questId:q.id,optionId:o.id}));
      const text=el("span");text.append(el("strong","",o.label));if(o.description)text.append(el("span","",o.description));
      label.append(input,text);detail.append(label);
    }
    const selected=option(q);
    if(selected){
      const collections=(state.plan.collections||[]).filter(c=>c.questIds.includes(q.id));
      if(collections.length)detail.append(button(`查看这条支线的收集表（${collections.length}类）`,()=>showCollections(q.name),"step-collection-link"));
      if(selected.requirements?.length){const box=el("div","npc-dependency");box.append(el("strong","","关联影响"));selected.requirements.forEach(r=>box.append(el("p","",r.reason)));detail.append(box);}
      const preview=el("details","npc-preview");preview.append(el("summary","","查看这条分支的步骤"));const list=el("ol");
      q.steps.filter(s=>!s.options.length||s.options.includes(selected.id)).forEach(s=>{const li=el("li","",s.title);if(s.detail)li.append(el("p","step-instructions",s.detail));if(s.warning)li.append(el("p","step-warning",s.warning));list.append(li);});preview.append(list);detail.append(preview);
    }
    const source=el("details","npc-source");source.append(el("summary","","数据依据与范围"),el("p","",q.source));detail.append(source);setBusy();
  }
  function renderIssues(){
    const container=$("planIssues");container.replaceChildren();container.hidden=!state.plan.issues.length;
    if(!container.hidden){container.append(el("strong","","先处理这些选择，才能生成完整顺序表"));
      state.plan.issues.forEach(issue=>{const row=el("div","plan-issue");row.append(el("p","",issue.message));
        issue.fixes.forEach(f=>row.append(button(f.label,()=>act("choose",{questId:f.questId,optionId:f.optionId}),"plan-fix")));container.append(row);});}
  }
  function renderPlan(){
    const steps=state.plan.steps, done=steps.filter(s=>s.completed).length;
    $("planProgress").textContent=`${state.plan.selectedCount} 位 NPC · ${done} / ${steps.length} 步完成`;
    $("planProgressBar").max=Math.max(1,steps.length);$("planProgressBar").value=done;
    $("planTabCount").textContent=steps.length?`顺序计划 ${done}/${steps.length}`:"顺序计划";
    const next=steps.find(s=>!s.completed);
    $("planNext").textContent=state.plan.issues.length?"选择存在冲突，处理后生成计划。":next?`接下来：${next.npc} · ${next.title}`:steps.length?"当前计划已全部勾选完成。":"先选择想完成的 NPC 和分支。";
    const query=$("planSearch").value.trim().toLowerCase(),filter=$("planFilter").value;
    const open=new Set([...$("planStepList").querySelectorAll("details[open]")].map(n=>n.dataset.step));
    $("planStepList").replaceChildren();
    const doneIds=new Set(steps.filter(s=>s.completed).map(s=>s.id));
    const inconsistent=steps.filter(s=>s.completed&&s.prerequisites.some(id=>!doneIds.has(id)));
    $("planProgressWarning").hidden=!inconsistent.length;
    $("planProgressWarning").textContent=inconsistent.length?`${inconsistent.length} 个已勾选步骤的前置尚未勾选，请按实际进度核对。`:"";
    let count=0;
    steps.forEach((s,index)=>{
      if((filter==="pending"&&s.completed)||(filter==="done"&&!s.completed)||query&&!`${s.npc} ${s.title} ${s.region}`.toLowerCase().includes(query))return;
      count++;
      const row=el("article","plan-step"+(s.completed?" completed":""));row.dataset.stepId=s.id;
      const check=el("input");check.type="checkbox";check.checked=s.completed;check.dataset.planWrite="";check.id="step-"+s.id;check.setAttribute("aria-label",`第 ${index+1} 步：${s.title}`);
      check.addEventListener("change",()=>act("toggle",{stepId:s.id,completed:check.checked}));
      const copy=el("div","step-copy"),meta=el("div","step-meta",`${String(index+1).padStart(3,"0")}　${s.npc} · ${s.region}`);
      const title=el("label","step-title",s.title);title.htmlFor=check.id;copy.append(meta,title);
      if(s.detail)copy.append(el("p","step-instructions",s.detail));
      if(s.warning)copy.append(el("p","step-warning",s.warning));
      for(const c of (state.plan.collections||[]).filter(c=>c.stepIds.includes(s.id)))
        copy.append(button(`查看收集表：${c.title}`,()=>showCollections(c.title),"step-collection-link"));
      if(s.prerequisites.length){
        const detail=el("details","step-detail");detail.dataset.step=s.id;detail.open=open.has(s.id);detail.append(el("summary","","查看前置步骤"));
        if(s.prerequisites.length){const names=s.prerequisites.map(id=>steps.find(p=>p.id===id)?.title).filter(Boolean);detail.append(el("p","step-deps","排在前面："+names.slice(0,8).join("；")+(names.length>8?` 等 ${names.length} 项已选择的步骤。`:"")));}
        copy.append(detail);
      }
      row.append(check,copy);$("planStepList").append(row);
    });
    if(!count)$("planStepList").append(el("p","plan-empty",state.plan.issues.length?"请先处理上方选择冲突。":steps.length?"当前筛选没有步骤。":"在“选择 NPC”中添加人物，即可生成本周目的流程。"));
    setBusy();
  }
  function showCollections(query){
    $("collectionSearch").value=query;$("collectionFilter").value="all";switchTab("collections");$("collectionList").scrollTop=0;
  }
  function showRelatedStep(collection){
    const related=state.plan.steps.filter(s=>collection.stepIds.includes(s.id));
    const next=related.find(s=>!s.completed)||related[0];if(!next)return;
    $("planSearch").value="";$("planFilter").value="all";switchTab("plan");
    [...$("planStepList").querySelectorAll("[data-step-id]")].find(n=>n.dataset.stepId===next.id)?.scrollIntoView({block:"start",behavior:"smooth"});
  }
  function renderCollections(){
    const groups=state.plan.collections||[],all=groups.flatMap(c=>c.items),done=all.filter(i=>i.collected).length;
    $("collectionTabCount").textContent=groups.length?`收集表 ${done}/${all.length}`:"收集表";
    $("collectionProgress").textContent=`${groups.length} 类支线道具 · ${done} / ${all.length} 处来源已收集`;
    const query=$("collectionSearch").value.trim().toLowerCase(),filter=$("collectionFilter").value,list=$("collectionList");
    const opened=new Set([...list.querySelectorAll("details[open]")].map(n=>n.dataset.collectionSource));list.replaceChildren();
    let visible=0;
    for(const c of groups){
      const rows=c.items.filter(i=>!(filter==="pending"&&i.collected)&&!(filter==="done"&&!i.collected)&&
        (!query||`${c.title} ${c.npcs.join(" ")} ${i.name} ${i.region} ${i.detail}`.toLowerCase().includes(query)));
      if(!rows.length)continue;visible++;
      const article=el("article","collection-group"),head=el("div","collection-heading"),collected=c.items.filter(i=>i.collected).length;
      head.append(el("h3","",c.title),el("p","collection-count",`已收集 ${collected} 份 / 本路线目标 ${c.requiredCount} 份 · ${c.items.length} 处可用来源${collected>=c.requiredCount?" · 已达收集目标":""}`),
        el("p","",`关联 NPC：${c.npcs.join("、")}`),el("p","",c.description));
      if(c.stepIds.length){const links=el("div","collection-links");links.append(button("查看相关任务步骤",()=>showRelatedStep(c)));head.append(links);}
      const wrap=el("div","collection-table-wrap"),table=el("table","collection-table"),caption=el("caption","sr-only",c.title),thead=el("thead"),tr=el("tr"),tbody=el("tbody");
      for(const label of ["已取得","道具 / 来源","地点","取得方式与注意事项"]){const th=el("th","",label);th.scope="col";tr.append(th);}thead.append(tr);
      for(const item of rows){
        const row=el("tr",item.collected?"collected":""),checkCell=el("td"),nameCell=el("td"),region=el("td","",item.region),detail=el("td","",item.detail),check=el("input");
        check.type="checkbox";check.checked=item.collected;check.id="collect-"+item.id;check.dataset.planWrite="";check.setAttribute("aria-label",`已取得：${item.name}`);
        check.addEventListener("change",()=>act("collect",{itemId:item.id,collected:check.checked}));checkCell.append(check);
        const label=el("label","",item.name);label.htmlFor=check.id;nameCell.append(label);
        if(item.warning)detail.append(el("p","step-warning",item.warning));
        row.append(checkCell,nameCell,region,detail);tbody.append(row);
      }
      table.append(caption,thead,tbody);wrap.append(table);article.append(head,wrap);
      if(c.source){const source=el("details","collection-source");source.dataset.collectionSource=c.id;source.open=opened.has(c.id);source.append(el("summary","","收集资料来源"),el("p","",c.source));article.append(source);}
      list.append(article);
    }
    if(!visible)list.append(el("p","plan-empty",state.plan.issues.length?"先处理上方分支冲突，再生成当前路线的收集表。":groups.length?"当前搜索或筛选没有匹配的道具。":"当前选择尚无收集表。已覆盖死根、两种葡萄、温床诅咒、圣树秘密符节、集物虫笔记及两种覆眼膜；选择对应 NPC 后显示。"));
    setBusy();
  }
  function openName(command){
    if(!state||pending)return;nameCommand=command;
    $("planNameHeading").textContent=({new:"新建周目计划",clone:"复制当前计划（包含勾选进度）",rename:"修改计划名称"})[command];
    $("planName").value=command==="new"?"":command==="clone"?state.profile.name+" 副本":state.profile.name;
    $("planNameDialog").showModal();$("planName").focus();$("planName").select();
  }
  $("planNameForm").addEventListener("submit",event=>{event.preventDefault();const name=$("planName").value.trim();if(!name)return;$("planNameDialog").close();act(nameCommand,{name});});
  $("cancelPlanName").addEventListener("click",()=>$("planNameDialog").close());
  $("planNew").addEventListener("click",()=>openName("new"));$("planClone").addEventListener("click",()=>openName("clone"));$("planRename").addEventListener("click",()=>openName("rename"));
  $("planProfile").addEventListener("change",()=>act("switch",{profileId:$("planProfile").value}));
  document.querySelectorAll("[data-plan-tab]").forEach(b=>b.addEventListener("click",()=>switchTab(b.dataset.planTab)));
  document.querySelectorAll("[data-npc-group]").forEach(b=>b.addEventListener("click",()=>{group=b.dataset.npcGroup;activeNpc="";if(state)renderNpcs();}));
  $("npcSearch").addEventListener("input",()=>state&&renderNpcs());
  $("selectNpcGroup").addEventListener("click",()=>act("selectGroup",{category:group}));
  $("clearNpcGroup").addEventListener("click",()=>act("clearGroup",{category:group}));
  $("planSearch").addEventListener("input",()=>state&&renderPlan());$("planFilter").addEventListener("change",()=>state&&renderPlan());
  $("collectionSearch").addEventListener("input",()=>state&&renderCollections());$("collectionFilter").addEventListener("change",()=>state&&renderCollections());
  $("planJump").addEventListener("click",()=>{
    if(!state)return;$("planSearch").value="";$("planFilter").value="pending";renderPlan();
    $("planStepList").querySelector(".plan-step")?.scrollIntoView({block:"start",behavior:"smooth"});
  });
  window.requestJourneyPlanner=()=>{
    const result=window.WebJourney?.run("load");
    if(result)receive(result);
    else showToast("网页计划模块尚未加载，请刷新页面。");
  };
  switchTab("choose");setBusy();
  window.requestJourneyPlanner();
})();
