import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BLk_7Qbr.js";import{k as f,w as t,j as c,l as g,p as i,o as h,a as l,d as e,m as a}from"./app-KTne_XA5.js";import"./YunCloud-Cs73kQ3t.js";import"./tags-BvBwQdnz.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-yJdZaPTV.js";import"./YunCard.vue_vue_type_script_setup_true_lang-Cf9Ykn51.js";import"./index-C5okkQwF.js";import"./YunPostMeta.vue_vue_type_style_index_0_lang-Dp_xRNtJ.js";import"./index-D05q-RW8.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CZ5QAPxC.js";import"./post-BzJdk7Iq.js";const j={__name:"advanced-trigger-tutorial-subtitle-queue",setup(v,{expose:m}){const r=JSON.parse('{"title":"高级触发教程：字幕队列","description":"","frontmatter":{"title":"高级触发教程：字幕队列","date":"2020-08-02 13:21:48","updated":"2020-08-02 13:21:48","categories":["触发与小队","细节"],"tags":["高级"],"author":"竹蜻蜓(Heli)","sponsor":false},"headers":[{"level":2,"title":"字幕队列","slug":"字幕队列","link":"#字幕队列","children":[]},{"level":2,"title":"后续","slug":"后续","link":"#后续","children":[]}],"relativePath":"pages/posts/advanced-trigger-tutorial-subtitle-queue.md","path":"C:/code/web/valaxy-blog/pages/posts/advanced-trigger-tutorial-subtitle-queue.md","lastUpdated":null}'),u=g(),o=r.frontmatter||{};return u.meta.frontmatter=Object.assign(u.meta.frontmatter||{},r.frontmatter||{}),i("pageData",r),i("valaxy:frontmatter",o),globalThis.$frontmatter=o,m({frontmatter:{title:"高级触发教程：字幕队列",date:"2020-08-02 13:21:48",updated:"2020-08-02 13:21:48",categories:["触发与小队","细节"],tags:["高级"],author:"竹蜻蜓(Heli)",sponsor:!1}}),(n,s)=>{const p=d;return h(),f(p,{frontmatter:c(o)},{"main-content-md":t(()=>s[0]||(s[0]=[l("blockquote",null,[l("p",null,[e("Ra2map：本文转载自"),l("a",{href:"http://pkuit.com/forum.php?mod=viewthread&tid=204171&extra=page%3D1",target:"_blank",rel:"noreferrer"},"【教程】高级触发教程：字幕队列 - 红警任务之家")])],-1),l("p",null,"虽然说是“高级触发”，但这个触发组其实是极其实用的，以至于被开发出来以后，我的每一张任务图中都在稳定的使用，其对游戏体验的提升非常明显。",-1),l("h2",{id:"字幕队列",tabindex:"-1"},[e("字幕队列 "),l("a",{class:"header-anchor",href:"#字幕队列","aria-label":'Permalink to "字幕队列"'},"​")],-1),l("p",null,"在任务进行的时候，左上角出现的字幕是对玩家重要的提示和引导。你可能用单独的一条字幕来表示某个提示，或者使用一连串的字幕来为玩家展示一段剧情或对话。",-1),l("p",null,"然而展示的效果有时并不尽人意，其中一个因素就是字幕之间的相互干扰：比如，一堆倾泻而出的非重要提示，可能会把一条重要信息快速淹没；或者是，玩家在触发A和B之间的对话的时候，同时触发了C与D之间的对话，相互穿插的字幕导致信息几乎变得不可读；再比如，你不希望让循环出现的任务目标提示和别的字幕撞车……",-1),l("p",null,"本教程介绍的这个触发组就是为了优化这些场景而出现的。",-1),l("p",null,"先来看看这个触发组的结构：",-1),l("ul",null,[l("li",null,"一个局部变量， “锁”。初始为0。"),l("li",null,[e("延时解锁触发：重复；【条件】"),l("em",null,"13 流逝时间…"),e(" 8秒（或者你认为两条信息之间的合理间隔）；【结果】"),l("em",null,"57 局部清除…"),e(" 锁，"),l("em",null,"54 禁止目标触发…"),e(" 自身。")])],-1),l("p",null,"没错，就这么简单。",-1),l("p",null,"这个触发组要如何使用呢？",-1),l("ul",null,[l("li",null,[e("当一条单独的字幕需要出现的时候，在对应字幕的触发条件上附加一个额外的条件："),l("em",null,"37 局部设置关闭…"),e(" 锁；结果上附加两个额外的结果："),l("em",null,"56 局部设置…"),e(" 锁，"),l("em",null,"53 允许目标触发…"),e(" 延时解锁触发。")]),l("li",null,[e("当一连串的字幕要出现的时候，在第一个字幕的触发条件上附加额外条件："),l("em",null,"37 局部设置关闭…"),e(" 锁；结果上附加额外结果："),l("em",null,"56 局部设置…"),e(" 锁；在最后一个字幕触发的结果上附加一个额外的结果："),l("em",null,"53 允许目标触发…"),e(" 延时解锁触发。")])],-1),l("p",null,"这个局部变量确实是一个“锁”。有字幕要出现的时候，就“上锁”（设置局部变量为1），暂时不让其他字幕同时出现，只有过了一段时间以后才由延时解锁触发来“解锁”（清除局部变量为0），其它字幕才能出现。如果有一连串的字幕要出现，在这段字幕进行的时间中，就是全程上锁的，不让其它字幕插进来打扰。",-1),l("p",null,"如果有很多条字幕要同时显示，这个“锁”就起到了一个“队列”的作用：让字幕一条一条的，或者一段一段的，按照“延时解锁触发”的解锁时间间隔逐个显示出来，哪怕时间上刚好撞车，也会自动错开一小段间隔，因此我把它叫做“字幕队列”。",-1),l("p",null,"你以为这就结束了吗？",-1),l("p",null,[e("理论上很完美，但是实际使用的时候会发现一个问题，是来自于触发条件“"),l("em",null,"13 流逝时间…"),e("”的： 当一个触发拥有双条件，一个是“"),l("em",null,"13 流逝时间…"),e("”，另一个是“"),l("em",null,"37 局部设置关闭…"),e("”的时候，仅仅当局部变量改变了状态的时候（不论是从0到1还是从1到0），“"),l("em",null,"13 流逝时间…"),e("”的计时器就会重新开始计时。")],-1),l("p",null,"也就是说，如果原来的字幕触发是延时8秒产生字幕，延时解锁触发是延时8秒解锁的话，那么这个触发最长要延时8+8=16秒（上锁8秒，解锁以后自身的延时重新开始计时，又延时8秒）。这个对于短延时的字幕触发影响轻微，但是对于长延时的字幕触发（比如延时120秒提示任务目标）可能就会导致，其它字幕引发的上锁解锁操作引发自身计时器反复被重置、一直到不了时间，导致一直显示不出字幕。",-1),l("p",null,"这个问题怎么解决呢？既然对于显示字幕的触发本身，延时越短，影响越小，我们可以采取如下方式，以延时120秒提示任务目标为例，把它拆成两个触发：",-1),l("ul",null,[l("li",null,[e("延时触发：重复；【条件】"),l("em",null,"13 流逝时间…"),e(" 120；【结果】"),l("em",null,"53 允许目标触发…"),e(" 字幕触发。")]),l("li",null,[e("显示触发：重复；【条件】"),l("em",null,"37 局部设置关闭…"),e(" 锁；【结果】"),l("em",null,"56 局部设置…"),e(" 锁，"),l("em",null,"53 允许目标触发…"),e(" 延时解锁触发，"),l("em",null,"54 禁止目标触发…"),e(" 自身，"),l("em",null,"11 文本触发事件…"),e(" 你需要的字幕，还有其它等等……")])],-1),l("p",null,"这样，实际上显示字幕的触发就成了最理想的0延时触发，而延时触发的计时器也不会被打断了。问题这才告一段落。",-1),l("h2",{id:"后续",tabindex:"-1"},[e("后续 "),l("a",{class:"header-anchor",href:"#后续","aria-label":'Permalink to "后续"'},"​")],-1),l("p",null,"昨晚又和人讨论了很多关于这个触发组的事情，发现这个触发组实现起来虽然很简单，但细节非常之多……",-1),l("p",null,"教程所写的方法是没错的，至于其它错误实现会出现什么问题就不一一列举了……",-1),l("p",null,[e("实际上这个问题的本质，是一个"),l("strong",null,"操作系统的资源调度问题"),e("（如果学过相关的知识会好理解）：通过"),l("strong",null,"加锁"),e("的方式，让一条字幕在一段时间内独占"),l("strong",null,"一段时间的玩家阅读时间"),e("。")],-1),l("p",null,"实际上锁的“开”与“关”两个状态（即一个二进制位）并不能完全的存储当前状态的。因为实际上有3种状态：",-1),l("ul",null,[l("li",null,"当前资源未被占用（现在空闲，可以立即显示字幕）"),l("li",null,"当前资源已被占用，但资源没有被预定（正在显示单独的一条字幕，下一条可以允许任何别的字幕显示）"),l("li",null,"当前资源已被占用，而且被预定了（正在显示一串连续字幕的触发组，下一个要显示的字幕也确定好了）")],-1),l("p",null,[e("两个二进制位是无法存储三种状态的，那么多的那个二进制位是从哪儿来的？——那就是，"),l("strong",null,"延时解锁触发还有一个开关状态（允许/禁止）"),e("，它也可以存储信息。")],-1),l("p",null,"这样一来，三种状态就对应了：",-1),l("ul",null,[l("li",null,"当前资源未被占用（“锁”的值为0，延时解锁触发是禁止状态）"),l("li",null,"当前资源已被占用，但资源没有被预定（“锁”的值为1，延时解锁触发是允许状态）"),l("li",null,"当前资源已被占用，而且被预定了（“锁”的值为1，延时解锁触发是禁止状态）")],-1),l("p",null,"而【“锁”的值为0，延时解锁触发是允许状态】这种状态不会出现，就用两个二进制位存储了3种状态",-1)])),"main-header":t(()=>[a(n.$slots,"main-header")]),"main-header-after":t(()=>[a(n.$slots,"main-header-after")]),"main-nav":t(()=>[a(n.$slots,"main-nav")]),"main-content":t(()=>[a(n.$slots,"main-content")]),"main-content-after":t(()=>[a(n.$slots,"main-content-after")]),"main-nav-before":t(()=>[a(n.$slots,"main-nav-before")]),"main-nav-after":t(()=>[a(n.$slots,"main-nav-after")]),comment:t(()=>[a(n.$slots,"comment")]),footer:t(()=>[a(n.$slots,"footer")]),aside:t(()=>[a(n.$slots,"aside")]),"aside-custom":t(()=>[a(n.$slots,"aside-custom")]),default:t(()=>[a(n.$slots,"default")]),_:3},8,["frontmatter"])}}};export{j as default};