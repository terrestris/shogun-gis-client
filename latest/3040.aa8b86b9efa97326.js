"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["3040"],{13002:function(t,n,r){r.d(n,{Vx:function(){return u},bN:function(){return i},oL:function(){return o}});var e=r(13580);function o(t,n,r,e,o){if(o){let o=r;r=function(u){return t.removeEventListener(n,r),o.call(e??this,u)}}else e&&e!==t&&(r=r.bind(e));let u={target:t,type:n,listener:r};return t.addEventListener(n,r),u}function u(t,n,r,e){return o(t,n,r,e,!0)}function i(t){t&&t.target&&(t.target.removeEventListener(t.type,t.listener),(0,e.Z)(t))}},21882:function(t,n,r){function e(t,n,r){return Math.min(Math.max(t,n),r)}function o(t,n,r,e,o,i){let l=o-r,c=i-e;if(0!==l||0!==c){let u=((t-r)*l+(n-e)*c)/(l*l+c*c);u>1?(r=o,e=i):u>0&&(r+=l*u,e+=c*u)}return u(t,n,r,e)}function u(t,n,r,e){let o=r-t,u=e-n;return o*o+u*u}function i(t){let n=t.length;for(let r=0;r<n;r++){let e=r,o=Math.abs(t[r][r]);for(let u=r+1;u<n;u++){let n=Math.abs(t[u][r]);n>o&&(o=n,e=u)}if(0===o)return null;let u=t[e];t[e]=t[r],t[r]=u;for(let e=r+1;e<n;e++){let o=-t[e][r]/t[r][r];for(let u=r;u<n+1;u++)r==u?t[e][u]=0:t[e][u]+=o*t[r][u]}}let r=Array(n);for(let e=n-1;e>=0;e--){r[e]=t[e][n]/t[e][e];for(let o=e-1;o>=0;o--)t[o][n]-=t[o][e]*r[e]}return r}function l(t){return 180*t/Math.PI}function c(t){return t*Math.PI/180}function f(t,n){let r=t%n;return r*n<0?r+n:r}function a(t,n,r){return t+r*(n-t)}function s(t,n){let r=Math.pow(10,n);return Math.round(t*r)/r}function h(t,n){return Math.round(s(t,n))}function g(t,n){return Math.floor(s(t,n))}function d(t,n){return Math.ceil(s(t,n))}function _(t,n,r){if(t>=n&&t<r)return t;let e=r-n;return((t-n)%e+e)%e+n}r.d(n,{$W:function(){return f},FH:function(){return s},GW:function(){return g},NM:function(){return h},SV:function(){return i},Ux:function(){return l},Yr:function(){return c},bI:function(){return u},mD:function(){return d},rU:function(){return o},re:function(){return _},t7:function(){return a},uZ:function(){return e}})},98185:function(t,n,r){r.r(n);var e=r(11256),o=r(14419),u=r(49179),i=r(97889);class l{constructor(t){t=t||{},this.patternImage_=null,this.color_=null,void 0!==t.color&&this.setColor(t.color)}clone(){let t=this.getColor();return new l({color:Array.isArray(t)?t.slice():t||void 0})}getColor(){return this.color_}setColor(t){if(null!==t&&"object"==typeof t&&"src"in t){let n=(0,i.U)(null,t.src,"anonymous",void 0,t.offset?null:t.color?t.color:null,!(t.offset&&t.size));n.ready().then(()=>{this.patternImage_=null}),n.getImageState()===e.default.IDLE&&n.load(),n.getImageState()===e.default.LOADING&&(this.patternImage_=n)}this.color_=t}getKey(){let t=this.getColor();return t?t instanceof CanvasPattern||t instanceof CanvasGradient?(0,u.getUid)(t):"object"==typeof t&&"src"in t?t.src+":"+t.offset:(0,o._2)(t).toString():""}loading(){return!!this.patternImage_}ready(){return this.patternImage_?this.patternImage_.ready():Promise.resolve()}}n.default=l},49179:function(t,n,r){function e(){throw Error("Unimplemented abstract method.")}r.r(n),r.d(n,{VERSION:function(){return i},abstract:function(){return e},getUid:function(){return u}});let o=0;function u(t){return t.ol_uid||(t.ol_uid=String(++o))}let i="10.4.0"}}]);
//# sourceMappingURL=3040.aa8b86b9efa97326.js.map