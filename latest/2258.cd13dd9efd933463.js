"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["2258"],{64632:function(e,n,o){o.d(n,{Z:function(){return D}});var t=o(22122),r=o(6420),a=o(96156),i=o(56633),l=o(9948),c=o.n(l),s=o(94184),u=o.n(s),d=o(32282),f=o(63017),g=o(28991),p=o(90484),m=o(44958),y=o(27571),h=o(80334);function C(e){return"object"===(0,p.Z)(e)&&"string"==typeof e.name&&"string"==typeof e.theme&&("object"===(0,p.Z)(e.icon)||"function"==typeof e.icon)}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce(function(n,o){var t=e[o];return"class"===o?(n.className=t,delete n.class):(delete n[o],n[o.replace(/-(.)/g,function(e,n){return n.toUpperCase()})]=t),n},{})}function k(e){return(0,d.generate)(e)[0]}function v(e){return e?Array.isArray(e)?e:[e]:[]}var Z=function(e){var n=(0,l.useContext)(f.Z),o=n.csp,t=n.prefixCls,r=n.layer,a="\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";t&&(a=a.replace(/anticon/g,t)),r&&(a="@layer ".concat(r," {\n").concat(a,"\n}")),(0,l.useEffect)(function(){var n=e.current,t=(0,y.A)(n);(0,m.hq)(a,"@ant-design-icons",{prepend:!0,csp:o,attachTo:t})},[])},E=["icon","className","onClick","style","primaryColor","secondaryColor"],w={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1},L=function(e){var n,o,t=e.icon,r=e.className,a=e.onClick,s=e.style,u=e.primaryColor,d=e.secondaryColor,f=(0,i.Z)(e,E),p=l.useRef(),m=w;if(u&&(m={primaryColor:u,secondaryColor:d||k(u)}),Z(p),n=C(t),o="icon should be icon definiton, but got ".concat(t),(0,h.ZP)(n,"[@ant-design/icons] ".concat(o)),!C(t))return null;var y=t;return y&&"function"==typeof y.icon&&(y=(0,g.Z)((0,g.Z)({},y),{},{icon:y.icon(m.primaryColor,m.secondaryColor)})),function e(n,o,t){return t?c().createElement(n.tag,(0,g.Z)((0,g.Z)({key:o},b(n.attrs)),t),(n.children||[]).map(function(t,r){return e(t,"".concat(o,"-").concat(n.tag,"-").concat(r))})):c().createElement(n.tag,(0,g.Z)({key:o},b(n.attrs)),(n.children||[]).map(function(t,r){return e(t,"".concat(o,"-").concat(n.tag,"-").concat(r))}))}(y.icon,"svg-".concat(y.name),(0,g.Z)((0,g.Z)({className:r,onClick:a,style:s,"data-icon":y.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},f),{},{ref:p}))};function T(e){var n=v(e),o=(0,r.Z)(n,2),t=o[0],a=o[1];return L.setTwoToneColors({primaryColor:t,secondaryColor:a})}L.displayName="IconReact",L.getTwoToneColors=function(){return(0,g.Z)({},w)},L.setTwoToneColors=function(e){var n=e.primaryColor,o=e.secondaryColor;w.primaryColor=n,w.secondaryColor=o||k(n),w.calculated=!!o};var x=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];T(d.blue.primary);var M=l.forwardRef(function(e,n){var o=e.className,c=e.icon,s=e.spin,d=e.rotate,g=e.tabIndex,p=e.onClick,m=e.twoToneColor,y=(0,i.Z)(e,x),h=l.useContext(f.Z),C=h.prefixCls,b=void 0===C?"anticon":C,k=h.rootClassName,Z=u()(k,b,(0,a.Z)((0,a.Z)({},"".concat(b,"-").concat(c.name),!!c.name),"".concat(b,"-spin"),!!s||"loading"===c.name),o),E=g;void 0===E&&p&&(E=-1);var w=v(m),T=(0,r.Z)(w,2),M=T[0],D=T[1];return l.createElement("span",(0,t.Z)({role:"img","aria-label":c.name},y,{ref:n,tabIndex:E,onClick:p,className:Z}),l.createElement(L,{icon:c,primaryColor:M,secondaryColor:D,style:d?{msTransform:"rotate(".concat(d,"deg)"),transform:"rotate(".concat(d,"deg)")}:void 0}))});M.displayName="AntdIcon",M.getTwoToneColor=function(){var e=L.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},M.setTwoToneColor=T;var D=M},63017:function(e,n,o){var t=(0,o(9948).createContext)({});n.Z=t},45540:function(e,n,o){o.d(n,{Z:function(){return l}});var t=o(22122),r=o(9948),a={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},i=o(64632),l=r.forwardRef(function(e,n){return r.createElement(i.Z,(0,t.Z)({},e,{ref:n,icon:a}))})},64289:function(e,n,o){o.r(n);var t=o(12038),r=o(54388),a=o(39660),i=o(20741),l=o(23560),c=o.n(l),s=o(49179),u=o(21730),d=o.n(u),f=o(86977),g=o(9948),p=o.n(g),m=o(35703);let y=`${m.M}layertree`;n.default=({className:e,layerGroup:n,nodeTitleRenderer:o,filterFunction:l,onLayerVisibilityChanged:u,checkable:m=!0,draggable:h=!0,...C})=>{let[b,k]=(0,g.useState)([]),[v,Z]=(0,g.useState)([]),E=(0,a.Z)(),w=(0,g.useCallback)(()=>{if(!E)return[];let e=(n?r.Z.getAllLayers(n):r.Z.getAllLayers(E)).filter(e=>!(e instanceof d())&&e.getVisible());return l&&(e=e.filter(l)),e.map(s.getUid)},[l,n,E]),L=(0,g.useCallback)(e=>c()(o)?o(e):e.get("name"),[o]),T=(0,g.useCallback)(e=>{let n;if(E){if(!l||0!==[e].filter(l).length){if(e instanceof d()){let o=e.getLayers().getArray();l&&(o=o.filter(l)),n=o.map(e=>T(e)).filter(e=>void 0!==e).toReversed()}return{key:(0,s.getUid)(e),title:p().createElement("div",{draggable:!0,onClick:e=>e.stopPropagation()},L(e)),className:r.Z.layerInResolutionRange(e,E)?"":"out-of-range",children:n}}}},[E,L,l]),x=(0,g.useCallback)(()=>E?(n||E.getLayerGroup()).getLayers().getArray().map(e=>T(e)).filter(e=>void 0!==e).toReversed():[],[n,E,T]),M=(0,g.useCallback)(()=>{Z(x())},[x]),D=(0,g.useCallback)((e,n)=>{e instanceof d()?e.getLayers().forEach(e=>{D(e,n)}):e.setVisible(n)},[]),S=(0,g.useCallback)(()=>{k(w())},[w]),I=(0,g.useCallback)(()=>{Z(x()),S()},[S,x]);(0,g.useEffect)(()=>{I()},[I]);let N=(0,g.useCallback)(e=>{if(l&&0===[e].filter(l).length)return[];let n=[];if(n.push(e.on("propertychange",I)),e instanceof d()){let o=e.getLayers();for(let t of(n.push(o.on("add",I)),n.push(o.on("remove",I)),n.push(e.on("change:layers",I)),o.getArray()))n.push(...N(t))}else n.push(e.on("change:visible",S));return n},[l,I,S]),P=(0,g.useCallback)(()=>E?N(n||E.getLayerGroup()):[],[n,E,N]);(0,g.useEffect)(()=>{let e=P();return()=>{(0,f.unByKey)(e)}},[v,P]),(0,g.useEffect)(()=>{if(!E)return;let e=E.getView().on("change:resolution",M);return()=>{(0,f.unByKey)(e)}},[E,M]);let O=(0,g.useCallback)((e,n)=>{if(!E)return;let o=n.node.key,a=n.checked;if(!o)return;let i=r.Z.getLayerByOlUid(E,o);if(!i){t.Z.error("Layer is not defined");return}D(i,a),c()(u)&&u(i,a)},[E,D,u]),A=(0,g.useCallback)(e=>{let n=e.node.key,o=e.dragNode.key,a=e.node.pos.split("-"),i=e.dropPosition,l=i-parseInt(a[a.length-1],10);if(!E)return;let c=r.Z.getLayerByOlUid(E,o);if(!c){t.Z.error("dragLayer is not defined");return}let s=r.Z.getLayerByOlUid(E,n);if(!s){t.Z.error("dropLayer is not defined");return}let u=r.Z.getLayerPositionInfo(c,E);if(!u||!u?.groupLayer)return;let f=r.Z.getLayerPositionInfo(s,E);if(!f||!f?.groupLayer)return;let g=u.groupLayer.getLayers(),p=f.groupLayer.getLayers();g.remove(c);let m=p.getArray().findIndex(e=>e===s);-1===l?i===p.getLength()-1?p.push(c):p.insertAt(m+1,c):0===l?s instanceof d()&&s.getLayers().push(c):1===l&&p.insertAt(m,c)},[E]),$=(0,g.useCallback)(e=>{let n=e.dropNode;return!(0===e.dropPosition&&!n.children)},[]),U=e?`${e} ${y}`:y;return p().createElement(i.Z,{className:U,checkedKeys:b,onCheck:O,onDrop:A,allowDrop:$,selectable:!1,checkable:m,draggable:h,treeData:v,...C})}},35703:function(e,n,o){o.d(n,{M:function(){return t}});let t="react-geo-"},33071:function(e,n,o){var t=o(9948);let r=o.n(t)().createContext(null);n.Z=r},39660:function(e,n,o){o.d(n,{S:function(){return a}});var t=o(9948),r=o(33071);let a=()=>(0,t.useContext)(r.Z);n.Z=a},96159:function(e,n,o){o.d(n,{M2:function(){return a},Tm:function(){return l},wm:function(){return i}});var t=o(9948),r=o.n(t);function a(e){return e&&r().isValidElement(e)&&e.type===r().Fragment}let i=(e,n,o)=>r().isValidElement(e)?r().cloneElement(e,"function"==typeof o?o(e.props||{}):o):n;function l(e,n){return i(e,e,n)}},33507:function(e,n){n.Z=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}})},49179:function(e,n,o){function t(){throw Error("Unimplemented abstract method.")}o.r(n),o.d(n,{VERSION:function(){return i},abstract:function(){return t},getUid:function(){return a}});let r=0;function a(e){return e.ol_uid||(e.ol_uid=String(++r))}let i="10.4.0"},64217:function(e,n,o){o.d(n,{Z:function(){return i}});var t=o(28991),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function a(e,n){return 0===e.indexOf(n)}function i(e){var n,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===o?{aria:!0,data:!0,attr:!0}:!0===o?{aria:!0}:(0,t.Z)({},o);var i={};return Object.keys(e).forEach(function(o){(n.aria&&("role"===o||a(o,"aria-"))||n.data&&a(o,"data-")||n.attr&&r.includes(o))&&(i[o]=e[o])}),i}}}]);
//# sourceMappingURL=2258.cd13dd9efd933463.js.map