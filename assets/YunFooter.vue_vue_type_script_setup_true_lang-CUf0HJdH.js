import{e as x,A as C,a6 as w,D as T,W as V,h as f,a7 as l,o as r,c as i,j as e,a as t,t as s,g as p,d as n,F,n as g,a8 as $,m as j}from"./app-DTK7MkJ3.js";const B={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},D={key:0,class:"beian",m:"y-2"},H={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},N={class:"copyright flex justify-center items-center gap-2",p:"1"},S={key:1,class:"powered",m:"2"},Y=["innerHTML"],z=["href","title"],M=x({__name:"YunFooter",setup(I){const{t:c}=C(),v=w(),_=T(),o=V(),u=new Date().getFullYear(),y=f(()=>u===o.value.footer.since),h=f(()=>c("footer.powered",[`<a href="${l.repository.url}" target="_blank" rel="noopener">Valaxy</a> v${l.version}`])),k=f(()=>o.value.footer.icon||{url:l.repository.url,name:"i-ri-cloud-line",title:l.name});return(b,a)=>{var d,m;return r(),i("footer",B,[(d=e(o).footer.beian)!=null&&d.enable&&e(o).footer.beian.icp?(r(),i("div",D,[t("a",H,s(e(o).footer.beian.icp),1)])):p("v-if",!0),t("div",N,[t("span",null,[a[0]||(a[0]=n(" © ")),y.value?p("v-if",!0):(r(),i(F,{key:0},[n(s(e(o).footer.since)+" - ",1)],64)),n(" "+s(e(u)),1)]),(m=e(o).footer.icon)!=null&&m.enable?(r(),i("a",{key:0,class:g(["inline-flex",e(o).footer.icon.animated?"animate-pulse":""]),href:"javascript:;"},[t("div",{class:g(k.value.name)},null,2)],2)):p("v-if",!0),t("span",null,s(e(_).author.name),1)]),e(o).footer.powered?(r(),i("div",S,[t("span",{innerHTML:h.value},null,8,Y),a[1]||(a[1]=n(" | ")),t("span",null,[n(s(e(c)("footer.theme"))+" - ",1),t("a",{href:e(o).pkg.repository.url,title:e(o).pkg.name,target:"_blank"},s($(e(v).theme)),9,z),n(" v"+s(e(o).pkg.version),1)])])):p("v-if",!0),a[2]||(a[2]=t("div",{class:"powered",m:"2",style:{display:"none"}},[t("span",null,[n("本站基于🌧雨云运行，"),t("a",{href:"",target:"_blank",rel:"noopener"},"邀请链接")])],-1)),a[3]||(a[3]=t("div",{class:"powered",m:"2",style:{display:"none"}},[t("span",null,[n("本站部分资费由"),t("a",{href:"",target:"_blank",rel:"noopener"},"邀请链接"),n("赞助")])],-1)),j(b.$slots,"default")])}}});export{M as _};
