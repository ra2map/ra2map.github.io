import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang-DxC2i5ri.js";import{k,w as s,j as g,l as d,p as r,o as m,a as l,d as n,m as a}from"./app-DTK7MkJ3.js";import"./YunCloud-DCyQUbCJ.js";import"./tags-BE9ZZJqn.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-CUf0HJdH.js";import"./YunCard.vue_vue_type_script_setup_true_lang-BEU4nSCu.js";import"./YunPostMeta.vue_vue_type_style_index_0_lang-BeL1C_Sa.js";import"./index-kt1v7PTw.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CQk4e2hF.js";import"./post-TpcOcCSC.js";const N={__name:"mission-tips",setup(E,{expose:o}){const e=JSON.parse('{"title":"任务制作细节经验","description":"","frontmatter":{"title":"任务制作细节经验","date":"2016-02-12","updated":"2019-01-17","categories":["其他教程","细节"],"tags":["入门"],"author":"轻稚天雪，NOG等","time_warning":true},"headers":[{"level":2,"title":"任务制作细节 1","slug":"任务制作细节-1","link":"#任务制作细节-1","children":[]},{"level":2,"title":"任务制作细节 2","slug":"任务制作细节-2","link":"#任务制作细节-2","children":[]},{"level":2,"title":"任务制作细节 3","slug":"任务制作细节-3","link":"#任务制作细节-3","children":[]},{"level":2,"title":"地图制作细节","slug":"地图制作细节","link":"#地图制作细节","children":[]},{"level":2,"title":"NOG给资深 maper 的话","slug":"nog给资深-maper-的话","link":"#nog给资深-maper-的话","children":[]},{"level":2,"title":"任务制作提示","slug":"任务制作提示","link":"#任务制作提示","children":[]}],"relativePath":"pages/posts/mission-tips.md","path":"C:/code/web/valaxy-blog/pages/posts/mission-tips.md","lastUpdated":null}'),p=d(),t=e.frontmatter||{};return p.meta.frontmatter=Object.assign(p.meta.frontmatter||{},e.frontmatter||{}),r("pageData",e),r("valaxy:frontmatter",t),globalThis.$frontmatter=t,o({frontmatter:{title:"任务制作细节经验",date:"2016-02-12",updated:"2019-01-17",categories:["其他教程","细节"],tags:["入门"],author:"轻稚天雪，NOG等",time_warning:!0}}),(i,u)=>{const c=h;return m(),k(c,{frontmatter:g(t)},{"main-content-md":s(()=>u[0]||(u[0]=[l("div",{class:"danger custom-block"},[l("p",{class:"custom-block-title"},[l("span",{lang:"en"},"DANGER"),l("span",{lang:"zh-CN"},"警告")]),l("p",null,"本文很多内容未经测试，可能是错误或过时的")],-1),l("h2",{id:"任务制作细节-1",tabindex:"-1"},[n("任务制作细节 1 "),l("a",{class:"header-anchor",href:"#任务制作细节-1","aria-label":'Permalink to "任务制作细节 1"'},"​")],-1),l("blockquote",null,[l("p",null,"作者：未知")],-1),l("p",null,[l("strong",null,"如何改变单位和建筑的属性"),n("：使用ini编辑器，新建要改变属性的单位和建筑的section，如果已有则在原基础上修改。新建section的名字是rules.ini文件中的登录名。然后再新建要修改的属性项，并设定它的值。")],-1),l("p",null,[l("strong",null,"一个使某块地区自动散去迷雾的办法"),n("：在那里设一栋平民建筑，把OWNER设为自己的一方。当然也可以放置其他部队。")],-1),l("p",null,"环境光线的绝对值在lighting中是小数，在触发事件中则用0到100的数相对应。",-1),l("p",null,"要在间谍进入建筑后触发一个事件，不是用spied upon，而是用entered by，为了保证是由间谍进入的，可以单独赋予间谍一个阵营；也可以把要进入的建筑的Capturable属性改为no。",-1),l("p",null,"关于招募：用Create Team创建的小队可以招募业已存在的单位（即使在Team设置中并没有选定recruiter）。前提是这些单位必须是可被招募的，同时已完成其本身的任务，处于空闲状态。如果没有可招募的单位，则另外生产。Reinforcement和Create的区别：前者纯粹是额外收获，后者必须从工厂出来或招募而来。",-1),l("p",null,"要使几个任务关一关接一关地执行下去，必须把它们放在同一个目录层次下。",-1),l("p",null,"在rules.ini的IQ设置中规定了每一个IQ级别的AI会做什么事情。在FA的House中可以设置每一阵营的IQ是什么级别。如果人类玩家的IQ被设为高级别，则建筑会自动修复，部队也会变得更有攻击性。如果电脑玩家的IQ被设得很低，也许它不会自动修复建筑，即使建筑的属性是自动修复的。但较高的IQ也会出现一个问题，那就是电脑会制造一些你不想它制造的部队。这时候的解决办法一般是使预设的自动制造AI触发失效。注意，不要在其他的触发事件中出现auto create teams…",-1),l("p",null,[l("s",null,"如何把RA的地图改成YR的地图：首先，确认在FA的settings中选定了支持MOD。然后打开原来的文件，在上面随便加个YR中特有的建筑，再另存为all01umd.map就可以了。")],-1),l("p",null,[l("strong",null,"如何在一栋建筑受到攻击时发出警告"),n("：首先，该触发事件（1#）是可重复的，一开始即被激活。其Event是所附的建筑受到攻击，其Action是发出文字、声音或雷达警告。但光是这样还不够。因为敌人的攻击不是一下子就结束的，于是便会有一个恼人的结果，那就是警告发了又发，发到你烦。")],-1),l("p",null,"为了解决这个问题，必须对该触发事件进行一定的改造。我的方法是：另外再设一个2#触发事件，也是可重复的，一开始是不起作用的。其Event是经过一定的时间，其Action是激活1#并使其自身（2#）失效。再在1#的Action中加两条，激活2#并使其自身（1#）失效。于是，整个的逻辑链条就是：受攻击—发出警告—1#失效（暂时不再发出警告）—激活2#—经过一定的时间—激活1#并使2#失效，如此循环往复。",-1),l("p",null,"使用流星雨时，尺寸定为7时效果最好。",-1),l("p",null,"在编辑多人地图时，可用代码4475~4482来代替玩家1~8的阵营。它们的名称分别是 <Player @ A> <Player @ B>…… <Player @ H>",-1),l("p",null,"可以设置平民建筑的价值为很高的值，这样摧毁该建筑的部队就可直接升到三级",-1),l("h2",{id:"任务制作细节-2",tabindex:"-1"},[n("任务制作细节 2 "),l("a",{class:"header-anchor",href:"#任务制作细节-2","aria-label":'Permalink to "任务制作细节 2"'},"​")],-1),l("blockquote",null,[l("p",null,"作者：zxzx695940792，红警任务之家")],-1),l("p",null,[l("strong",null,"1、总是怕大量伞兵降不下来，或者是降落点太集中，没有比较宏大的场面？")],-1),l("p",null,"用记事本打开地图，加入以下代码",-1),l("div",{class:"language-ini vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"ini"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[General]")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ParaDropRadius"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=数据")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"PrismSupportModifier"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=150%")])])]),l("button",{class:"collapse"})],-1),l("p",null,"原数据为1024，不建议改太大，原先的3-7倍效果比较好。",-1),l("p",null,"如果想让兵力集中，把这个数据改小就可以了。",-1),l("p",null,"如果参数越大，飞机到来的时间也会相对延后，同时也会适当偏离原先的路径点，所以把握好这个数据的值。",-1),l("p",null,[l("strong",null,"2、灵活运用一些效果，让任务看起来更有感觉")],-1),l("p",null,"这里只谈几个：",-1),l("ol",null,[l("li",null,[l("strong",null,"88 粒子动画"),n("是一个不错的选择，尤其再配上音效，效果会更好，比如烟气和信号弹的声音组合，再比如篝火上方的烟雾。——原版RA2 暗夜一关")]),l("li",null,[l("strong",null,"49 放大视野 与 50 缩小视野"),n("，这两个可以集中到当前视野，并且放大（或缩小）。再配上音效SpyPlaneSnapShot，即侦察机的拍照声，可以得到侦察机拍摄的即视效果。——FlyingZ 《标靶（又名聚宝盆）》")])],-1),l("p",null,[l("strong",null,"3、关于秘密科技实验室")],-1),l("p",null,"秘密科技实验室可以允许作战方拥有一些本没有的单位，当然这些单位也是可以修改的。代码如下：",-1),l("div",{class:"language-ini vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"ini"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[General]")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"SecretInfantry"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=SNIPE,TERROR,DESO,YURI "),l("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";步兵单位")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"SecretUnits"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=TNKD,TTNK,DTRUCK "),l("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";装甲单位")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"SecretBuildings"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=GTGCAN "),l("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},";建筑单位")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"PrismSupportModifier"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=150%")])])]),l("button",{class:"collapse"})],-1),l("p",null,"更改之后，可以让占领实验室之后出现的单位按任务要求改变（虽然是一次性的。。。）——ConColor1 《机器人**》",-1),l("p",null,[l("strong",null,"4、“禁飞区”")],-1),l("p",null,[n("除了进入事件之外，还有一个比较好用的事件——"),l("strong",null,"59 进入或飞越"),n("。使用方法和进入事件相同。只是关联这个触发的单元标记，可以放在陆军单位不能上去的悬崖上，创造“禁飞区”的感觉。当然还有一点，单位子机、运输机、侦察机进入标记也会有效。比如航母里面的小飞机，比如Boris召唤的米格，再比如最普通的火箭飞行兵。——FlyingZ 《西木三人组》")],-1),l("p",null,[l("strong",null,"5、118 清除全部污染 的使用方法")],-1),l("p",null,"所谓污染，就是指地图上留下的焚烧效果、弹坑效果。而清除全部污染就是消除这些效果，利用这个可以做一些创造性的想法。",-1),l("p",null,"比如在地图的同一个地点、不同时间发生的任务，由于弹坑可能会影响到剧情发展或者美观性，可以利用这个触发。——FlyingZ《山丘之王》",-1),l("p",null,"另外对于以上这种任务，还有一些触发是可以灵活运用的，比如(i)52 更改照明状态 (ii)125 将建筑建于 (iii)126 恢复至游戏初始科技状态（包括建筑与单位） (iv)130 恢复初始建筑（仅仅包含建筑） 等等许多触发，读者可以自行尝试。",-1),l("p",null,[l("strong",null,"6、关于全局变量")],-1),l("p",null,"这个一般在多关任务中运用，可以使得玩家的不同操作，导致游戏的不同结果。在原版RA2中，体现在盟军第三关和第六关。如果玩家在第三关中摧毁了地图上的地标建筑，那么对应的建筑在第六关中将会被摧毁。",-1),l("p",null,"PS.当然，如果全局变量仅仅这样用就太浪费了，还是注重一点：玩家的不同操作，可以导致游戏的不同结果。",-1),l("h2",{id:"任务制作细节-3",tabindex:"-1"},[n("任务制作细节 3 "),l("a",{class:"header-anchor",href:"#任务制作细节-3","aria-label":'Permalink to "任务制作细节 3"'},"​")],-1),l("blockquote",null,[l("p",null,"作者：NOG")],-1),l("p",null,[l("strong",null,"1.这是什么情况……怎么有多工程师？难道玩家所属方不能为新建的所属方？")],-1),l("p",null,"解决办法……记事本打开任务写入",-1),l("div",{class:"language-ini vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"ini"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[ENGINEER]")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"RequireHouses"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=British,French,Germans,Americans,Alliance")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Prerequisite"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Barracks")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[SENGINEER]")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"RequireHouses"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Russians,Confederation,Africans,Arabs")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Prerequisite"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Barracks")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[YENGINEER]")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"RequireHouses"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=YuriCountry")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Prerequisite"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Barracks")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[ADOG]")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"RequireHouses"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=British,French,Germans,Americans,Alliance")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Prerequisite"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Barracks")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[DOG]")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"RequireHouses"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Russians,Confederation,Africans,Arabs")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Prerequisite"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=Barracks")])])]),l("button",{class:"collapse"})],-1),l("p",null,[l("strong",null,"2.关联触发到底怎么用…………到底如何多触发关联一建筑")],-1),l("p",null,[l("s",null,"先设置一个触发A，关联到目标，然后设置另一个触发B，触发选项里选上关联触发A：触发B→触发A→目标")],-1),l("p",null,[l("strong",null,"3.播放音效注意事项")],-1),l("ul",null,[l("li",null,"98 播入音效(随机路径点)"),l("li",null,"99 播放音效…")],-1),l("p",null,"这两个触发类型不需要选择“2-重复”，因为他们本身就具有重复的效果",-1),l("p",null,[l("strong",null,"4.雷达事件是什么？")],-1),l("p",null,[n("就是基地被攻击时雷达图上的闪现小方框……有红黄蓝三种颜色，触发参数"),l("code",null,"0、3、4红色，1、2黄色，5蓝色")],-1),l("p",null,[l("strong",null,"5.如何让AI固定时间出固定的兵？")],-1),l("p",null,"条件13 流逝时间，动作4 建立小队，电脑将会先调用空闲单位，如果不够的话就会建造这个小队",-1),l("p",null,[l("strong",null,"6.基底节点有什么用？")],-1),l("p",null,"建立节点删除建筑就是让电脑在这个地方造建筑，建立节点不删除建筑就是这个建筑被毁后重建，顺序是按放置节点的顺序",-1),l("p",null,[l("strong",null,"7.如何让开场的矿车采矿？")],-1),l("p",null,"放在地图上的矿车开局不会自动采矿，是不是很无语？双击它，状态选择Harvest【区域巡逻守卫也可】",-1),l("p",null,[l("strong",null,"8.如何让一个小队做完指定的事情后开始某个触发？")],-1),l("p",null,"首先建一个局部变量，在小队的脚本最后加上一个局部设置，参数选择你新建的局部变量，然后触发的条件为36 局部设置开始…局部变量就是上面建立的啦……",-1),l("p",null,"这样，当这个小队做完他的事情之后，触发就会开始……",-1),l("p",null,[l("strong",null,"任务中途天黑")],-1),l("ul",null,[l("li",null,"71 设置环境步幅…"),l("li",null,"72 设置环境速率…"),l("li",null,"73 设置环境亮度…")],-1),l("p",null,"天亮天黑，在《任务制作核心内容中》提到 71 设置环境步幅… （一般使用1020000000） 72 设置环境速率… （一般使用1036000000）",-1),l("ul",null,[l("li",null,"142 重绘红色"),l("li",null,"143 重绘绿色"),l("li",null,"144 重绘蓝色")],-1),l("p",null,"重新自定义地图的ＲＧＢ。",-1),l("div",{class:"warning custom-block"},[l("p",{class:"custom-block-title"},[l("span",{lang:"en"},"WARNING"),l("span",{lang:"zh-CN"},"注意")]),l("p",null,"建筑与单位的颜色可能会出现异常")],-1),l("p",null,[l("strong",null,"使用触发 41 “播放动画在…”")],-1),l("p",null,"超时空效果 257号，附各种箭头的动画标号，用的上的：",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"向下指示 475号")]),n(`
`),l("span",{class:"line"},[l("span",null,"向下 483号")]),n(`
`),l("span",{class:"line"},[l("span",null,"向左 482号")]),n(`
`),l("span",{class:"line"},[l("span",null,"向右 481号")]),n(`
`),l("span",{class:"line"},[l("span",null,"向上 480号")]),n(`
`),l("span",{class:"line"},[l("span",null,"左上 479号")]),n(`
`),l("span",{class:"line"},[l("span",null,"左下 477号")]),n(`
`),l("span",{class:"line"},[l("span",null,"右上 476号")]),n(`
`),l("span",{class:"line"},[l("span",null,"右下 478号")])])]),l("button",{class:"collapse"})],-1),l("h2",{id:"地图制作细节",tabindex:"-1"},[n("地图制作细节 "),l("a",{class:"header-anchor",href:"#地图制作细节","aria-label":'Permalink to "地图制作细节"'},"​")],-1),l("blockquote",null,[l("p",null,"作者：尤里·加特林")],-1),l("p",null,[l("strong",null,"【任务地图转遭遇战地图】"),n(" 新建地图里面不是有一个导入地图或BMP么。选择任务地图，然后把下面的三个选项打勾。完成。")],-1),l("p",null,[l("strong",null,"【提取地图】"),n(" 红色警戒的地图大都封装在这里，用XCC Mixer 打开，至于下载地址自行百度。")],-1),l("ul",null,[l("li",null,"Maps01.mix 原版盟军任务"),l("li",null,"Maps02.mix 原版苏军任务"),l("li",null,"Multi.mix 原版地图"),l("li",null,"Multimd.mix 尤里地图")],-1),l("p",null,[l("strong",null,"【随机地图】"),n(" 利用NP的地图截取功能可以截取随机地图：修改KeyBoardMD.ini——MapSnapshot=595 ;(595 = Ctrl+S)。如果此时玩游戏，按下Ctrl+S就会保存地图在yuri文件夹里，以后可以用地图编辑器进行编辑。做任务时可以用用，很节省时间。不过最好不要用随机地图糊弄玩家，其实我追喜欢用随机地图了，哈哈哈哈因为我的NP连触发，建筑小路都可以随机哟~至于Np是什么，怎么来的，不重要。会用就行了。我网盘里面有NP随便选一个就可以。工具-NP。")],-1),l("p",null,[l("strong",null,[n("在地图内部进行INI修改的时候，如果重定义过"),l("code",null,"[General]"),n("，一定要重定义下面，")]),n(" 以免出现 BUG塔现象。【注：多光棱塔连接伤害暴涨】")],-1),l("div",{class:"language-ini vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"ini"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"PrismSupportModifier"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=150%")])])]),l("button",{class:"collapse"})],-1),l("p",null,"由于地图内部没有art定义，所以新增单位时必须使用一个有Art的单位重定义。否则就是对玩家隐形了。。。",-1),l("p",null,"newurban地形支持隧道，不过需要TX编辑器。隧道不一定非要安在山崖上，平地里也可以做个诡异的穿越。",-1),l("p",null,"画小路是很多maper的噩梦。。包括我，没什么好的办法。。。你可以先用一种易辨认的地表 画出小路，然后再进行小路绘制。。。",-1),l("p",null,"悬崖背面想做的好看一些的话，，尽量使用拐角画。不要有太长直线。",-1),l("p",null,"灯光不要弄得太黑。。也不要太瞎眼。。有颜色的灯光要成片用，不要单个使用。",-1),l("p",null,"树可以种在悬崖上。。就是红色线那里，增强立体感与真实感。",-1),l("p",null,"【城市地图】不要留下锯齿形的地表。除非你是故意的。用覆盖图里面的XXX交界处修复即可。 公路与小路衔接不畅？用复制功能解决。",-1),l("p",null,"斜坡是个大问题。。前面的斜坡很容易，悬崖背面的需要三个合在一起才对。",-1),l("h2",{id:"nog给资深-maper-的话",tabindex:"-1"},[n("NOG给资深 maper 的话 "),l("a",{class:"header-anchor",href:"#nog给资深-maper-的话","aria-label":'Permalink to "NOG给资深 maper 的话"'},"​")],-1),l("blockquote",null,[l("p",null,"作者：NOG")],-1),l("p",null,[l("strong",null,"新手常犯的错误：")],-1),l("ol",null,[l("li",null,"在删除某个Trigger,Team,Taskforce,Script时只删了其中的一个部分，而不是删除其整体。"),l("li",null,"由于新建的Script并非默认的当前Script，很容易编辑了其他的Script，自己还以为在编辑新Script。"),l("li",null,"在写Trigger时把House选项弄错了。"),l("li",null,"不知道使用不同的环境同一事物有不同的效果。")],-1),l("p",null,[l("strong",null,"如何让援兵坐在运兵船中进入地图")],-1),l("ul",null,[l("li",null,"第一步：设定两个路径点，一个是运兵船出来的地点，ID为66，放在地图边界外面；另一个是士兵下船的地点，ID为67。（也可以设为其他的ID）"),l("li",null,"第二步：创建一个Taskforce，叫做GIinTransport,由五个大兵和一艘运兵船组成。"),l("li",null,"第三步：写Script。取名为ReinforceGI，设四个Action,第一个是Move to Waypoint，参数是67。第二个是Unload，参数为1（保留交通工具，丢掉其他部队，也就是说只有交通工具会执行接下来的步骤）。第三个是 Move to Waypoint，参数是66。第四个是Self Destruct。"),l("li",null,"第四步：设置Team。也取名为ReinforceGI, Waypoint项设为66，Script和Taskforce就是前面提到的。对话框下面的选项仅保留一个Full（这样部队就会在运兵船中）。"),l("li",null,"第五步：写Trigger。Event是13 Elapsed Time…；Action是4 Reinforcement Team…,参数是ReinforceGI。")],-1),l("p",null,[l("strong",null,"如何让士兵坐进IFV")],-1),l("p",null,"要点就是把士兵和IFV编为一队，注意Team的Full选项不能打勾。然后让他们从一个地点移动至另一个地点，再执行load onto transport。(注意：该方法不能用于运兵船和直升机，否则会产生奇怪的结果）",-1),l("p",null,[l("strong",null,"如何让士兵占领建筑")],-1),l("p",null,"在RA中，直接在建筑物上设一个waypoint，然后在script中让士兵攻击此waypoint即可。在 YR中复杂一些。打开ini编辑器，找到要用的script, 新建一个action值，参数分别为64,0,士兵就会占领最近的建筑物。也可以用记事本打开地图文件直接编辑。但是，这个参数有极大的不稳定性。在改完之后，不要再回Script Editor去编辑该Script，否则，由于FA本身不支持该参数，会将64,0改成其他值，后果变得不可预料。",-1),l("p",null,[l("strong",null,"如何让工程师进入建筑")],-1),l("p",null,"就是让他Attack Enemy Buidings。注意，这只对AI有效。玩家的工程师好像没那么聪明，他只会走进去走出来，而不会占领。真是奇怪。",-1),l("p",null,[l("strong",null,"如何让电脑的部队从重工和兵营中出来")],-1),l("p",null,"首先，需要一个触发事件来启动。比如：Production begins…Auto base building… Autocreate Begins…, 或者预设的自动建造触发事件（包含了前面的两个action）。 在trigger的action中设create team，把waypoint的值也空出来。",-1),l("p",null,[l("strong",null,"关于制造前提"),n("：大部分的制造前提对AI来说是无用的，只要有地方让部队出来即可，只有RequiredHouse和FobiddenHouse是例外。")],-1),l("p",null,[l("strong",null,"如何让电脑自动造建筑")],-1),l("p",null,"在trigger的action中设create building或auto create base buildings。有几点要注意：",-1),l("ul",null,[l("li",null,"一、首先AI要拥有足够的金钱和一个建造厂，这一点十分重要。"),l("li",null,"二、如果设定了BASE NODE，则电脑一旦开始建造NODE指示的建筑，就不再建造其他建筑。如果没有，则电脑会自行其事，造它认为合适的本阵营的建筑，效果和遭遇战模式相仿佛。"),l("li",null,"另外，之前要有一个触发事件来启动。比如Production begins…Auto base building…或者预设的自动建造触发事件。")],-1),l("p",null,"在战机的script中，不要轻易使用Move to waypoint，就象在实战中战机不能使用路径点一样，如果在任务地图中让战机执行类似操作，比如从创建点飞到一个地点，然后再攻击敌人的建筑物，则战机在飞抵指定地点后会坠毁。“坠毁是因为没有机场 在图外放一个和飞机相同所属方的机场就可以”",-1),l("p",null,"Elapse Time…指的是Trigger被激活之后过的时间，Trigger一般在开始的时候即被激活，除非被Disable掉。",-1),l("p",null,"编辑RA的地图时，要在编辑器的选项栏直接选只用于RA，否则会出现内部错误。",-1),l("p",null,"如果让一队战机同时出来执行任务，它们通常是重叠在一起的，看上去就像一架似的。解决这个问题的办法是TaskForce只设一架战机，在被触发时执行同样的Action几次。由于时间上有先后，出来时就不会重叠了。",-1),l("blockquote",null,[l("p",null,"也可以使用80号行为在多个地点刷出来")],-1),l("p",null,"以下Action仅在YR中起作用，且不能通过Script Editor获得，而只能通过INI Editor或者直接用记事本打开地图文件设定。",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"59,X : 进入路径点 (X)的建筑")]),n(`
`),l("span",{class:"line"},[l("span",null,"60,0 : 进入碾磨机")]),n(`
`),l("span",{class:"line"},[l("span",null,"61,0 : 进入坦克碉堡")]),n(`
`),l("span",{class:"line"},[l("span",null,"62,0 : 进入生物电站")]),n(`
`),l("span",{class:"line"},[l("span",null,"63,0 : 进入最近的拥有的建筑（比如战斗碉堡）")]),n(`
`),l("span",{class:"line"},[l("span",null,"64,0 : 进入最近的平民建筑")])])]),l("button",{class:"collapse"})],-1),l("p",null,"下一关在Battle.ini中设置。【NOG注：也就是任务每一关的文件名】",-1),l("p",null,"在csf文件的loadbrief包含了每个任务关的启动前文本和每个国家的特色介绍。GUI包含了超过平均时间和在平均时间以下的游戏结束文字。具体的设置可以用记事本打开地图，在以下字段中编辑：【NOG注：这个在任务中很重要，没有这个任务不完整啊】",-1),l("div",{class:"language-ini vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"ini"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"[Ranking]")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ParTimeEasy"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=00:15:00")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ParTimeMedium"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=00:10:00")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"ParTimeHard"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=00:06:00")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"UnderParTitle"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=GUI:ParTitleALL02")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"UnderParMessage"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=GUI:UnderParMsgALL01")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"OverParTitle"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=GUI:ParTitleALL01")]),n(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"OverParMessage"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"=GUI:OverParMsgALL01")])])]),l("button",{class:"collapse"})],-1),l("p",null,"在YR中，有一个回到过去的效果，其实是把一张地图分成两半。开始时有一半是不可见的，触发后先执行一个满屏时空转移效果（127 Chrono Screen Effect for …），再执行40 Resize Player View… 在Resize Player View…这个Action中，四个参数的意义和说明不符，分别为：Bottom高度，Left左边界，Right宽度，Top上边界。",-1),l("p",null,"CreateSound=Dummy可以消除制造部队的声音。",-1),l("p",null,"RA2中隐藏的素材。",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"Aircraft:【灰机】")]),n(`
`),l("span",{class:"line"},[l("span",null,"FORTRESS - Looks like a stealth bomber")]),n(`
`),l("span",{class:"line"},[l("span",null,"ORCAB - Orca")]),n(`
`),l("span",{class:"line"},[l("span",null,"DSHP - Transport")]),n(`
`),l("span",{class:"line"},[l("span",null,"DPOD - Really small thingy")]),n(`
`),l("span",{class:"line"},[l("span",null,"SCRIN - Flying disc")]),n(`
`),l("span",{class:"line"},[l("span",null,"ORCATRAN - Looks kind of like the car from Back to the future")]),n(`
`),l("span",{class:"line"},[l("span",null,"Vehicles:【交通工具】")]),n(`
`),l("span",{class:"line"},[l("span",null,"SUBTANK - Kind of rectangular, maybe apc like")]),n(`
`),l("span",{class:"line"},[l("span",null,"2TNK - Really small tank")]),n(`
`),l("span",{class:"line"},[l("span",null,"FTNK - Old flame tank")]),n(`
`),l("span",{class:"line"},[l("span",null,"APC - APC")]),n(`
`),l("span",{class:"line"},[l("span",null,"4TNK - Small mammoth tank")]),n(`
`),l("span",{class:"line"},[l("span",null,"SONIC - Looks kind of like the prism tank")]),n(`
`),l("span",{class:"line"},[l("span",null,"STNK - Stealth Tank")]),n(`
`),l("span",{class:"line"},[l("span",null,"HVR - Hover MRLS")]),n(`
`),l("span",{class:"line"},[l("span",null,"BGGY - Nod Buggy")]),n(`
`),l("span",{class:"line"},[l("span",null,"ICBM - Weird thing that kind of looks like a V3")]),n(`
`),l("span",{class:"line"},[l("span",null,"在地图编辑时可以激活这些素材")])])]),l("button",{class:"collapse"})],-1),l("p",null,"如果不作设定，则货运飞机来的方向是随机的。在单人地图中，可以在team中设定cargo waypoint，那就是货运飞机起飞的地点。如果不用这个方法，可以在House中设定map edge，那个方向就是货运飞机来的方向。",-1),l("p",null,"油桶如果是属于平民方的，则在RA2中无法正常显示。",-1),l("p",null,"环境光线的绝对值在lighting中是小数，在触发事件中则用0到100的数相对应。",-1),l("p",null,[n("使桥断裂的方法：在桥上（桥下）放置路径点，在该点用触发63制造100点的破坏值，"),l("s",null,"多个重叠使用即可"),n("【注：一个即可】")],-1),l("p",null,[l("s",null,"把同一个对象附到不同触发事件上的方法：设有触发事件1和触发事件2，把对象附到触发事件1上，把触发事件2也附到触发事件1上，把触发事件2的Tag删掉，把两个触发事件都设为可重复。（本人注：Tag指标签，在标签编辑器中编辑删除Tag，这个很有用，也有很多人提问过）说明：每个触发事件应对应一个Tag。在一般情况下，Tag是随着触发事件的创建而自动生成的。如果把一个触发事件的Tag删除，则该触发事件不会被执行。可以把一个触发事件附到另一个触发事件上，这样两者便共享一个Tag。为防止混乱，可把所附触发事件本身的Tag删掉。由于触发事件上所附的其他对象实际上是附在其Tag上的，这样，共享一个Tag的两个触发事件便拥有同样的附件。对于不可重复的触发事件而言，执行一次后其Tag即失效。为了使共享一个Tag的两个触发事件都有效，该Tag必须是可重复的。")],-1),l("p",null,"在 rules.ini的IQ设置中规定了每一个IQ级别的AI会做什么事情。在FA的House中可以设置每一阵营的IQ是什么级别。如果人类玩家的IQ被设为高级别，则建筑会自动修复，部队也会变得更有攻击性。如果电脑玩家的IQ被设得很低，也许它不会自动修复建筑，即使建筑的属性是自动修复的。 但较高的IQ也会出现一个问题，那就是电脑会制造一些你不想它制造的部队。这时候的解决办法一般是使预设的自动制造AI触发失效。注意，不要在其他的触发事件中出现auto create teams…",-1),l("p",null,"作为被删除了建筑的BASE NODE，其原有属性不再存在。",-1),l("p",null,"不要把几个运输工具（运兵船等）编在一起，这样很容易导致死机。解决的办法是把同一个小队创建几次，每个小队包含一个运输工具。",-1),l("p",null,"综上所述，如果要电脑完全听话，最合理的方案是使预设的自动建造触发事件失效，然后创建一个自动建造基地的触发事件。建筑用BASE NODE，部队用CREATE TEAM.",-1),l("p",null,"【其实FA2里残留了太多的TS遗产】这些都是没用的被屏蔽的触发，需要在mod里加上才能用",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"43=陨星降落在...,0,29,0,0,0,0,1,0,0,将一陨星发送到特定的单元。,0,0,43")]),n(`
`),l("span",{class:"line"},[l("span",null,"44=离子风暴开始...,0,6,0,0,0,0,0,0,0,启动离子风暴，按顺序去年特定数目的游戏画面(帧)。,0,0,44")]),n(`
`),l("span",{class:"line"},[l("span",null,"45=离子风暴结束...,0,0,0,0,0,0,0,0,0,结束离子风暴进程。,0,0,45")]),n(`
`),l("span",{class:"line"},[l("span",null,"92=启动烈火风暴防御系统,0,0,0,0,0,0,0,0,0,启动某一作战方的烈火风暴防御系统。,0,0,92")]),n(`
`),l("span",{class:"line"},[l("span",null,"93=关闭烈火风暴防御系统,0,0,0,0,0,0,0,0,0,关闭某一作战方的烈火风暴防御系统。,0,0,93")]),n(`
`),l("span",{class:"line"},[l("span",null,"94=离子炮打击...,0,30,0,0,0,0,0,0,0,在特定的路径点实施离子炮打击。,0,0,94")]),n(`
`),l("span",{class:"line"},[l("span",null,"96=化学导弹打击...,0,30,0,0,0,0,0,0,0,在特定的路径点实施化学导弹打击。,0,0,96")]),n(`
`),l("span",{class:"line"},[l("span",null,"58=流星雨在...,0,44,0,0,0,0,1,0,0,在特定的路径点建立显示一个流星雨事件。,0,1,58")]),n(`
`),l("span",{class:"line"},[l("span",null,"59=在特定路径点减少矿石...,0,30,0,0,0,0,0,0,0,减少特定路径点周围的矿石。,0,0,59")])])]),l("button",{class:"collapse"})],-1),l("p",null,"【NOG注： 118 清除全部污染 (i)52 更改照明状态 (ii)125 将建筑建于 (iii)126 恢复至游戏初始科技状态（包括建筑与单位） (iv)130 恢复初始建筑（仅仅包含建筑） 可以与超时空事件效果配合，显示出穿越时间的效果，尤里官方任务第一关已经做出示范】",-1),l("p",null,[l("strong",null,"【如何写间谍渗透的脚本】"),n(" 这个其实很简单，先攻击敌人的步兵，再攻击敌人的建筑即可。。")],-1),l("p",null,[l("strong",null,"【为什么生存图中我要让步兵进入步兵车它都不听话】"),n(" 原因终于找到了。如果敌人只有基地车，而且无法展开基地车，它所有的单位都会使劲A你基地，即使你的脚本上写了警戒啊进入步兵车啊部署啊，它还是不听话，一出来就要A你基地。解决方法就是送敌军兵营和矿场矿车，同时统统用铁幕盖上（也可不用，视情况而定）")],-1),l("p",null,[l("strong",null,"【如何制作任务结束时买建筑进攻的触发？】"),n(" 一些任务需要HX掉敌军全部单位才能胜利，殊不知这样到任务后期进攻时特别的枯燥，因为如果有一个幻影藏着你就杯具了。。。2345123450987:“一个触发就够了,不用这样麻烦 条件一建筑不存在XXX,条件二建筑不存在XXX,条件三……。XXX为工厂类建筑。动作一全卖,动作二全搜”")],-1),l("p",null,"我推荐的做法是当敌军的战车工厂兵营建造厂全部被RF后就买建筑并且全军突击！！这样就不用找出隐藏的敌人，只要等敌人一个个进攻你的基地并被RF之后就可以胜利了。。",-1),l("p",null,"废话说了这么多，下面就是写法了",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"首先弄三个局部变量")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"触发1-3：")]),n(`
`),l("span",{class:"line"},[l("span",null,"·条件【48 被任何事物摧毁】（三个触发分别关联到战车工厂兵营建造厂上）")]),n(`
`),l("span",{class:"line"},[l("span",null,"·动作【56 局部设置...】填上第一个局部变量（后面的2个以此类推）")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"触发4：（这个触发禁止的勾要打上）")]),n(`
`),l("span",{class:"line"},[l("span",null,"·条件【13 流逝时间】 参数写3（当然别的数也可以）")]),n(`
`),l("span",{class:"line"},[l("span",null,"·动作【6 全部搜索...】参数就写敌军的所属方 ")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"触发5：")]),n(`
`),l("span",{class:"line"},[l("span",null,"·条件1【36 局部设置开始...】")]),n(`
`),l("span",{class:"line"},[l("span",null,"·条件2【36 局部设置开始...】")]),n(`
`),l("span",{class:"line"},[l("span",null,"·条件3【36 局部设置开始...】（三个条件同时存在） ")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"·动作1【9 卖掉全部建筑...】参数就写敌军的所属方")]),n(`
`),l("span",{class:"line"},[l("span",null,"·动作2【53 允许目标触发】 就是允许触发4啦")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"这样就行了。")])])]),l("button",{class:"collapse"})],-1),l("h2",{id:"任务制作提示",tabindex:"-1"},[n("任务制作提示 "),l("a",{class:"header-anchor",href:"#任务制作提示","aria-label":'Permalink to "任务制作提示"'},"​")],-1),l("blockquote",null,[l("p",null,"整理者：轻稚天雪")],-1),l("ul",null,[l("li",null,[l("p",null,"应当避免将可驻军平民建筑的所属方写成玩家，否则游戏开局副官会说“Structure abandon”；地编里直接修改需要工程师（NeedsEngineer=yes）的中立科技建筑（如油田、炮塔）所属方是不可取的，这会导致他们不生效（但医院和机械商店会生效），应该用触发“更改所属方”来实现；改变建筑方向可以改变游戏内炮塔的朝向（如哨戒炮）、照明方向或机场中飞机的朝向。")]),l("li",null,[l("p",null,[n("在更改地图时，有一句提示说“如果有单位、建筑、路径点等处于新地图区域之外将会被删除”，经测试，这一点"),l("strong",null,"有误"),n("。地图缩小之后，原来地图上被删除的部分（包括地形、单位、建筑、路径点）仍然存在，只不过跑到了地图外面。如果你再将地图扩大，你会发现这些东西又原封不动地变了回来。不仅如此，这些“地图外”的部分会对任务造成影响，如果有敌军基地，在开启了AI触发后甚至会造兵进攻。触发判定也会将地图外的部分考虑在内。")])]),l("li",null,[l("p",null,"需要招募小队时，只选取对应的组。例如需要让步兵进入直升机，若此“作战小队”分组为1，则只能招募分组为1的步兵和直升机。为避免因为玩家编队而导致的招募失败，应勾选“忽视分组”。")]),l("li",null,[l("p",null,"0.快捷键【D】键效果是把地图“拍平”，可以代替隐藏悬崖，免去不断点击隐藏悬崖的麻烦，但是对地图认知水平要求更高，建议在框架模式下使用。")]),l("li",null,[l("p",null,"1.想要做出消灭某个建筑→触发的效果时，注意不同的“消灭”方式（如犀牛轰掉、时空兵抹除、谭雅炸、占领卖出）导致的结果可能不同，设置不当则无法触发，任务卡壳，因此作图时要注意xxx被消灭类触发行为的选择。推荐用48号结果关联。也可用科技类型不存在（指的是地图和玩家建造栏中不存在XXX）。")]),l("li",null,[l("p",null,[n("2.触发中的触发类型，0，触发1次；2，；可重复触发；"),l("strong",null,"填1："),n(" 如果想要摧毁全部光棱塔后过关（需关联单位的那种触发条件），就要填1（填0或2都是只摧毁一个光棱塔就过关)，详见触发类型 1 参数说明。")])]),l("li",null,[l("p",null,"3.在地图中内置代码会大大增加游戏的可玩性、多样性。")]),l("li",null,[l("p",null,"4.作战小队若关联触发，则脚本至少需2个动作方可保证生效。")]),l("li",null,[l("p",null,[l("strong",null,"5.单关任务最好在[基本设置]里选最后一关=yes这样任务完成后就不会载入官方第二关了")])]),l("li",null,[l("p",null,[l("strong",null,"6.【新建地图中的98、99号路径点】规定刚进入游戏时的视野位置")])]),l("li",null,[l("p",null,[l("strong",null,"7.【注】: 遭遇战进入事件参数只有具体国家和-1有效（-1指的是任意国家）")])]),l("li",null,[l("p",null,"8.设置某单位的科技等级，填11是仅玩家不能造，填-1是玩家和AI都不能造")]),l("li",null,[l("p",null,[n("9.基本设置中的是否为官方地图选no才可"),l("strong",null,"联机传送"),n("，所以不要把自己的地图标榜成官方地图又联机")])]),l("li",null,[l("p",null,"10.**【自动修复】**如果人类玩家的IQ被设为高级别，则建筑会自动修复，部队也会变得更有攻击性。")]),l("li",null,[l("p",null,[n("11.如何做出像污水坑那样的辐射？"),l("a",{href:"http://tieba.baidu.com/p/3944030269",target:"_blank",rel:"noreferrer"},"http://tieba.baidu.com/p/3944030269")])]),l("li",null,[l("p",null,"12.Ctrl 是填充功能。。。不过最好不要用来画地表什么的。。某人喜欢用来画海，殊不知这样会整个海看起来一个样。。")]),l("li",null,[l("p",null,[n("13.在单人地图中，可以在作战小队中设定传送路径点，那就是空降部队的货运飞机起飞的地点。对于普通的空降或者侦察机，可以"),l("strong",null,"在所属方中设定地图边界，来规定伞兵飞机来的方向。"),n(" 如果不作设定，则货运飞机从地图上界来，如果那里有防空，伞兵就瞎了o(>﹏<)o")])]),l("li",null,[l("p",null,"14.环境光线的绝对值在lighting中是小数，在触发事件中则用0到100的数相对应。")]),l("li",null,[l("p",null,"15.关于帧数，900帧=1游戏分钟")]),l("li",null,[l("p",null,"16.用记事本打开地图后不分段，一团糟？改为用写字板打开即可。")]),l("li",null,[l("p",null,"17.心灵控制车巡逻的方向最好和玩家进攻的方向平行，磁电垂直")]),l("li",null,[l("p",null,"18.ATTACK这一脚本执行后会执行后续脚本，而进入状态→Hunt会卡在这一条脚本上")]),l("li",null,[l("p",null,"19.混编小队只会去打都能打到的单位")]),l("li",null,[l("p",null,[n("20.脚本里的游猎：搜索敌人并攻击，但是搜索的规则很智障，貌似是按照标号顺序搜索的，不会按照就近的方式搜索，然后就一群一群上来送死，你可以在rules里面"),l("strong",null,"设置HUNT模式可以自动反击"),n(),l("strong",null,"[Hunt]的Retaliate=yes"),n("，就不送死了，对海蝎来说用Hunt可以让它专注防空，不没事去怼驱逐舰")])]),l("li",null,[l("p",null,"21.判定“到达某个路径点成功”是到达这个路径点周围3x3的区域即是成功")]),l("li",null,[l("p",null,"22.到了地图外再执行后续脚本会出现异常")]),l("li",null,[l("p",null,"23.新增的尤里阵营作战方不能使用AI触发造盖特坦克，需要在YTNK的Owner中把新的作战方名字写上，其余坦克都没问题，唯独盖特")]),l("li",null,[l("p",null,"24. 步兵入驻平民建筑以后平民建筑仍然判定属于平民")]),l("li",null,[l("p",null,"25.用触发行为4，且选取地图上的单位组成小队时，请勿勾选自动建造")]),l("li",null,[l("p",null,"26.脚本的第一个动作尽量有一个移动类脚本，移动到路径点/巡逻到路径点/攻击路径点/游猎之类的，反正要尽量先动一下，否则有时候会很诡异（但是也有正常的时候），地图内部刷出的小队用的脚本貌似可以用分散打头，地图边缘刷出来的就要先走进地图内部")]),l("li",null,[l("p",null,"27.触发条件48被任何事件摧毁，可被占领和更改所属触发")]),l("li",null,[l("p",null,"28.一个触发办不到的事情几个触发加在一起也办不到，触发组合可以实现复杂的逻辑，但是不能实现单个触发没有的功能")]),l("li",null,[l("p",null,"29.装在运输里面的单位不算在地图上的单位，有时进了建筑的也不算")]),l("li",null,[l("p",null,"30.地图编辑器不要和游戏、外挂同时运行")]),l("li",null,[l("p",null,"31.地图里面很多全局设置是无效的")]),l("li",null,[l("p",null,"32.RULS文件的最后一行不读，编写时最后应该空上几段")]),l("li",null,[l("p",null,"33.记事本不能做某事时换用写字板")]),l("li",null,[l("p",null,"34.文本信息中“·”这个符号会造成异常")]),l("li",null,[l("p",null,"35.弹头影响范围yr平台限制最大cellspread=10否则弹框")]),l("li",null,[l("p",null,"36.辐射只能填整百（100至500）")]),l("li",null,[l("p",null,"37.武器射程-2为全图攻击")]),l("li",null,[l("p",null,"38.能不能在在载具里开火要进行一下判定：1.该载具是否允许装载单位开火。2.载具内单位是否能够向外射击。3.这个武器能否向外射击。")]),l("li",null,[l("p",null,"39.各种单位在使用Attack和Hunt搜索目标的时候，只会搜索投影位置在自己可以移动到的范围内的单位的目标")]),l("li",null,[l("p",null,"“投影”这个，比如空军从海上飞到陆地上的一刹那，海军防空就对它失去兴趣了")]),l("li",null,[l("p",null,"40.平 House不能与玩家共享视野")]),l("li",null,[l("p",null,"41.任务卡在载入界面？关联触发有问题。1关联2,2就别再关联1了。")]),l("li",null,[l("p",null,"42.怎么样改才能让蜘蛛不会和寄生对象同归于尽？原版中，只要恐怖机器人这些寄生型单位感染其他坦克时，在感染期间，被感染坦克受到伤害大于SuppressionThreshold后面的值，那蜘蛛就会一起被杀死，当然把数值改大就可以实现不被杀死。by-lydjjlyd")]),l("li",null,[l("p",null,"43.被任意作战方摧毁和局部设置，在触发类型为1的条件下，无法连用，如果触发条件是0或2可以")]),l("li",null,[l("p",null,"44.惊慌脚本需要重复（跳转到行号）")]),l("li",null,[l("p",null,"45.单位的升级经验是按照击杀单位和对方等级的价格来算的")]),l("li",null,[l("p",null,"46.在地图编辑器显示新素材：素材放在mix里并且rulesmd直接放在游戏目录下")]),l("li",null,[l("p",null,[n("47.自己制作的任务不能读档，参见"),l("a",{href:"http://www.pkuit.com/forum.php?mod=viewthread&tid=170442",target:"_blank",rel:"noreferrer"},"http://www.pkuit.com/forum.php?mod=viewthread&tid=170442")])]),l("li",null,[l("p",null,[n("48.工厂生产的单位并不就近停靠，而是尝试向地图上的最小路径点靠近，请参见"),l("a",{href:"http://www.pkuit.com/forum.php?mod=viewthread&tid=201314",target:"_blank",rel:"noreferrer"},"http://www.pkuit.com/forum.php?mod=viewthread&tid=201314")])]),l("li",null,[l("p",null,"49.怎样让建筑被打时不发出警报？加代码Isignificant=yes")]),l("li",null,[l("p",null,"50.遭遇战里的进入事件只能对-1（任意一所属方）、平民和治安有效")]),l("li",null,[l("p",null,"51.可以用计时器/显示文本定位出问题的触发，比如恰好在核弹倒计时剩3分钟时弹框了，那么有可能是流逝时间7*60=420游戏秒时的某个触发有问题；在某个触发的结果加上11显示文本（参数可以随便填），如果游戏中显示了，那么证明这个触发成功启动了。")]),l("li",null,[l("p",null,"52.遭遇战任务地图互转方法：复制全部地形+居中粘贴或新建时导入。导入会连同单位关联的标签导入导致出错，不推荐。")]),l("li",null,[l("p",null,"请不要在不可通行的地块，比如悬崖上面，放置围墙等覆盖物，否则战斗要塞开上去会下不来！")])],-1),l("hr",null,null,-1),l("p",null,"尤里的复仇1.001版本部分的瑕疵：",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"心灵控制塔可作为基地扩展基础的BUG；")]),n(`
`),l("span",{class:"line"},[l("span",null,"巨炮、幻影坦克、坦克杀手、磁爆坦克开火位置错误的BUG；")]),n(`
`),l("span",{class:"line"},[l("span",null,"精英级超时空军团兵不能穿墙攻击的BUG；")]),n(`
`),l("span",{class:"line"},[l("span",null,"老兵级尤里新兵图标显示错误的BUG；")]),n(`
`),l("span",{class:"line"},[l("span",null,"尤里国AI在海岛地图不会进攻的BUG；")]),n(`
`),l("span",{class:"line"},[l("span",null,"将阿拉莫要塞译为白杨木屋的翻译错误；")]),n(`
`),l("span",{class:"line"},[l("span",null,"将断头台译为红场的翻译错误；")]),n(`
`),l("span",{class:"line"},[l("span",null,"将混凝土掩体译为燃料库的翻译错误。")]),n(`
`),l("span",{class:"line"},[l("span",null,"援引自东方秽浪港mod的修正。")])])]),l("button",{class:"collapse"})],-1)])),"main-header":s(()=>[a(i.$slots,"main-header")]),"main-header-after":s(()=>[a(i.$slots,"main-header-after")]),"main-nav":s(()=>[a(i.$slots,"main-nav")]),"main-content":s(()=>[a(i.$slots,"main-content")]),"main-content-after":s(()=>[a(i.$slots,"main-content-after")]),"main-nav-before":s(()=>[a(i.$slots,"main-nav-before")]),"main-nav-after":s(()=>[a(i.$slots,"main-nav-after")]),comment:s(()=>[a(i.$slots,"comment")]),footer:s(()=>[a(i.$slots,"footer")]),aside:s(()=>[a(i.$slots,"aside")]),"aside-custom":s(()=>[a(i.$slots,"aside-custom")]),default:s(()=>[a(i.$slots,"default")]),_:3},8,["frontmatter"])}}};export{N as default};
