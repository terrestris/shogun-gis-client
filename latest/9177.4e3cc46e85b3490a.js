"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["9177"],{71405:function(t,e,i){i.r(e);var r=i(58493),n=i(5374);class o extends r.default{constructor(t){super(),this.projection=(0,n.get)(t.projection),this.attributions_=s(t.attributions),this.attributionsCollapsible_=t.attributionsCollapsible??!0,this.loading=!1,this.state_=void 0!==t.state?t.state:"ready",this.wrapX_=void 0!==t.wrapX&&t.wrapX,this.interpolate_=!!t.interpolate,this.viewResolver=null,this.viewRejector=null;let e=this;this.viewPromise_=new Promise(function(t,i){e.viewResolver=t,e.viewRejector=i})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(t){return null}getView(){return this.viewPromise_}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(t){this.attributions_=s(t),this.changed()}setState(t){this.state_=t,this.changed()}}function s(t){return t?"function"==typeof t?t:(Array.isArray(t)||(t=[t]),e=>t):null}e.default=o},51626:function(t,e,i){i.d(e,{s:function(){return h}});var r=i(9520),n=i(50596),o=i(70701),s=i(86018),l=i(49179),u=i(71405);class a extends u.default{constructor(t){super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,projection:t.projection,state:t.state,wrapX:t.wrapX,interpolate:t.interpolate}),this.on,this.once,this.un,this.tilePixelRatio_=void 0!==t.tilePixelRatio?t.tilePixelRatio:1,this.tileGrid=void 0!==t.tileGrid?t.tileGrid:null,this.tileGrid&&(0,n.Pq)(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),[256,256]),this.tmpSize=[0,0],this.key_=t.key||(0,l.getUid)(this),this.tileOptions={transition:t.transition,interpolate:t.interpolate},this.zDirection=t.zDirection?t.zDirection:0}getGutterForProjection(t){return 0}getKey(){return this.key_}setKey(t){this.key_!==t&&(this.key_=t,this.changed())}getResolutions(t){let e=t?this.getTileGridForProjection(t):this.tileGrid;return e?e.getResolutions():null}getTile(t,e,i,r,n){return(0,l.abstract)()}getTileGrid(){return this.tileGrid}getTileGridForProjection(t){return this.tileGrid?this.tileGrid:(0,s.getForProjection)(t)}getTilePixelRatio(t){return this.tilePixelRatio_}getTilePixelSize(t,e,i){let r=this.getTileGridForProjection(i),o=this.getTilePixelRatio(e),s=(0,n.Pq)(r.getTileSize(t),this.tmpSize);return 1==o?s:(0,n.bA)(s,o,this.tmpSize)}getTileCoordForTileUrlFunction(t,e){let i=void 0!==e?e:this.getProjection(),r=void 0!==e?this.getTileGridForProjection(i):this.tileGrid||this.getTileGridForProjection(i);return this.getWrapX()&&i.isGlobal()&&(t=(0,s.wrapX)(r,t,i)),(0,o.tE)(t,r)?t:null}clear(){}refresh(){this.clear(),super.refresh()}}class h extends r.default{constructor(t,e){super(t),this.tile=e}}e.Z=a},86018:function(t,e,i){i.r(e),i.d(e,{TileGrid:function(){return s.default},WMTS:function(){return u.default},createForExtent:function(){return c},createForProjection:function(){return f},createXYZ:function(){return d},extentFromProjection:function(){return p},getForProjection:function(){return a},wrapX:function(){return h}});var r=i(21915),n=i(5374),o=i(50596),s=i(8930),l=i(10508),u=i(23241);function a(t){let e=t.getDefaultTileGrid();return e||(e=f(t),t.setDefaultTileGrid(e)),e}function h(t,e,i){let n=e[0],o=t.getTileCoordCenter(e),s=p(i);if(!(0,r.containsCoordinate)(s,o)){let e=(0,r.getWidth)(s),i=Math.ceil((s[0]-o[0])/e);return o[0]+=e*i,t.getTileCoordForCoordAndZ(o,n)}return e}function c(t,e,i,n){n=void 0!==n?n:"top-left";let o=g(t,e,i);return new s.default({extent:t,origin:(0,r.getCorner)(t,n),resolutions:o,tileSize:i})}function d(t){let e=t||{},i=e.extent||(0,n.get)("EPSG:3857").getExtent(),r={extent:i,minZoom:e.minZoom,tileSize:e.tileSize,resolutions:g(i,e.maxZoom,e.tileSize,e.maxResolution)};return new s.default(r)}function g(t,e,i,n){e=void 0!==e?e:l.e,i=(0,o.Pq)(void 0!==i?i:l.S);let s=(0,r.getHeight)(t),u=(0,r.getWidth)(t);n=n>0?n:Math.max(u/i[0],s/i[1]);let a=e+1,h=Array(a);for(let t=0;t<a;++t)h[t]=n/Math.pow(2,t);return h}function f(t,e,i,r){return c(p(t),e,i,r)}function p(t){let e=(t=(0,n.get)(t)).getExtent();if(!e){let i=180*n.METERS_PER_UNIT.degrees/t.getMetersPerUnit();e=(0,r.createOrUpdate)(-i,-i,i,i)}return e}},23241:function(t,e,i){i.r(e),i.d(e,{createFromCapabilitiesMatrixSet:function(){return s}});var r=i(5374),n=i(8930);class o extends n.default{constructor(t){super({extent:t.extent,origin:t.origin,origins:t.origins,resolutions:t.resolutions,tileSize:t.tileSize,tileSizes:t.tileSizes,sizes:t.sizes}),this.matrixIds_=t.matrixIds}getMatrixId(t){return this.matrixIds_[t]}getMatrixIds(){return this.matrixIds_}}function s(t,e,i){let n=[],s=[],l=[],u=[],a=[];i=void 0!==i?i:[];let h="TileMatrix",c="Identifier",d="ScaleDenominator",g="TopLeftCorner",f=t.SupportedCRS,p=(0,r.get)(f),x=p.getMetersPerUnit(),_=p.getAxisOrientation().startsWith("ne");return t[h].sort(function(t,e){return e[d]-t[d]}),t[h].forEach(function(e){let r;if(!(i.length>0)||i.find(function(i){return e[c]==i[h]||!e[c].includes(":")&&t[c]+":"+e[c]===i[h]})){s.push(e[c]);let t=28e-5*e[d]/x,i=e.TileWidth,r=e.TileHeight;_?l.push([e[g][1],e[g][0]]):l.push(e[g]),n.push(t),u.push(i==r?i:[i,r]),a.push([e.MatrixWidth,e.MatrixHeight])}}),new o({extent:e,origins:l,resolutions:n,matrixIds:s,tileSizes:u,sizes:a})}e.default=o}}]);
//# sourceMappingURL=9177.4e3cc46e85b3490a.js.map