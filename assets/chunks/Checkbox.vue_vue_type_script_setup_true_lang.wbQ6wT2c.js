import{_ as r,o as s,c as d,k as l,d as h,g as f,b as n,r as m,m as c,n as p,a1 as k}from"./framework.5W3OCrpp.js";import{u as _}from"./index.oRIrkPVB.js";import{I as b}from"./IconCheckbox.RxYRl1XA.js";const v={},x={width:"10",height:"10",viewBox:"0 0 14 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y=l("rect",{width:"14",height:"2"},null,-1),g=[y];function B(e,a){return s(),d("svg",x,g)}const w=r(v,[["render",B]]),V=["onClick"],C={class:"checkbox__icon"},$={class:"checkbox__label"},I=["checked","name","disabled","value"],E=h({models:{prop:"modelValue",event:"update:modelValue"},__name:"Checkbox",props:{name:{type:String,default:void 0},modelValue:{type:void 0,default:!1},value:{type:void 0,default:!0},uncheckedValue:{type:void 0,default:!1},checked:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1}},emits:["change","update:modelValue"],setup(e){const a=e,o=_(a),i=f(()=>{const t=[];return o.value&&t.push("checkbox--checked"),a.indeterminate&&t.push("checkbox--indeterminate"),a.disabled&&t.push("checkbox--disabled"),a.readonly&&t.push("checkbox--readonly"),t});function u(){!a.readonly&&!a.disabled&&(o.value=!o.value)}return(t,M)=>(s(),d("label",{"data-testid":"checkbox",class:p(["checkbox",c(i)]),onClick:k(u,["prevent"])},[l("span",C,[e.indeterminate?(s(),n(w,{key:0})):(s(),n(b,{key:1}))]),l("span",$,[m(t.$slots,"default")]),l("input",{type:"checkbox",checked:c(o),name:e.name,disabled:e.disabled||e.readonly,value:e.value},null,8,I)],10,V))}});export{E as _};
