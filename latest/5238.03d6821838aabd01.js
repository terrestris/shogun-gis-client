"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["5238"],{80967:function(t,n){n.Z=class t{constructor(){this.disposed=!1}dispose(){!this.disposed&&(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}},30006:function(t,n,e){var r=e(73381);n.Z={SINGLECLICK:"singleclick",CLICK:r.default.CLICK,DBLCLICK:r.default.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}},58493:function(t,n,e){e.r(n),e.d(n,{ObjectEvent:function(){return l}});var r=e(13910),i=e(56834),o=e(9520),u=e(13580),s=e(49179);class l extends o.default{constructor(t,n,e){super(t),this.key=n,this.oldValue=e}}class c extends i.default{constructor(t){super(),this.on,this.once,this.un,(0,s.getUid)(this),this.values_=null,void 0!==t&&this.setProperties(t)}get(t){let n;return this.values_&&this.values_.hasOwnProperty(t)&&(n=this.values_[t]),n}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(t,n){let e;e=`change:${t}`,this.hasListener(e)&&this.dispatchEvent(new l(e,t,n)),e=r.Z.PROPERTYCHANGE,this.hasListener(e)&&this.dispatchEvent(new l(e,t,n))}addChangeListener(t,n){this.addEventListener(`change:${t}`,n)}removeChangeListener(t,n){this.removeEventListener(`change:${t}`,n)}set(t,n,e){let r=this.values_||(this.values_={});if(e)r[t]=n;else{let e=r[t];r[t]=n,e!==n&&this.notify(t,e)}}setProperties(t,n){for(let e in t)this.set(e,t[e],n)}applyProperties(t){if(!!t.values_)Object.assign(this.values_||(this.values_={}),t.values_)}unset(t,n){if(this.values_&&t in this.values_){let e=this.values_[t];delete this.values_[t],(0,u.x)(this.values_)&&(this.values_=null),!n&&this.notify(t,e)}}}n.default=c},13910:function(t,n){n.Z={PROPERTYCHANGE:"propertychange"}},56834:function(t,n,e){e.r(n),e.d(n,{unByKey:function(){return s}});var r=e(73381),i=e(66575),o=e(13002);class u extends i.Z{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(r.default.CHANGE)}getRevision(){return this.revision_}onInternal(t,n){if(Array.isArray(t)){let e=t.length,r=Array(e);for(let i=0;i<e;++i)r[i]=(0,o.oL)(this,t[i],n);return r}return(0,o.oL)(this,t,n)}onceInternal(t,n){let e;if(Array.isArray(t)){let r=t.length;e=Array(r);for(let i=0;i<r;++i)e[i]=(0,o.Vx)(this,t[i],n)}else e=(0,o.Vx)(this,t,n);return n.ol_key=e,e}unInternal(t,n){let e=n.ol_key;if(e)s(e);else if(Array.isArray(t))for(let e=0,r=t.length;e<r;++e)this.removeEventListener(t[e],n);else this.removeEventListener(t,n)}}function s(t){if(Array.isArray(t))for(let n=0,e=t.length;n<e;++n)(0,o.bN)(t[n]);else(0,o.bN)(t)}u.prototype.on,u.prototype.once,u.prototype.un,n.default=u},79682:function(t,n,e){function r(t,n,e){let r,o;e=e||i;let u=0,s=t.length,l=!1;for(;u<s;)(o=+e(t[r=u+(s-u>>1)],n))<0?u=r+1:(s=r,l=!o);return l?u:~u}function i(t,n){return t>n?1:t<n?-1:0}function o(t,n){return t<n?1:t>n?-1:0}function u(t,n,e){if(t[0]<=n)return 0;let r=t.length;if(n<=t[r-1])return r-1;if("function"==typeof e){for(let i=1;i<r;++i){let r=t[i];if(r===n)return i;if(r<n){if(e(n,t[i-1],r)>0)return i-1;return i}}return r-1}if(e>0){for(let e=1;e<r;++e)if(t[e]<n)return e-1;return r-1}if(e<0){for(let e=1;e<r;++e)if(t[e]<=n)return e;return r-1}for(let e=1;e<r;++e){if(t[e]==n)return e;if(t[e]<n){if(t[e-1]-n<n-t[e])return e-1;return e}}return r-1}function s(t,n,e){for(;n<e;){let r=t[n];t[n]=t[e],t[e]=r,++n,--e}}function l(t,n){let e=Array.isArray(n)?n:[n],r=e.length;for(let n=0;n<r;n++)t[t.length]=e[n]}function c(t,n){let e=t.length;if(e!==n.length)return!1;for(let r=0;r<e;r++)if(t[r]!==n[r])return!1;return!0}function f(t,n,e){let r=n||i;return t.every(function(n,i){if(0===i)return!0;let o=r(t[i-1],n);return!(o>0||e&&0===o)})}e.d(n,{$1:function(){return o},FZ:function(){return s},fS:function(){return c},h7:function(){return u},j2:function(){return i},l7:function(){return l},pT:function(){return f},ry:function(){return r}})},38906:function(t,n,e){e.d(n,{h:function(){return r}});function r(t,n){if(!t)throw Error(n)}},90728:function(t,n,e){e.r(n),e.d(n,{add:function(){return u},closestOnCircle:function(){return s},closestOnSegment:function(){return l},createStringXY:function(){return c},degreesToStringHDMS:function(){return f},distance:function(){return g},equals:function(){return h},format:function(){return a},getWorldsAway:function(){return A},rotate:function(){return d},scale:function(){return p},squaredDistance:function(){return v},squaredDistanceToSegment:function(){return E},toStringHDMS:function(){return y},toStringXY:function(){return _},wrapX:function(){return m}});var r=e(21915),i=e(21882),o=e(79313);function u(t,n){return t[0]+=+n[0],t[1]+=+n[1],t}function s(t,n){let e=n.getRadius(),r=n.getCenter(),i=r[0],o=r[1],u=t[0],s=t[1],l=u-i,c=s-o;0===l&&0===c&&(l=1);let f=Math.sqrt(l*l+c*c),a=i+e*l/f;return[a,o+e*c/f]}function l(t,n){let e,r;let i=t[0],o=t[1],u=n[0],s=n[1],l=u[0],c=u[1],f=s[0],a=s[1],h=f-l,d=a-c,p=0===h&&0===d?0:(h*(i-l)+d*(o-c))/(h*h+d*d||0);return p<=0?(e=l,r=c):p>=1?(e=f,r=a):(e=l+p*h,r=c+p*d),[e,r]}function c(t){return function(n){return _(n,t)}}function f(t,n,e){let r=(0,i.$W)(n+180,360)-180,u=Math.abs(3600*r),s=e||0,l=Math.floor(u/3600),c=Math.floor((u-3600*l)/60),f=(0,i.FH)(u-3600*l-60*c,s);f>=60&&(f=0,c+=1),c>=60&&(c=0,l+=1);let a=l+"\xb0";return(0!==c||0!==f)&&(a+=" "+(0,o.v)(c,2)+"′"),0!==f&&(a+=" "+(0,o.v)(f,2,s)+"″"),0!==r&&(a+=" "+t.charAt(r<0?1:0)),a}function a(t,n,e){return t?n.replace("{x}",t[0].toFixed(e)).replace("{y}",t[1].toFixed(e)):""}function h(t,n){let e=!0;for(let r=t.length-1;r>=0;--r)if(t[r]!=n[r]){e=!1;break}return e}function d(t,n){let e=Math.cos(n),r=Math.sin(n),i=t[0]*e-t[1]*r,o=t[1]*e+t[0]*r;return t[0]=i,t[1]=o,t}function p(t,n){return t[0]*=n,t[1]*=n,t}function v(t,n){let e=t[0]-n[0],r=t[1]-n[1];return e*e+r*r}function g(t,n){return Math.sqrt(v(t,n))}function E(t,n){return v(t,l(t,n))}function y(t,n){return t?f("NS",t[1],n)+" "+f("EW",t[0],n):""}function _(t,n){return a(t,"{x}, {y}",n)}function m(t,n){if(n.canWrapX()){let e=(0,r.getWidth)(n.getExtent()),i=A(t,n,e);i&&(t[0]-=i*e)}return t}function A(t,n,e){let i=n.getExtent(),o=0;return n.canWrapX()&&(t[0]<i[0]||t[0]>i[2])&&(e=e||(0,r.getWidth)(i),o=Math.floor((t[0]-i[0])/e)),o}},86320:function(t,n,e){function r(t){return Math.pow(t,3)}function i(t){return 1-r(1-t)}function o(t){return 3*t*t-2*t*t*t}function u(t){return t}function s(t){return t<.5?o(2*t):1-o(2*(t-.5))}e.r(n),e.d(n,{easeIn:function(){return r},easeOut:function(){return i},inAndOut:function(){return o},linear:function(){return u},upAndDown:function(){return s}})},13002:function(t,n,e){e.d(n,{Vx:function(){return o},bN:function(){return u},oL:function(){return i}});var r=e(13580);function i(t,n,e,r,i){if(i){let i=e;e=function(o){return t.removeEventListener(n,e),i.call(r??this,o)}}else r&&r!==t&&(e=e.bind(r));let o={target:t,type:n,listener:e};return t.addEventListener(n,e),o}function o(t,n,e,r){return i(t,n,e,r,!0)}function u(t){t&&t.target&&(t.target.removeEventListener(t.type,t.listener),(0,r.Z)(t))}},9520:function(t,n,e){e.r(n),e.d(n,{preventDefault:function(){return i},stopPropagation:function(){return r}});function r(t){t.stopPropagation()}function i(t){t.preventDefault()}n.default=class t{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}},73381:function(t,n,e){e.r(n),n.default={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"}},66575:function(t,n,e){var r=e(80967),i=e(64011),o=e(13580),u=e(9520);class s extends r.Z{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,n){if(!t||!n)return;let e=this.listeners_||(this.listeners_={}),r=e[t]||(e[t]=[]);!r.includes(n)&&r.push(n)}dispatchEvent(t){let n;let e="string"==typeof t,r=e?t:t.type,o=this.listeners_&&this.listeners_[r];if(!o)return;let s=e?new u.default(t):t;!s.target&&(s.target=this.eventTarget_||this);let l=this.dispatching_||(this.dispatching_={}),c=this.pendingRemovals_||(this.pendingRemovals_={});!(r in l)&&(l[r]=0,c[r]=0),++l[r];for(let t=0,e=o.length;t<e;++t)if(!1===(n="handleEvent"in o[t]?o[t].handleEvent(s):o[t].call(this,s))||s.propagationStopped){n=!1;break}if(0==--l[r]){let t=c[r];for(delete c[r];t--;)this.removeEventListener(r,i.VOID);delete l[r]}return n}disposeInternal(){this.listeners_&&(0,o.Z)(this.listeners_)}getListeners(t){return this.listeners_&&this.listeners_[t]||void 0}hasListener(t){return!!this.listeners_&&(t?t in this.listeners_:Object.keys(this.listeners_).length>0)}removeEventListener(t,n){if(!this.listeners_)return;let e=this.listeners_[t];if(!e)return;let r=e.indexOf(n);-1!==r&&(this.pendingRemovals_&&t in this.pendingRemovals_?(e[r]=i.VOID,++this.pendingRemovals_[t]):(e.splice(r,1),0===e.length&&delete this.listeners_[t]))}}n.Z=s},36403:function(t,n,e){e.r(n),e.d(n,{all:function(){return s},altKeyOnly:function(){return l},altShiftKeysOnly:function(){return c},always:function(){return h},click:function(){return d},doubleClick:function(){return y},focus:function(){return f},focusWithTabindex:function(){return a},mouseActionButton:function(){return p},mouseOnly:function(){return R},never:function(){return v},noModifierKeys:function(){return _},penOnly:function(){return L},platformModifierKey:function(){return A},platformModifierKeyOnly:function(){return m},pointerMove:function(){return g},primaryAction:function(){return T},shiftKeyOnly:function(){return I},singleClick:function(){return E},targetNotEditable:function(){return C},touchOnly:function(){return O}});var r=e(30006),i=e(38906),o=e(64011),u=e(91358);function s(t){let n=arguments;return function(t){let e=!0;for(let r=0,i=n.length;r<i&&(e=e&&n[r](t));++r);return e}}let l=function(t){let n=t.originalEvent;return n.altKey&&!(n.metaKey||n.ctrlKey)&&!n.shiftKey},c=function(t){let n=t.originalEvent;return n.altKey&&!(n.metaKey||n.ctrlKey)&&n.shiftKey},f=function(t){let n=t.map.getTargetElement(),e=n.getRootNode(),r=t.map.getOwnerDocument().activeElement;return e instanceof ShadowRoot?e.host.contains(r):n.contains(r)},a=function(t){let n=t.map.getTargetElement(),e=n.getRootNode();return!(e instanceof ShadowRoot?e.host:n).hasAttribute("tabindex")||f(t)},h=o.TRUE,d=function(t){return t.type==r.Z.CLICK},p=function(t){let n=t.originalEvent;return 0==n.button&&!(u.WEBKIT&&u.MAC&&n.ctrlKey)},v=o.FALSE,g=function(t){return"pointermove"==t.type},E=function(t){return t.type==r.Z.SINGLECLICK},y=function(t){return t.type==r.Z.DBLCLICK},_=function(t){let n=t.originalEvent;return!n.altKey&&!(n.metaKey||n.ctrlKey)&&!n.shiftKey},m=function(t){let n=t.originalEvent;return!n.altKey&&(u.MAC?n.metaKey:n.ctrlKey)&&!n.shiftKey},A=function(t){let n=t.originalEvent;return u.MAC?n.metaKey:n.ctrlKey},I=function(t){let n=t.originalEvent;return!n.altKey&&!(n.metaKey||n.ctrlKey)&&n.shiftKey},C=function(t){let n=t.originalEvent,e=n.target.tagName;return"INPUT"!==e&&"SELECT"!==e&&"TEXTAREA"!==e&&!n.target.isContentEditable},R=function(t){let n=t.originalEvent;return(0,i.h)(void 0!==n,"mapBrowserEvent must originate from a pointer event"),"mouse"==n.pointerType},O=function(t){let n=t.originalEvent;return(0,i.h)(void 0!==n,"mapBrowserEvent must originate from a pointer event"),"touch"===n.pointerType},L=function(t){let n=t.originalEvent;return(0,i.h)(void 0!==n,"mapBrowserEvent must originate from a pointer event"),"pen"===n.pointerType},T=function(t){let n=t.originalEvent;return(0,i.h)(void 0!==n,"mapBrowserEvent must originate from a pointer event"),n.isPrimary&&0===n.button}},64011:function(t,n,e){e.r(n),e.d(n,{FALSE:function(){return o},TRUE:function(){return i},VOID:function(){return u},memoizeOne:function(){return s},toPromise:function(){return l}});var r=e(79682);function i(){return!0}function o(){return!1}function u(){}function s(t){let n,e,i;return function(){let o=Array.prototype.slice.call(arguments);return(!e||this!==i||!(0,r.fS)(o,e))&&(i=this,e=o,n=t.apply(this,arguments)),n}}function l(t){return function(){let n;try{n=t()}catch(t){return Promise.reject(t)}return n instanceof Promise?n:Promise.resolve(n)}()}},91358:function(t,n,e){e.r(n),e.d(n,{CREATE_IMAGE_BITMAP:function(){return h},DEVICE_PIXEL_RATIO:function(){return c},FIREFOX:function(){return i},IMAGE_DECODE:function(){return a},MAC:function(){return l},PASSIVE_EVENT_LISTENERS:function(){return d},SAFARI:function(){return o},SAFARI_BUG_237906:function(){return u},WEBKIT:function(){return s},WORKER_OFFSCREEN_CANVAS:function(){return f}});let r="undefined"!=typeof navigator&&void 0!==navigator.userAgent?navigator.userAgent.toLowerCase():"",i=r.includes("firefox"),o=r.includes("safari")&&!r.includes("chrom"),u=o&&(r.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(r)),s=r.includes("webkit")&&!r.includes("edge"),l=r.includes("macintosh"),c="undefined"!=typeof devicePixelRatio?devicePixelRatio:1,f="undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof OffscreenCanvas&&self instanceof WorkerGlobalScope,a="undefined"!=typeof Image&&Image.prototype.decode,h="function"==typeof createImageBitmap,d=function(){let t=!1;try{let n=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("_",null,n),window.removeEventListener("_",null,n)}catch{}return t}()},47588:function(t,n,e){e.d(n,{Cv:function(){return s},FW:function(){return l}});var r=e(58493),i=e(86320),o=e(73604);class u extends r.default{constructor(t){super(),this.on,this.once,this.un,t&&t.handleEvent&&(this.handleEvent=t.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(o.Z.ACTIVE)}getMap(){return this.map_}handleEvent(t){return!0}setActive(t){this.set(o.Z.ACTIVE,t)}setMap(t){this.map_=t}}function s(t,n,e){let r=t.getCenterInternal();if(r){let o=[r[0]+n[0],r[1]+n[1]];t.animateInternal({duration:void 0!==e?e:250,easing:i.linear,center:t.getConstrainedCenter(o)})}}function l(t,n,e,r){let o=t.getZoom();if(void 0===o)return;let u=t.getConstrainedZoom(o+n),s=t.getResolutionForZoom(u);t.getAnimating()&&t.cancelAnimations(),t.animate({resolution:s,anchor:e,duration:void 0!==r?r:250,easing:i.easeOut})}n.ZP=u},85459:function(t,n,e){e.r(n),e.d(n,{default:function(){return c}});var r=e("90728"),i=e("73381"),o={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown"},u=e("36403"),s=e("47588");class l extends s.ZP{constructor(t){super(),t=t||{},this.defaultCondition_=function(t){return(0,u.noModifierKeys)(t)&&(0,u.targetNotEditable)(t)},this.condition_=void 0!==t.condition?t.condition:this.defaultCondition_,this.duration_=void 0!==t.duration?t.duration:100,this.pixelDelta_=void 0!==t.pixelDelta?t.pixelDelta:128}handleEvent(t){let n=!1;if(t.type==i.default.KEYDOWN){let e=t.originalEvent,i=e.key;if(this.condition_(t)&&(i==o.DOWN||i==o.LEFT||i==o.RIGHT||i==o.UP)){let u=t.map.getView(),l=u.getResolution()*this.pixelDelta_,c=0,f=0;i==o.DOWN?f=-l:i==o.LEFT?c=-l:i==o.RIGHT?c=l:f=l;let a=[c,f];(0,r.rotate)(a,u.getRotation()),(0,s.Cv)(u,a,this.duration_),e.preventDefault(),n=!0}}return!n}}var c=l},73604:function(t,n){n.Z={ACTIVE:"active"}},21882:function(t,n,e){function r(t,n,e){return Math.min(Math.max(t,n),e)}function i(t,n,e,r,i,u){let s=i-e,l=u-r;if(0!==s||0!==l){let o=((t-e)*s+(n-r)*l)/(s*s+l*l);o>1?(e=i,r=u):o>0&&(e+=s*o,r+=l*o)}return o(t,n,e,r)}function o(t,n,e,r){let i=e-t,o=r-n;return i*i+o*o}function u(t){let n=t.length;for(let e=0;e<n;e++){let r=e,i=Math.abs(t[e][e]);for(let o=e+1;o<n;o++){let n=Math.abs(t[o][e]);n>i&&(i=n,r=o)}if(0===i)return null;let o=t[r];t[r]=t[e],t[e]=o;for(let r=e+1;r<n;r++){let i=-t[r][e]/t[e][e];for(let o=e;o<n+1;o++)e==o?t[r][o]=0:t[r][o]+=i*t[e][o]}}let e=Array(n);for(let r=n-1;r>=0;r--){e[r]=t[r][n]/t[r][r];for(let i=r-1;i>=0;i--)t[i][n]-=t[i][r]*e[r]}return e}function s(t){return 180*t/Math.PI}function l(t){return t*Math.PI/180}function c(t,n){let e=t%n;return e*n<0?e+n:e}function f(t,n,e){return t+e*(n-t)}function a(t,n){let e=Math.pow(10,n);return Math.round(t*e)/e}function h(t,n){return Math.round(a(t,n))}function d(t,n){return Math.floor(a(t,n))}function p(t,n){return Math.ceil(a(t,n))}function v(t,n,e){if(t>=n&&t<e)return t;let r=e-n;return((t-n)%r+r)%r+n}e.d(n,{$W:function(){return c},FH:function(){return a},GW:function(){return d},NM:function(){return h},SV:function(){return u},Ux:function(){return s},Yr:function(){return l},bI:function(){return o},mD:function(){return p},rU:function(){return i},re:function(){return v},t7:function(){return f},uZ:function(){return r}})},13580:function(t,n,e){function r(t){for(let n in t)delete t[n]}function i(t){let n;for(n in t)return!1;return!n}e.d(n,{Z:function(){return r},x:function(){return i}})},79313:function(t,n,e){function r(t,n,e){let r=void 0!==e?t.toFixed(e):""+t,i=r.indexOf(".");return(i=-1===i?r.length:i)>n?r:Array(1+n-i).join("0")+r}function i(t,n){let e=(""+t).split("."),r=(""+n).split(".");for(let t=0;t<Math.max(e.length,r.length);t++){let n=parseInt(e[t]||"0",10),i=parseInt(r[t]||"0",10);if(n>i)return 1;if(i>n)return -1}return 0}e.d(n,{n:function(){return i},v:function(){return r}})},49179:function(t,n,e){function r(){throw Error("Unimplemented abstract method.")}e.r(n),e.d(n,{VERSION:function(){return u},abstract:function(){return r},getUid:function(){return o}});let i=0;function o(t){return t.ol_uid||(t.ol_uid=String(++i))}let u="10.4.0"}}]);
//# sourceMappingURL=5238.03d6821838aabd01.js.map