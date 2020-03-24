(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/flexbox/FlexShrink.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/flexbox/FlexShrink.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      value: null,
      properties: ['flex:shrink', 'flex:shrink-none'],
      exemple: null
    };
  },
  created: function created() {
    this.value = this.properties[0];
  },
  mounted: function mounted() {
    this.setExemple();
  },
  watch: {
    value: function value() {
      this.setExemple();
    }
  },
  methods: {
    setExemple: function setExemple() {
      this.exemple = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight("<div class=\"flex\">\n    <div class=\"".concat(this.value, "\">Lorem ...</div>\n    <div>Lorem ...</div>\n</div>"), prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/flexbox/FlexShrink.vue?vue&type=template&id=0f074ea1&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/flexbox/FlexShrink.vue?vue&type=template&id=0f074ea1& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex flex:wrap" }, [
    _c("div", { staticClass: "flex:1" }, [
      _c(
        "div",
        { staticClass: "flex py:1" },
        _vm._l(_vm.properties, function(property, index) {
          return _c(
            "pre",
            {
              key: index,
              staticClass:
                "transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mr:1 cursor:pointer",
              class: { "border:purple": _vm.value === property },
              on: {
                click: function($event) {
                  _vm.value = property
                }
              }
            },
            [_vm._v(_vm._s(property))]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c("div", { staticClass: "border rounded:t:1/2 p:1 overflow:hidden" }, [
        _c("div", { staticClass: "flex bg:grey-lighter transition" }, [
          _c(
            "div",
            {
              staticClass:
                "transition flex text:grey-darker text:center bg:grey m:1/2 p:2",
              class: _vm.value
            },
            [
              _vm._v(
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vel similique necessitatibus earum ex quidem possimus voluptate ad? Assumenda qui tempore aut fugiat alias ipsam hic quibusdam delectus unde minus."
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "flex text:grey-darker text:center bg:grey-light m:1/2 p:2",
              class: _vm.value
            },
            [
              _vm._v(
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet odit laboriosam provident perferendis harum maiores voluptates, ducimus tempore atque voluptatibus quisquam quis itaque ipsum. Amet pariatur eos qui quibusdam cum!"
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
        _c("pre", {
          staticClass: "language-html",
          domProps: { innerHTML: _vm._s(_vm.exemple) }
        })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/utils/flexbox/FlexShrink.vue":
/*!************************************************!*\
  !*** ./src/pages/utils/flexbox/FlexShrink.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlexShrink_vue_vue_type_template_id_0f074ea1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlexShrink.vue?vue&type=template&id=0f074ea1& */ "./src/pages/utils/flexbox/FlexShrink.vue?vue&type=template&id=0f074ea1&");
/* harmony import */ var _FlexShrink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlexShrink.vue?vue&type=script&lang=js& */ "./src/pages/utils/flexbox/FlexShrink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FlexShrink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlexShrink_vue_vue_type_template_id_0f074ea1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlexShrink_vue_vue_type_template_id_0f074ea1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/flexbox/FlexShrink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/flexbox/FlexShrink.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/pages/utils/flexbox/FlexShrink.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexShrink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--1!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlexShrink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/flexbox/FlexShrink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexShrink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/flexbox/FlexShrink.vue?vue&type=template&id=0f074ea1&":
/*!*******************************************************************************!*\
  !*** ./src/pages/utils/flexbox/FlexShrink.vue?vue&type=template&id=0f074ea1& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexShrink_vue_vue_type_template_id_0f074ea1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlexShrink.vue?vue&type=template&id=0f074ea1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/flexbox/FlexShrink.vue?vue&type=template&id=0f074ea1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexShrink_vue_vue_type_template_id_0f074ea1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexShrink_vue_vue_type_template_id_0f074ea1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);