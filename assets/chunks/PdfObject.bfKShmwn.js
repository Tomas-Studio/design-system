import{a as J,c as ce,b as fe,o as ve}from"./floating-ui.dom._N-HlnuN.js";import{t as Z,u as $}from"./index.vDTeR44h.js";import{G as B,N as D,y as R,ah as G,X as U,m as b,d as q,z as Q,_ as ee,o as C,c as te,k as x,t as E,h as O,V as L,j as he,Z as me,D as pe,r as ge,b as ye,e as be,a5 as we,aa as xe,$ as T,a1 as z}from"./framework.5W3OCrpp.js";import{D as _e,P as ae,a as Ne,u as Ie,b as $e,f as A}from"./PdfViewer.ZiF5HRgv.js";import{c as S}from"./use-focus.oPJP1ZqW.js";import{m as Ee}from"./memoize.UOSzi-11.js";import{s as w,u as Pe}from"./index.vqmJczYN.js";function Oe(t,e){const n=B(!0),a=B(),{hoverzone:i}=D(_e);async function s(){if(l(),t.value){const{default:o}=await U(()=>import("./interact.min.kN5JJCg1.js").then(v=>v.i),__vite__mapDeps([0,1]));a.value=o(t.value).draggable({inertia:!0,enabled:n.value,autoScroll:{container:t.value.parentElement,margin:100,speed:300},onstart:e.onstart,onmove:e.onmove,onend:e.onend,modifiers:[o.modifiers.restrict({restriction:"parent",elementRect:{top:0,left:0,bottom:1,right:1}}),o.modifiers.restrictRect({endOnly:!0,restriction:()=>i.value?o.getElementRect(i.value):{top:0,left:0,bottom:Number.POSITIVE_INFINITY,right:Number.POSITIVE_INFINITY}})]}).on("tap",e.ontap)}}function l(){a.value&&a.value.unset()}return R(t,async()=>{await s()}),R(n,o=>{a.value&&a.value.draggable(o)}),G(()=>{l()}),n}function Te(t,e={}){const n=B(!0),a=B();async function i(){var l,o,v;if(s(),t.value){const{default:h}=await U(()=>import("./interact.min.kN5JJCg1.js").then(m=>m.i),__vite__mapDeps([0,1]));a.value=h(t.value).resizable({enabled:n.value,edges:{left:!1,top:!1,bottom:(l=e.handleSelector)!=null?l:".resize-handle",right:(o=e.handleSelector)!=null?o:".resize-handle"},onstart:e.onstart,onmove:e.onmove,onend:e.onend,modifiers:[h.modifiers.aspectRatio({ratio:(v=b(e.ratio))!=null?v:"preserve",modifiers:[h.modifiers.restrictSize({min:(m,c,u)=>{var d;const f=(d=b(e.scale))!=null?d:1;return{...u.rect,width:b(e.minWidth)*f,height:b(e.minHeight)*f}},max:(m,c,u)=>{var d;const f=(d=b(e.scale))!=null?d:1;return{...u.rect,width:b(e.maxWidth)*f,height:b(e.maxHeight)*f}}}),h.modifiers.restrictSize({max:(m,c,u)=>{const f=b(e.reference);if(f){const d=h.getElementRect(f);if(d){const y=d.right-u.rect.left,P=d.bottom-u.rect.top;return{...d,width:y,height:P}}}return{...u.rect,width:Number.POSITIVE_INFINITY,height:Number.POSITIVE_INFINITY}}})]})]})}}function s(){a.value&&a.value.unset()}return R(t,async()=>{await i()}),R(n,l=>{a.value&&a.value.draggable(l)},{immediate:!0}),G(()=>{s()}),n}function ze(t,e=document.body){let n=t.parentElement;do{const{position:a}=window.getComputedStyle(n);if(a==="relative"||a==="absolute")return n;n=n.parentElement}while(n&&n!==e);return e}function Be(t){const{container:e,reference:n,x:a,y:i,scale:s}=t,l=n.getBoundingClientRect(),o=ze(n,e),v=o.getBoundingClientRect(),h=l.top-v.top+o.scrollTop,m=l.left-v.left+o.scrollLeft;return{top:h+i*s,left:m+a*s}}function Re(t){const{reference:e,object:n,scale:a}=t,i=n.getBoundingClientRect(),s=e.getBoundingClientRect(),l=Math.floor((s.width-i.width)/a),o=Math.floor((s.height-i.height)/a),v=(i.left-s.left)/a,h=(i.top-s.top)/a,m=Number.parseInt(e.dataset.pageNumber);return{x:S(v,1,l-1),y:S(h,1,o-1),page:m}}function Se(t,e){return{x:(e.width-t.width)/2,y:(e.height-t.height)/2}}function je(t,e){return t.x+t.width>e.width||t.y+t.height>e.height}function Ce(t){var a;const e=new Map,n=Ee(i=>Math.round(i/15)*15);for(const i of t){const s=n(i.x),l=n(i.y),o=(a=e.get(s))!=null?a:new Map;o.set(l,i),e.set(s,o)}return i=>{var o;const s=n(i.x),l=n(i.y);return((o=e.get(s))==null?void 0:o.get(l))!==void 0}}function De(t){var o;const e=(o=t.checkOverlap)!=null?o:Ce(t.objects),n=Se(t.size,t.offside),a={...t.size,...n};let i=!0,s=0,l=0;do i=!0,je(a,t.offside)&&(a.y=n.y+l,a.x=n.x,l+=15,i=!1),e(a,t.objects)&&(a.x+=15,a.y+=15,i=!1);while(!i&&++s<=500);return i||console.warn("Cannot find empty position, max iteration reach"),a}const Me=q({setup(){const{x:t,y:e,page:n,width:a,height:i}=D(ae),s=Z("target");return Q(l=>{if(s.value){const o=J(s.value.parentElement,s.value,()=>{ce(s.value.parentElement,s.value,{strategy:"absolute",middleware:[fe(),ve(12)]}).then(({x:v,y:h})=>{s.value&&(s.value.style.left=`${v||0}px`,s.value.style.top=`${h||0}px`)})},{animationFrame:!0});l(o)}},{flush:"post"}),{x:t,y:e,page:n,width:a,height:i}}}),Fe={ref:"target","data-testid":"pdf-debugger",class:"pdf-object__debugger"},He={"data-testid":"debug-x"},Ve={"data-testid":"debug-y"},We={"data-testid":"debug-page"},Ye={"data-testid":"debug-width"},Ke={"data-testid":"debug-height"};function Xe(t,e,n,a,i,s){return C(),te("div",Fe,[x("pre",He,"x: "+E(t.x),1),x("pre",Ve,"y: "+E(t.y),1),x("pre",We,"page: "+E(t.page),1),x("pre",Ye,"width: "+E(t.width),1),x("pre",Ke,"height: "+E(t.height),1)],512)}const ke=ee(Me,[["render",Xe]]),Le=q({components:{PdfObjectDebugger:ke},props:{x:{type:Number,default:void 0},y:{type:Number,default:void 0},page:{type:Number,default:void 0},width:{type:Number,default:198},height:{type:Number,default:106},minWidth:{type:Number,default:void 0},minHeight:{type:Number,default:void 0},maxWidth:{type:Number,default:void 0},maxHeight:{type:Number,default:void 0},moveable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},autofocus:{type:Boolean,default:!1},debug:{type:Boolean,default:!1}},emits:["update:x","update:y","update:page","update:width","update:height"],setup(t){const e=Z("object"),{root:n,scale:a,objects:i}=D(Ne),s=$(t,"x"),l=$(t,"y"),o=$(t,"page"),v=$(t,"width"),h=$(t,"height"),{id:m,x:c,y:u,page:f,width:d,height:y,minHeight:P,minWidth:M,maxHeight:F,maxWidth:H,ratio:V}=Ie(t),j=O(!1),W=O(),Y=O(),K=O(),g=$e(f),ne=Oe(e,{onstart(){const{left:r,top:p}=e.value.getBoundingClientRect();j.value=!0,W.value=c.value,Y.value=u.value,K.value=f.value,c.value=r,u.value=p},onmove(r){c.value+=r.dx,u.value+=r.dy},onend(r){if(r.relatedTarget){const p=Re({reference:r.relatedTarget,container:n.value,object:e.value,scale:a.value});c.value=p.x,u.value=p.y,f.value=p.page}else c.value=W.value,u.value=Y.value,f.value=K.value;j.value=!1}}),oe=Te(e,{minHeight:P,minWidth:M,maxHeight:F,maxWidth:H,scale:a,ratio:V,reference:g,onmove(r){r.rect&&a.value&&(d.value=r.rect.width/a.value,y.value=r.rect.height/a.value)}});Q(r=>{if(e.value)if(g.value&&n.value)if(e.value.style.display="block",e.value.style.width=`${d.value}px`,e.value.style.height=`${y.value}px`,j.value)e.value.style.position="fixed",e.value.style.transform=`translate(${c.value}px, ${u.value}px) scale(${a.value})`,e.value.style.zIndex="50";else{const p=J(g.value,e.value,()=>{const{left:I,top:_}=Be({reference:g.value,container:n.value,x:c.value,y:u.value,scale:a.value});e.value.style.position="absolute",e.value.style.transform=`translate(${I}px, ${_}px) scale(${a.value})`,e.value.style.zIndex="10"},{ancestorScroll:!1,animationFrame:!0});r(p)}else e.value.style.display="none"});function ie(r,p,I){if(t.moveable){const _=g.value.clientWidth,N=g.value.clientHeight,X=Math.floor(_/a.value-d.value),k=Math.floor(N/a.value-y.value),le=r.metaKey||r.ctrlKey?X:r.shiftKey?10:1,re=r.metaKey||r.ctrlKey?k:r.shiftKey?10:1,ue=c.value+p*le,de=u.value+I*re;c.value=S(ue,0,X),u.value=S(de,0,k)}}function se(){const r=[...i.values()].filter(N=>N.id!==m&&Number.isFinite(N.x)&&Number.isFinite(N.y)&&N.page===f.value),p={width:d.value,height:y.value},I={width:g.value.clientWidth/a.value,height:g.value.clientHeight/a.value},_=De({size:p,offside:I,objects:r});c.value=_.x,u.value=_.y}return w(c,s),w(u,l),w(f,o),w(d,v),w(y,h),w(ne,L(t,"moveable"),{direction:"rtl",immediate:!0}),w(oe,L(t,"resizable"),{direction:"rtl",immediate:!0}),he(async()=>{await Pe(g).toBeTruthy(),(!Number.isFinite(c.value)||!Number.isFinite(u.value))&&se(),t.autofocus&&A(e.value)}),me(ae,{id:m,x:c,y:u,page:f,width:d,height:y,minHeight:P,minWidth:M,maxHeight:F,maxWidth:H,ratio:V}),{move:ie,focus:A}}}),Ae=["data-x","data-y","data-page","data-width","data-height"],Je={class:"pdf-object__container"},Ze={class:"pdf-object__resize resize-handle"};function Ge(t,e,n,a,i,s){const l=pe("PdfObjectDebugger");return C(),te("div",{ref:"object","data-testid":"pdf-object",class:"pdf-object",tabindex:"0","data-x":t.x,"data-y":t.y,"data-page":t.page,"data-width":t.width,"data-height":t.height,onKeydown:[e[0]||(e[0]=T(z(o=>t.move(o,0,-1),["stop","prevent"]),["up"])),e[1]||(e[1]=T(z(o=>t.move(o,0,1),["stop","prevent"]),["down"])),e[2]||(e[2]=T(z(o=>t.move(o,-1,0),["stop","prevent"]),["left"])),e[3]||(e[3]=T(z(o=>t.move(o,1,0),["stop","prevent"]),["right"]))]},[x("div",Je,[ge(t.$slots,"default"),t.debug?(C(),ye(l,{key:0})):be("",!0)]),we(x("div",Ze,null,512),[[xe,t.resizable]])],40,Ae)}const ot=ee(Le,[["render",Ge]]);export{Re as g,ot as p};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/interact.min.kN5JJCg1.js","assets/chunks/commonjsHelpers.4gQjN7DL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}