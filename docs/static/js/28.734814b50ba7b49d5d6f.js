(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{163:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flex my:1"},[i("div",{staticClass:"flex:2/12 pr:1"},[i("div",{staticClass:"flex flex:col"},e._l(e.properties,(function(t){return i("div",{key:t,staticClass:"flex justify:between transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mb:1/2 cursor:pointer",class:{"border:purple":e.value===t},on:{click:function(i){e.value=t}}},[i("pre",[e._v(e._s(t))]),e._v(" "),"content:start"===t?i("pre",{staticClass:"border bg:grey-lighter text:grey-dark px:1/3 text:3/4 rounded"},[e._v("Default")]):e._e()])})),0)]),e._v(" "),i("div",{staticClass:"flex:10/12"},[e._m(0),e._v(" "),i("div",{staticClass:"border rounded:t:1/2 p:1 overflow:hidden"},[i("div",{staticClass:"flex flex:wrap bg:grey-lighter",class:e.value,staticStyle:{height:"400px"}},e._l([1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],(function(t){return i("div",{key:t,staticClass:"flex items:center text:grey-darker text:center bg:grey-light m:1/2 p:2"},[e._v(e._s(t))])})),0)]),e._v(" "),i("div",{staticClass:"bg:black rounded:b:1/2"},[i("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple)}})])])])};s._withStripped=!0;var n=i(125),l=i.n(n),r={data:function(){return{value:null,properties:["content:start","content:center","content:end","content:stretch","content:between","content:around"],exemple:null}},created:function(){this.value=this.properties[0]},mounted:function(){this.setExemple()},watch:{value:function(){this.setExemple()}},methods:{setExemple:function(){this.exemple=l.a.highlight('<div class="flex flex:wrap '.concat(this.value,'" style="height: 400px">\n    <div>1</div>\n    <div>2</div>\n    <div>3</div>\n    [...]\n</div>'),l.a.languages.html,"html")}}},a=i(16),c=Object(a.a)(r,s,[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"pb:1"},[this._v("This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how "),t("pre",{staticClass:"inline text:purple"},[this._v("justify-content")]),this._v(" aligns individual items within the main-axis.")])}],!1,null,null,null);c.options.__file="src/pages/utils/flexbox/AlignContent.vue";t.default=c.exports}}]);