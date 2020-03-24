(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Typography.vue?vue&type=template&id=51838371&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Typography.vue?vue&type=template&id=51838371& ***!
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
          return [_vm._v("Typography")]
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
                      _c(
                        "th",
                        {
                          staticClass: "border:b:1/8 border:teal text:teal",
                          attrs: { colspan: "2" }
                        },
                        [_vm._v("Whitespace")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [
                        _c("pre", { staticClass: "inline text:purple" }, [
                          _vm._v(".whitespace:normal")
                        ]),
                        _vm._v(" "),
                        _c(
                          "pre",
                          {
                            staticClass:
                              "inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                          },
                          [_vm._v("Default")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("pre", { staticClass: "text:blue" }, [
                          _vm._v("white-space: normal;")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _c("pre", { staticClass: "inline text:purple" }, [
                          _vm._v(".whitespace:no-wrap")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("pre", { staticClass: "text:blue" }, [
                          _vm._v("white-space: nowrap;")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _c("pre", { staticClass: "inline text:purple" }, [
                          _vm._v(".whitespace:pre")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("pre", { staticClass: "text:blue" }, [
                          _vm._v("white-space: pre;")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _c("pre", { staticClass: "inline text:purple" }, [
                          _vm._v(".whitespace:pre-line")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("pre", { staticClass: "text:blue" }, [
                          _vm._v("white-space: pre-line;")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _c("pre", { staticClass: "inline text:purple" }, [
                          _vm._v(".whitespace:pre-wrap")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("pre", { staticClass: "text:blue" }, [
                          _vm._v("white-space: pre-wrap;")
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex:1 mr:1" }, [
                _c("table", { staticClass: "w:full" }, [
                  _c("thead", [
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "border:b:1/8 border:teal text:teal",
                          attrs: { colspan: "2" }
                        },
                        [_vm._v("Wrapping")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [
                        _c("pre", { staticClass: "inline text:purple" }, [
                          _vm._v(".break-words")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("pre", { staticClass: "text:blue" }, [
                          _vm._v("word-wrap: break-word;")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _c("pre", { staticClass: "inline text:purple" }, [
                          _vm._v(".break-normal")
                        ]),
                        _vm._v(" "),
                        _c(
                          "pre",
                          {
                            staticClass:
                              "inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                          },
                          [_vm._v("Default")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("pre", { staticClass: "text:blue" }, [
                          _vm._v("word-wrap: normal;")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _c("pre", { staticClass: "inline text:purple" }, [
                          _vm._v(".truncate")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("pre", { staticClass: "text:blue" }, [
                          _vm._v(
                            "overflow: hidden;\ntext:overflow: ellipsis;\nwhite-space: nowrap;\n                "
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex:1" }, [
                _c("table", { staticClass: "w:full" }, [
                  _c("thead", [
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "border:b:1/8 border:teal text:teal",
                          attrs: { colspan: "2" }
                        },
                        [_vm._v("Lists")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [
                        _c(
                          "pre",
                          {
                            staticClass:
                              "inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                          },
                          [_vm._v("Default")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("ul", [
                          _c("li", [_vm._v("Lorem ipsum dolor sit amet")]),
                          _vm._v(" "),
                          _c("li", [_vm._v("Assumenda, quia temporibus")]),
                          _vm._v(" "),
                          _c("li", [_vm._v("Quidem, ipsam illum quis")])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _c("pre", { staticClass: "inline text:purple" }, [
                          _vm._v(".list-reset")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("ul", { staticClass: "list-reset" }, [
                          _c("li", [_vm._v("Lorem ipsum dolor sit amet")]),
                          _vm._v(" "),
                          _c("li", [_vm._v("Assumenda, quia temporibus")]),
                          _vm._v(" "),
                          _c("li", [_vm._v("Quidem, ipsam illum quis")])
                        ])
                      ])
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

/***/ "./src/pages/utils/Typography.vue":
/*!****************************************!*\
  !*** ./src/pages/utils/Typography.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Typography_vue_vue_type_template_id_51838371___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Typography.vue?vue&type=template&id=51838371& */ "./src/pages/utils/Typography.vue?vue&type=template&id=51838371&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Typography_vue_vue_type_template_id_51838371___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Typography_vue_vue_type_template_id_51838371___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/Typography.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/Typography.vue?vue&type=template&id=51838371&":
/*!***********************************************************************!*\
  !*** ./src/pages/utils/Typography.vue?vue&type=template&id=51838371& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Typography_vue_vue_type_template_id_51838371___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Typography.vue?vue&type=template&id=51838371& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Typography.vue?vue&type=template&id=51838371&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Typography_vue_vue_type_template_id_51838371___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Typography_vue_vue_type_template_id_51838371___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);