"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["3952"],{79682:function(t,n,e){function r(t,n,e){let r,u;e=e||i;let o=0,f=t.length,l=!1;for(;o<f;)(u=+e(t[r=o+(f-o>>1)],n))<0?o=r+1:(f=r,l=!u);return l?o:~o}function i(t,n){return t>n?1:t<n?-1:0}function u(t,n){return t<n?1:t>n?-1:0}function o(t,n,e){if(t[0]<=n)return 0;let r=t.length;if(n<=t[r-1])return r-1;if("function"==typeof e){for(let i=1;i<r;++i){let r=t[i];if(r===n)return i;if(r<n){if(e(n,t[i-1],r)>0)return i-1;return i}}return r-1}if(e>0){for(let e=1;e<r;++e)if(t[e]<n)return e-1;return r-1}if(e<0){for(let e=1;e<r;++e)if(t[e]<=n)return e;return r-1}for(let e=1;e<r;++e){if(t[e]==n)return e;if(t[e]<n){if(t[e-1]-n<n-t[e])return e-1;return e}}return r-1}function f(t,n,e){for(;n<e;){let r=t[n];t[n]=t[e],t[e]=r,++n,--e}}function l(t,n){let e=Array.isArray(n)?n:[n],r=e.length;for(let n=0;n<r;n++)t[t.length]=e[n]}function c(t,n){let e=t.length;if(e!==n.length)return!1;for(let r=0;r<e;r++)if(t[r]!==n[r])return!1;return!0}function s(t,n,e){let r=n||i;return t.every(function(n,i){if(0===i)return!0;let u=r(t[i-1],n);return!(u>0||e&&0===u)})}e.d(n,{$1:function(){return u},FZ:function(){return f},fS:function(){return c},h7:function(){return o},j2:function(){return i},l7:function(){return l},pT:function(){return s},ry:function(){return r}})},38906:function(t,n,e){e.d(n,{h:function(){return r}});function r(t,n){if(!t)throw Error(n)}},30197:function(t,n,e){e.d(n,{TG:function(){return u},Zl:function(){return f},uG:function(){return i},wY:function(){return o}});var r=e(21915);function i(t,n,e,i,o){return!(0,r.forEachCorner)(o,function(r){return!u(t,n,e,i,r[0],r[1])})}function u(t,n,e,r,i,u){let o=0,f=t[e-r],l=t[e-r+1];for(;n<e;n+=r){let e=t[n],r=t[n+1];l<=u?r>u&&(e-f)*(u-l)-(i-f)*(r-l)>0&&o++:r<=u&&(e-f)*(u-l)-(i-f)*(r-l)<0&&o--,f=e,l=r}return 0!==o}function o(t,n,e,r,i,o){if(0===e.length||!u(t,n,e[0],r,i,o))return!1;for(let n=1,f=e.length;n<f;++n)if(u(t,e[n-1],e[n],r,i,o))return!1;return!0}function f(t,n,e,r,i,u){if(0===e.length)return!1;for(let f=0,l=e.length;f<l;++f){let l=e[f];if(o(t,n,l,r,i,u))return!0;n=l[l.length-1]}return!1}},60897:function(t,n,e){e.d(n,{AW:function(){return f},Kz:function(){return o},ac:function(){return c},mV:function(){return l},oW:function(){return s}});var r=e(21915),i=e(30197),u=e(95173);function o(t,n,e,i,o,f){return f=f??(0,r.extendFlatCoordinates)((0,r.createEmpty)(),t,n,e,i),!!(0,r.intersects)(o,f)&&(f[0]>=o[0]&&f[2]<=o[2]||f[1]>=o[1]&&f[3]<=o[3]||(0,u.E)(t,n,e,i,function(t,n){return(0,r.intersectsSegment)(o,t,n)}))}function f(t,n,e,r,i){for(let u=0,f=e.length;u<f;++u){if(o(t,n,e[u],r,i))return!0;n=e[u]}return!1}function l(t,n,e,r,u){return!!(o(t,n,e,r,u)||(0,i.TG)(t,n,e,r,u[0],u[1])||(0,i.TG)(t,n,e,r,u[0],u[3])||(0,i.TG)(t,n,e,r,u[2],u[1])||(0,i.TG)(t,n,e,r,u[2],u[3]))}function c(t,n,e,r,u){if(!l(t,n,e[0],r,u))return!1;if(1===e.length)return!0;for(let n=1,f=e.length;n<f;++n)if((0,i.uG)(t,e[n-1],e[n],r,u)&&!o(t,e[n-1],e[n],r,u))return!1;return!0}function s(t,n,e,r,i){for(let u=0,o=e.length;u<o;++u){let o=e[u];if(c(t,n,o,r,i))return!0;n=o[o.length-1]}return!1}},95173:function(t,n,e){e.d(n,{E:function(){return r}});function r(t,n,e,r,i){let u;for(n+=r;n<e;n+=r)if(u=i(t.slice(n-r,n),t.slice(n,n+r)))return u;return!1}},86018:function(t,n,e){e.r(n),e.d(n,{TileGrid:function(){return o.default},WMTS:function(){return l.default},createForExtent:function(){return a},createForProjection:function(){return d},createXYZ:function(){return g},extentFromProjection:function(){return x},getForProjection:function(){return c},wrapX:function(){return s}});var r=e(21915),i=e(5374),u=e(50596),o=e(8930),f=e(10508),l=e(23241);function c(t){let n=t.getDefaultTileGrid();return n||(n=d(t),t.setDefaultTileGrid(n)),n}function s(t,n,e){let i=n[0],u=t.getTileCoordCenter(n),o=x(e);if(!(0,r.containsCoordinate)(o,u)){let n=(0,r.getWidth)(o),e=Math.ceil((o[0]-u[0])/n);return u[0]+=n*e,t.getTileCoordForCoordAndZ(u,i)}return n}function a(t,n,e,i){i=void 0!==i?i:"top-left";let u=h(t,n,e);return new o.default({extent:t,origin:(0,r.getCorner)(t,i),resolutions:u,tileSize:e})}function g(t){let n=t||{},e=n.extent||(0,i.get)("EPSG:3857").getExtent(),r={extent:e,minZoom:n.minZoom,tileSize:n.tileSize,resolutions:h(e,n.maxZoom,n.tileSize,n.maxResolution)};return new o.default(r)}function h(t,n,e,i){n=void 0!==n?n:f.e,e=(0,u.Pq)(void 0!==e?e:f.S);let o=(0,r.getHeight)(t),l=(0,r.getWidth)(t);i=i>0?i:Math.max(l/e[0],o/e[1]);let c=n+1,s=Array(c);for(let t=0;t<c;++t)s[t]=i/Math.pow(2,t);return s}function d(t,n,e,r){return a(x(t),n,e,r)}function x(t){let n=(t=(0,i.get)(t)).getExtent();if(!n){let e=180*i.METERS_PER_UNIT.degrees/t.getMetersPerUnit();n=(0,r.createOrUpdate)(-e,-e,e,e)}return n}},23241:function(t,n,e){e.r(n),e.d(n,{createFromCapabilitiesMatrixSet:function(){return o}});var r=e(5374),i=e(8930);class u extends i.default{constructor(t){super({extent:t.extent,origin:t.origin,origins:t.origins,resolutions:t.resolutions,tileSize:t.tileSize,tileSizes:t.tileSizes,sizes:t.sizes}),this.matrixIds_=t.matrixIds}getMatrixId(t){return this.matrixIds_[t]}getMatrixIds(){return this.matrixIds_}}function o(t,n,e){let i=[],o=[],f=[],l=[],c=[];e=void 0!==e?e:[];let s="TileMatrix",a="Identifier",g="ScaleDenominator",h="TopLeftCorner",d=t.SupportedCRS,x=(0,r.get)(d),p=x.getMetersPerUnit(),S=x.getAxisOrientation().startsWith("ne");return t[s].sort(function(t,n){return n[g]-t[g]}),t[s].forEach(function(n){let r;if(!(e.length>0)||e.find(function(e){return n[a]==e[s]||!n[a].includes(":")&&t[a]+":"+n[a]===e[s]})){o.push(n[a]);let t=28e-5*n[g]/p,e=n.TileWidth,r=n.TileHeight;S?f.push([n[h][1],n[h][0]]):f.push(n[h]),i.push(t),l.push(e==r?e:[e,r]),c.push([n.MatrixWidth,n.MatrixHeight])}}),new u({extent:n,origins:f,resolutions:i,matrixIds:o,tileSizes:l,sizes:c})}n.default=u},10508:function(t,n,e){e.d(n,{S:function(){return i},e:function(){return r}});let r=42,i=256}}]);
//# sourceMappingURL=3952.659a490432169858.js.map