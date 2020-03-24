(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/text.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tab: 'color'
    };
  },
  created: function created() {
    this.$router.push('/text/color')["catch"](function () {});
  },
  watch: {
    '$route.path': function $routePath() {
      if (this.$route.path === '/text') {
        this.$router.push('/text/color')["catch"](function () {});
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text.vue?vue&type=template&id=ffd23062&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/text.vue?vue&type=template&id=ffd23062& ***!
  \***********************************************************************************************************************************************************************************************/
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
          return [_vm._v("Text")]
        },
        proxy: true
      },
      {
        key: "navigation",
        fn: function() {
          return [
            _c(
              "div",
              { staticClass: "bg:grey-lighter w:full py:1/2 flex flex:wrap" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:2",
                    class: { "text:orange": _vm.$route.path === "/text/color" },
                    attrs: { tag: "span", to: "/text/color" }
                  },
                  [_vm._v("Color")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:2",
                    class: { "text:orange": _vm.$route.path === "/text/size" },
                    attrs: { tag: "span", to: "/text/size" }
                  },
                  [_vm._v("Size")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:2",
                    class: {
                      "text:orange": _vm.$route.path === "/text/weigth"
                    },
                    attrs: { tag: "span", to: "/text/weigth" }
                  },
                  [_vm._v("Weigth")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:2",
                    class: {
                      "text:orange": _vm.$route.path === "/text/alignment"
                    },
                    attrs: { tag: "span", to: "/text/alignment" }
                  },
                  [_vm._v("Alignment")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:2",
                    class: {
                      "text:orange": _vm.$route.path === "/text/decoration"
                    },
                    attrs: { tag: "span", to: "/text/decoration" }
                  },
                  [_vm._v("Decoration")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:2",
                    class: {
                      "text:orange": _vm.$route.path === "/text/line-height"
                    },
                    attrs: { tag: "span", to: "/text/line-height" }
                  },
                  [_vm._v("Line height")]
                )
              ],
              1
            )
          ]
        },
        proxy: true
      },
      {
        key: "content",
        fn: function() {
          return [
            _c(
              "transition",
              { attrs: { name: "opacity", mode: "out-in" } },
              [_c("router-view")],
              1
            )
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

/***/ "./src/pages/utils/text.vue":
/*!**********************************!*\
  !*** ./src/pages/utils/text.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_vue_vue_type_template_id_ffd23062___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.vue?vue&type=template&id=ffd23062& */ "./src/pages/utils/text.vue?vue&type=template&id=ffd23062&");
/* harmony import */ var _text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.vue?vue&type=script&lang=js& */ "./src/pages/utils/text.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _text_vue_vue_type_template_id_ffd23062___WEBPACK_IMPORTED_MODULE_0__["render"],
  _text_vue_vue_type_template_id_ffd23062___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/text.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/text.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/pages/utils/text.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./text.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/text.vue?vue&type=template&id=ffd23062&":
/*!*****************************************************************!*\
  !*** ./src/pages/utils/text.vue?vue&type=template&id=ffd23062& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_text_vue_vue_type_template_id_ffd23062___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./text.vue?vue&type=template&id=ffd23062& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/text.vue?vue&type=template&id=ffd23062&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_text_vue_vue_type_template_id_ffd23062___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_text_vue_vue_type_template_id_ffd23062___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);