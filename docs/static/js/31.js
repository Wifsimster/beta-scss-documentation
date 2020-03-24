(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/flexbox/Intro.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/flexbox/Intro.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      exemple1: null,
      exemple2: null,
      exemple3: null,
      exemple4: null
    };
  },
  mounted: function mounted() {
    this.exemple1 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight("<div class=\"flex\">\n  <div class=\"flex:1\">1</div>\n  <div class=\"flex:1\">2</div>\n  <div class=\"flex:1\">3</div>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
    this.exemple2 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight("<div class=\"flex flex:col\">\n  <div class=\"flex:1\">1</div>\n  <div class=\"flex:1\">2</div>\n  <div class=\"flex:1\">3</div>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
    this.exemple3 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight("<div class=\"flex\">\n  <div class=\"flex:1\">1</div>\n  <div class=\"flex:2\">2</div>\n  <div class=\"flex:3\">3</div>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
    this.exemple4 = prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.highlight(" <div class=\"flex\">\n    <div class=\"flex:1\">1</div>\n    <div class=\"flex:2\">\n        <div class=\"flex flex:col\">\n            <div class=\"flex:1\">2</div>\n            <div class=\"flex:1\">3</div>\n            <div class=\"flex:1\">4</div>\n        </div>\n    </div>\n</div>", prismjs__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html, 'html');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/flexbox/Intro.vue?vue&type=template&id=7b746606&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/flexbox/Intro.vue?vue&type=template&id=7b746606& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "text:bold py:1/2" }, [_vm._v("Structure")]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "text:bold py:1/2" }, [_vm._v("Boilerplates")]),
    _vm._v(" "),
    _c("div", { staticClass: "flex flex:wrap" }, [
      _c("div", { staticClass: "flex:1" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
          _c("pre", {
            staticClass: "language-html",
            domProps: { innerHTML: _vm._s(_vm.exemple1) }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex:1 mx:1" }, [
        _vm._m(2),
        _vm._v(" "),
        _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
          _c("pre", {
            staticClass: "language-html",
            domProps: { innerHTML: _vm._s(_vm.exemple2) }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex:2 mx:1" }, [
        _vm._m(3),
        _vm._v(" "),
        _c("div", { staticClass: "bg:black rounded:b:1/2" }, [
          _c("pre", {
            staticClass: "language-html",
            domProps: { innerHTML: _vm._s(_vm.exemple3) }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex:2" }, [
        _vm._m(4),
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "flex flex:col bg:grey-lighter p:1/2 rounded border mb:2"
      },
      [
        _c("div", { staticClass: "flex flex:wrap" }, [
          _c(
            "div",
            {
              staticClass:
                "flex:1 text:center text:grey-darkest bg:grey-light m:1/2 px:1/4 py:1 rounded border"
            },
            [_vm._v("Item 1")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "flex:2 text:center text:grey-darkest bg:grey-light m:1/2 px:1/4 py:1 rounded border"
            },
            [_vm._v("Item 2")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "flex:2 text:center text:grey-darkest bg:grey-light m:1/2 px:1/4 py:1 rounded border"
            },
            [_vm._v("Item 3")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex:1 p:1 text:center text:grey-darkest" }, [
          _vm._v("Content")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
      _c("div", { staticClass: "flex bg:grey-lighter" }, [
        _c(
          "div",
          {
            staticClass:
              "flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1"
          },
          [_vm._v("1")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1"
          },
          [_vm._v("2")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1"
          },
          [_vm._v("3")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
      _c("div", { staticClass: "flex flex:col bg:grey-lighter" }, [
        _c(
          "div",
          {
            staticClass:
              "flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1"
          },
          [_vm._v("1")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1"
          },
          [_vm._v("2")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1"
          },
          [_vm._v("3")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
      _c("div", { staticClass: "flex bg:grey-lighter" }, [
        _c(
          "div",
          {
            staticClass:
              "flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1"
          },
          [_vm._v("1")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex:2 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1"
          },
          [_vm._v("2")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex:3 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1"
          },
          [_vm._v("3")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "border rounded:t:1/2 p:1" }, [
      _c("div", { staticClass: "flex bg:grey-lighter" }, [
        _c(
          "div",
          {
            staticClass:
              "flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1"
          },
          [_vm._v("1")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "flex:2" }, [
          _c("div", { staticClass: "flex flex:col" }, [
            _c(
              "div",
              {
                staticClass:
                  "flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1"
              },
              [_vm._v("2")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1"
              },
              [_vm._v("3")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1"
              },
              [_vm._v("4")]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./src/pages/utils/flexbox/Intro.vue":
/*!*******************************************!*\
  !*** ./src/pages/utils/flexbox/Intro.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Intro_vue_vue_type_template_id_7b746606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Intro.vue?vue&type=template&id=7b746606& */ "./src/pages/utils/flexbox/Intro.vue?vue&type=template&id=7b746606&");
/* harmony import */ var _Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Intro.vue?vue&type=script&lang=js& */ "./src/pages/utils/flexbox/Intro.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Intro_vue_vue_type_template_id_7b746606___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Intro_vue_vue_type_template_id_7b746606___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/flexbox/Intro.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/flexbox/Intro.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/pages/utils/flexbox/Intro.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--1!../../../../node_modules/vue-loader/lib??vue-loader-options!./Intro.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/flexbox/Intro.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/flexbox/Intro.vue?vue&type=template&id=7b746606&":
/*!**************************************************************************!*\
  !*** ./src/pages/utils/flexbox/Intro.vue?vue&type=template&id=7b746606& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_template_id_7b746606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Intro.vue?vue&type=template&id=7b746606& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/flexbox/Intro.vue?vue&type=template&id=7b746606&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_template_id_7b746606___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_template_id_7b746606___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);