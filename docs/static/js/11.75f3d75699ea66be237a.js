(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{103:function(e,t,a){(function(t){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var i,r,s=n.util.type(t);switch(a=a||{},s){case"Object":if(r=n.util.objId(t),a[r])return a[r];for(var o in i={},a[r]=i,t)t.hasOwnProperty(o)&&(i[o]=e(t[o],a));return i;case"Array":return r=n.util.objId(t),a[r]?a[r]:(i=[],a[r]=i,t.forEach((function(t,n){i[n]=e(t,a)})),i);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var a in t)if(t[a].src==e)return t[a]}return null}}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var i in t)a[i]=t[i];return a},insertBefore:function(e,t,a,i){var r=(i=i||n.languages)[e],s={};for(var o in r)if(r.hasOwnProperty(o)){if(o==t)for(var l in a)a.hasOwnProperty(l)&&(s[l]=a[l]);a.hasOwnProperty(o)||(s[o]=r[o])}var u=i[e];return i[e]=s,n.languages.DFS(n.languages,(function(t,a){a===u&&t!=e&&(this[t]=s)})),s},DFS:function e(t,a,i,r){r=r||{};var s=n.util.objId;for(var o in t)if(t.hasOwnProperty(o)){a.call(t,o,t[o],i||o);var l=t[o],u=n.util.type(l);"Object"!==u||r[s(l)]?"Array"!==u||r[s(l)]||(r[s(l)]=!0,e(l,a,o,r)):(r[s(l)]=!0,e(l,a,null,r))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var i={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),n.hooks.run("before-all-elements-highlight",i);for(var r,s=0;r=i.elements[s++];)n.highlightElement(r,!0===t,i.callback)},highlightElement:function(a,i,r){var s=n.util.getLanguage(a),o=n.languages[s];a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;var l=a.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var u={element:a,language:s,grammar:o,code:a.textContent};function c(e){u.highlightedCode=e,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,n.hooks.run("after-highlight",u),n.hooks.run("complete",u),r&&r.call(u.element)}if(n.hooks.run("before-sanity-check",u),!u.code)return n.hooks.run("complete",u),void(r&&r.call(u.element));if(n.hooks.run("before-highlight",u),u.grammar)if(i&&e.Worker){var d=new Worker(n.filename);d.onmessage=function(e){c(e.data)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(n.highlight(u.code,u.grammar,u.language));else c(n.util.encode(u.code))},highlight:function(e,t,a){var r={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",r),r.tokens=n.tokenize(r.code,r.grammar),n.hooks.run("after-tokenize",r),i.stringify(n.util.encode(r.tokens),r.language)},tokenize:function(e,t){var a=t.rest;if(a){for(var l in a)t[l]=a[l];delete t.rest}var u=new r;return s(u,u.head,e),function e(t,a,r,l,u,c,d){for(var p in r)if(r.hasOwnProperty(p)&&r[p]){var g=r[p];g=Array.isArray(g)?g:[g];for(var m=0;m<g.length;++m){if(d&&d==p+","+m)return;var f=g[m],v=f.inside,h=!!f.lookbehind,b=!!f.greedy,y=0,x=f.alias;if(b&&!f.pattern.global){var w=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,w+"g")}f=f.pattern||f;for(var F=l.next,k=u;F!==a.tail;k+=F.value.length,F=F.next){var A=F.value;if(a.length>t.length)return;if(!(A instanceof i)){var _=1;if(b&&F!=a.tail.prev){if(f.lastIndex=k,!(E=f.exec(t)))break;var q=E.index+(h&&E[1]?E[1].length:0),S=E.index+E[0].length,$=k;for($+=F.value.length;q>=$;)F=F.next,$+=F.value.length;if($-=F.value.length,k=$,F.value instanceof i)continue;for(var C=F;C!==a.tail&&($<S||"string"==typeof C.value&&!C.prev.value.greedy);C=C.next)_++,$+=C.value.length;_--,A=t.slice(k,$),E.index-=k}else{f.lastIndex=0;var E=f.exec(A)}if(E){h&&(y=E[1]?E[1].length:0);q=E.index+y,E=E[0].slice(y),S=q+E.length;var j=A.slice(0,q),L=A.slice(S),O=F.prev;j&&(O=s(a,O,j),k+=j.length),o(a,O,_);var P=new i(p,v?n.tokenize(E,v):E,x,E,b);if(F=s(a,O,P),L&&s(a,F,L),_>1&&e(t,a,r,F.prev,k,!0,p+","+m),c)break}else if(c)break}}}}}(e,u,t,u.head,0),function(e){var t=[],a=e.head.next;for(;a!==e.tail;)t.push(a.value),a=a.next;return t}(u)},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var i,r=0;i=a[r++];)i(t)}},Token:i};function i(e,t,a,n,i){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!i}function r(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function s(e,t,a){var n=t.next,i={value:a,prev:t,next:n};return t.next=i,n.prev=i,e.length++,i}function o(e,t,a){for(var n=t.next,i=0;i<a&&n!==e.tail;i++)n=n.next;t.next=n,n.prev=t,e.length-=i}if(e.Prism=n,i.stringify=function e(t,a){if("string"==typeof t)return t;if(Array.isArray(t)){var i="";return t.forEach((function(t){i+=e(t,a)})),i}var r={type:t.type,content:e(t.content,a),tag:"span",classes:["token",t.type],attributes:{},language:a},s=t.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(r.classes,s):r.classes.push(s)),n.hooks.run("wrap",r);var o="";for(var l in r.attributes)o+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+o+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var a=JSON.parse(t.data),i=a.language,r=a.code,s=a.immediateClose;e.postMessage(n.highlight(r,n.languages[i],i)),s&&e.close()}),!1),n):n;var l=n.util.currentScript();function u(){n.manual||n.highlightAll()}if(l&&(n.filename=l.src,l.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){var c=document.readyState;"loading"===c||"interactive"===c&&l&&l.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};i["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:i},a.languages.insertBefore("markup","cdata",r)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var n,i=e.getAttribute("data-src"),r=e,s=/\blang(?:uage)?-([\w-]+)\b/i;r&&!s.test(r.className);)r=r.parentNode;if(r&&(n=(e.className.match(s)||[,""])[1]),!n){var o=(i.match(/\.(\w+)$/)||[,""])[1];n=t[o]||o}var l=document.createElement("code");l.className="language-"+n,e.textContent="",l.textContent="Loading…",e.appendChild(l);var u=new XMLHttpRequest;u.open("GET",i,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(l.textContent=u.responseText,a.highlightElement(l),e.setAttribute("data-src-loaded","")):u.status>=400?l.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:l.textContent="✖ Error: File does not exist or is empty")},u.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,a(11))},138:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Overflow")]},proxy:!0},{key:"content",fn:function(){return[a("div",{staticClass:"flex flex:wrap my:1"},[a("div",{staticClass:"flex:2/12 pr:1"},e._l(e.properites,(function(t){return a("pre",{key:t,staticClass:"transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mb:1/2 cursor:pointer",class:{"border:purple":e.value===t},on:{click:function(a){e.value=t}}},[e._v(e._s(t))])})),0),e._v(" "),a("div",{staticClass:"flex:10/12"},[a("div",{staticClass:"flex flex:wrap"},[a("div",{staticClass:"flex:1"},[a("div",{staticClass:"border rounded:t:1/2 p:2"},[a("div",{staticClass:"transition border rounded bg:grey-lighter p:2",class:""+e.value,staticStyle:{"max-height":"400px"}},[a("p",[e._v("\n                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aliquid dolor rem sit sapiente impedit in qui repellat voluptas quisquam ad obcaecati corporis magni facilis, ex consectetur ipsa nam quidem!\n                  "),a("br"),e._v(" "),a("br"),e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cumque eaque neque placeat debitis fuga sequi vero maxime voluptatem, corporis veniam provident quos sed corrupti quibusdam soluta nisi laboriosam qui.\n                  "),a("br"),e._v(" "),a("br"),e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quasi voluptate perspiciatis asperiores maxime, mollitia quas saepe magni sunt dignissimos. Animi at quae dolore obcaecati minima quia expedita quas perferendis!\n                  "),a("br"),e._v(" "),a("br"),e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi velit inventore error laudantium ad sint illo repellendus eaque consectetur quae eum vitae, maxime ratione dignissimos beatae incidunt alias numquam iusto?\n                  "),a("br"),e._v(" "),a("br"),e._v("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere cupiditate ducimus beatae vitae perferendis! Doloremque fugiat quaerat vero, minima ab iusto repudiandae distinctio voluptatem eveniet deleniti! Autem maiores magnam odio.\n                  "),a("br"),e._v(" "),a("br"),e._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta tempore nisi labore a vitae dolores aperiam hic asperiores aliquid accusantium incidunt minus dolore, illum, doloremque architecto atque dolorem. Repellat, porro?\n                  "),a("br"),e._v(" "),a("br"),e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veniam blanditiis explicabo atque nobis. Vel quia dolore explicabo nemo recusandae maiores deserunt quibusdam alias, blanditiis quos dignissimos facere veritatis minus.\n                  "),a("br"),e._v(" "),a("br"),e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, exercitationem unde! Suscipit est id nam quas exercitationem modi aspernatur dignissimos, sequi voluptate ducimus alias qui excepturi repudiandae tempora nisi assumenda?\n                  "),a("br"),e._v(" "),a("br"),e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit, itaque nobis sapiente explicabo aspernatur velit tenetur error sed odit voluptatibus praesentium obcaecati illo culpa quam alias numquam. Earum, ex!\n                  "),a("br"),e._v(" "),a("br"),e._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eos error delectus dolorum, beatae velit commodi perspiciatis. Quasi quaerat debitis fuga eveniet autem sapiente deleniti voluptate sequi. Voluptatum, esse hic.\n                ")])])]),e._v(" "),a("div",{staticClass:"bg:black rounded:b:1/2"},[a("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple)}})])])])])])]},proxy:!0}])})};n._withStripped=!0;var i=a(103),r=a.n(i),s={data:function(){return{properites:["overflow:auto","overflow:hidden","overflow:visible","overflow:scroll","overflow-x:auto","overflow-y:auto","overflow-x:hidden","overflow-y:hidden","overflow-x:visible","overflow-y:visible","overflow-x:scroll","overflow-y:scroll"],value:null,exemple:null}},created:function(){this.value=this.properites[0]},mounted:function(){this.setExemple()},watch:{value:function(){this.setExemple()}},methods:{setExemple:function(){this.exemple=r.a.highlight('<div class="'.concat(this.value,'"></div>'),r.a.languages.html,"html")}}},o=a(10),l=Object(o.a)(s,n,[],!1,null,null,null);l.options.__file="src/pages/utils/Overflow.vue";t.default=l.exports}}]);