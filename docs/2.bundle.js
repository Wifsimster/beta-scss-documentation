(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{333:function(e,t,a){(function(t){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof n?new n(e.type,r.util.encode(e.content),e.alias):Array.isArray(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var n,s,i=r.util.type(t);switch(a=a||{},i){case"Object":if(s=r.util.objId(t),a[s])return a[s];for(var l in n={},a[s]=n,t)t.hasOwnProperty(l)&&(n[l]=e(t[l],a));return n;case"Array":return s=r.util.objId(t),a[s]?a[s]:(n=[],a[s]=n,t.forEach(function(t,r){n[r]=e(t,a)}),n);default:return t}}},languages:{extend:function(e,t){var a=r.util.clone(r.languages[e]);for(var n in t)a[n]=t[n];return a},insertBefore:function(e,t,a,n){var s=(n=n||r.languages)[e],i={};for(var l in s)if(s.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a.hasOwnProperty(l)||(i[l]=s[l])}var g=n[e];return n[e]=i,r.languages.DFS(r.languages,function(t,a){a===g&&t!=e&&(this[t]=i)}),i},DFS:function e(t,a,n,s){s=s||{};var i=r.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],n||l);var o=t[l],g=r.util.type(o);"Object"!==g||s[i(o)]?"Array"!==g||s[i(o)]||(s[i(o)]=!0,e(o,a,l,s)):(s[i(o)]=!0,e(o,a,null,s))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var n={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",n);for(var s,i=e.querySelectorAll(n.selector),l=0;s=i[l++];)r.highlightElement(s,!0===t,n.callback)},highlightElement:function(a,n,s){for(var i,l="none",o=a;o&&!t.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(t)||[,"none"])[1].toLowerCase(),i=r.languages[l]),a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+l,a.parentNode&&(o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+l));var g={element:a,language:l,grammar:i,code:a.textContent},u=function(e){g.highlightedCode=e,r.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,r.hooks.run("after-highlight",g),r.hooks.run("complete",g),s&&s.call(g.element)};if(r.hooks.run("before-sanity-check",g),g.code)if(r.hooks.run("before-highlight",g),g.grammar)if(n&&e.Worker){var d=new Worker(r.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:g.language,code:g.code,immediateClose:!0}))}else u(r.highlight(g.code,g.grammar,g.language));else u(r.util.encode(g.code));else r.hooks.run("complete",g)},highlight:function(e,t,a){var s={code:e,grammar:t,language:a};return r.hooks.run("before-tokenize",s),s.tokens=r.tokenize(s.code,s.grammar),r.hooks.run("after-tokenize",s),n.stringify(r.util.encode(s.tokens),s.language)},matchGrammar:function(e,t,a,s,i,l,o){for(var g in a)if(a.hasOwnProperty(g)&&a[g]){if(g==o)return;var u=a[g];u="Array"===r.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var c=u[d],p=c.inside,h=!!c.lookbehind,f=!!c.greedy,m=0,b=c.alias;if(f&&!c.pattern.global){var y=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,y+"g")}c=c.pattern||c;for(var v=s,k=i;v<t.length;k+=t[v].length,++v){var x=t[v];if(t.length>e.length)return;if(!(x instanceof n)){if(f&&v!=t.length-1){if(c.lastIndex=k,!($=c.exec(e)))break;for(var w=$.index+(h?$[1].length:0),F=$.index+$[0].length,A=v,_=k,C=t.length;A<C&&(_<F||!t[A].type&&!t[A-1].greedy);++A)w>=(_+=t[A].length)&&(++v,k=_);if(t[v]instanceof n)continue;S=A-v,x=e.slice(k,_),$.index-=k}else{c.lastIndex=0;var $=c.exec(x),S=1}if($){h&&(m=$[1]?$[1].length:0);F=(w=$.index+m)+($=$[0].slice(m)).length;var j=x.slice(0,w),E=x.slice(F),P=[v,S];j&&(++v,k+=j.length,P.push(j));var N=new n(g,p?r.tokenize($,p):$,b,$,f);if(P.push(N),E&&P.push(E),Array.prototype.splice.apply(t,P),1!=S&&r.matchGrammar(e,t,a,v,k,!0,g),l)break}else if(l)break}}}}},tokenize:function(e,t){var a=[e],n=t.rest;if(n){for(var s in n)t[s]=n[s];delete t.rest}return r.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=r.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=r.hooks.all[e];if(a&&a.length)for(var n,s=0;n=a[s++];)n(t)}},Token:n};function n(e,t,a,r,n){this.type=e,this.content=t,this.alias=a,this.length=0|(r||"").length,this.greedy=!!n}if(e.Prism=r,n.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return n.stringify(e,t)}).join("");var a={type:e.type,content:n.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var s=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,s)}r.hooks.run("wrap",a);var i=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(i?" "+i:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",function(t){var a=JSON.parse(t.data),n=a.language,s=a.code,i=a.immediateClose;e.postMessage(r.highlight(s,r.languages[n],n)),i&&e.close()},!1),r):r;var s=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return s&&(r.filename=s.src,r.manual||s.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(r.highlightAll):window.setTimeout(r.highlightAll,16):document.addEventListener("DOMContentLoaded",r.highlightAll))),r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};n["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var s={};s[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:n},a.languages.insertBefore("markup","cdata",s)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var r,n=e.getAttribute("data-src"),s=e,i=/\blang(?:uage)?-([\w-]+)\b/i;s&&!i.test(s.className);)s=s.parentNode;if(s&&(r=(e.className.match(i)||[,""])[1]),!r){var l=(n.match(/\.(\w+)$/)||[,""])[1];r=t[l]||l}var o=document.createElement("code");o.className="language-"+r,e.textContent="",o.textContent="Loading…",e.appendChild(o);var g=new XMLHttpRequest;g.open("GET",n,!0),g.onreadystatechange=function(){4==g.readyState&&(g.status<400&&g.responseText?(o.textContent=g.responseText,a.highlightElement(o),e.setAttribute("data-src-loaded","")):g.status>=400?o.textContent="✖ Error "+g.status+" while fetching file: "+g.statusText:o.textContent="✖ Error: File does not exist or is empty")},g.send(null)}}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),r=document.createElement("a");return r.textContent=t.getAttribute("data-download-link-label")||"Download",r.setAttribute("download",""),r.href=a,r}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}).call(this,a(63))},338:function(e,t,a){var r=a(348);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(93).default)("020b102b",r,!1,{})},347:function(e,t,a){"use strict";var r=a(338);a.n(r).a},348:function(e,t,a){(e.exports=a(92)(!1)).push([e.i,"input[data-v-1679aec2] {\n  height: 33px;\n}\n",""])},354:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex"},[a("div",{staticClass:"flex:1 mr:1"},[a("div",{staticClass:"overflow-y:auto line:normal",staticStyle:{"max-height":"640px"}},[a("table",{staticClass:"w:full"},[e._m(0),e._v(" "),a("tbody",e._l(e.colors,function(t){return a("tr",{key:t},[a("td",{staticClass:"px:1 border:b border:grey-lighter"},[a("pre",{staticClass:"inline text:purple"},[e._v(".border:"+e._s(t))]),e._v(" "),"grey-light"===t?a("pre",{staticClass:"inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"},[e._v("Default")]):e._e()]),e._v(" "),a("td",{staticClass:"px:1 py:1/2 border:b border:grey-lighter"},[a("div",{staticClass:"border px:1 py:3",class:"border:"+t})])])}),0)])])]),e._v(" "),a("div",{staticClass:"flex:2"},[a("div",{staticClass:"flex flex:wrap"},[a("div",{staticClass:"flex:1 py:1/2 mb:1"},[e._m(1),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple1)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[e._m(2),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple2)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[e._m(3),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple3)}})])]),e._v(" "),a("div",{staticClass:"flex:1 py:1/2 mb:1"},[e._m(4),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple4)}})])])])])])};r._withStripped=!0;var n=a(333),s=a.n(n),i={data:function(){return{colors:["black","grey-darkest","grey-darker","grey-dark","grey","grey-light","grey-lighter","grey-lightest","white","red-darkest","red-darker","red-dark","red","red-light","red-lighter","red-lightest","orange-darkest","orange-darker","orange-dark","orange","orange-light","orange-lighter","orange-lightest","yellow:darkest","yellow:darker","yellow:dark","yellow","yellow:light","yellow:lighter","yellow:lightest","green-darkest","green-darker","green-dark","green","green-light","green-lighter","green-lightest","teal-darkest","teal-darker","teal-dark","teal","teal-light","teal-lighter","teal-lightest","blue-darkest","blue-darker","blue-dark","blue","blue-light","blue-lighter","blue-lightest","indigo-darkest","indigo-darker","indigo-dark","indigo","indigo-light","indigo-lighter","indigo-lightest","purple-darkest","purple-darker","purple-dark","purple","purple-light","purple-lighter","purple-lightest","pink-darkest","pink-darker","pink-dark","pink","pink-light","pink-lighter","pink-lightest"],exemple1:null,exemple2:null,exemple3:null,exemple4:null}},mounted:function(){this.exemple1=s.a.highlight('<div class="px:1 bg:grey-lighter border border:teal"></div>',s.a.languages.html,"html"),this.exemple2=s.a.highlight('<div class="px:1 bg:grey-lighter border:b border:red"></div>',s.a.languages.html,"html"),this.exemple3=s.a.highlight('<input class="bg:grey-lighter border:b hover:border:green">',s.a.languages.html,"html"),this.exemple4=s.a.highlight('<input class="bg:grey-lighter border:b focus:border:green">',s.a.languages.html,"html")}},l=(a(347),a(49)),o=Object(l.a)(i,r,[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Class")]),this._v(" "),t("th")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"border rounded:t:1/2 p:1"},[t("div",{staticClass:"px:1 bg:grey-lighter border border:teal"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"border rounded:t:1/2 p:1"},[t("div",{staticClass:"px:1 bg:grey-lighter border:b border:red"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"border rounded:t:1/2 p:1"},[t("input",{staticClass:"bg:grey-lighter border:b hover:border:green"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"border rounded:t:1/2 p:1"},[t("input",{staticClass:"bg:grey-lighter border:b focus:border:green"})])}],!1,null,"1679aec2",null);o.options.__file="src/pages/utils/border/Color.vue";t.default=o.exports}}]);