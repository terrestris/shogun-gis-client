"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["9661"],{80967:function(t,e){e.Z=class{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}},79682:function(t,e,n){function r(t,e,n){let r,s;n=n||i;let u=0,o=t.length,l=!1;for(;u<o;)(s=+n(t[r=u+(o-u>>1)],e))<0?u=r+1:(o=r,l=!s);return l?u:~u}function i(t,e){return t>e?1:t<e?-1:0}function s(t,e){return t<e?1:t>e?-1:0}function u(t,e,n){if(t[0]<=e)return 0;let r=t.length;if(e<=t[r-1])return r-1;if("function"==typeof n){for(let i=1;i<r;++i){let r=t[i];if(r===e)return i;if(r<e){if(n(e,t[i-1],r)>0)return i-1;return i}}return r-1}if(n>0){for(let n=1;n<r;++n)if(t[n]<e)return n-1;return r-1}if(n<0){for(let n=1;n<r;++n)if(t[n]<=e)return n;return r-1}for(let n=1;n<r;++n){if(t[n]==e)return n;if(t[n]<e){if(t[n-1]-e<e-t[n])return n-1;return n}}return r-1}function o(t,e,n){for(;e<n;){let r=t[e];t[e]=t[n],t[n]=r,++e,--n}}function l(t,e){let n=Array.isArray(e)?e:[e],r=n.length;for(let e=0;e<r;e++)t[t.length]=n[e]}function f(t,e){let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function c(t,e,n){let r=e||i;return t.every(function(e,i){if(0===i)return!0;let s=r(t[i-1],e);return!(s>0||n&&0===s)})}n.d(e,{$1:function(){return s},FZ:function(){return o},fS:function(){return f},h7:function(){return u},j2:function(){return i},l7:function(){return l},pT:function(){return c},ry:function(){return r}})},9520:function(t,e,n){function r(t){t.stopPropagation()}function i(t){t.preventDefault()}n.r(e),n.d(e,{preventDefault:function(){return i},stopPropagation:function(){return r}}),e.default=class{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}},73381:function(t,e,n){n.r(e),e.default={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"}},66575:function(t,e,n){var r=n(80967),i=n(64011),s=n(13580),u=n(9520);class o extends r.Z{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,e){if(!t||!e)return;let n=this.listeners_||(this.listeners_={}),r=n[t]||(n[t]=[]);r.includes(e)||r.push(e)}dispatchEvent(t){let e;let n="string"==typeof t,r=n?t:t.type,s=this.listeners_&&this.listeners_[r];if(!s)return;let o=n?new u.default(t):t;o.target||(o.target=this.eventTarget_||this);let l=this.dispatching_||(this.dispatching_={}),f=this.pendingRemovals_||(this.pendingRemovals_={});r in l||(l[r]=0,f[r]=0),++l[r];for(let t=0,n=s.length;t<n;++t)if(!1===(e="handleEvent"in s[t]?s[t].handleEvent(o):s[t].call(this,o))||o.propagationStopped){e=!1;break}if(0==--l[r]){let t=f[r];for(delete f[r];t--;)this.removeEventListener(r,i.VOID);delete l[r]}return e}disposeInternal(){this.listeners_&&(0,s.Z)(this.listeners_)}getListeners(t){return this.listeners_&&this.listeners_[t]||void 0}hasListener(t){return!!this.listeners_&&(t?t in this.listeners_:Object.keys(this.listeners_).length>0)}removeEventListener(t,e){if(!this.listeners_)return;let n=this.listeners_[t];if(!n)return;let r=n.indexOf(e);-1!==r&&(this.pendingRemovals_&&t in this.pendingRemovals_?(n[r]=i.VOID,++this.pendingRemovals_[t]):(n.splice(r,1),0===n.length&&delete this.listeners_[t]))}}e.Z=o},64011:function(t,e,n){n.r(e),n.d(e,{FALSE:function(){return s},TRUE:function(){return i},VOID:function(){return u},memoizeOne:function(){return o},toPromise:function(){return l}});var r=n(79682);function i(){return!0}function s(){return!1}function u(){}function o(t){let e,n,i;return function(){let s=Array.prototype.slice.call(arguments);return n&&this===i&&(0,r.fS)(s,n)||(i=this,n=s,e=t.apply(this,arguments)),e}}function l(t){return function(){let e;try{e=t()}catch(t){return Promise.reject(t)}return e instanceof Promise?e:Promise.resolve(e)}()}},13580:function(t,e,n){function r(t){for(let e in t)delete t[e]}function i(t){let e;for(e in t)return!1;return!e}n.d(e,{Z:function(){return r},x:function(){return i}})}}]);
//# sourceMappingURL=9661.87bfb746adcc1e9d.js.map