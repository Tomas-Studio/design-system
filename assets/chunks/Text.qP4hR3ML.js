import{d as s,g as n,D as f,_ as i,o as l,b as o,w as m,r as u,n as c,J as d}from"./framework.5W3OCrpp.js";const h=s({props:{variant:{type:String,default:"body"},href:{type:[String,Object],default:void 0},weight:{type:String,default:"normal"},transform:{type:String,default:"normalcase"},element:{type:String,default:"span"}},setup(e){const a=n(()=>e.href?f("nuxt-link"):e.element);return{classNames:n(()=>{const t=[""];return e.variant&&t.push(`freetext--${e.variant}`),e.weight&&t.push(`freetext--${e.weight}`),e.transform&&t.push(`freetext--${e.transform}`),e.href&&t.push("freetext--hyperlink"),e.href&&(e.variant==="caption"||e.variant==="caption2")&&t.push("freetext--medium"),t}),elementNames:a}}});function g(e,a,r,t,p,x){return l(),o(d(e.elementNames),{"data-testid":"freetext",class:c(["freetext",e.classNames]),href:e.href},{default:m(()=>[u(e.$slots,"default")]),_:3},8,["class","href"])}const y=i(h,[["render",g]]);export{y as p};
