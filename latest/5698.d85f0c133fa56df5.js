"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["5698"],{30006:function(t,e,n){var r=n(73381);e.Z={SINGLECLICK:"singleclick",CLICK:r.default.CLICK,DBLCLICK:r.default.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}},58493:function(t,e,n){n.r(e),n.d(e,{ObjectEvent:function(){return a}});var r=n(13910),i=n(56834),o=n(9520),u=n(13580),s=n(49179);class a extends o.default{constructor(t,e,n){super(t),this.key=e,this.oldValue=n}}class l extends i.default{constructor(t){super(),this.on,this.once,this.un,(0,s.getUid)(this),this.values_=null,void 0!==t&&this.setProperties(t)}get(t){let e;return this.values_&&this.values_.hasOwnProperty(t)&&(e=this.values_[t]),e}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(t,e){let n;n=`change:${t}`,this.hasListener(n)&&this.dispatchEvent(new a(n,t,e)),n=r.Z.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new a(n,t,e))}addChangeListener(t,e){this.addEventListener(`change:${t}`,e)}removeChangeListener(t,e){this.removeEventListener(`change:${t}`,e)}set(t,e,n){let r=this.values_||(this.values_={});if(n)r[t]=e;else{let n=r[t];r[t]=e,n!==e&&this.notify(t,n)}}setProperties(t,e){for(let n in t)this.set(n,t[n],e)}applyProperties(t){t.values_&&Object.assign(this.values_||(this.values_={}),t.values_)}unset(t,e){if(this.values_&&t in this.values_){let n=this.values_[t];delete this.values_[t],(0,u.x)(this.values_)&&(this.values_=null),e||this.notify(t,n)}}}e.default=l},13910:function(t,e){e.Z={PROPERTYCHANGE:"propertychange"}},56834:function(t,e,n){n.r(e),n.d(e,{unByKey:function(){return s}});var r=n(73381),i=n(66575),o=n(13002);class u extends i.Z{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(r.default.CHANGE)}getRevision(){return this.revision_}onInternal(t,e){if(Array.isArray(t)){let n=t.length,r=Array(n);for(let i=0;i<n;++i)r[i]=(0,o.oL)(this,t[i],e);return r}return(0,o.oL)(this,t,e)}onceInternal(t,e){let n;if(Array.isArray(t)){let r=t.length;n=Array(r);for(let i=0;i<r;++i)n[i]=(0,o.Vx)(this,t[i],e)}else n=(0,o.Vx)(this,t,e);return e.ol_key=n,n}unInternal(t,e){let n=e.ol_key;if(n)s(n);else if(Array.isArray(t))for(let n=0,r=t.length;n<r;++n)this.removeEventListener(t[n],e);else this.removeEventListener(t,e)}}function s(t){if(Array.isArray(t))for(let e=0,n=t.length;e<n;++e)(0,o.bN)(t[e]);else(0,o.bN)(t)}u.prototype.on,u.prototype.once,u.prototype.un,e.default=u},38906:function(t,e,n){n.d(e,{h:function(){return r}});function r(t,e){if(!t)throw Error(e)}},13002:function(t,e,n){n.d(e,{Vx:function(){return o},bN:function(){return u},oL:function(){return i}});var r=n(13580);function i(t,e,n,r,i){if(i){let i=n;n=function(o){return t.removeEventListener(e,n),i.call(r??this,o)}}else r&&r!==t&&(n=n.bind(r));let o={target:t,type:e,listener:n};return t.addEventListener(e,n),o}function o(t,e,n,r){return i(t,e,n,r,!0)}function u(t){t&&t.target&&(t.target.removeEventListener(t.type,t.listener),(0,r.Z)(t))}},36403:function(t,e,n){n.r(e),n.d(e,{all:function(){return s},altKeyOnly:function(){return a},altShiftKeysOnly:function(){return l},always:function(){return h},click:function(){return d},doubleClick:function(){return g},focus:function(){return c},focusWithTabindex:function(){return f},mouseActionButton:function(){return v},mouseOnly:function(){return K},never:function(){return E},noModifierKeys:function(){return m},penOnly:function(){return L},platformModifierKey:function(){return A},platformModifierKeyOnly:function(){return _},pointerMove:function(){return p},primaryAction:function(){return R},shiftKeyOnly:function(){return C},singleClick:function(){return y},targetNotEditable:function(){return I},touchOnly:function(){return O}});var r=n(30006),i=n(38906),o=n(64011),u=n(91358);function s(t){let e=arguments;return function(t){let n=!0;for(let r=0,i=e.length;r<i&&(n=n&&e[r](t));++r);return n}}let a=function(t){let e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},l=function(t){let e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},c=function(t){let e=t.map.getTargetElement(),n=e.getRootNode(),r=t.map.getOwnerDocument().activeElement;return n instanceof ShadowRoot?n.host.contains(r):e.contains(r)},f=function(t){let e=t.map.getTargetElement(),n=e.getRootNode();return!(n instanceof ShadowRoot?n.host:e).hasAttribute("tabindex")||c(t)},h=o.TRUE,d=function(t){return t.type==r.Z.CLICK},v=function(t){let e=t.originalEvent;return 0==e.button&&!(u.WEBKIT&&u.MAC&&e.ctrlKey)},E=o.FALSE,p=function(t){return"pointermove"==t.type},y=function(t){return t.type==r.Z.SINGLECLICK},g=function(t){return t.type==r.Z.DBLCLICK},m=function(t){let e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},_=function(t){let e=t.originalEvent;return!e.altKey&&(u.MAC?e.metaKey:e.ctrlKey)&&!e.shiftKey},A=function(t){let e=t.originalEvent;return u.MAC?e.metaKey:e.ctrlKey},C=function(t){let e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},I=function(t){let e=t.originalEvent,n=e.target.tagName;return"INPUT"!==n&&"SELECT"!==n&&"TEXTAREA"!==n&&!e.target.isContentEditable},K=function(t){let e=t.originalEvent;return(0,i.h)(void 0!==e,"mapBrowserEvent must originate from a pointer event"),"mouse"==e.pointerType},O=function(t){let e=t.originalEvent;return(0,i.h)(void 0!==e,"mapBrowserEvent must originate from a pointer event"),"touch"===e.pointerType},L=function(t){let e=t.originalEvent;return(0,i.h)(void 0!==e,"mapBrowserEvent must originate from a pointer event"),"pen"===e.pointerType},R=function(t){let e=t.originalEvent;return(0,i.h)(void 0!==e,"mapBrowserEvent must originate from a pointer event"),e.isPrimary&&0===e.button}},91358:function(t,e,n){n.r(e),n.d(e,{CREATE_IMAGE_BITMAP:function(){return h},DEVICE_PIXEL_RATIO:function(){return l},FIREFOX:function(){return i},IMAGE_DECODE:function(){return f},MAC:function(){return a},PASSIVE_EVENT_LISTENERS:function(){return d},SAFARI:function(){return o},SAFARI_BUG_237906:function(){return u},WEBKIT:function(){return s},WORKER_OFFSCREEN_CANVAS:function(){return c}});let r="undefined"!=typeof navigator&&void 0!==navigator.userAgent?navigator.userAgent.toLowerCase():"",i=r.includes("firefox"),o=r.includes("safari")&&!r.includes("chrom"),u=o&&(r.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(r)),s=r.includes("webkit")&&!r.includes("edge"),a=r.includes("macintosh"),l="undefined"!=typeof devicePixelRatio?devicePixelRatio:1,c="undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof OffscreenCanvas&&self instanceof WorkerGlobalScope,f="undefined"!=typeof Image&&Image.prototype.decode,h="function"==typeof createImageBitmap,d=function(){let t=!1;try{let e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch{}return t}()},47588:function(t,e,n){n.d(e,{Cv:function(){return s},FW:function(){return a}});var r=n(58493),i=n(86320),o=n(73604);class u extends r.default{constructor(t){super(),this.on,this.once,this.un,t&&t.handleEvent&&(this.handleEvent=t.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(o.Z.ACTIVE)}getMap(){return this.map_}handleEvent(t){return!0}setActive(t){this.set(o.Z.ACTIVE,t)}setMap(t){this.map_=t}}function s(t,e,n){let r=t.getCenterInternal();if(r){let o=[r[0]+e[0],r[1]+e[1]];t.animateInternal({duration:void 0!==n?n:250,easing:i.linear,center:t.getConstrainedCenter(o)})}}function a(t,e,n,r){let o=t.getZoom();if(void 0===o)return;let u=t.getConstrainedZoom(o+e),s=t.getResolutionForZoom(u);t.getAnimating()&&t.cancelAnimations(),t.animate({resolution:s,anchor:n,duration:void 0!==r?r:250,easing:i.easeOut})}e.ZP=u},52:function(t,e,n){n.r(e);var r=n(73381),i=n(36403),o=n(47588);class u extends o.ZP{constructor(t){super(),t=t||{},this.condition_=t.condition?t.condition:function(t){return!(0,i.platformModifierKey)(t)&&(0,i.targetNotEditable)(t)},this.delta_=t.delta?t.delta:1,this.duration_=void 0!==t.duration?t.duration:100}handleEvent(t){let e=!1;if(t.type==r.default.KEYDOWN||t.type==r.default.KEYPRESS){let n=t.originalEvent,r=n.key;if(this.condition_(t)&&("+"===r||"-"===r)){let i=t.map,u="+"===r?this.delta_:-this.delta_,s=i.getView();(0,o.FW)(s,u,void 0,this.duration_),n.preventDefault(),e=!0}}return!e}}e.default=u},73604:function(t,e){e.Z={ACTIVE:"active"}}}]);
//# sourceMappingURL=5698.d85f0c133fa56df5.js.map