function u(o){return new Promise((r,n)=>{const t=new FileReader,s=()=>{c(),r(t.result)},a=e=>{c(),n(e)},c=()=>{t.removeEventListener("load",s),t.removeEventListener("error",a)};t.addEventListener("load",s),t.addEventListener("error",a),t.readAsDataURL(o)})}function l(o,r,n){if(o)try{const t=r!=null?r:new Date().toISOString(),[s,a]=o.split(","),c=n!=null?n:s.match(/:(.*?);/)[1],e=window.atob(a),i=new Uint8Array(e.length);for(let d=0;d<e.length;d++)i[d]=e.codePointAt(d);return new globalThis.File([i],t,{type:c})}catch(t){}}export{l as f,u as t};
