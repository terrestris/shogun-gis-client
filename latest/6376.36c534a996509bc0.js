(self.webpackChunk_terrestris_shogun_gis_client=self.webpackChunk_terrestris_shogun_gis_client||[]).push([["6376"],{20119:function(e,t,n){"use strict";let r;n.r(t),n.d(t,{selectOrdinal:function(){return eu},TransWithoutContext:function(){return U},getDefaults:function(){return S},Translation:function(){return ee},setDefaults:function(){return k},time:function(){return ea},useSSR:function(){return en},withSSR:function(){return er},withTranslation:function(){return Q},I18nextProvider:function(){return et},useTranslation:function(){return Z},select:function(){return el},date:function(){return ei},number:function(){return es},setI18n:function(){return T},Trans:function(){return G},composeInitialProps:function(){return K},getInitialProps:function(){return q},I18nContext:function(){return H},getI18n:function(){return A},initReactI18next:function(){return W},plural:function(){return eo}});var i=n(9948),a=n(71739),s=n.n(a),l=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function o(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(s()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var i=new RegExp(l),a=null;null!==(a=i.exec(e));)if(a[0].trim()){if(a[1]){var o=a[1].trim(),u=[o,""];o.indexOf("=")>-1&&(u=o.split("=")),t.attrs[u[0]]=u[1],i.lastIndex--}else a[2]&&(t.attrs[a[2]]=a[3].trim().substring(1,a[3].length-1))}return t}var u=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,c=/^\s*$/,p=Object.create(null),f={parse:function(e,t){t||(t={}),t.components||(t.components=p);var n,r=[],i=[],a=-1,s=!1;if(0!==e.indexOf("<")){var l=e.indexOf("<");r.push({type:"text",content:-1===l?e:e.substring(0,l)})}return e.replace(u,function(l,u){if(s){if(l!=="</"+n.name+">")return;s=!1}var p,f="/"!==l.charAt(1),d=l.startsWith("\x3c!--"),g=u+l.length,m=e.charAt(g);if(d){var h=o(l);return a<0?r.push(h):(p=i[a]).children.push(h),r}if(f&&(a++,"tag"===(n=o(l)).type&&t.components[n.name]&&(n.type="component",s=!0),n.voidElement||s||!m||"<"===m||n.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===a&&r.push(n),(p=i[a-1])&&p.children.push(n),i[a]=n),(!f||n.voidElement)&&(a>-1&&(n.voidElement||n.name===l.slice(2,-1))&&(n=-1==--a?r:i[a]),!s&&"<"!==m&&m)){p=-1===a?r:i[a].children;var y=e.indexOf("<",g),N=e.slice(g,-1===y?void 0:y);c.test(N)&&(N=" "),(y>-1&&a+p.length>=0||" "!==N)&&p.push({type:"text",content:N})}}),r}};let d=(e,t,n,r)=>{let i=[n,{code:t,...r||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(i,"warn","react-i18next::",!0);b(i[0])&&(i[0]=`react-i18next:: ${i[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...i):console?.warn&&console.warn(...i)},g={},m=(e,t,n,r)=>{b(n)&&g[n]||(b(n)&&(g[n]=new Date),d(e,t,n,r))},h=(e,t)=>()=>{if(e.isInitialized)t();else{let n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},y=(e,t,n)=>{e.loadNamespaces(t,h(e,n))},N=(e,t,n,r)=>{if(b(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return y(e,n,r);n.forEach(t=>{0>e.options.ns.indexOf(t)&&e.options.ns.push(t)}),e.loadLanguages(t,h(e,r))},E=(e,t,n={})=>t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,r)=>{if(n.bindI18n?.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):(m(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0),x=e=>e.displayName||e.name||(b(e)&&e.length>0?e:"Unknown"),b=e=>"string"==typeof e,v=e=>"object"==typeof e&&null!==e,O=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,I={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},w=e=>I[e],$={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(O,w)},k=(e={})=>{$={...$,...e}},S=()=>$,T=e=>{r=e},A=()=>r,R=(e,t)=>{if(!e)return!1;let n=e.props?.children??e.children;return t?n.length>0:!!n},C=e=>{if(!e)return[];let t=e.props?.children??e.children;return e.props?.i18nIsDynamicList?j(t):t},_=e=>Array.isArray(e)&&e.every(i.isValidElement),j=e=>Array.isArray(e)?e:[e],L=(e,t)=>{let n={...t};return n.props=Object.assign(e.props,t.props),n},P=(e,t,n,r)=>{if(!e)return"";let a="",s=j(e),l=t?.transSupportBasicHtmlNodes?t.transKeepBasicHtmlNodesFor??[]:[];return s.forEach((e,s)=>{if(b(e)){a+=`${e}`;return}if((0,i.isValidElement)(e)){let{props:i,type:o}=e,u=Object.keys(i).length,c=l.indexOf(o)>-1,p=i.children;if(!p&&c&&!u){a+=`<${o}/>`;return}if(!p&&(!c||u)||i.i18nIsDynamicList){a+=`<${s}></${s}>`;return}if(c&&1===u&&b(p)){a+=`<${o}>${p}</${o}>`;return}let f=P(p,t,n,r);a+=`<${s}>${f}</${s}>`;return}if(null===e){d(n,"TRANS_NULL_VALUE","Passed in a null value as child",{i18nKey:r});return}if(v(e)){let{format:t,...i}=e,s=Object.keys(i);if(1===s.length){let e=t?`${s[0]}, ${t}`:s[0];a+=`{{${e}}}`;return}d(n,"TRANS_INVALID_OBJ","Invalid child - Object should only have keys {{ value, format }} (format is optional).",{i18nKey:r,child:e});return}d(n,"TRANS_INVALID_VAR","Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.",{i18nKey:r,child:e})}),a},V=(e,t,n,r,a,s)=>{if(""===t)return[];let l=r.transKeepBasicHtmlNodesFor||[],o=t&&new RegExp(l.map(e=>`<${e}`).join("|")).test(t);if(!e&&!o&&!s)return[t];let u={},c=e=>{j(e).forEach(e=>{b(e)||(R(e)?c(C(e)):v(e)&&!(0,i.isValidElement)(e)&&Object.assign(u,e))})};c(e);let p=f.parse(`<0>${t}</0>`),d={...u,...a},g=(e,t,n)=>{let r=C(e),i=h(r,t.children,n);return _(r)&&0===i.length||e.props?.i18nIsDynamicList?r:i},m=(e,t,n,r,a)=>{e.dummy?(e.children=t,n.push((0,i.cloneElement)(e,{key:r},a?void 0:t))):n.push(...i.Children.map([e],e=>{let n={...e.props};return delete n.i18nIsDynamicList,(0,i.createElement)(e.type,{...n,key:r,ref:e.ref},a?null:t)}))},h=(t,a,u)=>{let c=j(t);return j(a).reduce((t,a,p)=>{let f=a.children?.[0]?.content&&n.services.interpolator.interpolate(a.children[0].content,d,n.language);if("tag"===a.type){let s=c[parseInt(a.name,10)];1!==u.length||s||(s=u[0][a.name]),s||(s={});let y=0!==Object.keys(a.attrs).length?L({props:a.attrs},s):s,N=(0,i.isValidElement)(y),E=N&&R(a,!0)&&!a.voidElement,x=o&&v(y)&&y.dummy&&!N,O=v(e)&&Object.hasOwnProperty.call(e,a.name);if(b(y)){let e=n.services.interpolator.interpolate(y,d,n.language);t.push(e)}else if(R(y)||E){let e=g(y,a,u);m(y,e,t,p)}else if(x)m(y,h(c,a.children,u),t,p);else if(Number.isNaN(parseFloat(a.name))){if(O){let e=g(y,a,u);m(y,e,t,p,a.voidElement)}else if(r.transSupportBasicHtmlNodes&&l.indexOf(a.name)>-1){if(a.voidElement)t.push((0,i.createElement)(a.name,{key:`${a.name}-${p}`}));else{let e=h(c,a.children,u);t.push((0,i.createElement)(a.name,{key:`${a.name}-${p}`},e))}}else if(a.voidElement)t.push(`<${a.name} />`);else{let e=h(c,a.children,u);t.push(`<${a.name}>${e}</${a.name}>`)}}else if(v(y)&&!N){let e=a.children[0]?f:null;e&&t.push(e)}else m(y,f,t,p,1!==a.children.length||!f)}else if("text"===a.type){let e=r.transWrapTextNodes,l=s?r.unescape(n.services.interpolator.interpolate(a.content,d,n.language)):n.services.interpolator.interpolate(a.content,d,n.language);e?t.push((0,i.createElement)(e,{key:`${a.name}-${p}`},l)):t.push(l)}return t},[])};return C(h([{dummy:!0,children:e||[]}],p,j(e||[]))[0])},D=(e,t,n)=>{let r=e.key||t,a=(0,i.cloneElement)(e,{key:r});return!a.props||!a.props.children||0>n.indexOf(`${t}/>`)&&0>n.indexOf(`${t} />`)?a:(0,i.createElement)(function(){return(0,i.createElement)(i.Fragment,null,a)})},z=(e,t)=>e.map((e,n)=>D(e,n,t)),F=(e,t)=>{let n={};return Object.keys(e).forEach(r=>{Object.assign(n,{[r]:D(e[r],r,t)})}),n},B=(e,t,n,r)=>e?Array.isArray(e)?z(e,t):v(e)?F(e,t):(m(n,"TRANS_INVALID_COMPONENTS",'<Trans /> "components" prop expects an object or array',{i18nKey:r}),null):null;function U({children:e,count:t,parent:n,i18nKey:r,context:a,tOptions:s={},values:l,defaults:o,components:u,ns:c,i18n:p,t:f,shouldUnescape:d,...g}){let h=p||A();if(!h)return m(h,"NO_I18NEXT_INSTANCE","Trans: You need to pass in an i18next instance using i18nextReactModule",{i18nKey:r}),e;let y=f||h.t.bind(h)||(e=>e),N={...S(),...h.options?.react},E=c||y.ns||h.options?.defaultNS;E=b(E)?[E]:E||["translation"];let x=P(e,N,h,r),v=o||x||N.transEmptyNodeValue||r,{hashTransKey:O}=N,I=r||(O?O(x||v):x||v);h.options?.interpolation?.defaultVariables&&(l=l&&Object.keys(l).length>0?{...l,...h.options.interpolation.defaultVariables}:{...h.options.interpolation.defaultVariables});let w=!l&&(void 0===t||h.options?.interpolation?.alwaysFormat)&&e?{interpolation:{...s.interpolation,prefix:"#$?",suffix:"?$#"}}:s.interpolation,$={...s,context:a||s.context,count:t,...l,...w,defaultValue:v,ns:E},k=I?y(I,$):v,T=V(B(u,k,h,r)||e,k,h,N,$,d),R=n??N.defaultTransParent;return R?(0,i.createElement)(R,g,T):T}let W={type:"3rdParty",init(e){k(e.options.react),T(e)}},H=(0,i.createContext)();class M{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}let K=e=>async t=>{let n=await e.getInitialProps?.(t)??{},r=q();return{...n,...r}},q=()=>{let e=A(),t=e.reportNamespaces?.getUsedNamespaces()??[],n={},r={};return e.languages.forEach(n=>{r[n]={},t.forEach(t=>{r[n][t]=e.getResourceBundle(n,t)||{}})}),n.initialI18nStore=r,n.initialLanguage=e.language,n};function G({children:e,count:t,parent:n,i18nKey:r,context:a,tOptions:s={},values:l,defaults:o,components:u,ns:c,i18n:p,t:f,shouldUnescape:d,...g}){let{i18n:m,defaultNS:h}=(0,i.useContext)(H)||{},y=p||m||A(),N=f||y?.t.bind(y);return U({children:e,count:t,parent:n,i18nKey:r,context:a,tOptions:s,values:l,defaults:o,components:u,ns:c||N?.ns||h||y?.options?.defaultNS,i18n:y,t:f,shouldUnescape:d,...g})}let X=(e,t)=>{let n=(0,i.useRef)();return(0,i.useEffect)(()=>{n.current=t?n.current:e},[e,t]),n.current},Y=(e,t,n,r)=>e.getFixedT(t,n,r),J=(e,t,n,r)=>(0,i.useCallback)(Y(e,t,n,r),[e,t,n,r]),Z=(e,t={})=>{let{i18n:n}=t,{i18n:r,defaultNS:a}=(0,i.useContext)(H)||{},s=n||r||A();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new M),!s){m(s,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");let e=(e,t)=>b(t)?t:v(t)&&b(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e,t=[e,{},!1];return t.t=e,t.i18n={},t.ready=!1,t}s.options.react?.wait&&m(s,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");let l={...S(),...s.options.react,...t},{useSuspense:o,keyPrefix:u}=l,c=e||a||s.options?.defaultNS;c=b(c)?[c]:c||["translation"],s.reportNamespaces.addUsedNamespaces?.(c);let p=(s.isInitialized||s.initializedStoreOnce)&&c.every(e=>E(e,s,l)),f=J(s,t.lng||null,"fallback"===l.nsMode?c:c[0],u),d=()=>f,g=()=>Y(s,t.lng||null,"fallback"===l.nsMode?c:c[0],u),[h,x]=(0,i.useState)(d),O=c.join();t.lng&&(O=`${t.lng}${O}`);let I=X(O),w=(0,i.useRef)(!0);(0,i.useEffect)(()=>{let{bindI18n:e,bindI18nStore:n}=l;w.current=!0,p||o||(t.lng?N(s,t.lng,c,()=>{w.current&&x(g)}):y(s,c,()=>{w.current&&x(g)})),p&&I&&I!==O&&w.current&&x(g);let r=()=>{w.current&&x(g)};return e&&s?.on(e,r),n&&s?.store.on(n,r),()=>{w.current=!1,s&&e?.split(" ").forEach(e=>s.off(e,r)),n&&s&&n.split(" ").forEach(e=>s.store.off(e,r))}},[s,O]),(0,i.useEffect)(()=>{w.current&&p&&x(d)},[s,u,p]);let $=[h,s,p];if($.t=h,$.i18n=s,$.ready=p,p||!p&&!o)return $;throw new Promise(e=>{t.lng?N(s,t.lng,c,()=>e()):y(s,c,()=>e())})},Q=(e,t={})=>function(n){function r({forwardedRef:r,...a}){let[s,l,o]=Z(e,{...a,keyPrefix:t.keyPrefix}),u={...a,t:s,i18n:l,tReady:o};return t.withRef&&r?u.ref=r:!t.withRef&&r&&(u.forwardedRef=r),(0,i.createElement)(n,u)}return r.displayName=`withI18nextTranslation(${x(n)})`,r.WrappedComponent=n,t.withRef?(0,i.forwardRef)((e,t)=>(0,i.createElement)(r,Object.assign({},e,{forwardedRef:t}))):r},ee=({ns:e,children:t,...n})=>{let[r,i,a]=Z(e,n);return t(r,{i18n:i,lng:i.language},a)};function et({i18n:e,defaultNS:t,children:n}){let r=(0,i.useMemo)(()=>({i18n:e,defaultNS:t}),[e,t]);return(0,i.createElement)(H.Provider,{value:r},n)}let en=(e,t,n={})=>{let{i18n:r}=n,{i18n:a}=(0,i.useContext)(H)||{},s=r||a||A();s.options?.isClone||(e&&!s.initializedStoreOnce&&(s.services.resourceStore.data=e,s.options.ns=Object.values(e).reduce((e,t)=>(Object.keys(t).forEach(t=>{0>e.indexOf(t)&&e.push(t)}),e),s.options.ns),s.initializedStoreOnce=!0,s.isInitialized=!0),!t||s.initializedLanguageOnce||(s.changeLanguage(t),s.initializedLanguageOnce=!0))},er=()=>function(e){function t({initialI18nStore:t,initialLanguage:n,...r}){return en(t,n),(0,i.createElement)(e,{...r})}return t.getInitialProps=K(e),t.displayName=`withI18nextSSR(${x(e)})`,t.WrappedComponent=e,t},ei=()=>"",ea=()=>"",es=()=>"",el=()=>"",eo=()=>"",eu=()=>""},71739:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);
//# sourceMappingURL=6376.36c534a996509bc0.js.map