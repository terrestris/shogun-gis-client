"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["1919"],{21164:function(t,n,r){r.r(n),r.d(n,{equalTo:function(){return Y},not:function(){return D},resourceId:function(){return V},like:function(){return S},notEqualTo:function(){return R},lessThan:function(){return z},greaterThan:function(){return J},disjoint:function(){return F},greaterThanOrEqualTo:function(){return K},lessThanOrEqualTo:function(){return H},within:function(){return G},or:function(){return B},isNull:function(){return M},between:function(){return Q},dwithin:function(){return W},during:function(){return U},contains:function(){return X},and:function(){return O},intersects:function(){return j},bbox:function(){return L}});var e=r(38906),s=r(59980);class u extends s.default{constructor(t,n){super(t),this.conditions=n,(0,e.h)(this.conditions.length>=2,"At least 2 conditions are required")}}var o=u,c=class extends o{constructor(t){super("And",Array.prototype.slice.call(arguments))}};class i extends s.default{constructor(t,n,r){if(super("BBOX"),this.geometryName=t,this.extent=n,4!==n.length)throw Error("Expected an extent with four values ([minX, minY, maxX, maxY])");this.srsName=r}}class a extends s.default{constructor(t,n,r,e){super(t),this.geometryName=n||"the_geom",this.geometry=r,this.srsName=e}}var l=a,p=class extends l{constructor(t,n,r){super("Contains",t,n,r)}},d=class extends l{constructor(t,n,r,e,s){super("DWithin",t,n,s),this.distance=r,this.unit=e}},f=class extends l{constructor(t,n,r){super("Disjoint",t,n,r)}};class h extends s.default{constructor(t,n){super(t),this.propertyName=n}}var x=h,w=class extends x{constructor(t,n,r){super("During",t),this.begin=n,this.end=r}},y=class extends x{constructor(t,n,r,e){super(t,n),this.expression=r,this.matchCase=e}},g=class extends y{constructor(t,n,r){super("PropertyIsEqualTo",t,n,r)}},m=class extends y{constructor(t,n){super("PropertyIsGreaterThan",t,n)}},T=class extends y{constructor(t,n){super("PropertyIsGreaterThanOrEqualTo",t,n)}},I=class extends l{constructor(t,n,r){super("Intersects",t,n,r)}},N=class extends x{constructor(t,n,r){super("PropertyIsBetween",t),this.lowerBoundary=n,this.upperBoundary=r}},_=class extends x{constructor(t,n,r,e,s,u){super("PropertyIsLike",t),this.pattern=n,this.wildCard=void 0!==r?r:"*",this.singleChar=void 0!==e?e:".",this.escapeChar=void 0!==s?s:"!",this.matchCase=u}},v=class extends x{constructor(t){super("PropertyIsNull",t)}},q=class extends y{constructor(t,n){super("PropertyIsLessThan",t,n)}},E=class extends y{constructor(t,n){super("PropertyIsLessThanOrEqualTo",t,n)}};class P extends s.default{constructor(t){super("Not"),this.condition=t}}var b=class extends y{constructor(t,n,r){super("PropertyIsNotEqualTo",t,n,r)}},C=class extends o{constructor(t){super("Or",Array.prototype.slice.call(arguments))}};class k extends s.default{constructor(t){super("ResourceId"),this.rid=t}}var A=class extends l{constructor(t,n,r){super("Within",t,n,r)}};function O(t){let n=[null].concat(Array.prototype.slice.call(arguments));return new(Function.prototype.bind.apply(c,n))}function B(t){let n=[null].concat(Array.prototype.slice.call(arguments));return new(Function.prototype.bind.apply(C,n))}function D(t){return new P(t)}function L(t,n,r){return new i(t,n,r)}function X(t,n,r){return new p(t,n,r)}function j(t,n,r){return new I(t,n,r)}function F(t,n,r){return new f(t,n,r)}function G(t,n,r){return new A(t,n,r)}function W(t,n,r,e,s){return new d(t,n,r,e,s)}function Y(t,n,r){return new g(t,n,r)}function R(t,n,r){return new b(t,n,r)}function z(t,n){return new q(t,n)}function H(t,n){return new E(t,n)}function J(t,n){return new m(t,n)}function K(t,n){return new T(t,n)}function M(t){return new v(t)}function Q(t,n,r){return new N(t,n,r)}function S(t,n,r,e,s,u){return new _(t,n,r,e,s,u)}function U(t,n,r){return new w(t,n,r)}function V(t){return new k(t)}},59980:function(t,n,r){r.r(n),n.default=class{constructor(t){this.tagName_=t}getTagName(){return this.tagName_}}}}]);
//# sourceMappingURL=1919.9f5dd733986c2b41.js.map