"use strict";(self.webpackChunkshogun_demo_client=self.webpackChunkshogun_demo_client||[]).push([[592],{92274:function(e,t,n){var a=n(67294),r=n(38648),l=n(89858),o=n(76772),i=n(17699),s=n(67502),c=n(87617),u=n.n(c),m=n(65920),d=n(68734),p=n(41666),g=n(12827),f=n(26414),y=n(97260),h=n(14409),E=n(59090),b=n(73935),v=n(95998),w=n(12038),P=n.n(w),k=n(92212),L=n.n(k),Z=n(67624),F=n(6653),O=n.n(F),C=n(41907),S=n.n(C),M=n(80815),I=n(7294);function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T.apply(this,arguments)}var A=({...e})=>{const t=(0,M.default)();return t?a.createElement(I.default,T({map:t},e)):a.createElement(a.Fragment,null)},x=n(27049),j=n(71577),N=n(4540),D=n(37494),R=n(91900),z=n(64478),B=n(26954),K=n(93379),V=n.n(K),_=n(7795),$=n.n(_),G=n(90569),U=n.n(G),W=n(3565),H=n.n(W),q=n(19216),J=n.n(q),Y=n(44589),Q=n.n(Y),X=n(78415),ee={};ee.styleTagTransform=Q(),ee.setAttributes=H(),ee.insert=U().bind(null,"head"),ee.domAPI=$(),ee.insertStyleElement=J();V()(X.Z,ee),X.Z&&X.Z.locals&&X.Z.locals;function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},te.apply(this,arguments)}var ne=({...e})=>{const{t:t}=(0,z.$)(),n=(0,M.default)();(0,a.useEffect)((()=>{if(!n)return;const e=n.getControls().getArray().find((e=>e instanceof D.Z));e||n.addControl(new D.Z({target:"scale-line-container"}))}),[n]),(0,a.useEffect)((()=>{if(!n)return;const e=n.getControls().getArray().find((e=>e instanceof N.Z));e||n.addControl(new N.Z({coordinateFormat:(0,R.createStringXY)(2),projection:"EPSG:25832",undefinedHTML:"&nbsp;",target:"mouse-position"}))}),[n]);return n?a.createElement("div",te({className:"footer"},e),a.createElement("div",{className:"item-container left-items"},a.createElement("div",{id:"scale-line-container"}),a.createElement(x.Z,{type:"vertical"}),t("Footer.scale"),":",a.createElement(B.default,{map:n}),a.createElement(x.Z,{type:"vertical"}),a.createElement("div",null,t("Footer.refSystem"),": ",n.getView().getProjection().getCode()),a.createElement(x.Z,{type:"vertical"}),a.createElement("div",null,t("Footer.mousePosition"),":"),a.createElement("div",{id:"mouse-position",className:"mouse-position"})),a.createElement("div",{className:"item-container right-items"},a.createElement(j.default,{onClick:()=>{window.open("https://www.terrestris.de/de/kontakt/","_blank")},type:"link"},t("Footer.contact")),a.createElement(j.default,{onClick:()=>{window.open("https://www.terrestris.de/de/impressum/","_blank")},type:"link"},t("Footer.imprint")),a.createElement(j.default,{onClick:()=>{window.open("https://www.terrestris.de/de/datenschutzerklaerung/","_blank")},type:"link"},t("Footer.privacypolicy")))):a.createElement(a.Fragment,null)};const ae=v.v9;var re=ae,le=n(43985);function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},oe.apply(this,arguments)}var ie=({...e})=>{const t=(0,M.default)(),{t:n}=(0,z.$)();return t?a.createElement(le.default,oe({map:t,countryCodes:"",allowClear:!0,nominatimBaseUrl:"https://nominatim.terrestris.de/search.php?",placeholder:n("Nominatim.placeholder")},e)):a.createElement(a.Fragment,null)},se=n(62923),ce={};ce.styleTagTransform=Q(),ce.setAttributes=H(),ce.insert=U().bind(null,"head"),ce.domAPI=$(),ce.insertStyleElement=J();V()(se.Z,ce),se.Z&&se.Z.locals&&se.Z.locals;function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ue.apply(this,arguments)}var me=({...e})=>{const t=ae((e=>e.title)),n=ae((e=>e.logoPath));return a.createElement("div",ue({className:"header"},e),a.createElement("div",{className:"item-container left-items"},a.createElement("img",{className:"logo",src:n}),a.createElement("div",{className:"title"},t)),a.createElement("div",{className:"item-container center-items"},a.createElement(ie,null)),a.createElement("div",{className:"item-container right-items"}))},de=n(51436),pe=n(17625),ge=n(18151),fe=n(73345),ye=n(54388);var he=()=>(0,v.I0)(),Ee=n(35304);const be=(0,Ee.oM)({name:"toolMenu",initialState:{selectedKeys:[]},reducers:{setSelectedKey(e,t){e.selectedKeys.push(t.payload)},unsetSelectedKey(e,t){e.selectedKeys=e.selectedKeys.filter((e=>e!==t.payload))}}}),{setSelectedKey:ve,unsetSelectedKey:we}=be.actions;var Pe=be.reducer,ke=n(63485),Le=n(23057);function Ze(){return Ze=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ze.apply(this,arguments)}var Fe=({printManager:e,value:t,id:n,placeholder:r,maxLength:l,...o})=>{const[i,s]=(0,a.useState)(t);return(0,a.useEffect)((()=>{e&&n&&(e.customParams[n]=i)}),[e,i,n]),(0,a.useEffect)((()=>{s(t)}),[t]),a.createElement(Le.default,Ze({id:n,value:i,onChange:e=>s(e.target.value),placeholder:r,maxLength:l,showCount:!!(l&&l>1)},o))},Oe=n(76647);function Ce(){return Ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ce.apply(this,arguments)}var Se=({printManager:e,placeholder:t="Bitte wählen Sie eine Vorlage aus",value:n,...r})=>{const[l,o]=(0,a.useState)(n);return(0,a.useEffect)((()=>{e&&e.setLayout(l)}),[e,l]),(0,a.useEffect)((()=>{o(n)}),[n]),a.createElement(Oe.default,Ce({placeholder:t,value:l,onChange:o},r),e?.getLayouts().map((e=>a.createElement(Oe.default.Option,{key:e.name,value:e.name},e.name))))};function Me(){return Me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Me.apply(this,arguments)}var Ie=({printManager:e,placeholder:t,value:n,outputFormats:r,...l})=>{const[o,i]=(0,a.useState)(n);return(0,a.useEffect)((()=>{e&&e.setOutputFormat(o)}),[e,o]),(0,a.useEffect)((()=>{i(n)}),[n]),a.createElement(Oe.default,Me({placeholder:t,value:o,onChange:i},l),r.map((e=>a.createElement(Oe.default.Option,{key:e,value:e},e.toLocaleUpperCase()))))};function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Te.apply(this,arguments)}var Ae=({printManager:e,placeholder:t,value:n,...r})=>{const[l,o]=(0,a.useState)(n);return(0,a.useEffect)((()=>{e&&e.setDpi(l)}),[e,l]),(0,a.useEffect)((()=>{o(n)}),[n]),a.createElement(Oe.default,Te({placeholder:t,value:l,onChange:o},r),e?.getDpis().map((e=>a.createElement(Oe.default.Option,{key:e,value:e},`${e} DPI`))))},xe=n(87650),je={};je.styleTagTransform=Q(),je.setAttributes=H(),je.insert=U().bind(null,"head"),je.domAPI=$(),je.insertStyleElement=J();V()(xe.Z,je),xe.Z&&xe.Z.locals&&xe.Z.locals;function Ne(){return Ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ne.apply(this,arguments)}var De=({layerBlackList:e=[],map:t,printManager:n,...r})=>{const[l]=ke.Z.useForm(),{t:i}=(0,z.$)(),[s,c]=(0,a.useState)(!1),[u,m]=(0,a.useState)(null),p=n=>{const a=n.get("name"),r=!e.includes(a),l=!n.get("hideLegendInPrint"),o=n.getVisible()&&ye.default.layerInResolutionRange(n,t),i=!(n instanceof d.default);if(r&&l&&o&&i){const e=t.getView().getResolution();return e&&n.set("customPrintLegendParams",{SCALE:ye.default.getScaleForResolution(e,"m")}),!0}return!1},g=async()=>{n.legendFilter=p,n.customParams.printLegend=!1};return n?.isInitiated()?a.createElement("div",{className:"print"},u&&a.createElement(o.Z,{className:"print-alert",message:u,type:"error",closable:!0,showIcon:!0,onClose:()=>{m(null)}}),a.createElement(ke.Z,Ne({form:l,className:"print-form",layout:"horizontal",labelCol:{span:4},wrapperCol:{span:20}},r),a.createElement(ke.Z.Item,{name:"title",label:i("PrintForm.title"),labelCol:{span:6},wrapperCol:{span:18},initialValue:i("PrintForm.initialTitle")},a.createElement(Fe,{maxLength:50,printManager:n,placeholder:i("PrintForm.titlePlaceholder")})),a.createElement(ke.Z.Item,{name:"comment",label:i("PrintForm.comment"),labelCol:{span:6},wrapperCol:{span:18}},a.createElement(Fe,{maxLength:200,printManager:n,placeholder:i("PrintForm.commentPlaceholder")})),a.createElement(ke.Z.Item,{name:"layout",label:i("PrintForm.layout"),initialValue:n?.getLayouts()[0]?.name},a.createElement(Se,{printManager:n})),a.createElement(ke.Z.Item,{name:"dpi",label:i("PrintForm.dpi"),initialValue:72},a.createElement(Ae,{printManager:n,placeholder:i("PrintForm.resolutionPlaceholder")})),a.createElement(ke.Z.Item,{name:"format",label:i("PrintForm.format"),initialValue:"pdf"},a.createElement(Ie,{printManager:n,outputFormats:["pdf","jpg","png"],placeholder:i("PrintForm.outputFormatPlaceholder")})),a.createElement(ke.Z.Item,null,a.createElement(j.default,{disabled:!n?.isInitiated(),icon:a.createElement(pe.FontAwesomeIcon,{icon:de.q7m}),loading:s,onClick:async()=>{try{m(null),c(!0),await g();const e=await n.print(!1);if(!e)throw new Error("No download URL available, the job has failed.");window.open(e)}catch(e){m(i("PrintForm.printJobErrorMsg")),P().error(e)}finally{c(!1)}}},i("PrintForm.downloadBtnText"))))):a.createElement(a.Fragment,null)},Re=n(3028),ze=n(42833),Be=n(93893),Ke=n(97491),Ve=n(61580),_e=n(20640),$e=n.n(_e),Ge=n(49466),Ue=n(92371),We=n(30933),He=n(30283),qe=n(51345),Je=n(58958),Ye=n(47539),Qe=n(55384),Xe=n(21922),et=n(86092),tt={};tt.styleTagTransform=Q(),tt.setAttributes=H(),tt.insert=U().bind(null,"head"),tt.domAPI=$(),tt.insertStyleElement=J();V()(et.Z,tt),et.Z&&et.Z.locals&&et.Z.locals;function nt(){return nt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},nt.apply(this,arguments)}var at=({features:e,layerName:t="Unknown layer",...n})=>{const[r,l]=(0,a.useState)(),[o,i]=(0,a.useState)(),s=(0,Qe.useMap)(),{t:c}=(0,z.$)(),u=`selection-layer-${t}`;return(0,a.useEffect)((()=>{if(!s)return;return(()=>{if(ye.default.getLayerByName(s,u))return;const t=new We.default({features:e}),n=new qe.default({color:"rgba(255, 255, 255, 0.15)"}),a=new Je.default({color:"rgba(209, 70, 47, 1)",width:2}),r=new Ye.default({fill:n,stroke:a,image:new He.default({radius:5,fill:n,stroke:a})}),l=new Ue.default({source:t,style:r});l.set("name",u),s.addLayer(l)})(),()=>(()=>{const e=ye.default.getLayerByName(s,u);e&&s.removeLayer(e)})()}),[s]),(0,a.useEffect)((()=>{if(!s)return;const t=ye.default.getLayerByName(s,u);t&&(t.getSource()?.clear(),l(1),e.length>0&&i(e[0]))}),[e,s]),(0,a.useEffect)((()=>{if(!o||!s)return;const e=ye.default.getLayerByName(s,u);e&&(e.getSource()?.clear(),e.getSource()?.addFeature(o))}),[o,s]),o?a.createElement(a.Fragment,null,a.createElement("div",{className:"property-grid-header"},t&&a.createElement("span",null,t),a.createElement("div",{className:"right-elements"},a.createElement(Ke.Z,{simple:!0,total:e.length,size:"small",pageSize:1,current:r,onChange:t=>{l(t),i(e[t-1])}}),a.createElement(Ve.default,{title:"Copy to clipboard"},a.createElement(j.default,{type:"primary",onClick:()=>{$e()((new Ge.default).writeFeature(o))},icon:a.createElement(pe.FontAwesomeIcon,{icon:de.kZ_})})))),a.createElement(Xe.default,nt({feature:o,size:"small",sticky:!0,columns:[{title:"Key",dataIndex:"attributeName",key:"attributeName",width:"50%",ellipsis:!0,defaultSortOrder:"ascend",sorter:(e,t)=>e.key.localeCompare(t.key)},{title:"Value",dataIndex:"attributeValue",key:"attributeValue",width:"50%",ellipsis:!0}],scroll:{y:Object.keys(o.getProperties()).length>6?250:void 0}},n))):a.createElement(a.Fragment,null)},rt=n(16813),lt={};lt.styleTagTransform=Q(),lt.setAttributes=H(),lt.insert=U().bind(null,"head"),lt.domAPI=$(),lt.insertStyleElement=J();V()(rt.Z,lt),rt.Z&&rt.Z.locals&&rt.Z.locals;function ot(){return ot=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ot.apply(this,arguments)}var it=({enabled:e,...t})=>{const{t:n}=(0,z.$)(),r=(0,M.useMap)();if(!r)return a.createElement(a.Fragment,null);const l=ye.default.getAllLayers(r).filter((e=>!!e.get("hoverable")&&(e instanceof Re.default&&e.getSource()instanceof ze.default||e instanceof p.default&&e.getSource()instanceof h.default)));return e?a.createElement(Be.default,ot({featureCount:10,map:r,queryLayers:l,resultRenderer:e=>{const t=e.features,r=e.loading;return 0===Object.keys(t).length?a.createElement("span",null,n("FeatureInfo.usageHint")):Object.entries(t).map((([e,t])=>a.createElement("div",{key:e},a.createElement(at,{features:t,layerName:e,loading:r}))))}},t)):a.createElement(a.Fragment,null)},st=n(74187),ct=n(64289),ut=n(68112),mt=n(97979),dt=n(11382),pt=n(51530),gt=n(86954);function ft(){return ft=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ft.apply(this,arguments)}var yt=({layer:e,visibleLegendsIds:t,setVisibleLegendsIds:n,...l})=>{const[o,i]=(0,a.useState)(!1),[s,c]=(0,a.useState)(!1),u=(0,M.useMap)(),{t:m}=(0,z.$)(),d=async()=>{if(u){c(!0);try{let t=await gt.default.getExtentForLayer(e);t=(0,f.transformExtent)(t,"EPSG:4326",u.getView().getProjection()),u.getView().fit(t)}catch(e){P().error(e),r.Z.error({message:m("LayerTreeContextMenu.extentError")})}finally{c(!1)}}},p=()=>{if(!u)return;const t=m("LayerTree.externalWmsFolder"),n=ye.default.getLayerByName(u,t);if(n){const t=n.getLayers();try{1===t.getLength()&&n.set("hideInLayerTree",!0),t.remove(e)}catch(e){P().error("Could not remove external layer from map.")}}};let g=[{label:a.createElement(dt.default,{spinning:s},m("LayerTreeContextMenu.layerZoomToExtent")),key:"zoomToExtent"}];const y=t.includes((0,st.getUid)(e));e.getVisible()&&g.push({label:m(y?"LayerTreeContextMenu.hideLegend":"LayerTreeContextMenu.showLegend"),key:"toggleLegend"}),e.get("isExternalLayer")&&g.push({label:m("LayerTreeContextMenu.removeLayer"),key:"removeExternal"});const h=a.createElement(ge.Z,{items:g,selectable:!1,onClick:a=>{switch(a?.key){case"zoomToExtent":d();break;case"removeExternal":p();break;case"toggleLegend":const a=(0,st.getUid)(e),r=[...t];r.includes(a)?r.splice(r.indexOf(a),1):r.push(a),n(r)}i(!1)}});return a.createElement(pt.default,ft({overlay:h,placement:"bottomLeft",onVisibleChange:i,visible:o,trigger:["click"]},l),a.createElement(pe.FontAwesomeIcon,{icon:de.iV1}))},ht=n(79770),Et={};Et.styleTagTransform=Q(),Et.setAttributes=H(),Et.insert=U().bind(null,"head"),Et.domAPI=$(),Et.insertStyleElement=J();V()(ht.Z,Et),ht.Z&&ht.Z.locals&&ht.Z.locals;function bt(){return bt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},bt.apply(this,arguments)}var vt=({...e})=>{const t=(0,M.useMap)(),{t:n}=(0,z.$)(),[r,l]=(0,a.useState)([]);return t?a.createElement("div",{className:"layertree"},a.createElement(ct.default,bt({map:t,nodeTitleRenderer:e=>{if(!t)return;const o=t.getView(),i=o.getProjection().getUnits()||"m",s=o.getResolution(),c=s?ye.default.getScaleForResolution(s,i):void 0;return e instanceof d.default?a.createElement("div",null,e.get("name")):a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("div",{className:"tree-node-header"},a.createElement("span",null,e.get("name")),a.createElement(yt,{layer:e,visibleLegendsIds:r,setVisibleLegendsIds:l})),e.get("visible")&&a.createElement(a.Fragment,null,a.createElement("div",{className:"layer-transparency"},a.createElement(mt.default,{tipFormatter:e=>`${n("LayerTree.transparency")}: ${e}%`,layer:e}))),e.get("visible")&&r.includes((0,st.getUid)(e))&&a.createElement(ut.default,{layer:e,errorMsg:n("LayerTree.noLegendAvailable"),extraParams:{scale:c,LEGEND_OPTIONS:"fontAntiAliasing:true;forceLabels:on",TRANSPARENT:!0}})))},filterFunction:e=>e instanceof d.default?!e.get("hideInLayerTree"):!(e.get("isBackgroundLayer")||e.getSource&&e.getSource()instanceof We.default),draggable:{icon:!1}},e))):a.createElement(a.Fragment,null)},wt=n(85214),Pt=n(56479),kt=n(85415),Lt={};Lt.styleTagTransform=Q(),Lt.setAttributes=H(),Lt.insert=U().bind(null,"head"),Lt.domAPI=$(),Lt.insertStyleElement=J();V()(kt.Z,Lt),kt.Z&&kt.Z.locals&&kt.Z.locals;var Zt=()=>{const{t:e}=(0,z.$)(),t=(0,M.useMap)();return t?a.createElement(Pt.default,null,a.createElement(wt.default,{geodesic:!0,name:"line",map:t,measureType:"line",type:"link",continueLineMsg:e("Measure.clicktodrawline")},a.createElement(pe.FontAwesomeIcon,{icon:de.SoD}),a.createElement("span",{className:"measure-text"},e("Measure.line"))),a.createElement(wt.default,{geodesic:!0,name:"poly",map:t,measureType:"polygon",type:"link",continuePolygonMsg:e("Measure.clicktodrawarea")},a.createElement(pe.FontAwesomeIcon,{icon:de.ubJ}),a.createElement("span",{className:"measure-text"},e("Measure.area")))):a.createElement(a.Fragment,null)},Ft=n(35818),Ot={};Ot.styleTagTransform=Q(),Ot.setAttributes=H(),Ot.insert=U().bind(null,"head"),Ot.domAPI=$(),Ot.insertStyleElement=J();V()(Ft.Z,Ot),Ft.Z&&Ft.Z.locals&&Ft.Z.locals;function Ct(){return Ct=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ct.apply(this,arguments)}var St=({...e})=>{const{t:t}=(0,z.$)(),n=(0,M.useMap)(),r=he(),l=re((e=>e.toolMenu.selectedKeys)),[o,i]=(0,a.useState)(!1),[s,c]=(0,a.useState)([]),[u,m]=(0,a.useState)(null);(0,a.useEffect)((()=>(s.includes("print")&&!u&&g(),()=>{u&&s.includes("print")&&(u.shutdownManager(),m(null))})),[s,u]);const p=e=>{if(!n)return;const t=e.get("name");return t&&!["react-geo_measure","hoverVectorLayer"].includes(t)&&e.getVisible()&&!(e instanceof d.default)&&ye.default.layerInResolutionRange(e,n)},g=(0,a.useCallback)((async()=>{const e=new fe.Cf({url:"/print",map:n,timeout:6e4,layerFilter:p,transformOpts:{rotate:!1}});await e.init().then((()=>{e.setOutputFormat(e.getOutputFormats()[0]),e.setDpi(e.getDpis()[0]),e.setLayout(e.getLayouts()[0]?.name)})).catch((e=>{P().error(e)})),m(e)}),[n,t]),f=e=>{i(!1),l.forEach((e=>r(we(e)))),c([e.key])},y=[{className:"measure",key:"measure_tools",icon:a.createElement(pe.FontAwesomeIcon,{icon:de.KxN}),label:t("ToolMenu.measure"),children:[{key:"measure-panel",label:a.createElement(Zt,null)}]},{key:"feature_info",onTitleClick:f,icon:a.createElement(pe.FontAwesomeIcon,{icon:de.kwz}),label:t("ToolMenu.featureInfo"),children:[{key:"feature-info-panel",label:a.createElement(it,{enabled:s.includes("feature_info")})}]},{key:"print",onTitleClick:f,icon:a.createElement(pe.FontAwesomeIcon,{icon:de.kwI}),label:t("ToolMenu.print"),children:[{key:"print-panel",label:a.createElement(De,{printManager:u,map:n})}]},{className:"tree",key:"tree",onTitleClick:f,icon:a.createElement(pe.FontAwesomeIcon,{icon:de.aC2}),label:t("ToolMenu.layertree"),children:[{key:"tree-panel",label:a.createElement("div",{className:"wmsbox"},a.createElement(vt,null),a.createElement(j.default,{icon:a.createElement(pe.FontAwesomeIcon,{icon:de.r8p})},t("ToolMenu.addWms")))}]},{key:"expand_collapse",icon:o?a.createElement(pe.FontAwesomeIcon,{icon:de._tD}):a.createElement(pe.FontAwesomeIcon,{icon:de.A35})}];return a.createElement("div",{className:"tool-menu"},a.createElement(ge.Z,Ct({mode:"inline",inlineCollapsed:o,onSelect:e=>{if("expand_collapse"===e.key)i(!o)},onDeselect:e=>{if("expand_collapse"===e.key)i(!o)},openKeys:s,onOpenChange:e=>{o&&(e=e.filter((e=>"measure_tools"===e||"expand_collapse"===e))),c(e)},multiple:!0,selectedKeys:l,items:y},e)))},Mt=n(65705),It={};It.styleTagTransform=Q(),It.setAttributes=H(),It.insert=U().bind(null,"head"),It.domAPI=$(),It.insertStyleElement=J();V()(Mt.Z,It),Mt.Z&&Mt.Z.locals&&Mt.Z.locals;function Tt(){return Tt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Tt.apply(this,arguments)}var At=({...e})=>a.createElement("div",Tt({className:"App"},e),a.createElement(me,null),a.createElement(A,null),a.createElement(St,null),a.createElement(ne,null)),xt=n(36609),jt=n(26071),Nt=n(68718);xt.ZP.use(jt.Z).use(Nt.Db).init({resources:{de:{translation:{Measure:{title:"Messen",line:"Entfernung",area:"Fläche",clicktodrawline:"Zum Zeichnen einer Linie klicken",clicktodrawarea:"Zum Zeichnen einer Fläche klicken"},FeatureInfo:{usageHint:"Klicken Sie in die Karte, um Detailinformationen zu erhalten."},LayerTree:{transparency:"Transparenz",externalWmsFolder:"Externe Dienste",noLegendAvailable:"Keine Legende verfügbar"},LayerTreeContextMenu:{layerZoomToExtent:"Auf Layerausdehnung zoomen",extentError:"Konnte nicht auf die Layerausdehnung zoomen",removeLayer:"Layer entfernen",showLegend:"Legende anzeigen",hideLegend:"Legende ausblenden"},ToolMenu:{expand:"Erweitern / Einklappen",measure:"Messen",featureInfo:"Karteninhalte abfragen",addWms:"WMS hinzufügen",print:"Export",layertree:"Karten"},PrintForm:{title:"Kartentitel",initialTitle:"Druckausgabe",titlePlaceholder:"Bitte geben Sie einen Titel ein",comment:"Bemerkung",commentPlaceholder:"Bitte geben Sie einen Kommentar ein",layout:"Vorlage",dpi:"Auflösung",format:"Format",downloadBtnText:"Ausdruck erzeugen",printJobErrorMsg:"Der Kartenausdruck konnte nicht erzeugt werden",initErrorMsg:"Der Kartendruck Generator konnte nicht initialisiert werden.",outputFormatPlaceholder:"Bitte wählen Sie ein Ausgabeformat aus",resolutionPlaceholder:"Bitte wählen Sie eine Ausgabequalität aus"},Footer:{refSystem:"Bezugssystem",scale:"Maßstab",mousePosition:"Mausposition",imprint:"Impressum",contact:"Kontakt",privacypolicy:"Datenschutz"},Index:{applicationLoadErrorMessage:"Fehler beim Laden der Applikation",applicationLoadErrorDescription:"Die Applikation mit der ID {{applicationId}} konnte nicht geladen werden. Die Standardkonfiguration wird stattdessen geladen.",errorMessage:"Fehler beim Laden der Applikation",errorDescription:"Aufgrund eines unerwarteten Fehlers konnte die Applikation nicht geladen werden. Bitte laden Sie die Seite erneut."},Nominatim:{placeholder:"Ortsname, Straßenname, Stadtteilname, POI usw."},Drawer:{title:"Themen"}}},en:{translation:{Measure:{title:"Measure",line:"Distance",area:"Area",clicktodrawline:"Click to draw line",clicktodrawarea:"Click to draw area"},FeatureInfo:{usageHint:"Click on the map to get details about the clicked coordinate."},LayerTree:{transparency:"Transparency",externalWmsFolder:"External services",noLegendAvailable:"No legend available"},LayerTreeContextMenu:{layerZoomToExtent:"Zoom to layer extent",extentError:"Could not zoom to layer extent",removeLayer:"Remove layer",showLegend:"Show legend",hideLegend:"Hide legend"},ToolMenu:{expand:"Expand / Collapse",measure:"Measure",featureInfo:"Query map features",addWms:"Add WMS",print:"Export",layertree:"Maps"},PrintForm:{title:"Title",initialTitle:"Title",titlePlaceholder:"Please input a title…",comment:"Comment",commentPlaceholder:"Please enter a comment…",layout:"Layout",dpi:"Resolution",format:"Format",downloadBtnText:"Create print",printJobErrorMsg:"Could not generate PDF output",initErrorMsg:"PDF Generator could not be initialized",outputFormatPlaceholder:"Please select an output format",resolutionPlaceholder:"Please select an output quality"},Footer:{refSystem:"Reference system",scale:"Scale",mousePosition:"Mouse position",imprint:"Imprint",contact:"Contact",privacypolicy:"Privacy"},Index:{applicationLoadErrorMessage:"Error while loading the application",applicationLoadErrorDescription:"The application with ID {{applicationId}} could not be loaded correctly. You're seeing the default application configuration.",errorMessage:"Error while loading the application",errorDescription:"An unexpected error occured while loading the application. Please try to reload the page."},Nominatim:{placeholder:"Place name, street name, district name, POI, etc."},Drawer:{title:"Layers"}}}},fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},supportedLngs:["de","en"]});var Dt=xt.ZP;const Rt=(0,Ee.oM)({name:"logoPath",initialState:"/loading.png",reducers:{setLogoPath:(e,t)=>t.payload}}),{setLogoPath:zt}=Rt.actions;var Bt=Rt.reducer;const Kt=(0,Ee.oM)({name:"title",initialState:"SHOGun Client",reducers:{setTitle:(e,t)=>t.payload}}),{setTitle:Vt}=Kt.actions;var _t=Kt.reducer;const $t=(0,Ee.xC)({reducer:{title:_t,logoPath:Bt,toolMenu:Pe}});var Gt=n(90978),Ut={};Ut.styleTagTransform=Q(),Ut.setAttributes=H(),Ut.insert=U().bind(null,"head"),Ut.domAPI=$(),Ut.insertStyleElement=J();V()(Gt.Z,Ut),Gt.Z&&Gt.Z.locals&&Gt.Z.locals;const Wt=new(S())({url:u().appPrefix||"/"}),Ht=new(O())({client:Wt}),qt=e=>{switch(e){case"en":default:return s.Z;case"de":return i.Z}},Jt=async e=>{const t=await Ht.parseMapView(e),n=await Ht.parseLayerTree(e);return new g.default({view:t,layers:n,controls:(0,m.ce)({zoom:!1})})},Yt=()=>{const e=new p.default({source:new y.default});e.set("name","OpenStreetMap");const t=new p.default({opacity:.5,visible:!0,source:new h.default({url:"https://gibs.earthdata.nasa.gov/wms/epsg3857/best/wms.cgi",projection:"EPSG:3857",params:{LAYERS:"MERRA2_2m_Air_Temperature_Assimilated_Monthly"}})});t.setProperties({name:"2-meter Air Temperature, Assimilated (Monthly, MERRA2)",hoverable:!0});const n=new d.default({layers:[t]});n.set("name","NASA Earth Observations");const a=new d.default({layers:[e]});a.set("name","Background");const r=(0,f.fromLonLat)([0,40],"EPSG:3857");return new g.default({view:new E.default({center:r,zoom:0}),layers:[a,n],controls:(0,m.ce)({zoom:!1})})};(async()=>{try{const e=await(async()=>{const e=L().getQueryParam(window.location.href,"applicationId");if(!e)return void P().info("No application ID given, can't load any configuration.");let t;try{return P().info(`Loading application with ID ${e}`),t=await Wt.application().findOne(e),P().info(`Successfully loaded application with ID ${e}`),t}catch(t){P().error(`Error while loading application with ID ${e}: ${t}`),r.Z.error({message:Dt.t("Index.applicationLoadErrorMessage"),description:Dt.t("Index.applicationLoadErrorDescription",{applicationId:e}),duration:0})}})(),t=(e=>{const t={"--primaryColor":"#59666C","--secondaryColor":"#70B3BE","--complementaryColor":"#FFFFFF"};return e?(e.primaryColor&&(t["--primaryColor"]=e.primaryColor),e.secondaryColor&&(t["--secondaryColor"]=e.secondaryColor),e.secondaryColor&&(t["--complementaryColor"]=e.complementaryColor),t):t})(e?.clientConfig?.theme);l.ZP.config({theme:{primaryColor:t["--primaryColor"]}}),$t.subscribe((()=>{document.title=$t.getState().title})),(async e=>{e?(e.name&&$t.dispatch(Vt(e.name)),e?.clientConfig?.theme?.logoPath&&$t.dispatch(zt(e.clientConfig.theme.logoPath))):P().info("No application configuration provided, the default store will be loaded")})(e);const n=await(async e=>e?await Jt(e):(P().info("No application configuration provided, the default map will be loaded"),Yt()))(e);(0,b.render)(a.createElement(a.StrictMode,null,a.createElement(a.Suspense,{fallback:a.createElement("span",null)},a.createElement(l.ZP,{locale:qt(Dt.language)},a.createElement(v.zt,{store:$t},a.createElement(Z.default.Provider,{value:n},a.createElement(At,{style:t})))))),document.getElementById("app"))}catch(e){P().error(e),(0,b.render)(a.createElement(a.StrictMode,null,a.createElement(o.Z,{className:"error-boundary",message:Dt.t("Index.errorMessage"),description:Dt.t("Index.errorDescription"),type:"error",showIcon:!0})),document.getElementById("app"))}})()},65705:function(e,t,n){var a=n(87537),r=n.n(a),l=n(23645),o=n.n(l)()(r());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=o},78415:function(e,t,n){var a=n(87537),r=n.n(a),l=n(23645),o=n.n(l)()(r());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=o},62923:function(e,t,n){var a=n(87537),r=n.n(a),l=n(23645),o=n.n(l)()(r());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=o},87650:function(e,t,n){var a=n(87537),r=n.n(a),l=n(23645),o=n.n(l)()(r());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=o},86092:function(e,t,n){var a=n(87537),r=n.n(a),l=n(23645),o=n.n(l)()(r());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=o},16813:function(e,t,n){var a=n(87537),r=n.n(a),l=n(23645),o=n.n(l)()(r());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=o},79770:function(e,t,n){var a=n(87537),r=n.n(a),l=n(23645),o=n.n(l)()(r());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=o},85415:function(e,t,n){var a=n(87537),r=n.n(a),l=n(23645),o=n.n(l)()(r());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=o},35818:function(e,t,n){var a=n(87537),r=n.n(a),l=n(23645),o=n.n(l)()(r());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=o},90978:function(e,t,n){var a=n(87537),r=n.n(a),l=n(23645),o=n.n(l)()(r());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.Z=o}}]);
//# sourceMappingURL=common.5cc97e1c0ce66942bf74.js.map