(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Height.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Height.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      sizes: [{
        key: '0',
        value: '0'
      }, {
        key: '1/12',
        value: '8.33333%'
      }, {
        key: '2/12',
        value: '16.66667%'
      }, {
        key: '3/12',
        value: '25%'
      }, {
        key: '4/12',
        value: '33.33333%'
      }, {
        key: '5/12',
        value: '41.66667%'
      }, {
        key: '6/12',
        value: '50%'
      }, {
        key: '7/12',
        value: '58.33333%'
      }, {
        key: '8/12',
        value: '66.66667%'
      }, {
        key: '9/12',
        value: '75%'
      }, {
        key: '10/12',
        value: '83.33333%'
      }, {
        key: '11/12',
        value: '91.66667%'
      }, {
        key: 'full',
        value: '100%'
      }, {
        key: 'screen',
        value: '100vw'
      }, {
        key: 'inherit',
        value: 'inherit'
      }, {
        key: 'auto',
        value: 'auto'
      }],
      heights: [['1/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12']]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Height.vue?vue&type=template&id=76370869&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Height.vue?vue&type=template&id=76370869& ***!
  \*************************************************************************************************************************************************************************************************/
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
          return [_vm._v("Height")]
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
                      _c("th", [_vm._v("Height")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.sizes, function(size, index) {
                      return _c("tr", { key: size.key }, [
                        index === 0
                          ? _c(
                              "td",
                              {
                                staticClass:
                                  "py:1/2 border:b border:grey-lighter"
                              },
                              [
                                _c(
                                  "code",
                                  {
                                    staticClass:
                                      "border rounded m:1/4 py:1/5 px:1/4"
                                  },
                                  [_vm._v("h")]
                                ),
                                _vm._v(
                                  "\n                  Height\n                "
                                )
                              ]
                            )
                          : index === 1
                          ? _c(
                              "td",
                              {
                                staticClass:
                                  "py:1/2 border:b border:grey-lighter"
                              },
                              [
                                _c(
                                  "code",
                                  {
                                    staticClass:
                                      "border rounded m:1/4 py:1/5 px:1/4"
                                  },
                                  [_vm._v("min-h")]
                                ),
                                _vm._v(
                                  "\n                  Min-height\n                "
                                )
                              ]
                            )
                          : index === 2
                          ? _c(
                              "td",
                              {
                                staticClass:
                                  "py:1/2 border:b border:grey-lighter"
                              },
                              [
                                _c(
                                  "code",
                                  {
                                    staticClass:
                                      "border rounded m:1/4 py:1/5 px:1/4"
                                  },
                                  [_vm._v("max-h")]
                                ),
                                _vm._v(
                                  "\n                  Max-height\n                "
                                )
                              ]
                            )
                          : _c("td", {
                              staticClass: "py:1/2 border:b border:grey-lighter"
                            }),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "py:1/2 border:b border:grey-lighter"
                          },
                          [
                            _c(
                              "code",
                              {
                                staticClass:
                                  "border rounded m:1/4 py:1/5 px:1/4"
                              },
                              [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(size.key) +
                                    "\n                  "
                                )
                              ]
                            ),
                            _vm._v(
                              "\n                  " +
                                _vm._s(size.value) +
                                "\n                "
                            )
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
                _c(
                  "div",
                  { staticClass: "flex flex:wrap" },
                  _vm._l(_vm.heights, function(grids, index) {
                    return _c(
                      "div",
                      {
                        key: index,
                        staticClass: "flex:1 border rounded:1/2 p:1/2 mt:2 mb:1"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex justify:around bg:grey-lighter rounded",
                            staticStyle: { height: "350px" }
                          },
                          _vm._l(grids, function(height, i) {
                            return _c(
                              "div",
                              { key: i, staticClass: "h:full" },
                              [
                                _c(
                                  "pre",
                                  {
                                    staticClass:
                                      "inline text:center text:sm text:purple my:1/2 px:1/2 h:2/12"
                                  },
                                  [_vm._v("h:" + _vm._s(height))]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "h:10/12 mx:1/4" }, [
                                  _c("div", {
                                    class: "bg:grey-light border h:" + height
                                  })
                                ])
                              ]
                            )
                          }),
                          0
                        )
                      ]
                    )
                  }),
                  0
                )
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

/***/ "./src/pages/utils/Height.vue":
/*!************************************!*\
  !*** ./src/pages/utils/Height.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Height_vue_vue_type_template_id_76370869___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Height.vue?vue&type=template&id=76370869& */ "./src/pages/utils/Height.vue?vue&type=template&id=76370869&");
/* harmony import */ var _Height_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Height.vue?vue&type=script&lang=js& */ "./src/pages/utils/Height.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Height_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Height_vue_vue_type_template_id_76370869___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Height_vue_vue_type_template_id_76370869___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/Height.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/Height.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/pages/utils/Height.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Height_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./Height.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Height.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Height_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/Height.vue?vue&type=template&id=76370869&":
/*!*******************************************************************!*\
  !*** ./src/pages/utils/Height.vue?vue&type=template&id=76370869& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Height_vue_vue_type_template_id_76370869___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Height.vue?vue&type=template&id=76370869& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Height.vue?vue&type=template&id=76370869&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Height_vue_vue_type_template_id_76370869___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Height_vue_vue_type_template_id_76370869___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);