(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{154:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("card",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Float")]},proxy:!0},{key:"content",fn:function(){return[i("div",{staticClass:"flex flex:wrap my:1"},[i("div",{staticClass:"flex flex:col flex:2/12"},e._l(e.properties,(function(t){return i("pre",{key:t,staticClass:"transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mr:1 mb:1/2 cursor:pointer",class:{"border:purple":e.value===t},on:{click:function(i){e.value=t}}},[e._v(e._s(t))])})),0),e._v(" "),i("div",{staticClass:"flex:10/12"},[i("div",{staticClass:"flex flex:wrap"},[i("div",{staticClass:"flex:1 mr:1 mb:1"},[i("transition",{attrs:{name:"opacity"}},["clearfix"===e.value?i("p",{staticClass:"bg:blue-lighter mb:1 rounded p:1 shadow"},[e._v("Force an element to self-clear its children.")]):e._e()]),e._v(" "),i("div",{staticClass:"border rounded:t:1/2 p:1"},[i("div",{staticClass:"bg:grey-lighter p:1 mr:1"},[i("p",{staticClass:"py:1"},[e._v("\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, fuga pariatur. Ipsam cum vel deleniti praesentium blanditiis, ex nulla facere doloremque pariatur quas autem aliquid iste, tempore officia rem nisi?\n                  "),i("br"),e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora architecto sed, quisquam hic, recusandae in iure nam veniam optio debitis totam quo soluta doloribus consectetur libero fugit quis eos.\n                ")]),e._v(" "),i("span",{staticClass:"bg:grey-light text:center rounded shadow p:2 mx:1",class:e.value},[e._v("Floating box")]),e._v(" "),i("p",{staticClass:"py:1"},[e._v("\n                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum officiis voluptate minus sunt suscipit incidunt accusantium tempore et nesciunt quisquam voluptatem eos sed recusandae omnis, enim sapiente at perspiciatis repudiandae.\n                  "),i("br"),e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi deserunt ducimus error corrupti maxime sit assumenda natus tenetur? Omnis repellat neque modi eaque itaque voluptatem ab ea, expedita aut?\n                ")])])]),e._v(" "),i("div",{staticClass:"bg:black rounded:b:1/2"},[i("pre",{staticClass:"language-html",domProps:{innerHTML:e._s(e.exemple)}})])],1)])])])]},proxy:!0}])})};s._withStripped=!0;var a=i(125),r=i.n(a),n={data:function(){return{properties:["float:left","float:right","float:none","clearfix"],value:null,exemple:null}},created:function(){this.value=this.properties[0]},mounted:function(){this.setExemple()},watch:{value:function(){this.setExemple()}},methods:{setExemple:function(){this.exemple=r.a.highlight('<p>Lorem ipsum ...</p>\n<span class="'.concat(this.value,'">Floating box</span>\n<p>Lorem ipsum ...</p>'),r.a.languages.html,"html")}}},l=i(16),o=Object(l.a)(n,s,[],!1,null,null,null);o.options.__file="src/pages/utils/Float.vue";t.default=o.exports}}]);