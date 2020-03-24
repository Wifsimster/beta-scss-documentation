(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/Decoration.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/text/Decoration.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      decorations: ['italic', 'normal', 'uppercase', 'lowercase', 'capitalize', 'normal-case', 'underline', 'line-through', 'no-underline'],
      exemple1: null
    };
  },
  mounted: function mounted() {
    this.exemple1 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight("<div class=\"py:1 italic\">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>\n<div class=\"py:1 uppercase\">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>\n<div class=\"py:1 capitalize\">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>\n<div class=\"py:1 underline\">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>", prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/Decoration.vue?vue&type=template&id=e461d880&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/text/Decoration.vue?vue&type=template&id=e461d880& ***!
  \**********************************************************************************************************************************************************************************************************/
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
      _c("table", { staticClass: "w:full" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.decorations, function(item) {
            return _c("tr", { key: item }, [
              _c("td", [
                _c("pre", { staticClass: "inline text:purple" }, [
                  _vm._v("." + _vm._s(item))
                ])
              ]),
              _vm._v(" "),
              _c(
                "td",
                {
                  staticClass: "text:center py:1/2 border:b border:grey-light",
                  class: item
                },
                [_vm._v("Aa")]
              )
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
      _c("div", { staticClass: "py:1 italic" }, [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua."
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py:1 uppercase" }, [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua."
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py:1 capitalize" }, [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua."
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py:1 underline" }, [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua."
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./src/pages/utils/text/Decoration.vue":
/*!*********************************************!*\
  !*** ./src/pages/utils/text/Decoration.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Decoration_vue_vue_type_template_id_e461d880___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decoration.vue?vue&type=template&id=e461d880& */ "./src/pages/utils/text/Decoration.vue?vue&type=template&id=e461d880&");
/* harmony import */ var _Decoration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Decoration.vue?vue&type=script&lang=js& */ "./src/pages/utils/text/Decoration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Decoration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Decoration_vue_vue_type_template_id_e461d880___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Decoration_vue_vue_type_template_id_e461d880___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/text/Decoration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/text/Decoration.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/pages/utils/text/Decoration.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--1!../../../../node_modules/vue-loader/lib??vue-loader-options!./Decoration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/Decoration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/text/Decoration.vue?vue&type=template&id=e461d880&":
/*!****************************************************************************!*\
  !*** ./src/pages/utils/text/Decoration.vue?vue&type=template&id=e461d880& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_template_id_e461d880___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Decoration.vue?vue&type=template&id=e461d880& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/Decoration.vue?vue&type=template&id=e461d880&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_template_id_e461d880___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_template_id_e461d880___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);