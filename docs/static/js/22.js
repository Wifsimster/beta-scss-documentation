(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/border/Style.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/border/Style.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      styles: ['solid', 'dashed', 'dotted', 'none'],
      borderStyle1: null,
      borderStyle2: null,
      borderStyle3: null,
      borderStyle4: null
    };
  },
  mounted: function mounted() {
    this.borderStyle1 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight('<div class="border:solid border:1/4"></div>', prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
    this.borderStyle2 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight('<div class="border:dashed border:1/4"></div>', prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
    this.borderStyle3 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight('<div class="border:dotted border:1/4"></div>', prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
    this.borderStyle4 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight('<div class="border:none border:1/4"></div>', prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/border/Style.vue?vue&type=template&id=0c01c610&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/border/Style.vue?vue&type=template&id=0c01c610& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "flex" }, [
    _c("div", { staticClass: "flex:1 mr:1" }, [
      _c("table", { staticClass: "w:full" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.styles, function(style) {
            return _c("tr", { key: style }, [
              _c("td", { staticClass: "py:1 border:b border:grey-lighter" }, [
                _c("pre", { staticClass: "inline text:purple" }, [
                  _vm._v(".border:" + _vm._s(style))
                ]),
                _vm._v(" "),
                style === "solid"
                  ? _c(
                      "pre",
                      {
                        staticClass:
                          "inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                      },
                      [_vm._v("Default")]
                    )
                  : _vm._e()
              ])
            ])
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "flex:3" }, [
      _c("div", { staticClass: "flex flex:wrap" }, [
        _c("div", { staticClass: "flex:1 px:1/2 mb:1" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
            _c("pre", {
              staticClass: "language-html",
              domProps: { innerHTML: _vm._s(_vm.borderStyle1) }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex:1 px:1/2 mb:1" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
            _c("pre", {
              staticClass: "language-html",
              domProps: { innerHTML: _vm._s(_vm.borderStyle2) }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex:1 px:1/2 mb:1" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
            _c("pre", {
              staticClass: "language-html",
              domProps: { innerHTML: _vm._s(_vm.borderStyle3) }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex:1 px:1/2 mb:1" }, [
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
            _c("pre", {
              staticClass: "language-html",
              domProps: { innerHTML: _vm._s(_vm.borderStyle4) }
            })
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [_c("tr", [_c("th", [_vm._v("Class")])])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
      _c("div", { staticClass: "py:1 bg:grey-lighter border:solid border:1/4" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
      _c("div", {
        staticClass: "py:1 bg:grey-lighter border:dashed border:1/4"
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
      _c("div", {
        staticClass: "py:1 bg:grey-lighter border:dotted border:1/4"
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
      _c("div", { staticClass: "py:1 bg:grey-lighter border:none border:1/4" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./src/pages/utils/border/Style.vue":
/*!******************************************!*\
  !*** ./src/pages/utils/border/Style.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Style_vue_vue_type_template_id_0c01c610___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Style.vue?vue&type=template&id=0c01c610& */ "./src/pages/utils/border/Style.vue?vue&type=template&id=0c01c610&");
/* harmony import */ var _Style_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Style.vue?vue&type=script&lang=js& */ "./src/pages/utils/border/Style.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Style_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Style_vue_vue_type_template_id_0c01c610___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Style_vue_vue_type_template_id_0c01c610___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/border/Style.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/border/Style.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/pages/utils/border/Style.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Style_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--1!../../../../node_modules/vue-loader/lib??vue-loader-options!./Style.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/border/Style.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Style_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/border/Style.vue?vue&type=template&id=0c01c610&":
/*!*************************************************************************!*\
  !*** ./src/pages/utils/border/Style.vue?vue&type=template&id=0c01c610& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Style_vue_vue_type_template_id_0c01c610___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Style.vue?vue&type=template&id=0c01c610& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/border/Style.vue?vue&type=template&id=0c01c610&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Style_vue_vue_type_template_id_0c01c610___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Style_vue_vue_type_template_id_0c01c610___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);