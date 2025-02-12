"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["5773"],{5007:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var o=r(23068),n=r(32538),a=r(38667),i=r(13580),s=r(5374),u=r(4313),l=r(18334),c=r(49179);class p extends l.ZP{constructor(){super()}getType(){return"json"}readFeature(e,t){return this.readFeatureFromObject(d(e),this.getReadOptions(e,t))}readFeatures(e,t){return this.readFeaturesFromObject(d(e),this.getReadOptions(e,t))}readFeatureFromObject(e,t){return(0,c.abstract)()}readFeaturesFromObject(e,t){return(0,c.abstract)()}readGeometry(e,t){return this.readGeometryFromObject(d(e),this.getReadOptions(e,t))}readGeometryFromObject(e,t){return(0,c.abstract)()}readProjection(e){return this.readProjectionFromObject(d(e))}readProjectionFromObject(e){return(0,c.abstract)()}writeFeature(e,t){return JSON.stringify(this.writeFeatureObject(e,t))}writeFeatureObject(e,t){return(0,c.abstract)()}writeFeatures(e,t){return JSON.stringify(this.writeFeaturesObject(e,t))}writeFeaturesObject(e,t){return(0,c.abstract)()}writeGeometry(e,t){return JSON.stringify(this.writeGeometryObject(e,t))}writeGeometryObject(e,t){return(0,c.abstract)()}}function d(e){return"string"==typeof e?JSON.parse(e)||null:null!==e?e:null}var y=p;function g(e,t){let r;if(!e)return null;switch(e.type){case"Point":r=function(e){let t=e.coordinates;return{type:"Point",flatCoordinates:t,layout:(0,n.Ss)(t.length)}}(e);break;case"LineString":r=function(e){let t=e.coordinates,r=t.flat();return{type:"LineString",flatCoordinates:r,ends:[r.length],layout:(0,n.Ss)(t[0]?.length||2)}}(e);break;case"Polygon":r=function(e){let t=e.coordinates,r=[],o=t[0]?.[0]?.length,i=(0,a._5)(r,0,t,o);return{type:"Polygon",flatCoordinates:r,ends:i,layout:(0,n.Ss)(o)}}(e);break;case"MultiPoint":r=function(e){let t=e.coordinates;return{type:"MultiPoint",flatCoordinates:t.flat(),layout:(0,n.Ss)(t[0]?.length||2)}}(e);break;case"MultiLineString":r=function(e){let t=e.coordinates,r=t[0]?.[0]?.length||2,o=[],i=(0,a._5)(o,0,t,r);return{type:"MultiLineString",flatCoordinates:o,ends:i,layout:(0,n.Ss)(r)}}(e);break;case"MultiPolygon":r=function(e){let t=e.coordinates,r=[],o=t[0]?.[0]?.[0].length||2,i=(0,a.QT)(r,0,t,o);return{type:"MultiPolygon",flatCoordinates:r,ends:i,layout:(0,n.Ss)(o)}}(e);break;case"GeometryCollection":var o;r=e.geometries.map(function(e){return g(e,void 0)});break;default:throw Error("Unsupported GeoJSON type: "+e.type)}return r}function m(e,t){var r,o,n,a,i,s,u,c,p,d;let y,g,h;let b=(e=(0,l.fI)(e,!0,t)).getType();switch(b){case"Point":r=0,y={type:"Point",coordinates:e.getCoordinates()};break;case"LineString":o=0,y={type:"LineString",coordinates:e.getCoordinates()};break;case"Polygon":n=e,(a=t)&&(g=a.rightHanded),y={type:"Polygon",coordinates:n.getCoordinates(g)};break;case"MultiPoint":i=0,y={type:"MultiPoint",coordinates:e.getCoordinates()};break;case"MultiLineString":s=0,y={type:"MultiLineString",coordinates:e.getCoordinates()};break;case"MultiPolygon":u=e,(c=t)&&(h=c.rightHanded),y={type:"MultiPolygon",coordinates:u.getCoordinates(h)};break;case"GeometryCollection":p=e,d=Object.assign({},d=t),delete d.featureProjection,y={type:"GeometryCollection",geometries:p.getGeometriesArray().map(function(e){return m(e,d)})};break;case"Circle":y={type:"GeometryCollection",geometries:[]};break;default:throw Error("Unsupported geometry type: "+b)}return y}var h=class extends y{constructor(e){e=e||{},super(),this.dataProjection=(0,s.get)(e.dataProjection?e.dataProjection:"EPSG:4326"),e.featureProjection&&(this.defaultFeatureProjection=(0,s.get)(e.featureProjection)),e.featureClass&&(this.featureClass=e.featureClass),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(e,t){let r=null,n=g((r="Feature"===e.type?e:{type:"Feature",geometry:e,properties:null}).geometry,t);if(this.featureClass===u.default)return(0,l.zg)({geometry:n,id:r.id,properties:r.properties},t);let a=new o.default;return this.geometryName_?a.setGeometryName(this.geometryName_):this.extractGeometryName_&&r.geometry_name&&a.setGeometryName(r.geometry_name),a.setGeometry((0,l.YU)(n,t)),"id"in r&&a.setId(r.id),r.properties&&a.setProperties(r.properties,!0),a}readFeaturesFromObject(e,t){let r=null;if("FeatureCollection"===e.type){r=[];let o=e.features;for(let e=0,n=o.length;e<n;++e){let n=this.readFeatureFromObject(o[e],t);n&&r.push(n)}}else r=[this.readFeatureFromObject(e,t)];return r.flat()}readGeometryFromObject(e,t){return function(e,t){let r=g(e,t);return(0,l.YU)(r,t)}(e,t)}readProjectionFromObject(e){let t;let r=e.crs;if(r){if("name"==r.type)t=(0,s.get)(r.properties.name);else if("EPSG"===r.type)t=(0,s.get)("EPSG:"+r.properties.code);else throw Error("Unknown SRS type")}else t=this.dataProjection;return t}writeFeatureObject(e,t){t=this.adaptOptions(t);let r={type:"Feature",geometry:null,properties:null},o=e.getId();if(void 0!==o&&(r.id=o),!e.hasProperties())return r;let n=e.getProperties(),a=e.getGeometry();return a&&(r.geometry=m(a,t),delete n[e.getGeometryName()]),(0,i.x)(n)||(r.properties=n),r}writeFeaturesObject(e,t){t=this.adaptOptions(t);let r=[];for(let o=0,n=e.length;o<n;++o)r.push(this.writeFeatureObject(e[o],t));return{type:"FeatureCollection",features:r}}writeGeometryObject(e,t){return m(e,this.adaptOptions(t))}}}}]);
//# sourceMappingURL=5773.1375aec0269bd187.js.map