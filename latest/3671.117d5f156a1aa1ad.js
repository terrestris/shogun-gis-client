"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["3671"],{80967:function(t,e){e.Z=class t{constructor(){this.disposed=!1}dispose(){!this.disposed&&(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}},79682:function(t,e,i){function n(t,e,i){let n,o;i=i||r;let s=0,a=t.length,c=!1;for(;s<a;)(o=+i(t[n=s+(a-s>>1)],e))<0?s=n+1:(a=n,c=!o);return c?s:~s}function r(t,e){return t>e?1:t<e?-1:0}function o(t,e){return t<e?1:t>e?-1:0}function s(t,e,i){if(t[0]<=e)return 0;let n=t.length;if(e<=t[n-1])return n-1;if("function"==typeof i){for(let r=1;r<n;++r){let n=t[r];if(n===e)return r;if(n<e){if(i(e,t[r-1],n)>0)return r-1;return r}}return n-1}if(i>0){for(let i=1;i<n;++i)if(t[i]<e)return i-1;return n-1}if(i<0){for(let i=1;i<n;++i)if(t[i]<=e)return i;return n-1}for(let i=1;i<n;++i){if(t[i]==e)return i;if(t[i]<e){if(t[i-1]-e<e-t[i])return i-1;return i}}return n-1}function a(t,e,i){for(;e<i;){let n=t[e];t[e]=t[i],t[i]=n,++e,--i}}function c(t,e){let i=Array.isArray(e)?e:[e],n=i.length;for(let e=0;e<n;e++)t[t.length]=i[e]}function h(t,e){let i=t.length;if(i!==e.length)return!1;for(let n=0;n<i;n++)if(t[n]!==e[n])return!1;return!0}function u(t,e,i){let n=e||r;return t.every(function(e,r){if(0===r)return!0;let o=n(t[r-1],e);return!(o>0||i&&0===o)})}i.d(e,{$1:function(){return o},FZ:function(){return a},fS:function(){return h},h7:function(){return s},j2:function(){return r},l7:function(){return c},pT:function(){return u},ry:function(){return n}})},38906:function(t,e,i){i.d(e,{h:function(){return n}});function n(t,e){if(!t)throw Error(e)}},13002:function(t,e,i){i.d(e,{Vx:function(){return o},bN:function(){return s},oL:function(){return r}});var n=i(13580);function r(t,e,i,n,r){if(r){let r=i;i=function(o){return t.removeEventListener(e,i),r.call(n??this,o)}}else n&&n!==t&&(i=i.bind(n));let o={target:t,type:e,listener:i};return t.addEventListener(e,i),o}function o(t,e,i,n){return r(t,e,i,n,!0)}function s(t){t&&t.target&&(t.target.removeEventListener(t.type,t.listener),(0,n.Z)(t))}},9520:function(t,e,i){i.r(e),i.d(e,{preventDefault:function(){return r},stopPropagation:function(){return n}});function n(t){t.stopPropagation()}function r(t){t.preventDefault()}e.default=class t{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}},73381:function(t,e,i){i.r(e),e.default={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"}},66575:function(t,e,i){var n=i(80967),r=i(64011),o=i(13580),s=i(9520);class a extends n.Z{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,e){if(!t||!e)return;let i=this.listeners_||(this.listeners_={}),n=i[t]||(i[t]=[]);!n.includes(e)&&n.push(e)}dispatchEvent(t){let e;let i="string"==typeof t,n=i?t:t.type,o=this.listeners_&&this.listeners_[n];if(!o)return;let a=i?new s.default(t):t;!a.target&&(a.target=this.eventTarget_||this);let c=this.dispatching_||(this.dispatching_={}),h=this.pendingRemovals_||(this.pendingRemovals_={});!(n in c)&&(c[n]=0,h[n]=0),++c[n];for(let t=0,i=o.length;t<i;++t)if(!1===(e="handleEvent"in o[t]?o[t].handleEvent(a):o[t].call(this,a))||a.propagationStopped){e=!1;break}if(0==--c[n]){let t=h[n];for(delete h[n];t--;)this.removeEventListener(n,r.VOID);delete c[n]}return e}disposeInternal(){this.listeners_&&(0,o.Z)(this.listeners_)}getListeners(t){return this.listeners_&&this.listeners_[t]||void 0}hasListener(t){return!!this.listeners_&&(t?t in this.listeners_:Object.keys(this.listeners_).length>0)}removeEventListener(t,e){if(!this.listeners_)return;let i=this.listeners_[t];if(!i)return;let n=i.indexOf(e);-1!==n&&(this.pendingRemovals_&&t in this.pendingRemovals_?(i[n]=r.VOID,++this.pendingRemovals_[t]):(i.splice(n,1),0===i.length&&delete this.listeners_[t]))}}e.Z=a},64011:function(t,e,i){i.r(e),i.d(e,{FALSE:function(){return o},TRUE:function(){return r},VOID:function(){return s},memoizeOne:function(){return a},toPromise:function(){return c}});var n=i(79682);function r(){return!0}function o(){return!1}function s(){}function a(t){let e,i,r;return function(){let o=Array.prototype.slice.call(arguments);return(!i||this!==r||!(0,n.fS)(o,i))&&(r=this,i=o,e=t.apply(this,arguments)),e}}function c(t){return function(){let e;try{e=t()}catch(t){return Promise.reject(t)}return e instanceof Promise?e:Promise.resolve(e)}()}},21882:function(t,e,i){function n(t,e,i){return Math.min(Math.max(t,e),i)}function r(t,e,i,n,r,s){let a=r-i,c=s-n;if(0!==a||0!==c){let o=((t-i)*a+(e-n)*c)/(a*a+c*c);o>1?(i=r,n=s):o>0&&(i+=a*o,n+=c*o)}return o(t,e,i,n)}function o(t,e,i,n){let r=i-t,o=n-e;return r*r+o*o}function s(t){let e=t.length;for(let i=0;i<e;i++){let n=i,r=Math.abs(t[i][i]);for(let o=i+1;o<e;o++){let e=Math.abs(t[o][i]);e>r&&(r=e,n=o)}if(0===r)return null;let o=t[n];t[n]=t[i],t[i]=o;for(let n=i+1;n<e;n++){let r=-t[n][i]/t[i][i];for(let o=i;o<e+1;o++)i==o?t[n][o]=0:t[n][o]+=r*t[i][o]}}let i=Array(e);for(let n=e-1;n>=0;n--){i[n]=t[n][e]/t[n][n];for(let r=n-1;r>=0;r--)t[r][e]-=t[r][n]*i[n]}return i}function a(t){return 180*t/Math.PI}function c(t){return t*Math.PI/180}function h(t,e){let i=t%e;return i*e<0?i+e:i}function u(t,e,i){return t+i*(e-t)}function l(t,e){let i=Math.pow(10,e);return Math.round(t*i)/i}function f(t,e){return Math.round(l(t,e))}function g(t,e){return Math.floor(l(t,e))}function d(t,e){return Math.ceil(l(t,e))}function _(t,e,i){if(t>=e&&t<i)return t;let n=i-e;return((t-e)%n+n)%n+e}i.d(e,{$W:function(){return h},FH:function(){return l},GW:function(){return g},NM:function(){return f},SV:function(){return s},Ux:function(){return a},Yr:function(){return c},bI:function(){return o},mD:function(){return d},rU:function(){return r},re:function(){return _},t7:function(){return u},uZ:function(){return n}})},13580:function(t,e,i){function n(t){for(let e in t)delete t[e]}function r(t){let e;for(e in t)return!1;return!e}i.d(e,{Z:function(){return n},x:function(){return r}})},50596:function(t,e,i){function n(t){return t[0]>0&&t[1]>0}function r(t,e,i){return void 0===i&&(i=[0,0]),i[0]=t[0]*e+.5|0,i[1]=t[1]*e+.5|0,i}function o(t,e){return Array.isArray(t)?t:(void 0===e?e=[t,t]:(e[0]=t,e[1]=t),e)}i.d(e,{Pq:function(){return o},bA:function(){return r},py:function(){return n}})},46267:function(t,e,i){i.r(e);var n=i(11256),r=i(38906),o=i(11820),s=i(73381),a=i(49179),c=i(97889),h=i(48039);function u(t,e,i,n){return void 0!==i&&void 0!==n?[i/t,n/e]:void 0!==i?i/t:void 0!==n?n/e:1}class l extends h.default{constructor(t){let e;let i=void 0!==(t=t||{}).opacity?t.opacity:1,s=void 0!==t.rotation?t.rotation:0,h=void 0!==t.scale?t.scale:1;super({opacity:i,rotation:s,scale:h,displacement:void 0!==t.displacement?t.displacement:[0,0],rotateWithView:void 0!==t.rotateWithView&&t.rotateWithView,declutterMode:t.declutterMode}),this.anchor_=void 0!==t.anchor?t.anchor:[.5,.5],this.normalizedAnchor_=null,this.anchorOrigin_=void 0!==t.anchorOrigin?t.anchorOrigin:"top-left",this.anchorXUnits_=void 0!==t.anchorXUnits?t.anchorXUnits:"fraction",this.anchorYUnits_=void 0!==t.anchorYUnits?t.anchorYUnits:"fraction",this.crossOrigin_=void 0!==t.crossOrigin?t.crossOrigin:null;let l=void 0!==t.img?t.img:null,f=t.src;if((0,r.h)(!(void 0!==f&&l),"`image` and `src` cannot be provided at the same time"),(void 0===f||0===f.length)&&l&&(f=l.src||(0,a.getUid)(l)),(0,r.h)(void 0!==f&&f.length>0,"A defined and non-empty `src` or `image` must be provided"),(0,r.h)(!((void 0!==t.width||void 0!==t.height)&&void 0!==t.scale),"`width` or `height` cannot be provided together with `scale`"),void 0!==t.src?e=n.default.IDLE:void 0!==l&&(e="complete"in l?l.complete?l.src?n.default.LOADED:n.default.IDLE:n.default.LOADING:n.default.LOADED),this.color_=void 0!==t.color?(0,o._2)(t.color):null,this.iconImage_=(0,c.U)(l,f,this.crossOrigin_,e,this.color_),this.offset_=void 0!==t.offset?t.offset:[0,0],this.offsetOrigin_=void 0!==t.offsetOrigin?t.offsetOrigin:"top-left",this.origin_=null,this.size_=void 0!==t.size?t.size:null,this.initialOptions_,void 0!==t.width||void 0!==t.height){let e,i;if(t.size)[e,i]=t.size;else{let n=this.getImage(1);if(n.width&&n.height)e=n.width,i=n.height;else if(n instanceof HTMLImageElement){this.initialOptions_=t;let e=()=>{if(this.unlistenImageChange(e),!this.initialOptions_)return;let i=this.iconImage_.getSize();this.setScale(u(i[0],i[1],t.width,t.height))};this.listenImageChange(e);return}}void 0!==e&&this.setScale(u(e,i,t.width,t.height))}}clone(){let t,e,i;return this.initialOptions_?(e=this.initialOptions_.width,i=this.initialOptions_.height):t=Array.isArray(t=this.getScale())?t.slice():t,new l({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:t,width:e,height:i,size:null!==this.size_?this.size_.slice():void 0,src:this.getSrc(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getAnchor(){let t=this.normalizedAnchor_;if(!t){t=this.anchor_;let e=this.getSize();if("fraction"==this.anchorXUnits_||"fraction"==this.anchorYUnits_){if(!e)return null;t=this.anchor_.slice(),"fraction"==this.anchorXUnits_&&(t[0]*=e[0]),"fraction"==this.anchorYUnits_&&(t[1]*=e[1])}if("top-left"!=this.anchorOrigin_){if(!e)return null;t===this.anchor_&&(t=this.anchor_.slice()),("top-right"==this.anchorOrigin_||"bottom-right"==this.anchorOrigin_)&&(t[0]=-t[0]+e[0]),("bottom-left"==this.anchorOrigin_||"bottom-right"==this.anchorOrigin_)&&(t[1]=-t[1]+e[1])}this.normalizedAnchor_=t}let e=this.getDisplacement(),i=this.getScaleArray();return[t[0]-e[0]/i[0],t[1]+e[1]/i[1]]}setAnchor(t){this.anchor_=t,this.normalizedAnchor_=null}getColor(){return this.color_}getImage(t){return this.iconImage_.getImage(t)}getPixelRatio(t){return this.iconImage_.getPixelRatio(t)}getImageSize(){return this.iconImage_.getSize()}getImageState(){return this.iconImage_.getImageState()}getHitDetectionImage(){return this.iconImage_.getHitDetectionImage()}getOrigin(){if(this.origin_)return this.origin_;let t=this.offset_;if("top-left"!=this.offsetOrigin_){let e=this.getSize(),i=this.iconImage_.getSize();if(!e||!i)return null;t=t.slice(),("top-right"==this.offsetOrigin_||"bottom-right"==this.offsetOrigin_)&&(t[0]=i[0]-e[0]-t[0]),("bottom-left"==this.offsetOrigin_||"bottom-right"==this.offsetOrigin_)&&(t[1]=i[1]-e[1]-t[1])}return this.origin_=t,this.origin_}getSrc(){return this.iconImage_.getSrc()}getSize(){return this.size_?this.size_:this.iconImage_.getSize()}getWidth(){let t=this.getScaleArray();return this.size_?this.size_[0]*t[0]:this.iconImage_.getImageState()==n.default.LOADED?this.iconImage_.getSize()[0]*t[0]:void 0}getHeight(){let t=this.getScaleArray();return this.size_?this.size_[1]*t[1]:this.iconImage_.getImageState()==n.default.LOADED?this.iconImage_.getSize()[1]*t[1]:void 0}setScale(t){delete this.initialOptions_,super.setScale(t)}listenImageChange(t){this.iconImage_.addEventListener(s.default.CHANGE,t)}load(){this.iconImage_.load()}unlistenImageChange(t){this.iconImage_.removeEventListener(s.default.CHANGE,t)}ready(){return this.iconImage_.ready()}}e.default=l},48039:function(t,e,i){i.r(e);var n=i(50596),r=i(49179);class o{constructor(t){this.opacity_=t.opacity,this.rotateWithView_=t.rotateWithView,this.rotation_=t.rotation,this.scale_=t.scale,this.scaleArray_=(0,n.Pq)(t.scale),this.displacement_=t.displacement,this.declutterMode_=t.declutterMode}clone(){let t=this.getScale();return new o({opacity:this.getOpacity(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getOpacity(){return this.opacity_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getDisplacement(){return this.displacement_}getDeclutterMode(){return this.declutterMode_}getAnchor(){return(0,r.abstract)()}getImage(t){return(0,r.abstract)()}getHitDetectionImage(){return(0,r.abstract)()}getPixelRatio(t){return 1}getImageState(){return(0,r.abstract)()}getImageSize(){return(0,r.abstract)()}getOrigin(){return(0,r.abstract)()}getSize(){return(0,r.abstract)()}setDisplacement(t){this.displacement_=t}setOpacity(t){this.opacity_=t}setRotateWithView(t){this.rotateWithView_=t}setRotation(t){this.rotation_=t}setScale(t){this.scale_=t,this.scaleArray_=(0,n.Pq)(t)}listenImageChange(t){(0,r.abstract)()}load(){(0,r.abstract)()}unlistenImageChange(t){(0,r.abstract)()}ready(){return Promise.resolve()}}e.default=o},49179:function(t,e,i){function n(){throw Error("Unimplemented abstract method.")}i.r(e),i.d(e,{VERSION:function(){return s},abstract:function(){return n},getUid:function(){return o}});let r=0;function o(t){return t.ol_uid||(t.ol_uid=String(++r))}let s="10.4.0"}}]);
//# sourceMappingURL=3671.117d5f156a1aa1ad.js.map