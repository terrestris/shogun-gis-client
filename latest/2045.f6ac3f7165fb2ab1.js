"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["2045"],{30006:function(t,e,n){var r=n(73381);e.Z={SINGLECLICK:"singleclick",CLICK:r.default.CLICK,DBLCLICK:r.default.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}},58493:function(t,e,n){n.r(e),n.d(e,{ObjectEvent:function(){return a}});var r=n(13910),i=n(56834),o=n(9520),u=n(13580),s=n(49179);class a extends o.default{constructor(t,e,n){super(t),this.key=e,this.oldValue=n}}class l extends i.default{constructor(t){super(),this.on,this.once,this.un,(0,s.getUid)(this),this.values_=null,void 0!==t&&this.setProperties(t)}get(t){let e;return this.values_&&this.values_.hasOwnProperty(t)&&(e=this.values_[t]),e}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(t,e){let n;n=`change:${t}`,this.hasListener(n)&&this.dispatchEvent(new a(n,t,e)),n=r.Z.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new a(n,t,e))}addChangeListener(t,e){this.addEventListener(`change:${t}`,e)}removeChangeListener(t,e){this.removeEventListener(`change:${t}`,e)}set(t,e,n){let r=this.values_||(this.values_={});if(n)r[t]=e;else{let n=r[t];r[t]=e,n!==e&&this.notify(t,n)}}setProperties(t,e){for(let n in t)this.set(n,t[n],e)}applyProperties(t){if(!!t.values_)Object.assign(this.values_||(this.values_={}),t.values_)}unset(t,e){if(this.values_&&t in this.values_){let n=this.values_[t];delete this.values_[t],(0,u.x)(this.values_)&&(this.values_=null),!e&&this.notify(t,n)}}}e.default=l},13910:function(t,e){e.Z={PROPERTYCHANGE:"propertychange"}},56834:function(t,e,n){n.r(e),n.d(e,{unByKey:function(){return s}});var r=n(73381),i=n(66575),o=n(13002);class u extends i.Z{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(r.default.CHANGE)}getRevision(){return this.revision_}onInternal(t,e){if(Array.isArray(t)){let n=t.length,r=Array(n);for(let i=0;i<n;++i)r[i]=(0,o.oL)(this,t[i],e);return r}return(0,o.oL)(this,t,e)}onceInternal(t,e){let n;if(Array.isArray(t)){let r=t.length;n=Array(r);for(let i=0;i<r;++i)n[i]=(0,o.Vx)(this,t[i],e)}else n=(0,o.Vx)(this,t,e);return e.ol_key=n,n}unInternal(t,e){let n=e.ol_key;if(n)s(n);else if(Array.isArray(t))for(let n=0,r=t.length;n<r;++n)this.removeEventListener(t[n],e);else this.removeEventListener(t,e)}}function s(t){if(Array.isArray(t))for(let e=0,n=t.length;e<n;++e)(0,o.bN)(t[e]);else(0,o.bN)(t)}u.prototype.on,u.prototype.once,u.prototype.un,e.default=u},38906:function(t,e,n){n.d(e,{h:function(){return r}});function r(t,e){if(!t)throw Error(e)}},13002:function(t,e,n){n.d(e,{Vx:function(){return o},bN:function(){return u},oL:function(){return i}});var r=n(13580);function i(t,e,n,r,i){if(i){let i=n;n=function(o){return t.removeEventListener(e,n),i.call(r??this,o)}}else r&&r!==t&&(n=n.bind(r));let o={target:t,type:e,listener:n};return t.addEventListener(e,n),o}function o(t,e,n,r){return i(t,e,n,r,!0)}function u(t){t&&t.target&&(t.target.removeEventListener(t.type,t.listener),(0,r.Z)(t))}},36403:function(t,e,n){n.r(e),n.d(e,{all:function(){return s},altKeyOnly:function(){return a},altShiftKeysOnly:function(){return l},always:function(){return h},click:function(){return d},doubleClick:function(){return y},focus:function(){return c},focusWithTabindex:function(){return f},mouseActionButton:function(){return v},mouseOnly:function(){return P},never:function(){return E},noModifierKeys:function(){return m},penOnly:function(){return K},platformModifierKey:function(){return I},platformModifierKeyOnly:function(){return _},pointerMove:function(){return p},primaryAction:function(){return w},shiftKeyOnly:function(){return A},singleClick:function(){return g},targetNotEditable:function(){return C},touchOnly:function(){return O}});var r=n(30006),i=n(38906),o=n(64011),u=n(91358);function s(t){let e=arguments;return function(t){let n=!0;for(let r=0,i=e.length;r<i&&(n=n&&e[r](t));++r);return n}}let a=function(t){let e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},l=function(t){let e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},c=function(t){let e=t.map.getTargetElement(),n=e.getRootNode(),r=t.map.getOwnerDocument().activeElement;return n instanceof ShadowRoot?n.host.contains(r):e.contains(r)},f=function(t){let e=t.map.getTargetElement(),n=e.getRootNode();return!(n instanceof ShadowRoot?n.host:e).hasAttribute("tabindex")||c(t)},h=o.TRUE,d=function(t){return t.type==r.Z.CLICK},v=function(t){let e=t.originalEvent;return 0==e.button&&!(u.WEBKIT&&u.MAC&&e.ctrlKey)},E=o.FALSE,p=function(t){return"pointermove"==t.type},g=function(t){return t.type==r.Z.SINGLECLICK},y=function(t){return t.type==r.Z.DBLCLICK},m=function(t){let e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},_=function(t){let e=t.originalEvent;return!e.altKey&&(u.MAC?e.metaKey:e.ctrlKey)&&!e.shiftKey},I=function(t){let e=t.originalEvent;return u.MAC?e.metaKey:e.ctrlKey},A=function(t){let e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},C=function(t){let e=t.originalEvent,n=e.target.tagName;return"INPUT"!==n&&"SELECT"!==n&&"TEXTAREA"!==n&&!e.target.isContentEditable},P=function(t){let e=t.originalEvent;return(0,i.h)(void 0!==e,"mapBrowserEvent must originate from a pointer event"),"mouse"==e.pointerType},O=function(t){let e=t.originalEvent;return(0,i.h)(void 0!==e,"mapBrowserEvent must originate from a pointer event"),"touch"===e.pointerType},K=function(t){let e=t.originalEvent;return(0,i.h)(void 0!==e,"mapBrowserEvent must originate from a pointer event"),"pen"===e.pointerType},w=function(t){let e=t.originalEvent;return(0,i.h)(void 0!==e,"mapBrowserEvent must originate from a pointer event"),e.isPrimary&&0===e.button}},91358:function(t,e,n){n.r(e),n.d(e,{CREATE_IMAGE_BITMAP:function(){return h},DEVICE_PIXEL_RATIO:function(){return l},FIREFOX:function(){return i},IMAGE_DECODE:function(){return f},MAC:function(){return a},PASSIVE_EVENT_LISTENERS:function(){return d},SAFARI:function(){return o},SAFARI_BUG_237906:function(){return u},WEBKIT:function(){return s},WORKER_OFFSCREEN_CANVAS:function(){return c}});let r="undefined"!=typeof navigator&&void 0!==navigator.userAgent?navigator.userAgent.toLowerCase():"",i=r.includes("firefox"),o=r.includes("safari")&&!r.includes("chrom"),u=o&&(r.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(r)),s=r.includes("webkit")&&!r.includes("edge"),a=r.includes("macintosh"),l="undefined"!=typeof devicePixelRatio?devicePixelRatio:1,c="undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof OffscreenCanvas&&self instanceof WorkerGlobalScope,f="undefined"!=typeof Image&&Image.prototype.decode,h="function"==typeof createImageBitmap,d=function(){let t=!1;try{let e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch{}return t}()},97950:function(t,e,n){n.r(e);var r=n(36403),i=n(64011),o=n(38642),u=n(38024);class s extends u.default{constructor(t){t=t||{},super({stopDown:i.FALSE}),this.condition_=t.condition?t.condition:r.altShiftKeysOnly,this.lastAngle_=void 0,this.duration_=void 0!==t.duration?t.duration:250}handleDragEvent(t){if(!(0,r.mouseOnly)(t))return;let e=t.map,n=e.getView();if(n.getConstraints().rotation===o.h$)return;let i=e.getSize(),u=t.pixel,s=Math.atan2(i[1]/2-u[1],u[0]-i[0]/2);if(void 0!==this.lastAngle_){let t=s-this.lastAngle_;n.adjustRotationInternal(-t)}this.lastAngle_=s}handleUpEvent(t){return!(0,r.mouseOnly)(t)||(t.map.getView().endInteraction(this.duration_),!1)}handleDownEvent(t){return!!(0,r.mouseOnly)(t)&&!!((0,r.mouseActionButton)(t)&&this.condition_(t))&&(t.map.getView().beginInteraction(),this.lastAngle_=void 0,!0)}}e.default=s},47588:function(t,e,n){n.d(e,{Cv:function(){return s},FW:function(){return a}});var r=n(58493),i=n(86320),o=n(73604);class u extends r.default{constructor(t){super(),this.on,this.once,this.un,t&&t.handleEvent&&(this.handleEvent=t.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(o.Z.ACTIVE)}getMap(){return this.map_}handleEvent(t){return!0}setActive(t){this.set(o.Z.ACTIVE,t)}setMap(t){this.map_=t}}function s(t,e,n){let r=t.getCenterInternal();if(r){let o=[r[0]+e[0],r[1]+e[1]];t.animateInternal({duration:void 0!==n?n:250,easing:i.linear,center:t.getConstrainedCenter(o)})}}function a(t,e,n,r){let o=t.getZoom();if(void 0===o)return;let u=t.getConstrainedZoom(o+e),s=t.getResolutionForZoom(u);t.getAnimating()&&t.cancelAnimations(),t.animate({resolution:s,anchor:n,duration:void 0!==r?r:250,easing:i.easeOut})}e.ZP=u},38024:function(t,e,n){n.r(e),n.d(e,{centroid:function(){return u}});var r=n(30006),i=n(47588);class o extends i.ZP{constructor(t){super(t=t||{}),t.handleDownEvent&&(this.handleDownEvent=t.handleDownEvent),t.handleDragEvent&&(this.handleDragEvent=t.handleDragEvent),t.handleMoveEvent&&(this.handleMoveEvent=t.handleMoveEvent),t.handleUpEvent&&(this.handleUpEvent=t.handleUpEvent),t.stopDown&&(this.stopDown=t.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(t){return!1}handleDragEvent(t){}handleEvent(t){if(!t.originalEvent)return!0;let e=!1;if(this.updateTrackedPointers_(t),this.handlingDownUpSequence){if(t.type==r.Z.POINTERDRAG)this.handleDragEvent(t),t.originalEvent.preventDefault();else if(t.type==r.Z.POINTERUP){let e=this.handleUpEvent(t);this.handlingDownUpSequence=e&&this.targetPointers.length>0}}else if(t.type==r.Z.POINTERDOWN){let n=this.handleDownEvent(t);this.handlingDownUpSequence=n,e=this.stopDown(n)}else t.type==r.Z.POINTERMOVE&&this.handleMoveEvent(t);return!e}handleMoveEvent(t){}handleUpEvent(t){return!1}stopDown(t){return t}updateTrackedPointers_(t){t.activePointers&&(this.targetPointers=t.activePointers)}}function u(t){let e=t.length,n=0,r=0;for(let i=0;i<e;i++)n+=t[i].clientX,r+=t[i].clientY;return{clientX:n/e,clientY:r/e}}e.default=o},73604:function(t,e){e.Z={ACTIVE:"active"}},21882:function(t,e,n){function r(t,e,n){return Math.min(Math.max(t,e),n)}function i(t,e,n,r,i,u){let s=i-n,a=u-r;if(0!==s||0!==a){let o=((t-n)*s+(e-r)*a)/(s*s+a*a);o>1?(n=i,r=u):o>0&&(n+=s*o,r+=a*o)}return o(t,e,n,r)}function o(t,e,n,r){let i=n-t,o=r-e;return i*i+o*o}function u(t){let e=t.length;for(let n=0;n<e;n++){let r=n,i=Math.abs(t[n][n]);for(let o=n+1;o<e;o++){let e=Math.abs(t[o][n]);e>i&&(i=e,r=o)}if(0===i)return null;let o=t[r];t[r]=t[n],t[n]=o;for(let r=n+1;r<e;r++){let i=-t[r][n]/t[n][n];for(let o=n;o<e+1;o++)n==o?t[r][o]=0:t[r][o]+=i*t[n][o]}}let n=Array(e);for(let r=e-1;r>=0;r--){n[r]=t[r][e]/t[r][r];for(let i=r-1;i>=0;i--)t[i][e]-=t[i][r]*n[r]}return n}function s(t){return 180*t/Math.PI}function a(t){return t*Math.PI/180}function l(t,e){let n=t%e;return n*e<0?n+e:n}function c(t,e,n){return t+n*(e-t)}function f(t,e){let n=Math.pow(10,e);return Math.round(t*n)/n}function h(t,e){return Math.round(f(t,e))}function d(t,e){return Math.floor(f(t,e))}function v(t,e){return Math.ceil(f(t,e))}function E(t,e,n){if(t>=e&&t<n)return t;let r=n-e;return((t-e)%r+r)%r+e}n.d(e,{$W:function(){return l},FH:function(){return f},GW:function(){return d},NM:function(){return h},SV:function(){return u},Ux:function(){return s},Yr:function(){return a},bI:function(){return o},mD:function(){return v},rU:function(){return i},re:function(){return E},t7:function(){return c},uZ:function(){return r}})},38642:function(t,e,n){n.d(e,{Gw:function(){return s},YP:function(){return o},gE:function(){return u},h$:function(){return i}});var r=n(21882);function i(t){if(void 0!==t)return 0}function o(t){if(void 0!==t)return t}function u(t){let e=2*Math.PI/t;return function(t,n){return n?t:void 0!==t?t=Math.floor(t/e+.5)*e:void 0}}function s(t){let e=void 0===t?(0,r.Yr)(5):t;return function(t,n){return n||void 0===t?t:Math.abs(t)<=e?0:t}}}}]);
//# sourceMappingURL=2045.f6ac3f7165fb2ab1.js.map