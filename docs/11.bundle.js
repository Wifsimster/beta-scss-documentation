(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{333:function(e,t,a){(function(t){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,s={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,s.util.encode(e.content),e.alias):Array.isArray(e)?e.map(s.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var r,i,n=s.util.type(t);switch(a=a||{},n){case"Object":if(i=s.util.objId(t),a[i])return a[i];for(var l in r={},a[i]=r,t)t.hasOwnProperty(l)&&(r[l]=e(t[l],a));return r;case"Array":return i=s.util.objId(t),a[i]?a[i]:(r=[],a[i]=r,t.forEach(function(t,s){r[s]=e(t,a)}),r);default:return t}}},languages:{extend:function(e,t){var a=s.util.clone(s.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){var i=(r=r||s.languages)[e],n={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(n[o]=a[o]);a.hasOwnProperty(l)||(n[l]=i[l])}var d=r[e];return r[e]=n,s.languages.DFS(s.languages,function(t,a){a===d&&t!=e&&(this[t]=n)}),n},DFS:function e(t,a,r,i){i=i||{};var n=s.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],r||l);var o=t[l],d=s.util.type(o);"Object"!==d||i[n(o)]?"Array"!==d||i[n(o)]||(i[n(o)]=!0,e(o,a,l,i)):(i[n(o)]=!0,e(o,a,null,i))}}},plugins:{},highlightAll:function(e,t){s.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var r={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",r);for(var i,n=e.querySelectorAll(r.selector),l=0;i=n[l++];)s.highlightElement(i,!0===t,r.callback)},highlightElement:function(a,r,i){for(var n,l="none",o=a;o&&!t.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(t)||[,"none"])[1].toLowerCase(),n=s.languages[l]),a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+l,a.parentNode&&(o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+l));var d={element:a,language:l,grammar:n,code:a.textContent},g=function(e){d.highlightedCode=e,s.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,s.hooks.run("after-highlight",d),s.hooks.run("complete",d),i&&i.call(d.element)};if(s.hooks.run("before-sanity-check",d),d.code)if(s.hooks.run("before-highlight",d),d.grammar)if(r&&e.Worker){var c=new Worker(s.filename);c.onmessage=function(e){g(e.data)},c.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else g(s.highlight(d.code,d.grammar,d.language));else g(s.util.encode(d.code));else s.hooks.run("complete",d)},highlight:function(e,t,a){var i={code:e,grammar:t,language:a};return s.hooks.run("before-tokenize",i),i.tokens=s.tokenize(i.code,i.grammar),s.hooks.run("after-tokenize",i),r.stringify(s.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,a,i,n,l,o){for(var d in a)if(a.hasOwnProperty(d)&&a[d]){if(d==o)return;var g=a[d];g="Array"===s.util.type(g)?g:[g];for(var c=0;c<g.length;++c){var u=g[c],p=u.inside,b=!!u.lookbehind,h=!!u.greedy,v=0,m=u.alias;if(h&&!u.pattern.global){var f=u.pattern.toString().match(/[imuy]*$/)[0];u.pattern=RegExp(u.pattern.source,f+"g")}u=u.pattern||u;for(var y=i,x=n;y<t.length;x+=t[y].length,++y){var k=t[y];if(t.length>e.length)return;if(!(k instanceof r)){if(h&&y!=t.length-1){if(u.lastIndex=x,!($=u.exec(e)))break;for(var C=$.index+(b?$[1].length:0),_=$.index+$[0].length,F=y,w=x,A=t.length;F<A&&(w<_||!t[F].type&&!t[F-1].greedy);++F)C>=(w+=t[F].length)&&(++y,x=w);if(t[y]instanceof r)continue;S=F-y,k=e.slice(x,w),$.index-=x}else{u.lastIndex=0;var $=u.exec(k),S=1}if($){b&&(v=$[1]?$[1].length:0);_=(C=$.index+v)+($=$[0].slice(v)).length;var P=k.slice(0,C),j=k.slice(_),T=[y,S];P&&(++y,x+=P.length,T.push(P));var E=new r(d,p?s.tokenize($,p):$,m,$,h);if(T.push(E),j&&T.push(j),Array.prototype.splice.apply(t,T),1!=S&&s.matchGrammar(e,t,a,y,x,!0,d),l)break}else if(l)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return s.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=s.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=s.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}},Token:r};function r(e,t,a,s,r){this.type=e,this.content=t,this.alias=a,this.length=0|(s||"").length,this.greedy=!!r}if(e.Prism=s,r.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return r.stringify(e,t)}).join("");var a={type:e.type,content:r.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,i)}s.hooks.run("wrap",a);var n=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(n?" "+n:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(s.disableWorkerMessageHandler||e.addEventListener("message",function(t){var a=JSON.parse(t.data),r=a.language,i=a.code,n=a.immediateClose;e.postMessage(s.highlight(i,s.languages[r],r)),n&&e.close()},!1),s):s;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(s.filename=i.src,s.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(s.highlightAll):window.setTimeout(s.highlightAll,16):document.addEventListener("DOMContentLoaded",s.highlightAll))),s}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var s={};s["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};r["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:r},a.languages.insertBefore("markup","cdata",i)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var s,r=e.getAttribute("data-src"),i=e,n=/\blang(?:uage)?-([\w-]+)\b/i;i&&!n.test(i.className);)i=i.parentNode;if(i&&(s=(e.className.match(n)||[,""])[1]),!s){var l=(r.match(/\.(\w+)$/)||[,""])[1];s=t[l]||l}var o=document.createElement("code");o.className="language-"+s,e.textContent="",o.textContent="Loading…",e.appendChild(o);var d=new XMLHttpRequest;d.open("GET",r,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(o.textContent=d.responseText,a.highlightElement(o),e.setAttribute("data-src-loaded","")):d.status>=400?o.textContent="✖ Error "+d.status+" while fetching file: "+d.statusText:o.textContent="✖ Error: File does not exist or is empty")},d.send(null)}}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),s=document.createElement("a");return s.textContent=t.getAttribute("data-download-link-label")||"Download",s.setAttribute("download",""),s.href=a,s}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}).call(this,a(63))},380:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Position")]},proxy:!0},{key:"content",fn:function(){return[a("div",{staticClass:"flex flex:row"},[a("div",{staticClass:"flex:2 mr:1"},[a("div",{staticClass:"flex flex:col"},[a("div",{staticClass:"flex:1 mb:2"},[a("table",{staticClass:"w:full"},[a("thead",[a("tr",[a("th",[e._v("Class")]),e._v(" "),a("th",[e._v("Properties")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticClass:"px:1 border:b border:grey-light"},[a("pre",{staticClass:"inline text:purple"},[e._v(".static")])]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-light"},[a("pre",{staticClass:"inline text:blue"},[e._v("position: static;")])])]),e._v(" "),a("tr",[a("td",{staticClass:"px:1 border:b border:grey-light"},[a("pre",{staticClass:"inline text:purple"},[e._v(".fixed")])]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-light"},[a("pre",{staticClass:"inline text:blue"},[e._v("position: fixed;")])])]),e._v(" "),a("tr",[a("td",{staticClass:"px:1 border:b border:grey-light"},[a("pre",{staticClass:"inline text:purple"},[e._v(".absolute")])]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-light"},[a("pre",{staticClass:"inline text:blue"},[e._v("position: absolute;")])])]),e._v(" "),a("tr",[a("td",{staticClass:"px:1 border:b border:grey-light"},[a("pre",{staticClass:"inline text:purple"},[e._v(".relative")])]),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-light"},[a("pre",{staticClass:"inline text:blue"},[e._v("position: relative;")])])])])])]),e._v(" "),a("div",{staticClass:"flex:1"},[a("table",{staticClass:"w:full"},[a("thead",[a("tr",[a("th",[e._v("Position")]),e._v(" "),a("th",[e._v("Taille")]),e._v(" "),a("th",[e._v("\n                    Px\n                    "),a("span",{staticClass:"text:grey text:3/4"},[e._v("(* 16px)")])])])]),e._v(" "),a("tbody",e._l(e.sizes,function(t,s){return a("tr",{key:s},[0===s?a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("t")]),e._v(" Top\n                  ")]):1===s?a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("r")]),e._v(" Right\n                  ")]):2===s?a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("b")]),e._v(" Bottom\n                  ")]):3===s?a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("l")]),e._v(" Left\n                  ")]):4===s?a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("x")]),e._v(" Horizontal\n                  ")]):5===s?a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("y")]),e._v(" Vertical\n                  ")]):a("td",{staticClass:"px:1 border:b border:grey-lighter"}),e._v(" "),a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v(e._s(t.key))]),e._v("\n                    "+e._s(t.value)+"\n                  ")]),e._v(" "),t.px?a("td",{staticClass:"px:1 border:b border:grey-lighter"},[e._v(e._s(t.px)+"px")]):a("td",{staticClass:"px:1 border:b border:grey-lighter"})])}),0)])])])]),e._v(" "),a("div",{staticClass:"flex:2"},[a("div",{staticClass:"flex flex:wrap"},[a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"relative p:3 bg:grey-light"},[a("div",{staticClass:"absolute t:0 y:0 p:1 bg:grey-darker"})])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple1)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"relative p:3 bg:grey-light"},[a("div",{staticClass:"absolute x:0 r:0 p:1 bg:grey-darker"})])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple2)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"relative p:3 bg:grey-light"},[a("div",{staticClass:"absolute b:0 y:0 p:1 bg:grey-darker"})])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple3)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"relative p:3 bg:grey-light"},[a("div",{staticClass:"absolute l:0 x:0 p:1 bg:grey-darker"})])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple4)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"relative p:3 bg:grey-light"},[a("div",{staticClass:"absolute x:0 y:0 bg:grey-darker"})])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple5)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"relative p:3 bg:grey-light"},[a("div",{staticClass:"absolute l:0 t:0 h:8 p:1 bg:grey-darker"})])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple6)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"relative p:3 bg:grey-light"},[a("div",{staticClass:"absolute r:0 t:0 h:8 p:1 bg:grey-darker"})])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple7)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"relative p:3 bg:grey-light"},[a("div",{staticClass:"absolute b:0 r:0 h:8 p:1 bg:grey-darker"})])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple8)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"relative p:3 bg:grey-light"},[a("div",{staticClass:"absolute l:0 b:0 h:8 p:1 bg:grey-darker"})])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple9)}})])])])])])]},proxy:!0}])})};s._withStripped=!0;var r=a(333),i=a.n(r),n={data:function(){return{sizes:[{key:"0",value:"0",px:"0"},{key:"1/4",value:"0.25rem",px:"4"},{key:"1/2",value:"0.5rem",px:"8"},{key:"3/4",value:"0.75rem",px:"12"},{key:"1",value:"1rem",px:"16"},{key:"5/4",value:"1.25rem",px:"20"},{key:"3/2",value:"1.5rem",px:"24"},{key:"7/4",value:"1.75rem",px:"28"},{key:"2",value:"2rem",px:"32"},{key:"5/2",value:"2.5rem",px:"40"},{key:"3",value:"3rem",px:"48"},{key:"4",value:"4rem",px:"64"},{key:"auto",value:"auto"}],exemple1:null,exemple2:null,exemple3:null,exemple4:null,exemple5:null,exemple6:null,exemple7:null,exemple8:null,exemple9:null}},mounted:function(){this.exemple1=i.a.highlight('<div class="relative p:3 bg:grey-light">\n  <div class="absolute t:0 y:0 p:1 bg:grey-darker"></div>\n</div>',i.a.languages.html,"html"),this.exemple2=i.a.highlight(' <div class="relative p:3 bg:grey-light">\n  <div class="absolute x:0 r:0 p:1 bg:grey-darker"></div>\n</div>',i.a.languages.html,"html"),this.exemple3=i.a.highlight('<div class="relative p:3 bg:grey-light">\n  <div class="absolute b:0 y:0 p:1 bg:grey-darker"></div>\n</div>',i.a.languages.html,"html"),this.exemple4=i.a.highlight('<div class="relative p:3 bg:grey-light">\n  <div class="absolute l:0 x:0 p:1 bg:grey-darker"></div>\n</div>',i.a.languages.html,"html"),this.exemple5=i.a.highlight('<div class="relative p:3 bg:grey-light">\n  <div class="absolute x:0 y:0 bg:grey-darker"></div>\n</div>',i.a.languages.html,"html"),this.exemple6=i.a.highlight('<div class="relative p:3 bg:grey-light">\n  <div class="absolute l:0 t:0 h:8 p:1 bg:grey-darker"></div>\n</div>',i.a.languages.html,"html"),this.exemple7=i.a.highlight('<div class="relative p:3 bg:grey-light">\n  <div class="absolute r:0 t:0 h:8 p:1 bg:grey-darker"></div>\n</div>',i.a.languages.html,"html"),this.exemple8=i.a.highlight('<div class="relative p:3 bg:grey-light">\n  <div class="absolute b:0 r:0 h:8 p:1 bg:grey-darker"></div>\n</div>',i.a.languages.html,"html"),this.exemple9=i.a.highlight('<div class="relative p:3 bg:grey-light">\n  <div class="absolute l:0 b:0 h:8 p:1 bg:grey-darker"></div>\n</div>',i.a.languages.html,"html")}},l=a(49),o=Object(l.a)(n,s,[],!1,null,null,null);o.options.__file="src/pages/utils/Position.vue";t.default=o.exports}}]);