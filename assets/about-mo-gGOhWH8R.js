import{_ as b}from"./ValaxyMain.vue_vue_type_style_index_0_lang-ClpXkmZy.js";import{_ as w}from"./TxCard.vue_vue_type_style_index_0_lang-DPGE99DD.js";import{i as M,w as a,h as v,j as $,p as u,o as O,a as e,g as i,b as n,l as r}from"./app-G45NqZuR.js";import"./helper-f8z8uJIo.js";import"./tags-D2-p_S_e.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-Dqr4sQV6.js";import"./YunCard.vue_vue_type_script_setup_true_lang-HOw0TaWD.js";import"./index-C5okkQwF.js";import"./YunPostMeta.vue_vue_type_style_index_0_lang-Dzm6dkq3.js";import"./index-CpRw8AFc.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CcdLmUgK.js";import"./post-CsBZaeuw.js";const y={__name:"about-mo",setup(g,{expose:d}){const s=JSON.parse('{"title":"心灵终结任务相关","description":"","frontmatter":{"title":"心灵终结任务相关","date":"2024-02-21","updated":"2024-02-21","categories":"其他教程","tags":["进阶","MO"],"author":null},"headers":[],"relativePath":"pages/posts/about-mo.md","path":"C:/code/web/valaxy-blog/pages/posts/about-mo.md","lastUpdated":null}'),p=$(),m=s.frontmatter||{};return p.meta.frontmatter=Object.assign(p.meta.frontmatter||{},s.frontmatter||{}),u("pageData",s),u("valaxy:frontmatter",m),globalThis.$frontmatter=m,d({frontmatter:{title:"心灵终结任务相关",date:"2024-02-21",updated:"2024-02-21",categories:"其他教程",tags:["进阶","MO"],author:null}}),(o,t)=>{const l=w,f=b;return O(),M(f,{frontmatter:v(m)},{"main-content-md":a(()=>[t[5]||(t[5]=e("blockquote",null,[e("p",null,"即使不做MO地图，也值得一看")],-1)),i(l,{title:"[教程向]浅谈MO任务制作",url:"https://www.bilibili.com/read/cv1018359",author:"某书记",date:"2018-08-23"},{default:a(()=>t[0]||(t[0]=[n("这篇文章的主要受众应该是有意愿制作地图的普通玩家和刚刚入门的MAPPER。我会分为几个部分：1.单人任务注册2.多人任务注册3.其它")])),_:1}),i(l,{title:"[教程向]心灵终结 自制战役注册",url:"https://www.bilibili.com/video/BV1EW411X7G3/",author:"某书记",date:"2018-08-23"},{default:a(()=>t[1]||(t[1]=[n("收藏+投币+好评三连走起~我是MZMAG制作组的触发/代码制作人员Xie_Ge12138。在临近开学之际，看到MO的MAPPER里还有很多人不知道一些基本的制作方式，于是录了一期视频。第一部分大家可以跳过，是讲MO安装的。接着是单人战役注册，然后是多人战役注册，最后有小知识。")])),_:1}),i(l,{title:"MO地编辅助参考资料（一）-恶灵巢",url:"https://www.bilibili.com/read/cv2875403/",author:"Takitoru",date:"2019-06-15"},{default:a(()=>t[2]||(t[2]=[n("最近在闲暇之余，想写一些有关MO地编的资料用来帮助mapper们更多的扩展任务的可玩性。第一次决定详细地阐述一下MO里面的恶灵巢的地形、代码、原理以及在地编里的具体应用。")])),_:1}),i(l,{title:"MO地编辅助参考资料（二） -选择机制",url:"https://www.bilibili.com/read/cv2882538/",author:"Takitoru",date:"2019-06-16"},{default:a(()=>t[3]||(t[3]=[n("大家好，这一篇主要针对或许还算“有意思”的机制选择机制进行一些阐述。MO3.34更新最大的特点除了BUG一堆之外最大的特点便是选择机制，即在大洋彼岸和战火兄弟连里面通过点击信标来决定自己指挥的阵营。")])),_:1}),i(l,{title:"# 关于ARES平台下红警2抢点机制的实现方案",url:"https://www.bilibili.com/read/cv31317379/",author:"蓝色曳光",date:"2024年02月16日"},{default:a(()=>t[4]||(t[4]=[n("首先说明：红警2的据点争夺机制已有开发实例，但依靠的是大佬们自己改的平台，公开的据点争夺机制可以说是没有。本人为民间MO3战役制作者（或许会回去水YR任务），在上一年心心念念的要搞这个机制")])),_:1}),t[6]||(t[6]=e("blockquote",null,[e("p",null,"不会游泳的企鹅24")],-1)),t[7]||(t[7]=e("p",null,"在官方和自制的很多任务中，会在任务目标关键建筑的头上设置一个标志，比如若要保护一个建筑，就在上面设置一个防御（绿色盾牌）标志，要摧毁的目标就设置一个红色瞄准的标志，这些都属于定点标记。注意，有一些标记是顶在移动单位头上的，比如官方任务“生存本能”中五个原型机头上都有一个防御标记，这个不在此处的讨论范围之内。",-1)),t[8]||(t[8]=e("p",null,"定点标记的实现方法是结果“41：播放动画在……”，有两个参数，一个是动画的类型，有几千种动画，和定点标记有关的动画是1858 - QUESTMARK到1865 - VIPMARK，从1858到1865分别为：问号（在“时间胶囊”中出现过），叹号（警告），骷颅头（危险），进入标记，盾牌（防御），眼睛（间谍渗透），瞄准（攻击目标），五角星（重要单位或建筑）。直接输入动画序号即可。另一个参数是路径点，就是播放动画的位置。写完这个触发后，你会发现这个标记只会持续几秒钟，于是自然可以想到可以用重复触发来使这个标记一直维持。",-1)),t[9]||(t[9]=e("p",null,"生存本能原型机标志是直接改动单位ini代码设置的alphaimage 这导致这个单位会全程带着标记",-1)),t[10]||(t[10]=e("p",null,"超时空动画（就是用超时空传送时的那个旋转的白色罩子），如果需要的话可以添加结果41：播放动画在……，动画类型选256 - ChronoTG.",-1)),t[11]||(t[11]=e("p",null,[e("a",{href:"https://www.bilibili.com/read/cv19191448/",target:"_blank",rel:"noreferrer"},"MO 常用音效、语音和动画")],-1)),t[12]||(t[12]=e("p",null,[e("a",{href:"https://www.bilibili.com/read/cv17283354/",target:"_blank",rel:"noreferrer"},"心灵终结3.3.6地图编辑器萌新教程第14篇：战役中常用的ini修改 - 哔哩哔哩")],-1))]),"main-header":a(()=>[r(o.$slots,"main-header")]),"main-header-after":a(()=>[r(o.$slots,"main-header-after")]),"main-nav":a(()=>[r(o.$slots,"main-nav")]),"main-content":a(()=>[r(o.$slots,"main-content")]),"main-content-after":a(()=>[r(o.$slots,"main-content-after")]),"main-nav-before":a(()=>[r(o.$slots,"main-nav-before")]),"main-nav-after":a(()=>[r(o.$slots,"main-nav-after")]),comment:a(()=>[r(o.$slots,"comment")]),footer:a(()=>[r(o.$slots,"footer")]),aside:a(()=>[r(o.$slots,"aside")]),"aside-custom":a(()=>[r(o.$slots,"aside-custom")]),default:a(()=>[r(o.$slots,"default")]),_:3},8,["frontmatter"])}}};export{y as default};