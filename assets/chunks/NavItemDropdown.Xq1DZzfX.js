import{_ as d}from"./Dropdown.vue_vue_type_script_setup_true_lang.Ej6GkZx1.js";import"./Dropdown.vue_vue_type_style_index_0_lang.CME6bZRr.js";import{u as l}from"./index.uAbLSuRm.js";import{d as r,_ as i,D as m,o as p,c as u,I as f,w as o,t as c,a as v,r as a}from"./framework.5W3OCrpp.js";const y=r({components:{Dropdown:d},props:{modelValue:{type:Boolean,default:!1},text:{type:String,default:""},icon:{type:Boolean,default:!1},size:{type:String,default:"md"},variant:{type:String,default:"ghost"},noCaret:{type:Boolean,default:!1},placement:{type:String,default:"bottom-end"},menuClass:{type:[String,Array,Object],default:void 0},menuSize:{type:String,default:"sm"},divider:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(e){return{model:l(e)}}}),S={"data-testid":"nav-item-dropdown",class:"nav__item nav__item--dropdown"};function V(e,t,g,w,z,C){const n=m("Dropdown");return p(),u("li",S,[f(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),text:e.text,icon:e.icon,variant:e.variant,size:e.size,placement:e.placement,"no-caret":e.noCaret,divider:e.divider,"menu-class":e.menuClass,"menu-size":e.menuSize},{"button-content":o(()=>[a(e.$slots,"button-content",{},()=>[v(c(e.text),1)])]),default:o(()=>[a(e.$slots,"default")]),_:3},8,["modelValue","text","icon","variant","size","placement","no-caret","divider","menu-class","menu-size"])])}const b=i(y,[["render",V]]);export{b as p};
