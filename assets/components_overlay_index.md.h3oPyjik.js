import{u as l}from"./chunks/use-singleton.yYWIbiAX.js";import{u as k}from"./chunks/use-loading.4R_Aeq_E.js";import{d as y,_ as d,o as f,c as r,k as t,e as g,h as u,j as _,D as m,I as i,w as c,R as h,a as E,p as w,q as C}from"./chunks/framework.5W3OCrpp.js";import"./chunks/Overlay.vue_vue_type_style_index_0_lang.w40geAFS.js";import{_ as b}from"./chunks/Button.vue_vue_type_script_setup_true_lang.EqSgP6OH.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.w40geAFS.js";import"./chunks/defu.sEzLH6yp.js";import"./chunks/index.7xvmVwVd.js";import"./chunks/index.hjpy5ZnQ.js";import"./chunks/SpinnerRinggo.fbIZkiat.js";const x="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='204'%20height='131'%20version='1.1'%20viewBox='0%200%20204%20131'%3e%3ctitle%3eLogo%20/%20Negative%20/%20Icon%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3clinearGradient%20id='linearGradient-1'%20x1='38.772%25'%20x2='99.746%25'%20y1='36.946%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23000'%20stop-opacity='0'/%3e%3cstop%20offset='10.271%25'%20stop-color='%23000'%20stop-opacity='.054'/%3e%3cstop%20offset='19.657%25'%20stop-color='%23000'%20stop-opacity='.106'/%3e%3cstop%20offset='30.31%25'%20stop-color='%23000'%20stop-opacity='.192'/%3e%3cstop%20offset='38.65%25'%20stop-color='%23000'%20stop-opacity='.245'/%3e%3cstop%20offset='100%25'%20stop-color='%23000'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='Logo-/-Negative-/-Icon'%20fill='none'%20fill-rule='evenodd'%20stroke='none'%20stroke-width='1'%3e%3cpath%20id='Path'%20fill='%23FFF'%20d='M19.1359203,111.815313%20C30.9636339,123.668638%2047.3036075,131%2065.352117,131%20C83.4004497,131%2099.7402465,123.668638%20111.567783,111.815313%20L204,19.1846867%20C192.172286,7.33136183%20175.832313,0%20157.78398,0%20C139.735471,0%20123.395674,7.33136183%20111.568137,19.1845095%20L111.56796,19.1846867%20C99.7402465,7.33136183%2083.4004497,0%2065.3522937,0%20C26.5673268,0%202.02528496,29.2248333%200,66.4713328%20C0.256828333,84.1728482%207.52049215,100.17473%2019.1359203,111.815313%20Z'/%3e%3cpath%20id='Path'%20fill='url(%23linearGradient-1)'%20d='M112,19.2653956%20C100.126484,7.36220448%2083.7234126,0%2065.6053663,0%20C26.6702071,0%202.03312774,29.3477806%200,66.7509741%20C0.257822885,84.5269588%207.54961478,100.59616%2019.2100229,112.285714%20L112,19.2653956%20Z'/%3e%3c/g%3e%3c/svg%3e",F=y({props:{icon:{type:String,default:x}},setup(){const a=k({elapsed:!1});function e(){a.value=!0}function s(){a.value=!1}return{show:e,hide:s,loading:a}}}),S={key:0,"data-testid":"overlay",class:"overlay"},T={class:"overlay__icon"},O=["src"];function P(a,e,s,p,v,n){return a.loading?(f(),r("div",S,[t("div",T,[t("img",{src:a.icon,alt:"overlay-icon"},null,8,O)])])):g("",!0)}const o=d(F,[["render",P]]);async function q(){(await l(o)).show()}async function A(){(await l(o)).hide()}const I=a=>(w("data-v-6fe4cf48"),a=a(),C(),a),B=h('<h1 id="overlay" tabindex="-1" data-v-6fe4cf48>Overlay <a class="header-anchor" href="#overlay" aria-label="Permalink to &quot;Overlay&quot;" data-v-6fe4cf48>​</a></h1><blockquote data-v-6fe4cf48><p data-v-6fe4cf48>Block user for interacting when loading is in progress.</p></blockquote><h2 id="usage" tabindex="-1" data-v-6fe4cf48>Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;" data-v-6fe4cf48>​</a></h2><h3 id="simple-usage" tabindex="-1" data-v-6fe4cf48>Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;" data-v-6fe4cf48>​</a></h3>',4),D=I(()=>t("p",null,[t("strong",null,"Try it:")],-1)),N=h(`<div class="language-ts vp-adaptive-theme" data-v-6fe4cf48><button title="Copy Code" class="copy" data-v-6fe4cf48></button><span class="lang" data-v-6fe4cf48>ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-6fe4cf48><code data-v-6fe4cf48><span class="line" data-v-6fe4cf48><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-6fe4cf48>import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-6fe4cf48> { showOverlay, hideOverlay } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-6fe4cf48>from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6fe4cf48> &#39;@privyid/persona/core&#39;</span></span>
<span class="line" data-v-6fe4cf48></span>
<span class="line" data-v-6fe4cf48><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-6fe4cf48>function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-6fe4cf48> onClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-6fe4cf48> () {</span></span>
<span class="line" data-v-6fe4cf48><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-6fe4cf48>  showOverlay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-6fe4cf48>()</span></span>
<span class="line" data-v-6fe4cf48></span>
<span class="line" data-v-6fe4cf48><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-6fe4cf48>  setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-6fe4cf48>(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-6fe4cf48>=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-6fe4cf48> {</span></span>
<span class="line" data-v-6fe4cf48><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-6fe4cf48>    hideOverlay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-6fe4cf48>()</span></span>
<span class="line" data-v-6fe4cf48><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-6fe4cf48>  }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-6fe4cf48>3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-6fe4cf48>)</span></span>
<span class="line" data-v-6fe4cf48><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-6fe4cf48>}</span></span></code></pre></div><h2 id="api" tabindex="-1" data-v-6fe4cf48>API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;" data-v-6fe4cf48>​</a></h2><h3 id="showoverlay" tabindex="-1" data-v-6fe4cf48>showOverlay <a class="header-anchor" href="#showoverlay" aria-label="Permalink to &quot;showOverlay&quot;" data-v-6fe4cf48>​</a></h3><p data-v-6fe4cf48><code data-v-6fe4cf48>showOverlay(): Promise&lt;void&gt;</code></p><table data-v-6fe4cf48><thead data-v-6fe4cf48><tr data-v-6fe4cf48><th data-v-6fe4cf48>Options</th><th style="text-align:center;" data-v-6fe4cf48>Type</th><th style="text-align:center;" data-v-6fe4cf48>Default</th><th data-v-6fe4cf48>Description</th></tr></thead><tbody data-v-6fe4cf48><tr data-v-6fe4cf48><td colspan="4" class="text-center" data-v-6fe4cf48>There no options here</td></tr></tbody></table><h3 id="hideoverlay" tabindex="-1" data-v-6fe4cf48>hideOverlay <a class="header-anchor" href="#hideoverlay" aria-label="Permalink to &quot;hideOverlay&quot;" data-v-6fe4cf48>​</a></h3><p data-v-6fe4cf48><code data-v-6fe4cf48>hideOverlay(): Promise&lt;void&gt;</code></p><table data-v-6fe4cf48><thead data-v-6fe4cf48><tr data-v-6fe4cf48><th data-v-6fe4cf48>Options</th><th style="text-align:center;" data-v-6fe4cf48>Type</th><th style="text-align:center;" data-v-6fe4cf48>Default</th><th data-v-6fe4cf48>Description</th></tr></thead><tbody data-v-6fe4cf48><tr data-v-6fe4cf48><td colspan="4" class="text-center" data-v-6fe4cf48>There no options here</td></tr></tbody></table><h2 id="see-also" tabindex="-1" data-v-6fe4cf48>See Also <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;See Also&quot;" data-v-6fe4cf48>​</a></h2><ul data-v-6fe4cf48><li data-v-6fe4cf48><a href="/design-system/components/spinner/index.html" data-v-6fe4cf48>Spinner</a></li></ul>`,10),K=JSON.parse('{"title":"Navbar · Components","description":"Block user for interacting when loading is in progress.","frontmatter":{"title":"Navbar · Components","description":"Block user for interacting when loading is in progress."},"headers":[],"relativePath":"components/overlay/index.md","filePath":"components/overlay/index.md"}'),V={name:"components/overlay/index.md"},$=Object.assign(V,{setup(a){const e=u();function s(){q(),setTimeout(()=>{A()},3e3)}return _(()=>{e.value.show()}),(p,v)=>{const n=m("preview");return f(),r("div",null,[B,i(n,null,{default:c(()=>[i(o,{ref_key:"overlay",ref:e},null,512)]),_:1}),D,t("div",null,[i(b,{onClick:s,color:"info"},{default:c(()=>[E(" Show ")]),_:1})]),N])}}}),Q=d($,[["__scopeId","data-v-6fe4cf48"]]);export{K as __pageData,Q as default};
