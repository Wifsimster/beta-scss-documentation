(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{103:function(e,t,a){(function(t){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var r,i,s=n.util.type(t);switch(a=a||{},s){case"Object":if(i=n.util.objId(t),a[i])return a[i];for(var l in r={},a[i]=r,t)t.hasOwnProperty(l)&&(r[l]=e(t[l],a));return r;case"Array":return i=n.util.objId(t),a[i]?a[i]:(r=[],a[i]=r,t.forEach((function(t,n){r[n]=e(t,a)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var a in t)if(t[a].src==e)return t[a]}return null}}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){var i=(r=r||n.languages)[e],s={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(s[o]=a[o]);a.hasOwnProperty(l)||(s[l]=i[l])}var u=r[e];return r[e]=s,n.languages.DFS(n.languages,(function(t,a){a===u&&t!=e&&(this[t]=s)})),s},DFS:function e(t,a,r,i){i=i||{};var s=n.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],r||l);var o=t[l],u=n.util.type(o);"Object"!==u||i[s(o)]?"Array"!==u||i[s(o)]||(i[s(o)]=!0,e(o,a,l,i)):(i[s(o)]=!0,e(o,a,null,i))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var r={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),n.hooks.run("before-all-elements-highlight",r);for(var i,s=0;i=r.elements[s++];)n.highlightElement(i,!0===t,r.callback)},highlightElement:function(a,r,i){var s=n.util.getLanguage(a),l=n.languages[s];a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;var o=a.parentNode;o&&"pre"===o.nodeName.toLowerCase()&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var u={element:a,language:s,grammar:l,code:a.textContent};function c(e){u.highlightedCode=e,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,n.hooks.run("after-highlight",u),n.hooks.run("complete",u),i&&i.call(u.element)}if(n.hooks.run("before-sanity-check",u),!u.code)return n.hooks.run("complete",u),void(i&&i.call(u.element));if(n.hooks.run("before-highlight",u),u.grammar)if(r&&e.Worker){var g=new Worker(n.filename);g.onmessage=function(e){c(e.data)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(n.highlight(u.code,u.grammar,u.language));else c(n.util.encode(u.code))},highlight:function(e,t,a){var i={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),r.stringify(n.util.encode(i.tokens),i.language)},tokenize:function(e,t){var a=t.rest;if(a){for(var o in a)t[o]=a[o];delete t.rest}var u=new i;return s(u,u.head,e),function e(t,a,i,o,u,c,g){for(var d in i)if(i.hasOwnProperty(d)&&i[d]){var p=i[d];p=Array.isArray(p)?p:[p];for(var h=0;h<p.length;++h){if(g&&g==d+","+h)return;var f=p[h],m=f.inside,v=!!f.lookbehind,b=!!f.greedy,y=0,k=f.alias;if(b&&!f.pattern.global){var x=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,x+"g")}f=f.pattern||f;for(var w=o.next,F=u;w!==a.tail;F+=w.value.length,w=w.next){var A=w.value;if(a.length>t.length)return;if(!(A instanceof r)){var _=1;if(b&&w!=a.tail.prev){if(f.lastIndex=F,!(j=f.exec(t)))break;var S=j.index+(v&&j[1]?j[1].length:0),$=j.index+j[0].length,C=F;for(C+=w.value.length;S>=C;)w=w.next,C+=w.value.length;if(C-=w.value.length,F=C,w.value instanceof r)continue;for(var E=w;E!==a.tail&&(C<$||"string"==typeof E.value&&!E.prev.value.greedy);E=E.next)_++,C+=E.value.length;_--,A=t.slice(F,C),j.index-=F}else{f.lastIndex=0;var j=f.exec(A)}if(j){v&&(y=j[1]?j[1].length:0);S=j.index+y,j=j[0].slice(y),$=S+j.length;var q=A.slice(0,S),L=A.slice($),P=w.prev;q&&(P=s(a,P,q),F+=q.length),l(a,P,_);var O=new r(d,m?n.tokenize(j,m):j,k,j,b);if(w=s(a,P,O),L&&s(a,w,L),_>1&&e(t,a,i,w.prev,F,!0,d+","+h),c)break}else if(c)break}}}}}(e,u,t,u.head,0),function(e){var t=[],a=e.head.next;for(;a!==e.tail;)t.push(a.value),a=a.next;return t}(u)},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}},Token:r};function r(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r}function i(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function s(e,t,a){var n=t.next,r={value:a,prev:t,next:n};return t.next=r,n.prev=r,e.length++,r}function l(e,t,a){for(var n=t.next,r=0;r<a&&n!==e.tail;r++)n=n.next;t.next=n,n.prev=t,e.length-=r}if(e.Prism=n,r.stringify=function e(t,a){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,a)})),r}var i={type:t.type,content:e(t.content,a),tag:"span",classes:["token",t.type],attributes:{},language:a},s=t.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(i.classes,s):i.classes.push(s)),n.hooks.run("wrap",i);var l="";for(var o in i.attributes)l+=" "+o+'="'+(i.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+l+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var a=JSON.parse(t.data),r=a.language,i=a.code,s=a.immediateClose;e.postMessage(n.highlight(i,n.languages[r],r)),s&&e.close()}),!1),n):n;var o=n.util.currentScript();function u(){n.manual||n.highlightAll()}if(o&&(n.filename=o.src,o.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){var c=document.readyState;"loading"===c||"interactive"===c&&o&&o.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},a.languages.insertBefore("markup","cdata",i)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var n,r=e.getAttribute("data-src"),i=e,s=/\blang(?:uage)?-([\w-]+)\b/i;i&&!s.test(i.className);)i=i.parentNode;if(i&&(n=(e.className.match(s)||[,""])[1]),!n){var l=(r.match(/\.(\w+)$/)||[,""])[1];n=t[l]||l}var o=document.createElement("code");o.className="language-"+n,e.textContent="",o.textContent="Loading…",e.appendChild(o);var u=new XMLHttpRequest;u.open("GET",r,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(o.textContent=u.responseText,a.highlightElement(o),e.setAttribute("data-src-loaded","")):u.status>=400?o.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:o.textContent="✖ Error: File does not exist or is empty")},u.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,a(11))},155:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex my:1"},[a("div",{staticClass:"flex:2/12 pr:1"},[a("div",{staticClass:"flex flex:col overflow-y:auto",staticStyle:{"max-height":"600px"}},e._l(e.properties,(function(t){return a("div",{key:t,staticClass:"flex justify:between transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mb:1/2 cursor:pointer",class:{"border:purple":e.value===t},on:{click:function(a){e.value=t}}},[a("pre",[e._v("text:"+e._s(t))]),e._v(" "),"black"===t?a("pre",{staticClass:"border bg:grey-lighter text:grey-dark px:1/3 text:3/4 rounded"},[e._v("Default")]):e._e(),e._v(" "),a("span",{staticClass:"p:1/2 border rounded",class:"bg:"+t})])})),0)]),e._v(" "),a("div",{staticClass:"flex:10/12"},[a("div",{staticClass:"flex flex:wrap"},[a("div",{staticClass:"flex:1 px:1/2 mb:1"},[a("div",{staticClass:"border rounded:t:1/2 p:1"},[a("div",{staticClass:"py:1",class:"text:"+e.value},[e._m(0)])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple)}})])])])])])};n._withStripped=!0;var r=a(103),i=a.n(r),s={data:function(){return{properties:["black","grey-darkest","grey-darker","grey-dark","grey","grey-light","grey-lighter","grey-lightest","white","red-darkest","red-darker","red-dark","red","red-light","red-lighter","red-lightest","orange-darkest","orange-darker","orange-dark","orange","orange-light","orange-lighter","orange-lightest","yellow-darkest","yellow-darker","yellow-dark","yellow","yellow-light","yellow-lighter","yellow-lightest","green-darkest","green-darker","green-dark","green","green-light","green-lighter","green-lightest","teal-darkest","teal-darker","teal-dark","teal","teal-light","teal-lighter","teal-lightest","blue-darkest","blue-darker","blue-dark","blue","blue-light","blue-lighter","blue-lightest","indigo-darkest","indigo-darker","indigo-dark","indigo","indigo-light","indigo-lighter","indigo-lightest","purple-darkest","purple-darker","purple-dark","purple","purple-light","purple-lighter","purple-lightest","pink-darkest","pink-darker","pink-dark","pink","pink-light","pink-lighter","pink-lightest"],value:null,exemple:null}},created:function(){this.value=this.properties[0]},mounted:function(){this.setExemple()},watch:{value:function(){this.setExemple()}},methods:{setExemple:function(){this.exemple=i.a.highlight('<div class="text:'.concat(this.value,'">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua...\n</div>'),i.a.languages.html,"html")}}},l=a(10),o=Object(l.a)(s,n,[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti velit, ad sequi itaque perferendis quisquam in sunt deleniti blanditiis qui inventore tempora eos veniam obcaecati incidunt, et pariatur corporis molestiae!\n              "),t("br"),this._v(" "),t("br"),this._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores libero vero neque ullam rerum ipsum saepe sequi soluta a quo! Tenetur, maiores? Eius voluptatum, laborum laudantium eaque adipisci aperiam error!\n              "),t("br"),this._v(" "),t("br"),this._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab in fuga doloribus natus corporis eligendi totam saepe deleniti laborum voluptatum consequuntur et, quod quaerat sapiente ex officia, ut dolor repudiandae?\n              "),t("br"),this._v(" "),t("br"),this._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nobis expedita ad perspiciatis aperiam, a ipsa? Labore, vitae. Fugiat sed quia dolorum voluptates optio vitae ad, eveniet porro vero dignissimos.\n            ")])}],!1,null,null,null);o.options.__file="src/pages/utils/text/Color.vue";t.default=o.exports}}]);