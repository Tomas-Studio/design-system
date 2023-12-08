var j=Object.defineProperty;var z=(e,t,s)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var v=(e,t,s)=>(z(e,typeof t!="symbol"?t+"":t,s),s);import{t as G,j as J,e as W}from"./chunks/index.vDTeR44h.js";import{_ as L}from"./chunks/Button.vue_vue_type_script_setup_true_lang.EqSgP6OH.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.w40geAFS.js";import{u as M}from"./chunks/index.uAbLSuRm.js";import{u as U,d as Q,t as I,p as H,a as K,r as Y}from"./chunks/index.mTDbtL7c.js";import{G as Z,j as V,X as ee,a7 as te,d as P,h as b,y as A,_ as B,D as w,o as g,c as E,k as h,b as q,w as c,t as C,a as X,e as T,I as n,g as D,a8 as se,a5 as ae,F as ie,n as $,T as le,O as ne,J as oe,f as re,m as f,R as m,a4 as N}from"./chunks/framework.5W3OCrpp.js";import{t as de}from"./chunks/throttle.Yy5L90F6.js";import{p as he}from"./chunks/Caption.lyGTd4HY.js";import{f as S}from"./chunks/base64.6dLoFO2g.js";import{l as x}from"./chunks/load-image.o1nqrQGg.js";import{I as pe}from"./chunks/20.G49Uku6_.js";import{p as ce}from"./chunks/index.bhOh96es.js";import{c as ue}from"./chunks/create-image._im0xJpR.js";import"./chunks/index.vqmJczYN.js";import"./chunks/index.hjpy5ZnQ.js";import"./chunks/SpinnerRinggo.fbIZkiat.js";import"./chunks/index.7xvmVwVd.js";import"./chunks/defu.sEzLH6yp.js";import"./chunks/debounce.fM6nWQov.js";import"./chunks/isObject.mlSoqgao.js";import"./chunks/isObjectLike.OM1Hublo.js";import"./chunks/toNumber.jidAZ9H9.js";import"./chunks/isSymbol.K1VvrVGN.js";import"./chunks/Caption.vue_vue_type_style_index_0_lang.w40geAFS.js";import"./chunks/avatar.CzBZbX_M.js";import"./chunks/color-hash.7xxmQZVO.js";function ke(e,t){const s=Z();V(async()=>{if(e.value){const{default:i}=await ee(()=>import("./chunks/interact.min.kN5JJCg1.js").then(o=>o.i),__vite__mapDeps([0,1])),a=de(t.onmove,1e3/60);s.value=i(e.value).styleCursor(!1).draggable({origin:"self",inertia:{enabled:!0,resistance:10},onstart:t.onstart,onmove:a,onend:a})}}),te(async()=>{var i;(i=s.value)==null||i.unset()})}class ge{constructor(t){v(this,"lastX");v(this,"lastY");v(this,"movingX");v(this,"movingY");v(this,"smoother");this.lastX=0,this.lastY=0,this.movingX=0,this.movingY=0,this.smoother=t*.05+.7}start(t,s){this.lastX=t,this.lastY=s,this.movingX=0,this.movingY=0}move(t,s){const i=this.lastX,a=this.lastY,o=(this.movingX+(i-t)*.1)*this.smoother,l=(this.movingY+(a-s)*.1)*this.smoother,r=i-o,d=a-l;return this.movingX=o,this.movingY=l,this.lastX=r,this.lastY=d,[i,a,r,d]}}function Ee(e){return Array.from({length:e}).map((t,s)=>new ge(s/(e*1.25)))}const me=P({components:{Caption:he,Button:L},props:{modelValue:{type:[String,globalThis.File],default:""},modelModifiers:{type:Object,default:()=>({})},width:{type:Number,default:430},height:{type:Number,default:230},color:{type:String,default:"#000000"},placeholder:{type:String,default:""},resetLabel:{type:String,default:"Reset"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(e){const t=M(e),s=U(t,""),i=b(!0),a=G("canvas"),o=Ee(15);function l(){K(a.value),i.value=!0,t.value=""}function r(d){if(!i.value){Y(a.value,d);const u=I(a.value),k=e.modelModifiers.base64?u:S(u);t.value=k}}return A(()=>e.color,r),ke(a,{onstart(d){for(const u of o)u.start(d.pageX,d.pageY)},onmove(d){for(const p of o){const y=p.move(d.pageX,d.pageY),F={color:e.color};Q(a.value,y,F)}const u=I(a.value),k=e.modelModifiers.base64?u:S(u);i.value=!1,t.value=k}}),V(()=>{t.value&&s.value&&(H(a.value,s.value),i.value=!1)}),{model:t,reset:l,isBlank:i,setColor:r}}}),ye={class:"signature-draw signature-draw--desktop","data-testid":"signature-draw-desktop"},ve=["width","height"],fe={key:1,class:"signature-draw__control"};function _e(e,t,s,i,a,o){const l=w("Caption"),r=w("Button");return g(),E("div",ye,[h("canvas",{ref:"canvas",class:"signature-draw__canvas","data-testid":"signature-draw-canvas",width:e.width,height:e.height},null,8,ve),e.isBlank?(g(),q(l,{key:0,class:"signature-draw__placeholder","data-testid":"signature-draw-placeholder"},{default:c(()=>[X(C(e.placeholder),1)]),_:1})):T("",!0),e.isBlank?T("",!0):(g(),E("div",fe,[n(r,{"data-testid":"signature-draw-reset",variant:"link",size:"xs",class:"signature-draw__reset",pill:"",onClick:t[0]||(t[0]=d=>e.reset())},{default:c(()=>[h("span",null,C(e.resetLabel),1)]),_:1})]))])}const O=B(me,[["render",_e]]);async function R(e,t){const s=document.createElement("canvas"),i=s.getContext("2d"),a=await x(e);return s.width=t%180===0?a.width:a.height,s.height=t%180===0?a.height:a.width,i.translate(s.width/2,s.height/2),i.rotate(t*Math.PI/180),i.drawImage(a,a.width/-2,a.height/-2),s.toDataURL()}async function we(e,t){const s=document.createElement("canvas"),i=s.getContext("2d"),a=await x(e);return s.width=a.width,s.height=a.height,i.drawImage(a,0,0),Y(s,t),s.toDataURL()}const be=P({components:{Button:L,IconEdit:pe,SignatureDrawDesktop:O},directives:{pAspectRatio:ce},props:{modelValue:{type:[String,globalThis.File],default:""},modelModifiers:{type:Object,default:()=>({})},width:{type:Number,default:430},height:{type:Number,default:230},color:{type:String,default:"#000000"},placeholder:{type:String,default:""},resetLabel:{type:String,default:"Reset"},openDrawLabel:{type:String,default:"Click to Draw"},closeDrawLabel:{type:String,default:"Save"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(e){const t=M(e),s=U(t,""),i=b(""),a=b(!1),o=J(),l=D(()=>o.width.value<e.width+32?"rotate":"normal"),r=D(()=>{const p=[];return l.value&&p.push(`signature-draw--${l.value}`),p}),d=D(()=>({width:`${e.width}px`,aspectRatio:`${e.width/e.height}`}));async function u(){const p=s.value&&l.value==="rotate"?await R(s.value,90):s.value;i.value=p,a.value=!0}async function k(){const p=i.value&&l.value==="rotate"?await R(i.value,-90):i.value,y=e.modelModifiers.base64?p:S(p);t.value=y,a.value=!1}return A(()=>e.color,async p=>{if(!a.value&&s.value){const y=await we(s.value,p),F=e.modelModifiers.base64?y:S(y);t.value=F,a.value=!1}}),A(a,p=>{p?document.body.style.setProperty("overflow-y","hidden"):document.body.style.removeProperty("overflow-y")}),{classNames:r,style:d,rawModel:i,preview:s,model:t,isOpen:a,mode:l,open:u,close:k}}}),Ce={class:"signature-draw__preview"},De=["src"],Se={key:0,class:"signature-draw__modal","data-testid":"signature-draw-modal"};function Fe(e,t,s,i,a,o){const l=w("IconEdit"),r=w("Button"),d=w("SignatureDrawDesktop"),u=se("p-aspect-ratio");return ae((g(),E("div",{class:$(["signature-draw signature-draw--mobile",e.classNames]),"data-testid":"signature-draw-mobile",style:ne(e.style)},[h("div",Ce,[e.model?(g(),E(ie,{key:0},[h("img",{src:e.preview,alt:"signature-draw-preview","data-testid":"signature-draw-preview",onClick:t[0]||(t[0]=k=>e.open())},null,8,De),n(r,{variant:"link",size:"xs",class:"signature-draw__reset","data-testid":"signature-draw-edit",icon:"",onClick:t[1]||(t[1]=k=>e.open())},{default:c(()=>[n(l)]),_:1})],64)):(g(),q(r,{key:1,"data-testid":"signature-draw-open",onClick:t[2]||(t[2]=k=>e.open())},{default:c(()=>[X(C(e.openDrawLabel),1)]),_:1}))]),n(le,{name:"zoom-in"},{default:c(()=>[e.isOpen?(g(),E("div",Se,[n(d,{modelValue:e.rawModel,"onUpdate:modelValue":t[3]||(t[3]=k=>e.rawModel=k),modelModifiers:{base64:!0},class:$(e.classNames),placeholder:e.placeholder,color:e.color,width:e.mode==="rotate"?e.height:e.width,height:e.mode==="rotate"?e.width:e.height,"reset-label":e.resetLabel},null,8,["modelValue","class","placeholder","color","width","height","reset-label"]),n(r,{class:"signature-draw__close",nganu:"1311","data-testid":"signature-draw-close",onClick:t[4]||(t[4]=k=>e.close())},{default:c(()=>[h("span",null,C(e.closeDrawLabel),1)]),_:1})])):T("",!0)]),_:1})],6)),[[u,e.width/e.height]])}const Ae=B(be,[["render",Fe]]),Te=P({props:{modelValue:{type:[String,globalThis.File],default:""},modelModifiers:{type:Object,default:()=>({})},width:{type:Number,default:430},height:{type:Number,default:230},color:{type:String,default:"#000000"},placeholder:{type:String,default:""},resetLabel:{type:String,default:"Reset"},openDrawLabel:{type:String,default:"Click to Draw"},closeDrawLabel:{type:String,default:"Save"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(){const e=b(!1),t=W("(min-width: 768px)"),s=D(()=>t.value?O:Ae);return V(()=>{e.value=!0}),{view:s,ready:e,createSpinner:ue}}}),Ve={key:1,class:"signature-draw"},Pe=["src"];function Be(e,t,s,i,a,o){return e.ready?(g(),q(oe(e.view),{key:0,"model-value":e.modelValue,"model-modifiers":e.modelModifiers,width:e.width,height:e.height,color:e.color,placeholder:e.placeholder,"reset-label":e.resetLabel,"open-draw-label":e.openDrawLabel,"close-draw-label":e.closeDrawLabel,"onUpdate:modelValue":t[0]||(t[0]=l=>e.$emit("update:modelValue",l))},null,8,["model-value","model-modifiers","width","height","color","placeholder","reset-label","open-draw-label","close-draw-label"])):(g(),E("div",Ve,[h("img",{class:"signature-draw__fallback",src:e.createSpinner(e.width,e.height),alt:"signature-draw"},null,8,Pe)]))}const _=B(Te,[["render",Be]]),qe=m('<h1 id="signature-draw" tabindex="-1">Signature Draw <a class="header-anchor" href="#signature-draw" aria-label="Permalink to &quot;Signature Draw&quot;">​</a></h1><blockquote><p>Draw signature like using real pen</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3>',4),Ie=m(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-signature-draw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="for-initial" tabindex="-1">for Initial <a class="header-anchor" href="#for-initial" aria-label="Permalink to &quot;for Initial&quot;">​</a></h3>`,2),$e=m(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-signature-draw</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;230&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="placeholder" tabindex="-1">Placeholder <a class="header-anchor" href="#placeholder" aria-label="Permalink to &quot;Placeholder&quot;">​</a></h2>`,2),Ne=m(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-signature-draw</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Draw signature here&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="color" tabindex="-1">Color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;Color&quot;">​</a></h2><p>Set pen color with prop <code>color</code>, default is <code>#000000</code></p>`,3),Re=m(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-signature-draw</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#73185E&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="binding-v-model" tabindex="-1">Binding v-model <a class="header-anchor" href="#binding-v-model" aria-label="Permalink to &quot;Binding v-model&quot;">​</a></h2><p>You can bind the result of drawing&#39;s image with <code>v-model</code></p>`,3),Le=h("p",null,[h("strong",null,"result")],-1),Me={class:"truncate"},Ue=m(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-signature-draw</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="encode-to-base64" tabindex="-1">Encode to base64 <a class="header-anchor" href="#encode-to-base64" aria-label="Permalink to &quot;Encode to base64&quot;">​</a></h3><p>By default, this component keep v-model value as <a href="https://developer.mozilla.org/en-US/docs/Web/API/File" target="_blank" rel="noreferrer">File</a> object. If you need <a href="https://en.wikipedia.org/wiki/Data_URI_scheme" target="_blank" rel="noreferrer">base64-dataURI</a> format, you can add modifier <code>base64</code> to your <code>v-model</code>.</p>`,3),Ye=h("p",null,[h("strong",null,"result")],-1),Xe={class:"truncate"},xe=["src"],Oe=m(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-signature-draw</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model.base64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>width</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>430</code></td><td>Canvas&#39;s width</td></tr><tr><td><code>height</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>230</code></td><td>Canvas&#39;s width</td></tr><tr><td><code>placeholder</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Canvas&#39;s placeholder</td></tr><tr><td><code>color</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>#000000</code></td><td>Pencil color</td></tr><tr><td><code>modelValue</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Result of draw image</td></tr><tr><td><code>resetLabel</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>Reset</code></td><td>Reset button&#39;s label</td></tr><tr><td><code>openDrawLabel</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>Click to Draw</code></td><td>Start draw button&#39;s label (in mobile-view)</td></tr><tr><td><code>closeDrawLabel</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>Save</code></td><td>Save draw button&#39;s label (in mobile-view)</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td colspan="2" class="text-center">There no slots here</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td colspan="3" class="text-center">There no props here</td></tr></tbody></table>`,8),vt=JSON.parse('{"title":"Signature Draw · Components","description":"Draw signature like using real pen","frontmatter":{"title":"Signature Draw · Components","description":"Draw signature like using real pen"},"headers":[],"relativePath":"components/signature-draw/index.md","filePath":"components/signature-draw/index.md"}'),je={name:"components/signature-draw/index.md"},ft=Object.assign(je,{setup(e){const t=re("/assets/images/empty-img.png"),s=b(),i=b();return(a,o)=>{const l=w("preview");return g(),E("div",null,[qe,n(l,null,{default:c(()=>[n(_)]),_:1}),Ie,n(l,{class:"flex-col"},{default:c(()=>[n(_,{width:230})]),_:1}),$e,n(l,{class:"flex-col"},{default:c(()=>[n(_,{placeholder:"Draw signature here"})]),_:1}),Ne,n(l,{class:"flex-col space-y-2"},{default:c(()=>[n(_,{color:"#73185E"})]),_:1}),Re,n(l,{class:"flex-col space-y-2"},{default:c(()=>[n(_,{modelValue:f(s),"onUpdate:modelValue":o[0]||(o[0]=r=>N(s)?s.value=r:null)},null,8,["modelValue"])]),_:1}),Le,h("pre",Me,[h("code",null,C(f(s)),1)]),Ue,n(l,{class:"flex-col space-y-2"},{default:c(()=>[n(_,{modelValue:f(i),"onUpdate:modelValue":o[1]||(o[1]=r=>N(i)?i.value=r:null),modelModifiers:{base64:!0}},null,8,["modelValue"])]),_:1}),Ye,h("pre",Xe,[h("code",null,C(f(i)||"-"),1)]),h("img",{class:"mt-2 border border-default dark:border-dark-default bg-base-white",src:f(i)||f(t),width:"430",height:"230",alt:"Result Image"},null,8,xe),Oe])}}});export{vt as __pageData,ft as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/interact.min.kN5JJCg1.js","assets/chunks/commonjsHelpers.4gQjN7DL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}