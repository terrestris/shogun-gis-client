"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["5778"],{38906:function(t,n,e){e.d(n,{h:function(){return r}});function r(t,n){if(!t)throw Error(n)}},30197:function(t,n,e){e.d(n,{TG:function(){return u},Zl:function(){return f},uG:function(){return i},wY:function(){return o}});var r=e(21915);function i(t,n,e,i,o){return!(0,r.forEachCorner)(o,function(r){return!u(t,n,e,i,r[0],r[1])})}function u(t,n,e,r,i,u){let o=0,f=t[e-r],s=t[e-r+1];for(;n<e;n+=r){let e=t[n],r=t[n+1];s<=u?r>u&&(e-f)*(u-s)-(i-f)*(r-s)>0&&o++:r<=u&&(e-f)*(u-s)-(i-f)*(r-s)<0&&o--,f=e,s=r}return 0!==o}function o(t,n,e,r,i,o){if(0===e.length||!u(t,n,e[0],r,i,o))return!1;for(let n=1,f=e.length;n<f;++n)if(u(t,e[n-1],e[n],r,i,o))return!1;return!0}function f(t,n,e,r,i,u){if(0===e.length)return!1;for(let f=0,s=e.length;f<s;++f){let s=e[f];if(o(t,n,s,r,i,u))return!0;n=s[s.length-1]}return!1}},60897:function(t,n,e){e.d(n,{AW:function(){return f},Kz:function(){return o},ac:function(){return c},mV:function(){return s},oW:function(){return l}});var r=e(21915),i=e(30197),u=e(95173);function o(t,n,e,i,o,f){return f=f??(0,r.extendFlatCoordinates)((0,r.createEmpty)(),t,n,e,i),!!(0,r.intersects)(o,f)&&(f[0]>=o[0]&&f[2]<=o[2]||f[1]>=o[1]&&f[3]<=o[3]||(0,u.E)(t,n,e,i,function(t,n){return(0,r.intersectsSegment)(o,t,n)}))}function f(t,n,e,r,i){for(let u=0,f=e.length;u<f;++u){if(o(t,n,e[u],r,i))return!0;n=e[u]}return!1}function s(t,n,e,r,u){return!!(o(t,n,e,r,u)||(0,i.TG)(t,n,e,r,u[0],u[1])||(0,i.TG)(t,n,e,r,u[0],u[3])||(0,i.TG)(t,n,e,r,u[2],u[1])||(0,i.TG)(t,n,e,r,u[2],u[3]))}function c(t,n,e,r,u){if(!s(t,n,e[0],r,u))return!1;if(1===e.length)return!0;for(let n=1,f=e.length;n<f;++n)if((0,i.uG)(t,e[n-1],e[n],r,u)&&!o(t,e[n-1],e[n],r,u))return!1;return!0}function l(t,n,e,r,i){for(let u=0,o=e.length;u<o;++u){let o=e[u];if(c(t,n,o,r,i))return!0;n=o[o.length-1]}return!1}},95173:function(t,n,e){e.d(n,{E:function(){return r}});function r(t,n,e,r,i){let u;for(n+=r;n<e;n+=r)if(u=i(t.slice(n-r,n),t.slice(n,n+r)))return u;return!1}},23241:function(t,n,e){e.r(n),e.d(n,{createFromCapabilitiesMatrixSet:function(){return o}});var r=e(5374),i=e(8930);class u extends i.default{constructor(t){super({extent:t.extent,origin:t.origin,origins:t.origins,resolutions:t.resolutions,tileSize:t.tileSize,tileSizes:t.tileSizes,sizes:t.sizes}),this.matrixIds_=t.matrixIds}getMatrixId(t){return this.matrixIds_[t]}getMatrixIds(){return this.matrixIds_}}function o(t,n,e){let i=[],o=[],f=[],s=[],c=[];e=void 0!==e?e:[];let l="TileMatrix",h="Identifier",a="ScaleDenominator",g="TopLeftCorner",d=t.SupportedCRS,x=(0,r.get)(d),p=x.getMetersPerUnit(),S=x.getAxisOrientation().startsWith("ne");return t[l].sort(function(t,n){return n[a]-t[a]}),t[l].forEach(function(n){let r;if(!(e.length>0)||e.find(function(e){return n[h]==e[l]||!n[h].includes(":")&&t[h]+":"+n[h]===e[l]})){o.push(n[h]);let t=28e-5*n[a]/p,e=n.TileWidth,r=n.TileHeight;S?f.push([n[g][1],n[g][0]]):f.push(n[g]),i.push(t),s.push(e==r?e:[e,r]),c.push([n.MatrixWidth,n.MatrixHeight])}}),new u({extent:n,origins:f,resolutions:i,matrixIds:o,tileSizes:s,sizes:c})}n.default=u},10508:function(t,n,e){e.d(n,{S:function(){return i},e:function(){return r}});let r=42,i=256}}]);
//# sourceMappingURL=5778.1034aba72f8154aa.js.map