(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1625:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,c,u,l;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(c=s;0!=c--;)if(!e(t[c],a[c]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=t.entries();!(c=l.next()).done;)if(!e(c.value[1],a.get(c.value[0])))return!1;return!0}if(o&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((s=t.length)!=a.length)return!1;for(c=s;0!=c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((s=(u=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,u[c]))return!1;if(r&&t instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!t.$$typeof)&&!e(t[u[c]],a[u[c]]))return!1;return!0}return t!=t&&a!=a}(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},1626:function(e,t,r){"use strict";var n=function(){};e.exports=n},740:function(e,t,r){"use strict";r.r(t),r.d(t,"WithTooltipPure",(function(){return it})),r.d(t,"WithToolTipState",(function(){return at})),r.d(t,"WithTooltip",(function(){return at}));r(30),r(56),r(40),r(12),r(32),r(22),r(18),r(34),r(28),r(29),r(15),r(43),r(31),r(75);var n=r(0),o=r.n(n),i=r(4),a=r(21),s=r.n(a),c=r(7),u=r(2),l=r(124),f=r(65),p=n.createContext(),d=n.createContext();function h(e){var t=e.children,r=n.useState(null),o=r[0],i=r[1],a=n.useRef(!1);n.useEffect((function(){return function(){a.current=!0}}),[]);var s=n.useCallback((function(e){a.current||i(e)}),[]);return n.createElement(p.Provider,{value:o},n.createElement(d.Provider,{value:s},t))}var m=function(e){return Array.isArray(e)?e[0]:e},g=function(e){if("function"==typeof e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},v=function(e,t){if("function"==typeof e)return g(e,t);null!=e&&(e.current=t)},y=function(e){return e.reduce((function(e,t){var r=t[0],n=t[1];return e[r]=n,e}),{})},b="undefined"!=typeof window&&window.document&&window.document.createElement?n.useLayoutEffect:n.useEffect;function w(e,t){void 0===t&&(t=!1);var r=e.getBoundingClientRect();return{width:r.width/1,height:r.height/1,top:r.top/1,right:r.right/1,bottom:r.bottom/1,left:r.left/1,x:r.left/1,y:r.top/1}}function O(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function x(e){var t=O(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function k(e){return e instanceof O(e).Element||e instanceof Element}function C(e){return e instanceof O(e).HTMLElement||e instanceof HTMLElement}function T(e){return"undefined"!=typeof ShadowRoot&&(e instanceof O(e).ShadowRoot||e instanceof ShadowRoot)}function j(e){return e?(e.nodeName||"").toLowerCase():null}function E(e){return((k(e)?e.ownerDocument:e.document)||window.document).documentElement}function R(e){return w(E(e)).left+x(e).scrollLeft}function P(e){return O(e).getComputedStyle(e)}function S(e){var t=P(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function H(e,t,r){void 0===r&&(r=!1);var n,o,i=C(t),a=C(t)&&function(e){var t=e.getBoundingClientRect(),r=t.width/e.offsetWidth||1,n=t.height/e.offsetHeight||1;return 1!==r||1!==n}(t),s=E(t),c=w(e,a),u={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!r)&&(("body"!==j(t)||S(s))&&(u=(n=t)!==O(n)&&C(n)?{scrollLeft:(o=n).scrollLeft,scrollTop:o.scrollTop}:x(n)),C(t)?((l=w(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=R(s))),{x:c.left+u.scrollLeft-l.x,y:c.top+u.scrollTop-l.y,width:c.width,height:c.height}}function M(e){var t=w(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function A(e){return"html"===j(e)?e:e.assignedSlot||e.parentNode||(T(e)?e.host:null)||E(e)}function B(e,t){var r;void 0===t&&(t=[]);var n=function e(t){return["html","body","#document"].indexOf(j(t))>=0?t.ownerDocument.body:C(t)&&S(t)?t:e(A(t))}(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=O(n),a=o?[i].concat(i.visualViewport||[],S(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(B(A(a)))}function L(e){return["table","td","th"].indexOf(j(e))>=0}function D(e){return C(e)&&"fixed"!==P(e).position?e.offsetParent:null}function W(e){for(var t=O(e),r=D(e);r&&L(r)&&"static"===P(r).position;)r=D(r);return r&&("html"===j(r)||"body"===j(r)&&"static"===P(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&C(e)&&"fixed"===P(e).position)return null;for(var r=A(e);C(r)&&["html","body"].indexOf(j(r))<0;){var n=P(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}var U="top",V="bottom",N="right",z="left",X=[U,V,N,z],Y=X.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),q=[].concat(X,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),F=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function I(e){var t=new Map,r=new Set,n=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||function e(o){r.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(n){if(!r.has(n)){var o=t.get(n);o&&e(o)}})),n.push(o)}(e)})),n}var _={placement:"bottom",modifiers:[],strategy:"absolute"};function $(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function J(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?_:o;return function(e,t,r){void 0===r&&(r=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},_,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,l={state:s,setOptions:function(r){var o="function"==typeof r?r(s.options):r;f(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:k(e)?B(e):e.contextElement?B(e.contextElement):[],popper:B(t)};var a=function(e){var t=I(e);return F.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}(function(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,s.options.modifiers)));return s.orderedModifiers=a.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:l,options:n});c.push(i||function(){})}})),l.update()},forceUpdate:function(){if(!u){var e=s.elements,t=e.reference,r=e.popper;if($(t,r)){s.rects={reference:H(t,W(r),"fixed"===s.options.strategy),popper:M(r)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var o=s.orderedModifiers[n],i=o.fn,a=o.options,c=void 0===a?{}:a,f=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:f,instance:l})||s)}else s.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(e){l.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){f(),u=!0}};if(!$(e,t))return l;function f(){c.forEach((function(e){return e()})),c=[]}return l.setOptions(r).then((function(e){!u&&r.onFirstUpdate&&r.onFirstUpdate(e)})),l}}var G={passive:!0};var K={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,c=O(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",r.update,G)})),s&&c.addEventListener("resize",r.update,G),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",r.update,G)})),s&&c.removeEventListener("resize",r.update,G)}},data:{}};function Q(e){return e.split("-")[0]}function Z(e){return e.split("-")[1]}function ee(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function te(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?Q(o):null,a=o?Z(o):null,s=r.x+r.width/2-n.width/2,c=r.y+r.height/2-n.height/2;switch(i){case U:t={x:s,y:r.y-n.height};break;case V:t={x:s,y:r.y+r.height};break;case N:t={x:r.x+r.width,y:c};break;case z:t={x:r.x-n.width,y:c};break;default:t={x:r.x,y:r.y}}var u=i?ee(i):null;if(null!=u){var l="y"===u?"height":"width";switch(a){case"start":t[u]=t[u]-(r[l]/2-n[l]/2);break;case"end":t[u]=t[u]+(r[l]/2-n[l]/2)}}return t}var re={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=te({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ne=Math.max,oe=Math.min,ie=Math.round,ae={top:"auto",right:"auto",bottom:"auto",left:"auto"};function se(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,f=!0===l?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:ie(ie(t*n)/n)||0,y:ie(ie(r*n)/n)||0}}(a):"function"==typeof l?l(a):a,p=f.x,d=void 0===p?0:p,h=f.y,m=void 0===h?0:h,g=a.hasOwnProperty("x"),v=a.hasOwnProperty("y"),y=z,b=U,w=window;if(u){var x=W(r),k="clientHeight",C="clientWidth";x===O(r)&&"static"!==P(x=E(r)).position&&"absolute"===s&&(k="scrollHeight",C="scrollWidth"),x=x,o!==U&&(o!==z&&o!==N||"end"!==i)||(b=V,m-=x[k]-n.height,m*=c?1:-1),o!==z&&(o!==U&&o!==V||"end"!==i)||(y=N,d-=x[C]-n.width,d*=c?1:-1)}var T,j=Object.assign({position:s},u&&ae);return c?Object.assign({},j,((T={})[b]=v?"0":"",T[y]=g?"0":"",T.transform=(w.devicePixelRatio||1)<=1?"translate("+d+"px, "+m+"px)":"translate3d("+d+"px, "+m+"px, 0)",T)):Object.assign({},j,((t={})[b]=v?m+"px":"",t[y]=g?d+"px":"",t.transform="",t))}var ce={left:"right",right:"left",bottom:"top",top:"bottom"};function ue(e){return e.replace(/left|right|bottom|top/g,(function(e){return ce[e]}))}var le={start:"end",end:"start"};function fe(e){return e.replace(/start|end/g,(function(e){return le[e]}))}function pe(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&T(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function de(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function he(e,t){return"viewport"===t?de(function(e){var t=O(e),r=E(e),n=t.visualViewport,o=r.clientWidth,i=r.clientHeight,a=0,s=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,s=n.offsetTop)),{width:o,height:i,x:a+R(e),y:s}}(e)):C(t)?function(e){var t=w(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):de(function(e){var t,r=E(e),n=x(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=ne(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=ne(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+R(e),c=-n.scrollTop;return"rtl"===P(o||r).direction&&(s+=ne(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(E(e)))}function me(e,t,r){var n="clippingParents"===t?function(e){var t=B(A(e)),r=["absolute","fixed"].indexOf(P(e).position)>=0&&C(e)?W(e):e;return k(r)?t.filter((function(e){return k(e)&&pe(e,r)&&"body"!==j(e)})):[]}(e):[].concat(t),o=[].concat(n,[r]),i=o[0],a=o.reduce((function(t,r){var n=he(e,r);return t.top=ne(n.top,t.top),t.right=oe(n.right,t.right),t.bottom=oe(n.bottom,t.bottom),t.left=ne(n.left,t.left),t}),he(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ge(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ve(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}function ye(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,i=r.boundary,a=void 0===i?"clippingParents":i,s=r.rootBoundary,c=void 0===s?"viewport":s,u=r.elementContext,l=void 0===u?"popper":u,f=r.altBoundary,p=void 0!==f&&f,d=r.padding,h=void 0===d?0:d,m=ge("number"!=typeof h?h:ve(h,X)),g="popper"===l?"reference":"popper",v=e.rects.popper,y=e.elements[p?g:l],b=me(k(y)?y:y.contextElement||E(e.elements.popper),a,c),O=w(e.elements.reference),x=te({reference:O,element:v,strategy:"absolute",placement:o}),C=de(Object.assign({},v,x)),T="popper"===l?C:O,j={top:b.top-T.top+m.top,bottom:T.bottom-b.bottom+m.bottom,left:b.left-T.left+m.left,right:T.right-b.right+m.right},R=e.modifiersData.offset;if("popper"===l&&R){var P=R[o];Object.keys(j).forEach((function(e){var t=[N,V].indexOf(e)>=0?1:-1,r=[U,V].indexOf(e)>=0?"y":"x";j[e]+=P[r]*t}))}return j}function be(e,t,r){return ne(e,oe(t,r))}function we(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Oe(e){return[U,N,V,z].some((function(t){return e[t]>=0}))}var xe=J({defaultModifiers:[K,re,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=r.roundOffsets,c=void 0===s||s,u={placement:Q(t.placement),variation:Z(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,se(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,se(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];C(o)&&j(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});C(n)&&j(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=q.reduce((function(e,r){return e[r]=function(e,t,r){var n=Q(e),o=[z,U].indexOf(n)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[z,N].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(r,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,c=r.fallbackPlacements,u=r.padding,l=r.boundary,f=r.rootBoundary,p=r.altBoundary,d=r.flipVariations,h=void 0===d||d,m=r.allowedAutoPlacements,g=t.options.placement,v=Q(g),y=c||(v===g||!h?[ue(g)]:function(e){if("auto"===Q(e))return[];var t=ue(e);return[fe(e),t,fe(t)]}(g)),b=[g].concat(y).reduce((function(e,r){return e.concat("auto"===Q(r)?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,u=void 0===c?q:c,l=Z(n),f=l?s?Y:Y.filter((function(e){return Z(e)===l})):X,p=f.filter((function(e){return u.indexOf(e)>=0}));0===p.length&&(p=f);var d=p.reduce((function(t,r){return t[r]=ye(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[Q(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:l,rootBoundary:f,padding:u,flipVariations:h,allowedAutoPlacements:m}):r)}),[]),w=t.rects.reference,O=t.rects.popper,x=new Map,k=!0,C=b[0],T=0;T<b.length;T++){var j=b[T],E=Q(j),R="start"===Z(j),P=[U,V].indexOf(E)>=0,S=P?"width":"height",H=ye(t,{placement:j,boundary:l,rootBoundary:f,altBoundary:p,padding:u}),M=P?R?N:z:R?V:U;w[S]>O[S]&&(M=ue(M));var A=ue(M),B=[];if(i&&B.push(H[E]<=0),s&&B.push(H[M]<=0,H[A]<=0),B.every((function(e){return e}))){C=j,k=!1;break}x.set(j,B)}if(k)for(var L=function(e){var t=b.find((function(t){var r=x.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return C=t,"break"},D=h?3:1;D>0;D--){if("break"===L(D))break}t.placement!==C&&(t.modifiersData[n]._skip=!0,t.placement=C,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,c=r.boundary,u=r.rootBoundary,l=r.altBoundary,f=r.padding,p=r.tether,d=void 0===p||p,h=r.tetherOffset,m=void 0===h?0:h,g=ye(t,{boundary:c,rootBoundary:u,padding:f,altBoundary:l}),v=Q(t.placement),y=Z(t.placement),b=!y,w=ee(v),O="x"===w?"y":"x",x=t.modifiersData.popperOffsets,k=t.rects.reference,C=t.rects.popper,T="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,j={x:0,y:0};if(x){if(i||s){var E="y"===w?U:z,R="y"===w?V:N,P="y"===w?"height":"width",S=x[w],H=x[w]+g[E],A=x[w]-g[R],B=d?-C[P]/2:0,L="start"===y?k[P]:C[P],D="start"===y?-C[P]:-k[P],X=t.elements.arrow,Y=d&&X?M(X):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},F=q[E],I=q[R],_=be(0,k[P],Y[P]),$=b?k[P]/2-B-_-F-T:L-_-F-T,J=b?-k[P]/2+B+_+I+T:D+_+I+T,G=t.elements.arrow&&W(t.elements.arrow),K=G?"y"===w?G.clientTop||0:G.clientLeft||0:0,te=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,re=x[w]+$-te-K,ie=x[w]+J-te;if(i){var ae=be(d?oe(H,re):H,S,d?ne(A,ie):A);x[w]=ae,j[w]=ae-S}if(s){var se="x"===w?U:z,ce="x"===w?V:N,ue=x[O],le=ue+g[se],fe=ue-g[ce],pe=be(d?oe(le,re):le,ue,d?ne(fe,ie):fe);x[O]=pe,j[O]=pe-ue}}t.modifiersData[n]=j}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=Q(r.placement),c=ee(s),u=[z,N].indexOf(s)>=0?"height":"width";if(i&&a){var l=function(e,t){return ge("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ve(e,X))}(o.padding,r),f=M(i),p="y"===c?U:z,d="y"===c?V:N,h=r.rects.reference[u]+r.rects.reference[c]-a[c]-r.rects.popper[u],m=a[c]-r.rects.reference[c],g=W(i),v=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,y=h/2-m/2,b=l[p],w=v-f[u]-l[d],O=v/2-f[u]/2+y,x=be(b,O,w),k=c;r.modifiersData[n]=((t={})[k]=x,t.centerOffset=x-O,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&pe(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ye(t,{elementContext:"reference"}),s=ye(t,{altBoundary:!0}),c=we(a,n),u=we(s,o,i),l=Oe(c),f=Oe(u);t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}}]}),ke=r(1625),Ce=r.n(ke),Te=[],je=function(){},Ee=function(){return Promise.resolve(null)},Re=[];function Pe(e){var t=e.placement,r=void 0===t?"bottom":t,o=e.strategy,i=void 0===o?"absolute":o,a=e.modifiers,s=void 0===a?Re:a,c=e.referenceElement,u=e.onFirstUpdate,l=e.innerRef,f=e.children,d=n.useContext(p),h=n.useState(null),g=h[0],w=h[1],O=n.useState(null),x=O[0],k=O[1];n.useEffect((function(){v(l,g)}),[l,g]);var C=n.useMemo((function(){return{placement:r,strategy:i,onFirstUpdate:u,modifiers:[].concat(s,[{name:"arrow",enabled:null!=x,options:{element:x}}])}}),[r,i,u,s,x]),T=function(e,t,r){void 0===r&&(r={});var o=n.useRef(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||Te},a=n.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],c=a[1],u=n.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,r=Object.keys(t.elements);c({styles:y(r.map((function(e){return[e,t.styles[e]||{}]}))),attributes:y(r.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),l=n.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return Ce()(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),f=n.useRef();return b((function(){f.current&&f.current.setOptions(l)}),[l]),b((function(){if(null!=e&&null!=t){var n=(r.createPopper||xe)(e,t,l);return f.current=n,function(){n.destroy(),f.current=null}}}),[e,t,r.createPopper]),{state:f.current?f.current.state:null,styles:s.styles,attributes:s.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}}(c||d,g,C),j=T.state,E=T.styles,R=T.forceUpdate,P=T.update,S=n.useMemo((function(){return{ref:w,style:E.popper,placement:j?j.placement:r,hasPopperEscaped:j&&j.modifiersData.hide?j.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:j&&j.modifiersData.hide?j.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:E.arrow,ref:k},forceUpdate:R||je,update:P||Ee}}),[w,k,r,j,E,P,R]);return m(f)(S)}var Se=r(1626),He=r.n(Se);function Me(e){var t=e.children,r=e.innerRef,o=n.useContext(d),i=n.useCallback((function(e){v(r,e),g(o,e)}),[r,o]);return n.useEffect((function(){return function(){return v(r,null)}})),n.useEffect((function(){He()(Boolean(o),"`Reference` should not be used outside of a `Manager` component.")}),[o]),m(t)({ref:i})}var Ae=o.a.createContext({}),Be=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.forEach((function(e){return e&&e.apply(void 0,r)}))}},Le=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)},De=function(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)},We=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).observer=void 0,t.tooltipRef=void 0,t.handleOutsideClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.handleOutsideRightClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideRightClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.addOutsideClickHandler=function(){document.body.addEventListener("touchend",t.handleOutsideClick),document.body.addEventListener("click",t.handleOutsideClick)},t.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",t.handleOutsideClick),document.body.removeEventListener("click",t.handleOutsideClick)},t.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",t.handleOutsideRightClick)},t.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",t.handleOutsideRightClick)},t.getTooltipRef=function(e){t.tooltipRef=e,De(t.props.innerRef,e)},t.getArrowProps=function(e){return void 0===e&&(e={}),Object(u.a)({},e,{style:Object(u.a)({},e.style,t.props.arrowProps.style)})},t.getTooltipProps=function(e){return void 0===e&&(e={}),Object(u.a)({},e,t.isTriggeredBy("hover")&&{onMouseEnter:Be(t.props.clearScheduled,e.onMouseEnter),onMouseLeave:Be(t.props.hideTooltip,e.onMouseLeave)},{style:Object(u.a)({},e.style,t.props.style)})},t.contextValue={isParentNoneTriggered:"none"===t.props.trigger,addParentOutsideClickHandler:t.addOutsideClickHandler,addParentOutsideRightClickHandler:t.addOutsideRightClickHandler,parentOutsideClickHandler:t.handleOutsideClick,parentOutsideRightClickHandler:t.handleOutsideRightClick,removeParentOutsideClickHandler:t.removeOutsideClickHandler,removeParentOutsideRightClickHandler:t.removeOutsideRightClickHandler},t}Object(l.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;if((this.observer=new MutationObserver((function(){e.props.update()}))).observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var t=this.context,r=t.removeParentOutsideClickHandler,n=t.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),r&&r(),n&&n()}},r.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},r.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var e=this.context,t=e.isParentNoneTriggered,r=e.addParentOutsideClickHandler,n=e.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!t&&r&&r(),!t&&n&&n()}},r.render=function(){var e=this.props,t=e.arrowProps,r=e.placement,n=e.tooltip;return o.a.createElement(Ae.Provider,{value:this.contextValue},n({arrowRef:t.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:r,tooltipRef:this.getTooltipRef}))},r.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(n.Component);We.contextType=Ae;var Ue=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={tooltipShown:t.props.defaultTooltipShown},t.hideTimeout=void 0,t.showTimeout=void 0,t.popperOffset=void 0,t.setTooltipState=function(e){var r=function(){return t.props.onVisibilityChange(e.tooltipShown)};t.isControlled()?r():t.setState(e,r)},t.clearScheduled=function(){clearTimeout(t.hideTimeout),clearTimeout(t.showTimeout)},t.showTooltip=function(e){var r=e.pageX,n=e.pageY;t.clearScheduled();var o={tooltipShown:!0};t.props.followCursor&&(o=Object(u.a)({},o,{pageX:r,pageY:n})),t.showTimeout=window.setTimeout((function(){return t.setTooltipState(o)}),t.props.delayShow)},t.hideTooltip=function(){t.clearScheduled(),t.hideTimeout=window.setTimeout((function(){return t.setTooltipState({tooltipShown:!1})}),t.props.delayHide)},t.toggleTooltip=function(e){var r=e.pageX,n=e.pageY,o=t.getState()?"hideTooltip":"showTooltip";t[o]({pageX:r,pageY:n})},t.clickToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.contextMenuToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.getTriggerProps=function(e){return void 0===e&&(e={}),Object(u.a)({},e,t.isTriggeredBy("click")&&{onClick:Be(t.clickToggle,e.onClick),onTouchEnd:Be(t.clickToggle,e.onTouchEnd)},t.isTriggeredBy("right-click")&&{onContextMenu:Be(t.contextMenuToggle,e.onContextMenu)},t.isTriggeredBy("hover")&&Object(u.a)({onMouseEnter:Be(t.showTooltip,e.onMouseEnter),onMouseLeave:Be(t.hideTooltip,e.onMouseLeave)},t.props.followCursor&&{onMouseMove:Be(t.showTooltip,e.onMouseMove)}),t.isTriggeredBy("focus")&&{onFocus:Be(t.showTooltip,e.onFocus),onBlur:Be(t.hideTooltip,e.onBlur)})},t}Object(l.a)(t,e);var r=t.prototype;return r.componentWillUnmount=function(){this.clearScheduled()},r.render=function(){var e=this,t=this.props,r=t.children,n=t.tooltip,i=t.placement,a=t.trigger,s=t.getTriggerRef,l=t.modifiers,p=t.closeOnReferenceHidden,d=t.usePortal,m=t.portalContainer,g=t.followCursor,v=t.getTooltipRef,y=t.mutationObserverOptions,b=Object(c.a)(t,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),w=o.a.createElement(Pe,Object(u.a)({innerRef:v,placement:i,modifiers:[{name:"followCursor",enabled:g,phase:"main",fn:function(t){e.popperOffset=t.state.rects.popper}}].concat(l)},b),(function(t){var r=t.ref,i=t.style,s=t.placement,c=t.arrowProps,l=t.isReferenceHidden,f=t.update;if(g&&e.popperOffset){var d=e.state,h=d.pageX,m=d.pageY,v=e.popperOffset,b=v.width,w=v.height,O=h+b>window.pageXOffset+document.body.offsetWidth?h-b:h,x=m+w>window.pageYOffset+document.body.offsetHeight?m-w:m;i.transform="translate3d("+O+"px, "+x+"px, 0"}return o.a.createElement(We,Object(u.a)({arrowProps:c,closeOnReferenceHidden:p,isReferenceHidden:l,placement:s,update:f,style:i,tooltip:n,trigger:a,mutationObserverOptions:y},{clearScheduled:e.clearScheduled,hideTooltip:e.hideTooltip,innerRef:r}))}));return o.a.createElement(h,null,o.a.createElement(Me,{innerRef:s},(function(t){var n=t.ref;return r({getTriggerProps:e.getTriggerProps,triggerRef:n})})),this.getState()&&(d?Object(f.createPortal)(w,m):w))},r.isControlled=function(){return void 0!==this.props.tooltipShown},r.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},r.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(n.Component);Ue.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:function(){},placement:"right",portalContainer:Le()?document.body:null,trigger:"hover",usePortal:Le(),mutationObserverOptions:{childList:!0,subtree:!0},modifiers:[]};var Ve=Ue,Ne=(r(116),r(47),r(244),r(36),r(220)),ze=r.n(Ne),Xe=r(153);function Ye(){return(Ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function qe(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var Fe,Ie,_e=ze()(1e3)((function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t.split("-")[0]===e?r:n})),$e=i.styled.div({position:"absolute",borderStyle:"solid"},(function(e){var t=e.placement,r=0,n=0;switch(!0){case t.startsWith("left")||t.startsWith("right"):n=8;break;case t.startsWith("top")||t.startsWith("bottom"):r=8}return{transform:"translate3d(".concat(r,"px, ").concat(n,"px, 0px)")}}),(function(e){var t=e.theme,r=e.color,n=e.placement;return{bottom:"".concat(_e("top",n,-8,"auto"),"px"),top:"".concat(_e("bottom",n,-8,"auto"),"px"),right:"".concat(_e("left",n,-8,"auto"),"px"),left:"".concat(_e("right",n,-8,"auto"),"px"),borderBottomWidth:"".concat(_e("top",n,"0",8),"px"),borderTopWidth:"".concat(_e("bottom",n,"0",8),"px"),borderRightWidth:"".concat(_e("left",n,"0",8),"px"),borderLeftWidth:"".concat(_e("right",n,"0",8),"px"),borderTopColor:_e("top",n,t.color[r]||r||"light"===t.base?Object(Xe.c)(t.background.app):Object(Xe.a)(t.background.app),"transparent"),borderBottomColor:_e("bottom",n,t.color[r]||r||"light"===t.base?Object(Xe.c)(t.background.app):Object(Xe.a)(t.background.app),"transparent"),borderLeftColor:_e("left",n,t.color[r]||r||"light"===t.base?Object(Xe.c)(t.background.app):Object(Xe.a)(t.background.app),"transparent"),borderRightColor:_e("right",n,t.color[r]||r||"light"===t.base?Object(Xe.c)(t.background.app):Object(Xe.a)(t.background.app),"transparent")}})),Je=i.styled.div((function(e){return{display:e.hidden?"none":"inline-block",zIndex:2147483647}}),(function(e){var t=e.theme,r=e.color;return e.hasChrome?{background:t.color[r]||r||"light"===t.base?Object(Xe.c)(t.background.app):Object(Xe.a)(t.background.app),filter:"\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ",borderRadius:2*t.appBorderRadius,fontSize:t.typography.size.s1}:{}})),Ge=function(e){var t=e.placement,r=e.hasChrome,n=e.children,i=e.arrowProps,a=e.tooltipRef,s=e.arrowRef,c=e.color,u=qe(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return o.a.createElement(Je,Ye({hasChrome:r,placement:t,ref:a},u,{color:c}),r&&o.a.createElement($e,Ye({placement:t,ref:s},i,{color:c})),n)};function Ke(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Qe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Qe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Qe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ze(){return(Ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function et(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function tt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Ge.displayName="Tooltip",Ge.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var rt=s.a.document,nt=i.styled.div(Fe||(Fe=tt(["\n  display: inline-block;\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),ot=i.styled.g(Ie||(Ie=tt(["\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),it=function(e){var t=e.svg,r=e.trigger,n=(e.closeOnClick,e.placement),i=e.modifiers,a=e.hasChrome,s=e.tooltip,c=e.children,u=e.tooltipShown,l=e.onVisibilityChange,f=et(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),p=t?ot:nt;return o.a.createElement(Ve,{placement:n,trigger:r,modifiers:i,tooltipShown:u,onVisibilityChange:l,tooltip:function(e){var t=e.getTooltipProps,r=e.getArrowProps,n=e.tooltipRef,i=e.arrowRef,c=e.placement;return o.a.createElement(Ge,Ze({hasChrome:a,placement:c,tooltipRef:n,arrowRef:i,arrowProps:r()},t()),"function"==typeof s?s({onHide:function(){return l(!1)}}):s)}},(function(e){var t=e.getTriggerProps,r=e.triggerRef;return o.a.createElement(p,Ze({ref:r},t(),f),c)}))};it.displayName="WithTooltipPure",it.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var at=function(e){var t=e.startOpen,r=e.onVisibilityChange,i=et(e,["startOpen","onVisibilityChange"]),a=Ke(Object(n.useState)(t||!1),2),s=a[0],c=a[1],u=Object(n.useCallback)((function(e){r&&!1===r(e)||c(e)}),[r]);return Object(n.useEffect)((function(){var e=function(){return u(!1)};rt.addEventListener("keydown",e,!1);var t=Array.from(rt.getElementsByTagName("iframe")),r=[];return t.forEach((function(t){var n=function(){try{t.contentWindow.document&&(t.contentWindow.document.addEventListener("click",e),r.push((function(){try{t.contentWindow.document.removeEventListener("click",e)}catch(e){}})))}catch(e){}};n(),t.addEventListener("load",n),r.push((function(){t.removeEventListener("load",n)}))})),function(){rt.removeEventListener("keydown",e),r.forEach((function(e){e()}))}})),o.a.createElement(it,Ze({},i,{tooltipShown:s,onVisibilityChange:u}))};at.displayName="WithToolTipState"}}]);
//# sourceMappingURL=0.e3145144.iframe.bundle.js.map