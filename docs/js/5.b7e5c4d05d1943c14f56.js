(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{28:function(e,t,a){(function(t){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):Array.isArray(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var r,s,i=n.util.type(t);switch(a=a||{},i){case"Object":if(s=n.util.objId(t),a[s])return a[s];for(var l in r={},a[s]=r,t)t.hasOwnProperty(l)&&(r[l]=e(t[l],a));return r;case"Array":return s=n.util.objId(t),a[s]?a[s]:(r=[],a[s]=r,t.forEach((function(t,n){r[n]=e(t,a)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var a in t)if(t[a].src==e)return t[a]}return null}}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){var s=(r=r||n.languages)[e],i={};for(var l in s)if(s.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a.hasOwnProperty(l)||(i[l]=s[l])}var c=r[e];return r[e]=i,n.languages.DFS(n.languages,(function(t,a){a===c&&t!=e&&(this[t]=i)})),i},DFS:function e(t,a,r,s){s=s||{};var i=n.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],r||l);var o=t[l],c=n.util.type(o);"Object"!==c||s[i(o)]?"Array"!==c||s[i(o)]||(s[i(o)]=!0,e(o,a,l,s)):(s[i(o)]=!0,e(o,a,null,s))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var r={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),n.hooks.run("before-all-elements-highlight",r);for(var s,i=0;s=r.elements[i++];)n.highlightElement(s,!0===t,r.callback)},highlightElement:function(a,r,s){var i=n.util.getLanguage(a),l=n.languages[i];a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+i;var o=a.parentNode;o&&"pre"===o.nodeName.toLowerCase()&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+i);var c={element:a,language:i,grammar:l,code:a.textContent};function u(e){c.highlightedCode=e,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,n.hooks.run("after-highlight",c),n.hooks.run("complete",c),s&&s.call(c.element)}if(n.hooks.run("before-sanity-check",c),!c.code)return n.hooks.run("complete",c),void(s&&s.call(c.element));if(n.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var p=new Worker(n.filename);p.onmessage=function(e){u(e.data)},p.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(n.highlight(c.code,c.grammar,c.language));else u(n.util.encode(c.code))},highlight:function(e,t,a){var s={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",s),s.tokens=n.tokenize(s.code,s.grammar),n.hooks.run("after-tokenize",s),r.stringify(n.util.encode(s.tokens),s.language)},matchGrammar:function(e,t,a,s,i,l,o){for(var c in a)if(a.hasOwnProperty(c)&&a[c]){var u=a[c];u=Array.isArray(u)?u:[u];for(var p=0;p<u.length;++p){if(o&&o==c+","+p)return;var g=u[p],d=g.inside,f=!!g.lookbehind,h=!!g.greedy,m=0,v=g.alias;if(h&&!g.pattern.global){var b=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,b+"g")}g=g.pattern||g;for(var y=s,x=i;y<t.length;x+=t[y].length,++y){var k=t[y];if(t.length>e.length)return;if(!(k instanceof r)){if(h&&y!=t.length-1){if(g.lastIndex=x,!(S=g.exec(e)))break;for(var F=S.index+(f&&S[1]?S[1].length:0),_=S.index+S[0].length,w=y,A=x,C=t.length;w<C&&(A<_||!t[w].type&&!t[w-1].greedy);++w)F>=(A+=t[w].length)&&(++y,x=A);if(t[y]instanceof r)continue;$=w-y,k=e.slice(x,A),S.index-=x}else{g.lastIndex=0;var S=g.exec(k),$=1}if(S){f&&(m=S[1]?S[1].length:0);_=(F=S.index+m)+(S=S[0].slice(m)).length;var j=k.slice(0,F),E=k.slice(_),P=[y,$];j&&(++y,x+=j.length,P.push(j));var O=new r(c,d?n.tokenize(S,d):S,v,S,h);if(P.push(O),E&&P.push(E),Array.prototype.splice.apply(t,P),1!=$&&n.matchGrammar(e,t,a,y,x,!0,c+","+p),l)break}else if(l)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var s in r)t[s]=r[s];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,s=0;r=a[s++];)r(t)}},Token:r};function r(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r}if(e.Prism=n,r.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return r.stringify(e,t)})).join("");var a={type:e.type,content:r.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var s=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,s)}n.hooks.run("wrap",a);var i=Object.keys(a.attributes).map((function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(i?" "+i:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var a=JSON.parse(t.data),r=a.language,s=a.code,i=a.immediateClose;e.postMessage(n.highlight(s,n.languages[r],r)),i&&e.close()}),!1),n):n;var s=n.util.currentScript();if(s&&(n.filename=s.src,s.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){function i(){n.manual||n.highlightAll()}var l=document.readyState;"loading"===l||"interactive"===l&&s&&s.defer?document.addEventListener("DOMContentLoaded",i):window.requestAnimationFrame?window.requestAnimationFrame(i):window.setTimeout(i,16)}return n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var s={};s[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:r},a.languages.insertBefore("markup","cdata",s)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var n,r=e.getAttribute("data-src"),s=e,i=/\blang(?:uage)?-([\w-]+)\b/i;s&&!i.test(s.className);)s=s.parentNode;if(s&&(n=(e.className.match(i)||[,""])[1]),!n){var l=(r.match(/\.(\w+)$/)||[,""])[1];n=t[l]||l}var o=document.createElement("code");o.className="language-"+n,e.textContent="",o.textContent="Loading…",e.appendChild(o);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(o.textContent=c.responseText,a.highlightElement(o),e.setAttribute("data-src-loaded","")):c.status>=400?o.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:o.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,a(3))},50:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Animation")]},proxy:!0},{key:"content",fn:function(){return[a("div",{staticClass:"flex flex:wrap"},[a("div",{staticClass:"flex:1 mr:1"},[a("table",{staticClass:"w:full"},[a("thead",[a("tr",[a("th",[e._v("Class")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("pre",{staticClass:"inline text:purple"},[e._v(".rotate:0")])])]),e._v(" "),a("tr",[a("td",[a("pre",{staticClass:"inline text:purple"},[e._v(".rotate:90")])])]),e._v(" "),a("tr",[a("td",[a("pre",{staticClass:"inline text:purple"},[e._v(".rotate:180")])])]),e._v(" "),a("tr",[a("td",[a("pre",{staticClass:"inline text:purple"},[e._v(".rotate:270")])])]),e._v(" "),a("tr",[a("td",[a("pre",{staticClass:"inline text:purple"},[e._v(".rotating")])])]),e._v(" "),a("tr",[a("td",[a("pre",{staticClass:"inline text:purple"},[e._v(".hover:rotate:0")])])]),e._v(" "),a("tr",[a("td",[a("pre",{staticClass:"inline text:purple"},[e._v(".hover:rotate:90")])])]),e._v(" "),a("tr",[a("td",[a("pre",{staticClass:"inline text:purple"},[e._v(".hover:rotate:180")])])]),e._v(" "),a("tr",[a("td",[a("pre",{staticClass:"inline text:purple"},[e._v(".hover:rotate:270")])])]),e._v(" "),a("tr",[a("td",[a("pre",{staticClass:"inline text:purple"},[e._v(".hover:rotating")])])])])])]),e._v(" "),a("div",{staticClass:"flex:3"},[a("div",{staticClass:"flex flex:wrap"},[a("div",{staticClass:"flex:1 mb:1 mr:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"bg:grey-lighter p:1"},[a("i",{staticClass:"p:1 text:5/4 rotate:0"},[e._v("top")]),e._v(" "),a("i",{staticClass:"p:1 text:5/4 rotate:90"},[e._v("top")]),e._v(" "),a("i",{staticClass:"p:1 text:5/4 rotate:180"},[e._v("top")]),e._v(" "),a("i",{staticClass:"p:1 text:5/4 rotate:270"},[e._v("top")]),e._v(" "),a("i",{staticClass:"p:1 text:5/4 rotating"},[e._v("config")])])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple1)}})])]),e._v(" "),a("div",{staticClass:"flex:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"bg:grey-lighter p:1"},[a("i",{staticClass:"inline-block p:1 text:5/4 rotate:90 hover:rotate:0"},[e._v("top")]),e._v(" "),a("i",{staticClass:"inline-block p:1 text:5/4 hover:rotate:90"},[e._v("top")]),e._v(" "),a("i",{staticClass:"inline-block p:1 text:5/4 hover:rotate:180"},[e._v("top")]),e._v(" "),a("i",{staticClass:"inline-block p:1 text:5/4 hover:rotate:270"},[e._v("top")]),e._v(" "),a("i",{staticClass:"inline-block p:1 text:5/4 hover:rotating"},[e._v("config")])])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple2)}})])])])])])]},proxy:!0}])})};n._withStripped=!0;var r=a(28),s=a.n(r),i={data:function(){return{exemple1:null,exemple2:null}},mounted:function(){this.exemple1=s.a.highlight('<i class="rotate:0">top</i>\n<i class="rotate:90">top</i>\n<i class="rotate:180">top</i>\n<i class="rotate:270">top</i>\n<i class="rotating">config</i>',s.a.languages.html,"html"),this.exemple2=s.a.highlight('<i class="rotate:90 hover:rotate:0">top</i>\n<i class="hover:rotate:90">top</i>\n<i class="hover:rotate:180">top</i>\n<i class="hover:rotate:270">top</i>\n<i class="hover:rotating">config</i>',s.a.languages.html,"html")}},l=a(1),o=Object(l.a)(i,n,[],!1,null,null,null);o.options.__file="src/pages/utils/Animation.vue";t.default=o.exports}}]);