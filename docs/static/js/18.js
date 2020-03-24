(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Responsive.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Responsive.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pixels: [12, 14, 16, 18],
      selectedPixel: 14,
      grids: [{
        key: '2',
        value: '2 columns'
      }, {
        key: '3',
        value: '3 columns'
      }, {
        key: '4',
        value: '4 columns'
      }, {
        key: '6',
        value: '6 columns'
      }, {
        key: '8',
        value: '8 columns'
      }, {
        key: '10',
        value: '10 columns'
      }, {
        key: '12',
        value: '12 columns'
      }],
      paddings: [{
        key: '0',
        value: '0'
      }, {
        key: '1/5',
        value: '0.2'
      }, {
        key: '1/4',
        value: '0.25'
      }, {
        key: '1/3',
        value: '0.33333'
      }, {
        key: '2/5',
        value: '0.4'
      }, {
        key: '1/2',
        value: '0.5'
      }, {
        key: '3/5',
        value: '0.6'
      }, {
        key: '2/3',
        value: '0.6667'
      }, {
        key: '3/4',
        value: '0.75'
      }, {
        key: '4/5',
        value: '0.8'
      }, {
        key: '1',
        value: '1'
      }, {
        key: '5/4',
        value: '1.25'
      }, {
        key: '3/2',
        value: '1.5'
      }, {
        key: '7/4',
        value: '1.75'
      }, {
        key: '2',
        value: '2'
      }, {
        key: '5/2',
        value: '2.5'
      }, {
        key: '3',
        value: '3'
      }, {
        key: '4',
        value: '4'
      }],
      exemple1: null,
      exemple2: null,
      exemple3: null
    };
  },
  mounted: function mounted() {
    this.exemple1 = prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlight("<div class=\"responsive:2\">\n    <div>1</div>\n    <div>2</div>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.languages.html, 'html');
    this.exemple2 = prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlight("<div class=\"responsive:6 column-gap:1/2\">\n    <div>1</div>\n    <div>2</div>\n    <div>3</div>\n    <div>4</div>\n    <div>5</div>\n    <div>6</div>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.languages.html, 'html');
    this.exemple3 = prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlight("<div class=\"responsive:12 column-gap:1/4 row-gap:1\">\n    <div>1</div>\n    <div>2</div>\n    <div>3</div>\n    <div>4</div>\n    <div>5</div>\n    <div>6</div>\n    <div>7</div>\n    <div>8</div>\n    <div>9</div>\n    <div>10</div>\n    <div>11</div>\n    <div>12</div>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.languages.html, 'html');
  },
  methods: {
    rem2Px: function rem2Px(val) {
      if (val && !isNaN(Number(val))) {
        var result = val * this.selectedPixel;
        return "".concat(result.toFixed(1), " px");
      }

      return null;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Responsive.vue?vue&type=template&id=49db2d14&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Responsive.vue?vue&type=template&id=49db2d14& ***!
  \*****************************************************************************************************************************************************************************************************/
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
          return [_vm._v("Responsive Grid")]
        },
        proxy: true
      },
      {
        key: "content",
        fn: function() {
          return [
            _c("div", { staticClass: "flex flex:wrap" }, [
              _c("div", { staticClass: "min-w:sm flex flex:wrap" }, [
                _c("div", { staticClass: "mr:2" }, [
                  _c("p", [
                    _vm._v(
                      "\n            Automatically builds a responsive grid in flexbox based on media\n            queries.\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c("table", { staticClass: "w:full my:1" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Class")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Description")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.grids, function(grid) {
                        return _c("tr", { key: grid.key }, [
                          _c(
                            "td",
                            {
                              staticClass: "py:1/4 border:b border:grey-light"
                            },
                            [
                              _c("pre", { staticClass: "text:purple" }, [
                                _vm._v(".responsive:" + _vm._s(grid.key))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "py:1/4 border:b border:grey-light"
                            },
                            [
                              _c("pre", { staticClass: "text:blue" }, [
                                _vm._v(_vm._s(grid.value))
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
                _c("div", { staticClass: "mr:2" }, [
                  _c("p", [
                    _vm._v(
                      "\n            Manage rows and columns spacing.\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c("table", { staticClass: "w:full my:1" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Class")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Size")]),
                        _vm._v(" "),
                        _c("th", [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.selectedPixel,
                                  expression: "selectedPixel"
                                }
                              ],
                              staticClass: "text:teal text:normal text:7/8",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.selectedPixel = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.pixels, function(item) {
                              return _c(
                                "option",
                                { key: item, domProps: { value: item } },
                                [_vm._v(_vm._s(item) + "px")]
                              )
                            }),
                            0
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.paddings, function(padding, index) {
                        return _c("tr", { key: padding.key }, [
                          index === 0
                            ? _c(
                                "td",
                                {
                                  staticClass:
                                    "py:1/4 border:b border:grey-light"
                                },
                                [
                                  _c("pre", { staticClass: "text:purple" }, [
                                    _vm._v("column-gap:")
                                  ])
                                ]
                              )
                            : index === 1
                            ? _c(
                                "td",
                                {
                                  staticClass:
                                    "py:1/4 border:b border:grey-light"
                                },
                                [
                                  _c("pre", { staticClass: "text:purple" }, [
                                    _vm._v("row-gap:")
                                  ])
                                ]
                              )
                            : _c("td"),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "py:1/4 border:b border:grey-light"
                            },
                            [
                              _c("pre", { staticClass: "text:purple" }, [
                                _vm._v(_vm._s(padding.key))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "py:1/4 border:b border:grey-light"
                            },
                            [
                              _c("pre", { staticClass: "text:blue" }, [
                                _vm._v(_vm._s(_vm.rem2Px(padding.value)))
                              ])
                            ]
                          )
                        ])
                      }),
                      0
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "w:full" }, [
                _c("div", { staticClass: "p:1/4 ml:1 mb:1" }, [
                  _c("h2", [_vm._v("2 columns grid")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
                    _c(
                      "div",
                      { staticClass: "responsive:2" },
                      _vm._l(["1", "2"], function(index) {
                        return _c(
                          "div",
                          {
                            key: index,
                            staticClass: "text:grey-dark text:center"
                          },
                          [
                            _c("div", { staticClass: "bg:grey-light py:1/2" }, [
                              _vm._v(_vm._s(index))
                            ])
                          ]
                        )
                      }),
                      0
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "w:full" }, [
                _c("div", { staticClass: "p:1/4 ml:1 mb:1" }, [
                  _c("h2", [_vm._v("6 columns grid")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
                    _c(
                      "div",
                      { staticClass: "responsive:6 column-gap:1/2" },
                      _vm._l(["1", "2", "3", "4", "5", "6"], function(index) {
                        return _c(
                          "div",
                          {
                            key: index,
                            staticClass: "text:grey-dark text:center"
                          },
                          [
                            _c("div", { staticClass: "bg:grey-light py:1/2" }, [
                              _vm._v(_vm._s(index))
                            ])
                          ]
                        )
                      }),
                      0
                    )
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
              _c("div", { staticClass: "w:full" }, [
                _c("div", { staticClass: "p:1/4 ml:1 mb:1" }, [
                  _c("h2", [_vm._v("12 columns grid")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
                    _c(
                      "div",
                      { staticClass: "responsive:12 column-gap:1/4 row-gap:1" },
                      _vm._l(
                        [
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9",
                          "10",
                          "11",
                          "12"
                        ],
                        function(index) {
                          return _c(
                            "div",
                            {
                              key: index,
                              staticClass: "text:grey-dark text:center"
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "bg:grey-light py:1/2" },
                                [_vm._v(_vm._s(index))]
                              )
                            ]
                          )
                        }
                      ),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
                    _c("pre", {
                      staticClass: "language-html",
                      domProps: { innerHTML: _vm._s(_vm.exemple3) }
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

/***/ "./src/pages/utils/Responsive.vue":
/*!****************************************!*\
  !*** ./src/pages/utils/Responsive.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Responsive_vue_vue_type_template_id_49db2d14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Responsive.vue?vue&type=template&id=49db2d14& */ "./src/pages/utils/Responsive.vue?vue&type=template&id=49db2d14&");
/* harmony import */ var _Responsive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Responsive.vue?vue&type=script&lang=js& */ "./src/pages/utils/Responsive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Responsive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Responsive_vue_vue_type_template_id_49db2d14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Responsive_vue_vue_type_template_id_49db2d14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/Responsive.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/Responsive.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/pages/utils/Responsive.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Responsive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./Responsive.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Responsive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Responsive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/Responsive.vue?vue&type=template&id=49db2d14&":
/*!***********************************************************************!*\
  !*** ./src/pages/utils/Responsive.vue?vue&type=template&id=49db2d14& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Responsive_vue_vue_type_template_id_49db2d14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Responsive.vue?vue&type=template&id=49db2d14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Responsive.vue?vue&type=template&id=49db2d14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Responsive_vue_vue_type_template_id_49db2d14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Responsive_vue_vue_type_template_id_49db2d14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);