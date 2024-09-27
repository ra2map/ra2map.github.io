import{d as h,z as C,C as w,f as x,as as N,s as V,N as j,o as n,c as i,a as o,t as g,h as t,b as $,e as p,k as z,F as P,r as U,i as _,w as v,n as b,y as F,j as A,a6 as W,u as q,at as H,D as Y,ak as E,au as I,l as S,g as k,am as O,aj as Q}from"./app-G45NqZuR.js";import{_ as G,a as J}from"./YunPostCategories.vue_vue_type_script_setup_true_lang-Baa4E1VL.js";import{_ as K}from"./YunPostMeta.vue_vue_type_style_index_0_lang-Dzm6dkq3.js";import"./index-CpRw8AFc.js";const X={class:"post-copyright"},Z={class:"post-copyright-title"},ee={key:0},te={key:1},ne={key:2},oe=h({__name:"ValaxyCopyright",setup(y){const{locale:s}=C(),e=w(),a=e.value.license.type==="zero"?"1.0":"4.0",m=e.value.license.type==="zero"?"publicdomain":"licenses",l=`<a href="${x(()=>{const u=e.value.license.language?e.value.license.language:s.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${m}/${e.value.license.type}/${a}/deed.${u}`}).value}" target="_blank" rel="noopener" title="CC ${`${e.value.license.type.toUpperCase()} ${a}`} ">CC ${e.value.license.type.toUpperCase()}</a>`,r=N(),d=V();return j(()=>{const u=window.location;d.value.href=u.href.replace(u.hash,""),d.value.innerText=u.href.replace(u.hash,"")}),(u,c)=>(n(),i("ul",X,[o("li",Z,g(t(r).title),1),o("li",null,[o("a",{ref_key:"link",ref:d,href:"",target:"_blank"},null,512)]),o("li",null,[t(r).frontmatter.author?(n(),i("span",ee,[c[0]||(c[0]=o("strong",null,"作者：",-1)),$(g(t(r).frontmatter.author)+"  ",1)])):p("v-if",!0),t(r).frontmatter.date?(n(),i("span",te,[c[1]||(c[1]=o("strong",null,"发布于：",-1)),$(g(t(r).frontmatter.date.slice(0,10))+"  ",1)])):p("v-if",!0),t(r).frontmatter.updated&&t(r).frontmatter.updated!=t(r).frontmatter.date?(n(),i("span",ne,[c[2]||(c[2]=o("strong",null,"更新于：",-1)),$(g(t(r).frontmatter.updated.slice(0,10))+"  ",1)])):p("v-if",!0),c[3]||(c[3]=o("strong",null,"许可协议：",-1)),c[4]||(c[4]=$("若无特别说明，均为 ")),o("span",{innerHTML:l})])]))}}),se={class:"yun-sponsor-container flex-center flex-col"},ae=["title"],re={key:0,class:"sponsor-description",mb:"4",text:"sm"},le={class:"flex justify-around"},ie=["src"],ue=h({__name:"YunSponsor",setup(y){const{t:s}=C(),e=w(),a=V(!1),m=x(()=>{var f;return((f=e.value.sponsor)==null?void 0:f.title)??s("reward.donate")});return(f,l)=>{const r=z("RouterLink");return n(),i("div",se,[o("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:m.value,text:"red-400",onClick:l[0]||(l[0]=d=>a.value=!a.value)},l[1]||(l[1]=[o("div",{"i-ri-heart-line":""},null,-1)]),8,ae),o("div",{class:b(["qrcode-container qrcode flex-center flex-col",a.value&&"show"]),m:"y-4"},[t(e).sponsor.description?(n(),i("div",re,g(t(e).sponsor.description),1)):p("v-if",!0),o("div",le,[(n(!0),i(P,null,U(t(e).sponsor.methods,(d,u)=>(n(),_(r,{key:u,class:"flex-center flex-col animate-iteration-1 animate-fade-in",to:d.name,style:F(`color:${d.color}`)},{default:v(()=>[o("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:d.url},null,8,ie),o("div",{text:"xl",m:"2",class:b(d.icon)},null,2)]),_:2},1032,["to","style"]))),128))])],2)])}}}),ce={class:"inline-flex",text:"sm",py:"1"},pe={key:1,mx:"2"},me=h({__name:"YunPostCategoriesAndTags",props:{frontmatter:{}},setup(y){return(s,e)=>{const a=G,m=J;return n(),i("div",ce,[s.frontmatter.categories?(n(),_(a,{key:0,categories:s.frontmatter.categories},null,8,["categories"])):p("v-if",!0),s.frontmatter.categories&&s.frontmatter.tags?(n(),i("span",pe)):p("v-if",!0),s.frontmatter.tags?(n(),_(m,{key:2,tags:s.frontmatter.tags},null,8,["tags"])):p("v-if",!0)])}}}),de={key:0,flex:"~",text:"sm",my:"1",h:"5"},fe=["title"],_e=["data-path"],ve=["title"],ge=["data-path"],he=h({__name:"YunWalineMeta",setup(y){const s=A(),e=W(),a=x(()=>e.value.addons["valaxy-addon-waline"]),{t:m}=C();return(f,l)=>a.value&&a.value.options?(n(),i("div",de,[a.value.options.pageview?(n(),i("div",{key:0,"inline-flex":"",justify:"center",items:"center",mx:"2",title:t(m)("post.pageview_count")},[l[0]||(l[0]=o("div",{"inline-flex":"","i-ri-eye-line":""},null,-1)),o("span",{"ml-1":"","inline-flex":"",class:"waline-pageview-count","data-path":t(s).path},null,8,_e)],8,fe)):p("v-if",!0),a.value.options.comment?(n(),i("div",{key:1,"inline-flex":"",justify:"center",items:"center",mx:"2",title:t(m)("post.comment_count")},[l[1]||(l[1]=o("div",{"inline-flex":"","i-ri-chat-4-line":""},null,-1)),o("span",{"ml-1":"","inline-flex":"",class:"waline-comment-count","data-path":t(s).path},null,8,ge)],8,ve)):p("v-if",!0)])):p("v-if",!0)}}),Ce=h({__name:"post",setup(y){const s=w(),e=q(),a=H(),m=x(()=>typeof e.value.sponsor=="boolean"?e.value.sponsor:s.value.sponsor.enable),f={"@type":"BlogPosting",headline:e.value.title,description:e.value.description,author:[{name:s.value.author.name,url:s.value.author.link}],datePublished:Y(e.value.date||""),dateModified:Y(e.value.updated||"")},l=e.value.image||e.value.cover;return l&&(f.image=l),E(I(f)),(r,d)=>{const u=Q,c=K,R=he,L=me,T=ue,B=oe,D=z("RouterView");return n(),i(P,null,[r.$slots["sidebar-child"]?(n(),_(u,{key:0},{default:v(()=>[S(r.$slots,"sidebar-child")]),_:3})):(n(),_(u,{key:1})),k(D,null,{default:v(({Component:M})=>[(n(),_(O(M),null,{"main-header-after":v(()=>[k(c,{frontmatter:t(e)},null,8,["frontmatter"]),k(R),k(L,{frontmatter:t(e)},null,8,["frontmatter"])]),"main-content-after":v(()=>[m.value?(n(),_(T,{key:0,m:"t-6"})):p("v-if",!0),t(e).copyright||t(e).copyright!==!1&&t(s).license.enabled?(n(),_(B,{key:1,url:t(a),m:"y-4"},null,8,["url"])):p("v-if",!0)]),"aside-custom":v(()=>[S(r.$slots,"aside-custom")]),_:2},1024))]),_:3})],64)}}});export{Ce as default};
