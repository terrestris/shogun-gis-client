"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["9720"],{30006:function(t,e,n){var i=n(73381);e.Z={SINGLECLICK:"singleclick",CLICK:i.default.CLICK,DBLCLICK:i.default.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}},58493:function(t,e,n){n.r(e),n.d(e,{ObjectEvent:function(){return u}});var i=n(13910),r=n(56834),o=n(9520),s=n(13580),a=n(49179);class u extends o.default{constructor(t,e,n){super(t),this.key=e,this.oldValue=n}}class l extends r.default{constructor(t){super(),this.on,this.once,this.un,(0,a.getUid)(this),this.values_=null,void 0!==t&&this.setProperties(t)}get(t){let e;return this.values_&&this.values_.hasOwnProperty(t)&&(e=this.values_[t]),e}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(t,e){let n;n=`change:${t}`,this.hasListener(n)&&this.dispatchEvent(new u(n,t,e)),n=i.Z.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new u(n,t,e))}addChangeListener(t,e){this.addEventListener(`change:${t}`,e)}removeChangeListener(t,e){this.removeEventListener(`change:${t}`,e)}set(t,e,n){let i=this.values_||(this.values_={});if(n)i[t]=e;else{let n=i[t];i[t]=e,n!==e&&this.notify(t,n)}}setProperties(t,e){for(let n in t)this.set(n,t[n],e)}applyProperties(t){t.values_&&Object.assign(this.values_||(this.values_={}),t.values_)}unset(t,e){if(this.values_&&t in this.values_){let n=this.values_[t];delete this.values_[t],(0,s.x)(this.values_)&&(this.values_=null),e||this.notify(t,n)}}}e.default=l},13910:function(t,e){e.Z={PROPERTYCHANGE:"propertychange"}},56834:function(t,e,n){n.r(e),n.d(e,{unByKey:function(){return a}});var i=n(73381),r=n(66575),o=n(13002);class s extends r.Z{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(i.default.CHANGE)}getRevision(){return this.revision_}onInternal(t,e){if(Array.isArray(t)){let n=t.length,i=Array(n);for(let r=0;r<n;++r)i[r]=(0,o.oL)(this,t[r],e);return i}return(0,o.oL)(this,t,e)}onceInternal(t,e){let n;if(Array.isArray(t)){let i=t.length;n=Array(i);for(let r=0;r<i;++r)n[r]=(0,o.Vx)(this,t[r],e)}else n=(0,o.Vx)(this,t,e);return e.ol_key=n,n}unInternal(t,e){let n=e.ol_key;if(n)a(n);else if(Array.isArray(t))for(let n=0,i=t.length;n<i;++n)this.removeEventListener(t[n],e);else this.removeEventListener(t,e)}}function a(t){if(Array.isArray(t))for(let e=0,n=t.length;e<n;++e)(0,o.bN)(t[e]);else(0,o.bN)(t)}s.prototype.on,s.prototype.once,s.prototype.un,e.default=s},38906:function(t,e,n){n.d(e,{h:function(){return i}});function i(t,e){if(!t)throw Error(e)}},13002:function(t,e,n){n.d(e,{Vx:function(){return o},bN:function(){return s},oL:function(){return r}});var i=n(13580);function r(t,e,n,i,r){if(r){let r=n;n=function(o){return t.removeEventListener(e,n),r.call(i??this,o)}}else i&&i!==t&&(n=n.bind(i));let o={target:t,type:e,listener:n};return t.addEventListener(e,n),o}function o(t,e,n,i){return r(t,e,n,i,!0)}function s(t){t&&t.target&&(t.target.removeEventListener(t.type,t.listener),(0,i.Z)(t))}},36403:function(t,e,n){n.r(e),n.d(e,{all:function(){return a},altKeyOnly:function(){return u},altShiftKeysOnly:function(){return l},always:function(){return f},click:function(){return d},doubleClick:function(){return y},focus:function(){return c},focusWithTabindex:function(){return h},mouseActionButton:function(){return v},mouseOnly:function(){return O},never:function(){return E},noModifierKeys:function(){return _},penOnly:function(){return K},platformModifierKey:function(){return I},platformModifierKeyOnly:function(){return m},pointerMove:function(){return g},primaryAction:function(){return R},shiftKeyOnly:function(){return A},singleClick:function(){return p},targetNotEditable:function(){return C},touchOnly:function(){return P}});var i=n(30006),r=n(38906),o=n(64011),s=n(91358);function a(t){let e=arguments;return function(t){let n=!0;for(let i=0,r=e.length;i<r&&(n=n&&e[i](t));++i);return n}}let u=function(t){let e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},l=function(t){let e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},c=function(t){let e=t.map.getTargetElement(),n=e.getRootNode(),i=t.map.getOwnerDocument().activeElement;return n instanceof ShadowRoot?n.host.contains(i):e.contains(i)},h=function(t){let e=t.map.getTargetElement(),n=e.getRootNode();return!(n instanceof ShadowRoot?n.host:e).hasAttribute("tabindex")||c(t)},f=o.TRUE,d=function(t){return t.type==i.Z.CLICK},v=function(t){let e=t.originalEvent;return 0==e.button&&!(s.WEBKIT&&s.MAC&&e.ctrlKey)},E=o.FALSE,g=function(t){return"pointermove"==t.type},p=function(t){return t.type==i.Z.SINGLECLICK},y=function(t){return t.type==i.Z.DBLCLICK},_=function(t){let e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},m=function(t){let e=t.originalEvent;return!e.altKey&&(s.MAC?e.metaKey:e.ctrlKey)&&!e.shiftKey},I=function(t){let e=t.originalEvent;return s.MAC?e.metaKey:e.ctrlKey},A=function(t){let e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},C=function(t){let e=t.originalEvent,n=e.target.tagName;return"INPUT"!==n&&"SELECT"!==n&&"TEXTAREA"!==n&&!e.target.isContentEditable},O=function(t){let e=t.originalEvent;return(0,r.h)(void 0!==e,"mapBrowserEvent must originate from a pointer event"),"mouse"==e.pointerType},P=function(t){let e=t.originalEvent;return(0,r.h)(void 0!==e,"mapBrowserEvent must originate from a pointer event"),"touch"===e.pointerType},K=function(t){let e=t.originalEvent;return(0,r.h)(void 0!==e,"mapBrowserEvent must originate from a pointer event"),"pen"===e.pointerType},R=function(t){let e=t.originalEvent;return(0,r.h)(void 0!==e,"mapBrowserEvent must originate from a pointer event"),e.isPrimary&&0===e.button}},91358:function(t,e,n){n.r(e),n.d(e,{CREATE_IMAGE_BITMAP:function(){return f},DEVICE_PIXEL_RATIO:function(){return l},FIREFOX:function(){return r},IMAGE_DECODE:function(){return h},MAC:function(){return u},PASSIVE_EVENT_LISTENERS:function(){return d},SAFARI:function(){return o},SAFARI_BUG_237906:function(){return s},WEBKIT:function(){return a},WORKER_OFFSCREEN_CANVAS:function(){return c}});let i="undefined"!=typeof navigator&&void 0!==navigator.userAgent?navigator.userAgent.toLowerCase():"",r=i.includes("firefox"),o=i.includes("safari")&&!i.includes("chrom"),s=o&&(i.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(i)),a=i.includes("webkit")&&!i.includes("edge"),u=i.includes("macintosh"),l="undefined"!=typeof devicePixelRatio?devicePixelRatio:1,c="undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof OffscreenCanvas&&self instanceof WorkerGlobalScope,h="undefined"!=typeof Image&&Image.prototype.decode,f="function"==typeof createImageBitmap,d=function(){let t=!1;try{let e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch{}return t}()},89695:function(t,e,n){n.r(e);var i=n(36403),r=n(38024);class o extends r.default{constructor(t){super(t=t||{}),this.condition_=t.condition?t.condition:i.shiftKeyOnly,this.lastAngle_=void 0,this.lastMagnitude_=void 0,this.lastScaleDelta_=0,this.duration_=void 0!==t.duration?t.duration:400}handleDragEvent(t){if(!(0,i.mouseOnly)(t))return;let e=t.map,n=e.getSize(),r=t.pixel,o=r[0]-n[0]/2,s=n[1]/2-r[1],a=Math.atan2(s,o),u=Math.sqrt(o*o+s*s),l=e.getView();if(void 0!==this.lastAngle_){let t=this.lastAngle_-a;l.adjustRotationInternal(t)}this.lastAngle_=a,void 0!==this.lastMagnitude_&&l.adjustResolutionInternal(this.lastMagnitude_/u),void 0!==this.lastMagnitude_&&(this.lastScaleDelta_=this.lastMagnitude_/u),this.lastMagnitude_=u}handleUpEvent(t){if(!(0,i.mouseOnly)(t))return!0;let e=t.map.getView(),n=this.lastScaleDelta_>1?1:-1;return e.endInteraction(this.duration_,n),this.lastScaleDelta_=0,!1}handleDownEvent(t){return!!(0,i.mouseOnly)(t)&&!!this.condition_(t)&&(t.map.getView().beginInteraction(),this.lastAngle_=void 0,this.lastMagnitude_=void 0,!0)}}e.default=o},47588:function(t,e,n){n.d(e,{Cv:function(){return a},FW:function(){return u}});var i=n(58493),r=n(86320),o=n(73604);class s extends i.default{constructor(t){super(),this.on,this.once,this.un,t&&t.handleEvent&&(this.handleEvent=t.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(o.Z.ACTIVE)}getMap(){return this.map_}handleEvent(t){return!0}setActive(t){this.set(o.Z.ACTIVE,t)}setMap(t){this.map_=t}}function a(t,e,n){let i=t.getCenterInternal();if(i){let o=[i[0]+e[0],i[1]+e[1]];t.animateInternal({duration:void 0!==n?n:250,easing:r.linear,center:t.getConstrainedCenter(o)})}}function u(t,e,n,i){let o=t.getZoom();if(void 0===o)return;let s=t.getConstrainedZoom(o+e),a=t.getResolutionForZoom(s);t.getAnimating()&&t.cancelAnimations(),t.animate({resolution:a,anchor:n,duration:void 0!==i?i:250,easing:r.easeOut})}e.ZP=s},38024:function(t,e,n){n.r(e),n.d(e,{centroid:function(){return s}});var i=n(30006),r=n(47588);class o extends r.ZP{constructor(t){super(t=t||{}),t.handleDownEvent&&(this.handleDownEvent=t.handleDownEvent),t.handleDragEvent&&(this.handleDragEvent=t.handleDragEvent),t.handleMoveEvent&&(this.handleMoveEvent=t.handleMoveEvent),t.handleUpEvent&&(this.handleUpEvent=t.handleUpEvent),t.stopDown&&(this.stopDown=t.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(t){return!1}handleDragEvent(t){}handleEvent(t){if(!t.originalEvent)return!0;let e=!1;if(this.updateTrackedPointers_(t),this.handlingDownUpSequence){if(t.type==i.Z.POINTERDRAG)this.handleDragEvent(t),t.originalEvent.preventDefault();else if(t.type==i.Z.POINTERUP){let e=this.handleUpEvent(t);this.handlingDownUpSequence=e&&this.targetPointers.length>0}}else if(t.type==i.Z.POINTERDOWN){let n=this.handleDownEvent(t);this.handlingDownUpSequence=n,e=this.stopDown(n)}else t.type==i.Z.POINTERMOVE&&this.handleMoveEvent(t);return!e}handleMoveEvent(t){}handleUpEvent(t){return!1}stopDown(t){return t}updateTrackedPointers_(t){t.activePointers&&(this.targetPointers=t.activePointers)}}function s(t){let e=t.length,n=0,i=0;for(let r=0;r<e;r++)n+=t[r].clientX,i+=t[r].clientY;return{clientX:n/e,clientY:i/e}}e.default=o},73604:function(t,e){e.Z={ACTIVE:"active"}}}]);
//# sourceMappingURL=9720.b10f9f8a0f637a60.js.map