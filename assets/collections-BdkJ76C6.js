import{v as k,e as u,r as _,o as e,k as n,w as t,d as h,c as i,m as w,b as C,ah as b,a as g,F as d,i as v,j as y,ae as B}from"./app-DTK7MkJ3.js";function R(){return{collections:k([{id:"i-and-she",name:"I and She",description:"Love letters from the past"},{id:"love-and-peace",name:"爱与和平",description:"Recipes for a good life"}])}}const V=u({__name:"YunCollectionItem",props:{collection:{}},setup(a){return(s,o)=>{const l=_("RouterLink");return e(),n(l,{class:"inline-flex rounded p-4 h-50 w-40 bg-gray-100 dark:bg-dark-300 shadow",to:`/collections/${s.collection.id}`},{default:t(()=>o[0]||(o[0]=[h(" Book ")])),_:1},8,["to"])}}}),$={flex:"~ wrap",gap:"4"},L=u({__name:"collections",setup(a){const{collections:s}=R();return(o,l)=>{const r=B,p=V,m=_("RouterView");return e(),i(d,null,[o.$slots["sidebar-child"]?(e(),n(r,{key:0},{default:t(()=>[w(o.$slots,"sidebar-child")]),_:3})):(e(),n(r,{key:1})),C(m,null,{default:t(({Component:f})=>[(e(),n(b(f),null,{default:t(()=>[g("div",$,[(e(!0),i(d,null,v(y(s),c=>(e(),n(p,{key:c.id,collection:c},null,8,["collection"]))),128))])]),_:2},1024))]),_:1})],64)}}});export{L as default};
