import{_ as g}from"./ValaxyMain.vue_vue_type_style_index_0_lang-DxC2i5ri.js";import{_ as f}from"./TxDownload.vue_vue_type_style_index_0_lang-Bt3c6gtA.js";import{k as b,w as e,j as k,l as M,p as d,o as v,a as l,d as n,b as w,g as O,m as o}from"./app-DTK7MkJ3.js";import"./YunCloud-DCyQUbCJ.js";import"./tags-BE9ZZJqn.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-CUf0HJdH.js";import"./YunCard.vue_vue_type_script_setup_true_lang-BEU4nSCu.js";import"./YunPostMeta.vue_vue_type_style_index_0_lang-BeL1C_Sa.js";import"./index-kt1v7PTw.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CQk4e2hF.js";import"./post-TpcOcCSC.js";const $="/assets/01-BOJ13hlM.png",x="/assets/03-C6kfWXMZ.png",y="/assets/02-BBmc9k5U.png",z="/assets/05-pgwFZ58T.webp",q={__name:"index",setup(B,{expose:m}){const a=JSON.parse('{"title":"地图渲染器及其用法","description":"","frontmatter":{"title":"地图渲染器及其用法","date":"2023-11-02","updated":"2024-07-22","categories":"工具与调试","tags":["入门"],"author":"轻稚天雪"},"headers":[{"level":2,"title":"下载","slug":"下载","link":"#下载","children":[]},{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[{"level":3,"title":"加载mod相关配置","slug":"加载mod相关配置","link":"#加载mod相关配置","children":[]},{"level":3,"title":"细节选项","slug":"细节选项","link":"#细节选项","children":[]},{"level":3,"title":"批量渲染","slug":"批量渲染","link":"#批量渲染","children":[]}]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"relativePath":"pages/posts/map-renderer-guide/index.md","path":"C:/code/web/valaxy-blog/pages/posts/map-renderer-guide/index.md","lastUpdated":null}'),i=M(),s=a.frontmatter||{};return i.meta.frontmatter=Object.assign(i.meta.frontmatter||{},a.frontmatter||{}),d("pageData",a),d("valaxy:frontmatter",s),globalThis.$frontmatter=s,m({frontmatter:{title:"地图渲染器及其用法",date:"2023-11-02",updated:"2024-07-22",categories:"工具与调试",tags:["入门"],author:"轻稚天雪"}}),(r,t)=>{const u=f,p=g;return v(),b(p,{frontmatter:k(s)},{"main-content-md":e(()=>[t[0]||(t[0]=l("p",null,"此文提供 ra2 地图渲染器的下载和使用方法。它可以将地图渲染生成全景图，供人参考和欣赏。",-1)),t[1]||(t[1]=l("blockquote",null,[l("p",null,[n("部分内容参考了："),l("a",{href:"https://www.bilibili.com/read/cv26602758/",target:"_blank",rel:"noreferrer"},"【工具教程】地图截图器"),n("（已获授权），"),l("a",{href:"https://bbs.ra2diy.com/forum.php?mod=viewthread&tid=14347",target:"_blank",rel:"noreferrer"},"全息截图器的简易用法")])],-1)),t[2]||(t[2]=l("h2",{id:"下载",tabindex:"-1"},[n("下载 "),l("a",{class:"header-anchor",href:"#下载","aria-label":'Permalink to "下载"'},"​")],-1)),w(u,{size:"1.06MB",netdisk:"",direct:"CNCMaps_20211214.7z",name:"CNCMaps_20211214.7z"}),t[3]||(t[3]=l("blockquote",null,[l("p",null,[n("软件来自"),l("a",{href:"https://ppmforums.com/topic-29554-page-5/cnc-maps-renderer-rewritten-works-for-tiberian-sun-and-ra2/?postorder=asc",target:"_blank",rel:"noreferrer"},"https://ppmforums.com/topic-29554-page-5/cnc-maps-renderer-rewritten-works-for-tiberian-sun-and-ra2/?postorder=asc"),n("，仓库地址"),l("a",{href:"https://github.com/zzattack/ccmaps-net",target:"_blank",rel:"noreferrer"},"https://github.com/zzattack/ccmaps-net")])],-1)),t[4]||(t[4]=l("p",null,[n("汉化版（需要阅读权限）："),l("a",{href:"https://bbs.ra2diy.com/forum.php?mod=viewthread&tid=24132&extra=page%3D1",target:"_blank",rel:"noreferrer"},"一个汉化版的全息截图器 - 红警DIY论坛")],-1)),t[5]||(t[5]=l("h2",{id:"用法",tabindex:"-1"},[n("用法 "),l("a",{class:"header-anchor",href:"#用法","aria-label":'Permalink to "用法"'},"​")],-1)),t[6]||(t[6]=l("blockquote",null,[l("p",null,[n("以"),l("code",null,"2.4.2.0(20211214)"),n("版本为准。你也可以直接阅读界面上的英文描述，而此章节不只有选项意义，也有使用经验和细节。")])],-1)),t[7]||(t[7]=l("figure",null,[l("img",{src:$,alt:"",loading:"lazy",decoding:"async"})],-1)),t[8]||(t[8]=l("p",null,"如图，软件有5个面板，Main settings, Misc settings, Batch process, Log 和 About。About 面板为开发者相关信息，Log 面板用于显示运行日志以供参考，下文主要讲解前三个面板。",-1)),t[9]||(t[9]=l("p",null,[n("首先，"),l("code",null,"Input map"),n("为你需要渲染的"),l("strong",null,"地图文件路径"),n("，"),l("code",null,"Mix files"),n("为你的游戏的根目录，默认为你运行过 RegSetMD.exe（注册程序）的目录，当然你也可以指定一个别的。对于有较大改动的 MOD 比如 MO，此选项无效，稍后再讲。")],-1)),t[10]||(t[10]=l("div",{class:"warning custom-block"},[l("p",{class:"custom-block-title"},[l("span",{lang:"en"},"WARNING"),l("span",{lang:"zh-CN"},"注意")]),l("p",null,[n("如果你使用 "),l("strong",null,"Win7"),n(" 或更早的操作系统，两个目录都不要出现中文字符！其他系统没事。")])],-1)),t[11]||(t[11]=l("p",null,[l("code",null,"Image output formats"),n("为"),l("strong",null,"图片的输出格式"),n("，可以指定是否输出 "),l("strong",null,"jpg"),n(" 文件及其编码质量（质量越好体积越大，如果太小会不堪入目），以及是否输出 "),l("strong",null,"png"),n(" 文件及其压缩率（越高越慢越小）。一般选择 jpg，质量 60~80 就够了，如果选择 png，压缩率最好高一些。以我自己的一张约 100X100 的地图为例，jpg-60 图片约 2MB，png-9 约 16MB，jpg-100 约 14MB。"),l("code",null,"Output thumbnail"),n("为输出缩略图及其格式，可以指定其宽/高/是否保持纵横比。")],-1)),t[12]||(t[12]=l("p",null,[l("code",null,"Output file naming"),n("为图片指定名称，分别是"),l("strong",null,"使用文件名"),n("，"),l("strong",null,"自动命名"),n("（根据 [Basic] 下的 Name 的值以及 CSF 文件，请确保你做好了命名），以及"),l("strong",null,"自定义名称"),n("。另外，如果你在名称中输入路径，如"),l("code",null,"e:\\name"),n("，则会渲染到指定目录下。"),l("strong",null,"默认图片会保存到地图所在的地方"),n("（在 log 面板中可以看到）。")],-1)),t[13]||(t[13]=l("p",null,[l("code",null,"Engine mode"),n("为选择需要模拟的游戏引擎，一般选择 Auto Detect 或 Force YR。")],-1)),t[14]||(t[14]=l("p",null,[n("最后的"),l("code",null,"Command"),n("为最终调用的命令行参数，内容会根据选项自动生成，不用改，可能从外部调用地图渲染器的时候会用到。")],-1)),t[15]||(t[15]=l("h3",{id:"加载mod相关配置",tabindex:"-1"},[n("加载mod相关配置 "),l("a",{class:"header-anchor",href:"#加载mod相关配置","aria-label":'Permalink to "加载mod相关配置"'},"​")],-1)),t[16]||(t[16]=l("p",null,[n("这一节难度比较高，如果你"),l("strong",null,"不"),n("为 MO 等 MOD 生成地图，可以跳过。"),O("todo 是否读取裸地形和artini")],-1)),t[17]||(t[17]=l("figure",null,[l("img",{src:x,alt:"",loading:"lazy",decoding:"async"})],-1)),t[18]||(t[18]=l("h4",{id:"仅使用",tabindex:"-1"},[n("仅使用 "),l("a",{class:"header-anchor",href:"#仅使用","aria-label":'Permalink to "仅使用"'},"​")],-1)),t[19]||(t[19]=l("p",null,"以 MO 为例，打开 MO 目录下自带的渲染器 Map Renderer，里面有一个 mo_config.xml，如果你用 MO 自带的渲染器，应该是默认选中了，不用管。如果你用别的渲染器，或者是别的 MOD，需要在 File 菜单打开一个 xml 文件（注意其内 Directories 需指向游戏目录），然后 OK。",-1)),t[20]||(t[20]=l("h4",{id:"编写",tabindex:"-1"},[n("编写 "),l("a",{class:"header-anchor",href:"#编写","aria-label":'Permalink to "编写"'},"​")],-1)),t[21]||(t[21]=l("p",null,[n("需要你有 MOD/MIX/地形文件相关知识，见"),l("a",{href:"https://www.bilibili.com/read/cv26602758/",target:"_blank",rel:"noreferrer"},"https://www.bilibili.com/read/cv26602758/"),n("。")],-1)),t[22]||(t[22]=l("h3",{id:"细节选项",tabindex:"-1"},[n("细节选项 "),l("a",{class:"header-anchor",href:"#细节选项","aria-label":'Permalink to "细节选项"'},"​")],-1)),t[23]||(t[23]=l("p",null,"在 Misc settings 面板，你可以指定各种渲染细节。",-1)),t[24]||(t[24]=l("figure",null,[l("img",{src:y,alt:"",loading:"lazy",decoding:"async"})],-1)),t[25]||(t[25]=l("p",null,[l("code",null,"Start positions marking"),n("为玩家出生点标记，用于"),l("strong",null,"遭遇战地图"),n("。勾选则会在图片上标记玩家出生点。也可以指定标记方式及其大小，默认就好。")],-1)),t[26]||(t[26]=l("p",null,[l("code",null,"Map modifications"),n("区域内的选项会修改地图本体，"),l("strong",null,"慎用"),n("！")],-1)),t[27]||(t[27]=l("ol",null,[l("li",null,"第一个为用生成的全景图缩小版替换地图预览图（遭遇战选图时的预览），要下拉选择一个选项，暂不清楚第2,3,4个选项的区别。不过现在都是用DTA客户端显示预览了，不太用得到它了。"),l("li",null,[l("code",null,"Compress Tile Pack"),n("为压缩地图，会减小原地图大小；")]),l("li",null,[l("code",null,"Fix Tiles，Fix Overlays"),n("分别为修复地图中未知的地形和覆盖图，或许可以挽救损坏的地图。")]),l("li",null,[l("code",null,"Map backup"),n("为修改前备份地图（备份为 .bkp 文件）。")])],-1)),t[28]||(t[28]=l("p",null,[l("code",null,"Additional markings"),n("为附加标记，选项分别为：")],-1)),t[29]||(t[29]=l("ol",null,[l("li",null,[n("强调资源区域，会把金矿涂成黄色，把宝石矿涂成紫色，用于"),l("strong",null,"遭遇战地图"),n("，如图所示；")]),l("li",null,"标记冰的生长（仅用于 TS 雪地图）；"),l("li",null,"显示隧道路径；提升隧道路径的高度；"),l("li",null,"在渲染完后显示预览窗口，如图所示，shadows 标签页咱不知道干嘛的。")],-1)),t[30]||(t[30]=l("figure",null,[l("img",{src:z,alt:"",loading:"lazy",decoding:"async"})],-1)),t[31]||(t[31]=l("p",null,[l("code",null,"Sizing mode"),n("为地图渲染范围，前两者生成地图可视区域（蓝线）内截图，后者生成完整地图截图（用于"),l("strong",null,"任务地图"),n("）。")],-1)),t[32]||(t[32]=l("h3",{id:"批量渲染",tabindex:"-1"},[n("批量渲染 "),l("a",{class:"header-anchor",href:"#批量渲染","aria-label":'Permalink to "批量渲染"'},"​")],-1)),t[33]||(t[33]=l("p",null,[n("渲染器最近的几个版本新增了一个很有用的功能——批量渲染。在第三个面板"),l("code",null,"Batch process"),n("内，你可以添加地图或清空列表，然后开始批处理。在开始之前，你需要先在前两个面板内设定好配置，注意"),l("strong",null,"不要"),n("选择自定义文件名，否则会只剩下一张（如果地图在同一目录）。最终程序会按同一套配置渲染所有地图。")],-1)),t[34]||(t[34]=l("h2",{id:"其他",tabindex:"-1"},[n("其他 "),l("a",{class:"header-anchor",href:"#其他","aria-label":'Permalink to "其他"'},"​")],-1)),t[35]||(t[35]=l("p",null,"软件需要微软 .NET 运行库，若打不开自行搜索安装。如在渲染途中遇到错误（显示在 log 面板中），请根据 log 内提示处理。其他错误可能为选择的配置不正确。",-1)),t[36]||(t[36]=l("blockquote",null,[l("p",null,"此文可能存在不足，欢迎大家提出修改建议。")],-1))]),"main-header":e(()=>[o(r.$slots,"main-header")]),"main-header-after":e(()=>[o(r.$slots,"main-header-after")]),"main-nav":e(()=>[o(r.$slots,"main-nav")]),"main-content":e(()=>[o(r.$slots,"main-content")]),"main-content-after":e(()=>[o(r.$slots,"main-content-after")]),"main-nav-before":e(()=>[o(r.$slots,"main-nav-before")]),"main-nav-after":e(()=>[o(r.$slots,"main-nav-after")]),comment:e(()=>[o(r.$slots,"comment")]),footer:e(()=>[o(r.$slots,"footer")]),aside:e(()=>[o(r.$slots,"aside")]),"aside-custom":e(()=>[o(r.$slots,"aside-custom")]),default:e(()=>[o(r.$slots,"default")]),_:3},8,["frontmatter"])}}};export{q as default};
