(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/Size.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/text/Size.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
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
        key: '1/2',
        value: '0.5'
      }, {
        key: '3/4',
        value: '0.75'
      }, {
        key: '7/8',
        value: '0.875'
      }, {
        key: '1',
        value: '1'
      }, {
        key: '9/8',
        value: '1.125'
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
        key: '3',
        value: '3'
      }],
      exemple1: null
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
    this.exemple1 = prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlight("<div class=\"py:1 text:3/4\">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>\n<div class=\"py:1 text:1\">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>\n<div class=\"py:1 text:5/4\">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>\n<div class=\"py:1 text:3/2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>", prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.languages.html, 'html');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/Size.vue?vue&type=template&id=84ee36de&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/text/Size.vue?vue&type=template&id=84ee36de& ***!
  \****************************************************************************************************************************************************************************************************/
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
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("Class")]),
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
            ]),
            _vm._v(" "),
            _c("th", [_vm._v("Result")])
          ])
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.sizes, function(size) {
            return _c("tr", { key: size.key }, [
              _c("td", [
                _c("pre", { staticClass: "inline text:purple" }, [
                  _vm._v(".text:" + _vm._s(size.key))
                ]),
                _vm._v(" "),
                size.key === "1"
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
              _c("td", { staticClass: "py:1 border:b border:grey-light" }, [
                _vm._v(_vm._s(_vm.rem2Px(size.value)))
              ]),
              _vm._v(" "),
              _c(
                "td",
                {
                  staticClass: "text:center py:1/2 border:b border:grey-light",
                  class: "text:" + size.key
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
    _c("div", { staticClass: "flex:2" }, [
      _c("div", { staticClass: "flex flex:wrap" }, [
        _c("div", { staticClass: "flex:1 px:1/2 mb:1" }, [
          _vm._m(0),
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
    return _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
      _c("div", { staticClass: "py:1 text:3/4" }, [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua."
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py:1 text:1" }, [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua."
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py:1 text:5/4" }, [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua."
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py:1 text:3/2" }, [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua."
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./src/pages/utils/text/Size.vue":
/*!***************************************!*\
  !*** ./src/pages/utils/text/Size.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Size_vue_vue_type_template_id_84ee36de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Size.vue?vue&type=template&id=84ee36de& */ "./src/pages/utils/text/Size.vue?vue&type=template&id=84ee36de&");
/* harmony import */ var _Size_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Size.vue?vue&type=script&lang=js& */ "./src/pages/utils/text/Size.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Size_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Size_vue_vue_type_template_id_84ee36de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Size_vue_vue_type_template_id_84ee36de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/text/Size.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/text/Size.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/pages/utils/text/Size.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Size_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--1!../../../../node_modules/vue-loader/lib??vue-loader-options!./Size.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/Size.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Size_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/text/Size.vue?vue&type=template&id=84ee36de&":
/*!**********************************************************************!*\
  !*** ./src/pages/utils/text/Size.vue?vue&type=template&id=84ee36de& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Size_vue_vue_type_template_id_84ee36de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Size.vue?vue&type=template&id=84ee36de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/Size.vue?vue&type=template&id=84ee36de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Size_vue_vue_type_template_id_84ee36de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Size_vue_vue_type_template_id_84ee36de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);