"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["710"],{80967:function(t,n){n.Z=class{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}},30006:function(t,n,e){var r=e(73381);n.Z={SINGLECLICK:"singleclick",CLICK:r.default.CLICK,DBLCLICK:r.default.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}},58493:function(t,n,e){e.r(n),e.d(n,{ObjectEvent:function(){return l}});var r=e(13910),i=e(56834),o=e(9520),u=e(13580),s=e(49179);class l extends o.default{constructor(t,n,e){super(t),this.key=n,this.oldValue=e}}class a extends i.default{constructor(t){super(),this.on,this.once,this.un,(0,s.getUid)(this),this.values_=null,void 0!==t&&this.setProperties(t)}get(t){let n;return this.values_&&this.values_.hasOwnProperty(t)&&(n=this.values_[t]),n}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(t,n){let e;e=`change:${t}`,this.hasListener(e)&&this.dispatchEvent(new l(e,t,n)),e=r.Z.PROPERTYCHANGE,this.hasListener(e)&&this.dispatchEvent(new l(e,t,n))}addChangeListener(t,n){this.addEventListener(`change:${t}`,n)}removeChangeListener(t,n){this.removeEventListener(`change:${t}`,n)}set(t,n,e){let r=this.values_||(this.values_={});if(e)r[t]=n;else{let e=r[t];r[t]=n,e!==n&&this.notify(t,e)}}setProperties(t,n){for(let e in t)this.set(e,t[e],n)}applyProperties(t){t.values_&&Object.assign(this.values_||(this.values_={}),t.values_)}unset(t,n){if(this.values_&&t in this.values_){let e=this.values_[t];delete this.values_[t],(0,u.x)(this.values_)&&(this.values_=null),n||this.notify(t,e)}}}n.default=a},13910:function(t,n){n.Z={PROPERTYCHANGE:"propertychange"}},56834:function(t,n,e){e.r(n),e.d(n,{unByKey:function(){return s}});var r=e(73381),i=e(66575),o=e(13002);class u extends i.Z{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(r.default.CHANGE)}getRevision(){return this.revision_}onInternal(t,n){if(Array.isArray(t)){let e=t.length,r=Array(e);for(let i=0;i<e;++i)r[i]=(0,o.oL)(this,t[i],n);return r}return(0,o.oL)(this,t,n)}onceInternal(t,n){let e;if(Array.isArray(t)){let r=t.length;e=Array(r);for(let i=0;i<r;++i)e[i]=(0,o.Vx)(this,t[i],n)}else e=(0,o.Vx)(this,t,n);return n.ol_key=e,e}unInternal(t,n){let e=n.ol_key;if(e)s(e);else if(Array.isArray(t))for(let e=0,r=t.length;e<r;++e)this.removeEventListener(t[e],n);else this.removeEventListener(t,n)}}function s(t){if(Array.isArray(t))for(let n=0,e=t.length;n<e;++n)(0,o.bN)(t[n]);else(0,o.bN)(t)}u.prototype.on,u.prototype.once,u.prototype.un,n.default=u},79682:function(t,n,e){function r(t,n,e){let r,o;e=e||i;let u=0,s=t.length,l=!1;for(;u<s;)(o=+e(t[r=u+(s-u>>1)],n))<0?u=r+1:(s=r,l=!o);return l?u:~u}function i(t,n){return t>n?1:t<n?-1:0}function o(t,n){return t<n?1:t>n?-1:0}function u(t,n,e){if(t[0]<=n)return 0;let r=t.length;if(n<=t[r-1])return r-1;if("function"==typeof e){for(let i=1;i<r;++i){let r=t[i];if(r===n)return i;if(r<n){if(e(n,t[i-1],r)>0)return i-1;return i}}return r-1}if(e>0){for(let e=1;e<r;++e)if(t[e]<n)return e-1;return r-1}if(e<0){for(let e=1;e<r;++e)if(t[e]<=n)return e;return r-1}for(let e=1;e<r;++e){if(t[e]==n)return e;if(t[e]<n){if(t[e-1]-n<n-t[e])return e-1;return e}}return r-1}function s(t,n,e){for(;n<e;){let r=t[n];t[n]=t[e],t[e]=r,++n,--e}}function l(t,n){let e=Array.isArray(n)?n:[n],r=e.length;for(let n=0;n<r;n++)t[t.length]=e[n]}function a(t,n){let e=t.length;if(e!==n.length)return!1;for(let r=0;r<e;r++)if(t[r]!==n[r])return!1;return!0}function c(t,n,e){let r=n||i;return t.every(function(n,i){if(0===i)return!0;let o=r(t[i-1],n);return!(o>0||e&&0===o)})}e.d(n,{$1:function(){return o},FZ:function(){return s},fS:function(){return a},h7:function(){return u},j2:function(){return i},l7:function(){return l},pT:function(){return c},ry:function(){return r}})},38906:function(t,n,e){e.d(n,{h:function(){return r}});function r(t,n){if(!t)throw Error(n)}},86320:function(t,n,e){function r(t){return Math.pow(t,3)}function i(t){return 1-r(1-t)}function o(t){return 3*t*t-2*t*t*t}function u(t){return t}function s(t){return t<.5?o(2*t):1-o(2*(t-.5))}e.r(n),e.d(n,{easeIn:function(){return r},easeOut:function(){return i},inAndOut:function(){return o},linear:function(){return u},upAndDown:function(){return s}})},13002:function(t,n,e){e.d(n,{Vx:function(){return o},bN:function(){return u},oL:function(){return i}});var r=e(13580);function i(t,n,e,r,i){if(i){let i=e;e=function(o){return t.removeEventListener(n,e),i.call(r??this,o)}}else r&&r!==t&&(e=e.bind(r));let o={target:t,type:n,listener:e};return t.addEventListener(n,e),o}function o(t,n,e,r){return i(t,n,e,r,!0)}function u(t){t&&t.target&&(t.target.removeEventListener(t.type,t.listener),(0,r.Z)(t))}},9520:function(t,n,e){function r(t){t.stopPropagation()}function i(t){t.preventDefault()}e.r(n),e.d(n,{preventDefault:function(){return i},stopPropagation:function(){return r}}),n.default=class{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}},73381:function(t,n,e){e.r(n),n.default={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"}},66575:function(t,n,e){var r=e(80967),i=e(64011),o=e(13580),u=e(9520);class s extends r.Z{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,n){if(!t||!n)return;let e=this.listeners_||(this.listeners_={}),r=e[t]||(e[t]=[]);r.includes(n)||r.push(n)}dispatchEvent(t){let n;let e="string"==typeof t,r=e?t:t.type,o=this.listeners_&&this.listeners_[r];if(!o)return;let s=e?new u.default(t):t;s.target||(s.target=this.eventTarget_||this);let l=this.dispatching_||(this.dispatching_={}),a=this.pendingRemovals_||(this.pendingRemovals_={});r in l||(l[r]=0,a[r]=0),++l[r];for(let t=0,e=o.length;t<e;++t)if(!1===(n="handleEvent"in o[t]?o[t].handleEvent(s):o[t].call(this,s))||s.propagationStopped){n=!1;break}if(0==--l[r]){let t=a[r];for(delete a[r];t--;)this.removeEventListener(r,i.VOID);delete l[r]}return n}disposeInternal(){this.listeners_&&(0,o.Z)(this.listeners_)}getListeners(t){return this.listeners_&&this.listeners_[t]||void 0}hasListener(t){return!!this.listeners_&&(t?t in this.listeners_:Object.keys(this.listeners_).length>0)}removeEventListener(t,n){if(!this.listeners_)return;let e=this.listeners_[t];if(!e)return;let r=e.indexOf(n);-1!==r&&(this.pendingRemovals_&&t in this.pendingRemovals_?(e[r]=i.VOID,++this.pendingRemovals_[t]):(e.splice(r,1),0===e.length&&delete this.listeners_[t]))}}n.Z=s},36403:function(t,n,e){e.r(n),e.d(n,{all:function(){return s},altKeyOnly:function(){return l},altShiftKeysOnly:function(){return a},always:function(){return h},click:function(){return d},doubleClick:function(){return y},focus:function(){return c},focusWithTabindex:function(){return f},mouseActionButton:function(){return v},mouseOnly:function(){return R},never:function(){return p},noModifierKeys:function(){return _},penOnly:function(){return C},platformModifierKey:function(){return I},platformModifierKeyOnly:function(){return m},pointerMove:function(){return E},primaryAction:function(){return L},shiftKeyOnly:function(){return A},singleClick:function(){return g},targetNotEditable:function(){return O},touchOnly:function(){return P}});var r=e(30006),i=e(38906),o=e(64011),u=e(91358);function s(t){let n=arguments;return function(t){let e=!0;for(let r=0,i=n.length;r<i&&(e=e&&n[r](t));++r);return e}}let l=function(t){let n=t.originalEvent;return n.altKey&&!(n.metaKey||n.ctrlKey)&&!n.shiftKey},a=function(t){let n=t.originalEvent;return n.altKey&&!(n.metaKey||n.ctrlKey)&&n.shiftKey},c=function(t){let n=t.map.getTargetElement(),e=n.getRootNode(),r=t.map.getOwnerDocument().activeElement;return e instanceof ShadowRoot?e.host.contains(r):n.contains(r)},f=function(t){let n=t.map.getTargetElement(),e=n.getRootNode();return!(e instanceof ShadowRoot?e.host:n).hasAttribute("tabindex")||c(t)},h=o.TRUE,d=function(t){return t.type==r.Z.CLICK},v=function(t){let n=t.originalEvent;return 0==n.button&&!(u.WEBKIT&&u.MAC&&n.ctrlKey)},p=o.FALSE,E=function(t){return"pointermove"==t.type},g=function(t){return t.type==r.Z.SINGLECLICK},y=function(t){return t.type==r.Z.DBLCLICK},_=function(t){let n=t.originalEvent;return!n.altKey&&!(n.metaKey||n.ctrlKey)&&!n.shiftKey},m=function(t){let n=t.originalEvent;return!n.altKey&&(u.MAC?n.metaKey:n.ctrlKey)&&!n.shiftKey},I=function(t){let n=t.originalEvent;return u.MAC?n.metaKey:n.ctrlKey},A=function(t){let n=t.originalEvent;return!n.altKey&&!(n.metaKey||n.ctrlKey)&&n.shiftKey},O=function(t){let n=t.originalEvent,e=n.target.tagName;return"INPUT"!==e&&"SELECT"!==e&&"TEXTAREA"!==e&&!n.target.isContentEditable},R=function(t){let n=t.originalEvent;return(0,i.h)(void 0!==n,"mapBrowserEvent must originate from a pointer event"),"mouse"==n.pointerType},P=function(t){let n=t.originalEvent;return(0,i.h)(void 0!==n,"mapBrowserEvent must originate from a pointer event"),"touch"===n.pointerType},C=function(t){let n=t.originalEvent;return(0,i.h)(void 0!==n,"mapBrowserEvent must originate from a pointer event"),"pen"===n.pointerType},L=function(t){let n=t.originalEvent;return(0,i.h)(void 0!==n,"mapBrowserEvent must originate from a pointer event"),n.isPrimary&&0===n.button}},64011:function(t,n,e){e.r(n),e.d(n,{FALSE:function(){return o},TRUE:function(){return i},VOID:function(){return u},memoizeOne:function(){return s},toPromise:function(){return l}});var r=e(79682);function i(){return!0}function o(){return!1}function u(){}function s(t){let n,e,i;return function(){let o=Array.prototype.slice.call(arguments);return e&&this===i&&(0,r.fS)(o,e)||(i=this,e=o,n=t.apply(this,arguments)),n}}function l(t){return function(){let n;try{n=t()}catch(t){return Promise.reject(t)}return n instanceof Promise?n:Promise.resolve(n)}()}},91358:function(t,n,e){e.r(n),e.d(n,{CREATE_IMAGE_BITMAP:function(){return h},DEVICE_PIXEL_RATIO:function(){return a},FIREFOX:function(){return i},IMAGE_DECODE:function(){return f},MAC:function(){return l},PASSIVE_EVENT_LISTENERS:function(){return d},SAFARI:function(){return o},SAFARI_BUG_237906:function(){return u},WEBKIT:function(){return s},WORKER_OFFSCREEN_CANVAS:function(){return c}});let r="undefined"!=typeof navigator&&void 0!==navigator.userAgent?navigator.userAgent.toLowerCase():"",i=r.includes("firefox"),o=r.includes("safari")&&!r.includes("chrom"),u=o&&(r.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(r)),s=r.includes("webkit")&&!r.includes("edge"),l=r.includes("macintosh"),a="undefined"!=typeof devicePixelRatio?devicePixelRatio:1,c="undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof OffscreenCanvas&&self instanceof WorkerGlobalScope,f="undefined"!=typeof Image&&Image.prototype.decode,h="function"==typeof createImageBitmap,d=function(){let t=!1;try{let n=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("_",null,n),window.removeEventListener("_",null,n)}catch{}return t}()},97950:function(t,n,e){e.r(n);var r=e(36403),i=e(64011),o=e(38642),u=e(38024);class s extends u.default{constructor(t){t=t||{},super({stopDown:i.FALSE}),this.condition_=t.condition?t.condition:r.altShiftKeysOnly,this.lastAngle_=void 0,this.duration_=void 0!==t.duration?t.duration:250}handleDragEvent(t){if(!(0,r.mouseOnly)(t))return;let n=t.map,e=n.getView();if(e.getConstraints().rotation===o.h$)return;let i=n.getSize(),u=t.pixel,s=Math.atan2(i[1]/2-u[1],u[0]-i[0]/2);if(void 0!==this.lastAngle_){let t=s-this.lastAngle_;e.adjustRotationInternal(-t)}this.lastAngle_=s}handleUpEvent(t){return!(0,r.mouseOnly)(t)||(t.map.getView().endInteraction(this.duration_),!1)}handleDownEvent(t){return!!(0,r.mouseOnly)(t)&&!!((0,r.mouseActionButton)(t)&&this.condition_(t))&&(t.map.getView().beginInteraction(),this.lastAngle_=void 0,!0)}}n.default=s},47588:function(t,n,e){e.d(n,{Cv:function(){return s},FW:function(){return l}});var r=e(58493),i=e(86320),o=e(73604);class u extends r.default{constructor(t){super(),this.on,this.once,this.un,t&&t.handleEvent&&(this.handleEvent=t.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(o.Z.ACTIVE)}getMap(){return this.map_}handleEvent(t){return!0}setActive(t){this.set(o.Z.ACTIVE,t)}setMap(t){this.map_=t}}function s(t,n,e){let r=t.getCenterInternal();if(r){let o=[r[0]+n[0],r[1]+n[1]];t.animateInternal({duration:void 0!==e?e:250,easing:i.linear,center:t.getConstrainedCenter(o)})}}function l(t,n,e,r){let o=t.getZoom();if(void 0===o)return;let u=t.getConstrainedZoom(o+n),s=t.getResolutionForZoom(u);t.getAnimating()&&t.cancelAnimations(),t.animate({resolution:s,anchor:e,duration:void 0!==r?r:250,easing:i.easeOut})}n.ZP=u},38024:function(t,n,e){e.r(n),e.d(n,{centroid:function(){return u}});var r=e(30006),i=e(47588);class o extends i.ZP{constructor(t){super(t=t||{}),t.handleDownEvent&&(this.handleDownEvent=t.handleDownEvent),t.handleDragEvent&&(this.handleDragEvent=t.handleDragEvent),t.handleMoveEvent&&(this.handleMoveEvent=t.handleMoveEvent),t.handleUpEvent&&(this.handleUpEvent=t.handleUpEvent),t.stopDown&&(this.stopDown=t.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(t){return!1}handleDragEvent(t){}handleEvent(t){if(!t.originalEvent)return!0;let n=!1;if(this.updateTrackedPointers_(t),this.handlingDownUpSequence){if(t.type==r.Z.POINTERDRAG)this.handleDragEvent(t),t.originalEvent.preventDefault();else if(t.type==r.Z.POINTERUP){let n=this.handleUpEvent(t);this.handlingDownUpSequence=n&&this.targetPointers.length>0}}else if(t.type==r.Z.POINTERDOWN){let e=this.handleDownEvent(t);this.handlingDownUpSequence=e,n=this.stopDown(e)}else t.type==r.Z.POINTERMOVE&&this.handleMoveEvent(t);return!n}handleMoveEvent(t){}handleUpEvent(t){return!1}stopDown(t){return t}updateTrackedPointers_(t){t.activePointers&&(this.targetPointers=t.activePointers)}}function u(t){let n=t.length,e=0,r=0;for(let i=0;i<n;i++)e+=t[i].clientX,r+=t[i].clientY;return{clientX:e/n,clientY:r/n}}n.default=o},73604:function(t,n){n.Z={ACTIVE:"active"}},21882:function(t,n,e){function r(t,n,e){return Math.min(Math.max(t,n),e)}function i(t,n,e,r,i,u){let s=i-e,l=u-r;if(0!==s||0!==l){let o=((t-e)*s+(n-r)*l)/(s*s+l*l);o>1?(e=i,r=u):o>0&&(e+=s*o,r+=l*o)}return o(t,n,e,r)}function o(t,n,e,r){let i=e-t,o=r-n;return i*i+o*o}function u(t){let n=t.length;for(let e=0;e<n;e++){let r=e,i=Math.abs(t[e][e]);for(let o=e+1;o<n;o++){let n=Math.abs(t[o][e]);n>i&&(i=n,r=o)}if(0===i)return null;let o=t[r];t[r]=t[e],t[e]=o;for(let r=e+1;r<n;r++){let i=-t[r][e]/t[e][e];for(let o=e;o<n+1;o++)e==o?t[r][o]=0:t[r][o]+=i*t[e][o]}}let e=Array(n);for(let r=n-1;r>=0;r--){e[r]=t[r][n]/t[r][r];for(let i=r-1;i>=0;i--)t[i][n]-=t[i][r]*e[r]}return e}function s(t){return 180*t/Math.PI}function l(t){return t*Math.PI/180}function a(t,n){let e=t%n;return e*n<0?e+n:e}function c(t,n,e){return t+e*(n-t)}function f(t,n){let e=Math.pow(10,n);return Math.round(t*e)/e}function h(t,n){return Math.round(f(t,n))}function d(t,n){return Math.floor(f(t,n))}function v(t,n){return Math.ceil(f(t,n))}function p(t,n,e){if(t>=n&&t<e)return t;let r=e-n;return((t-n)%r+r)%r+n}e.d(n,{$W:function(){return a},FH:function(){return f},GW:function(){return d},NM:function(){return h},SV:function(){return u},Ux:function(){return s},Yr:function(){return l},bI:function(){return o},mD:function(){return v},rU:function(){return i},re:function(){return p},t7:function(){return c},uZ:function(){return r}})},13580:function(t,n,e){function r(t){for(let n in t)delete t[n]}function i(t){let n;for(n in t)return!1;return!n}e.d(n,{Z:function(){return r},x:function(){return i}})},38642:function(t,n,e){e.d(n,{Gw:function(){return s},YP:function(){return o},gE:function(){return u},h$:function(){return i}});var r=e(21882);function i(t){if(void 0!==t)return 0}function o(t){if(void 0!==t)return t}function u(t){let n=2*Math.PI/t;return function(t,e){return e?t:void 0!==t?t=Math.floor(t/n+.5)*n:void 0}}function s(t){let n=void 0===t?(0,r.Yr)(5):t;return function(t,e){return e||void 0===t?t:Math.abs(t)<=n?0:t}}},49179:function(t,n,e){function r(){throw Error("Unimplemented abstract method.")}e.r(n),e.d(n,{VERSION:function(){return u},abstract:function(){return r},getUid:function(){return o}});let i=0;function o(t){return t.ol_uid||(t.ol_uid=String(++i))}let u="10.4.0"}}]);
//# sourceMappingURL=710.944d7aa396c421d8.js.map