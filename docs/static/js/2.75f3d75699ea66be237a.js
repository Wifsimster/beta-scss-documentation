(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{107:function(t,r,e){var n=e(17),o=e(115);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1},a=(n(o,i),o.locals?o.locals:{});t.exports=a},110:function(t,r,e){var n=function(t){"use strict";var r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,r,e,n){var o=r&&r.prototype instanceof l?r:l,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=x(a,e);if(c){if(c===u)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var l=s(t,r,e);if("normal"===l.type){if(n=e.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(n="completed",e.method="throw",e.arg=l.arg)}}}(t,e,a),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u={};function l(){}function p(){}function f(){}var h={};h[o]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(L([])));v&&v!==r&&e.call(v,o)&&(h=v);var y=f.prototype=l.prototype=Object.create(h);function g(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function m(t,r){var n;this._invoke=function(o,i){function a(){return new r((function(n,a){!function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==typeof p&&e.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(p).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,x(t,r),"throw"===r.method))return u;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,u;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,u):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,u)}function w(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function b(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=y.constructor=f,f.constructor=p,f[a]=p.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(m.prototype),m.prototype[i]=function(){return this},t.AsyncIterator=m,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new m(c(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),y[a]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=L,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),u},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),b(e),u}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;b(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:L(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},112:function(t,r,e){t.exports=e(110)},113:function(t,r){function e(t,r,e,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?r(s):Promise.resolve(s).then(n,o)}t.exports=function(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,s,"next",t)}function s(t){e(a,o,i,c,s,"throw",t)}c(void 0)}))}}},114:function(t,r,e){"use strict";var n=e(107);e.n(n).a},115:function(t,r,e){(r=e(18)(!1)).push([t.i,'.dropper[data-v-9e79c9de]{display:inline-block;position:relative;color:#fff;width:40px;height:14px;border-width:3px;border-style:solid;border-right:none;border-left-color:transparent;box-shadow:-9px 0 0 2px inset,0 0 0 2px inset;border-radius:50% 6px 6px 50%;transform:rotate(-45deg);margin:12px -2px 8px -4px;border-top-color:transparent;border-bottom-color:transparent}.dropper[data-v-9e79c9de]:after,.dropper[data-v-9e79c9de]:before{content:"";pointer-events:none}.dropper[data-v-9e79c9de]:before{width:4px;height:14px;right:10px;box-shadow:inset 0 0 0 32px;position:absolute;top:50%;transform:translateY(-50%)}',""]),t.exports=r},126:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("card",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Color palette")]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"flex flex:col"},[e("transition",{attrs:{name:"opacity"}},[t.value?e("div",{staticClass:"fixed b:2 r:3 z:10 flex items:baseline rounded px:1 py:1/2 bg:orange"},[e("i",{staticClass:"dropper"}),t._v(" "),e("pre",{staticClass:"flex:1 text:2 text:grey-lighter ml:1/2"},[t._v(t._s(t.value))])]):t._e()]),t._v(" "),e("p",{staticClass:"py:1"},[t._v("Select a color to copy it in the clipboard.")]),t._v(" "),e("div",{staticClass:"w:full flex flex:wrap"},[e("div",{staticClass:"mb:2 mr:2"},[e("p",{staticClass:"text:bold mb:1"},[t._v("Black & White")]),t._v(" "),e("div",{staticClass:"flex flex:wrap"},[e("div",{staticClass:"p:2 shadow rounded mr:1 mb:1 transition cursor:pointer border bg:black",on:{click:function(r){return t.copy("black")}}}),t._v(" "),e("div",{staticClass:"p:2 shadow rounded mr:1 mb:1 transition cursor:pointer border bg:white",on:{click:function(r){return t.copy("white")}}})])]),t._v(" "),t._l(t.colors,(function(r){return e("div",{key:r,staticClass:"mb:2 mr:2"},[e("p",{staticClass:"text:bold mb:1"},[t._v(t._s(r.charAt(0).toUpperCase()+r.slice(1)))]),t._v(" "),e("div",{staticClass:"flex flex:wrap"},t._l(t.variants,(function(n){return e("div",{key:n,staticClass:"p:2 shadow rounded mr:1 mb:1 transition cursor:pointer",class:"bg:"+r+n+" border hover:border:"+r+n,on:{click:function(e){return t.copy(r+n)}}})})),0)])}))],2)],1)]},proxy:!0}])})};n._withStripped=!0;var o=e(112),i=e.n(o),a=(e(110),e(113)),c=e.n(a),s={data:function(){return{value:null,colors:["grey","red","orange","yellow","green","teal","blue","indigo","purple","pink"],variants:["-lightest","-lighter","-light","","-dark","-darker","-darkest"]}},methods:{copy:function(t){var r=this;return c()(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.value=t,e.next=3,navigator.clipboard.writeText(t);case 3:case"end":return e.stop()}}),e)})))()}}},u=(e(114),e(10)),l=Object(u.a)(s,n,[],!1,null,"9e79c9de",null);l.options.__file="src/pages/utils/Color.vue";r.default=l.exports}}]);