"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["9970"],{80967:function(t,e){e.Z=class{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}},79682:function(t,e,i){function n(t,e,i){let n,r;i=i||s;let o=0,l=t.length,h=!1;for(;o<l;)(r=+i(t[n=o+(l-o>>1)],e))<0?o=n+1:(l=n,h=!r);return h?o:~o}function s(t,e){return t>e?1:t<e?-1:0}function r(t,e){return t<e?1:t>e?-1:0}function o(t,e,i){if(t[0]<=e)return 0;let n=t.length;if(e<=t[n-1])return n-1;if("function"==typeof i){for(let s=1;s<n;++s){let n=t[s];if(n===e)return s;if(n<e){if(i(e,t[s-1],n)>0)return s-1;return s}}return n-1}if(i>0){for(let i=1;i<n;++i)if(t[i]<e)return i-1;return n-1}if(i<0){for(let i=1;i<n;++i)if(t[i]<=e)return i;return n-1}for(let i=1;i<n;++i){if(t[i]==e)return i;if(t[i]<e){if(t[i-1]-e<e-t[i])return i-1;return i}}return n-1}function l(t,e,i){for(;e<i;){let n=t[e];t[e]=t[i],t[i]=n,++e,--i}}function h(t,e){let i=Array.isArray(e)?e:[e],n=i.length;for(let e=0;e<n;e++)t[t.length]=i[e]}function a(t,e){let i=t.length;if(i!==e.length)return!1;for(let n=0;n<i;n++)if(t[n]!==e[n])return!1;return!0}function u(t,e,i){let n=e||s;return t.every(function(e,s){if(0===s)return!0;let r=n(t[s-1],e);return!(r>0||i&&0===r)})}i.d(e,{$1:function(){return r},FZ:function(){return l},fS:function(){return a},h7:function(){return o},j2:function(){return s},l7:function(){return h},pT:function(){return u},ry:function(){return n}})},9520:function(t,e,i){function n(t){t.stopPropagation()}function s(t){t.preventDefault()}i.r(e),i.d(e,{preventDefault:function(){return s},stopPropagation:function(){return n}}),e.default=class{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}},73381:function(t,e,i){i.r(e),e.default={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"}},66575:function(t,e,i){var n=i(80967),s=i(64011),r=i(13580),o=i(9520);class l extends n.Z{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,e){if(!t||!e)return;let i=this.listeners_||(this.listeners_={}),n=i[t]||(i[t]=[]);n.includes(e)||n.push(e)}dispatchEvent(t){let e;let i="string"==typeof t,n=i?t:t.type,r=this.listeners_&&this.listeners_[n];if(!r)return;let l=i?new o.default(t):t;l.target||(l.target=this.eventTarget_||this);let h=this.dispatching_||(this.dispatching_={}),a=this.pendingRemovals_||(this.pendingRemovals_={});n in h||(h[n]=0,a[n]=0),++h[n];for(let t=0,i=r.length;t<i;++t)if(!1===(e="handleEvent"in r[t]?r[t].handleEvent(l):r[t].call(this,l))||l.propagationStopped){e=!1;break}if(0==--h[n]){let t=a[n];for(delete a[n];t--;)this.removeEventListener(n,s.VOID);delete h[n]}return e}disposeInternal(){this.listeners_&&(0,r.Z)(this.listeners_)}getListeners(t){return this.listeners_&&this.listeners_[t]||void 0}hasListener(t){return!!this.listeners_&&(t?t in this.listeners_:Object.keys(this.listeners_).length>0)}removeEventListener(t,e){if(!this.listeners_)return;let i=this.listeners_[t];if(!i)return;let n=i.indexOf(e);-1!==n&&(this.pendingRemovals_&&t in this.pendingRemovals_?(i[n]=s.VOID,++this.pendingRemovals_[t]):(i.splice(n,1),0===i.length&&delete this.listeners_[t]))}}e.Z=l},64011:function(t,e,i){i.r(e),i.d(e,{FALSE:function(){return r},TRUE:function(){return s},VOID:function(){return o},memoizeOne:function(){return l},toPromise:function(){return h}});var n=i(79682);function s(){return!0}function r(){return!1}function o(){}function l(t){let e,i,s;return function(){let r=Array.prototype.slice.call(arguments);return i&&this===s&&(0,n.fS)(r,i)||(s=this,i=r,e=t.apply(this,arguments)),e}}function h(t){return function(){let e;try{e=t()}catch(t){return Promise.reject(t)}return e instanceof Promise?e:Promise.resolve(e)}()}},52329:function(t,e,i){i.r(e);var n=i(79682),s=i(21915),r=i(21882),o=i(52043),l=i(32538),h=i(38667),a=i(86204);class u extends l.ZP{constructor(t,e){super(),e&&!Array.isArray(t[0])?this.setFlatCoordinates(e,t):this.setCoordinates(t,e)}appendPoint(t){(0,n.l7)(this.flatCoordinates,t.getFlatCoordinates()),this.changed()}clone(){let t=new u(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,i,n){if(n<(0,s.closestSquaredDistanceXY)(this.getExtent(),t,e))return n;let o=this.flatCoordinates,l=this.stride;for(let s=0,h=o.length;s<h;s+=l){let h=(0,r.bI)(t,e,o[s],o[s+1]);if(h<n){n=h;for(let t=0;t<l;++t)i[t]=o[s+t];i.length=l}}return n}getCoordinates(){return(0,a.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getPoint(t){let e=this.flatCoordinates.length/this.stride;return t<0||e<=t?null:new o.default(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)}getPoints(){let t=this.flatCoordinates,e=this.layout,i=this.stride,n=[];for(let s=0,r=t.length;s<r;s+=i){let r=new o.default(t.slice(s,s+i),e);n.push(r)}return n}getType(){return"MultiPoint"}intersectsExtent(t){let e=this.flatCoordinates,i=this.stride;for(let n=0,r=e.length;n<r;n+=i){let i=e[n],r=e[n+1];if((0,s.containsXY)(t,i,r))return!0}return!1}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,h.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()}}e.default=u},13987:function(t,e,i){i.r(e);var n=i(79682),s=i(21915),r=i(52329),o=i(15265),l=i(32538),h=i(32562),a=i(92526),u=i(83729),d=i(30197),f=i(38667),c=i(86204),g=i(38529),_=i(60897),p=i(89310),C=i(62418);class v extends l.ZP{constructor(t,e,i){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!i&&!Array.isArray(t[0])){let s=t,r=[],o=[];for(let t=0,e=s.length;t<e;++t){let e=s[t],i=r.length,l=e.getEnds();for(let t=0,e=l.length;t<e;++t)l[t]+=i;(0,n.l7)(r,e.getFlatCoordinates()),o.push(l)}e=0===s.length?this.getLayout():s[0].getLayout(),t=r,i=o}void 0!==e&&i?(this.setFlatCoordinates(e,t),this.endss_=i):this.setCoordinates(t,e)}appendPolygon(t){let e;if(this.flatCoordinates){let i=this.flatCoordinates.length;(0,n.l7)(this.flatCoordinates,t.getFlatCoordinates()),e=t.getEnds().slice();for(let t=0,n=e.length;t<n;++t)e[t]+=i}else this.flatCoordinates=t.getFlatCoordinates().slice(),e=t.getEnds().slice(),this.endss_.push();this.endss_.push(e),this.changed()}clone(){let t=this.endss_.length,e=Array(t);for(let i=0;i<t;++i)e[i]=this.endss_[i].slice();let i=new v(this.flatCoordinates.slice(),this.layout,e);return i.applyProperties(this),i}closestPointXY(t,e,i,n){return n<(0,s.closestSquaredDistanceXY)(this.getExtent(),t,e)?n:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,u.sD)(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,u.gI)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,e,i,n))}containsXY(t,e){return(0,d.Zl)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)}getArea(){return(0,h.Eu)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(t){let e;return void 0!==t?(e=this.getOrientedFlatCoordinates().slice(),(0,p.dL)(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,(0,c.ug)(e,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){let t=(0,a.E)(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=(0,g.U)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new r.default(this.getFlatInteriorPoints().slice(),"XYM")}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){let t=this.flatCoordinates;(0,p.Oj)(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=(0,p.dL)(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){let e=[],i=[];return e.length=(0,C.Pp)(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),e,0,i),new v(e,"XY",i)}getPolygon(t){let e;if(t<0||this.endss_.length<=t)return null;if(0===t)e=0;else{let i=this.endss_[t-1];e=i[i.length-1]}let i=this.endss_[t].slice(),n=i[i.length-1];if(0!==e)for(let t=0,n=i.length;t<n;++t)i[t]-=e;return new o.default(this.flatCoordinates.slice(e,n),this.layout,i)}getPolygons(){let t=this.layout,e=this.flatCoordinates,i=this.endss_,n=[],s=0;for(let r=0,l=i.length;r<l;++r){let l=i[r].slice(),h=l[l.length-1];if(0!==s)for(let t=0,e=l.length;t<e;++t)l[t]-=s;let a=new o.default(e.slice(s,h),t,l);n.push(a),s=h}return n}getType(){return"MultiPolygon"}intersectsExtent(t){return(0,_.oW)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);let i=(0,f.QT)(this.flatCoordinates,0,t,this.stride,this.endss_);if(0===i.length)this.flatCoordinates.length=0;else{let t=i[i.length-1];this.flatCoordinates.length=0===t.length?0:t[t.length-1]}this.changed()}}e.default=v},92526:function(t,e,i){i.d(e,{E:function(){return s}});var n=i(21915);function s(t,e,i,s){let r=[],o=(0,n.createEmpty)();for(let l=0,h=i.length;l<h;++l){let h=i[l];o=(0,n.createOrUpdateFromFlatCoordinates)(t,e,h[0],s),r.push((o[0]+o[2])/2,(o[1]+o[3])/2),e=h[h.length-1]}return r}},13580:function(t,e,i){function n(t){for(let e in t)delete t[e]}function s(t){let e;for(e in t)return!1;return!e}i.d(e,{Z:function(){return n},x:function(){return s}})},49179:function(t,e,i){function n(){throw Error("Unimplemented abstract method.")}i.r(e),i.d(e,{VERSION:function(){return o},abstract:function(){return n},getUid:function(){return r}});let s=0;function r(t){return t.ol_uid||(t.ol_uid=String(++s))}let o="10.4.0"}}]);
//# sourceMappingURL=9970.07881baaef8b58f3.js.map