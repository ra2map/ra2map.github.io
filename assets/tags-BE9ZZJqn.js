import{C as r,h as c}from"./app-DTK7MkJ3.js";function u(){const n=r();return c(()=>{const t=new Map;return n.postList.forEach(e=>{if(e.tags){let o;typeof e.tags=="string"?o=[e.tags]:o=e.tags,o.forEach(s=>{if(t.has(s)){const a=t.get(s);t.set(s,{...a,count:a.count+1})}else t.set(s,{count:1})})}}),t})}export{u};
