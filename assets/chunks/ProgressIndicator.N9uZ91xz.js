import{u as p}from"./index.uAbLSuRm.js";import{u as g}from"./index.gVcbEyr5.js";import{k as f}from"./index.vqmJczYN.js";import{d as _,V as v,g as u,_ as h,o,c as n,k as m,F as $,E as V,O as y,n as k}from"./framework.5W3OCrpp.js";const N=_({props:{modelValue:{type:Number,default:1},direction:{type:String,default:"horizontal"},length:{type:[Number,String],default:6}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","change"],setup(e,{emit:i}){const c=p(e),t=f(v(e,"length"),{nanToZero:!0,method:"parseInt"}),r=g(c,1,t),l=u(()=>{const s=[];return e.direction&&s.push(`progress-indicator--${e.direction}`),s}),a=u(()=>e.direction==="vertical"?{transform:`translateY(calc((100% + .25rem) * ${r.value-1}))`,height:`calc((100% - (.25rem * (${t.value} - 1))) / ${t.value} )`}:{transform:`translateX(calc((100% + .25rem) * ${r.value-1}))`});function d(s){r.value=s,i("change",s)}return{nums:t,setValue:d,activeStyle:a,classNames:l}}}),C={class:"progress-indicator__container"},S=["onClick"];function b(e,i,c,t,r,l){return o(),n("div",{class:k(["progress-indicator",e.classNames]),"data-testid":"progress-indicator"},[m("div",C,[(o(!0),n($,null,V(e.nums,a=>(o(),n("div",{key:a,class:"progress-indicator__item","data-testid":"progress-indicator-item",onClick:d=>e.setValue(a)},null,8,S))),128))]),m("div",{style:y(e.activeStyle),class:"progress-indicator__item progress-indicator__item--active","data-testid":"progress-indicator-item-active"},null,4)],2)}const I=h(N,[["render",b]]);export{I as p};
