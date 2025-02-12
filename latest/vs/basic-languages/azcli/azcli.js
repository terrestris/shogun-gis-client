define("vs/basic-languages/azcli/azcli",["require","require"],e=>(()=>{var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,r={};((t,n)=>{for(var o in n)e(t,o,{get:n[o],enumerable:!0})})(r,{conf:()=>i,language:()=>s});var i={comments:{lineComment:"#"}},s={defaultToken:"keyword",ignoreCase:!0,tokenPostfix:".azcli",str:/[^#\s]/,tokenizer:{root:[{include:"@comment"},[/\s-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}],[/^-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}]],type:[{include:"@comment"},[/-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":"key.identifier"}}],[/@str+\s*/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}]],comment:[[/#.*$/,{cases:{"@eos":{token:"comment",next:"@popall"}}}]]}};return((r,i,s,a)=>{if(i&&"object"==typeof i||"function"==typeof i)for(let s of n(i))o.call(r,s)||void 0===s||e(r,s,{get:()=>i[s],enumerable:!(a=t(i,s))||a.enumerable});return r})(e({},"__esModule",{value:!0}),r)})());