(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{103:function(e,t,a){(function(t){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof i?new i(e.type,n.util.encode(e.content),e.alias):Array.isArray(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var i,s,r=n.util.type(t);switch(a=a||{},r){case"Object":if(s=n.util.objId(t),a[s])return a[s];for(var l in i={},a[s]=i,t)t.hasOwnProperty(l)&&(i[l]=e(t[l],a));return i;case"Array":return s=n.util.objId(t),a[s]?a[s]:(i=[],a[s]=i,t.forEach((function(t,n){i[n]=e(t,a)})),i);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var a in t)if(t[a].src==e)return t[a]}return null}}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var i in t)a[i]=t[i];return a},insertBefore:function(e,t,a,i){var s=(i=i||n.languages)[e],r={};for(var l in s)if(s.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(r[o]=a[o]);a.hasOwnProperty(l)||(r[l]=s[l])}var u=i[e];return i[e]=r,n.languages.DFS(n.languages,(function(t,a){a===u&&t!=e&&(this[t]=r)})),r},DFS:function e(t,a,i,s){s=s||{};var r=n.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],i||l);var o=t[l],u=n.util.type(o);"Object"!==u||s[r(o)]?"Array"!==u||s[r(o)]||(s[r(o)]=!0,e(o,a,l,s)):(s[r(o)]=!0,e(o,a,null,s))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var i={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),n.hooks.run("before-all-elements-highlight",i);for(var s,r=0;s=i.elements[r++];)n.highlightElement(s,!0===t,i.callback)},highlightElement:function(a,i,s){var r=n.util.getLanguage(a),l=n.languages[r];a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+r;var o=a.parentNode;o&&"pre"===o.nodeName.toLowerCase()&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+r);var u={element:a,language:r,grammar:l,code:a.textContent};function c(e){u.highlightedCode=e,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,n.hooks.run("after-highlight",u),n.hooks.run("complete",u),s&&s.call(u.element)}if(n.hooks.run("before-sanity-check",u),!u.code)return n.hooks.run("complete",u),void(s&&s.call(u.element));if(n.hooks.run("before-highlight",u),u.grammar)if(i&&e.Worker){var d=new Worker(n.filename);d.onmessage=function(e){c(e.data)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(n.highlight(u.code,u.grammar,u.language));else c(n.util.encode(u.code))},highlight:function(e,t,a){var s={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",s),s.tokens=n.tokenize(s.code,s.grammar),n.hooks.run("after-tokenize",s),i.stringify(n.util.encode(s.tokens),s.language)},matchGrammar:function(e,t,a,s,r,l,o){for(var u in a)if(a.hasOwnProperty(u)&&a[u]){var c=a[u];c=Array.isArray(c)?c:[c];for(var d=0;d<c.length;++d){if(o&&o==u+","+d)return;var g=c[d],p=g.inside,h=!!g.lookbehind,f=!!g.greedy,m=0,v=g.alias;if(f&&!g.pattern.global){var y=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var b=s,k=r;b<t.length;k+=t[b].length,++b){var x=t[b];if(t.length>e.length)return;if(!(x instanceof i)){if(f&&b!=t.length-1){if(g.lastIndex=k,!($=g.exec(e)))break;for(var F=$.index+(h&&$[1]?$[1].length:0),w=$.index+$[0].length,A=b,_=k,C=t.length;A<C&&(_<w||!t[A].type&&!t[A-1].greedy);++A)F>=(_+=t[A].length)&&(++b,k=_);if(t[b]instanceof i)continue;S=A-b,x=e.slice(k,_),$.index-=k}else{g.lastIndex=0;var $=g.exec(x),S=1}if($){h&&(m=$[1]?$[1].length:0);w=(F=$.index+m)+($=$[0].slice(m)).length;var j=x.slice(0,F),E=x.slice(w),L=[b,S];j&&(++b,k+=j.length,L.push(j));var P=new i(u,p?n.tokenize($,p):$,v,$,f);if(L.push(P),E&&L.push(E),Array.prototype.splice.apply(t,L),1!=S&&n.matchGrammar(e,t,a,b,k,!0,u+","+d),l)break}else if(l)break}}}}},tokenize:function(e,t){var a=[e],i=t.rest;if(i){for(var s in i)t[s]=i[s];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var i,s=0;i=a[s++];)i(t)}},Token:i};function i(e,t,a,n,i){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!i}if(e.Prism=n,i.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return i.stringify(e,t)})).join("");var a={type:e.type,content:i.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var s=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,s)}n.hooks.run("wrap",a);var r=Object.keys(a.attributes).map((function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(r?" "+r:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var a=JSON.parse(t.data),i=a.language,s=a.code,r=a.immediateClose;e.postMessage(n.highlight(s,n.languages[i],i)),r&&e.close()}),!1),n):n;var s=n.util.currentScript();if(s&&(n.filename=s.src,s.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){function r(){n.manual||n.highlightAll()}var l=document.readyState;"loading"===l||"interactive"===l&&s&&s.defer?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16)}return n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};i["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var s={};s[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:i},a.languages.insertBefore("markup","cdata",s)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var n,i=e.getAttribute("data-src"),s=e,r=/\blang(?:uage)?-([\w-]+)\b/i;s&&!r.test(s.className);)s=s.parentNode;if(s&&(n=(e.className.match(r)||[,""])[1]),!n){var l=(i.match(/\.(\w+)$/)||[,""])[1];n=t[l]||l}var o=document.createElement("code");o.className="language-"+n,e.textContent="",o.textContent="Loading…",e.appendChild(o);var u=new XMLHttpRequest;u.open("GET",i,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(o.textContent=u.responseText,a.highlightElement(o),e.setAttribute("data-src-loaded","")):u.status>=400?o.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:o.textContent="✖ Error: File does not exist or is empty")},u.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,a(11))},165:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex:wrap"},[a("div",{staticClass:"flex:1 mr:1"},[a("table",{staticClass:"w:full"},[e._m(0),e._v(" "),a("tbody",e._l(e.weights,(function(t){return a("tr",{key:t.key},[a("td",[a("pre",{staticClass:"inline text:purple"},[e._v(".text:"+e._s(t.key))]),e._v(" "),"normal"===t.key?a("pre",{staticClass:"inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"},[e._v("Default")]):e._e()]),e._v(" "),a("td",{staticClass:"text:center"},[a("pre",{staticClass:"text:blue"},[e._v(e._s(t.value))])]),e._v(" "),a("td",{staticClass:"text:center py:1/2 border:b border:grey-light",class:"text:"+t.key},[e._v("Aa")])])})),0)])]),e._v(" "),a("div",{staticClass:"flex:2"},[a("div",{staticClass:"flex flex:wrap"},[a("div",{staticClass:"flex:1 px:1/2 mb:1"},[e._m(1),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple1)}})])])])])])};n._withStripped=!0;var i=a(103),s=a.n(i),r={data:function(){return{weights:[{key:"lightest",value:"100"},{key:"lighter",value:"200"},{key:"light",value:"300"},{key:"normal",value:"400"},{key:"bold",value:"500"},{key:"bolder",value:"600"},{key:"boldest",value:"700"}],exemple1:null}},mounted:function(){this.exemple1=s.a.highlight('<div class="py:1 text:lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>\n<div class="py:1 text:light">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>\n<div class="py:1 text:normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>\n<div class="py:1 text:bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>',s.a.languages.html,"html")}},l=a(10),o=Object(l.a)(r,n,[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Class")]),this._v(" "),t("th",[this._v("Properties")]),this._v(" "),t("th",[this._v("Result")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"border rounded:t:1/2 p:1"},[t("div",{staticClass:"py:1 text:lighter"},[this._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.")]),this._v(" "),t("div",{staticClass:"py:1 text:light"},[this._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.")]),this._v(" "),t("div",{staticClass:"py:1 text:normal"},[this._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.")]),this._v(" "),t("div",{staticClass:"py:1 text:bold"},[this._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.")])])}],!1,null,null,null);o.options.__file="src/pages/utils/text/Weight.vue";t.default=o.exports}}]);