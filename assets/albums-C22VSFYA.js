import{e as m,o as t,k as r,w as l,a as c,j as s,t as f,B as $,c as i,F as g,i as k,A,u as C,a3 as Y,af as B,ag as w,h as L,r as P,m as S,b as u,ah as V,ae as F}from"./app-DTK7MkJ3.js";import{o as D}from"./index-kt1v7PTw.js";import{_ as E}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-CQk4e2hF.js";const I=["title"],N=["src","alt","on-error"],R=m({__name:"YunAlbum",props:{album:{}},setup(_){return(e,a)=>{const n=$;return t(),r(n,{class:"yun-album-list-item",to:e.album.url},{default:l(()=>[c("figure",{title:e.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":s(D)},null,40,N),c("figcaption",null," 「"+f(e.album.caption)+"」 ",1)],8,I)]),_:1},8,["to"])}}}),T={class:"yun-album-list"},j=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(e,a)=>{const n=R;return t(),i("div",T,[(t(!0),i(g,null,k(e.albums,o=>(t(),r(n,{key:o.url,album:o},null,8,["album"]))),128))])}}}),z={text:"center",class:"yun-text-light",p:"2"},G=m({__name:"albums",setup(_){const{t:e}=A(),a=C(),n=Y(a);B([w({"@type":"CollectionPage"})]);const o=L(()=>a.value.albums||[]);return(p,H)=>{const b=F,h=E,y=j,d=P("RouterView");return t(),i(g,null,[p.$slots["sidebar-child"]?(t(),r(b,{key:0},{default:l(()=>[S(p.$slots,"sidebar-child")]),_:3})):(t(),r(b,{key:1})),u(d,null,{default:l(({Component:v})=>[(t(),r(V(v),null,{"main-header":l(()=>[u(h,{title:s(n)||s(e)("title.album"),icon:s(a).icon||"i-ri-gallery-line",color:s(a).color,"page-title-class":s(a).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":l(()=>[c("div",z,f(s(e)("counter.albums",o.value.length)),1),u(y,{albums:o.value},null,8,["albums"]),u(d)]),_:2},1024))]),_:1})],64)}}});export{G as default};
