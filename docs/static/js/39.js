(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/LineHeight.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/text/LineHeight.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
      heights: [{
        key: '1/2',
        value: '0.5'
      }, {
        key: '3/4',
        value: '0.75'
      }, {
        key: '1',
        value: '1'
      }, {
        key: '3/2',
        value: '1.5'
      }, {
        key: '2',
        value: '2'
      }, {
        key: '5/2',
        value: '2.5'
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
    this.exemple1 = prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlight("<div class=\"py:1 line-height:1\">Lorem ipsum dolor sit amet...</div>\n<div class=\"py:1 line-height:3/2\">Lorem ipsum dolor sit amet...</div>\n<div class=\"py:1 line-height:2\">Lorem ipsum dolor sit amet...</div>", prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.languages.html, 'html');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/LineHeight.vue?vue&type=template&id=2b6b03cb&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/text/LineHeight.vue?vue&type=template&id=2b6b03cb& ***!
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
      _c("table", [
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
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.heights, function(height) {
            return _c("tr", { key: height.key }, [
              _c("td", [
                _c("pre", { staticClass: "inline text:purple" }, [
                  _vm._v(".line-height:" + _vm._s(height.key))
                ]),
                _vm._v(" "),
                height.key === "3/2"
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
              _c("td", [_vm._v(_vm._s(_vm.rem2Px(height.value)))])
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
      _c("div", { staticClass: "py:1 line-height:1" }, [
        _vm._v(
          "\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n              enim ad minim veniam, quis nostrud exercitation ullamco laboris\n              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n              reprehenderit in voluptate velit esse cillum dolore eu fugiat\n              nulla pariatur.\n            "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py:1 line-height:3/2" }, [
        _vm._v(
          "\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n              enim ad minim veniam, quis nostrud exercitation ullamco laboris\n              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n              reprehenderit in voluptate velit esse cillum dolore eu fugiat\n              nulla pariatur.\n            "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py:1 line-height:2" }, [
        _vm._v(
          "\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n              enim ad minim veniam, quis nostrud exercitation ullamco laboris\n              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n              reprehenderit in voluptate velit esse cillum dolore eu fugiat\n              nulla pariatur.\n            "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./src/pages/utils/text/LineHeight.vue":
/*!*********************************************!*\
  !*** ./src/pages/utils/text/LineHeight.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineHeight_vue_vue_type_template_id_2b6b03cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineHeight.vue?vue&type=template&id=2b6b03cb& */ "./src/pages/utils/text/LineHeight.vue?vue&type=template&id=2b6b03cb&");
/* harmony import */ var _LineHeight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineHeight.vue?vue&type=script&lang=js& */ "./src/pages/utils/text/LineHeight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LineHeight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LineHeight_vue_vue_type_template_id_2b6b03cb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LineHeight_vue_vue_type_template_id_2b6b03cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/text/LineHeight.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/text/LineHeight.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/pages/utils/text/LineHeight.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LineHeight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--1!../../../../node_modules/vue-loader/lib??vue-loader-options!./LineHeight.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/LineHeight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LineHeight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/text/LineHeight.vue?vue&type=template&id=2b6b03cb&":
/*!****************************************************************************!*\
  !*** ./src/pages/utils/text/LineHeight.vue?vue&type=template&id=2b6b03cb& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LineHeight_vue_vue_type_template_id_2b6b03cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LineHeight.vue?vue&type=template&id=2b6b03cb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text/LineHeight.vue?vue&type=template&id=2b6b03cb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LineHeight_vue_vue_type_template_id_2b6b03cb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LineHeight_vue_vue_type_template_id_2b6b03cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);