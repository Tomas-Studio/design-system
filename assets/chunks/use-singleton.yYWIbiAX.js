var h=Object.defineProperty;var d=(n,e,t)=>e in n?h(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var s=(n,e,t)=>(d(n,typeof e!="symbol"?e+"":e,t),t);import{G as g,ak as m,a6 as p,h as q,al as o,P as l,m as v}from"./framework.5W3OCrpp.js";class w{constructor(){s(this,"queue");s(this,"running");this.queue=[],this.running=!1}enqueue(e){this.queue.push(e)}dequeue(){return this.queue.shift()}async add(e){return await new Promise((t,a)=>{const r={resolve:t,reject:a,run:e};this.enqueue(r),this.run()})}run(){if(this.queue.length>0&&!this.running){this.running=!0;const e=this.dequeue();e.run().then(e.resolve).catch(e.reject).finally(()=>{this.running=!1,this.run()})}}}let u,i;const f=new w;async function y(n,e){if(u||(u=g(new Map)),!i){const a=document.createElement("div"),r=m({name:"GlobalContainer",render:()=>[...u.value.values()].map(c=>p(c.component,{ref:c.ref}))});document.body.append(a),r.mount(a),a.id="global",i=r}let t=u.value.get(n);return t||(t={component:e,ref:q()},u.value.set(n,t),o(u),await l()),v(t.ref)}async function b(n){u&&i&&(u.value.delete(n),o(u),await l())}async function x(n){return await f.add(()=>y(n,n))}async function G(n){return await f.add(()=>b(n))}export{G as r,x as u};
