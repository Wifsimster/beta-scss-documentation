(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{333:function(e,t,a){(function(t){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof s?new s(e.type,r.util.encode(e.content),e.alias):Array.isArray(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var s,n,i=r.util.type(t);switch(a=a||{},i){case"Object":if(n=r.util.objId(t),a[n])return a[n];for(var l in s={},a[n]=s,t)t.hasOwnProperty(l)&&(s[l]=e(t[l],a));return s;case"Array":return n=r.util.objId(t),a[n]?a[n]:(s=[],a[n]=s,t.forEach(function(t,r){s[r]=e(t,a)}),s);default:return t}}},languages:{extend:function(e,t){var a=r.util.clone(r.languages[e]);for(var s in t)a[s]=t[s];return a},insertBefore:function(e,t,a,s){var n=(s=s||r.languages)[e],i={};for(var l in n)if(n.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a.hasOwnProperty(l)||(i[l]=n[l])}var d=s[e];return s[e]=i,r.languages.DFS(r.languages,function(t,a){a===d&&t!=e&&(this[t]=i)}),i},DFS:function e(t,a,s,n){n=n||{};var i=r.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],s||l);var o=t[l],d=r.util.type(o);"Object"!==d||n[i(o)]?"Array"!==d||n[i(o)]||(n[i(o)]=!0,e(o,a,l,n)):(n[i(o)]=!0,e(o,a,null,n))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var s={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",s);for(var n,i=e.querySelectorAll(s.selector),l=0;n=i[l++];)r.highlightElement(n,!0===t,s.callback)},highlightElement:function(a,s,n){for(var i,l="none",o=a;o&&!t.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(t)||[,"none"])[1].toLowerCase(),i=r.languages[l]),a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+l,a.parentNode&&(o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+l));var d={element:a,language:l,grammar:i,code:a.textContent},c=function(e){d.highlightedCode=e,r.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,r.hooks.run("after-highlight",d),r.hooks.run("complete",d),n&&n.call(d.element)};if(r.hooks.run("before-sanity-check",d),d.code)if(r.hooks.run("before-highlight",d),d.grammar)if(s&&e.Worker){var g=new Worker(r.filename);g.onmessage=function(e){c(e.data)},g.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else c(r.highlight(d.code,d.grammar,d.language));else c(r.util.encode(d.code));else r.hooks.run("complete",d)},highlight:function(e,t,a){var n={code:e,grammar:t,language:a};return r.hooks.run("before-tokenize",n),n.tokens=r.tokenize(n.code,n.grammar),r.hooks.run("after-tokenize",n),s.stringify(r.util.encode(n.tokens),n.language)},matchGrammar:function(e,t,a,n,i,l,o){for(var d in a)if(a.hasOwnProperty(d)&&a[d]){if(d==o)return;var c=a[d];c="Array"===r.util.type(c)?c:[c];for(var g=0;g<c.length;++g){var u=c[g],p=u.inside,h=!!u.lookbehind,b=!!u.greedy,m=0,v=u.alias;if(b&&!u.pattern.global){var f=u.pattern.toString().match(/[imuy]*$/)[0];u.pattern=RegExp(u.pattern.source,f+"g")}u=u.pattern||u;for(var y=n,x=i;y<t.length;x+=t[y].length,++y){var _=t[y];if(t.length>e.length)return;if(!(_ instanceof s)){if(b&&y!=t.length-1){if(u.lastIndex=x,!($=u.exec(e)))break;for(var C=$.index+(h?$[1].length:0),F=$.index+$[0].length,k=y,w=x,A=t.length;k<A&&(w<F||!t[k].type&&!t[k-1].greedy);++k)C>=(w+=t[k].length)&&(++y,x=w);if(t[y]instanceof s)continue;S=k-y,_=e.slice(x,w),$.index-=x}else{u.lastIndex=0;var $=u.exec(_),S=1}if($){h&&(m=$[1]?$[1].length:0);F=(C=$.index+m)+($=$[0].slice(m)).length;var j=_.slice(0,C),E=_.slice(F),P=[y,S];j&&(++y,x+=j.length,P.push(j));var N=new s(d,p?r.tokenize($,p):$,v,$,b);if(P.push(N),E&&P.push(E),Array.prototype.splice.apply(t,P),1!=S&&r.matchGrammar(e,t,a,y,x,!0,d),l)break}else if(l)break}}}}},tokenize:function(e,t){var a=[e],s=t.rest;if(s){for(var n in s)t[n]=s[n];delete t.rest}return r.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=r.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=r.hooks.all[e];if(a&&a.length)for(var s,n=0;s=a[n++];)s(t)}},Token:s};function s(e,t,a,r,s){this.type=e,this.content=t,this.alias=a,this.length=0|(r||"").length,this.greedy=!!s}if(e.Prism=r,s.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return s.stringify(e,t)}).join("");var a={type:e.type,content:s.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var n=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,n)}r.hooks.run("wrap",a);var i=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(i?" "+i:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",function(t){var a=JSON.parse(t.data),s=a.language,n=a.code,i=a.immediateClose;e.postMessage(r.highlight(n,r.languages[s],s)),i&&e.close()},!1),r):r;var n=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return n&&(r.filename=n.src,r.manual||n.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(r.highlightAll):window.setTimeout(r.highlightAll,16):document.addEventListener("DOMContentLoaded",r.highlightAll))),r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};s["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var n={};n[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:s},a.languages.insertBefore("markup","cdata",n)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var r,s=e.getAttribute("data-src"),n=e,i=/\blang(?:uage)?-([\w-]+)\b/i;n&&!i.test(n.className);)n=n.parentNode;if(n&&(r=(e.className.match(i)||[,""])[1]),!r){var l=(s.match(/\.(\w+)$/)||[,""])[1];r=t[l]||l}var o=document.createElement("code");o.className="language-"+r,e.textContent="",o.textContent="Loading…",e.appendChild(o);var d=new XMLHttpRequest;d.open("GET",s,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(o.textContent=d.responseText,a.highlightElement(o),e.setAttribute("data-src-loaded","")):d.status>=400?o.textContent="✖ Error "+d.status+" while fetching file: "+d.statusText:o.textContent="✖ Error: File does not exist or is empty")},d.send(null)}}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),r=document.createElement("a");return r.textContent=t.getAttribute("data-download-link-label")||"Download",r.setAttribute("download",""),r.href=a,r}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}).call(this,a(63))},359:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex"},[e._m(0),e._v(" "),a("div",{staticClass:"flex:1"},[a("div",{staticClass:"flex flex:wrap"},[a("div",{staticClass:"flex:1 py:1/2 mb:1"},[e._m(1),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple1)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[e._m(2),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple2)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[e._m(3),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple3)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[e._m(4),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple4)}})])])])])])};r._withStripped=!0;var s=a(333),n=a.n(s),i={data:function(){return{exemple1:null,exemple2:null,exemple3:null,exemple4:null}},mounted:function(){this.exemple1=n.a.highlight('<div class="border:1/2"></div>',n.a.languages.html,"html"),this.exemple2=n.a.highlight('<div class="border:b:1/4"></div>',n.a.languages.html,"html"),this.exemple3=n.a.highlight('<div class="border:l:1/2"></div>',n.a.languages.html,"html"),this.exemple4=n.a.highlight('<div class="border:x:1"></div>',n.a.languages.html,"html")}},l=a(49),o=Object(l.a)(i,r,[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex:1 mr:1"},[a("table",{staticClass:"w:full"},[a("thead",[a("tr",[a("th",[e._v("Class")]),e._v(" "),a("th",[e._v("\n            Side\n            "),a("span",{staticClass:"text:grey text:3/4"},[e._v("(Optional)")])]),e._v(" "),a("th",[e._v("\n            Width\n            "),a("span",{staticClass:"text:grey text:3/4"},[e._v("(Optional)")])]),e._v(" "),a("th",[e._v("\n            Px\n            "),a("span",{staticClass:"text:grey text:3/4"},[e._v("(* 16px)")])])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("border")])]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded bg:grey-light m:1/4 p:1/2"},[e._v(" ")]),e._v("\n            All\n            "),a("pre",{staticClass:"inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"},[e._v("Default")])]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("0")]),e._v(" 0\n          ")]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[e._v("0")])]),e._v(" "),a("tr",[a("td",{staticClass:"px:1 border:b border:grey-lighter"}),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("t")]),e._v(" Top\n          ")]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded bg:grey-light m:1/4 p:1/2"},[e._v(" ")]),e._v(" 0.0625rem\n            "),a("pre",{staticClass:"inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"},[e._v("Default")])]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[e._v("1px")])]),e._v(" "),a("tr",[a("td",{staticClass:"px:1 border:b border:grey-lighter"}),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("r")]),e._v(" Right\n          ")]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("1/8")]),e._v(" 0.125rem\n          ")]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[e._v("2px")])]),e._v(" "),a("tr",[a("td",{staticClass:"px:1 border:b border:grey-lighter"}),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("b")]),e._v(" Bottom\n          ")]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("1/4")]),e._v(" 0.25rem\n          ")]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[e._v("4px")])]),e._v(" "),a("tr",[a("td",{staticClass:"px:1 border:b border:grey-lighter"}),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("l")]),e._v(" Left\n          ")]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("1/2")]),e._v(" 0.5rem\n          ")]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[e._v("6px")])]),e._v(" "),a("tr",[a("td",{staticClass:"px:1 border:b border:grey-lighter"}),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("x")]),e._v(" Horizontal\n          ")]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("3/4")]),e._v(" 0.75rem\n          ")]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[e._v("12px")])]),e._v(" "),a("tr",[a("td",{staticClass:"px:1 border:b border:grey-lighter"}),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("y")]),e._v(" Vertical\n          ")]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("1")]),e._v(" 1rem\n          ")]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[e._v("16px")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"border rounded:t:1/2 p:1"},[t("div",{staticClass:"px:1 bg:grey-lighter border:1/2"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"border rounded:t:1/2 p:1"},[t("div",{staticClass:"px:1 bg:grey-lighter border:b:1/4"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"border rounded:t:1/2 p:1"},[t("div",{staticClass:"px:1 bg:grey-lighter border:l:1/2"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"border rounded:t:1/2 p:1"},[t("div",{staticClass:"px:1 bg:grey-lighter border:x:1"})])}],!1,null,null,null);o.options.__file="src/pages/utils/border/Width.vue";t.default=o.exports}}]);