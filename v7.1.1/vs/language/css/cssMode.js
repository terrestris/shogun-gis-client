/*! For license information please see cssMode.js.LICENSE.txt */
"use strict";define("vs/language/css/cssMode",["require","require"],(e=>(()=>{var t,n=Object.create,r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,u=(t=function(t){if(void 0!==e)return e.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')},void 0!==e?e:"undefined"!=typeof Proxy?new Proxy(t,{get:(t,n)=>(void 0!==e?e:t)[n]}):t),c=(e,t,n,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let u of o(t))!s.call(e,u)&&u!==n&&r(e,u,{get:()=>t[u],enumerable:!(a=i(t,u))||a.enumerable});return e},d=(e,t,i)=>(i=null!=e?n(a(e)):{},c(!t&&e&&e.__esModule?i:r(i,"default",{value:e,enumerable:!0}),e)),g=((e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports))(((e,t)=>{var n=d(u("vs/editor/editor.api"));t.exports=n})),l={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(l,{CompletionAdapter:()=>xe,DefinitionAdapter:()=>je,DiagnosticsAdapter:()=>ye,DocumentColorAdapter:()=>qe,DocumentFormattingEditProvider:()=>Ke,DocumentHighlightAdapter:()=>Fe,DocumentLinkAdapter:()=>He,DocumentRangeFormattingEditProvider:()=>ze,DocumentSymbolAdapter:()=>We,FoldingRangeAdapter:()=>Be,HoverAdapter:()=>De,ReferenceAdapter:()=>Ne,RenameAdapter:()=>Ue,SelectionRangeAdapter:()=>$e,WorkerManager:()=>W,fromPosition:()=>Ce,fromRange:()=>Ae,setupMode:()=>Qe,toRange:()=>Ie,toTextEdit:()=>Re});var f={};((e,t,n)=>{c(e,t,"default"),n&&c(n,t,"default")})(f,d(g()));var h,p,v,m,_,w,b,k,y,E,x,C,A,I,S,R,T,D,M,P,F,L,j,O,N,U,W=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=f.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};!function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647}(h||(h={})),function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647}(p||(p={})),function(e){e.create=function(e,t){return e===Number.MAX_VALUE&&(e=p.MAX_VALUE),t===Number.MAX_VALUE&&(t=p.MAX_VALUE),{line:e,character:t}},e.is=function(e){var t=e;return be.objectLiteral(t)&&be.uinteger(t.line)&&be.uinteger(t.character)}}(v||(v={})),function(e){e.create=function(e,t,n,r){if(be.uinteger(e)&&be.uinteger(t)&&be.uinteger(n)&&be.uinteger(r))return{start:v.create(e,t),end:v.create(n,r)};if(v.is(e)&&v.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},e.is=function(e){var t=e;return be.objectLiteral(t)&&v.is(t.start)&&v.is(t.end)}}(m||(m={})),function(e){e.create=function(e,t){return{uri:e,range:t}},e.is=function(e){var t=e;return be.defined(t)&&m.is(t.range)&&(be.string(t.uri)||be.undefined(t.uri))}}(_||(_={})),function(e){e.create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},e.is=function(e){var t=e;return be.defined(t)&&m.is(t.targetRange)&&be.string(t.targetUri)&&(m.is(t.targetSelectionRange)||be.undefined(t.targetSelectionRange))&&(m.is(t.originSelectionRange)||be.undefined(t.originSelectionRange))}}(w||(w={})),function(e){e.create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},e.is=function(e){var t=e;return be.numberRange(t.red,0,1)&&be.numberRange(t.green,0,1)&&be.numberRange(t.blue,0,1)&&be.numberRange(t.alpha,0,1)}}(b||(b={})),function(e){e.create=function(e,t){return{range:e,color:t}},e.is=function(e){var t=e;return m.is(t.range)&&b.is(t.color)}}(k||(k={})),function(e){e.create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},e.is=function(e){var t=e;return be.string(t.label)&&(be.undefined(t.textEdit)||D.is(t))&&(be.undefined(t.additionalTextEdits)||be.typedArray(t.additionalTextEdits,D.is))}}(y||(y={})),function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(E||(E={})),function(e){e.create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return be.defined(n)&&(o.startCharacter=n),be.defined(r)&&(o.endCharacter=r),be.defined(i)&&(o.kind=i),o},e.is=function(e){var t=e;return be.uinteger(t.startLine)&&be.uinteger(t.startLine)&&(be.undefined(t.startCharacter)||be.uinteger(t.startCharacter))&&(be.undefined(t.endCharacter)||be.uinteger(t.endCharacter))&&(be.undefined(t.kind)||be.string(t.kind))}}(x||(x={})),function(e){e.create=function(e,t){return{location:e,message:t}},e.is=function(e){var t=e;return be.defined(t)&&_.is(t.location)&&be.string(t.message)}}(C||(C={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(A||(A={})),function(e){e.Unnecessary=1,e.Deprecated=2}(I||(I={})),function(e){e.is=function(e){var t=e;return null!=t&&be.string(t.href)}}(S||(S={})),function(e){e.create=function(e,t,n,r,i,o){var a={range:e,message:t};return be.defined(n)&&(a.severity=n),be.defined(r)&&(a.code=r),be.defined(i)&&(a.source=i),be.defined(o)&&(a.relatedInformation=o),a},e.is=function(e){var t,n=e;return be.defined(n)&&m.is(n.range)&&be.string(n.message)&&(be.number(n.severity)||be.undefined(n.severity))&&(be.integer(n.code)||be.string(n.code)||be.undefined(n.code))&&(be.undefined(n.codeDescription)||be.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(be.string(n.source)||be.undefined(n.source))&&(be.undefined(n.relatedInformation)||be.typedArray(n.relatedInformation,C.is))}}(R||(R={})),function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return be.defined(n)&&n.length>0&&(i.arguments=n),i},e.is=function(e){var t=e;return be.defined(t)&&be.string(t.title)&&be.string(t.command)}}(T||(T={})),function(e){e.replace=function(e,t){return{range:e,newText:t}},e.insert=function(e,t){return{range:{start:e,end:e},newText:t}},e.del=function(e){return{range:e,newText:""}},e.is=function(e){var t=e;return be.objectLiteral(t)&&be.string(t.newText)&&m.is(t.range)}}(D||(D={})),function(e){e.create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},e.is=function(e){var t=e;return void 0!==t&&be.objectLiteral(t)&&be.string(t.label)&&(be.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(be.string(t.description)||void 0===t.description)}}(M||(M={})),function(e){e.is=function(e){return"string"==typeof e}}(P||(P={})),function(e){e.replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},e.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},e.del=function(e,t){return{range:e,newText:"",annotationId:t}},e.is=function(e){var t=e;return D.is(t)&&(M.is(t.annotationId)||P.is(t.annotationId))}}(F||(F={})),function(e){e.create=function(e,t){return{textDocument:e,edits:t}},e.is=function(e){var t=e;return be.defined(t)&&K.is(t.textDocument)&&Array.isArray(t.edits)}}(L||(L={})),function(e){e.create=function(e,t,n){var r={kind:"create",uri:e};return void 0!==t&&(void 0!==t.overwrite||void 0!==t.ignoreIfExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r},e.is=function(e){var t=e;return t&&"create"===t.kind&&be.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||be.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||be.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||P.is(t.annotationId))}}(j||(j={})),function(e){e.create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0!==n&&(void 0!==n.overwrite||void 0!==n.ignoreIfExists)&&(i.options=n),void 0!==r&&(i.annotationId=r),i},e.is=function(e){var t=e;return t&&"rename"===t.kind&&be.string(t.oldUri)&&be.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||be.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||be.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||P.is(t.annotationId))}}(O||(O={})),function(e){e.create=function(e,t,n){var r={kind:"delete",uri:e};return void 0!==t&&(void 0!==t.recursive||void 0!==t.ignoreIfNotExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r},e.is=function(e){var t=e;return t&&"delete"===t.kind&&be.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||be.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||be.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||P.is(t.annotationId))}}(N||(N={})),function(e){e.is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return be.string(e.kind)?j.is(e)||O.is(e)||N.is(e):L.is(e)})))}}(U||(U={}));var V,H,K,z,X,q,B,$,Q,G,J,Y,Z,ee,te,ne,re,ie,oe,ae,se,ue,ce,de,ge,le,fe,he,pe,ve,me,_e=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=D.insert(e,t):P.is(n)?(i=n,r=F.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=F.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=D.replace(e,t):P.is(n)?(i=n,r=F.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=F.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=D.del(e):P.is(t)?(r=t,n=F.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=F.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),we=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(P.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new we(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(L.is(e)){var n=new _e(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new _e(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(K.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new _e(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new _e(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new we,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(M.is(t)||P.is(t)?r=t:n=t,void 0===r?i=j.create(e,n):(o=P.is(r)?r:this._changeAnnotations.manage(r),i=j.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(M.is(n)||P.is(n)?i=n:r=n,void 0===i?o=O.create(e,t,r):(a=P.is(i)?i:this._changeAnnotations.manage(i),o=O.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(M.is(t)||P.is(t)?r=t:n=t,void 0===r?i=N.create(e,n):(o=P.is(r)?r:this._changeAnnotations.manage(r),i=N.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}();!function(e){e.create=function(e){return{uri:e}},e.is=function(e){var t=e;return be.defined(t)&&be.string(t.uri)}}(V||(V={})),function(e){e.create=function(e,t){return{uri:e,version:t}},e.is=function(e){var t=e;return be.defined(t)&&be.string(t.uri)&&be.integer(t.version)}}(H||(H={})),function(e){e.create=function(e,t){return{uri:e,version:t}},e.is=function(e){var t=e;return be.defined(t)&&be.string(t.uri)&&(null===t.version||be.integer(t.version))}}(K||(K={})),function(e){e.create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},e.is=function(e){var t=e;return be.defined(t)&&be.string(t.uri)&&be.string(t.languageId)&&be.integer(t.version)&&be.string(t.text)}}(z||(z={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(X||(X={})),function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(X||(X={})),function(e){e.is=function(e){var t=e;return be.objectLiteral(e)&&X.is(t.kind)&&be.string(t.value)}}(q||(q={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(B||(B={})),function(e){e.PlainText=1,e.Snippet=2}($||($={})),function(e){e.Deprecated=1}(Q||(Q={})),function(e){e.create=function(e,t,n){return{newText:e,insert:t,replace:n}},e.is=function(e){var t=e;return t&&be.string(t.newText)&&m.is(t.insert)&&m.is(t.replace)}}(G||(G={})),function(e){e.asIs=1,e.adjustIndentation=2}(J||(J={})),function(e){e.create=function(e){return{label:e}}}(Y||(Y={})),function(e){e.create=function(e,t){return{items:e||[],isIncomplete:!!t}}}(Z||(Z={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function(e){var t=e;return be.string(t)||be.objectLiteral(t)&&be.string(t.language)&&be.string(t.value)}}(ee||(ee={})),function(e){e.is=function(e){var t=e;return!!t&&be.objectLiteral(t)&&(q.is(t.contents)||ee.is(t.contents)||be.typedArray(t.contents,ee.is))&&(void 0===e.range||m.is(e.range))}}(te||(te={})),function(e){e.create=function(e,t){return t?{label:e,documentation:t}:{label:e}}}(ne||(ne={})),function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return be.defined(t)&&(i.documentation=t),be.defined(n)?i.parameters=n:i.parameters=[],i}}(re||(re={})),function(e){e.Text=1,e.Read=2,e.Write=3}(ie||(ie={})),function(e){e.create=function(e,t){var n={range:e};return be.number(t)&&(n.kind=t),n}}(oe||(oe={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(ae||(ae={})),function(e){e.Deprecated=1}(se||(se={})),function(e){e.create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o}}(ue||(ue={})),function(e){e.create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},e.is=function(e){var t=e;return t&&be.string(t.name)&&be.number(t.kind)&&m.is(t.range)&&m.is(t.selectionRange)&&(void 0===t.detail||be.string(t.detail))&&(void 0===t.deprecated||be.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))}}(ce||(ce={})),function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"}(de||(de={})),function(e){e.create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},e.is=function(e){var t=e;return be.defined(t)&&be.typedArray(t.diagnostics,R.is)&&(void 0===t.only||be.typedArray(t.only,be.string))}}(ge||(ge={})),function(e){e.create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):T.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},e.is=function(e){var t=e;return t&&be.string(t.title)&&(void 0===t.diagnostics||be.typedArray(t.diagnostics,R.is))&&(void 0===t.kind||be.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||T.is(t.command))&&(void 0===t.isPreferred||be.boolean(t.isPreferred))&&(void 0===t.edit||U.is(t.edit))}}(le||(le={})),function(e){e.create=function(e,t){var n={range:e};return be.defined(t)&&(n.data=t),n},e.is=function(e){var t=e;return be.defined(t)&&m.is(t.range)&&(be.undefined(t.command)||T.is(t.command))}}(fe||(fe={})),function(e){e.create=function(e,t){return{tabSize:e,insertSpaces:t}},e.is=function(e){var t=e;return be.defined(t)&&be.uinteger(t.tabSize)&&be.boolean(t.insertSpaces)}}(he||(he={})),function(e){e.create=function(e,t,n){return{range:e,target:t,data:n}},e.is=function(e){var t=e;return be.defined(t)&&m.is(t.range)&&(be.undefined(t.target)||be.string(t.target))}}(pe||(pe={})),function(e){e.create=function(e,t){return{range:e,parent:t}},e.is=function(t){var n=t;return void 0!==n&&m.is(n.range)&&(void 0===n.parent||e.is(n.parent))}}(ve||(ve={})),function(e){function t(e,n){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=n(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,t,n,r){return new ke(e,t,n,r)},e.is=function(e){var t=e;return!!(be.defined(t)&&be.string(t.uri)&&(be.undefined(t.languageId)||be.string(t.languageId))&&be.uinteger(t.lineCount)&&be.func(t.getText)&&be.func(t.positionAt)&&be.func(t.offsetAt))},e.applyEdits=function(e,n){for(var r=e.getText(),i=t(n,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(me||(me={}));var be,ke=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return v.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return v.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();!function(e){var t=Object.prototype.toString;e.defined=function(e){return typeof e<"u"},e.undefined=function(e){return typeof e>"u"},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===t.call(e)},e.number=function(e){return"[object Number]"===t.call(e)},e.numberRange=function(e,n,r){return"[object Number]"===t.call(e)&&n<=e&&e<=r},e.integer=function(e){return"[object Number]"===t.call(e)&&-2147483648<=e&&e<=2147483647},e.uinteger=function(e){return"[object Number]"===t.call(e)&&0<=e&&e<=2147483647},e.func=function(e){return"[object Function]"===t.call(e)},e.objectLiteral=function(e){return null!==e&&"object"==typeof e},e.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}(be||(be={}));var ye=class{constructor(e,t,n){this._languageId=e,this._worker=t;let r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{f.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(f.editor.onDidCreateModel(r)),this._disposables.push(f.editor.onWillDisposeModel(i)),this._disposables.push(f.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{f.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{f.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),f.editor.getModels().forEach(r)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{let r=n.map((e=>function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:Ee(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e))),i=f.editor.getModel(e);i&&i.getLanguageId()===t&&f.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{console.error(e)}))}};function Ee(e){switch(e){case A.Error:return f.MarkerSeverity.Error;case A.Warning:return f.MarkerSeverity.Warning;case A.Information:return f.MarkerSeverity.Info;case A.Hint:return f.MarkerSeverity.Hint;default:return f.MarkerSeverity.Info}}var xe=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){let i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),Ce(t)))).then((n=>{if(!n)return;let r=e.getWordUntilPosition(t),i=new f.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{let t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:Te(e.command),range:i,kind:Se(e.kind)};return e.textEdit&&(function(e){return typeof e.insert<"u"&&typeof e.replace<"u"}(e.textEdit)?t.range={insert:Ie(e.textEdit.insert),replace:Ie(e.textEdit.replace)}:t.range=Ie(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(Re)),e.insertTextFormat===$.Snippet&&(t.insertTextRules=f.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}};function Ce(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function Ae(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function Ie(e){if(e)return new f.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function Se(e){let t=f.languages.CompletionItemKind;switch(e){case B.Text:return t.Text;case B.Method:return t.Method;case B.Function:return t.Function;case B.Constructor:return t.Constructor;case B.Field:return t.Field;case B.Variable:return t.Variable;case B.Class:return t.Class;case B.Interface:return t.Interface;case B.Module:return t.Module;case B.Property:return t.Property;case B.Unit:return t.Unit;case B.Value:return t.Value;case B.Enum:return t.Enum;case B.Keyword:return t.Keyword;case B.Snippet:return t.Snippet;case B.Color:return t.Color;case B.File:return t.File;case B.Reference:return t.Reference}return t.Property}function Re(e){if(e)return{range:Ie(e.range),text:e.newText}}function Te(e){return e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var De=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),Ce(t)))).then((e=>{if(e)return{range:Ie(e.range),contents:Pe(e.contents)}}))}};function Me(e){return"string"==typeof e?{value:e}:function(e){return e&&"object"==typeof e&&"string"==typeof e.kind}(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function Pe(e){if(e)return Array.isArray(e)?e.map(Me):[Me(e)]}var Fe=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),Ce(t)))).then((e=>{if(e)return e.map((e=>({range:Ie(e.range),kind:Le(e.kind)})))}))}};function Le(e){switch(e){case ie.Read:return f.languages.DocumentHighlightKind.Read;case ie.Write:return f.languages.DocumentHighlightKind.Write;case ie.Text:return f.languages.DocumentHighlightKind.Text}return f.languages.DocumentHighlightKind.Text}var je=class{constructor(e){this._worker=e}provideDefinition(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),Ce(t)))).then((e=>{if(e)return[Oe(e)]}))}};function Oe(e){return{uri:f.Uri.parse(e.uri),range:Ie(e.range)}}var Ne=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){let i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),Ce(t)))).then((e=>{if(e)return e.map(Oe)}))}},Ue=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){let i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),Ce(t),n))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){let r=f.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,versionId:void 0,textEdit:{range:Ie(i.range),text:i.newText}})}return{edits:t}}(e)))}};var We=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){let n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:Ve(e.kind),range:Ie(e.location.range),selectionRange:Ie(e.location.range),tags:[]})))}))}};function Ve(e){let t=f.languages.SymbolKind;switch(e){case ae.File:return t.Array;case ae.Module:return t.Module;case ae.Namespace:return t.Namespace;case ae.Package:return t.Package;case ae.Class:return t.Class;case ae.Method:return t.Method;case ae.Property:return t.Property;case ae.Field:return t.Field;case ae.Constructor:return t.Constructor;case ae.Enum:return t.Enum;case ae.Interface:return t.Interface;case ae.Function:return t.Function;case ae.Variable:return t.Variable;case ae.Constant:return t.Constant;case ae.String:return t.String;case ae.Number:return t.Number;case ae.Boolean:return t.Boolean;case ae.Array:return t.Array}return t.Function}var He=class{constructor(e){this._worker=e}provideLinks(e,t){let n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:Ie(e.range),url:e.target})))}}))}},Ke=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,Xe(t)).then((e=>{if(e&&0!==e.length)return e.map(Re)}))))}},ze=class{constructor(e){this._worker=e}canFormatMultipleRanges=!1;provideDocumentRangeFormattingEdits(e,t,n,r){let i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),Ae(t),Xe(n)).then((e=>{if(e&&0!==e.length)return e.map(Re)}))))}};function Xe(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var qe=class{constructor(e){this._worker=e}provideDocumentColors(e,t){let n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:Ie(e.range)})))}))}provideColorPresentations(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,Ae(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=Re(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(Re)),t}))}))}},Be=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{let t={start:e.startLine+1,end:e.endLine+1};return typeof e.kind<"u"&&(t.kind=function(e){switch(e){case E.Comment:return f.languages.FoldingRangeKind.Comment;case E.Imports:return f.languages.FoldingRangeKind.Imports;case E.Region:return f.languages.FoldingRangeKind.Region}}(e.kind)),t}))}))}};var $e=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(Ce)))).then((e=>{if(e)return e.map((e=>{let t=[];for(;e;)t.push({range:Ie(e.range)}),e=e.parent;return t}))}))}};function Qe(e){let t=[],n=[],r=new W(e);t.push(r);let i=(...e)=>r.getLanguageServiceWorker(...e);return function(){let{languageId:t,modeConfiguration:r}=e;Je(n),r.completionItems&&n.push(f.languages.registerCompletionItemProvider(t,new xe(i,["/","-",":"]))),r.hovers&&n.push(f.languages.registerHoverProvider(t,new De(i))),r.documentHighlights&&n.push(f.languages.registerDocumentHighlightProvider(t,new Fe(i))),r.definitions&&n.push(f.languages.registerDefinitionProvider(t,new je(i))),r.references&&n.push(f.languages.registerReferenceProvider(t,new Ne(i))),r.documentSymbols&&n.push(f.languages.registerDocumentSymbolProvider(t,new We(i))),r.rename&&n.push(f.languages.registerRenameProvider(t,new Ue(i))),r.colors&&n.push(f.languages.registerColorProvider(t,new qe(i))),r.foldingRanges&&n.push(f.languages.registerFoldingRangeProvider(t,new Be(i))),r.diagnostics&&n.push(new ye(t,i,e.onDidChange)),r.selectionRanges&&n.push(f.languages.registerSelectionRangeProvider(t,new $e(i))),r.documentFormattingEdits&&n.push(f.languages.registerDocumentFormattingEditProvider(t,new Ke(i))),r.documentRangeFormattingEdits&&n.push(f.languages.registerDocumentRangeFormattingEditProvider(t,new ze(i)))}(),t.push(Ge(n)),Ge(t)}function Ge(e){return{dispose:()=>Je(e)}}function Je(e){for(;e.length;)e.pop().dispose()}return(e=>c(r({},"__esModule",{value:!0}),e))(l)})()));