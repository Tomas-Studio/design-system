import{g as L}from"./commonjsHelpers.4gQjN7DL.js";var A="complete",E="canceled";function b(o){if("requestAnimationFrame"in window)return window.requestAnimationFrame(o);setTimeout(o,16)}function O(o,e,i){o.self===o?o.scrollTo(e,i):(o.scrollLeft=e,o.scrollTop=i)}function M(o,e){var i=o.align,l=o.target,t=l.getBoundingClientRect(),a,n,r,f,c,d,u,s=i&&i.left!=null?i.left:.5,W=i&&i.top!=null?i.top:.5,v=i&&i.leftOffset!=null?i.leftOffset:0,S=i&&i.topOffset!=null?i.topOffset:0,m=s,h=W;if(o.isWindow(e))d=Math.min(t.width,e.innerWidth),u=Math.min(t.height,e.innerHeight),n=t.left+e.pageXOffset-e.innerWidth*m+d*m,r=t.top+e.pageYOffset-e.innerHeight*h+u*h,n-=v,r-=S,n=o.align.lockX?e.pageXOffset:n,r=o.align.lockY?e.pageYOffset:r,f=n-e.pageXOffset,c=r-e.pageYOffset;else{d=t.width,u=t.height,a=e.getBoundingClientRect();var x=t.left-(a.left-e.scrollLeft),y=t.top-(a.top-e.scrollTop);n=x+d*m-e.clientWidth*m,r=y+u*h-e.clientHeight*h,n-=v,r-=S,n=Math.max(Math.min(n,e.scrollWidth-e.clientWidth),0),r=Math.max(Math.min(r,e.scrollHeight-e.clientHeight),0),n=o.align.lockX?e.scrollLeft:n,r=o.align.lockY?e.scrollTop:r,f=n-e.scrollLeft,c=r-e.scrollTop}return{x:n,y:r,differenceX:f,differenceY:c}}function g(o){var e=o._scrollSettings;if(e){var i=e.maxSynchronousAlignments,l=M(e,o),t=Date.now()-e.startTime,a=Math.min(1/e.time*t,1);if(e.endIterations>=i)return O(o,l.x,l.y),o._scrollSettings=null,e.end(A);var n=1-e.ease(a);if(O(o,l.x-l.differenceX*n,l.y-l.differenceY*n),t>=e.time){e.endIterations++,e.scrollAncestor&&g(e.scrollAncestor),g(o);return}b(g.bind(null,o))}}function H(o){return o.self===o}function X(o,e,i,l,t){var a=!e._scrollSettings,n=e._scrollSettings,r=Date.now(),f,c={passive:!0};n&&n.end(E);function d(s){e._scrollSettings=null,e.parentElement&&e.parentElement._scrollSettings&&e.parentElement._scrollSettings.end(s),i.debug&&console.log("Scrolling ended with type",s,"for",e),t(s),f&&(e.removeEventListener("touchstart",f,c),e.removeEventListener("wheel",f,c))}var u=i.maxSynchronousAlignments;return u==null&&(u=3),e._scrollSettings={startTime:r,endIterations:0,target:o,time:i.time,ease:i.ease,align:i.align,isWindow:i.isWindow||H,maxSynchronousAlignments:u,end:d,scrollAncestor:l},(!("cancellable"in i)||i.cancellable)&&(f=d.bind(null,E),e.addEventListener("touchstart",f,c),e.addEventListener("wheel",f,c)),a&&g(e),f}function T(o){return"pageXOffset"in o||(o.scrollHeight!==o.clientHeight||o.scrollWidth!==o.clientWidth)&&getComputedStyle(o).overflow!=="hidden"}function C(){return!0}function w(o){if(o.assignedSlot)return w(o.assignedSlot);if(o.parentElement)return o.parentElement.tagName.toLowerCase()==="body"?o.parentElement.ownerDocument.defaultView||o.parentElement.ownerDocument.ownerWindow:o.parentElement;if(o.getRootNode){var e=o.getRootNode();if(e.nodeType===11)return e.host}}var Y=function(o,e,i){if(!o)return;typeof e=="function"&&(i=e,e=null),e||(e={}),e.time=isNaN(e.time)?1e3:e.time,e.ease=e.ease||function(c){return 1-Math.pow(1-c,c/2)},e.align=e.align||{};var l=w(o),t=1;function a(c){t--,t||i&&i(c)}var n=e.validTarget||C,r=e.isScrollable;e.debug&&(console.log("About to scroll to",o),l||console.error("Target did not have a parent, is it mounted in the DOM?"));for(var f=[];l;)if(e.debug&&console.log("Scrolling parent node",l),n(l,t)&&(r?r(l,T):T(l))&&(t++,f.push(l)),l=w(l),!l){a(A);break}return f.reduce((c,d,u)=>X(o,d,e,f[u+1],a),null)};const _=L(Y);async function I(o,e=330){return await new Promise(i=>{_(o,{time:e},i)})}export{I as f};
