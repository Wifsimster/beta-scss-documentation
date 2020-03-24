(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/Color.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/text/Color.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      colors: ['black', 'grey-darkest', 'grey-darker', 'grey-dark', 'grey', 'grey-light', 'grey-lighter', 'grey-lightest', 'white', 'red-darkest', 'red-darker', 'red-dark', 'red', 'red-light', 'red-lighter', 'red-lightest', 'orange-darkest', 'orange-darker', 'orange-dark', 'orange', 'orange-light', 'orange-lighter', 'orange-lightest', 'yellow:darkest', 'yellow:darker', 'yellow:dark', 'yellow', 'yellow:light', 'yellow:lighter', 'yellow:lightest', 'green-darkest', 'green-darker', 'green-dark', 'green', 'green-light', 'green-lighter', 'green-lightest', 'teal-darkest', 'teal-darker', 'teal-dark', 'teal', 'teal-light', 'teal-lighter', 'teal-lightest', 'blue-darkest', 'blue-darker', 'blue-dark', 'blue', 'blue-light', 'blue-lighter', 'blue-lightest', 'indigo-darkest', 'indigo-darker', 'indigo-dark', 'indigo', 'indigo-light', 'indigo-lighter', 'indigo-lightest', 'purple-darkest', 'purple-darker', 'purple-dark', 'purple', 'purple-light', 'purple-lighter', 'purple-lightest', 'pink-darkest', 'pink-darker', 'pink-dark', 'pink', 'pink-light', 'pink-lighter', 'pink-lightest'],
      exemple1: null
    };
  },
  mounted: function mounted() {
    this.exemple1 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight("<div class=\"py:1 text:red-light\">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>\n<div class=\"py:1 text:teal-dark\">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>\n<div class=\"py:1 text:purple\">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>", prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/Color.vue?vue&type=template&id=4eaa8d03&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/text/Color.vue?vue&type=template&id=4eaa8d03& ***!
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
  return _c("div", { staticClass: "flex flex:wrap" }, [
    _c("div", { staticClass: "flex:1 mr:1" }, [
      _c(
        "div",
        {
          staticClass: "overflow-y:auto line:normal mb:1 mx:1/2",
          staticStyle: { "max-height": "680px" }
        },
        [
          _c("table", { staticClass: "w:full" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.colors, function(color) {
                return _c("tr", { key: color }, [
                  _c("td", [
                    _c("pre", { staticClass: "inline text:purple" }, [
                      _vm._v(".text:" + _vm._s(color))
                    ]),
                    _vm._v(" "),
                    color === "black"
                      ? _c(
                          "pre",
                          {
                            staticClass:
                              "inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                          },
                          [_vm._v("Default")]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass:
                        "text:center py:1/2 border:b border:grey-light",
                      class: "text:" + color
                    },
                    [_vm._v("\n                Aa\n              ")]
                  )
                ])
              }),
              0
            )
          ])
        ]
      )
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
              domProps: { innerHTML: _vm._s(_vm.exemple1) }
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Class")]),
        _vm._v(" "),
        _c("th", [_vm._v("Result")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
      _c("div", { staticClass: "py:1 text:red-light" }, [
        _vm._v(
          "\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.\n            "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py:1 text:teal-dark" }, [
        _vm._v(
          "\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.\n            "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py:1 text:purple" }, [
        _vm._v(
          "\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.\n            "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./src/pages/utils/text/Color.vue":
/*!****************************************!*\
  !*** ./src/pages/utils/text/Color.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Color_vue_vue_type_template_id_4eaa8d03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color.vue?vue&type=template&id=4eaa8d03& */ "./src/pages/utils/text/Color.vue?vue&type=template&id=4eaa8d03&");
/* harmony import */ var _Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color.vue?vue&type=script&lang=js& */ "./src/pages/utils/text/Color.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Color_vue_vue_type_template_id_4eaa8d03___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Color_vue_vue_type_template_id_4eaa8d03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/text/Color.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/text/Color.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/pages/utils/text/Color.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--1!../../../../node_modules/vue-loader/lib??vue-loader-options!./Color.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/Color.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/text/Color.vue?vue&type=template&id=4eaa8d03&":
/*!***********************************************************************!*\
  !*** ./src/pages/utils/text/Color.vue?vue&type=template&id=4eaa8d03& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_template_id_4eaa8d03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Color.vue?vue&type=template&id=4eaa8d03& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/Color.vue?vue&type=template&id=4eaa8d03&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_template_id_4eaa8d03___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_template_id_4eaa8d03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);