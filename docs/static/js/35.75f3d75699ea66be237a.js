(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{161:function(t,r,o){"use strict";o.r(r);var e=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("card",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Border")]},proxy:!0},{key:"navigation",fn:function(){return[o("div",{staticClass:"bg:grey-lighter w:full py:1/2 flex flex:wrap"},[o("router-link",{staticClass:"cursor:pointer text:bold px:2 my:1/2",class:{"text:orange":"/border/color"===t.$route.path},attrs:{tag:"span",to:"/border/color"}},[t._v("Color")]),t._v(" "),o("router-link",{staticClass:"cursor:pointer text:bold px:2 my:1/2",class:{"text:orange":"/border/style"===t.$route.path},attrs:{tag:"span",to:"/border/style"}},[t._v("Style")]),t._v(" "),o("router-link",{staticClass:"cursor:pointer text:bold px:2 my:1/2",class:{"text:orange":"/border/width"===t.$route.path},attrs:{tag:"span",to:"/border/width"}},[t._v("Width")])],1)]},proxy:!0},{key:"content",fn:function(){return[o("transition",{attrs:{name:"opacity",mode:"out-in"}},[o("router-view")],1)]},proxy:!0}])})};e._withStripped=!0;var n={data:function(){return{tab:"color"}},created:function(){this.$router.push("/border/color").catch((function(){}))},watch:{"$route.path":function(){"/border"===this.$route.path&&this.$router.push("/border/color").catch((function(){}))}}},a=o(10),s=Object(a.a)(n,e,[],!1,null,null,null);s.options.__file="src/pages/utils/Border.vue";r.default=s.exports}}]);