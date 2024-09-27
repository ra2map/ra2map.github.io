import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang-ClpXkmZy.js";import{i as A,w as a,h as I,j as h,p as d,o as m,a as l,b as n,l as t}from"./app-G45NqZuR.js";import"./helper-f8z8uJIo.js";import"./tags-D2-p_S_e.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-Dqr4sQV6.js";import"./YunCard.vue_vue_type_script_setup_true_lang-HOw0TaWD.js";import"./index-C5okkQwF.js";import"./YunPostMeta.vue_vue_type_style_index_0_lang-Dzm6dkq3.js";import"./index-CpRw8AFc.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CcdLmUgK.js";import"./post-CsBZaeuw.js";const G={__name:"ts-platform-ai(md).ini-tutorial",setup(b,{expose:p}){const e=JSON.parse('{"title":"TS平台AI(MD).ini教程（修订版）","description":"","frontmatter":{"title":"TS平台AI(MD).ini教程（修订版）","date":"2010-03-31","updated":"2021-09-05","categories":"触发与小队","tags":["高级","AI"],"author":"LH_Mouse, Zero Fanker","sponsor":false},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"【第一章】AI基本教程——AI(MD).ini结构及原理简析","slug":"【第一章】ai基本教程——ai-md-ini结构及原理简析","link":"#【第一章】ai基本教程——ai-md-ini结构及原理简析","children":[{"level":3,"title":"§1.1 AI的结构","slug":"§1-1-ai的结构","link":"#§1-1-ai的结构","children":[]},{"level":3,"title":"§1.2 AI的原理","slug":"§1-2-ai的原理","link":"#§1-2-ai的原理","children":[]}]},{"level":2,"title":"【第二章】AI拔高教程——AI的设计","slug":"【第二章】ai拔高教程——ai的设计","link":"#【第二章】ai拔高教程——ai的设计","children":[{"level":3,"title":"§2.1 设计AI的基本步骤","slug":"§2-1-设计ai的基本步骤","link":"#§2-1-设计ai的基本步骤","children":[]},{"level":3,"title":"§2.2 设计AI的要点","slug":"§2-2-设计ai的要点","link":"#§2-2-设计ai的要点","children":[]}]},{"level":2,"title":"【第三章】AI高级教程——AI技能整合运用","slug":"【第三章】ai高级教程——ai技能整合运用","link":"#【第三章】ai高级教程——ai技能整合运用","children":[{"level":3,"title":"§3.1 好马配好鞍，好AI配好Rules","slug":"§3-1-好马配好鞍-好ai配好rules","link":"#§3-1-好马配好鞍-好ai配好rules","children":[]},{"level":3,"title":"§3.2 旧瓶装新酒，旧平台实现新功能","slug":"§3-2-旧瓶装新酒-旧平台实现新功能","link":"#§3-2-旧瓶装新酒-旧平台实现新功能","children":[]},{"level":3,"title":"§3.3 成功的AI需要什么","slug":"§3-3-成功的ai需要什么","link":"#§3-3-成功的ai需要什么","children":[]},{"level":3,"title":"§3.4 调试AI应当注意的细节","slug":"§3-4-调试ai应当注意的细节","link":"#§3-4-调试ai应当注意的细节","children":[]}]}],"relativePath":"pages/posts/ts-platform-ai(md).ini-tutorial.md","path":"C:/code/web/valaxy-blog/pages/posts/ts-platform-ai(md).ini-tutorial.md","lastUpdated":null}'),i=h(),u=e.frontmatter||{};return i.meta.frontmatter=Object.assign(i.meta.frontmatter||{},e.frontmatter||{}),d("pageData",e),d("valaxy:frontmatter",u),globalThis.$frontmatter=u,p({frontmatter:{title:"TS平台AI(MD).ini教程（修订版）",date:"2010-03-31",updated:"2021-09-05",categories:"触发与小队",tags:["高级","AI"],author:"LH_Mouse, Zero Fanker",sponsor:!1}}),(s,r)=>{const o=c;return m(),A(o,{frontmatter:I(u)},{"main-content-md":a(()=>r[0]||(r[0]=[l("blockquote",null,[l("p",null,[n("本文转载自"),l("a",{href:"https://github.com/revengenowstudio/AI-tutorial/blob/main/index.md",target:"_blank",rel:"noreferrer"},"https://github.com/revengenowstudio/AI-tutorial/blob/main/index.md"),n("（LH_Mouse原始版，Zero Fanker修订版）")])],-1),l("h2",{id:"前言",tabindex:"-1"},[n("前言 "),l("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),l("p",null,"LH_Mouse原始声明：此教程为我个人的独力完成，其内容凝结着我近2年的心血，允许转载但请不要注明“作者未知”之类的字样，本人保留一切追究的权利。",-1),l("p",null,"Zero Fanker声明：根据我的代码研究和实际测试，我对教程中的一些错误予以更正，同时对一些条目加入了自己的理解，此外还包含了RN新引入的AI特性讲解。",-1),l("p",null,"说明：本文适用于RA2、YR以及其派生出的RP、NP平台所使用的AI(MD).ini文件。阅读时请留意注*的项目。",-1),l("hr",null,null,-1),l("h2",{id:"【第一章】ai基本教程——ai-md-ini结构及原理简析",tabindex:"-1"},[n("【第一章】AI基本教程——AI(MD).ini结构及原理简析 "),l("a",{class:"header-anchor",href:"#【第一章】ai基本教程——ai-md-ini结构及原理简析","aria-label":'Permalink to "【第一章】AI基本教程——AI(MD).ini结构及原理简析"'},"​")],-1),l("p",null,"RN的AI编辑建议使用RN专用编辑器。本文以介绍手工文本编辑为主。",-1),l("h3",{id:"§1-1-ai的结构",tabindex:"-1"},[n("§1.1 AI的结构 "),l("a",{class:"header-anchor",href:"#§1-1-ai的结构","aria-label":'Permalink to "§1.1 AI的结构"'},"​")],-1),l("p",null,"每一条有效的AI规则由四个部分组成：AI触发（AITrigger）、作战小队（Team）、特遣部队（TaskForce）和脚本（Script）。",-1),l("p",null,"* 这四个部分中，只有AI触发是不需要注册的，其余都需要注册。",-1),l("p",null,"这四个部分的关系为：",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"　　　　　　　　　↗特遣部队1")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　　　作战小队1")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　　↗　　　　　↘脚本1")]),n(`
`),l("span",{class:"line"},[l("span",null,"AI触发")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　　↘　　　　　↗特遣部队2")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　　　作战小队2")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　　　　　　　　↘脚本2")])])]),l("button",{class:"collapse"})],-1),l("p",null,"下面分别说明这四个部分的其他结构：",-1),l("ol",null,[l("li",null,"AI触发：控制着AI行为的核心部分。下面以原版谭雅载直升机攻击核弹发射井的AI触发为例说明：")],-1),l("p",null,[n("例：0CAD0DCC-G=Allied Anti-Nuke 1 ,08DA125C-G,<all>,9,0,NAMISL,0100000003000000000000000000000000000000000000000000000000000000,70.000000,10.000000,70.000000,1,0,1,0,0CB246CC-G,0,1,1"),l("br"),n(" 　　　|注册ID　　　　|名称　　　　　　|作战小队1　|国家 ①②| 条件单位名 |　　　　　　　　　　　　　|触发条件参数　　　　　　　　　　　　 |基础分量　|分量下限　|分量上限 ③④⑤⑥ |作战小队2 ⑦⑧⑨")],-1),l("p",null,"①科技等级(无效）|②触发条件　　③遭遇战有效（疑似无效）　　④未知　　⑤所属方　　⑥基地防御（无效）　　⑦简单敌人允许　　⑧中等敌人允许　　⑨冷酷敌人允许",-1),l("p",null,[n("作战小队1、2：每个AI触发至多可以包含两个小队。AI触发被启动后可以指挥电脑玩家组建特定的作战小队。"),l("br"),n(" 　　　国家　　　　：指定只有特定一个国家的电脑玩家才允许激活该触发，典型应用如坦克杀手和磁能坦克。"),l("br"),n(" 　　　科技等级　　：如果电脑玩家的科技等级低于该水平那么这个AI触发就不会被激活。")],-1),l("p",null,[n("* 在原版遭遇战中这个是没有意义的，因为所有玩家的科技级别都是上限10；但是在任务地图以及用NP开启了调节科技等级功能的Mod里，"),l("br"),n(" 　　　　　　　　　　这个就有必要认真考虑了。具体我会在后文说明。"),l("br"),n(" ** 事实上这里的科技等级设置没有意义，见程序地址0x41F728 mov [ebp+AITriggerTypeClass.TechLevel], ebx"),l("br"),n(" ebx在之前被置零了。顺便见后段程序可知AI触发的科技限制实际上读取了小队里的设置。")],-1),l("p",null,[n("触发条件　　：可以为0-7的任何一个值，这八个值的意思分别是："),l("br"),n(" 　　　　　　　　　　0 目标敌方单位满足条件……"),l("br"),n(" 　　　　　　　　　　1 本方单位满足条件……"),l("br"),n(" 　　　　　　　　　　2 敌方电力黄"),l("br"),n(" 　　　　　　　　　　3 敌方电力红"),l("br"),n(" 　　　　　　　　　　4 目标敌方金钱大于或等于……"),l("br"),n(" 　　　　　　　　　　5 本方铁幕装置就绪"),l("br"),n(" 　　　　　　　　　　6 本方超时空传送就绪"),l("br"),n(" 　　　　　　　　　　7 平民单位满足条件……"),l("br"),n(" 　　　条件单位名　：指定在触发条件里评估什么单位。"),l("br"),n(" 　　　触发条件参数：必须是一个64位长的16进制数字。目前只有前两位和第十位有用，其余作用不明。"),l("br"),n(" 　　　　　　　　　　前两位：用十六进制表示0-255之间的一个数字，指定在触发条件中衡量的数量为多少。其中作战单位评估其数量，金钱则除以1000后和该数值比较。"),l("br"),n(" 　　　　　　　　　　第十位：控制触发条件用何种算法来比较。可以为0-5的任何一个值，这六个值的意思分别是小于、小于或等于、等于、大于或等于、大于和不等于。"),l("br"),n(" 　　　基础分量　　：指定该触发在没有被执行时候的分量。据说只能用5000,500,70,50,40,20,10七个值（未验证，但是原版只有这七个值），个人以为这种东西稳健一些好。")],-1),l("p",null,[n("* 分量就是AI在随机选择应该执行哪条触发的时候考虑的权重。AI在选择触发时，将所有满足条件的触发构成一个集合，然后加权随机抽取一个启动之。"),l("br"),n(" 　　　　　　　　　　如果该小队成功执行了脚本中的小队任务完成动作，则视为完成目的，将分量提升一些；反之，在完成目的之前该小队单位被全部摧毁，则视为失败，"),l("br"),n(" 　　　　　　　　　　将分量减小一些。"),l("br"),n(" 　　　　　　　　　　有关设置请在RulesMD.ini中查找AITriggerSuccessWeightDelta以及AITriggerFailureWeightDelta。")],-1),l("p",null,[n("分量下限　　：指定该触发反复失败的所能减小到的分量下限。"),l("br"),n(" 　　　分量上限　　：指定该触发反复成功执行的所能增加到的分量上限。"),l("br"),n(" 　　　遭遇战有效　：该触发在遭遇战中是否允许启动，疑似无效，建议使用1。"),l("br"),n(" 　　　未知　　　　：作用不明，建议使用0。"),l("br"),n(" 　　　所属方　　　：哪个作战方可以启动该AI触发。1代表盟军，2代表苏联，3代表尤里，4、5、6分别代表第四、五、六阵营。"),l("br"),n(" 　　　基地防御　　：已废弃，改为使用作战小队中的IsBaseDefense参数。此处建议使用0。"),l("br"),n(" 　　　简单敌人允许：是否允许简单的敌人启动该AI触发。"),l("br"),n(" 　　　中等敌人允许：是否允许中等的敌人启动该AI触发。"),l("br"),n(" 　　　冷酷敌人允许：是否允许冷酷的敌人启动该AI触发。")],-1),l("ol",{start:"2"},[l("li",null,"作战小队：AI触发激活之后执行相应任务的小队。作战小队需要在[TeamTypes]中注册。以上面的作战小队1为例说明：")],-1),l("p",null,"例：",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"   [TeamTypes]")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　…………")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　39=08DA125C-G　　　　　　　　　　　　 ; 注册")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　…………")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　[08DA125C-G]　　　　　　　　　　　　　;     注册ID")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Name=Allied Anti-Nuke Team - 1　　　　;     名称（注释用）")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　VeteranLevel=1　　　　　　　　　　　　; ! x 兵种等级")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　MindControlDecision=0　　　　　　　　 ; !   遭心灵控制后的动作，0=自动，1=加入控制者作战小队，2=送入部队回收厂，3=送入生化反应炉，4=搜索敌人，5=什么也不做")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Loadable=no　　　　　　　　　　　　　 ; !   可装载")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Full=no　　　　　　　　　　　　　　　 ; ! x 创建小队成员的时候，如果小队中有运载工具，其他成员是否应该位于运载工具的内部")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Annoyance=no　　　　　　　　　　　　　; !   烦恼效果，作用不明")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　GuardSlower=no　　　　　　　　　　　　; !   降低反应速度，作用不明")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　House=<none>　　　　　　　　　　　　　; ! x 创建小队成员时的所属作战方")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Recruiter=no　　　　　　　　　　　　　;     强制重组优先级较低的小队的成员，如果它们是可以重组的")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Autocreate=yes　　　　　　　　　　　　; !   自动建造")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Prebuild=no　　　　　　　　　　　　　 ; !   预先建造，作用不明")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Reinforce=no　　　　　　　　　　　　　; ! x 增援部队")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Droppod=no　　　　　　　　　　　　　　; ! x 使用空降舱进入战区")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　UseTransportOrigin=no　　　　　　　　 ; !   使用原始的运载工具")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Whiner=yes　　　　　　　　　　　　　　; !   哀叫效果，作用不明")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　LooseRecruit=no　　　　　　　　　　　 ; !   解散新兵，作用不明")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Aggressive=no　　　　　　　　　　　　 ;     侵略性的，电脑在防御达到一定数量之后再开始建造该小队")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Suicide=yes　　　　　　　　　　　　　 ;     自毁式攻击，受到攻击不允许还击")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Priority=5　　　　　　　　　　　　　　;     优先级")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Max=1　　　　　　　　　　　　　　　　 ;     同一作战方至多允许同时存在的该类型小队个数")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　TechLevel=0　　　　　　　　　　　　　 ; ! x 科技等级，疑似无效")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Group=-1　　　　　　　　　　　　　　　; !   分组，等同于人类玩家按下Ctrl+数字键组建的小队")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　OnTransOnly=no　　　　　　　　　　　　; !   只能运输，作用不明")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　AvoidThreats=yes　　　　　　　　　　　;     规避威胁，小队成员在移动的过程中将会试图规避途中可能遭遇的敌方单位")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　IonImmune=no　　　　　　　　　　　　　; ! x 离子风暴免疫")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　TransportsReturnOnUnload=yes　　　　　;     运载工具卸载后返回基地")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　AreTeamMembersRecruitable=no　　　　　;     小队成员是否允许重组")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　IsBaseDefense=no　　　　　　　　　　　;     基地防御小队")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　OnlyTargetHouseEnemy=no　　　　　　　 ; !   只攻击敌方单位，作用不明")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Script=0A6E54EC-G　　　　　　　　　　 ;     指定脚本")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　TaskForce=0617909C-G　　　　　　　　　;     指定特遣部队")])])]),l("button",{class:"collapse"})],-1),l("p",null,[n("注：! 一般实际作用不明，建议使用这里的值，不要随便更改"),l("br"),n(" 　　　　x 在AI中理论上是无效的语句")],-1),l("ol",{start:"3"},[l("li",null,"特遣部队：对于一个作战小队，告诉电脑玩家这个小队中包含什么单位，应该建造什么。特遣部队需要在[TaskForces]中注册。以上面的特遣部队为例说明：")],-1),l("p",null,"例：",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"    [TaskForces]")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　…………")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　16=0617909C-G　　　　　　　　　　　　　　　 ; 注册")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　…………")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　[0617909C-G]　　　　　　　　　　　　　　　　; 注册ID")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Name=1 Tanya, 3 GI, 1 Blackhawk, 1 Guard　　; 名称（注释用）")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　0=1,TANY　　　　　　　　　　　　　　　　　　; 单位列表，格式为[ID=数量,单位类型]")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　1=3,E1")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　2=1,SHAD")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　3=1,GGI")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Group=-1　　　　　　　　　　　　　　　　　　; 分组，建议保留原始值-1")])])]),l("button",{class:"collapse"})],-1),l("ol",{start:"4"},[l("li",null,"脚本：告诉电脑玩家控制特遣部队做什么样的动作。")],-1),l("p",null,"例：",-1),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"    [ScriptTypes]")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　…………")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　25=0A6E54EC-G　　　　　　　　　　　　; 注册")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　…………")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　[0A6E54EC-G]　　　　　　　　　　　　 ; 注册ID")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　Name=Allied Anti-Nuke Transport　　　; 名称（注释用）")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　0=54,0　　　　　　　　　　　　　　　 ; 脚本序列，格式为[ID=动作,参数]")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　1=14,0")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　2=43,0")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　3=47,54")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　4=8,2")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　5=49,0")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　6=46,54")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　7=0,2")]),n(`
`),l("span",{class:"line"},[l("span",null,"　　8=0,1")])])]),l("button",{class:"collapse"})],-1),l("p",null,"AI在遭遇战中实际可用的脚本动作是有限的。下面给出一个列表，无用的省略：",-1),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"动作"),l("th",null,"动作说明"),l("th",null,"参数"),l("th",null,"参数说明")])]),l("tbody",null,[l("tr",null,[l("td",null,"0"),l("td",null,"攻击最接近的敌方目标"),l("td",null,"1"),l("td",null,"可攻击的任何目标。")]),l("tr",null,[l("td"),l("td"),l("td",null,"2"),l("td",null,"敌方建筑物。")]),l("tr",null,[l("td"),l("td"),l("td",null,"3"),l("td",null,"敌方资源单位，就是矿车和矿厂。")]),l("tr",null,[l("td"),l("td"),l("td",null,"4"),l("td",null,"敌方步兵。")]),l("tr",null,[l("td"),l("td"),l("td",null,"5"),l("td",null,"敌方载具。")]),l("tr",null,[l("td"),l("td"),l("td",null,"6"),l("td",null,"敌方工厂，包括建造场、兵营、战车工厂、空指部和造船厂。")]),l("tr",null,[l("td"),l("td"),l("td",null,"7"),l("td",null,"敌方基地防御。")]),l("tr",null,[l("td"),l("td"),l("td",null,"8"),l("td",null,"基地威胁，目标在本方基地范围内的敌方单位。")]),l("tr",null,[l("td"),l("td"),l("td"),l("td",null,"* 这个脚本不能用于战机，否则战机不会等装弹完毕就起飞了，当然无法投弹，再返回、再起飞……")]),l("tr",null,[l("td"),l("td"),l("td",null,"9"),l("td",null,"敌方发电厂。")]),l("tr",null,[l("td"),l("td"),l("td",null,"10"),l("td",null,"可以驻守的平民建筑物。")]),l("tr",null,[l("td"),l("td"),l("td",null,"11"),l("td",null,"可以占领的平民科技建筑物。")]),l("tr",null,[l("td",null,"5"),l("td",null,"原地待命"),l("td",null,"时间"),l("td",null,"命令单位处于Guard状态一段时间，时间单位是6x秒，就是说1=6秒，2=12秒，等等。")]),l("tr",null,[l("td",null,"6"),l("td",null,"转到行"),l("td",null,"行号"),l("td",null,"跳至该脚本的指定行处继续执行，一般用于创建不断循环的脚本。")]),l("tr",null,[l("td"),l("td"),l("td"),l("td",null,"* 行号一般应为序列ID+1，即0=的行其行号是1，不要搞错。")]),l("tr",null,[l("td",null,"8"),l("td",null,"运载工具卸载"),l("td",null,"0"),l("td",null,"运载工具和卸出的单位都仍然是该小队的成员。")]),l("tr",null,[l("td"),l("td"),l("td",null,"1"),l("td",null,"运载工具仍然是该小队的成员，卸出的单位不再属于该小队（成为新兵）。")]),l("tr",null,[l("td"),l("td"),l("td",null,"2"),l("td",null,"运载工具不再属于该小队（成为新兵），卸出的单位仍然是该小队的成员。")]),l("tr",null,[l("td"),l("td"),l("td",null,"3"),l("td",null,"运载工具和卸出的单位都不再属于该小队（成为新兵）。")]),l("tr",null,[l("td",null,"9"),l("td",null,"部署"),l("td",null,"0"),l("td",null,"命令小队中可以部署的成员（美国大兵、基地车等，不包括武装直升机）部署。")]),l("tr",null,[l("td",null,"11"),l("td",null,"进入状态"),l("td",null,"5"),l("td",null,"原地待命。")]),l("tr",null,[l("td"),l("td"),l("td",null,"6"),l("td",null,"原地永久驻扎。")]),l("tr",null,[l("td"),l("td"),l("td",null,"10"),l("td",null,"采矿。")]),l("tr",null,[l("td"),l("td"),l("td"),l("td",null,"* 如果你使用补充矿车的AI触发，不推荐使用这个脚本，因为会造成矿车回矿厂无法倒矿的问题。")]),l("tr",null,[l("td"),l("td"),l("td"),l("td",null,"请使用58号动作移动到己方矿石精炼厂。")]),l("tr",null,[l("td"),l("td"),l("td",null,"11"),l("td",null,"警戒。")]),l("tr",null,[l("td"),l("td"),l("td",null,"15"),l("td",null,"搜索敌人。")]),l("tr",null,[l("td",null,"14"),l("td",null,"装载到运载工具中"),l("td",null,"0"),l("td",null,"命令小队成员依次装载到运载工具中。")]),l("tr",null,[l("td",null,"43"),l("td",null,"等待直到运载工装满"),l("td",null,"0"),l("td",null,"暂停脚本，直到运载工装满，然后继续。")]),l("tr",null,[l("td"),l("td"),l("td"),l("td",null,"* 14和43一般应该连用。TS平台对装载逻辑的处理有两个问题：")]),l("tr",null,[l("td"),l("td"),l("td"),l("td",null,"1.如果小队中有两个以上的运载工具，游戏在装载时，可能会先尝试将其中一个装载至另一个里。")]),l("tr",null,[l("td"),l("td"),l("td"),l("td",null,"这样脚本就会在43处永久暂停而无法继续。")]),l("tr",null,[l("td"),l("td"),l("td"),l("td",null,"2.如果小队中使用的是可以运载车辆的运载工具并且准备装载的成员中有车辆，装载完毕后，")]),l("tr",null,[l("td"),l("td"),l("td"),l("td",null,"并不会触发装载完成的事件，因此脚本同样会在43处永久暂停而无法继续。")]),l("tr",null,[l("td",null,"46"),l("td",null,"攻击敌方建筑"),l("td",null,"建筑ID"),l("td",null,"攻击/渗透/占领/C4爆破敌方特定的建筑。建筑ID由Rules中的注册相对顺序决定。")]),l("tr",null,[l("td"),l("td"),l("td"),l("td",null,"* RN提供的ini参考文件已经修正了注册顺序")]),l("tr",null,[l("td",null,"47"),l("td",null,"移动至敌方建筑"),l("td",null,"建筑ID"),l("td",null,"移动至敌方特定的建筑。建筑ID由Rules中的注册相对顺序决定。")]),l("tr",null,[l("td",null,"49"),l("td",null,"该小队任务完成"),l("td",null,"0"),l("td",null,"告诉该作战小队的所属方该小队已完成特定的任务。")]),l("tr",null,[l("td"),l("td"),l("td"),l("td",null,"* 每个AI触发脚本都应该包含这个动作，否则可能导致AI触发分量处理不正确。")]),l("tr",null,[l("td",null,"53"),l("td",null,"在敌方基地附近集结"),l("td",null,"0"),l("td",null,"集结于距离敌方基地中心（一般应为建造场所在地）AISafeDistance（在Rules中指定）的位置。")]),l("tr",null,[l("td",null,"54"),l("td",null,"在己方基地附近集结"),l("td",null,"0"),l("td",null,"集结于本方基地边界之外。")]),l("tr",null,[l("td",null,"55"),l("td",null,"请求铁幕，如果可用"),l("td",null,"0"),l("td",null,"向该小队的所有者请求铁幕保护。")]),l("tr",null,[l("td",null,"56"),l("td",null,"请求超时空传送至敌方建筑物"),l("td",null,"建筑ID"),l("td",null,"向该小队的所有者请求超时空传送至敌方特定建筑物。")]),l("tr",null,[l("td",null,"57"),l("td",null,"请求超时空传送至敌方目标"),l("td",null,"同动作1参数"),l("td",null,"向该小队的所有者请求超时空传送至敌方特定建筑物。")]),l("tr",null,[l("td",null,"58"),l("td",null,"移动至己方建筑"),l("td",null,"建筑ID"),l("td",null,"移动至己方特定的建筑。建筑ID由Rules中的注册相对顺序决定。")]),l("tr",null,[l("td",null,"60"),l("td",null,"送入部队回收厂"),l("td",null,"0"),l("td",null,"将小队中所有的单位送进己方部队回收厂转变为资金。")]),l("tr",null,[l("td",null,"61"),l("td",null,"送入坦克碉堡"),l("td",null,"0"),l("td",null,"将小队中的载具单位送入坦克碉堡。")]),l("tr",null,[l("td",null,"62"),l("td",null,"送入生化反应炉"),l("td",null,"0"),l("td",null,"将小队中的步兵单位送入生化反应炉。")]),l("tr",null,[l("td",null,"63"),l("td",null,"进入战斗碉堡"),l("td",null,"0"),l("td",null,"将小队中的步兵单位送入己方可驻守的建筑物。")]),l("tr",null,[l("td",null,"64"),l("td",null,"驻守最接近的平民建筑"),l("td",null,"0"),l("td",null,"小队中的步兵单位将会搜索并占领平民的可驻守建筑物。")])])],-1),l("h3",{id:"§1-2-ai的原理",tabindex:"-1"},[n("§1.2 AI的原理 "),l("a",{class:"header-anchor",href:"#§1-2-ai的原理","aria-label":'Permalink to "§1.2 AI的原理"'},"​")],-1),l("p",null,"（以下参数无特殊说明均为Rules中指定的） 首先，电脑按照TeamDelays的延迟定期检查所有AI触发，然后根据条件判断这些触发是否可用。一旦判断完成，电脑根据AI触发分量加权随机抽取一个触发激活之。",-1),l("p",null,"激活的AI触发将向电脑申请作战小队。电脑首先检查是否有空闲单位以及无指令单位，按照作战小队的要求将这些单位按照优先级从高到低的顺序填充到小队中，剩余的部分电脑将指令工厂生产。一旦有新单位制造出来，电脑将把它们填充到小队中。如果在小队被填充完毕之前（在基地里），有些成员已经被毁灭，电脑将会补充这些被消灭的单位，直至小队中的所有单位达到指定数量，然后电脑正式组建该小队，小队中的成员按脚本执行。",-1),l("p",null,"如果该小队执行了脚本中的49号动作（该小队任务完成），电脑将视该触发为成功一次并提高该触发的分量（不超过上限）；反之，在完成任务之前该小队被全灭，电脑经过DissolveUnfilledTeamDelay的延迟之后记该AI触发失败一次，取消该小队的编制（然后才允许重新创建该小队），并减小相应AI触发的分量（不低于下限）。",-1),l("p",null,"现在我们考虑一些特殊情况：",-1),l("ol",null,[l("li",null,"补兵　　　：一旦某个小队开始执行脚本，AI就不再对其补兵，除非该小队全灭并且经过了DissolveUnfilledTeamDelay的时间，AI取消该小队的编制。"),l("li",null,"被心灵控制：被心灵控制的单位解除控制后将成为新兵，并且是Guard状态（原地待命）。如果AI再次建立新的小队这些单位也不会加入。"),l("li",null,"海军的问题：海军不会把陆军当做目标，除非是像驱逐舰这样的单位，能够主动攻击，而敌方的单位恰好在射程内。要让海军单位攻击敌方基地，只能用46号动作。"),l("li",null,"弹头比率1%：除非使用46号动作或者遭到攻击还击，AI不会主动攻击某个单位，如果该小队中有任何一个成员对目标单位装甲的伤害比率是1%。也就是说，电脑用鲍里斯只能看家。")],-1),l("h2",{id:"【第二章】ai拔高教程——ai的设计",tabindex:"-1"},[n("【第二章】AI拔高教程——AI的设计 "),l("a",{class:"header-anchor",href:"#【第二章】ai拔高教程——ai的设计","aria-label":'Permalink to "【第二章】AI拔高教程——AI的设计"'},"​")],-1),l("p",null,"AI无疑是让很多中级甚至高级的Modder们头疼的一件事。不仅是AI(MD).ini中几乎没有任何注释，而且那些随机的数字ID让人头昏眼花。",-1),l("p",null,"制作AI不像修改Rules那样简单。制作AI要有一个整体的意识，同时还要有足够的耐心和谨慎。",-1),l("h3",{id:"§2-1-设计ai的基本步骤",tabindex:"-1"},[n("§2.1 设计AI的基本步骤 "),l("a",{class:"header-anchor",href:"#§2-1-设计ai的基本步骤","aria-label":'Permalink to "§2.1 设计AI的基本步骤"'},"​")],-1),l("p",null,"首先，作为Modder，和设计Mod一样，设计AI必须要把握好整体战略。这点可以从对战中得到经验。从初期到末期，AI应该用什么样的套路进攻，都要考虑完全。",-1),l("p",null,"然后，列出一个提纲，这个提纲从上到下，是AI从有了兵营开始一直到最后拥有高科的过程中作战小队的改变。这些是AI的主攻部队。",-1),l("p",null,"再然后，艺术作品当让少不了修饰。AI的主攻部队还需要一些辅攻作支持。比如，战机，或者是间谍，工程师+履带车，等等。",-1),l("p",null,"再再然后，还要考虑AI面对敌方应该如何应对。由于AI要隔一段时间才能启动一个AI触发，应当使某一时刻可能被启动的AI触发数量尽可能的少，以避免AI由于造了许多防御性小队反而没有造攻击性小队的情况。比如，如果敌方造了基洛夫，AI将造一些多功能步兵车防御；但是如果敌方没有造基洛夫，就不用造这些步兵车。",-1),l("p",null,"最后，才是正式地编写AI。",-1),l("p",null,"有了提纲的帮助，编写AI将变得简单许多。但是有一点是应当忌讳的，就是总觉得AI触发的分量不够，比如开始是50，后来觉得正在写的触发总该比之前的该重要吧，就加到了70；再写，又总觉得触发越写越不可少，结果写完了发现从前往后触发分量有增无减，越写越大，从50到70、100、150、200……这种情况，多是由于心切导致的。AI的编写是一份需要细致耐心的工作，绝不能图快而放弃了质量。分量不均衡的AI只能是失败的作品。",-1),l("h3",{id:"§2-2-设计ai的要点",tabindex:"-1"},[n("§2.2 设计AI的要点 "),l("a",{class:"header-anchor",href:"#§2-2-设计ai的要点","aria-label":'Permalink to "§2.2 设计AI的要点"'},"​")],-1),l("ol",null,[l("li",null,"合理分配分量")],-1),l("p",null,"对AI触发分量要有一个合理的理解。虽然分量上限可以达到5000，但是绝对不能以为分量可以随意设置，比如重要的给4000，中等重要的给500，不重要的给30。",-1),l("p",null,"应该说，使用5000分量的AI触发，启动的概率非常大，一般只有两种情况才可以使用：一是危急情况，比如补基地车；二是Rush型AI，比如犀牛海，初期杀伤很大，后期对于AI的作用大幅下降，条件是本方没有高科；一旦本方建造了高科，触发条件不再满足，分量自然也就失去了意义。",-1),l("p",null,"对于一般的攻击，70的分量已经很高了。如果希望电脑造更多的小队，既不应该盲目提升AI触发分量，也不能肆意增加作战小队的Max值，而应该增加AI触发，赋予一个不同的作战小队，这个作战小队的和那个作战小队特遣部队可以相同，但是脚本尽量不要用相同的，这样可以使AI进攻风格多变化。",-1),l("ol",{start:"2"},[l("li",null,"合理安排进攻次序")],-1),l("p",null,"原版的AI很笨，因为它集结了大量的单位，全部瞄准我们的工厂，而半路全被光棱塔解决（甚至是秒杀）了。因此，合理安排攻击次序很关键。",-1),l("p",null,"攻击的次序安排要考虑AI进攻小队的单位种类、数量等。比如电脑有6光棱，就应该攻击敌方基地防御；如果电脑有20光棱，就应该攻击任何目标；如果电脑有20 V3，就应该攻击敌方发电厂和超级武器；如果电脑有20天启，就应该直接攻击敌方建筑物；等等。",-1),l("p",null,"攻击动作参数里面有一个8，即基地威胁。这个参数使用得好可以使AI防御更强。方法就是提升基洛夫、幽浮等空中单位的威胁值，然后指定含有坦克杀手、磁能坦克之类的小队攻击基地威胁。这样，有防空能力的，比如步兵车和盖特将优先攻击基洛夫；没有防空能力的犀牛幻影等等将攻击敌方来犯的天启。",-1),l("p",null,"如此一来将使得AI相当难对付。",-1),l("ol",{start:"3"},[l("li",null,"养成脚本中添加49号动作的习惯")],-1),l("p",null,"AI小队不同于地图小队，这个完成任务的触发是必不可少的。否则，触发分量只会下降不会上升，最终将导致AI触发失衡。",-1),l("ol",{start:"4"},[l("li",null,"优先级的选取")],-1),l("p",null,"从目前做出的测试中来看，优先级起到的作用主要有三个：",-1),l("p",null,"①优先级低的小队建造的倾向大，优先级高的小队重组的倾向大； ②优先级高的小队如果指定了Recruiter=yes，并且优先级低的小队指定了AreTeamMembersRecruitable=yes， 　高优先级的小队建立时将强制重组低优先级的小队中的成员； ③AI向小队中填充新兵时，优先填充优先级较高的小队。",-1),l("p",null,"如果以上三条都成立，那么我们可以得出以下结论：AI根据优先级较低的小队的要求建造单位，但是首先填充到优先级最高的小队中。",-1),l("p",null,"这样看起来不合情理但是原因是明白的：如果高优先级小队由于某些原因被解散（触发条件不再满足等），其成员可以立即重新加入低优先级的小队， 以避免类似于电脑造了贪造高优先级小队突然高科被毁导致大量单位积压家中的情况。",-1),l("p",null,"如果以上推测都成立，优先级就应该这样设定：Rush型AI的优先级应当比较低，后期大部队的优先级比较高；特殊部队比如补充基地车， 由于没有其他小队拥有同样的单位，优先级应当低一些。",-1),l("ul",null,[l("li",null,"优先级低于SuspendPriority（在Rules中，默认为1）的小队，在电脑建造基地防御类小队时将会被挂起，不推荐使用这个优先级。推荐的优先级下限是5。")],-1),l("ol",{start:"5"},[l("li",null,"注意TechLevel")],-1),l("p",null,"TechLevel，即科技等级，是用于调节某作战方在一场战役中所能建造的部队的。比如生死斗的科技等级就比较低，普通遭遇战就很高。对于电脑来讲，如果AI触发的科技等级低于该作战方的科技等级，那么这个AI触发就有可能被激活；如果该小队中的某个成员科技等级却高于该作战方的科技等级，那么这个电脑玩家就无法建造这种单位，进而导致这个小队永远无法建立，白白浪费CPU资源。",-1),l("p",null,"为了避免这种情况，基本的要求是，AI触发的科技等级不应该低于AI触发中所有特遣部队中的所有单位的科技等级。",-1),l("h2",{id:"【第三章】ai高级教程——ai技能整合运用",tabindex:"-1"},[n("【第三章】AI高级教程——AI技能整合运用 "),l("a",{class:"header-anchor",href:"#【第三章】ai高级教程——ai技能整合运用","aria-label":'Permalink to "【第三章】AI高级教程——AI技能整合运用"'},"​")],-1),l("p",null,"“高手”“专家”，多么神圣又多么遥远的名字。其实，无论是“高手”还是“专家”，都是从菜鸟成长起来的，都是用经验一点一滴积累出来的。",-1),l("p",null,"只要功夫深，铁杵磨成针。如果本文的读者能有这份兴趣和毅力，相信，你终究会成为高手和专家的。",-1),l("h3",{id:"§3-1-好马配好鞍-好ai配好rules",tabindex:"-1"},[n("§3.1 好马配好鞍，好AI配好Rules "),l("a",{class:"header-anchor",href:"#§3-1-好马配好鞍-好ai配好rules","aria-label":'Permalink to "§3.1 好马配好鞍，好AI配好Rules"'},"​")],-1),l("p",null,"虽然TS平台的AI处理多工厂逻辑上存在问题（人类玩家建造多个工厂可以提速生产；电脑玩家建造多工厂不仅提升建造速度，还同时出兵），但是不得不承认，多工厂仍然是一种必需且有效的手段。然而，让电脑造另一个真重工有难度；目前通行的做法是，复制一个假重工，只给电脑造，人不能建造。这种方法已经用于多款Mod中。实际使用效果来看，除了占领假重工不能造对应国家的车辆（比如占领假盟军重工造不出灰熊光棱幻影），此方法并无太大问题。多工厂使得电脑可以更快地建造单位。同时，要注意调整AIBaseSpacing和RelaxedStray以避免堵车和小队过大无法集结的情况出现。",-1),l("p",null,"电脑选择激活AI触发是一个周期的过程，具体由TeamDelays决定；AI建造首个小队的时间是从游戏开始到AttackDelay。这些都是可以调整的。",-1),l("ul",null,[l("li",null,"[IQ]里面的设置不要随意更改。很多人以为把里面的数值改得越大AI智能程度越高。其实不然。除了MaxIQLevels之外，每一条的意思都是，“允许出现这种行为的IQ值下限”。比如，SuperWeapons=4的意思就是“当电脑玩家IQ≥4时允许自动发射超级武器”，以此类推。")],-1),l("h3",{id:"§3-2-旧瓶装新酒-旧平台实现新功能",tabindex:"-1"},[n("§3.2 旧瓶装新酒，旧平台实现新功能 "),l("a",{class:"header-anchor",href:"#§3-2-旧瓶装新酒-旧平台实现新功能","aria-label":'Permalink to "§3.2 旧瓶装新酒，旧平台实现新功能"'},"​")],-1),l("p",null,"之前的全军突击就是使用了Recruiter和一个很大的优先级实现的。TS平台的脚本虽然有限，但是综合起来用AI还是能实现很多原版没有的效果的。",-1),l("p",null,"盟军用工程师+步兵车偷袭基地，这个是原版中被屏蔽了的。当然要承认这的确是一个好主意，可以启用；苏联用天启+V3组成一个小队混合攻击，可以极大地提高效率；尤里用磁电+盖特+神经突击车的方式，可以有效对付敌方来犯部队；等等。",-1),l("h3",{id:"§3-3-成功的ai需要什么",tabindex:"-1"},[n("§3.3 成功的AI需要什么 "),l("a",{class:"header-anchor",href:"#§3-3-成功的ai需要什么","aria-label":'Permalink to "§3.3 成功的AI需要什么"'},"​")],-1),l("p",null,"以下仅仅列出必需的部分，其余请自己联想、逐步添加：",-1),l("p",null,"工程师占领科技建筑 　使用步兵的基本基地防御 　初期各种Rush 　间谍偷重工、电厂 　反间谍触发（虽然意义不大，只是怎么设计的问题） 　切断敌方资源补给的 　大部队Bombard 　基地防空 　海军攻击部队 　海军大部队 　对抗敌方来犯部队的 　对付超级武器的 　辅攻部队，清理敌方基地防御及电厂的 　专攻敌方重工、高科的",-1),l("p",null,"以上仅仅是思路，涉及到具体的部队种类、数量，触发分量等，请自己调试。",-1),l("h3",{id:"§3-4-调试ai应当注意的细节",tabindex:"-1"},[n("§3.4 调试AI应当注意的细节 "),l("a",{class:"header-anchor",href:"#§3-4-调试ai应当注意的细节","aria-label":'Permalink to "§3.4 调试AI应当注意的细节"'},"​")],-1),l("ol",null,[l("li",null,"同时启动的战机小队包含的战机总数量不应大于电脑同时能允许的停机坪机位总数")],-1),l("p",null,"比如，有三个小队，每个小队各有两架入侵者战机。如果某电脑玩家启动了两个小队而造了四架入侵者，派遣其中两架来攻击我，被击落一架，返航一架。此时电脑尝试造第三个小队，结果是，第一个小队有两架入侵者，第二、三都只造了一半，由于机位不足，无法继续建造。此时电脑就只能派遣第一小队进攻，而第二、三小队都不完整，无法进攻。这种情况的解决办法是，削减战机小队的数量。",-1),l("p",null,"比如，电脑只有一个小队，这个小队包含两架入侵者战机，而其Max=2。",-1),l("ol",{start:"2"},[l("li",null,"合理使用AvoidThreats语句")],-1),l("p",null,"这条语句是很有用的。对于像多功能+工程师这类偷袭战术，使用规避威胁的语句可以大大提高成功率。在有AI.tlb存在的时候，规避威胁的路径可以绕得更大， 使得AI的偷袭更加有效。",-1),l("p",null,"* 注意，对于Rush和Bombard以及类似的进攻不要使用规避威胁语句。例如，我在家门口摆了几辆光棱，敌方灰熊海过来，他们试图规避光棱，但是很不幸，有一辆没有绕开，被光棱击中，光棱的分光伤害到了更多的灰熊，灰熊尝试还击；但是由于灰熊处于光棱射程的边缘，AI的单位被攻击又会减速，结果，少量的光棱反而吃掉了敌方的灰熊海：这种情况是不允许出现的。",-1),l("ol",{start:"3"},[l("li",null,"攻击性小队避免使用简单触发条件")],-1),l("p",null,"什么是简单触发条件呢，就是类似于“本方拥有兵营”“本方拥有重工”这样的条件。这种条件用在基地防御的小队上是可以的；但是如果用在攻击性的小队上，电脑发展到后期，已经拥有了高科，然而控制灰熊海的触发还占有很大的比重，表现就是电脑造光棱幻影少，造灰熊多。",-1),l("p",null,"这种情况很常见。最佳的解决办法是，将条件改为“本方没有高科”。这就是所谓“Rush型AI”，有人称为“一次性AI”（抱歉这是谁我把名字忘了，好像是紫霞）。因为这种小队初期攻击力很强，但是等后期敌方造了大量的幻影和光棱塔以后，灰熊海就没什么意义了。此时本方如果拥有高科，就应该全力造光棱幻影，而停止爆灰熊海。",-1),l("ol",{start:"4"},[l("li",null,"注意辅攻兵种的配合")],-1),l("p",null,"在遭遇战中，即使是同一作战方的两个小队，想要同步行动也是极其困难的。为此，我们可以借鉴一下原版战斗要塞的AI触发：",-1),l("p",null,"脚本的说明中已经讲过，同一个小队中不允许出现两个运载工具。那么，如何实现四个满载（至少是部分满载）的战斗要塞进攻呢？",-1),l("p",null,"原版使用了三个AI触发来控制：",-1),l("p",null,"首先，有两个AI触发控制了两个小队，这两个小队都是1战斗要塞+5补兵，装载后集结于己方高科附近。每个小队造两个。",-1),l("p",null,"然后，第三个AI触发具有极高的分量（500），当己方有四辆战斗要塞时，重组成一个小队并进攻。",-1),l("p",null,"此即为神龙天舞中实现全军突击触发的思想：将所有单位重组成一个大“小队”进攻，其力量当然惊人。",-1),l("p",null,"这也为我们提供了一个思路：我们可以如此实现光棱幻影与海豹步兵车的混合攻击。对于那些我们不希望加入小队的步兵车，比如基地防空的，可以简单地将 AreTeamMembersRecruitable设置为no。",-1),l("ol",{start:"5"},[l("li",null,"合理使用IsBaseDefense和Aggressive")],-1),l("p",null,"IsBaseDefense，即基地防御小队。电脑优先建造这些小队。但是注意基地防御小队是有数量限制的，具体定义于Rules中的MinimumAIDefensiveTeams和MaximumAIDefensiveTeams。",-1),l("p",null,"Aggressive，即侵略性小队。只有当电脑的防御部队和建筑数量达到一定值时电脑才会建造这个小队。因此Rush小队上不要使用这个参数；但是对于光棱幻影这样的大部队进攻，为了避免电脑出现防守漏洞，就应该加上这个参数。",-1),l("ol",{start:"6"},[l("li",null,"移动区域不相同的单位不要安排到同一个小队里")],-1),l("p",null,"比如犀牛和基洛夫。如果指定了“集结于XXXX”的脚本动作，电脑总是选择其中比较大的移动范围做决定，因此有可能把集结点选在水面上或悬崖上， 导致脚本无法执行。",-1),l("ol",{start:"7"},[l("li",null,"如果小队比较多，尽量增加一条全军重组突击的触发")],-1),l("p",null,"这点的意义在于，如果AI出兵太多，可能会堵在家里把自己卡死。这条触发的作用就是及时地将家中积压的部队派遣出去，避免堵车。",-1),l("ol",{start:"8"},[l("li",null,"全部编写好以后照着提纲检查一遍")],-1),l("p",null,"最好是能画一个草图，然后标明在AI发展的不同阶段（有了兵营、有了重工、有了高科、有了超武，等等）都有哪些触发是激活的、哪些是曾经被激活后来被屏蔽的。",-1),l("p",null,"同时还用标记一下不同作用的AI触发的分量，以避免前述分量越写越大的情况。",-1)])),"main-header":a(()=>[t(s.$slots,"main-header")]),"main-header-after":a(()=>[t(s.$slots,"main-header-after")]),"main-nav":a(()=>[t(s.$slots,"main-nav")]),"main-content":a(()=>[t(s.$slots,"main-content")]),"main-content-after":a(()=>[t(s.$slots,"main-content-after")]),"main-nav-before":a(()=>[t(s.$slots,"main-nav-before")]),"main-nav-after":a(()=>[t(s.$slots,"main-nav-after")]),comment:a(()=>[t(s.$slots,"comment")]),footer:a(()=>[t(s.$slots,"footer")]),aside:a(()=>[t(s.$slots,"aside")]),"aside-custom":a(()=>[t(s.$slots,"aside-custom")]),default:a(()=>[t(s.$slots,"default")]),_:3},8,["frontmatter"])}}};export{G as default};