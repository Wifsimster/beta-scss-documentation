(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{334:function(e,t,a){(function(t){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof s?new s(e.type,n.util.encode(e.content),e.alias):Array.isArray(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var s,i,r=n.util.type(t);switch(a=a||{},r){case"Object":if(i=n.util.objId(t),a[i])return a[i];for(var l in s={},a[i]=s,t)t.hasOwnProperty(l)&&(s[l]=e(t[l],a));return s;case"Array":return i=n.util.objId(t),a[i]?a[i]:(s=[],a[i]=s,t.forEach(function(t,n){s[n]=e(t,a)}),s);default:return t}}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var s in t)a[s]=t[s];return a},insertBefore:function(e,t,a,s){var i=(s=s||n.languages)[e],r={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(r[o]=a[o]);a.hasOwnProperty(l)||(r[l]=i[l])}var c=s[e];return s[e]=r,n.languages.DFS(n.languages,function(t,a){a===c&&t!=e&&(this[t]=r)}),r},DFS:function e(t,a,s,i){i=i||{};var r=n.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],s||l);var o=t[l],c=n.util.type(o);"Object"!==c||i[r(o)]?"Array"!==c||i[r(o)]||(i[r(o)]=!0,e(o,a,l,i)):(i[r(o)]=!0,e(o,a,null,i))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var s={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",s);for(var i,r=e.querySelectorAll(s.selector),l=0;i=r[l++];)n.highlightElement(i,!0===t,s.callback)},highlightElement:function(a,s,i){for(var r,l="none",o=a;o&&!t.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(t)||[,"none"])[1].toLowerCase(),r=n.languages[l]),a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+l,a.parentNode&&(o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+l));var c={element:a,language:l,grammar:r,code:a.textContent},g=function(e){c.highlightedCode=e,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,n.hooks.run("after-highlight",c),n.hooks.run("complete",c),i&&i.call(c.element)};if(n.hooks.run("before-sanity-check",c),c.code)if(n.hooks.run("before-highlight",c),c.grammar)if(s&&e.Worker){var p=new Worker(n.filename);p.onmessage=function(e){g(e.data)},p.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else g(n.highlight(c.code,c.grammar,c.language));else g(n.util.encode(c.code));else n.hooks.run("complete",c)},highlight:function(e,t,a){var i={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),s.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,a,i,r,l,o){for(var c in a)if(a.hasOwnProperty(c)&&a[c]){if(c==o)return;var g=a[c];g="Array"===n.util.type(g)?g:[g];for(var p=0;p<g.length;++p){var u=g[p],d=u.inside,h=!!u.lookbehind,f=!!u.greedy,m=0,b=u.alias;if(f&&!u.pattern.global){var v=u.pattern.toString().match(/[imuy]*$/)[0];u.pattern=RegExp(u.pattern.source,v+"g")}u=u.pattern||u;for(var x=i,y=r;x<t.length;y+=t[x].length,++x){var k=t[x];if(t.length>e.length)return;if(!(k instanceof s)){if(f&&x!=t.length-1){if(u.lastIndex=y,!($=u.exec(e)))break;for(var _=$.index+(h?$[1].length:0),F=$.index+$[0].length,C=x,w=y,A=t.length;C<A&&(w<F||!t[C].type&&!t[C-1].greedy);++C)_>=(w+=t[C].length)&&(++x,y=w);if(t[x]instanceof s)continue;S=C-x,k=e.slice(y,w),$.index-=y}else{u.lastIndex=0;var $=u.exec(k),S=1}if($){h&&(m=$[1]?$[1].length:0);F=(_=$.index+m)+($=$[0].slice(m)).length;var j=k.slice(0,_),P=k.slice(F),E=[x,S];j&&(++x,y+=j.length,E.push(j));var N=new s(c,d?n.tokenize($,d):$,b,$,f);if(E.push(N),P&&E.push(P),Array.prototype.splice.apply(t,E),1!=S&&n.matchGrammar(e,t,a,x,y,!0,c),l)break}else if(l)break}}}}},tokenize:function(e,t){var a=[e],s=t.rest;if(s){for(var i in s)t[i]=s[i];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var s,i=0;s=a[i++];)s(t)}},Token:s};function s(e,t,a,n,s){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!s}if(e.Prism=n,s.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return s.stringify(e,t)}).join("");var a={type:e.type,content:s.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,i)}n.hooks.run("wrap",a);var r=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(r?" "+r:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",function(t){var a=JSON.parse(t.data),s=a.language,i=a.code,r=a.immediateClose;e.postMessage(n.highlight(i,n.languages[s],s)),r&&e.close()},!1),n):n;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};s["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:s},a.languages.insertBefore("markup","cdata",i)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var n,s=e.getAttribute("data-src"),i=e,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(e.className.match(r)||[,""])[1]),!n){var l=(s.match(/\.(\w+)$/)||[,""])[1];n=t[l]||l}var o=document.createElement("code");o.className="language-"+n,e.textContent="",o.textContent="Loading…",e.appendChild(o);var c=new XMLHttpRequest;c.open("GET",s,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(o.textContent=c.responseText,a.highlightElement(o),e.setAttribute("data-src-loaded","")):c.status>=400?o.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:o.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}).call(this,a(63))},366:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Display")]},proxy:!0},{key:"content",fn:function(){return[a("div",{staticClass:"flex flex:wrap"},[a("div",{staticClass:"flex:2"},[a("table",{staticClass:"w:full"},[a("thead",[a("tr",[a("th",[e._v("Class")]),e._v(" "),a("th",[e._v("Properties")])])]),e._v(" "),a("tbody",[e._l(e.displayList,function(t){return a("tr",{key:t},[a("td",{staticClass:"p:0 border:b border:grey-light"},[a("pre",{staticClass:"text:purple"},[e._v("."+e._s(t))])]),e._v(" "),a("td",{staticClass:"p:0 border:b border:grey-light"},[a("pre",{staticClass:"text:blue"},[e._v("display: "+e._s(t)+";")])])])}),e._v(" "),a("tr",[a("td",{staticClass:"p:0 border:b border:grey-light"},[a("pre",{staticClass:"text:blue"},[a("span",{staticClass:"text:purple"},[e._v(".visibile")])])]),e._v(" "),a("td",{staticClass:"p:0 border:b border:grey-light"},[a("pre",{staticClass:"text:blue"},[e._v("visiblity: visible;")])])]),e._v(" "),a("tr",[a("td",{staticClass:"p:0 border:b border:grey-light"},[a("pre",{staticClass:"text:blue"},[a("span",{staticClass:"text:purple"},[e._v(".invisible")])])]),e._v(" "),a("td",{staticClass:"p:0 border:b border:grey-light"},[a("pre",{staticClass:"text:blue"},[e._v("visibility: hidden;")])])])],2)])]),e._v(" "),a("div",{staticClass:"flex:1"},[a("div",{staticClass:"p:1/4 ml:1 mb:1"},[a("h2",[e._v("Inline")]),e._v(" "),a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"bg:grey-lighter p:1"},[a("span",{staticClass:"inline text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"},[e._v("1")]),e._v(" "),a("span",{staticClass:"inline text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"},[e._v("2")]),e._v(" "),a("span",{staticClass:"inline text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"},[e._v("3")])])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple1)}})])])]),e._v(" "),a("div",{staticClass:"flex:1"},[a("div",{staticClass:"p:1/4 ml:1 mb:1"},[a("h2",[e._v("Block")]),e._v(" "),a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"bg:grey-lighter p:1"},[a("span",{staticClass:"block text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"},[e._v("1")]),e._v(" "),a("span",{staticClass:"block text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"},[e._v("2")]),e._v(" "),a("span",{staticClass:"block text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"},[e._v("3")])])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple2)}})])])]),e._v(" "),a("div",{staticClass:"flex:1"},[a("div",{staticClass:"p:1/4 ml:1 mb:1"},[a("h2",[e._v("Inline Block")]),e._v(" "),a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"bg:grey-lighter p:1"},[a("span",{staticClass:"inline-block text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"},[e._v("1")]),e._v(" "),a("span",{staticClass:"inline-block text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"},[e._v("2")]),e._v(" "),a("span",{staticClass:"inline-block text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"},[e._v("3")])])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple3)}})])])]),e._v(" "),a("div",{staticClass:"flex:1"},[a("div",{staticClass:"p:1/4 ml:1 mb:1"},[a("h2",[e._v("Flex")]),e._v(" "),a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"flex bg:grey-lighter p:1"},[a("span",{staticClass:"flex:1 text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"},[e._v("1")]),e._v(" "),a("span",{staticClass:"flex:1 text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"},[e._v("2")]),e._v(" "),a("span",{staticClass:"flex:1 text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"},[e._v("3")])])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple4)}})])])]),e._v(" "),a("div",{staticClass:"flex:1"},[a("div",{staticClass:"p:1/4 ml:1 mb:1"},[a("h2",[e._v("Inline Flex")]),e._v(" "),a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"inline-flex bg:grey-lighter p:1"},[a("span",{staticClass:"flex:1 text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"},[e._v("1")]),e._v(" "),a("span",{staticClass:"flex:1 text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"},[e._v("2")]),e._v(" "),a("span",{staticClass:"flex:1 text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"},[e._v("3")])])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple5)}})])])])])]},proxy:!0}])})};n._withStripped=!0;var s=a(334),i=a.n(s),r={data:function(){return{displayList:["inline","block","inline-block","none","flex","inline-flex"],exemple1:null,exemple2:null,exemple3:null,exemple4:null,exemple5:null}},mounted:function(){this.exemple1=i.a.highlight('<div>\n  <span class="inline">1</span>\n  <span class="inline">2</span>\n  <span class="inline">3</span>\n</div>',i.a.languages.html,"html"),this.exemple2=i.a.highlight('<div>\n  <span class="block">1</span>\n  <span class="block">2</span>\n  <span class="block">3</span>\n</div>',i.a.languages.html,"html"),this.exemple3=i.a.highlight('<div>\n  <span\n    class="inline-block"\n  >1</span>\n  <span\n    class="inline-block"\n  >2</span>\n  <span\n    class="inline-block"\n  >3</span>\n</div>',i.a.languages.html,"html"),this.exemple4=i.a.highlight('<div class="flex">\n  <span class="flex:1">1</span>\n  <span class="flex:1">2</span>\n  <span class="flex:1">3</span>\n</div>',i.a.languages.html,"html"),this.exemple5=i.a.highlight('<div class="inline-flex">\n  <span class="flex:1">1</span>\n  <span class="flex:1">2</span>\n  <span class="flex:1">3</span>\n</div>',i.a.languages.html,"html")}},l=a(49),o=Object(l.a)(r,n,[],!1,null,null,null);o.options.__file="src/pages/utils/Display.vue";t.default=o.exports}}]);