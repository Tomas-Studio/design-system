import{T as h}from"../components_toast_index.md.8Go4VSXw.js";import{d as m,h as f,g as T,_,D as v,o as a,c as p,I as k,w as u,F as g,E as y,b as l,J as C,e as b,n as d,aZ as w,G as x,al as G,P as D}from"./framework.5W3OCrpp.js";import"./Button.vue_vue_type_script_setup_true_lang.EqSgP6OH.js";import"./index.hjpy5ZnQ.js";import"./SpinnerRinggo.fbIZkiat.js";import"./Button.vue_vue_type_style_index_0_lang.w40geAFS.js";import"./16.sG-bdMPB.js";import"./index.xrtdoFjR.js";import"./commonjsHelpers.4gQjN7DL.js";import"./vite-browser-external_commonjs-proxy.KqFAHE5p.js";import"./defu.sEzLH6yp.js";import"./use-singleton.yYWIbiAX.js";import"./Banner.COOtr5dL.js";import"./20.7Ywwt4rc.js";import"./Banner.vue_vue_type_style_index_0_lang.w40geAFS.js";const N=m({components:{Toast:h},props:{position:{type:String,default:"bottom-left"}},setup(o){const e=f([]),i=T(()=>{const s=[];return o.position&&s.push(`toast-container--${o.position}`),s});function r(s){const c={...s,_id:Symbol("id")};o.position.startsWith("bottom")?e.value.push(c):e.value.unshift(c)}function n(s){e.value.splice(s,1)}return{add:r,remove:n,items:e,classNames:i}}}),B=["src"];function R(o,e,i,r,n,s){const c=v("Toast");return a(),p("div",{"data-testid":"toast-container",class:d(["toast-container",o.classNames])},[k(w,{tag:"div",name:"toast"},{default:u(()=>[(a(!0),p(g,null,y(o.items,(t,$)=>(a(),l(c,{key:t._id,title:t.title,text:t.text,type:t.type,variant:t.variant,duration:t.duration,"icon-color":t.iconColor,class:d(t.toastClass),onDismissed:V=>o.remove($)},{icon:u(()=>[t.icon&&typeof t.icon=="string"?(a(),p("img",{key:0,src:t.icon,alt:"toast-icon"},null,8,B)):t.icon?(a(),l(C(t.icon),{key:1})):b("",!0)]),_:2},1032,["title","text","type","variant","duration","icon-color","class","onDismissed"]))),128))]),_:1})],2)}const E=_(N,[["render",R]]),F=m({components:{ToastGroup:E},setup(){const o=x(new Map);async function e(i){var s;const r=i.position||"bottom-left";let n=o.value.get(r);n||(n={ref:f(),position:r},o.value.set(r,n),G(o),await D()),(s=n.ref.value)==null||s.at(0).add(i)}return{add:e,groups:o}}});function S(o,e,i,r,n,s){const c=v("ToastGroup");return a(),p("div",null,[(a(!0),p(g,null,y(o.groups.values(),t=>(a(),l(c,{key:t.position,ref_for:!0,ref:t.ref,position:t.position},null,8,["position"]))),128))])}const U=_(F,[["render",S]]);export{U as default};
