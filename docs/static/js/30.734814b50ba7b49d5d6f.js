(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{164:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex my:1"},[s("div",{staticClass:"flex:2/12 pr:1"},[s("div",{staticClass:"flex flex:col"},e._l(e.properties,(function(t){return s("div",{key:t,staticClass:"flex justify:between transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mb:1/2 cursor:pointer",class:{"border:purple":e.value===t},on:{click:function(s){e.value=t}}},[s("pre",[e._v(e._s(t))]),e._v(" "),"self:auto"===t?s("pre",{staticClass:"border bg:grey-lighter text:grey-dark px:1/3 text:3/4 rounded"},[e._v("Default")]):e._e()])})),0)]),e._v(" "),s("div",{staticClass:"flex:10/12"},[e._m(0),e._v(" "),s("div",{staticClass:"border rounded:t:1/2 p:1 overflow:hidden"},[s("div",{staticClass:"flex bg:grey-lighter transition",staticStyle:{height:"400px"}},[s("div",{staticClass:"flex items:center text:grey-darker text:center bg:grey m:1/2 p:2",class:e.value},[e._v("1")]),e._v(" "),e._l([2,3,4,5],(function(t){return s("div",{key:t,staticClass:"flex items:center text:grey-darker text:center bg:grey-light m:1/2 p:2"},[e._v(e._s(t))])}))],2)]),e._v(" "),s("div",{staticClass:"bg:black rounded:b:1/2"},[s("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple)}})])])])};i._withStripped=!0;var l=s(125),r=s.n(l),n={data:function(){return{value:null,properties:["self:auto","self:start","self:center","self:end","self:stretch"],exemple:null}},created:function(){this.value=this.properties[0]},mounted:function(){this.setExemple()},watch:{value:function(){this.setExemple()}},methods:{setExemple:function(){this.exemple=r.a.highlight('<div class="flex" style="height: 400px">\n    <div class="'.concat(this.value,'">1</div>\n    <div>2</div>\n    <div>3</div>\n</div>'),r.a.languages.html,"html")}}},a=s(16),c=Object(a.a)(n,i,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"pb:1"},[this._v("\n      This allows the default alignment (or the one specified by\n      "),t("pre",{staticClass:"inline text:purple"},[this._v("align-items")]),this._v(") to be overridden for individual flex items.\n    ")])}],!1,null,null,null);c.options.__file="src/pages/utils/flexbox/AlignSelf.vue";t.default=c.exports}}]);