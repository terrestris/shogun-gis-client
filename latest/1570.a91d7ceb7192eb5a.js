"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["1570"],{66597:function(e,t,n){let r=(0,n(9948).createContext)({});t.Z=r},8778:function(e,t,n){n.d(t,{Z:function(){return M}});var r=n(9948),a=n.n(r),o=n(94184),l=n.n(o),i=n(17178),u=n(75164),c=n(98866),s=n(66597),d=n(42550),f=n(40440);let v=r.forwardRef((e,t)=>{let{open:n,draggingDelete:a}=e,o=(0,r.useRef)(null),l=n&&!a,i=(0,r.useRef)(null);function c(){u.Z.cancel(i.current),i.current=null}return r.useEffect(()=>(l?i.current=(0,u.Z)(()=>{var e;null===(e=o.current)||void 0===e||e.forceAlign(),i.current=null}):c(),c),[l,e.title]),r.createElement(f.Z,Object.assign({ref:(0,d.sQ)(o,t)},e,{open:l}))});var g=n(35712),m=n(75752),h=n(14747),b=n(83559),p=n(40326);let k=e=>{let{componentCls:t,antCls:n,controlSize:r,dotSize:a,marginFull:o,marginPart:l,colorFillContentHover:i,handleColorDisabled:u,calc:c,handleSize:s,handleSizeHover:d,handleActiveColor:f,handleActiveOutlineColor:v,handleLineWidth:m,handleLineWidthHover:b,motionDurationMid:p}=e;return{[t]:Object.assign(Object.assign({},(0,h.Wf)(e)),{position:"relative",height:r,margin:`${(0,g.unit)(l)} ${(0,g.unit)(o)}`,padding:0,cursor:"pointer",touchAction:"none","&-vertical":{margin:`${(0,g.unit)(o)} ${(0,g.unit)(l)}`},[`${t}-rail`]:{position:"absolute",backgroundColor:e.railBg,borderRadius:e.borderRadiusXS,transition:`background-color ${p}`},[`${t}-track,${t}-tracks`]:{position:"absolute",transition:`background-color ${p}`},[`${t}-track`]:{backgroundColor:e.trackBg,borderRadius:e.borderRadiusXS},[`${t}-track-draggable`]:{boxSizing:"content-box",backgroundClip:"content-box",border:"solid rgba(0,0,0,0)"},"&:hover":{[`${t}-rail`]:{backgroundColor:e.railHoverBg},[`${t}-track`]:{backgroundColor:e.trackHoverBg},[`${t}-dot`]:{borderColor:i},[`${t}-handle::after`]:{boxShadow:`0 0 0 ${(0,g.unit)(m)} ${e.colorPrimaryBorderHover}`},[`${t}-dot-active`]:{borderColor:e.dotActiveBorderColor}},[`${t}-handle`]:{position:"absolute",width:s,height:s,outline:"none",userSelect:"none","&-dragging-delete":{opacity:0},"&::before":{content:'""',position:"absolute",insetInlineStart:c(m).mul(-1).equal(),insetBlockStart:c(m).mul(-1).equal(),width:c(s).add(c(m).mul(2)).equal(),height:c(s).add(c(m).mul(2)).equal(),backgroundColor:"transparent"},"&::after":{content:'""',position:"absolute",insetBlockStart:0,insetInlineStart:0,width:s,height:s,backgroundColor:e.colorBgElevated,boxShadow:`0 0 0 ${(0,g.unit)(m)} ${e.handleColor}`,outline:"0px solid transparent",borderRadius:"50%",cursor:"pointer",transition:`
            inset-inline-start ${p},
            inset-block-start ${p},
            width ${p},
            height ${p},
            box-shadow ${p},
            outline ${p}
          `},"&:hover, &:active, &:focus":{"&::before":{insetInlineStart:c(d).sub(s).div(2).add(b).mul(-1).equal(),insetBlockStart:c(d).sub(s).div(2).add(b).mul(-1).equal(),width:c(d).add(c(b).mul(2)).equal(),height:c(d).add(c(b).mul(2)).equal()},"&::after":{boxShadow:`0 0 0 ${(0,g.unit)(b)} ${f}`,outline:`6px solid ${v}`,width:d,height:d,insetInlineStart:e.calc(s).sub(d).div(2).equal(),insetBlockStart:e.calc(s).sub(d).div(2).equal()}}},[`&-lock ${t}-handle`]:{"&::before, &::after":{transition:"none"}},[`${t}-mark`]:{position:"absolute",fontSize:e.fontSize},[`${t}-mark-text`]:{position:"absolute",display:"inline-block",color:e.colorTextDescription,textAlign:"center",wordBreak:"keep-all",cursor:"pointer",userSelect:"none","&-active":{color:e.colorText}},[`${t}-step`]:{position:"absolute",background:"transparent",pointerEvents:"none"},[`${t}-dot`]:{position:"absolute",width:a,height:a,backgroundColor:e.colorBgElevated,border:`${(0,g.unit)(m)} solid ${e.dotBorderColor}`,borderRadius:"50%",cursor:"pointer",transition:`border-color ${e.motionDurationSlow}`,pointerEvents:"auto","&-active":{borderColor:e.dotActiveBorderColor}},[`&${t}-disabled`]:{cursor:"not-allowed",[`${t}-rail`]:{backgroundColor:`${e.railBg} !important`},[`${t}-track`]:{backgroundColor:`${e.trackBgDisabled} !important`},[`
          ${t}-dot
        `]:{backgroundColor:e.colorBgElevated,borderColor:e.trackBgDisabled,boxShadow:"none",cursor:"not-allowed"},[`${t}-handle::after`]:{backgroundColor:e.colorBgElevated,cursor:"not-allowed",width:s,height:s,boxShadow:`0 0 0 ${(0,g.unit)(m)} ${u}`,insetInlineStart:0,insetBlockStart:0},[`
          ${t}-mark-text,
          ${t}-dot
        `]:{cursor:"not-allowed !important"}},[`&-tooltip ${n}-tooltip-inner`]:{minWidth:"unset"}})}},C=(e,t)=>{let{componentCls:n,railSize:r,handleSize:a,dotSize:o,marginFull:l,calc:i}=e,u=t?"width":"height",c=t?"height":"width",s=t?"insetBlockStart":"insetInlineStart",d=t?"top":"insetInlineStart",f=i(r).mul(3).sub(a).div(2).equal(),v=i(a).sub(r).div(2).equal(),m=t?{borderWidth:`${(0,g.unit)(v)} 0`,transform:`translateY(${(0,g.unit)(i(v).mul(-1).equal())})`}:{borderWidth:`0 ${(0,g.unit)(v)}`,transform:`translateX(${(0,g.unit)(e.calc(v).mul(-1).equal())})`};return{[t?"paddingBlock":"paddingInline"]:r,[c]:i(r).mul(3).equal(),[`${n}-rail`]:{[u]:"100%",[c]:r},[`${n}-track,${n}-tracks`]:{[c]:r},[`${n}-track-draggable`]:Object.assign({},m),[`${n}-handle`]:{[s]:f},[`${n}-mark`]:{insetInlineStart:0,top:0,[d]:i(r).mul(3).add(t?0:l).equal(),[u]:"100%"},[`${n}-step`]:{insetInlineStart:0,top:0,[d]:r,[u]:"100%",[c]:r},[`${n}-dot`]:{position:"absolute",[s]:i(r).sub(o).div(2).equal()}}},y=e=>{let{componentCls:t,marginPartWithMark:n}=e;return{[`${t}-horizontal`]:Object.assign(Object.assign({},C(e,!0)),{[`&${t}-with-marks`]:{marginBottom:n}})}},x=e=>{let{componentCls:t}=e;return{[`${t}-vertical`]:Object.assign(Object.assign({},C(e,!1)),{height:"100%"})}};var Z=(0,b.I$)("Slider",e=>{let t=(0,p.mergeToken)(e,{marginPart:e.calc(e.controlHeight).sub(e.controlSize).div(2).equal(),marginFull:e.calc(e.controlSize).div(2).equal(),marginPartWithMark:e.calc(e.controlHeightLG).sub(e.controlSize).equal()});return[k(t),y(t),x(t)]},e=>{let t=e.controlHeightLG/4,n=e.controlHeightSM/2,r=e.lineWidth+1,a=e.lineWidth+1.5,o=e.colorPrimary,l=new m.t(o).setA(.2).toRgbString();return{controlSize:t,railSize:4,handleSize:t,handleSizeHover:n,dotSize:8,handleLineWidth:r,handleLineWidthHover:a,railBg:e.colorFillTertiary,railHoverBg:e.colorFillSecondary,trackBg:e.colorPrimaryBorder,trackHoverBg:e.colorPrimaryBorderHover,handleColor:e.colorPrimaryBorder,handleActiveColor:o,handleActiveOutlineColor:l,handleColorDisabled:new m.t(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexString(),dotBorderColor:e.colorBorderSecondary,dotActiveBorderColor:e.colorPrimaryBorder,trackBgDisabled:e.colorBgContainerDisabled}});function E(){let[e,t]=r.useState(!1),n=r.useRef(null),a=()=>{u.Z.cancel(n.current)};return r.useEffect(()=>a,[]),[e,e=>{a(),e?t(e):n.current=(0,u.Z)(()=>{t(e)})}]}var S=n(53124),$=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},M=a().forwardRef((e,t)=>{let{prefixCls:n,range:r,className:o,rootClassName:d,style:f,disabled:g,tooltipPrefixCls:m,tipFormatter:h,tooltipVisible:b,getTooltipPopupContainer:p,tooltipPlacement:k,tooltip:C={},onChangeComplete:y,classNames:x,styles:M}=e,w=$(e,["prefixCls","range","className","rootClassName","style","disabled","tooltipPrefixCls","tipFormatter","tooltipVisible","getTooltipPopupContainer","tooltipPlacement","tooltip","onChangeComplete","classNames","styles"]),{vertical:O}=e,{getPrefixCls:B,direction:D,className:j,style:P,classNames:R,styles:F,getPopupContainer:H}=(0,S.dj)("slider"),I=a().useContext(c.Z),{handleRender:N,direction:L}=a().useContext(s.Z),q="rtl"===(L||D),[T,A]=E(),[z,_]=E(),V=Object.assign({},C),{open:W,placement:X,getPopupContainer:G,prefixCls:Y,formatter:U}=V,K=null!=W?W:b,Q=(T||z)&&!1!==K,J=U||null===U?U:h||null===h?h:e=>"number"==typeof e?e.toString():"",[ee,et]=E(),en=(e,t)=>e||(t?q?"left":"right":"top"),er=B("slider",n),[ea,eo,el]=Z(er),ei=l()(o,j,R.root,null==x?void 0:x.root,d,{[`${er}-rtl`]:q,[`${er}-lock`]:ee},eo,el);q&&!w.vertical&&(w.reverse=!w.reverse),a().useEffect(()=>{let e=()=>{(0,u.Z)(()=>{_(!1)},1)};return document.addEventListener("mouseup",e),()=>{document.removeEventListener("mouseup",e)}},[]);let eu=r&&!K,ec=N||((e,t)=>{let{index:n}=t,r=e.props;function o(e,t,n){var a,o;n&&(null===(a=w[e])||void 0===a||a.call(w,t)),null===(o=r[e])||void 0===o||o.call(r,t)}let l=Object.assign(Object.assign({},r),{onMouseEnter:e=>{A(!0),o("onMouseEnter",e)},onMouseLeave:e=>{A(!1),o("onMouseLeave",e)},onMouseDown:e=>{_(!0),et(!0),o("onMouseDown",e)},onFocus:e=>{var t;_(!0),null===(t=w.onFocus)||void 0===t||t.call(w,e),o("onFocus",e,!0)},onBlur:e=>{var t;_(!1),null===(t=w.onBlur)||void 0===t||t.call(w,e),o("onBlur",e,!0)}}),i=a().cloneElement(e,l),u=(!!K||Q)&&null!==J;return eu?i:a().createElement(v,Object.assign({},V,{prefixCls:B("tooltip",null!=Y?Y:m),title:J?J(t.value):"",open:u,placement:en(null!=X?X:k,O),key:n,classNames:{root:`${er}-tooltip`},getPopupContainer:G||p||H}),i)}),es=eu?(e,t)=>{let n=a().cloneElement(e,{style:Object.assign(Object.assign({},e.props.style),{visibility:"hidden"})});return a().createElement(v,Object.assign({},V,{prefixCls:B("tooltip",null!=Y?Y:m),title:J?J(t.value):"",open:null!==J&&Q,placement:en(null!=X?X:k,O),key:"tooltip",classNames:{root:`${er}-tooltip`},getPopupContainer:G||p||H,draggingDelete:t.draggingDelete}),n)}:void 0,ed=Object.assign(Object.assign(Object.assign(Object.assign({},F.root),P),null==M?void 0:M.root),f),ef=Object.assign(Object.assign({},F.tracks),null==M?void 0:M.tracks),ev=l()(R.tracks,null==x?void 0:x.tracks);return ea(a().createElement(i.Z,Object.assign({},w,{classNames:Object.assign({handle:l()(R.handle,null==x?void 0:x.handle),rail:l()(R.rail,null==x?void 0:x.rail),track:l()(R.track,null==x?void 0:x.track)},ev?{tracks:ev}:{}),styles:Object.assign({handle:Object.assign(Object.assign({},F.handle),null==M?void 0:M.handle),rail:Object.assign(Object.assign({},F.rail),null==M?void 0:M.rail),track:Object.assign(Object.assign({},F.track),null==M?void 0:M.track)},Object.keys(ef).length?{tracks:ef}:{}),step:w.step,range:r,className:ei,style:ed,disabled:null!=g?g:I,ref:t,prefixCls:er,handleRender:ec,activeHandleRender:es,onChangeComplete:e=>{null==y||y(e),et(!1)}})))})},17178:function(e,t,n){n.d(t,{y:function(){return x},Z:function(){return H}});var r=n(28991),a=n(96156),o=n(57705),l=n(90484),i=n(6420),u=n(94184),c=n.n(u),s=n(66680),d=n(21770),f=n(91881),v=n(80334),g=n(9948),m=n(22122),h=n(56633),b=n(89759);function p(e,t,n,r){var a=(t-n)/(r-n),o={};switch(e){case"rtl":o.right="".concat(100*a,"%"),o.transform="translateX(50%)";break;case"btt":o.bottom="".concat(100*a,"%"),o.transform="translateY(50%)";break;case"ttb":o.top="".concat(100*a,"%"),o.transform="translateY(-50%)";break;default:o.left="".concat(100*a,"%"),o.transform="translateX(-50%)"}return o}function k(e,t){return Array.isArray(e)?e[t]:e}var C=n(15105),y=g.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),x=g.createContext({}),Z=["prefixCls","value","valueIndex","onStartMove","onDelete","style","render","dragging","draggingDelete","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"],E=g.forwardRef(function(e,t){var n,o=e.prefixCls,l=e.value,i=e.valueIndex,u=e.onStartMove,s=e.onDelete,d=e.style,f=e.render,v=e.dragging,b=e.draggingDelete,x=e.onOffsetChange,E=e.onChangeComplete,S=e.onFocus,$=e.onMouseEnter,M=(0,h.Z)(e,Z),w=g.useContext(y),O=w.min,B=w.max,D=w.direction,j=w.disabled,P=w.keyboard,R=w.range,F=w.tabIndex,H=w.ariaLabelForHandle,I=w.ariaLabelledByForHandle,N=w.ariaRequired,L=w.ariaValueTextFormatterForHandle,q=w.styles,T=w.classNames,A="".concat(o,"-handle"),z=function(e){j||u(e,i)},_=p(D,l,O,B),V={};null!==i&&(V={tabIndex:j?null:k(F,i),role:"slider","aria-valuemin":O,"aria-valuemax":B,"aria-valuenow":l,"aria-disabled":j,"aria-label":k(H,i),"aria-labelledby":k(I,i),"aria-required":k(N,i),"aria-valuetext":null===(n=k(L,i))||void 0===n?void 0:n(l),"aria-orientation":"ltr"===D||"rtl"===D?"horizontal":"vertical",onMouseDown:z,onTouchStart:z,onFocus:function(e){null==S||S(e,i)},onMouseEnter:function(e){$(e,i)},onKeyDown:function(e){if(!j&&P){var t=null;switch(e.which||e.keyCode){case C.Z.LEFT:t="ltr"===D||"btt"===D?-1:1;break;case C.Z.RIGHT:t="ltr"===D||"btt"===D?1:-1;break;case C.Z.UP:t="ttb"!==D?1:-1;break;case C.Z.DOWN:t="ttb"!==D?-1:1;break;case C.Z.HOME:t="min";break;case C.Z.END:t="max";break;case C.Z.PAGE_UP:t=2;break;case C.Z.PAGE_DOWN:t=-2;break;case C.Z.BACKSPACE:case C.Z.DELETE:s(i)}null!==t&&(e.preventDefault(),x(t,i))}},onKeyUp:function(e){switch(e.which||e.keyCode){case C.Z.LEFT:case C.Z.RIGHT:case C.Z.UP:case C.Z.DOWN:case C.Z.HOME:case C.Z.END:case C.Z.PAGE_UP:case C.Z.PAGE_DOWN:null==E||E()}}});var W=g.createElement("div",(0,m.Z)({ref:t,className:c()(A,(0,a.Z)((0,a.Z)((0,a.Z)({},"".concat(A,"-").concat(i+1),null!==i&&R),"".concat(A,"-dragging"),v),"".concat(A,"-dragging-delete"),b),T.handle),style:(0,r.Z)((0,r.Z)((0,r.Z)({},_),d),q.handle)},V,M));return f&&(W=f(W,{index:i,prefixCls:o,value:l,dragging:v,draggingDelete:b})),W}),S=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","draggingDelete","onFocus"],$=g.forwardRef(function(e,t){var n=e.prefixCls,a=e.style,o=e.onStartMove,l=e.onOffsetChange,u=e.values,c=e.handleRender,s=e.activeHandleRender,d=e.draggingIndex,f=e.draggingDelete,v=e.onFocus,p=(0,h.Z)(e,S),C=g.useRef({}),y=g.useState(!1),x=(0,i.Z)(y,2),Z=x[0],$=x[1],M=g.useState(-1),w=(0,i.Z)(M,2),O=w[0],B=w[1],D=function(e){B(e),$(!0)};g.useImperativeHandle(t,function(){return{focus:function(e){var t;null===(t=C.current[e])||void 0===t||t.focus()},hideHelp:function(){(0,b.flushSync)(function(){$(!1)})}}});var j=(0,r.Z)({prefixCls:n,onStartMove:o,onOffsetChange:l,render:c,onFocus:function(e,t){D(t),null==v||v(e)},onMouseEnter:function(e,t){D(t)}},p);return g.createElement(g.Fragment,null,u.map(function(e,t){var n=d===t;return g.createElement(E,(0,m.Z)({ref:function(e){e?C.current[t]=e:delete C.current[t]},dragging:n,draggingDelete:n&&f,style:k(a,t),key:t,value:e,valueIndex:t},j))}),s&&Z&&g.createElement(E,(0,m.Z)({key:"a11y"},j,{value:u[O],valueIndex:null,dragging:-1!==d,draggingDelete:f,render:s,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}),M=function(e){var t=e.prefixCls,n=e.style,o=e.children,l=e.value,i=e.onClick,u=g.useContext(y),s=u.min,d=u.max,f=u.direction,v=u.includedStart,m=u.includedEnd,h=u.included,b="".concat(t,"-text"),k=p(f,l,s,d);return g.createElement("span",{className:c()(b,(0,a.Z)({},"".concat(b,"-active"),h&&v<=l&&l<=m)),style:(0,r.Z)((0,r.Z)({},k),n),onMouseDown:function(e){e.stopPropagation()},onClick:function(){i(l)}},o)},w=function(e){var t=e.prefixCls,n=e.marks,r=e.onClick,a="".concat(t,"-mark");return n.length?g.createElement("div",{className:a},n.map(function(e){var t=e.value,n=e.style,o=e.label;return g.createElement(M,{key:t,prefixCls:a,style:n,value:t,onClick:r},o)})):null},O=function(e){var t=e.prefixCls,n=e.value,o=e.style,l=e.activeStyle,i=g.useContext(y),u=i.min,s=i.max,d=i.direction,f=i.included,v=i.includedStart,m=i.includedEnd,h="".concat(t,"-dot"),b=f&&v<=n&&n<=m,k=(0,r.Z)((0,r.Z)({},p(d,n,u,s)),"function"==typeof o?o(n):o);return b&&(k=(0,r.Z)((0,r.Z)({},k),"function"==typeof l?l(n):l)),g.createElement("span",{className:c()(h,(0,a.Z)({},"".concat(h,"-active"),b)),style:k})},B=function(e){var t=e.prefixCls,n=e.marks,r=e.dots,a=e.style,o=e.activeStyle,l=g.useContext(y),i=l.min,u=l.max,c=l.step,s=g.useMemo(function(){var e=new Set;if(n.forEach(function(t){e.add(t.value)}),r&&null!==c)for(var t=i;t<=u;)e.add(t),t+=c;return Array.from(e)},[i,u,c,r,n]);return g.createElement("div",{className:"".concat(t,"-step")},s.map(function(e){return g.createElement(O,{prefixCls:t,key:e,value:e,style:a,activeStyle:o})}))},D=function(e){var t=e.prefixCls,n=e.style,o=e.start,l=e.end,i=e.index,u=e.onStartMove,s=e.replaceCls,d=g.useContext(y),f=d.direction,v=d.min,m=d.max,h=d.disabled,b=d.range,p=d.classNames,k="".concat(t,"-track"),C=(o-v)/(m-v),x=(l-v)/(m-v),Z=function(e){!h&&u&&u(e,-1)},E={};switch(f){case"rtl":E.right="".concat(100*C,"%"),E.width="".concat(100*x-100*C,"%");break;case"btt":E.bottom="".concat(100*C,"%"),E.height="".concat(100*x-100*C,"%");break;case"ttb":E.top="".concat(100*C,"%"),E.height="".concat(100*x-100*C,"%");break;default:E.left="".concat(100*C,"%"),E.width="".concat(100*x-100*C,"%")}var S=s||c()(k,(0,a.Z)((0,a.Z)({},"".concat(k,"-").concat(i+1),null!==i&&b),"".concat(t,"-track-draggable"),u),p.track);return g.createElement("div",{className:S,style:(0,r.Z)((0,r.Z)({},E),n),onMouseDown:Z,onTouchStart:Z})},j=function(e){var t=e.prefixCls,n=e.style,a=e.values,o=e.startPoint,l=e.onStartMove,i=g.useContext(y),u=i.included,s=i.range,d=i.min,f=i.styles,v=i.classNames,m=g.useMemo(function(){if(!s){if(0===a.length)return[];var e=null!=o?o:d,t=a[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var n=[],r=0;r<a.length-1;r+=1)n.push({start:a[r],end:a[r+1]});return n},[a,s,o,d]);if(!u)return null;var h=null!=m&&m.length&&(v.tracks||f.tracks)?g.createElement(D,{index:null,prefixCls:t,start:m[0].start,end:m[m.length-1].end,replaceCls:c()(v.tracks,"".concat(t,"-tracks")),style:f.tracks}):null;return g.createElement(g.Fragment,null,h,m.map(function(e,a){var o=e.start,i=e.end;return g.createElement(D,{index:a,prefixCls:t,style:(0,r.Z)((0,r.Z)({},k(n,a)),f.track),start:o,end:i,key:a,onStartMove:l})}))},P=n(8410);function R(e){var t="targetTouches"in e?e.targetTouches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}var F=function(e,t,n,r,a,l,u,c,d,f,v){var m=g.useState(null),h=(0,i.Z)(m,2),b=h[0],p=h[1],k=g.useState(-1),C=(0,i.Z)(k,2),y=C[0],Z=C[1],E=g.useState(!1),S=(0,i.Z)(E,2),$=S[0],M=S[1],w=g.useState(n),O=(0,i.Z)(w,2),B=O[0],D=O[1],j=g.useState(n),F=(0,i.Z)(j,2),H=F[0],I=F[1],N=g.useRef(null),L=g.useRef(null),q=g.useRef(null),T=g.useContext(x),A=T.onDragStart,z=T.onDragChange;(0,P.Z)(function(){-1===y&&D(n)},[n,y]),g.useEffect(function(){return function(){document.removeEventListener("mousemove",N.current),document.removeEventListener("mouseup",L.current),q.current&&(q.current.removeEventListener("touchmove",N.current),q.current.removeEventListener("touchend",L.current))}},[]);var _=function(e,t,n){void 0!==t&&p(t),D(e);var r=e;n&&(r=e.filter(function(e,t){return t!==y})),u(r),z&&z({rawValues:e,deleteIndex:n?y:-1,draggingIndex:y,draggingValue:t})},V=(0,s.Z)(function(e,t,n){if(-1===e){var i=H[0],u=H[H.length-1],c=t*(a-r);c=Math.min(c=Math.max(c,r-i),a-u),c=l(i+c)-i,_(H.map(function(e){return e+c}))}else{var s=(0,o.Z)(B);s[e]=H[e];var f=d(s,(a-r)*t,e,"dist");_(f.values,f.value,n)}});return[y,b,$,g.useMemo(function(){var e=(0,o.Z)(n).sort(function(e,t){return e-t}),t=(0,o.Z)(B).sort(function(e,t){return e-t}),r={};t.forEach(function(e){r[e]=(r[e]||0)+1}),e.forEach(function(e){r[e]=(r[e]||0)-1});var a=+!!f;return Object.values(r).reduce(function(e,t){return e+Math.abs(t)},0)<=a?B:n},[n,B,f]),function(r,a,o){r.stopPropagation();var l=o||n,i=l[a];Z(a),p(i),I(l),D(l),M(!1);var u=R(r),s=u.pageX,d=u.pageY,g=!1;A&&A({rawValues:l,draggingIndex:a,draggingValue:i});var m=function(n){n.preventDefault();var r,o,l=R(n),i=l.pageX,u=l.pageY,c=i-s,m=u-d,h=e.current.getBoundingClientRect(),b=h.width,p=h.height;switch(t){case"btt":r=-m/p,o=c;break;case"ttb":r=m/p,o=c;break;case"rtl":r=-c/b,o=m;break;default:r=c/b,o=m}M(g=!!f&&Math.abs(o)>130&&v<B.length),V(a,r,g)},h=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",m),q.current&&(q.current.removeEventListener("touchmove",N.current),q.current.removeEventListener("touchend",L.current)),N.current=null,L.current=null,q.current=null,c(g),Z(-1),M(!1)};document.addEventListener("mouseup",h),document.addEventListener("mousemove",m),r.currentTarget.addEventListener("touchend",h),r.currentTarget.addEventListener("touchmove",m),N.current=m,L.current=h,q.current=r.currentTarget}]},H=g.forwardRef(function(e,t){var n,u,m,h,b,p,k,C=e.prefixCls,x=void 0===C?"rc-slider":C,Z=e.className,E=e.style,S=e.classNames,M=e.styles,O=e.id,D=e.disabled,P=void 0!==D&&D,R=e.keyboard,H=void 0===R||R,I=e.autoFocus,N=e.onFocus,L=e.onBlur,q=e.min,T=void 0===q?0:q,A=e.max,z=void 0===A?100:A,_=e.step,V=void 0===_?1:_,W=e.value,X=e.defaultValue,G=e.range,Y=e.count,U=e.onChange,K=e.onBeforeChange,Q=e.onAfterChange,J=e.onChangeComplete,ee=e.allowCross,et=e.pushable,en=void 0!==et&&et,er=e.reverse,ea=e.vertical,eo=e.included,el=void 0===eo||eo,ei=e.startPoint,eu=e.trackStyle,ec=e.handleStyle,es=e.railStyle,ed=e.dotStyle,ef=e.activeDotStyle,ev=e.marks,eg=e.dots,em=e.handleRender,eh=e.activeHandleRender,eb=e.track,ep=e.tabIndex,ek=void 0===ep?0:ep,eC=e.ariaLabelForHandle,ey=e.ariaLabelledByForHandle,ex=e.ariaRequired,eZ=e.ariaValueTextFormatterForHandle,eE=g.useRef(null),eS=g.useRef(null),e$=g.useMemo(function(){return ea?er?"ttb":"btt":er?"rtl":"ltr"},[er,ea]),eM=(0,g.useMemo)(function(){if(!0===G||!G)return[!!G,!1,!1,0];var e=G.editable,t=G.draggableTrack;return[!0,e,!e&&t,G.minCount||0,G.maxCount]},[G]),ew=(0,i.Z)(eM,5),eO=ew[0],eB=ew[1],eD=ew[2],ej=ew[3],eP=ew[4],eR=g.useMemo(function(){return isFinite(T)?T:0},[T]),eF=g.useMemo(function(){return isFinite(z)?z:100},[z]),eH=g.useMemo(function(){return null!==V&&V<=0?1:V},[V]),eI=g.useMemo(function(){return"boolean"==typeof en?!!en&&eH:en>=0&&en},[en,eH]),eN=g.useMemo(function(){return Object.keys(ev||{}).map(function(e){var t=ev[e],n={value:Number(e)};return t&&"object"===(0,l.Z)(t)&&!g.isValidElement(t)&&("label"in t||"style"in t)?(n.style=t.style,n.label=t.label):n.label=t,n}).filter(function(e){var t=e.label;return t||"number"==typeof t}).sort(function(e,t){return e.value-t.value})},[ev]),eL=(n=void 0===ee||ee,u=g.useCallback(function(e){return Math.max(eR,Math.min(eF,e))},[eR,eF]),m=g.useCallback(function(e){if(null!==eH){var t=eR+Math.round((u(e)-eR)/eH)*eH,n=function(e){return(String(e).split(".")[1]||"").length},r=Math.max(n(eH),n(eF),n(eR)),a=Number(t.toFixed(r));return eR<=a&&a<=eF?a:null}return null},[eH,eR,eF,u]),h=g.useCallback(function(e){var t=u(e),n=eN.map(function(e){return e.value});null!==eH&&n.push(m(e)),n.push(eR,eF);var r=n[0],a=eF-eR;return n.forEach(function(e){var n=Math.abs(t-e);n<=a&&(r=e,a=n)}),r},[eR,eF,eN,eH,u,m]),b=function e(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"==typeof n){var l,i=t[r],u=i+n,c=[];eN.forEach(function(e){c.push(e.value)}),c.push(eR,eF),c.push(m(i));var s=n>0?1:-1;"unit"===a?c.push(m(i+s*eH)):c.push(m(u)),c=c.filter(function(e){return null!==e}).filter(function(e){return n<0?e<=i:e>=i}),"unit"===a&&(c=c.filter(function(e){return e!==i}));var d="unit"===a?i:u,f=Math.abs((l=c[0])-d);if(c.forEach(function(e){var t=Math.abs(e-d);t<f&&(l=e,f=t)}),void 0===l)return n<0?eR:eF;if("dist"===a)return l;if(Math.abs(n)>1){var v=(0,o.Z)(t);return v[r]=l,e(v,n-s,r,a)}return l}return"min"===n?eR:"max"===n?eF:void 0},p=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e[n],o=b(e,t,n,r);return{value:o,changed:o!==a}},k=function(e){return null===eI&&0===e||"number"==typeof eI&&e<eI},[h,function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",o=e.map(h),l=o[r],i=b(o,t,r,a);if(o[r]=i,!1===n){var u=eI||0;r>0&&o[r-1]!==l&&(o[r]=Math.max(o[r],o[r-1]+u)),r<o.length-1&&o[r+1]!==l&&(o[r]=Math.min(o[r],o[r+1]-u))}else if("number"==typeof eI||null===eI){for(var c=r+1;c<o.length;c+=1)for(var s=!0;k(o[c]-o[c-1])&&s;){var d=p(o,1,c);o[c]=d.value,s=d.changed}for(var f=r;f>0;f-=1)for(var v=!0;k(o[f]-o[f-1])&&v;){var g=p(o,-1,f-1);o[f-1]=g.value,v=g.changed}for(var m=o.length-1;m>0;m-=1)for(var C=!0;k(o[m]-o[m-1])&&C;){var y=p(o,-1,m-1);o[m-1]=y.value,C=y.changed}for(var x=0;x<o.length-1;x+=1)for(var Z=!0;k(o[x+1]-o[x])&&Z;){var E=p(o,1,x+1);o[x+1]=E.value,Z=E.changed}}return{value:o[r],values:o}}]),eq=(0,i.Z)(eL,2),eT=eq[0],eA=eq[1],ez=(0,d.Z)(X,{value:W}),e_=(0,i.Z)(ez,2),eV=e_[0],eW=e_[1],eX=g.useMemo(function(){var e=null==eV?[]:Array.isArray(eV)?eV:[eV],t=(0,i.Z)(e,1)[0],n=void 0===t?eR:t,r=null===eV?[]:[n];if(eO){if(r=(0,o.Z)(e),Y||void 0===eV){var a,l=Y>=0?Y+1:2;for(r=r.slice(0,l);r.length<l;)r.push(null!==(a=r[r.length-1])&&void 0!==a?a:eR)}r.sort(function(e,t){return e-t})}return r.forEach(function(e,t){r[t]=eT(e)}),r},[eV,eO,eR,Y,eT]),eG=function(e){return eO?e:e[0]},eY=(0,s.Z)(function(e){var t=(0,o.Z)(e).sort(function(e,t){return e-t});U&&!(0,f.Z)(t,eX,!0)&&U(eG(t)),eW(t)}),eU=(0,s.Z)(function(e){e&&eE.current.hideHelp();var t=eG(eX);null==Q||Q(t),(0,v.ZP)(!Q,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null==J||J(t)}),eK=F(eS,e$,eX,eR,eF,eT,eY,eU,eA,eB,ej),eQ=(0,i.Z)(eK,5),eJ=eQ[0],e0=eQ[1],e1=eQ[2],e2=eQ[3],e5=eQ[4],e4=function(e,t){if(!P){var n,r,a=(0,o.Z)(eX),l=0,i=0,u=eF-eR;eX.forEach(function(t,n){var r=Math.abs(e-t);r<=u&&(u=r,l=n),t<e&&(i=n)});var c=l;eB&&0!==u&&(!eP||eX.length<eP)?(a.splice(i+1,0,e),c=i+1):a[l]=e,eO&&!eX.length&&void 0===Y&&a.push(e);var s=eG(a);null==K||K(s),eY(a),t?(null===(n=document.activeElement)||void 0===n||null===(r=n.blur)||void 0===r||r.call(n),eE.current.focus(c),e5(t,c,a)):(null==Q||Q(s),(0,v.ZP)(!Q,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null==J||J(s))}},e3=g.useState(null),e8=(0,i.Z)(e3,2),e7=e8[0],e9=e8[1];g.useEffect(function(){if(null!==e7){var e=eX.indexOf(e7);e>=0&&eE.current.focus(e)}e9(null)},[e7]);var e6=g.useMemo(function(){return(!eD||null!==eH)&&eD},[eD,eH]),te=(0,s.Z)(function(e,t){e5(e,t),null==K||K(eG(eX))}),tt=-1!==eJ;g.useEffect(function(){if(!tt){var e=eX.lastIndexOf(e0);eE.current.focus(e)}},[tt]);var tn=g.useMemo(function(){return(0,o.Z)(e2).sort(function(e,t){return e-t})},[e2]),tr=g.useMemo(function(){return eO?[tn[0],tn[tn.length-1]]:[eR,tn[0]]},[tn,eO,eR]),ta=(0,i.Z)(tr,2),to=ta[0],tl=ta[1];g.useImperativeHandle(t,function(){return{focus:function(){eE.current.focus(0)},blur:function(){var e,t=document.activeElement;null!==(e=eS.current)&&void 0!==e&&e.contains(t)&&(null==t||t.blur())}}}),g.useEffect(function(){I&&eE.current.focus(0)},[]);var ti=g.useMemo(function(){return{min:eR,max:eF,direction:e$,disabled:P,keyboard:H,step:eH,included:el,includedStart:to,includedEnd:tl,range:eO,tabIndex:ek,ariaLabelForHandle:eC,ariaLabelledByForHandle:ey,ariaRequired:ex,ariaValueTextFormatterForHandle:eZ,styles:M||{},classNames:S||{}}},[eR,eF,e$,P,H,eH,el,to,tl,eO,ek,eC,ey,ex,eZ,M,S]);return g.createElement(y.Provider,{value:ti},g.createElement("div",{ref:eS,className:c()(x,Z,(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"".concat(x,"-disabled"),P),"".concat(x,"-vertical"),ea),"".concat(x,"-horizontal"),!ea),"".concat(x,"-with-marks"),eN.length)),style:E,onMouseDown:function(e){e.preventDefault();var t,n=eS.current.getBoundingClientRect(),r=n.width,a=n.height,o=n.left,l=n.top,i=n.bottom,u=n.right,c=e.clientX,s=e.clientY;switch(e$){case"btt":t=(i-s)/a;break;case"ttb":t=(s-l)/a;break;case"rtl":t=(u-c)/r;break;default:t=(c-o)/r}e4(eT(eR+t*(eF-eR)),e)},id:O},g.createElement("div",{className:c()("".concat(x,"-rail"),null==S?void 0:S.rail),style:(0,r.Z)((0,r.Z)({},es),null==M?void 0:M.rail)}),!1!==eb&&g.createElement(j,{prefixCls:x,style:eu,values:eX,startPoint:ei,onStartMove:e6?te:void 0}),g.createElement(B,{prefixCls:x,marks:eN,dots:eg,style:ed,activeStyle:ef}),g.createElement($,{ref:eE,prefixCls:x,style:ec,values:e2,draggingIndex:eJ,draggingDelete:e1,onStartMove:te,onOffsetChange:function(e,t){if(!P){var n=eA(eX,e,t);null==K||K(eG(eX)),eY(n.values),e9(n.value)}},onFocus:N,onBlur:L,handleRender:em,activeHandleRender:eh,onChangeComplete:eU,onDelete:eB?function(e){if(!P&&eB&&!(eX.length<=ej)){var t=(0,o.Z)(eX);t.splice(e,1),null==K||K(eG(t)),eY(t);var n=Math.max(0,e-1);eE.current.hideHelp(),eE.current.focus(n)}}:void 0}),g.createElement(w,{prefixCls:x,marks:eN,onClick:e4})))})}}]);
//# sourceMappingURL=1570.a91d7ceb7192eb5a.js.map