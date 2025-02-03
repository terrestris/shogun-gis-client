"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["975"],{80567:function(t,e,i){var s=i(79682),n=i(45120),l=i(34178),o=i(21915),r=i(86204),h=i(64889),a=i(68509),u=i(68186);class d extends h.Z{constructor(t,e,i,s){super(),this.tolerance=t,this.maxExtent=e,this.pixelRatio=s,this.maxLineWidth=0,this.resolution=i,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_=null,this.bufferedMaxExtent_=null,this.instructions=[],this.coordinates=[],this.tmpCoordinate_=[],this.hitDetectionInstructions=[],this.state={}}applyPixelRatio(t){let e=this.pixelRatio;return 1==e?t:t.map(function(t){return t*e})}appendFlatPointCoordinates(t,e){let i=this.getBufferedMaxExtent(),s=this.tmpCoordinate_,n=this.coordinates,l=n.length;for(let r=0,h=t.length;r<h;r+=e)s[0]=t[r],s[1]=t[r+1],(0,o.containsCoordinate)(i,s)&&(n[l++]=s[0],n[l++]=s[1]);return l}appendFlatLineCoordinates(t,e,i,s,n,r){let h,a,u;let d=this.coordinates,c=d.length,g=this.getBufferedMaxExtent();r&&(e+=s);let f=t[e],_=t[e+1],x=this.tmpCoordinate_,p=!0;for(h=e+s;h<i;h+=s)x[0]=t[h],x[1]=t[h+1],(u=(0,o.coordinateRelationship)(g,x))!==a?(p&&(d[c++]=f,d[c++]=_,p=!1),d[c++]=x[0],d[c++]=x[1]):u===l.Z.INTERSECTING?(d[c++]=x[0],d[c++]=x[1],p=!1):p=!0,f=x[0],_=x[1],a=u;return(n&&p||h===e+s)&&(d[c++]=f,d[c++]=_),c}drawCustomCoordinates_(t,e,i,s,n){for(let l=0,o=i.length;l<o;++l){let o=i[l],r=this.appendFlatLineCoordinates(t,e,o,s,!1,!1);n.push(r),e=o}return e}drawCustom(t,e,i,s,n){let l,o,h,a,d;this.beginGeometry(t,e,n);let c=t.getType(),g=t.getStride(),f=this.coordinates.length;switch(c){case"MultiPolygon":l=t.getOrientedFlatCoordinates(),a=[];let _=t.getEndss();d=0;for(let t=0,e=_.length;t<e;++t){let e=[];d=this.drawCustomCoordinates_(l,d,_[t],g,e),a.push(e)}this.instructions.push([u.ZP.CUSTOM,f,a,t,i,r.ug,n]),this.hitDetectionInstructions.push([u.ZP.CUSTOM,f,a,t,s||i,r.ug,n]);break;case"Polygon":case"MultiLineString":h=[],l="Polygon"==c?t.getOrientedFlatCoordinates():t.getFlatCoordinates(),d=this.drawCustomCoordinates_(l,0,t.getEnds(),g,h),this.instructions.push([u.ZP.CUSTOM,f,h,t,i,r.o1,n]),this.hitDetectionInstructions.push([u.ZP.CUSTOM,f,h,t,s||i,r.o1,n]);break;case"LineString":case"Circle":l=t.getFlatCoordinates(),o=this.appendFlatLineCoordinates(l,0,l.length,g,!1,!1),this.instructions.push([u.ZP.CUSTOM,f,o,t,i,r.Ml,n]),this.hitDetectionInstructions.push([u.ZP.CUSTOM,f,o,t,s||i,r.Ml,n]);break;case"MultiPoint":l=t.getFlatCoordinates(),(o=this.appendFlatPointCoordinates(l,g))>f&&(this.instructions.push([u.ZP.CUSTOM,f,o,t,i,r.Ml,n]),this.hitDetectionInstructions.push([u.ZP.CUSTOM,f,o,t,s||i,r.Ml,n]));break;case"Point":l=t.getFlatCoordinates(),this.coordinates.push(l[0],l[1]),o=this.coordinates.length,this.instructions.push([u.ZP.CUSTOM,f,o,t,i,void 0,n]),this.hitDetectionInstructions.push([u.ZP.CUSTOM,f,o,t,s||i,void 0,n])}this.endGeometry(e)}beginGeometry(t,e,i){this.beginGeometryInstruction1_=[u.ZP.BEGIN_GEOMETRY,e,0,t,i],this.instructions.push(this.beginGeometryInstruction1_),this.beginGeometryInstruction2_=[u.ZP.BEGIN_GEOMETRY,e,0,t,i],this.hitDetectionInstructions.push(this.beginGeometryInstruction2_)}finish(){return{instructions:this.instructions,hitDetectionInstructions:this.hitDetectionInstructions,coordinates:this.coordinates}}reverseHitDetectionInstructions(){let t,e,i;let n=this.hitDetectionInstructions;n.reverse();let l=n.length,o=-1;for(t=0;t<l;++t)(i=(e=n[t])[0])==u.ZP.END_GEOMETRY?o=t:i==u.ZP.BEGIN_GEOMETRY&&(e[2]=t,(0,s.FZ)(this.hitDetectionInstructions,o,t),o=-1)}fillStyleToState(t,e={}){if(t){let i=t.getColor();e.fillPatternScale=i&&"object"==typeof i&&"src"in i?this.pixelRatio:1,e.fillStyle=(0,n.y)(i||a.defaultFillStyle)}else e.fillStyle=void 0;return e}strokeStyleToState(t,e={}){if(t){let i=t.getColor();e.strokeStyle=(0,n.y)(i||a.defaultStrokeStyle);let s=t.getLineCap();e.lineCap=void 0!==s?s:a.defaultLineCap;let l=t.getLineDash();e.lineDash=l?l.slice():a.defaultLineDash;let o=t.getLineDashOffset();e.lineDashOffset=o||a.defaultLineDashOffset;let r=t.getLineJoin();e.lineJoin=void 0!==r?r:a.defaultLineJoin;let h=t.getWidth();e.lineWidth=void 0!==h?h:a.defaultLineWidth;let u=t.getMiterLimit();e.miterLimit=void 0!==u?u:a.defaultMiterLimit,e.lineWidth>this.maxLineWidth&&(this.maxLineWidth=e.lineWidth,this.bufferedMaxExtent_=null)}else e.strokeStyle=void 0,e.lineCap=void 0,e.lineDash=null,e.lineDashOffset=void 0,e.lineJoin=void 0,e.lineWidth=void 0,e.miterLimit=void 0;return e}setFillStrokeStyle(t,e){let i=this.state;this.fillStyleToState(t,i),this.strokeStyleToState(e,i)}createFill(t){let e=t.fillStyle,i=[u.ZP.SET_FILL_STYLE,e];return"string"!=typeof e&&i.push(t.fillPatternScale),i}applyStroke(t){this.instructions.push(this.createStroke(t))}createStroke(t){return[u.ZP.SET_STROKE_STYLE,t.strokeStyle,t.lineWidth*this.pixelRatio,t.lineCap,t.lineJoin,t.miterLimit,t.lineDash?this.applyPixelRatio(t.lineDash):null,t.lineDashOffset*this.pixelRatio]}updateFillStyle(t,e){let i=t.fillStyle;("string"!=typeof i||t.currentFillStyle!=i)&&(void 0!==i&&this.instructions.push(e.call(this,t)),t.currentFillStyle=i)}updateStrokeStyle(t,e){let i=t.strokeStyle,n=t.lineCap,l=t.lineDash,o=t.lineDashOffset,r=t.lineJoin,h=t.lineWidth,a=t.miterLimit;(t.currentStrokeStyle!=i||t.currentLineCap!=n||l!=t.currentLineDash&&!(0,s.fS)(t.currentLineDash,l)||t.currentLineDashOffset!=o||t.currentLineJoin!=r||t.currentLineWidth!=h||t.currentMiterLimit!=a)&&(void 0!==i&&e.call(this,t),t.currentStrokeStyle=i,t.currentLineCap=n,t.currentLineDash=l,t.currentLineDashOffset=o,t.currentLineJoin=r,t.currentLineWidth=h,t.currentMiterLimit=a)}endGeometry(t){this.beginGeometryInstruction1_[2]=this.instructions.length,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_[2]=this.hitDetectionInstructions.length,this.beginGeometryInstruction2_=null;let e=[u.ZP.END_GEOMETRY,t];this.instructions.push(e),this.hitDetectionInstructions.push(e)}getBufferedMaxExtent(){if(!this.bufferedMaxExtent_&&(this.bufferedMaxExtent_=(0,o.clone)(this.maxExtent),this.maxLineWidth>0)){let t=this.resolution*(this.maxLineWidth+1)/2;(0,o.buffer)(this.bufferedMaxExtent_,t,this.bufferedMaxExtent_)}return this.bufferedMaxExtent_}}e.Z=d},82928:function(t,e,i){i.d(e,{Z:function(){return g}});var s=i("80567"),n=i("21915"),l=i("68186");class o extends s.Z{constructor(t,e,i,s){super(t,e,i,s),this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.anchorX_=void 0,this.anchorY_=void 0,this.height_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.scale_=void 0,this.width_=void 0,this.declutterMode_=void 0,this.declutterImageWithText_=void 0}drawPoint(t,e,i){if(!this.image_||this.maxExtent&&!(0,n.containsCoordinate)(this.maxExtent,t.getFlatCoordinates()))return;this.beginGeometry(t,e,i);let s=t.getFlatCoordinates(),o=t.getStride(),r=this.coordinates.length,h=this.appendFlatPointCoordinates(s,o);this.instructions.push([l.ZP.DRAW_IMAGE,r,h,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([l.ZP.DRAW_IMAGE,r,h,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(e)}drawMultiPoint(t,e,i){if(!this.image_)return;this.beginGeometry(t,e,i);let s=t.getFlatCoordinates(),o=[];for(let e=0,i=s.length;e<i;e+=t.getStride())(!this.maxExtent||(0,n.containsCoordinate)(this.maxExtent,s.slice(e,e+2)))&&o.push(s[e],s[e+1]);let r=this.coordinates.length,h=this.appendFlatPointCoordinates(o,2);this.instructions.push([l.ZP.DRAW_IMAGE,r,h,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([l.ZP.DRAW_IMAGE,r,h,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(e)}finish(){return this.reverseHitDetectionInstructions(),this.anchorX_=void 0,this.anchorY_=void 0,this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.height_=void 0,this.scale_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.width_=void 0,super.finish()}setImageStyle(t,e){let i=t.getAnchor(),s=t.getSize(),n=t.getOrigin();this.imagePixelRatio_=t.getPixelRatio(this.pixelRatio),this.anchorX_=i[0],this.anchorY_=i[1],this.hitDetectionImage_=t.getHitDetectionImage(),this.image_=t.getImage(this.pixelRatio),this.height_=s[1],this.opacity_=t.getOpacity(),this.originX_=n[0],this.originY_=n[1],this.rotateWithView_=t.getRotateWithView(),this.rotation_=t.getRotation(),this.scale_=t.getScaleArray(),this.width_=s[0],this.declutterMode_=t.getDeclutterMode(),this.declutterImageWithText_=e}}var r=i("68509");class h extends s.Z{constructor(t,e,i,s){super(t,e,i,s)}drawFlatCoordinates_(t,e,i,s){let n=this.coordinates.length,o=this.appendFlatLineCoordinates(t,e,i,s,!1,!1),r=[l.ZP.MOVE_TO_LINE_TO,n,o];return this.instructions.push(r),this.hitDetectionInstructions.push(r),i}drawLineString(t,e,i){let s=this.state,n=s.strokeStyle,o=s.lineWidth;if(void 0===n||void 0===o)return;this.updateStrokeStyle(s,this.applyStroke),this.beginGeometry(t,e,i),this.hitDetectionInstructions.push([l.ZP.SET_STROKE_STYLE,s.strokeStyle,s.lineWidth,s.lineCap,s.lineJoin,s.miterLimit,r.defaultLineDash,r.defaultLineDashOffset],l.$O);let h=t.getFlatCoordinates(),a=t.getStride();this.drawFlatCoordinates_(h,0,h.length,a),this.hitDetectionInstructions.push(l.Yc),this.endGeometry(e)}drawMultiLineString(t,e,i){let s=this.state,n=s.strokeStyle,o=s.lineWidth;if(void 0===n||void 0===o)return;this.updateStrokeStyle(s,this.applyStroke),this.beginGeometry(t,e,i),this.hitDetectionInstructions.push([l.ZP.SET_STROKE_STYLE,s.strokeStyle,s.lineWidth,s.lineCap,s.lineJoin,s.miterLimit,r.defaultLineDash,r.defaultLineDashOffset],l.$O);let h=t.getEnds(),a=t.getFlatCoordinates(),u=t.getStride(),d=0;for(let t=0,e=h.length;t<e;++t)d=this.drawFlatCoordinates_(a,d,h[t],u);this.hitDetectionInstructions.push(l.Yc),this.endGeometry(e)}finish(){let t=this.state;return void 0!=t.lastStroke&&t.lastStroke!=this.coordinates.length&&this.instructions.push(l.Yc),this.reverseHitDetectionInstructions(),this.state=null,super.finish()}applyStroke(t){void 0!=t.lastStroke&&t.lastStroke!=this.coordinates.length&&(this.instructions.push(l.Yc),t.lastStroke=this.coordinates.length),t.lastStroke=0,super.applyStroke(t),this.instructions.push(l.$O)}}var a=i("62418");class u extends s.Z{constructor(t,e,i,s){super(t,e,i,s)}drawFlatCoordinatess_(t,e,i,s){let n=this.state,o=void 0!==n.fillStyle,r=void 0!==n.strokeStyle,h=i.length;this.instructions.push(l.$O),this.hitDetectionInstructions.push(l.$O);for(let n=0;n<h;++n){let o=i[n],h=this.coordinates.length,a=this.appendFlatLineCoordinates(t,e,o,s,!0,!r),u=[l.ZP.MOVE_TO_LINE_TO,h,a];this.instructions.push(u),this.hitDetectionInstructions.push(u),r&&(this.instructions.push(l.s3),this.hitDetectionInstructions.push(l.s3)),e=o}return o&&(this.instructions.push(l.gO),this.hitDetectionInstructions.push(l.gO)),r&&(this.instructions.push(l.Yc),this.hitDetectionInstructions.push(l.Yc)),e}drawCircle(t,e,i){let s=this.state,n=s.fillStyle,o=s.strokeStyle;if(void 0===n&&void 0===o)return;this.setFillStrokeStyles_(),this.beginGeometry(t,e,i),void 0!==s.fillStyle&&this.hitDetectionInstructions.push([l.ZP.SET_FILL_STYLE,r.defaultFillStyle]),void 0!==s.strokeStyle&&this.hitDetectionInstructions.push([l.ZP.SET_STROKE_STYLE,s.strokeStyle,s.lineWidth,s.lineCap,s.lineJoin,s.miterLimit,r.defaultLineDash,r.defaultLineDashOffset]);let h=t.getFlatCoordinates(),a=t.getStride(),u=this.coordinates.length;this.appendFlatLineCoordinates(h,0,h.length,a,!1,!1);let d=[l.ZP.CIRCLE,u];this.instructions.push(l.$O,d),this.hitDetectionInstructions.push(l.$O,d),void 0!==s.fillStyle&&(this.instructions.push(l.gO),this.hitDetectionInstructions.push(l.gO)),void 0!==s.strokeStyle&&(this.instructions.push(l.Yc),this.hitDetectionInstructions.push(l.Yc)),this.endGeometry(e)}drawPolygon(t,e,i){let s=this.state,n=s.fillStyle,o=s.strokeStyle;if(void 0===n&&void 0===o)return;this.setFillStrokeStyles_(),this.beginGeometry(t,e,i),void 0!==s.fillStyle&&this.hitDetectionInstructions.push([l.ZP.SET_FILL_STYLE,r.defaultFillStyle]),void 0!==s.strokeStyle&&this.hitDetectionInstructions.push([l.ZP.SET_STROKE_STYLE,s.strokeStyle,s.lineWidth,s.lineCap,s.lineJoin,s.miterLimit,r.defaultLineDash,r.defaultLineDashOffset]);let h=t.getEnds(),a=t.getOrientedFlatCoordinates(),u=t.getStride();this.drawFlatCoordinatess_(a,0,h,u),this.endGeometry(e)}drawMultiPolygon(t,e,i){let s=this.state,n=s.fillStyle,o=s.strokeStyle;if(void 0===n&&void 0===o)return;this.setFillStrokeStyles_(),this.beginGeometry(t,e,i),void 0!==s.fillStyle&&this.hitDetectionInstructions.push([l.ZP.SET_FILL_STYLE,r.defaultFillStyle]),void 0!==s.strokeStyle&&this.hitDetectionInstructions.push([l.ZP.SET_STROKE_STYLE,s.strokeStyle,s.lineWidth,s.lineCap,s.lineJoin,s.miterLimit,r.defaultLineDash,r.defaultLineDashOffset]);let h=t.getEndss(),a=t.getOrientedFlatCoordinates(),u=t.getStride(),d=0;for(let t=0,e=h.length;t<e;++t)d=this.drawFlatCoordinatess_(a,d,h[t],u);this.endGeometry(e)}finish(){this.reverseHitDetectionInstructions(),this.state=null;let t=this.tolerance;if(0!==t){let e=this.coordinates;for(let i=0,s=e.length;i<s;++i)e[i]=(0,a.uZ)(e[i],t)}return super.finish()}setFillStrokeStyles_(){let t=this.state;void 0!==t.fillStyle&&this.updateFillStyle(t,this.createFill),void 0!==t.strokeStyle&&this.updateStrokeStyle(t,this.applyStroke)}}var d=i("10244");let c={Circle:u,Default:s.Z,Image:o,LineString:h,Polygon:u,Text:d.Z};var g=class t{constructor(t,e,i,s){this.tolerance_=t,this.maxExtent_=e,this.pixelRatio_=s,this.resolution_=i,this.buildersByZIndex_={}}finish(){let t={};for(let e in this.buildersByZIndex_){t[e]=t[e]||{};let i=this.buildersByZIndex_[e];for(let s in i){let n=i[s].finish();t[e][s]=n}}return t}getBuilder(t,e){let i=void 0!==t?t.toString():"0",s=this.buildersByZIndex_[i];void 0===s&&(s={},this.buildersByZIndex_[i]=s);let n=s[e];return void 0===n&&(n=new c[e](this.tolerance_,this.maxExtent_,this.resolution_,this.pixelRatio_),s[e]=n),n}}},82777:function(t,e,i){i.d(e,{QN:function(){return L},ZP:function(){return P},eV:function(){return E},o5:function(){return k}});var s=i("79682"),n=i("85386"),l=i("21915"),o=i("17882"),r=i("13580"),h=i("82359"),a=i("4027"),u=i("21882"),d=i("33162"),c=i("68509"),g=i("68186"),f=i("10244");let _=(0,l.createEmpty)(),x=[],p=[],S=[],y=[];function m(t){return t[3].declutterBox}let I=RegExp("["+String.fromCharCode(1425)+"-"+String.fromCharCode(2303)+String.fromCharCode(64285)+"-"+String.fromCharCode(65023)+String.fromCharCode(65136)+"-"+String.fromCharCode(65276)+String.fromCharCode(67584)+"-"+String.fromCharCode(69631)+String.fromCharCode(124928)+"-"+String.fromCharCode(126975)+"]");function C(t,e){return"start"===e?e=I.test(t)?"right":"left":"end"===e&&(e=I.test(t)?"left":"right"),f.I[e]}function v(t,e,i){return i>0&&t.push("\n",""),t.push(e,""),t}var T=class t{constructor(t,e,i,s,n){this.overlaps=i,this.pixelRatio=e,this.resolution=t,this.alignAndScaleFill_,this.instructions=s.instructions,this.coordinates=s.coordinates,this.coordinateCache_={},this.renderedTransform_=(0,h.Ue)(),this.hitDetectionInstructions=s.hitDetectionInstructions,this.pixelCoordinates_=null,this.viewRotation_=0,this.fillStates=s.fillStates||{},this.strokeStates=s.strokeStates||{},this.textStates=s.textStates||{},this.widths_={},this.labels_={},this.zIndexContext_=n?new d.Z:null}getZIndexContext(){return this.zIndexContext_}createLabel(t,e,i,s){let n;let l=t+e+i+s;if(this.labels_[l])return this.labels_[l];let o=s?this.strokeStates[s]:null,r=i?this.fillStates[i]:null,h=this.textStates[e],a=this.pixelRatio,u=[h.scale[0]*a,h.scale[1]*a],d=h.justify?f.I[h.justify]:C(Array.isArray(t)?t[0]:t,h.textAlign||c.defaultTextAlign),g=s&&o.lineWidth?o.lineWidth:0,_=Array.isArray(t)?t:String(t).split("\n").reduce(v,[]),{width:x,height:p,widths:S,heights:y,lineWidths:m}=(0,c.getTextDimensions)(h,_),I=x+g,T=[],L=(I+2)*u[0],k=(p+g)*u[1],E={width:L<0?Math.floor(L):Math.ceil(L),height:k<0?Math.floor(k):Math.ceil(k),contextInstructions:T};(1!=u[0]||1!=u[1])&&T.push("scale",u),s&&(T.push("strokeStyle",o.strokeStyle),T.push("lineWidth",g),T.push("lineCap",o.lineCap),T.push("lineJoin",o.lineJoin),T.push("miterLimit",o.miterLimit),T.push("setLineDash",[o.lineDash]),T.push("lineDashOffset",o.lineDashOffset)),i&&T.push("fillStyle",r.fillStyle),T.push("textBaseline","middle"),T.push("textAlign","center");let D=.5-d,P=d*I+D*g,M=[],O=[],R=0,b=0,w=0,F=0;for(let t=0,e=_.length;t<e;t+=2){let e=_[t];if("\n"===e){b+=R,R=0,P=d*I+D*g,++F;continue}let l=_[t+1]||h.font;l!==n&&(s&&M.push("font",l),i&&O.push("font",l),n=l),R=Math.max(R,y[w]);let o=[e,P+D*S[w]+d*(S[w]-m[F]),.5*(g+R)+b];P+=S[w],s&&M.push("strokeText",o),i&&O.push("fillText",o),++w}return Array.prototype.push.apply(T,M),Array.prototype.push.apply(T,O),this.labels_[l]=E,E}replayTextBackground_(t,e,i,s,n,l,o){t.beginPath(),t.moveTo.apply(t,e),t.lineTo.apply(t,i),t.lineTo.apply(t,s),t.lineTo.apply(t,n),t.lineTo.apply(t,e),l&&(this.alignAndScaleFill_=l[2],t.fillStyle=l[1],this.fill_(t)),o&&(this.setStrokeStyle_(t,o),t.stroke())}calculateImageOrLabelDimensions_(t,e,i,s,n,o,r,a,u,d,c,g,f,m,I,C){let v;r*=g[0],a*=g[1];let T=i-r,L=s-a,k=n+u>t?t-u:n,E=o+d>e?e-d:o,D=m[3]+k*g[0]+m[1],P=m[0]+E*g[1]+m[2],M=T-m[3],O=L-m[0];return(I||0!==c)&&(x[0]=M,y[0]=M,x[1]=O,p[1]=O,p[0]=M+D,S[0]=p[0],S[1]=O+P,y[1]=S[1]),0!==c?(v=(0,h.qC)((0,h.Ue)(),i,s,1,1,c,-i,-s),(0,h.nn)(v,x),(0,h.nn)(v,p),(0,h.nn)(v,S),(0,h.nn)(v,y),(0,l.createOrUpdate)(Math.min(x[0],p[0],S[0],y[0]),Math.min(x[1],p[1],S[1],y[1]),Math.max(x[0],p[0],S[0],y[0]),Math.max(x[1],p[1],S[1],y[1]),_)):(0,l.createOrUpdate)(Math.min(M,M+D),Math.min(O,O+P),Math.max(M,M+D),Math.max(O,O+P),_),f&&(T=Math.round(T),L=Math.round(L)),{drawImageX:T,drawImageY:L,drawImageW:k,drawImageH:E,originX:u,originY:d,declutterBox:{minX:_[0],minY:_[1],maxX:_[2],maxY:_[3],value:C},canvasTransform:v,scale:g}}replayImageOrLabel_(t,e,i,s,n,l,o){let r=!!(l||o),h=s.declutterBox,a=o?o[2]*s.scale[0]/2:0;return h.minX-a<=e[0]&&h.maxX+a>=0&&h.minY-a<=e[1]&&h.maxY+a>=0&&(r&&this.replayTextBackground_(t,x,p,S,y,l,o),(0,c.drawImageOrLabel)(t,s.canvasTransform,n,i,s.originX,s.originY,s.drawImageW,s.drawImageH,s.drawImageX,s.drawImageY,s.scale)),!0}fill_(t){let e=this.alignAndScaleFill_;if(e){let i=(0,h.nn)(this.renderedTransform_,[0,0]),s=512*this.pixelRatio;t.save(),t.translate(i[0]%s,i[1]%s),1!==e&&t.scale(e,e),t.rotate(this.viewRotation_)}t.fill(),e&&t.restore()}setStrokeStyle_(t,e){t.strokeStyle=e[1],t.lineWidth=e[2],t.lineCap=e[3],t.lineJoin=e[4],t.miterLimit=e[5],t.lineDashOffset=e[7],t.setLineDash(e[6])}drawLabelWithPointPlacement_(t,e,i,s){let n=this.textStates[e],l=this.createLabel(t,e,s,i),o=this.strokeStates[i],r=this.pixelRatio,h=C(Array.isArray(t)?t[0]:t,n.textAlign||c.defaultTextAlign),a=f.I[n.textBaseline||c.defaultTextBaseline],u=o&&o.lineWidth?o.lineWidth:0,d=l.width/r-2*n.scale[0],g=a*l.height/r+2*(.5-a)*u;return{label:l,anchorX:h*d+2*(.5-h)*u,anchorY:g}}execute_(t,e,i,n,r,d,f,_){let x,p,S,y,I,v,T,L,k,E,D,P,M,O,R,b,w,F;let Z=this.zIndexContext_;this.pixelCoordinates_&&(0,s.fS)(i,this.renderedTransform_)?x=this.pixelCoordinates_:(!this.pixelCoordinates_&&(this.pixelCoordinates_=[]),x=(0,o.vT)(this.coordinates,0,this.coordinates.length,2,i,this.pixelCoordinates_),(0,h.lk)(this.renderedTransform_,i));let W=0,A=n.length,G=0,Y=0,B=0,N=this.coordinateCache_,K=this.viewRotation_,U=Math.round(1e12*Math.atan2(-i[1],i[0]))/1e12,X={context:t,pixelRatio:this.pixelRatio,resolution:this.resolution,rotation:K},J=this.instructions!=n||this.overlaps?0:200;for(;W<A;){let i=n[W];switch(i[0]){case g.ZP.BEGIN_GEOMETRY:R=i[1],F=i[3],R.getGeometry()?void 0===f||(0,l.intersects)(f,F.getExtent())?++W:W=i[2]+1:W=i[2],Z&&(Z.zIndex=i[4]);break;case g.ZP.BEGIN_PATH:Y>J&&(this.fill_(t),Y=0),B>J&&(t.stroke(),B=0),!Y&&!B&&(t.beginPath(),v=NaN,T=NaN),++W;break;case g.ZP.CIRCLE:let s=x[G=i[1]],h=x[G+1],A=x[G+2],V=x[G+3],H=A-s,j=V-h,z=Math.sqrt(H*H+j*j);t.moveTo(s+z,h),t.arc(s,h,z,0,2*Math.PI,!0),++W;break;case g.ZP.CLOSE_PATH:t.closePath(),++W;break;case g.ZP.CUSTOM:G=i[1],p=i[2];let $=i[3],q=i[4],Q=i[5];X.geometry=$,X.feature=R,!(W in N)&&(N[W]=[]);let tt=N[W];Q?Q(x,G,p,2,tt):(tt[0]=x[G],tt[1]=x[G+1],tt.length=2),Z&&(Z.zIndex=i[6]),q(tt,X),++W;break;case g.ZP.DRAW_IMAGE:let te,ti,ts,tn;G=i[1],p=i[2],E=i[3],S=i[4],y=i[5];let tl=i[6],to=i[7],tr=i[8],th=i[9],ta=i[10],tu=i[11],td=i[12],tc=i[13];I=i[14]||"declutter";let tg=i[15];if(!E&&i.length>=20){D=i[19],P=i[20],M=i[21],O=i[22];let t=this.drawLabelWithPointPlacement_(D,P,M,O);E=t.label,i[3]=E;let e=i[23];S=(t.anchorX-e)*this.pixelRatio,i[4]=S;let s=i[24];y=(t.anchorY-s)*this.pixelRatio,i[5]=y,tl=E.height,i[6]=tl,tc=E.width,i[13]=tc}i.length>25&&(te=i[25]),i.length>17?(ti=i[16],ts=i[17],tn=i[18]):(ti=c.defaultPadding,ts=null,tn=null),ta&&U?tu+=K:!ta&&!U&&(tu-=K);let tf=0;for(;G<p;G+=2){if(te&&te[tf++]<tc/this.pixelRatio)continue;let i=this.calculateImageOrLabelDimensions_(E.width,E.height,x[G],x[G+1],tc,tl,S,y,tr,th,tu,td,r,ti,!!ts||!!tn,R),s=[t,e,E,i,to,ts,tn];if(_){let t,e,n,l,o;if(tg){let i=p-G;if(!tg[i]){tg[i]={args:s,declutterMode:I};continue}let l=tg[i];t=l.args,e=l.declutterMode,delete tg[i],n=m(t)}if(t&&("declutter"!==e||!_.collides(n))&&(l=!0),("declutter"!==I||!_.collides(i.declutterBox))&&(o=!0),"declutter"===e&&"declutter"===I){let t=l&&o;l=t,o=t}l&&("none"!==e&&_.insert(n),this.replayImageOrLabel_.apply(this,t)),o&&("none"!==I&&_.insert(i.declutterBox),this.replayImageOrLabel_.apply(this,s))}else this.replayImageOrLabel_.apply(this,s)}++W;break;case g.ZP.DRAW_CHARS:let t_;let tx=i[1],tp=i[2],tS=i[3],ty=i[4];O=i[5];let tm=i[6],tI=i[7],tC=i[8];M=i[9];let tv=i[10];D=i[11],P=i[12];let tT=[i[13],i[13]];I=i[14]||"declutter";let tL=i[15],tk=this.textStates[P],tE=tk.font,tD=[tk.scale[0]*tI,tk.scale[1]*tI];tE in this.widths_?t_=this.widths_[tE]:(t_={},this.widths_[tE]=t_);let tP=(0,a.W)(x,tx,tp,2),tM=Math.abs(tD[0])*(0,c.measureAndCacheTextWidth)(tE,D,t_);if(ty||tM<=tP){let i=(tP-tM)*C(D,this.textStates[P].textAlign),s=function(t,e,i,s,n,l,r,h,a,d,c,g,f=!0){let _,x=t[e],p=t[e+1],S=0,y=0,m=0,I=0;function C(){S=x,y=p,e+=2,x=t[e],p=t[e+1],I+=m,m=Math.sqrt((x-S)*(x-S)+(p-y)*(p-y))}do C();while(e<i-s&&I+m<l);let v=0===m?0:(l-I)/m,T=(0,u.t7)(S,x,v),L=(0,u.t7)(y,p,v),k=e-s,E=I,D=l+h*a(d,n,c);for(;e<i-s&&I+m<D;)C();v=0===m?0:(D-I)/m;let P=(0,u.t7)(S,x,v),M=(0,u.t7)(y,p,v),O=!1;if(f){if(g){let t=[T,L,P,M];(0,o.U1)(t,0,4,2,g,t,t),O=t[0]>t[2]}else O=T>P}let R=Math.PI,b=[],w=k+s===e;if(e=k,m=0,I=E,x=t[e],p=t[e+1],w){C(),_=Math.atan2(p-y,x-S),O&&(_+=_>0?-R:R);let t=(P+T)/2,e=(M+L)/2;return b[0]=[t,e,(D-l)/2,_,n],b}n=n.replace(/\n/g," ");for(let t=0,o=n.length;t<o;){C();let g=Math.atan2(p-y,x-S);if(O&&(g+=g>0?-R:R),void 0!==_){let t=g-_;if(t+=t>R?-2*R:t<-R?2*R:0,Math.abs(t)>r)return null}_=g;let f=t,T=0;for(;t<o;++t){let r=h*a(d,n[O?o-t-1:t],c);if(e+s<i&&I+m<l+T+r/2)break;T+=r}if(t===f)continue;let L=O?n.substring(o-f,o-t):n.substring(f,t);v=0===m?0:(l+T/2-I)/m;let k=(0,u.t7)(S,x,v),E=(0,u.t7)(y,p,v);b.push([k,E,T/2,g,L]),l+=T}return b}(x,tx,tp,2,D,i,tm,Math.abs(tD[0]),c.measureAndCacheTextWidth,tE,t_,U?0:this.viewRotation_,tL);t:if(s){let i,n,l,o,r;let h=[];if(M)for(i=0,n=s.length;i<n;++i){l=(r=s[i])[4],o=this.createLabel(l,P,"",M),S=r[2]+(tD[0]<0?-tv:tv),y=tS*o.height+(.5-tS)*2*tv*tD[1]/tD[0]-tC;let n=this.calculateImageOrLabelDimensions_(o.width,o.height,r[0],r[1],o.width,o.height,S,y,0,0,r[3],tT,!1,c.defaultPadding,!1,R);if(_&&"declutter"===I&&_.collides(n.declutterBox))break t;h.push([t,e,o,n,1,null,null])}if(O)for(i=0,n=s.length;i<n;++i){l=(r=s[i])[4],o=this.createLabel(l,P,O,""),S=r[2],y=tS*o.height-tC;let n=this.calculateImageOrLabelDimensions_(o.width,o.height,r[0],r[1],o.width,o.height,S,y,0,0,r[3],tT,!1,c.defaultPadding,!1,R);if(_&&"declutter"===I&&_.collides(n.declutterBox))break t;h.push([t,e,o,n,1,null,null])}_&&"none"!==I&&_.load(h.map(m));for(let t=0,e=h.length;t<e;++t)this.replayImageOrLabel_.apply(this,h[t])}}++W;break;case g.ZP.END_GEOMETRY:if(void 0!==d){let t=d(R=i[1],F,I);if(t)return t}++W;break;case g.ZP.FILL:J?Y++:this.fill_(t),++W;break;case g.ZP.MOVE_TO_LINE_TO:for(G=i[1],p=i[2],b=x[G],w=x[G+1],t.moveTo(b,w),v=b+.5|0,T=w+.5|0,G+=2;G<p;G+=2)b=x[G],w=x[G+1],L=b+.5|0,k=w+.5|0,(G==p-2||L!==v||k!==T)&&(t.lineTo(b,w),v=L,T=k);++W;break;case g.ZP.SET_FILL_STYLE:this.alignAndScaleFill_=i[2],Y&&(this.fill_(t),Y=0,B&&(t.stroke(),B=0)),t.fillStyle=i[1],++W;break;case g.ZP.SET_STROKE_STYLE:B&&(t.stroke(),B=0),this.setStrokeStyle_(t,i),++W;break;case g.ZP.STROKE:J?B++:t.stroke(),++W;break;default:++W}}Y&&this.fill_(t),B&&t.stroke()}execute(t,e,i,s,n,l){this.viewRotation_=s,this.execute_(t,e,i,this.instructions,n,void 0,void 0,l)}executeHitDetection(t,e,i,s,n){return this.viewRotation_=i,this.execute_(t,[t.canvas.width,t.canvas.height],e,this.hitDetectionInstructions,!0,s,n)}};let L=["Polygon","Circle","LineString","Image","Text","Default"],k=["Image","Text"],E=L.filter(t=>!k.includes(t)),D={};var P=class t{constructor(t,e,i,s,n,l,o){this.maxExtent_=t,this.overlaps_=s,this.pixelRatio_=i,this.resolution_=e,this.renderBuffer_=l,this.executorsByZIndex_={},this.hitDetectionContext_=null,this.hitDetectionTransform_=(0,h.Ue)(),this.renderedContext_=null,this.deferredZIndexContexts_={},this.createExecutors_(n,o)}clip(t,e){let i=this.getClipCoords(e);t.beginPath(),t.moveTo(i[0],i[1]),t.lineTo(i[2],i[3]),t.lineTo(i[4],i[5]),t.lineTo(i[6],i[7]),t.clip()}createExecutors_(t,e){for(let i in t){let s=this.executorsByZIndex_[i];void 0===s&&(s={},this.executorsByZIndex_[i]=s);let n=t[i];for(let t in n){let i=n[t];s[t]=new T(this.resolution_,this.pixelRatio_,this.overlaps_,i,e)}}}hasExecutors(t){for(let e in this.executorsByZIndex_){let i=this.executorsByZIndex_[e];for(let e=0,s=t.length;e<s;++e)if(t[e]in i)return!0}return!1}forEachFeatureAtCoordinate(t,e,i,o,r,a){let u,d,c,g,f,_,x;let p=2*(o=Math.round(o))+1,S=(0,h.qC)(this.hitDetectionTransform_,o+.5,o+.5,1/e,-1/e,-i,-t[0],-t[1]),y=!this.hitDetectionContext_;y&&(this.hitDetectionContext_=(0,n.E4)(p,p,void 0,{willReadFrequently:!0}));let m=this.hitDetectionContext_;m.canvas.width!==p||m.canvas.height!==p?(m.canvas.width=p,m.canvas.height=p):!y&&m.clearRect(0,0,p,p),void 0!==this.renderBuffer_&&(u=(0,l.createEmpty)(),(0,l.extendCoordinate)(u,t),(0,l.buffer)(u,e*(this.renderBuffer_+o),u));let I=function(t){if(void 0!==D[t])return D[t];let e=2*t+1,i=t*t,s=Array(i+1);for(let n=0;n<=t;++n)for(let l=0;l<=t;++l){let o=n*n+l*l;if(o>i)break;let r=s[o];!r&&(r=[],s[o]=r),r.push(((t+n)*e+(t+l))*4+3),n>0&&r.push(((t-n)*e+(t+l))*4+3),l>0&&(r.push(((t+n)*e+(t-l))*4+3),n>0&&r.push(((t-n)*e+(t-l))*4+3))}let n=[];for(let t=0,e=s.length;t<e;++t)s[t]&&n.push(...s[t]);return D[t]=n,n}(o);function C(t,e,i){let s=m.getImageData(0,0,p,p).data;for(let n=0,l=I.length;n<l;n++)if(s[I[n]]>0){if(!a||"none"===i||"Image"!==d&&"Text"!==d||a.includes(t)){let i=(I[n]-3)/4,s=o-i%p,l=o-(i/p|0),h=r(t,e,s*s+l*l);if(h)return h}m.clearRect(0,0,p,p);break}}let v=Object.keys(this.executorsByZIndex_).map(Number);for(v.sort(s.j2),c=v.length-1;c>=0;--c){let t=v[c].toString();for(f=this.executorsByZIndex_[t],g=L.length-1;g>=0;--g)if(void 0!==(_=f[d=L[g]])&&(x=_.executeHitDetection(m,S,i,C,u)))return x}}getClipCoords(t){let e=this.maxExtent_;if(!e)return null;let i=e[0],s=e[1],n=e[2],l=e[3],r=[i,s,i,l,n,l,n,s];return(0,o.vT)(r,0,8,2,t,r),r}isEmpty(){return(0,r.x)(this.executorsByZIndex_)}execute(t,e,i,n,l,o,r){let h=Object.keys(this.executorsByZIndex_).map(Number);h.sort(r?s.$1:s.j2),o=o||L;let a=L.length;for(let s=0,u=h.length;s<u;++s){let u=h[s].toString(),d=this.executorsByZIndex_[u];for(let u=0,c=o.length;u<c;++u){let c=o[u],g=d[c];if(void 0!==g){let o=null===r?void 0:g.getZIndexContext(),d=o?o.getContext():t,f=this.maxExtent_&&"Image"!==c&&"Text"!==c;if(f&&(d.save(),this.clip(d,i)),o&&"Text"!==c&&"Image"!==c?o.pushFunction(t=>g.execute(t,e,i,n,l,r)):g.execute(d,e,i,n,l,r),f&&d.restore(),o){o.offset();let t=h[s]*a+u;!this.deferredZIndexContexts_[t]&&(this.deferredZIndexContexts_[t]=[]),this.deferredZIndexContexts_[t].push(o)}}}}this.renderedContext_=t}getDeferredZIndexContexts(){return this.deferredZIndexContexts_}getRenderedContext(){return this.renderedContext_}renderDeferred(){let t=this.deferredZIndexContexts_,e=Object.keys(t).map(Number).sort(s.j2);for(let i=0,s=e.length;i<s;++i)t[e[i]].forEach(t=>{t.draw(this.renderedContext_),t.clear()}),t[e[i]].length=0}}},68186:function(t,e,i){i.d(e,{$O:function(){return o},Yc:function(){return l},gO:function(){return n},s3:function(){return r}});let s={BEGIN_GEOMETRY:0,BEGIN_PATH:1,CIRCLE:2,CLOSE_PATH:3,CUSTOM:4,DRAW_CHARS:5,DRAW_IMAGE:6,END_GEOMETRY:7,FILL:8,MOVE_TO_LINE_TO:9,SET_FILL_STYLE:10,SET_STROKE_STYLE:11,STROKE:12},n=[s.FILL],l=[s.STROKE],o=[s.BEGIN_PATH],r=[s.CLOSE_PATH];e.ZP=s},10244:function(t,e,i){i.d(e,{Z:function(){return c},I:function(){return u}});var s=i("45120"),n=i("21915"),l=i("21882"),o=i("49179"),r=i("68509"),h=i("80567"),a=i("68186");let u={left:0,center:.5,right:1,top:0,middle:.5,hanging:.2,alphabetic:.8,ideographic:.8,bottom:1};class d extends h.Z{constructor(t,e,i,s){super(t,e,i,s),this.labels_=null,this.text_="",this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=void 0,this.textKeepUpright_=void 0,this.textRotation_=0,this.textFillState_=null,this.fillStates={},this.fillStates[r.defaultFillStyle]={fillStyle:r.defaultFillStyle},this.textStrokeState_=null,this.strokeStates={},this.textState_={},this.textStates={},this.textKey_="",this.fillKey_="",this.strokeKey_="",this.declutterMode_=void 0,this.declutterImageWithText_=void 0}finish(){let t=super.finish();return t.textStates=this.textStates,t.fillStates=this.fillStates,t.strokeStates=this.strokeStates,t}drawText(t,e,i){let s=this.textFillState_,o=this.textStrokeState_,h=this.textState_;if(""===this.text_||!h||!s&&!o)return;let u=this.coordinates,d=u.length,c=t.getType(),g=null,f=t.getStride();if("line"===h.placement&&("LineString"==c||"MultiLineString"==c||"Polygon"==c||"MultiPolygon"==c)){let s;if(!(0,n.intersects)(this.maxExtent,t.getExtent()))return;if(g=t.getFlatCoordinates(),"LineString"==c)s=[g.length];else if("MultiLineString"==c)s=t.getEnds();else if("Polygon"==c)s=t.getEnds().slice(0,1);else if("MultiPolygon"==c){let e=t.getEndss();s=[];for(let t=0,i=e.length;t<i;++t)s.push(e[t][0])}this.beginGeometry(t,e,i);let o=h.repeat,r=o?void 0:h.textAlign,a=0;for(let t=0,e=s.length;t<e;++t){let e;e=o?function(t,e,i,s,n){let o=[],r=i,h=0,a=e.slice(i,2);for(;h<t&&r+n<s;){let[i,s]=a.slice(-2),u=e[r+n],d=e[r+n+1],c=Math.sqrt((u-i)*(u-i)+(d-s)*(d-s));if((h+=c)>=t){let e=(t-h+c)/c,g=(0,l.t7)(i,u,e),f=(0,l.t7)(s,d,e);a.push(g,f),o.push(a),a=[g,f],h==t&&(r+=n),h=0}else if(h<t)a.push(e[r+n],e[r+n+1]),r+=n;else{let t=c-h,e=(0,l.t7)(i,u,t/c),g=(0,l.t7)(s,d,t/c);a.push(e,g),o.push(a),a=[e,g],h=0,r+=n}}return h>0&&o.push(a),o}(o*this.resolution,g,a,s[t],f):[g.slice(a,s[t])];for(let i=0,n=e.length;i<n;++i){let n=e[i],l=0,o=n.length;if(void 0==r){let t=function(t,e,i,s,n){let l,o,r,h,a,u,d,c,g,f=0,_=i,x=0,p=0,S=i;for(l=i;l<s;l+=2){let i=e[l],s=e[l+1];void 0!==h&&(r=Math.sqrt((c=i-h)*c+(g=s-a)*g),void 0!==u&&(p+=o,Math.acos((u*c+d*g)/(o*r))>t&&(p>x&&(x=p,f=S,_=l),p=0,S=l-n)),o=r,u=c,d=g),h=i,a=s}return(p+=r)>x?[S,l]:[f,_]}(h.maxAngle,n,0,n.length,2);l=t[0],o=t[1]}for(let t=l;t<o;t+=f)u.push(n[t],n[t+1]);let c=u.length;a=s[t],this.drawChars_(d,c),d=c}}this.endGeometry(e)}else{let s=h.overflow?null:[];switch(c){case"Point":case"MultiPoint":g=t.getFlatCoordinates();break;case"LineString":g=t.getFlatMidpoint();break;case"Circle":g=t.getCenter();break;case"MultiLineString":g=t.getFlatMidpoints(),f=2;break;case"Polygon":g=t.getFlatInteriorPoint(),!h.overflow&&s.push(g[2]/this.resolution),f=3;break;case"MultiPolygon":let n=t.getFlatInteriorPoints();g=[];for(let t=0,e=n.length;t<e;t+=3)!h.overflow&&s.push(n[t+2]/this.resolution),g.push(n[t],n[t+1]);if(0===g.length)return;f=2}let l=this.appendFlatPointCoordinates(g,f);if(l===d)return;if(s&&(l-d)/2!=g.length/f){let t=d/2;s=s.filter((e,i)=>{let s=u[(t+i)*2]===g[i*f]&&u[(t+i)*2+1]===g[i*f+1];return!s&&--t,s})}this.saveTextStates_();let o=h.backgroundFill?this.createFill(this.fillStyleToState(h.backgroundFill)):null,_=h.backgroundStroke?this.createStroke(this.strokeStyleToState(h.backgroundStroke)):null;this.beginGeometry(t,e,i);let x=h.padding;if(x!=r.defaultPadding&&(h.scale[0]<0||h.scale[1]<0)){let t=h.padding[0],e=h.padding[1],i=h.padding[2],s=h.padding[3];h.scale[0]<0&&(e=-e,s=-s),h.scale[1]<0&&(t=-t,i=-i),x=[t,e,i,s]}let p=this.pixelRatio;this.instructions.push([a.ZP.DRAW_IMAGE,d,l,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[1,1],NaN,this.declutterMode_,this.declutterImageWithText_,x==r.defaultPadding?r.defaultPadding:x.map(function(t){return t*p}),o,_,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,s]);let S=1/p,y=o?o.slice(0):null;y&&(y[1]=r.defaultFillStyle),this.hitDetectionInstructions.push([a.ZP.DRAW_IMAGE,d,l,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[S,S],NaN,this.declutterMode_,this.declutterImageWithText_,x,y,_,this.text_,this.textKey_,this.strokeKey_,this.fillKey_?r.defaultFillStyle:this.fillKey_,this.textOffsetX_,this.textOffsetY_,s]),this.endGeometry(e)}}saveTextStates_(){let t=this.textStrokeState_,e=this.textState_,i=this.textFillState_,s=this.strokeKey_;t&&!(s in this.strokeStates)&&(this.strokeStates[s]={strokeStyle:t.strokeStyle,lineCap:t.lineCap,lineDashOffset:t.lineDashOffset,lineWidth:t.lineWidth,lineJoin:t.lineJoin,miterLimit:t.miterLimit,lineDash:t.lineDash});let n=this.textKey_;!(n in this.textStates)&&(this.textStates[n]={font:e.font,textAlign:e.textAlign||r.defaultTextAlign,justify:e.justify,textBaseline:e.textBaseline||r.defaultTextBaseline,scale:e.scale});let l=this.fillKey_;i&&!(l in this.fillStates)&&(this.fillStates[l]={fillStyle:i.fillStyle})}drawChars_(t,e){let i=this.textStrokeState_,s=this.textState_,n=this.strokeKey_,l=this.textKey_,o=this.fillKey_;this.saveTextStates_();let h=this.pixelRatio,d=u[s.textBaseline],c=this.textOffsetY_*h,g=this.text_,f=i?i.lineWidth*Math.abs(s.scale[0])/2:0;this.instructions.push([a.ZP.DRAW_CHARS,t,e,d,s.overflow,o,s.maxAngle,h,c,n,f*h,g,l,1,this.declutterMode_,this.textKeepUpright_]),this.hitDetectionInstructions.push([a.ZP.DRAW_CHARS,t,e,d,s.overflow,o?r.defaultFillStyle:o,s.maxAngle,h,c,n,f*h,g,l,1/h,this.declutterMode_,this.textKeepUpright_])}setTextStyle(t,e){let i,n,l;if(t){let e=t.getFill();e?(!(n=this.textFillState_)&&(n={},this.textFillState_=n),n.fillStyle=(0,s.y)(e.getColor()||r.defaultFillStyle)):(n=null,this.textFillState_=n);let h=t.getStroke();if(h){!(l=this.textStrokeState_)&&(l={},this.textStrokeState_=l);let t=h.getLineDash(),e=h.getLineDashOffset(),i=h.getWidth(),n=h.getMiterLimit();l.lineCap=h.getLineCap()||r.defaultLineCap,l.lineDash=t?t.slice():r.defaultLineDash,l.lineDashOffset=void 0===e?r.defaultLineDashOffset:e,l.lineJoin=h.getLineJoin()||r.defaultLineJoin,l.lineWidth=void 0===i?r.defaultLineWidth:i,l.miterLimit=void 0===n?r.defaultMiterLimit:n,l.strokeStyle=(0,s.y)(h.getColor()||r.defaultStrokeStyle)}else l=null,this.textStrokeState_=l;i=this.textState_;let a=t.getFont()||r.defaultFont;(0,r.registerFont)(a);let u=t.getScaleArray();i.overflow=t.getOverflow(),i.font=a,i.maxAngle=t.getMaxAngle(),i.placement=t.getPlacement(),i.textAlign=t.getTextAlign(),i.repeat=t.getRepeat(),i.justify=t.getJustify(),i.textBaseline=t.getTextBaseline()||r.defaultTextBaseline,i.backgroundFill=t.getBackgroundFill(),i.backgroundStroke=t.getBackgroundStroke(),i.padding=t.getPadding()||r.defaultPadding,i.scale=void 0===u?[1,1]:u;let d=t.getOffsetX(),c=t.getOffsetY(),g=t.getRotateWithView(),f=t.getKeepUpright(),_=t.getRotation();this.text_=t.getText()||"",this.textOffsetX_=void 0===d?0:d,this.textOffsetY_=void 0===c?0:c,this.textRotateWithView_=void 0!==g&&g,this.textKeepUpright_=void 0===f||f,this.textRotation_=void 0===_?0:_,this.strokeKey_=l?("string"==typeof l.strokeStyle?l.strokeStyle:(0,o.getUid)(l.strokeStyle))+l.lineCap+l.lineDashOffset+"|"+l.lineWidth+l.lineJoin+l.miterLimit+"["+l.lineDash.join()+"]":"",this.textKey_=i.font+i.scale+(i.textAlign||"?")+(i.repeat||"?")+(i.justify||"?")+(i.textBaseline||"?"),this.fillKey_=n&&n.fillStyle?"string"==typeof n.fillStyle?n.fillStyle:"|"+(0,o.getUid)(n.fillStyle):""}else this.text_="";this.declutterMode_=t.getDeclutterMode(),this.declutterImageWithText_=e}}var c=d},17356:function(t,e,i){i.d(e,{TU:function(){return d},UN:function(){return u},ix:function(){return c}});var s=i(79682),n=i(85386),l=i(21915),o=i(21882),r=i(5374),h=i(46267),a=i(76798);let u=.5;function d(t,e,i,o,d,c,g,f,_){let x=_?(0,r.toUserExtent)(d,_):d,p=t[0]*u,S=t[1]*u,y=(0,n.E4)(p,S);y.imageSmoothingEnabled=!1;let m=y.canvas,I=new a.Z(y,u,d,null,g,f,_?(0,r.getTransformFromProjections)((0,r.getUserProjection)(),_):null),C=i.length,v=Math.floor(0xffffff/C),T={};for(let t=1;t<=C;++t){let e=i[t-1],s=e.getStyleFunction()||o;if(!s)continue;let r=s(e,c);if(!r)continue;!Array.isArray(r)&&(r=[r]);let a=(t*v).toString(16).padStart(7,"#00000");for(let t=0,i=r.length;t<i;++t){let i=r[t],s=i.getGeometryFunction()(e);if(!s||!(0,l.intersects)(x,s.getExtent()))continue;let o=i.clone(),u=o.getFill();u&&u.setColor(a);let d=o.getStroke();d&&(d.setColor(a),d.setLineDash(null)),o.setText(void 0);let c=i.getImage();if(c){let t=c.getImageSize();if(!t)continue;let e=(0,n.E4)(t[0],t[1],void 0,{alpha:!1}),i=e.canvas;e.fillStyle=a,e.fillRect(0,0,i.width,i.height),o.setImage(new h.default({img:i,anchor:c.getAnchor(),anchorXUnits:"pixels",anchorYUnits:"pixels",offset:c.getOrigin(),opacity:1,size:c.getSize(),scale:c.getScale(),rotation:c.getRotation(),rotateWithView:c.getRotateWithView()}))}let g=o.getZIndex()||0,f=T[g];!f&&(f={},T[g]=f,f.Polygon=[],f.Circle=[],f.LineString=[],f.Point=[]);let _=s.getType();if("GeometryCollection"===_){let t=s.getGeometriesArrayRecursive();for(let e=0,i=t.length;e<i;++e){let i=t[e];f[i.getType().replace("Multi","")].push(i,o)}}else f[_.replace("Multi","")].push(s,o)}}let L=Object.keys(T).map(Number).sort(s.j2);for(let t=0,i=L.length;t<i;++t){let i=T[L[t]];for(let t in i){let s=i[t];for(let t=0,i=s.length;t<i;t+=2){I.setStyle(s[t+1]);for(let i=0,n=e.length;i<n;++i)I.setTransform(e[i]),I.drawGeometry(s[t])}}}return y.getImageData(0,0,m.width,m.height)}function c(t,e,i){let s=[];if(i){let n=Math.floor(Math.round(t[0])*u),l=Math.floor(Math.round(t[1])*u),r=((0,o.uZ)(n,0,i.width-1)+(0,o.uZ)(l,0,i.height-1)*i.width)*4,h=i.data[r],a=i.data[r+1],d=i.data[r+2]+256*(a+256*h),c=Math.floor(0xffffff/e.length);d&&d%c==0&&s.push(e[d/c-1])}return s}}}]);
//# sourceMappingURL=975.06322cbd9a5aa337.js.map