"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["4112"],{80967:function(t,e){e.Z=class t{constructor(){this.disposed=!1}dispose(){!this.disposed&&(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}},30006:function(t,e,n){var r=n(73381);e.Z={SINGLECLICK:"singleclick",CLICK:r.default.CLICK,DBLCLICK:r.default.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}},58493:function(t,e,n){n.r(e),n.d(e,{ObjectEvent:function(){return l}});var r=n(13910),i=n(56834),s=n(9520),o=n(13580),u=n(49179);class l extends s.default{constructor(t,e,n){super(t),this.key=e,this.oldValue=n}}class a extends i.default{constructor(t){super(),this.on,this.once,this.un,(0,u.getUid)(this),this.values_=null,void 0!==t&&this.setProperties(t)}get(t){let e;return this.values_&&this.values_.hasOwnProperty(t)&&(e=this.values_[t]),e}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(t,e){let n;n=`change:${t}`,this.hasListener(n)&&this.dispatchEvent(new l(n,t,e)),n=r.Z.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new l(n,t,e))}addChangeListener(t,e){this.addEventListener(`change:${t}`,e)}removeChangeListener(t,e){this.removeEventListener(`change:${t}`,e)}set(t,e,n){let r=this.values_||(this.values_={});if(n)r[t]=e;else{let n=r[t];r[t]=e,n!==e&&this.notify(t,n)}}setProperties(t,e){for(let n in t)this.set(n,t[n],e)}applyProperties(t){if(!!t.values_)Object.assign(this.values_||(this.values_={}),t.values_)}unset(t,e){if(this.values_&&t in this.values_){let n=this.values_[t];delete this.values_[t],(0,o.x)(this.values_)&&(this.values_=null),!e&&this.notify(t,n)}}}e.default=a},13910:function(t,e){e.Z={PROPERTYCHANGE:"propertychange"}},56834:function(t,e,n){n.r(e),n.d(e,{unByKey:function(){return u}});var r=n(73381),i=n(66575),s=n(13002);class o extends i.Z{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(r.default.CHANGE)}getRevision(){return this.revision_}onInternal(t,e){if(Array.isArray(t)){let n=t.length,r=Array(n);for(let i=0;i<n;++i)r[i]=(0,s.oL)(this,t[i],e);return r}return(0,s.oL)(this,t,e)}onceInternal(t,e){let n;if(Array.isArray(t)){let r=t.length;n=Array(r);for(let i=0;i<r;++i)n[i]=(0,s.Vx)(this,t[i],e)}else n=(0,s.Vx)(this,t,e);return e.ol_key=n,n}unInternal(t,e){let n=e.ol_key;if(n)u(n);else if(Array.isArray(t))for(let n=0,r=t.length;n<r;++n)this.removeEventListener(t[n],e);else this.removeEventListener(t,e)}}function u(t){if(Array.isArray(t))for(let e=0,n=t.length;e<n;++e)(0,s.bN)(t[e]);else(0,s.bN)(t)}o.prototype.on,o.prototype.once,o.prototype.un,e.default=o},79682:function(t,e,n){function r(t,e,n){let r,s;n=n||i;let o=0,u=t.length,l=!1;for(;o<u;)(s=+n(t[r=o+(u-o>>1)],e))<0?o=r+1:(u=r,l=!s);return l?o:~o}function i(t,e){return t>e?1:t<e?-1:0}function s(t,e){return t<e?1:t>e?-1:0}function o(t,e,n){if(t[0]<=e)return 0;let r=t.length;if(e<=t[r-1])return r-1;if("function"==typeof n){for(let i=1;i<r;++i){let r=t[i];if(r===e)return i;if(r<e){if(n(e,t[i-1],r)>0)return i-1;return i}}return r-1}if(n>0){for(let n=1;n<r;++n)if(t[n]<e)return n-1;return r-1}if(n<0){for(let n=1;n<r;++n)if(t[n]<=e)return n;return r-1}for(let n=1;n<r;++n){if(t[n]==e)return n;if(t[n]<e){if(t[n-1]-e<e-t[n])return n-1;return n}}return r-1}function u(t,e,n){for(;e<n;){let r=t[e];t[e]=t[n],t[n]=r,++e,--n}}function l(t,e){let n=Array.isArray(e)?e:[e],r=n.length;for(let e=0;e<r;e++)t[t.length]=n[e]}function a(t,e){let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function h(t,e,n){let r=e||i;return t.every(function(e,i){if(0===i)return!0;let s=r(t[i-1],e);return!(s>0||n&&0===s)})}n.d(e,{$1:function(){return s},FZ:function(){return u},fS:function(){return a},h7:function(){return o},j2:function(){return i},l7:function(){return l},pT:function(){return h},ry:function(){return r}})},86320:function(t,e,n){function r(t){return Math.pow(t,3)}function i(t){return 1-r(1-t)}function s(t){return 3*t*t-2*t*t*t}function o(t){return t}function u(t){return t<.5?s(2*t):1-s(2*(t-.5))}n.r(e),n.d(e,{easeIn:function(){return r},easeOut:function(){return i},inAndOut:function(){return s},linear:function(){return o},upAndDown:function(){return u}})},13002:function(t,e,n){n.d(e,{Vx:function(){return s},bN:function(){return o},oL:function(){return i}});var r=n(13580);function i(t,e,n,r,i){if(i){let i=n;n=function(s){return t.removeEventListener(e,n),i.call(r??this,s)}}else r&&r!==t&&(n=n.bind(r));let s={target:t,type:e,listener:n};return t.addEventListener(e,n),s}function s(t,e,n,r){return i(t,e,n,r,!0)}function o(t){t&&t.target&&(t.target.removeEventListener(t.type,t.listener),(0,r.Z)(t))}},9520:function(t,e,n){n.r(e),n.d(e,{preventDefault:function(){return i},stopPropagation:function(){return r}});function r(t){t.stopPropagation()}function i(t){t.preventDefault()}e.default=class t{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}},73381:function(t,e,n){n.r(e),e.default={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"}},66575:function(t,e,n){var r=n(80967),i=n(64011),s=n(13580),o=n(9520);class u extends r.Z{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,e){if(!t||!e)return;let n=this.listeners_||(this.listeners_={}),r=n[t]||(n[t]=[]);!r.includes(e)&&r.push(e)}dispatchEvent(t){let e;let n="string"==typeof t,r=n?t:t.type,s=this.listeners_&&this.listeners_[r];if(!s)return;let u=n?new o.default(t):t;!u.target&&(u.target=this.eventTarget_||this);let l=this.dispatching_||(this.dispatching_={}),a=this.pendingRemovals_||(this.pendingRemovals_={});!(r in l)&&(l[r]=0,a[r]=0),++l[r];for(let t=0,n=s.length;t<n;++t)if(!1===(e="handleEvent"in s[t]?s[t].handleEvent(u):s[t].call(this,u))||u.propagationStopped){e=!1;break}if(0==--l[r]){let t=a[r];for(delete a[r];t--;)this.removeEventListener(r,i.VOID);delete l[r]}return e}disposeInternal(){this.listeners_&&(0,s.Z)(this.listeners_)}getListeners(t){return this.listeners_&&this.listeners_[t]||void 0}hasListener(t){return!!this.listeners_&&(t?t in this.listeners_:Object.keys(this.listeners_).length>0)}removeEventListener(t,e){if(!this.listeners_)return;let n=this.listeners_[t];if(!n)return;let r=n.indexOf(e);-1!==r&&(this.pendingRemovals_&&t in this.pendingRemovals_?(n[r]=i.VOID,++this.pendingRemovals_[t]):(n.splice(r,1),0===n.length&&delete this.listeners_[t]))}}e.Z=u},64011:function(t,e,n){n.r(e),n.d(e,{FALSE:function(){return s},TRUE:function(){return i},VOID:function(){return o},memoizeOne:function(){return u},toPromise:function(){return l}});var r=n(79682);function i(){return!0}function s(){return!1}function o(){}function u(t){let e,n,i;return function(){let s=Array.prototype.slice.call(arguments);return(!n||this!==i||!(0,r.fS)(s,n))&&(i=this,n=s,e=t.apply(this,arguments)),e}}function l(t){return function(){let e;try{e=t()}catch(t){return Promise.reject(t)}return e instanceof Promise?e:Promise.resolve(e)}()}},47588:function(t,e,n){n.d(e,{Cv:function(){return u},FW:function(){return l}});var r=n(58493),i=n(86320),s=n(73604);class o extends r.default{constructor(t){super(),this.on,this.once,this.un,t&&t.handleEvent&&(this.handleEvent=t.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(s.Z.ACTIVE)}getMap(){return this.map_}handleEvent(t){return!0}setActive(t){this.set(s.Z.ACTIVE,t)}setMap(t){this.map_=t}}function u(t,e,n){let r=t.getCenterInternal();if(r){let s=[r[0]+e[0],r[1]+e[1]];t.animateInternal({duration:void 0!==n?n:250,easing:i.linear,center:t.getConstrainedCenter(s)})}}function l(t,e,n,r){let s=t.getZoom();if(void 0===s)return;let o=t.getConstrainedZoom(s+e),u=t.getResolutionForZoom(o);t.getAnimating()&&t.cancelAnimations(),t.animate({resolution:u,anchor:n,duration:void 0!==r?r:250,easing:i.easeOut})}e.ZP=o},38024:function(t,e,n){n.r(e),n.d(e,{centroid:function(){return o}});var r=n(30006),i=n(47588);class s extends i.ZP{constructor(t){super(t=t||{}),t.handleDownEvent&&(this.handleDownEvent=t.handleDownEvent),t.handleDragEvent&&(this.handleDragEvent=t.handleDragEvent),t.handleMoveEvent&&(this.handleMoveEvent=t.handleMoveEvent),t.handleUpEvent&&(this.handleUpEvent=t.handleUpEvent),t.stopDown&&(this.stopDown=t.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(t){return!1}handleDragEvent(t){}handleEvent(t){if(!t.originalEvent)return!0;let e=!1;if(this.updateTrackedPointers_(t),this.handlingDownUpSequence){if(t.type==r.Z.POINTERDRAG)this.handleDragEvent(t),t.originalEvent.preventDefault();else if(t.type==r.Z.POINTERUP){let e=this.handleUpEvent(t);this.handlingDownUpSequence=e&&this.targetPointers.length>0}}else if(t.type==r.Z.POINTERDOWN){let n=this.handleDownEvent(t);this.handlingDownUpSequence=n,e=this.stopDown(n)}else t.type==r.Z.POINTERMOVE&&this.handleMoveEvent(t);return!e}handleMoveEvent(t){}handleUpEvent(t){return!1}stopDown(t){return t}updateTrackedPointers_(t){t.activePointers&&(this.targetPointers=t.activePointers)}}function o(t){let e=t.length,n=0,r=0;for(let i=0;i<e;i++)n+=t[i].clientX,r+=t[i].clientY;return{clientX:n/e,clientY:r/e}}e.default=s},73604:function(t,e){e.Z={ACTIVE:"active"}},13580:function(t,e,n){function r(t){for(let e in t)delete t[e]}function i(t){let e;for(e in t)return!1;return!e}n.d(e,{Z:function(){return r},x:function(){return i}})},49179:function(t,e,n){function r(){throw Error("Unimplemented abstract method.")}n.r(e),n.d(e,{VERSION:function(){return o},abstract:function(){return r},getUid:function(){return s}});let i=0;function s(t){return t.ol_uid||(t.ol_uid=String(++i))}let o="10.4.0"}}]);
//# sourceMappingURL=4112.b74ece7cfd5a379c.js.map