(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{164:function(e,l,t){"use strict";t.r(l);var s=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"flex flex:wrap my:1"},[t("div",{staticClass:"flex flex:col flex:2/12 pr:1"},[e._l(e.properties,(function(l){return t("div",{key:l,staticClass:"flex justify:between transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mb:1/2 cursor:pointer",class:{"border:purple":e.value===l},on:{click:function(t){e.value=l}}},[t("pre",[e._v(e._s(l.label))]),e._v(" "),null===l.value?t("pre",{staticClass:"border bg:grey-lighter text:grey-dark px:1/3 text:3/4 rounded"},[e._v("Default")]):e._e()])})),e._v(" "),t("multiselect",{attrs:{placeholder:"Choose a size",options:e.sizes},model:{value:e.size,callback:function(l){e.size=l},expression:"size"}})],2),e._v(" "),t("div",{staticClass:"flex:10/12"},[t("div",{staticClass:"flex:1"},[t("div",{staticClass:"border rounded:t:1/2 p:1"},[t("div",{staticClass:"p:4 bg:grey-lighter rounded transition",class:"border"+(this.value.value?":"+this.value.value:"")+(this.size?":"+this.size:"")})]),e._v(" "),t("div",{staticClass:"bg:black rounded:b:1/2"},[t("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple)}})])])])])};s._withStripped=!0;t(105);var i=t(103),a=t.n(i),r={data:function(){return{properties:[{label:"All",value:null},{label:"Top",value:"t"},{label:"Right",value:"r"},{label:"Bottom",value:"b"},{label:"Left",value:"l"},{label:"Horizontal",value:"x"},{label:"Vertical",value:"y"}],sizes:["0","1/16","1/8","1/4","1/2","3/4","1"],value:null,size:"1",exemple:null}},created:function(){this.value=this.properties[0]},mounted:function(){this.setExemple()},watch:{value:function(){this.setExemple()},size:function(){this.setExemple()}},methods:{setExemple:function(){this.exemple=a.a.highlight('<div class="border'.concat(this.value.value?":"+this.value.value:"").concat(this.size?":"+this.size:"",'"></div>'),a.a.languages.html,"html")}}},u=t(10),n=Object(u.a)(r,s,[],!1,null,null,null);n.options.__file="src/pages/utils/border/Width.vue";l.default=n.exports}}]);