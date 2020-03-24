(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Border.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Border.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
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
    this.$router.push('/border/color')["catch"](function () {});
  },
  watch: {
    '$route.path': function $routePath() {
      if (this.$route.path === '/border') {
        this.$router.push('/border/color')["catch"](function () {});
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Border.vue?vue&type=template&id=ebb03e24&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Border.vue?vue&type=template&id=ebb03e24& ***!
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
          return [_vm._v("Border")]
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
                    class: {
                      "text:orange": _vm.$route.path === "/border/color"
                    },
                    attrs: { tag: "span", to: "/border/color" }
                  },
                  [_vm._v("Color")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:2",
                    class: {
                      "text:orange": _vm.$route.path === "/border/style"
                    },
                    attrs: { tag: "span", to: "/border/style" }
                  },
                  [_vm._v("Style")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:2",
                    class: {
                      "text:orange": _vm.$route.path === "/border/width"
                    },
                    attrs: { tag: "span", to: "/border/width" }
                  },
                  [_vm._v("Width")]
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

/***/ "./src/pages/utils/Border.vue":
/*!************************************!*\
  !*** ./src/pages/utils/Border.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Border_vue_vue_type_template_id_ebb03e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Border.vue?vue&type=template&id=ebb03e24& */ "./src/pages/utils/Border.vue?vue&type=template&id=ebb03e24&");
/* harmony import */ var _Border_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Border.vue?vue&type=script&lang=js& */ "./src/pages/utils/Border.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Border_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Border_vue_vue_type_template_id_ebb03e24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Border_vue_vue_type_template_id_ebb03e24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/Border.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/Border.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/pages/utils/Border.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Border_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./Border.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Border.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Border_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/Border.vue?vue&type=template&id=ebb03e24&":
/*!*******************************************************************!*\
  !*** ./src/pages/utils/Border.vue?vue&type=template&id=ebb03e24& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Border_vue_vue_type_template_id_ebb03e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Border.vue?vue&type=template&id=ebb03e24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Border.vue?vue&type=template&id=ebb03e24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Border_vue_vue_type_template_id_ebb03e24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Border_vue_vue_type_template_id_ebb03e24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);