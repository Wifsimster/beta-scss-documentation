(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Color.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Color.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      colors: ['grey', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'],
      variants: ['-lightest', '-lighter', '-light', '', '-dark', '-darker', '-darkest']
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Color.vue?vue&type=template&id=9e79c9de&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Color.vue?vue&type=template&id=9e79c9de& ***!
  \************************************************************************************************************************************************************************************************/
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
          return [_vm._v("Colors")]
        },
        proxy: true
      },
      {
        key: "content",
        fn: function() {
          return _vm._l(_vm.colors, function(color) {
            return _c(
              "div",
              {
                key: color,
                staticClass: "flex:1 overflow:hidden rounded my:1"
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "flex justify-between relative shadow p:1/2",
                    class: "bg:" + color
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "text:bold text:white uppercase" },
                      [_vm._v(_vm._s(color))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex" },
                  [
                    color === "grey"
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "flex:1 text:black text:bold line-height:1 text:3/4 px:1 py:3/2"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "font:normal opacity:75" },
                              [_c("pre", [_vm._v("white")])]
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.variants, function(variant) {
                      return _c(
                        "div",
                        {
                          key: variant,
                          staticClass:
                            "flex:1 text:black text:bold line-height:1 text:3/4 px:1 py:3/2",
                          class: "bg:" + color + variant
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "font:normal opacity:75",
                              class: {
                                "text:white":
                                  variant === "-darker" ||
                                  variant === "-darkest"
                              }
                            },
                            [
                              _c("pre", [
                                _vm._v(_vm._s(color) + _vm._s(variant))
                              ])
                            ]
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    color === "grey"
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "flex:1 text:white text:bold line-height:1 text:3/4 bg:black px:1 py:3/2"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "font:normal opacity:75" },
                              [_c("pre", [_vm._v("black")])]
                            )
                          ]
                        )
                      : _vm._e()
                  ],
                  2
                )
              ]
            )
          })
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/utils/Color.vue":
/*!***********************************!*\
  !*** ./src/pages/utils/Color.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Color_vue_vue_type_template_id_9e79c9de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color.vue?vue&type=template&id=9e79c9de& */ "./src/pages/utils/Color.vue?vue&type=template&id=9e79c9de&");
/* harmony import */ var _Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color.vue?vue&type=script&lang=js& */ "./src/pages/utils/Color.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Color_vue_vue_type_template_id_9e79c9de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Color_vue_vue_type_template_id_9e79c9de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/Color.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/Color.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/pages/utils/Color.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./Color.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Color.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/Color.vue?vue&type=template&id=9e79c9de&":
/*!******************************************************************!*\
  !*** ./src/pages/utils/Color.vue?vue&type=template&id=9e79c9de& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_template_id_9e79c9de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Color.vue?vue&type=template&id=9e79c9de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Color.vue?vue&type=template&id=9e79c9de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_template_id_9e79c9de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_template_id_9e79c9de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);