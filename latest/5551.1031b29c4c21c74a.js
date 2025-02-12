"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["5551"],{81643:function(e,t,r){r.d(t,{Z:function(){return n}});let n=e=>e?"function"==typeof e?e():e:null},39111:function(e,t,r){r.d(t,{Z:function(){return S}});var n=r(9948),l=r(94184),o=r.n(l),a=r(70057),i=r(42550),s=r(74443),c=r(53124),u=r(35792),p=r(98675),d=r(25378);let f=n.createContext({});var g=r(35712),m=r(14747),b=r(83559),v=r(40326);let y=e=>{let{antCls:t,componentCls:r,iconCls:n,avatarBg:l,avatarColor:o,containerSize:a,containerSizeLG:i,containerSizeSM:s,textFontSize:c,textFontSizeLG:u,textFontSizeSM:p,borderRadius:d,borderRadiusLG:f,borderRadiusSM:b,lineWidth:v,lineType:y}=e,O=(e,t,l)=>({width:e,height:e,borderRadius:"50%",[`&${r}-square`]:{borderRadius:l},[`&${r}-icon`]:{fontSize:t,[`> ${n}`]:{margin:0}}});return{[r]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,m.Wf)(e)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:o,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:l,border:`${(0,g.unit)(v)} ${y} transparent`,"&-image":{background:"transparent"},[`${t}-image-img`]:{display:"block"}}),O(a,c,d)),{"&-lg":Object.assign({},O(i,u,f)),"&-sm":Object.assign({},O(s,p,b)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},O=e=>{let{componentCls:t,groupBorderColor:r,groupOverlapping:n,groupSpace:l}=e;return{[`${t}-group`]:{display:"inline-flex",[t]:{borderColor:r},"> *:not(:first-child)":{marginInlineStart:n}},[`${t}-group-popover`]:{[`${t} + ${t}`]:{marginInlineStart:l}}}};var $=(0,b.I$)("Avatar",e=>{let{colorTextLightSolid:t,colorTextPlaceholder:r}=e,n=(0,v.mergeToken)(e,{avatarBg:r,avatarColor:t});return[y(n),O(n)]},e=>{let{controlHeight:t,controlHeightLG:r,controlHeightSM:n,fontSize:l,fontSizeLG:o,fontSizeXL:a,fontSizeHeading3:i,marginXS:s,marginXXS:c,colorBorderBg:u}=e;return{containerSize:t,containerSizeLG:r,containerSizeSM:n,textFontSize:Math.round((o+a)/2),textFontSizeLG:i,textFontSizeSM:l,groupSpace:c,groupOverlapping:-s,groupBorderColor:u}}),h=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};let x=n.forwardRef((e,t)=>{let r;let[l,g]=n.useState(1),[m,b]=n.useState(!1),[v,y]=n.useState(!0),O=n.useRef(null),x=n.useRef(null),j=(0,i.sQ)(t,O),{getPrefixCls:w,avatar:E}=n.useContext(c.E_),C=n.useContext(f),S=()=>{if(!x.current||!O.current)return;let t=x.current.offsetWidth,r=O.current.offsetWidth;if(0!==t&&0!==r){let{gap:n=4}=e;2*n<r&&g(r-2*n<t?(r-2*n)/t:1)}};n.useEffect(()=>{b(!0)},[]),n.useEffect(()=>{y(!0),g(1)},[e.src]),n.useEffect(S,[e.gap]);let{prefixCls:N,shape:k,size:Z,src:P,srcSet:z,icon:_,className:W,rootClassName:R,alt:I,draggable:A,children:M,crossOrigin:B}=e,T=h(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),V=(0,p.Z)(e=>{var t,r;return null!==(r=null!==(t=null!=Z?Z:null==C?void 0:C.size)&&void 0!==t?t:e)&&void 0!==r?r:"default"}),D=Object.keys("object"==typeof V&&V||{}).some(e=>["xs","sm","md","lg","xl","xxl"].includes(e)),F=(0,d.Z)(D),G=n.useMemo(()=>{if("object"!=typeof V)return{};let e=V[s.c4.find(e=>F[e])];return e?{width:e,height:e,fontSize:e&&(_||M)?e/2:18}:{}},[F,V]),L=w("avatar",N),K=(0,u.Z)(L),[q,H,J]=$(L,K),Q=o()({[`${L}-lg`]:"large"===V,[`${L}-sm`]:"small"===V}),U=n.isValidElement(P),Y=k||(null==C?void 0:C.shape)||"circle",X=o()(L,Q,null==E?void 0:E.className,`${L}-${Y}`,{[`${L}-image`]:U||P&&v,[`${L}-icon`]:!!_},J,K,W,R,H),ee="number"==typeof V?{width:V,height:V,fontSize:_?V/2:18}:{};if("string"==typeof P&&v)r=n.createElement("img",{src:P,draggable:A,srcSet:z,onError:()=>{let{onError:t}=e;!1!==(null==t?void 0:t())&&y(!1)},alt:I,crossOrigin:B});else if(U)r=P;else if(_)r=_;else if(m||1!==l){let e=`scale(${l})`;r=n.createElement(a.Z,{onResize:S},n.createElement("span",{className:`${L}-string`,ref:x,style:Object.assign({},{msTransform:e,WebkitTransform:e,transform:e})},M))}else r=n.createElement("span",{className:`${L}-string`,style:{opacity:0},ref:x},M);return delete T.onError,delete T.gap,q(n.createElement("span",Object.assign({},T,{style:Object.assign(Object.assign(Object.assign(Object.assign({},ee),G),null==E?void 0:E.style),T.style),className:X,ref:j}),r))});var j=r(50344),w=r(96159),E=r(55241);let C=e=>{let{size:t,shape:r}=n.useContext(f),l=n.useMemo(()=>({size:e.size||t,shape:e.shape||r}),[e.size,e.shape,t,r]);return n.createElement(f.Provider,{value:l},e.children)};x.Group=e=>{var t,r,l,a;let{getPrefixCls:i,direction:s}=n.useContext(c.E_),{prefixCls:p,className:d,rootClassName:f,style:g,maxCount:m,maxStyle:b,size:v,shape:y,maxPopoverPlacement:O,maxPopoverTrigger:h,children:S,max:N}=e,k=i("avatar",p),Z=`${k}-group`,P=(0,u.Z)(k),[z,_,W]=$(k,P),R=o()(Z,{[`${Z}-rtl`]:"rtl"===s},W,P,d,f,_),I=(0,j.Z)(S).map((e,t)=>(0,w.Tm)(e,{key:`avatar-key-${t}`})),A=(null==N?void 0:N.count)||m,M=I.length;if(A&&A<M){let e=I.slice(0,A),i=I.slice(A,M),s=(null==N?void 0:N.style)||b,c=(null===(t=null==N?void 0:N.popover)||void 0===t?void 0:t.trigger)||h||"hover",u=(null===(r=null==N?void 0:N.popover)||void 0===r?void 0:r.placement)||O||"top",p=Object.assign(Object.assign({content:i},null==N?void 0:N.popover),{classNames:{root:o()(`${Z}-popover`,null===(a=null===(l=null==N?void 0:N.popover)||void 0===l?void 0:l.classNames)||void 0===a?void 0:a.root)},placement:u,trigger:c});return e.push(n.createElement(E.Z,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},p),n.createElement(x,{style:s},`+${M-A}`))),z(n.createElement(C,{shape:y,size:v},n.createElement("div",{className:R,style:g},e)))}return z(n.createElement(C,{shape:y,size:v},n.createElement("div",{className:R,style:g},I)))};var S=x},99134:function(e,t,r){let n=(0,r(9948).createContext)({});t.Z=n},21584:function(e,t,r){var n=r(9948),l=r(94184),o=r.n(l),a=r(53124),i=r(99134),s=r(6999),c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function u(e){return"number"==typeof e?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}let p=["xs","sm","md","lg","xl","xxl"],d=n.forwardRef((e,t)=>{let{getPrefixCls:r,direction:l}=n.useContext(a.E_),{gutter:d,wrap:f}=n.useContext(i.Z),{prefixCls:g,span:m,order:b,offset:v,push:y,pull:O,className:$,children:h,flex:x,style:j}=e,w=c(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),E=r("col",g),[C,S,N]=(0,s.cG)(E),k={},Z={};p.forEach(t=>{let r={},n=e[t];"number"==typeof n?r.span=n:"object"==typeof n&&(r=n||{}),delete w[t],Z=Object.assign(Object.assign({},Z),{[`${E}-${t}-${r.span}`]:void 0!==r.span,[`${E}-${t}-order-${r.order}`]:r.order||0===r.order,[`${E}-${t}-offset-${r.offset}`]:r.offset||0===r.offset,[`${E}-${t}-push-${r.push}`]:r.push||0===r.push,[`${E}-${t}-pull-${r.pull}`]:r.pull||0===r.pull,[`${E}-rtl`]:"rtl"===l}),r.flex&&(Z[`${E}-${t}-flex`]=!0,k[`--${E}-${t}-flex`]=u(r.flex))});let P=o()(E,{[`${E}-${m}`]:void 0!==m,[`${E}-order-${b}`]:b,[`${E}-offset-${v}`]:v,[`${E}-push-${y}`]:y,[`${E}-pull-${O}`]:O},$,Z,S,N),z={};if(d&&d[0]>0){let e=d[0]/2;z.paddingLeft=e,z.paddingRight=e}return x&&(z.flex=u(x),!1!==f||z.minWidth||(z.minWidth=0)),C(n.createElement("div",Object.assign({},w,{style:Object.assign(Object.assign(Object.assign({},z),j),k),className:P,ref:t}),h))});t.Z=d},92820:function(e,t,r){var n=r(9948),l=r(94184),o=r.n(l),a=r(74443),i=r(53124),s=r(99134),c=r(6999),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function p(e,t){let[r,l]=n.useState("string"==typeof e?e:""),o=()=>{if("string"==typeof e&&l(e),"object"==typeof e)for(let r=0;r<a.c4.length;r++){let n=a.c4[r];if(!t[n])continue;let o=e[n];if(void 0!==o){l(o);return}}};return n.useEffect(()=>{o()},[JSON.stringify(e),t]),r}let d=n.forwardRef((e,t)=>{let{prefixCls:r,justify:l,align:d,className:f,style:g,children:m,gutter:b=0,wrap:v}=e,y=u(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:O,direction:$}=n.useContext(i.E_),[h,x]=n.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[j,w]=n.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),E=p(d,j),C=p(l,j),S=n.useRef(b),N=(0,a.ZP)();n.useEffect(()=>{let e=N.subscribe(e=>{w(e);let t=S.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&x(e)});return()=>N.unsubscribe(e)},[]);let k=O("row",r),[Z,P,z]=(0,c.VM)(k),_=(()=>{let e=[void 0,void 0];return(Array.isArray(b)?b:[b,void 0]).forEach((t,r)=>{if("object"==typeof t)for(let n=0;n<a.c4.length;n++){let l=a.c4[n];if(h[l]&&void 0!==t[l]){e[r]=t[l];break}}else e[r]=t}),e})(),W=o()(k,{[`${k}-no-wrap`]:!1===v,[`${k}-${C}`]:C,[`${k}-${E}`]:E,[`${k}-rtl`]:"rtl"===$},f,P,z),R={},I=null!=_[0]&&_[0]>0?-(_[0]/2):void 0;I&&(R.marginLeft=I,R.marginRight=I);let[A,M]=_;R.rowGap=M;let B=n.useMemo(()=>({gutter:[A,M],wrap:v}),[A,M,v]);return Z(n.createElement(s.Z.Provider,{value:B},n.createElement("div",Object.assign({},y,{className:W,style:Object.assign(Object.assign({},R),g),ref:t}),m)))});t.Z=d},66330:function(e,t,r){r.d(t,{aV:function(){return p}});var n=r(9948),l=r(94184),o=r.n(l),a=r(53844),i=r(81643),s=r(53124),c=r(20136),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};let p=e=>{let{title:t,content:r,prefixCls:l}=e;return t||r?n.createElement(n.Fragment,null,t&&n.createElement("div",{className:`${l}-title`},t),r&&n.createElement("div",{className:`${l}-inner-content`},r)):null},d=e=>{let{hashId:t,prefixCls:r,className:l,style:s,placement:c="top",title:u,content:d,children:f}=e,g=(0,i.Z)(u),m=(0,i.Z)(d),b=o()(t,r,`${r}-pure`,`${r}-placement-${c}`,l);return n.createElement("div",{className:b,style:s},n.createElement("div",{className:`${r}-arrow`}),n.createElement(a.G,Object.assign({},e,{className:t,prefixCls:r}),f||n.createElement(p,{prefixCls:r,title:g,content:m})))};t.ZP=e=>{let{prefixCls:t,className:r}=e,l=u(e,["prefixCls","className"]),{getPrefixCls:a}=n.useContext(s.E_),i=a("popover",t),[p,f,g]=(0,c.Z)(i);return p(n.createElement(d,Object.assign({},l,{prefixCls:i,hashId:f,className:o()(r,g)})))}},55241:function(e,t,r){var n=r(9948),l=r(94184),o=r.n(l),a=r(21770),i=r(15105),s=r(81643),c=r(33603),u=r(96159),p=r(40440),d=r(66330),f=r(53124),g=r(20136),m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};let b=n.forwardRef((e,t)=>{var r,l;let{prefixCls:b,title:v,content:y,overlayClassName:O,placement:$="top",trigger:h="hover",children:x,mouseEnterDelay:j=.1,mouseLeaveDelay:w=.1,onOpenChange:E,overlayStyle:C={},styles:S,classNames:N}=e,k=m(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle","styles","classNames"]),{getPrefixCls:Z,className:P,style:z,classNames:_,styles:W}=(0,f.dj)("popover"),R=Z("popover",b),[I,A,M]=(0,g.Z)(R),B=Z(),T=o()(O,A,M,P,_.root,null==N?void 0:N.root),V=o()(_.body,null==N?void 0:N.body),[D,F]=(0,a.Z)(!1,{value:null!==(r=e.open)&&void 0!==r?r:e.visible,defaultValue:null!==(l=e.defaultOpen)&&void 0!==l?l:e.defaultVisible}),G=(e,t)=>{F(e,!0),null==E||E(e,t)},L=e=>{e.keyCode===i.Z.ESC&&G(!1,e)},K=(0,s.Z)(v),q=(0,s.Z)(y);return I(n.createElement(p.Z,Object.assign({placement:$,trigger:h,mouseEnterDelay:j,mouseLeaveDelay:w},k,{prefixCls:R,classNames:{root:T,body:V},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign({},W.root),z),C),null==S?void 0:S.root),body:Object.assign(Object.assign({},W.body),null==S?void 0:S.body)},ref:t,open:D,onOpenChange:e=>{G(e)},overlay:K||q?n.createElement(d.aV,{prefixCls:R,title:K,content:q}):null,transitionName:(0,c.m)(B,"zoom-big",k.transitionName),"data-popover-inject":!0}),(0,u.Tm)(x,{onKeyDown:e=>{var t,r;n.isValidElement(x)&&(null===(r=null==x?void 0:(t=x.props).onKeyDown)||void 0===r||r.call(t,e)),L(e)}})))});b._InternalPanelDoNotUseOrYouWillBeFired=d.ZP,t.Z=b},20136:function(e,t,r){var n=r(14747),l=r(50438),o=r(97414),a=r(79511),i=r(8796),s=r(83559),c=r(40326);let u=e=>{let{componentCls:t,popoverColor:r,titleMinWidth:l,fontWeightStrong:a,innerPadding:i,boxShadowSecondary:s,colorTextHeading:c,borderRadiusLG:u,zIndexPopup:p,titleMarginBottom:d,colorBgElevated:f,popoverBg:g,titleBorderBottom:m,innerContentPadding:b,titlePadding:v}=e;return[{[t]:Object.assign(Object.assign({},(0,n.Wf)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:p,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:"var(--valid-offset-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":f,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:g,backgroundClip:"padding-box",borderRadius:u,boxShadow:s,padding:i},[`${t}-title`]:{minWidth:l,marginBottom:d,color:c,fontWeight:a,borderBottom:m,padding:v},[`${t}-inner-content`]:{color:r,padding:b}})},(0,o.ZP)(e,"var(--antd-arrow-background-color)"),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},p=e=>{let{componentCls:t}=e;return{[t]:i.i.map(r=>{let n=e[`${r}6`];return{[`&${t}-${r}`]:{"--antd-arrow-background-color":n,[`${t}-inner`]:{backgroundColor:n},[`${t}-arrow`]:{background:"transparent"}}}})}};t.Z=(0,s.I$)("Popover",e=>{let{colorBgElevated:t,colorText:r}=e,n=(0,c.mergeToken)(e,{popoverBg:t,popoverColor:r});return[u(n),p(n),(0,l._y)(n,"zoom-big")]},e=>{let{lineWidth:t,controlHeight:r,fontHeight:n,padding:l,wireframe:i,zIndexPopupBase:s,borderRadiusLG:c,marginXS:u,lineType:p,colorSplit:d,paddingSM:f}=e,g=r-n;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:s+30},(0,a.w)(e)),(0,o.wZ)({contentRadius:c,limitVerticalRadius:!0})),{innerPadding:12*!i,titleMarginBottom:i?0:u,titlePadding:i?`${g/2}px ${l}px ${g/2-t}px`:0,titleBorderBottom:i?`${t}px ${p} ${d}`:"none",innerContentPadding:i?`${f}px ${l}px`:0})},{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})}}]);
//# sourceMappingURL=5551.1031b29c4c21c74a.js.map