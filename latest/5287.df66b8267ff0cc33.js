(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["5287"],{40778:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(22122),o=r(9948),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},a=r(64632),c=o.forwardRef(function(e,t){return o.createElement(a.Z,(0,n.Z)({},e,{ref:t,icon:i}))})},94047:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(22122),o=r(9948),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},a=r(64632),c=o.forwardRef(function(e,t){return o.createElement(a.Z,(0,n.Z)({},e,{ref:t,icon:i}))})},62013:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(22122),o=r(9948),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},a=r(64632),c=o.forwardRef(function(e,t){return o.createElement(a.Z,(0,n.Z)({},e,{ref:t,icon:i}))})},59713:function(e,t,r){var n=r(13696);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},95318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},81109:function(e,t,r){var n=r(59713);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e},e.exports.__esModule=!0,e.exports.default=e.exports},8868:function(e,t,r){var n=r(50008).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},13696:function(e,t,r){var n=r(50008).default,o=r(8868);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},50008:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},81:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(15751),o=r(45627),i=r.n(o),a=r(14292),c=r(39660),s=r(18429),u=r(4667),l=r(97349);let f=({active:e,digitizeLayer:t,drawInteractionConfig:r,drawStyle:f,drawType:d,onDrawEnd:p,onDrawStart:m})=>{let v=(0,c.Z)(),b=(0,l.J)(t,()=>v?a.w.getDigitizeLayer(v):void 0,[v]),g=(0,s.$)(()=>{let e,t;if(!v||!b)return;"Rectangle"===d?(e=(0,o.createBox)(),t="Circle"):t=d;let c=new(i())({source:b.getSource()||void 0,type:t,geometryFunction:e,style:f??a.w.defaultDigitizeStyleFunction,freehandCondition:n.never,...r??{}});return c.set("name",`react-util-draw-interaction-${d}`),c},[v,b,d,f,r],e);(0,u.N)(g,e=>e.on("drawend",e=>{p?.(e)}),[g,p]),(0,u.N)(g,e=>e.on("drawstart",e=>{m?.(e)}),[g,m])};var d=r(9948),p=r(35703),m=r(68660),v=r(32022);let b=`${p.M}drawbutton`;var g=({className:e,digitizeLayer:t,drawInteractionConfig:r,drawStyle:n,drawType:o,maxLabelLineLength:i,modalPromptCancelButtonText:s="Cancel",modalPromptOkButtonText:u="Ok",modalPromptTitle:g="Label",onDrawEnd:y,onDrawStart:x,onModalLabelCancel:h,onModalLabelOk:w,pressed:O,..._})=>{let j=(0,c.Z)(),S=(0,l.J)(t,()=>j?a.w.getDigitizeLayer(j):void 0,[j]),[z,E]=(0,d.useState)(null);f({onDrawEnd:(0,d.useCallback)(e=>{"Text"===o&&(e.feature.set("isLabel",!0),E(e.feature)),y?.(e)},[o,y]),digitizeLayer:S,drawInteractionConfig:r,drawStyle:n,drawType:"Text"===o?"Point":o,onDrawStart:x,active:!!O});let P=e?`${b} ${e}`:b,Z=`${p.M}digitize-button-wrapper`,M=null;return z&&(M=d.createElement(m.V,{feature:z,onOk:()=>{w?.(z),E(null)},onCancel:()=>{S?.getSource()?.removeFeature(z),E(null),h?.(),t?.getSource()?.removeFeature(z),E(null)},title:g,okText:u,cancelText:s,maxLabelLineLength:i})),d.createElement("span",{className:Z},d.createElement(v.Z,{className:P,pressed:O,..._}),M)}},33071:function(e,t,r){"use strict";var n=r(9948);let o=r.n(n)().createContext(null);t.Z=o},8745:function(e,t,r){"use strict";r.d(t,{i:function(){return c}});var n=r(9948),o=r(21770),i=r(47890),a=r(53124);function c(e){return t=>n.createElement(i.ZP,{theme:{token:{motion:!1,zIndexPopupBase:0}}},n.createElement(e,Object.assign({},t)))}t.Z=(e,t,r,i,s)=>c(c=>{let{prefixCls:u,style:l}=c,f=n.useRef(null),[d,p]=n.useState(0),[m,v]=n.useState(0),[b,g]=(0,o.Z)(!1,{value:c.open}),{getPrefixCls:y}=n.useContext(a.E_),x=y(i||"select",u);n.useEffect(()=>{if(g(!0),"undefined"!=typeof ResizeObserver){let e=new ResizeObserver(e=>{let t=e[0].target;p(t.offsetHeight+8),v(t.offsetWidth)}),t=setInterval(()=>{var r;let n=s?`.${s(x)}`:`.${x}-dropdown`,o=null===(r=f.current)||void 0===r?void 0:r.querySelector(n);o&&(clearInterval(t),e.observe(o))},10);return()=>{clearInterval(t),e.disconnect()}}},[]);let h=Object.assign(Object.assign({},c),{style:Object.assign(Object.assign({},l),{margin:0}),open:b,visible:b,getPopupContainer:()=>f.current});return r&&(h=r(h)),t&&Object.assign(h,{[t]:{overflow:{adjustX:!1,adjustY:!1}}}),n.createElement("div",{ref:f,style:{paddingBottom:d,position:"relative",minWidth:m}},n.createElement(e,Object.assign({},h)))})},26114:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.commonLocale=void 0,t.commonLocale={yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0}}}]);
//# sourceMappingURL=5287.df66b8267ff0cc33.js.map