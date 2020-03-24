(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Display.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Display.vue?vue&type=script&lang=js& ***!
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
      displayList: ['inline', 'block', 'inline-block', 'none', 'flex', 'inline-flex'],
      exemple1: null,
      exemple2: null,
      exemple3: null,
      exemple4: null,
      exemple5: null
    };
  },
  mounted: function mounted() {
    this.exemple1 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight("<div>\n  <span class=\"inline\">1</span>\n  <span class=\"inline\">2</span>\n  <span class=\"inline\">3</span>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
    this.exemple2 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight("<div>\n  <span class=\"block\">1</span>\n  <span class=\"block\">2</span>\n  <span class=\"block\">3</span>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
    this.exemple3 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight("<div>\n  <span\n    class=\"inline-block\"\n  >1</span>\n  <span\n    class=\"inline-block\"\n  >2</span>\n  <span\n    class=\"inline-block\"\n  >3</span>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
    this.exemple4 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight("<div class=\"flex\">\n  <span class=\"flex:1\">1</span>\n  <span class=\"flex:1\">2</span>\n  <span class=\"flex:1\">3</span>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
    this.exemple5 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight("<div class=\"inline-flex\">\n  <span class=\"flex:1\">1</span>\n  <span class=\"flex:1\">2</span>\n  <span class=\"flex:1\">3</span>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Display.vue?vue&type=template&id=11fe2120&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Display.vue?vue&type=template&id=11fe2120& ***!
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
          return [_vm._v("Display")]
        },
        proxy: true
      },
      {
        key: "content",
        fn: function() {
          return [
            _c("div", { staticClass: "flex flex:wrap" }, [
              _c("div", { staticClass: "flex:2" }, [
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
                    [
                      _vm._l(_vm.displayList, function(display) {
                        return _c("tr", { key: display }, [
                          _c(
                            "td",
                            { staticClass: "p:0 border:b border:grey-light" },
                            [
                              _c("pre", { staticClass: "text:purple" }, [
                                _vm._v("." + _vm._s(display))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "p:0 border:b border:grey-light" },
                            [
                              _c("pre", { staticClass: "text:blue" }, [
                                _vm._v("display: " + _vm._s(display) + ";")
                              ])
                            ]
                          )
                        ])
                      }),
                      _vm._v(" "),
                      _c("tr", [
                        _c(
                          "td",
                          { staticClass: "p:0 border:b border:grey-light" },
                          [
                            _c("pre", { staticClass: "text:blue" }, [
                              _c("span", { staticClass: "text:purple" }, [
                                _vm._v(".visibile")
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "p:0 border:b border:grey-light" },
                          [
                            _c("pre", { staticClass: "text:blue" }, [
                              _vm._v("visiblity: visible;")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c(
                          "td",
                          { staticClass: "p:0 border:b border:grey-light" },
                          [
                            _c("pre", { staticClass: "text:blue" }, [
                              _c("span", { staticClass: "text:purple" }, [
                                _vm._v(".invisible")
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "p:0 border:b border:grey-light" },
                          [
                            _c("pre", { staticClass: "text:blue" }, [
                              _vm._v("visibility: hidden;")
                            ])
                          ]
                        )
                      ])
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex:1" }, [
                _c("div", { staticClass: "p:1/4 ml:1 mb:1" }, [
                  _c("h2", [_vm._v("Inline")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
                    _c("div", { staticClass: "bg:grey-lighter p:1" }, [
                      _c(
                        "span",
                        {
                          staticClass:
                            "inline text:grey-dark text:center bg:grey-light py:1/2 px:1 my:1/2"
                        },
                        [_vm._v("1")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "inline text:grey-dark text:center bg:grey-light py:1/2 px:1 my:1/2"
                        },
                        [_vm._v("2")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "inline text:grey-dark text:center bg:grey-light py:1/2 px:1 my:1/2"
                        },
                        [_vm._v("3")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
                    _c("pre", {
                      staticClass: "language-html",
                      domProps: { innerHTML: _vm._s(_vm.exemple1) }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex:1" }, [
                _c("div", { staticClass: "p:1/4 ml:1 mb:1" }, [
                  _c("h2", [_vm._v("Block")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
                    _c("div", { staticClass: "bg:grey-lighter p:1" }, [
                      _c(
                        "span",
                        {
                          staticClass:
                            "block text:grey-dark text:center bg:grey-light py:1/2 px:1 my:1/2"
                        },
                        [_vm._v("1")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "block text:grey-dark text:center bg:grey-light py:1/2 px:1 my:1/2"
                        },
                        [_vm._v("2")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "block text:grey-dark text:center bg:grey-light py:1/2 px:1 my:1/2"
                        },
                        [_vm._v("3")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
                    _c("pre", {
                      staticClass: "language-html",
                      domProps: { innerHTML: _vm._s(_vm.exemple2) }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex:1" }, [
                _c("div", { staticClass: "p:1/4 ml:1 mb:1" }, [
                  _c("h2", [_vm._v("Inline Block")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
                    _c("div", { staticClass: "bg:grey-lighter p:1" }, [
                      _c(
                        "span",
                        {
                          staticClass:
                            "inline-block text:grey-dark text:center bg:grey-light py:1/2 px:1 my:1/2"
                        },
                        [_vm._v("1")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "inline-block text:grey-dark text:center bg:grey-light py:1/2 px:1 my:1/2"
                        },
                        [_vm._v("2")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "inline-block text:grey-dark text:center bg:grey-light py:1/2 px:1 my:1/2"
                        },
                        [_vm._v("3")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
                    _c("pre", {
                      staticClass: "language-html",
                      domProps: { innerHTML: _vm._s(_vm.exemple3) }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex:1" }, [
                _c("div", { staticClass: "p:1/4 ml:1 mb:1" }, [
                  _c("h2", [_vm._v("Flex")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
                    _c("div", { staticClass: "flex bg:grey-lighter p:1" }, [
                      _c(
                        "span",
                        {
                          staticClass:
                            "flex:1 text:grey-dark text:center bg:grey-light py:1/2 px:1 my:1/2"
                        },
                        [_vm._v("1")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "flex:1 text:grey-dark text:center bg:grey-light py:1/2 px:1 my:1/2"
                        },
                        [_vm._v("2")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "flex:1 text:grey-dark text:center bg:grey-light py:1/2 px:1 my:1/2"
                        },
                        [_vm._v("3")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
                    _c("pre", {
                      staticClass: "language-html",
                      domProps: { innerHTML: _vm._s(_vm.exemple4) }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex:1" }, [
                _c("div", { staticClass: "p:1/4 ml:1 mb:1" }, [
                  _c("h2", [_vm._v("Inline Flex")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
                    _c(
                      "div",
                      { staticClass: "inline-flex bg:grey-lighter p:1" },
                      [
                        _c(
                          "span",
                          {
                            staticClass:
                              "flex:1 text:grey-dark text:center bg:grey-light py:1/2 px:1 my:1/2"
                          },
                          [_vm._v("1")]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "flex:1 text:grey-dark text:center bg:grey-light py:1/2 px:1 my:1/2"
                          },
                          [_vm._v("2")]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "flex:1 text:grey-dark text:center bg:grey-light py:1/2 px:1 my:1/2"
                          },
                          [_vm._v("3")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
                    _c("pre", {
                      staticClass: "language-html",
                      domProps: { innerHTML: _vm._s(_vm.exemple5) }
                    })
                  ])
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

/***/ "./src/pages/utils/Display.vue":
/*!*************************************!*\
  !*** ./src/pages/utils/Display.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Display_vue_vue_type_template_id_11fe2120___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Display.vue?vue&type=template&id=11fe2120& */ "./src/pages/utils/Display.vue?vue&type=template&id=11fe2120&");
/* harmony import */ var _Display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display.vue?vue&type=script&lang=js& */ "./src/pages/utils/Display.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Display_vue_vue_type_template_id_11fe2120___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Display_vue_vue_type_template_id_11fe2120___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/Display.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/Display.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/pages/utils/Display.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./Display.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Display.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/Display.vue?vue&type=template&id=11fe2120&":
/*!********************************************************************!*\
  !*** ./src/pages/utils/Display.vue?vue&type=template&id=11fe2120& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Display_vue_vue_type_template_id_11fe2120___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Display.vue?vue&type=template&id=11fe2120& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Display.vue?vue&type=template&id=11fe2120&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Display_vue_vue_type_template_id_11fe2120___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Display_vue_vue_type_template_id_11fe2120___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);