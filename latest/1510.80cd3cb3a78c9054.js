"use strict";(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["1510"],{97651:function(e,t,n){n.r(t),n.d(t,{ModifyButton:function(){return T},default:function(){return N}});var l=n(9948),r=n(41291),a=n.n(r),i=n(15751),c=n(29547),s=n.n(c),u=n(39611),o=n.n(u),f=n(14292),d=n(39660),m=n(18429),E=n(4667),g=n(97349),_=n(58539);let w=({active:e,onFeatureSelect:t,onModifyStart:n,onModifyEnd:r,onTranslateStart:c,onTranslateEnd:u,onTranslating:w,digitizeLayer:L,selectStyle:C,selectInteractionConfig:k,hitTolerance:y,modifyInteractionConfig:T,translateInteractionConfig:N})=>{let b=(0,d.Z)(),h=(0,g.J)(L,()=>b?f.w.getDigitizeLayer(b):null,[b]),p=(0,l.useRef)(new(a())),S=(0,l.useMemo)(()=>h?[h]:[],[h]);(0,l.useEffect)(()=>{e||p.current.clear()},[e]),(0,_.c)({clearAfterSelect:!1,onFeatureSelect:t,active:e,layers:S,selectStyle:C,selectInteractionConfig:k,hitTolerance:y,featuresCollection:p.current});let $=(0,m.$)(()=>{let e=new(o())({features:p.current,...N});return e.set("name","react-util-translate-interaction"),e},[N],e),v=(0,m.$)(()=>{let e=new(s())({features:p.current,deleteCondition:i.singleClick,style:C??f.w.DEFAULT_SELECT_STYLE,...T});return e.set("name","react-util-modify-interaction"),e},[T],e);(0,E.N)(v,e=>e.on("modifystart",e=>n?.(e)),[n]),(0,E.N)(v,e=>e.on("modifyend",e=>r?.(e)),[r]),(0,E.N)($,e=>e.on("translatestart",e=>c?.(e)),[c]),(0,E.N)($,e=>e.on("translateend",e=>u?.(e)),[u]),(0,E.N)($,e=>e.on("translating",e=>w?.(e)),[w])};var L=n(35703),C=n(68660),k=n(32022);let y=`${L.M}modifybutton`,T=({className:e,hitTolerance:t=5,onFeatureSelect:n,onModifyStart:r,onModifyEnd:a,onTranslateStart:i,onTranslateEnd:c,onTranslating:s,digitizeLayer:u,selectStyle:o,selectInteractionConfig:f,modifyInteractionConfig:d,translateInteractionConfig:m,onModalLabelOk:E,onModalLabelCancel:g,maxLabelLineLength:_,modalPromptTitle:T,modalPromptOkButtonText:N,modalPromptCancelButtonText:b,editLabel:h=!0,pressed:p,...S})=>{let[$,v]=(0,l.useState)(null);w({selectStyle:o,selectInteractionConfig:f,digitizeLayer:u,onModifyStart:r,onModifyEnd:a,onTranslateStart:i,onTranslateEnd:c,onTranslating:s,active:!!p,modifyInteractionConfig:d,translateInteractionConfig:m,onFeatureSelect:(0,l.useCallback)(e=>{h&&v(e.selected.find(e=>e.get("isLabel"))||null),n?.(e)},[h,n]),hitTolerance:t});let M=e?`${y} ${e}`:y,x=`${L.M}digitize-button-wrapper`,A=null;return $&&(A=l.createElement(C.V,{feature:$,onOk:()=>{E?.($),v(null)},onCancel:()=>{g?.(),v(null)},title:T,okText:N,cancelText:b,maxLabelLineLength:_})),l.createElement("span",{className:x},l.createElement(k.Z,{pressed:p,className:M,...S}),A)};var N=T},58539:function(e,t,n){n.d(t,{c:function(){return m}});var l=n(9948),r=n(41291),a=n.n(r),i=n(15751),c=n(89493),s=n.n(c),u=n(14292),o=n(18429),f=n(4667),d=n(97349);let m=({active:e,selectStyle:t,selectInteractionConfig:n,onFeatureSelect:r,hitTolerance:c=5,layers:m,clearAfterSelect:E=!1,featuresCollection:g})=>{let _=(0,d.J)(g,()=>new(a()),[]),w=(0,o.$)(()=>{if(!_)return;let e=new(s())({condition:i.singleClick,features:_,hitTolerance:c,style:t??u.w.DEFAULT_SELECT_STYLE,layers:m,...n??{}});return e.set("name","react-util-select-interaction"),e},[_,c,t,m,n],e);(0,f.N)(w,e=>e.on("select",e=>{_&&E&&_.clear(),r?.(e)}),[_,E,r]),(0,l.useEffect)(()=>{!e&&_&&_.clear()},[e,_])}}}]);
//# sourceMappingURL=1510.80cd3cb3a78c9054.js.map