(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{333:function(e,t,a){(function(t){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof s?new s(e.type,n.util.encode(e.content),e.alias):Array.isArray(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var s,r,i=n.util.type(t);switch(a=a||{},i){case"Object":if(r=n.util.objId(t),a[r])return a[r];for(var l in s={},a[r]=s,t)t.hasOwnProperty(l)&&(s[l]=e(t[l],a));return s;case"Array":return r=n.util.objId(t),a[r]?a[r]:(s=[],a[r]=s,t.forEach(function(t,n){s[n]=e(t,a)}),s);default:return t}}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var s in t)a[s]=t[s];return a},insertBefore:function(e,t,a,s){var r=(s=s||n.languages)[e],i={};for(var l in r)if(r.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a.hasOwnProperty(l)||(i[l]=r[l])}var u=s[e];return s[e]=i,n.languages.DFS(n.languages,function(t,a){a===u&&t!=e&&(this[t]=i)}),i},DFS:function e(t,a,s,r){r=r||{};var i=n.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],s||l);var o=t[l],u=n.util.type(o);"Object"!==u||r[i(o)]?"Array"!==u||r[i(o)]||(r[i(o)]=!0,e(o,a,l,r)):(r[i(o)]=!0,e(o,a,null,r))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var s={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",s);for(var r,i=e.querySelectorAll(s.selector),l=0;r=i[l++];)n.highlightElement(r,!0===t,s.callback)},highlightElement:function(a,s,r){for(var i,l="none",o=a;o&&!t.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(t)||[,"none"])[1].toLowerCase(),i=n.languages[l]),a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+l,a.parentNode&&(o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+l));var u={element:a,language:l,grammar:i,code:a.textContent},c=function(e){u.highlightedCode=e,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,n.hooks.run("after-highlight",u),n.hooks.run("complete",u),r&&r.call(u.element)};if(n.hooks.run("before-sanity-check",u),u.code)if(n.hooks.run("before-highlight",u),u.grammar)if(s&&e.Worker){var g=new Worker(n.filename);g.onmessage=function(e){c(e.data)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(n.highlight(u.code,u.grammar,u.language));else c(n.util.encode(u.code));else n.hooks.run("complete",u)},highlight:function(e,t,a){var r={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",r),r.tokens=n.tokenize(r.code,r.grammar),n.hooks.run("after-tokenize",r),s.stringify(n.util.encode(r.tokens),r.language)},matchGrammar:function(e,t,a,r,i,l,o){for(var u in a)if(a.hasOwnProperty(u)&&a[u]){if(u==o)return;var c=a[u];c="Array"===n.util.type(c)?c:[c];for(var g=0;g<c.length;++g){var d=c[g],p=d.inside,f=!!d.lookbehind,h=!!d.greedy,m=0,b=d.alias;if(h&&!d.pattern.global){var v=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,v+"g")}d=d.pattern||d;for(var y=r,k=i;y<t.length;k+=t[y].length,++y){var F=t[y];if(t.length>e.length)return;if(!(F instanceof s)){if(h&&y!=t.length-1){if(d.lastIndex=k,!(C=d.exec(e)))break;for(var w=C.index+(f?C[1].length:0),x=C.index+C[0].length,A=y,_=k,z=t.length;A<z&&(_<x||!t[A].type&&!t[A-1].greedy);++A)w>=(_+=t[A].length)&&(++y,k=_);if(t[y]instanceof s)continue;$=A-y,F=e.slice(k,_),C.index-=k}else{d.lastIndex=0;var C=d.exec(F),$=1}if(C){f&&(m=C[1]?C[1].length:0);x=(w=C.index+m)+(C=C[0].slice(m)).length;var S=F.slice(0,w),j=F.slice(x),E=[y,$];S&&(++y,k+=S.length,E.push(S));var N=new s(u,p?n.tokenize(C,p):C,b,C,h);if(E.push(N),j&&E.push(j),Array.prototype.splice.apply(t,E),1!=$&&n.matchGrammar(e,t,a,y,k,!0,u),l)break}else if(l)break}}}}},tokenize:function(e,t){var a=[e],s=t.rest;if(s){for(var r in s)t[r]=s[r];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var s,r=0;s=a[r++];)s(t)}},Token:s};function s(e,t,a,n,s){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!s}if(e.Prism=n,s.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return s.stringify(e,t)}).join("");var a={type:e.type,content:s.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var r=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,r)}n.hooks.run("wrap",a);var i=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(i?" "+i:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",function(t){var a=JSON.parse(t.data),s=a.language,r=a.code,i=a.immediateClose;e.postMessage(n.highlight(r,n.languages[s],s)),i&&e.close()},!1),n):n;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,n.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};s["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:s},a.languages.insertBefore("markup","cdata",r)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var n,s=e.getAttribute("data-src"),r=e,i=/\blang(?:uage)?-([\w-]+)\b/i;r&&!i.test(r.className);)r=r.parentNode;if(r&&(n=(e.className.match(i)||[,""])[1]),!n){var l=(s.match(/\.(\w+)$/)||[,""])[1];n=t[l]||l}var o=document.createElement("code");o.className="language-"+n,e.textContent="",o.textContent="Loading…",e.appendChild(o);var u=new XMLHttpRequest;u.open("GET",s,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(o.textContent=u.responseText,a.highlightElement(o),e.setAttribute("data-src-loaded","")):u.status>=400?o.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:o.textContent="✖ Error: File does not exist or is empty")},u.send(null)}}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}).call(this,a(63))},384:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Z-index")]},proxy:!0},{key:"content",fn:function(){return[a("div",{staticClass:"flex"},[a("div",{staticClass:"flex:1 mr:1"},[a("table",{staticClass:"w:full"},[a("thead",[a("tr",[a("th",[e._v("Class")]),e._v(" "),a("th",[e._v("Properties")])])]),e._v(" "),a("tbody",e._l(e.z,function(t){return a("tr",{key:t},[a("td",{staticClass:"p:0 border:b border:grey-light"},[a("pre",{staticClass:"text:blue"},[a("span",{staticClass:"text:purple"},[e._v(".z:"+e._s(t))])])]),e._v(" "),a("td",{staticClass:"p:0 border:b border:grey-light"},[a("pre",{staticClass:"text:blue"},[e._v("z-index: "+e._s(t)+";")])])])}),0)])]),e._v(" "),a("div",{staticClass:"flex:2"},[a("div",{staticClass:"border rounded:1/2 p:1"},[a("div",{staticClass:"relative text:center",staticStyle:{height:"125px"}},[a("div",{staticClass:"absolute p:2 z:50 ml:0 mt:0 bg:grey-lighter"},[e._v("z:50")]),e._v(" "),a("div",{staticClass:"absolute p:2 z:40 ml:1/2 mt:1/2 bg:grey-light"},[e._v("z:40")]),e._v(" "),a("div",{staticClass:"absolute p:2 z:30 ml:1 mt:1 bg:grey"},[e._v("z:30")]),e._v(" "),a("div",{staticClass:"absolute p:2 z:20 ml:3/2 mt:3/2 bg:grey-dark"},[e._v("z:20")]),e._v(" "),a("div",{staticClass:"absolute p:2 z:10 ml:2 mt:2 bg:grey-darker"},[e._v("z:10")]),e._v(" "),a("div",{staticClass:"absolute p:2 z:0 ml:5/2 mt:5/2 bg:grey-darkest"},[e._v("z:00")])])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple1)}})])])])]},proxy:!0}])})};n._withStripped=!0;var s=a(333),r=a.n(s),i={data:function(){return{z:["0","10","20","30","40","50","auto"],exemple1:null}},mounted:function(){this.exemple1=r.a.highlight('<div class="relative text:center">\n  <div class="absolute z:50 ml:0 mt:0 bg:grey-lighter">z:50</div>\n  <div class="absolute z:40 ml:1/2 mt:1/2 bg:grey-light">z:40</div>\n  <div class="absolute z:30 ml:1 mt:1 bg:grey">z:30</div>\n  <div class="absolute z:20 ml:3/2 mt:3/2 bg:grey-dark">z:20</div>\n  <div class="absolute z:10 ml:2 mt:2 bg:grey-darker">z:10</div>\n  <div class="absolute z:0 ml:5/2 mt:5/2 bg:grey-darkest">z:0</div>\n</div>',r.a.languages.html,"html")}},l=a(49),o=Object(l.a)(i,n,[],!1,null,null,null);o.options.__file="src/pages/utils/Z-index.vue";t.default=o.exports}}]);