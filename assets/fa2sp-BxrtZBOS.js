import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-ClpXkmZy.js";import{i as E,w as a,h as g,j as A,p as r,o as y,a as s,b as i,l as t}from"./app-G45NqZuR.js";import"./helper-f8z8uJIo.js";import"./tags-D2-p_S_e.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-Dqr4sQV6.js";import"./YunCard.vue_vue_type_script_setup_true_lang-HOw0TaWD.js";import"./index-C5okkQwF.js";import"./YunPostMeta.vue_vue_type_style_index_0_lang-Dzm6dkq3.js";import"./index-CpRw8AFc.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CcdLmUgK.js";import"./post-CsBZaeuw.js";const N={__name:"fa2sp",setup(D,{expose:p}){const e=JSON.parse('{"title":"FA2sp：增强版地编","description":"","frontmatter":{"title":"FA2sp：增强版地编","date":"2023-10-25","updated":"2023-10-25","categories":"工具与调试","tags":["入门"],"author":"轻稚天雪","sponsor":false,"top":1},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"FA2sp本体","slug":"fa2sp本体","link":"#fa2sp本体","children":[]},{"level":2,"title":"整合版FA2sp","slug":"整合版fa2sp","link":"#整合版fa2sp","children":[]},{"level":2,"title":"MO版FA2sp","slug":"mo版fa2sp","link":"#mo版fa2sp","children":[]}],"relativePath":"pages/posts/fa2sp.md","path":"C:/code/web/valaxy-blog/pages/posts/fa2sp.md","lastUpdated":null}'),n=A(),h=e.frontmatter||{};return n.meta.frontmatter=Object.assign(n.meta.frontmatter||{},e.frontmatter||{}),r("pageData",e),r("valaxy:frontmatter",h),globalThis.$frontmatter=h,p({frontmatter:{title:"FA2sp：增强版地编",date:"2023-10-25",updated:"2023-10-25",categories:"工具与调试",tags:["入门"],author:"轻稚天雪",sponsor:!1,top:1}}),(l,k)=>{const o=d;return y(),E(o,{frontmatter:g(h)},{"main-content-md":a(()=>k[0]||(k[0]=[s("h2",{id:"介绍",tabindex:"-1"},[i("介绍 "),s("a",{class:"header-anchor",href:"#介绍","aria-label":'Permalink to "介绍"'},"​")],-1),s("blockquote",null,[s("p",null,[i("FA2sp 是 secsome 发起的一个引擎扩展项目，旨在为 FinalAlert2 提供一组基于 FA2pp 和 Syringe 的"),s("strong",null,"新功能和修复程序"),i("，以允许注入代码。虽然 AlexB 的 FA2sp 独立于 FA2Ext ，但您不能将 FA2sp 与使用 FA2Ext 一起使用。目前， FA2sp 使用带有 /std:c++20 的 Visual Studio 2022（v143）来构建最新版本。由于开发者的精力有限，从 1.6.0 版本开始， FA2sp 将不再支持除尤里的复仇 1.01 和基于它的 MOD 之外的任何版本。请理解。")])],-1),s("p",null,[i("相对于旧版地图编辑器，FA2sp支持复制作战小队、复制/插入/移位动作脚本、单位属性笔刷、图层、预览灯光、建筑损伤预览、自动保存、地形分组、更多撤回步骤等功能（详见配置），极大提高了地图制作效率和体验。"),s("a",{href:"https://www.bilibili.com/read/cv12648269/",target:"_blank",rel:"noreferrer"},"[FA2开源扩展] FA2sp 1.0.0 - 哔哩哔哩"),i("，"),s("a",{href:"https://www.bilibili.com/read/cv19099693/",target:"_blank",rel:"noreferrer"},"早期介绍")],-1),s("h2",{id:"fa2sp本体",tabindex:"-1"},[i("FA2sp本体 "),s("a",{class:"header-anchor",href:"#fa2sp本体","aria-label":'Permalink to "FA2sp本体"'},"​")],-1),s("p",null,[i("FA2sp 本体只有2个核心文件，"),s("strong",null,"CncVxlRenderText.dll 和 FA2sp.dll"),i("，github 仓库："),s("a",{href:"https://github.com/secsome/FA2sp",target:"_blank",rel:"noreferrer"},"https://github.com/secsome/FA2sp"),i("，可以在 Releases 页下载")],-1),s("p",null,[s("strong",null,"1.6.3"),i(" 版的国内镜像加速下载：")],-1),s("ul",null,[s("li",null,[s("a",{href:"https://mirror.ghproxy.com/https://github.com/secsome/FA2sp/releases/download/Release1.6.3/CncVxlRenderText.dll",target:"_blank",rel:"noreferrer"},"https://mirror.ghproxy.com/https://github.com/secsome/FA2sp/releases/download/Release1.6.3/CncVxlRenderText.dll")]),s("li",null,[s("a",{href:"https://mirror.ghproxy.com/https://github.com/secsome/FA2sp/releases/download/Release1.6.3/FA2sp.dll",target:"_blank",rel:"noreferrer"},"https://mirror.ghproxy.com/https://github.com/secsome/FA2sp/releases/download/Release1.6.3/FA2sp.dll")]),s("li",null,[i("配置说明书："),s("a",{href:"https://mirror.ghproxy.com/https://raw.githubusercontent.com/secsome/FA2sp/master/DOCUMENT.md",target:"_blank",rel:"noreferrer"},"https://mirror.ghproxy.com/https://raw.githubusercontent.com/secsome/FA2sp/master/DOCUMENT.md")])],-1),s("p",null,[i("你需要将它加入到一份 FA2 中才能使用（不能加入到联盟版和 FA2Ext 版中，详见后文），如果你有旧版 FA2sp，也可以加入它来"),s("strong",null,"升级"),i("。")],-1),s("h2",{id:"整合版fa2sp",tabindex:"-1"},[i("整合版FA2sp "),s("a",{class:"header-anchor",href:"#整合版fa2sp","aria-label":'Permalink to "整合版FA2sp"'},"​")],-1),s("p",null,"适用于尤里的复仇，相对于原版FA2，修正了很多触发描述和汉化不完全的问题，并且添加了部分 Ares3.0 和 Phobos 新增触发。",-1),s("p",null,[i("咱找到的一份深度定制版（1.6.2版，不可替换文件更新）："),s("a",{href:"https://wwl.lanzoul.com/izlFG1omkfra",target:"_blank",rel:"noreferrer"},"https://wwl.lanzoul.com/izlFG1omkfra")],-1),s("p",null,[i("其他（1.4.0.1版，可替换文件更新，请手动修改 FAData.ini 内[ExtConfigs]，由 caco 提供）："),s("a",{href:"https://pan.baidu.com/s/1KiJFochCFo9JJpCBYCRDIg",target:"_blank",rel:"noreferrer"},"https://pan.baidu.com/s/1KiJFochCFo9JJpCBYCRDIg"),i("密码：caco")],-1),s("details",{class:"details custom-block"},[s("summary",null,"配置，在 FAData.ini 内"),s("div",{class:"language-ini vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ini"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[ExtConfigs]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"BrowserRedraw"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                                   "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";启用新的对象浏览器试图（左侧边栏）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ModernObjectBrowser"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=No                              "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";启用实验性对象浏览器。（暂时没用）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ObjectBrowser.GuessMode"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=0                           "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";猜测科技类型所属阵营的方式，0（默认）使用先决条件，1使用Owner第一项")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ObjectBrowser.CleanUp"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                           "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";是否清除空物品")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ObjectBrowser.SafeHouses"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                        "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";是否重整所属方")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"AllowIncludes"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                                   "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";是否读取[#Include]中额外的ini条目")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"AllowPlusEqual"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                                  "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";是否读取注册表中的+=项")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Stringtables"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                                    "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";是否读取Stringtablexx.csf中的项目")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"TutorialTexts.Hide"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                              "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";隐藏注册名后面的CSF值，可以减少延迟")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"TutorialTexts.Fix"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                               "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";替换原始的把文本加入组合框中的方式")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"SortByTriggerName"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                               "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";按名称顺序排列触发")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"AdjustDropdownWidth"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                             "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";允许自动调整下拉框宽度")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"AdjustDropdownWidth.Factor"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=6                        "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";单个字符占用的宽度，默认为8")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"AdjustDropdownWidth.Max"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=360                         "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";最大宽度，默认为360")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"CopySelectionBound.Color"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=0,255,0                    "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";复制地形时边界框的颜色")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"CursorSelectionBound.Color"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=0,0,255                  "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";鼠标所在单元格的颜色")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"CursorSelectionBound.HeightIndicatorColor"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=255,0,0   "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";高度线的颜色")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Waypoint.Background"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=No                              "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";是否给路径点添加背景")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Waypoint.Background.Color"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=128,128,128               "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";路径点背景颜色")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Waypoint.Color"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=255,255,0                            "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";路径点颜色")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Waypoint.Text.ExtraOffset"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=0,0                       "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";路径点文本额外的 X 和 Y 轴偏移，默认为 0,0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ExtWaypoints"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                                    "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";是否使用无限路径点（需要Phobos）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"SaveMap.AutoSave"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=No                                 "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";是否自动保存地图")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"SaveMap.AutoSave.Interval"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=120                       "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";自动保存的间隔，单位为秒。应大于或等于30，默认300")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"SaveMap.AutoSave.MaxCount"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=-1                        "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";自动保存时最多留存备份的数量，-1将不会自动清除备份，默认为10")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"SaveMap.OnlySaveMAP"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=No                              "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";是否只保存.map扩展名的地图")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"SaveMap.DefaultPreviewOptionMP"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=0                    "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";保存多人地图时用于预览生成的默认选项。0 = 总是生成新预览，1 = 不生成新预览，2 = 总是生成隐藏预览，默认为 0。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"SaveMap.DefaultPreviewOptionSP"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=1                    "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";与 MP 相同，但对于 SP（单人战役） 地图，默认为 1。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"SaveMap.SortSections"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                            "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";保存地图时按特定分类对INI项进行排序。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"SaveMap.SortSectionType"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=none                        "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},';这些INI项排在最前面,前缀带"List."的代表按照此注册表的顺序对此注册表下所有项排序，如"List.BuildingTypes"。')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"VerticalLayout"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                                  "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";是否将底部区域移到右侧")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"UseRGBHouseColor"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=False                              "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";是否以RGB显示阵营颜色")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"UndoRedoLimit"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=128                                   "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";撤销最大步数，默认16")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"RecentFileLimit"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=8                                   "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";保留多少最近文件。范围从 4 到 9 ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"MoneyBackGround"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                                 "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";资源显示背景")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"MoneyBackGroundColor"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=255,255,255                    "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";背景颜色")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"MoneyTextColor"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=255,192,203                          "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";字体颜色")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"EnableOnlineSection"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                             "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";是否启用网站菜单栏")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"NewTileManagerStyle"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                             "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";地形管理器样式。Yes 为 FA2SP 型，No 为 FA2Copy 型。默认Yes")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"EnableMultiSelection"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                            "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";可选中地形进行操作")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"MultiSelectionColor"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=255,192,203                     "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";被选中地形的颜色")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ClearSelectionWhenSave"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                          "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";保存地图时取消选中地形")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"MultiSelectionShiftDeselect"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=No                      "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";将取消选中单元格的热键从 CTRL+D 替换为 CTRL+SHIFT+D")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"RandomTerrainObjects"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=No                             "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";是否将所有地形对象加入随机树木中（路灯，电线杆等非树木地形对象）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"DDrawInVideoMem"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                                 "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";是否会在显存中分配DirectDraw表面，默认为Yes")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"DDrawEmulation"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=No                                   "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";DirectDrawCreate是否使用模拟模式，默认为No")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"NoHouseNameTranslation"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                          "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";是否不将单位的阵营(House)翻译为阵营的UIName，默认为No")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"MapTesterParameters"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=-SPEEDCONTROL                   "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";地图测试时运行gamemd.exe的命令行参数")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"CSFTools.INISections"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=csf,CSF                        "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";CSF工具保存或读取的INI段")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ExtendedValidationNoError"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Yes                       "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";当为Yes时，地图检查器会将不会报告新添加的“错误”，而会报告“警告”。（“错误”会阻止地图保存，“警告”不会）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"HideNoRubbleBuilding"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=No                             "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";不渲染 血量为0 且 不留下废墟(LeaveRubble=no) 的建筑物")])])]),s("button",{class:"collapse"})])],-1),s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},[s("span",{lang:"en"},"TIP"),s("span",{lang:"zh-CN"},"提示")]),s("p",null,"使用时遇到各种问题，详见【调试游戏及故障解决】条目")],-1),s("h2",{id:"mo版fa2sp",tabindex:"-1"},[i("MO版FA2sp "),s("a",{class:"header-anchor",href:"#mo版fa2sp","aria-label":'Permalink to "MO版FA2sp"'},"​")],-1),s("p",null,"适用于MO3，下载后打开 README.txt 看看怎么用",-1),s("p",null,[i("下载："),s("a",{href:"https://wwuj.lanzoul.com/iwQ5F1cueapi",target:"_blank",rel:"noreferrer"},"https://wwuj.lanzoul.com/iwQ5F1cueapi")],-1)])),"main-header":a(()=>[t(l.$slots,"main-header")]),"main-header-after":a(()=>[t(l.$slots,"main-header-after")]),"main-nav":a(()=>[t(l.$slots,"main-nav")]),"main-content":a(()=>[t(l.$slots,"main-content")]),"main-content-after":a(()=>[t(l.$slots,"main-content-after")]),"main-nav-before":a(()=>[t(l.$slots,"main-nav-before")]),"main-nav-after":a(()=>[t(l.$slots,"main-nav-after")]),comment:a(()=>[t(l.$slots,"comment")]),footer:a(()=>[t(l.$slots,"footer")]),aside:a(()=>[t(l.$slots,"aside")]),"aside-custom":a(()=>[t(l.$slots,"aside-custom")]),default:a(()=>[t(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{N as default};
