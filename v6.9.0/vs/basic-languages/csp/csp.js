/*! For license information please see csp.js.LICENSE.txt */
"use strict";define("vs/basic-languages/csp/csp",["require","require"],(e=>(()=>{var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,o={};((t,r)=>{for(var s in r)e(t,s,{get:r[s],enumerable:!0})})(o,{conf:()=>i,language:()=>u});var n,i={brackets:[],autoClosingPairs:[],surroundingPairs:[]},u={keywords:[],typeKeywords:[],tokenPostfix:".csp",operators:[],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/child-src/,"string.quote"],[/connect-src/,"string.quote"],[/default-src/,"string.quote"],[/font-src/,"string.quote"],[/frame-src/,"string.quote"],[/img-src/,"string.quote"],[/manifest-src/,"string.quote"],[/media-src/,"string.quote"],[/object-src/,"string.quote"],[/script-src/,"string.quote"],[/style-src/,"string.quote"],[/worker-src/,"string.quote"],[/base-uri/,"string.quote"],[/plugin-types/,"string.quote"],[/sandbox/,"string.quote"],[/disown-opener/,"string.quote"],[/form-action/,"string.quote"],[/frame-ancestors/,"string.quote"],[/report-uri/,"string.quote"],[/report-to/,"string.quote"],[/upgrade-insecure-requests/,"string.quote"],[/block-all-mixed-content/,"string.quote"],[/require-sri-for/,"string.quote"],[/reflected-xss/,"string.quote"],[/referrer/,"string.quote"],[/policy-uri/,"string.quote"],[/'self'/,"string.quote"],[/'unsafe-inline'/,"string.quote"],[/'unsafe-eval'/,"string.quote"],[/'strict-dynamic'/,"string.quote"],[/'unsafe-hashed-attributes'/,"string.quote"]]}};return n=o,((o,n,i,u)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let g of r(n))!s.call(o,g)&&g!==i&&e(o,g,{get:()=>n[g],enumerable:!(u=t(n,g))||u.enumerable});return o})(e({},"__esModule",{value:!0}),n)})()));