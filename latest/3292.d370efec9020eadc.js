"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["3292"],{58493:function(e,t,s){s.r(t),s.d(t,{ObjectEvent:function(){return a}});var n=s(13910),r=s(56834),i=s(9520),l=s(13580),u=s(49179);class a extends i.default{constructor(e,t,s){super(e),this.key=t,this.oldValue=s}}class h extends r.default{constructor(e){super(),this.on,this.once,this.un,(0,u.getUid)(this),this.values_=null,void 0!==e&&this.setProperties(e)}get(e){let t;return this.values_&&this.values_.hasOwnProperty(e)&&(t=this.values_[e]),t}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(e,t){let s;s=`change:${e}`,this.hasListener(s)&&this.dispatchEvent(new a(s,e,t)),s=n.Z.PROPERTYCHANGE,this.hasListener(s)&&this.dispatchEvent(new a(s,e,t))}addChangeListener(e,t){this.addEventListener(`change:${e}`,t)}removeChangeListener(e,t){this.removeEventListener(`change:${e}`,t)}set(e,t,s){let n=this.values_||(this.values_={});if(s)n[e]=t;else{let s=n[e];n[e]=t,s!==t&&this.notify(e,s)}}setProperties(e,t){for(let s in e)this.set(s,e[s],t)}applyProperties(e){e.values_&&Object.assign(this.values_||(this.values_={}),e.values_)}unset(e,t){if(this.values_&&e in this.values_){let s=this.values_[e];delete this.values_[e],(0,l.x)(this.values_)&&(this.values_=null),t||this.notify(e,s)}}}t.default=h},13910:function(e,t){t.Z={PROPERTYCHANGE:"propertychange"}},56834:function(e,t,s){s.r(t),s.d(t,{unByKey:function(){return u}});var n=s(73381),r=s(66575),i=s(13002);class l extends r.Z{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(n.default.CHANGE)}getRevision(){return this.revision_}onInternal(e,t){if(Array.isArray(e)){let s=e.length,n=Array(s);for(let r=0;r<s;++r)n[r]=(0,i.oL)(this,e[r],t);return n}return(0,i.oL)(this,e,t)}onceInternal(e,t){let s;if(Array.isArray(e)){let n=e.length;s=Array(n);for(let r=0;r<n;++r)s[r]=(0,i.Vx)(this,e[r],t)}else s=(0,i.Vx)(this,e,t);return t.ol_key=s,s}unInternal(e,t){let s=t.ol_key;if(s)u(s);else if(Array.isArray(e))for(let s=0,n=e.length;s<n;++s)this.removeEventListener(e[s],t);else this.removeEventListener(e,t)}}function u(e){if(Array.isArray(e))for(let t=0,s=e.length;t<s;++t)(0,i.bN)(e[t]);else(0,i.bN)(e)}l.prototype.on,l.prototype.once,l.prototype.un,t.default=l},13002:function(e,t,s){s.d(t,{Vx:function(){return i},bN:function(){return l},oL:function(){return r}});var n=s(13580);function r(e,t,s,n,r){if(r){let r=s;s=function(i){return e.removeEventListener(t,s),r.call(n??this,i)}}else n&&n!==e&&(s=s.bind(n));let i={target:e,type:t,listener:s};return e.addEventListener(t,s),i}function i(e,t,s,n){return r(e,t,s,n,!0)}function l(e){e&&e.target&&(e.target.removeEventListener(e.type,e.listener),(0,n.Z)(e))}}}]);
//# sourceMappingURL=3292.d370efec9020eadc.js.map