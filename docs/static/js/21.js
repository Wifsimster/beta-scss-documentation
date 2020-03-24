(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Z-index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Z-index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      z: ['0', '10', '20', '30', '40', '50', 'auto'],
      exemple1: null
    };
  },
  mounted: function mounted() {
    this.exemple1 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight("<div class=\"relative text:center\">\n  <div class=\"absolute z:50 ml:0 mt:0 bg:grey-lighter\">z:50</div>\n  <div class=\"absolute z:40 ml:1/2 mt:1/2 bg:grey-light\">z:40</div>\n  <div class=\"absolute z:30 ml:1 mt:1 bg:grey\">z:30</div>\n  <div class=\"absolute z:20 ml:3/2 mt:3/2 bg:grey-dark\">z:20</div>\n  <div class=\"absolute z:10 ml:2 mt:2 bg:grey-darker\">z:10</div>\n  <div class=\"absolute z:0 ml:5/2 mt:5/2 bg:grey-darkest\">z:0</div>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Z-index.vue?vue&type=template&id=469689ed&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Z-index.vue?vue&type=template&id=469689ed& ***!
  \**************************************************************************************************************************************************************************************************/
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
  return _c("card", {
    scopedSlots: _vm._u([
      {
        key: "header",
        fn: function() {
          return [_vm._v("Z-index")]
        },
        proxy: true
      },
      {
        key: "content",
        fn: function() {
          return [
            _c("div", { staticClass: "flex" }, [
              _c("div", { staticClass: "flex:1 mr:1" }, [
                _c("table", { staticClass: "w:full" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("Class")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Properties")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.z, function(item) {
                      return _c("tr", { key: item }, [
                        _c(
                          "td",
                          { staticClass: "border:b border:grey-light" },
                          [
                            _c("pre", { staticClass: "text:blue" }, [
                              _c("span", { staticClass: "text:purple" }, [
                                _vm._v(".z:" + _vm._s(item))
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "border:b border:grey-light" },
                          [
                            _c("pre", { staticClass: "text:blue" }, [
                              _vm._v("z-index: " + _vm._s(item) + ";")
                            ])
                          ]
                        )
                      ])
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex:2" }, [
                _c("div", { staticClass: "border rounded:1/2 p:1" }, [
                  _c(
                    "div",
                    {
                      staticClass: "relative text:center",
                      staticStyle: { height: "125px" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute p:2 z:50 ml:0 mt:0 bg:grey-lighter"
                        },
                        [_vm._v("z:50")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute p:2 z:40 ml:1/2 mt:1/2 bg:grey-light"
                        },
                        [_vm._v("z:40")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "absolute p:2 z:30 ml:1 mt:1 bg:grey" },
                        [_vm._v("z:30")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute p:2 z:20 ml:3/2 mt:3/2 bg:grey-dark"
                        },
                        [_vm._v("z:20")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute p:2 z:10 ml:2 mt:2 bg:grey-darker"
                        },
                        [_vm._v("z:10")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute p:2 z:0 ml:5/2 mt:5/2 bg:grey-darkest"
                        },
                        [_vm._v("z:00")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
                  _c("pre", {
                    staticClass: "language-html",
                    domProps: { innerHTML: _vm._s(_vm.exemple1) }
                  })
                ])
              ])
            ])
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/utils/Z-index.vue":
/*!*************************************!*\
  !*** ./src/pages/utils/Z-index.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Z_index_vue_vue_type_template_id_469689ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Z-index.vue?vue&type=template&id=469689ed& */ "./src/pages/utils/Z-index.vue?vue&type=template&id=469689ed&");
/* harmony import */ var _Z_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Z-index.vue?vue&type=script&lang=js& */ "./src/pages/utils/Z-index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Z_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Z_index_vue_vue_type_template_id_469689ed___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Z_index_vue_vue_type_template_id_469689ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/Z-index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/Z-index.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/pages/utils/Z-index.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Z_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./Z-index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Z-index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Z_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/Z-index.vue?vue&type=template&id=469689ed&":
/*!********************************************************************!*\
  !*** ./src/pages/utils/Z-index.vue?vue&type=template&id=469689ed& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Z_index_vue_vue_type_template_id_469689ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Z-index.vue?vue&type=template&id=469689ed& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Z-index.vue?vue&type=template&id=469689ed&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Z_index_vue_vue_type_template_id_469689ed___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Z_index_vue_vue_type_template_id_469689ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);