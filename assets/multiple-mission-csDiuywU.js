import{_ as o}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BLk_7Qbr.js";import{k as m,w as a,j as g,l as c,p,o as u,a as i,d as s,m as n}from"./app-KTne_XA5.js";import"./YunCloud-Cs73kQ3t.js";import"./tags-BvBwQdnz.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-yJdZaPTV.js";import"./YunCard.vue_vue_type_script_setup_true_lang-Cf9Ykn51.js";import"./index-C5okkQwF.js";import"./YunPostMeta.vue_vue_type_style_index_0_lang-Dp_xRNtJ.js";import"./index-D05q-RW8.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CZ5QAPxC.js";import"./post-BzJdk7Iq.js";const P={__name:"multiple-mission",setup(E,{expose:r}){const t=JSON.parse('{"title":"多关任务的命名和自定义（含DTA）","description":"","frontmatter":{"title":"多关任务的命名和自定义（含DTA）","date":"2024-03-09","updated":"2024-03-09","categories":"其他教程","tags":["高级"],"author":"轻稚天雪"},"headers":[{"level":2,"title":"多关任务的命名","slug":"多关任务的命名","link":"#多关任务的命名","children":[]},{"level":2,"title":"自定义","slug":"自定义","link":"#自定义","children":[{"level":3,"title":"Battlemd.ini","slug":"battlemd-ini","link":"#battlemd-ini","children":[]},{"level":3,"title":"mapselmd.ini","slug":"mapselmd-ini","link":"#mapselmd-ini","children":[]},{"level":3,"title":"missionmd.ini","slug":"missionmd-ini","link":"#missionmd-ini","children":[]},{"level":3,"title":"DTA 客户端相关","slug":"dta-客户端相关","link":"#dta-客户端相关","children":[]}]}],"relativePath":"pages/posts/multiple-mission.md","path":"C:/code/web/valaxy-blog/pages/posts/multiple-mission.md","lastUpdated":null}'),h=c(),e=t.frontmatter||{};return h.meta.frontmatter=Object.assign(h.meta.frontmatter||{},t.frontmatter||{}),p("pageData",t),p("valaxy:frontmatter",e),globalThis.$frontmatter=e,r({frontmatter:{title:"多关任务的命名和自定义（含DTA）",date:"2024-03-09",updated:"2024-03-09",categories:"其他教程",tags:["高级"],author:"轻稚天雪"}}),(l,k)=>{const d=o;return u(),m(d,{frontmatter:g(e)},{"main-content-md":a(()=>k[0]||(k[0]=[i("h2",{id:"多关任务的命名",tabindex:"-1"},[s("多关任务的命名 "),i("a",{class:"header-anchor",href:"#多关任务的命名","aria-label":'Permalink to "多关任务的命名"'},"​")],-1),i("p",null,"YR1.001平台下，多关任务默认名称为",-1),i("div",{class:"language- vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"}),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",null,"     盟军          苏联  ")]),s(`
`),i("span",{class:"line"},[i("span",null,"all01umd.map | sov01umd.map")]),s(`
`),i("span",{class:"line"},[i("span",null,"all02umd.map | sov02smd.map")]),s(`
`),i("span",{class:"line"},[i("span",null,"all03umd.map | sov03umd.map")]),s(`
`),i("span",{class:"line"},[i("span",null,"all04dmd.map | sov04dmd.map")]),s(`
`),i("span",{class:"line"},[i("span",null,"all05umd.map | sov05umd.map")]),s(`
`),i("span",{class:"line"},[i("span",null,"all06umd.map | sov06lmd.map")]),s(`
`),i("span",{class:"line"},[i("span",null,"all07smd.map | sov07tmd.map")])])]),i("button",{class:"collapse"})],-1),i("p",null,"为什么：umd 的 u 代表 urban，表示官方图这关是城市地形， 后面还有雪地，就是 smd ，月球就是 lmd。md 代表尤里复仇。自己的图无需限定地形哦。",-1),i("h2",{id:"自定义",tabindex:"-1"},[s("自定义 "),i("a",{class:"header-anchor",href:"#自定义","aria-label":'Permalink to "自定义"'},"​")],-1),i("blockquote",null,[i("p",null,"Ra2map：参考了未知作者的文章")],-1),i("p",null,[s("涉及文件"),i("code",null,"battlemd.ini"),s("，"),i("code",null,"mapselmd.ini"),s("，"),i("code",null,"missionmd.ini"),s("，单人任务由这3个 INI 文件共同定义，并且与任务地图关联，规定了每场任务的名称、调用哪个地图文件等信息。修改它们可以实现自定义各阵营战役阵容与任务文件名等数据。注意按顺序修改，不易出错。可以打开 "),i("em",null,"歧途"),s(" 任务参考。")],-1),i("h3",{id:"battlemd-ini",tabindex:"-1"},[s("Battlemd.ini "),i("a",{class:"header-anchor",href:"#battlemd-ini","aria-label":'Permalink to "Battlemd.ini"'},"​")],-1),i("p",null,[s("主要关系到"),i("strong",null,"任务入口"),s("。打开这个 INI，在开篇就能看到一个注册表，下面大致是这些字段，它们就是任务空间的名称：")],-1),i("div",{class:"language-ini vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ini"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[Battles]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=ALL1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"2"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=SOV1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"3"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=ALL02")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"4"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=ALL03")])])]),i("button",{class:"collapse"})],-1),i("p",null,[s("首先我们要了解一个概念——"),i("strong",null,"任务入口"),s("，就是开新战役时那2个图标，YR 平台下，第一个图标固定调用"),i("code",null,"[Battles]"),s("内名为 ALL1 的任务，第二个是 SOV1，与列表内注册顺序无关。ARES 下可以自定义，见说明书。")],-1),i("p",null,"然后此列表即为任务注册表，有新增的写到后面，然后再添加关卡的内容。",-1),i("p",null,"以下是关卡定义：",-1),i("div",{class:"language-ini vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ini"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[ALL1]"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," ;空间名称")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"CD"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=2 "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";需要放哪张光盘才能运行。光盘版遗留语句，最好都写成CD=2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Scenario"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=ALL01umd.MAP "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";地图文件名，自定义，要和mapsel.ini里对应语句相同")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"FinalMovie"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=  "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";结束时播放哪个BIK电影，这是RA1遗留下来的垃圾语句，因为从RA2起，播放电影完全由任务地图来定义。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Description"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=DESC:ALL1 "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";这是任务入口的特殊语句，表示鼠标悬停时在最下方显示什么说明文字，在CSF中定义")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[ALL02]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"DebugOnly"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=yes "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";非任务入口有这条，见下文")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Description"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=(all02umd.map) "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";对于非任务入口来说多余了，不知不写会不会有问题，可能下文选关会用到")])])]),i("button",{class:"collapse"})],-1),i("blockquote",null,[i("p",null,"ARES 说明书："),i("p",null,"如果你的战役数量超过默认数量，你可以选择使用TS风格的战役列表。ARES能随意定制战役数量，在battlemd.ini里的非测试地图都会展现在下面的列表里，由Description=来定义。"),i("p",null,"在uimd.ini："),i("p",null,"[UISettings]►CampaignList= (boolean) 允许使用这种列表，默认否"),i("p",null,"[UISettings]►ShowDebugCampaigns= (boolean) 在战役列表里显示DebugOnly=yes设置的地图. 默认否"),i("p",null,"自定义战役于battlemd.ini："),i("p",null,"[Battle]►HoverSound= (sound) 选择战役的时候出现这种声音。默认 AlliedCampaignSelect，SovietCampaignSelect和BootCampSelect"),i("p",null,"[Battle]►Summary= (CSF label) 展现战役介绍在难度条下面")],-1),i("h3",{id:"mapselmd-ini",tabindex:"-1"},[s("mapselmd.ini "),i("a",{class:"header-anchor",href:"#mapselmd-ini","aria-label":'Permalink to "mapselmd.ini"'},"​")],-1),i("p",null,[s("很重要，主要关系到"),i("strong",null,"游戏内接关"),s("。打开这个INI，我们能看到这样两个注册表，分别是 GDI 和 NOD 的。其实也能添加 ThirdSide 和 FourthSide 这两个新的表。")],-1),i("div",{class:"language-ini vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ini"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[GDI]"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," ;阵营（派系）")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Anims"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Anims "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";不用管")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Sounds"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=GDISFX "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";不用管")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=ALL01 "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";此阵营下注册的任务名，后面会有详细的定义")])])]),i("button",{class:"collapse"})],-1),i("p",null,[s("你细心会发现，上一个文件中第一关是 ALL1，这里却是 ALL01，所以这俩文件中同一个任务的注册名可以不同，关键还是"),i("code",null,"Scenario="),s("。")],-1),i("div",{class:"language-ini vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ini"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[ALL01]"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," ;任务注册名")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Scenario"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=ALL01umd.MAP "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";该任务关联哪个地图，要和battlemd.ini里对应语句相同")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Description"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=768 "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";不用管")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"VoiceOver"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=GDI-01.AUD "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";不用管")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"MapVQ"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=GDIMAP01.VQA "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";不用管")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Overlays"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=RG02A.SHP,RN02A.SHP "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";不用管")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Targets"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1,180,80 "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";不用管")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ClickMap"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=GDICLK01.PCX "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";不用管")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"2"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=ALL02 "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";下一个数字=下一关注册名")])])]),i("button",{class:"collapse"})],-1),i("p",null,[i("strong",null,"关键是最后一行"),s("，这一关和下一关必须处于同一个注册表中（其实一个任务可以同时注册到多个表中），而"),i("code",null,"="),s("前面的数字不那么重要。咱未做更多测试。见任务 "),i("em",null,"林德拉克2"),s(" 的文件，"),i("code",null,"[ALL07] 8=Sov01"),s("，由尤里最后一关跳到中国第一关。")],-1),i("p",null,"还有就是，一个任务里，玩家属于哪个大阵营，那么这个任务就至少需要在哪个大阵营的注册表里能找到，否则会导致不能接关。",-1),i("p",null,[s("实现支线（隐藏）关卡可以看"),i("a",{href:"http://pkuit.com/forum.php?mod=viewthread&tid=205309",target:"_blank",rel:"noreferrer"},"改变任务流程、支线（隐藏）关卡的实现方法 - 红警任务之家")],-1),i("h3",{id:"missionmd-ini",tabindex:"-1"},[s("missionmd.ini "),i("a",{class:"header-anchor",href:"#missionmd-ini","aria-label":'Permalink to "missionmd.ini"'},"​")],-1),i("p",null,[s("主要关系到"),i("strong",null,"任务文本"),s("。这个里面没有注册表，只是对前两个 INI 的补充定义（吐槽 WW 一个任务竟然需要3个文件来定义）")],-1),i("div",{class:"language-ini vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ini"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[SOV01UMD.MAP]"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," ;地图名称，需要关联游戏根目录或MIX包里有同名的地图文件即可保证正常调用，也正是前两个INI预定的地图名称")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Briefing"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Brief:Sov01md "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";游戏过程中按TAB键，显示的任务简报，在CSF中定义")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"UIName"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Name:Sov01md "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";决定该任务的名称，直接影响存档信息的名称")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"LSLoadMessage"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=LoadMsg:Sov01md "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";载入画面时出现的任务信息，在任务标题栏，军事行动：任务名+地点")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"LSLoadBriefing"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=LoadBrief:Sov01md "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";载入画面时出现的任务信息，任务目标那块")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"LS640BriefLocX"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=20 "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";载入画面时出现的任务信息显示在哪个坐标位置上，和以下3条语句共同作用")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"LS640BriefLocY"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=20")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"LS800BriefLocX"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=20")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"LS800BriefLocY"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=20")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"LS640BkgdName"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=LS640S01.SHP "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";无用")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"LS800BkgdName"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=LS640S01.SHP "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";在YR中载入界面默认只能用800的分辨率，该语句决定选用哪副SHP图象作为载入图")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"LS800BkgdPal"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=LS640S01.PAL "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";对应该SHP使用哪个调色板文件，不定义的话小心画面失色")])])]),i("button",{class:"collapse"})],-1),i("h3",{id:"dta-客户端相关",tabindex:"-1"},[s("DTA 客户端相关 "),i("a",{class:"header-anchor",href:"#dta-客户端相关","aria-label":'Permalink to "DTA 客户端相关"'},"​")],-1),i("ul",null,[i("li",null,[i("a",{href:"https://www.bilibili.com/read/cv13602267/",target:"_blank",rel:"noreferrer"},"简单的可运行战役地图制作——2.2战役地图的运行方法 - 哔哩哔哩")]),i("li",null,[i("a",{href:"https://www.bilibili.com/read/cv19759757/",target:"_blank",rel:"noreferrer"},"心灵终结3.3.6地图编辑器杂谈3：新建关卡入口，关卡之间的连接 - 哔哩哔哩"),s("，只看"),i("strong",null,"一、新建关卡入口"),s("对 BattleClient.ini 的修改，其他的有点啰嗦。")])],-1)])),"main-header":a(()=>[n(l.$slots,"main-header")]),"main-header-after":a(()=>[n(l.$slots,"main-header-after")]),"main-nav":a(()=>[n(l.$slots,"main-nav")]),"main-content":a(()=>[n(l.$slots,"main-content")]),"main-content-after":a(()=>[n(l.$slots,"main-content-after")]),"main-nav-before":a(()=>[n(l.$slots,"main-nav-before")]),"main-nav-after":a(()=>[n(l.$slots,"main-nav-after")]),comment:a(()=>[n(l.$slots,"comment")]),footer:a(()=>[n(l.$slots,"footer")]),aside:a(()=>[n(l.$slots,"aside")]),"aside-custom":a(()=>[n(l.$slots,"aside-custom")]),default:a(()=>[n(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{P as default};