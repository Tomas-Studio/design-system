import{d as h,g as y,c as l,k as o,r,e as i,b as p,w as c,I as f,T as k,n as v,m as a,o as s,a5 as n}from"./framework.5W3OCrpp.js";import{I as m}from"./20.7Ywwt4rc.js";import{p as b}from"./Caption.lyGTd4HY.js";import{v as u}from"./index.xrtdoFjR.js";import{v as B}from"./index.ZfSagMVW.js";const $={"data-testid":"form-group-label",class:"form-group__label"},C={key:1,"data-testid":"form-group-required"},S={class:"form-group__inputs"},I={key:0,"data-testid":"form-group-error",class:"form-group__error"},z={key:1,"data-testid":"form-group-description",class:"form-group__description"},D=h({__name:"FormGroup",props:{required:{type:Boolean,default:!1},label:{type:String,default:""},caption:{type:String,default:""},description:{type:String,default:""},hint:{type:String,default:""},error:{type:String,default:""},horizontal:{type:Boolean,default:!1},errorIcon:{type:Boolean,default:!1}},setup(e){const d=e,g=y(()=>{const t=[];return d.error&&t.push("form-group--error","state--error"),d.horizontal&&t.push("form-group--horizontal"),t});return(t,N)=>(s(),l("div",{class:v(["form-group",a(g)]),"data-testid":"form-group"},[o("label",$,[e.hint?r(t.$slots,"hint",{key:0},()=>[n(f(m,{"data-testid":"form-group-hint",class:"form-group__hint"},null,512),[[a(B),e.hint]])]):i("",!0),r(t.$slots,"label",{},()=>[n(o("span",null,null,512),[[a(u),e.label,void 0,{inline:!0}]])]),e.required?(s(),l("sup",C,"*")):i("",!0),e.caption?(s(),p(b,{key:2,"data-testid":"form-group-caption"},{default:c(()=>[r(t.$slots,"caption",{},()=>[n(o("span",null,null,512),[[a(u),e.caption,void 0,{inline:!0}]])])]),_:3})):i("",!0)]),o("div",S,[r(t.$slots,"default"),f(k,{name:"slide-up",mode:"out-in"},{default:c(()=>[e.error?(s(),l("p",I,[r(t.$slots,"error-icon",{},()=>[e.errorIcon?(s(),p(m,{key:0,"data-testid":"form-group-error-icon"})):i("",!0)]),r(t.$slots,"error",{},()=>[n(o("span",null,null,512),[[a(u),e.error,void 0,{inline:!0}]])])])):e.description?(s(),l("p",z,[r(t.$slots,"description",{},()=>[n(o("span",null,null,512),[[a(u),e.description,void 0,{inline:!0}]])])])):i("",!0)]),_:3})])],2))}});export{D as _};
