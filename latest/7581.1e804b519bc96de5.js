"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["7581"],{73406:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var i=r("11256"),n=r("6908"),a=r("21915"),s=r("5374"),o=r("82359"),l=r("4722");class g extends l.Z{constructor(e){super(e),this.image=null}getImage(){return this.image?this.image.getImage():null}prepareFrame(e){let t=e.layerStatesArray[e.layerIndex],r=e.pixelRatio,o=e.viewState,l=o.resolution,g=this.getLayer().getSource(),h=e.viewHints,u=e.extent;if(void 0!==t.extent&&(u=(0,a.getIntersection)(u,(0,s.fromUserExtent)(t.extent,o.projection))),!h[n.Z.ANIMATING]&&!h[n.Z.INTERACTING]&&!(0,a.isEmpty)(u)){if(g){let e=o.projection,t=g.getImage(u,l,r,e);t&&(this.loadImage(t)?this.image=t:t.getState()===i.default.EMPTY&&(this.image=null))}else this.image=null}return!!this.image}getData(e){let t=this.frameState;if(!t)return null;let r=this.getLayer(),i=(0,o.nn)(t.pixelToCoordinateTransform,e.slice()),n=r.getExtent();if(n&&!(0,a.containsCoordinate)(n,i))return null;let s=this.image.getExtent(),l=this.image.getImage(),g=(0,a.getWidth)(s),h=Math.floor(l.width*((i[0]-s[0])/g));if(h<0||h>=l.width)return null;let u=(0,a.getHeight)(s),c=Math.floor(l.height*((s[3]-i[1])/u));return c<0||c>=l.height?null:this.getImageData(l,h,c)}renderFrame(e,t){let r=this.image,i=r.getExtent(),n=r.getResolution(),[l,g]=Array.isArray(n)?n:[n,n],h=r.getPixelRatio(),u=e.layerStatesArray[e.layerIndex],c=e.pixelRatio,m=e.viewState,d=m.center,x=m.resolution;this.prepareContainer(e,t);let p=this.context.canvas.width,f=this.context.canvas.height,I=this.getRenderContext(e),y=!1,w=!0;if(u.extent){let t=(0,s.fromUserExtent)(u.extent,m.projection);(y=(w=(0,a.intersects)(t,e.extent))&&!(0,a.containsExtent)(t,e.extent))&&this.clipUnrotated(I,e,t)}let E=r.getImage(),v=(0,o.qC)(this.tempTransform,p/2,f/2,c*l/(x*h),c*g/(x*h),0,h*(i[0]-d[0])/l,h*(d[1]-i[3])/g);this.renderedResolution=g*c/h;let R=E.width*v[0],S=E.height*v[3];if(!this.getLayer().getSource().getInterpolate()&&(I.imageSmoothingEnabled=!1),this.preRender(I,e),w&&R>=.5&&S>=.5){let e=v[4],t=v[5],r=u.opacity;1!==r&&(I.save(),I.globalAlpha=r),I.drawImage(E,0,0,+E.width,+E.height,e,t,R,S),1!==r&&I.restore()}return this.postRender(this.context,e),y&&I.restore(),I.imageSmoothingEnabled=!0,this.container}}var h=r("77701");class u extends h.default{constructor(e){super(e=e||{})}}var c=u,m=class e extends c{constructor(e){super(e)}createRenderer(){return new g(this)}getData(e){return super.getData(e)}}}}]);
//# sourceMappingURL=7581.1e804b519bc96de5.js.map