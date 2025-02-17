import{_ as f}from"./ValaxyMain.vue_vue_type_style_index_0_lang-DxC2i5ri.js";import{k as b,w as o,j as k,l as v,p,r as $,o as P,a as l,d as t,b as m,m as s}from"./app-DTK7MkJ3.js";import"./YunCloud-DCyQUbCJ.js";import"./tags-BE9ZZJqn.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-CUf0HJdH.js";import"./YunCard.vue_vue_type_script_setup_true_lang-BEU4nSCu.js";import"./YunPostMeta.vue_vue_type_style_index_0_lang-BeL1C_Sa.js";import"./index-kt1v7PTw.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CQk4e2hF.js";import"./post-TpcOcCSC.js";const R={class:"info custom-block"},T={__name:"map-test",setup(I,{expose:d}){const e=JSON.parse('{"title":"地图测试理论","description":"","frontmatter":{"title":"地图测试理论","date":"2024-09-11","updated":"2024-11-22","categories":"其他教程","tags":["高级","系列","调试"],"author":"轻稚天雪"},"headers":[{"level":2,"title":"测试的注意事项","slug":"测试的注意事项","link":"#测试的注意事项","children":[]},{"level":2,"title":"测试的类型","slug":"测试的类型","link":"#测试的类型","children":[]},{"level":2,"title":"对测试结果的处理","slug":"对测试结果的处理","link":"#对测试结果的处理","children":[]},{"level":2,"title":"更科学的测试","slug":"更科学的测试","link":"#更科学的测试","children":[]},{"level":2,"title":"任务难度的测试","slug":"任务难度的测试","link":"#任务难度的测试","children":[]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"relativePath":"pages/posts/map-test.md","path":"C:/code/web/valaxy-blog/pages/posts/map-test.md","lastUpdated":null}'),i=v(),u=e.frontmatter||{};return i.meta.frontmatter=Object.assign(i.meta.frontmatter||{},e.frontmatter||{}),p("pageData",e),p("valaxy:frontmatter",u),globalThis.$frontmatter=u,d({frontmatter:{title:"地图测试理论",date:"2024-09-11",updated:"2024-11-22",categories:"其他教程",tags:["高级","系列","调试"],author:"轻稚天雪"}}),(r,n)=>{const a=$("RouterLink"),g=f;return P(),b(g,{frontmatter:k(u)},{"main-content-md":o(()=>[n[4]||(n[4]=l("p",null,[t("一份好的地图，尤其是任务图，必须经过充分测试才能发布。而地图测试在绝大多数时候都是对"),l("strong",null,"地图触发"),t("（包括 AI 触发）的测试。目前，地图测试的重要性虽然常被提起，但一直罕有具体的理论指导，总体处于一种混沌的状态。")],-1)),n[5]||(n[5]=l("p",null,"本文援引软件工程中软件测试的相关理论和方法，对 Ra2 地图的测试进行探索。",-1)),n[6]||(n[6]=l("p",null,"地图测试的目的：",-1)),n[7]||(n[7]=l("ul",null,[l("li",null,"发现地图中存在的 Bug"),l("li",null,"验证地图是否符合需求和设计，行为是否符合预期"),l("li",null,"测定地图的质量，并且找出值得改进的地方")],-1)),n[8]||(n[8]=l("h2",{id:"测试的注意事项",tabindex:"-1"},[t("测试的注意事项 "),l("a",{class:"header-anchor",href:"#测试的注意事项","aria-label":'Permalink to "测试的注意事项"'},"​")],-1)),n[9]||(n[9]=l("p",null,[t("一次好的测试，或者说是有用的测试，并不是没有发现问题的测试，而是"),l("strong",null,"发现了问题的测试"),t("。此概念可参考医院查体、考前测验。")],-1)),n[10]||(n[10]=l("p",null,[t("首先，"),l("strong",null,"尽量早点开始测试"),t("，否则迟来的第一次测试可能会暴露出非常多的问题，让你应接不暇，甚至其中很多问题背后都指向你的同一种失误。地图测试并非位于地图制作之后的一个独立的阶段，而应"),l("strong",null,"贯穿到触发编写的过程中"),t("。")],-1)),n[11]||(n[11]=l("p",null,[t("其次，"),l("strong",null,"测试需要带着发现问题的目的来进行"),t("。因为人的活动具有目的性，如果你的目的是“不要测出问题”，那么你的测试就会有意无意地按照最标准的情况来进行，甚至会心虚地回避模棱两可的部分。这样的测试，注定无法反映真实情况，因为玩家的操作往往是五花八门的，甚至会故意试探边界情况，企图寻找漏洞和捷径。")],-1)),n[12]||(n[12]=l("p",null,[t("有条件的话，最好"),l("strong",null,"让别人帮忙测试"),t("。原因类似上文，作者自己往往会对任务的某一部分过于自信，不再检查；或是由于操作习惯和思维定式，仅选择某一种发展和通关路径，忽略了更多可能，甚至从未涉足过地图上某些地方。比如，任务关键目标或桥梁离海岸过近，玩家用3星无畏舰可以强攻地面溅射到从而"),l("strong",null,"逃课"),t("，而你从未设想过这一点。")],-1)),n[13]||(n[13]=l("p",null,[t("发现问题，并且做出修改后，"),l("strong",null,"仍需进行测试"),t("。此时的测试是验证问题是否被真正修复，而不是仅仅自以为修复了。这有可能是由于开发者对错误原因理解不够，仅仅修复了表象。"),l("strong",null,"比如"),t("，小队关联触发不起作用（比如被摧毁没有成功触发），你给小队改了几个勾，或是加了几个动作，再进游戏摧毁它，就正常了。其实这可能是歪打正着。因为错误的真正原因是 "),l("em",null,"“AI 的小队挂载的标签，小队解散（完成所有脚本后）就会消失”"),t(" ，你这次成功，可能是因为它刚刷出来，就被你摧毁了，下一次晚点摧毁，就不一定行了。真正解决办法是添加循环或进入状态这种不会终止的脚本。有必要的话，还要测试这次修改所有波及到的部分，看看是否引入了新的问题。在任务包即将发布的时候，这很重要。")],-1)),n[14]||(n[14]=l("p",null,"测试不可能无止境地进行下去，所有问题也不一定都有理想的解决方案。很多问题是引擎固有缺陷所致，咱们只能规避、祈祷、容忍，或是在发布时提醒玩家。",-1)),n[15]||(n[15]=l("h2",{id:"测试的类型",tabindex:"-1"},[t("测试的类型 "),l("a",{class:"header-anchor",href:"#测试的类型","aria-label":'Permalink to "测试的类型"'},"​")],-1)),n[16]||(n[16]=l("p",null,[t("根据地图测试所波及范围的不同，可将测试分为"),l("strong",null,"局部测试"),t("（对应软件测试领域中单元测试、集成测试）和"),l("strong",null,"整体测试"),t("（对应系统测试等）。局部测试是在地图制作的过程中随时可以进行的，每完成一个触发组，都可以进行一次测试，查看其是否存在 Bug，是否满足需求，以及如何改进。极端情况下，仅改写一条触发，也需要进行测试。")],-1)),n[17]||(n[17]=l("p",null,[t("整体测试是指从头到尾对整个关卡的测试，要按照真实游玩过程来进行。由于很耗费时间，往往在地图制作的后期才进行。实际的地图测试，往往是"),l("strong",null,"渐进式"),t("的，即根据触发编写的进度，一步一步扩大或是修改局部测试的范围，更高效地验证刚才的触发编写成果。")],-1)),n[18]||(n[18]=l("h2",{id:"对测试结果的处理",tabindex:"-1"},[t("对测试结果的处理 "),l("a",{class:"header-anchor",href:"#对测试结果的处理","aria-label":'Permalink to "对测试结果的处理"'},"​")],-1)),n[19]||(n[19]=l("p",null,"测试中发现了问题，要及时解决问题或进行记录，否则问题很容易就会被淡忘。一般简单的问题转眼间就能够在 FA2 中解决。复杂或是大量的问题，则可能需要先记录下来，再仔细分析逐渐解决。如有必要，每次已完成的修复也需要记录，比如在团队合作或是修复了重要问题时，在任务已内测或发布后需要通知玩家时。",-1)),n[20]||(n[20]=l("blockquote",null,[l("p",null,[t("引用自 "),l("em",null,"地图调试与出错补救")]),l("p",null,[t("当你发现任务流程中出现意料之外的情况时，请回忆最近对这部分所做的改动，并检查各项数值是否正确。如果无法定位问题原因（一般是崩溃弹框时），可以使用"),l("strong",null,"排除法"),t("，先禁用/删除一部分触发，来看看问题是否还会出现。")]),l("p",null,[t("一个比较简单的调试方法是，给关键触发的结果加上一条结果"),l("code",null,"11 显示文本"),t("，这样来看观察此触发是否执行了。也可以用计时器定位出问题的触发，比如恰好在核弹倒计时剩3分钟时弹框了，那么有可能是流逝时间 7*60=420 游戏秒时的某个触发有问题。")]),l("p",null,"如果遇到疑难杂症（一般是小队相关）或者复杂的触发组，可以将其抽离出来，在一张单独的地图中专门测试。或是求助他人。")],-1)),n[21]||(n[21]=l("h2",{id:"更科学的测试",tabindex:"-1"},[t("更科学的测试 "),l("a",{class:"header-anchor",href:"#更科学的测试","aria-label":'Permalink to "更科学的测试"'},"​")],-1)),n[22]||(n[22]=l("p",null,[t("在软件测试领域，还可将测试分为黑盒测试、白盒测试以及介于两者之间的的灰盒测试。"),l("a",{href:"https://ones.cn/blog/articles/black-box-testing-and-white-box-testing",target:"_blank",rel:"noreferrer"},"详细解释"),t("。各有其优缺点和具体测试方法。咱试将其类推到地图测试中，设计适用于 Ra2 地图的测试方法。")],-1)),n[23]||(n[23]=l("p",null,[l("strong",null,"静态分析"),t("。与其说是测试，不如说是检查。即，检查触发该填的是否填了，该禁止的是否禁止，难度勾是否正确；小队及脚本涉及的路径点是否正确等等。一般只能自己检查，外人往往无从下手。")],-1)),n[24]||(n[24]=l("p",null,[l("strong",null,"边界测试"),t("。对任务过程中有可能出现的"),l("strong",null,"极端情况"),t("进行测试，比如上文提过的3星无畏射程；玩家占领大量敌人建筑后是否会报错/严重干扰剧情（比如造出 VIP 单位或者使某些触发无法运行）；潜入任务中跋山涉水是否能找到一条捷径（除非这是你想要的）；敌人 VIP 单位是否刚出场就被玩家埋伏/亡命冲锋掉；过场表演、护送是否会在某些情况下卡住，导致卡关。")],-1)),n[25]||(n[25]=l("p",null,[l("strong",null,"基本路径测试"),t("。")],-1)),n[26]||(n[26]=l("blockquote",null,[l("p",null,"在软件测试领域，基本路径测试是一种白盒测试方法，旨在测试程序中的所有可能路径，以确保每个语句至少被执行一次。测试目标是确保程序中的每个可能路径都被覆盖到，以检测潜在的错误和逻辑问题。步骤有"),l("ol",null,[l("li",null,"识别程序的控制流图（Control Flow Graph）：将程序转换为控制流图。"),l("li",null,"确定程序的基本路径： 确定程序中的所有可能路径，包括循环和条件语句。"),l("li",null,"设计测试用例： 设计测试用例以覆盖每个基本路径。")]),l("p",null,"基本路径测试适用于测试复杂程序中的所有可能路径，以确保程序的完整性和正确性。")],-1)),n[27]||(n[27]=l("p",null,"在地图测试中，则需回归触发的设计，将触发流程中的各个主要次要节点串连，然后设计多条路径，将节点和分支遍历覆盖。设计路径时，不止要考虑触发，也要把无关触发的玩家操作考虑进去，比如，不同的行进路线；不同的军备组合；不同的支线目标完成顺序；选择占领还是摧毁关键目标等等。",-1)),n[28]||(n[28]=l("p",null,"实际操作中，完全遍历所有可能性是不现实的，大部分分支也不必从头走到尾去测试（比如彩蛋），所以，具体测试粒度还请自行把握。",-1)),n[29]||(n[29]=l("p",null,"实例有待补充",-1)),n[30]||(n[30]=l("p",null,[l("strong",null,"重点测试脆弱部分、关键部分"),t("。让你的测试更高效。比如重点测试这些：")],-1)),n[31]||(n[31]=l("ul",null,[l("li",null,"护送、基地车来等复杂且关键的脚本"),l("li",null,"AI 造兵"),l("li",null,"是否会因为找不到角落里的敌人而无法完成任务"),l("li",null,"任一个复杂的触发组")],-1)),n[32]||(n[32]=l("h2",{id:"任务难度的测试",tabindex:"-1"},[t("任务难度的测试 "),l("a",{class:"header-anchor",href:"#任务难度的测试","aria-label":'Permalink to "任务难度的测试"'},"​")],-1)),n[33]||(n[33]=l("p",null,"制作组在测试 RTS 游戏某一关卡的难度时，可以采取以下方法和策略：",-1)),n[34]||(n[34]=l("ol",null,[l("li",null,[l("p",null,"内部测试：组建一个专门的测试团队，确保测试团队中有不同水平的玩家，以便从不同角度评估关卡难度。")]),l("li",null,[l("p",null,"用户测试：邀请外部玩家参与关卡难度测试，收集玩家的反馈和意见，了解他们对关卡难度的感受和建议。")]),l("li",null,[l("p",null,"数据分析：记录玩家在关卡中的表现数据，如通关时间、敌我阵亡比例等。")]),l("li",null,[l("p",null,"行为分析：了解玩家们的攻防策略、发展路径、进攻路线，了解他们面对各种情况的决策和反应。如有必要，可录制视频或直播分析。")])],-1)),n[35]||(n[35]=l("p",null,"实际上，任务难度的测试和调整往往非常麻烦，并且非常耗费时间。尤其是地图内小队较多时。这非常考验测试者的耐心。",-1)),l("div",R,[n[2]||(n[2]=l("p",{class:"custom-block-title"},[l("span",{lang:"en"},"INFO"),l("span",{lang:"zh-CN"},"信息")],-1)),n[3]||(n[3]=l("p",null,"也看",-1)),l("ul",null,[l("li",null,[m(a,{to:"/posts/map-debug"},{default:o(()=>n[0]||(n[0]=[t("地图调试与出错补救")])),_:1})]),l("li",null,[m(a,{to:"/posts/other-tool#RA2-专用"},{default:o(()=>n[1]||(n[1]=[t("有助于测试地图的工具")])),_:1})])])]),n[36]||(n[36]=l("h2",{id:"结语",tabindex:"-1"},[t("结语 "),l("a",{class:"header-anchor",href:"#结语","aria-label":'Permalink to "结语"'},"​")],-1)),n[37]||(n[37]=l("p",null,"此文章是咱对地图测试行为的理论化，旨在让大家更科学高效地进行测试，从而提高作品质量。这仅是咱对相关理论的初次探索尝试，并不成熟，更多细节还请大家自行思考。",-1))]),"main-header":o(()=>[s(r.$slots,"main-header")]),"main-header-after":o(()=>[s(r.$slots,"main-header-after")]),"main-nav":o(()=>[s(r.$slots,"main-nav")]),"main-content":o(()=>[s(r.$slots,"main-content")]),"main-content-after":o(()=>[s(r.$slots,"main-content-after")]),"main-nav-before":o(()=>[s(r.$slots,"main-nav-before")]),"main-nav-after":o(()=>[s(r.$slots,"main-nav-after")]),comment:o(()=>[s(r.$slots,"comment")]),footer:o(()=>[s(r.$slots,"footer")]),aside:o(()=>[s(r.$slots,"aside")]),"aside-custom":o(()=>[s(r.$slots,"aside-custom")]),default:o(()=>[s(r.$slots,"default")]),_:3},8,["frontmatter"])}}};export{T as default};
