var l=typeof global=="object"&&global&&global.Object===Object&&global;const f=l;var g=typeof self=="object"&&self&&self.Object===Object&&self,s=f||g||Function("return this")();const j=s;var S=j.Symbol;const r=S;var n=Object.prototype,d=n.hasOwnProperty,y=n.toString,e=r?r.toStringTag:void 0;function O(t){var a=d.call(t,e),c=t[e];try{t[e]=void 0;var i=!0}catch(m){}var b=y.call(t);return i&&(a?t[e]=c:delete t[e]),b}var T=Object.prototype,u=T.toString;function p(t){return u.call(t)}var v="[object Null]",$="[object Undefined]",o=r?r.toStringTag:void 0;function h(t){return t==null?t===void 0?$:v:o&&o in Object(t)?O(t):p(t)}function w(t){return t!=null&&typeof t=="object"}export{r as S,h as b,f,w as i,j as r};
