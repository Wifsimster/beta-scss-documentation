(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{334:function(e,t,a){(function(t){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof n?new n(e.type,r.util.encode(e.content),e.alias):Array.isArray(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var n,s,i=r.util.type(t);switch(a=a||{},i){case"Object":if(s=r.util.objId(t),a[s])return a[s];for(var l in n={},a[s]=n,t)t.hasOwnProperty(l)&&(n[l]=e(t[l],a));return n;case"Array":return s=r.util.objId(t),a[s]?a[s]:(n=[],a[s]=n,t.forEach(function(t,r){n[r]=e(t,a)}),n);default:return t}}},languages:{extend:function(e,t){var a=r.util.clone(r.languages[e]);for(var n in t)a[n]=t[n];return a},insertBefore:function(e,t,a,n){var s=(n=n||r.languages)[e],i={};for(var l in s)if(s.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a.hasOwnProperty(l)||(i[l]=s[l])}var d=n[e];return n[e]=i,r.languages.DFS(r.languages,function(t,a){a===d&&t!=e&&(this[t]=i)}),i},DFS:function e(t,a,n,s){s=s||{};var i=r.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],n||l);var o=t[l],d=r.util.type(o);"Object"!==d||s[i(o)]?"Array"!==d||s[i(o)]||(s[i(o)]=!0,e(o,a,l,s)):(s[i(o)]=!0,e(o,a,null,s))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var n={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",n);for(var s,i=e.querySelectorAll(n.selector),l=0;s=i[l++];)r.highlightElement(s,!0===t,n.callback)},highlightElement:function(a,n,s){for(var i,l="none",o=a;o&&!t.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(t)||[,"none"])[1].toLowerCase(),i=r.languages[l]),a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+l,a.parentNode&&(o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+l));var d={element:a,language:l,grammar:i,code:a.textContent},u=function(e){d.highlightedCode=e,r.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,r.hooks.run("after-highlight",d),r.hooks.run("complete",d),s&&s.call(d.element)};if(r.hooks.run("before-sanity-check",d),d.code)if(r.hooks.run("before-highlight",d),d.grammar)if(n&&e.Worker){var c=new Worker(r.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else u(r.highlight(d.code,d.grammar,d.language));else u(r.util.encode(d.code));else r.hooks.run("complete",d)},highlight:function(e,t,a){var s={code:e,grammar:t,language:a};return r.hooks.run("before-tokenize",s),s.tokens=r.tokenize(s.code,s.grammar),r.hooks.run("after-tokenize",s),n.stringify(r.util.encode(s.tokens),s.language)},matchGrammar:function(e,t,a,s,i,l,o){for(var d in a)if(a.hasOwnProperty(d)&&a[d]){if(d==o)return;var u=a[d];u="Array"===r.util.type(u)?u:[u];for(var c=0;c<u.length;++c){var g=u[c],p=g.inside,h=!!g.lookbehind,m=!!g.greedy,b=0,v=g.alias;if(m&&!g.pattern.global){var f=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,f+"g")}g=g.pattern||g;for(var y=s,x=i;y<t.length;x+=t[y].length,++y){var w=t[y];if(t.length>e.length)return;if(!(w instanceof n)){if(m&&y!=t.length-1){if(g.lastIndex=x,!(S=g.exec(e)))break;for(var k=S.index+(h?S[1].length:0),_=S.index+S[0].length,F=y,C=x,A=t.length;F<A&&(C<_||!t[F].type&&!t[F-1].greedy);++F)k>=(C+=t[F].length)&&(++y,x=C);if(t[y]instanceof n)continue;$=F-y,w=e.slice(x,C),S.index-=x}else{g.lastIndex=0;var S=g.exec(w),$=1}if(S){h&&(b=S[1]?S[1].length:0);_=(k=S.index+b)+(S=S[0].slice(b)).length;var j=w.slice(0,k),P=w.slice(_),L=[y,$];j&&(++y,x+=j.length,L.push(j));var E=new n(d,p?r.tokenize(S,p):S,v,S,m);if(L.push(E),P&&L.push(P),Array.prototype.splice.apply(t,L),1!=$&&r.matchGrammar(e,t,a,y,x,!0,d),l)break}else if(l)break}}}}},tokenize:function(e,t){var a=[e],n=t.rest;if(n){for(var s in n)t[s]=n[s];delete t.rest}return r.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=r.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=r.hooks.all[e];if(a&&a.length)for(var n,s=0;n=a[s++];)n(t)}},Token:n};function n(e,t,a,r,n){this.type=e,this.content=t,this.alias=a,this.length=0|(r||"").length,this.greedy=!!n}if(e.Prism=r,n.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return n.stringify(e,t)}).join("");var a={type:e.type,content:n.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var s=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,s)}r.hooks.run("wrap",a);var i=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(i?" "+i:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",function(t){var a=JSON.parse(t.data),n=a.language,s=a.code,i=a.immediateClose;e.postMessage(r.highlight(s,r.languages[n],n)),i&&e.close()},!1),r):r;var s=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return s&&(r.filename=s.src,r.manual||s.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(r.highlightAll):window.setTimeout(r.highlightAll,16):document.addEventListener("DOMContentLoaded",r.highlightAll))),r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};n["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var s={};s[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:n},a.languages.insertBefore("markup","cdata",s)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var r,n=e.getAttribute("data-src"),s=e,i=/\blang(?:uage)?-([\w-]+)\b/i;s&&!i.test(s.className);)s=s.parentNode;if(s&&(r=(e.className.match(i)||[,""])[1]),!r){var l=(n.match(/\.(\w+)$/)||[,""])[1];r=t[l]||l}var o=document.createElement("code");o.className="language-"+r,e.textContent="",o.textContent="Loading…",e.appendChild(o);var d=new XMLHttpRequest;d.open("GET",n,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(o.textContent=d.responseText,a.highlightElement(o),e.setAttribute("data-src-loaded","")):d.status>=400?o.textContent="✖ Error "+d.status+" while fetching file: "+d.statusText:o.textContent="✖ Error: File does not exist or is empty")},d.send(null)}}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),r=document.createElement("a");return r.textContent=t.getAttribute("data-download-link-label")||"Download",r.setAttribute("download",""),r.href=a,r}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}).call(this,a(63))},370:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Spacing")]},proxy:!0},{key:"content",fn:function(){return[a("div",{staticClass:"flex flex:wrap"},[a("div",{staticClass:"flex:1 mr:1"},[a("table",{staticClass:"w:full"},[a("thead",[a("tr",[a("th",[e._v("Class")]),e._v(" "),a("th",[e._v("\n                Side\n                "),a("span",{staticClass:"text:grey text:3/4"},[e._v("(Optional)")])]),e._v(" "),a("th",[e._v("Taille")]),e._v(" "),a("th",[e._v("\n                Px\n                "),a("span",{staticClass:"text:grey text:3/4"},[e._v("(* 16px)")])])])]),e._v(" "),a("tbody",e._l(e.sizes,function(t,r){return a("tr",{key:r},[0===r?a("td",{staticClass:"p:1 whitespace:no-wrap border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("p")]),e._v(" Padding\n              ")]):1===r?a("td",{staticClass:"p:1 whitespace:no-wrap border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("m")]),e._v(" Margin\n              ")]):a("td",{staticClass:"p:1 whitespace:no-wrap border:b border:grey-lighter"}),e._v(" "),0===r?a("td",{staticClass:"p:1 whitespace:no-wrap border:b border:grey-lighter"},[a("code",{staticClass:"border rounded bg:grey-light m:1/4 p:1/2"},[e._v(" ")]),e._v("\n                All\n                "),a("span",{staticClass:"text:grey text:3/4"},[e._v("(Default)")])]):1===r?a("td",{staticClass:"p:1 whitespace:no-wrap border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("t")]),e._v(" Top\n              ")]):2===r?a("td",{staticClass:"p:1 whitespace:no-wrap border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("r")]),e._v(" Right\n              ")]):3===r?a("td",{staticClass:"p:1 whitespace:no-wrap border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("b")]),e._v(" Bottom\n              ")]):4===r?a("td",{staticClass:"p:1 whitespace:no-wrap border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("l")]),e._v(" Left\n              ")]):5===r?a("td",{staticClass:"p:1 whitespace:no-wrap border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("x")]),e._v(" Horizontal\n              ")]):6===r?a("td",{staticClass:"p:1 whitespace:no-wrap border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v("y")]),e._v(" Vertical\n              ")]):a("td",{staticClass:"p:1 whitespace:no-wrap border:b border:grey-lighter"}),e._v(" "),a("td",{staticClass:"p:1 whitespace:no-wrap border:b border:grey-lighter"},[a("code",{staticClass:"border rounded mr:1/4 px:1/5 py:1/4"},[e._v(e._s(t.key))]),e._v("\n                "+e._s(t.value)+"\n              ")]),e._v(" "),t.px?a("td",{staticClass:"p:1 whitespace:no-wrap border:b border:grey-lighter"},[e._v(e._s(t.px)+"px")]):a("td",{staticClass:"p:1 whitespace:no-wrap border:b border:grey-lighter"})])}),0)])]),e._v(" "),a("div",{staticClass:"flex:2"},[a("div",{staticClass:"flex flex:wrap"},[a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"bg:grey-lighter p:1/2"},[a("div",{staticClass:"bg:grey-light p:2"},[e._v("Lorem ipsum dolor sit amet.")])])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple1)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"bg:grey-lighter p:1/2"},[a("div",{staticClass:"bg:grey-light px:1 py:2"},[e._v("Lorem ipsum dolor sit amet.")])])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple2)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"bg:grey-lighter p:1/2"},[a("div",{staticClass:"bg:grey-light pt:1/4 pr:2/5 px:3/5 pl:3/4"},[e._v("Lorem ipsum dolor sit amet.")])])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple3)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"bg:grey-lighter p:1/2"},[a("div",{staticClass:"bg:grey-light m:2"},[e._v("Lorem ipsum dolor sit amet.")])])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple4)}})])])])])])]},proxy:!0}])})};r._withStripped=!0;var n=a(334),s=a.n(n),i={data:function(){return{sizes:[{key:"0",value:"0",px:"0"},{key:"1/5",value:"0.2rem",px:"3.2"},{key:"1/4",value:"0.25rem",px:"4"},{key:"1/3",value:"0.33333rem",px:"5.33333"},{key:"2/5",value:"0.4rem",px:"6.4"},{key:"1/2",value:"0.5rem",px:"8"},{key:"3/5",value:"0.6rem",px:"9.6"},{key:"2/3",value:"0.66667rem",px:"10.66667"},{key:"3/4",value:"0.75rem",px:"12"},{key:"4/5",value:"0.8rem",px:"12.8"},{key:"1",value:"1rem",px:"16"},{key:"5/4",value:"1.25rem",px:"20"},{key:"3/2",value:"1.5rem",px:"24"},{key:"7/4",value:"1.75rem",px:"28"},{key:"2",value:"2rem",px:"32"},{key:"5/2",value:"2.5rem",px:"40"},{key:"3",value:"3rem",px:"48"},{key:"4",value:"4rem",px:"64"},{key:"auto",value:"auto"}],exemple1:null,exemple2:null,exemple3:null,exemple4:null}},mounted:function(){this.exemple1=s.a.highlight('<div class="bg:grey-lighter p:1/2">\n  <div class="bg:grey-light p:2">Lorem ipsum dolor sit amet.</div>\n</div>',s.a.languages.html,"html"),this.exemple2=s.a.highlight('<div class="bg:grey-lighter p:1/2">\n    <div class="bg:grey-lighter px:1 py:2">Lorem ipsum dolor sit amet.</div>\n</div>',s.a.languages.html,"html"),this.exemple3=s.a.highlight('<div class="bg:grey-lighter p:1/2">\n    <div class="bg:grey-lighter pt:1/4 pr:2/5 px:3/5 pl:3/4">Lorem ipsum dolor sit amet.</div>\n</div>',s.a.languages.html,"html"),this.exemple4=s.a.highlight('<div class="bg:grey-lighter p:1/2">\n    <div class="bg:grey-light m:1/2">Lorem ipsum dolor sit amet.</div>\n</div>',s.a.languages.html,"html")}},l=a(49),o=Object(l.a)(i,r,[],!1,null,null,null);o.options.__file="src/pages/utils/Spacing.vue";t.default=o.exports}}]);