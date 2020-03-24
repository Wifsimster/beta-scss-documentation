(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/flexbox/FlexBasic.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/flexbox/FlexBasic.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
      properties: ['flex:1/12', 'flex:2/12', 'flex:3/12', 'flex:4/12', 'flex:5/12', 'flex:6/12', 'flex:7/12', 'flex:8/12', 'flex:9/12', 'flex:10/12', 'flex:11/12'],
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
      this.exemple = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight("<div class=\"flex\">\n  <div class=\"".concat(this.value, "\">1</div>\n  <div class=\"flex:1/12\">2</div>\n</div>"), prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/flexbox/FlexBasic.vue?vue&type=template&id=7474ed46&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/flexbox/FlexBasic.vue?vue&type=template&id=7474ed46& ***!
  \************************************************************************************************************************************************************************************************************/
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
                "transition flex justify:center text:grey-darker bg:grey m:1/2 p:2",
              class: _vm.value
            },
            [_vm._v("1")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "flex:1/12 flex justify:center text:grey-darker bg:grey-light m:1/2 p:2"
            },
            [_vm._v("2")]
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

/***/ "./src/pages/utils/flexbox/FlexBasic.vue":
/*!***********************************************!*\
  !*** ./src/pages/utils/flexbox/FlexBasic.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlexBasic_vue_vue_type_template_id_7474ed46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlexBasic.vue?vue&type=template&id=7474ed46& */ "./src/pages/utils/flexbox/FlexBasic.vue?vue&type=template&id=7474ed46&");
/* harmony import */ var _FlexBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlexBasic.vue?vue&type=script&lang=js& */ "./src/pages/utils/flexbox/FlexBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FlexBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlexBasic_vue_vue_type_template_id_7474ed46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlexBasic_vue_vue_type_template_id_7474ed46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/flexbox/FlexBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/flexbox/FlexBasic.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/pages/utils/flexbox/FlexBasic.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--1!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlexBasic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/flexbox/FlexBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/flexbox/FlexBasic.vue?vue&type=template&id=7474ed46&":
/*!******************************************************************************!*\
  !*** ./src/pages/utils/flexbox/FlexBasic.vue?vue&type=template&id=7474ed46& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexBasic_vue_vue_type_template_id_7474ed46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlexBasic.vue?vue&type=template&id=7474ed46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/flexbox/FlexBasic.vue?vue&type=template&id=7474ed46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexBasic_vue_vue_type_template_id_7474ed46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlexBasic_vue_vue_type_template_id_7474ed46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);