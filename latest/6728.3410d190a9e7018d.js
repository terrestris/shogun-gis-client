"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["6728"],{80967:function(t,e){e.Z=class{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}},24969:function(t,e,n){var r=n(59900),i=n(86320),s=n(73381),o=n(66575),u=n(49179);class l extends o.Z{constructor(t,e,n){super(),n=n||{},this.tileCoord=t,this.state=e,this.key="",this.transition_=void 0===n.transition?250:n.transition,this.transitionStarts_={},this.interpolate=!!n.interpolate}changed(){this.dispatchEvent(s.default.CHANGE)}release(){this.setState(r.default.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(t){if(this.state!==r.default.EMPTY){if(this.state!==r.default.ERROR&&this.state>t)throw Error("Tile load sequence violation");this.state=t,this.changed()}}load(){(0,u.abstract)()}getAlpha(t,e){if(!this.transition_)return 1;let n=this.transitionStarts_[t];if(n){if(-1===n)return 1}else n=e,this.transitionStarts_[t]=n;let r=e-n+1e3/60;return r>=this.transition_?1:(0,i.easeIn)(r/this.transition_)}inTransition(t){return!!this.transition_&&-1!==this.transitionStarts_[t]}endTransition(t){this.transition_&&(this.transitionStarts_[t]=-1)}disposeInternal(){this.release(),super.disposeInternal()}}e.Z=l},59900:function(t,e,n){n.r(e),e.default={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}},79682:function(t,e,n){function r(t,e,n){let r,s;n=n||i;let o=0,u=t.length,l=!1;for(;o<u;)(s=+n(t[r=o+(u-o>>1)],e))<0?o=r+1:(u=r,l=!s);return l?o:~o}function i(t,e){return t>e?1:t<e?-1:0}function s(t,e){return t<e?1:t>e?-1:0}function o(t,e,n){if(t[0]<=e)return 0;let r=t.length;if(e<=t[r-1])return r-1;if("function"==typeof n){for(let i=1;i<r;++i){let r=t[i];if(r===e)return i;if(r<e){if(n(e,t[i-1],r)>0)return i-1;return i}}return r-1}if(n>0){for(let n=1;n<r;++n)if(t[n]<e)return n-1;return r-1}if(n<0){for(let n=1;n<r;++n)if(t[n]<=e)return n;return r-1}for(let n=1;n<r;++n){if(t[n]==e)return n;if(t[n]<e){if(t[n-1]-e<e-t[n])return n-1;return n}}return r-1}function u(t,e,n){for(;e<n;){let r=t[e];t[e]=t[n],t[n]=r,++e,--n}}function l(t,e){let n=Array.isArray(e)?e:[e],r=n.length;for(let e=0;e<r;e++)t[t.length]=n[e]}function a(t,e){let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function c(t,e,n){let r=e||i;return t.every(function(e,i){if(0===i)return!0;let s=r(t[i-1],e);return!(s>0||n&&0===s)})}n.d(e,{$1:function(){return s},FZ:function(){return u},fS:function(){return a},h7:function(){return o},j2:function(){return i},l7:function(){return l},pT:function(){return c},ry:function(){return r}})},86320:function(t,e,n){function r(t){return Math.pow(t,3)}function i(t){return 1-r(1-t)}function s(t){return 3*t*t-2*t*t*t}function o(t){return t}function u(t){return t<.5?s(2*t):1-s(2*(t-.5))}n.r(e),n.d(e,{easeIn:function(){return r},easeOut:function(){return i},inAndOut:function(){return s},linear:function(){return o},upAndDown:function(){return u}})},9520:function(t,e,n){function r(t){t.stopPropagation()}function i(t){t.preventDefault()}n.r(e),n.d(e,{preventDefault:function(){return i},stopPropagation:function(){return r}}),e.default=class{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}},73381:function(t,e,n){n.r(e),e.default={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"}},66575:function(t,e,n){var r=n(80967),i=n(64011),s=n(13580),o=n(9520);class u extends r.Z{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,e){if(!t||!e)return;let n=this.listeners_||(this.listeners_={}),r=n[t]||(n[t]=[]);r.includes(e)||r.push(e)}dispatchEvent(t){let e;let n="string"==typeof t,r=n?t:t.type,s=this.listeners_&&this.listeners_[r];if(!s)return;let u=n?new o.default(t):t;u.target||(u.target=this.eventTarget_||this);let l=this.dispatching_||(this.dispatching_={}),a=this.pendingRemovals_||(this.pendingRemovals_={});r in l||(l[r]=0,a[r]=0),++l[r];for(let t=0,n=s.length;t<n;++t)if(!1===(e="handleEvent"in s[t]?s[t].handleEvent(u):s[t].call(this,u))||u.propagationStopped){e=!1;break}if(0==--l[r]){let t=a[r];for(delete a[r];t--;)this.removeEventListener(r,i.VOID);delete l[r]}return e}disposeInternal(){this.listeners_&&(0,s.Z)(this.listeners_)}getListeners(t){return this.listeners_&&this.listeners_[t]||void 0}hasListener(t){return!!this.listeners_&&(t?t in this.listeners_:Object.keys(this.listeners_).length>0)}removeEventListener(t,e){if(!this.listeners_)return;let n=this.listeners_[t];if(!n)return;let r=n.indexOf(e);-1!==r&&(this.pendingRemovals_&&t in this.pendingRemovals_?(n[r]=i.VOID,++this.pendingRemovals_[t]):(n.splice(r,1),0===n.length&&delete this.listeners_[t]))}}e.Z=u},64011:function(t,e,n){n.r(e),n.d(e,{FALSE:function(){return s},TRUE:function(){return i},VOID:function(){return o},memoizeOne:function(){return u},toPromise:function(){return l}});var r=n(79682);function i(){return!0}function s(){return!1}function o(){}function u(t){let e,n,i;return function(){let s=Array.prototype.slice.call(arguments);return n&&this===i&&(0,r.fS)(s,n)||(i=this,n=s,e=t.apply(this,arguments)),e}}function l(t){return function(){let e;try{e=t()}catch(t){return Promise.reject(t)}return e instanceof Promise?e:Promise.resolve(e)}()}},13580:function(t,e,n){function r(t){for(let e in t)delete t[e]}function i(t){let e;for(e in t)return!1;return!e}n.d(e,{Z:function(){return r},x:function(){return i}})},59803:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var r=n(21915),i=n(49179),s=n(5374),o=n(86018),u=n(89434),l=n(65952);class a extends l.Z{constructor(t){if(super({attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,interpolate:t.interpolate,projection:(0,s.get)("EPSG:3857"),reprojectionErrorThreshold:t.reprojectionErrorThreshold,state:"loading",tileLoadFunction:t.tileLoadFunction,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition,zDirection:t.zDirection}),this.tileJSON_=null,this.tileSize_=t.tileSize,t.url){if(t.jsonp)!function(t,e,n,r){let s=document.createElement("script"),o="olc_"+(0,i.getUid)(e);function u(){delete window[o],s.parentNode.removeChild(s)}s.async=!0,s.src=t+(t.includes("?")?"&":"?")+"callback="+o;let l=setTimeout(function(){u(),n&&n()},1e4);window[o]=function(t){clearTimeout(l),u(),e(t)},document.head.appendChild(s)}(t.url,this.handleTileJSONResponse.bind(this),this.handleTileJSONError.bind(this));else{let e=new XMLHttpRequest;e.addEventListener("load",this.onXHRLoad_.bind(this)),e.addEventListener("error",this.onXHRError_.bind(this)),e.open("GET",t.url),e.send()}}else if(t.tileJSON)this.handleTileJSONResponse(t.tileJSON);else throw Error("Either `url` or `tileJSON` options must be provided")}onXHRLoad_(t){let e=t.target;if(!e.status||e.status>=200&&e.status<300){let t;try{t=JSON.parse(e.responseText)}catch{this.handleTileJSONError();return}this.handleTileJSONResponse(t)}else this.handleTileJSONError()}onXHRError_(t){this.handleTileJSONError()}getTileJSON(){return this.tileJSON_}handleTileJSONResponse(t){let e;let n=(0,s.get)("EPSG:4326"),i=this.getProjection();if(void 0!==t.bounds){let o=(0,s.getTransformFromProjections)(n,i);e=(0,r.applyTransform)(t.bounds,o)}let l=(0,o.extentFromProjection)(i),a=t.minzoom||0,c=t.maxzoom||22,h=(0,o.createXYZ)({extent:l,maxZoom:c,minZoom:a,tileSize:this.tileSize_});if(this.tileGrid=h,this.tileUrlFunction=(0,u.uR)(t.tiles,h),t.attribution&&!this.getAttributions()){let n=void 0!==e?e:l;this.setAttributions(function(e){return(0,r.intersects)(n,e.extent)?[t.attribution]:null})}this.tileJSON_=t,this.setState("ready")}handleTileJSONError(){this.setState("error")}}var c=a},49179:function(t,e,n){function r(){throw Error("Unimplemented abstract method.")}n.r(e),n.d(e,{VERSION:function(){return o},abstract:function(){return r},getUid:function(){return s}});let i=0;function s(t){return t.ol_uid||(t.ol_uid=String(++i))}let o="10.4.0"}}]);
//# sourceMappingURL=6728.3410d190a9e7018d.js.map