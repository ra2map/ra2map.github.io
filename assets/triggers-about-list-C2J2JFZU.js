import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-YzXWt1l6.js";import{_ as h}from"./TxDownload.vue_vue_type_style_index_0_lang-DgfgHHZg.js";import{i as m,p as c,o as _,k as g,w as s,h as b,g as f,l as e,a as n,b as l}from"./app-DgD459NU.js";import"./helper-f8z8uJIo.js";import"./tags-DGLoaXLD.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-CoFRrmAh.js";import"./YunCard.vue_vue_type_script_setup_true_lang-CNPdkDqR.js";import"./index-C5okkQwF.js";import"./YunPostMeta.vue_vue_type_style_index_0_lang-CUP4BrpA.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-D17pr_Qp.js";import"./post-C-tZkxQQ.js";const k=n("p",null,"在地图中，有很多触发条件/结果/脚本需要填入某个物件的 ID 号而非注册名，如",-1),v=n("ul",null,[n("li",null,"19 建造特定类型的建筑…"),n("li",null,"41 播放动画"),n("li",null,"42 爆炸在"),n("li",null,"88 粒子动画"),n("li",null,"46,N - 攻击N指定建筑"),n("li",null,"47,N - 移动到N指定敌方或中立建筑附近"),n("li",null,"56,N - 如果超时空传送就绪，则传送该小队至N指定建筑物"),n("li",null,"58,N - 移动到N指定友方建筑附近")],-1),y=n("p",null,[l("这些编号顺序在平台不同/ ini 不同时不同，而 FA2 中显示的往往是错误的，真的是"),n("strong",null,"非常坑人"),l("。不过还是有许多人进行了许多探索，得到了一些有用的成果。")],-1),G=n("p",null,"由于每个人的 ini 有可能不同（自己新加了单位，或者是不同的 MOD），特别是 ARES 下还有拆分 ini，直接给出一个定死的序号表意义不大，因此需要一种可行的动态计算方式。",-1),C=n("p",null,[n("strong",null,"方法1"),l("：把列表（如建筑列表）复制进 excel，"),n("strong",null,"查找重复项并去掉重复项"),l("，从"),n("strong",null,"0"),l("开始重新生成序号")],-1),S=n("p",null,[n("strong",null,"方法2"),l("：参见竹蜻蜓的[平台bug：注册号漂移todo]，下载 HTML 附件，运用程序动态计算列表（填入待整理的注册表名称如"),n("code",null,"InfantryTypes"),l("，进行计算）")],-1),D=n("p",null,[n("strong",null,"方法3"),l("（ARES 下推荐，所得结果与原版"),n("strong",null,"不通用"),l("）：使用 ARES 的 Debug 日志功能导出列表（说明书里有）：")],-1),$=n("ul",null,[n("li",null,"确保你使用了 ARES"),n("li",null,[l("在启动参数"),n("code",null,"RunAres.bat"),l("中添加"),n("code",null," -LOG"),l("，如"),n("code",null,'Syringe "gamemd.exe" %* -cd -speedcontrol -NOLOGO -LOG')]),n("li",null,[l("在游戏内快捷键选项"),n("code",null,"Development"),l("为"),n("code",null,"Dump Types"),l("指定一个快捷键（英文键盘），它将 Dumps the current type list to the log")]),n("li",null,"进入地图，按下你的快捷键，然后看到左上弹出提示"),n("li",null,[l("打开游戏目录下"),n("code",null,"debug/debug.log"),l("，往下翻，就有你想要的各种列表。")])],-1),I=n("p",null,"下面咱再给出特定行为的解释以及可以直接用的列表。",-1),N=n("h2",{id:"脚本们与19-建造特定类型的建筑",tabindex:"-1"},[l("脚本们与19 建造特定类型的建筑 "),n("a",{class:"header-anchor",href:"#脚本们与19-建造特定类型的建筑","aria-label":'Permalink to "脚本们与19 建造特定类型的建筑"'},"​")],-1),T=n("p",null,[l("N=该建筑在注册列表中的【顺序号】，从【0】开始。脚本额外加判定系数，详见 prry 翻译的 "),n("em",null,"特遣脚本小队AI触发全教程(by prry).docx")],-1),P=n("h2",{id:"_41-播放动画",tabindex:"-1"},[l("41 播放动画 "),n("a",{class:"header-anchor",href:"#_41-播放动画","aria-label":'Permalink to "41 播放动画"'},"​")],-1),A=n("blockquote",null,[n("p",null,"在特定的路径点播放特定的动画，参数为[Animations]里的动画 ID。原版动画注册表存在序号漂移，建议使用脚本或 Excel 予以修正。")],-1),L=n("p",null,"yr1.001平台下，未修改 ini 时可以直接用的列表：",-1),R=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"41 播放动画在...")]),l(`
`),n("span",{class:"line"},[n("span",null,"0 一个大的爆炸")]),l(`
`),n("span",{class:"line"},[n("span",null,"1 步兵被电死")]),l(`
`),n("span",{class:"line"},[n("span",null,"2 炮弹打到水里")]),l(`
`),n("span",{class:"line"},[n("span",null,"3 炮弹打到水里")]),l(`
`),n("span",{class:"line"},[n("span",null,"4 炮弹打到水里（这个小一点）")]),l(`
`),n("span",{class:"line"},[n("span",null,"9 机枪类武器攻击地面")]),l(`
`),n("span",{class:"line"},[n("span",null,"10 机枪类武器攻击地面")]),l(`
`),n("span",{class:"line"},[n("span",null,"11 飞弹类武器攻击地面")]),l(`
`),n("span",{class:"line"},[n("span",null,"12 箱子里钱的动画")]),l(`
`),n("span",{class:"line"},[n("span",null,"15 医疗的动画")]),l(`
`),n("span",{class:"line"},[n("span",null,"16 箱子增加护甲的动画")]),l(`
`),n("span",{class:"line"},[n("span",null,"18 地图全开的动画")]),l(`
`),n("span",{class:"line"},[n("span",null,"19 增加力量的动画")]),l(`
`),n("span",{class:"line"},[n("span",null,"28 升级的动画")]),l(`
`),n("span",{class:"line"},[n("span",null,"29 地图全开的动画")]),l(`
`),n("span",{class:"line"},[n("span",null,"152——166 大大小小的爆炸（基本没用）")]),l(`
`),n("span",{class:"line"},[n("span",null,"167 榴弹炮的弹头动画（同上）")]),l(`
`),n("span",{class:"line"},[n("span",null,"168——172 还是各种爆炸（同上）")]),l(`
`),n("span",{class:"line"},[n("span",null,"173 尤里X部署动画")]),l(`
`),n("span",{class:"line"},[n("span",null,"174 褐色轨道炮")]),l(`
`),n("span",{class:"line"},[n("span",null,"194 核弹爆炸的动画（没伤害）")]),l(`
`),n("span",{class:"line"},[n("span",null,"195 核弹接触地面的光球")]),l(`
`),n("span",{class:"line"},[n("span",null,"198 使用铁幕的动画")]),l(`
`),n("span",{class:"line"},[n("span",null,"200 超时空采矿车瞬间“回城”动画")]),l(`
`),n("span",{class:"line"},[n("span",null,"201 超时空军团把单位抹掉的动画")]),l(`
`),n("span",{class:"line"},[n("span",null,"238 239 地上出现一具骷髅")]),l(`
`),n("span",{class:"line"},[n("span",null,"242 步兵被烧死")]),l(`
`),n("span",{class:"line"},[n("span",null,"243 步兵被狂兽人锤烂")]),l(`
`),n("span",{class:"line"},[n("span",null,"244 步兵融化")]),l(`
`),n("span",{class:"line"},[n("span",null,"256 257 超时空传送的第二段动画")]),l(`
`),n("span",{class:"line"},[n("span",null,"258 不知道怎么说，反正很霸气就对了“核弹发射烟雾的动画”")]),l(`
`),n("span",{class:"line"},[n("span",null,"295 红色轨道炮")]),l(`
`),n("span",{class:"line"},[n("span",null,"296 超时空传送第一段动画，不消失，坑")]),l(`
`),n("span",{class:"line"},[n("span",null,"314 闪电风暴的乌云")]),l(`
`),n("span",{class:"line"},[n("span",null,"316 闪电风暴的乌云")]),l(`
`),n("span",{class:"line"},[n("span",null,"317 闪电风暴的乌云")]),l(`
`),n("span",{class:"line"},[n("span",null,"318 一束闪电")]),l(`
`),n("span",{class:"line"},[n("span",null,"319 一束闪电")]),l(`
`),n("span",{class:"line"},[n("span",null,"321 闪电击中地面的效果")]),l(`
`),n("span",{class:"line"},[n("span",null,"387 喷水池的动画（不消失）")]),l(`
`),n("span",{class:"line"},[n("span",null,"397 心灵信标的动画（只有上半身，不消失）")]),l(`
`),n("span",{class:"line"},[n("span",null,"414 苏联维修站的动画（就一个架子，不消失）")]),l(`
`),n("span",{class:"line"},[n("span",null,"475 箭头 正下")]),l(`
`),n("span",{class:"line"},[n("span",null,"476 箭头 右上")]),l(`
`),n("span",{class:"line"},[n("span",null,"477 箭头 左下")]),l(`
`),n("span",{class:"line"},[n("span",null,"478 箭头 右下")]),l(`
`),n("span",{class:"line"},[n("span",null,"479 箭头 左上")]),l(`
`),n("span",{class:"line"},[n("span",null,"480 箭头 正上")]),l(`
`),n("span",{class:"line"},[n("span",null,"481 箭头 正右")]),l(`
`),n("span",{class:"line"},[n("span",null,"482 箭头 正左")]),l(`
`),n("span",{class:"line"},[n("span",null,"483 箭头 正下 （貌似这个持续时间短些）")]),l(`
`),n("span",{class:"line"},[n("span",null,"505 心灵控制器 （不消失）")]),l(`
`),n("span",{class:"line"},[n("span",null,"510 病狙的病毒（有伤害）")]),l(`
`),n("span",{class:"line"},[n("span",null,"535 出现一名野生狂兽人（应该归属于触发所属方）")]),l(`
`),n("span",{class:"line"},[n("span",null,"560 基因突变器动画 （不消失）")]),l(`
`),n("span",{class:"line"},[n("span",null,"577 使用心灵控制器时出现的尤里的脸")]),l(`
`),n("span",{class:"line"},[n("span",null,"578 使用心灵控制器时地面出现的红圈的动画（形容的好捉急啊）")]),l(`
`),n("span",{class:"line"},[n("span",null,"589 使用铁幕的动画")]),l(`
`),n("span",{class:"line"},[n("span",null,"【以前是有人发过，但我所知道的都不怎么全面。于是就闲的一个一个看，个人认为有用的参数都已列举出来】")]),l(`
`),n("span",{class:"line"},[n("span",null,"【好吧，其实我真正的目的是为接下来的任（shun）务（bian）做（pian）准（jing）备（yan）。。表示现在正在把官方任务里面那些比较合适的语音给抠出来。。】")]),l(`
`),n("span",{class:"line"},[n("span",null,"WAVE散开 7 RING")]),l(`
`),n("span",{class:"line"},[n("span",null,"菱形闪光 454 KTSTLEXP")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"BY 秒")])])]),n("button",{class:"collapse"})],-1),V=n("h2",{id:"_42-爆炸在",tabindex:"-1"},[l("42 爆炸在 "),n("a",{class:"header-anchor",href:"#_42-爆炸在","aria-label":'Permalink to "42 爆炸在"'},"​")],-1),B=n("blockquote",null,[n("p",null,[l("使用特定「武器的弹头」在指定路径点产生一次爆炸，但无法触发弹头的特殊效果。参数为[WeaponTypes]里的武器ID（从1开始），"),n("strong",null,"若无该注册表"),l("（或者注册表里没有所填ID）则取[Warheads]里的弹头ID。")])],-1),O=n("p",null,"yr1.001平台下，未修改 ini 时可以直接用的列表：",-1),E=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"【42 爆炸在...】")]),l(`
`),n("span",{class:"line"},[n("span",null,"0 哨戒炮那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"1 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"2 哨戒炮那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"3 GGI那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"4 电？")]),l(`
`),n("span",{class:"line"},[n("span",null,"5 电？磁暴坦克？")]),l(`
`),n("span",{class:"line"},[n("span",null,"6 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"7 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"8 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"9 巨炮那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"10 和谐弹 - -")]),l(`
`),n("span",{class:"line"},[n("span",null,"11 放屁车那啥，大小未记录")]),l(`
`),n("span",{class:"line"},[n("span",null,"12 同3")]),l(`
`),n("span",{class:"line"},[n("span",null,"13 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"14 同4,5")]),l(`
`),n("span",{class:"line"},[n("span",null,"15 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"16—27 均同2")]),l(`
`),n("span",{class:"line"},[n("span",null,"28 尤里强行控制地面出现的那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"29 同9")]),l(`
`),n("span",{class:"line"},[n("span",null,"30 同2")]),l(`
`),n("span",{class:"line"},[n("span",null,"31—44 或大或小的。。类似于巨炮那啥。。")]),l(`
`),n("span",{class:"line"},[n("span",null,"45 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"46 天启那啥【非精英级别】")]),l(`
`),n("span",{class:"line"},[n("span",null,"47 同3")]),l(`
`),n("span",{class:"line"},[n("span",null,"48 灰熊等坦克那啥【精英级别】")]),l(`
`),n("span",{class:"line"},[n("span",null,"49 驱逐舰那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"50 同48")]),l(`
`),n("span",{class:"line"},[n("span",null,"51 同3")]),l(`
`),n("span",{class:"line"},[n("span",null,"52 同31—44")]),l(`
`),n("span",{class:"line"},[n("span",null,"53,54,56 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"55 基洛夫那啥【精英级别】")]),l(`
`),n("span",{class:"line"},[n("span",null,"57 GI那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"58，60 同11但较小")]),l(`
`),n("span",{class:"line"},[n("span",null,"59,61 同11但较大")]),l(`
`),n("span",{class:"line"},[n("span",null,"62，64，67，68同49")]),l(`
`),n("span",{class:"line"},[n("span",null,"63 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"65，66 基洛夫那啥【非精英级别】")]),l(`
`),n("span",{class:"line"},[n("span",null,"69 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"70,71 同57")]),l(`
`),n("span",{class:"line"},[n("span",null,"72 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"73 无法表达，目测为放大版的49")]),l(`
`),n("span",{class:"line"},[n("span",null,"74 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"75 同65,66")]),l(`
`),n("span",{class:"line"},[n("span",null,"76,77 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"78 同49")]),l(`
`),n("span",{class:"line"},[n("span",null,"79 同48")]),l(`
`),n("span",{class:"line"},[n("span",null,"80 榴弹炮那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"81,82 同14")]),l(`
`),n("span",{class:"line"},[n("span",null,"83 同49")]),l(`
`),n("span",{class:"line"},[n("span",null,"84 同48")]),l(`
`),n("span",{class:"line"},[n("span",null,"85 同73")]),l(`
`),n("span",{class:"line"},[n("span",null,"86 巨炮那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"87,89 GGI那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"88 同14")]),l(`
`),n("span",{class:"line"},[n("span",null,"90 放屁车那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"91,92 攻击被铁幕的单位时的那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"93，95 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"94 同73")]),l(`
`),n("span",{class:"line"},[n("span",null,"96 GI那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"97 放屁车那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"98，99，107 狙击手那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"100 同14")]),l(`
`),n("span",{class:"line"},[n("span",null,"101 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"102 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"103 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"104 无畏级战舰那啥【精英级】")]),l(`
`),n("span",{class:"line"},[n("span",null,"105 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"106 尤里新兵那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"108 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"109 GGI那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"110 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"111 自爆卡车那啥")]),l(`
`),n("span",{class:"line"},[n("span",null,"112 GI那啥")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"【未完待续。。。。】BY 秒")])])]),n("button",{class:"collapse"})],-1),x=n("h2",{id:"_88-粒子动画",tabindex:"-1"},[l("88 粒子动画 "),n("a",{class:"header-anchor",href:"#_88-粒子动画","aria-label":'Permalink to "88 粒子动画"'},"​")],-1),M=n("blockquote",null,[n("p",null,"在特定的路径点播放粒子动画，参数为[ParticleSystems]里的ID。无法播放Gas类型 (BehavesLike=Gas) 的粒子系统。")],-1),w=n("p",null,"yr1.001平台下，未修改 ini 时可以直接用的列表：",-1),W=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"【88 粒子动画】")]),l(`
`),n("span",{class:"line"},[n("span",null,"0 GasCloud1 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"1 GasCloud2 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"2 FireStream 烟雾")]),l(`
`),n("span",{class:"line"},[n("span",null,"3 Spark 烟雾")]),l(`
`),n("span",{class:"line"},[n("span",null,"4 FirestormSpark 烟雾")]),l(`
`),n("span",{class:"line"},[n("span",null,"5 LargeGreySmoke 火光	")]),l(`
`),n("span",{class:"line"},[n("span",null,"6 SmallGreySmoke 火光")]),l(`
`),n("span",{class:"line"},[n("span",null,"7 TestSmoke 烟雾")]),l(`
`),n("span",{class:"line"},[n("span",null,"8 GasCloudD1 类似轨道炮，色浅，从左射下")]),l(`
`),n("span",{class:"line"},[n("span",null,"9 GasCloudD2 同上，从右射下")]),l(`
`),n("span",{class:"line"},[n("span",null,"10 SmallRailgunPart 火光")]),l(`
`),n("span",{class:"line"},[n("span",null,"11 LargeRailgunPart 火光【较小】")]),l(`
`),n("span",{class:"line"},[n("span",null,"12 GasCloudM1 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"13 GasCloudM2 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"14 WeldingSpark 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"15 LargeSpark 火光")]),l(`
`),n("span",{class:"line"},[n("span",null,"16 VirusCloud1 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"17 VirusCloud2 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"18 VirusCloudD1 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"19 VirusCloudD2 不明")]),l(`
`),n("span",{class:"line"},[n("span",null,"20 PsychCloud 直接弹框")]),l(`
`),n("span",{class:"line"},[n("span",null,"21 PsychCloudD 直接弹框")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"BY 秒")])])]),n("button",{class:"collapse"})],-1),sn={__name:"triggers-about-list",setup(Z,{expose:t}){const p=JSON.parse('{"title":"需注册表触发如41动画&42爆炸解析","description":"","frontmatter":{"title":"需注册表触发如41动画&42爆炸解析","date":"2024-02-20T16:00:00.000Z","updated":"2024-02-20T16:00:00.000Z","categories":"触发与小队","tags":["进阶"],"author":"轻稚天雪"},"headers":[{"level":2,"title":"脚本们与19 建造特定类型的建筑","slug":"脚本们与19-建造特定类型的建筑","link":"#脚本们与19-建造特定类型的建筑","children":[]},{"level":2,"title":"41 播放动画","slug":"_41-播放动画","link":"#_41-播放动画","children":[]},{"level":2,"title":"42 爆炸在","slug":"_42-爆炸在","link":"#_42-爆炸在","children":[]},{"level":2,"title":"88 粒子动画","slug":"_88-粒子动画","link":"#_88-粒子动画","children":[]}],"relativePath":"pages/posts/triggers-about-list.md","path":"C:/code/web/valaxy-blog/pages/posts/triggers-about-list.md","lastUpdated":null}'),u=m(),i=p.frontmatter||{};return u.meta.frontmatter=Object.assign(u.meta.frontmatter||{},p.frontmatter||{}),c("pageData",p),c("valaxy:frontmatter",i),globalThis.$frontmatter=i,t({frontmatter:{title:"需注册表触发如41动画&42爆炸解析",date:"2024-02-20T16:00:00.000Z",updated:"2024-02-20T16:00:00.000Z",categories:"触发与小队",tags:["进阶"],author:"轻稚天雪"}}),(a,F)=>{const o=h,r=d;return _(),g(r,{frontmatter:b(i)},{"main-content-md":s(()=>[k,v,y,G,C,S,f(o,{size:"8.95KB",netdisk:"",direct:"rules注册号漂移计算.html",name:"rules注册号漂移计算.html"}),D,$,I,N,T,P,A,L,R,V,B,O,E,x,M,w,W]),"main-header":s(()=>[e(a.$slots,"main-header")]),"main-header-after":s(()=>[e(a.$slots,"main-header-after")]),"main-nav":s(()=>[e(a.$slots,"main-nav")]),"main-content":s(()=>[e(a.$slots,"main-content")]),"main-content-after":s(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":s(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":s(()=>[e(a.$slots,"main-nav-after")]),comment:s(()=>[e(a.$slots,"comment")]),footer:s(()=>[e(a.$slots,"footer")]),aside:s(()=>[e(a.$slots,"aside")]),"aside-custom":s(()=>[e(a.$slots,"aside-custom")]),default:s(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{sn as default};
