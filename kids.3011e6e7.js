function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired870;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired870=a);var i=a("6TDp9"),o=(i=a("6TDp9"),a("1CpbH")),s=a("bnlKQ"),u=a("3ILHO"),l=a("fb9GJ"),c=a("kKZR4"),d=a("bHKmf");function f(t){return async function(n=1){try{u.kidsPage.classList.remove("hidden"),(0,d.startSpinner)();const r=await t(n);(0,d.stopSpinner)();const{results:a,total_results:i}=r.data,f=(0,c.makePaginationOptions)(i);(0,c.removeHiddenPagination)();const h=(0,o.getGenreOptions)()??[],m=(0,s.makeMovieList)(a,h);u.listRef.innerHTML=m;new(e(l))(u.paginationContainer,f).on("afterMove",function(e){return async function(t){const n=t.page;(0,d.startSpinner)();const r=await e(n);(0,d.stopSpinner)();const{results:a}=r.data,i=(0,o.getGenreOptions)()??[],l=(0,s.makeMovieList)(a,i);u.listRef.innerHTML=l,document.documentElement.scrollTo({top:0,behavior:"smooth"})}}(t))}catch(e){console.log(e)}t===i.getPopularForKidsZero&&(u.zeroPlus.disabled=!0,u.sixPlus.disabled=!1,u.twelvePlus.disabled=!1),t===i.getPopularForKidsSix&&(u.zeroPlus.disabled=!1,u.sixPlus.disabled=!0,u.twelvePlus.disabled=!1),t===i.getPopularForKidsTwelve&&(u.zeroPlus.disabled=!1,u.sixPlus.disabled=!1,u.twelvePlus.disabled=!0)}}u=a("3ILHO");a("dNLRB");var h=a("hc5U3"),m=a("aOITw");const p=(e,t,n)=>{const r=e.textContent.trim(),a=r.length,i=[];e.textContent="";for(let o=0;o<a;o++){const a=document.createElement(t);n&&n.length&&a.classList.add(n),a.textContent=" "===r[o]?" ":r[o],e.before(a),i.push(a)}return i},g=(e,t,n,r,a,i,o,s)=>{if(Array.isArray(t.letterize_id)||(t.letterize_id=[]),!t.letterize_id.includes(s)){t.letterize_id.push(s);const u=[...t.childNodes],l=u.length;for(let t=0;t<l;t++){let l;switch(u[t].nodeType){case 1:-1===Array.prototype.indexOf.call(e,u[t])&&g(e,u[t],n,r,a,i,o,s);break;case 3:l=p(u[t],n,r),i.push(...l),a[o].push(...l)}}}};class v{get listAll(){return this._listAll}get list(){return this._list}get targets(){return this._targets}get className(){return this._className}get wrapper(){return this._wrapper}deletterize(){const e=this.listAll.length;for(let t=0;t<e;t++)this.listAll[t].before(...Array.from(this.listAll[t].childNodes)),this.listAll[t].remove();this._wrapper=void 0,this._targets=void 0,this._list=void 0,this._listAll=void 0,this._className=void 0,this.deletterize=void 0}constructor(e){const t=(e=>e instanceof NodeList||e instanceof HTMLCollection||Array.isArray(e)?e:e instanceof HTMLElement?[e]:"string"==typeof e?document.querySelectorAll(e):null)(e.targets);if(!t||!t.length)return void console.error(`Letterize: targets '${t}' not found or not specified`);const n=t.length;v.numInstances=(v.numInstances||0)+1;const r=e.wrapper||"span",a=e.className,i=v.numInstances,o=[],s=[];for(let e=0;e<n;e++)o[e]=[],g(t,t[e],r,a,o,s,e,i);this._wrapper=r,this._targets=t,this._list=o,this._listAll=s,this._className=a}}var y=v,w={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},b={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},k=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],L={CSS:{},springs:{}};function x(e,t,n){return Math.min(Math.max(e,t),n)}function E(e,t){return e.indexOf(t)>-1}function M(e,t){return e.apply(null,t)}var T={arr:function(e){return Array.isArray(e)},obj:function(e){return E(Object.prototype.toString.call(e),"Object")},pth:function(e){return T.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||T.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return T.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return T.hex(e)||T.rgb(e)||T.hsl(e)},key:function(e){return!w.hasOwnProperty(e)&&!b.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function C(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function I(e,t){var n=C(e),r=x(T.und(n[0])?1:n[0],.1,100),a=x(T.und(n[1])?100:n[1],.1,100),i=x(T.und(n[2])?10:n[2],.1,100),o=x(T.und(n[3])?0:n[3],.1,100),s=Math.sqrt(a/r),u=i/(2*Math.sqrt(a*r)),l=u<1?s*Math.sqrt(1-u*u):0,c=u<1?(u*s-o)/l:-o+s;function d(e){var n=t?t*e/1e3:e;return n=u<1?Math.exp(-n*u*s)*(1*Math.cos(l*n)+c*Math.sin(l*n)):(1+c*n)*Math.exp(-n*s),0===e||1===e?e:1-n}return t?d:function(){var t=L.springs[e];if(t)return t;for(var n=1/6,r=0,a=0;;)if(1===d(r+=n)){if(++a>=16)break}else a=0;var i=r*n*1e3;return L.springs[e]=i,i}}function P(e){return void 0===e&&(e=10),function(t){return Math.ceil(x(t,1e-6,1)*e)*(1/e)}}var A,B,O=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function a(e,a,i){return((t(a,i)*e+n(a,i))*e+r(a))*e}function i(e,a,i){return 3*t(a,i)*e*e+2*n(a,i)*e+r(a)}return function(t,n,r,o){if(0<=t&&t<=1&&0<=r&&r<=1){var s=new Float32Array(11);if(t!==n||r!==o)for(var u=0;u<11;++u)s[u]=a(u*e,t,r);return function(e){return t===n&&r===o||0===e||1===e?e:a(l(e),n,o)}}function l(n){for(var o=0,u=1;10!==u&&s[u]<=n;++u)o+=e;--u;var l=o+(n-s[u])/(s[u+1]-s[u])*e,c=i(l,t,r);return c>=.001?function(e,t,n,r){for(var o=0;o<4;++o){var s=i(t,n,r);if(0===s)return t;t-=(a(t,n,r)-e)/s}return t}(n,l,t,r):0===c?l:function(e,t,n,r,i){var o,s,u=0;do{(o=a(s=t+(n-t)/2,r,i)-e)>0?n=s:t=s}while(Math.abs(o)>1e-7&&++u<10);return s}(n,o,o+e,t,r)}}}(),N=(A={linear:function(){return function(e){return e}}},B={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=x(e,1,10),r=x(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){B[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(B).forEach((function(e){var t=B[e];A["easeIn"+e]=t,A["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},A["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},A["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),A);function S(e,t){if(T.fnc(e))return e;var n=e.split("(")[0],r=N[n],a=C(e);switch(n){case"spring":return I(e,t);case"cubicBezier":return M(O,a);case"steps":return M(P,a);default:return M(r,a)}}function D(e){try{return document.querySelectorAll(e)}catch(e){return}}function H(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<n;i++)if(i in e){var o=e[i];t.call(r,o,i,e)&&a.push(o)}return a}function _(e){return e.reduce((function(e,t){return e.concat(T.arr(t)?_(t):t)}),[])}function F(e){return T.arr(e)?e:(T.str(e)&&(e=D(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function q(e,t){return e.some((function(e){return e===t}))}function G(e){var t={};for(var n in e)t[n]=e[n];return t}function R(e,t){var n=G(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function j(e,t){var n=G(e);for(var r in t)n[r]=T.und(e[r])?t[r]:e[r];return n}function z(e){return T.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:T.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):T.hsl(e)?function(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,s=parseInt(a[3],10)/100,u=a[4]||1;function l(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==o)t=n=r=s;else{var c=s<.5?s*(1+o):s+o-s*o,d=2*s-c;t=l(d,c,i+1/3),n=l(d,c,i),r=l(d,c,i-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+u+")"}(e):void 0;var t,n}function $(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function K(e,t){return T.fnc(e)?e(t.target,t.id,t.total):e}function X(e,t){return e.getAttribute(t)}function Y(e,t,n){if(q([n,"deg","rad","turn"],$(t)))return t;var r=L.CSS[t+n];if(!T.und(r))return r;var a=document.createElement(e.tagName),i=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+n;var o=100/a.offsetWidth;i.removeChild(a);var s=o*parseFloat(t);return L.CSS[t+n]=s,s}function Z(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?Y(e,a,n):a}}function V(e,t){return T.dom(e)&&!T.inp(e)&&(!T.nil(X(e,t))||T.svg(e)&&e[t])?"attribute":T.dom(e)&&q(k,t)?"transform":T.dom(e)&&"transform"!==t&&Z(e,t)?"css":null!=e[t]?"object":void 0}function U(e){if(T.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;t=r.exec(n);)a.set(t[1],t[2]);return a}}function W(e,t,n,r){var a=E(t,"scale")?1:0+function(e){return E(e,"translate")||"perspective"===e?"px":E(e,"rotate")||E(e,"skew")?"deg":void 0}(t),i=U(e).get(t)||a;return n&&(n.transforms.list.set(t,i),n.transforms.last=t),r?Y(e,i,r):i}function Q(e,t,n,r){switch(V(e,t)){case"transform":return W(e,t,r,n);case"css":return Z(e,t,n);case"attribute":return X(e,t);default:return e[t]||0}}function J(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=$(e)||0,a=parseFloat(t),i=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function ee(e,t){if(T.col(e))return z(e);if(/\s/g.test(e))return e;var n=$(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function te(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function ne(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var i=n.getItem(a);a>0&&(r+=te(t,i)),t=i}return r}function re(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*X(e,"r")}(e);case"rect":return function(e){return 2*X(e,"width")+2*X(e,"height")}(e);case"line":return function(e){return te({x:X(e,"x1"),y:X(e,"y1")},{x:X(e,"x2"),y:X(e,"y2")})}(e);case"polyline":return ne(e);case"polygon":return function(e){var t=e.points;return ne(e)+te(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function ae(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;T.svg(t)&&T.svg(t.parentNode);)t=t.parentNode;return t}(e),a=r.getBoundingClientRect(),i=X(r,"viewBox"),o=a.width,s=a.height,u=n.viewBox||(i?i.split(" "):[0,0,o,s]);return{el:r,viewBox:u,x:u[0]/1,y:u[1]/1,w:o,h:s,vW:u[2],vH:u[3]}}function ie(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var a=ae(e.el,e.svg),i=r(),o=r(-1),s=r(1),u=n?1:a.w/a.vW,l=n?1:a.h/a.vH;switch(e.property){case"x":return(i.x-a.x)*u;case"y":return(i.y-a.y)*l;case"angle":return 180*Math.atan2(s.y-o.y,s.x-o.x)/Math.PI}}function oe(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=ee(T.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:T.str(e)||t?r.split(n):[]}}function se(e){return H(e?_(T.arr(e)?e.map(F):F(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function ue(e){var t=se(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:U(e)}}}))}function le(e,t){var n=G(t);if(/^spring/.test(n.easing)&&(n.duration=I(n.easing)),T.arr(e)){var r=e.length;2===r&&!T.obj(e[0])?e={value:e}:T.fnc(t.duration)||(n.duration=t.duration/r)}var a=T.arr(e)?e:[e];return a.map((function(e,n){var r=T.obj(e)&&!T.pth(e)?e:{value:e};return T.und(r.delay)&&(r.delay=n?0:t.delay),T.und(r.endDelay)&&(r.endDelay=n===a.length-1?t.endDelay:0),r})).map((function(e){return j(e,n)}))}function ce(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=j(function(e){for(var t=H(_(e.map((function(e){return Object.keys(e)}))),(function(e){return T.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var a=t[r];n[a]=e.map((function(e){var t={};for(var n in e)T.key(n)?n==a&&(t.value=e[n]):t[n]=e[n];return t}))},a=0;a<t.length;a++)r(a);return n}(r),t)),t)T.key(a)&&n.push({name:a,tweens:le(t[a],e)});return n}function de(e,t){var n;return e.tweens.map((function(r){var a=function(e,t){var n={};for(var r in e){var a=K(e[r],t);T.arr(a)&&1===(a=a.map((function(e){return K(e,t)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),i=a.value,o=T.arr(i)?i[1]:i,s=$(o),u=Q(t.target,e.name,s,t),l=n?n.to.original:u,c=T.arr(i)?i[0]:l,d=$(c)||$(u),f=s||d;return T.und(o)&&(o=l),a.from=oe(c,f),a.to=oe(J(o,c),f),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=S(a.easing,a.duration),a.isPath=T.pth(i),a.isPathTargetInsideSVG=a.isPath&&T.svg(t.target),a.isColor=T.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}var fe={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var i="";r.list.forEach((function(e,t){i+=t+"("+e+") "})),e.style.transform=i}}};function he(e,t){ue(e).forEach((function(e){for(var n in t){var r=K(t[n],e),a=e.target,i=$(r),o=Q(a,n,i,e),s=J(ee(r,i||$(o)),o),u=V(a,n);fe[u](a,n,s,e.transforms,!0)}}))}function me(e,t){return H(_(e.map((function(e){return t.map((function(t){return function(e,t){var n=V(e.target,t.name);if(n){var r=de(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,t)}))}))),(function(e){return!T.und(e)}))}function pe(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,a.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,a}var ge=0;var ve=[],ye=function(){var e;function t(n){for(var r=ve.length,a=0;a<r;){var i=ve[a];i.paused?(ve.splice(a,1),r--):(i.tick(n),a++)}e=a>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){be.suspendWhenDocumentHidden&&(we()?e=cancelAnimationFrame(e):(ve.forEach((function(e){return e._onDocumentVisibility()})),ye()))})),function(){e||we()&&be.suspendWhenDocumentHidden||!(ve.length>0)||(e=requestAnimationFrame(t))}}();function we(){return!!document&&document.hidden}function be(e){void 0===e&&(e={});var t,n=0,r=0,a=0,i=0,o=null;function s(e){var t=window.Promise&&new Promise((function(e){return o=e}));return e.finished=t,t}var u=function(e){var t=R(w,e),n=R(b,e),r=ce(n,e),a=ue(e.targets),i=me(a,r),o=pe(i,n),s=ge;return ge++,j(t,{id:s,children:[],animatables:a,animations:i,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}(e);s(u);function l(){var e=u.direction;"alternate"!==e&&(u.direction="normal"!==e?"normal":"reverse"),u.reversed=!u.reversed,t.forEach((function(e){return e.reversed=u.reversed}))}function c(e){return u.reversed?u.duration-e:e}function d(){n=0,r=c(u.currentTime)*(1/be.speed)}function f(e,t){t&&t.seek(e-t.timelineOffset)}function h(e){for(var t=0,n=u.animations,r=n.length;t<r;){var a=n[t],i=a.animatable,o=a.tweens,s=o.length-1,l=o[s];s&&(l=H(o,(function(t){return e<t.end}))[0]||l);for(var c=x(e-l.start-l.delay,0,l.duration)/l.duration,d=isNaN(c)?1:l.easing(c),f=l.to.strings,h=l.round,m=[],p=l.to.numbers.length,g=void 0,v=0;v<p;v++){var y=void 0,w=l.to.numbers[v],b=l.from.numbers[v]||0;y=l.isPath?ie(l.value,d*w,l.isPathTargetInsideSVG):b+d*(w-b),h&&(l.isColor&&v>2||(y=Math.round(y*h)/h)),m.push(y)}var k=f.length;if(k){g=f[0];for(var L=0;L<k;L++){f[L];var E=f[L+1],M=m[L];isNaN(M)||(g+=E?M+E:M+" ")}}else g=m[0];fe[a.type](i.target,a.property,g,i.transforms),a.currentValue=g,t++}}function m(e){u[e]&&!u.passThrough&&u[e](u)}function p(e){var d=u.duration,p=u.delay,g=d-u.endDelay,v=c(e);u.progress=x(v/d*100,0,100),u.reversePlayback=v<u.currentTime,t&&function(e){if(u.reversePlayback)for(var n=i;n--;)f(e,t[n]);else for(var r=0;r<i;r++)f(e,t[r])}(v),!u.began&&u.currentTime>0&&(u.began=!0,m("begin")),!u.loopBegan&&u.currentTime>0&&(u.loopBegan=!0,m("loopBegin")),v<=p&&0!==u.currentTime&&h(0),(v>=g&&u.currentTime!==d||!d)&&h(d),v>p&&v<g?(u.changeBegan||(u.changeBegan=!0,u.changeCompleted=!1,m("changeBegin")),m("change"),h(v)):u.changeBegan&&(u.changeCompleted=!0,u.changeBegan=!1,m("changeComplete")),u.currentTime=x(v,0,d),u.began&&m("update"),e>=d&&(r=0,u.remaining&&!0!==u.remaining&&u.remaining--,u.remaining?(n=a,m("loopComplete"),u.loopBegan=!1,"alternate"===u.direction&&l()):(u.paused=!0,u.completed||(u.completed=!0,m("loopComplete"),m("complete"),!u.passThrough&&"Promise"in window&&(o(),s(u)))))}return u.reset=function(){var e=u.direction;u.passThrough=!1,u.currentTime=0,u.progress=0,u.paused=!0,u.began=!1,u.loopBegan=!1,u.changeBegan=!1,u.completed=!1,u.changeCompleted=!1,u.reversePlayback=!1,u.reversed="reverse"===e,u.remaining=u.loop,t=u.children;for(var n=i=t.length;n--;)u.children[n].reset();(u.reversed&&!0!==u.loop||"alternate"===e&&1===u.loop)&&u.remaining++,h(u.reversed?u.duration:0)},u._onDocumentVisibility=d,u.set=function(e,t){return he(e,t),u},u.tick=function(e){a=e,n||(n=a),p((a+(r-n))*be.speed)},u.seek=function(e){p(c(e))},u.pause=function(){u.paused=!0,d()},u.play=function(){u.paused&&(u.completed&&u.reset(),u.paused=!1,ve.push(u),d(),ye())},u.reverse=function(){l(),u.completed=!u.reversed,d()},u.restart=function(){u.reset(),u.play()},u.remove=function(e){Le(se(e),u)},u.reset(),u.autoplay&&u.play(),u}function ke(e,t){for(var n=t.length;n--;)q(e,t[n].animatable.target)&&t.splice(n,1)}function Le(e,t){var n=t.animations,r=t.children;ke(e,n);for(var a=r.length;a--;){var i=r[a],o=i.animations;ke(e,o),o.length||i.children.length||r.splice(a,1)}n.length||r.length||t.pause()}be.version="3.2.1",be.speed=1,be.suspendWhenDocumentHidden=!0,be.running=ve,be.remove=function(e){for(var t=se(e),n=ve.length;n--;){Le(t,ve[n])}},be.get=Q,be.set=he,be.convertPx=Y,be.path=function(e,t){var n=T.str(e)?D(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:ae(n),totalLength:re(n)*(r/100)}}},be.setDashoffset=function(e){var t=re(e);return e.setAttribute("stroke-dasharray",t),t},be.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?S(t.easing):null,a=t.grid,i=t.axis,o=t.from||0,s="first"===o,u="center"===o,l="last"===o,c=T.arr(e),d=c?parseFloat(e[0]):parseFloat(e),f=c?parseFloat(e[1]):0,h=$(c?e[1]:e)||0,m=t.start||0+(c?d:0),p=[],g=0;return function(e,t,v){if(s&&(o=0),u&&(o=(v-1)/2),l&&(o=v-1),!p.length){for(var y=0;y<v;y++){if(a){var w=u?(a[0]-1)/2:o%a[0],b=u?(a[1]-1)/2:Math.floor(o/a[0]),k=w-y%a[0],L=b-Math.floor(y/a[0]),x=Math.sqrt(k*k+L*L);"x"===i&&(x=-k),"y"===i&&(x=-L),p.push(x)}else p.push(Math.abs(o-y));g=Math.max.apply(Math,p)}r&&(p=p.map((function(e){return r(e/g)*g}))),"reverse"===n&&(p=p.map((function(e){return i?e<0?-1*e:-e:Math.abs(g-e)})))}return m+(c?(f-d)/g:d)*(Math.round(100*p[t])/100)+h}},be.timeline=function(e){void 0===e&&(e={});var t=be(e);return t.duration=0,t.add=function(n,r){var a=ve.indexOf(t),i=t.children;function o(e){e.passThrough=!0}a>-1&&ve.splice(a,1);for(var s=0;s<i.length;s++)o(i[s]);var u=j(n,R(b,e));u.targets=u.targets||e.targets;var l=t.duration;u.autoplay=!1,u.direction=t.direction,u.timelineOffset=T.und(r)?l:J(r,l),o(t),t.seek(u.timelineOffset);var c=be(u);o(c),i.push(c);var d=pe(i,e);return t.delay=d.delay,t.endDelay=d.endDelay,t.duration=d.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},be.easing=S,be.penner=N,be.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var xe=be;const Ee=new y({targets:".animate-me"});xe.timeline({targets:Ee.listAll,delay:xe.stagger(100,{grid:[Ee.list[0].length,Ee.list.length],from:"center"}),loop:!0}).add({scale:.5}).add({letterSpacing:"10px"}).add({scale:1}).add({letterSpacing:"6px"});xe({targets:"svg #XMLID5",keyframes:[{translateX:-1200},{rotateY:180},{translateX:1500},{rotateY:0},{translateX:-1200},{rotateY:180},{translateX:300}],easing:"easeInOutSine",duration:6e4});c=a("kKZR4");function Me(){u.kidsSectionRef.classList.add("visually-hidden"),u.kidsSectionGames.classList.add("visually-hidden"),u.kidsSectionGames.classList.add("visually-hidden"),u.kidsPage.classList.add("visually-hidden"),u.paginationSection.classList.add("visually-hidden")}function Te(){u.kidsSectionRef.classList.remove("visually-hidden"),u.kidsSectionGames.classList.remove("visually-hidden"),u.kidsPage.classList.remove("visually-hidden"),u.paginationSection.classList.remove("visually-hidden"),u.gridSnake.innerHTML="",u.games.classList.add("hidden-game"),u.ticTacToe.classList.remove("hidden-game"),u.memoryGame.classList.remove("hidden-game"),u.snake.classList.remove("hidden-game")}(u=a("3ILHO")).memoryGamesItem.addEventListener("click",(function(){Me(),u.games.classList.remove("hidden-game"),u.ticTacToe.classList.add("hidden-game"),u.snake.classList.add("hidden-game");const e=new class{rearrangeCards(){this.cards.forEach((e=>{const t=Math.floor(Math.random()*this.cards.length)+1;e.classList.remove("has-match"),setTimeout((()=>{e.style.order=`${t}`}),400)}))}validateCards(){const[e,t]=this.flippedCards;this.cardsContainer.classList.add("no-event"),e.dataset.animal===t.dataset.animal?(e.classList.replace("flipped","has-match"),t.classList.replace("flipped","has-match"),this.flippedCards=[],setTimeout((()=>{const e=this.cards.every((e=>e.classList.contains("has-match")));this.cardsContainer.classList.remove("no-event"),e&&this.rearrangeCards()}),this.delay)):setTimeout((()=>{e.classList.remove("flipped"),t.classList.remove("flipped"),this.flippedCards=[],this.cardsContainer.classList.remove("no-event")}),this.delay)}flip(e){e.classList.add("flipped"),this.flippedCards.push(e),2===this.flippedCards.length&&this.validateCards()}constructor(){this.cardsContainer=document.querySelector(".js-cards"),this.cards=Array.from(this.cardsContainer.children),this.flippedCards=[],this.delay=1e3}};e.cards.forEach((t=>{t.addEventListener("click",e.flip.bind(e,t))}))})),u.btnExitGame.addEventListener("click",Te),(u=a("3ILHO")).ticTacToeGamesItem.addEventListener("click",(function(){Me(),u.games.classList.remove("hidden-game"),u.memoryGame.classList.add("hidden-game"),u.snake.classList.add("hidden-game");var e,t,n,r,a,i,o,s,l=document.getElementById("tictactoe"),c=document.getElementById("winnerset").children,d=document.getElementById("board"),f=document.getElementById("play"),h=document.getElementById("winner"),m=(document.getElementById("reset"),document.getElementsByClassName("tile")),p=(document.getElementsByClassName("sign"),document.getElementById("opponent"),document.getElementById("settings")),g=(document.getElementById("humvscomp"),document.getElementById("xvso"),document.getElementsByClassName("options"),document.getElementsByClassName("btn")),v=document.getElementsByClassName("sets"),y=document.getElementsByClassName("welcome"),w=document.getElementsByClassName("chooses"),b=document.getElementsByClassName("destiny"),k=(document.getElementsByClassName("options"),[0,0,0,0,0,0,0,0,0]),L=[[0,1,2],[3,4,5],[0,3,6],[6,7,8],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function x(e,t,n){var r=t;if(e.hasChildNodes()){for(var a=0,i=e.childNodes,o=0;o<i.length;o++)if(1==i[o].nodeType){var s=Math.ceil(i[o].getTotalLength());i[o].style.strokeDasharray=s,i[o].style.strokeDashoffset=s,i[o].style.animation="dash "+r+"s ease-out  "+a+"s   forwards",a+=n}}else{s=Math.ceil(e.getTotalLength());e.style.strokeDasharray=s,e.style.strokeDashoffset=s,e.style.animation="dash 0.5s ease-out  forwards"}}function E(a,i){if(s&&0==k[a]&&t)if(i==e){x(o=document.getElementById(n+a),.3,.3),k[a]=n,M(k,i),function(){if(s)S(k,0,t)}()}else{k[a]=r;var o=document.getElementById(r+a);setTimeout((function(){x(o,.3,.3)}),500),M(k,i)}}function M(n,r){if(t){if(r==t){if(C(n,r))return s=!1,void setTimeout((function(){T(n),h.innerHTML="<h1>You loose !</h1>"}),1400)}else if((r=e)&&r==e&&C(n,r))return s=!1,T(n),void setTimeout((function(){h.innerHTML="<h1>You won !</h1>"}),1e3)}else if(e)if(r==player1){if(C(n,r))return s=!1,T(n),void setTimeout((function(){h.innerHTML="<h1>player1 won !</h1>"}),1e3)}else if(C(n,r))return s=!1,T(n),void setTimeout((function(){h.innerHTML="<h1>player2 won !</h1>"}),1e3);I(n)&&setTimeout((function(){h.innerHTML="<h1>Tie !</h1>"}),1e3)}function T(e){for(var t=0;t<8;t++){for(var n=[],r=0;r<3;r++)n.push(e[L[t][r]]);n.every((function(e,t,n){return!(e!==n[0]||!isNaN(e))}))&&x(c[t],1,1)}}function C(a,i){var o;t&&(o=i==e?n:r);for(var s=0;s<8;s++){for(var u=!0,l=0;l<3;l++)if(a[L[s][l]]!=o){u=!1;break}if(u)return!0}return!1}function I(e){for(var t=0;t<e.length;t++)if(0==e[t])return!1;return!0}HTMLElement.prototype.addClass=function(e){this.classList.add(e)},HTMLElement.prototype.removeClass=function(e){this.classList.remove(e)};for(var P=0;P<m.length;P++)m[P].addEventListener("click",A);function A(){1;var n,r=Array.prototype.indexOf.call(m,this);s&&0==k[r]&&(e?(n=r,player1?(k[n]=i,x(document.getElementById(i+n),.3,.3),M(k,player1),player1=!1,a=!0):(k[n]=o,x(document.getElementById(o+n),.3,.3),M(k,a),player1=!0,a=!1)):t&&E(r,e))}function B(e,t){for(var n=0;n<e.length;n++)e[n].addClass("disable");for(var r=0;r<t.length;r++)0===r&&t[r].addClass("fadeBounceIn"),r>0&&t[r].addClass("fadeIn"),t[r].removeClass("disable")}B(v,y);for(P=0;P<g.length;P++)g[P].addEventListener("click",(function(){O(this.id)}));function O(a){"play"==a?B(v,w):"reset"==a?function(){O(),window.location=window.location,0;for(var e=0;e<9;e++)k[e]=0;s=!1}():"human"==a?(e=!0,t=!1,B(v,b)):"computer"==a?(e=!1,t=!0,B(v,b)):t?"o"!=a&&"x"!=a||("x"==a?(n="x",r="o"):(n="o",r="x"),s=!0,N()):e&&("o"!=a&&"x"!=a||("x"==a?(i="x",o="o"):(o="x",i="o")),s=!0,N())}function N(){p.addClass("disable"),d.removeClass("disable"),x(l,.5,.5),player1=!0}function S(a,i,o){if(C(a,t))return 10-i;if(C(a,e))return-10+i;if(I(a))return 0;var s;s=o?-1/0:1/0;for(var u=0,l=0;l<a.length;l++){var c=a.slice();if(0==c[l]){var d=o==t?r:n;c[l]=d;var f=S(c,i+1,!o);o?f>s&&(s=f,u=l):f<s&&(s=f,u=l)}}return 0==i&&E(u,t),s}f.addEventListener})),u.btnExitGame.addEventListener("click",Te),(u=a("3ILHO")).snakeGamesItem.addEventListener("click",(function(){Me(),u.games.classList.remove("hidden-game"),u.memoryGame.classList.add("hidden-game"),u.ticTacToe.classList.add("hidden-game"),function(){let e,t,n,r,a,i,o,s=!1;const u=15,l="black",c=document.querySelector(".grid");for(let e=0;e<225;e++){const t=document.createElement("div");t.setAttribute("class","content"),t.setAttribute("id",e);const n=document.createElement("div");n.setAttribute("class","tile-snake"),n.appendChild(t),c.appendChild(n)}const d=document.querySelectorAll(".grid .tile-snake .content"),f=document.querySelector(".container"),h=document.querySelector(".score");function m(){e=[168,169,170,171],t=100,n=void 0,r=void 0,a=-1,i=0,o=[],h.innerText=i;for(const e of d)b(e);b(d[t],{"background-color":l,"border-radius":"50%"});for(const t of e.slice(1)){const n=d[t];n.style.backgroundColor=l,t==e[e.length-1]&&(n.style.left=0),t==e[0]&&(n.style.right=0)}}function p(){s=!0,window.requestAnimationFrame(g)}function g(s){try{void 0===n&&(n=s);const r=s-n,c=Math.floor(r/200),f=r%200/200;a!=c?(!function(n){const r=function(){const t=e[e.length-1];switch(o.shift()||v()){case"right":{const n=t+1;if(n%u==0)throw Error("The snake hit the wall");if(e.slice(1).includes(n))throw Error("The snake bit itself");return n}case"left":{const n=t-1;if(n%u==14||n<0)throw Error("The snake hit the wall");if(e.slice(1).includes(n))throw Error("The snake bit itself");return n}case"down":{const n=t+u;if(n>224)throw Error("The snake hit the wall");if(e.slice(1).includes(n))throw Error("The snake bit itself");return n}case"up":{const n=t-u;if(n<0)throw Error("The snake hit the wall");if(e.slice(1).includes(n))throw Error("The snake bit itself");return n}}}();if(e.push(r),b(d[e[0]]),r!=t){e.shift();const t=d[e[0]],r=y(),a=100-100*n+"%";"right"==r&&b(t,{left:0,"background-color":l}),"left"==r&&b(t,{right:0,"background-color":l}),"down"==r&&b(t,{top:0,height:a,"background-color":l}),"up"==r&&b(t,{bottom:0,height:a,"background-color":l})}b(d[e[e.length-2]],{"background-color":l});const a=d[r],i=v(),s=100*n+"%";"right"==i&&b(a,{left:0,width:s,"background-color":l,"border-radius":0}),"left"==i&&b(a,{right:0,width:s,"background-color":l,"border-radius":0}),"down"==i&&b(a,{top:0,height:s,"background-color":l,"border-radius":0}),"up"==i&&b(a,{bottom:0,height:s,"background-color":l,"border-radius":0})}(f),e[e.length-1]==t&&(i++,h.innerText=i,function(){let n;do{n=Math.floor(Math.random()*u*15)}while(e.includes(n));b(d[n],{"background-color":l,"border-radius":"50%"}),t=n}()),a++):function(t){const n=d[e[e.length-1]],r=v(),a=100*t+"%";"right"!=r&&"left"!=r||(n.style.width=a),"down"!=r&&"up"!=r||(n.style.height=a);const i=d[e[0]],o=y(),s=100-100*t+"%";"right"!=o&&"left"!=o||(i.style.width=s),"down"!=o&&"up"!=o||(i.style.height=s)}(f),window.requestAnimationFrame(g)}catch(e){f.style.opacity=1}r=s}function v(){return w(e[e.length-1],e[e.length-2])}function y(){return w(e[0],e[1])}function w(e,t){if(e-1==t)return"right";if(e+1==t)return"left";if(e-u==t)return"down";if(e+u==t)return"up";throw Error("the two tile are not connected")}function b(e,t={}){const n={width:"100%",height:"100%",top:"auto",right:"auto",bottom:"auto",left:"auto","background-color":"transparent",...t};e.style.cssText=Object.entries(n).map((([e,t])=>`${e}: ${t};`)).join(" ")}m(),window.addEventListener("keydown",(function(e){if(["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," ","H","h","E","e"].includes(e.key))return e.preventDefault()," "==e.key?(m(),void p()):"ArrowLeft"==e.key&&"left"!=o[o.length-1]&&"right"!=v()?(o.push("left"),void(s||p())):"ArrowUp"==e.key&&"up"!=o[o.length-1]&&"down"!=v()?(o.push("up"),void(s||p())):"ArrowRight"==e.key&&"right"!=o[o.length-1]&&"left"!=v()?(o.push("right"),void(s||p())):"ArrowDown"==e.key&&"down"!=o[o.length-1]&&"up"!=v()?(o.push("down"),void(s||p())):void 0}))}()})),u.btnExitGame.addEventListener("click",Te),document.addEventListener("DOMContentLoaded",(()=>{(0,c.addHiddenPagination)(),u.listRef.addEventListener("click",(e=>{u.backdropRef.style.display="block",(0,h.openMovieInfo)(e)})),u.zeroPlus.addEventListener("click",f(i.getPopularForKidsZero)),u.sixPlus.addEventListener("click",f(i.getPopularForKidsSix)),u.twelvePlus.addEventListener("click",f(i.getPopularForKidsTwelve)),m.btnUp.addEventListener()}));
//# sourceMappingURL=kids.3011e6e7.js.map
