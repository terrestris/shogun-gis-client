define("vs/basic-languages/markdown/markdown",["require","require"],e=>(()=>{var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,s={};((t,n)=>{for(var o in n)e(t,o,{get:n[o],enumerable:!0})})(s,{conf:()=>r,language:()=>a});var r={comments:{blockComment:["\x3c!--","--\x3e"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">",notIn:["string"]}],surroundingPairs:[{open:"(",close:")"},{open:"[",close:"]"},{open:"`",close:"`"}],folding:{markers:{start:RegExp("^\\s*\x3c!--\\s*#?region\\b.*--\x3e"),end:RegExp("^\\s*\x3c!--\\s*#?endregion\\b.*--\x3e")}}},a={defaultToken:"",tokenPostfix:".md",control:/[\\`*_\[\]{}()#+\-\.!]/,noncontrol:/[^\\`*_\[\]{}()#+\-\.!]/,escapes:/\\(?:@control)/,jsescapes:/\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,empty:["area","base","basefont","br","col","frame","hr","img","input","isindex","link","meta","param"],tokenizer:{root:[[/^\s*\|/,"@rematch","@table_header"],[/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/,["white","keyword","keyword","keyword"]],[/^\s*(=+|\-+)\s*$/,"keyword"],[/^\s*((\*[ ]?)+)\s*$/,"meta.separator"],[/^\s*>+/,"comment"],[/^\s*([\*\-+:]|\d+\.)\s/,"keyword"],[/^(\t|[ ]{4})[^ ].*$/,"string"],[/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/,{token:"string",next:"@codeblock"}],[/^\s*```\s*((?:\w|[\/\-#])+).*$/,{token:"string",next:"@codeblockgh",nextEmbedded:"$1"}],[/^\s*```\s*$/,{token:"string",next:"@codeblock"}],{include:"@linecontent"}],table_header:[{include:"@table_common"},[/[^\|]+/,"keyword.table.header"]],table_body:[{include:"@table_common"},{include:"@linecontent"}],table_common:[[/\s*[\-:]+\s*/,{token:"keyword",switchTo:"table_body"}],[/^\s*\|/,"keyword.table.left"],[/^\s*[^\|]/,"@rematch","@pop"],[/^\s*$/,"@rematch","@pop"],[/\|/,{cases:{"@eos":"keyword.table.right","@default":"keyword.table.middle"}}]],codeblock:[[/^\s*~~~\s*$/,{token:"string",next:"@pop"}],[/^\s*```\s*$/,{token:"string",next:"@pop"}],[/.*$/,"variable.source"]],codeblockgh:[[/```\s*$/,{token:"string",next:"@pop",nextEmbedded:"@pop"}],[/[^`]+/,"variable.source"]],linecontent:[[/&\w+;/,"string.escape"],[/@escapes/,"escape"],[/\b__([^\\_]|@escapes|_(?!_))+__\b/,"strong"],[/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/,"strong"],[/\b_[^_]+_\b/,"emphasis"],[/\*([^\\*]|@escapes)+\*/,"emphasis"],[/`([^\\`]|@escapes)+`/,"variable"],[/\{+[^}]+\}+/,"string.target"],[/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/,["string.link","","string.link"]],[/(!?\[)((?:[^\]\\]|@escapes)*)(\])/,"string.link"],{include:"html"}],html:[[/<(\w+)\/>/,"tag"],[/<(\w+)(\-|\w)*/,{cases:{"@empty":{token:"tag",next:"@tag.$1"},"@default":{token:"tag",next:"@tag.$1"}}}],[/<\/(\w+)(\-|\w)*\s*>/,{token:"tag"}],[/<!--/,"comment","@comment"]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,"comment","@pop"],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]],tag:[[/[ \t\r\n]+/,"white"],[/(type)(\s*=\s*)(")([^"]+)(")/,["attribute.name.html","delimiter.html","string.html",{token:"string.html",switchTo:"@tag.$S2.$4"},"string.html"]],[/(type)(\s*=\s*)(')([^']+)(')/,["attribute.name.html","delimiter.html","string.html",{token:"string.html",switchTo:"@tag.$S2.$4"},"string.html"]],[/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name.html","delimiter.html","string.html"]],[/\w+/,"attribute.name.html"],[/\/>/,"tag","@pop"],[/>/,{cases:{"$S2==style":{token:"tag",switchTo:"embeddedStyle",nextEmbedded:"text/css"},"$S2==script":{cases:{$S3:{token:"tag",switchTo:"embeddedScript",nextEmbedded:"$S3"},"@default":{token:"tag",switchTo:"embeddedScript",nextEmbedded:"text/javascript"}}},"@default":{token:"tag",next:"@pop"}}}]],embeddedStyle:[[/[^<]+/,""],[/<\/style\s*>/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/</,""]],embeddedScript:[[/[^<]+/,""],[/<\/script\s*>/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/</,""]]}};return((s,r,a,c)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let a of n(r))o.call(s,a)||void 0===a||e(s,a,{get:()=>r[a],enumerable:!(c=t(r,a))||c.enumerable});return s})(e({},"__esModule",{value:!0}),s)})());