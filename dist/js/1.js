(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/MemberContainer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MemberContainer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n  data: function data() {\n    return {};\n  },\n\n  inject: [\"changeBadge\"],\n  mounted: function mounted() {\n    window.scrollTo(0, 0);\n    // this.$emit(\"change-title\", \"会员中心\");\n    this.$emit(\"change-title\", \"关于\");\n    // 左右滑动切换页面\n    this.initSwiper();\n\n    // 消除footer中的徽章个数\n    this.changeBadge(\"about\", 0);\n  },\n\n  methods: {\n    initSwiper: function initSwiper() {\n      var _this = this;\n\n      // 设备宽度\n      var deviceWidth = document.documentElement.clientWidth;\n      var wrapper = document.querySelector(\".member-container\");\n\n      var start = 0;\n      var move = 0;\n      var distance = 0;\n      var isMove = false;\n      wrapper.addEventListener(\"touchstart\", function (e) {\n        start = e.touches[0].clientX;\n      });\n\n      wrapper.addEventListener(\"touchmove\", function (e) {\n        isMove = true;\n        move = e.touches[0].clientX;\n        distance = move - start;\n\n        wrapper.style.transition = \"left 0s\";\n        wrapper.style.left = distance + \"px\";\n      });\n\n      wrapper.addEventListener(\"touchend\", function (e) {\n        if (isMove) {\n          if (distance >= deviceWidth / 3) {\n            wrapper.style.display = \"none\";\n            _this.$emit(\"change-translate\", \"fade\");\n            _this.$router.push(\"/home\");\n          } else if (-distance >= deviceWidth / 3) {\n            wrapper.style.display = \"none\";\n            _this.$emit(\"change-translate\", \"fade\");\n            _this.$router.push(\"/cart\");\n          } else {\n            // 弹回去\n            wrapper.style.transition = \"left 0.1s ease\";\n            wrapper.style.left = 0 + \"px\";\n            setTimeout(function () {\n              wrapper.style.transition = \"all 0.5s ease\";\n            }, 100);\n          }\n          isMove = false;\n        }\n        start = move = distance = 0;\n      });\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/components/MemberContainer.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/MemberContainer.vue?vue&type=style&index=0&id=75309d87&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MemberContainer.vue?vue&type=style&index=0&id=75309d87&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.mui-card-media[data-v-75309d87] {\\n  height: 40vw;\\n  background-size: cover;\\n}\\n.text[data-v-75309d87] {\\n  color: #333;\\n  font-size: 16px;\\n  text-indent: 1em;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/MemberContainer.vue?./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/MemberContainer.vue?vue&type=style&index=0&id=75309d87&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MemberContainer.vue?vue&type=style&index=0&id=75309d87&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./MemberContainer.vue?vue&type=style&index=0&id=75309d87&lang=scss&scoped=true& */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/MemberContainer.vue?vue&type=style&index=0&id=75309d87&lang=scss&scoped=true&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/MemberContainer.vue?./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MemberContainer.vue?vue&type=template&id=75309d87&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MemberContainer.vue?vue&type=template&id=75309d87&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"member-container\" }, [\n    _c(\"div\", { staticClass: \"mui-card\" }, [\n      _c(\"div\", {\n        staticClass: \"mui-card-header mui-card-media\",\n        style: {\n          backgroundImage: \"url(\" + __webpack_require__(/*! ../image/milkyway4.jpg */ \"./src/image/milkyway4.jpg\") + \")\"\n        }\n      }),\n      _vm._v(\" \"),\n      _vm._m(0)\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"mui-card\" }, [\n      _c(\"div\", {\n        staticClass: \"mui-card-header mui-card-media\",\n        style: {\n          backgroundImage: \"url(\" + __webpack_require__(/*! ../image/milkyway3.jpg */ \"./src/image/milkyway3.jpg\") + \")\"\n        }\n      }),\n      _vm._v(\" \"),\n      _vm._m(1)\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"mui-card-content\" }, [\n      _c(\"div\", { staticClass: \"mui-card-content-inner\" }, [\n        _c(\"p\", [\n          _c(\"a\", { attrs: { href: \"https://logicadi.gitee.io/web\" } }, [\n            _vm._v(\"@luokai\")\n          ]),\n          _vm._v(\" 发表于：1970-1-1 08:00\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"p\", { staticClass: \"text\" }, [\n          _vm._v(\"\\n          使用的是Vue.js + MUI做的\\n          \"),\n          _c(\n            \"a\",\n            {\n              attrs: {\n                href: \"https://baike.baidu.com/item/SPA/17536313?fr=aladdin\"\n              }\n            },\n            [_vm._v(\"单页面web\")]\n          ),\n          _vm._v(\"。\\n        \")\n        ])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"mui-card-content\" }, [\n      _c(\"div\", { staticClass: \"mui-card-content-inner\" }, [\n        _c(\"p\", [\n          _c(\"a\", { attrs: { href: \"https://logicadi.gitee.io/web\" } }, [\n            _vm._v(\"@luokai\")\n          ]),\n          _vm._v(\" 发表于：1970-1-1 08:00\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"p\", { staticClass: \"text\" }, [\n          _vm._v(\n            \"\\n      \\n         发现生命中的美好，保持一颗积极乐观的心，努力追逐属于自己的幸福。\\n        \"\n          )\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/MemberContainer.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/MemberContainer.vue":
/*!********************************************!*\
  !*** ./src/components/MemberContainer.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MemberContainer_vue_vue_type_template_id_75309d87_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemberContainer.vue?vue&type=template&id=75309d87&scoped=true& */ \"./src/components/MemberContainer.vue?vue&type=template&id=75309d87&scoped=true&\");\n/* harmony import */ var _MemberContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemberContainer.vue?vue&type=script&lang=js& */ \"./src/components/MemberContainer.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MemberContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MemberContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _MemberContainer_vue_vue_type_style_index_0_id_75309d87_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MemberContainer.vue?vue&type=style&index=0&id=75309d87&lang=scss&scoped=true& */ \"./src/components/MemberContainer.vue?vue&type=style&index=0&id=75309d87&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _MemberContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _MemberContainer_vue_vue_type_template_id_75309d87_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _MemberContainer_vue_vue_type_template_id_75309d87_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"75309d87\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src\\\\components\\\\MemberContainer.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/MemberContainer.vue?");

/***/ }),

/***/ "./src/components/MemberContainer.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/components/MemberContainer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./MemberContainer.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/MemberContainer.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/MemberContainer.vue?");

/***/ }),

/***/ "./src/components/MemberContainer.vue?vue&type=style&index=0&id=75309d87&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/components/MemberContainer.vue?vue&type=style&index=0&id=75309d87&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberContainer_vue_vue_type_style_index_0_id_75309d87_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./MemberContainer.vue?vue&type=style&index=0&id=75309d87&lang=scss&scoped=true& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/MemberContainer.vue?vue&type=style&index=0&id=75309d87&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberContainer_vue_vue_type_style_index_0_id_75309d87_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberContainer_vue_vue_type_style_index_0_id_75309d87_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberContainer_vue_vue_type_style_index_0_id_75309d87_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberContainer_vue_vue_type_style_index_0_id_75309d87_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberContainer_vue_vue_type_style_index_0_id_75309d87_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/MemberContainer.vue?");

/***/ }),

/***/ "./src/components/MemberContainer.vue?vue&type=template&id=75309d87&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/components/MemberContainer.vue?vue&type=template&id=75309d87&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberContainer_vue_vue_type_template_id_75309d87_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./MemberContainer.vue?vue&type=template&id=75309d87&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MemberContainer.vue?vue&type=template&id=75309d87&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberContainer_vue_vue_type_template_id_75309d87_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberContainer_vue_vue_type_template_id_75309d87_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/MemberContainer.vue?");

/***/ }),

/***/ "./src/image/milkyway3.jpg":
/*!*********************************!*\
  !*** ./src/image/milkyway3.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"milkyway3.jpg\";\n\n//# sourceURL=webpack:///./src/image/milkyway3.jpg?");

/***/ }),

/***/ "./src/image/milkyway4.jpg":
/*!*********************************!*\
  !*** ./src/image/milkyway4.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"milkyway4.jpg\";\n\n//# sourceURL=webpack:///./src/image/milkyway4.jpg?");

/***/ })

}]);