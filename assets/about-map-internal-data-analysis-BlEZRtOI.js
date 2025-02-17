import{_ as f}from"./ValaxyMain.vue_vue_type_style_index_0_lang-DxC2i5ri.js";import{_ as c}from"./TxCard.vue_vue_type_style_index_0_lang-CyeXb3Ww.js";import{k as g,w as t,j as $,l as b,p as i,o as h,a as e,d as l,b as v,m as n}from"./app-DTK7MkJ3.js";import"./YunCloud-DCyQUbCJ.js";import"./tags-BE9ZZJqn.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-CUf0HJdH.js";import"./YunCard.vue_vue_type_script_setup_true_lang-BEU4nSCu.js";import"./YunPostMeta.vue_vue_type_style_index_0_lang-BeL1C_Sa.js";import"./index-kt1v7PTw.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CQk4e2hF.js";import"./post-TpcOcCSC.js";const P={__name:"about-map-internal-data-analysis",setup(w,{expose:p}){const s=JSON.parse('{"title":"(重要)关于地图内部数据解析","description":"","frontmatter":{"title":"(重要)关于地图内部数据解析","date":"2023-09-24","updated":"2024-02-29","categories":"其他教程","tags":["高级"],"author":"AuY","top":2,"sponsor":false},"headers":[],"relativePath":"pages/posts/about-map-internal-data-analysis.md","path":"C:/code/web/valaxy-blog/pages/posts/about-map-internal-data-analysis.md","lastUpdated":null}'),m=b(),r=s.frontmatter||{};return m.meta.frontmatter=Object.assign(m.meta.frontmatter||{},s.frontmatter||{}),i("pageData",s),i("valaxy:frontmatter",r),globalThis.$frontmatter=r,p({frontmatter:{title:"(重要)关于地图内部数据解析",date:"2023-09-24",updated:"2024-02-29",categories:"其他教程",tags:["高级"],author:"AuY",top:2,sponsor:!1}}),(a,o)=>{const d=c,u=f;return h(),g(u,{frontmatter:$(r)},{"main-content-md":t(()=>[o[1]||(o[1]=e("p",null,[l("含金量很高的一篇教程，全文上万字，非常详细地解析了地图的内部文本数据，解析了每个小节（如所属方、"),e("code",null,"[Basic]、[Structures]"),l("）的键值的含义、作用以及注意事项。")],-1)),o[2]||(o[2]=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},[e("span",{lang:"en"},"INFO"),e("span",{lang:"zh-CN"},"信息")]),e("p",null,"由于作者禁止其他平台转载教程本体，这里尊重作者的意愿，你需要注册红警任务之家账号以下载教程。或者前往下载【FA2SP HDM Edition 地编】，里面打包了一份")],-1)),v(d,{title:"【教程】如何用记事本看地图文件",url:"http://www.pkuit.com/forum.php?mod=viewthread&tid=205869",author:"AuY",date:"2024/10/10",imgPath:"",size:"large"},{default:t(()=>o[0]||(o[0]=[e("pre",null,[e("code",null,`	本文档记录了红警2地图文件里比较重要的部分，并结合前人成果对这些内容加以解释，如果有错误，请联系我。（然而至今都没有收到任何人的反馈）
	
	关于地图1.3.2
	
	此版本不代表最终版本。2025/1/8
	
	尽管经过数百次修改，此文档内容依然可能存在错误，需要读者自行辨识。由于地编版本众多，很多地方的翻译文本多有不同。本文档使用的地编图片均来自sp版1.4.0.1。如果遇到翻译文本不同的地方，可对照图片中对应的具体位置或记事本中的英文文本来确定所说的是否为同一条目。（学会用记事本看地图对于mapper来说也是一项很重要的技能）
	
	此文档中填充为黄色的表示有待核实或仍需补充，红色表示重要。此文档中的某些配图内容来源于官方任务图，其中部分内容可能命名奇怪或条目过多，读者可视自身情况选择阅读。
	
	本作者禁止红警任务之家以外的任何平台发布、转载此文章，尤指兰博玩（兰博、兰博电竞）。个人的部分内容引用不受限制，但在红警任务之家以外的平台发布，引用部分需要先获得本作者的许可。
	
	特别感谢：韩大妈，数分
	---AuY
	
	
	版本修改：
	版本1.1  对“标签和执行触发的关系”进行了大改，并删去了部分不需要或错误的东西。
	版本1.2  重新对文档进行排版，增加了强制触发对“标签和执行触发的关系”的影响，添加了部分ai触发内容
    版本1.2.3  增加了“索引”等内容，修改了“光照”等内容。 2024/2/19
    版本1.2.4  将“编队”改为“分组”以对应地编文本表述，对作战小队的“用于基地防御”“仅攻击敌对方”“运载器下客后返回”的解释进行修改，修改了一些其他文本表述。 2024/2/29  
    版本1.2.5  增加了“血量”“是否跟随”等内容，修改了“在桥梁上状态”“Edge”等部分的内容，纠正了作战小队中“\\<all\\>”的错误表述。 2024/3/20  
    版本1.2.6  修改“用于基地防御”“Edge”“建筑”“光照设置”"状态unload"等部分的内容，修改了部分排版问题。 2024/6/1  
    版本1.2.7  纠正了作战小队中“用于基地防御”的错误表述，修改了一些文本表述。 2024/6/7  
    版本1.2.8  修改了“用于基地防御”部分的表述，增加了一些和触发条件、结果有关的内容。 2024/6/22  
    版本1.2.9  再次修改了“用于基地防御”部分的表述，修改了“国家”和“所属方”的表述。  2024/7/15  
    版本1.3.0  修改了“所属方、地面光照、在桥上状态、增援部队、预装载、仅攻击敌对方”的表述，发现了“骚扰效果”的一个作用。  2024/8/26  
    版本1.3.1  完善了“骚扰效果”的内容介绍。  2024/10/10  
    版本1.3.2  修改了作战小队中的部分表述。  2025/1/8
	
	关于地图1.3.1.rar
	
	2 MB, 下载次数: 207, 下载积分: 金钱 1
`)],-1)])),_:1})]),"main-header":t(()=>[n(a.$slots,"main-header")]),"main-header-after":t(()=>[n(a.$slots,"main-header-after")]),"main-nav":t(()=>[n(a.$slots,"main-nav")]),"main-content":t(()=>[n(a.$slots,"main-content")]),"main-content-after":t(()=>[n(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[n(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[n(a.$slots,"main-nav-after")]),comment:t(()=>[n(a.$slots,"comment")]),footer:t(()=>[n(a.$slots,"footer")]),aside:t(()=>[n(a.$slots,"aside")]),"aside-custom":t(()=>[n(a.$slots,"aside-custom")]),default:t(()=>[n(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{P as default};
