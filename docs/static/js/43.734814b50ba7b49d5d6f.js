(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{177:function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flex flex:wrap my:1"},[i("div",{staticClass:"flex:2/12 pr:1"},[i("div",{staticClass:"flex flex:col"},e._l(e.properties,(function(t){return i("div",{key:t,staticClass:"flex justify:between transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mb:1/2 cursor:pointer",class:{"border:purple":e.value===t},on:{click:function(i){e.value=t}}},[i("pre",[e._v(e._s(t))]),e._v(" "),"line-height:3/2"===t?i("pre",{staticClass:"border bg:grey-lighter text:grey-dark px:1/3 text:3/4 rounded"},[e._v("Default")]):e._e()])})),0)]),e._v(" "),i("div",{staticClass:"flex:2"},[i("div",{staticClass:"flex flex:wrap"},[i("div",{staticClass:"flex:1 px:1/2 mb:1"},[i("div",{staticClass:"border rounded:t:1/2 p:1"},[i("div",{staticClass:"py:1",class:e.value},[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n            enim ad minim veniam, quis nostrud exercitation ullamco laboris\n            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur.\n          ")])]),e._v(" "),i("div",{staticClass:"bg:black rounded:b:1/2"},[i("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple)}})])])])])])};l._withStripped=!0;var s=i(125),a=i.n(s),n={data:function(){return{properties:["line-height:1/2","line-height:3/4","line-height:1","line-height:3/2","line-height:2","line-height:5/2","line-height:3"],value:null,exemple:null}},created:function(){this.value=this.properties[3]},mounted:function(){this.setExemple()},watch:{value:function(){this.setExemple()}},methods:{setExemple:function(){this.exemple=a.a.highlight('<div class="'.concat(this.value,'">\n    Lorem ipsum dolor sit amet...\n</div>'),a.a.languages.html,"html")}}},r=i(16),o=Object(r.a)(n,l,[],!1,null,null,null);o.options.__file="src/pages/utils/text/LineHeight.vue";t.default=o.exports}}]);