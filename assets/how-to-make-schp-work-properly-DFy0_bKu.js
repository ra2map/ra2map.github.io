import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang-DxC2i5ri.js";import{k as u,w as e,j as f,l as k,p,o as c,a as t,d as o,m as s}from"./app-DTK7MkJ3.js";import"./YunCloud-DCyQUbCJ.js";import"./tags-BE9ZZJqn.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-CUf0HJdH.js";import"./YunCard.vue_vue_type_script_setup_true_lang-BEU4nSCu.js";import"./YunPostMeta.vue_vue_type_style_index_0_lang-BeL1C_Sa.js";import"./index-kt1v7PTw.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CQk4e2hF.js";import"./post-TpcOcCSC.js";const I={__name:"how-to-make-schp-work-properly",setup(g,{expose:m}){const r=JSON.parse('{"title":"如何让武装直升机正常起来","description":"","frontmatter":{"title":"如何让武装直升机正常起来","date":"2015-07-04","updated":"2015-07-04","categories":["其他教程","细节"],"tags":["进阶"],"author":"竹蜻蜓(Heli)","sponsor":false},"headers":[],"relativePath":"pages/posts/how-to-make-schp-work-properly.md","path":"C:/code/web/valaxy-blog/pages/posts/how-to-make-schp-work-properly.md","lastUpdated":null}'),n=k(),l=r.frontmatter||{};return n.meta.frontmatter=Object.assign(n.meta.frontmatter||{},r.frontmatter||{}),p("pageData",r),p("valaxy:frontmatter",l),globalThis.$frontmatter=l,m({frontmatter:{title:"如何让武装直升机正常起来",date:"2015-07-04",updated:"2015-07-04",categories:["其他教程","细节"],tags:["进阶"],author:"竹蜻蜓(Heli)",sponsor:!1}}),(a,i)=>{const d=h;return c(),u(d,{frontmatter:f(l)},{"main-content-md":e(()=>i[0]||(i[0]=[t("blockquote",null,[t("p",null,[o("Ra2map：本文转载自"),t("a",{href:"http://pkuit.com/forum.php?mod=viewthread&tid=169996",target:"_blank",rel:"noreferrer"},"【任务制作者请进】关于如何让武装直升机正常起来 - 红警任务之家"),o("，未转载评论区。")]),t("p",null,[o("Ra2map：另请参阅"),t("a",{href:"https://bbs.ra2diy.com/forum.php?mod=viewthread&tid=14468",target:"_blank",rel:"noreferrer"},"让AI正确使用武直的姿势【完善版】 - ra2diy")])],-1),t("p",null,"相信有很多任务制作者都碰到过一个现象：在任务中用援军小队召唤出的武装直升机有点不太正常，不仅没法探开黑幕，还不会受到敌人的主动攻击。更恼人的是，脚本对它还不起控制作用，它只会在出生点附近乱转，不会执行下一步动作。只有部署一次再升起，才会恢复正常。",-1),t("p",null,"这个Bug不仅YR原版中存在，在mod——MO（心灵终结）里面也仍然存在。【就在BJ，朝鲜的铁龙坦克那关里，这个Bug很影响游戏进行。】",-1),t("p",null,"有些人已经注意到了，我在未完成但是已经发布的《忠诚或死亡》任务中大量的使用了武装直升机，用脚本控制也没什么异常。为什么呢？因为我改了INI：",-1),t("div",{class:"language-ini vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ini"),t("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[t("code",{"v-pre":""},[t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[SCHP]")]),o(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"SpeedType"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Winged"),t("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";原版是Hover")]),o(`
`),t("span",{class:"line highlighted"},[t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"BalloonHover"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=yes"),t("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";原版没有")])])]),t("button",{class:"collapse"})],-1),t("p",null,"经测试，加上这两条代码，武直就变得特别听话啦，能探开地图，脚本也能对它进行正常的控制，敌人也会主动打它。",-1),t("p",null,[o("具体原理我还不太清楚，但确实能用。注意"),t("code",null,"BalloonHover=yes"),o("是必须的，否则直升机闲得没事就会往地上落（像夜鹰直升机一样）。而"),t("code",null,"BalloonHover=yes"),o("不阻碍直升机部署时落地，因为武装直升机本身就有"),t("code",null,"DeployToLand=yes"),o("。")],-1),t("p",null,"希望这个东西对任务制作者们有些帮助【可以自由的用武装直升机来进攻或巡逻啦】。",-1),t("p",null,"有帮助就请赞一个~",-1),t("p",null,"同时祝辛勤的任务制作者们做出更棒的任务！",-1),t("p",null,"注：如果你不懂INI是什么，请自行恶补基础知识。",-1)])),"main-header":e(()=>[s(a.$slots,"main-header")]),"main-header-after":e(()=>[s(a.$slots,"main-header-after")]),"main-nav":e(()=>[s(a.$slots,"main-nav")]),"main-content":e(()=>[s(a.$slots,"main-content")]),"main-content-after":e(()=>[s(a.$slots,"main-content-after")]),"main-nav-before":e(()=>[s(a.$slots,"main-nav-before")]),"main-nav-after":e(()=>[s(a.$slots,"main-nav-after")]),comment:e(()=>[s(a.$slots,"comment")]),footer:e(()=>[s(a.$slots,"footer")]),aside:e(()=>[s(a.$slots,"aside")]),"aside-custom":e(()=>[s(a.$slots,"aside-custom")]),default:e(()=>[s(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{I as default};
