/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"questionnaire": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/question-graph/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([4,"chunk-vendors","chunk-common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/questionnaire/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/questionnaire/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_taylor_tenx_question_graph_ecommerce_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_taylor_tenx_question_graph_ecommerce_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _graph_benefitsGraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graph/benefitsGraph */ \"./src/graph/benefitsGraph.js\");\n/* harmony import */ var _graph_benefitsGraph__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_graph_benefitsGraph__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"App\",\n  data: function data() {\n    return {\n      ui: {},\n      data: {},\n      loading: true,\n      insertionOrder: []\n    };\n  },\n  props: {\n    msg: String\n  },\n  computed: {\n    currentQuestion: function currentQuestion() {\n      return _graph_benefitsGraph__WEBPACK_IMPORTED_MODULE_3__[\"questionGraph\"].getNextQuestion(this.data);\n    },\n    possibleResults: function possibleResults() {\n      return _graph_benefitsGraph__WEBPACK_IMPORTED_MODULE_3__[\"questionGraph\"].getPossibleResults(this.data);\n    },\n    futureQuestions: function futureQuestions() {\n      return _graph_benefitsGraph__WEBPACK_IMPORTED_MODULE_3__[\"questionGraph\"].getRemainingQuestions(this.ui);\n    },\n    futureResults: function futureResults() {\n      return _graph_benefitsGraph__WEBPACK_IMPORTED_MODULE_3__[\"questionGraph\"].getPossibleResults(this.ui);\n    }\n  },\n  methods: {\n    addAnswer: function addAnswer(questionId, answer) {\n      var newData = Object(_Users_taylor_tenx_question_graph_ecommerce_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_Users_taylor_tenx_question_graph_ecommerce_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, this.data), {}, Object(_Users_taylor_tenx_question_graph_ecommerce_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, questionId, answer));\n\n      this.data = newData;\n      this.ui = Object(_Users_taylor_tenx_question_graph_ecommerce_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, newData);\n      this.insertionOrder.push(questionId);\n    },\n    clearAnswer: function clearAnswer(questionId) {\n      var newData = Object(_Users_taylor_tenx_question_graph_ecommerce_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, this.data);\n\n      delete newData[questionId];\n      this.data = newData;\n      this.ui = Object(_Users_taylor_tenx_question_graph_ecommerce_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, newData);\n      var found = this.insertionOrder.indexOf(questionId);\n\n      if (found !== -1) {\n        this.insertionOrder = this.insertionOrder.slice(found, 1);\n      }\n    },\n    updateAnswer: function updateAnswer(questionId, emptyValue) {\n      var answer = this.ui[questionId] || emptyValue;\n      this.clearAnswer(questionId);\n      this.addAnswer(questionId, answer);\n    },\n    toggleData: function toggleData(questionId, choice) {\n      this.ui[questionId] = Object(_Users_taylor_tenx_question_graph_ecommerce_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, this.ui[questionId] || {});\n      this.ui[questionId][choice] = !this.ui[questionId][choice];\n      this.ui = Object(_Users_taylor_tenx_question_graph_ecommerce_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, this.ui);\n    },\n    goBack: function goBack() {\n      if (this.insertionOrder.length) {\n        var questionId = this.insertionOrder.pop();\n        this.clearAnswer(questionId);\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/pages/questionnaire/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"121e48b9-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/questionnaire/App.vue?vue&type=template&id=b454c97e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"121e48b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/questionnaire/App.vue?vue&type=template&id=b454c97e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"grid-container\" }, [\n    _c(\"div\", { staticClass: \"grid-row\" }, [\n      _c(\"div\", { staticClass: \"grid-offset-3 grid-col-6 margin-y-2\" }, [\n        _vm.currentQuestion\n          ? _c(\"div\", { attrs: { id: \"questions\" } }, [\n              _c(\"h2\", [_vm._v(\"Questions\")]),\n              _c(\"div\", { staticClass: \"margin-y-1\" }, [\n                _vm._v(_vm._s(_vm.currentQuestion.question.question))\n              ]),\n              _vm.currentQuestion.question.type === \"number\"\n                ? _c(\"div\", [\n                    _c(\"input\", {\n                      directives: [\n                        {\n                          name: \"model\",\n                          rawName: \"v-model.number\",\n                          value: _vm.ui[_vm.currentQuestion.questionId],\n                          expression: \"ui[currentQuestion.questionId]\",\n                          modifiers: { number: true }\n                        }\n                      ],\n                      staticClass: \"usa-input margin-y-05\",\n                      attrs: {\n                        type: \"text\",\n                        id:\n                          \"remainingQuestions-checkbox-\" +\n                          _vm.currentQuestion.questionId\n                      },\n                      domProps: {\n                        value: _vm.ui[_vm.currentQuestion.questionId]\n                      },\n                      on: {\n                        input: function($event) {\n                          if ($event.target.composing) {\n                            return\n                          }\n                          _vm.$set(\n                            _vm.ui,\n                            _vm.currentQuestion.questionId,\n                            _vm._n($event.target.value)\n                          )\n                        },\n                        blur: function($event) {\n                          return _vm.$forceUpdate()\n                        }\n                      }\n                    })\n                  ])\n                : _vm.currentQuestion.question.type === \"multi-choice\"\n                ? _c(\n                    \"div\",\n                    _vm._l(_vm.currentQuestion.question.choice, function(\n                      choice,\n                      index\n                    ) {\n                      return _c(\n                        \"div\",\n                        { key: choice, staticClass: \"usa-checkbox\" },\n                        [\n                          _c(\"input\", {\n                            staticClass: \"usa-checkbox__input\",\n                            attrs: {\n                              type: \"checkbox\",\n                              id:\n                                \"remainingQuestions-checkbox-\" +\n                                _vm.questionIndex +\n                                \"-\" +\n                                index\n                            },\n                            domProps: {\n                              checked:\n                                _vm.ui[_vm.currentQuestion.questionId] &&\n                                _vm.ui[_vm.currentQuestion.questionId][choice]\n                            },\n                            on: {\n                              click: function($event) {\n                                return _vm.toggleData(\n                                  _vm.currentQuestion.questionId,\n                                  choice\n                                )\n                              }\n                            }\n                          }),\n                          _c(\n                            \"label\",\n                            {\n                              staticClass: \"usa-checkbox__label\",\n                              attrs: {\n                                for:\n                                  \"remainingQuestions-checkbox-\" +\n                                  _vm.questionIndex +\n                                  \"-\" +\n                                  index\n                              }\n                            },\n                            [_vm._v(_vm._s(choice))]\n                          )\n                        ]\n                      )\n                    }),\n                    0\n                  )\n                : _vm.currentQuestion.question.type === \"choice\"\n                ? _c(\n                    \"div\",\n                    _vm._l(_vm.currentQuestion.question.choice, function(\n                      choice,\n                      index\n                    ) {\n                      return _c(\n                        \"div\",\n                        { key: choice, staticClass: \"usa-radio\" },\n                        [\n                          _c(\"input\", {\n                            directives: [\n                              {\n                                name: \"model\",\n                                rawName: \"v-model\",\n                                value: _vm.ui[_vm.currentQuestion.questionId],\n                                expression: \"ui[currentQuestion.questionId]\"\n                              }\n                            ],\n                            staticClass: \"usa-radio__input\",\n                            attrs: {\n                              type: \"radio\",\n                              id:\n                                \"remainingQuestions-radio-\" +\n                                _vm.questionIndex +\n                                \"-\" +\n                                index\n                            },\n                            domProps: {\n                              value: choice,\n                              checked: _vm._q(\n                                _vm.ui[_vm.currentQuestion.questionId],\n                                choice\n                              )\n                            },\n                            on: {\n                              change: function($event) {\n                                return _vm.$set(\n                                  _vm.ui,\n                                  _vm.currentQuestion.questionId,\n                                  choice\n                                )\n                              }\n                            }\n                          }),\n                          _c(\n                            \"label\",\n                            {\n                              staticClass: \"usa-radio__label\",\n                              attrs: {\n                                for:\n                                  \"remainingQuestions-radio-\" +\n                                  _vm.questionIndex +\n                                  \"-\" +\n                                  index\n                              }\n                            },\n                            [_vm._v(_vm._s(choice))]\n                          )\n                        ]\n                      )\n                    }),\n                    0\n                  )\n                : _c(\"div\", [\n                    _c(\"div\", { staticClass: \"usa-radio\" }, [\n                      _c(\"input\", {\n                        directives: [\n                          {\n                            name: \"model\",\n                            rawName: \"v-model\",\n                            value: _vm.ui[_vm.currentQuestion.questionId],\n                            expression: \"ui[currentQuestion.questionId]\"\n                          }\n                        ],\n                        staticClass: \"usa-radio__input\",\n                        attrs: {\n                          type: \"radio\",\n                          id:\n                            \"remainingQuestions-radio-\" +\n                            _vm.questionIndex +\n                            \"-yes\"\n                        },\n                        domProps: {\n                          value: true,\n                          checked: _vm._q(\n                            _vm.ui[_vm.currentQuestion.questionId],\n                            true\n                          )\n                        },\n                        on: {\n                          change: function($event) {\n                            return _vm.$set(\n                              _vm.ui,\n                              _vm.currentQuestion.questionId,\n                              true\n                            )\n                          }\n                        }\n                      }),\n                      _c(\n                        \"label\",\n                        {\n                          staticClass: \"usa-radio__label\",\n                          attrs: {\n                            for:\n                              \"remainingQuestions-radio-\" +\n                              _vm.questionIndex +\n                              \"-yes\"\n                          }\n                        },\n                        [_vm._v(\"Yes\")]\n                      )\n                    ]),\n                    _c(\"div\", { staticClass: \"usa-radio\" }, [\n                      _c(\"input\", {\n                        directives: [\n                          {\n                            name: \"model\",\n                            rawName: \"v-model\",\n                            value: _vm.ui[_vm.currentQuestion.questionId],\n                            expression: \"ui[currentQuestion.questionId]\"\n                          }\n                        ],\n                        staticClass: \"usa-radio__input\",\n                        attrs: {\n                          type: \"radio\",\n                          id:\n                            \"remainingQuestions-radio-\" +\n                            _vm.questionIndex +\n                            \"-no\"\n                        },\n                        domProps: {\n                          value: false,\n                          checked: _vm._q(\n                            _vm.ui[_vm.currentQuestion.questionId],\n                            false\n                          )\n                        },\n                        on: {\n                          change: function($event) {\n                            return _vm.$set(\n                              _vm.ui,\n                              _vm.currentQuestion.questionId,\n                              false\n                            )\n                          }\n                        }\n                      }),\n                      _c(\n                        \"label\",\n                        {\n                          staticClass: \"usa-radio__label\",\n                          attrs: {\n                            for:\n                              \"remainingQuestions-radio-\" +\n                              _vm.questionIndex +\n                              \"-no\"\n                          }\n                        },\n                        [_vm._v(\"No\")]\n                      )\n                    ])\n                  ])\n            ])\n          : _c(\"div\", [\n              _c(\"h2\", [\n                _vm._v(\"Benefits (\" + _vm._s(_vm.possibleResults.length) + \")\")\n              ]),\n              _vm.possibleResults.length\n                ? _c(\n                    \"div\",\n                    _vm._l(_vm.possibleResults, function(result) {\n                      return _c(\n                        \"div\",\n                        {\n                          key: result.resultId,\n                          staticClass: \"usa-card margin-y-1\"\n                        },\n                        [\n                          _c(\"div\", { staticClass: \"usa-card__container\" }, [\n                            _c(\"header\", { staticClass: \"usa-card__header\" }, [\n                              _c(\"h2\", { staticClass: \"usa-card__heading\" }, [\n                                _vm._v(_vm._s(result.result.data.name))\n                              ])\n                            ]),\n                            result.result.data.description\n                              ? _c(\"div\", { staticClass: \"usa-card__body\" }, [\n                                  _c(\"p\", [\n                                    _vm._v(\n                                      _vm._s(result.result.data.description)\n                                    )\n                                  ])\n                                ])\n                              : _vm._e(),\n                            result.result.data.url\n                              ? _c(\"div\", { staticClass: \"usa-card__footer\" }, [\n                                  _c(\n                                    \"a\",\n                                    {\n                                      staticClass: \"usa-button\",\n                                      attrs: {\n                                        href: result.result.data.url,\n                                        target: \"_blank\"\n                                      }\n                                    },\n                                    [_vm._v(\"Learn More\")]\n                                  )\n                                ])\n                              : _vm._e()\n                          ])\n                        ]\n                      )\n                    }),\n                    0\n                  )\n                : _c(\"div\", [_vm._v(\"No have no results\")])\n            ])\n      ])\n    ]),\n    _c(\"div\", { staticClass: \"grid-row\" }, [\n      _c(\"div\", { staticClass: \"grid-offset-3 grid-col-6 margin-y-2\" }, [\n        _c(\"ul\", { staticClass: \"usa-button-group\" }, [\n          _c(\"li\", { staticClass: \"usa-button-group__item\" }, [\n            _c(\n              \"button\",\n              {\n                staticClass: \"usa-button usa-button--outline\",\n                attrs: { disabled: !_vm.insertionOrder.length },\n                on: {\n                  click: function($event) {\n                    return _vm.goBack()\n                  }\n                }\n              },\n              [_vm._v(\"Back\")]\n            )\n          ]),\n          _vm.currentQuestion\n            ? _c(\"li\", { staticClass: \"usa-button-group__item\" }, [\n                _c(\n                  \"button\",\n                  {\n                    staticClass: \"usa-button\",\n                    attrs: {\n                      disabled: _vm.ui[_vm.currentQuestion.questionId] == null\n                    },\n                    on: {\n                      click: function($event) {\n                        return _vm.updateAnswer(\n                          _vm.currentQuestion.questionId,\n                          _vm.currentQuestion.question.type ===\n                            \"multi-choice\" && {}\n                        )\n                      }\n                    }\n                  },\n                  [_vm._v(\"Next\")]\n                )\n              ])\n            : _vm._e()\n        ])\n      ])\n    ]),\n    _vm.currentQuestion\n      ? _c(\"div\", { staticClass: \"grid-row\" }, [\n          _c(\"div\", { staticClass: \"grid-offset-3 grid-col-6 margin-y-2\" }, [\n            _c(\"h4\", [\n              _vm._v(_vm._s(_vm.futureResults.length) + \" possible results\")\n            ]),\n            _c(\"h4\", [\n              _vm._v(\n                _vm._s(\n                  _vm.futureQuestions.length -\n                    (_vm.ui[_vm.currentQuestion.questionId] == null ? 1 : 0)\n                ) + \" remaining questions\"\n              )\n            ])\n          ])\n        ])\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/pages/questionnaire/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22121e48b9-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/pages/questionnaire/App.vue":
/*!*****************************************!*\
  !*** ./src/pages/questionnaire/App.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_b454c97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=b454c97e&scoped=true& */ \"./src/pages/questionnaire/App.vue?vue&type=template&id=b454c97e&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/pages/questionnaire/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_b454c97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_b454c97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"b454c97e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/pages/questionnaire/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/pages/questionnaire/App.vue?");

/***/ }),

/***/ "./src/pages/questionnaire/App.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/pages/questionnaire/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/questionnaire/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/pages/questionnaire/App.vue?");

/***/ }),

/***/ "./src/pages/questionnaire/App.vue?vue&type=template&id=b454c97e&scoped=true&":
/*!************************************************************************************!*\
  !*** ./src/pages/questionnaire/App.vue?vue&type=template&id=b454c97e&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_121e48b9_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b454c97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"121e48b9-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=b454c97e&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"121e48b9-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/questionnaire/App.vue?vue&type=template&id=b454c97e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_121e48b9_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b454c97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_121e48b9_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b454c97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/pages/questionnaire/App.vue?");

/***/ }),

/***/ "./src/pages/questionnaire/main.js":
/*!*****************************************!*\
  !*** ./src/pages/questionnaire/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_taylor_tenx_question_graph_ecommerce_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _Users_taylor_tenx_question_graph_ecommerce_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_taylor_tenx_question_graph_ecommerce_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_taylor_tenx_question_graph_ecommerce_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _Users_taylor_tenx_question_graph_ecommerce_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_taylor_tenx_question_graph_ecommerce_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_taylor_tenx_question_graph_ecommerce_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _Users_taylor_tenx_question_graph_ecommerce_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_taylor_tenx_question_graph_ecommerce_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_taylor_tenx_question_graph_ecommerce_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _Users_taylor_tenx_question_graph_ecommerce_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_taylor_tenx_question_graph_ecommerce_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ \"./src/pages/questionnaire/App.vue\");\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config.productionTip = false;\nnew vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  }\n}).$mount('#app');\n\n//# sourceURL=webpack:///./src/pages/questionnaire/main.js?");

/***/ }),

/***/ 4:
/*!***********************************************!*\
  !*** multi ./src/pages/questionnaire/main.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/taylor/tenx/question-graph/ecommerce/src/pages/questionnaire/main.js */\"./src/pages/questionnaire/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/pages/questionnaire/main.js?");

/***/ })

/******/ });