function u(e,t){return Math.random()*(t-e)+e}function a(e,t){let o,r=!1;return()=>{o&&clearTimeout(o),r?o=setTimeout(e,t):(e(),r=!0,setTimeout(()=>{r=!1},t))}}export{u as r,a as t};
