(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SettingAboutFeedback.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SettingAboutFeedback.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n  created: function created() {\n    this.$emit(\"change-title\", \"反馈\");\n  },\n  data: function data() {\n    return {\n      imgList: []\n    };\n  },\n\n  methods: {\n    fileChange: function fileChange(el) {\n      console.log(el.target.files);\n      if (!el.target.files[0].size) return;\n      this.fileList(el.target);\n      el.target.value = \"\";\n    },\n    fileList: function fileList(_fileList) {\n      var files = _fileList.files;\n      for (var i = 0; i < files.length; i++) {\n        this.fileAdd(files[i]);\n      }\n    },\n    fileAdd: function fileAdd(file) {\n      var reader = new FileReader();\n      // 使用FileReader读取File\n      reader.readAsDataURL(file);\n      // 读取完成事件\n      reader.vue = this;\n      reader.onload = function () {\n        file.src = this.result;\n        this.vue.imgList.push({\n          file: file\n        });\n      };\n    },\n    fileDel: function fileDel(index) {\n      this.imgList.splice(index, 1);\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/components/SettingAboutFeedback.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/SettingAboutFeedback.vue?vue&type=style&index=0&id=1d1b44f2&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SettingAboutFeedback.vue?vue&type=style&index=0&id=1d1b44f2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.feedback .image-list[data-v-1d1b44f2] {\\n  height: auto;\\n}\\n.feedback .image-list .image-item[data-v-1d1b44f2] {\\n    margin-bottom: 0;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/SettingAboutFeedback.vue?./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/SettingAboutFeedback.vue?vue&type=style&index=0&id=1d1b44f2&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SettingAboutFeedback.vue?vue&type=style&index=0&id=1d1b44f2&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./SettingAboutFeedback.vue?vue&type=style&index=0&id=1d1b44f2&lang=scss&scoped=true& */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/SettingAboutFeedback.vue?vue&type=style&index=0&id=1d1b44f2&lang=scss&scoped=true&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/SettingAboutFeedback.vue?./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SettingAboutFeedback.vue?vue&type=template&id=1d1b44f2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SettingAboutFeedback.vue?vue&type=template&id=1d1b44f2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"setting-about-feedback\" }, [\n    _c(\n      \"div\",\n      {\n        staticClass: \"mui-page feedback mui-page-center\",\n        attrs: { id: \"feedback\" }\n      },\n      [\n        _c(\"div\", { staticClass: \"mui-page-content\" }, [\n          _c(\"p\", [_vm._v(\"问题和意见\")]),\n          _vm._v(\" \"),\n          _vm._m(0),\n          _vm._v(\" \"),\n          _c(\"p\", [_vm._v(\"图片(选填,提供问题截图)\")]),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            { staticClass: \"row image-list\", attrs: { id: \"image-list\" } },\n            [\n              _vm._l(_vm.imgList, function(item, index) {\n                return _c(\n                  \"div\",\n                  {\n                    key: item.file.src,\n                    staticClass: \"image-item\",\n                    style: { backgroundImage: \"url(\" + item.file.src + \")\" }\n                  },\n                  [\n                    _c(\n                      \"div\",\n                      {\n                        staticClass: \"image-close\",\n                        on: {\n                          click: function($event) {\n                            _vm.fileDel(index)\n                          }\n                        }\n                      },\n                      [_vm._v(\"X\")]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\"input\", {\n                      attrs: { type: \"file\", accept: \"image/*\", multiple: \"\" },\n                      on: {\n                        change: function($event) {\n                          _vm.fileChange($event)\n                        }\n                      }\n                    })\n                  ]\n                )\n              }),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"image-item space\" }, [\n                _c(\"div\", { staticClass: \"image-close\" }, [_vm._v(\"X\")]),\n                _vm._v(\" \"),\n                _c(\"input\", {\n                  attrs: { type: \"file\", accept: \"image/*\", multiple: \"\" },\n                  on: {\n                    change: function($event) {\n                      _vm.fileChange($event)\n                    }\n                  }\n                })\n              ])\n            ],\n            2\n          ),\n          _vm._v(\" \"),\n          _c(\"p\", [_vm._v(\"QQ/邮箱\")]),\n          _vm._v(\" \"),\n          _vm._m(1),\n          _vm._v(\" \"),\n          _c(\n            \"button\",\n            {\n              staticClass: \"mui-btn mui-btn-green\",\n              attrs: { id: \"submit\", type: \"button\" }\n            },\n            [_vm._v(\"提交\")]\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"p\", [\n          _vm._v(\n            \"此示例基于环信 “WebIM SDK” + 环信 “移动客服” 实现，在环信 “移动客服面板” 能够查阅反馈信息。\"\n          )\n        ])\n      ]\n    )\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"row mui-input-row\" }, [\n      _c(\"textarea\", {\n        staticClass: \"mui-input-clear question\",\n        attrs: { id: \"question\", placeholder: \"请详细描述你的问题和意见...\" }\n      })\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"mui-input-row\" }, [\n      _c(\"input\", {\n        staticClass: \"mui-input-clear  contact\",\n        attrs: {\n          id: \"contact\",\n          type: \"text\",\n          placeholder: \"(选填,方便我们联系你 )\",\n          \"data-input-clear\": \"19\"\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"mui-icon mui-icon-clear mui-hidden\" })\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/SettingAboutFeedback.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/SettingAboutFeedback.vue":
/*!*************************************************!*\
  !*** ./src/components/SettingAboutFeedback.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SettingAboutFeedback_vue_vue_type_template_id_1d1b44f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingAboutFeedback.vue?vue&type=template&id=1d1b44f2&scoped=true& */ \"./src/components/SettingAboutFeedback.vue?vue&type=template&id=1d1b44f2&scoped=true&\");\n/* harmony import */ var _SettingAboutFeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingAboutFeedback.vue?vue&type=script&lang=js& */ \"./src/components/SettingAboutFeedback.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SettingAboutFeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SettingAboutFeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _SettingAboutFeedback_vue_vue_type_style_index_0_id_1d1b44f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingAboutFeedback.vue?vue&type=style&index=0&id=1d1b44f2&lang=scss&scoped=true& */ \"./src/components/SettingAboutFeedback.vue?vue&type=style&index=0&id=1d1b44f2&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _SettingAboutFeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _SettingAboutFeedback_vue_vue_type_template_id_1d1b44f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _SettingAboutFeedback_vue_vue_type_template_id_1d1b44f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1d1b44f2\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src\\\\components\\\\SettingAboutFeedback.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/SettingAboutFeedback.vue?");

/***/ }),

/***/ "./src/components/SettingAboutFeedback.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/components/SettingAboutFeedback.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingAboutFeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./SettingAboutFeedback.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SettingAboutFeedback.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingAboutFeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingAboutFeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingAboutFeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingAboutFeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingAboutFeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/SettingAboutFeedback.vue?");

/***/ }),

/***/ "./src/components/SettingAboutFeedback.vue?vue&type=style&index=0&id=1d1b44f2&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./src/components/SettingAboutFeedback.vue?vue&type=style&index=0&id=1d1b44f2&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingAboutFeedback_vue_vue_type_style_index_0_id_1d1b44f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./SettingAboutFeedback.vue?vue&type=style&index=0&id=1d1b44f2&lang=scss&scoped=true& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/SettingAboutFeedback.vue?vue&type=style&index=0&id=1d1b44f2&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingAboutFeedback_vue_vue_type_style_index_0_id_1d1b44f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingAboutFeedback_vue_vue_type_style_index_0_id_1d1b44f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingAboutFeedback_vue_vue_type_style_index_0_id_1d1b44f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingAboutFeedback_vue_vue_type_style_index_0_id_1d1b44f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingAboutFeedback_vue_vue_type_style_index_0_id_1d1b44f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/SettingAboutFeedback.vue?");

/***/ }),

/***/ "./src/components/SettingAboutFeedback.vue?vue&type=template&id=1d1b44f2&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/components/SettingAboutFeedback.vue?vue&type=template&id=1d1b44f2&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingAboutFeedback_vue_vue_type_template_id_1d1b44f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./SettingAboutFeedback.vue?vue&type=template&id=1d1b44f2&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SettingAboutFeedback.vue?vue&type=template&id=1d1b44f2&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingAboutFeedback_vue_vue_type_template_id_1d1b44f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingAboutFeedback_vue_vue_type_template_id_1d1b44f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/SettingAboutFeedback.vue?");

/***/ })

}]);