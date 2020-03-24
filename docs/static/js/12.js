(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Flexbox.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Flexbox.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.$router.push('/flexbox/intro')["catch"](function () {});
  },
  watch: {
    '$route.path': function $routePath() {
      if (this.$route.path === '/flexbox') {
        this.$router.push('/flexbox/intro')["catch"](function () {});
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Flexbox.vue?vue&type=template&id=27c96de0&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/utils/Flexbox.vue?vue&type=template&id=27c96de0& ***!
  \**************************************************************************************************************************************************************************************************/
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
          return [_vm._v("Flexbox")]
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
                    staticClass: "cursor:pointer text:bold px:1",
                    class: {
                      "text:orange": _vm.$route.path === "/flexbox/intro"
                    },
                    attrs: { tag: "span", to: "/flexbox/intro" }
                  },
                  [_vm._v("Introduction")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:1",
                    class: {
                      "text:orange": _vm.$route.path === "/flexbox/direction"
                    },
                    attrs: { tag: "span", to: "/flexbox/direction" }
                  },
                  [_vm._v("Direction")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:1",
                    class: {
                      "text:orange": _vm.$route.path === "/flexbox/wrap"
                    },
                    attrs: { tag: "span", to: "/flexbox/wrap" }
                  },
                  [_vm._v("Wrap")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:1",
                    class: {
                      "text:orange":
                        _vm.$route.path === "/flexbox/justify-content"
                    },
                    attrs: { tag: "span", to: "/flexbox/justify-content" }
                  },
                  [_vm._v("Justify Content")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:1",
                    class: {
                      "text:orange": _vm.$route.path === "/flexbox/align-items"
                    },
                    attrs: { tag: "span", to: "/flexbox/align-items" }
                  },
                  [_vm._v("Align Items")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:1",
                    class: {
                      "text:orange":
                        _vm.$route.path === "/flexbox/align-content"
                    },
                    attrs: { tag: "span", to: "/flexbox/align-content" }
                  },
                  [_vm._v("Align Content")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:1",
                    class: {
                      "text:orange": _vm.$route.path === "/flexbox/order"
                    },
                    attrs: { tag: "span", to: "/flexbox/order" }
                  },
                  [_vm._v("Order")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:1",
                    class: {
                      "text:orange": _vm.$route.path === "/flexbox/align-self"
                    },
                    attrs: { tag: "span", to: "/flexbox/align-self" }
                  },
                  [_vm._v("Align Self")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:1",
                    class: {
                      "text:orange": _vm.$route.path === "/flexbox/flex"
                    },
                    attrs: { tag: "span", to: "/flexbox/flex" }
                  },
                  [_vm._v("Flex")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:1",
                    class: {
                      "text:orange": _vm.$route.path === "/flexbox/flex-grow"
                    },
                    attrs: { tag: "span", to: "/flexbox/flex-grow" }
                  },
                  [_vm._v("Flex Grow")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:1",
                    class: {
                      "text:orange": _vm.$route.path === "/flexbox/flex-shrink"
                    },
                    attrs: { tag: "span", to: "/flexbox/flex-shrink" }
                  },
                  [_vm._v("Flex Shrink")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "cursor:pointer text:bold px:1",
                    class: {
                      "text:orange": _vm.$route.path === "/flexbox/flex-basic"
                    },
                    attrs: { tag: "span", to: "/flexbox/flex-basic" }
                  },
                  [_vm._v("Flex Basic")]
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

/***/ "./src/pages/utils/Flexbox.vue":
/*!*************************************!*\
  !*** ./src/pages/utils/Flexbox.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Flexbox_vue_vue_type_template_id_27c96de0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flexbox.vue?vue&type=template&id=27c96de0& */ "./src/pages/utils/Flexbox.vue?vue&type=template&id=27c96de0&");
/* harmony import */ var _Flexbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Flexbox.vue?vue&type=script&lang=js& */ "./src/pages/utils/Flexbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Flexbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Flexbox_vue_vue_type_template_id_27c96de0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Flexbox_vue_vue_type_template_id_27c96de0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/utils/Flexbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/utils/Flexbox.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/pages/utils/Flexbox.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Flexbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./Flexbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Flexbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Flexbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/utils/Flexbox.vue?vue&type=template&id=27c96de0&":
/*!********************************************************************!*\
  !*** ./src/pages/utils/Flexbox.vue?vue&type=template&id=27c96de0& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Flexbox_vue_vue_type_template_id_27c96de0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Flexbox.vue?vue&type=template&id=27c96de0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/utils/Flexbox.vue?vue&type=template&id=27c96de0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Flexbox_vue_vue_type_template_id_27c96de0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Flexbox_vue_vue_type_template_id_27c96de0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);