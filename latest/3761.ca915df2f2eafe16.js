"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["3761"],{80967:function(e,t){t.Z=class e{constructor(){this.disposed=!1}dispose(){!this.disposed&&(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}},40188:function(e,t){t.Z={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"}},58493:function(e,t,n){n.r(t),n.d(t,{ObjectEvent:function(){return a}});var i=n(13910),r=n(56834),s=n(9520),l=n(13580),o=n(49179);class a extends s.default{constructor(e,t,n){super(e),this.key=t,this.oldValue=n}}class u extends r.default{constructor(e){super(),this.on,this.once,this.un,(0,o.getUid)(this),this.values_=null,void 0!==e&&this.setProperties(e)}get(e){let t;return this.values_&&this.values_.hasOwnProperty(e)&&(t=this.values_[e]),t}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(e,t){let n;n=`change:${e}`,this.hasListener(n)&&this.dispatchEvent(new a(n,e,t)),n=i.Z.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new a(n,e,t))}addChangeListener(e,t){this.addEventListener(`change:${e}`,t)}removeChangeListener(e,t){this.removeEventListener(`change:${e}`,t)}set(e,t,n){let i=this.values_||(this.values_={});if(n)i[e]=t;else{let n=i[e];i[e]=t,n!==t&&this.notify(e,n)}}setProperties(e,t){for(let n in e)this.set(n,e[n],t)}applyProperties(e){if(!!e.values_)Object.assign(this.values_||(this.values_={}),e.values_)}unset(e,t){if(this.values_&&e in this.values_){let n=this.values_[e];delete this.values_[e],(0,l.x)(this.values_)&&(this.values_=null),!t&&this.notify(e,n)}}}t.default=u},13910:function(e,t){t.Z={PROPERTYCHANGE:"propertychange"}},56834:function(e,t,n){n.r(t),n.d(t,{unByKey:function(){return o}});var i=n(73381),r=n(66575),s=n(13002);class l extends r.Z{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(i.default.CHANGE)}getRevision(){return this.revision_}onInternal(e,t){if(Array.isArray(e)){let n=e.length,i=Array(n);for(let r=0;r<n;++r)i[r]=(0,s.oL)(this,e[r],t);return i}return(0,s.oL)(this,e,t)}onceInternal(e,t){let n;if(Array.isArray(e)){let i=e.length;n=Array(i);for(let r=0;r<i;++r)n[r]=(0,s.Vx)(this,e[r],t)}else n=(0,s.Vx)(this,e,t);return t.ol_key=n,n}unInternal(e,t){let n=t.ol_key;if(n)o(n);else if(Array.isArray(e))for(let n=0,i=e.length;n<i;++n)this.removeEventListener(e[n],t);else this.removeEventListener(e,t)}}function o(e){if(Array.isArray(e))for(let t=0,n=e.length;t<n;++t)(0,s.bN)(e[t]);else(0,s.bN)(e)}l.prototype.on,l.prototype.once,l.prototype.un,t.default=l},79682:function(e,t,n){function i(e,t,n){let i,s;n=n||r;let l=0,o=e.length,a=!1;for(;l<o;)(s=+n(e[i=l+(o-l>>1)],t))<0?l=i+1:(o=i,a=!s);return a?l:~l}function r(e,t){return e>t?1:e<t?-1:0}function s(e,t){return e<t?1:e>t?-1:0}function l(e,t,n){if(e[0]<=t)return 0;let i=e.length;if(t<=e[i-1])return i-1;if("function"==typeof n){for(let r=1;r<i;++r){let i=e[r];if(i===t)return r;if(i<t){if(n(t,e[r-1],i)>0)return r-1;return r}}return i-1}if(n>0){for(let n=1;n<i;++n)if(e[n]<t)return n-1;return i-1}if(n<0){for(let n=1;n<i;++n)if(e[n]<=t)return n;return i-1}for(let n=1;n<i;++n){if(e[n]==t)return n;if(e[n]<t){if(e[n-1]-t<t-e[n])return n-1;return n}}return i-1}function o(e,t,n){for(;t<n;){let i=e[t];e[t]=e[n],e[n]=i,++t,--n}}function a(e,t){let n=Array.isArray(t)?t:[t],i=n.length;for(let t=0;t<i;t++)e[e.length]=n[t]}function u(e,t){let n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function h(e,t,n){let i=t||r;return e.every(function(t,r){if(0===r)return!0;let s=i(e[r-1],t);return!(s>0||n&&0===s)})}n.d(t,{$1:function(){return s},FZ:function(){return o},fS:function(){return u},h7:function(){return l},j2:function(){return r},l7:function(){return a},pT:function(){return h},ry:function(){return i}})},19530:function(e,t,n){var i=n(40188),r=n(58493),s=n(13002),l=n(64011);class o extends r.default{constructor(e){super();let t=e.element;t&&!e.target&&!t.style.pointerEvents&&(t.style.pointerEvents="auto"),this.element=t||null,this.target_=null,this.map_=null,this.listenerKeys=[],e.render&&(this.render=e.render),e.target&&this.setTarget(e.target)}disposeInternal(){this.element?.remove(),super.disposeInternal()}getMap(){return this.map_}setMap(e){this.map_&&this.element?.remove();for(let e=0,t=this.listenerKeys.length;e<t;++e)(0,s.bN)(this.listenerKeys[e]);if(this.listenerKeys.length=0,this.map_=e,e){let t=this.target_??e.getOverlayContainerStopEvent();this.element&&t.appendChild(this.element),this.render!==l.VOID&&this.listenerKeys.push((0,s.oL)(e,i.Z.POSTRENDER,this.render,this)),e.render()}}render(e){}setTarget(e){this.target_="string"==typeof e?document.getElementById(e):e}}t.Z=o},25303:function(e,t,n){n.r(t);var i=n(67644),r=n(5374),s=n(19530);let l="units",o=[1,2,5],a=25.4/.28;class u extends s.Z{constructor(e){e=e||{};let t=document.createElement("div");t.style.pointerEvents="none",super({element:t,render:e.render,target:e.target}),this.on,this.once,this.un;let n=void 0!==e.className?e.className:e.bar?"ol-scale-bar":"ol-scale-line";this.innerElement_=document.createElement("div"),this.innerElement_.className=n+"-inner",this.element.className=n+" "+i.XV,this.element.appendChild(this.innerElement_),this.viewState_=null,this.minWidth_=void 0!==e.minWidth?e.minWidth:64,this.maxWidth_=e.maxWidth,this.renderedVisible_=!1,this.renderedWidth_=void 0,this.renderedHTML_="",this.addChangeListener(l,this.handleUnitsChanged_),this.setUnits(e.units||"metric"),this.scaleBar_=e.bar||!1,this.scaleBarSteps_=e.steps||4,this.scaleBarText_=e.text||!1,this.dpi_=e.dpi||void 0}getUnits(){return this.get(l)}handleUnitsChanged_(){this.updateElement_()}setUnits(e){this.set(l,e)}setDpi(e){this.dpi_=e}updateElement_(){let e,t,n,i,s;let l=this.viewState_;if(!l){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}let u=l.center,h=l.projection,c=this.getUnits(),d=(0,r.getPointResolution)(h,l.resolution,u,"degrees"==c?"degrees":"m"),f=this.minWidth_*(this.dpi_||a)/a,p=void 0!==this.maxWidth_?this.maxWidth_*(this.dpi_||a)/a:void 0,_=f*d,v="";if("degrees"==c){let e=r.METERS_PER_UNIT.degrees;(_*=e)<e/60?(v="″",d*=3600):_<e?(v="′",d*=60):v="\xb0"}else if("imperial"==c)_<.9144?(v="in",d/=.0254):_<1609.344?(v="ft",d/=.3048):(v="mi",d/=1609.344);else if("nautical"==c)d/=1852,v="NM";else if("metric"==c)_<1e-6?(v="nm",d*=1e9):_<.001?(v="μm",d*=1e6):_<1?(v="mm",d*=1e3):_<1e3?v="m":(v="km",d/=1e3);else if("us"==c)_<.9144?(v="in",d*=39.37):_<1609.344?(v="ft",d/=.30480061):(v="mi",d/=1609.3472);else throw Error("Invalid units");let g=3*Math.floor(Math.log(f*d)/Math.log(10)),m=0;for(;;){let r=Math.pow(10,n=Math.floor(g/3));if(isNaN(t=Math.round((e=o[(g%3+3)%3]*r)/d))){this.element.style.display="none",this.renderedVisible_=!1;return}if(void 0!==p&&t>=p){e=m,t=i,n=s;break}if(t>=f)break;m=e,i=t,s=n,++g}let E=this.scaleBar_?this.createScaleBar(t,e,v):e.toFixed(n<0?-n:0)+" "+v;this.renderedHTML_!=E&&(this.innerElement_.innerHTML=E,this.renderedHTML_=E),this.renderedWidth_!=t&&(this.innerElement_.style.width=t+"px",this.renderedWidth_=t),!this.renderedVisible_&&(this.element.style.display="",this.renderedVisible_=!0)}createScaleBar(e,t,n){let i=this.getScaleForResolution(),r=i<1?Math.round(1/i).toLocaleString()+" : 1":"1 : "+Math.round(i).toLocaleString(),s=this.scaleBarSteps_,l=e/s,o=[this.createMarker("absolute")];for(let i=0;i<s;++i){let r=i%2==0?"ol-scale-singlebar-odd":"ol-scale-singlebar-even";o.push(`<div><div class="ol-scale-singlebar ${r}" style="width: ${l}px;"></div>`+this.createMarker("relative")+(i%2==0||2===s?this.createStepText(i,e,!1,t,n):"")+"</div>")}return o.push(this.createStepText(s,e,!0,t,n)),(this.scaleBarText_?`<div class="ol-scale-text" style="width: ${e}px;">`+r+"</div>":"")+o.join("")}createMarker(e){return`<div class="ol-scale-step-marker" style="position: ${e}; top: ${"absolute"===e?3:-10}px;"></div>`}createStepText(e,t,n,i,r){let s=0===e?0:Math.round(i/this.scaleBarSteps_*e*100)/100,l=0===e?-3:-(t/this.scaleBarSteps_*1),o=0===e?0:t/this.scaleBarSteps_*2;return`<div class="ol-scale-step-text" style="margin-left: ${l}px;text-align: ${0===e?"left":"center"};min-width: ${o}px;left: ${n?t+"px":"unset"};">`+s+(0===e?"":" "+r)+"</div>"}getScaleForResolution(){let e=(0,r.getPointResolution)(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center,"m"),t=this.dpi_||a;return 1e3/25.4*e*t}render(e){let t=e.frameState;t?this.viewState_=t.viewState:this.viewState_=null,this.updateElement_()}}t.default=u},67644:function(e,t,n){n.d(t,{$A:function(){return r},Qi:function(){return l},XV:function(){return s},hN:function(){return a},hg:function(){return o},oj:function(){return i},p:function(){return c}});let i="ol-hidden",r="ol-selectable",s="ol-unselectable",l="ol-unsupported",o="ol-control",a="ol-collapsed",u=RegExp("^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))?\\s*([-,\\\"\\'\\sa-z]+?)\\s*$","i"),h=["style","variant","weight","size","lineHeight","family"],c=function(e){let t=e.match(u);if(!t)return null;let n={lineHeight:"normal",size:"1.2em",style:"normal",weight:"normal",variant:"normal"};for(let e=0,i=h.length;e<i;++e){let i=t[e+1];void 0!==i&&(n[h[e]]=i)}return n.families=n.family.split(/,\s?/),n}},13002:function(e,t,n){n.d(t,{Vx:function(){return s},bN:function(){return l},oL:function(){return r}});var i=n(13580);function r(e,t,n,i,r){if(r){let r=n;n=function(s){return e.removeEventListener(t,n),r.call(i??this,s)}}else i&&i!==e&&(n=n.bind(i));let s={target:e,type:t,listener:n};return e.addEventListener(t,n),s}function s(e,t,n,i){return r(e,t,n,i,!0)}function l(e){e&&e.target&&(e.target.removeEventListener(e.type,e.listener),(0,i.Z)(e))}},9520:function(e,t,n){n.r(t),n.d(t,{preventDefault:function(){return r},stopPropagation:function(){return i}});function i(e){e.stopPropagation()}function r(e){e.preventDefault()}t.default=class e{constructor(e){this.propagationStopped,this.defaultPrevented,this.type=e,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}},73381:function(e,t,n){n.r(t),t.default={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"}},66575:function(e,t,n){var i=n(80967),r=n(64011),s=n(13580),l=n(9520);class o extends i.Z{constructor(e){super(),this.eventTarget_=e,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(e,t){if(!e||!t)return;let n=this.listeners_||(this.listeners_={}),i=n[e]||(n[e]=[]);!i.includes(t)&&i.push(t)}dispatchEvent(e){let t;let n="string"==typeof e,i=n?e:e.type,s=this.listeners_&&this.listeners_[i];if(!s)return;let o=n?new l.default(e):e;!o.target&&(o.target=this.eventTarget_||this);let a=this.dispatching_||(this.dispatching_={}),u=this.pendingRemovals_||(this.pendingRemovals_={});!(i in a)&&(a[i]=0,u[i]=0),++a[i];for(let e=0,n=s.length;e<n;++e)if(!1===(t="handleEvent"in s[e]?s[e].handleEvent(o):s[e].call(this,o))||o.propagationStopped){t=!1;break}if(0==--a[i]){let e=u[i];for(delete u[i];e--;)this.removeEventListener(i,r.VOID);delete a[i]}return t}disposeInternal(){this.listeners_&&(0,s.Z)(this.listeners_)}getListeners(e){return this.listeners_&&this.listeners_[e]||void 0}hasListener(e){return!!this.listeners_&&(e?e in this.listeners_:Object.keys(this.listeners_).length>0)}removeEventListener(e,t){if(!this.listeners_)return;let n=this.listeners_[e];if(!n)return;let i=n.indexOf(t);-1!==i&&(this.pendingRemovals_&&e in this.pendingRemovals_?(n[i]=r.VOID,++this.pendingRemovals_[e]):(n.splice(i,1),0===n.length&&delete this.listeners_[e]))}}t.Z=o},64011:function(e,t,n){n.r(t),n.d(t,{FALSE:function(){return s},TRUE:function(){return r},VOID:function(){return l},memoizeOne:function(){return o},toPromise:function(){return a}});var i=n(79682);function r(){return!0}function s(){return!1}function l(){}function o(e){let t,n,r;return function(){let s=Array.prototype.slice.call(arguments);return(!n||this!==r||!(0,i.fS)(s,n))&&(r=this,n=s,t=e.apply(this,arguments)),t}}function a(e){return function(){let t;try{t=e()}catch(e){return Promise.reject(e)}return t instanceof Promise?t:Promise.resolve(t)}()}},13580:function(e,t,n){function i(e){for(let t in e)delete e[t]}function r(e){let t;for(t in e)return!1;return!t}n.d(t,{Z:function(){return i},x:function(){return r}})},49179:function(e,t,n){function i(){throw Error("Unimplemented abstract method.")}n.r(t),n.d(t,{VERSION:function(){return l},abstract:function(){return i},getUid:function(){return s}});let r=0;function s(e){return e.ol_uid||(e.ol_uid=String(++r))}let l="10.4.0"}}]);
//# sourceMappingURL=3761.ca915df2f2eafe16.js.map