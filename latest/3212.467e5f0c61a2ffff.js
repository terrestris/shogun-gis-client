"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["3212"],{2022:function(t,e,n){n.d(e,{Jx:function(){return m},Kp:function(){return c},Q9:function(){return l}});var i=n(11256),r=n(73381),s=n(66575),o=n(13002),a=n(64011),u=n(91358);class h extends s.Z{constructor(t,e,n,r){super(),this.extent=t,this.pixelRatio_=n,this.resolution=e,this.state="function"==typeof r?i.default.IDLE:r,this.image_=null,this.loader="function"==typeof r?r:null}changed(){this.dispatchEvent(r.default.CHANGE)}getExtent(){return this.extent}getImage(){return this.image_}getPixelRatio(){return this.pixelRatio_}getResolution(){return this.resolution}getState(){return this.state}load(){if(this.state==i.default.IDLE&&this.loader){this.state=i.default.LOADING,this.changed();let t=this.getResolution(),e=Array.isArray(t)?t[0]:t;(0,a.toPromise)(()=>this.loader(this.getExtent(),e,this.getPixelRatio())).then(t=>{"image"in t&&(this.image_=t.image),"extent"in t&&(this.extent=t.extent),"resolution"in t&&(this.resolution=t.resolution),"pixelRatio"in t&&(this.pixelRatio_=t.pixelRatio),(t instanceof HTMLImageElement||u.CREATE_IMAGE_BITMAP&&t instanceof ImageBitmap||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement)&&(this.image_=t),this.state=i.default.LOADED}).catch(t=>{this.state=i.default.ERROR,console.error(t)}).finally(()=>this.changed())}}setImage(t){this.image_=t}setResolution(t){this.resolution=t}}function c(t,e,n){let i=!0,s=!1,a=!1,h=[(0,o.Vx)(t,r.default.LOAD,function(){a=!0,s||e()})];return t.src&&u.IMAGE_DECODE?(s=!0,t.decode().then(function(){i&&e()}).catch(function(t){i&&(a?e():n())})):h.push((0,o.Vx)(t,r.default.ERROR,n)),function(){i=!1,h.forEach(o.bN)}}function l(t,e){return e&&(t.src=e),new Promise(t.src&&u.IMAGE_DECODE?(e,n)=>t.decode().then(()=>e(t)).catch(i=>t.complete&&t.width?e(t):n(i)):(e,n)=>{function i(){s(),e(t)}function r(){s(),n(Error("Image load error"))}function s(){t.removeEventListener("load",i),t.removeEventListener("error",r)}t.addEventListener("load",i),t.addEventListener("error",r)})}function m(t,e){return e&&(t.src=e),t.src&&u.IMAGE_DECODE&&u.CREATE_IMAGE_BITMAP?t.decode().then(()=>createImageBitmap(t)).catch(e=>{if(t.complete&&t.width)return t;throw e}):l(t)}e.ZP=h},24969:function(t,e,n){var i=n(59900),r=n(86320),s=n(73381),o=n(66575),a=n(49179);class u extends o.Z{constructor(t,e,n){super(),n=n||{},this.tileCoord=t,this.state=e,this.key="",this.transition_=void 0===n.transition?250:n.transition,this.transitionStarts_={},this.interpolate=!!n.interpolate}changed(){this.dispatchEvent(s.default.CHANGE)}release(){this.setState(i.default.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(t){if(this.state!==i.default.EMPTY){if(this.state!==i.default.ERROR&&this.state>t)throw Error("Tile load sequence violation");this.state=t,this.changed()}}load(){(0,a.abstract)()}getAlpha(t,e){if(!this.transition_)return 1;let n=this.transitionStarts_[t];if(n){if(-1===n)return 1}else n=e,this.transitionStarts_[t]=n;let i=e-n+1e3/60;return i>=this.transition_?1:(0,r.easeIn)(i/this.transition_)}inTransition(t){return!!this.transition_&&-1!==this.transitionStarts_[t]}endTransition(t){this.transition_&&(this.transitionStarts_[t]=-1)}disposeInternal(){this.release(),super.disposeInternal()}}e.Z=u},19473:function(t,e,n){n.d(e,{T:function(){return r}});class i{constructor(t,e,n,i){this.minX=t,this.maxX=e,this.minY=n,this.maxY=i}contains(t){return this.containsXY(t[1],t[2])}containsTileRange(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY}containsXY(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY}equals(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY}extend(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY}}function r(t,e,n,r,s){return void 0!==s?(s.minX=t,s.maxX=e,s.minY=n,s.maxY=r,s):new i(t,e,n,r)}e.Z=i},59900:function(t,e,n){n.r(e),e.default={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}},86320:function(t,e,n){function i(t){return Math.pow(t,3)}function r(t){return 1-i(1-t)}function s(t){return 3*t*t-2*t*t*t}function o(t){return t}function a(t){return t<.5?s(2*t):1-s(2*(t-.5))}n.r(e),n.d(e,{easeIn:function(){return i},easeOut:function(){return r},inAndOut:function(){return s},linear:function(){return o},upAndDown:function(){return a}})},13668:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var i=n(68163),r=n(77701),s=n(71534);class o extends r.default{constructor(t){let e=Object.assign({},t=t||{}),n=t.cacheSize;delete t.cacheSize,delete e.preload,delete e.useInterimTilesOnError,super(e),this.on,this.once,this.un,this.cacheSize_=n,this.setPreload(void 0!==t.preload?t.preload:0),this.setUseInterimTilesOnError(void 0===t.useInterimTilesOnError||t.useInterimTilesOnError)}getCacheSize(){return this.cacheSize_}getPreload(){return this.get(s.Z.PRELOAD)}setPreload(t){this.set(s.Z.PRELOAD,t)}getUseInterimTilesOnError(){return this.get(s.Z.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(t){this.set(s.Z.USE_INTERIM_TILES_ON_ERROR,t)}getData(t){return super.getData(t)}}var a=o,u=class extends a{constructor(t){super(t)}createRenderer(){return new i.Z(this,{cacheSize:this.getCacheSize()})}}},50596:function(t,e,n){function i(t){return t[0]>0&&t[1]>0}function r(t,e,n){return void 0===n&&(n=[0,0]),n[0]=t[0]*e+.5|0,n[1]=t[1]*e+.5|0,n}function s(t,e){return Array.isArray(t)?t:(void 0===e?e=[t,t]:(e[0]=t,e[1]=t),e)}n.d(e,{Pq:function(){return s},bA:function(){return r},py:function(){return i}})},70701:function(t,e,n){function i(t,e,n,i){return void 0!==i?(i[0]=t,i[1]=e,i[2]=n,i):[t,e,n]}function r(t,e,n){return t+"/"+e+"/"+n}function s(t){var e,n;return e=t[0],n=t[1],(n<<e)+t[2]}function o(t,e){let n=t[0],i=t[1],r=t[2];if(e.getMinZoom()>n||n>e.getMaxZoom())return!1;let s=e.getFullTileRange(n);return!s||s.containsXY(i,r)}n.d(e,{T9:function(){return i},lg:function(){return r},tE:function(){return o},vp:function(){return s}})},49179:function(t,e,n){function i(){throw Error("Unimplemented abstract method.")}n.r(e),n.d(e,{VERSION:function(){return o},abstract:function(){return i},getUid:function(){return s}});let r=0;function s(t){return t.ol_uid||(t.ol_uid=String(++r))}let o="10.4.0"}}]);
//# sourceMappingURL=3212.467e5f0c61a2ffff.js.map