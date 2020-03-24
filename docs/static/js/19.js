(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Spacing.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Spacing.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
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
      sizes: [{
        classPrefix: 'p',
        "class": 'Padding',
        prefix: '',
        side: 'All',
        "default": true,
        key: '0',
        value: '0'
      }, {
        classPrefix: 'm',
        "class": 'Margin',
        prefix: 't',
        side: 'Top',
        key: '1/5',
        value: '0.2'
      }, {
        prefix: 'r',
        side: 'Right',
        key: '1/4',
        value: '0.25'
      }, {
        prefix: 'b',
        side: 'Bottom',
        key: '1/3',
        value: '0.33333'
      }, {
        prefix: 'l',
        side: 'Left',
        key: '2/5',
        value: '0.4'
      }, {
        prefix: 'x',
        side: 'Horizontal',
        key: '1/2',
        value: '0.5'
      }, {
        prefix: 'y',
        side: 'Vertical',
        key: '3/5',
        value: '0.6'
      }, {
        key: '2/3',
        value: '0.66667'
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
      }, {
        key: 'auto',
        value: 'auto'
      }],
      exemple1: null,
      exemple2: null,
      exemple3: null,
      exemple4: null
    };
  },
  methods: {
    rem2Px: function rem2Px(val) {
      if (val && !isNaN(Number(val))) {
        var result = val * this.selectedPixel;
        return "".concat(result.toFixed(1), " px");
      }

      return null;
    }
  },
  mounted: function mounted() {
    this.exemple1 = prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlight("<div class=\"bg:grey-lighter p:1/2\">\n  <div class=\"bg:grey-light p:2\">Lo ipsum dolor sit amet.</div>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.languages.html, 'html');
    this.exemple2 = prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlight("<div class=\"bg:grey-lighter p:1/2\">\n    <div class=\"bg:grey-lighter py:1 px:2\">Lo ipsum dolor sit amet.</div>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.languages.html, 'html');
    this.exemple3 = prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlight("<div class=\"bg:grey-lighter p:1/2\">\n    <div class=\"bg:grey-lighter pt:1/4 pr:2/5 py:3/5 pl:3/4\">Lo ipsum dolor sit amet.</div>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.languages.html, 'html');
    this.exemple4 = prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlight("<div class=\"bg:grey-lighter p:1/2\">\n    <div class=\"bg:grey-light m:1/2\">Lo ipsum dolor sit amet.</div>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.languages.html, 'html');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Spacing.vue?vue&type=template&id=21a91271&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Spacing.vue?vue&type=template&id=21a91271& ***!
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
          return [_vm._v("Spacing")]
        },
        proxy: true
      },
      {
        key: "content",
        fn: function() {
          return [
            _c("div", { staticClass: "flex flex:wrap" }, [
              _c("div", { staticClass: "flex:1 mr:1" }, [
                _c("table", { staticClass: "w:full" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("Class")]),
                      _vm._v(" "),
                      _c("th", [
                        _vm._v("\n                Side\n                "),
                        _c("span", { staticClass: "text:grey text:3/4" }, [
                          _vm._v("(Optional)")
                        ])
                      ]),
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
                                    var val = "_value" in o ? o._value : o.value
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
                    _vm._l(_vm.sizes, function(size, index) {
                      return _c("tr", { key: index }, [
                        _c(
                          "td",
                          {
                            staticClass:
                              "p:1 whitespace:no-wrap border:b border:grey-lighter"
                          },
                          [
                            size.classPrefix
                              ? _c(
                                  "code",
                                  {
                                    staticClass:
                                      "border rounded mr:1/4 py:1/5 px:1/4"
                                  },
                                  [_vm._v(_vm._s(size.classPrefix))]
                                )
                              : _vm._e(),
                            _vm._v(
                              "\n                " +
                                _vm._s(size.class) +
                                "\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass:
                              "p:1 whitespace:no-wrap border:b border:grey-lighter"
                          },
                          [
                            size.side
                              ? _c(
                                  "code",
                                  {
                                    staticClass:
                                      "border rounded mr:1/4 py:1/5 px:1/4"
                                  },
                                  [_vm._v(_vm._s(size.prefix))]
                                )
                              : _vm._e(),
                            _vm._v(
                              "\n                " +
                                _vm._s(size.side) +
                                "\n                "
                            ),
                            size.default
                              ? _c(
                                  "span",
                                  { staticClass: "text:grey text:3/4" },
                                  [_vm._v("(Default)")]
                                )
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass:
                              "p:1 whitespace:no-wrap border:b border:grey-lighter"
                          },
                          [
                            _c(
                              "code",
                              {
                                staticClass:
                                  "border rounded mr:1/4 py:1/5 px:1/4"
                              },
                              [_vm._v(_vm._s(size.key))]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass:
                              "p:1 whitespace:no-wrap border:b border:grey-lighter"
                          },
                          [_vm._v(_vm._s(_vm.rem2Px(size.value)))]
                        )
                      ])
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex:2" }, [
                _c("div", { staticClass: "flex flex:wrap" }, [
                  _c("div", { staticClass: "flex:1 px:1/2 mb:1" }, [
                    _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
                      _c("div", { staticClass: "bg:grey-lighter p:1/2" }, [
                        _c("div", { staticClass: "bg:grey-light p:2" }, [
                          _vm._v("Lo ipsum dolor sit amet.")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
                      _c("pre", {
                        staticClass: "language-html",
                        domProps: { innerHTML: _vm._s(_vm.exemple1) }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex:1 px:1/2 mb:1" }, [
                    _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
                      _c("div", { staticClass: "bg:grey-lighter p:1/2" }, [
                        _c("div", { staticClass: "bg:grey-light py:1 px:2" }, [
                          _vm._v("Lo ipsum dolor sit amet.")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
                      _c("pre", {
                        staticClass: "language-html",
                        domProps: { innerHTML: _vm._s(_vm.exemple2) }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex:1 px:1/2 mb:1" }, [
                    _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
                      _c("div", { staticClass: "bg:grey-lighter p:1/2" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "bg:grey-light pt:1/4 pr:2/5 py:3/5 pl:3/4"
                          },
                          [_vm._v("Lo ipsum dolor sit amet.")]
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
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex:1 px:1/2 mb:1" }, [
                    _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
                      _c("div", { staticClass: "bg:grey-lighter p:1/2" }, [
                        _c("div", { staticClass: "bg:grey-light m:2" }, [
                          _vm._v("Lo ipsum dolor sit amet.")
                        ])
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

/***/ "./src/pages/utils/Spacing.vue":
/*!*************************************!*\
  !*** ./src/pages/utils/Spacing.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spacing_vue_vue_type_template_id_21a91271___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spacing.vue?vue&type=template&id=21a91271& */ "./src/pages/utils/Spacing.vue?vue&type=template&id=21a91271&");
/* harmony import */ var _Spacing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spacing.vue?vue&type=script&lang=js& */ "./src/pages/utils/Spacing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Spacing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Spacing_vue_vue_type_template_id_21a91271___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Spacing_vue_vue_type_template_id_21a91271___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/Spacing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/Spacing.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/pages/utils/Spacing.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Spacing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./Spacing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Spacing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Spacing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/Spacing.vue?vue&type=template&id=21a91271&":
/*!********************************************************************!*\
  !*** ./src/pages/utils/Spacing.vue?vue&type=template&id=21a91271& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spacing_vue_vue_type_template_id_21a91271___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Spacing.vue?vue&type=template&id=21a91271& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Spacing.vue?vue&type=template&id=21a91271&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spacing_vue_vue_type_template_id_21a91271___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spacing_vue_vue_type_template_id_21a91271___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);