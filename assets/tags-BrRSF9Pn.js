import{_ as E}from"./YunCard.vue_vue_type_script_setup_true_lang-HOw0TaWD.js";import{_ as F}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-CPj6RK56.js";import{av as P,d as V,o as e,c as S,a as _,t as T,ak as N,al as D,j as I,q as M,W,z as H,u as O,f as Y,B as G,s as J,aw as K,a8 as Q,k as U,i as c,w as a,l as X,g as u,am as Z,h as t,F as B,r as tt,y as et,e as st,aj as nt}from"./app-G45NqZuR.js";import{_ as ot}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-CcdLmUgK.js";import{u as at}from"./tags-D2-p_S_e.js";function rt(g={primary:"#0078E7"}){const s=at(),m=new P("#999999"),f=new P(g.primary);return{tags:s,getTagStyle:o=>{const r=Array.from(s.value).map(([v,C])=>C.count),y=Math.max(...r),n=Math.min(...r),h=y-n,p=(o-n)/h;return{"--yun-tag-color":m.mix(f,p*100).toString(),fontSize:`${p*36+12}px`}}}}const lt={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},it={"inline-flex":""},ct={"inline-flex":"",text:"xs"},ut=V({__name:"YunLayoutPostTag",props:{title:{},count:{}},setup(g){return(s,m)=>(e(),S("span",lt,[_("span",it,"#"+T(s.title),1),_("span",ct,"["+T(s.count)+"]",1)]))}}),mt={class:"yun-text-light",text:"center",p:"2"},pt={class:"justify-center items-end",flex:"~ wrap",gap:"1"},vt=V({__name:"tags",setup(g){N([D({"@type":"CollectionPage"})]);const s=I(),m=M(),f=W(),{t:d}=H(),o=O(),{tags:r,getTagStyle:y}=rt({primary:f.value.colors.primary}),n=Y(()=>s.query.tag||""),h=G(),p=Y(()=>h.postList.filter(i=>i.tags?typeof i.tags=="string"?i.tags===n.value:i.tags.includes(n.value):!1)),v=J(),{show:C}=K(v);function L(l){m.push({query:{tag:l}}),C()}const R=Q(o);return(l,i)=>{const w=nt,$=ot,j=ut,k=U("RouterView"),q=F,z=E;return e(),S(B,null,[l.$slots["sidebar-child"]?(e(),c(w,{key:0},{default:a(()=>[X(l.$slots,"sidebar-child")]),_:3})):(e(),c(w,{key:1})),u(k,null,{default:a(({Component:A})=>[(e(),c(Z(A),null,{"main-header":a(()=>[u($,{title:t(R)||t(d)("menu.tags"),icon:t(o).icon||"i-ri-tag-line",color:t(o).color,"page-title-class":t(o).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":a(()=>[_("div",mt,T(t(d)("counter.tags",Array.from(t(r)).length)),1),_("div",pt,[(e(!0),S(B,null,tt(Array.from(t(r)).sort(),([x,b])=>(e(),c(j,{key:x,title:x,count:b.count,style:et(t(y)(b.count)),onClick:_t=>L(x.toString())},null,8,["title","count","style","onClick"]))),128))]),u(k)]),"main-nav-before":a(()=>[n.value?(e(),c(z,{key:0,ref_key:"collapse",ref:v,m:"t-4",w:"full"},{default:a(()=>[u($,{title:n.value,icon:"i-ri-hashtag"},null,8,["title"]),u(q,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:p.value},null,8,["posts"])]),_:1},512)):st("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{vt as default};
