(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{129:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("card",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Position")]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"flex flex:wrap my:1"},[s("div",{staticClass:"flex flex:col flex:2/12"},[e._l(e.properties,(function(t){return s("pre",{key:t.value,staticClass:"transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mr:1 mb:1/2 cursor:pointer",class:{"border:purple":e.value===t},on:{click:function(s){e.value=t}}},[e._v(e._s(t))])})),e._v(" "),s("div",{staticClass:"flex flex:wrap mr:1"},[s("multiselect",{staticClass:"mb:1/2",attrs:{placeholder:"Choose a position",options:e.positions,label:"label","track-by":"value"},model:{value:e.position,callback:function(t){e.position=t},expression:"position"}}),e._v(" "),s("multiselect",{attrs:{placeholder:"Choose a size",options:e.sizes},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}}),e._v(" "),s("div",{staticClass:"w:full my:1/2"},[e._v(" ")]),e._v(" "),s("multiselect",{staticClass:"mb:1/2",attrs:{placeholder:"Choose a position",options:e.positions,label:"label","track-by":"value"},model:{value:e.position02,callback:function(t){e.position02=t},expression:"position02"}}),e._v(" "),s("multiselect",{attrs:{placeholder:"Choose a size",options:e.sizes},model:{value:e.size02,callback:function(t){e.size02=t},expression:"size02"}})],1)],2),e._v(" "),s("div",{staticClass:"flex:10/12"},[s("div",{staticClass:"flex flex:wrap"},[s("div",{staticClass:"flex:1 px:1/2"},[s("div",{staticClass:"border rounded:t:1/2 p:1",staticStyle:{"min-height":"300px"}},[s("div",{staticClass:"relative p:4 bg:grey-light rounded"},[s("div",{staticClass:"transition p:2 bg:grey-darker rounded",class:e.value+" "+e.position.value+":"+e.size+" "+e.position02.value+":"+e.size02})])]),e._v(" "),s("div",{staticClass:"bg:black rounded:b:1/2"},[s("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple)}})])])])])])]},proxy:!0}])})};i._withStripped=!0;s(105);var l=s(103),o=s.n(l),a={data:function(){return{properties:["relative","absolute","fixed","static"],positions:[{label:"top",value:"t"},{label:"right",value:"r"},{label:"bottom",value:"b"},{label:"left",value:"l"},{label:"horizontal",value:"x"},{label:"vertical",value:"y"}],sizes:["0","1/4","1/2","3/4","1","5/4","3/2","7/4","2","5/2","3","4","auto"],value:"absolute",position:{label:"top",value:"t"},size:"1",position02:{label:"left",value:"l"},size02:"1",exemple:null}},mounted:function(){this.setExemple()},watch:{value:function(){this.setExemple()},position:function(){this.setExemple()},size:function(){this.setExemple()},position02:function(){this.setExemple()},size02:function(){this.setExemple()}},methods:{setExemple:function(){this.exemple=o.a.highlight('<div class="relative">\n  <div class="'.concat(this.value," ").concat(this.position.value,":").concat(this.size," ").concat(this.position02.value,":").concat(this.size02,'"></div>\n</div>'),o.a.languages.html,"html")}}},n=s(10),c=Object(n.a)(a,i,[],!1,null,null,null);c.options.__file="src/pages/utils/Position.vue";t.default=c.exports}}]);