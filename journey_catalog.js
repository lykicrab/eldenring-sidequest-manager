window.JOURNEY_CATALOG = {
  "version": 3,
  "notice": "本体依据提供的全支线整理稿；DLC 参考同作者《艾尔登法环DLC支线攻略》，已补充具体操作、交叉分支与名称校对。此表记录玩家自己的进度，不能判断当前存档已错过的事件；成王之路及无缝联机差异需结合游戏内状态核对。",
  "quests": [
    {
      "id": "melina",
      "name": "梅琳娜",
      "summary": "初遇：在宁姆格福探索并坐赐福，常见触发点为“关卡前方”。接受约定后取得灵马与升级能力。\n这条线收录沿途赐福对白、蒙葛特战后的符节，以及火焰大锅前的最后确认。接受癫火会改变她的去留；最终结局目标可在下方选择。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成赐福对话与主线推进",
          "description": "",
          "ending": "",
          "requirements": []
        },
        {
          "id": "final",
          "label": "推进主线，最终成为艾尔登之王（普通结局）",
          "description": "",
          "ending": "lord",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "melina.accord",
          "title": "在赐福接受梅琳娜的约定，取得灵马",
          "detail": "到赐福“关卡前方”休息；若梅琳娜尚未出现，先探索并激活宁姆格福的其他赐福再休息。见面后选择接受约定，确认取得灵马哨笛，并能在赐福升级。先前拒绝时可在赐福重新与她交谈。",
          "order": 10,
          "region": "宁姆格福",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "melina.echoes",
          "title": "回访玛莉卡第三教堂、巡礼教堂等处的梅琳娜对话",
          "detail": "分别到啜泣半岛的巡礼教堂、宁姆格福的玛莉卡第三教堂等有梅琳娜对白的地点，在赐福菜单选择“与梅琳娜交谈”，听完新增话语。这里是补充对白，不是要求每个教堂都有相同选项。",
          "order": 25,
          "region": "宁姆格福 / 啜泣半岛",
          "options": [],
          "needs": [],
          "after": [
            "melina.accord"
          ],
          "warning": ""
        },
        {
          "id": "melina.altus",
          "title": "检查迪可达斯、亚坛及王城外围的新增对话",
          "detail": "经迪可达斯大升降机或古遗迹断崖进入亚坛后，休息检查梅琳娜的新对白；探索王城外围时再在小黄金树教堂等相关赐福查看交谈选项。对白已听过或未出现时，以当前主线阶段为准。",
          "order": 520,
          "region": "亚坛高原",
          "options": [],
          "needs": [],
          "after": [
            "melina.accord",
            "melina.echoes"
          ],
          "warning": ""
        },
        {
          "id": "melina.thorns",
          "title": "检查黄金树树刺，回赐福与梅琳娜交谈",
          "detail": "击败蒙葛特后走到黄金树入口，调查拒绝进入的树刺；返回赐福“艾尔登宝座”休息，与梅琳娜交谈，确认取得洛德符节，再去禁域和洛德大升降机。",
          "order": 625,
          "region": "王城罗德尔",
          "options": [],
          "needs": [
            "story.morgott"
          ],
          "after": [
            "melina.accord",
            "melina.echoes",
            "melina.altus"
          ],
          "warning": ""
        },
        {
          "id": "melina.chamber",
          "title": "听梅琳娜转述玛莉卡的话语",
          "detail": "传送到王城赐福“女王闺阁”，坐赐福检查“与梅琳娜交谈”，听取转述玛莉卡话语的对白；没有新选项时不要把它当作任务失败。",
          "order": 630,
          "region": "女王闺阁",
          "options": [],
          "needs": [],
          "after": [
            "melina.accord",
            "melina.echoes",
            "melina.altus",
            "melina.thorns"
          ],
          "warning": ""
        },
        {
          "id": "melina.last",
          "title": "在点火前核对梅琳娜状态并完成可用对话",
          "detail": "击败火焰巨人后，从大锅边缘登上锅沿，走到赐福“巨人火焰大锅”。点选推进剧情前，先检查与梅琳娜的最后对白；若已接受癫火，她可能已离开，改按当前角色可用选项推进。",
          "order": 995,
          "region": "巨人火焰大锅",
          "options": [],
          "needs": [
            "story.firegiant"
          ],
          "after": [
            "melina.accord",
            "melina.echoes",
            "melina.altus",
            "melina.thorns",
            "melina.chamber"
          ],
          "warning": "接受癫火后再解除，不会自动恢复此前的梅琳娜剧情。"
        },
        {
          "id": "melina.ending",
          "title": "最终战后直接修复法环，选择普通艾尔登之王结局",
          "detail": "击败艾尔登之兽后，与场中的玛莉卡遗体互动，选择直接修复法环的普通艾尔登之王路线。不要改用其他修复卢恩或菈妮的召唤印；若接受过癫火，先确认已经在龙王竞技场使用米凯拉的针。",
          "order": 1510,
          "region": "黄金树内",
          "options": [
            "final"
          ],
          "needs": [
            "story.final"
          ],
          "after": [
            "melina.accord",
            "melina.echoes",
            "melina.altus",
            "melina.thorns",
            "melina.chamber",
            "melina.last"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "varre",
      "name": "白面具梵雷",
      "summary": "初遇：宁姆格福赐福“引导之始”旁。击败碎片君王并觐见双指后，他会前往利耶尼亚的蔷薇教堂。\n主要流程：完成入侵考验、用死亡巫女的血染布，取得纯血骑士勋章；最后去蒙格温王朝处理他的入侵印。白面具套装另有血湖入侵条件，需先于击败蒙格。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "varre.first",
          "title": "初遇梵雷；圆桌觐见双指后回访",
          "detail": "从赐福“引导之始”走到附近持花束的白面具面前交谈。进入圆桌并觐见双指后再回原处；若他已经离开，读取留下的信息，后续到蔷薇教堂找他。",
          "order": 12,
          "region": "引导之始",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "varre.rose",
          "title": "击败碎片君王后找梵雷，选择对双指的疑问",
          "detail": "蔷薇教堂在利耶尼亚湖区、学院西南方。到教堂外找梵雷，谈到双指时选择表达怀疑的选项，例如“我觉得双指不对劲”，继续交谈直到拿到入侵道具。",
          "order": 300,
          "region": "蔷薇教堂",
          "options": [],
          "needs": [],
          "after": [
            "varre.first"
          ],
          "warning": ""
        },
        {
          "id": "varre.invasions",
          "title": "完成三次玩家入侵，或击败蠕血废墟的兽爪玛格纳斯",
          "detail": "在线路线：用梵雷给的溃烂血指完成三次玩家入侵，胜负不影响次数。离线路线：到亚坛高原的蠕血废墟，使用地上的红色入侵印挑战兽爪玛格纳斯。达到要求后回蔷薇教堂外找梵雷，取得需要染血的誓布。",
          "order": 510,
          "region": "亚坛高原 / 联机入侵",
          "options": [],
          "needs": [],
          "after": [
            "varre.first",
            "varre.rose"
          ],
          "warning": ""
        },
        {
          "id": "varre.blood",
          "title": "用已死亡巫女的血染红誓布",
          "detail": "可选镇静教堂：前往利耶尼亚东北山地，检查教堂内椅子上死亡巫女的尸体，互动染血。也可从四钟楼通往候王礼拜堂，在起始礼拜堂内找死亡巫女染血；不用杀海妲或其他活着的 NPC。",
          "order": 515,
          "region": "镇静教堂 / 候王礼拜堂",
          "options": [],
          "needs": [],
          "after": [
            "varre.first",
            "varre.rose",
            "varre.invasions"
          ],
          "warning": ""
        },
        {
          "id": "varre.medal",
          "title": "交回应血誓布，取得血指和纯血骑士勋章",
          "detail": "返回利耶尼亚蔷薇教堂外找梵雷，交付已经染血的誓布，接受手指仪式。继续交谈，分别确认拿到血指与纯血骑士勋章；不要拿到一件就立刻离开。",
          "order": 516,
          "region": "蔷薇教堂",
          "options": [],
          "needs": [],
          "after": [
            "varre.first",
            "varre.rose",
            "varre.invasions",
            "varre.blood"
          ],
          "warning": ""
        },
        {
          "id": "varre.nameless",
          "title": "在血湖击败无名白面具入侵，收取装备",
          "detail": "使用纯血骑士勋章或雪原传送门进入蒙格温王朝，前往乌鸦与大型血池一带处理无名白面具入侵，收取战场医师套装。若目的是白面具，务必在击败鲜血君王蒙格之前完成。",
          "order": 840,
          "region": "蒙格温王朝",
          "options": [],
          "needs": [],
          "after": [
            "varre.first",
            "varre.rose",
            "varre.invasions",
            "varre.blood",
            "varre.medal"
          ],
          "warning": "先于击败鲜血君王蒙格。"
        },
        {
          "id": "varre.finish",
          "title": "使用红色入侵印入侵梵雷，回来交谈并取梵雷的花束",
          "detail": "到赐福“王朝灵庙（中段）”附近的洞窟通道，找梵雷留下的红色入侵印并使用，击败梵雷。返回自己的世界后，在召唤印附近找倒地的梵雷，听完最后对白并收取梵雷的花束等物品。",
          "order": 845,
          "region": "王朝灵庙（中段）",
          "options": [],
          "needs": [],
          "after": [
            "varre.first",
            "varre.rose",
            "varre.invasions",
            "varre.blood",
            "varre.medal",
            "varre.nameless"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "boc",
      "name": "柏克（裁缝师）",
      "summary": "初遇：赐福“亚基尔湖北方”东南方道路旁，一棵会呼救的小树。解除伪装后，柏克会先去海岸洞窟，再随探索迁移。\n王城阶段的关键选择是肯定他的外貌，或给予泪滴幼体让他重生。前者可保留裁缝服务；后者会走向死亡结尾，不要把两条选项都做。",
      "defaultOption": "affirm",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "affirm",
          "label": "使用“你长得很好看”，保留裁缝服务",
          "description": "",
          "ending": "",
          "requirements": []
        },
        {
          "id": "rebirth",
          "label": "给予泪滴幼体，走重生结尾",
          "description": "该路线最终导致柏克死亡。",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "boc.tree",
          "title": "找到呼救的小树，解除伪装并与柏克交谈",
          "detail": "从赐福“亚基尔湖北方”沿道路往东南找呼救声，轻打伪装成小树的柏克一次，再与变回原形的他交谈至重复。不要继续攻击变回原形的 NPC。",
          "order": 16,
          "region": "亚基尔湖北方",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "boc.needle",
          "title": "击败洞窟首领取得缝衣针，交给柏克",
          "detail": "前往宁姆格福西海岸的海岸洞窟，先与入口内倒地的柏克交谈。击败洞底的亚人首领，取得缝衣针后回到洞窟入口，把针交给柏克。",
          "order": 22,
          "region": "海岸洞窟",
          "options": [],
          "needs": [],
          "after": [
            "boc.tree"
          ],
          "warning": ""
        },
        {
          "id": "boc.lake",
          "title": "刷新赐福，与柏克重逢",
          "detail": "从史东薇尔后方或绕城小路进入利耶尼亚，在赐福“傍湖断崖”休息，找旁边的柏克交谈。若已经继续迁移，到王城东边城墙查找，别在旧位置反复等待。",
          "order": 280,
          "region": "傍湖断崖",
          "options": [],
          "needs": [],
          "after": [
            "boc.tree",
            "boc.needle"
          ],
          "warning": ""
        },
        {
          "id": "boc.gold",
          "title": "取得结缘教堂黄金缝衣针，并持有可修改的半神衣装后交给柏克",
          "detail": "先在结缘教堂箱子里取得黄金缝衣针，再持有一件可修改的半神衣装，到赐福“王城东边城墙”附近找柏克。谈到修改服装时把黄金缝衣针交给他；并非所有半神防具都能修改。",
          "order": 560,
          "region": "王城东边城墙",
          "options": [],
          "needs": [],
          "after": [
            "boc.tree",
            "boc.needle",
            "boc.lake"
          ],
          "warning": ""
        },
        {
          "id": "boc.affirm",
          "title": "对柏克使用呼声“你长得很好看”，再与他交谈",
          "detail": "先到格密尔火山的遁世者村，在村内尸体处取得呼声泥颅“你长得很好看”。站在王城东边城墙的柏克旁使用，再与他交谈，明确承认刚才的声音来自玩家；此路线不交泪滴幼体。",
          "order": 565,
          "region": "王城东边城墙",
          "options": [
            "affirm"
          ],
          "needs": [],
          "after": [
            "boc.tree",
            "boc.needle",
            "boc.lake",
            "boc.gold"
          ],
          "warning": "此路线不要交泪滴幼体。"
        },
        {
          "id": "boc.rebirth",
          "title": "给柏克泪滴幼体，前往大书库回访重生后的结果",
          "detail": "在王城东边城墙与柏克交谈，按重生愿望交出泪滴幼体。随后去赐福“雷亚卢卡利亚大书库”，找蕾娜菈房内的柏克并离开刷新，查看最终结果；这会失去正常裁缝服务。",
          "order": 565,
          "region": "王城 / 雷亚卢卡利亚大书库",
          "options": [
            "rebirth"
          ],
          "needs": [],
          "after": [
            "boc.tree",
            "boc.needle",
            "boc.lake",
            "boc.gold",
            "boc.affirm"
          ],
          "warning": "柏克将死亡，无法继续正常裁缝服务。"
        }
      ]
    },
    {
      "id": "patches",
      "name": "帕奇",
      "summary": "初遇：宁姆格福濛流洞窟的宝箱房。将帕奇打到求饶后停手，才能保留商店及后续。\n他会依次出现在远眺岛、格密尔火山与火山官邸。官邸委托要在拉卡德前完成；拉卡德战后去日荫城入口平台和濛流洞窟收尾。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "饶恕并完成全部后续",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "tanith",
              "optionIds": [
                "complete",
                "knight"
              ],
              "reason": "帕奇官邸委托需要加入火山官邸。请选择塔妮丝的官邸路线。"
            }
          ]
        },
        {
          "id": "kill",
          "label": "濛流洞窟击杀",
          "description": "提前结束后续支线与商店。",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "patches.cave",
          "title": "找到帕奇并将其打到求饶阶段",
          "detail": "沿亚基尔湖北侧河道进入濛流洞窟，走到深处宝箱房并打开箱子。帕奇出现后将其打到求饶，立刻停手，等战斗结束再交谈。想保留后续路线时不要补刀。",
          "order": 24,
          "region": "濛流洞窟",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "patches.kill",
          "title": "选择击杀帕奇并收取物品",
          "detail": "在濛流洞窟的帕奇宝箱房继续攻击并击杀他，收取铃珠等掉落。该计划到此结束，不再安排其远眺岛、官邸委托与回归商店的内容。",
          "order": 25,
          "region": "濛流洞窟",
          "options": [
            "kill"
          ],
          "needs": [],
          "after": [
            "patches.cave"
          ],
          "warning": ""
        },
        {
          "id": "patches.spare",
          "title": "选择饶恕，刷新后交谈并检查陷阱宝箱",
          "detail": "在濛流洞窟等帕奇投降后，选择饶恕，离开或坐赐福刷新，再回宝箱房与已开店的帕奇交谈。检查他的新增宝箱会触发传送陷阱；回来后再找他听解释。",
          "order": 25,
          "region": "濛流洞窟",
          "options": [
            "complete"
          ],
          "needs": [],
          "after": [
            "patches.cave",
            "patches.kill"
          ],
          "warning": ""
        },
        {
          "id": "patches.isle",
          "title": "与帕奇对话，听取火山官邸情报",
          "detail": "到利耶尼亚南部赐福“远眺岛”附近找坐着的帕奇，听他谈火山官邸与学院底部掳人少女人偶。如果他已离开，继续到格密尔火山或火山官邸查找。",
          "order": 305,
          "region": "远眺岛",
          "options": [
            "complete"
          ],
          "needs": [],
          "after": [
            "patches.cave",
            "patches.kill",
            "patches.spare"
          ],
          "warning": ""
        },
        {
          "id": "patches.kick",
          "title": "沿虹彩石触发帕奇的踢落事件",
          "detail": "从格密尔火山（第１休息站）一带往山路探索，找帕奇和地上的虹彩石，沿诱导路线到悬崖触发踢落事件。要补这段对白，应在正式加入火山官邸之前做；它不是完成整条帕奇线的硬性要求。",
          "order": 502,
          "region": "格密尔火山（第１休息站）附近",
          "options": [
            "complete"
          ],
          "needs": [],
          "after": [
            "patches.cave",
            "patches.kill",
            "patches.spare",
            "patches.isle"
          ],
          "warning": "加入官邸前处理；错过仅损失这段事件。"
        },
        {
          "id": "patches.target",
          "title": "接帕奇的信，入侵大角忒拉格斯后回报并领取熔岩烛台鞭",
          "detail": "火山官邸委托推进后，在官邸走廊找帕奇领取专属书信；去熔岩土龙马卡尔所在的古遗迹断崖区域，使用红色入侵印击败“大角”忒拉格斯。返回官邸走廊报告帕奇，离开刷新后再次问奖励，领取熔岩烛台鞭。",
          "order": 710,
          "region": "熔岩土龙马卡尔附近",
          "options": [
            "complete"
          ],
          "needs": [
            "tanith.join"
          ],
          "after": [
            "patches.cave",
            "patches.kill",
            "patches.spare",
            "patches.isle",
            "patches.kick"
          ],
          "warning": ""
        },
        {
          "id": "patches.castle",
          "title": "击败拉卡德后与帕奇交谈，取得舞娘打击乐器",
          "detail": "拉卡德战后前往亚坛高原日荫城，沿城堡内部走到铁棘艾隆梅尔首领房前的木桥/平台，找倒地的帕奇交谈，领取舞娘打击乐器。先别攻击他，听完对白再离开。",
          "order": 800,
          "region": "日荫城",
          "options": [
            "complete"
          ],
          "needs": [
            "story.rykard"
          ],
          "after": [
            "patches.cave",
            "patches.kill",
            "patches.spare",
            "patches.isle",
            "patches.kick",
            "patches.target"
          ],
          "warning": ""
        },
        {
          "id": "patches.return",
          "title": "再次见到帕奇，等待认出玩家，领取动作并恢复商店",
          "detail": "回宁姆格福濛流洞窟原来的宝箱房，再次触发帕奇遭遇。不要把他打死，等他认出玩家并投降，领取新动作；坐洞口赐福刷新后再次入内，确认商店恢复。",
          "order": 810,
          "region": "濛流洞窟",
          "options": [
            "complete"
          ],
          "needs": [],
          "after": [
            "patches.cave",
            "patches.kill",
            "patches.spare",
            "patches.isle",
            "patches.kick",
            "patches.target",
            "patches.castle"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "yura",
      "name": "血指猎人尤拉",
      "summary": "初遇：亚基尔湖南侧的遗迹下方。尤拉会协助处理血指入侵，之后在学院正门外留下协助印。\n完整路线最后到亚坛高原玛莉卡第二教堂，取得长牙并迎战艾琉诺拉；尽量在进入巨人山顶、夏玻利利占用其身体之前做完这些对白。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "yura.dragon",
          "title": "与遗迹下的尤拉交谈，屠龙后可回访",
          "detail": "在亚基尔湖南侧、靠近海边遗迹的拱形建筑下找尤拉，听其飞龙警告。击败湖中的飞龙亚基尔后回同一处再次交谈，听取龙飨教堂线索。",
          "order": 18,
          "region": "亚基尔湖",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "yura.nerijus",
          "title": "击败血指涅利乌斯，向北回访尤拉",
          "detail": "沿宁姆格福湖北侧河道走向濛流洞窟，触发血指涅利乌斯入侵；尤拉会前来协助。胜利后继续沿河向北，在河道拱形遗迹下找尤拉交谈，不是在濛流洞窟宝箱房里找。",
          "order": 28,
          "region": "濛流洞窟前",
          "options": [],
          "needs": [],
          "after": [
            "yura.dragon"
          ],
          "warning": ""
        },
        {
          "id": "yura.academy",
          "title": "使用桥上的红色召唤印帮助尤拉，返回与他对话",
          "detail": "到赐福“学院正门口”，沿封印旁可通行的桥面向北找尤拉的红色协助印，进入其世界击败对手。回来后，在附近桥上找到尤拉，听完关于艾琉诺拉的对白。",
          "order": 315,
          "region": "学院正门口",
          "options": [],
          "needs": [],
          "after": [
            "yura.dragon",
            "yura.nerijus"
          ],
          "warning": ""
        },
        {
          "id": "yura.eleonora",
          "title": "与垂死的尤拉交谈取得长牙，击败艾琉诺拉",
          "detail": "到亚坛高原的玛莉卡第二教堂，先与倒地的尤拉交谈并取得长牙，随后击败入侵的“纯紫血指”艾琉诺拉，收取双头刀与净血结晶露滴。已提前进入巨人山顶时，先核对尤拉是否已被夏玻利利取代。",
          "order": 535,
          "region": "玛莉卡第二教堂",
          "options": [],
          "needs": [],
          "after": [
            "yura.dragon",
            "yura.nerijus",
            "yura.academy"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "sellen",
      "name": "魔法师瑟濂",
      "summary": "初遇：宁姆格福驿站街遗迹地下室，击败发狂南瓜头士兵后可拜师买魔法。\n后续串联亚兹勒、卢瑟特、封印魔女的废墟和三姊妹塔傀儡地下室。学院大书库外的金色印是协助瑟濂，红色印是协助杰廉；两种最终奖励互斥。",
      "defaultOption": "assist",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "assist",
          "label": "协助瑟濂",
          "description": "获得瑟濂一侧的奖励；与杰廉最终协助路线互斥。",
          "ending": "",
          "requirements": [
            {
              "questId": "jerren",
              "optionIds": [
                "sellen"
              ],
              "reason": "协助瑟濂时，杰廉需选择“接受瑟濂一侧的结果”。"
            }
          ]
        },
        {
          "id": "jerren",
          "label": "协助杰廉，击败瑟濂",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "jerren",
              "optionIds": [
                "assist"
              ],
              "reason": "协助杰廉时，请同步选择杰廉的协助路线。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "sellen.meet",
          "title": "击败南瓜头士兵，拜瑟濂为师",
          "detail": "到宁姆格福驿站街遗迹，寻找向下的石阶，击败地下室的发狂南瓜头士兵。打开后方房门找瑟濂，选择愿意学习、成为学生，确认她的魔法商店可用。",
          "order": 20,
          "region": "驿站街遗迹",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "sellen.azur",
          "title": "从亚兹勒取得彗星亚兹勒，回报瑟濂，取得瑟利亚封印钥匙",
          "detail": "到格密尔火山遁世者村北侧、赐福「“起源魔法师”亚兹勒」处，与不说话的亚兹勒互动取得彗星亚兹勒。回宁姆格福驿站街遗迹地下室向瑟濂展示，继续接受她的请求并取得瑟利亚封印钥匙。",
          "order": 530,
          "region": "格密尔火山 / 遁世者村",
          "options": [],
          "needs": [],
          "after": [
            "sellen.meet"
          ],
          "warning": ""
        },
        {
          "id": "sellen.lusat",
          "title": "找到卢瑟特，取得毁灭流星，回报瑟濂",
          "detail": "从盖利德腐败病教堂向北到瑟利亚隐藏洞窟，打破隐藏入口进入。探索到洞底蓝色封印，用瑟利亚封印钥匙解封，与卢瑟特互动取得毁灭流星；再回驿站街遗迹地下室告诉瑟濂找到他的消息。",
          "order": 540,
          "region": "瑟利亚隐藏洞窟",
          "options": [],
          "needs": [],
          "after": [
            "sellen.meet",
            "sellen.azur"
          ],
          "warning": ""
        },
        {
          "id": "sellen.primal",
          "title": "碎星祭典后取得瑟濂的源辉石",
          "detail": "拉塔恩战后先回驿站街遗迹地下室，听瑟濂说明真正的身体位置，再去啜泣半岛第四玛莉卡教堂南方的封印魔女的废墟地下室。从被束缚的瑟濂身体取出源辉石；不要用攻击代替交谈。",
          "order": 545,
          "region": "封印魔女的废墟",
          "options": [],
          "needs": [
            "story.radahn"
          ],
          "after": [
            "sellen.meet",
            "sellen.azur",
            "sellen.lusat"
          ],
          "warning": ""
        },
        {
          "id": "sellen.body",
          "title": "找到赛尔维斯地下室中的瑟濂躯体，移植源辉石",
          "detail": "到菈妮魔法师塔与蕾娜魔法师塔之间的废墟，打破隐藏地板进入傀儡地下室，再打破里面的隐藏墙。找到瑟濂备用躯体并交出源辉石，听完移植后的对白。",
          "order": 546,
          "region": "三姊妹塔附近隐藏地下室",
          "options": [],
          "needs": [],
          "after": [
            "sellen.meet",
            "sellen.azur",
            "sellen.lusat",
            "sellen.primal"
          ],
          "warning": ""
        },
        {
          "id": "sellen.duel",
          "title": "使用金色召唤印协助瑟濂，击败杰廉",
          "detail": "确保杰廉已经离开红狮子城并出现在封印魔女的废墟后，到赐福“雷亚卢卡利亚大书库”门外，使用金色召唤印帮助瑟濂击败杰廉。想帮瑟濂时不要误点红色印。",
          "order": 548,
          "region": "雷亚卢卡利亚大书库外",
          "options": [
            "assist"
          ],
          "needs": [
            "jerren.witchbane"
          ],
          "after": [
            "sellen.meet",
            "sellen.azur",
            "sellen.lusat",
            "sellen.primal",
            "sellen.body"
          ],
          "warning": "红色印是对立路线；选择前核对。"
        },
        {
          "id": "sellen.reward",
          "title": "与瑟濂交谈收取奖励；刷新并回访两位起源魔法师处的装备",
          "detail": "协助瑟濂获胜后，进入大书库与她交谈，领取辉石克力士并检查新增魔法。离开坐赐福刷新，回大书库查看后续与头罩；再分别去亚兹勒、卢瑟特原来的位置收取对应装备。",
          "order": 549,
          "region": "雷亚卢卡利亚大书库",
          "options": [
            "assist"
          ],
          "needs": [],
          "after": [
            "sellen.meet",
            "sellen.azur",
            "sellen.lusat",
            "sellen.primal",
            "sellen.body",
            "sellen.duel"
          ],
          "warning": ""
        },
        {
          "id": "sellen.oppose",
          "title": "使用红色召唤印协助杰廉，击败瑟濂",
          "detail": "到赐福“雷亚卢卡利亚大书库”门外使用红色召唤印，协助杰廉击败瑟濂。返回自己的世界后，在大书库门外找杰廉交谈领取奖励；瑟濂后续商店与协助分支不再安排。",
          "order": 548,
          "region": "雷亚卢卡利亚大书库外",
          "options": [
            "jerren"
          ],
          "needs": [
            "jerren.witchbane"
          ],
          "after": [
            "sellen.meet",
            "sellen.azur",
            "sellen.lusat",
            "sellen.primal",
            "sellen.body",
            "sellen.duel",
            "sellen.reward"
          ],
          "warning": "此选择结束瑟濂路线。"
        }
      ]
    },
    {
      "id": "jerren",
      "name": "杰廉",
      "summary": "初遇：红狮子城广场上主持祭典的杰廉。拉塔恩战后要回城堡内听完他离开的对白。\n他的后半段属于瑟濂的源辉石事件，最终在学院大书库门外选边。为菈妮效力不妨碍协助杰廉；真正互斥的是协助瑟濂与协助杰廉。",
      "defaultOption": "sellen",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "sellen",
          "label": "接受瑟濂一侧的结果",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "sellen",
              "optionIds": [
                "assist"
              ],
              "reason": "杰廉选择瑟濂一侧时，需要协助瑟濂。"
            }
          ]
        },
        {
          "id": "assist",
          "label": "协助杰廉",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "sellen",
              "optionIds": [
                "jerren"
              ],
              "reason": "协助杰廉需要在瑟濂线选择对立分支。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "jerren.festival",
          "title": "与杰廉交谈并参加战斗祭典",
          "detail": "祭典开启后进入红狮子城广场，走上前方台阶与主持人杰廉交谈，确认准备参加祭典，再往教堂后方通路进入拉塔恩战场。",
          "order": 405,
          "region": "红狮子城",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "jerren.leave",
          "title": "拉塔恩战后回访杰廉，听完离开城堡的对话",
          "detail": "击败拉塔恩后传送回赐福“广场前房间”，穿过广场回城堡前方教堂，找到坐着的杰廉。反复交谈，直到他说准备离开；必要时休息刷新，确认对白阶段已改变。",
          "order": 425,
          "region": "红狮子城",
          "options": [],
          "needs": [
            "story.radahn"
          ],
          "after": [
            "jerren.festival"
          ],
          "warning": ""
        },
        {
          "id": "jerren.witchbane",
          "title": "瑟濂源辉石移植后，回访杰廉与瑟濂旧躯体",
          "detail": "瑟濂源辉石移植后，去啜泣半岛封印魔女的废墟地下室，找瑟濂旧躯体旁的杰廉。听完关于狩猎魔女的对白；若未出现，先回红狮子城确认离开对白已说完，再刷新废墟。",
          "order": 547,
          "region": "封印魔女的废墟",
          "options": [],
          "needs": [
            "sellen.body"
          ],
          "after": [
            "jerren.festival",
            "jerren.leave"
          ],
          "warning": ""
        },
        {
          "id": "jerren.reward",
          "title": "协助杰廉后交谈，领取古龙岩锻造石",
          "detail": "在雷亚卢卡利亚大书库门外的红色召唤印中协助杰廉获胜，回来后仍在大书库门外找杰廉，反复交谈并领取古龙岩锻造石。这里不需要回红狮子城领奖。",
          "order": 550,
          "region": "雷亚卢卡利亚大书库外",
          "options": [
            "assist"
          ],
          "needs": [
            "sellen.oppose"
          ],
          "after": [
            "jerren.festival",
            "jerren.leave",
            "jerren.witchbane"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "rogier",
      "name": "魔法师罗杰尔",
      "summary": "初遇：史东薇尔城内礼拜堂中的魔法剑士。葛瑞克战后，他坐在圆桌厅堂的露台。\n支线重点是城底死王子面孔与黑刀烙印调查。要保留调查对白，应先完成烙印调查，再在菈妮高塔推进效力对话；最后回圆桌露台读遗留信。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "rogier.castle",
          "title": "与罗杰尔交谈；葛瑞克战后在圆桌领取刺剑",
          "detail": "探索史东薇尔时，在礼拜堂找罗杰尔交谈。击败葛瑞克后回圆桌厅堂，去中央大厅外的露台找坐着的罗杰尔，谈葛瑞克并领取罗杰尔刺剑。",
          "order": 210,
          "region": "史东薇尔城礼拜堂",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "rogier.corpse",
          "title": "探索城底死王子面孔，触摸血迹后回报罗杰尔",
          "detail": "探索史东薇尔城底的腐烂树灵区域，继续走到巨大死王子面孔前查看罗杰尔留下的血迹。随后回圆桌厅堂露台，向罗杰尔询问城底看到的东西。",
          "order": 215,
          "region": "史东薇尔城底",
          "options": [],
          "needs": [],
          "after": [
            "rogier.castle"
          ],
          "warning": ""
        },
        {
          "id": "rogier.print",
          "title": "从隐藏首领取得黑刀烙印，交给罗杰尔调查",
          "detail": "到利耶尼亚东北的黑刀地下墓地，寻找隐藏首领房并击败黑刀刺客，取得黑刀烙印。回圆桌厅堂露台交给罗杰尔；坐赐福刷新后再交谈，听完调查结果并取回烙印。",
          "order": 325,
          "region": "黑刀地下墓地",
          "options": [],
          "needs": [],
          "after": [
            "rogier.castle",
            "rogier.corpse"
          ],
          "warning": ""
        },
        {
          "id": "rogier.ranni",
          "title": "按调查指引见菈妮，再回报罗杰尔建议入伙",
          "detail": "带着罗杰尔调查得到的线索，到卡利亚城寨后方菈妮魔法师塔顶层与菈妮谈黑刀之夜。被拒绝后回圆桌厅堂露台告诉罗杰尔，他会建议假意为菈妮效力；再去高塔推进效力对白。",
          "order": 335,
          "region": "菈妮魔法师塔 / 圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [
            "rogier.castle",
            "rogier.corpse",
            "rogier.print"
          ],
          "warning": ""
        },
        {
          "id": "rogier.letter",
          "title": "入伙后回访罗杰尔，刷新并读取遗留信件与装备",
          "detail": "正式为菈妮效力后回圆桌厅堂露台看罗杰尔。按他的当前状态交谈、离开休息再回访，直到留下装备、铃珠与信件；在背包阅读罗杰尔的信，确认指向 D 的弟弟。",
          "order": 390,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [
            "rogier.castle",
            "rogier.corpse",
            "rogier.print",
            "rogier.ranni"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "ranni",
      "name": "菈妮（拉妮）",
      "summary": "初遇可在取得灵马后的艾雷教堂夜间完成；正式支线从卡利亚城寨后方菈妮魔法师塔开始。\n完整路线经过诺克隆恩、安瑟尔河、诺克史黛拉、腐败湖及月光祭坛。交猎杀指头刀会结束赛尔维斯相关阶段；如果只为菲雅取得死亡的咒痕，可在下方选择前半段目标。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线，保留星星时代选项",
          "description": "",
          "ending": "",
          "requirements": []
        },
        {
          "id": "final",
          "label": "本周目选择星星时代",
          "description": "",
          "ending": "ranni",
          "requirements": []
        },
        {
          "id": "cursemark",
          "label": "推进到取得诅咒烙印",
          "description": "用于菲雅路线，只安排必要前半段。",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "ranni.renna",
          "title": "取得灵马后夜间回访蕾娜，领取召魂铃",
          "detail": "取得灵马后，在夜间传送到赐福“艾雷教堂”，与坐在残墙上的蕾娜交谈，承认自己能召唤灵马，领取召魂铃与骨灰。如果她已不再出现，可去圆桌孪生老妪处购买召魂铃，不必因此重开角色。",
          "order": 30,
          "region": "艾雷教堂",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "ranni.join",
          "title": "击败禁卫骑士罗蕾塔，进入高塔为菈妮效力，与投影交谈",
          "detail": "击败卡利亚城寨的禁卫骑士罗蕾塔，从城寨后方进入三姊妹塔区域，到菈妮魔法师塔顶层选择为她效力。下楼分别与伊吉、布莱泽、赛尔维斯的投影交谈，再回顶层与菈妮交谈，解除高塔屏障。",
          "order": 350,
          "region": "卡利亚城寨 / 菈妮魔法师塔",
          "options": [],
          "needs": [],
          "after": [
            "ranni.renna",
            "rogier.ranni"
          ],
          "warning": ""
        },
        {
          "id": "ranni.findBlade",
          "title": "在黑夜神域宝箱取得猎杀指头刀",
          "detail": "拉塔恩战后从雾林附近陨石坑下到诺克隆恩，沿祖灵森林通往黑夜神域，在巨大遗骸下方宝箱取得猎杀指头刀。拾取与交付分开记录；取得后可以先留在背包，交刀前仍要核对赛尔维斯相关目标。",
          "order": 450,
          "region": "诺克隆恩 / 黑夜神域",
          "options": [],
          "needs": [
            "story.radahn"
          ],
          "after": [
            "ranni.join"
          ],
          "warning": ""
        },
        {
          "id": "ranni.blade",
          "title": "把猎杀指头刀交给菈妮，领取卡利亚颠倒像",
          "detail": "先完成当前选择的赛尔维斯药水、傀儡和魔力对蝎护符目标，再回菈妮魔法师塔顶层交付猎杀指头刀，领取卡利亚颠倒像。此处记录交付，不是仅把刀拿在背包。",
          "order": 460,
          "region": "菈妮魔法师塔",
          "options": [],
          "needs": [
            "ranni.findBlade"
          ],
          "after": [
            "ranni.renna",
            "ranni.join",
            "seluvis.amber",
            "dung.puppet"
          ],
          "warning": "交刀前完成所选赛尔维斯药水、傀儡和魔力对蝎目标。"
        },
        {
          "id": "ranni.cursemark",
          "title": "使用颠倒像探索神授塔，取得死亡的咒痕（诅咒烙印）",
          "detail": "到利耶尼亚东侧卡利亚书斋，在入口祭台放置卡利亚颠倒像，探索倒转书斋并走到利耶尼亚神授塔。登塔顶拾取死亡的咒痕；这是菲雅后段需要的物品，不是另一个修复卢恩。",
          "order": 465,
          "region": "卡利亚书斋 / 利耶尼亚神授塔",
          "options": [],
          "needs": [],
          "after": [
            "ranni.renna",
            "ranni.join",
            "ranni.blade"
          ],
          "warning": "",
          "optionalFor": [
            "complete",
            "final"
          ]
        },
        {
          "id": "ranni.mini",
          "title": "从传送门前往安瑟尔河，捡娇小菈妮，在赐福反复交谈",
          "detail": "交刀后到三姊妹塔北侧已解封的蕾娜魔法师塔，使用塔顶传送门。抵达安瑟尔河主流后从石棺旁拾取娇小菈妮，坐赐福反复选择“与娇小菈妮交谈”，直到她真正回应。",
          "order": 470,
          "region": "蕾娜魔法师塔 / 安瑟尔河主流",
          "options": [
            "complete",
            "final"
          ],
          "needs": [],
          "after": [
            "ranni.renna",
            "ranni.join",
            "ranni.blade"
          ],
          "warning": ""
        },
        {
          "id": "ranni.shadow",
          "title": "击败灾厄影子，取得被丢弃的王室钥匙",
          "detail": "沿诺克史黛拉推进，到诺克史黛拉水潭附近的通道击败灾厄影子。胜利后确认取得被丢弃的王室钥匙；若影子没有出现，先核对是否已在安瑟尔河赐福与娇小菈妮谈到回应。",
          "order": 475,
          "region": "诺克史黛拉 / 灾厄影子区域",
          "options": [
            "complete",
            "final"
          ],
          "needs": [],
          "after": [
            "ranni.renna",
            "ranni.join",
            "ranni.blade",
            "ranni.mini"
          ],
          "warning": ""
        },
        {
          "id": "ranni.ring",
          "title": "用钥匙打开蕾娜菈身边宝箱，取得暗月戒指",
          "detail": "传送到赐福“雷亚卢卡利亚大书库”，用被丢弃的王室钥匙打开蕾娜菈身旁上锁的宝箱，取得暗月戒指，再回腐败湖继续探索。",
          "order": 480,
          "region": "雷亚卢卡利亚大书库",
          "options": [
            "complete",
            "final"
          ],
          "needs": [],
          "after": [
            "ranni.renna",
            "ranni.join",
            "ranni.blade",
            "ranni.mini",
            "ranni.shadow"
          ],
          "warning": ""
        },
        {
          "id": "ranni.defeatAstel",
          "title": "坐棺材抵达并击败黑暗弃子艾丝缇",
          "detail": "横穿腐败湖抵达大回廊，走到底部瀑布旁，与石棺互动进入黑暗弃子艾丝缇战场并击败首领。首领可以先打；通过战场后方封印才需要暗月戒指。",
          "order": 482,
          "region": "腐败湖 / 大回廊",
          "options": [
            "complete",
            "final"
          ],
          "needs": [],
          "after": [
            "ranni.mini"
          ],
          "warning": ""
        },
        {
          "id": "ranni.astel",
          "title": "持暗月戒指通过封印，乘升降机前往月光祭坛",
          "detail": "击败黑暗弃子艾丝缇后，持暗月戒指通过首领战场后方封印，乘升降机上月光祭坛。若封印仍在，先回蕾娜菈身边的宝箱取戒指。",
          "order": 485,
          "region": "艾丝缇战场后方 / 月光祭坛",
          "options": [
            "complete",
            "final"
          ],
          "needs": [],
          "after": [
            "ranni.renna",
            "ranni.join",
            "ranni.blade",
            "ranni.mini",
            "ranni.shadow",
            "ranni.ring",
            "ranni.defeatAstel"
          ],
          "warning": ""
        },
        {
          "id": "ranni.marry",
          "title": "在地下为菈妮戴戒指，领取暗月大剑；回塔赐福听完对白",
          "detail": "到月光祭坛的玛努斯·瑟利斯大教堂，从教堂内地洞下到底部，为菈妮戴上暗月戒指，听完对白并取得暗月大剑。之后可回菈妮魔法师塔的赐福检查与娇小菈妮的新增对白。",
          "order": 490,
          "region": "玛努斯·瑟利斯大教堂",
          "options": [
            "complete",
            "final"
          ],
          "needs": [],
          "after": [
            "ranni.renna",
            "ranni.join",
            "ranni.blade",
            "ranni.mini",
            "ranni.shadow",
            "ranni.ring",
            "ranni.astel",
            "ranni.defeatAstel"
          ],
          "warning": ""
        },
        {
          "id": "ranni.ending",
          "title": "最终战后使用菈妮的蓝色召唤印，选择星星时代",
          "detail": "最终战后，在玛莉卡遗体附近寻找菈妮的蓝色召唤印并使用，确认走星星时代。若接受过癫火，先完成龙王竞技场用针解除；想走菈妮结局时不要先触发其他结局互动。",
          "order": 1510,
          "region": "黄金树内",
          "options": [
            "final"
          ],
          "needs": [
            "story.final"
          ],
          "after": [
            "ranni.renna",
            "ranni.join",
            "ranni.blade",
            "ranni.mini",
            "ranni.shadow",
            "ranni.ring",
            "ranni.astel",
            "ranni.marry",
            "ranni.defeatAstel"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "blaidd",
      "name": "半狼布莱泽",
      "summary": "初遇：雾林废墟屋顶的半狼。先向艾雷教堂咖列询问狼嚎并学会弹指，才能在废墟叫他下来。\n后续随菈妮线调查希芙拉河、参加拉塔恩祭典，并在菈妮取得戒指结尾后回高塔门前收尾。封印监牢是否放他出来，不阻止菈妮主线继续。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完整回访与最终结尾",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "ranni",
              "optionIds": [
                "complete",
                "final"
              ],
              "reason": "布莱泽完整结尾需要推进菈妮至戴戒指。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "blaidd.wolf",
          "title": "向咖列询问狼嚎，学弹指动作，召下布莱泽",
          "detail": "到雾林废墟听到狼嚎后，回赐福“艾雷教堂”找咖列，选择询问狼嚎并取得弹指动作。回雾林废墟，在屋顶布莱泽下方使用弹指，等他落地后交谈。",
          "order": 35,
          "region": "雾林废墟 / 艾雷教堂",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "blaidd.darriwil",
          "title": "与布莱泽合作击败猎犬骑士达瑞威尔，战后交谈",
          "detail": "到宁姆格福南部无主猎犬的封印监牢，进入后可用布莱泽的金色印协助战斗。击败猎犬骑士达瑞威尔，回监牢外与布莱泽交谈，听取伊吉线索。",
          "order": 40,
          "region": "无主猎犬封印监牢",
          "options": [],
          "needs": [],
          "after": [
            "blaidd.wolf"
          ],
          "warning": ""
        },
        {
          "id": "blaidd.siofra",
          "title": "入伙后找布莱泽；经赛尔维斯、瑟濂询问拉塔恩与星星的关联",
          "detail": "为菈妮效力后，从雾林的希芙拉河入口井下地底，到角骸灵地东侧悬崖边找布莱泽。去赛尔维斯魔法师塔询问诺克隆恩，拿介绍信后去驿站街遗迹找瑟濂，最后回希芙拉河把拉塔恩线索告诉布莱泽。",
          "order": 370,
          "region": "希芙拉河 / 赛尔维斯塔",
          "options": [],
          "needs": [
            "ranni.join"
          ],
          "after": [
            "blaidd.wolf",
            "blaidd.darriwil"
          ],
          "warning": ""
        },
        {
          "id": "blaidd.festival",
          "title": "拉塔恩战后与布莱泽交谈",
          "detail": "击败拉塔恩后，在恸哭沙丘战场的赐福附近找布莱泽交谈，听他谈前往永恒之城；不要以为击败首领已经自动完成战后对白。",
          "order": 420,
          "region": "恸哭沙丘",
          "options": [],
          "needs": [
            "story.radahn"
          ],
          "after": [
            "blaidd.wolf",
            "blaidd.darriwil",
            "blaidd.siofra"
          ],
          "warning": ""
        },
        {
          "id": "blaidd.gaol",
          "title": "回访被关押的布莱泽与伊吉，了解安排",
          "detail": "返回宁姆格福无主猎犬的封印监牢，与关在里面的布莱泽互动，可选择放出。再去赐福“通往城寨的道路”找伊吉询问原因；这些是补充剧情，不用回拉塔恩战场找他。",
          "order": 440,
          "region": "无主猎犬封印监牢 / 伊吉处",
          "options": [],
          "needs": [],
          "after": [
            "blaidd.wolf",
            "blaidd.darriwil",
            "blaidd.siofra",
            "blaidd.festival"
          ],
          "warning": ""
        },
        {
          "id": "blaidd.end",
          "title": "菈妮戴戒指后回塔，听完布莱泽台词并完成战斗",
          "detail": "在月光祭坛为菈妮戴戒指后，回到菈妮魔法师塔外，先听完门前布莱泽的对白，再处理敌对战斗。战后收取王室巨剑与防具；半狼头罩是赛尔维斯塔附近的另一件拾取物。",
          "order": 495,
          "region": "菈妮魔法师塔外",
          "options": [],
          "needs": [
            "ranni.marry"
          ],
          "after": [
            "blaidd.wolf",
            "blaidd.darriwil",
            "blaidd.siofra",
            "blaidd.festival",
            "blaidd.gaol"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "iji",
      "name": "军师伊吉",
      "summary": "初遇：利耶尼亚西北、赐福“通往城寨的道路”旁的巨人铁匠。可购买失色锻造石，并通过布莱泽介绍获得相关商店选项。\n菈妮线结束后，要在原来的铁砧旁向他报告布莱泽事件，再刷新收取遗物。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成相关对话与最终回访",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "blaidd",
              "optionIds": [
                "complete"
              ],
              "reason": "伊吉的布莱泽结尾对白需要完成布莱泽后续。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "iji.meet",
          "title": "与伊吉交谈，提及布莱泽并检查商店",
          "detail": "传送到赐福“通往城寨的道路”，找紧邻道路、坐在铁砧旁的伊吉交谈。如果已听过布莱泽的介绍，选择提及布莱泽的相关选项，再检查商店。",
          "order": 320,
          "region": "通往城寨的道路",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "iji.report",
          "title": "布莱泽结尾后向伊吉报告，离开刷新后回访并收取遗物",
          "detail": "完成菈妮塔外布莱泽战斗后，回赐福“通往城寨的道路”旁找伊吉，选择报告布莱泽的结尾，继续交谈至重复。传送离开再回来，在伊吉原来的铁砧位置检查遗物并收取铃珠与头罩。",
          "order": 498,
          "region": "通往城寨的道路",
          "options": [],
          "needs": [
            "blaidd.end"
          ],
          "after": [
            "iji.meet"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "seluvis",
      "name": "魔法教授赛尔维斯",
      "summary": "初遇：为菈妮效力并与投影交谈后，去三姊妹塔南侧的赛尔维斯魔法师塔。\n初始药水只有一份：交基甸处理、交涅斐丽、交食粪者三选一。魔力对蝎与傀儡目标要在菈妮收到猎杀指头刀前完成；后来的琥珀色药水与初始药水不是同一件道具。",
      "defaultOption": "gideon",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "gideon",
          "label": "药水交基甸处理，并取得魔力对蝎",
          "description": "",
          "ending": "",
          "requirements": []
        },
        {
          "id": "nepheli",
          "label": "药水交涅斐丽，取得傀儡与魔力对蝎",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "nepheli",
              "optionIds": [
                "puppet"
              ],
              "reason": "赛尔维斯药水交涅斐丽会失去她的王座结尾，请同步选择傀儡分支。"
            }
          ]
        },
        {
          "id": "dung",
          "label": "药水交食粪者，取得傀儡与魔力对蝎",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "dung",
              "optionIds": [
                "puppet"
              ],
              "reason": "食粪者服药后不能再取得其修复卢恩，请同步选择傀儡分支。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "seluvis.potion",
          "title": "加入菈妮麾下后，找赛尔维斯取得初始药水",
          "detail": "完成菈妮塔内投影对白后，出塔向南去赛尔维斯魔法师塔，找本人交谈接受差事，确认背包取得赛尔维斯的药水。先按计划决定对象，别到圆桌后随手把药交给涅斐丽。",
          "order": 355,
          "region": "赛尔维斯魔法师塔",
          "options": [],
          "needs": [
            "ranni.join"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "seluvis.gideon",
          "title": "向基甸说明药水，交给他处理，再向赛尔维斯回报",
          "detail": "去圆桌厅堂书房找基甸，选择展示赛尔维斯的药水，再选择交给基甸处理。回三姊妹塔的赛尔维斯魔法师塔，向赛尔维斯报告事情已处理，继续开启后续商店对白。",
          "order": 360,
          "region": "圆桌厅堂",
          "options": [
            "gideon"
          ],
          "needs": [],
          "after": [
            "seluvis.potion"
          ],
          "warning": ""
        },
        {
          "id": "seluvis.nepheli",
          "title": "白金村事件后，将药水交给消沉的涅斐丽，回报赛尔维斯",
          "detail": "先完成白金村恶兆猎人事件，再去圆桌厅堂铁匠修古旁向下的楼梯处找消沉的涅斐丽；向基甸问明原因后，返回涅斐丽处选择交出赛尔维斯的药水。之后回赛尔维斯塔报告。此处不要把药交给基甸。",
          "order": 365,
          "region": "圆桌厅堂地下",
          "options": [
            "nepheli"
          ],
          "needs": [
            "nepheli.village"
          ],
          "after": [
            "seluvis.potion",
            "seluvis.gideon"
          ],
          "warning": "不可逆：失去涅斐丽的正常王座结尾。"
        },
        {
          "id": "seluvis.dung",
          "title": "完成壕沟入侵后，将药水交给食粪者，再回报赛尔维斯",
          "detail": "完成食粪者的王城壕沟入侵并回圆桌听后续要求，再回王城下水道的食粪者牢房。对被绑在椅子上的食粪者选择给予赛尔维斯的药水，之后回三姊妹塔找赛尔维斯；不要先交满五枚温床诅咒。",
          "order": 590,
          "region": "王城下水道牢房",
          "options": [
            "dung"
          ],
          "needs": [
            "dung.invader"
          ],
          "after": [
            "seluvis.potion",
            "seluvis.gideon",
            "seluvis.nepheli"
          ],
          "warning": "不可逆：不能再获得食粪者的修复卢恩。"
        },
        {
          "id": "seluvis.cellar",
          "title": "发现傀儡地下室，质问赛尔维斯，按要求购买法术和傀儡推进计划",
          "detail": "到三姊妹塔废墟打破隐藏地板，进入赛尔维斯的傀儡地下室并查看留言，再回赛尔维斯塔质问。领取首个傀儡，按其对白购买法术、使用并继续购买傀儡，直到出现新傀儡或秘密计划选项；兑换需要星光碎片。",
          "order": 595,
          "region": "三姊妹塔隐藏地下室",
          "options": [],
          "needs": [],
          "after": [
            "seluvis.potion",
            "seluvis.gideon",
            "seluvis.nepheli",
            "seluvis.dung"
          ],
          "warning": ""
        },
        {
          "id": "seluvis.amber",
          "title": "取得琥珀星光，交给赛尔维斯，领取魔力对蝎护符",
          "detail": "到亚坛高原、王城外围西侧的隐蔽山谷，在米凯拉与玛莲妮亚雕像附近取得琥珀星光。回赛尔维斯魔法师塔交付并领取魔力对蝎；选择食粪者傀儡时也先兑换完目标。不要为了本步骤把后来的琥珀色药水交给菈妮。",
          "order": 600,
          "region": "亚坛高原",
          "options": [],
          "needs": [],
          "after": [
            "seluvis.potion",
            "seluvis.gideon",
            "seluvis.nepheli",
            "seluvis.dung",
            "seluvis.cellar"
          ],
          "warning": "必须在将猎杀指头刀交给菈妮之前完成目标奖励。"
        }
      ]
    },
    {
      "id": "pidia",
      "name": "毕迪",
      "summary": "位置：卡利亚城寨下层楼上，不能直接从赐福正面走到；要从三姊妹塔一侧跳回屋顶。\n先访问商店，菈妮交出猎杀指头刀后再来收取毕迪遗留物。傀儡种类与赛尔维斯初始药水的去向有关。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "访问商店并回收后续傀儡",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "ranni",
              "optionIds": [
                "complete",
                "final",
                "cursemark"
              ],
              "reason": "毕迪后续遗物需要菈妮交猎杀指头刀后的阶段。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "pidia.shop",
          "title": "从三姊妹塔方向跳下城寨屋顶，找到毕迪并检查商店",
          "detail": "从三姊妹塔区域的悬崖边寻找向下的城寨屋顶，沿屋顶与木平台下降，从屋顶开口进入毕迪所在楼上房间。找到趴着的白金之子毕迪后交谈并检查商店；他不在城寨下层赐福正旁。",
          "order": 345,
          "region": "卡利亚城寨下层",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "pidia.end",
          "title": "菈妮交刀后回访毕迪，收取铃珠和当前分支对应傀儡",
          "detail": "把猎杀指头刀交给菈妮后，再按三姊妹塔悬崖—城寨屋顶—开口的路线返回毕迪处，听傀儡相关事件并收取铃珠及傀儡。若初始药水交给涅斐丽，此处检查涅斐丽·露的傀儡。",
          "order": 615,
          "region": "卡利亚城寨下层",
          "options": [],
          "needs": [
            "ranni.blade"
          ],
          "after": [
            "pidia.shop"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "nepheli",
      "name": "涅斐丽·露",
      "summary": "初遇可在史东薇尔葛瑞克雾门前的小房间；之后在圆桌与白金村继续。\n正常路线需向基甸问明她消沉的原因，把“风暴鹰古王”交给她，最后在蒙葛特战后到葛瑞克王座房收尾。给赛尔维斯药水会改成傀儡路线，无法兼得王座结尾。",
      "defaultOption": "throne",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "throne",
          "label": "给予风暴鹰古王，完成王座结尾",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "kenneth",
              "optionIds": [
                "complete"
              ],
              "reason": "涅斐丽王座路线请一并推进肯尼斯收复海德要塞。"
            }
          ]
        },
        {
          "id": "puppet",
          "label": "饮下赛尔维斯药水，成为傀儡",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "seluvis",
              "optionIds": [
                "nepheli"
              ],
              "reason": "涅斐丽傀儡需要把赛尔维斯的初始药水交给她。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "nepheli.castle",
          "title": "葛瑞克战前与涅斐丽交谈，战后圆桌领取众武护符",
          "detail": "从史东薇尔赐福“深处小房间”走向葛瑞克雾门前庭院，在巨人与士兵附近的侧室找涅斐丽并交谈。击败葛瑞克后到圆桌厅堂找她，继续对话领取众武护符；如果早期已错过，可先查白金村位置。",
          "order": 205,
          "region": "史东薇尔城",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "nepheli.village",
          "title": "与村口涅斐丽交谈，击败恶兆猎人，回圆桌询问涅斐丽与基甸",
          "detail": "到利耶尼亚白金村上坡路旁找涅斐丽，交谈后去石桥后的区域击败恶兆猎人。回圆桌厅堂，在修古旁下楼梯找她，再去基甸书房询问“关于涅斐丽/涅斐丽沮丧的原因”，最后回楼下安慰她。",
          "order": 330,
          "region": "白金村 / 圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [
            "nepheli.castle"
          ],
          "warning": ""
        },
        {
          "id": "nepheli.hawk",
          "title": "通过四钟楼取得风暴鹰古王，交给涅斐丽",
          "detail": "从利耶尼亚四钟楼标示“侯王断崖”的传送门回候王礼拜堂，在教堂侧楼梯上方取得任务道具风暴鹰古王。先确认罗德莉卡已能调灵，再到圆桌修古旁楼梯下找涅斐丽，告诉她已听基甸解释并交出古王；不是交风暴鹰汀涅骨灰。",
          "order": 375,
          "region": "候王礼拜堂 / 圆桌厅堂",
          "options": [
            "throne"
          ],
          "needs": [
            "roderika.tuning"
          ],
          "after": [
            "nepheli.castle",
            "nepheli.village"
          ],
          "warning": ""
        },
        {
          "id": "nepheli.throne",
          "title": "蒙葛特战后，在葛瑞克/深处小房间赐福刷新，进入王座领取古龙岩锻造石",
          "detail": "完成风暴鹰古王、肯尼斯海德要塞相关对白并击败蒙葛特后，传送到赐福「“接肢”葛瑞克」。坐赐福刷新，从战场往北进入王座大厅找涅斐丽，交谈领取古龙岩锻造石；未出现时可到“深处小房间”步行回来并再次刷新。",
          "order": 640,
          "region": "史东薇尔城王座",
          "options": [
            "throne"
          ],
          "needs": [
            "story.morgott",
            "kenneth.fort"
          ],
          "after": [
            "nepheli.castle",
            "nepheli.village",
            "nepheli.hawk"
          ],
          "warning": ""
        },
        {
          "id": "nepheli.puppet",
          "title": "交刀后回访毕迪处，回收涅斐丽傀儡",
          "detail": "确认已把赛尔维斯药水给涅斐丽，并在菈妮收到猎杀指头刀后，再从三姊妹塔悬崖跳下卡利亚城寨屋顶，进入毕迪所在楼层，检查其遗物中的涅斐丽傀儡。此路线不去葛瑞克王座等她。",
          "order": 618,
          "region": "卡利亚城寨毕迪处",
          "options": [
            "puppet"
          ],
          "needs": [
            "seluvis.nepheli",
            "pidia.end"
          ],
          "after": [
            "nepheli.castle",
            "nepheli.village",
            "nepheli.hawk",
            "nepheli.throne"
          ],
          "warning": "不再安排王座结尾。"
        }
      ]
    },
    {
      "id": "kenneth",
      "name": "肯尼斯·海德",
      "summary": "初遇：从赐福“雾林边缘”向东北沿路走，爬上横跨道路的巨大断墙，找正在呼救的肯尼斯。\n他请你夺回雾林东南的海德要塞。夺回后先回这处断墙领奖并决定是否效力，再去海德要塞城墙交谈；最终迁往史东薇尔王座的阶段与涅斐丽路线相连。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。 选项与可改口对白另核对：https://eldenring.wiki.gg/wiki/Kenneth",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "kenneth.request",
          "title": "到雾林边缘东北方断墙，与肯尼斯交谈接委托",
          "detail": "从赐福“雾林边缘”往东北沿大路前进，听见呼救后爬上道路上方的巨大断墙，找到站在高处的肯尼斯·海德。交谈到他明确委托夺回海德要塞；目标要塞在雾林东南方，不是初见的这段断墙。",
          "order": 32,
          "region": "雾林边缘东北方断墙",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "kenneth.fort",
          "title": "夺回海德要塞，回初见断墙选愿意效力，再到要塞城墙交谈",
          "detail": "① 从赐福“海德要塞西方”进要塞，登上城墙，击败会使用鲜血斩击的葛瑞克骑士，取得战灰“鲜血斩击”。\n② 回到赐福“雾林边缘”东北方、初次见肯尼斯的那段高处断墙，报告夺回要塞并领取黄铜短刀；继续交谈，出现效力选择时选“愿意为肯尼斯·海德工作”。若之前选“不愿意”，可再次交谈改口；他已迁移时到海德要塞找他，不是永久断线。\n③ 传送回“海德要塞西方”，重新进要塞并上城墙，找到迁来的肯尼斯，谈到暂时无法册封骑士、要寻找真正领主，直到台词重复。",
          "order": 45,
          "region": "海德要塞",
          "options": [],
          "needs": [],
          "after": [
            "kenneth.request"
          ],
          "warning": ""
        },
        {
          "id": "kenneth.throne",
          "title": "涅斐丽入主后，到葛瑞克王座大厅找肯尼斯交谈",
          "detail": "先确认涅斐丽已收下风暴鹰古王、恶兆王蒙葛特已被击败，并保留肯尼斯存活。到赐福「“接肢”葛瑞克」坐下刷新，从战场向北进入史东薇尔王座大厅，与王座旁的肯尼斯交谈至重复；他不在城堡入口或海德要塞领地内。若涅斐丽还未入主，先完成她的王座前置，再回来检查。",
          "order": 645,
          "region": "史东薇尔城",
          "options": [],
          "needs": [],
          "after": [
            "kenneth.request",
            "kenneth.fort",
            "nepheli.throne"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "gostoc",
      "name": "门卫葛托克",
      "summary": "初遇：史东薇尔城正门旁的小房间，会建议走侧路。葛瑞克战后，他留在首领战场踩踏尸体。\n保留存活并推动涅斐丽王座结尾，可在王座房商店购买额外古龙岩锻造石；击杀取得铃珠会失去这份后期商品。",
      "defaultOption": "alive",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "alive",
          "label": "保留性命，完成商店回访",
          "description": "",
          "ending": "",
          "requirements": []
        },
        {
          "id": "kill",
          "label": "击杀取得铃珠",
          "description": "会失去存活后的古龙岩锻造石商品。",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "gostoc.gate",
          "title": "与葛托克交谈，选择入城路径",
          "detail": "在赐福“史东薇尔正门”附近，进入城门左侧房间找葛托克交谈。可接受侧路建议，也可要求开正门；选择不同入城路不等于关闭他全部后续。",
          "order": 200,
          "region": "史东薇尔城门口",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "gostoc.kill",
          "title": "选择击杀葛托克，收取铃珠",
          "detail": "在史东薇尔城找到葛托克后选择击杀并收取铃珠。该选择会失去他存活后在王座房出售的古龙岩锻造石；不要把杀门卫当成涅斐丽王座路线必须做的步骤。",
          "order": 201,
          "region": "史东薇尔城",
          "options": [
            "kill"
          ],
          "needs": [],
          "after": [
            "gostoc.gate"
          ],
          "warning": ""
        },
        {
          "id": "gostoc.stomp",
          "title": "葛瑞克战后回访葛托克",
          "detail": "击败葛瑞克后回其战场，找踩踏尸体的葛托克交谈。如果此时仍留在战场，继续推进涅斐丽和肯尼斯，不用靠攻击他来触发迁移。",
          "order": 230,
          "region": "葛瑞克赐福",
          "options": [
            "alive"
          ],
          "needs": [],
          "after": [
            "gostoc.gate",
            "gostoc.kill"
          ],
          "warning": ""
        },
        {
          "id": "gostoc.shop",
          "title": "若涅斐丽已入主王座，回访葛托克并检查古龙岩锻造石商品",
          "detail": "涅斐丽进入史东薇尔王座后，从赐福「“接肢”葛瑞克」往北走进王座大厅，找旁边站着的葛托克。打开他的商店，核对并按需购买新增古龙岩锻造石；奖励不是自动给进背包。",
          "order": 648,
          "region": "史东薇尔城王座",
          "options": [
            "alive"
          ],
          "needs": [],
          "after": [
            "gostoc.gate",
            "gostoc.kill",
            "gostoc.stomp",
            "nepheli.throne"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "irina",
      "name": "伊蕾娜与城主艾德格",
      "summary": "初遇：啜泣半岛献祭大桥南侧路边坐着的伊蕾娜。她请你把信交给摩恩城城主艾德格。\n送信、击败城后狮子混种并回访父女后，艾德格会在利耶尼亚复仇者的破屋形成入侵事件，所得葡萄可用于海妲线。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "irina.letter",
          "title": "与伊蕾娜交谈，接过家书",
          "detail": "从宁姆格福越过献祭大桥进入啜泣半岛，在桥南道路旁找坐着的伊蕾娜。听完摩恩城遇袭的说明，选择接受送信请求，确认背包取得伊蕾娜的信。",
          "order": 40,
          "region": "献祭大桥南方",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "irina.edgar",
          "title": "将信交给城主艾德格，听完守城职责",
          "detail": "进入啜泣半岛南端摩恩城，沿城内梯子与城墙绕到高处，找坐着的城主艾德格。选择交出伊蕾娜的信，继续听他说要守护城中的宝剑。",
          "order": 48,
          "region": "摩恩城",
          "options": [],
          "needs": [],
          "after": [
            "irina.letter"
          ],
          "warning": ""
        },
        {
          "id": "irina.boss",
          "title": "击败狮子混种，回报艾德格，再回伊蕾娜处交谈",
          "detail": "绕到摩恩城后方海滩击败狮子混种，取得剑骸大剑。先回摩恩城高处艾德格原位置报告，再回献祭大桥南侧伊蕾娜初见点，查看父女后续并与艾德格交谈至重复。",
          "order": 50,
          "region": "摩恩城",
          "options": [],
          "needs": [],
          "after": [
            "irina.letter",
            "irina.edgar"
          ],
          "warning": ""
        },
        {
          "id": "irina.revenge",
          "title": "击败复仇者艾德格入侵，取得夏玻利利葡萄",
          "detail": "去利耶尼亚西侧赐福“复仇者的破屋”附近，触发复仇者艾德格入侵并击败他，收取夏玻利利葡萄。若没有入侵，先检查摩恩城战后及伊蕾娜遗体旁的艾德格对白是否已完成，再离开刷新。",
          "order": 322,
          "region": "复仇者的破屋",
          "options": [],
          "needs": [],
          "after": [
            "irina.letter",
            "irina.edgar",
            "irina.boss"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "hyetta",
      "name": "海妲",
      "summary": "初遇：伊蕾娜事件后，利耶尼亚赐福“傍湖断崖”旁的盲眼女子。依次在受净化的废墟、门前镇大桥、彼鲁姆教堂交葡萄。\n她最后前往王城地底三指封印。完成该段会接受癫火；想继续选择其他结局，需要米莉森协助分支取得金针并在龙王竞技场使用。",
      "defaultOption": "cleanse",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "accept",
          "label": "完成海妲线，接受癫火",
          "description": "若另一个 NPC 已指定最终结局，计划会追加金针解除流程。",
          "ending": "",
          "requirements": []
        },
        {
          "id": "cleanse",
          "label": "完成海妲线，再解除癫火",
          "description": "需要米莉森协助分支；保留其他结局选项。",
          "ending": "",
          "requirements": []
        },
        {
          "id": "final",
          "label": "本周目选择癫火之王",
          "description": "",
          "ending": "frenzy",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "hyetta.first",
          "title": "伊蕾娜事件后与海妲交谈，交出第一颗葡萄",
          "detail": "完成伊蕾娜与摩恩城相关事件后，到赐福“傍湖断崖”旁找海妲。第一颗夏玻利利葡萄可在史东薇尔通往利耶尼亚的后出口地下房间取得；交给海妲并听完感谢。",
          "order": 290,
          "region": "傍湖断崖",
          "options": [],
          "needs": [
            "irina.boss"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "hyetta.purified",
          "title": "交出废墟地下室取得的葡萄",
          "detail": "到利耶尼亚东南的受净化的废墟，打破遮住地下入口的木板，从地下室取得夏玻利利葡萄。返回废墟外海妲所在处交付；本次不是回傍湖断崖。",
          "order": 310,
          "region": "受净化的废墟",
          "options": [],
          "needs": [],
          "after": [
            "hyetta.first"
          ],
          "warning": ""
        },
        {
          "id": "hyetta.bridge",
          "title": "交出艾德格葡萄，告知葡萄实情，刷新后再次交谈",
          "detail": "到赐福“门前镇大桥”附近找海妲，把复仇者艾德格掉落的葡萄交给她；选择告诉她葡萄的实情。坐赐福或传送离开刷新，再回同一位置交谈，听完她的新想法后再走。",
          "order": 327,
          "region": "门前镇大桥",
          "options": [],
          "needs": [
            "irina.revenge"
          ],
          "after": [
            "hyetta.first",
            "hyetta.purified"
          ],
          "warning": ""
        },
        {
          "id": "hyetta.fingerprint",
          "title": "击败指痕维克，取得指痕葡萄并交给海妲",
          "detail": "去利耶尼亚东北镇静教堂前，击败“准王者”维克的入侵，取得指痕葡萄。前往彼鲁姆教堂找海妲，交出指痕葡萄并听完对白；她这次要的不是普通夏玻利利葡萄。",
          "order": 340,
          "region": "镇静教堂 / 彼鲁姆教堂",
          "options": [],
          "needs": [],
          "after": [
            "hyetta.first",
            "hyetta.purified",
            "hyetta.bridge"
          ],
          "warning": ""
        },
        {
          "id": "hyetta.flame",
          "title": "在弃置恶兆大教堂后进入封印，脱下装备觐见三指，随后与海妲交谈",
          "detail": "在王城下水道击败“恶兆之子”蒙格，从祭台后隐藏道路一路向下到癫火封印。脱下全身装备后调查三指大门接受癫火，随后回门外找海妲，触碰并听完对白，刷新收取癫火圣印记。想走其他结局时，继续完成计划里的用针解除。",
          "order": 675,
          "region": "癫火封印",
          "options": [],
          "needs": [
            "story.morgott"
          ],
          "after": [
            "hyetta.first",
            "hyetta.purified",
            "hyetta.bridge",
            "hyetta.fingerprint"
          ],
          "warning": "接受后锁定癫火结局，其他结局需使用米凯拉的针解除；也会改变梅琳娜的剧情。"
        },
        {
          "id": "hyetta.ending",
          "title": "最终战后选择癫火之王结局",
          "detail": "最终战前确认没有使用米凯拉的针解除癫火。击败艾尔登之兽后，与玛莉卡遗体互动，按当前锁定状态选择癫火之王结局；若还想走其他结局，先不要确认此处的结局互动。",
          "order": 1510,
          "region": "黄金树内",
          "options": [
            "final"
          ],
          "needs": [
            "story.final"
          ],
          "after": [
            "hyetta.first",
            "hyetta.purified",
            "hyetta.bridge",
            "hyetta.fingerprint",
            "hyetta.flame"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "roderika",
      "name": "罗德莉卡",
      "summary": "初遇：宁姆格福风暴山丘破屋内，反复交谈可获得灵魂水母。她之后迁入圆桌厅堂壁炉旁。\n调灵需要在罗德莉卡与铁匠修古之间来回转述，而不是只给一次遗物。圆桌燃烧后再回两人原位置，补完最后对白。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "roderika.shack",
          "title": "反复与罗德莉卡交谈，取得灵魂水母",
          "detail": "到赐福“风暴山丘的破屋”旁进入棚屋，与罗德莉卡反复交谈，听完关于接肢的经历，并确认领取灵魂水母骨灰。若她已去圆桌，可在圆桌继续问取相关物品与对白。",
          "order": 50,
          "region": "风暴山丘破屋",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "roderika.memento",
          "title": "探索蛹群的遗物并回报，若她已移到圆桌则在那里继续对话",
          "detail": "探索史东薇尔城接肢贵族后裔附近的尸堆，拾取蛹群的遗物；若罗德莉卡仍在风暴山丘破屋，就回破屋交给她。她已迁到圆桌时，改去圆桌壁炉旁交谈，不要把旧位置没人误认为失败。",
          "order": 212,
          "region": "史东薇尔城 / 圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [
            "roderika.shack"
          ],
          "warning": ""
        },
        {
          "id": "roderika.tuning",
          "title": "往返罗德莉卡与铁匠修古之间交谈，刷新后解锁调灵",
          "detail": "在圆桌壁炉旁找罗德莉卡，再到走廊铁砧前找修古，选择询问她的调灵才能；回壁炉旁把修古的话告诉她，再回修古处劝他教她。坐圆桌赐福刷新，确认罗德莉卡已坐到修古对面并能调灵。",
          "order": 245,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [
            "roderika.shack",
            "roderika.memento"
          ],
          "warning": ""
        },
        {
          "id": "roderika.ash",
          "title": "黑剑战后回访罗德莉卡，听完关于修古的对白",
          "detail": "黑剑战后返回燃烧的圆桌厅堂，在修古附近找罗德莉卡，选择关于修古、离开圆桌等可用话题并听到重复。她的调灵服务与这段结尾对白要分别确认。",
          "order": 1235,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [
            "story.maliketh"
          ],
          "after": [
            "roderika.shack",
            "roderika.memento",
            "roderika.tuning"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "hewg",
      "name": "铁匠修古",
      "summary": "位置：圆桌厅堂走廊内、铁砧前的铁匠。负责锻造强化，也参与罗德莉卡调灵的解锁对白。\n主线推进后可补听弑神武器与祈祷的内容；圆桌燃烧、修古失忆后仍在原来的铁砧附近回访。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "hewg.meet",
          "title": "与修古交谈，了解锻造和祈祷",
          "detail": "进入圆桌厅堂后从中央大厅往走廊走，找铁砧前被锁链束缚的修古。先听完初见对白，再查看锻造；出现祈祷相关话题时可继续询问。",
          "order": 100,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "hewg.roderika",
          "title": "与修古谈罗德莉卡的调灵才能",
          "detail": "在圆桌走廊铁砧前与修古谈罗德莉卡，听到她有调灵才能后，回中央大厅壁炉旁把消息告诉她。再回修古处选择帮助、教导她的相关选项，最后坐圆桌赐福刷新位置。",
          "order": 240,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [
            "hewg.meet"
          ],
          "warning": ""
        },
        {
          "id": "hewg.godslaying",
          "title": "在主线推进后听完弑神武器相关对话",
          "detail": "随着取得大卢恩和王城主线推进，多次回圆桌厅堂铁砧前找修古，检查祈祷、弑神武器等新增话题。已经听过时没有新增选项属正常，不要求特定武器一定强化到某一等级才算听完。",
          "order": 990,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [
            "hewg.meet",
            "hewg.roderika"
          ],
          "warning": ""
        },
        {
          "id": "hewg.end",
          "title": "圆桌燃烧后回访修古与罗德莉卡，听完失忆相关对白",
          "detail": "击败黑剑后回燃烧的圆桌厅堂，仍到原走廊铁砧位置与修古交谈，听失忆后的话语；再在旁边找罗德莉卡，补完她对修古的回应。",
          "order": 1240,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [
            "story.maliketh"
          ],
          "after": [
            "hewg.meet",
            "hewg.roderika",
            "hewg.godslaying"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "jellyfish",
      "name": "水母姐妹",
      "summary": "位置：巨人山顶观星废墟中会呼唤姐妹的水母。需要先从罗德莉卡取得灵魂水母骨灰。\n在废墟旁召唤灵魂水母，让姐妹重逢，即可解除地下室封印；这不是击杀现场水母的任务。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "召唤水母，完成姐妹重逢",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "roderika",
              "optionIds": [
                "complete"
              ],
              "reason": "水母姐妹重逢需要先取得罗德莉卡给予的灵魂水母。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "jellyfish.reunion",
          "title": "在呼唤姐妹的水母旁召唤灵魂水母，进入解封地下室",
          "detail": "进入巨人山顶后到观星废墟，靠近会说话的水母，在允许召唤骨灰的位置召出灵魂水母。听完姐妹重逢的对白，进入旁边已经解封的地下室收取宝箱；不要杀掉原地的水母。",
          "order": 735,
          "region": "巨人山顶观星废墟",
          "options": [],
          "needs": [
            "roderika.shack",
            "story.mountains"
          ],
          "after": [],
          "warning": ""
        }
      ]
    },
    {
      "id": "gideon",
      "name": "“百智爵士”基甸",
      "summary": "位置：圆桌厅堂书房内的“百智爵士”基甸。先完成双指觐见，才会展开半神与涅斐丽相关话题。\n报告隐藏半神探索情报可获得奖励；所有想领取的情报奖励应在击败黑剑、基甸离开圆桌之前处理。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "gideon.intro",
          "title": "觐见双指后与基甸交谈，听半神情报",
          "detail": "取得大卢恩、在圆桌见过恩雅和双指后，去恩夏原先站立位置后方的书房找基甸。依次询问已出现的半神话题，了解目标与隐藏半神线索。",
          "order": 110,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "gideon.village",
          "title": "白金村后询问涅斐丽与秘密符节情报",
          "detail": "完成白金村、恩夏入侵或涅斐丽消沉对白后，回圆桌厅堂基甸书房。选择“关于涅斐丽”“涅斐丽沮丧的原因”等可用话题；有秘密符节话题时一并询问，再回修古旁楼下找涅斐丽继续。",
          "order": 332,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [
            "gideon.intro"
          ],
          "warning": ""
        },
        {
          "id": "gideon.report",
          "title": "向基甸报告已探索的蒙格温王朝、圣树等隐藏半神情报并领取奖励",
          "detail": "每次探索到蒙格温王朝、米凯拉圣树等隐藏半神区域，或击败相应半神后，回圆桌基甸书房选择新增的情报报告选项并领取奖励。报告入口地点和击败首领可能是不同话题；黑剑战前把想要的报告都说完。",
          "order": 890,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [
            "gideon.intro",
            "gideon.village"
          ],
          "warning": "在黑剑玛利喀斯前完成报告和奖励领取。"
        }
      ]
    },
    {
      "id": "latenna",
      "name": "白金之子勒缇娜",
      "summary": "前置：在利耶尼亚白金村找到伪装成罐子的阿尔布斯，取得圣树秘密符节右半。\n穿过湖旁结晶洞窟，在狼眠的破屋招募勒缇娜；之后去索尔城取左半，进入化圣雪原，最终在离教废屋召唤她。建议拿索尔城左半之前先招募。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "latenna.albus",
          "title": "找到伪装成罐子的阿尔布斯，取得秘密符节右半",
          "detail": "前往利耶尼亚西南山崖下的白金村，从村内赐福沿坡往上，在路边轻打伪装成罐子的阿尔布斯，再与其交谈取得圣树秘密符节（右）。不要继续攻击变回人形的阿尔布斯。",
          "order": 333,
          "region": "白金村",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "latenna.recruit",
          "title": "通关洞窟，与勒缇娜交谈并收下骨灰",
          "detail": "从利耶尼亚南侧湖岸进入湖旁结晶洞窟，打通首领房后沿出口走到狼眠的破屋，找巨狼旁的勒缇娜。持有符节右半时继续交谈并接受她同行，确认取得白金之子勒缇娜骨灰。",
          "order": 338,
          "region": "湖旁结晶洞窟 / 狼眠破屋",
          "options": [],
          "needs": [],
          "after": [
            "latenna.albus"
          ],
          "warning": "保守顺序：在索尔城取得左半秘密符节之前招募。"
        },
        {
          "id": "latenna.sol",
          "title": "击败老将尼奥，取得秘密符节左半",
          "detail": "前往巨人山顶北部索尔城，击败老将尼奥，从首领房后方升降机上塔顶，拾取圣树秘密符节（左）。不是只击败首领就自动拿到符节。",
          "order": 805,
          "region": "巨人山顶索尔城",
          "options": [],
          "needs": [
            "story.mountains"
          ],
          "after": [
            "latenna.albus",
            "latenna.recruit"
          ],
          "warning": ""
        },
        {
          "id": "latenna.church",
          "title": "使用秘密符节进入雪原，在巨大白金之子旁召唤勒缇娜并领取奖励",
          "detail": "在洛德大升降机切换为高举秘密符节，穿过通往圣树的密道进入化圣雪原。去雪原西北的离教废屋，站到巨大白金之子女性旁，使用现场互动提示召唤勒缇娜，听完对白并收取古龙岩失色锻造石。",
          "order": 820,
          "region": "化圣雪原离教废屋",
          "options": [],
          "needs": [],
          "after": [
            "latenna.albus",
            "latenna.recruit",
            "latenna.sol"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "d",
      "name": "D 与 D 的弟弟",
      "summary": "D 可在宁姆格福水唤村附近或圆桌遇见，首枚死根可引出野兽祭司线索。\n圆桌的侵蚀短剑事件会留下孪生套装；把套装交给希芙拉导水桥的 D 的弟弟，可在菲雅完成死龙事件后收取兄弟后续。保留套装分支不安排这次交付。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "推进兄弟对白，完成复仇后续",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "fia",
              "optionIds": [
                "rune",
                "final"
              ],
              "reason": "D 的弟弟最终回访需要菲雅完成死龙与修复卢恩阶段。"
            }
          ]
        },
        {
          "id": "keep",
          "label": "推进 D 前半段，保留孪生套装",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "d.deathroot",
          "title": "取得首枚死根，与 D 交谈获得古兰格线索",
          "detail": "在宁姆格福水唤村击败提比亚的唤声船，取得死根。找水唤村附近或圆桌厅堂的 D 谈死根，听取野兽祭司介绍和传送门线索；传送门位于玛莉卡第三教堂后方的水边草丛。",
          "order": 55,
          "region": "水唤村 / 圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "d.dagger",
          "title": "菲雅交出侵蚀短剑时，将其交给 D，刷新后前往新开的房间",
          "detail": "在圆桌菲雅房间接受拥抱并取得侵蚀短剑后，去中央大厅找 D，选择交出侵蚀短剑。坐圆桌赐福或传送离开再回来，去修古走廊尽头新打开的房间查看。",
          "order": 530,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [
            "d.deathroot"
          ],
          "warning": "",
          "completionNeeds": [
            "fia.hug",
            "d.deathroot"
          ]
        },
        {
          "id": "d.armor",
          "title": "收取 D 的孪生套装和铃珠，听完菲雅的话",
          "detail": "进入圆桌厅堂修古走廊尽头的新房间，听完菲雅在 D 遗体旁的对白，收取孪生套装和铃珠。后续想交给弟弟时，要保留整套，不要出售。",
          "order": 535,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [
            "d.deathroot",
            "d.dagger"
          ],
          "warning": ""
        },
        {
          "id": "d.giveArmor",
          "title": "把完整孪生套装交给 D 的弟弟",
          "detail": "到诺克隆恩希芙拉导水桥、英雄石像鬼首领房前，找坐着的 D 的弟弟，交出完整孪生套装。这里可以先交付，不必等菲雅完成死龙事件；菲雅完成后再回访死王子宝座。",
          "order": 540,
          "region": "希芙拉导水桥",
          "options": [
            "complete"
          ],
          "needs": [],
          "after": [
            "d.deathroot",
            "d.dagger",
            "d.armor"
          ],
          "warning": ""
        },
        {
          "id": "d.brother",
          "title": "菲雅完成死龙事件后，回访死王子宝座的 D 的弟弟",
          "detail": "菲雅已完成死龙并留下修复卢恩后，回深根底层死王子宝座查看 D 的弟弟的复仇后续。套装在导水桥交过即可，不必重新交付。",
          "order": 870,
          "region": "死王子宝座",
          "options": [
            "complete"
          ],
          "needs": [
            "fia.rune"
          ],
          "after": [
            "d.deathroot",
            "d.dagger",
            "d.armor",
            "d.giveArmor"
          ],
          "warning": ""
        },
        {
          "id": "d.end",
          "title": "听完弟弟对白，刷新后收取孪生套装与紧密孪生剑",
          "detail": "在深根底层赐福“死王子宝座”附近与 D 的弟弟交谈到重复，传送离开再回来。在原位置拾取孪生套装与紧密孪生剑，确认物品已入背包。",
          "order": 875,
          "region": "死王子宝座",
          "options": [
            "complete"
          ],
          "needs": [],
          "after": [
            "d.deathroot",
            "d.dagger",
            "d.armor",
            "d.brother",
            "d.giveArmor"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "fia",
      "name": "死眠少女菲雅",
      "summary": "位置：圆桌厅堂的床榻房间。拥抱可展开秘密、罗杰尔调查线索及侵蚀短剑事件。\n后段到深根底层死王子宝座，把菈妮前半段取得的死亡咒痕交给她，进入梦境击败死龙，取得死王子的修复卢恩。D 弟弟的后续可排在取卢恩后。",
      "defaultOption": "rune",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "rune",
          "label": "完成支线，取得死王子的修复卢恩",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "ranni",
              "optionIds": [
                "complete",
                "final",
                "cursemark"
              ],
              "reason": "菲雅的死龙阶段需要菈妮前半段取得死亡的咒痕。"
            }
          ]
        },
        {
          "id": "final",
          "label": "本周目选择潜藏者时代",
          "description": "",
          "ending": "fia",
          "requirements": [
            {
              "questId": "ranni",
              "optionIds": [
                "complete",
                "final",
                "cursemark"
              ],
              "reason": "菲雅的死龙阶段需要菈妮前半段取得死亡的咒痕。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "fia.hug",
          "title": "接受菲雅拥抱，听秘密；持有床帘恩泽时留意生命值减益",
          "detail": "在圆桌厅堂修古附近的床榻房间与菲雅交谈，选择接受拥抱，再听秘密或请求相关话题。她给的床帘恩泽留在背包时会有生命值减益；不想保留减益时可使用并在赐福休息。",
          "order": 115,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "fia.dagger",
          "title": "推进到菲雅交出侵蚀短剑，交给 D 后刷新并回访新房间",
          "detail": "推进主线后回圆桌床榻房接受拥抱，选新增的请求话题取得侵蚀短剑。把短剑交给中央大厅的 D，刷新圆桌，再去修古走廊尽头新开房间找菲雅，听完她离开的对白。",
          "order": 525,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [
            "fia.hug"
          ],
          "warning": "",
          "completionNeeds": [
            "fia.hug",
            "d.deathroot"
          ]
        },
        {
          "id": "fia.depths",
          "title": "经导水桥石像鬼或癫火封印隐藏通路进入深根底层，击败菲雅英雄",
          "detail": "可从诺克隆恩希芙拉导水桥击败英雄石像鬼后坐石棺进入深根底层，也可从癫火封印后隐藏通路进入。沿树根到赐福“树根前路”后方，进入死王子区域击败菲雅的英雄们。",
          "order": 650,
          "region": "深根底层",
          "options": [],
          "needs": [],
          "after": [
            "fia.hug",
            "fia.dagger"
          ],
          "warning": ""
        },
        {
          "id": "fia.mark",
          "title": "选择拥抱菲雅，将死亡的咒痕交给她，反复刷新并交谈",
          "detail": "在死王子宝座前与菲雅交谈，选择想接受拥抱的回答，而不是来杀她。把死亡的咒痕交给她，交谈到重复；坐附近赐福刷新，再回菲雅旁继续交谈，直到她入睡。",
          "order": 655,
          "region": "死王子宝座",
          "options": [],
          "needs": [
            "ranni.cursemark"
          ],
          "after": [
            "fia.hug",
            "fia.dagger",
            "fia.depths"
          ],
          "warning": ""
        },
        {
          "id": "fia.rune",
          "title": "触碰熟睡的菲雅，击败死龙弗尔桑克斯，取得修复卢恩",
          "detail": "菲雅入睡后，在死王子宝座处与她互动进入死眠梦境，击败死龙弗尔桑克斯。返回现实后从菲雅处拾取死王子的修复卢恩；如果还做 D 弟弟线，先确认卢恩已拿到再刷新后续。",
          "order": 660,
          "region": "死王子宝座",
          "options": [],
          "needs": [],
          "after": [
            "fia.hug",
            "fia.dagger",
            "fia.depths",
            "fia.mark"
          ],
          "warning": ""
        },
        {
          "id": "fia.ending",
          "title": "用死王子的修复卢恩选择潜藏者时代",
          "detail": "击败最终首领后与玛莉卡遗体互动，选择使用死王子的修复卢恩，走潜藏者时代。若先前接受癫火，应在进入这一步前完成米凯拉的针解除。",
          "order": 1510,
          "region": "黄金树内",
          "options": [
            "final"
          ],
          "needs": [
            "story.final"
          ],
          "after": [
            "fia.hug",
            "fia.dagger",
            "fia.depths",
            "fia.mark",
            "fia.rune"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "gurranq",
      "name": "野兽祭司古兰格",
      "summary": "位置：盖利德东北的野兽神殿。可通过玛莉卡第三教堂后方传送门抵达，也可自行前往。\n目标是逐次交付九枚死根。第四枚后会出现一次敌对，需要打到求饶就停手；九枚交齐后的古龙岩锻造石与天空城主线战斗分别记录。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "gurranq.first",
          "title": "经传送门或自行前往野兽神殿，交付第一枚死根",
          "detail": "到野兽神殿室内找古兰格，选择交出死根，确认拿到野兽眼等初次奖励。D 提供的传送门在宁姆格福玛莉卡第三教堂后方水边草丛，不是神殿门口的大型守卫。",
          "order": 65,
          "region": "野兽神殿",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "gurranq.early",
          "title": "收集并交付第 2～4 枚死根",
          "detail": "继续探索提比亚唤声船、死亡降临的地下墓地、黑刀地下墓地等死根来源，每取得一枚就回野兽神殿交古兰格。逐次确认奖励与已交数量，准备交完第四枚后处理敌对。",
          "order": 380,
          "region": "各地地下墓地 / 唤声船",
          "options": [],
          "needs": [],
          "after": [
            "gurranq.first"
          ],
          "warning": ""
        },
        {
          "id": "gurranq.hostile",
          "title": "第 4 枚后遇到古兰格敌对，将其打到求饶后停手并刷新",
          "detail": "交过第四枚死根后在野兽神殿刷新，若古兰格主动攻击，将其生命打到触发求饶即可立刻停手。听完求饶、离开或坐赐福刷新，再回来确认能继续交付死根；不要追击到死亡。",
          "order": 385,
          "region": "野兽神殿",
          "options": [],
          "needs": [],
          "after": [
            "gurranq.first",
            "gurranq.early"
          ],
          "warning": "不要击杀古兰格。"
        },
        {
          "id": "gurranq.late",
          "title": "继续收齐并交付全部 9 枚死根，领取最终奖励",
          "detail": "继续搜集格密尔英雄墓地、巨人山顶地下墓地、通往圣树的密道及余下唤声船等处死根，回野兽神殿逐次交付。总数达到九枚后听完古兰格最后对白，确认收到古龙岩锻造石。",
          "order": 900,
          "region": "英雄墓地 / 巨人山顶 / 圣树密道",
          "options": [],
          "needs": [
            "story.mountains"
          ],
          "after": [
            "gurranq.first",
            "gurranq.early",
            "gurranq.hostile"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "goldmask",
      "name": "金面具与柯林",
      "summary": "初期在圆桌认识柯林；到亚坛后他迁到亚坛大道，金面具站在穿林大桥北端。先把位置告诉柯林，再到桥上一起回访。\n王城阶段学回归性原理、以37智力解读拉达冈雕像并报告金面具。巨人山顶补对白后，灰烬王城领取修复卢恩；遗忘药水只影响柯林的后续位置。",
      "defaultOption": "rune",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "rune",
          "label": "取得完美律法的修复卢恩",
          "description": "",
          "ending": "",
          "requirements": []
        },
        {
          "id": "tonic",
          "label": "向柯林提出遗忘药水，完成金面具线",
          "description": "药水改变柯林结尾位置与对白，不妨碍金面具道具。",
          "ending": "",
          "requirements": [
            {
              "questId": "rya",
              "optionIds": [
                "spare"
              ],
              "reason": "柯林的遗忘药水尝试需要从塔妮丝取得药水，并保留不给菈雅。"
            }
          ]
        },
        {
          "id": "final",
          "label": "本周目选择律法时代",
          "description": "",
          "ending": "goldmask",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "goldmask.roundtable",
          "title": "与柯林交谈；到亚坛后听其离开圆桌的决定",
          "detail": "在圆桌厅堂中央区域与柯林交谈并查看祷告商店。抵达亚坛后再回圆桌听他说要寻找金面具，刷新后才到亚坛大道找他，不是在原位等他自动给出所有话题。",
          "order": 120,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "goldmask.bridge",
          "title": "找到柯林与金面具，告知柯林金面具位置，刷新后回访",
          "detail": "从赐福“亚坛大道的三叉口”沿北侧大道找到迁来的柯林；再到穿林大桥北端找站在断桥边的金面具。回亚坛大道告诉柯林金面具的位置，刷新后去穿林大桥北端与两人交谈。",
          "order": 520,
          "region": "亚坛大道 / 穿林大桥",
          "options": [],
          "needs": [],
          "after": [
            "goldmask.roundtable"
          ],
          "warning": ""
        },
        {
          "id": "goldmask.secret",
          "title": "取得黄金律法原本学习回归性原理，以 37 智力在拉达冈雕像前施法，报告金面具",
          "detail": "在王城黄金树大教堂上层取得黄金律法原本，交给柯林或结缘教堂米利耶，学习回归性原理。凑足37智力后到王城拉达冈雕像前官方留言处施法，读取新留言；再去王城竞技场外山坡找金面具与柯林，报告秘密并听完对白。",
          "order": 600,
          "region": "王城罗德尔",
          "options": [],
          "needs": [
            "story.capital"
          ],
          "after": [
            "goldmask.roundtable",
            "goldmask.bridge"
          ],
          "warning": "在王城变化前完成；为保留对白，计划也安排在大锅点火前。"
        },
        {
          "id": "goldmask.snow",
          "title": "回访金面具与柯林，听完新对白",
          "detail": "到巨人山顶观星废墟附近的大桥，在桥上找金面具与柯林，询问他们的新对白，反复交谈至重复。这里不是亚坛的穿林大桥。",
          "order": 745,
          "region": "巨人山顶桥上",
          "options": [],
          "needs": [
            "story.mountains"
          ],
          "after": [
            "goldmask.roundtable",
            "goldmask.bridge",
            "goldmask.secret"
          ],
          "warning": ""
        },
        {
          "id": "goldmask.tonic",
          "title": "向柯林提出遗忘药水并记录其回应",
          "detail": "持有从塔妮丝取得且未交给菈雅的遗忘药水，到巨人山顶观星废墟附近桥上找柯林，选择提出给予药水，听完回应并记住这次选择。它改变柯林后续去留，不代表金面具修复卢恩被放弃。",
          "order": 746,
          "region": "巨人山顶桥上",
          "options": [
            "tonic"
          ],
          "needs": [
            "rya.tonic"
          ],
          "after": [
            "goldmask.roundtable",
            "goldmask.bridge",
            "goldmask.secret",
            "goldmask.snow"
          ],
          "warning": ""
        },
        {
          "id": "goldmask.rune",
          "title": "找到金面具遗体取得完美律法修复卢恩，刷新取装备，再按分支回访柯林",
          "detail": "黑剑战后到灰烬王城，在原竞技场方向、断桥下方山坡找金面具遗体，拾取完美律法的修复卢恩；离开刷新可再检查其套装。柯林则按药水对白分支到灰烬王城或巨人山顶原桥处回访。",
          "order": 1250,
          "region": "灰烬王城",
          "options": [],
          "needs": [
            "story.maliketh"
          ],
          "after": [
            "goldmask.roundtable",
            "goldmask.bridge",
            "goldmask.secret",
            "goldmask.snow",
            "goldmask.tonic"
          ],
          "warning": ""
        },
        {
          "id": "goldmask.ending",
          "title": "用完美律法修复卢恩选择律法时代",
          "detail": "最终战后与玛莉卡遗体互动，选择使用完美律法的修复卢恩，走律法时代。若曾接受癫火，先完成龙王竞技场用针解除，不要把只拿到金针当成已解除。",
          "order": 1510,
          "region": "黄金树内",
          "options": [
            "final"
          ],
          "needs": [
            "story.final"
          ],
          "after": [
            "goldmask.roundtable",
            "goldmask.bridge",
            "goldmask.secret",
            "goldmask.snow",
            "goldmask.tonic",
            "goldmask.rune"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "dung",
      "name": "食粪者",
      "summary": "初遇：到达亚坛后，圆桌厅堂一间新开的房间里出现食粪者红灵。持一枚温床诅咒才能取得下水道牢房钥匙。\n释放真身、完成壕沟入侵后，选择交五枚诅咒取得修复卢恩，或服赛尔维斯药水成为傀儡。二者互斥；与虾哥并行时特别核对他的迁移状态。",
      "defaultOption": "rune",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "rune",
          "label": "交付五枚温床诅咒，取得修复卢恩",
          "description": "",
          "ending": "",
          "requirements": []
        },
        {
          "id": "final",
          "label": "本周目选择绝望时代",
          "description": "",
          "ending": "dung",
          "requirements": []
        },
        {
          "id": "puppet",
          "label": "服下赛尔维斯药水，取得傀儡",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "seluvis",
              "optionIds": [
                "dung"
              ],
              "reason": "食粪者傀儡需要赛尔维斯把初始药水留给食粪者。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "dung.curse",
          "title": "取得一枚温床诅咒，与圆桌食粪者对话取得下水道钥匙",
          "detail": "先在王城等处取得一枚温床诅咒，再去圆桌厅堂孪生老妪附近新开的房间找食粪者红灵。交谈到他给出下水道监牢钥匙，留意这里的红灵不是地牢里可喂药的真身。",
          "order": 570,
          "region": "王城 / 圆桌厅堂",
          "options": [],
          "needs": [
            "story.capital"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "dung.release",
          "title": "找到牢房中的食粪者，将其释放；回圆桌查看信息",
          "detail": "从王城井口进入弃置恶兆的地底，到赐福“地底大道旁”后继续找通往食粪者牢房的支路。用钥匙开门，和里面的食粪者选择让他离开牢房；回圆桌原房间读其留下的挑战信息。",
          "order": 575,
          "region": "王城下水道",
          "options": [],
          "needs": [],
          "after": [
            "dung.curse"
          ],
          "warning": ""
        },
        {
          "id": "dung.invader",
          "title": "在壕沟击败食粪者入侵，回圆桌听后续要求",
          "detail": "去王城外围北侧壕沟、虾哥煮螃蟹的位置附近，按当前 NPC 状态交谈并刷新，击败食粪者入侵。然后回圆桌厅堂原房间找他的红灵，听完让玩家收集诅咒的要求，再回下水道决定最终交付。",
          "order": 585,
          "region": "王城外围壕沟",
          "options": [],
          "needs": [],
          "after": [
            "dung.curse",
            "dung.release"
          ],
          "warning": ""
        },
        {
          "id": "dung.seeds",
          "title": "收集并交出合计五枚温床诅咒，取得忌讳诅咒修复卢恩",
          "detail": "保留原王城东边城墙区域与城寨内的两枚温床诅咒，再搜火山官邸、圣树祈祷室后续区域等来源，合计至少五枚。回弃置恶兆地底原牢房，把诅咒交给椅子上的食粪者直至累计五枚，取得忌讳诅咒修复卢恩；不要先给药水。",
          "order": 870,
          "region": "王城 / 火山官邸 / 圣树",
          "options": [
            "rune",
            "final"
          ],
          "needs": [],
          "after": [
            "dung.curse",
            "dung.release",
            "dung.invader"
          ],
          "warning": "原王城的两枚先取；不必为第五枚强制牺牲虾哥。"
        },
        {
          "id": "dung.puppet",
          "title": "服药后向赛尔维斯兑换食粪者傀儡",
          "detail": "确认已在王城地牢给食粪者喝下赛尔维斯药水，再回三姊妹塔赛尔维斯魔法师塔，推进傀儡购买对白，用星光碎片兑换食粪者的傀儡。必须在菈妮收到猎杀指头刀、赛尔维斯死亡前完成目标。",
          "order": 610,
          "region": "赛尔维斯魔法师塔",
          "options": [
            "puppet"
          ],
          "needs": [
            "seluvis.dung"
          ],
          "after": [
            "dung.curse",
            "dung.release",
            "dung.invader",
            "dung.seeds"
          ],
          "warning": ""
        },
        {
          "id": "dung.ending",
          "title": "用忌讳诅咒修复卢恩选择绝望时代",
          "detail": "最终战后与玛莉卡遗体互动，选择使用忌讳诅咒的修复卢恩，走绝望时代。当前若仍受癫火锁定，先按计划使用米凯拉的针解除。",
          "order": 1510,
          "region": "黄金树内",
          "options": [
            "final"
          ],
          "needs": [
            "story.final"
          ],
          "after": [
            "dung.curse",
            "dung.release",
            "dung.invader",
            "dung.seeds",
            "dung.puppet"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "boggart",
      "name": "流氓（黑卫大虾哥）",
      "summary": "初遇：利耶尼亚赐福“煮虾子的破屋”旁。先接菈雅项链委托再买项链，之后买虾会推动他去王城外壕沟。\n是否与食粪者入侵相遇影响其生死。想保留商店时，本表采用先处理入侵、再推动他迁移的保守候选顺序；已迁移的旧存档需核对现场状态。",
      "defaultOption": "merchant",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "merchant",
          "label": "完成项链和虾蟹商店",
          "description": "与食粪者并行时先处理入侵，再买虾触发迁移；此保命顺序在 Mod 中仍需核对。",
          "ending": "",
          "requirements": []
        },
        {
          "id": "curse",
          "label": "推进壕沟悲剧，收取温床诅咒",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "dung",
              "optionIds": [
                "rune",
                "final",
                "puppet"
              ],
              "reason": "虾哥的壕沟悲剧需要推进食粪者入侵。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "boggart.necklace",
          "title": "先向菈雅接项链委托，再从虾哥买回项链",
          "detail": "先去远眺岛附近凉亭找菈雅接丢失项链委托，再到赐福“煮虾子的破屋”旁找流氓，选择购买项链。若计划保留虾哥且食粪者线未处理完，暂时别急着再买虾推动迁移。",
          "order": 306,
          "region": "煮虾子的破屋",
          "options": [],
          "needs": [
            "rya.request"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "boggart.prawn",
          "title": "购买虾并交谈，推动虾哥前往王城外围",
          "detail": "按保命候选路线，先完成食粪者的王城壕沟入侵，再回煮虾子的破屋买虾并听对白。之后到王城外围北侧壕沟找迁来的虾哥，确认能买螃蟹；已提前迁移时，按现场状态核对，不能保证这条补做顺序能逆转死亡。",
          "order": 592,
          "region": "煮虾子的破屋 / 王城外围",
          "options": [
            "merchant"
          ],
          "needs": [],
          "after": [
            "boggart.necklace",
            "dung.invader"
          ],
          "warning": "保命顺序为来源候选方案，当前 Mod 未实机验证；已提前迁移时需按角色实际状态判断。"
        },
        {
          "id": "boggart.move",
          "title": "购买虾，前往王城壕沟与虾哥交谈",
          "detail": "在煮虾子的破屋买回项链后，再购买虾并听完对白；推进到王城后去外围北侧壕沟找他，购买螃蟹并谈食粪者。此分支准备让他卷入后续事件。",
          "order": 555,
          "region": "煮虾子的破屋 / 王城外围",
          "options": [
            "curse"
          ],
          "needs": [],
          "after": [
            "boggart.necklace",
            "boggart.prawn"
          ],
          "warning": ""
        },
        {
          "id": "boggart.end",
          "title": "食粪者事件后检查虾哥遗物与温床诅咒",
          "detail": "释放食粪者、收到壕沟挑战后，去王城外围北侧壕沟与虾哥交谈，离开刷新再检查其状态，处理食粪者入侵。事件后在虾哥原位置收取铃珠、装备及温床诅咒；不要回利耶尼亚破屋找遗物。",
          "order": 586,
          "region": "王城外围壕沟",
          "options": [
            "curse"
          ],
          "needs": [
            "dung.invader"
          ],
          "after": [
            "boggart.necklace",
            "boggart.prawn",
            "boggart.move"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "thops",
      "name": "魔法师托普斯",
      "summary": "初遇：利耶尼亚入口处的伊利斯教堂，靠近傍湖断崖。托普斯希望重返学院，但会拒绝收走玩家仍需使用的第一把钥匙。\n真正交付的是学院屋顶路线取得的第二把辉石钥匙。之后到校舍内的教室外检查他的结尾，并回伊利斯教堂查粪金龟。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "thops.church",
          "title": "与托普斯交谈，了解学院钥匙",
          "detail": "从赐福“傍湖断崖”向西南附近的伊利斯教堂走，找坐在断墙旁的托普斯交谈，听学院辉石钥匙话题并查看商店。他拒收玩家第一把钥匙是正常对白，不能因此勾成已交钥匙。",
          "order": 285,
          "region": "伊利斯教堂",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "thops.key",
          "title": "探索学院屋顶，取得教堂吊灯上的第二把学院辉石钥匙",
          "detail": "在雷亚卢卡利亚学院沿辩论室后的庭院、屋顶路线探索，抵达杜鹃教堂上方梁架，跳到吊灯处拾取第二把学院辉石钥匙。湖中辉石龙后方的第一把开门钥匙不是本次交付目标。",
          "order": 318,
          "region": "雷亚卢卡利亚学院屋顶",
          "options": [],
          "needs": [],
          "after": [
            "thops.church"
          ],
          "warning": ""
        },
        {
          "id": "thops.give",
          "title": "把第二把钥匙交给托普斯，听完对白并取得动作",
          "detail": "拿到第二把钥匙后回利耶尼亚伊利斯教堂，找到托普斯，选择交出学院辉石钥匙并继续交谈，确认取得相关动作。先收齐想买的魔法，再离开刷新。",
          "order": 320,
          "region": "伊利斯教堂",
          "options": [],
          "needs": [],
          "after": [
            "thops.church",
            "thops.key"
          ],
          "warning": ""
        },
        {
          "id": "thops.end",
          "title": "回访托普斯的结尾并收取法术、铃珠；再检查教堂粪金龟",
          "detail": "传送到赐福“校舍内的教室”，从教室朝外走，在外墙边桌旁找托普斯遗体，收取托普斯的力场、法杖与铃珠。再回伊利斯教堂原位置，检查新出现的粪金龟奖励。",
          "order": 323,
          "region": "校舍内的教室外 / 伊利斯教堂",
          "options": [],
          "needs": [],
          "after": [
            "thops.church",
            "thops.key",
            "thops.give"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "alexander",
      "name": "“战士壶”亚历山大",
      "summary": "初遇：宁姆格福圣人桥附近高地，亚历山大陷在地里，需要从背后击打脱困。\n完整路线经过盖尔坑道、拉塔恩战场、利耶尼亚油壶脱困与格密尔熔岩湖，最后在天空城决斗。提前击杀只能取较弱碎片，也会失去小壶需要的壶内容物。",
      "defaultOption": "duel",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "duel",
          "label": "完成天空城决斗，取得碎片与壶内容物",
          "description": "",
          "ending": "",
          "requirements": []
        },
        {
          "id": "kill",
          "label": "提前击杀，取得战士壶碎片",
          "description": "会失去天空城的亚历山大的碎片和小壶后续所需内容物。",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "alexander.limgrave",
          "title": "帮助亚历山大脱困，听完对白",
          "detail": "从赐福“圣人桥”附近听呼救，上到旁边高地，找卡在地里的亚历山大。先答应帮忙，再站到其背后击打让他脱困，随后交谈并收取谢礼。",
          "order": 38,
          "region": "圣人桥附近",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "alexander.kill",
          "title": "选择提前击杀亚历山大",
          "detail": "在宁姆格福选择攻击并杀死亚历山大，收取战士壶碎片。该选择不会再获得天空城决斗的亚历山大的碎片，也没有留给壶村小壶的内容物。",
          "order": 39,
          "region": "宁姆格福",
          "options": [
            "kill"
          ],
          "needs": [],
          "after": [
            "alexander.limgrave"
          ],
          "warning": "不可再完成亚历山大完整线与小壶交付。"
        },
        {
          "id": "alexander.gael",
          "title": "在祭典前回访亚历山大；已移走时去红狮子城继续",
          "detail": "在祭典开启前，可到宁姆格福与盖利德交界的盖尔坑道侧门内找亚历山大，听完去祭典的对白。若他已去红狮子城，直接在祭典广场继续，不需要反复刷新空门口。",
          "order": 395,
          "region": "盖尔坑道侧门",
          "options": [
            "duel"
          ],
          "needs": [],
          "after": [
            "alexander.limgrave",
            "alexander.kill"
          ],
          "warning": ""
        },
        {
          "id": "alexander.radahn",
          "title": "拉塔恩战后与亚历山大交谈",
          "detail": "击败拉塔恩后不要立刻离开，在恸哭沙丘战场找正在收集遗骸的亚历山大，交谈到台词重复；后续才去利耶尼亚书斋附近找他。",
          "order": 422,
          "region": "恸哭沙丘",
          "options": [
            "duel"
          ],
          "needs": [
            "story.radahn"
          ],
          "after": [
            "alexander.limgrave",
            "alexander.kill",
            "alexander.gael"
          ],
          "warning": ""
        },
        {
          "id": "alexander.oil",
          "title": "用油壶润滑后击打脱困，再与亚历山大交谈",
          "detail": "到利耶尼亚东侧、卡利亚书斋南方高地找再次卡住的亚历山大。先用油壶命中他润滑，再从背后击打脱困，和他交谈；油壶配方可向希芙拉河商人取得相关制作笔记。",
          "order": 450,
          "region": "利耶尼亚书斋南方悬崖",
          "options": [
            "duel"
          ],
          "needs": [],
          "after": [
            "alexander.limgrave",
            "alexander.kill",
            "alexander.gael",
            "alexander.radahn"
          ],
          "warning": ""
        },
        {
          "id": "alexander.lava",
          "title": "与熔岩中训练的亚历山大交谈，取得壶头罩",
          "detail": "前往格密尔火山熔岩土龙所在熔岩湖，找站在岩浆中训练的亚历山大，从可交谈距离与他对话，领取壶头罩。不要仅经过附近赐福就当作已经完成对白。",
          "order": 720,
          "region": "格密尔火山熔岩湖",
          "options": [
            "duel"
          ],
          "needs": [],
          "after": [
            "alexander.limgrave",
            "alexander.kill",
            "alexander.gael",
            "alexander.radahn",
            "alexander.oil"
          ],
          "warning": ""
        },
        {
          "id": "alexander.duel",
          "title": "找到亚历山大，接受决斗，取得亚历山大的碎片和壶内容物",
          "detail": "进入天空城后，经需石剑钥匙开启的升降机支路前往龙教堂上方区域，沿浮空建筑找到亚历山大。与他交谈并接受决斗，胜利后再次互动/拾取，确认拿到亚历山大的碎片和亚历山大的内容物。",
          "order": 1120,
          "region": "逐渐崩毁的法姆·亚兹拉",
          "options": [
            "duel"
          ],
          "needs": [
            "story.forge"
          ],
          "after": [
            "alexander.limgrave",
            "alexander.kill",
            "alexander.gael",
            "alexander.radahn",
            "alexander.oil",
            "alexander.lava"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "diallos",
      "name": "骑士狄亚罗斯",
      "summary": "初遇：圆桌厅堂，他在寻找随从拉妮亚。利耶尼亚学院门前镇的屋顶可见他在拉妮亚遗体旁。\n后续迁入火山官邸，最终到壶村照顾小壶。壶村事件需要多次离开刷新与分别交谈，不是单纯打完一个首领就全部结束。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "diallos.roundtable",
          "title": "与狄亚罗斯交谈，听他寻找拉妮亚",
          "detail": "在圆桌厅堂中央区域找到狄亚罗斯，询问他寻找拉妮亚的事，记住对方线索。若他已离开，下一处去利耶尼亚学院门前镇的淹水建筑区。",
          "order": 125,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "diallos.lanya",
          "title": "找到狄亚罗斯和拉妮亚遗体，回圆桌继续交谈",
          "detail": "从赐福“学院门前镇”往北探索淹水建筑，在一处低矮屋顶找站在拉妮亚遗体旁的狄亚罗斯，听完悲愤对白。随后回圆桌厅堂找他，继续谈复仇与火山官邸。",
          "order": 308,
          "region": "学院门前镇",
          "options": [],
          "needs": [],
          "after": [
            "diallos.roundtable"
          ],
          "warning": ""
        },
        {
          "id": "diallos.manor",
          "title": "加入官邸后反复回访狄亚罗斯，推进其离开的决定",
          "detail": "加入火山官邸后，在有委托信的客房里找狄亚罗斯。每完成一轮官邸委托后都回客房与他交谈，直到他说出动摇、离开相关对白；不要只找塔妮丝领奖而略过他。",
          "order": 705,
          "region": "火山官邸",
          "options": [],
          "needs": [],
          "after": [
            "diallos.roundtable",
            "diallos.lanya"
          ],
          "warning": ""
        },
        {
          "id": "diallos.jarburg",
          "title": "与小壶反复交谈并刷新，直到狄亚罗斯出现",
          "detail": "前往利耶尼亚东侧卡利亚书斋南方悬崖下的壶村，与村口台阶上的小壶反复交谈，离开传送或坐赐福刷新。继续听亚历山大、盗猎者等话题，直到在村中房屋找到新来的狄亚罗斯。",
          "order": 805,
          "region": "壶村",
          "options": [],
          "needs": [],
          "after": [
            "diallos.roundtable",
            "diallos.lanya",
            "diallos.manor"
          ],
          "warning": ""
        },
        {
          "id": "diallos.end",
          "title": "盗猎者事件后，与狄亚罗斯和小壶交谈，刷新收取遗物",
          "detail": "在壶村分别与狄亚罗斯、小壶交谈后，多次离开再回来推进盗猎者事件。见到倒地的狄亚罗斯时与其交谈，可选肯定他保护村子的回答，再找小壶；刷新后到狄亚罗斯倒下的位置取面具、花瓣鞭等遗物。",
          "order": 810,
          "region": "壶村",
          "options": [],
          "needs": [],
          "after": [
            "diallos.roundtable",
            "diallos.lanya",
            "diallos.manor",
            "diallos.jarburg"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "jarbairn",
      "name": "小壶（壶村）",
      "summary": "位置：利耶尼亚卡利亚书斋南侧悬崖下的壶村，小壶坐在村口房屋台阶附近。\n先通过多次刷新听完村落对白，再推进狄亚罗斯守护事件；最后交出亚历山大在天空城留下的内容物，取得友好壶护符。不要攻击村里的壶。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成壶村后续并取得友好壶护符",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "alexander",
              "optionIds": [
                "duel"
              ],
              "reason": "小壶需要亚历山大完成天空城决斗留下的内容物。"
            },
            {
              "questId": "diallos",
              "optionIds": [
                "complete"
              ],
              "reason": "小壶的完整壶村剧情需要狄亚罗斯迁入并完成守护事件。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "jarbairn.meet",
          "title": "与小壶交谈，答应当维壶师；刷新并听亚历山大与盗猎者对白",
          "detail": "从卡利亚书斋南侧悬崖寻找可逐级下跳的墓碑平台，进入壶村后找台阶旁的小壶，答应当维壶师并让他检查手。交谈、离开刷新，继续听采花、亚历山大与盗猎者相关话题，不要打村民。",
          "order": 325,
          "region": "壶村",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "jarbairn.diallos",
          "title": "狄亚罗斯事件后听完小壶对白，离开并刷新",
          "detail": "狄亚罗斯在壶村完成守护事件后，先与小壶交谈，去看狄亚罗斯，再回小壶处听后续。传送离开再回来，直到小壶已经能够继续谈自己的旅程；不要只捡装备就跳过对白。",
          "order": 815,
          "region": "壶村",
          "options": [],
          "needs": [
            "diallos.end"
          ],
          "after": [
            "jarbairn.meet"
          ],
          "warning": ""
        },
        {
          "id": "jarbairn.innards",
          "title": "把亚历山大内容物交给小壶，刷新后取得友好壶护符",
          "detail": "完成亚历山大的天空城决斗并拿到亚历山大的内容物后，回壶村台阶处交给小壶，听完对白。传送离开再回来，在小壶原来坐的位置拾取友好壶护符。",
          "order": 1130,
          "region": "壶村",
          "options": [],
          "needs": [
            "alexander.duel"
          ],
          "after": [
            "jarbairn.meet",
            "jarbairn.diallos"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "rya",
      "name": "菈雅（拉雅）",
      "summary": "初遇：利耶尼亚远眺岛附近的凉亭。买回项链后，她会在亚坛邀请你去火山官邸。\n官邸阶段随委托回访，发现蛇人形态并交蛇的羊膜。最后在艾格蕾教堂后方隐藏房间选择：不给药不杀、交遗忘药水、或依请求杀死她。",
      "defaultOption": "spare",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "spare",
          "label": "不杀、不交药，取得离别信",
          "description": "",
          "ending": "",
          "requirements": []
        },
        {
          "id": "tonic",
          "label": "给予遗忘药水，走失忆结尾",
          "description": "",
          "ending": "",
          "requirements": []
        },
        {
          "id": "kill",
          "label": "依其请求杀死菈雅",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "rya.request",
          "title": "与菈雅交谈，接取项链委托",
          "detail": "到利耶尼亚远眺岛附近、带望远镜图标一带的凉亭找菈雅，听项链被偷的请求，接受帮忙。她不在帕奇所在的远眺岛赐福旁坐着。",
          "order": 302,
          "region": "远眺岛附近凉亭",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "rya.invite",
          "title": "从虾哥买回项链交还菈雅，取得官邸邀请函",
          "detail": "到赐福“煮虾子的破屋”旁找流氓，付费买回菈雅的项链，再回原凉亭交给菈雅。听完邀请并确认取得火山官邸邀请函；是否继续买虾按虾哥分支决定。",
          "order": 309,
          "region": "煮虾子的破屋 / 凉亭",
          "options": [],
          "needs": [],
          "after": [
            "rya.request"
          ],
          "warning": ""
        },
        {
          "id": "rya.altus",
          "title": "在亚坛回访菈雅，接受官邸传送邀请",
          "detail": "经迪可达斯升降机到亚坛时，在升降机上层附近找菈雅；走古遗迹断崖到亚坛时，去卢克斯废墟附近查找。与她交谈接受牵手传送，抵达火山官邸；传送本身与正式答应塔妮丝加入是两次互动。",
          "order": 505,
          "region": "迪可达斯升降机上层 / 卢克斯废墟",
          "options": [],
          "needs": [],
          "after": [
            "rya.request",
            "rya.invite"
          ],
          "warning": ""
        },
        {
          "id": "rya.snake",
          "title": "加入官邸后随委托推进回访菈雅，发现蛇人形态与秘密通道",
          "detail": "在火山官邸完成委托后回客房区找菈雅，听她提到隔壁声响，并查看蛇人形态。用客房钥匙检查房间隐藏墙/通道，之后再回菈雅处谈所见；塔妮丝位于大厅，可补问她对菈雅的解释。",
          "order": 715,
          "region": "火山官邸",
          "options": [],
          "needs": [
            "tanith.join"
          ],
          "after": [
            "rya.request",
            "rya.invite",
            "rya.altus"
          ],
          "warning": ""
        },
        {
          "id": "rya.amnion",
          "title": "击败神皮贵族取得蛇的羊膜，交给菈雅",
          "detail": "沿官邸秘密通道探索牢镇，击败艾格蕾教堂的神皮贵族，在教堂祭台拾取蛇的羊膜。回火山官邸客房找菈雅，选择交出羊膜并听完其身世对白。",
          "order": 725,
          "region": "艾格蕾教堂 / 火山官邸",
          "options": [],
          "needs": [],
          "after": [
            "rya.request",
            "rya.invite",
            "rya.altus",
            "rya.snake"
          ],
          "warning": ""
        },
        {
          "id": "rya.tonic",
          "title": "向塔妮丝询问菈雅，取得遗忘药水",
          "detail": "菈雅收到羊膜并离开客房后，到火山官邸大厅找塔妮丝，询问菈雅的去向和苦恼，取得遗忘药水。拿药不等于必须使用；给柯林或菈雅的计划要避免重复消耗。",
          "order": 730,
          "region": "火山官邸",
          "options": [],
          "needs": [],
          "after": [
            "rya.request",
            "rya.invite",
            "rya.altus",
            "rya.snake",
            "rya.amnion"
          ],
          "warning": ""
        },
        {
          "id": "rya.spare",
          "title": "找到菈雅，选择不杀她、不给药水",
          "detail": "从艾格蕾教堂升降机及教堂后方牢镇道路，找到菈雅躲藏的小房间。面对请求时不杀她，也不要交遗忘药水，先离开；拉卡德战后还要回来交谈与刷新取信。",
          "order": 735,
          "region": "艾格蕾教堂后方隐藏房间",
          "options": [
            "spare"
          ],
          "needs": [],
          "after": [
            "rya.request",
            "rya.invite",
            "rya.altus",
            "rya.snake",
            "rya.amnion",
            "rya.tonic"
          ],
          "warning": ""
        },
        {
          "id": "rya.drink",
          "title": "将遗忘药水交给菈雅",
          "detail": "前往艾格蕾教堂后方牢镇的菈雅藏身小房间，与她交谈后选择交出塔妮丝的遗忘药水。确认已给药，再推进拉卡德战；此路线不再拿离别信结尾当同一个目标。",
          "order": 735,
          "region": "艾格蕾教堂后方隐藏房间",
          "options": [
            "tonic"
          ],
          "needs": [],
          "after": [
            "rya.request",
            "rya.invite",
            "rya.altus",
            "rya.snake",
            "rya.amnion",
            "rya.tonic",
            "rya.spare"
          ],
          "warning": ""
        },
        {
          "id": "rya.kill",
          "title": "按请求杀死菈雅并收取奖励",
          "detail": "在艾格蕾教堂后方菈雅藏身的小房间，按其请求攻击并杀死她，收取狄蒂卡之祸。该选择不可逆，不会再出现她离开官邸的信。",
          "order": 735,
          "region": "艾格蕾教堂后方隐藏房间",
          "options": [
            "kill"
          ],
          "needs": [],
          "after": [
            "rya.request",
            "rya.invite",
            "rya.altus",
            "rya.snake",
            "rya.amnion",
            "rya.tonic",
            "rya.spare",
            "rya.drink"
          ],
          "warning": "该结尾不可逆。"
        },
        {
          "id": "rya.letter",
          "title": "拉卡德战后回访并刷新，取得信件与狄蒂卡之祸",
          "detail": "击败拉卡德后先回菈雅藏身的小房间，与她听完最后对白；传送离开再回来，在原位置拾取菈雅的信及狄蒂卡之祸。不是回利耶尼亚最初的凉亭取信。",
          "order": 803,
          "region": "菈雅最后停留的房间",
          "options": [
            "spare"
          ],
          "needs": [
            "story.rykard"
          ],
          "after": [
            "rya.request",
            "rya.invite",
            "rya.altus",
            "rya.snake",
            "rya.amnion",
            "rya.tonic",
            "rya.spare",
            "rya.drink",
            "rya.kill"
          ],
          "warning": ""
        },
        {
          "id": "rya.forget",
          "title": "拉卡德战后回访失忆菈雅，刷新检查遗留物",
          "detail": "给过药水并击败拉卡德后，回火山官邸客房查看失忆的菈雅，交谈到重复。离开刷新后再检查她所在处及遗留的狄蒂卡之祸；按角色当前位置核对，不找离别信。",
          "order": 803,
          "region": "火山官邸",
          "options": [
            "tonic"
          ],
          "needs": [
            "story.rykard"
          ],
          "after": [
            "rya.request",
            "rya.invite",
            "rya.altus",
            "rya.snake",
            "rya.amnion",
            "rya.tonic",
            "rya.spare",
            "rya.drink",
            "rya.kill",
            "rya.letter"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "tanith",
      "name": "塔妮丝与火山官邸",
      "summary": "位置：格密尔火山火山官邸大厅，坐着的塔妮丝身旁有熔炉骑士。答应加入后取得客房钥匙，委托信在客房桌上。\n完成三份主委托并回大厅领奖后再打拉卡德；拉卡德战后回大厅听她离开，再去拉卡德遗体处决定是否杀她触发骑士。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成委托，保留塔妮丝",
          "description": "",
          "ending": "",
          "requirements": []
        },
        {
          "id": "knight",
          "label": "完成委托后，击杀塔妮丝并挑战骑士",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "tanith.join",
          "title": "与塔妮丝交谈加入官邸，取得客房钥匙并检查委托信",
          "detail": "到火山官邸大厅找塔妮丝，选择愿意加入火山官邸，取得客房钥匙。打开走廊客房，与房内 NPC 交谈并从桌上拾取第一封委托信；要补帕奇虹彩石事件时先完成那段再加入。",
          "order": 510,
          "region": "火山官邸",
          "options": [],
          "needs": [],
          "after": [
            "patches.kick"
          ],
          "warning": ""
        },
        {
          "id": "tanith.istvan",
          "title": "入侵古老骑士伊修托邦，回报塔妮丝领取奖励",
          "detail": "读火山官邸委托信，去宁姆格福北部斗技场附近使用红色入侵印击败古老骑士伊修托邦，收取鳞片套装。回火山官邸大厅报告塔妮丝并领取魔法“熔岩球”，再去客房桌上检查下一封信。",
          "order": 700,
          "region": "宁姆格福斗技场附近",
          "options": [],
          "needs": [],
          "after": [
            "tanith.join"
          ],
          "warning": ""
        },
        {
          "id": "tanith.rileigh",
          "title": "取得下一封信，击败黄昏将尽莱利，回报领取奖励",
          "detail": "从官邸客房桌上取下一封信，到亚坛高原目标点使用红色印击败“黄昏将尽”莱利。返回火山官邸大厅找塔妮丝报告，领取蛇骨刀，再回客房与贝纳尔及其他 NPC 交谈并取红色书信。",
          "order": 705,
          "region": "亚坛高原",
          "options": [],
          "needs": [],
          "after": [
            "tanith.join",
            "tanith.istvan"
          ],
          "warning": ""
        },
        {
          "id": "tanith.juno",
          "title": "击败尤诺·霍斯劳，回官邸大厅向塔妮丝领取掠夺浮雕坠饰",
          "detail": "持红色书信进入巨人山顶，在地图标记处、通往离群独行者破屋的区域使用红色入侵印，击败“血言骑士”尤诺·霍斯劳。回火山官邸大厅向塔妮丝报告，领取掠夺浮雕坠饰；其他所选专属委托也要领奖后再打拉卡德。",
          "order": 750,
          "region": "巨人山顶",
          "options": [],
          "needs": [
            "story.mountains"
          ],
          "after": [
            "tanith.join",
            "tanith.istvan",
            "tanith.rileigh"
          ],
          "warning": ""
        },
        {
          "id": "tanith.aftermath",
          "title": "击败拉卡德后回访塔妮丝，再去拉卡德战场听完对白",
          "detail": "击败拉卡德后先回火山官邸大厅找塔妮丝，听完她准备离开的对白，再坐赐福刷新。传送到拉卡德首领战场，在蛇尸附近找到塔妮丝，继续听对白；此时可保留她，不必攻击。",
          "order": 802,
          "region": "火山官邸 / 拉卡德战场",
          "options": [],
          "needs": [
            "story.rykard"
          ],
          "after": [
            "tanith.join",
            "tanith.istvan",
            "tanith.rileigh",
            "tanith.juno"
          ],
          "warning": ""
        },
        {
          "id": "tanith.knight",
          "title": "击杀塔妮丝，击败入侵的熔炉骑士，收取装备与祷告",
          "detail": "在拉卡德首领战场确认塔妮丝已出现在蛇尸旁，再选择杀死她。随后应对塔妮丝的熔炉骑士入侵，胜利后检查塔妮丝遗物和祷告奖励；此分支会永久失去活着的塔妮丝。",
          "order": 812,
          "region": "拉卡德战场",
          "options": [
            "knight"
          ],
          "needs": [],
          "after": [
            "tanith.join",
            "tanith.istvan",
            "tanith.rileigh",
            "tanith.juno",
            "tanith.aftermath"
          ],
          "warning": "杀死塔妮丝不可逆；舞娘打击乐器交付没有已知额外推进奖励。"
        }
      ]
    },
    {
      "id": "bernahl",
      "name": "骑士贝纳尔",
      "summary": "初遇：宁姆格福赐福“习战者的破屋”内的骑士贝纳尔，白天可买战灰。\n加入官邸并推进委托后，他会给王城联合入侵信；在王城城寨一楼协助他后，要回官邸客房领奖。最后去天空城大桥侧边支路，处理他的入侵。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "bernahl.shack",
          "title": "与贝纳尔交谈，检查战灰商店",
          "detail": "白天到赐福“习战者的破屋”，进入屋内与骑士贝纳尔交谈，选择认同战斗道路的回答后查看战灰商店。夜间若出现铃珠猎人，先在赐福消磨时间到白天再回来找本人。",
          "order": 58,
          "region": "习战者的破屋",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "bernahl.letter",
          "title": "推进官邸委托后与贝纳尔交谈，取得联合入侵书信",
          "detail": "完成官邸前两份主委托并回塔妮丝处领取奖励后，去火山官邸放委托信的客房找贝纳尔，听完叛律相关对白，取得给贝纳尔的信/联合入侵目标。不要只在最初的习战者破屋找他。",
          "order": 712,
          "region": "火山官邸",
          "options": [],
          "needs": [
            "tanith.rileigh"
          ],
          "after": [
            "bernahl.shack"
          ],
          "warning": ""
        },
        {
          "id": "bernahl.capital",
          "title": "协助贝纳尔击败离群魔法师维赫勒与白狼战鬼，回报领取格密尔之怒",
          "detail": "进入尚未变灰的王城，到赐福“城寨一楼”所在的仿圆桌建筑，在一楼大厅寻找贝纳尔的红色协助印。进入其世界，击败“白狼战鬼”巴格莱姆与“离群魔法师”维赫勒；回火山官邸客房找贝纳尔报告，领取格密尔之怒，再考虑打拉卡德。",
          "order": 605,
          "region": "王城城寨一楼",
          "options": [],
          "needs": [
            "story.capital"
          ],
          "after": [
            "bernahl.shack",
            "bernahl.letter"
          ],
          "warning": "在击败拉卡德和王城变灰前完成委托并回报。"
        },
        {
          "id": "bernahl.invasion",
          "title": "完成官邸后续，在桥侧支路击败贝纳尔入侵，取得装备与亵渎兽爪",
          "detail": "在天空城到赐福“大桥侧边”，上坡到大桥后往黑剑首领房相反方向走，沿支路下楼梯前往建筑。途中处理贝纳尔入侵，收取吞世权杖、聚兽套装和亵渎兽爪；这是本人入侵，不是王城的协助印。",
          "order": 1140,
          "region": "天空城大桥侧边",
          "options": [],
          "needs": [
            "story.rykard",
            "story.forge"
          ],
          "after": [
            "bernahl.shack",
            "bernahl.letter",
            "bernahl.capital"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "gowry",
      "name": "贤者格威",
      "summary": "位置：盖利德瑟利亚镇南侧、腐败病教堂山脚下的格威破屋，门外附近有巨犬。\n他负责修无垢金针，米莉森离开教堂、取得义手及完成最后选择时都有新增对白。虫丝和动作要在破屋本人处检查，不是去教堂买。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "推进格威对白与奖励",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "millicent",
              "optionIds": [
                "assist",
                "invade"
              ],
              "reason": "格威完整对白需推进米莉森的后续选择。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "gowry.request",
          "title": "听取救助米莉森委托",
          "detail": "到盖利德瑟利亚镇南侧格威的破屋，与坐着的格威交谈，接受救助腐败病教堂米莉森的请求，听取无垢金针与瑟利亚封印线索。避免把门外巨犬引进屋内误伤他。",
          "order": 390,
          "region": "格威的破屋",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "gowry.repair",
          "title": "击败老将欧尼尔取得无垢金针，交格威修复，刷新后取回",
          "detail": "在艾奥尼亚沼泽击败老将欧尼尔取得无垢金针，回瑟利亚镇南侧格威破屋交给格威。传送离开再回来，与他交谈取回修好的金针，然后才送到山上的腐败病教堂。",
          "order": 397,
          "region": "艾奥尼亚沼泽 / 格威破屋",
          "options": [],
          "needs": [],
          "after": [
            "gowry.request"
          ],
          "warning": "",
          "completionNeeds": [
            "gowry.request"
          ]
        },
        {
          "id": "gowry.shop",
          "title": "米莉森取得义手后回访格威，学习虫丝并听完对白",
          "detail": "将女武神义手交给亚坛的米莉森后，回盖利德瑟利亚镇南侧格威破屋，查看新增虫丝祷告并听关于米莉森的对白，继续交谈检查相关动作与背景话题。",
          "order": 730,
          "region": "格威的破屋",
          "options": [],
          "needs": [
            "millicent.prosthesis"
          ],
          "after": [
            "gowry.request",
            "gowry.repair"
          ],
          "warning": ""
        },
        {
          "id": "gowry.end",
          "title": "米莉森最终选择后回访格威，按实际状态收取遗物或保留 NPC",
          "detail": "米莉森在圣树选择协助或入侵后，回盖利德格威破屋找格威，听与该结果对应的对白。如果他已死亡则检查遗物；仍存活时是否击杀由玩家决定，不把攻击格威当成必做交谈。",
          "order": 880,
          "region": "格威的破屋",
          "options": [],
          "needs": [],
          "after": [
            "gowry.request",
            "gowry.repair",
            "gowry.shop",
            "millicent.assist",
            "millicent.invade"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "millicent",
      "name": "米莉森",
      "summary": "初遇：盖利德腐败病教堂，需先将老将欧尼尔掉落的无垢金针交格威修好。\n她会经过格威破屋、近黄金树的山丘、风车村、古遗迹降雪谷和圣树祈祷室。最后金色印协助可取金针，红色印入侵得义手，解除癫火必须选协助。",
      "defaultOption": "assist",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "assist",
          "label": "协助米莉森，取得金针后续",
          "description": "",
          "ending": "",
          "requirements": []
        },
        {
          "id": "invade",
          "label": "入侵米莉森，取得米莉森的义手",
          "description": "该分支不提供解除癫火所需的协助路线金针。",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "millicent.repair",
          "title": "击败老将欧尼尔，将无垢金针交格威修复，刷新取回",
          "detail": "到盖利德艾奥尼亚沼泽中心击败老将欧尼尔，取得无垢金针。回瑟利亚镇南侧格威破屋交针修理，离开刷新后再次找格威取回；与格威线同时安排时，这是同一次修针，不必重复收集。",
          "order": 398,
          "region": "艾奥尼亚沼泽 / 格威的破屋",
          "options": [],
          "needs": [],
          "after": [
            "gowry.repair"
          ],
          "warning": "",
          "completionNeeds": [
            "gowry.request"
          ]
        },
        {
          "id": "millicent.church",
          "title": "把修好的无垢金针交给米莉森，刷新后交谈领取义手剑士护符",
          "detail": "登上瑟利亚镇东侧山坡到腐败病教堂，找坐在墙边的米莉森，选择交出修好的无垢金针。坐教堂赐福刷新后再次交谈，确认取得义手剑士的传说护符，并听她准备离开。",
          "order": 400,
          "region": "腐败病教堂",
          "options": [],
          "needs": [],
          "after": [
            "millicent.repair"
          ],
          "warning": ""
        },
        {
          "id": "millicent.shack",
          "title": "米莉森离开教堂后在格威破屋回访她，再刷新回访格威",
          "detail": "米莉森离开腐败病教堂后，到山脚下格威的破屋找她，交谈到重复。传送离开再回来，米莉森离去、格威重新出现时，再听格威新增的对白。",
          "order": 405,
          "region": "格威的破屋",
          "options": [],
          "needs": [],
          "after": [
            "millicent.repair",
            "millicent.church"
          ],
          "warning": ""
        },
        {
          "id": "millicent.prosthesis",
          "title": "从日荫城箱子取得女武神义手，交给米莉森",
          "detail": "进入亚坛北部日荫城，从城墙与木架路线探索放有宝箱的房间，取得女武神的义手；不用为此先击败铁棘艾隆梅尔。到赐福“近黄金树的山丘”北侧山坡找米莉森，交出义手并听完对白。",
          "order": 525,
          "region": "日荫城 / 近黄金树的山丘",
          "options": [],
          "needs": [],
          "after": [
            "millicent.repair",
            "millicent.church",
            "millicent.shack"
          ],
          "warning": ""
        },
        {
          "id": "millicent.windmill",
          "title": "击败神皮使徒，刷新后与米莉森交谈",
          "detail": "到亚坛高原风车村多米努拉，击败村顶神皮使徒。坐村顶赐福或传送刷新，再在首领战场附近找米莉森交谈，听她准备继续北行。",
          "order": 540,
          "region": "风车村",
          "options": [],
          "needs": [],
          "after": [
            "millicent.repair",
            "millicent.church",
            "millicent.shack",
            "millicent.prosthesis"
          ],
          "warning": ""
        },
        {
          "id": "millicent.snow",
          "title": "在巨人山顶赐福回访米莉森",
          "detail": "进入巨人山顶后，在赐福“古遗迹降雪谷”旁找米莉森，交谈听取圣树与符节线索。她不在观星废墟桥上的金面具、柯林位置。",
          "order": 740,
          "region": "古遗迹降雪谷",
          "options": [],
          "needs": [
            "story.mountains"
          ],
          "after": [
            "millicent.repair",
            "millicent.church",
            "millicent.shack",
            "millicent.prosthesis",
            "millicent.windmill"
          ],
          "warning": ""
        },
        {
          "id": "millicent.prayer",
          "title": "经化圣雪原仪典镇进入圣树，与米莉森交谈",
          "detail": "通过圣树秘密符节进入化圣雪原，解开仪典镇封印并传送进圣树；推进到艾布雷菲尔赐福“祈祷室”，找旁边的米莉森，听完她关于玛莲妮亚的对白。",
          "order": 850,
          "region": "圣树祈祷室",
          "options": [],
          "needs": [],
          "after": [
            "millicent.repair",
            "millicent.church",
            "millicent.shack",
            "millicent.prosthesis",
            "millicent.windmill",
            "millicent.snow"
          ],
          "warning": ""
        },
        {
          "id": "millicent.tree",
          "title": "击败腐败池中的腐烂树灵，刷新检查召唤印",
          "detail": "从圣树赐福“排水通道”返回外侧树根与腐败池区域，击败池中腐烂树灵。离开坐赐福刷新，再回池边高地寻找金色和红色召唤印；没看到时先确认米莉森的祈祷室对白。",
          "order": 855,
          "region": "圣树排水通道附近",
          "options": [],
          "needs": [],
          "after": [
            "millicent.repair",
            "millicent.church",
            "millicent.shack",
            "millicent.prosthesis",
            "millicent.windmill",
            "millicent.snow",
            "millicent.prayer"
          ],
          "warning": ""
        },
        {
          "id": "millicent.assist",
          "title": "使用金色印协助米莉森击败四姐妹，返回与她交谈，离开刷新后取无垢金针",
          "detail": "在腐烂树灵战后区域使用金色召唤印，帮助米莉森击败四姐妹。回自己的世界后，到腐败池边找负伤的米莉森，听完对白；别攻击或从高处跳到她身上。传送离开再回来，在原地拾取无垢金针。",
          "order": 860,
          "region": "圣树排水通道附近",
          "options": [
            "assist"
          ],
          "needs": [],
          "after": [
            "millicent.repair",
            "millicent.church",
            "millicent.shack",
            "millicent.prosthesis",
            "millicent.windmill",
            "millicent.snow",
            "millicent.prayer",
            "millicent.tree"
          ],
          "warning": "不要攻击或踩到米莉森；红色印属于对立入侵分支。"
        },
        {
          "id": "millicent.needle",
          "title": "击败玛莲妮亚，对花朵使用无垢金针，换取米凯拉的针",
          "detail": "前往圣树底层击败玛莲妮亚，战后靠近首领房的巨大猩红花朵，使用/归还协助米莉森取得的无垢金针，换取米凯拉的针与奖励。若要解除癫火，还要到龙王竞技场实际使用米凯拉的针。",
          "order": 865,
          "region": "米凯拉的圣树 / 玛莲妮亚花朵",
          "options": [
            "assist"
          ],
          "needs": [],
          "after": [
            "millicent.repair",
            "millicent.church",
            "millicent.shack",
            "millicent.prosthesis",
            "millicent.windmill",
            "millicent.snow",
            "millicent.prayer",
            "millicent.tree",
            "millicent.assist"
          ],
          "warning": "用于解除癫火时，还要在龙王竞技场真正使用米凯拉的针。"
        },
        {
          "id": "millicent.invade",
          "title": "使用红色印入侵米莉森，收取米莉森的义手",
          "detail": "在腐烂树灵战后区域使用红色召唤印，作为入侵者击败米莉森，确认取得米莉森的义手。该选择不可再获得协助分支留下的无垢金针，因此不能靠此路线完成用针解除癫火。",
          "order": 860,
          "region": "圣树排水通道附近",
          "options": [
            "invade"
          ],
          "needs": [],
          "after": [
            "millicent.repair",
            "millicent.church",
            "millicent.shack",
            "millicent.prosthesis",
            "millicent.windmill",
            "millicent.snow",
            "millicent.prayer",
            "millicent.tree",
            "millicent.assist",
            "millicent.needle"
          ],
          "warning": "不可同时取得协助分支的金针。"
        }
      ]
    },
    {
      "id": "kale",
      "name": "商人咖列",
      "summary": "位置：宁姆格福赐福“艾雷教堂”旁的商人咖列。购买工具皮袋可解锁制作；雾林听到狼嚎后，向他询问可取得弹指动作。\n此处只收录本体事件，不加入重回巅峰自定义的咖列扩展剧情。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "kale.merchant",
          "title": "访问咖列，购买工具皮袋等所需物品",
          "detail": "从赐福“艾雷教堂”走到教堂内火堆旁找咖列，交谈并购买工具皮袋，按需购买望远镜和制作笔记；工具皮袋是制作系统道具，不需要杀死商人取得。",
          "order": 15,
          "region": "艾雷教堂",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "kale.gesture",
          "title": "听到狼嚎后向咖列询问，取得弹指动作",
          "detail": "先去雾林废墟听到屋顶狼嚎，再回艾雷教堂找咖列，选择关于雾林狼嚎的新增话题，学会弹指动作。回雾林废墟对着屋顶方向使用动作，让布莱泽下来。",
          "order": 34,
          "region": "雾林废墟 / 艾雷教堂",
          "options": [],
          "needs": [],
          "after": [
            "kale.merchant"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "miriel",
      "name": "结缘牧师米利耶",
      "summary": "位置：利耶尼亚东侧结缘教堂内的巨大乌龟牧师。可交祈祷书与魔法卷轴、学习法术，也会介绍赎罪与王室背景。\n赎罪在教堂雕像处消耗星星泪滴，只能处理可赎罪的敌对关系，不能让已经死亡的普通 NPC 全部复活。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "miriel.church",
          "title": "与米利耶交谈，了解赎罪、拉达冈与蕾娜菈，按需交祈祷书和卷轴",
          "detail": "到利耶尼亚东侧山坡的结缘教堂，找巨大乌龟米利耶交谈，依次听蕾娜菈、拉达冈与结缘相关话题。要学习回归性原理可把黄金律法原本交给他；需要赎罪则到教堂雕像处核对条件与星星泪滴。",
          "order": 312,
          "region": "结缘教堂",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        }
      ]
    },
    {
      "id": "enia",
      "name": "解指恩雅",
      "summary": "位置：圆桌厅堂双指房内的解指恩雅。取得大卢恩并开放房间后，可兑换追忆与半神装备。\n蒙葛特战后在同一房间询问燃烧拒绝的刺；王城变灰后再来检查最后对白与仍可用的兑换服务。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "enia.audience",
          "title": "取得大卢恩后觐见双指，与恩雅交谈",
          "detail": "击败碎片君王取得大卢恩后回圆桌厅堂，进入新开放的双指房，与恩雅交谈至重复。她提供追忆兑换和半神装备购买；不要误把圆桌孪生老妪当成解指恩雅。",
          "order": 235,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "enia.burning",
          "title": "蒙葛特战后向恩雅询问拒绝的刺与燃烧黄金树",
          "detail": "击败蒙葛特、调查黄金树树刺后，回圆桌厅堂双指房找恩雅，询问燃烧拒绝的刺、燃烧黄金树等新增话题。听完相关对白后再继续巨人山顶主线。",
          "order": 635,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [
            "story.morgott"
          ],
          "after": [
            "enia.audience"
          ],
          "warning": ""
        },
        {
          "id": "enia.end",
          "title": "王城变化后回访恩雅，检查追忆兑换与半神装备",
          "detail": "击败黑剑、王城变灰后回圆桌厅堂双指房，在恩雅原位置检查遗体互动、追忆兑换及半神装备。这里是服务与对白收尾，不会额外授予一枚修复卢恩。",
          "order": 1245,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [
            "story.maliketh"
          ],
          "after": [
            "enia.audience",
            "enia.burning"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "ensha",
      "name": "恩夏",
      "summary": "初遇：圆桌厅堂基甸书房外靠墙的沉默 NPC。互动可取得动作。\n拿到白金村阿尔布斯给的圣树秘密符节右半后，返回圆桌会触发入侵；胜利后在他原先靠墙的位置收王骸套装，再向基甸问明原委。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "ensha.silent",
          "title": "与基甸门外的恩夏互动，取得动作",
          "detail": "进入圆桌厅堂，在通往基甸书房的门外找靠墙站着、戴骷髅头饰的恩夏，与他互动取得动作。他不说话是正常状态，不用靠攻击开启对话。",
          "order": 112,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [],
          "warning": ""
        },
        {
          "id": "ensha.invasion",
          "title": "从阿尔布斯取得秘密符节右半后回圆桌，击败恩夏入侵",
          "detail": "在白金村从伪装罐子的阿尔布斯处取得圣树秘密符节（右），再传送回圆桌厅堂，应对恩夏入侵并击败他。如果已完成过入侵，这一步按实际经历补勾即可。",
          "order": 336,
          "region": "白金村 / 圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [
            "ensha.silent"
          ],
          "warning": ""
        },
        {
          "id": "ensha.armor",
          "title": "回到恩夏原位置收取王骸套装，向基甸追问事件",
          "detail": "入侵结束、返回正常圆桌后，到基甸书房门外恩夏原本靠墙的位置拾取王骸套装。进书房找基甸，选择关于恩夏的新增话题；遗物不在白金村。",
          "order": 337,
          "region": "圆桌厅堂",
          "options": [],
          "needs": [],
          "after": [
            "ensha.silent",
            "ensha.invasion"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "shabriri",
      "name": "夏玻利利",
      "summary": "位置：巨人山顶萨米尔废墟附近，以尤拉的身体出现。会提出用癫火代替梅琳娜牺牲的建议。\n本条只安排与他交谈；是否接受三指、是否解除癫火由海妲分支决定。要保留尤拉本人前期对白，先完成玛莉卡第二教堂。",
      "defaultOption": "complete",
      "category": "base",
      "source": "老板提供：艾尔登法环全支线整理220429.docx（2022-04-29，本体）；已交叉核对关键分支，Mod 差异需游戏内确认。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "shabriri.talk",
          "title": "与占用尤拉身体的夏玻利利交谈，听取癫火引导",
          "detail": "进入巨人山顶后，在赐福“萨米尔废墟”旁找看似尤拉的 NPC，与夏玻利利交谈并听取癫火建议。不要把他的建议当成必须接受的选项；之后是否进三指大门按海妲分支执行。",
          "order": 690,
          "region": "萨米尔废墟",
          "options": [],
          "needs": [
            "story.mountains"
          ],
          "after": [
            "yura.eleonora"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "leda",
      "name": "“金针骑士”蕾妲",
      "summary": "在神人坠眠之茧前引导玩家进入幽影之地；之后驻留大道旁的十字记号。魅惑消失后，她先怀疑角人，再可能追杀安帕赫。口头建议不等于站队，真正分支由两处红、金召唤印决定。协助角人会取消安帕赫清算事件，因此迅斩与清算长弓不能在这条正常单周目路线中兼得。",
      "defaultOption": "observe",
      "category": "dlc",
      "source": "https://docs.qq.com/doc/DVFhtamxKZHF0WkxV；触发条件另行交叉核对，名称以本地原版简体中文文本为准。",
      "options": [
        {
          "id": "observe",
          "label": "两次清算都不参战，保留自然后续",
          "description": "跳过两处对立召唤印，不取得清算专属护符或长弓。",
          "ending": "",
          "requirements": []
        },
        {
          "id": "hornsent",
          "label": "帮助蕾妲杀角人；不参加安帕赫清算",
          "description": "获得贯刺交错树；保留安帕赫后续。",
          "ending": "",
          "requirements": [
            {
              "questId": "hornsent",
              "optionIds": [
                "leda"
              ],
              "reason": "帮助蕾妲杀角人，需要角人选择清算死亡结尾。"
            }
          ]
        },
        {
          "id": "ansbach",
          "label": "跳过角人清算；帮助蕾妲杀安帕赫",
          "description": "获得安帕赫的长弓、回击交错树；失去安帕赫最终盟友奖励。",
          "ending": "",
          "requirements": [
            {
              "questId": "ansbach",
              "optionIds": [
                "leda"
              ],
              "reason": "此路线会杀死安帕赫，请同步其结尾。"
            }
          ]
        },
        {
          "id": "both",
          "label": "两次都帮助蕾妲，杀角人及安帕赫",
          "description": "获得两枚交错树护符与安帕赫的长弓，牺牲两人的后续。",
          "ending": "",
          "requirements": [
            {
              "questId": "hornsent",
              "optionIds": [
                "leda"
              ],
              "reason": "第一次清算会杀死角人。"
            },
            {
              "questId": "ansbach",
              "optionIds": [
                "leda"
              ],
              "reason": "第二次清算会杀死安帕赫。"
            }
          ]
        },
        {
          "id": "defend_hornsent",
          "label": "帮助角人击退蕾妲，取得迅斩",
          "description": "蕾妲暂时退场，安帕赫清算不再出现；安帕赫仍可继续最终盟友路线。",
          "ending": "",
          "requirements": [
            {
              "questId": "hornsent",
              "optionIds": [
                "swift"
              ],
              "reason": "取得迅斩需选择角人的协助分支。"
            },
            {
              "questId": "ansbach",
              "optionIds": [
                "complete"
              ],
              "reason": "帮助角人后没有安帕赫清算印，可保留老兵自然后续。"
            }
          ]
        },
        {
          "id": "defend_ansbach",
          "label": "跳过角人清算；帮助安帕赫击退蕾妲",
          "description": "获得安帕赫的长弓和蕾妲的卢恩，保留老兵最终盟友奖励。",
          "ending": "",
          "requirements": [
            {
              "questId": "ansbach",
              "optionIds": [
                "defend"
              ],
              "reason": "此路线需要安帕赫选择协助守住清算。"
            }
          ]
        },
        {
          "id": "hornsent_defend",
          "label": "先帮蕾妲杀角人，再帮助安帕赫",
          "description": "获得贯刺交错树、安帕赫的长弓，并保留老兵最终盟友奖励。",
          "ending": "",
          "requirements": [
            {
              "questId": "hornsent",
              "optionIds": [
                "leda"
              ],
              "reason": "第一次清算会杀死角人。"
            },
            {
              "questId": "ansbach",
              "optionIds": [
                "defend"
              ],
              "reason": "第二次清算改为帮助安帕赫。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "leda.entry",
          "order": 1265,
          "region": "神人坠眠之茧 → 大道旁的十字记号",
          "title": "与蕾妲初遇，进入幽影之地后在大道旁重逢",
          "detail": "在蒙格战场的赐福“神人坠眠之茧”前与她交谈，再触碰枯萎手臂。进入幽影之地后，她会出现在恩希斯城后方的“大道旁的十字记号”；与她交谈到内容重复，并询问角人。蕾拉娜门前的蕾妲召唤印是可选协助。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "leda.suspect",
          "order": 1315,
          "region": "大道旁的十字记号",
          "title": "魅惑破碎后，与蕾妲及角人分别谈话",
          "detail": "回“大道旁的十字记号”与蕾妲交谈。“提议处置休里耶”会被否定；“提议处置角人”或“不提议任何人”均可继续。再与同处的角人交谈到重复，坐赐福刷新后继续找蕾妲，听到她决定除掉角人。这里只推进对白，实际站队仍看接下来的召唤印。",
          "options": [],
          "needs": [
            "story.charm"
          ],
          "after": [
            "leda.entry"
          ],
          "warning": ""
        },
        {
          "id": "leda.hornsent",
          "order": 1329,
          "region": "幽影城：正门广场 → 燃烧船只平台",
          "title": "使用红色印帮助蕾妲杀角人，回十字记号领贯刺交错树",
          "detail": "由“正门广场”向幽影城内部走，上楼到摆放燃烧船只的平台，通往物种保藏库的升降机前可见对立印。选择帮助蕾妲的红色印，击败角人，取得镰形刀与其防具。回“大道旁的十字记号”找蕾妲，领取贯刺交错树并听完下一目标的对白。",
          "options": [
            "hornsent",
            "both",
            "hornsent_defend"
          ],
          "needs": [],
          "after": [
            "leda.entry",
            "leda.suspect",
            "hornsent.broken"
          ],
          "warning": "在首次进入梅瑟莫房间前完成；仅试打一次也可能使这组印消失。角人死亡不可逆。"
        },
        {
          "id": "leda.defend_hornsent",
          "order": 1329,
          "region": "幽影城：燃烧船只平台",
          "title": "使用金色印帮助角人，取得迅斩",
          "detail": "前往“正门广场”至保藏库升降机之间的燃烧船只平台，选择帮助角人的金色印。击退蕾妲后取得战灰迅斩和蕾妲的卢恩。她会离开“大道旁的十字记号”；这次只是退场，后期仍会参战。安帕赫清算印随之取消。",
          "options": [
            "defend_hornsent"
          ],
          "needs": [],
          "after": [
            "leda.entry",
            "leda.suspect",
            "leda.hornsent",
            "hornsent.broken"
          ],
          "warning": "首次进入梅瑟莫房间前完成；此分支拿不到安帕赫清算长弓及两枚交错树护符。"
        },
        {
          "id": "leda.ansbach",
          "order": 1361,
          "region": "保藏库（一楼）：安帕赫原房间 → 大道旁的十字记号",
          "title": "使用红色印帮蕾妲杀安帕赫，回报领取回击交错树",
          "detail": "完成老兵的秘密仪式卷轴研究后，回“大道旁的十字记号”让蕾妲说出安帕赫是下一目标。再到“保藏库（一楼）”附近老兵原来读书的侧室，选帮助蕾妲的红色印。战后取得安帕赫的长弓与防具；回十字记号找蕾妲领取回击交错树。若跳过了角人清算，先完成梅瑟莫阶段再来谈下一目标。",
          "options": [
            "ansbach",
            "both"
          ],
          "needs": [
            "ansbach.scroll",
            "story.messmer"
          ],
          "after": [
            "leda.entry",
            "leda.suspect",
            "leda.hornsent",
            "leda.defend_hornsent",
            "freyja.letter"
          ],
          "warning": "先交付弗蕾亚信件再杀安帕赫；帮助角人击退蕾妲的路线没有这次清算。"
        },
        {
          "id": "leda.defend_ansbach",
          "order": 1361,
          "region": "保藏库（一楼）：安帕赫原房间",
          "title": "使用金色印帮助安帕赫，取得长弓并保留盟友",
          "detail": "先完成秘密仪式卷轴及已选择的弗蕾亚信件。与“大道旁的十字记号”的蕾妲谈到追杀安帕赫，再回老兵原侧室，选帮助安帕赫的金色印。击退蕾妲后取得安帕赫的长弓与蕾妲的卢恩；安帕赫会继续后期剧情。没有回击交错树。",
          "options": [
            "defend_ansbach",
            "hornsent_defend"
          ],
          "needs": [
            "ansbach.scroll",
            "story.messmer"
          ],
          "after": [
            "leda.entry",
            "leda.suspect",
            "leda.hornsent",
            "leda.defend_hornsent",
            "leda.ansbach",
            "freyja.letter"
          ],
          "warning": ""
        },
        {
          "id": "leda.battle",
          "order": 1425,
          "region": "艾尼尔·伊利姆：净身厅前室后的群战房间",
          "title": "击败蕾妲阵营后，在房间逐一收取遗物",
          "detail": "从“净身厅前室”前进到群战房间，按计划先召唤可用盟友，再互动蕾妲的红色印。战后在房内检查蕾妲及参战者遗体，取得蕾妲的剑和相应防具。此前帮助她清算也不会取消最终这场对立。",
          "options": [],
          "needs": [
            "story.leda"
          ],
          "after": [
            "leda.entry",
            "leda.suspect",
            "leda.hornsent",
            "leda.defend_hornsent",
            "leda.ansbach",
            "leda.defend_ansbach"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "hornsent",
      "name": "角人",
      "summary": "在三叉口的十字记号提供地图，后移至大道旁的十字记号。结尾可以在蕾妲清算中死亡、协助他取得迅斩，或让他完成梅瑟莫复仇。是否在梅瑟莫战内召唤，会影响其后续出现方式。",
      "defaultOption": "messmer",
      "category": "dlc",
      "source": "https://docs.qq.com/doc/DVFhtamxKZHF0WkxV；触发条件另行交叉核对，名称以本地原版简体中文文本为准。",
      "options": [
        {
          "id": "messmer",
          "label": "跳过清算，召唤角人复仇，再处理入侵",
          "description": "梅瑟莫战内召唤，之后在花蕾教堂前处理角人入侵。",
          "ending": "",
          "requirements": [
            {
              "questId": "leda",
              "optionIds": [
                "observe",
                "ansbach",
                "defend_ansbach"
              ],
              "reason": "复仇路线需保留角人；若要先帮助他获得迅斩，请改选角人的迅斩分支。"
            }
          ]
        },
        {
          "id": "leda",
          "label": "在蕾妲清算中死亡",
          "description": "提前取得镰形刀及防具，取消复仇和后续入侵。",
          "ending": "",
          "requirements": [
            {
              "questId": "leda",
              "optionIds": [
                "hornsent",
                "both",
                "hornsent_defend"
              ],
              "reason": "角人清算死亡需要蕾妲选择先帮助杀角人的路线。"
            }
          ]
        },
        {
          "id": "swift",
          "label": "帮助角人取得迅斩，再召唤复仇",
          "description": "获得迅斩；取消蕾妲对安帕赫的清算。",
          "ending": "",
          "requirements": [
            {
              "questId": "leda",
              "optionIds": [
                "defend_hornsent"
              ],
              "reason": "迅斩需要帮助角人击退蕾妲。"
            }
          ]
        },
        {
          "id": "follower",
          "label": "跳过清算，不召唤梅瑟莫，留到追随者战",
          "description": "不取得迅斩，之后在最终群战中与角人敌对。",
          "ending": "",
          "requirements": [
            {
              "questId": "leda",
              "optionIds": [
                "observe",
                "ansbach",
                "defend_ansbach"
              ],
              "reason": "保留至群战不能先在清算中杀死角人。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "hornsent.map",
          "order": 1270,
          "region": "三叉口的十字记号 → 大道旁的十字记号",
          "title": "领取两张十字记号地图，听完迁移前后的对白",
          "detail": "先在“三叉口的十字记号”找角人，交谈并取得地图。到达恩希斯城后方的“大道旁的十字记号”后，再与迁来的角人谈到重复并收下新地图。若已选择老妪支线，可把炖煮蝎子交给他换燃炉面具；这不决定其结尾。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "hornsent.broken",
          "order": 1316,
          "region": "大道旁的十字记号",
          "title": "大卢恩破碎后，听角人的梅瑟莫复仇宣言",
          "detail": "回“大道旁的十字记号”，与角人反复交谈，直到没有新内容。若计划参加蕾妲对立召唤印，再与旁边蕾妲谈清怀疑对象，坐赐福刷新。不要提前进梅瑟莫房间找印。",
          "options": [],
          "needs": [
            "story.charm"
          ],
          "after": [
            "hornsent.map"
          ],
          "warning": ""
        },
        {
          "id": "hornsent.swift",
          "order": 1330,
          "region": "幽影城：燃烧船只平台",
          "title": "确认协助角人的战灰迅斩已经入手",
          "detail": "与蕾妲线的同一场清算一起完成：选择帮助角人的金色印并获胜，核对背包中战灰迅斩和蕾妲的卢恩。无需重复战斗；完成后可分别勾选两条角色记录。",
          "options": [
            "swift"
          ],
          "needs": [
            "leda.defend_hornsent"
          ],
          "after": [
            "hornsent.map",
            "hornsent.broken"
          ],
          "warning": ""
        },
        {
          "id": "hornsent.summon",
          "order": 1349,
          "region": "幽影城：梅瑟莫暗室",
          "title": "进入梅瑟莫战场，使用场内金色印召唤角人",
          "detail": "在“暗室门前”做好准备，进入梅瑟莫战场后，在房内寻找角人的金色召唤印并互动。此步骤只记录召唤，击败 Boss 与战后交谈排在后面的共享节点，别在尚未战胜时勾选后续。",
          "options": [
            "messmer",
            "swift"
          ],
          "needs": [
            "story.charm"
          ],
          "after": [
            "hornsent.map",
            "hornsent.broken",
            "hornsent.swift"
          ],
          "warning": "首次进房前先完成计划中的角人清算；召唤印在场内，不在雾门外。"
        },
        {
          "id": "hornsent.aftermath",
          "order": 1352,
          "region": "梅瑟莫暗室 / 大道旁的十字记号",
          "title": "梅瑟莫战后刷新，与角人谈完复仇结果",
          "detail": "击败梅瑟莫后坐场内赐福，再与现身的角人交谈。已离场时回“大道旁的十字记号”查看并谈到重复。选择保留到群战的路线，本次战斗不要使用他的召唤印；召唤与否并非只有一句对白的差别。",
          "options": [
            "messmer",
            "swift",
            "follower"
          ],
          "needs": [
            "story.messmer"
          ],
          "after": [
            "hornsent.map",
            "hornsent.broken",
            "hornsent.swift",
            "hornsent.summon"
          ],
          "warning": ""
        },
        {
          "id": "hornsent.revenge",
          "order": 1390,
          "region": "劳弗古遗迹：花蕾教堂前的上行道路",
          "title": "在花蕾教堂前处理角人入侵，取得镰形刀和防具",
          "detail": "完成梅瑟莫战内召唤及战后对白后，沿劳弗古遗迹通向“花蕾教堂（正门口）”的楼梯道路前进，击败角人入侵并收取装备。若已先探索过该段或 Mod 未触发，按实际人物状态核对；不要把未出现当作已完成。",
          "options": [
            "messmer",
            "swift"
          ],
          "needs": [
            "story.messmer"
          ],
          "after": [
            "hornsent.map",
            "hornsent.broken",
            "hornsent.swift",
            "hornsent.summon",
            "hornsent.aftermath"
          ],
          "warning": ""
        },
        {
          "id": "hornsent.follower",
          "order": 1426,
          "region": "艾尼尔·伊利姆：净身厅前室后的房间",
          "title": "群战击败角人后，收取其防具与镰形刀",
          "detail": "此路线不参加早期清算，也不在梅瑟莫战内召唤角人。他会作为蕾妲一侧的敌人加入群战；胜利后检查房间遗体。与复仇入侵路线的装备奖励相同。",
          "options": [
            "follower"
          ],
          "needs": [
            "story.leda"
          ],
          "after": [
            "hornsent.map",
            "hornsent.broken",
            "hornsent.swift",
            "hornsent.summon",
            "hornsent.aftermath",
            "hornsent.revenge"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "freyja",
      "name": "红狮子弗蕾亚",
      "summary": "三叉口初遇，之后在保藏库（七楼）查证拉塔恩相关事项。关键是先听她的疑问并告知安帕赫，再交秘密仪式卷轴。信件可先送达，之后再决定安帕赫的结尾，两者不互斥。",
      "defaultOption": "complete",
      "category": "dlc",
      "source": "https://docs.qq.com/doc/DVFhtamxKZHF0WkxV；触发条件另行交叉核对，名称以本地原版简体中文文本为准。",
      "options": [
        {
          "id": "complete",
          "label": "送达信件，取得黄金狮子盾与后期装备",
          "description": "送信后弗蕾亚会在追随者战成为敌人。",
          "ending": "",
          "requirements": [
            {
              "questId": "ansbach",
              "optionIds": [
                "complete",
                "defend",
                "leda"
              ],
              "reason": "弗蕾亚信件需要先让安帕赫完成保藏库研究；可送信后再选他的清算结尾。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "freyja.cross",
          "order": 1272,
          "region": "三叉口的十字记号 / 神兽舞狮门前",
          "title": "与弗蕾亚初遇；可召唤舞狮并回十字记号听补充对白",
          "detail": "在“三叉口的十字记号”与弗蕾亚谈到重复。若想多听剧情，可在神兽舞狮门前召唤她；战后回同一十字记号，询问头上裂痕和另一个男性。召唤属于可选对白，不影响送信奖励。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "freyja.question",
          "order": 1320,
          "region": "三叉口的十字记号 → 保藏库（七楼）",
          "title": "魅惑破碎后回访，再到七楼听弗蕾亚的疑问",
          "detail": "大卢恩破碎后先回“三叉口的十字记号”与她谈查证目的。到幽影城“保藏库（七楼）”，在赐福旁找到读书的弗蕾亚，反复交谈，听到她需要安帕赫协助解读。此时不要先把卷轴交给老兵。",
          "options": [],
          "needs": [
            "story.charm"
          ],
          "after": [
            "freyja.cross"
          ],
          "warning": ""
        },
        {
          "id": "freyja.report",
          "order": 1325,
          "region": "保藏库（一楼）：安帕赫读书的侧室",
          "title": "向安帕赫选择“告知弗蕾亚的近况”",
          "detail": "从“保藏库（一楼）”绕过大厅巨大的标本，沿楼梯到附近侧室找安帕赫。先听他的研究，再选择“告知弗蕾亚的近况”，确认这一段对话已说完。之后才交秘密仪式卷轴。",
          "options": [],
          "needs": [
            "freyja.question"
          ],
          "after": [
            "freyja.cross",
            "freyja.question",
            "ansbach.cross"
          ],
          "warning": "安帕赫可能在交卷轴后离开，先转述疑问更稳妥。"
        },
        {
          "id": "freyja.letter",
          "order": 1340,
          "region": "保藏库（一楼）侧室 ↔ 保藏库（七楼）",
          "title": "领取给弗蕾亚的信，送到七楼领黄金狮子盾，再回报老兵",
          "detail": "交卷轴并听完安帕赫的研究结果，必要时坐赐福刷新后再谈，取得“给弗蕾亚的信”。传送“保藏库（七楼）”，向弗蕾亚交信，反复交谈领取黄金狮子盾。最后回一楼老兵侧室，选择“转达弗蕾亚的话”。",
          "options": [],
          "needs": [
            "ansbach.scroll"
          ],
          "after": [
            "freyja.cross",
            "freyja.question",
            "freyja.report"
          ],
          "warning": "交信和回报必须在燃烧封印树之前；若要杀安帕赫，先完成这一条。"
        },
        {
          "id": "freyja.end",
          "order": 1426,
          "region": "艾尼尔·伊利姆：追随者群战房间",
          "title": "群战击败弗蕾亚，检查遗体收取大剑与防具",
          "detail": "送信后弗蕾亚会为拉塔恩而战，成为群战敌人。完成战斗后在同一房间检查她的遗体，取得弗蕾亚的大剑及防具；早期的黄金狮子盾来自送信，不由这里补发。",
          "options": [],
          "needs": [
            "story.leda"
          ],
          "after": [
            "freyja.cross",
            "freyja.question",
            "freyja.report",
            "freyja.letter"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "ansbach",
      "name": "老兵安帕赫",
      "summary": "在正门前方的十字记号初遇，魅惑破碎后进入保藏库（一楼）研究秘密仪式。最终盟友路线不强制帮助他打清算；但要安帕赫的长弓，需要参加清算并选择其中一方。",
      "defaultOption": "complete",
      "category": "dlc",
      "source": "https://docs.qq.com/doc/DVFhtamxKZHF0WkxV；触发条件另行交叉核对，名称以本地原版简体中文文本为准。",
      "options": [
        {
          "id": "complete",
          "label": "保留老兵，自然推进到最终盟友",
          "description": "不参加他的清算，保留最终武器、祷告及防具；不取得清算长弓。",
          "ending": "",
          "requirements": [
            {
              "questId": "leda",
              "optionIds": [
                "observe",
                "hornsent",
                "defend_hornsent"
              ],
              "reason": "自然盟友路线需保留安帕赫且不参加他的清算；若想帮助守住清算并拿长弓，请选对应分支。"
            }
          ]
        },
        {
          "id": "leda",
          "label": "帮助蕾妲杀死安帕赫",
          "description": "得到长弓和防具，失去黑曜薄刀、安帕赫的狂刃等最终奖励。",
          "ending": "",
          "requirements": [
            {
              "questId": "leda",
              "optionIds": [
                "ansbach",
                "both"
              ],
              "reason": "杀死安帕赫需同步蕾妲对他的清算分支。"
            }
          ]
        },
        {
          "id": "defend",
          "label": "帮助安帕赫守住清算，再完成最终盟友",
          "description": "取得长弓，并保留后期盟友及最终奖励。",
          "ending": "",
          "requirements": [
            {
              "questId": "leda",
              "optionIds": [
                "defend_ansbach",
                "hornsent_defend"
              ],
              "reason": "要帮助安帕赫，蕾妲需保留这次清算并选择帮助老兵；帮助角人取得迅斩会取消此事件。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "ansbach.cross",
          "order": 1274,
          "region": "正门前方的十字记号",
          "title": "与安帕赫初遇，听穆尔情报并报告已找到的十字记号",
          "detail": "在“正门前方的十字记号”与老兵反复交谈。认识穆尔后坐赐福刷新，可询问穿铜绿盔甲的人；找到新的米凯拉十字记号时可回来补充报告。这一条记录魅惑破碎前的初遇，破碎后的回访另列下一步。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "ansbach.broken",
          "order": 1317,
          "region": "正门前方的十字记号",
          "title": "魅惑破碎后回访安帕赫，听完米凯拉相关的新对白",
          "detail": "出现大卢恩与魅惑破碎提示后，回“正门前方的十字记号”找安帕赫，谈到内容重复。他之后转往幽影城的保藏库（一楼）侧室，继续研究秘密仪式。",
          "options": [],
          "needs": [
            "story.charm"
          ],
          "after": [
            "ansbach.cross"
          ],
          "warning": ""
        },
        {
          "id": "ansbach.findScroll",
          "title": "在保藏库四楼外侧房间拾取秘密仪式卷轴",
          "detail": "从保藏库（四楼）走向外侧道路，沿外侧楼梯下到较低层房间，在桌上拾取秘密仪式卷轴。可以先收进背包；若还要做弗蕾亚线，交给安帕赫前先听她的疑问并向老兵报告。",
          "order": 1325,
          "region": "保藏库（四楼）外侧房间",
          "options": [],
          "needs": [
            "story.charm"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "ansbach.scroll",
          "order": 1330,
          "region": "保藏库（一楼）侧室",
          "title": "先报告弗蕾亚近况，再把秘密仪式卷轴交给安帕赫",
          "detail": "回保藏库（一楼）附近老兵侧室。若本周目安排了弗蕾亚线，先完成七楼询问及一楼的“告知弗蕾亚的近况”，再交付秘密仪式卷轴并听完研究结果；未安排弗蕾亚线时可直接交付。",
          "options": [],
          "needs": [
            "story.charm"
          ],
          "after": [
            "ansbach.cross",
            "ansbach.broken",
            "freyja.report",
            "ansbach.findScroll"
          ],
          "warning": "别拿到卷轴就立刻交；先核对弗蕾亚委托。"
        },
        {
          "id": "ansbach.clearance",
          "order": 1365,
          "region": "大道旁的十字记号 / 保藏库（一楼）侧室",
          "title": "按所选结尾处理安帕赫清算，保留后续盟友",
          "detail": "自然盟友路线：不使用一楼侧室的红、金对立印；若之前帮角人，印不会出现，也可正常继续。协助守住清算路线：与蕾妲谈到追杀老兵后，在原侧室使用金色印，取得长弓与蕾妲的卢恩。不要误点帮助蕾妲的红色印。",
          "options": [
            "complete",
            "defend"
          ],
          "needs": [
            "story.messmer"
          ],
          "after": [
            "ansbach.cross",
            "ansbach.broken",
            "ansbach.scroll",
            "leda.defend_ansbach",
            "freyja.letter"
          ],
          "warning": ""
        },
        {
          "id": "ansbach.summon",
          "order": 1418,
          "region": "艾尼尔·伊利姆：净身厅前室后的群战房间",
          "title": "群战开战前，用安帕赫金色印召唤老兵",
          "detail": "进入蕾妲群战房间后，先互动安帕赫的金色召唤印，再使用蕾妲红色印开战。这能保留战后盟友对白。源攻略将不召唤是否影响最终召唤标为待验证，本表为完整叙事安排这一步，不把它宣称为所有遗物奖励的硬门槛。",
          "options": [
            "complete",
            "defend"
          ],
          "needs": [
            "story.seal"
          ],
          "after": [
            "ansbach.cross",
            "ansbach.broken",
            "ansbach.scroll",
            "ansbach.clearance"
          ],
          "warning": ""
        },
        {
          "id": "ansbach.allies",
          "order": 1428,
          "region": "净身厅前室后的群战房间 → 升降机上层",
          "title": "群战胜利后，乘升降机找到安帕赫，询问蒙格的死因",
          "detail": "群战胜利并检查房内遗物后，离开房间乘向上的升降机，在后续通路找到安帕赫，交谈到内容重复，询问蒙格的死因。此前已安排开战前召唤，此处记录战后的新对白。",
          "options": [
            "complete",
            "defend"
          ],
          "needs": [
            "story.leda"
          ],
          "after": [
            "ansbach.cross",
            "ansbach.broken",
            "ansbach.scroll",
            "ansbach.clearance",
            "ansbach.summon"
          ],
          "warning": ""
        },
        {
          "id": "ansbach.end",
          "order": 1455,
          "region": "艾尼尔·伊利姆：最终战场入口附近",
          "title": "最终战后检查安帕赫遗体，收取武器、祷告和防具",
          "detail": "挑战约定之王前可使用其金色召唤印协助。获胜后回最终战场入口附近检查安帕赫遗体，收取黑曜薄刀、安帕赫的狂刃及防具。不要只检查群战房间；他的最终遗物在约定之王战后。",
          "options": [
            "complete",
            "defend"
          ],
          "needs": [
            "story.consort"
          ],
          "after": [
            "ansbach.cross",
            "ansbach.broken",
            "ansbach.scroll",
            "ansbach.clearance",
            "ansbach.summon",
            "ansbach.allies"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "moore",
      "name": "穆尔与集物虫",
      "summary": "正门前方的十字记号的铜绿重甲商人，与野外友善集物虫共同收集物资。先认识休里耶可取得黑色浓浆；救助圣战教堂北侧的集物虫可得到制作笔记4与7。魅惑消失后，对穆尔的回答决定其结尾；先收笔记、再作关键回答。",
      "defaultOption": "move",
      "category": "dlc",
      "source": "https://docs.qq.com/doc/DVFhtamxKZHF0WkxV；触发条件另行交叉核对，名称以本地原版简体中文文本为准。",
      "options": [
        {
          "id": "move",
          "label": "回答“忘记就行了”，留到追随者战",
          "description": "群战成为敌人，战后取得铜绿防具、大盾与铃珠。",
          "ending": "",
          "requirements": []
        },
        {
          "id": "sad",
          "label": "回答“就一直很伤心吧”，走死亡结尾",
          "description": "在圣战教堂北侧的集物虫旁寻找遗体与装备；无法继续商店。",
          "ending": "",
          "requirements": []
        },
        {
          "id": "wait",
          "label": "回答“我不知道”，暂时保留商店",
          "description": "保留当前商人状态，不自动获得其防具或大盾；以后改答会进入对应结尾。",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "moore.shop",
          "order": 1275,
          "region": "正门前方的十字记号",
          "title": "访问穆尔商店，购买任意物品后与他交谈",
          "detail": "在“正门前方的十字记号”与穿铜绿重甲的穆尔交谈，购买任意一件商品，再选“和穆尔交谈”，听完其同伴情报。野外趴在地上、可对话的集物虫是友好单位，避免在旁边挥刀或引怪。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": "击杀集物虫会导致敌对；不要将其当作普通腐败眷属清理。"
        },
        {
          "id": "moore.syrup",
          "order": 1280,
          "region": "通柱坡的十字记号 → 正门前方的十字记号",
          "title": "认识休里耶后，回穆尔处领取黑色浓浆",
          "detail": "先在“通柱坡的十字记号”与休里耶初次对话，再回“正门前方的十字记号”，选择“和穆尔交谈”取得黑色浓浆。这里只负责从穆尔领道具，交给休里耶及领取秘药另列一步。",
          "options": [],
          "needs": [
            "thiollier.cross"
          ],
          "after": [
            "moore.shop"
          ],
          "warning": "为保留早期对白，安排在魅惑破碎前；若已破碎但穆尔仍在，先选“我不知道”再检查其他交谈选项。",
          "when": [
            {
              "questId": "thiollier",
              "optionIds": [
                "complete",
                "concoction"
              ]
            }
          ],
          "optionalFor": [
            "move",
            "sad",
            "wait"
          ]
        },
        {
          "id": "moore.notes2",
          "order": 1281,
          "region": "墓地平原：眺望镇东侧高地",
          "title": "与眺望镇东侧集物虫交谈，领取制作笔记2",
          "detail": "由墓地平原西侧的高地道路接近眺望镇，寻找镇东侧草地上正在挖掘的友好集物虫，互动取得集物虫的制作笔记【２】。它不会主动攻击，不需要战斗。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "moore.notes4",
          "order": 1282,
          "region": "圣战教堂北侧悬崖边",
          "title": "放温热石救助蜷缩集物虫，刷新后领取制作笔记4",
          "detail": "从圣战教堂向北到悬崖附近，找到蜷缩不动的集物虫。在它身边使用温热石，等其恢复，再坐赐福或传送刷新地图，回来交谈取得集物虫的制作笔记【４】。前期沿教堂周边行动，避免继续向幽影城靠近。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "moore.notes7",
          "order": 1283,
          "region": "正门前方的十字记号",
          "title": "救助集物虫后回找穆尔，领取制作笔记7",
          "detail": "拿到北侧病弱集物虫的制作笔记4后，回“正门前方的十字记号”与穆尔交谈，领取集物虫的制作笔记【７】。不要求先拿齐其他六册；穆尔离开或死亡后无法再从他这里取得。",
          "options": [],
          "needs": [
            "moore.notes4"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "moore.notes1",
          "order": 1294,
          "region": "幽影亚坛：恩希斯城东南方悬崖",
          "title": "在恩希斯城外悬崖边领取制作笔记1",
          "detail": "从穆斯废墟一带向西南走，接近恩希斯城城主房间南方、俯瞰峡谷的崖边。与正在挖掘的友好集物虫交谈，取得集物虫的制作笔记【１】。它在城外高地，不用返回城内 Boss 房。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "moore.notes3",
          "order": 1295,
          "region": "艾拉克河下游：通向青蓝海岸的河口高地",
          "title": "在河口北侧树林崖边领取制作笔记3",
          "detail": "由“艾拉克河下游”向青蓝海岸方向走，到河口有燃炉魔像的区域，再沿东北侧的树林走向崖边尽头。与友好集物虫交谈取得集物虫的制作笔记【３】。不要为此攻击附近的友好目标。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "moore.notes5",
          "order": 1296,
          "region": "穆斯废墟北方洞窟外：毒池与悬崖",
          "title": "穿过北方水池后的洞窟，领取制作笔记5",
          "detail": "从穆斯废墟向北到有玛莉卡雕像的水池，进入后方洞窟，从另一端走到毒池区域，寻找俯瞰幽影城积水处方向的悬崖边集物虫，交谈取得集物虫的制作笔记【５】。沿路可能接近大卢恩破碎范围，出发前先完成本表早期回访。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "moore.notes6",
          "order": 1321,
          "region": "幽影城教区入口南侧高地",
          "title": "魅惑破碎后，沿教区大道领取制作笔记6",
          "detail": "由教区大道前往幽影城教区入口，在入口南侧的高地崖边找友好集物虫，交谈取得集物虫的制作笔记【６】。到这里通常会触发大卢恩破碎，因此安排在早期回访完成之后、穆尔关键回答之前。",
          "options": [],
          "needs": [
            "story.charm"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "moore.answer",
          "order": 1325,
          "region": "正门前方的十字记号",
          "title": "确认笔记与浓浆已取得，再按所选结尾回答穆尔",
          "detail": "回到穆尔商店，选择“和穆尔交谈”。选群战结尾时答“忘记就行了”；死亡结尾答“就一直很伤心吧”；保留商店答“我不知道”，之后也不要改答前两项。先核对黑色浓浆、制作笔记7及想收集的其他笔记已经入手。",
          "options": [],
          "needs": [
            "story.charm"
          ],
          "after": [
            "moore.shop",
            "moore.syrup",
            "moore.notes2",
            "moore.notes4",
            "moore.notes7",
            "moore.notes1",
            "moore.notes3",
            "moore.notes5",
            "moore.notes6"
          ],
          "warning": "前两种回答会结束其正常商人阶段。"
        },
        {
          "id": "moore.move",
          "order": 1427,
          "region": "艾尼尔·伊利姆：追随者群战房间",
          "title": "群战击败穆尔，检查遗体取得铜绿装备与铃珠",
          "detail": "回答“忘记就行了”后，穆尔会作为蕾妲阵营敌人出现。群战胜利后在房间检查穆尔遗体，取得铜绿防具、铜绿大盾与穆尔的铃珠；不是回原商店位置等他。",
          "options": [
            "move"
          ],
          "needs": [
            "story.leda"
          ],
          "after": [
            "moore.shop",
            "moore.syrup",
            "moore.notes2",
            "moore.notes4",
            "moore.notes7",
            "moore.notes1",
            "moore.notes3",
            "moore.notes5",
            "moore.notes6",
            "moore.answer"
          ],
          "warning": ""
        },
        {
          "id": "moore.sad",
          "order": 1330,
          "region": "圣战教堂北侧：病弱集物虫旁",
          "title": "换一个赐福刷新后，寻找穆尔遗体并收取装备",
          "detail": "回答“就一直很伤心吧”后，传送到其他赐福刷新，再到圣战教堂北侧之前救助的集物虫旁寻找穆尔遗体。收取铜绿防具、铜绿大盾及穆尔的铃珠。此后无法继续从穆尔本人领笔记7或购买物品。",
          "options": [
            "sad"
          ],
          "needs": [],
          "after": [
            "moore.shop",
            "moore.syrup",
            "moore.notes2",
            "moore.notes4",
            "moore.notes7",
            "moore.notes1",
            "moore.notes3",
            "moore.notes5",
            "moore.notes6",
            "moore.answer",
            "moore.move"
          ],
          "warning": ""
        },
        {
          "id": "moore.wait",
          "order": 1457,
          "region": "正门前方的十字记号",
          "title": "最终战后回访穆尔，保留“我不知道”的回答",
          "detail": "如果选择保留商店，最终战后仍回“正门前方的十字记号”检查穆尔。继续保留“我不知道”或离开对话，不追加前两种劝说。这条结尾不赠送铜绿防具、大盾及铃珠。",
          "options": [
            "wait"
          ],
          "needs": [
            "story.consort"
          ],
          "after": [
            "moore.shop",
            "moore.syrup",
            "moore.notes2",
            "moore.notes4",
            "moore.notes7",
            "moore.notes1",
            "moore.notes3",
            "moore.notes5",
            "moore.notes6",
            "moore.answer",
            "moore.move",
            "moore.sad"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "thiollier",
      "name": "休里耶与圣女托莉娜",
      "summary": "休里耶在通柱坡的十字记号经营毒药。穆尔的黑色浓浆可换休里耶的秘药，供龙飨女巫分支使用；其完整支线则在魅惑消失后进入石棺大洞，找到托莉娜、反复吸取花蜜并转达她的话，最后加入盟友。",
      "defaultOption": "complete",
      "category": "dlc",
      "source": "https://docs.qq.com/doc/DVFhtamxKZHF0WkxV；触发条件另行交叉核对，名称以本地原版简体中文文本为准。",
      "options": [
        {
          "id": "complete",
          "label": "完成托莉娜花蜜与最终同伴路线",
          "description": "",
          "ending": "",
          "requirements": []
        },
        {
          "id": "concoction",
          "label": "只取得休里耶的秘药（龙飨女巫前置）",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "thiollier.cross",
          "order": 1278,
          "region": "通柱坡的十字记号",
          "title": "与休里耶初遇，开启毒药商店",
          "detail": "由城前区域往东南方向走，抵达“通柱坡的十字记号”，找坐在旁边的休里耶反复交谈并检查商店。先认识他，再回“正门前方的十字记号”找穆尔领黑色浓浆。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "thiollier.concoction",
          "order": 1285,
          "region": "通柱坡的十字记号",
          "title": "交黑色浓浆，询问后回答“我觉得活着很累”领秘药",
          "detail": "把穆尔的黑色浓浆带回休里耶，选“交出黑色浓浆”，再选“关于黑色浓浆”，接着回答“我觉得活着很累”，取得休里耶的秘药。取得药不会阻断他与托莉娜的完整支线；不要在背包里直接喝掉，龙飨女巫分支需要把它交给她。",
          "options": [],
          "needs": [
            "moore.syrup"
          ],
          "after": [
            "thiollier.cross"
          ],
          "warning": "药会杀死玩家；本表提前完成领取，不强迫提前给龙飨女巫服用。",
          "when": [
            {
              "questId": "moore",
              "optionIds": [
                "move",
                "sad",
                "wait"
              ]
            }
          ],
          "optionalFor": [
            "complete"
          ]
        },
        {
          "id": "thiollier.fissure",
          "order": 1340,
          "region": "青蓝海岸南端 → 石棺大洞 → 深紫花园",
          "title": "进入石棺大洞，击败融泥骑士，找到托莉娜",
          "detail": "大卢恩破碎后到青蓝海岸最南端的大洞，沿岩壁平台逐层下行，原封印解除后进入石棺大洞。探索至底部，跳入融泥骑士战场并击败 Boss，进入深处洞穴找到托莉娜，开启“深紫花园”赐福。想召唤休里耶助战，可先在通柱坡与他谈前往南方的消息。",
          "options": [
            "complete"
          ],
          "needs": [
            "story.charm"
          ],
          "after": [
            "thiollier.cross"
          ],
          "warning": ""
        },
        {
          "id": "thiollier.nectar",
          "order": 1345,
          "region": "深紫花园 ↔ 通柱坡的十字记号",
          "title": "吸取花蜜并让休里耶来到洞穴，累计听见托莉娜的话",
          "detail": "先花掉随身卢恩，与托莉娜互动吸取花蜜。休里耶若还没到洞穴，回“通柱坡的十字记号”告诉他托莉娜的所在地，再回“深紫花园”。反复喝花蜜、复活并进入洞穴，累计第四次开始可听见托莉娜的话。与洞内休里耶交谈，选“转达托莉娜的话”，再选“再一次转达托莉娜的话”。",
          "options": [
            "complete"
          ],
          "needs": [],
          "after": [
            "thiollier.cross",
            "thiollier.fissure"
          ],
          "warning": "每次喝花蜜都会死亡。按实际听到的新对白推进，不把喝一次就复活当作支线完成。"
        },
        {
          "id": "thiollier.invade",
          "order": 1346,
          "region": "深紫花园：赐福与托莉娜洞穴之间",
          "title": "再次喝花蜜，击败休里耶入侵，并转达最后的话",
          "detail": "两次转达后再喝一次花蜜，听完新对白，复活并重新进入洞穴区域，击败休里耶入侵，获得托莉娜的微笑。再找倒在洞内的休里耶交谈；继续吸取花蜜听到下一段，再选“转达托莉娜的话”，直到他不再提出新内容。",
          "options": [
            "complete"
          ],
          "needs": [],
          "after": [
            "thiollier.cross",
            "thiollier.fissure",
            "thiollier.nectar"
          ],
          "warning": "在燃烧封印树前完成花蜜、入侵及最后转达。"
        },
        {
          "id": "thiollier.allies",
          "order": 1418,
          "region": "艾尼尔·伊利姆：净身厅前室后的房间",
          "title": "群战开始前，使用休里耶金色印召唤盟友",
          "detail": "进入蕾妲群战房间，先找地上的休里耶金色召唤印，召唤后再互动蕾妲的红色印开始战斗。此项记录开战前准备，战斗完成由后续共享步骤记录。",
          "options": [
            "complete"
          ],
          "needs": [
            "story.seal"
          ],
          "after": [
            "thiollier.cross",
            "thiollier.fissure",
            "thiollier.nectar",
            "thiollier.invade"
          ],
          "warning": ""
        },
        {
          "id": "thiollier.end",
          "order": 1456,
          "region": "约定之王战场入口附近 → 深紫花园",
          "title": "最终战后收取休里耶遗物，再回洞穴取托莉娜孤花",
          "detail": "约定之王门前可召唤休里耶协助。胜利后在最终战场入口附近检查其遗体，取得休里耶的暗针及防具；然后传送“深紫花园”，走进托莉娜原来的洞穴，捡取托莉娜孤花。两处都检查完再勾选本步。",
          "options": [
            "complete"
          ],
          "needs": [
            "story.consort"
          ],
          "after": [
            "thiollier.cross",
            "thiollier.fissure",
            "thiollier.nectar",
            "thiollier.invade",
            "thiollier.allies"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "dane",
      "name": "“落叶”丹恩",
      "summary": "在穆斯废墟沉默站立的修士。先在大道旁的十字记号取得修士的信与期待切磋动作，再对他做动作触发决斗。决斗不会阻止他在后期加入蕾妲阵营；两次战斗奖励不同。",
      "defaultOption": "complete",
      "category": "dlc",
      "source": "https://docs.qq.com/doc/DVFhtamxKZHF0WkxV；触发条件另行交叉核对，名称以本地原版简体中文文本为准。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "dane.gesture",
          "order": 1294,
          "region": "大道旁的十字记号",
          "title": "捡取修士的信，学习肢体动作“期待切磋”",
          "detail": "抵达恩希斯城后方的“大道旁的十字记号”，检查赐福旁的拾取光点，取得“修士的信”和肢体动作“期待切磋”。到幽影亚坛即可处理，不要求先触发大卢恩破碎。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "dane.duel",
          "order": 1295,
          "region": "穆斯废墟：赐福旁的丹恩面前",
          "title": "对丹恩使用“期待切磋”，完成决斗后收取落叶格斗术与帽子",
          "detail": "传送“穆斯废墟”，找到旁边沉默的丹恩，面向他使用肢体动作“期待切磋”，而不是反复按交谈。进入决斗并取胜，返回后捡取落叶格斗术及丹恩帽子，检查他留下的讯息。之后可回大道旁找蕾妲补充沉默修士对白。",
          "options": [],
          "needs": [],
          "after": [
            "dane.gesture"
          ],
          "warning": ""
        },
        {
          "id": "dane.end",
          "order": 1429,
          "region": "艾尼尔·伊利姆：追随者群战房间",
          "title": "群战击败丹恩后，收取丹恩流踢击术与剩余防具",
          "detail": "丹恩在后期固定站在蕾妲一侧，早期与他切磋不改变这一点。群战胜利后检查其遗体，收取丹恩流踢击术和剩余防具；不要将穆斯废墟的早期奖励误认为全部收齐。",
          "options": [],
          "needs": [
            "story.leda"
          ],
          "after": [
            "dane.gesture",
            "dane.duel"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "grandam",
      "name": "角人老妪",
      "summary": "藏在“塔之镇”贝瑞特的上锁仓库中。取得仓库钥匙、击败神兽舞狮并戴上神兽头部后才能触发她的主要回应。早期可获得守护灵与炖煮蝎子，梅瑟莫战后有豪华炖煮蝎子。",
      "defaultOption": "complete",
      "category": "dlc",
      "source": "https://docs.qq.com/doc/DVFhtamxKZHF0WkxV；触发条件另行交叉核对，名称以本地原版简体中文文本为准。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "grandam.storeroom",
          "order": 1280,
          "region": "“塔之镇”贝瑞特：民宅小祭坛附近",
          "title": "取仓库钥匙，从小祭坛侧门过桥打开老妪仓库",
          "detail": "从“民宅小祭坛”继续向塔镇上层探索，在水道旁建筑内爬梯，到楼上的尸体处捡仓库钥匙。再回“民宅小祭坛”，走赐福房间的侧门，经有敌人的桥到上锁仓库，使用钥匙打开门，与里面坐着的老妪交谈。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "grandam.lion",
          "order": 1290,
          "region": "神兽舞狮战场 → 民宅小祭坛旁仓库",
          "title": "戴神兽头部找老妪领守护灵，刷新再领炖煮蝎子",
          "detail": "击败神兽舞狮，取得头部装备“神兽头部”。把它实际穿在头盔栏，再回“民宅小祭坛”旁的老妪仓库，谈到重复取得祷告守护灵。坐赐福刷新后再次交谈取得炖煮蝎子；可把蝎子交给三叉口或大道旁的角人换燃炉面具，再回老妪处补领。",
          "options": [],
          "needs": [],
          "after": [
            "grandam.storeroom"
          ],
          "warning": "本表提前到魅惑破碎前以保留早期对白；不是宣称进入幽影城就必定失去所有奖励。"
        },
        {
          "id": "grandam.end",
          "order": 1360,
          "region": "民宅小祭坛旁：角人老妪仓库",
          "title": "梅瑟莫战后回同一仓库，听新对白并领取豪华炖煮蝎子",
          "detail": "击败梅瑟莫后传送“民宅小祭坛”，再次经侧门和桥回老妪仓库，交谈到重复并取得豪华炖煮蝎子。坐赐福刷新，再检查她身边是否留下新的蝎子；后续沉睡属于正常结尾。",
          "options": [],
          "needs": [
            "story.messmer"
          ],
          "after": [
            "grandam.storeroom",
            "grandam.lion"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "ymir",
      "name": "“大祭司”尤弥尔",
      "summary": "玛努斯·美特大教堂里的占星师，给予孔洞项链和三张遗迹地图。按利亚、狄欧、教堂地下密亚的顺序敲响吊钟，最终对战指头之母与尤弥尔。每次交图都应回访柱旁约兰；她的覆眼膜结尾另列选择。",
      "defaultOption": "complete",
      "category": "dlc",
      "source": "https://docs.qq.com/doc/DVFhtamxKZHF0WkxV；触发条件另行交叉核对，名称以本地原版简体中文文本为准。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "ymir.cathedral",
          "order": 1320,
          "region": "波尼村东侧道路 → 玛努斯·美特大教堂",
          "title": "与尤弥尔谈到重复，取得孔洞项链与第一张地图",
          "detail": "从穆斯废墟下方通道爬梯到波尼村，沿东侧桥梁与道路前往“玛努斯·美特大教堂”。与座椅上的尤弥尔交谈，取得孔洞项链和遗迹地图，询问星辉魔法；约兰出现后也与她交谈，再回尤弥尔询问黑铠骑士。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "ymir.rhia",
          "order": 1330,
          "region": "青蓝海岸东侧：利亚指头遗迹 → 大教堂",
          "title": "在利亚遗迹中心敲响吊钟，回教堂领取第二张地图",
          "detail": "沿青蓝海岸东侧海滩进入“利亚指头遗迹”，走向中央垂下的巨型指状吊钟，携带孔洞项链互动敲响，取得红种子护符+1。回玛努斯·美特大教堂找尤弥尔，领取亲爱的星尘及第二张地图，询问世界与米凯拉，再找约兰谈话。",
          "options": [],
          "needs": [],
          "after": [
            "ymir.cathedral"
          ],
          "warning": ""
        },
        {
          "id": "ymir.anna",
          "order": 1369,
          "region": "玛努斯·美特大教堂：座椅下方密道",
          "title": "进入座椅密道击败安娜，回教堂向约兰补充报告",
          "detail": "回报第一处吊钟后，尤弥尔离座时可互动空座椅打开密道，下梯处理黑夜剑士安娜入侵。随后回教堂，与尤弥尔及约兰谈地下袭击。若此时没有进入密道，也可在回报第二处吊钟、领取第三张地图后处理；第三处吊钟仍要等两处遗迹都完成后再去。已击败并回报过安娜的，不必重打。",
          "options": [],
          "needs": [
            "ymir.rhia"
          ],
          "after": [
            "ymir.cathedral",
            "ymir.rhia"
          ],
          "warning": "想保留约兰对白，应先报告安娜，再打指头之母。"
        },
        {
          "id": "ymir.dheo",
          "order": 1370,
          "region": "波尼村北侧 → 幽影城（后门）→ 狄欧指头遗迹",
          "title": "取得“母亲啊”动作，在后门雕像前使用，敲响第二处吊钟",
          "detail": "先到波尼村北侧树下尸体处捡肢体动作“母亲啊”。经幽影城教区及保藏库后侧通路抵达“幽影城（后门）”，走赐福旁侧室，在玛莉卡雕像前使用动作打开通道。穿过藏匿之地前往狄欧指头遗迹，敲响中央吊钟取得蓝种子护符+1；回教堂领取第三张地图，并再次找约兰交谈。",
          "options": [],
          "needs": [
            "story.charm"
          ],
          "after": [
            "ymir.cathedral",
            "ymir.rhia"
          ],
          "warning": ""
        },
        {
          "id": "ymir.metyr",
          "order": 1380,
          "region": "玛努斯·美特大教堂地下：密亚指头遗迹",
          "title": "进入座椅密道，吹响第三处吊钟，击败指头之母梅蒂尔",
          "detail": "回报第二处吊钟、取得第三张地图后刷新地图，互动尤弥尔空座椅并下梯。若之前未遇安娜，先处理她的入侵，回教堂补完约兰对白，再下去到遗迹尽头敲响吊钟，进入“指头之母”梅蒂尔战。战胜后返回教堂。",
          "options": [],
          "needs": [],
          "after": [
            "ymir.cathedral",
            "ymir.rhia",
            "ymir.anna",
            "ymir.dheo"
          ],
          "warning": "提前进入密道可以触发安娜，但最终吊钟阶段仍要按地图委托推进。"
        },
        {
          "id": "ymir.fight",
          "order": 1385,
          "region": "玛努斯·美特大教堂：尤弥尔座椅前 → 外侧墓地",
          "title": "回教堂互动座椅，击败约兰与尤弥尔，再捡守护指头",
          "detail": "战胜梅蒂尔后传送回教堂，靠近并互动尤弥尔座椅，先处理约兰入侵，再击败尤弥尔，收取其装备与铃珠。到教堂外尤弥尔曾站立的墓碑旁捡取魔法守护指头。坐赐福刷新后，约兰的覆眼膜抉择才开始。",
          "options": [],
          "needs": [],
          "after": [
            "ymir.cathedral",
            "ymir.rhia",
            "ymir.anna",
            "ymir.dheo",
            "ymir.metyr"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "jolan",
      "name": "约兰与安娜",
      "summary": "约兰在玛努斯·美特大教堂柱旁，随尤弥尔委托增加对白。战后交赐福覆眼膜得骨灰，交黑暗覆眼膜得黑夜刀，二者互斥；约兰骨灰可再到拉巴斯魔法师塔上层与安娜傀儡融合，融合可撤回。",
      "defaultOption": "duo",
      "category": "dlc",
      "source": "https://docs.qq.com/doc/DVFhtamxKZHF0WkxV；触发条件另行交叉核对，名称以本地原版简体中文文本为准。",
      "options": [
        {
          "id": "ash",
          "label": "给赐福覆眼膜，取得约兰骨灰",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "ymir",
              "optionIds": [
                "complete"
              ],
              "reason": "约兰结尾需要完成尤弥尔与指头之母事件。"
            }
          ]
        },
        {
          "id": "duo",
          "label": "给赐福覆眼膜，再与安娜融合双人骨灰",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "ymir",
              "optionIds": [
                "complete"
              ],
              "reason": "约兰与安娜骨灰需要完成尤弥尔支线。"
            }
          ]
        },
        {
          "id": "sword",
          "label": "给黑暗覆眼膜，取得黑夜刀",
          "description": "",
          "ending": "",
          "requirements": [
            {
              "questId": "ymir",
              "optionIds": [
                "complete"
              ],
              "reason": "约兰结尾需要完成尤弥尔事件。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "jolan.meet",
          "order": 1322,
          "region": "玛努斯·美特大教堂：座椅旁侧柱",
          "title": "与柱旁约兰初遇，每次遗迹回报后继续交谈",
          "detail": "先与座椅上的尤弥尔交谈到重复，再找靠在教堂柱旁的约兰。以后每次完成吊钟并回报尤弥尔，都回来检查她的新对白。击败地下安娜后，向她询问地底袭击自己的黑夜剑士；这是补充剧情，不直接决定骨灰或武器。",
          "options": [],
          "needs": [
            "ymir.cathedral"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "jolan.eyes",
          "order": 1386,
          "region": "幽影城：保藏库地底 / 礼树暗道；惩罚要塞 / 放水教区",
          "title": "按约兰结尾准备一枚覆眼膜，与昆兰的用量分开计算",
          "detail": "骨灰或双人骨灰：准备赐福覆眼膜，可从保藏库（一楼）通向地底的路线、或教区放水后通向“礼树暗道”的区域取得。黑夜刀：准备黑暗覆眼膜，可在惩罚要塞地底取得，或击败放水后教区中的对应腐败树灵取得。若昆兰也选同一种奖励，需要该种覆眼膜各一枚，不能让两人共用一枚。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": "通过 NPC 对话交付，不要从背包直接消耗覆眼膜。"
        },
        {
          "id": "jolan.eye",
          "order": 1387,
          "region": "玛努斯·美特大教堂：约兰原先靠柱位置",
          "title": "尤弥尔战后刷新，向倒地约兰交付所选覆眼膜",
          "detail": "击败尤弥尔后坐教堂赐福刷新，回约兰原来靠柱的位置，与倒地的她交谈。选骨灰路线交“赐福覆眼膜”，得到黑夜剑士约兰；选武器路线交“黑暗覆眼膜”，得到黑夜刀。交付前再核对当前计划的分支。",
          "options": [],
          "needs": [
            "ymir.fight"
          ],
          "after": [
            "jolan.meet",
            "jolan.eyes"
          ],
          "warning": "单周目常规流程只能取得其中一种；交错道具无法靠赎罪改回。"
        },
        {
          "id": "jolan.anna",
          "order": 1390,
          "region": "巫者村附近悬崖 → 拉巴斯魔法师塔上层",
          "title": "从巫者村一侧逐层下到塔顶，与安娜傀儡融合骨灰",
          "detail": "带着约兰骨灰，经幽影城后门隐藏通路到巫者村一带。从面向拉巴斯魔法师塔的悬崖找可落脚石台，逐层下降到塔上层，互动安娜傀儡选择将她与约兰结合，取得“约兰与安娜”。再次互动可拆回约兰骨灰；不是在塔底找人对话。",
          "options": [
            "duo"
          ],
          "needs": [],
          "after": [
            "jolan.meet",
            "jolan.eyes",
            "jolan.eye"
          ],
          "warning": "跳落前花掉卢恩，逐层落脚；不采用攻略里“一跳就死不了”的保证。"
        }
      ]
    },
    {
      "id": "queelign",
      "name": "“火焰骑士”昆兰",
      "summary": "会在“塔之镇”贝瑞特与圣战教堂入侵；地点先后可互换，第二次胜利给祈祷厅钥匙。随后在幽影城教区祈祷厅找到本体，交赐福覆眼膜得骨灰，交黑暗覆眼膜得昆兰的大剑。与约兰的选择独立，各耗一枚道具。",
      "defaultOption": "ash",
      "category": "dlc",
      "source": "https://docs.qq.com/doc/DVFhtamxKZHF0WkxV；触发条件另行交叉核对，名称以本地原版简体中文文本为准。",
      "options": [
        {
          "id": "ash",
          "label": "给赐福覆眼膜，取得昆兰骨灰",
          "description": "",
          "ending": "",
          "requirements": []
        },
        {
          "id": "sword",
          "label": "给黑暗覆眼膜，取得昆兰大剑",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "queelign.town",
          "order": 1288,
          "region": "“塔之镇”贝瑞特：民宅小祭坛上方庭院",
          "title": "到小祭坛上方大庭院处理昆兰入侵",
          "detail": "从“民宅小祭坛”出来上楼梯，往右侧的大庭院走，触发昆兰入侵并击败。若这是首次遭遇，取得圣战徽章；若已在圣战教堂先打过，则这里可能直接给第二次入侵的奖励。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "queelign.church",
          "order": 1293,
          "region": "幽影亚坛：圣战教堂",
          "title": "进入圣战教堂处理另一次入侵，确认祈祷厅钥匙入手",
          "detail": "从“大道旁的十字记号”向西北到圣战教堂，走入教堂触发昆兰入侵。两处入侵都完成后，确认战灰火焰穿刺与祈祷厅钥匙在背包中。教堂可以在大卢恩破碎前处理，不需要先进入幽影城。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [
            "queelign.town"
          ],
          "warning": ""
        },
        {
          "id": "queelign.eyes",
          "order": 1374,
          "region": "幽影城保藏库地底 / 礼树暗道 / 惩罚要塞",
          "title": "按昆兰结尾准备覆眼膜，预留约兰要用的另一枚",
          "detail": "要昆兰骨灰，准备赐福覆眼膜：保藏库（一楼）往下通向地底的路线、或放水教区通向礼树暗道的区域可取得。要昆兰的大剑，准备黑暗覆眼膜：惩罚要塞地底、放水教区对应腐败树灵可各取得一枚。若约兰也选相同类型奖励，分别准备两枚。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": "覆眼膜是交给 NPC 的道具，直接在背包使用会浪费。"
        },
        {
          "id": "queelign.prayer",
          "order": 1375,
          "region": "幽影城：教区入口 → 祈祷厅",
          "title": "从教区屋顶落入教堂，用钥匙开祈祷厅并交覆眼膜",
          "detail": "从“教区入口”沿露出水面的屋顶前进，跳过建筑间距，在教堂破损屋顶的开口落到横梁，再落到内部平台。找到用祈祷厅钥匙开启的房门，与里面跪着的昆兰谈到重复。骨灰路线交赐福覆眼膜；大剑路线交黑暗覆眼膜。找到房间不要求先给教区放水。",
          "options": [],
          "needs": [],
          "after": [
            "queelign.town",
            "queelign.church",
            "queelign.eyes"
          ],
          "warning": "赐福得骨灰，黑暗得昆兰的大剑；确认分支后再交。"
        }
      ]
    },
    {
      "id": "igon",
      "name": "埃贡",
      "summary": "在通柱坡中段附近的路边痛苦呼喊。穿过龙洞抵达尖刺山，击败相斗飞龙后取得埃贡的勾指；贝勒场内可召唤他复仇。最终装备需回到他交指头的原处收取。",
      "defaultOption": "complete",
      "category": "dlc",
      "source": "https://docs.qq.com/doc/DVFhtamxKZHF0WkxV；触发条件另行交叉核对，名称以本地原版简体中文文本为准。",
      "options": [
        {
          "id": "complete",
          "label": "完成支线与收尾",
          "description": "",
          "ending": "",
          "requirements": []
        }
      ],
      "steps": [
        {
          "id": "igon.road",
          "order": 1280,
          "region": "通柱坡中段：赐福附近道路",
          "title": "在路边与痛苦呼喊的埃贡交谈",
          "detail": "从“通柱坡中段”走向通往龙洞的道路，找到地面上呼喊的埃贡，交谈到内容重复。不要将他当敌人攻击；之后会在尖刺山继续遇到他。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "igon.drake",
          "order": 1290,
          "region": "龙洞 → 龙洞终点 → 尖刺山的山脚",
          "title": "通过龙洞，击败相斗飞龙后向埃贡领取勾指",
          "detail": "沿路进入龙洞地牢，按洞内提示落入深处，击败“古龙人”，开门抵达“龙洞终点”。沿尖刺山道路前进，击败互相厮杀的飞龙中留下的目标，听见埃贡呼喊后找他交谈，取得“埃贡的勾指”。记住这次谈话地点，战后还要回来。",
          "options": [],
          "needs": [],
          "after": [
            "igon.road"
          ],
          "warning": ""
        },
        {
          "id": "igon.bayle",
          "order": 1380,
          "region": "尖刺山（山顶）：狂龙贝勒战场内",
          "title": "进贝勒战场后召唤埃贡，击败狂龙贝勒",
          "detail": "沿山路和灵魂气流到“尖刺山（山顶）”。先核对龙飨女巫分支；若选给药，需先完成给药及醒来对白。进入贝勒场内后找金色印，用已取得的勾指召唤埃贡，再击败贝勒。本表为保留复仇对白安排召唤；与女巫线记录的是同一场 Boss 战。",
          "options": [],
          "needs": [],
          "after": [
            "igon.road",
            "igon.drake",
            "priestess.sleep"
          ],
          "warning": "女巫给药必须先于这一战取胜。"
        },
        {
          "id": "igon.end",
          "order": 1386,
          "region": "尖刺山：相斗飞龙后、埃贡交付勾指的位置",
          "title": "回到交勾指的路边收取埃贡遗物",
          "detail": "战胜贝勒后，返回尖刺山较低处、之前与埃贡谈话并拿到勾指的路边，收取埃贡防具、埃贡的大弓和埃贡的铃珠。不是回最初通柱坡的倒地位置。拿到勾指后刷新导致他死亡属于正常剧情，不会取消已经获得的召唤道具。",
          "options": [],
          "needs": [],
          "after": [
            "igon.road",
            "igon.drake",
            "igon.bayle"
          ],
          "warning": ""
        }
      ]
    },
    {
      "id": "priestess",
      "name": "龙飨女巫（芙柔桑克斯）",
      "summary": "驻留龙飨大祭坛的大龙尸旁。贝勒战前是否在夜晚给她休里耶的秘药，决定两组互斥奖励：不给药得女巫心脏与花岩槌；给药并战后承认、接受追随，得龙雷与古龙芙柔桑克斯骨灰。药物来自穆尔与休里耶的交叉流程。",
      "defaultOption": "awake",
      "category": "dlc",
      "source": "https://docs.qq.com/doc/DVFhtamxKZHF0WkxV；触发条件另行交叉核对，名称以本地原版简体中文文本为准。",
      "options": [
        {
          "id": "awake",
          "label": "不给秘药，取得女巫心脏与花岩槌",
          "description": "贝勒战后到祭坛原位置捡取两件物品。",
          "ending": "",
          "requirements": []
        },
        {
          "id": "sleep",
          "label": "夜间给秘药，取得女巫骨灰与龙雷",
          "description": "秘药可以提前领取，实际给药只需在击败贝勒前完成。",
          "ending": "",
          "requirements": [
            {
              "questId": "thiollier",
              "optionIds": [
                "complete",
                "concoction"
              ],
              "reason": "需要休里耶调制秘药；完整托莉娜支线与取得秘药可以并行。"
            },
            {
              "questId": "moore",
              "optionIds": [
                "move",
                "sad",
                "wait"
              ],
              "reason": "秘药所需黑色浓浆来自穆尔，需先取得。"
            }
          ]
        }
      ],
      "steps": [
        {
          "id": "priestess.altar",
          "order": 1292,
          "region": "龙洞终点南侧 → 龙飨大祭坛",
          "title": "到大龙尸旁与女巫交谈，听贝勒及埃贡的话题",
          "detail": "通过龙洞后，从“龙洞终点”沿南侧道路走，抵达巨大龙尸旁的“龙飨大祭坛”，与女巫交谈并接受讨伐贝勒。可继续询问贝勒和埃贡；若夜间找不到她，先将时间调到白天。此处不是往尖刺山顶上走的另一条山路。",
          "options": [],
          "needs": [
            "story.dlc"
          ],
          "after": [],
          "warning": ""
        },
        {
          "id": "priestess.sleep",
          "order": 1335,
          "region": "龙飨大祭坛：女巫站立处",
          "title": "夜间通过对话倒入秘药，等到次日醒来再谈话",
          "detail": "先完成穆尔黑色浓浆→休里耶的秘药链，在祭坛赐福消磨到夜晚，再找女巫，选择“把休里耶的秘药倒入口中”。成功后她会睡去，推进到次日并刷新，回来与醒来的她谈完失去联系的对白。若时段不对，重新休息到下一晚再试。",
          "options": [
            "sleep"
          ],
          "needs": [
            "thiollier.concoction"
          ],
          "after": [
            "priestess.altar"
          ],
          "warning": "必须在击败贝勒前给药并听完醒来对白；不要求给药早于魅惑破碎。"
        },
        {
          "id": "priestess.bayle",
          "order": 1381,
          "region": "尖刺山（山顶）：狂龙贝勒战场",
          "title": "击败狂龙贝勒，完成女巫委托",
          "detail": "沿尖刺山道路与灵魂气流到山顶，击败狂龙贝勒。如果已在埃贡步骤中完成这一战，直接核对并勾选本条，不需要打第二次。途中古龙瑟涅桑克斯属于可选战斗。",
          "options": [],
          "needs": [],
          "after": [
            "priestess.altar",
            "priestess.sleep",
            "igon.bayle"
          ],
          "warning": ""
        },
        {
          "id": "priestess.awake",
          "order": 1388,
          "region": "龙飨大祭坛：女巫原先站立处",
          "title": "回祭坛捡取女巫心脏和花岩槌",
          "detail": "不给女巫秘药的路线，在贝勒战后传送“龙飨大祭坛”，检查女巫原先站立的地方，捡取女巫心脏与花岩槌。她不在原位属于这一分支的正常收尾；这条路线没有女巫骨灰及芙柔桑克斯的龙雷。",
          "options": [
            "awake"
          ],
          "needs": [],
          "after": [
            "priestess.altar",
            "priestess.sleep",
            "priestess.bayle"
          ],
          "warning": ""
        },
        {
          "id": "priestess.confess",
          "order": 1388,
          "region": "龙飨大祭坛：女巫站立处",
          "title": "领取龙雷，承认使她沉睡并选择带领她一起前进",
          "detail": "给药路线在贝勒战后回“龙飨大祭坛”找仍在的女巫，交谈取得芙柔桑克斯的龙雷。再谈，选择“你会陷入沉睡，是我造成的”，继续选择“带领她一起前进”，取得“古龙”芙柔桑克斯骨灰。此路线不会再掉女巫心脏和花岩槌。",
          "options": [
            "sleep"
          ],
          "needs": [],
          "after": [
            "priestess.altar",
            "priestess.sleep",
            "priestess.bayle",
            "priestess.awake"
          ],
          "warning": ""
        }
      ]
    }
  ],
  "milestones": [
    {
      "id": "story.capital",
      "title": "取得两枚大卢恩，开启王城入口",
      "detail": "先取得两枚碎片君王的大卢恩并在圆桌觐见双指，再经王城外围龙装大树守卫等可用入口进入王城。大卢恩来源可自行选择；此处只检查共同主线门槛，不要求固定击败哪两名半神。",
      "order": 550,
      "region": "王城罗德尔",
      "options": [],
      "needs": [],
      "after": [],
      "warning": ""
    },
    {
      "id": "story.morgott",
      "title": "击败恶兆王蒙葛特，取得洛德符节",
      "detail": "沿王城主线经黄金树大教堂、女王闺阁前往艾尔登宝座，击败恶兆王蒙葛特。向黄金树入口调查树刺后，在艾尔登宝座赐福休息，与梅琳娜交谈取得洛德符节；别打完首领就直接去升降机。",
      "order": 620,
      "region": "王城罗德尔",
      "options": [],
      "needs": [
        "story.capital"
      ],
      "after": [],
      "warning": ""
    },
    {
      "id": "story.mountains",
      "title": "经洛德大升降机进入巨人山顶",
      "detail": "持洛德符节，从王城东侧大门往禁域，经洛德大升降机高举符节进入巨人山顶。抵达萨米尔废墟后开启赐福，继续检查夏玻利利、米莉森等所选 NPC 的位置。",
      "order": 680,
      "region": "巨人山顶",
      "options": [],
      "needs": [
        "story.morgott"
      ],
      "after": [],
      "warning": ""
    },
    {
      "id": "story.radahn",
      "title": "参加战斗祭典，击败碎星拉塔恩",
      "detail": "在亚坛探索或布莱泽调查等路径开启祭典后，到红狮子城找杰廉确认参加。经教堂后方升降机与传送门到恸哭沙丘，击败拉塔恩；战后先找所选布莱泽、亚历山大交谈，再去诺克隆恩陨石坑。",
      "order": 410,
      "region": "红狮子城",
      "options": [],
      "needs": [],
      "after": [
        "jerren.festival",
        "blaidd.siofra",
        "alexander.gael"
      ],
      "warning": ""
    },
    {
      "id": "story.rykard",
      "title": "核对官邸委托后，击败亵渎君王拉卡德",
      "detail": "先完成当前计划选中的官邸主委托、帕奇与贝纳尔专属委托，并回各自 NPC 原位置领取奖励。之后可接受塔妮丝“见王”的引导，或自行打通牢镇抵达拉卡德首领区，再击败亵渎君王。",
      "order": 790,
      "region": "火山官邸",
      "options": [],
      "needs": [],
      "after": [
        "tanith.juno",
        "bernahl.capital",
        "patches.target",
        "rya.spare",
        "rya.drink",
        "rya.kill",
        "diallos.manor"
      ],
      "warning": "击败拉卡德会终止官邸暗杀委托阶段。"
    },
    {
      "id": "story.firegiant",
      "title": "击败火焰巨人",
      "detail": "从巨人山顶火焰之巅一带前往大锅前的首领战场，击败火焰巨人。若想看亚历山大协助战，可检查场内金色印；战胜后到大锅锅沿上的赐福继续剧情。",
      "order": 920,
      "region": "巨人山顶",
      "options": [],
      "needs": [
        "story.mountains"
      ],
      "after": [],
      "warning": ""
    },
    {
      "id": "story.forge",
      "title": "在火焰大锅完成剧情点火，进入天空城",
      "detail": "击败火焰巨人后登上大锅锅沿，到赐福“巨人火焰大锅”休息，先读完计划排在此处之前的 NPC 待办。未接受癫火时与梅琳娜选择准备好推进；已接受时按玩家自身的癫火互动推进，进入天空城。",
      "order": 1000,
      "region": "巨人火焰大锅",
      "options": [],
      "needs": [
        "story.firegiant"
      ],
      "after": [
        "goldmask.snow",
        "melina.last",
        "hyetta.flame",
        "jellyfish.reunion"
      ],
      "warning": "先完成计划中排在此处之前的对话和分支。"
    },
    {
      "id": "story.maliketh",
      "title": "确认王城待办后，击败黑剑玛利喀斯",
      "detail": "在天空城经大桥侧边走向黑剑首领房前，先核对王城城寨委托、金面具雕像秘密、温床诅咒与基甸报告。准备好后击败黑剑玛利喀斯，返回的是灰烬王城，原王城部分道路与物品将改变。",
      "order": 1200,
      "region": "逐渐崩毁的法姆·亚兹拉",
      "options": [],
      "needs": [
        "story.forge"
      ],
      "after": [
        "goldmask.secret",
        "bernahl.capital",
        "gideon.report",
        "dung.seeds"
      ],
      "warning": "王城将变为灰烬王城，原王城地图部分内容无法补做。"
    },
    {
      "id": "story.final",
      "title": "完成最终战，保留最终结局选择",
      "detail": "在灰烬王城依次推进基甸、葛孚雷/荷莱·露与黄金树最终战，击败拉达冈和艾尔登之兽。战胜后先停下，不立即触发玛莉卡或蓝色印；按所选 NPC 的最终结局步骤行动。",
      "order": 1500,
      "region": "灰烬王城 / 黄金树",
      "options": [],
      "needs": [
        "story.maliketh"
      ],
      "after": [
        "melina.accord",
        "melina.echoes",
        "melina.altus",
        "melina.thorns",
        "melina.chamber",
        "melina.last",
        "varre.first",
        "varre.rose",
        "varre.invasions",
        "varre.blood",
        "varre.medal",
        "varre.nameless",
        "varre.finish",
        "boc.tree",
        "boc.needle",
        "boc.lake",
        "boc.gold",
        "boc.affirm",
        "boc.rebirth",
        "patches.cave",
        "patches.kill",
        "patches.spare",
        "patches.isle",
        "patches.kick",
        "patches.target",
        "patches.castle",
        "patches.return",
        "yura.dragon",
        "yura.nerijus",
        "yura.academy",
        "yura.eleonora",
        "sellen.meet",
        "sellen.azur",
        "sellen.lusat",
        "sellen.primal",
        "sellen.body",
        "sellen.duel",
        "sellen.reward",
        "sellen.oppose",
        "jerren.festival",
        "jerren.leave",
        "jerren.witchbane",
        "jerren.reward",
        "rogier.castle",
        "rogier.corpse",
        "rogier.print",
        "rogier.ranni",
        "rogier.letter",
        "ranni.renna",
        "ranni.join",
        "ranni.blade",
        "ranni.cursemark",
        "ranni.mini",
        "ranni.shadow",
        "ranni.ring",
        "ranni.astel",
        "ranni.marry",
        "blaidd.wolf",
        "blaidd.darriwil",
        "blaidd.siofra",
        "blaidd.festival",
        "blaidd.gaol",
        "blaidd.end",
        "iji.meet",
        "iji.report",
        "seluvis.potion",
        "seluvis.gideon",
        "seluvis.nepheli",
        "seluvis.dung",
        "seluvis.cellar",
        "seluvis.amber",
        "pidia.shop",
        "pidia.end",
        "nepheli.castle",
        "nepheli.village",
        "nepheli.hawk",
        "nepheli.throne",
        "nepheli.puppet",
        "kenneth.request",
        "kenneth.fort",
        "kenneth.throne",
        "gostoc.gate",
        "gostoc.kill",
        "gostoc.stomp",
        "gostoc.shop",
        "irina.letter",
        "irina.edgar",
        "irina.boss",
        "irina.revenge",
        "hyetta.first",
        "hyetta.purified",
        "hyetta.bridge",
        "hyetta.fingerprint",
        "hyetta.flame",
        "roderika.shack",
        "roderika.memento",
        "roderika.tuning",
        "roderika.ash",
        "hewg.meet",
        "hewg.roderika",
        "hewg.godslaying",
        "hewg.end",
        "jellyfish.reunion",
        "gideon.intro",
        "gideon.village",
        "gideon.report",
        "latenna.albus",
        "latenna.recruit",
        "latenna.sol",
        "latenna.church",
        "d.deathroot",
        "d.dagger",
        "d.armor",
        "d.brother",
        "d.end",
        "fia.hug",
        "fia.dagger",
        "fia.depths",
        "fia.mark",
        "fia.rune",
        "gurranq.first",
        "gurranq.early",
        "gurranq.hostile",
        "gurranq.late",
        "goldmask.roundtable",
        "goldmask.bridge",
        "goldmask.secret",
        "goldmask.snow",
        "goldmask.tonic",
        "goldmask.rune",
        "dung.curse",
        "dung.release",
        "dung.invader",
        "dung.seeds",
        "dung.puppet",
        "boggart.necklace",
        "boggart.prawn",
        "boggart.move",
        "boggart.end",
        "thops.church",
        "thops.key",
        "thops.give",
        "thops.end",
        "alexander.limgrave",
        "alexander.kill",
        "alexander.gael",
        "alexander.radahn",
        "alexander.oil",
        "alexander.lava",
        "alexander.duel",
        "diallos.roundtable",
        "diallos.lanya",
        "diallos.manor",
        "diallos.jarburg",
        "diallos.end",
        "jarbairn.meet",
        "jarbairn.diallos",
        "jarbairn.innards",
        "rya.request",
        "rya.invite",
        "rya.altus",
        "rya.snake",
        "rya.amnion",
        "rya.tonic",
        "rya.spare",
        "rya.drink",
        "rya.kill",
        "rya.letter",
        "rya.forget",
        "tanith.join",
        "tanith.istvan",
        "tanith.rileigh",
        "tanith.juno",
        "tanith.aftermath",
        "tanith.knight",
        "bernahl.shack",
        "bernahl.letter",
        "bernahl.capital",
        "bernahl.invasion",
        "gowry.request",
        "gowry.repair",
        "gowry.shop",
        "gowry.end",
        "millicent.repair",
        "millicent.church",
        "millicent.shack",
        "millicent.prosthesis",
        "millicent.windmill",
        "millicent.snow",
        "millicent.prayer",
        "millicent.tree",
        "millicent.assist",
        "millicent.needle",
        "millicent.invade",
        "kale.merchant",
        "kale.gesture",
        "miriel.church",
        "enia.audience",
        "enia.burning",
        "enia.end",
        "ensha.silent",
        "ensha.invasion",
        "ensha.armor",
        "shabriri.talk",
        "leda.entry",
        "leda.suspect",
        "leda.hornsent",
        "leda.ansbach",
        "leda.battle",
        "hornsent.map",
        "hornsent.broken",
        "hornsent.summon",
        "hornsent.revenge",
        "freyja.cross",
        "freyja.question",
        "freyja.letter",
        "freyja.end",
        "ansbach.cross",
        "ansbach.scroll",
        "ansbach.clearance",
        "ansbach.allies",
        "ansbach.end",
        "moore.shop",
        "moore.syrup",
        "moore.answer",
        "moore.move",
        "moore.sad",
        "thiollier.cross",
        "thiollier.concoction",
        "thiollier.fissure",
        "thiollier.nectar",
        "thiollier.invade",
        "thiollier.end",
        "dane.gesture",
        "dane.duel",
        "dane.end",
        "grandam.storeroom",
        "grandam.lion",
        "grandam.end",
        "ymir.cathedral",
        "ymir.rhia",
        "ymir.dheo",
        "ymir.metyr",
        "ymir.fight",
        "jolan.meet",
        "jolan.eye",
        "jolan.anna",
        "queelign.town",
        "queelign.church",
        "queelign.prayer",
        "igon.road",
        "igon.drake",
        "igon.bayle",
        "igon.end",
        "priestess.altar",
        "priestess.sleep",
        "priestess.bayle",
        "priestess.awake",
        "priestess.confess",
        "story.cleanse",
        "leda.defend_hornsent",
        "leda.defend_ansbach",
        "hornsent.swift",
        "hornsent.aftermath",
        "hornsent.follower",
        "freyja.report",
        "ansbach.broken",
        "ansbach.summon",
        "moore.notes2",
        "moore.notes4",
        "moore.notes7",
        "moore.notes1",
        "moore.notes3",
        "moore.notes5",
        "moore.notes6",
        "moore.wait",
        "thiollier.allies",
        "ymir.anna",
        "jolan.eyes",
        "queelign.eyes",
        "d.giveArmor",
        "ranni.defeatAstel"
      ],
      "warning": ""
    },
    {
      "id": "story.cleanse",
      "title": "使用米凯拉的针，解除癫火结局锁定",
      "detail": "从天空城赐福“大桥侧边”附近乘升降机下行，回建筑外悬崖，沿可跳落的石台到龙王入口，躺下进入普拉顿桑克斯竞技场。在场内从背包真正使用米凯拉的针，确认解除癫火；不用先杀龙王，持有针也不算已解除。",
      "order": 1160,
      "region": "龙王普拉顿桑克斯竞技场",
      "options": [],
      "needs": [
        "millicent.needle",
        "hyetta.flame",
        "story.forge"
      ],
      "after": [],
      "warning": "解除癫火不等于撤销已经发生的梅琳娜剧情。"
    },
    {
      "id": "story.dlc",
      "title": "击败碎星拉塔恩与鲜血君王蒙格，触碰枯萎手臂进入 DLC",
      "detail": "先击败碎星拉塔恩与鲜血君王蒙格；在“神人坠眠之茧”与蕾妲交谈，触碰茧前伸出的枯萎手臂进入幽影之地。不需要先打完本体最终战。",
      "order": 1260,
      "region": "蒙格温王朝：神人坠眠之茧",
      "options": [],
      "needs": [
        "story.radahn"
      ],
      "after": [],
      "warning": ""
    },
    {
      "id": "story.charm",
      "title": "完成前置回访后，触发大卢恩与魅惑破碎",
      "detail": "先完成已选择的早期回访、黑色浓浆及秘药领取、老妪与集物虫笔记等步骤，再向幽影城外围或通村吊桥方向探索，等待大卢恩与魅惑破碎的提示。之后回访十字记号处的追随者。破碎会推进人物状态，不等于所有支线失败。",
      "order": 1310,
      "region": "幽影亚坛 / 幽影城外围",
      "options": [],
      "needs": [
        "story.dlc"
      ],
      "after": [
        "leda.entry",
        "hornsent.map",
        "freyja.cross",
        "ansbach.cross",
        "moore.syrup",
        "moore.notes7",
        "thiollier.concoction",
        "grandam.lion",
        "dane.duel"
      ],
      "warning": "触发范围在靠近时自动生效；想保留前期对白，请勿先骑马冲到幽影城。"
    },
    {
      "id": "story.messmer",
      "title": "击败“穿刺者”梅瑟莫",
      "detail": "先处理本表选定的角人对立印，再首次进入梅瑟莫房间。若选角人复仇路线，在战场内用金色印召唤他，然后击败梅瑟莫。胜利后坐赐福，再处理角人与老妪的战后回访。",
      "order": 1350,
      "region": "幽影城暗室",
      "options": [],
      "needs": [
        "story.charm"
      ],
      "after": [
        "grandam.lion",
        "hornsent.summon",
        "leda.hornsent",
        "leda.defend_hornsent"
      ],
      "warning": "角人清算的截止点是首次进入 Boss 房间，本表将相关步骤安排在开战前。"
    },
    {
      "id": "story.seal",
      "title": "击败花蕾圣女罗蜜娜，完成所选追随者待办后燃烧封印树",
      "detail": "在劳弗古遗迹击败花蕾圣女罗蜜娜，到教堂后方封印树使用梅瑟莫的火种。燃烧前核对：弗蕾亚送信、安帕赫研究与所选清算、休里耶最后转达、丹恩切磋均完成。进入艾尼尔·伊利姆会推进追随者的收尾。",
      "order": 1400,
      "region": "劳弗古遗迹 / 封印树",
      "options": [],
      "needs": [
        "story.messmer"
      ],
      "after": [
        "freyja.letter",
        "ansbach.clearance",
        "leda.ansbach",
        "leda.defend_ansbach",
        "thiollier.invade",
        "dane.duel",
        "hornsent.revenge"
      ],
      "warning": "仅约束所选追随者待办；不是尤弥尔、昆兰、埃贡等全部支线的统一失败点。"
    },
    {
      "id": "story.leda",
      "title": "完成蕾妲与追随者群战",
      "detail": "从“净身厅前室”前进到召唤印所在房间，先用金色印召唤已完成条件的休里耶与安帕赫，再互动蕾妲红色印开战。敌人随人物结尾变化；战后在房内逐一收取参战者遗物。不要将早期帮助蕾妲误认为本次群战也站在她一侧。",
      "order": 1420,
      "region": "艾尼尔·伊利姆：净身厅前室后的房间",
      "options": [],
      "needs": [
        "story.seal"
      ],
      "after": [
        "thiollier.allies",
        "ansbach.summon"
      ],
      "warning": ""
    },
    {
      "id": "story.consort",
      "title": "挑战约定之王拉塔恩，战后回访所选 NPC 的遗物",
      "detail": "完成追随者群战，继续抵达约定之王拉塔恩的最终战。若完成盟友支线，门前可召唤安帕赫、休里耶。胜利后先检查战场入口附近两人遗体，再按所选角色步骤回访托莉娜等处。",
      "order": 1450,
      "region": "艾尼尔·伊利姆",
      "options": [],
      "needs": [
        "story.leda"
      ],
      "after": [],
      "warning": ""
    }
  ],
  "collections": [
    {
      "id": "deathroot",
      "title": "死根（9份）",
      "description": "逐处记录已经取得的死根。交给野兽祭司后仍保留收集勾选；交付进度另在顺序计划确认。第4份交付后会遇到敌对事件，打到求饶便停手。",
      "source": "https://eldenring.wiki.gg/wiki/Deathroot",
      "routes": [
        {
          "questId": "gurranq",
          "optionIds": [
            "complete"
          ],
          "count": 9
        }
      ],
      "stepIds": [
        "gurranq.first",
        "gurranq.early",
        "gurranq.late"
      ],
      "items": [
        {
          "id": "deathroot.village",
          "name": "死根 · 水唤村",
          "region": "宁姆格福：水唤村",
          "detail": "前往宁姆格福东北的水唤村，击败水中划船的唤声船，取得死根。",
          "warning": "",
          "when": []
        },
        {
          "id": "deathroot.deathtouched",
          "name": "死根 · 死亡降临的地下墓地",
          "region": "宁姆格福：圣人桥西侧高地",
          "detail": "从圣人桥向西侧高地寻找死亡降临的地下墓地，击败黑刀刺客，再打开 Boss 房间内的宝箱。",
          "warning": "",
          "when": []
        },
        {
          "id": "deathroot.liurnia",
          "name": "死根 · 利耶尼亚唤声船",
          "region": "利耶尼亚东侧：卡利亚书斋南方",
          "detail": "在卡利亚书斋南面的湖边浅水地带找到唤声船，击败取得死根；与黑刀地下墓地宝箱是两份不同来源。",
          "warning": "",
          "when": []
        },
        {
          "id": "deathroot.blackknife",
          "name": "死根 · 黑刀地下墓地",
          "region": "利耶尼亚东北：黑刀地下墓地",
          "detail": "完成墓地正常路线，击败墓地影子后开 Boss 房宝箱。隐藏黑刀刺客的奖励是黑刀烙印，不能替代这份死根。",
          "warning": "",
          "when": []
        },
        {
          "id": "deathroot.wyndham",
          "name": "死根 · 威达姆废墟",
          "region": "亚坛高原：威达姆废墟",
          "detail": "在威达姆废墟地表击败唤声船取得；不需要进入旁边的威达姆地下墓地找。",
          "warning": "",
          "when": []
        },
        {
          "id": "deathroot.gelmir",
          "name": "死根 · 格密尔英雄墓地",
          "region": "格密尔火山：格密尔英雄墓地",
          "detail": "通过战车机关路线，击败英雄红狼，打开战场里的宝箱取得。",
          "warning": "",
          "when": []
        },
        {
          "id": "deathroot.giantcatacombs",
          "name": "死根 · 巨人山顶地下墓地",
          "region": "巨人山顶：巨人山顶地下墓地",
          "detail": "探索墓地并开启 Boss 门，击败腐烂树灵后，打开战场宝箱。",
          "warning": "",
          "when": []
        },
        {
          "id": "deathroot.mountainmariner",
          "name": "死根 · 索尔城南方唤声船",
          "region": "巨人山顶：索尔城南侧墓地区域",
          "detail": "在通向索尔城的墓地高地找到唤声船并击败，取得死根；巨型骷髅召唤物不是需要寻找的本体。",
          "warning": "",
          "when": []
        },
        {
          "id": "deathroot.hiddenpath",
          "name": "死根 · 通往圣树的密道",
          "region": "洛德大升降机秘密路线：通往圣树的密道",
          "detail": "用圣树秘密符节进入密道，在中央平台有缺口的栏杆处落到隐形路面，探索下层，击败离群仿身泪滴后开宝箱。",
          "warning": "需两半圣树秘密符节，和普通洛德符节不同。",
          "when": []
        }
      ]
    },
    {
      "id": "grapes",
      "title": "夏玻利利葡萄（3颗）",
      "description": "三处各有一颗，同种葡萄可按任意取得顺序交付。海妲每次交付后会迁移；收集与交付分开确认。",
      "source": "https://eldenring.fandom.com/wiki/Shabriri_Grape",
      "routes": [
        {
          "questId": "hyetta",
          "optionIds": [
            "accept",
            "cleanse",
            "final"
          ],
          "count": 3
        }
      ],
      "stepIds": [
        "hyetta.first",
        "hyetta.purified",
        "hyetta.bridge"
      ],
      "items": [
        {
          "id": "grapes.stormveil",
          "name": "夏玻利利葡萄 · 史东薇尔城",
          "region": "葛瑞克王座后方 → 傍湖断崖出口",
          "detail": "从葛瑞克王座大厅往后走，沿通向利耶尼亚的出口下到房间，在幽灵附近尸体光点处捡取；不在王座上。",
          "warning": "",
          "when": []
        },
        {
          "id": "grapes.purified",
          "name": "夏玻利利葡萄 · 受净化的废墟",
          "region": "利耶尼亚东南：受净化的废墟地下室",
          "detail": "在废墟中打碎遮住地下入口的木板，沿楼梯进入地下室，在里面捡取葡萄；同处另有双指的传说。",
          "warning": "",
          "when": []
        },
        {
          "id": "grapes.edgar",
          "name": "夏玻利利葡萄 · 复仇者艾德格",
          "region": "利耶尼亚西侧：复仇者的破屋",
          "detail": "按伊蕾娜、艾德格的正常流程完成摩恩城与女儿处回访，再到复仇者的破屋击败艾德格入侵，取得葡萄。",
          "warning": "成王之路或无缝联机可能影响 NPC 入侵；未触发时不要把这一颗当作已取得。",
          "when": []
        }
      ]
    },
    {
      "id": "fingerprintgrape",
      "title": "指痕葡萄（1颗）",
      "description": "这是海妲在彼鲁姆教堂阶段要求的特殊葡萄，不能用普通夏玻利利葡萄代替。",
      "source": "https://eldenring.fandom.com/wiki/Vyke",
      "routes": [
        {
          "questId": "hyetta",
          "optionIds": [
            "accept",
            "cleanse",
            "final"
          ],
          "count": 1
        }
      ],
      "stepIds": [
        "hyetta.fingerprint"
      ],
      "items": [
        {
          "id": "fingerprintgrape.vyke",
          "name": "指痕葡萄",
          "region": "利耶尼亚东北：镇静教堂前方",
          "detail": "从癫火村一带上山，到镇静教堂前处理“指痕溃烂”维克入侵，获胜后取得指痕葡萄，再交给彼鲁姆教堂的海妲。",
          "warning": "不是巨人山顶封印监牢中的圆桌骑士维克。",
          "when": []
        }
      ]
    },
    {
      "id": "seedbed",
      "title": "温床诅咒（交付5份）",
      "description": "完成食粪者卢恩路线共需5份，不必牺牲虾哥。正常列出两份王城、一份官邸、两份圣树；只有同时选择虾哥悲剧分支，才额外显示他的第6处替代来源。",
      "source": "https://eldenring.fandom.com/wiki/Seedbed_Curse",
      "routes": [
        {
          "questId": "dung",
          "optionIds": [
            "rune",
            "final"
          ],
          "count": 5
        }
      ],
      "stepIds": [
        "dung.curse",
        "dung.seeds"
      ],
      "items": [
        {
          "id": "seedbed.capital_east",
          "name": "温床诅咒 · 王城东侧楼上",
          "region": "王城东边城墙：首段升降机后的建筑",
          "detail": "从王城东边城墙沿城内路线走，乘第一段升降机下去，进入前方大建筑，爬梯、走楼梯到上层，在绑在椅子上的尸体处取得。",
          "warning": "王城变为灰烬王城前收取。",
          "when": []
        },
        {
          "id": "seedbed.manor",
          "name": "温床诅咒 · 城寨二楼",
          "region": "王城：城寨一楼上层，仿圆桌食粪者房间",
          "detail": "从城寨外侧的马厩屋顶进入二楼，按仿圆桌布局找到对应食粪者房间，在椅子上的尸体处取得。",
          "warning": "王城变灰前收取；不是传送回真正圆桌厅堂。",
          "when": []
        },
        {
          "id": "seedbed.volcano",
          "name": "温床诅咒 · 火山官邸",
          "region": "艾格蕾教堂后段：通往拉卡德传送门前的支路",
          "detail": "沿官邸内部探索到传送门前大楼，在楼上用石剑钥匙开启雾门，沿悬笼区域逐层下降，到底层椅子上的尸体处取得。",
          "warning": "",
          "when": []
        },
        {
          "id": "seedbed.haligtree_upper",
          "name": "温床诅咒 · 圣树外墙露台",
          "region": "圣树分枝艾布雷菲尔：祈祷室外上层支路",
          "detail": "从祈祷室沿城墙前进，借右侧栏杆、斜撑及平台绕到俯瞰弩炮庭院的外墙露台，在椅子上的尸体处取得。",
          "warning": "",
          "when": []
        },
        {
          "id": "seedbed.haligtree_lower",
          "name": "温床诅咒 · 圣树暗室",
          "region": "圣树分枝艾布雷菲尔：两名尊腐骑士房间下方",
          "detail": "从祈祷室外侧路线找到两名尊腐骑士所在房间，绕至其下方暗室，检查绑在椅子上的尸体。和外墙露台那份分开计数。",
          "warning": "",
          "when": []
        },
        {
          "id": "seedbed.boggart",
          "name": "温床诅咒 · 虾哥（替代来源）",
          "region": "王城外围：壕沟中的虾哥",
          "detail": "仅按已选悲剧路线推进：虾哥迁入壕沟后，完成食粪者相关对白和入侵事件，再检查虾哥遗体取得。可代替上述任一份，不要求六份全交。",
          "warning": "这条来源会导致虾哥死亡；保留商店路线不显示此项。",
          "when": [
            {
              "questId": "boggart",
              "optionIds": [
                "curse"
              ],
              "reason": "仅悲剧分支可用。"
            }
          ]
        }
      ]
    },
    {
      "id": "haligtreemedallion",
      "title": "圣树秘密符节（左右各半）",
      "description": "两半都取得后，在洛德大升降机切换动作并高举秘密符节，进入通往圣树的密道。不要与洛德符节混淆。",
      "source": "https://eldenring.wiki.gg/wiki/Haligtree_Secret_Medallion_%28Right%29",
      "routes": [
        {
          "questId": "latenna",
          "optionIds": [
            "complete"
          ],
          "count": 2
        }
      ],
      "stepIds": [
        "latenna.albus",
        "latenna.sol",
        "latenna.church"
      ],
      "items": [
        {
          "id": "haligtreemedallion.right",
          "name": "圣树秘密符节（右）",
          "region": "利耶尼亚：白金村上坡尽头",
          "detail": "从白金村赐福上坡，在路边找到伪装成罐子的阿尔布斯，轻击解除伪装，再反复交谈取得右半。拿到后先到狼眠破屋招募勒缇娜，再处理左半。",
          "warning": "",
          "when": []
        },
        {
          "id": "haligtreemedallion.left",
          "name": "圣树秘密符节（左）",
          "region": "巨人山顶：索尔城 Boss 后方塔顶",
          "detail": "击败索尔城的老将尼奥，继续穿过战场后的房间，乘升降机到塔顶，在幽灵附近捡取左半。不是 Boss 直接掉落。",
          "warning": "",
          "when": []
        }
      ]
    },
    {
      "id": "foragerbooks",
      "title": "集物虫的制作笔记（7册）",
      "description": "本表以7册全收集为目标，不是推进穆尔的必要门槛。集物虫是友好单位；4需温热石救助，7回穆尔领取。先拿4和7，再接近教区入口，并在给穆尔关键回答前收完想要的册数。",
      "source": "https://docs.qq.com/doc/DVFhtamxKZHF0WkxV",
      "routes": [
        {
          "questId": "moore",
          "optionIds": [
            "move",
            "sad",
            "wait"
          ],
          "count": 7
        }
      ],
      "stepIds": [
        "moore.notes2",
        "moore.notes4",
        "moore.notes7",
        "moore.notes1",
        "moore.notes3",
        "moore.notes5",
        "moore.notes6",
        "moore.answer"
      ],
      "items": [
        {
          "id": "foragerbooks.book2",
          "name": "集物虫的制作笔记【2】",
          "region": "墓地平原：眺望镇东侧高地",
          "detail": "由墓地平原西侧的高地道路接近眺望镇，寻找镇东侧草地上正在挖掘的友好集物虫，互动取得集物虫的制作笔记【２】。它不会主动攻击，不需要战斗。",
          "warning": "",
          "when": []
        },
        {
          "id": "foragerbooks.book4",
          "name": "集物虫的制作笔记【4】",
          "region": "圣战教堂北侧悬崖边",
          "detail": "从圣战教堂向北到悬崖附近，找到蜷缩不动的集物虫。在它身边使用温热石，等其恢复，再坐赐福或传送刷新地图，回来交谈取得集物虫的制作笔记【４】。前期沿教堂周边行动，避免继续向幽影城靠近。",
          "warning": "",
          "when": []
        },
        {
          "id": "foragerbooks.book7",
          "name": "集物虫的制作笔记【7】",
          "region": "正门前方的十字记号",
          "detail": "拿到北侧病弱集物虫的制作笔记4后，回“正门前方的十字记号”与穆尔交谈，领取集物虫的制作笔记【７】。不要求先拿齐其他六册；穆尔离开或死亡后无法再从他这里取得。",
          "warning": "",
          "when": []
        },
        {
          "id": "foragerbooks.book1",
          "name": "集物虫的制作笔记【1】",
          "region": "幽影亚坛：恩希斯城东南方悬崖",
          "detail": "从穆斯废墟一带向西南走，接近恩希斯城城主房间南方、俯瞰峡谷的崖边。与正在挖掘的友好集物虫交谈，取得集物虫的制作笔记【１】。它在城外高地，不用返回城内 Boss 房。",
          "warning": "",
          "when": []
        },
        {
          "id": "foragerbooks.book3",
          "name": "集物虫的制作笔记【3】",
          "region": "艾拉克河下游：通向青蓝海岸的河口高地",
          "detail": "由“艾拉克河下游”向青蓝海岸方向走，到河口有燃炉魔像的区域，再沿东北侧的树林走向崖边尽头。与友好集物虫交谈取得集物虫的制作笔记【３】。不要为此攻击附近的友好目标。",
          "warning": "",
          "when": []
        },
        {
          "id": "foragerbooks.book5",
          "name": "集物虫的制作笔记【5】",
          "region": "穆斯废墟北方洞窟外：毒池与悬崖",
          "detail": "从穆斯废墟向北到有玛莉卡雕像的水池，进入后方洞窟，从另一端走到毒池区域，寻找俯瞰幽影城积水处方向的悬崖边集物虫，交谈取得集物虫的制作笔记【５】。沿路可能接近大卢恩破碎范围，出发前先完成本表早期回访。",
          "warning": "",
          "when": []
        },
        {
          "id": "foragerbooks.book6",
          "name": "集物虫的制作笔记【6】",
          "region": "幽影城教区入口南侧高地",
          "detail": "由教区大道前往幽影城教区入口，在入口南侧的高地崖边找友好集物虫，交谈取得集物虫的制作笔记【６】。到这里通常会触发大卢恩破碎，因此安排在早期回访完成之后、穆尔关键回答之前。",
          "warning": "",
          "when": []
        }
      ]
    },
    {
      "id": "iris_grace",
      "title": "赐福覆眼膜",
      "description": "按当前约兰与昆兰的骨灰选择计算份数，两人各用一枚；已交付仍可保留收集记录。通过 NPC 对话交付，不要在背包直接使用。",
      "source": "https://eldenring.fandom.com/wiki/Iris_of_Grace",
      "routes": [
        {
          "questId": "jolan",
          "optionIds": [
            "ash",
            "duo"
          ],
          "count": 1
        },
        {
          "questId": "queelign",
          "optionIds": [
            "ash"
          ],
          "count": 1
        }
      ],
      "stepIds": [
        "jolan.eyes",
        "jolan.eye",
        "queelign.eyes",
        "queelign.prayer"
      ],
      "items": [
        {
          "id": "iris_grace.storehouse",
          "name": "赐福覆眼膜 · 保藏库地底",
          "region": "幽影城：保藏库（一楼）左侧升降机下方",
          "detail": "从保藏库（一楼）走左侧支路，乘升降机下去，探索有大壶及壶内人的地底房间，在石台附近拾取。与教区那枚是不同来源。",
          "warning": "",
          "when": []
        },
        {
          "id": "iris_grace.church",
          "name": "赐福覆眼膜 · 礼树暗道后方",
          "region": "幽影城放水教区 → 礼树暗道 → 礼树教堂",
          "detail": "先给教区放水，再经地下通路到礼树暗道，继续向礼树教堂、幽影树化身方向走，在教堂区域拾取。无需为拿覆眼膜先击败幽影树化身。",
          "warning": "",
          "when": []
        }
      ]
    },
    {
      "id": "iris_occultation",
      "title": "黑暗覆眼膜",
      "description": "按当前约兰与昆兰的武器选择计算份数，两人各用一枚。用于约兰可得黑夜刀，用于昆兰可得昆兰的大剑。不要在背包直接使用。",
      "source": "https://eldenring.wiki.gg/wiki/Iris_of_Occultation",
      "routes": [
        {
          "questId": "jolan",
          "optionIds": [
            "sword"
          ],
          "count": 1
        },
        {
          "questId": "queelign",
          "optionIds": [
            "sword"
          ],
          "count": 1
        }
      ],
      "stepIds": [
        "jolan.eyes",
        "jolan.eye",
        "queelign.eyes",
        "queelign.prayer"
      ],
      "items": [
        {
          "id": "iris_occultation.fort",
          "name": "黑暗覆眼膜 · 惩罚要塞",
          "region": "幽影亚坛：惩罚要塞地底",
          "detail": "进入要塞后找左侧地板洞口，落入地底处理埋伏敌人，击败持双刀的忌讳猎人取得；不是到要塞 Boss 房领取。",
          "warning": "",
          "when": []
        },
        {
          "id": "iris_occultation.tree_spirit",
          "name": "黑暗覆眼膜 · 放水教区树灵",
          "region": "幽影城：教区放水后的北侧区域",
          "detail": "打开教区排水机关，进入原来淹水的地面，击败北侧对应的腐败树灵取得。此区域有不止一只树灵，确认实际掉落后再勾选。",
          "warning": "",
          "when": []
        }
      ]
    }
  ],
  "sharedSteps": [
    [
      "gowry.repair",
      "millicent.repair"
    ],
    [
      "fia.dagger",
      "d.dagger"
    ]
  ]
}
;
