"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["4588"],{30006:function(e,t,n){var i=n(73381);t.Z={SINGLECLICK:"singleclick",CLICK:i.default.CLICK,DBLCLICK:i.default.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}},58493:function(e,t,n){n.r(t),n.d(t,{ObjectEvent:function(){return l}});var i=n(13910),s=n(56834),r=n(9520),a=n(13580),o=n(49179);class l extends r.default{constructor(e,t,n){super(e),this.key=t,this.oldValue=n}}class u extends s.default{constructor(e){super(),this.on,this.once,this.un,(0,o.getUid)(this),this.values_=null,void 0!==e&&this.setProperties(e)}get(e){let t;return this.values_&&this.values_.hasOwnProperty(e)&&(t=this.values_[e]),t}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(e,t){let n;n=`change:${e}`,this.hasListener(n)&&this.dispatchEvent(new l(n,e,t)),n=i.Z.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new l(n,e,t))}addChangeListener(e,t){this.addEventListener(`change:${e}`,t)}removeChangeListener(e,t){this.removeEventListener(`change:${e}`,t)}set(e,t,n){let i=this.values_||(this.values_={});if(n)i[e]=t;else{let n=i[e];i[e]=t,n!==t&&this.notify(e,n)}}setProperties(e,t){for(let n in e)this.set(n,e[n],t)}applyProperties(e){e.values_&&Object.assign(this.values_||(this.values_={}),e.values_)}unset(e,t){if(this.values_&&e in this.values_){let n=this.values_[e];delete this.values_[e],(0,a.x)(this.values_)&&(this.values_=null),t||this.notify(e,n)}}}t.default=u},13910:function(e,t){t.Z={PROPERTYCHANGE:"propertychange"}},56834:function(e,t,n){n.r(t),n.d(t,{unByKey:function(){return o}});var i=n(73381),s=n(66575),r=n(13002);class a extends s.Z{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(i.default.CHANGE)}getRevision(){return this.revision_}onInternal(e,t){if(Array.isArray(e)){let n=e.length,i=Array(n);for(let s=0;s<n;++s)i[s]=(0,r.oL)(this,e[s],t);return i}return(0,r.oL)(this,e,t)}onceInternal(e,t){let n;if(Array.isArray(e)){let i=e.length;n=Array(i);for(let s=0;s<i;++s)n[s]=(0,r.Vx)(this,e[s],t)}else n=(0,r.Vx)(this,e,t);return t.ol_key=n,n}unInternal(e,t){let n=t.ol_key;if(n)o(n);else if(Array.isArray(e))for(let n=0,i=e.length;n<i;++n)this.removeEventListener(e[n],t);else this.removeEventListener(e,t)}}function o(e){if(Array.isArray(e))for(let t=0,n=e.length;t<n;++t)(0,r.bN)(e[t]);else(0,r.bN)(e)}a.prototype.on,a.prototype.once,a.prototype.un,t.default=a},13002:function(e,t,n){n.d(t,{Vx:function(){return r},bN:function(){return a},oL:function(){return s}});var i=n(13580);function s(e,t,n,i,s){if(s){let s=n;n=function(r){return e.removeEventListener(t,n),s.call(i??this,r)}}else i&&i!==e&&(n=n.bind(i));let r={target:e,type:t,listener:n};return e.addEventListener(t,n),r}function r(e,t,n,i){return s(e,t,n,i,!0)}function a(e){e&&e.target&&(e.target.removeEventListener(e.type,e.listener),(0,i.Z)(e))}},18369:function(e,t,n){n.r(t);var i=n(30006),s=n(47588);class r extends s.ZP{constructor(e){super(),e=e||{},this.delta_=e.delta?e.delta:1,this.duration_=void 0!==e.duration?e.duration:250}handleEvent(e){let t=!1;if(e.type==i.Z.DBLCLICK){let n=e.originalEvent,i=e.map,r=e.coordinate,a=n.shiftKey?-this.delta_:this.delta_,o=i.getView();(0,s.FW)(o,a,r,this.duration_),n.preventDefault(),t=!0}return!t}}t.default=r},47588:function(e,t,n){n.d(t,{Cv:function(){return o},FW:function(){return l}});var i=n(58493),s=n(86320),r=n(73604);class a extends i.default{constructor(e){super(),this.on,this.once,this.un,e&&e.handleEvent&&(this.handleEvent=e.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(r.Z.ACTIVE)}getMap(){return this.map_}handleEvent(e){return!0}setActive(e){this.set(r.Z.ACTIVE,e)}setMap(e){this.map_=e}}function o(e,t,n){let i=e.getCenterInternal();if(i){let r=[i[0]+t[0],i[1]+t[1]];e.animateInternal({duration:void 0!==n?n:250,easing:s.linear,center:e.getConstrainedCenter(r)})}}function l(e,t,n,i){let r=e.getZoom();if(void 0===r)return;let a=e.getConstrainedZoom(r+t),o=e.getResolutionForZoom(a);e.getAnimating()&&e.cancelAnimations(),e.animate({resolution:o,anchor:n,duration:void 0!==i?i:250,easing:s.easeOut})}t.ZP=a},73604:function(e,t){t.Z={ACTIVE:"active"}}}]);
//# sourceMappingURL=4588.604aa4bad7d13d1d.js.map