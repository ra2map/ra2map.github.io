import{_ as o}from"./ValaxyMain.vue_vue_type_style_index_0_lang-ClpXkmZy.js";import{i as E,w as l,h as u,j as c,p as k,o as g,a as i,b as s,l as n}from"./app-G45NqZuR.js";import"./helper-f8z8uJIo.js";import"./tags-D2-p_S_e.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-Dqr4sQV6.js";import"./YunCard.vue_vue_type_script_setup_true_lang-HOw0TaWD.js";import"./index-C5okkQwF.js";import"./YunPostMeta.vue_vue_type_style_index_0_lang-Dzm6dkq3.js";import"./index-CpRw8AFc.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CcdLmUgK.js";import"./post-CsBZaeuw.js";const $={__name:"difficulty-control",setup(y,{expose:p}){const e=JSON.parse('{"title":"【未完成】任务难度控制","description":"","frontmatter":{"title":"【未完成】任务难度控制","date":"2024-02-21","updated":"2024-09-12","categories":"其他教程","tags":["进阶","系列"],"author":"轻稚天雪"},"headers":[{"level":2,"title":"任务的总体难度","slug":"任务的总体难度","link":"#任务的总体难度","children":[]},{"level":2,"title":"难度分级","slug":"难度分级","link":"#难度分级","children":[{"level":3,"title":"金钱","slug":"金钱","link":"#金钱","children":[]},{"level":3,"title":"兵力","slug":"兵力","link":"#兵力","children":[]},{"level":3,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]},{"level":3,"title":"不建议分级的内容","slug":"不建议分级的内容","link":"#不建议分级的内容","children":[]}]},{"level":2,"title":"如何把握难度","slug":"如何把握难度","link":"#如何把握难度","children":[]},{"level":2,"title":"动态难度机制","slug":"动态难度机制","link":"#动态难度机制","children":[]}],"relativePath":"pages/posts/difficulty-control.md","path":"C:/code/web/valaxy-blog/pages/posts/difficulty-control.md","lastUpdated":null}'),h=c(),t=e.frontmatter||{};return h.meta.frontmatter=Object.assign(h.meta.frontmatter||{},e.frontmatter||{}),k("pageData",e),k("valaxy:frontmatter",t),globalThis.$frontmatter=t,p({frontmatter:{title:"【未完成】任务难度控制",date:"2024-02-21",updated:"2024-09-12",categories:"其他教程",tags:["进阶","系列"],author:"轻稚天雪"}}),(a,r)=>{const d=o;return g(),E(d,{frontmatter:u(t)},{"main-content-md":l(()=>r[0]||(r[0]=[i("p",null,"用于控制任务的整体难度，或者做难度分级。",-1),i("h2",{id:"任务的总体难度",tabindex:"-1"},[s("任务的总体难度 "),i("a",{class:"header-anchor",href:"#任务的总体难度","aria-label":'Permalink to "任务的总体难度"'},"​")],-1),i("p",null,"控制某一关卡的总体难度可以从以下角度入手：",-1),i("p",null,[i("strong",null,"平衡性"),s("：确保玩家和敌对势力之间的平衡。一般来说，作者总是让玩家的兵力弱于敌人，然后让玩家靠智谋和地形来取胜。不过这种不对称的平衡也需要把握。一般可通过限制己方科技水平、增加敌军数量来增加难度。最好是想办法让 AI 更智能。当然，一味地堆量，让防御塔排成墙，是不推荐的。")],-1),i("p",null,[i("strong",null,"任务复杂度"),s("： 任务越复杂，难度越高。但请把任务目标和玩法清晰地告诉玩家。")],-1),i("p",null,[i("strong",null,"资源控制"),s("：控制地图上各类资源的丰富程度和位置，从而影响玩家的建造和扩张速度，使玩家需要在资源有限的情况下做出决策。")],-1),i("p",null,"总体来说，创作者既要根据实际剧情安排，确定以上影响难度的因素，又要对其进行微调，从而划分出不同的难度等级。",-1),i("h2",{id:"难度分级",tabindex:"-1"},[s("难度分级 "),i("a",{class:"header-anchor",href:"#难度分级","aria-label":'Permalink to "难度分级"'},"​")],-1),i("blockquote",null,[i("p",null,"游戏设计中的难度分级对于游戏体验至关重要。通过巧妙地设计难度，游戏可以保持玩家的兴趣和挑战性，同时也能让不同水平的玩家都能找到适合自己的游戏难度。以下是难度分级的意义："),i("ol",null,[i("li",null,"提供挑战性： 适当的难度可以让玩家感到挑战和成就感，激发他们的兴趣和动力。"),i("li",null,"增加可玩性： 不同难度级别可以增加游戏的可玩性，让玩家有更多的选择和体验。"),i("li",null,"吸引不同玩家： 设计多个难度级别可以吸引不同水平和偏好的玩家，增加游戏的受众群。"),i("li",null,"提高游戏深度： 通过调整难度，可以让玩家更深入地了解游戏机制和策略，增加游戏的深度和复杂性。")]),i("p",null,"通过合理设计难度分级，游戏可以更好地吸引玩家、提升游戏体验，并增加游戏的持续性和趣味性。")],-1),i("p",null,"通过调整触发界面触发的难度对勾，即可让其仅在指定难度生效。",-1),i("h3",{id:"金钱",tabindex:"-1"},[s("金钱 "),i("a",{class:"header-anchor",href:"#金钱","aria-label":'Permalink to "金钱"'},"​")],-1),i("p",null,"将以下代码内置于地图，即可设定不同难度下的初始金钱。其也会影响 AI 的金钱。",-1),i("div",{class:"language-ini vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ini"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[General]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"CampaignMoneyDeltaEasy"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=10000 "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";简单难度下多10000金钱  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"CampaignMoneyDeltaHard"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=-10000 "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";困难难度下少10000金钱")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"PrismSupportModifier"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=150%")])])]),i("button",{class:"collapse"})],-1),i("p",null,"如果要中途加减金钱，可以将一个换皮油井（移除加钱代码）更改所属到玩家，玩家会像占领一样获得一些金钱。也可以用触发售卖一个建筑，不过会听到售卖的语音。可以播放更高优先级的语音覆盖。",-1),i("div",{class:"language-ini vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ini"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[CAOILD换皮]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ProduceCashStartup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1000 "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";金钱")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ProduceCashAmount"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=20 "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";去掉")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ProduceCashDelay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=100 "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";去掉")])])]),i("button",{class:"collapse"})],-1),i("h3",{id:"兵力",tabindex:"-1"},[s("兵力 "),i("a",{class:"header-anchor",href:"#兵力","aria-label":'Permalink to "兵力"'},"​")],-1),i("p",null,[i("strong",null,"小队"),s("：让不同难度有不同的刷兵造兵间隔、兵力数量、种类")],-1),i("p",null,[i("strong",null,"超级武器"),s("：如简单难度下敌方有更少的超武，或是更晚才建造超武，或是通过换皮使其冷却时间更长。 "),i("em",null,"（另外，一般任务中，10分钟一次的超武略显频繁，建议使用内置 ini 将其延长）")],-1),i("p",null,[i("strong",null,"防御和驻军建筑"),s("：如简单难度下"),i("code",null,"60 变卖关联建筑"),s("变卖防御塔，困难难度下刷出更多兵驻扎平民建筑（对于 AI，用攻击路径点进驻建筑，建筑被毁后会原地呆着，用 64 号脚本则会立即寻找下个建筑）")],-1),i("p",null,[i("strong",null,"科技类型"),s("：比如困难难度禁止玩家造无畏舰。"),i("code",null,"106 设置科技等级(科技类型)[等级]"),s("，设置特定的科技（ini 注册名）到特定的等级。只有1～10是可建造的，负数等级的建筑 AI 可造而玩家不能，11及以上等级的建筑 AI 和玩家均不可造。")],-1),i("h3",{id:"属性",tabindex:"-1"},[s("属性 "),i("a",{class:"header-anchor",href:"#属性","aria-label":'Permalink to "属性"'},"​")],-1),i("h4",{id:"全局",tabindex:"-1"},[s("全局 "),i("a",{class:"header-anchor",href:"#全局","aria-label":'Permalink to "全局"'},"​")],-1),i("blockquote",null,[i("p",null,[i("a",{href:"https://modenc.renegadeprojects.com/Difficulty_Settings",target:"_blank",rel:"noreferrer"},"Difficulty Settings on ModEnc")]),i("p",null,"在单人任务/战役中，如果玩家选择以简单难度级别进行游戏，则游戏将使用 [简单] 部分中的玩家值，而计算机/AI 将从 [困难] 部分获取值。如果玩家选择以中/正常级别进行游戏，则玩家和计算机/AI 都将使用 [Normal] 部分中的值。如果玩家选择以困难级别进行游戏，则游戏将使用 [Difficult] 部分中的玩家值，而计算机/AI 将从 [Easy] 部分获取值。"),i("p",null,"在遭遇战/多人游戏中，人类玩家总是从 [Normal] 难度部分获取值。困难/残酷的 AI 从 [Easy] 部分获取值。设置为 easy difficulty 的 AI 从 [Difficult] 部分获取值。正常/中等难度设置下的 AI 从 [Normal] 部分获取其值。RepairDelay、BuildDelay、DestroyWalls 和 ContentScan 字段仅影响计算机播放器。"),i("p",null,[s("Armor、Cost、Airspeed、Groundspeed、BuildSlowdown、BuildDelay 和 ContentScan "),i("strong",null,"已过时"),s("。FirePower 和 ROF 适用于人类和 AI 玩家。RepairDelay 和 BuildTime 仅供 AI 玩家使用。BuildTime 不是通用构建时间段的乘数，而是 TeamDelays 值的乘数。带有 CostBuildingsMult 等字段的新系统已用于 Country Statistics，但不用于 Difficulty Settings。")])],-1),i("div",{class:"language-ini vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ini"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"rulesmd 里3个标签")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[Easy]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Groundspeed"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1.0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Airspeed"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1.0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"BuildTime"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=.8")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Armor"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1.2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ROF"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=.8")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Cost"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1.0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"RepairDelay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=.02")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"BuildDelay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=.03")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"DestroyWalls"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=no")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ContentScan"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=yes")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[Normal]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Groundspeed"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1.0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Airspeed"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1.0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"BuildTime"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Armor"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1.0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ROF"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1.0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Cost"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1.0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"RepairDelay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=.02")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"BuildDelay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=.03")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"BuildSlowdown"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=yes")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"DestroyWalls"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=no")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ContentScan"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=yes")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[Difficult]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Groundspeed"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1.0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Airspeed"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1.0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"BuildTime"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1.0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Armor"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=.8")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ROF"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1.2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Cost"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1.0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"RepairDelay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=.05")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"BuildDelay"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=.1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"BuildSlowdown"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=yes")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"DestroyWalls"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=no")])])]),i("button",{class:"collapse"})],-1),i("h4",{id:"局部",tabindex:"-1"},[s("局部 "),i("a",{class:"header-anchor",href:"#局部","aria-label":'Permalink to "局部"'},"​")],-1),i("p",null,"英雄buff，换皮或AE调整英雄强度",-1),i("h3",{id:"其他",tabindex:"-1"},[s("其他 "),i("a",{class:"header-anchor",href:"#其他","aria-label":'Permalink to "其他"'},"​")],-1),i("p",null,[i("strong",null,"中立建筑"),s("：困难难度下初始让敌方占领，或干脆直接摧毁。含有"),i("code",null,"NeedsEngineer=yes"),s("的建筑，需要更改一次所属后才会生效。")],-1),i("p",null,[i("strong",null,"小木箱"),s("：简单难度下有更多获得机会")],-1),i("p",null,[i("strong",null,"提示"),s("：简单难度下，时不时令副官提醒玩家如何操作")],-1),i("p",null,[i("strong",null,"限时"),s("：限时进攻，越紧迫越困难；限时防守，越久越难")],-1),i("h3",{id:"不建议分级的内容",tabindex:"-1"},[s("不建议分级的内容 "),i("a",{class:"header-anchor",href:"#不建议分级的内容","aria-label":'Permalink to "不建议分级的内容"'},"​")],-1),i("p",null,[s("不建议让任务的不同难度拥有"),i("strong",null,"不同的流程和任务目标"),s("，因为这可能会使部分玩家无法体验到完整的任务，无法经历相同的故事。如果你就是想讲不同的故事，为什么不设置分支剧情呢？")],-1),i("p",null,[s("不建议设置高难度下必须找到才能过关的"),i("strong",null,"彩蛋"),s("，以及无缘无故的惩罚，除非你做的是解谜任务。")],-1),i("h2",{id:"如何把握难度",tabindex:"-1"},[s("如何把握难度 "),i("a",{class:"header-anchor",href:"#如何把握难度","aria-label":'Permalink to "如何把握难度"'},"​")],-1),i("p",null,[s("一般地，降低“简单”难度的难度，增加“困难”难度的难度似乎是一种趋势。同时，困难难度"),i("strong",null,"一定要让人可以通关"),s("，为玩家准备至少一条通关路径，不走后门。不要出现作者（或测试员）自己都打不过的情况。")],-1),i("p",null,"就我观察，玩家中有好多人都是无脑选困难难度的，打不过又死磕，闹情绪，难以评价。所以如果你任务难度很高，还是要提醒玩家一下，非高手勿选困难。",-1),i("hr",null,null,-1),i("p",null,"制作组把握任务的整体难度需要大量的测试，可以采取以下测试方法：",-1),i("ol",null,[i("li",null,[i("p",null,"内部测试： 组建一个专门的测试团队，确保测试团队中有不同水平的玩家，以便从不同角度评估关卡难度。")]),i("li",null,[i("p",null,"用户测试：邀请外部玩家参与关卡难度测试，收集玩家的反馈和意见，了解他们对关卡难度的感受和建议。")]),i("li",null,[i("p",null,"数据分析：记录玩家在关卡中的表现数据，如通关时间、敌我阵亡比例等。行为分析： 分析玩家的行为模式，了解他们在面对不同难度关卡时的决策和反应。")])],-1),i("p",null,"实际上，任务难度的测试和调整往往非常麻烦，并且非常耗费时间。尤其是地图内小队较多时。这非常考验测试者的耐心。",-1),i("h2",{id:"动态难度机制",tabindex:"-1"},[s("动态难度机制 "),i("a",{class:"header-anchor",href:"#动态难度机制","aria-label":'Permalink to "动态难度机制"'},"​")],-1),i("p",null,[s("即"),i("strong",null,"玩家越强，敌人越强"),s("。玩家水平可以通过玩家的进攻或防守效率、推进速度、敌我阵亡比例粗略判定，多次判定会更准确。此机制可作为固定难度的补充，更加"),i("strong",null,"照顾"),s("菜鸟玩家的体验，同时让高手的体验"),i("strong",null,"更有挑战性"),s("，不乏味。")],-1),i("p",null,"此机制应谨慎使用，确保其不会产生误判，不会导致游戏体验不稳定或不公平，不会被刻意利用故意降低难度。一个比较好的方式是，明确提醒玩家某个危险，并告知其后果，看玩家是否愿意承受。比如，告知某个小兵将要报信，引来大量敌军；或是提醒某处将有基地车登陆，可以轻易拦截。乐于挑战的玩家可能故意不去拦截。",-1),i("p",null,[s("仅为理论猜想，除 "),i("em",null,"可选的“无限防守”"),s(" 外，暂未发现相关实践。我自己也并未实践。")],-1),i("hr",null,null,-1),i("blockquote",null,[i("p",null,"本文使用了生成式 AI 技术辅助编写，赞美科技！")],-1)])),"main-header":l(()=>[n(a.$slots,"main-header")]),"main-header-after":l(()=>[n(a.$slots,"main-header-after")]),"main-nav":l(()=>[n(a.$slots,"main-nav")]),"main-content":l(()=>[n(a.$slots,"main-content")]),"main-content-after":l(()=>[n(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[n(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[n(a.$slots,"main-nav-after")]),comment:l(()=>[n(a.$slots,"comment")]),footer:l(()=>[n(a.$slots,"footer")]),aside:l(()=>[n(a.$slots,"aside")]),"aside-custom":l(()=>[n(a.$slots,"aside-custom")]),default:l(()=>[n(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{$ as default};
