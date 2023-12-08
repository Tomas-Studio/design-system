import{p as l}from"./chunks/InputRange.huDXrjDA.js";import{h as c,D as v,c as b,I as s,w as n,k as t,t as E,m as d,R as e,o as x,a4 as g}from"./chunks/framework.5W3OCrpp.js";import"./chunks/index.vDTeR44h.js";import"./chunks/index.vqmJczYN.js";import"./chunks/index.gVcbEyr5.js";import"./chunks/index.7xvmVwVd.js";import"./chunks/throttle.Yy5L90F6.js";import"./chunks/debounce.fM6nWQov.js";import"./chunks/isObject.mlSoqgao.js";import"./chunks/isObjectLike.OM1Hublo.js";import"./chunks/toNumber.jidAZ9H9.js";import"./chunks/isSymbol.K1VvrVGN.js";const T=e('<h1 id="input-range" tabindex="-1">Input Range <a class="header-anchor" href="#input-range" aria-label="Permalink to &quot;Input Range&quot;">​</a></h1><blockquote><p>Range input slider.</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3>',4),C=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="with-min-max-step" tabindex="-1">With min, max &amp; step <a class="header-anchor" href="#with-min-max-step" aria-label="Permalink to &quot;With min, max &amp; step&quot;">​</a></h3>`,2),A=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-range</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> step</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;25&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="multiple-mode" tabindex="-1">Multiple Mode <a class="header-anchor" href="#multiple-mode" aria-label="Permalink to &quot;Multiple Mode&quot;">​</a></h2>`,2),f=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-range</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> multiple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="disabled-state" tabindex="-1">Disabled State <a class="header-anchor" href="#disabled-state" aria-label="Permalink to &quot;Disabled State&quot;">​</a></h2>`,2),q=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-range</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="readonly-state" tabindex="-1">Readonly State <a class="header-anchor" href="#readonly-state" aria-label="Permalink to &quot;Readonly State&quot;">​</a></h2>`,2),F=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-range</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readonly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="binding-v-model" tabindex="-1">Binding v-model <a class="header-anchor" href="#binding-v-model" aria-label="Permalink to &quot;Binding v-model&quot;">​</a></h2>`,2),D=t("p",null,[t("strong",null,"result:")],-1),S={class:"truncate"},P=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-range</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="v-model-in-multiple-mode" tabindex="-1">v-model in multiple mode <a class="header-anchor" href="#v-model-in-multiple-mode" aria-label="Permalink to &quot;v-model in multiple mode&quot;">​</a></h3><p>There are 2 ways to use v-model in <code>multiple</code> mode.</p><h4 id="_1-using-basic-v-model" tabindex="-1">1. Using basic v-model <a class="header-anchor" href="#_1-using-basic-v-model" aria-label="Permalink to &quot;1. Using basic v-model&quot;">​</a></h4><p>You can use basic <code>v-model</code> to handle multiple range input, The value will be tuple of number, <code>[start, end]</code></p>`,5),B=t("p",null,[t("strong",null,"result:")],-1),V={class:"truncate"},I=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-range</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;result&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> multiple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h4 id="_2-using-v-model-start-and-v-model-end" tabindex="-1">2. using v-model:start and v-model:end <a class="header-anchor" href="#_2-using-v-model-start-and-v-model-end" aria-label="Permalink to &quot;2. using v-model:start and v-model:end&quot;">​</a></h4><p>You can specific binding the value using <code>v-model:start</code> or <code>v-model:end</code></p>`,3),N=t("p",null,[t("strong",null,"start:")],-1),R={class:"truncate"},w=t("p",null,[t("strong",null,"end:")],-1),U={class:"truncate"},M=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-range</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    v-model:start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;start&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    v-model:end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;end&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    multiple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>min</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>0</code></td><td>Lowest value in range</td></tr><tr><td><code>max</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>100</code></td><td>Highest value in range</td></tr><tr><td><code>step</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>1</code></td><td>Step movement</td></tr><tr><td><code>multiple</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Enable multiple mode</td></tr><tr><td><code>disabled</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Disabled state</td></tr><tr><td><code>readonly</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Readonly state</td></tr><tr><td><code>error</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Error state</td></tr><tr><td><code>modelValue</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>-</code></td><td>v-model value</td></tr><tr><td><code>start</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>-</code></td><td>v-model:start value</td></tr><tr><td><code>end</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>-</code></td><td>v-model:end value</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td colspan="2" class="text-center">There no slots here</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>change</code></td><td><code>Number</code> | <code>[Number, Number]</code></td><td>Event when value changed</td></tr></tbody></table><h2 id="see-also" tabindex="-1">See Also <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;See Also&quot;">​</a></h2><ul><li><a href="/design-system/components/input/">Input</a></li><li><a href="/design-system/components/strengthbar/">Strengthbar</a></li></ul>`,10),ts=JSON.parse('{"title":"Input Range · Components","description":"Range input slider.","frontmatter":{"title":"Input Range · Components","description":"Range input slider."},"headers":[],"relativePath":"components/input-range/index.md","filePath":"components/input-range/index.md"}'),O={name:"components/input-range/index.md"},es=Object.assign(O,{setup(W){const p=c(50),o=c([30,70]),r=c(0),k=c(100);return(Y,a)=>{var u,m,_,y;const i=v("preview");return x(),b("div",null,[T,s(i,{class:"flex-col"},{default:n(()=>[s(l)]),_:1}),C,s(i,{class:"flex-col"},{default:n(()=>[s(l,{min:"0",max:"100",step:"25"})]),_:1}),A,s(i,{class:"flex-col"},{default:n(()=>[s(l,{multiple:""})]),_:1}),f,s(i,{class:"flex-col"},{default:n(()=>[s(l,{disabled:""})]),_:1}),q,s(i,{class:"flex-col"},{default:n(()=>[s(l,{readonly:""})]),_:1}),F,s(i,{class:"flex-col"},{default:n(()=>[s(l,{modelValue:d(p),"onUpdate:modelValue":a[0]||(a[0]=h=>g(p)?p.value=h:null)},null,8,["modelValue"])]),_:1}),D,t("pre",S,[t("code",null,E((u=d(p))!=null?u:"-"),1)]),P,s(i,{class:"flex-col"},{default:n(()=>[s(l,{modelValue:d(o),"onUpdate:modelValue":a[1]||(a[1]=h=>g(o)?o.value=h:null),multiple:""},null,8,["modelValue"])]),_:1}),B,t("pre",V,[t("code",null,E((m=d(o))!=null?m:"-"),1)]),I,s(i,{class:"flex-col"},{default:n(()=>[s(l,{start:d(r),"onUpdate:start":a[2]||(a[2]=h=>g(r)?r.value=h:null),end:d(k),"onUpdate:end":a[3]||(a[3]=h=>g(k)?k.value=h:null),multiple:""},null,8,["start","end"])]),_:1}),N,t("pre",R,[t("code",null,E((_=d(r))!=null?_:"-"),1)]),w,t("pre",U,[t("code",null,E((y=d(k))!=null?y:"-"),1)]),M])}}});export{ts as __pageData,es as default};
