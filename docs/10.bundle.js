(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{333:function(e,t,a){(function(t){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,i={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof s?new s(e.type,i.util.encode(e.content),e.alias):Array.isArray(e)?e.map(i.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var s,n,l=i.util.type(t);switch(a=a||{},l){case"Object":if(n=i.util.objId(t),a[n])return a[n];for(var r in s={},a[n]=s,t)t.hasOwnProperty(r)&&(s[r]=e(t[r],a));return s;case"Array":return n=i.util.objId(t),a[n]?a[n]:(s=[],a[n]=s,t.forEach(function(t,i){s[i]=e(t,a)}),s);default:return t}}},languages:{extend:function(e,t){var a=i.util.clone(i.languages[e]);for(var s in t)a[s]=t[s];return a},insertBefore:function(e,t,a,s){var n=(s=s||i.languages)[e],l={};for(var r in n)if(n.hasOwnProperty(r)){if(r==t)for(var u in a)a.hasOwnProperty(u)&&(l[u]=a[u]);a.hasOwnProperty(r)||(l[r]=n[r])}var o=s[e];return s[e]=l,i.languages.DFS(i.languages,function(t,a){a===o&&t!=e&&(this[t]=l)}),l},DFS:function e(t,a,s,n){n=n||{};var l=i.util.objId;for(var r in t)if(t.hasOwnProperty(r)){a.call(t,r,t[r],s||r);var u=t[r],o=i.util.type(u);"Object"!==o||n[l(u)]?"Array"!==o||n[l(u)]||(n[l(u)]=!0,e(u,a,r,n)):(n[l(u)]=!0,e(u,a,null,n))}}},plugins:{},highlightAll:function(e,t){i.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var s={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",s);for(var n,l=e.querySelectorAll(s.selector),r=0;n=l[r++];)i.highlightElement(n,!0===t,s.callback)},highlightElement:function(a,s,n){for(var l,r="none",u=a;u&&!t.test(u.className);)u=u.parentNode;u&&(r=(u.className.match(t)||[,"none"])[1].toLowerCase(),l=i.languages[r]),a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+r,a.parentNode&&(u=a.parentNode,/pre/i.test(u.nodeName)&&(u.className=u.className.replace(t,"").replace(/\s+/g," ")+" language-"+r));var o={element:a,language:r,grammar:l,code:a.textContent},c=function(e){o.highlightedCode=e,i.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,i.hooks.run("after-highlight",o),i.hooks.run("complete",o),n&&n.call(o.element)};if(i.hooks.run("before-sanity-check",o),o.code)if(i.hooks.run("before-highlight",o),o.grammar)if(s&&e.Worker){var d=new Worker(i.filename);d.onmessage=function(e){c(e.data)},d.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else c(i.highlight(o.code,o.grammar,o.language));else c(i.util.encode(o.code));else i.hooks.run("complete",o)},highlight:function(e,t,a){var n={code:e,grammar:t,language:a};return i.hooks.run("before-tokenize",n),n.tokens=i.tokenize(n.code,n.grammar),i.hooks.run("after-tokenize",n),s.stringify(i.util.encode(n.tokens),n.language)},matchGrammar:function(e,t,a,n,l,r,u){for(var o in a)if(a.hasOwnProperty(o)&&a[o]){if(o==u)return;var c=a[o];c="Array"===i.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],p=g.inside,m=!!g.lookbehind,f=!!g.greedy,h=0,v=g.alias;if(f&&!g.pattern.global){var b=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,b+"g")}g=g.pattern||g;for(var y=n,w=l;y<t.length;w+=t[y].length,++y){var x=t[y];if(t.length>e.length)return;if(!(x instanceof s)){if(f&&y!=t.length-1){if(g.lastIndex=w,!(q=g.exec(e)))break;for(var k=q.index+(m?q[1].length:0),F=q.index+q[0].length,A=y,C=w,_=t.length;A<_&&(C<F||!t[A].type&&!t[A-1].greedy);++A)k>=(C+=t[A].length)&&(++y,w=C);if(t[y]instanceof s)continue;S=A-y,x=e.slice(w,C),q.index-=w}else{g.lastIndex=0;var q=g.exec(x),S=1}if(q){m&&(h=q[1]?q[1].length:0);F=(k=q.index+h)+(q=q[0].slice(h)).length;var N=x.slice(0,k),P=x.slice(F),$=[y,S];N&&(++y,w+=N.length,$.push(N));var j=new s(o,p?i.tokenize(q,p):q,v,q,f);if($.push(j),P&&$.push(P),Array.prototype.splice.apply(t,$),1!=S&&i.matchGrammar(e,t,a,y,w,!0,o),r)break}else if(r)break}}}}},tokenize:function(e,t){var a=[e],s=t.rest;if(s){for(var n in s)t[n]=s[n];delete t.rest}return i.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=i.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=i.hooks.all[e];if(a&&a.length)for(var s,n=0;s=a[n++];)s(t)}},Token:s};function s(e,t,a,i,s){this.type=e,this.content=t,this.alias=a,this.length=0|(i||"").length,this.greedy=!!s}if(e.Prism=i,s.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return s.stringify(e,t)}).join("");var a={type:e.type,content:s.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var n=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,n)}i.hooks.run("wrap",a);var l=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(l?" "+l:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(i.disableWorkerMessageHandler||e.addEventListener("message",function(t){var a=JSON.parse(t.data),s=a.language,n=a.code,l=a.immediateClose;e.postMessage(i.highlight(n,i.languages[s],s)),l&&e.close()},!1),i):i;var n=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return n&&(i.filename=n.src,i.manual||n.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(i.highlightAll):window.setTimeout(i.highlightAll,16):document.addEventListener("DOMContentLoaded",i.highlightAll))),i}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var i={};i["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};s["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var n={};n[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:s},a.languages.insertBefore("markup","cdata",n)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var i,s=e.getAttribute("data-src"),n=e,l=/\blang(?:uage)?-([\w-]+)\b/i;n&&!l.test(n.className);)n=n.parentNode;if(n&&(i=(e.className.match(l)||[,""])[1]),!i){var r=(s.match(/\.(\w+)$/)||[,""])[1];i=t[r]||r}var u=document.createElement("code");u.className="language-"+i,e.textContent="",u.textContent="Loading…",e.appendChild(u);var o=new XMLHttpRequest;o.open("GET",s,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?(u.textContent=o.responseText,a.highlightElement(u),e.setAttribute("data-src-loaded","")):o.status>=400?u.textContent="✖ Error "+o.status+" while fetching file: "+o.statusText:u.textContent="✖ Error: File does not exist or is empty")},o.send(null)}}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),i=document.createElement("a");return i.textContent=t.getAttribute("data-download-link-label")||"Download",i.setAttribute("download",""),i.href=a,i}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}).call(this,a(63))},377:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Overflow")]},proxy:!0},{key:"content",fn:function(){return[a("div",{staticClass:"flex flex:wrap"},[a("div",{staticClass:"flex:1 mr:1"},[a("table",{staticClass:"w:full"},[a("thead",[a("tr",[a("th",[e._v("Class")]),e._v(" "),a("th",[e._v("Properties")])])]),e._v(" "),a("tbody",e._l(e.overflow,function(t){return a("tr",{key:t[0]},[a("td",{staticClass:"border:b border:grey-light"},[a("pre",{staticClass:"text:blue"},[a("span",{staticClass:"text:purple"},[e._v("."+e._s(t[0]))])])]),e._v(" "),a("td",{staticClass:"border:b border:grey-light"},[a("pre",{staticClass:"text:blue"},[e._v("overflow: "+e._s(t[1])+";")])])])}),0)])]),e._v(" "),a("div",{staticClass:"flex:2"},[a("div",{staticClass:"flex flex:wrap"},[a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1 overflow:hidden"},[a("div",{staticClass:"overflow:visible bg:grey-light p:1/2",staticStyle:{height:"75px"}},[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.")])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple1)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1 overflow:hidden"},[a("div",{staticClass:"overflow:scroll bg:grey-light p:1/2",staticStyle:{height:"75px"}},[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.")])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple2)}})])])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1 overflow:hidden"},[a("div",{staticClass:"overflow-x:scroll bg:grey-light p:1/2",staticStyle:{height:"75px"}},[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.")])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple3)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1 overflow:hidden"},[a("div",{staticClass:"overflow-y:scroll bg:grey-light p:1/2",staticStyle:{height:"75px"}},[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.")])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple4)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1 overflow:hidden"},[a("div",{staticClass:"overflow:auto bg:grey-light p:1/2",staticStyle:{height:"75px"}},[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.")])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple5)}})])])])])]},proxy:!0}])})};i._withStripped=!0;var s=a(333),n=a.n(s),l={data:function(){return{overflow:[["overflow:auto","auto"],["overflow:hidden","hidden"],["overflow:visible","visible"],["overflow:scroll","scroll"],["overflow-x:auto","auto"],["overflow-y:auto","auto"],["overflow-x:hidden","hidden"],["overflow-y:hidden","hidden"],["overflow-x:visible","visible"],["overflow-y:visible","visible"],["overflow-x:scroll","scroll"],["overflow-y:scroll","scroll"]],exemple1:null,exemple2:null,exemple3:null,exemple4:null,exemple5:null}},mounted:function(){this.exemple1=n.a.highlight('<div class="overflow:visible">\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...\n</div>',n.a.languages.html,"html"),this.exemple2=n.a.highlight('<div class="overflow:scroll">\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...\n</div>',n.a.languages.html,"html"),this.exemple3=n.a.highlight('<div class="overflow-x:scroll">\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...\n</div>',n.a.languages.html,"html"),this.exemple4=n.a.highlight('<div class="overflow-y:scroll">\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...\n</div>',n.a.languages.html,"html"),this.exemple5=n.a.highlight('<div class="overflow:auto">\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...\n</div>',n.a.languages.html,"html")}},r=a(49),u=Object(r.a)(l,i,[],!1,null,null,null);u.options.__file="src/pages/utils/Overflow.vue";t.default=u.exports}}]);