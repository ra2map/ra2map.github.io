import{_ as f}from"./ValaxyMain.vue_vue_type_style_index_0_lang-ClpXkmZy.js";import{_ as g}from"./TxDownload.vue_vue_type_style_index_0_lang-CQdNi4C6.js";import{i as $,w as o,h as v,j as b,p as i,o as w,a as e,b as l,g as y,l as a}from"./app-G45NqZuR.js";import"./helper-f8z8uJIo.js";import"./tags-D2-p_S_e.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-Dqr4sQV6.js";import"./YunCard.vue_vue_type_script_setup_true_lang-HOw0TaWD.js";import"./index-C5okkQwF.js";import"./YunPostMeta.vue_vue_type_style_index_0_lang-Dzm6dkq3.js";import"./index-CpRw8AFc.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CcdLmUgK.js";import"./post-CsBZaeuw.js";const k="/assets/1-OyXOJIyZ.webp",x={__name:"index",setup(B,{expose:p}){const r=JSON.parse('{"title":"平台差异：载具离开地图时乘员的被摧毁判定","description":"","frontmatter":{"title":"平台差异：载具离开地图时乘员的被摧毁判定","date":"2017-07-27","updated":"2017-07-27","categories":["其他教程","细节"],"tags":["进阶"],"author":"竹蜻蜓(Heli)","sponsor":false},"headers":[],"relativePath":"pages/posts/platform-difference-about-vehicle-leaves-map/index.md","path":"C:/code/web/valaxy-blog/pages/posts/platform-difference-about-vehicle-leaves-map/index.md","lastUpdated":null}'),m=b(),s=r.frontmatter||{};return m.meta.frontmatter=Object.assign(m.meta.frontmatter||{},r.frontmatter||{}),i("pageData",r),i("valaxy:frontmatter",s),globalThis.$frontmatter=s,p({frontmatter:{title:"平台差异：载具离开地图时乘员的被摧毁判定",date:"2017-07-27",updated:"2017-07-27",categories:["其他教程","细节"],tags:["进阶"],author:"竹蜻蜓(Heli)",sponsor:!1}}),(n,t)=>{const u=g,d=f;return w(),$(d,{frontmatter:v(s)},{"main-content-md":o(()=>[t[0]||(t[0]=e("blockquote",null,[e("p",null,[l("Ra2map：本文转载自"),e("a",{href:"http://www.pkuit.com/forum.php?mod=viewthread&tid=201266&extra=page%3D2",target:"_blank",rel:"noreferrer"},"平台差异：载具移出地图边界时内部装载物的被摧毁判定 - 红警任务之家")])],-1)),t[1]||(t[1]=e("p",null,"By 竹蜻蜓 2017.7.27",-1)),t[2]||(t[2]=e("p",null,"原谅我用了这么长的一个标题……这是我能描述清楚这个问题的最简洁的文字了。",-1)),t[3]||(t[3]=e("p",null,[l("这里描述的是任务制作中的一个坑，是"),e("strong",null,"尤里复仇原版平台1.000版本和1.001版本之间的差异导致触发执行结果不一致的坑"),l("。几乎所有情况下，1.000和1.001版本在触发执行方面都表现的高度一致，但是这两天在 "),e("em",null,"@断绳伞兵"),l(" 测试我的任务的时候，出现了莫名的任务失败情况。经过我的排查和推断，终于发现了问题之所在，并稳定复现了这一问题。")],-1)),t[4]||(t[4]=e("p",null,[l("情况的具体描述是这样的："),e("strong",null,"一个运输载具装载着一个物体走出地图边界，这个物体在1.000版本内不会被判定为摧毁，而在1.001版本内有时会被判定为摧毁"),l("。")],-1)),t[5]||(t[5]=e("p",null,"经反复试验，确定被判定摧毁的不是运输载具本身，而是运输载具内装载的物体（步兵和坦克），而且这种情况的发生与陆上和海上没有关系。",-1)),t[6]||(t[6]=e("p",null,"我做了一个小Demo来演示这一差异。见all01umd.map",-1)),y(u,{size:"330KB",netdisk:"",direct:"测试地图及说明.zip",name:"测试地图及说明.zip"}),t[7]||(t[7]=e("figure",null,[e("img",{src:k,alt:"",loading:"lazy",decoding:"async"})],-1)),t[8]||(t[8]=e("p",null,"三个装甲运兵船各运载一个动员兵走出地图边界。针对这三个动员兵使用了三种判定摧毁的条件，由上而下分别是：",-1)),t[9]||(t[9]=e("ul",null,[e("li",null,"16 被摧毁, 单位, (数量为#)…（数值填写1）"),e("li",null,"48 被任何事物摧毁"),e("li",null,"7 被任一作战方摧毁")],-1)),t[10]||(t[10]=e("p",null,"只有第一个触发不需要关联，后两个触发都需要把标签关联到对应的动员兵上。",-1)),t[11]||(t[11]=e("p",null,"实际执行结果是：1.000版本的尤里复仇中，三个触发都没有被激活；1.001版本的尤里复仇中，前两个触发被激活了，最后一个没有被激活。",-1)),t[12]||(t[12]=e("p",null,[l("结论："),e("strong",null,"1.001版本中，如果一个运输载具载着一个物体走出地图边界，这个物体会被判定为摧毁，但是不会激活条件7 “被任一作战方摧毁”"),l("。这对于一些护送任务非常重要，极有可能导致在1.000版本里一切正常，而1.001版本里莫名其妙的任务失败。")],-1)),t[13]||(t[13]=e("p",null,"这个现象出现的非常稳定，甚至可以用来判断玩家的尤里复仇版本。",-1))]),"main-header":o(()=>[a(n.$slots,"main-header")]),"main-header-after":o(()=>[a(n.$slots,"main-header-after")]),"main-nav":o(()=>[a(n.$slots,"main-nav")]),"main-content":o(()=>[a(n.$slots,"main-content")]),"main-content-after":o(()=>[a(n.$slots,"main-content-after")]),"main-nav-before":o(()=>[a(n.$slots,"main-nav-before")]),"main-nav-after":o(()=>[a(n.$slots,"main-nav-after")]),comment:o(()=>[a(n.$slots,"comment")]),footer:o(()=>[a(n.$slots,"footer")]),aside:o(()=>[a(n.$slots,"aside")]),"aside-custom":o(()=>[a(n.$slots,"aside-custom")]),default:o(()=>[a(n.$slots,"default")]),_:3},8,["frontmatter"])}}};export{x as default};