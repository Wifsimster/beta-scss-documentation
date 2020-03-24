/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
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
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "static/js/" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fonts_Montserrat_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fonts/Montserrat/style.css */ "./static/fonts/Montserrat/style.css");
/* harmony import */ var fonts_Montserrat_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fonts_Montserrat_style_css__WEBPACK_IMPORTED_MODULE_2__);



var ComHeader = function ComHeader() {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! components/Header.vue */ "./src/components/Header.vue"));
};

var ComSidebar = function ComSidebar() {
  return __webpack_require__.e(/*! import() */ 43).then(__webpack_require__.bind(null, /*! components/Sidebar.vue */ "./src/components/Sidebar.vue"));
};


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ComHeader: ComHeader,
    ComSidebar: ComSidebar
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ios.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var macrotask = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-promise-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "./node_modules/core-js/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "./node_modules/core-js/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-multiselect/dist/vue-multiselect.min.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-multiselect/dist/vue-multiselect.min.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\nfieldset[disabled] .multiselect {\n  pointer-events: none;\n}\n\n.multiselect__spinner {\n  position: absolute;\n  right: 1px;\n  top: 1px;\n  width: 48px;\n  height: 35px;\n  background: #fff;\n  display: block;\n}\n\n.multiselect__spinner:after, .multiselect__spinner:before {\n  position: absolute;\n  content: \"\";\n  top: 50%;\n  left: 50%;\n  margin: -8px 0 0 -8px;\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n  border: 2px solid transparent;\n  border-top-color: #41b883;\n  box-shadow: 0 0 0 1px transparent;\n}\n\n.multiselect__spinner:before {\n  animation: spinning 2.4s cubic-bezier(0.41, 0.26, 0.2, 0.62);\n  animation-iteration-count: infinite;\n}\n\n.multiselect__spinner:after {\n  animation: spinning 2.4s cubic-bezier(0.51, 0.09, 0.21, 0.8);\n  animation-iteration-count: infinite;\n}\n\n.multiselect__loading-enter-active, .multiselect__loading-leave-active {\n  transition: opacity 0.4s ease-in-out;\n  opacity: 1;\n}\n\n.multiselect__loading-enter, .multiselect__loading-leave-active {\n  opacity: 0;\n}\n\n.multiselect, .multiselect__input, .multiselect__single {\n  font-family: inherit;\n  font-size: 16px;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n}\n\n.multiselect {\n  box-sizing: content-box;\n  display: block;\n  position: relative;\n  width: 100%;\n  min-height: 40px;\n  text-align: left;\n  color: #35495e;\n}\n\n.multiselect * {\n  box-sizing: border-box;\n}\n\n.multiselect:focus {\n  outline: none;\n}\n\n.multiselect--disabled {\n  background: #ededed;\n  pointer-events: none;\n  opacity: 0.6;\n}\n\n.multiselect--active {\n  z-index: 50;\n}\n\n.multiselect--active:not(.multiselect--above) .multiselect__current, .multiselect--active:not(.multiselect--above) .multiselect__input, .multiselect--active:not(.multiselect--above) .multiselect__tags {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.multiselect--active .multiselect__select {\n  transform: rotate(180deg);\n}\n\n.multiselect--above.multiselect--active .multiselect__current, .multiselect--above.multiselect--active .multiselect__input, .multiselect--above.multiselect--active .multiselect__tags {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.multiselect__input, .multiselect__single {\n  position: relative;\n  display: inline-block;\n  min-height: 20px;\n  line-height: 20px;\n  border: none;\n  border-radius: 5px;\n  background: #fff;\n  padding: 0 0 0 5px;\n  width: 100%;\n  transition: border 0.1s ease;\n  box-sizing: border-box;\n  margin-bottom: 8px;\n  vertical-align: top;\n}\n\n.multiselect__input:-ms-input-placeholder {\n  color: #35495e;\n}\n\n.multiselect__input::placeholder {\n  color: #35495e;\n}\n\n.multiselect__tag ~ .multiselect__input, .multiselect__tag ~ .multiselect__single {\n  width: auto;\n}\n\n.multiselect__input:hover, .multiselect__single:hover {\n  border-color: #cfcfcf;\n}\n\n.multiselect__input:focus, .multiselect__single:focus {\n  border-color: #a8a8a8;\n  outline: none;\n}\n\n.multiselect__single {\n  padding-left: 5px;\n  margin-bottom: 8px;\n}\n\n.multiselect__tags-wrap {\n  display: inline;\n}\n\n.multiselect__tags {\n  min-height: 40px;\n  display: block;\n  padding: 8px 40px 0 8px;\n  border-radius: 5px;\n  border: 1px solid #e8e8e8;\n  background: #fff;\n  font-size: 14px;\n}\n\n.multiselect__tag {\n  position: relative;\n  display: inline-block;\n  padding: 4px 26px 4px 10px;\n  border-radius: 5px;\n  margin-right: 10px;\n  color: #fff;\n  line-height: 1;\n  background: #41b883;\n  margin-bottom: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 100%;\n  text-overflow: ellipsis;\n}\n\n.multiselect__tag-icon {\n  cursor: pointer;\n  margin-left: 7px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-weight: 700;\n  font-style: normal;\n  width: 22px;\n  text-align: center;\n  line-height: 22px;\n  transition: all 0.2s ease;\n  border-radius: 5px;\n}\n\n.multiselect__tag-icon:after {\n  content: \"×\";\n  color: #266d4d;\n  font-size: 14px;\n}\n\n.multiselect__tag-icon:focus, .multiselect__tag-icon:hover {\n  background: #369a6e;\n}\n\n.multiselect__tag-icon:focus:after, .multiselect__tag-icon:hover:after {\n  color: #fff;\n}\n\n.multiselect__current {\n  min-height: 40px;\n  overflow: hidden;\n  padding: 8px 30px 0 12px;\n  white-space: nowrap;\n  border-radius: 5px;\n  border: 1px solid #e8e8e8;\n}\n\n.multiselect__current, .multiselect__select {\n  line-height: 16px;\n  box-sizing: border-box;\n  display: block;\n  margin: 0;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.multiselect__select {\n  position: absolute;\n  width: 40px;\n  height: 38px;\n  right: 1px;\n  top: 1px;\n  padding: 4px 8px;\n  text-align: center;\n  transition: transform 0.2s ease;\n}\n\n.multiselect__select:before {\n  position: relative;\n  right: 0;\n  top: 65%;\n  color: #999;\n  margin-top: 4px;\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 0;\n  content: \"\";\n}\n\n.multiselect__placeholder {\n  color: #adadad;\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-top: 2px;\n}\n\n.multiselect--active .multiselect__placeholder {\n  display: none;\n}\n\n.multiselect__content-wrapper {\n  position: absolute;\n  display: block;\n  background: #fff;\n  width: 100%;\n  max-height: 240px;\n  overflow: auto;\n  border: 1px solid #e8e8e8;\n  border-top: none;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  z-index: 50;\n  -webkit-overflow-scrolling: touch;\n}\n\n.multiselect__content {\n  list-style: none;\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  min-width: 100%;\n  vertical-align: top;\n}\n\n.multiselect--above .multiselect__content-wrapper {\n  bottom: 100%;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom: none;\n  border-top: 1px solid #e8e8e8;\n}\n\n.multiselect__content::webkit-scrollbar {\n  display: none;\n}\n\n.multiselect__element {\n  display: block;\n}\n\n.multiselect__option {\n  display: block;\n  padding: 12px;\n  min-height: 40px;\n  line-height: 16px;\n  text-decoration: none;\n  text-transform: none;\n  vertical-align: middle;\n  position: relative;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.multiselect__option:after {\n  top: 0;\n  right: 0;\n  position: absolute;\n  line-height: 40px;\n  padding-right: 12px;\n  padding-left: 20px;\n  font-size: 13px;\n}\n\n.multiselect__option--highlight {\n  background: #41b883;\n  outline: none;\n  color: #fff;\n}\n\n.multiselect__option--highlight:after {\n  content: attr(data-select);\n  background: #41b883;\n  color: #fff;\n}\n\n.multiselect__option--selected {\n  background: #f3f3f3;\n  color: #35495e;\n  font-weight: 700;\n}\n\n.multiselect__option--selected:after {\n  content: attr(data-selected);\n  color: silver;\n}\n\n.multiselect__option--selected.multiselect__option--highlight {\n  background: #ff6a6a;\n  color: #fff;\n}\n\n.multiselect__option--selected.multiselect__option--highlight:after {\n  background: #ff6a6a;\n  content: attr(data-deselect);\n  color: #fff;\n}\n\n.multiselect--disabled .multiselect__current, .multiselect--disabled .multiselect__select {\n  background: #ededed;\n  color: #a6a6a6;\n}\n\n.multiselect__option--disabled {\n  background: #ededed !important;\n  color: #a6a6a6 !important;\n  cursor: text;\n  pointer-events: none;\n}\n\n.multiselect__option--group {\n  background: #ededed;\n  color: #35495e;\n}\n\n.multiselect__option--group.multiselect__option--highlight {\n  background: #35495e;\n  color: #fff;\n}\n\n.multiselect__option--group.multiselect__option--highlight:after {\n  background: #35495e;\n}\n\n.multiselect__option--disabled.multiselect__option--highlight {\n  background: #dedede;\n}\n\n.multiselect__option--group-selected.multiselect__option--highlight {\n  background: #ff6a6a;\n  color: #fff;\n}\n\n.multiselect__option--group-selected.multiselect__option--highlight:after {\n  background: #ff6a6a;\n  content: attr(data-deselect);\n  color: #fff;\n}\n\n.multiselect-enter-active, .multiselect-leave-active {\n  transition: all 0.15s ease;\n}\n\n.multiselect-enter, .multiselect-leave-active {\n  opacity: 0;\n}\n\n.multiselect__strong {\n  margin-bottom: 8px;\n  line-height: 20px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n[dir=rtl] .multiselect {\n  text-align: right;\n}\n\n[dir=rtl] .multiselect__select {\n  right: auto;\n  left: 1px;\n}\n\n[dir=rtl] .multiselect__tags {\n  padding: 8px 8px 0 40px;\n}\n\n[dir=rtl] .multiselect__content {\n  text-align: right;\n}\n\n[dir=rtl] .multiselect__option:after {\n  right: auto;\n  left: 0;\n}\n\n[dir=rtl] .multiselect__clear {\n  right: auto;\n  left: 12px;\n}\n\n[dir=rtl] .multiselect__spinner {\n  right: auto;\n  left: 1px;\n}\n\n@keyframes spinning {\n  0% {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(2turn);\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/fonts/Montserrat/style.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/fonts/Montserrat/style.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './fonts/Montserrat-Thin.woff2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './fonts/Montserrat-ExtraLight.woff2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './fonts/Montserrat-Light.woff2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './fonts/Montserrat-Regular.woff2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './fonts/Montserrat-Medium.woff2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './fonts/Montserrat-SemiBold.woff2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './fonts/Montserrat-Bold.woff2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './fonts/Montserrat-ExtraBold.woff2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './fonts/Montserrat-Black.woff2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
// Module
exports.push([module.i, "/* Thin */\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 200;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n}\n/* ExtraLight */\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 200;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");\n}\n/* Light */\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 300;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\");\n}\n/* Regular */\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");\n}\n/* Medium */\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\");\n}\n/* SemiBold */\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff2\");\n}\n/* Bold */\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"woff2\");\n}\n/* ExtraBold */\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 800;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"woff2\");\n}\n/* Black */\n@font-face {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 900;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"woff2\");\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/App.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html {\n  box-sizing: border-box;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n*:focus {\n  outline-color: transparent;\n}\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\np,\npre {\n  margin: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n*,\n:after,\n:before {\n  border-width: 0;\n  border-style: solid;\n  border-color: #dae1e7;\n}\na {\n  text-decoration: none;\n}\n.shadow {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n}\n.shadow\\:large {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n}\n.shadow\\:larger {\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n}\n.shadow\\:inner {\n  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n}\n.shadow\\:outline {\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);\n}\n.shadow\\:none {\n  box-shadow: none;\n}\n.hover\\:shadow:hover {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n}\n.hover\\:shadow\\:large:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n}\n.hover\\:shadow\\:larger:hover {\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n}\n.hover\\:shadow\\:inner:hover {\n  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n}\n.hover\\:shadow\\:outline:hover {\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);\n}\n.hover\\:shadow\\:none:hover {\n  box-shadow: none;\n}\n.disabled\\:shadow:disabled {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n}\n.disabled\\:shadow\\:large:disabled {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n}\n.disabled\\:shadow\\:larger:disabled {\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n}\n.disabled\\:shadow\\:inner:disabled {\n  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n}\n.disabled\\:shadow\\:outline:disabled {\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);\n}\n.disabled\\:shadow\\:none:disabled {\n  box-shadow: none;\n}\n.visited\\:shadow:visited {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n}\n.visited\\:shadow\\:large:visited {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n}\n.visited\\:shadow\\:larger:visited {\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n}\n.visited\\:shadow\\:inner:visited {\n  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n}\n.visited\\:shadow\\:outline:visited {\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);\n}\n.visited\\:shadow\\:none:visited {\n  box-shadow: none;\n}\n.focus\\:shadow:focus {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n}\n.focus\\:shadow\\:large:focus {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n}\n.focus\\:shadow\\:larger:focus {\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n}\n.focus\\:shadow\\:inner:focus {\n  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n}\n.focus\\:shadow\\:outline:focus {\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);\n}\n.focus\\:shadow\\:none:focus {\n  box-shadow: none;\n}\n.first\\:shadow:first-child {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n}\n.first\\:shadow\\:large:first-child {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n}\n.first\\:shadow\\:larger:first-child {\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n}\n.first\\:shadow\\:inner:first-child {\n  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n}\n.first\\:shadow\\:outline:first-child {\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);\n}\n.first\\:shadow\\:none:first-child {\n  box-shadow: none;\n}\n.last\\:shadow:last-child {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n}\n.last\\:shadow\\:large:last-child {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n}\n.last\\:shadow\\:larger:last-child {\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);\n}\n.last\\:shadow\\:inner:last-child {\n  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n}\n.last\\:shadow\\:outline:last-child {\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);\n}\n.last\\:shadow\\:none:last-child {\n  box-shadow: none;\n}\n.opacity\\:100 {\n  opacity: 1;\n}\n.opacity\\:75 {\n  opacity: 0.75;\n}\n.opacity\\:50 {\n  opacity: 0.5;\n}\n.opacity\\:25 {\n  opacity: 0.25;\n}\n.opacity\\:0 {\n  opacity: 0;\n}\n.hover\\:opacity\\:100:hover {\n  opacity: 1;\n}\n.hover\\:opacity\\:75:hover {\n  opacity: 0.75;\n}\n.hover\\:opacity\\:50:hover {\n  opacity: 0.5;\n}\n.hover\\:opacity\\:25:hover {\n  opacity: 0.25;\n}\n.hover\\:opacity\\:0:hover {\n  opacity: 0;\n}\n.disabled\\:opacity\\:100:disabled {\n  opacity: 1;\n}\n.disabled\\:opacity\\:75:disabled {\n  opacity: 0.75;\n}\n.disabled\\:opacity\\:50:disabled {\n  opacity: 0.5;\n}\n.disabled\\:opacity\\:25:disabled {\n  opacity: 0.25;\n}\n.disabled\\:opacity\\:0:disabled {\n  opacity: 0;\n}\n.visited\\:opacity\\:100:visited {\n  opacity: 1;\n}\n.visited\\:opacity\\:75:visited {\n  opacity: 0.75;\n}\n.visited\\:opacity\\:50:visited {\n  opacity: 0.5;\n}\n.visited\\:opacity\\:25:visited {\n  opacity: 0.25;\n}\n.visited\\:opacity\\:0:visited {\n  opacity: 0;\n}\n.focus\\:opacity\\:100:focus {\n  opacity: 1;\n}\n.focus\\:opacity\\:75:focus {\n  opacity: 0.75;\n}\n.focus\\:opacity\\:50:focus {\n  opacity: 0.5;\n}\n.focus\\:opacity\\:25:focus {\n  opacity: 0.25;\n}\n.focus\\:opacity\\:0:focus {\n  opacity: 0;\n}\n.first\\:opacity\\:100:first-child {\n  opacity: 1;\n}\n.first\\:opacity\\:75:first-child {\n  opacity: 0.75;\n}\n.first\\:opacity\\:50:first-child {\n  opacity: 0.5;\n}\n.first\\:opacity\\:25:first-child {\n  opacity: 0.25;\n}\n.first\\:opacity\\:0:first-child {\n  opacity: 0;\n}\n.last\\:opacity\\:100:last-child {\n  opacity: 1;\n}\n.last\\:opacity\\:75:last-child {\n  opacity: 0.75;\n}\n.last\\:opacity\\:50:last-child {\n  opacity: 0.5;\n}\n.last\\:opacity\\:25:last-child {\n  opacity: 0.25;\n}\n.last\\:opacity\\:0:last-child {\n  opacity: 0;\n}\n.transition\\:fast {\n  transition: all 0.2s ease;\n}\n.transition {\n  transition: all 0.3s ease;\n}\n.transition\\:slow {\n  transition: all 0.4s ease;\n}\n.rotate\\:0 {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(0deg);\n}\n.rotate\\:90 {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(90deg);\n}\n.rotate\\:180 {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(180deg);\n}\n.rotate\\:270 {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(270deg);\n}\n.hover\\:rotate\\:0:hover {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(0deg);\n}\n.hover\\:rotate\\:90:hover {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(90deg);\n}\n.hover\\:rotate\\:180:hover {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(180deg);\n}\n.hover\\:rotate\\:270:hover {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(270deg);\n}\n.disabled\\:rotate\\:0:disabled {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(0deg);\n}\n.disabled\\:rotate\\:90:disabled {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(90deg);\n}\n.disabled\\:rotate\\:180:disabled {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(180deg);\n}\n.disabled\\:rotate\\:270:disabled {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(270deg);\n}\n.visited\\:rotate\\:0:visited {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(0deg);\n}\n.visited\\:rotate\\:90:visited {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(90deg);\n}\n.visited\\:rotate\\:180:visited {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(180deg);\n}\n.visited\\:rotate\\:270:visited {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(270deg);\n}\n.focus\\:rotate\\:0:focus {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(0deg);\n}\n.focus\\:rotate\\:90:focus {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(90deg);\n}\n.focus\\:rotate\\:180:focus {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(180deg);\n}\n.focus\\:rotate\\:270:focus {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(270deg);\n}\n.first\\:rotate\\:0:first-child {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(0deg);\n}\n.first\\:rotate\\:90:first-child {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(90deg);\n}\n.first\\:rotate\\:180:first-child {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(180deg);\n}\n.first\\:rotate\\:270:first-child {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(270deg);\n}\n.last\\:rotate\\:0:last-child {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(0deg);\n}\n.last\\:rotate\\:90:last-child {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(90deg);\n}\n.last\\:rotate\\:180:last-child {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(180deg);\n}\n.last\\:rotate\\:270:last-child {\n  display: inline-block;\n  transition: all 0.3s ease;\n  transform: rotate(270deg);\n}\n@keyframes rotating {\nfrom {\n    transform: rotate(0);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n.rotating {\n  display: inline-block;\n  animation: rotating 2s linear infinite;\n}\n.hover\\:rotating:hover {\n  display: inline-block;\n  animation: rotating 2s linear infinite;\n}\n.disabled\\:rotating:disabled {\n  display: inline-block;\n  animation: rotating 2s linear infinite;\n}\n.visited\\:rotating:visited {\n  display: inline-block;\n  animation: rotating 2s linear infinite;\n}\n.focus\\:rotating:focus {\n  display: inline-block;\n  animation: rotating 2s linear infinite;\n}\n.first\\:rotating:first-child {\n  display: inline-block;\n  animation: rotating 2s linear infinite;\n}\n.last\\:rotating:last-child {\n  display: inline-block;\n  animation: rotating 2s linear infinite;\n}\n.cursor\\:auto {\n  cursor: auto;\n}\n.cursor\\:default {\n  cursor: default;\n}\n.cursor\\:pointer {\n  cursor: pointer;\n}\n.cursor\\:wait {\n  cursor: wait;\n}\n.cursor\\:move {\n  cursor: move;\n}\n.cursor\\:not-allowed {\n  cursor: not-allowed;\n}\n.pointer-events\\:none {\n  pointer-events: none;\n}\n.pointer-events\\:auto {\n  pointer-events: auto;\n}\n.inline {\n  display: inline;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.none {\n  display: none;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n@media (min-width: 40rem) {\n.sm\\:inline {\n    display: inline;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:block {\n    display: block;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:inline-block {\n    display: inline-block;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:none {\n    display: none;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:flex {\n    display: flex;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:inline-flex {\n    display: inline-flex;\n}\n}\n@media (min-width: 50rem) {\n.md\\:inline {\n    display: inline;\n}\n}\n@media (min-width: 50rem) {\n.md\\:block {\n    display: block;\n}\n}\n@media (min-width: 50rem) {\n.md\\:inline-block {\n    display: inline-block;\n}\n}\n@media (min-width: 50rem) {\n.md\\:none {\n    display: none;\n}\n}\n@media (min-width: 50rem) {\n.md\\:flex {\n    display: flex;\n}\n}\n@media (min-width: 50rem) {\n.md\\:inline-flex {\n    display: inline-flex;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:inline {\n    display: inline;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:block {\n    display: block;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:inline-block {\n    display: inline-block;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:none {\n    display: none;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:flex {\n    display: flex;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:inline-flex {\n    display: inline-flex;\n}\n}\n.float\\:right {\n  float: right;\n}\n.float\\:left {\n  float: left;\n}\n.float\\:none {\n  float: none;\n}\n.clearfix::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.overflow\\:auto {\n  overflow: auto;\n}\n.overflow\\:hidden {\n  overflow: hidden;\n}\n.overflow\\:visible {\n  overflow: visible;\n}\n.overflow\\:scroll {\n  overflow: scroll;\n}\n.overflow-x\\:auto {\n  overflow-x: auto;\n}\n.overflow-x\\:hidden {\n  overflow-x: hidden;\n}\n.overflow-x\\:visible {\n  overflow-x: visible;\n}\n.overflow-x\\:scroll {\n  overflow-x: scroll;\n}\n.overflow-y\\:auto {\n  overflow-y: auto;\n}\n.overflow-y\\:hidden {\n  overflow-y: hidden;\n}\n.overflow-y\\:visible {\n  overflow-y: visible;\n}\n.overflow-y\\:scroll {\n  overflow-y: scroll;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.sticky {\n  position: sticky;\n}\n.t\\:0 {\n  top: 0;\n}\n.r\\:0 {\n  right: 0;\n}\n.b\\:0 {\n  bottom: 0;\n}\n.l\\:0 {\n  left: 0;\n}\n.x\\:0 {\n  right: 0;\n  left: 0;\n}\n.y\\:0 {\n  top: 0;\n  bottom: 0;\n}\n.t\\:1\\/4 {\n  top: 0.25rem;\n}\n.r\\:1\\/4 {\n  right: 0.25rem;\n}\n.b\\:1\\/4 {\n  bottom: 0.25rem;\n}\n.l\\:1\\/4 {\n  left: 0.25rem;\n}\n.x\\:1\\/4 {\n  right: 0.25rem;\n  left: 0.25rem;\n}\n.y\\:1\\/4 {\n  top: 0.25rem;\n  bottom: 0.25rem;\n}\n.t\\:1\\/2 {\n  top: 0.5rem;\n}\n.r\\:1\\/2 {\n  right: 0.5rem;\n}\n.b\\:1\\/2 {\n  bottom: 0.5rem;\n}\n.l\\:1\\/2 {\n  left: 0.5rem;\n}\n.x\\:1\\/2 {\n  right: 0.5rem;\n  left: 0.5rem;\n}\n.y\\:1\\/2 {\n  top: 0.5rem;\n  bottom: 0.5rem;\n}\n.t\\:3\\/4 {\n  top: 0.75rem;\n}\n.r\\:3\\/4 {\n  right: 0.75rem;\n}\n.b\\:3\\/4 {\n  bottom: 0.75rem;\n}\n.l\\:3\\/4 {\n  left: 0.75rem;\n}\n.x\\:3\\/4 {\n  right: 0.75rem;\n  left: 0.75rem;\n}\n.y\\:3\\/4 {\n  top: 0.75rem;\n  bottom: 0.75rem;\n}\n.t\\:1 {\n  top: 1rem;\n}\n.r\\:1 {\n  right: 1rem;\n}\n.b\\:1 {\n  bottom: 1rem;\n}\n.l\\:1 {\n  left: 1rem;\n}\n.x\\:1 {\n  right: 1rem;\n  left: 1rem;\n}\n.y\\:1 {\n  top: 1rem;\n  bottom: 1rem;\n}\n.t\\:5\\/4 {\n  top: 1.25rem;\n}\n.r\\:5\\/4 {\n  right: 1.25rem;\n}\n.b\\:5\\/4 {\n  bottom: 1.25rem;\n}\n.l\\:5\\/4 {\n  left: 1.25rem;\n}\n.x\\:5\\/4 {\n  right: 1.25rem;\n  left: 1.25rem;\n}\n.y\\:5\\/4 {\n  top: 1.25rem;\n  bottom: 1.25rem;\n}\n.t\\:3\\/2 {\n  top: 1.5rem;\n}\n.r\\:3\\/2 {\n  right: 1.5rem;\n}\n.b\\:3\\/2 {\n  bottom: 1.5rem;\n}\n.l\\:3\\/2 {\n  left: 1.5rem;\n}\n.x\\:3\\/2 {\n  right: 1.5rem;\n  left: 1.5rem;\n}\n.y\\:3\\/2 {\n  top: 1.5rem;\n  bottom: 1.5rem;\n}\n.t\\:7\\/4 {\n  top: 1.75rem;\n}\n.r\\:7\\/4 {\n  right: 1.75rem;\n}\n.b\\:7\\/4 {\n  bottom: 1.75rem;\n}\n.l\\:7\\/4 {\n  left: 1.75rem;\n}\n.x\\:7\\/4 {\n  right: 1.75rem;\n  left: 1.75rem;\n}\n.y\\:7\\/4 {\n  top: 1.75rem;\n  bottom: 1.75rem;\n}\n.t\\:2 {\n  top: 2rem;\n}\n.r\\:2 {\n  right: 2rem;\n}\n.b\\:2 {\n  bottom: 2rem;\n}\n.l\\:2 {\n  left: 2rem;\n}\n.x\\:2 {\n  right: 2rem;\n  left: 2rem;\n}\n.y\\:2 {\n  top: 2rem;\n  bottom: 2rem;\n}\n.t\\:5\\/2 {\n  top: 2.5rem;\n}\n.r\\:5\\/2 {\n  right: 2.5rem;\n}\n.b\\:5\\/2 {\n  bottom: 2.5rem;\n}\n.l\\:5\\/2 {\n  left: 2.5rem;\n}\n.x\\:5\\/2 {\n  right: 2.5rem;\n  left: 2.5rem;\n}\n.y\\:5\\/2 {\n  top: 2.5rem;\n  bottom: 2.5rem;\n}\n.t\\:3 {\n  top: 3rem;\n}\n.r\\:3 {\n  right: 3rem;\n}\n.b\\:3 {\n  bottom: 3rem;\n}\n.l\\:3 {\n  left: 3rem;\n}\n.x\\:3 {\n  right: 3rem;\n  left: 3rem;\n}\n.y\\:3 {\n  top: 3rem;\n  bottom: 3rem;\n}\n.t\\:4 {\n  top: 4rem;\n}\n.r\\:4 {\n  right: 4rem;\n}\n.b\\:4 {\n  bottom: 4rem;\n}\n.l\\:4 {\n  left: 4rem;\n}\n.x\\:4 {\n  right: 4rem;\n  left: 4rem;\n}\n.y\\:4 {\n  top: 4rem;\n  bottom: 4rem;\n}\n.t\\:auto {\n  top: auto;\n}\n.r\\:auto {\n  right: auto;\n}\n.b\\:auto {\n  bottom: auto;\n}\n.l\\:auto {\n  left: auto;\n}\n.x\\:auto {\n  right: auto;\n  left: auto;\n}\n.y\\:auto {\n  top: auto;\n  bottom: auto;\n}\n@media (min-width: 40rem) {\n.sm\\:static {\n    position: static;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:fixed {\n    position: fixed;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:absolute {\n    position: absolute;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:relative {\n    position: relative;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:sticky {\n    position: sticky;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:t\\:0 {\n    top: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:r\\:0 {\n    right: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:b\\:0 {\n    bottom: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:l\\:0 {\n    left: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:x\\:0 {\n    right: 0;\n    left: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:y\\:0 {\n    top: 0;\n    bottom: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:t\\:1\\/4 {\n    top: 0.25rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:r\\:1\\/4 {\n    right: 0.25rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:b\\:1\\/4 {\n    bottom: 0.25rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:l\\:1\\/4 {\n    left: 0.25rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:x\\:1\\/4 {\n    right: 0.25rem;\n    left: 0.25rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:y\\:1\\/4 {\n    top: 0.25rem;\n    bottom: 0.25rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:t\\:1\\/2 {\n    top: 0.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:r\\:1\\/2 {\n    right: 0.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:b\\:1\\/2 {\n    bottom: 0.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:l\\:1\\/2 {\n    left: 0.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:x\\:1\\/2 {\n    right: 0.5rem;\n    left: 0.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:y\\:1\\/2 {\n    top: 0.5rem;\n    bottom: 0.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:t\\:3\\/4 {\n    top: 0.75rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:r\\:3\\/4 {\n    right: 0.75rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:b\\:3\\/4 {\n    bottom: 0.75rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:l\\:3\\/4 {\n    left: 0.75rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:x\\:3\\/4 {\n    right: 0.75rem;\n    left: 0.75rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:y\\:3\\/4 {\n    top: 0.75rem;\n    bottom: 0.75rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:t\\:1 {\n    top: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:r\\:1 {\n    right: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:b\\:1 {\n    bottom: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:l\\:1 {\n    left: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:x\\:1 {\n    right: 1rem;\n    left: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:y\\:1 {\n    top: 1rem;\n    bottom: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:t\\:5\\/4 {\n    top: 1.25rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:r\\:5\\/4 {\n    right: 1.25rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:b\\:5\\/4 {\n    bottom: 1.25rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:l\\:5\\/4 {\n    left: 1.25rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:x\\:5\\/4 {\n    right: 1.25rem;\n    left: 1.25rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:y\\:5\\/4 {\n    top: 1.25rem;\n    bottom: 1.25rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:t\\:3\\/2 {\n    top: 1.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:r\\:3\\/2 {\n    right: 1.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:b\\:3\\/2 {\n    bottom: 1.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:l\\:3\\/2 {\n    left: 1.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:x\\:3\\/2 {\n    right: 1.5rem;\n    left: 1.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:y\\:3\\/2 {\n    top: 1.5rem;\n    bottom: 1.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:t\\:7\\/4 {\n    top: 1.75rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:r\\:7\\/4 {\n    right: 1.75rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:b\\:7\\/4 {\n    bottom: 1.75rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:l\\:7\\/4 {\n    left: 1.75rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:x\\:7\\/4 {\n    right: 1.75rem;\n    left: 1.75rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:y\\:7\\/4 {\n    top: 1.75rem;\n    bottom: 1.75rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:t\\:2 {\n    top: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:r\\:2 {\n    right: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:b\\:2 {\n    bottom: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:l\\:2 {\n    left: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:x\\:2 {\n    right: 2rem;\n    left: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:y\\:2 {\n    top: 2rem;\n    bottom: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:t\\:5\\/2 {\n    top: 2.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:r\\:5\\/2 {\n    right: 2.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:b\\:5\\/2 {\n    bottom: 2.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:l\\:5\\/2 {\n    left: 2.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:x\\:5\\/2 {\n    right: 2.5rem;\n    left: 2.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:y\\:5\\/2 {\n    top: 2.5rem;\n    bottom: 2.5rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:t\\:3 {\n    top: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:r\\:3 {\n    right: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:b\\:3 {\n    bottom: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:l\\:3 {\n    left: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:x\\:3 {\n    right: 3rem;\n    left: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:y\\:3 {\n    top: 3rem;\n    bottom: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:t\\:4 {\n    top: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:r\\:4 {\n    right: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:b\\:4 {\n    bottom: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:l\\:4 {\n    left: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:x\\:4 {\n    right: 4rem;\n    left: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:y\\:4 {\n    top: 4rem;\n    bottom: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:t\\:auto {\n    top: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:r\\:auto {\n    right: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:b\\:auto {\n    bottom: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:l\\:auto {\n    left: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:x\\:auto {\n    right: auto;\n    left: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:y\\:auto {\n    top: auto;\n    bottom: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:static {\n    position: static;\n}\n}\n@media (min-width: 50rem) {\n.md\\:fixed {\n    position: fixed;\n}\n}\n@media (min-width: 50rem) {\n.md\\:absolute {\n    position: absolute;\n}\n}\n@media (min-width: 50rem) {\n.md\\:relative {\n    position: relative;\n}\n}\n@media (min-width: 50rem) {\n.md\\:sticky {\n    position: sticky;\n}\n}\n@media (min-width: 50rem) {\n.md\\:t\\:0 {\n    top: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:r\\:0 {\n    right: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:b\\:0 {\n    bottom: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:l\\:0 {\n    left: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:x\\:0 {\n    right: 0;\n    left: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:y\\:0 {\n    top: 0;\n    bottom: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:t\\:1\\/4 {\n    top: 0.25rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:r\\:1\\/4 {\n    right: 0.25rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:b\\:1\\/4 {\n    bottom: 0.25rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:l\\:1\\/4 {\n    left: 0.25rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:x\\:1\\/4 {\n    right: 0.25rem;\n    left: 0.25rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:y\\:1\\/4 {\n    top: 0.25rem;\n    bottom: 0.25rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:t\\:1\\/2 {\n    top: 0.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:r\\:1\\/2 {\n    right: 0.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:b\\:1\\/2 {\n    bottom: 0.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:l\\:1\\/2 {\n    left: 0.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:x\\:1\\/2 {\n    right: 0.5rem;\n    left: 0.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:y\\:1\\/2 {\n    top: 0.5rem;\n    bottom: 0.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:t\\:3\\/4 {\n    top: 0.75rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:r\\:3\\/4 {\n    right: 0.75rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:b\\:3\\/4 {\n    bottom: 0.75rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:l\\:3\\/4 {\n    left: 0.75rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:x\\:3\\/4 {\n    right: 0.75rem;\n    left: 0.75rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:y\\:3\\/4 {\n    top: 0.75rem;\n    bottom: 0.75rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:t\\:1 {\n    top: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:r\\:1 {\n    right: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:b\\:1 {\n    bottom: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:l\\:1 {\n    left: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:x\\:1 {\n    right: 1rem;\n    left: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:y\\:1 {\n    top: 1rem;\n    bottom: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:t\\:5\\/4 {\n    top: 1.25rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:r\\:5\\/4 {\n    right: 1.25rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:b\\:5\\/4 {\n    bottom: 1.25rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:l\\:5\\/4 {\n    left: 1.25rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:x\\:5\\/4 {\n    right: 1.25rem;\n    left: 1.25rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:y\\:5\\/4 {\n    top: 1.25rem;\n    bottom: 1.25rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:t\\:3\\/2 {\n    top: 1.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:r\\:3\\/2 {\n    right: 1.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:b\\:3\\/2 {\n    bottom: 1.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:l\\:3\\/2 {\n    left: 1.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:x\\:3\\/2 {\n    right: 1.5rem;\n    left: 1.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:y\\:3\\/2 {\n    top: 1.5rem;\n    bottom: 1.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:t\\:7\\/4 {\n    top: 1.75rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:r\\:7\\/4 {\n    right: 1.75rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:b\\:7\\/4 {\n    bottom: 1.75rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:l\\:7\\/4 {\n    left: 1.75rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:x\\:7\\/4 {\n    right: 1.75rem;\n    left: 1.75rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:y\\:7\\/4 {\n    top: 1.75rem;\n    bottom: 1.75rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:t\\:2 {\n    top: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:r\\:2 {\n    right: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:b\\:2 {\n    bottom: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:l\\:2 {\n    left: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:x\\:2 {\n    right: 2rem;\n    left: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:y\\:2 {\n    top: 2rem;\n    bottom: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:t\\:5\\/2 {\n    top: 2.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:r\\:5\\/2 {\n    right: 2.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:b\\:5\\/2 {\n    bottom: 2.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:l\\:5\\/2 {\n    left: 2.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:x\\:5\\/2 {\n    right: 2.5rem;\n    left: 2.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:y\\:5\\/2 {\n    top: 2.5rem;\n    bottom: 2.5rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:t\\:3 {\n    top: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:r\\:3 {\n    right: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:b\\:3 {\n    bottom: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:l\\:3 {\n    left: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:x\\:3 {\n    right: 3rem;\n    left: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:y\\:3 {\n    top: 3rem;\n    bottom: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:t\\:4 {\n    top: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:r\\:4 {\n    right: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:b\\:4 {\n    bottom: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:l\\:4 {\n    left: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:x\\:4 {\n    right: 4rem;\n    left: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:y\\:4 {\n    top: 4rem;\n    bottom: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:t\\:auto {\n    top: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:r\\:auto {\n    right: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:b\\:auto {\n    bottom: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:l\\:auto {\n    left: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:x\\:auto {\n    right: auto;\n    left: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:y\\:auto {\n    top: auto;\n    bottom: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:static {\n    position: static;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:fixed {\n    position: fixed;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:absolute {\n    position: absolute;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:relative {\n    position: relative;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:sticky {\n    position: sticky;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:t\\:0 {\n    top: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:r\\:0 {\n    right: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:b\\:0 {\n    bottom: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:l\\:0 {\n    left: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:x\\:0 {\n    right: 0;\n    left: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:y\\:0 {\n    top: 0;\n    bottom: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:t\\:1\\/4 {\n    top: 0.25rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:r\\:1\\/4 {\n    right: 0.25rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:b\\:1\\/4 {\n    bottom: 0.25rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:l\\:1\\/4 {\n    left: 0.25rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:x\\:1\\/4 {\n    right: 0.25rem;\n    left: 0.25rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:y\\:1\\/4 {\n    top: 0.25rem;\n    bottom: 0.25rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:t\\:1\\/2 {\n    top: 0.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:r\\:1\\/2 {\n    right: 0.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:b\\:1\\/2 {\n    bottom: 0.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:l\\:1\\/2 {\n    left: 0.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:x\\:1\\/2 {\n    right: 0.5rem;\n    left: 0.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:y\\:1\\/2 {\n    top: 0.5rem;\n    bottom: 0.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:t\\:3\\/4 {\n    top: 0.75rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:r\\:3\\/4 {\n    right: 0.75rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:b\\:3\\/4 {\n    bottom: 0.75rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:l\\:3\\/4 {\n    left: 0.75rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:x\\:3\\/4 {\n    right: 0.75rem;\n    left: 0.75rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:y\\:3\\/4 {\n    top: 0.75rem;\n    bottom: 0.75rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:t\\:1 {\n    top: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:r\\:1 {\n    right: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:b\\:1 {\n    bottom: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:l\\:1 {\n    left: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:x\\:1 {\n    right: 1rem;\n    left: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:y\\:1 {\n    top: 1rem;\n    bottom: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:t\\:5\\/4 {\n    top: 1.25rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:r\\:5\\/4 {\n    right: 1.25rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:b\\:5\\/4 {\n    bottom: 1.25rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:l\\:5\\/4 {\n    left: 1.25rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:x\\:5\\/4 {\n    right: 1.25rem;\n    left: 1.25rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:y\\:5\\/4 {\n    top: 1.25rem;\n    bottom: 1.25rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:t\\:3\\/2 {\n    top: 1.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:r\\:3\\/2 {\n    right: 1.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:b\\:3\\/2 {\n    bottom: 1.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:l\\:3\\/2 {\n    left: 1.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:x\\:3\\/2 {\n    right: 1.5rem;\n    left: 1.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:y\\:3\\/2 {\n    top: 1.5rem;\n    bottom: 1.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:t\\:7\\/4 {\n    top: 1.75rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:r\\:7\\/4 {\n    right: 1.75rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:b\\:7\\/4 {\n    bottom: 1.75rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:l\\:7\\/4 {\n    left: 1.75rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:x\\:7\\/4 {\n    right: 1.75rem;\n    left: 1.75rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:y\\:7\\/4 {\n    top: 1.75rem;\n    bottom: 1.75rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:t\\:2 {\n    top: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:r\\:2 {\n    right: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:b\\:2 {\n    bottom: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:l\\:2 {\n    left: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:x\\:2 {\n    right: 2rem;\n    left: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:y\\:2 {\n    top: 2rem;\n    bottom: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:t\\:5\\/2 {\n    top: 2.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:r\\:5\\/2 {\n    right: 2.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:b\\:5\\/2 {\n    bottom: 2.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:l\\:5\\/2 {\n    left: 2.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:x\\:5\\/2 {\n    right: 2.5rem;\n    left: 2.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:y\\:5\\/2 {\n    top: 2.5rem;\n    bottom: 2.5rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:t\\:3 {\n    top: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:r\\:3 {\n    right: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:b\\:3 {\n    bottom: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:l\\:3 {\n    left: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:x\\:3 {\n    right: 3rem;\n    left: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:y\\:3 {\n    top: 3rem;\n    bottom: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:t\\:4 {\n    top: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:r\\:4 {\n    right: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:b\\:4 {\n    bottom: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:l\\:4 {\n    left: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:x\\:4 {\n    right: 4rem;\n    left: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:y\\:4 {\n    top: 4rem;\n    bottom: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:t\\:auto {\n    top: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:r\\:auto {\n    right: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:b\\:auto {\n    bottom: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:l\\:auto {\n    left: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:x\\:auto {\n    right: auto;\n    left: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:y\\:auto {\n    top: auto;\n    bottom: auto;\n}\n}\n.visible {\n  visibility: visible;\n}\n.invisible {\n  visibility: hidden;\n}\n@media (min-width: 40rem) {\n.sm\\:visible {\n    visibility: visible;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:invisible {\n    visibility: hidden;\n}\n}\n@media (min-width: 50rem) {\n.md\\:visible {\n    visibility: visible;\n}\n}\n@media (min-width: 50rem) {\n.md\\:invisible {\n    visibility: hidden;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:visible {\n    visibility: visible;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:invisible {\n    visibility: hidden;\n}\n}\n.z\\:0 {\n  z-index: 0;\n}\n.z\\:10 {\n  z-index: 10;\n}\n.z\\:20 {\n  z-index: 20;\n}\n.z\\:30 {\n  z-index: 30;\n}\n.z\\:40 {\n  z-index: 40;\n}\n.z\\:50 {\n  z-index: 50;\n}\n.z\\:auto {\n  z-index: auto;\n}\n.h\\:0 {\n  height: 0;\n}\n.min-h\\:0 {\n  min-height: 0;\n}\n.max-h\\:0 {\n  max-height: 0;\n}\n.h\\:auto {\n  height: auto;\n}\n.min-h\\:auto {\n  min-height: auto;\n}\n.max-h\\:auto {\n  max-height: auto;\n}\n.h\\:inherit {\n  height: inherit;\n}\n.min-h\\:inherit {\n  min-height: inherit;\n}\n.max-h\\:inherit {\n  max-height: inherit;\n}\n.h\\:full {\n  height: 100%;\n}\n.min-h\\:full {\n  min-height: 100%;\n}\n.max-h\\:full {\n  max-height: 100%;\n}\n.h\\:screen {\n  height: 100vh;\n}\n.min-h\\:screen {\n  min-height: 100vh;\n}\n.max-h\\:screen {\n  max-height: 100vh;\n}\n.h\\:sm {\n  height: 40rem;\n}\n.min-h\\:sm {\n  min-height: 40rem;\n}\n.max-h\\:sm {\n  max-height: 40rem;\n}\n.h\\:md {\n  height: 50rem;\n}\n.min-h\\:md {\n  min-height: 50rem;\n}\n.max-h\\:md {\n  max-height: 50rem;\n}\n.h\\:lg {\n  height: 80rem;\n}\n.min-h\\:lg {\n  min-height: 80rem;\n}\n.max-h\\:lg {\n  max-height: 80rem;\n}\n.h\\:1\\/12 {\n  height: calc(1 * 100% / 12);\n}\n.min-h\\:1\\/12 {\n  min-height: calc(1 * 100% / 12);\n}\n.max-h\\:1\\/12 {\n  max-height: calc(1 * 100% / 12);\n}\n.h\\:2\\/12 {\n  height: calc(2 * 100% / 12);\n}\n.min-h\\:2\\/12 {\n  min-height: calc(2 * 100% / 12);\n}\n.max-h\\:2\\/12 {\n  max-height: calc(2 * 100% / 12);\n}\n.h\\:3\\/12 {\n  height: calc(3 * 100% / 12);\n}\n.min-h\\:3\\/12 {\n  min-height: calc(3 * 100% / 12);\n}\n.max-h\\:3\\/12 {\n  max-height: calc(3 * 100% / 12);\n}\n.h\\:4\\/12 {\n  height: calc(4 * 100% / 12);\n}\n.min-h\\:4\\/12 {\n  min-height: calc(4 * 100% / 12);\n}\n.max-h\\:4\\/12 {\n  max-height: calc(4 * 100% / 12);\n}\n.h\\:5\\/12 {\n  height: calc(5 * 100% / 12);\n}\n.min-h\\:5\\/12 {\n  min-height: calc(5 * 100% / 12);\n}\n.max-h\\:5\\/12 {\n  max-height: calc(5 * 100% / 12);\n}\n.h\\:6\\/12 {\n  height: calc(6 * 100% / 12);\n}\n.min-h\\:6\\/12 {\n  min-height: calc(6 * 100% / 12);\n}\n.max-h\\:6\\/12 {\n  max-height: calc(6 * 100% / 12);\n}\n.h\\:7\\/12 {\n  height: calc(7 * 100% / 12);\n}\n.min-h\\:7\\/12 {\n  min-height: calc(7 * 100% / 12);\n}\n.max-h\\:7\\/12 {\n  max-height: calc(7 * 100% / 12);\n}\n.h\\:8\\/12 {\n  height: calc(8 * 100% / 12);\n}\n.min-h\\:8\\/12 {\n  min-height: calc(8 * 100% / 12);\n}\n.max-h\\:8\\/12 {\n  max-height: calc(8 * 100% / 12);\n}\n.h\\:9\\/12 {\n  height: calc(9 * 100% / 12);\n}\n.min-h\\:9\\/12 {\n  min-height: calc(9 * 100% / 12);\n}\n.max-h\\:9\\/12 {\n  max-height: calc(9 * 100% / 12);\n}\n.h\\:10\\/12 {\n  height: calc(10 * 100% / 12);\n}\n.min-h\\:10\\/12 {\n  min-height: calc(10 * 100% / 12);\n}\n.max-h\\:10\\/12 {\n  max-height: calc(10 * 100% / 12);\n}\n.h\\:11\\/12 {\n  height: calc(11 * 100% / 12);\n}\n.min-h\\:11\\/12 {\n  min-height: calc(11 * 100% / 12);\n}\n.max-h\\:11\\/12 {\n  max-height: calc(11 * 100% / 12);\n}\n.w\\:0 {\n  width: 0;\n}\n.min-w\\:0 {\n  min-width: 0;\n}\n.max-w\\:0 {\n  max-width: 0;\n}\n.w\\:auto {\n  width: auto;\n}\n.min-w\\:auto {\n  min-width: auto;\n}\n.max-w\\:auto {\n  max-width: auto;\n}\n.w\\:inherit {\n  width: inherit;\n}\n.min-w\\:inherit {\n  min-width: inherit;\n}\n.max-w\\:inherit {\n  max-width: inherit;\n}\n.w\\:full, table {\n  width: 100%;\n}\n.min-w\\:full {\n  min-width: 100%;\n}\n.max-w\\:full {\n  max-width: 100%;\n}\n.w\\:screen {\n  width: 100vw;\n}\n.min-w\\:screen {\n  min-width: 100vw;\n}\n.max-w\\:screen {\n  max-width: 100vw;\n}\n.w\\:sm {\n  width: 40rem;\n}\n.min-w\\:sm {\n  min-width: 40rem;\n}\n.max-w\\:sm {\n  max-width: 40rem;\n}\n.w\\:md {\n  width: 50rem;\n}\n.min-w\\:md {\n  min-width: 50rem;\n}\n.max-w\\:md {\n  max-width: 50rem;\n}\n.w\\:lg {\n  width: 80rem;\n}\n.min-w\\:lg {\n  min-width: 80rem;\n}\n.max-w\\:lg {\n  max-width: 80rem;\n}\n.w\\:1\\/12 {\n  width: calc(1 * 100% / 12);\n}\n.min-w\\:1\\/12 {\n  min-width: calc(1 * 100% / 12);\n}\n.max-w\\:1\\/12 {\n  max-width: calc(1 * 100% / 12);\n}\n.w\\:2\\/12 {\n  width: calc(2 * 100% / 12);\n}\n.min-w\\:2\\/12 {\n  min-width: calc(2 * 100% / 12);\n}\n.max-w\\:2\\/12 {\n  max-width: calc(2 * 100% / 12);\n}\n.w\\:3\\/12 {\n  width: calc(3 * 100% / 12);\n}\n.min-w\\:3\\/12 {\n  min-width: calc(3 * 100% / 12);\n}\n.max-w\\:3\\/12 {\n  max-width: calc(3 * 100% / 12);\n}\n.w\\:4\\/12 {\n  width: calc(4 * 100% / 12);\n}\n.min-w\\:4\\/12 {\n  min-width: calc(4 * 100% / 12);\n}\n.max-w\\:4\\/12 {\n  max-width: calc(4 * 100% / 12);\n}\n.w\\:5\\/12 {\n  width: calc(5 * 100% / 12);\n}\n.min-w\\:5\\/12 {\n  min-width: calc(5 * 100% / 12);\n}\n.max-w\\:5\\/12 {\n  max-width: calc(5 * 100% / 12);\n}\n.w\\:6\\/12 {\n  width: calc(6 * 100% / 12);\n}\n.min-w\\:6\\/12 {\n  min-width: calc(6 * 100% / 12);\n}\n.max-w\\:6\\/12 {\n  max-width: calc(6 * 100% / 12);\n}\n.w\\:7\\/12 {\n  width: calc(7 * 100% / 12);\n}\n.min-w\\:7\\/12 {\n  min-width: calc(7 * 100% / 12);\n}\n.max-w\\:7\\/12 {\n  max-width: calc(7 * 100% / 12);\n}\n.w\\:8\\/12 {\n  width: calc(8 * 100% / 12);\n}\n.min-w\\:8\\/12 {\n  min-width: calc(8 * 100% / 12);\n}\n.max-w\\:8\\/12 {\n  max-width: calc(8 * 100% / 12);\n}\n.w\\:9\\/12 {\n  width: calc(9 * 100% / 12);\n}\n.min-w\\:9\\/12 {\n  min-width: calc(9 * 100% / 12);\n}\n.max-w\\:9\\/12 {\n  max-width: calc(9 * 100% / 12);\n}\n.w\\:10\\/12 {\n  width: calc(10 * 100% / 12);\n}\n.min-w\\:10\\/12 {\n  min-width: calc(10 * 100% / 12);\n}\n.max-w\\:10\\/12 {\n  max-width: calc(10 * 100% / 12);\n}\n.w\\:11\\/12 {\n  width: calc(11 * 100% / 12);\n}\n.min-w\\:11\\/12 {\n  min-width: calc(11 * 100% / 12);\n}\n.max-w\\:11\\/12 {\n  max-width: calc(11 * 100% / 12);\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:0 {\n    width: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:0 {\n    min-width: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:0 {\n    max-width: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:auto {\n    width: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:auto {\n    min-width: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:auto {\n    max-width: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:inherit {\n    width: inherit;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:inherit {\n    min-width: inherit;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:inherit {\n    max-width: inherit;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:full {\n    width: 100%;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:full {\n    min-width: 100%;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:full {\n    max-width: 100%;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:screen {\n    width: 100vw;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:screen {\n    min-width: 100vw;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:screen {\n    max-width: 100vw;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:sm {\n    width: 40rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:sm {\n    min-width: 40rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:sm {\n    max-width: 40rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:md {\n    width: 50rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:md {\n    min-width: 50rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:md {\n    max-width: 50rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:lg {\n    width: 80rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:lg {\n    min-width: 80rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:lg {\n    max-width: 80rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:1\\/12 {\n    width: calc(1 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:1\\/12 {\n    min-width: calc(1 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:1\\/12 {\n    max-width: calc(1 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:2\\/12 {\n    width: calc(2 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:2\\/12 {\n    min-width: calc(2 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:2\\/12 {\n    max-width: calc(2 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:3\\/12 {\n    width: calc(3 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:3\\/12 {\n    min-width: calc(3 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:3\\/12 {\n    max-width: calc(3 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:4\\/12 {\n    width: calc(4 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:4\\/12 {\n    min-width: calc(4 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:4\\/12 {\n    max-width: calc(4 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:5\\/12 {\n    width: calc(5 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:5\\/12 {\n    min-width: calc(5 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:5\\/12 {\n    max-width: calc(5 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:6\\/12 {\n    width: calc(6 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:6\\/12 {\n    min-width: calc(6 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:6\\/12 {\n    max-width: calc(6 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:7\\/12 {\n    width: calc(7 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:7\\/12 {\n    min-width: calc(7 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:7\\/12 {\n    max-width: calc(7 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:8\\/12 {\n    width: calc(8 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:8\\/12 {\n    min-width: calc(8 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:8\\/12 {\n    max-width: calc(8 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:9\\/12 {\n    width: calc(9 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:9\\/12 {\n    min-width: calc(9 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:9\\/12 {\n    max-width: calc(9 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:10\\/12 {\n    width: calc(10 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:10\\/12 {\n    min-width: calc(10 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:10\\/12 {\n    max-width: calc(10 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:w\\:11\\/12 {\n    width: calc(11 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:min-w\\:11\\/12 {\n    min-width: calc(11 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:max-w\\:11\\/12 {\n    max-width: calc(11 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:0 {\n    width: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:0 {\n    min-width: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:0 {\n    max-width: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:auto {\n    width: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:auto {\n    min-width: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:auto {\n    max-width: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:inherit {\n    width: inherit;\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:inherit {\n    min-width: inherit;\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:inherit {\n    max-width: inherit;\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:full {\n    width: 100%;\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:full {\n    min-width: 100%;\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:full {\n    max-width: 100%;\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:screen {\n    width: 100vw;\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:screen {\n    min-width: 100vw;\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:screen {\n    max-width: 100vw;\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:sm {\n    width: 40rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:sm {\n    min-width: 40rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:sm {\n    max-width: 40rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:md {\n    width: 50rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:md {\n    min-width: 50rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:md {\n    max-width: 50rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:lg {\n    width: 80rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:lg {\n    min-width: 80rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:lg {\n    max-width: 80rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:1\\/12 {\n    width: calc(1 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:1\\/12 {\n    min-width: calc(1 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:1\\/12 {\n    max-width: calc(1 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:2\\/12 {\n    width: calc(2 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:2\\/12 {\n    min-width: calc(2 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:2\\/12 {\n    max-width: calc(2 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:3\\/12 {\n    width: calc(3 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:3\\/12 {\n    min-width: calc(3 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:3\\/12 {\n    max-width: calc(3 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:4\\/12 {\n    width: calc(4 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:4\\/12 {\n    min-width: calc(4 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:4\\/12 {\n    max-width: calc(4 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:5\\/12 {\n    width: calc(5 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:5\\/12 {\n    min-width: calc(5 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:5\\/12 {\n    max-width: calc(5 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:6\\/12 {\n    width: calc(6 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:6\\/12 {\n    min-width: calc(6 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:6\\/12 {\n    max-width: calc(6 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:7\\/12 {\n    width: calc(7 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:7\\/12 {\n    min-width: calc(7 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:7\\/12 {\n    max-width: calc(7 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:8\\/12 {\n    width: calc(8 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:8\\/12 {\n    min-width: calc(8 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:8\\/12 {\n    max-width: calc(8 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:9\\/12 {\n    width: calc(9 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:9\\/12 {\n    min-width: calc(9 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:9\\/12 {\n    max-width: calc(9 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:10\\/12 {\n    width: calc(10 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:10\\/12 {\n    min-width: calc(10 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:10\\/12 {\n    max-width: calc(10 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:w\\:11\\/12 {\n    width: calc(11 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:min-w\\:11\\/12 {\n    min-width: calc(11 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:max-w\\:11\\/12 {\n    max-width: calc(11 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:0 {\n    width: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:0 {\n    min-width: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:0 {\n    max-width: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:auto {\n    width: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:auto {\n    min-width: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:auto {\n    max-width: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:inherit {\n    width: inherit;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:inherit {\n    min-width: inherit;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:inherit {\n    max-width: inherit;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:full {\n    width: 100%;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:full {\n    min-width: 100%;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:full {\n    max-width: 100%;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:screen {\n    width: 100vw;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:screen {\n    min-width: 100vw;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:screen {\n    max-width: 100vw;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:sm {\n    width: 40rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:sm {\n    min-width: 40rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:sm {\n    max-width: 40rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:md {\n    width: 50rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:md {\n    min-width: 50rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:md {\n    max-width: 50rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:lg {\n    width: 80rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:lg {\n    min-width: 80rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:lg {\n    max-width: 80rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:1\\/12 {\n    width: calc(1 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:1\\/12 {\n    min-width: calc(1 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:1\\/12 {\n    max-width: calc(1 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:2\\/12 {\n    width: calc(2 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:2\\/12 {\n    min-width: calc(2 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:2\\/12 {\n    max-width: calc(2 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:3\\/12 {\n    width: calc(3 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:3\\/12 {\n    min-width: calc(3 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:3\\/12 {\n    max-width: calc(3 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:4\\/12 {\n    width: calc(4 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:4\\/12 {\n    min-width: calc(4 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:4\\/12 {\n    max-width: calc(4 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:5\\/12 {\n    width: calc(5 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:5\\/12 {\n    min-width: calc(5 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:5\\/12 {\n    max-width: calc(5 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:6\\/12 {\n    width: calc(6 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:6\\/12 {\n    min-width: calc(6 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:6\\/12 {\n    max-width: calc(6 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:7\\/12 {\n    width: calc(7 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:7\\/12 {\n    min-width: calc(7 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:7\\/12 {\n    max-width: calc(7 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:8\\/12 {\n    width: calc(8 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:8\\/12 {\n    min-width: calc(8 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:8\\/12 {\n    max-width: calc(8 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:9\\/12 {\n    width: calc(9 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:9\\/12 {\n    min-width: calc(9 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:9\\/12 {\n    max-width: calc(9 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:10\\/12 {\n    width: calc(10 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:10\\/12 {\n    min-width: calc(10 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:10\\/12 {\n    max-width: calc(10 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:w\\:11\\/12 {\n    width: calc(11 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:min-w\\:11\\/12 {\n    min-width: calc(11 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:max-w\\:11\\/12 {\n    max-width: calc(11 * 100% / 12);\n}\n}\n.p\\:0 {\n  padding: 0;\n}\n.pt\\:0 {\n  padding-top: 0;\n}\n.pr\\:0 {\n  padding-right: 0;\n}\n.pb\\:0 {\n  padding-bottom: 0;\n}\n.pl\\:0 {\n  padding-left: 0;\n}\n.px\\:0 {\n  padding-left: 0;\n  padding-right: 0;\n}\n.py\\:0 {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.p\\:1\\/5 {\n  padding: calc(1rem / 5);\n}\n.pt\\:1\\/5 {\n  padding-top: calc(1rem / 5);\n}\n.pr\\:1\\/5 {\n  padding-right: calc(1rem / 5);\n}\n.pb\\:1\\/5 {\n  padding-bottom: calc(1rem / 5);\n}\n.pl\\:1\\/5 {\n  padding-left: calc(1rem / 5);\n}\n.px\\:1\\/5 {\n  padding-left: calc(1rem / 5);\n  padding-right: calc(1rem / 5);\n}\n.py\\:1\\/5 {\n  padding-top: calc(1rem / 5);\n  padding-bottom: calc(1rem / 5);\n}\n.p\\:1\\/4 {\n  padding: calc(1rem / 4);\n}\n.pt\\:1\\/4 {\n  padding-top: calc(1rem / 4);\n}\n.pr\\:1\\/4 {\n  padding-right: calc(1rem / 4);\n}\n.pb\\:1\\/4 {\n  padding-bottom: calc(1rem / 4);\n}\n.pl\\:1\\/4 {\n  padding-left: calc(1rem / 4);\n}\n.px\\:1\\/4 {\n  padding-left: calc(1rem / 4);\n  padding-right: calc(1rem / 4);\n}\n.py\\:1\\/4 {\n  padding-top: calc(1rem / 4);\n  padding-bottom: calc(1rem / 4);\n}\n.p\\:1\\/3 {\n  padding: calc(1rem / 3);\n}\n.pt\\:1\\/3 {\n  padding-top: calc(1rem / 3);\n}\n.pr\\:1\\/3 {\n  padding-right: calc(1rem / 3);\n}\n.pb\\:1\\/3 {\n  padding-bottom: calc(1rem / 3);\n}\n.pl\\:1\\/3 {\n  padding-left: calc(1rem / 3);\n}\n.px\\:1\\/3 {\n  padding-left: calc(1rem / 3);\n  padding-right: calc(1rem / 3);\n}\n.py\\:1\\/3, table tbody tr td, table thead th {\n  padding-top: calc(1rem / 3);\n  padding-bottom: calc(1rem / 3);\n}\n.p\\:2\\/5 {\n  padding: calc(2rem / 5);\n}\n.pt\\:2\\/5 {\n  padding-top: calc(2rem / 5);\n}\n.pr\\:2\\/5 {\n  padding-right: calc(2rem / 5);\n}\n.pb\\:2\\/5 {\n  padding-bottom: calc(2rem / 5);\n}\n.pl\\:2\\/5 {\n  padding-left: calc(2rem / 5);\n}\n.px\\:2\\/5 {\n  padding-left: calc(2rem / 5);\n  padding-right: calc(2rem / 5);\n}\n.py\\:2\\/5 {\n  padding-top: calc(2rem / 5);\n  padding-bottom: calc(2rem / 5);\n}\n.p\\:1\\/2 {\n  padding: calc(1rem / 2);\n}\n.pt\\:1\\/2 {\n  padding-top: calc(1rem / 2);\n}\n.pr\\:1\\/2 {\n  padding-right: calc(1rem / 2);\n}\n.pb\\:1\\/2 {\n  padding-bottom: calc(1rem / 2);\n}\n.pl\\:1\\/2 {\n  padding-left: calc(1rem / 2);\n}\n.px\\:1\\/2, table tbody tr td, table thead th {\n  padding-left: calc(1rem / 2);\n  padding-right: calc(1rem / 2);\n}\n.py\\:1\\/2 {\n  padding-top: calc(1rem / 2);\n  padding-bottom: calc(1rem / 2);\n}\n.p\\:3\\/5 {\n  padding: calc(3rem / 5);\n}\n.pt\\:3\\/5 {\n  padding-top: calc(3rem / 5);\n}\n.pr\\:3\\/5 {\n  padding-right: calc(3rem / 5);\n}\n.pb\\:3\\/5 {\n  padding-bottom: calc(3rem / 5);\n}\n.pl\\:3\\/5 {\n  padding-left: calc(3rem / 5);\n}\n.px\\:3\\/5 {\n  padding-left: calc(3rem / 5);\n  padding-right: calc(3rem / 5);\n}\n.py\\:3\\/5 {\n  padding-top: calc(3rem / 5);\n  padding-bottom: calc(3rem / 5);\n}\n.p\\:2\\/3 {\n  padding: calc(2rem / 3);\n}\n.pt\\:2\\/3 {\n  padding-top: calc(2rem / 3);\n}\n.pr\\:2\\/3 {\n  padding-right: calc(2rem / 3);\n}\n.pb\\:2\\/3 {\n  padding-bottom: calc(2rem / 3);\n}\n.pl\\:2\\/3 {\n  padding-left: calc(2rem / 3);\n}\n.px\\:2\\/3 {\n  padding-left: calc(2rem / 3);\n  padding-right: calc(2rem / 3);\n}\n.py\\:2\\/3 {\n  padding-top: calc(2rem / 3);\n  padding-bottom: calc(2rem / 3);\n}\n.p\\:3\\/4 {\n  padding: calc(3rem / 4);\n}\n.pt\\:3\\/4 {\n  padding-top: calc(3rem / 4);\n}\n.pr\\:3\\/4 {\n  padding-right: calc(3rem / 4);\n}\n.pb\\:3\\/4 {\n  padding-bottom: calc(3rem / 4);\n}\n.pl\\:3\\/4 {\n  padding-left: calc(3rem / 4);\n}\n.px\\:3\\/4 {\n  padding-left: calc(3rem / 4);\n  padding-right: calc(3rem / 4);\n}\n.py\\:3\\/4 {\n  padding-top: calc(3rem / 4);\n  padding-bottom: calc(3rem / 4);\n}\n.p\\:4\\/5 {\n  padding: calc(4rem / 5);\n}\n.pt\\:4\\/5 {\n  padding-top: calc(4rem / 5);\n}\n.pr\\:4\\/5 {\n  padding-right: calc(4rem / 5);\n}\n.pb\\:4\\/5 {\n  padding-bottom: calc(4rem / 5);\n}\n.pl\\:4\\/5 {\n  padding-left: calc(4rem / 5);\n}\n.px\\:4\\/5 {\n  padding-left: calc(4rem / 5);\n  padding-right: calc(4rem / 5);\n}\n.py\\:4\\/5 {\n  padding-top: calc(4rem / 5);\n  padding-bottom: calc(4rem / 5);\n}\n.p\\:1 {\n  padding: 1rem;\n}\n.pt\\:1 {\n  padding-top: 1rem;\n}\n.pr\\:1 {\n  padding-right: 1rem;\n}\n.pb\\:1 {\n  padding-bottom: 1rem;\n}\n.pl\\:1 {\n  padding-left: 1rem;\n}\n.px\\:1 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py\\:1 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.p\\:5\\/4 {\n  padding: calc(5rem / 4);\n}\n.pt\\:5\\/4 {\n  padding-top: calc(5rem / 4);\n}\n.pr\\:5\\/4 {\n  padding-right: calc(5rem / 4);\n}\n.pb\\:5\\/4 {\n  padding-bottom: calc(5rem / 4);\n}\n.pl\\:5\\/4 {\n  padding-left: calc(5rem / 4);\n}\n.px\\:5\\/4 {\n  padding-left: calc(5rem / 4);\n  padding-right: calc(5rem / 4);\n}\n.py\\:5\\/4 {\n  padding-top: calc(5rem / 4);\n  padding-bottom: calc(5rem / 4);\n}\n.p\\:3\\/2 {\n  padding: calc(3rem / 2);\n}\n.pt\\:3\\/2 {\n  padding-top: calc(3rem / 2);\n}\n.pr\\:3\\/2 {\n  padding-right: calc(3rem / 2);\n}\n.pb\\:3\\/2 {\n  padding-bottom: calc(3rem / 2);\n}\n.pl\\:3\\/2 {\n  padding-left: calc(3rem / 2);\n}\n.px\\:3\\/2 {\n  padding-left: calc(3rem / 2);\n  padding-right: calc(3rem / 2);\n}\n.py\\:3\\/2 {\n  padding-top: calc(3rem / 2);\n  padding-bottom: calc(3rem / 2);\n}\n.p\\:7\\/4 {\n  padding: calc(7rem / 4);\n}\n.pt\\:7\\/4 {\n  padding-top: calc(7rem / 4);\n}\n.pr\\:7\\/4 {\n  padding-right: calc(7rem / 4);\n}\n.pb\\:7\\/4 {\n  padding-bottom: calc(7rem / 4);\n}\n.pl\\:7\\/4 {\n  padding-left: calc(7rem / 4);\n}\n.px\\:7\\/4 {\n  padding-left: calc(7rem / 4);\n  padding-right: calc(7rem / 4);\n}\n.py\\:7\\/4 {\n  padding-top: calc(7rem / 4);\n  padding-bottom: calc(7rem / 4);\n}\n.p\\:2 {\n  padding: 2rem;\n}\n.pt\\:2 {\n  padding-top: 2rem;\n}\n.pr\\:2 {\n  padding-right: 2rem;\n}\n.pb\\:2 {\n  padding-bottom: 2rem;\n}\n.pl\\:2 {\n  padding-left: 2rem;\n}\n.px\\:2 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py\\:2 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.p\\:5\\/2 {\n  padding: calc(5rem / 2);\n}\n.pt\\:5\\/2 {\n  padding-top: calc(5rem / 2);\n}\n.pr\\:5\\/2 {\n  padding-right: calc(5rem / 2);\n}\n.pb\\:5\\/2 {\n  padding-bottom: calc(5rem / 2);\n}\n.pl\\:5\\/2 {\n  padding-left: calc(5rem / 2);\n}\n.px\\:5\\/2 {\n  padding-left: calc(5rem / 2);\n  padding-right: calc(5rem / 2);\n}\n.py\\:5\\/2 {\n  padding-top: calc(5rem / 2);\n  padding-bottom: calc(5rem / 2);\n}\n.p\\:3 {\n  padding: 3rem;\n}\n.pt\\:3 {\n  padding-top: 3rem;\n}\n.pr\\:3 {\n  padding-right: 3rem;\n}\n.pb\\:3 {\n  padding-bottom: 3rem;\n}\n.pl\\:3 {\n  padding-left: 3rem;\n}\n.px\\:3 {\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n.py\\:3 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.p\\:4 {\n  padding: 4rem;\n}\n.pt\\:4 {\n  padding-top: 4rem;\n}\n.pr\\:4 {\n  padding-right: 4rem;\n}\n.pb\\:4 {\n  padding-bottom: 4rem;\n}\n.pl\\:4 {\n  padding-left: 4rem;\n}\n.px\\:4 {\n  padding-left: 4rem;\n  padding-right: 4rem;\n}\n.py\\:4 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.p\\:auto {\n  padding: auto;\n}\n.pt\\:auto {\n  padding-top: auto;\n}\n.pr\\:auto {\n  padding-right: auto;\n}\n.pb\\:auto {\n  padding-bottom: auto;\n}\n.pl\\:auto {\n  padding-left: auto;\n}\n.px\\:auto {\n  padding-left: auto;\n  padding-right: auto;\n}\n.py\\:auto {\n  padding-top: auto;\n  padding-bottom: auto;\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:0 {\n    padding: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:0 {\n    padding-top: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:0 {\n    padding-right: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:0 {\n    padding-bottom: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:0 {\n    padding-left: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:0 {\n    padding-left: 0;\n    padding-right: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:0 {\n    padding-top: 0;\n    padding-bottom: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:1\\/5 {\n    padding: calc(1rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:1\\/5 {\n    padding-top: calc(1rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:1\\/5 {\n    padding-right: calc(1rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:1\\/5 {\n    padding-bottom: calc(1rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:1\\/5 {\n    padding-left: calc(1rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:1\\/5 {\n    padding-left: calc(1rem / 5);\n    padding-right: calc(1rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:1\\/5 {\n    padding-top: calc(1rem / 5);\n    padding-bottom: calc(1rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:1\\/4 {\n    padding: calc(1rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:1\\/4 {\n    padding-top: calc(1rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:1\\/4 {\n    padding-right: calc(1rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:1\\/4 {\n    padding-bottom: calc(1rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:1\\/4 {\n    padding-left: calc(1rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:1\\/4 {\n    padding-left: calc(1rem / 4);\n    padding-right: calc(1rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:1\\/4 {\n    padding-top: calc(1rem / 4);\n    padding-bottom: calc(1rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:1\\/3 {\n    padding: calc(1rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:1\\/3 {\n    padding-top: calc(1rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:1\\/3 {\n    padding-right: calc(1rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:1\\/3 {\n    padding-bottom: calc(1rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:1\\/3 {\n    padding-left: calc(1rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:1\\/3 {\n    padding-left: calc(1rem / 3);\n    padding-right: calc(1rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:1\\/3 {\n    padding-top: calc(1rem / 3);\n    padding-bottom: calc(1rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:2\\/5 {\n    padding: calc(2rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:2\\/5 {\n    padding-top: calc(2rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:2\\/5 {\n    padding-right: calc(2rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:2\\/5 {\n    padding-bottom: calc(2rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:2\\/5 {\n    padding-left: calc(2rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:2\\/5 {\n    padding-left: calc(2rem / 5);\n    padding-right: calc(2rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:2\\/5 {\n    padding-top: calc(2rem / 5);\n    padding-bottom: calc(2rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:1\\/2 {\n    padding: calc(1rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:1\\/2 {\n    padding-top: calc(1rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:1\\/2 {\n    padding-right: calc(1rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:1\\/2 {\n    padding-bottom: calc(1rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:1\\/2 {\n    padding-left: calc(1rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:1\\/2 {\n    padding-left: calc(1rem / 2);\n    padding-right: calc(1rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:1\\/2 {\n    padding-top: calc(1rem / 2);\n    padding-bottom: calc(1rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:3\\/5 {\n    padding: calc(3rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:3\\/5 {\n    padding-top: calc(3rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:3\\/5 {\n    padding-right: calc(3rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:3\\/5 {\n    padding-bottom: calc(3rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:3\\/5 {\n    padding-left: calc(3rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:3\\/5 {\n    padding-left: calc(3rem / 5);\n    padding-right: calc(3rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:3\\/5 {\n    padding-top: calc(3rem / 5);\n    padding-bottom: calc(3rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:2\\/3 {\n    padding: calc(2rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:2\\/3 {\n    padding-top: calc(2rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:2\\/3 {\n    padding-right: calc(2rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:2\\/3 {\n    padding-bottom: calc(2rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:2\\/3 {\n    padding-left: calc(2rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:2\\/3 {\n    padding-left: calc(2rem / 3);\n    padding-right: calc(2rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:2\\/3 {\n    padding-top: calc(2rem / 3);\n    padding-bottom: calc(2rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:3\\/4 {\n    padding: calc(3rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:3\\/4 {\n    padding-top: calc(3rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:3\\/4 {\n    padding-right: calc(3rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:3\\/4 {\n    padding-bottom: calc(3rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:3\\/4 {\n    padding-left: calc(3rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:3\\/4 {\n    padding-left: calc(3rem / 4);\n    padding-right: calc(3rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:3\\/4 {\n    padding-top: calc(3rem / 4);\n    padding-bottom: calc(3rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:4\\/5 {\n    padding: calc(4rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:4\\/5 {\n    padding-top: calc(4rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:4\\/5 {\n    padding-right: calc(4rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:4\\/5 {\n    padding-bottom: calc(4rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:4\\/5 {\n    padding-left: calc(4rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:4\\/5 {\n    padding-left: calc(4rem / 5);\n    padding-right: calc(4rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:4\\/5 {\n    padding-top: calc(4rem / 5);\n    padding-bottom: calc(4rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:1 {\n    padding: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:1 {\n    padding-top: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:1 {\n    padding-right: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:1 {\n    padding-bottom: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:1 {\n    padding-left: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:1 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:1 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:5\\/4 {\n    padding: calc(5rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:5\\/4 {\n    padding-top: calc(5rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:5\\/4 {\n    padding-right: calc(5rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:5\\/4 {\n    padding-bottom: calc(5rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:5\\/4 {\n    padding-left: calc(5rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:5\\/4 {\n    padding-left: calc(5rem / 4);\n    padding-right: calc(5rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:5\\/4 {\n    padding-top: calc(5rem / 4);\n    padding-bottom: calc(5rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:3\\/2 {\n    padding: calc(3rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:3\\/2 {\n    padding-top: calc(3rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:3\\/2 {\n    padding-right: calc(3rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:3\\/2 {\n    padding-bottom: calc(3rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:3\\/2 {\n    padding-left: calc(3rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:3\\/2 {\n    padding-left: calc(3rem / 2);\n    padding-right: calc(3rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:3\\/2 {\n    padding-top: calc(3rem / 2);\n    padding-bottom: calc(3rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:7\\/4 {\n    padding: calc(7rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:7\\/4 {\n    padding-top: calc(7rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:7\\/4 {\n    padding-right: calc(7rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:7\\/4 {\n    padding-bottom: calc(7rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:7\\/4 {\n    padding-left: calc(7rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:7\\/4 {\n    padding-left: calc(7rem / 4);\n    padding-right: calc(7rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:7\\/4 {\n    padding-top: calc(7rem / 4);\n    padding-bottom: calc(7rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:2 {\n    padding: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:2 {\n    padding-top: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:2 {\n    padding-right: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:2 {\n    padding-bottom: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:2 {\n    padding-left: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:2 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:2 {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:5\\/2 {\n    padding: calc(5rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:5\\/2 {\n    padding-top: calc(5rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:5\\/2 {\n    padding-right: calc(5rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:5\\/2 {\n    padding-bottom: calc(5rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:5\\/2 {\n    padding-left: calc(5rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:5\\/2 {\n    padding-left: calc(5rem / 2);\n    padding-right: calc(5rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:5\\/2 {\n    padding-top: calc(5rem / 2);\n    padding-bottom: calc(5rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:3 {\n    padding: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:3 {\n    padding-top: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:3 {\n    padding-right: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:3 {\n    padding-bottom: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:3 {\n    padding-left: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:3 {\n    padding-left: 3rem;\n    padding-right: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:3 {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:4 {\n    padding: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:4 {\n    padding-top: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:4 {\n    padding-right: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:4 {\n    padding-bottom: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:4 {\n    padding-left: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:4 {\n    padding-left: 4rem;\n    padding-right: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:4 {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:p\\:auto {\n    padding: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pt\\:auto {\n    padding-top: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pr\\:auto {\n    padding-right: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pb\\:auto {\n    padding-bottom: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:pl\\:auto {\n    padding-left: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:px\\:auto {\n    padding-left: auto;\n    padding-right: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:py\\:auto {\n    padding-top: auto;\n    padding-bottom: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:0 {\n    padding: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:0 {\n    padding-top: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:0 {\n    padding-right: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:0 {\n    padding-bottom: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:0 {\n    padding-left: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:0 {\n    padding-left: 0;\n    padding-right: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:0 {\n    padding-top: 0;\n    padding-bottom: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:1\\/5 {\n    padding: calc(1rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:1\\/5 {\n    padding-top: calc(1rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:1\\/5 {\n    padding-right: calc(1rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:1\\/5 {\n    padding-bottom: calc(1rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:1\\/5 {\n    padding-left: calc(1rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:1\\/5 {\n    padding-left: calc(1rem / 5);\n    padding-right: calc(1rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:1\\/5 {\n    padding-top: calc(1rem / 5);\n    padding-bottom: calc(1rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:1\\/4 {\n    padding: calc(1rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:1\\/4 {\n    padding-top: calc(1rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:1\\/4 {\n    padding-right: calc(1rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:1\\/4 {\n    padding-bottom: calc(1rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:1\\/4 {\n    padding-left: calc(1rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:1\\/4 {\n    padding-left: calc(1rem / 4);\n    padding-right: calc(1rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:1\\/4 {\n    padding-top: calc(1rem / 4);\n    padding-bottom: calc(1rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:1\\/3 {\n    padding: calc(1rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:1\\/3 {\n    padding-top: calc(1rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:1\\/3 {\n    padding-right: calc(1rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:1\\/3 {\n    padding-bottom: calc(1rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:1\\/3 {\n    padding-left: calc(1rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:1\\/3 {\n    padding-left: calc(1rem / 3);\n    padding-right: calc(1rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:1\\/3 {\n    padding-top: calc(1rem / 3);\n    padding-bottom: calc(1rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:2\\/5 {\n    padding: calc(2rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:2\\/5 {\n    padding-top: calc(2rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:2\\/5 {\n    padding-right: calc(2rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:2\\/5 {\n    padding-bottom: calc(2rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:2\\/5 {\n    padding-left: calc(2rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:2\\/5 {\n    padding-left: calc(2rem / 5);\n    padding-right: calc(2rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:2\\/5 {\n    padding-top: calc(2rem / 5);\n    padding-bottom: calc(2rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:1\\/2 {\n    padding: calc(1rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:1\\/2 {\n    padding-top: calc(1rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:1\\/2 {\n    padding-right: calc(1rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:1\\/2 {\n    padding-bottom: calc(1rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:1\\/2 {\n    padding-left: calc(1rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:1\\/2 {\n    padding-left: calc(1rem / 2);\n    padding-right: calc(1rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:1\\/2 {\n    padding-top: calc(1rem / 2);\n    padding-bottom: calc(1rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:3\\/5 {\n    padding: calc(3rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:3\\/5 {\n    padding-top: calc(3rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:3\\/5 {\n    padding-right: calc(3rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:3\\/5 {\n    padding-bottom: calc(3rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:3\\/5 {\n    padding-left: calc(3rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:3\\/5 {\n    padding-left: calc(3rem / 5);\n    padding-right: calc(3rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:3\\/5 {\n    padding-top: calc(3rem / 5);\n    padding-bottom: calc(3rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:2\\/3 {\n    padding: calc(2rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:2\\/3 {\n    padding-top: calc(2rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:2\\/3 {\n    padding-right: calc(2rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:2\\/3 {\n    padding-bottom: calc(2rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:2\\/3 {\n    padding-left: calc(2rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:2\\/3 {\n    padding-left: calc(2rem / 3);\n    padding-right: calc(2rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:2\\/3 {\n    padding-top: calc(2rem / 3);\n    padding-bottom: calc(2rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:3\\/4 {\n    padding: calc(3rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:3\\/4 {\n    padding-top: calc(3rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:3\\/4 {\n    padding-right: calc(3rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:3\\/4 {\n    padding-bottom: calc(3rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:3\\/4 {\n    padding-left: calc(3rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:3\\/4 {\n    padding-left: calc(3rem / 4);\n    padding-right: calc(3rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:3\\/4 {\n    padding-top: calc(3rem / 4);\n    padding-bottom: calc(3rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:4\\/5 {\n    padding: calc(4rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:4\\/5 {\n    padding-top: calc(4rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:4\\/5 {\n    padding-right: calc(4rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:4\\/5 {\n    padding-bottom: calc(4rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:4\\/5 {\n    padding-left: calc(4rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:4\\/5 {\n    padding-left: calc(4rem / 5);\n    padding-right: calc(4rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:4\\/5 {\n    padding-top: calc(4rem / 5);\n    padding-bottom: calc(4rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:1 {\n    padding: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:1 {\n    padding-top: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:1 {\n    padding-right: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:1 {\n    padding-bottom: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:1 {\n    padding-left: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:1 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:1 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:5\\/4 {\n    padding: calc(5rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:5\\/4 {\n    padding-top: calc(5rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:5\\/4 {\n    padding-right: calc(5rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:5\\/4 {\n    padding-bottom: calc(5rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:5\\/4 {\n    padding-left: calc(5rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:5\\/4 {\n    padding-left: calc(5rem / 4);\n    padding-right: calc(5rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:5\\/4 {\n    padding-top: calc(5rem / 4);\n    padding-bottom: calc(5rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:3\\/2 {\n    padding: calc(3rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:3\\/2 {\n    padding-top: calc(3rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:3\\/2 {\n    padding-right: calc(3rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:3\\/2 {\n    padding-bottom: calc(3rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:3\\/2 {\n    padding-left: calc(3rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:3\\/2 {\n    padding-left: calc(3rem / 2);\n    padding-right: calc(3rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:3\\/2 {\n    padding-top: calc(3rem / 2);\n    padding-bottom: calc(3rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:7\\/4 {\n    padding: calc(7rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:7\\/4 {\n    padding-top: calc(7rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:7\\/4 {\n    padding-right: calc(7rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:7\\/4 {\n    padding-bottom: calc(7rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:7\\/4 {\n    padding-left: calc(7rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:7\\/4 {\n    padding-left: calc(7rem / 4);\n    padding-right: calc(7rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:7\\/4 {\n    padding-top: calc(7rem / 4);\n    padding-bottom: calc(7rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:2 {\n    padding: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:2 {\n    padding-top: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:2 {\n    padding-right: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:2 {\n    padding-bottom: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:2 {\n    padding-left: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:2 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:2 {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:5\\/2 {\n    padding: calc(5rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:5\\/2 {\n    padding-top: calc(5rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:5\\/2 {\n    padding-right: calc(5rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:5\\/2 {\n    padding-bottom: calc(5rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:5\\/2 {\n    padding-left: calc(5rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:5\\/2 {\n    padding-left: calc(5rem / 2);\n    padding-right: calc(5rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:5\\/2 {\n    padding-top: calc(5rem / 2);\n    padding-bottom: calc(5rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:3 {\n    padding: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:3 {\n    padding-top: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:3 {\n    padding-right: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:3 {\n    padding-bottom: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:3 {\n    padding-left: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:3 {\n    padding-left: 3rem;\n    padding-right: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:3 {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:4 {\n    padding: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:4 {\n    padding-top: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:4 {\n    padding-right: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:4 {\n    padding-bottom: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:4 {\n    padding-left: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:4 {\n    padding-left: 4rem;\n    padding-right: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:4 {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:p\\:auto {\n    padding: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pt\\:auto {\n    padding-top: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pr\\:auto {\n    padding-right: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pb\\:auto {\n    padding-bottom: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:pl\\:auto {\n    padding-left: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:px\\:auto {\n    padding-left: auto;\n    padding-right: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:py\\:auto {\n    padding-top: auto;\n    padding-bottom: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:0 {\n    padding: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:0 {\n    padding-top: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:0 {\n    padding-right: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:0 {\n    padding-bottom: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:0 {\n    padding-left: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:0 {\n    padding-left: 0;\n    padding-right: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:0 {\n    padding-top: 0;\n    padding-bottom: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:1\\/5 {\n    padding: calc(1rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:1\\/5 {\n    padding-top: calc(1rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:1\\/5 {\n    padding-right: calc(1rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:1\\/5 {\n    padding-bottom: calc(1rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:1\\/5 {\n    padding-left: calc(1rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:1\\/5 {\n    padding-left: calc(1rem / 5);\n    padding-right: calc(1rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:1\\/5 {\n    padding-top: calc(1rem / 5);\n    padding-bottom: calc(1rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:1\\/4 {\n    padding: calc(1rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:1\\/4 {\n    padding-top: calc(1rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:1\\/4 {\n    padding-right: calc(1rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:1\\/4 {\n    padding-bottom: calc(1rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:1\\/4 {\n    padding-left: calc(1rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:1\\/4 {\n    padding-left: calc(1rem / 4);\n    padding-right: calc(1rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:1\\/4 {\n    padding-top: calc(1rem / 4);\n    padding-bottom: calc(1rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:1\\/3 {\n    padding: calc(1rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:1\\/3 {\n    padding-top: calc(1rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:1\\/3 {\n    padding-right: calc(1rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:1\\/3 {\n    padding-bottom: calc(1rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:1\\/3 {\n    padding-left: calc(1rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:1\\/3 {\n    padding-left: calc(1rem / 3);\n    padding-right: calc(1rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:1\\/3 {\n    padding-top: calc(1rem / 3);\n    padding-bottom: calc(1rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:2\\/5 {\n    padding: calc(2rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:2\\/5 {\n    padding-top: calc(2rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:2\\/5 {\n    padding-right: calc(2rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:2\\/5 {\n    padding-bottom: calc(2rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:2\\/5 {\n    padding-left: calc(2rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:2\\/5 {\n    padding-left: calc(2rem / 5);\n    padding-right: calc(2rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:2\\/5 {\n    padding-top: calc(2rem / 5);\n    padding-bottom: calc(2rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:1\\/2 {\n    padding: calc(1rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:1\\/2 {\n    padding-top: calc(1rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:1\\/2 {\n    padding-right: calc(1rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:1\\/2 {\n    padding-bottom: calc(1rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:1\\/2 {\n    padding-left: calc(1rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:1\\/2 {\n    padding-left: calc(1rem / 2);\n    padding-right: calc(1rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:1\\/2 {\n    padding-top: calc(1rem / 2);\n    padding-bottom: calc(1rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:3\\/5 {\n    padding: calc(3rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:3\\/5 {\n    padding-top: calc(3rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:3\\/5 {\n    padding-right: calc(3rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:3\\/5 {\n    padding-bottom: calc(3rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:3\\/5 {\n    padding-left: calc(3rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:3\\/5 {\n    padding-left: calc(3rem / 5);\n    padding-right: calc(3rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:3\\/5 {\n    padding-top: calc(3rem / 5);\n    padding-bottom: calc(3rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:2\\/3 {\n    padding: calc(2rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:2\\/3 {\n    padding-top: calc(2rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:2\\/3 {\n    padding-right: calc(2rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:2\\/3 {\n    padding-bottom: calc(2rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:2\\/3 {\n    padding-left: calc(2rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:2\\/3 {\n    padding-left: calc(2rem / 3);\n    padding-right: calc(2rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:2\\/3 {\n    padding-top: calc(2rem / 3);\n    padding-bottom: calc(2rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:3\\/4 {\n    padding: calc(3rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:3\\/4 {\n    padding-top: calc(3rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:3\\/4 {\n    padding-right: calc(3rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:3\\/4 {\n    padding-bottom: calc(3rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:3\\/4 {\n    padding-left: calc(3rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:3\\/4 {\n    padding-left: calc(3rem / 4);\n    padding-right: calc(3rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:3\\/4 {\n    padding-top: calc(3rem / 4);\n    padding-bottom: calc(3rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:4\\/5 {\n    padding: calc(4rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:4\\/5 {\n    padding-top: calc(4rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:4\\/5 {\n    padding-right: calc(4rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:4\\/5 {\n    padding-bottom: calc(4rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:4\\/5 {\n    padding-left: calc(4rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:4\\/5 {\n    padding-left: calc(4rem / 5);\n    padding-right: calc(4rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:4\\/5 {\n    padding-top: calc(4rem / 5);\n    padding-bottom: calc(4rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:1 {\n    padding: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:1 {\n    padding-top: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:1 {\n    padding-right: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:1 {\n    padding-bottom: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:1 {\n    padding-left: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:1 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:1 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:5\\/4 {\n    padding: calc(5rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:5\\/4 {\n    padding-top: calc(5rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:5\\/4 {\n    padding-right: calc(5rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:5\\/4 {\n    padding-bottom: calc(5rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:5\\/4 {\n    padding-left: calc(5rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:5\\/4 {\n    padding-left: calc(5rem / 4);\n    padding-right: calc(5rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:5\\/4 {\n    padding-top: calc(5rem / 4);\n    padding-bottom: calc(5rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:3\\/2 {\n    padding: calc(3rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:3\\/2 {\n    padding-top: calc(3rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:3\\/2 {\n    padding-right: calc(3rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:3\\/2 {\n    padding-bottom: calc(3rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:3\\/2 {\n    padding-left: calc(3rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:3\\/2 {\n    padding-left: calc(3rem / 2);\n    padding-right: calc(3rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:3\\/2 {\n    padding-top: calc(3rem / 2);\n    padding-bottom: calc(3rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:7\\/4 {\n    padding: calc(7rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:7\\/4 {\n    padding-top: calc(7rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:7\\/4 {\n    padding-right: calc(7rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:7\\/4 {\n    padding-bottom: calc(7rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:7\\/4 {\n    padding-left: calc(7rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:7\\/4 {\n    padding-left: calc(7rem / 4);\n    padding-right: calc(7rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:7\\/4 {\n    padding-top: calc(7rem / 4);\n    padding-bottom: calc(7rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:2 {\n    padding: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:2 {\n    padding-top: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:2 {\n    padding-right: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:2 {\n    padding-bottom: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:2 {\n    padding-left: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:2 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:2 {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:5\\/2 {\n    padding: calc(5rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:5\\/2 {\n    padding-top: calc(5rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:5\\/2 {\n    padding-right: calc(5rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:5\\/2 {\n    padding-bottom: calc(5rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:5\\/2 {\n    padding-left: calc(5rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:5\\/2 {\n    padding-left: calc(5rem / 2);\n    padding-right: calc(5rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:5\\/2 {\n    padding-top: calc(5rem / 2);\n    padding-bottom: calc(5rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:3 {\n    padding: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:3 {\n    padding-top: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:3 {\n    padding-right: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:3 {\n    padding-bottom: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:3 {\n    padding-left: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:3 {\n    padding-left: 3rem;\n    padding-right: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:3 {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:4 {\n    padding: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:4 {\n    padding-top: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:4 {\n    padding-right: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:4 {\n    padding-bottom: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:4 {\n    padding-left: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:4 {\n    padding-left: 4rem;\n    padding-right: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:4 {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:p\\:auto {\n    padding: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pt\\:auto {\n    padding-top: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pr\\:auto {\n    padding-right: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pb\\:auto {\n    padding-bottom: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:pl\\:auto {\n    padding-left: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:px\\:auto {\n    padding-left: auto;\n    padding-right: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:py\\:auto {\n    padding-top: auto;\n    padding-bottom: auto;\n}\n}\n.m\\:0 {\n  margin: 0;\n}\n.mt\\:0 {\n  margin-top: 0;\n}\n.mr\\:0 {\n  margin-right: 0;\n}\n.mb\\:0 {\n  margin-bottom: 0;\n}\n.ml\\:0 {\n  margin-left: 0;\n}\n.mx\\:0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.my\\:0 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.m\\:1\\/5 {\n  margin: calc(1rem / 5);\n}\n.mt\\:1\\/5 {\n  margin-top: calc(1rem / 5);\n}\n.mr\\:1\\/5 {\n  margin-right: calc(1rem / 5);\n}\n.mb\\:1\\/5 {\n  margin-bottom: calc(1rem / 5);\n}\n.ml\\:1\\/5 {\n  margin-left: calc(1rem / 5);\n}\n.mx\\:1\\/5 {\n  margin-left: calc(1rem / 5);\n  margin-right: calc(1rem / 5);\n}\n.my\\:1\\/5 {\n  margin-top: calc(1rem / 5);\n  margin-bottom: calc(1rem / 5);\n}\n.m\\:1\\/4 {\n  margin: calc(1rem / 4);\n}\n.mt\\:1\\/4 {\n  margin-top: calc(1rem / 4);\n}\n.mr\\:1\\/4 {\n  margin-right: calc(1rem / 4);\n}\n.mb\\:1\\/4 {\n  margin-bottom: calc(1rem / 4);\n}\n.ml\\:1\\/4 {\n  margin-left: calc(1rem / 4);\n}\n.mx\\:1\\/4 {\n  margin-left: calc(1rem / 4);\n  margin-right: calc(1rem / 4);\n}\n.my\\:1\\/4 {\n  margin-top: calc(1rem / 4);\n  margin-bottom: calc(1rem / 4);\n}\n.m\\:1\\/3 {\n  margin: calc(1rem / 3);\n}\n.mt\\:1\\/3 {\n  margin-top: calc(1rem / 3);\n}\n.mr\\:1\\/3 {\n  margin-right: calc(1rem / 3);\n}\n.mb\\:1\\/3 {\n  margin-bottom: calc(1rem / 3);\n}\n.ml\\:1\\/3 {\n  margin-left: calc(1rem / 3);\n}\n.mx\\:1\\/3 {\n  margin-left: calc(1rem / 3);\n  margin-right: calc(1rem / 3);\n}\n.my\\:1\\/3 {\n  margin-top: calc(1rem / 3);\n  margin-bottom: calc(1rem / 3);\n}\n.m\\:2\\/5 {\n  margin: calc(2rem / 5);\n}\n.mt\\:2\\/5 {\n  margin-top: calc(2rem / 5);\n}\n.mr\\:2\\/5 {\n  margin-right: calc(2rem / 5);\n}\n.mb\\:2\\/5 {\n  margin-bottom: calc(2rem / 5);\n}\n.ml\\:2\\/5 {\n  margin-left: calc(2rem / 5);\n}\n.mx\\:2\\/5 {\n  margin-left: calc(2rem / 5);\n  margin-right: calc(2rem / 5);\n}\n.my\\:2\\/5 {\n  margin-top: calc(2rem / 5);\n  margin-bottom: calc(2rem / 5);\n}\n.m\\:1\\/2 {\n  margin: calc(1rem / 2);\n}\n.mt\\:1\\/2 {\n  margin-top: calc(1rem / 2);\n}\n.mr\\:1\\/2 {\n  margin-right: calc(1rem / 2);\n}\n.mb\\:1\\/2 {\n  margin-bottom: calc(1rem / 2);\n}\n.ml\\:1\\/2 {\n  margin-left: calc(1rem / 2);\n}\n.mx\\:1\\/2 {\n  margin-left: calc(1rem / 2);\n  margin-right: calc(1rem / 2);\n}\n.my\\:1\\/2 {\n  margin-top: calc(1rem / 2);\n  margin-bottom: calc(1rem / 2);\n}\n.m\\:3\\/5 {\n  margin: calc(3rem / 5);\n}\n.mt\\:3\\/5 {\n  margin-top: calc(3rem / 5);\n}\n.mr\\:3\\/5 {\n  margin-right: calc(3rem / 5);\n}\n.mb\\:3\\/5 {\n  margin-bottom: calc(3rem / 5);\n}\n.ml\\:3\\/5 {\n  margin-left: calc(3rem / 5);\n}\n.mx\\:3\\/5 {\n  margin-left: calc(3rem / 5);\n  margin-right: calc(3rem / 5);\n}\n.my\\:3\\/5 {\n  margin-top: calc(3rem / 5);\n  margin-bottom: calc(3rem / 5);\n}\n.m\\:2\\/3 {\n  margin: calc(2rem / 3);\n}\n.mt\\:2\\/3 {\n  margin-top: calc(2rem / 3);\n}\n.mr\\:2\\/3 {\n  margin-right: calc(2rem / 3);\n}\n.mb\\:2\\/3 {\n  margin-bottom: calc(2rem / 3);\n}\n.ml\\:2\\/3 {\n  margin-left: calc(2rem / 3);\n}\n.mx\\:2\\/3 {\n  margin-left: calc(2rem / 3);\n  margin-right: calc(2rem / 3);\n}\n.my\\:2\\/3 {\n  margin-top: calc(2rem / 3);\n  margin-bottom: calc(2rem / 3);\n}\n.m\\:3\\/4 {\n  margin: calc(3rem / 4);\n}\n.mt\\:3\\/4 {\n  margin-top: calc(3rem / 4);\n}\n.mr\\:3\\/4 {\n  margin-right: calc(3rem / 4);\n}\n.mb\\:3\\/4 {\n  margin-bottom: calc(3rem / 4);\n}\n.ml\\:3\\/4 {\n  margin-left: calc(3rem / 4);\n}\n.mx\\:3\\/4 {\n  margin-left: calc(3rem / 4);\n  margin-right: calc(3rem / 4);\n}\n.my\\:3\\/4 {\n  margin-top: calc(3rem / 4);\n  margin-bottom: calc(3rem / 4);\n}\n.m\\:4\\/5 {\n  margin: calc(4rem / 5);\n}\n.mt\\:4\\/5 {\n  margin-top: calc(4rem / 5);\n}\n.mr\\:4\\/5 {\n  margin-right: calc(4rem / 5);\n}\n.mb\\:4\\/5 {\n  margin-bottom: calc(4rem / 5);\n}\n.ml\\:4\\/5 {\n  margin-left: calc(4rem / 5);\n}\n.mx\\:4\\/5 {\n  margin-left: calc(4rem / 5);\n  margin-right: calc(4rem / 5);\n}\n.my\\:4\\/5 {\n  margin-top: calc(4rem / 5);\n  margin-bottom: calc(4rem / 5);\n}\n.m\\:1 {\n  margin: 1rem;\n}\n.mt\\:1 {\n  margin-top: 1rem;\n}\n.mr\\:1 {\n  margin-right: 1rem;\n}\n.mb\\:1 {\n  margin-bottom: 1rem;\n}\n.ml\\:1 {\n  margin-left: 1rem;\n}\n.mx\\:1 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.my\\:1 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.m\\:5\\/4 {\n  margin: calc(5rem / 4);\n}\n.mt\\:5\\/4 {\n  margin-top: calc(5rem / 4);\n}\n.mr\\:5\\/4 {\n  margin-right: calc(5rem / 4);\n}\n.mb\\:5\\/4 {\n  margin-bottom: calc(5rem / 4);\n}\n.ml\\:5\\/4 {\n  margin-left: calc(5rem / 4);\n}\n.mx\\:5\\/4 {\n  margin-left: calc(5rem / 4);\n  margin-right: calc(5rem / 4);\n}\n.my\\:5\\/4 {\n  margin-top: calc(5rem / 4);\n  margin-bottom: calc(5rem / 4);\n}\n.m\\:3\\/2 {\n  margin: calc(3rem / 2);\n}\n.mt\\:3\\/2 {\n  margin-top: calc(3rem / 2);\n}\n.mr\\:3\\/2 {\n  margin-right: calc(3rem / 2);\n}\n.mb\\:3\\/2 {\n  margin-bottom: calc(3rem / 2);\n}\n.ml\\:3\\/2 {\n  margin-left: calc(3rem / 2);\n}\n.mx\\:3\\/2 {\n  margin-left: calc(3rem / 2);\n  margin-right: calc(3rem / 2);\n}\n.my\\:3\\/2 {\n  margin-top: calc(3rem / 2);\n  margin-bottom: calc(3rem / 2);\n}\n.m\\:7\\/4 {\n  margin: calc(7rem / 4);\n}\n.mt\\:7\\/4 {\n  margin-top: calc(7rem / 4);\n}\n.mr\\:7\\/4 {\n  margin-right: calc(7rem / 4);\n}\n.mb\\:7\\/4 {\n  margin-bottom: calc(7rem / 4);\n}\n.ml\\:7\\/4 {\n  margin-left: calc(7rem / 4);\n}\n.mx\\:7\\/4 {\n  margin-left: calc(7rem / 4);\n  margin-right: calc(7rem / 4);\n}\n.my\\:7\\/4 {\n  margin-top: calc(7rem / 4);\n  margin-bottom: calc(7rem / 4);\n}\n.m\\:2 {\n  margin: 2rem;\n}\n.mt\\:2 {\n  margin-top: 2rem;\n}\n.mr\\:2 {\n  margin-right: 2rem;\n}\n.mb\\:2 {\n  margin-bottom: 2rem;\n}\n.ml\\:2 {\n  margin-left: 2rem;\n}\n.mx\\:2 {\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.my\\:2 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.m\\:5\\/2 {\n  margin: calc(5rem / 2);\n}\n.mt\\:5\\/2 {\n  margin-top: calc(5rem / 2);\n}\n.mr\\:5\\/2 {\n  margin-right: calc(5rem / 2);\n}\n.mb\\:5\\/2 {\n  margin-bottom: calc(5rem / 2);\n}\n.ml\\:5\\/2 {\n  margin-left: calc(5rem / 2);\n}\n.mx\\:5\\/2 {\n  margin-left: calc(5rem / 2);\n  margin-right: calc(5rem / 2);\n}\n.my\\:5\\/2 {\n  margin-top: calc(5rem / 2);\n  margin-bottom: calc(5rem / 2);\n}\n.m\\:3 {\n  margin: 3rem;\n}\n.mt\\:3 {\n  margin-top: 3rem;\n}\n.mr\\:3 {\n  margin-right: 3rem;\n}\n.mb\\:3 {\n  margin-bottom: 3rem;\n}\n.ml\\:3 {\n  margin-left: 3rem;\n}\n.mx\\:3 {\n  margin-left: 3rem;\n  margin-right: 3rem;\n}\n.my\\:3 {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n.m\\:4 {\n  margin: 4rem;\n}\n.mt\\:4 {\n  margin-top: 4rem;\n}\n.mr\\:4 {\n  margin-right: 4rem;\n}\n.mb\\:4 {\n  margin-bottom: 4rem;\n}\n.ml\\:4 {\n  margin-left: 4rem;\n}\n.mx\\:4 {\n  margin-left: 4rem;\n  margin-right: 4rem;\n}\n.my\\:4 {\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n}\n.m\\:auto {\n  margin: auto;\n}\n.mt\\:auto {\n  margin-top: auto;\n}\n.mr\\:auto {\n  margin-right: auto;\n}\n.mb\\:auto {\n  margin-bottom: auto;\n}\n.ml\\:auto {\n  margin-left: auto;\n}\n.mx\\:auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my\\:auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:0 {\n    margin: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:0 {\n    margin-top: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:0 {\n    margin-right: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:0 {\n    margin-bottom: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:0 {\n    margin-left: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:0 {\n    margin-left: 0;\n    margin-right: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:0 {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:1\\/5 {\n    margin: calc(1rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:1\\/5 {\n    margin-top: calc(1rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:1\\/5 {\n    margin-right: calc(1rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:1\\/5 {\n    margin-bottom: calc(1rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:1\\/5 {\n    margin-left: calc(1rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:1\\/5 {\n    margin-left: calc(1rem / 5);\n    margin-right: calc(1rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:1\\/5 {\n    margin-top: calc(1rem / 5);\n    margin-bottom: calc(1rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:1\\/4 {\n    margin: calc(1rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:1\\/4 {\n    margin-top: calc(1rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:1\\/4 {\n    margin-right: calc(1rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:1\\/4 {\n    margin-bottom: calc(1rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:1\\/4 {\n    margin-left: calc(1rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:1\\/4 {\n    margin-left: calc(1rem / 4);\n    margin-right: calc(1rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:1\\/4 {\n    margin-top: calc(1rem / 4);\n    margin-bottom: calc(1rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:1\\/3 {\n    margin: calc(1rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:1\\/3 {\n    margin-top: calc(1rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:1\\/3 {\n    margin-right: calc(1rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:1\\/3 {\n    margin-bottom: calc(1rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:1\\/3 {\n    margin-left: calc(1rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:1\\/3 {\n    margin-left: calc(1rem / 3);\n    margin-right: calc(1rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:1\\/3 {\n    margin-top: calc(1rem / 3);\n    margin-bottom: calc(1rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:2\\/5 {\n    margin: calc(2rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:2\\/5 {\n    margin-top: calc(2rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:2\\/5 {\n    margin-right: calc(2rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:2\\/5 {\n    margin-bottom: calc(2rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:2\\/5 {\n    margin-left: calc(2rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:2\\/5 {\n    margin-left: calc(2rem / 5);\n    margin-right: calc(2rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:2\\/5 {\n    margin-top: calc(2rem / 5);\n    margin-bottom: calc(2rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:1\\/2 {\n    margin: calc(1rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:1\\/2 {\n    margin-top: calc(1rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:1\\/2 {\n    margin-right: calc(1rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:1\\/2 {\n    margin-bottom: calc(1rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:1\\/2 {\n    margin-left: calc(1rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:1\\/2 {\n    margin-left: calc(1rem / 2);\n    margin-right: calc(1rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:1\\/2 {\n    margin-top: calc(1rem / 2);\n    margin-bottom: calc(1rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:3\\/5 {\n    margin: calc(3rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:3\\/5 {\n    margin-top: calc(3rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:3\\/5 {\n    margin-right: calc(3rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:3\\/5 {\n    margin-bottom: calc(3rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:3\\/5 {\n    margin-left: calc(3rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:3\\/5 {\n    margin-left: calc(3rem / 5);\n    margin-right: calc(3rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:3\\/5 {\n    margin-top: calc(3rem / 5);\n    margin-bottom: calc(3rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:2\\/3 {\n    margin: calc(2rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:2\\/3 {\n    margin-top: calc(2rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:2\\/3 {\n    margin-right: calc(2rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:2\\/3 {\n    margin-bottom: calc(2rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:2\\/3 {\n    margin-left: calc(2rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:2\\/3 {\n    margin-left: calc(2rem / 3);\n    margin-right: calc(2rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:2\\/3 {\n    margin-top: calc(2rem / 3);\n    margin-bottom: calc(2rem / 3);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:3\\/4 {\n    margin: calc(3rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:3\\/4 {\n    margin-top: calc(3rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:3\\/4 {\n    margin-right: calc(3rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:3\\/4 {\n    margin-bottom: calc(3rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:3\\/4 {\n    margin-left: calc(3rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:3\\/4 {\n    margin-left: calc(3rem / 4);\n    margin-right: calc(3rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:3\\/4 {\n    margin-top: calc(3rem / 4);\n    margin-bottom: calc(3rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:4\\/5 {\n    margin: calc(4rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:4\\/5 {\n    margin-top: calc(4rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:4\\/5 {\n    margin-right: calc(4rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:4\\/5 {\n    margin-bottom: calc(4rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:4\\/5 {\n    margin-left: calc(4rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:4\\/5 {\n    margin-left: calc(4rem / 5);\n    margin-right: calc(4rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:4\\/5 {\n    margin-top: calc(4rem / 5);\n    margin-bottom: calc(4rem / 5);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:1 {\n    margin: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:1 {\n    margin-top: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:1 {\n    margin-right: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:1 {\n    margin-bottom: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:1 {\n    margin-left: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:1 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:1 {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:5\\/4 {\n    margin: calc(5rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:5\\/4 {\n    margin-top: calc(5rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:5\\/4 {\n    margin-right: calc(5rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:5\\/4 {\n    margin-bottom: calc(5rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:5\\/4 {\n    margin-left: calc(5rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:5\\/4 {\n    margin-left: calc(5rem / 4);\n    margin-right: calc(5rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:5\\/4 {\n    margin-top: calc(5rem / 4);\n    margin-bottom: calc(5rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:3\\/2 {\n    margin: calc(3rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:3\\/2 {\n    margin-top: calc(3rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:3\\/2 {\n    margin-right: calc(3rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:3\\/2 {\n    margin-bottom: calc(3rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:3\\/2 {\n    margin-left: calc(3rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:3\\/2 {\n    margin-left: calc(3rem / 2);\n    margin-right: calc(3rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:3\\/2 {\n    margin-top: calc(3rem / 2);\n    margin-bottom: calc(3rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:7\\/4 {\n    margin: calc(7rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:7\\/4 {\n    margin-top: calc(7rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:7\\/4 {\n    margin-right: calc(7rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:7\\/4 {\n    margin-bottom: calc(7rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:7\\/4 {\n    margin-left: calc(7rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:7\\/4 {\n    margin-left: calc(7rem / 4);\n    margin-right: calc(7rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:7\\/4 {\n    margin-top: calc(7rem / 4);\n    margin-bottom: calc(7rem / 4);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:2 {\n    margin: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:2 {\n    margin-top: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:2 {\n    margin-right: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:2 {\n    margin-bottom: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:2 {\n    margin-left: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:2 {\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:2 {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:5\\/2 {\n    margin: calc(5rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:5\\/2 {\n    margin-top: calc(5rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:5\\/2 {\n    margin-right: calc(5rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:5\\/2 {\n    margin-bottom: calc(5rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:5\\/2 {\n    margin-left: calc(5rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:5\\/2 {\n    margin-left: calc(5rem / 2);\n    margin-right: calc(5rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:5\\/2 {\n    margin-top: calc(5rem / 2);\n    margin-bottom: calc(5rem / 2);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:3 {\n    margin: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:3 {\n    margin-top: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:3 {\n    margin-right: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:3 {\n    margin-bottom: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:3 {\n    margin-left: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:3 {\n    margin-left: 3rem;\n    margin-right: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:3 {\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:4 {\n    margin: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:4 {\n    margin-top: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:4 {\n    margin-right: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:4 {\n    margin-bottom: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:4 {\n    margin-left: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:4 {\n    margin-left: 4rem;\n    margin-right: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:4 {\n    margin-top: 4rem;\n    margin-bottom: 4rem;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:m\\:auto {\n    margin: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mt\\:auto {\n    margin-top: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mr\\:auto {\n    margin-right: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mb\\:auto {\n    margin-bottom: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:ml\\:auto {\n    margin-left: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:mx\\:auto {\n    margin-left: auto;\n    margin-right: auto;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:my\\:auto {\n    margin-top: auto;\n    margin-bottom: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:0 {\n    margin: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:0 {\n    margin-top: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:0 {\n    margin-right: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:0 {\n    margin-bottom: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:0 {\n    margin-left: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:0 {\n    margin-left: 0;\n    margin-right: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:0 {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:1\\/5 {\n    margin: calc(1rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:1\\/5 {\n    margin-top: calc(1rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:1\\/5 {\n    margin-right: calc(1rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:1\\/5 {\n    margin-bottom: calc(1rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:1\\/5 {\n    margin-left: calc(1rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:1\\/5 {\n    margin-left: calc(1rem / 5);\n    margin-right: calc(1rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:1\\/5 {\n    margin-top: calc(1rem / 5);\n    margin-bottom: calc(1rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:1\\/4 {\n    margin: calc(1rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:1\\/4 {\n    margin-top: calc(1rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:1\\/4 {\n    margin-right: calc(1rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:1\\/4 {\n    margin-bottom: calc(1rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:1\\/4 {\n    margin-left: calc(1rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:1\\/4 {\n    margin-left: calc(1rem / 4);\n    margin-right: calc(1rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:1\\/4 {\n    margin-top: calc(1rem / 4);\n    margin-bottom: calc(1rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:1\\/3 {\n    margin: calc(1rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:1\\/3 {\n    margin-top: calc(1rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:1\\/3 {\n    margin-right: calc(1rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:1\\/3 {\n    margin-bottom: calc(1rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:1\\/3 {\n    margin-left: calc(1rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:1\\/3 {\n    margin-left: calc(1rem / 3);\n    margin-right: calc(1rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:1\\/3 {\n    margin-top: calc(1rem / 3);\n    margin-bottom: calc(1rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:2\\/5 {\n    margin: calc(2rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:2\\/5 {\n    margin-top: calc(2rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:2\\/5 {\n    margin-right: calc(2rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:2\\/5 {\n    margin-bottom: calc(2rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:2\\/5 {\n    margin-left: calc(2rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:2\\/5 {\n    margin-left: calc(2rem / 5);\n    margin-right: calc(2rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:2\\/5 {\n    margin-top: calc(2rem / 5);\n    margin-bottom: calc(2rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:1\\/2 {\n    margin: calc(1rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:1\\/2 {\n    margin-top: calc(1rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:1\\/2 {\n    margin-right: calc(1rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:1\\/2 {\n    margin-bottom: calc(1rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:1\\/2 {\n    margin-left: calc(1rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:1\\/2 {\n    margin-left: calc(1rem / 2);\n    margin-right: calc(1rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:1\\/2 {\n    margin-top: calc(1rem / 2);\n    margin-bottom: calc(1rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:3\\/5 {\n    margin: calc(3rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:3\\/5 {\n    margin-top: calc(3rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:3\\/5 {\n    margin-right: calc(3rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:3\\/5 {\n    margin-bottom: calc(3rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:3\\/5 {\n    margin-left: calc(3rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:3\\/5 {\n    margin-left: calc(3rem / 5);\n    margin-right: calc(3rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:3\\/5 {\n    margin-top: calc(3rem / 5);\n    margin-bottom: calc(3rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:2\\/3 {\n    margin: calc(2rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:2\\/3 {\n    margin-top: calc(2rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:2\\/3 {\n    margin-right: calc(2rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:2\\/3 {\n    margin-bottom: calc(2rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:2\\/3 {\n    margin-left: calc(2rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:2\\/3 {\n    margin-left: calc(2rem / 3);\n    margin-right: calc(2rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:2\\/3 {\n    margin-top: calc(2rem / 3);\n    margin-bottom: calc(2rem / 3);\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:3\\/4 {\n    margin: calc(3rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:3\\/4 {\n    margin-top: calc(3rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:3\\/4 {\n    margin-right: calc(3rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:3\\/4 {\n    margin-bottom: calc(3rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:3\\/4 {\n    margin-left: calc(3rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:3\\/4 {\n    margin-left: calc(3rem / 4);\n    margin-right: calc(3rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:3\\/4 {\n    margin-top: calc(3rem / 4);\n    margin-bottom: calc(3rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:4\\/5 {\n    margin: calc(4rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:4\\/5 {\n    margin-top: calc(4rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:4\\/5 {\n    margin-right: calc(4rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:4\\/5 {\n    margin-bottom: calc(4rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:4\\/5 {\n    margin-left: calc(4rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:4\\/5 {\n    margin-left: calc(4rem / 5);\n    margin-right: calc(4rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:4\\/5 {\n    margin-top: calc(4rem / 5);\n    margin-bottom: calc(4rem / 5);\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:1 {\n    margin: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:1 {\n    margin-top: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:1 {\n    margin-right: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:1 {\n    margin-bottom: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:1 {\n    margin-left: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:1 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:1 {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:5\\/4 {\n    margin: calc(5rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:5\\/4 {\n    margin-top: calc(5rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:5\\/4 {\n    margin-right: calc(5rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:5\\/4 {\n    margin-bottom: calc(5rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:5\\/4 {\n    margin-left: calc(5rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:5\\/4 {\n    margin-left: calc(5rem / 4);\n    margin-right: calc(5rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:5\\/4 {\n    margin-top: calc(5rem / 4);\n    margin-bottom: calc(5rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:3\\/2 {\n    margin: calc(3rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:3\\/2 {\n    margin-top: calc(3rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:3\\/2 {\n    margin-right: calc(3rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:3\\/2 {\n    margin-bottom: calc(3rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:3\\/2 {\n    margin-left: calc(3rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:3\\/2 {\n    margin-left: calc(3rem / 2);\n    margin-right: calc(3rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:3\\/2 {\n    margin-top: calc(3rem / 2);\n    margin-bottom: calc(3rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:7\\/4 {\n    margin: calc(7rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:7\\/4 {\n    margin-top: calc(7rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:7\\/4 {\n    margin-right: calc(7rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:7\\/4 {\n    margin-bottom: calc(7rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:7\\/4 {\n    margin-left: calc(7rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:7\\/4 {\n    margin-left: calc(7rem / 4);\n    margin-right: calc(7rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:7\\/4 {\n    margin-top: calc(7rem / 4);\n    margin-bottom: calc(7rem / 4);\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:2 {\n    margin: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:2 {\n    margin-top: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:2 {\n    margin-right: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:2 {\n    margin-bottom: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:2 {\n    margin-left: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:2 {\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:2 {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:5\\/2 {\n    margin: calc(5rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:5\\/2 {\n    margin-top: calc(5rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:5\\/2 {\n    margin-right: calc(5rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:5\\/2 {\n    margin-bottom: calc(5rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:5\\/2 {\n    margin-left: calc(5rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:5\\/2 {\n    margin-left: calc(5rem / 2);\n    margin-right: calc(5rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:5\\/2 {\n    margin-top: calc(5rem / 2);\n    margin-bottom: calc(5rem / 2);\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:3 {\n    margin: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:3 {\n    margin-top: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:3 {\n    margin-right: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:3 {\n    margin-bottom: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:3 {\n    margin-left: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:3 {\n    margin-left: 3rem;\n    margin-right: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:3 {\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:4 {\n    margin: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:4 {\n    margin-top: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:4 {\n    margin-right: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:4 {\n    margin-bottom: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:4 {\n    margin-left: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:4 {\n    margin-left: 4rem;\n    margin-right: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:4 {\n    margin-top: 4rem;\n    margin-bottom: 4rem;\n}\n}\n@media (min-width: 50rem) {\n.md\\:m\\:auto {\n    margin: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mt\\:auto {\n    margin-top: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mr\\:auto {\n    margin-right: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mb\\:auto {\n    margin-bottom: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:ml\\:auto {\n    margin-left: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:mx\\:auto {\n    margin-left: auto;\n    margin-right: auto;\n}\n}\n@media (min-width: 50rem) {\n.md\\:my\\:auto {\n    margin-top: auto;\n    margin-bottom: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:0 {\n    margin: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:0 {\n    margin-top: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:0 {\n    margin-right: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:0 {\n    margin-bottom: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:0 {\n    margin-left: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:0 {\n    margin-left: 0;\n    margin-right: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:0 {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:1\\/5 {\n    margin: calc(1rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:1\\/5 {\n    margin-top: calc(1rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:1\\/5 {\n    margin-right: calc(1rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:1\\/5 {\n    margin-bottom: calc(1rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:1\\/5 {\n    margin-left: calc(1rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:1\\/5 {\n    margin-left: calc(1rem / 5);\n    margin-right: calc(1rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:1\\/5 {\n    margin-top: calc(1rem / 5);\n    margin-bottom: calc(1rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:1\\/4 {\n    margin: calc(1rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:1\\/4 {\n    margin-top: calc(1rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:1\\/4 {\n    margin-right: calc(1rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:1\\/4 {\n    margin-bottom: calc(1rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:1\\/4 {\n    margin-left: calc(1rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:1\\/4 {\n    margin-left: calc(1rem / 4);\n    margin-right: calc(1rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:1\\/4 {\n    margin-top: calc(1rem / 4);\n    margin-bottom: calc(1rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:1\\/3 {\n    margin: calc(1rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:1\\/3 {\n    margin-top: calc(1rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:1\\/3 {\n    margin-right: calc(1rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:1\\/3 {\n    margin-bottom: calc(1rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:1\\/3 {\n    margin-left: calc(1rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:1\\/3 {\n    margin-left: calc(1rem / 3);\n    margin-right: calc(1rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:1\\/3 {\n    margin-top: calc(1rem / 3);\n    margin-bottom: calc(1rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:2\\/5 {\n    margin: calc(2rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:2\\/5 {\n    margin-top: calc(2rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:2\\/5 {\n    margin-right: calc(2rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:2\\/5 {\n    margin-bottom: calc(2rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:2\\/5 {\n    margin-left: calc(2rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:2\\/5 {\n    margin-left: calc(2rem / 5);\n    margin-right: calc(2rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:2\\/5 {\n    margin-top: calc(2rem / 5);\n    margin-bottom: calc(2rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:1\\/2 {\n    margin: calc(1rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:1\\/2 {\n    margin-top: calc(1rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:1\\/2 {\n    margin-right: calc(1rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:1\\/2 {\n    margin-bottom: calc(1rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:1\\/2 {\n    margin-left: calc(1rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:1\\/2 {\n    margin-left: calc(1rem / 2);\n    margin-right: calc(1rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:1\\/2 {\n    margin-top: calc(1rem / 2);\n    margin-bottom: calc(1rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:3\\/5 {\n    margin: calc(3rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:3\\/5 {\n    margin-top: calc(3rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:3\\/5 {\n    margin-right: calc(3rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:3\\/5 {\n    margin-bottom: calc(3rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:3\\/5 {\n    margin-left: calc(3rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:3\\/5 {\n    margin-left: calc(3rem / 5);\n    margin-right: calc(3rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:3\\/5 {\n    margin-top: calc(3rem / 5);\n    margin-bottom: calc(3rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:2\\/3 {\n    margin: calc(2rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:2\\/3 {\n    margin-top: calc(2rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:2\\/3 {\n    margin-right: calc(2rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:2\\/3 {\n    margin-bottom: calc(2rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:2\\/3 {\n    margin-left: calc(2rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:2\\/3 {\n    margin-left: calc(2rem / 3);\n    margin-right: calc(2rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:2\\/3 {\n    margin-top: calc(2rem / 3);\n    margin-bottom: calc(2rem / 3);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:3\\/4 {\n    margin: calc(3rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:3\\/4 {\n    margin-top: calc(3rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:3\\/4 {\n    margin-right: calc(3rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:3\\/4 {\n    margin-bottom: calc(3rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:3\\/4 {\n    margin-left: calc(3rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:3\\/4 {\n    margin-left: calc(3rem / 4);\n    margin-right: calc(3rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:3\\/4 {\n    margin-top: calc(3rem / 4);\n    margin-bottom: calc(3rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:4\\/5 {\n    margin: calc(4rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:4\\/5 {\n    margin-top: calc(4rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:4\\/5 {\n    margin-right: calc(4rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:4\\/5 {\n    margin-bottom: calc(4rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:4\\/5 {\n    margin-left: calc(4rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:4\\/5 {\n    margin-left: calc(4rem / 5);\n    margin-right: calc(4rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:4\\/5 {\n    margin-top: calc(4rem / 5);\n    margin-bottom: calc(4rem / 5);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:1 {\n    margin: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:1 {\n    margin-top: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:1 {\n    margin-right: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:1 {\n    margin-bottom: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:1 {\n    margin-left: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:1 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:1 {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:5\\/4 {\n    margin: calc(5rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:5\\/4 {\n    margin-top: calc(5rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:5\\/4 {\n    margin-right: calc(5rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:5\\/4 {\n    margin-bottom: calc(5rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:5\\/4 {\n    margin-left: calc(5rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:5\\/4 {\n    margin-left: calc(5rem / 4);\n    margin-right: calc(5rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:5\\/4 {\n    margin-top: calc(5rem / 4);\n    margin-bottom: calc(5rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:3\\/2 {\n    margin: calc(3rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:3\\/2 {\n    margin-top: calc(3rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:3\\/2 {\n    margin-right: calc(3rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:3\\/2 {\n    margin-bottom: calc(3rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:3\\/2 {\n    margin-left: calc(3rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:3\\/2 {\n    margin-left: calc(3rem / 2);\n    margin-right: calc(3rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:3\\/2 {\n    margin-top: calc(3rem / 2);\n    margin-bottom: calc(3rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:7\\/4 {\n    margin: calc(7rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:7\\/4 {\n    margin-top: calc(7rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:7\\/4 {\n    margin-right: calc(7rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:7\\/4 {\n    margin-bottom: calc(7rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:7\\/4 {\n    margin-left: calc(7rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:7\\/4 {\n    margin-left: calc(7rem / 4);\n    margin-right: calc(7rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:7\\/4 {\n    margin-top: calc(7rem / 4);\n    margin-bottom: calc(7rem / 4);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:2 {\n    margin: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:2 {\n    margin-top: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:2 {\n    margin-right: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:2 {\n    margin-bottom: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:2 {\n    margin-left: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:2 {\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:2 {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:5\\/2 {\n    margin: calc(5rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:5\\/2 {\n    margin-top: calc(5rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:5\\/2 {\n    margin-right: calc(5rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:5\\/2 {\n    margin-bottom: calc(5rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:5\\/2 {\n    margin-left: calc(5rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:5\\/2 {\n    margin-left: calc(5rem / 2);\n    margin-right: calc(5rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:5\\/2 {\n    margin-top: calc(5rem / 2);\n    margin-bottom: calc(5rem / 2);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:3 {\n    margin: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:3 {\n    margin-top: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:3 {\n    margin-right: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:3 {\n    margin-bottom: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:3 {\n    margin-left: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:3 {\n    margin-left: 3rem;\n    margin-right: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:3 {\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:4 {\n    margin: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:4 {\n    margin-top: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:4 {\n    margin-right: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:4 {\n    margin-bottom: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:4 {\n    margin-left: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:4 {\n    margin-left: 4rem;\n    margin-right: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:4 {\n    margin-top: 4rem;\n    margin-bottom: 4rem;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:m\\:auto {\n    margin: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mt\\:auto {\n    margin-top: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mr\\:auto {\n    margin-right: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mb\\:auto {\n    margin-bottom: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:ml\\:auto {\n    margin-left: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:mx\\:auto {\n    margin-left: auto;\n    margin-right: auto;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:my\\:auto {\n    margin-top: auto;\n    margin-bottom: auto;\n}\n}\n.text\\:left {\n  text-align: left;\n}\n.text\\:center {\n  text-align: center;\n}\n.text\\:right {\n  text-align: right;\n}\n.text\\:justify {\n  text-align: justify;\n}\n@media (min-width: 40rem) {\n.sm\\:text\\:left {\n    text-align: left;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:text\\:center {\n    text-align: center;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:text\\:right {\n    text-align: right;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:text\\:justify {\n    text-align: justify;\n}\n}\n@media (min-width: 50rem) {\n.md\\:text\\:left {\n    text-align: left;\n}\n}\n@media (min-width: 50rem) {\n.md\\:text\\:center {\n    text-align: center;\n}\n}\n@media (min-width: 50rem) {\n.md\\:text\\:right {\n    text-align: right;\n}\n}\n@media (min-width: 50rem) {\n.md\\:text\\:justify {\n    text-align: justify;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:text\\:left {\n    text-align: left;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:text\\:center {\n    text-align: center;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:text\\:right {\n    text-align: right;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:text\\:justify {\n    text-align: justify;\n}\n}\n.text\\:1\\/2 {\n  font-size: calc(1rem / 2);\n}\n.text\\:3\\/4 {\n  font-size: calc(3rem / 4);\n}\n.text\\:7\\/8 {\n  font-size: calc(7rem / 8);\n}\n.text\\:1 {\n  font-size: 1rem;\n}\n.text\\:9\\/8 {\n  font-size: calc(9rem / 8);\n}\n.text\\:5\\/4 {\n  font-size: calc(5rem / 4);\n}\n.text\\:3\\/2 {\n  font-size: calc(3rem / 2);\n}\n.text\\:7\\/4 {\n  font-size: calc(7rem / 4);\n}\n.text\\:2 {\n  font-size: 2rem;\n}\n.text\\:3 {\n  font-size: 3rem;\n}\n.text\\:lightest {\n  font-weight: 100;\n}\n.text\\:lighter {\n  font-weight: 200;\n}\n.text\\:light {\n  font-weight: 300;\n}\n.text\\:normal, table thead th {\n  font-weight: 400;\n}\n.text\\:bold {\n  font-weight: 500;\n}\n.text\\:bolder {\n  font-weight: 600;\n}\n.text\\:boldest {\n  font-weight: 700;\n}\n.line-height\\:1\\/2 {\n  line-height: 0.5rem;\n}\n.line-height\\:3\\/4 {\n  line-height: 0.75rem;\n}\n.line-height\\:1 {\n  line-height: 1rem;\n}\n.line-height\\:3\\/2 {\n  line-height: 1.5rem;\n}\n.line-height\\:2 {\n  line-height: 2rem;\n}\n.line-height\\:5\\/2 {\n  line-height: 2.5rem;\n}\n.line-height\\:3 {\n  line-height: 3rem;\n}\n.list-reset {\n  list-style: none;\n  padding: 0;\n}\n.placeholder\\:transparent::placeholder {\n  color: transparent;\n}\n.placeholder\\:black::placeholder {\n  color: #22292f;\n}\n.placeholder\\:grey-darkest::placeholder {\n  color: #3d4852;\n}\n.placeholder\\:grey-darker::placeholder {\n  color: #606f7b;\n}\n.placeholder\\:grey-dark::placeholder {\n  color: #8795a1;\n}\n.placeholder\\:grey::placeholder {\n  color: #b8c2cc;\n}\n.placeholder\\:grey-light::placeholder {\n  color: #dae1e7;\n}\n.placeholder\\:grey-lighter::placeholder {\n  color: #f1f5f8;\n}\n.placeholder\\:grey-lightest::placeholder {\n  color: #f8fafc;\n}\n.placeholder\\:white::placeholder {\n  color: #ffffff;\n}\n.placeholder\\:red-darkest::placeholder {\n  color: #3b0d0c;\n}\n.placeholder\\:red-darker::placeholder {\n  color: #621b18;\n}\n.placeholder\\:red-dark::placeholder {\n  color: #cc1f1a;\n}\n.placeholder\\:red::placeholder {\n  color: #f44040;\n}\n.placeholder\\:red-light::placeholder {\n  color: #f75f51;\n}\n.placeholder\\:red-lighter::placeholder {\n  color: #f9acaa;\n}\n.placeholder\\:red-lightest::placeholder {\n  color: #ffd8d4;\n}\n.placeholder\\:orange-darkest::placeholder {\n  color: #c64411;\n}\n.placeholder\\:orange-darker::placeholder {\n  color: #d86501;\n}\n.placeholder\\:orange-dark::placeholder {\n  color: #f27e19;\n}\n.placeholder\\:orange::placeholder {\n  color: #ff9334;\n}\n.placeholder\\:orange-light::placeholder {\n  color: #faad63;\n}\n.placeholder\\:orange-lighter::placeholder {\n  color: #fcd9b6;\n}\n.placeholder\\:orange-lightest::placeholder {\n  color: #fff5eb;\n}\n.placeholder\\:yellow-darkest::placeholder {\n  color: #453411;\n}\n.placeholder\\:yellow-darker::placeholder {\n  color: #684f1d;\n}\n.placeholder\\:yellow-dark::placeholder {\n  color: #f2d024;\n}\n.placeholder\\:yellow::placeholder {\n  color: #ffed4a;\n}\n.placeholder\\:yellow-light::placeholder {\n  color: #fff382;\n}\n.placeholder\\:yellow-lighter::placeholder {\n  color: #fff9c2;\n}\n.placeholder\\:yellow-lightest::placeholder {\n  color: #fcfbeb;\n}\n.placeholder\\:teal-darkest::placeholder {\n  color: #0d3331;\n}\n.placeholder\\:teal-darker::placeholder {\n  color: #006875;\n}\n.placeholder\\:teal-dark::placeholder {\n  color: #017887;\n}\n.placeholder\\:teal::placeholder {\n  color: #019bae;\n}\n.placeholder\\:teal-light::placeholder {\n  color: #3bbcc7;\n}\n.placeholder\\:teal-lighter::placeholder {\n  color: #c0f1f5;\n}\n.placeholder\\:teal-lightest::placeholder {\n  color: #e8fffe;\n}\n.placeholder\\:green-darkest::placeholder {\n  color: #0f2f21;\n}\n.placeholder\\:green-darker::placeholder {\n  color: #1a4731;\n}\n.placeholder\\:green-dark::placeholder {\n  color: #1f9d55;\n}\n.placeholder\\:green::placeholder {\n  color: #11b776;\n}\n.placeholder\\:green-light::placeholder {\n  color: #51d88a;\n}\n.placeholder\\:green-lighter::placeholder {\n  color: #a2f5bf;\n}\n.placeholder\\:green-lightest::placeholder {\n  color: #e3fcec;\n}\n.placeholder\\:blue-darkest::placeholder {\n  color: #12283a;\n}\n.placeholder\\:blue-darker::placeholder {\n  color: #1c3d5a;\n}\n.placeholder\\:blue-dark::placeholder {\n  color: #2779bd;\n}\n.placeholder\\:blue::placeholder {\n  color: #3490dc;\n}\n.placeholder\\:blue-light::placeholder {\n  color: #6cb2eb;\n}\n.placeholder\\:blue-lighter::placeholder {\n  color: #bcdefa;\n}\n.placeholder\\:blue-lightest::placeholder {\n  color: #eff8ff;\n}\n.placeholder\\:indigo-darkest::placeholder {\n  color: #191e38;\n}\n.placeholder\\:indigo-darker::placeholder {\n  color: #2f365f;\n}\n.placeholder\\:indigo-dark::placeholder {\n  color: #5661b3;\n}\n.placeholder\\:indigo::placeholder {\n  color: #6574cd;\n}\n.placeholder\\:indigo-light::placeholder {\n  color: #7886d7;\n}\n.placeholder\\:indigo-lighter::placeholder {\n  color: #b2b7ff;\n}\n.placeholder\\:indigo-lightest::placeholder {\n  color: #e6e8ff;\n}\n.placeholder\\:purple-darkest::placeholder {\n  color: #21183c;\n}\n.placeholder\\:purple-darker::placeholder {\n  color: #382b5f;\n}\n.placeholder\\:purple-dark::placeholder {\n  color: #794acf;\n}\n.placeholder\\:purple::placeholder {\n  color: #9561e2;\n}\n.placeholder\\:purple-light::placeholder {\n  color: #a779e9;\n}\n.placeholder\\:purple-lighter::placeholder {\n  color: #d6bbfc;\n}\n.placeholder\\:purple-lightest::placeholder {\n  color: #f3ebff;\n}\n.placeholder\\:pink-darkest::placeholder {\n  color: #451225;\n}\n.placeholder\\:pink-darker::placeholder {\n  color: #6f213f;\n}\n.placeholder\\:pink-dark::placeholder {\n  color: #eb5286;\n}\n.placeholder\\:pink::placeholder {\n  color: #f66d9b;\n}\n.placeholder\\:pink-light::placeholder {\n  color: #fa7ea8;\n}\n.placeholder\\:pink-lighter::placeholder {\n  color: #ffbbca;\n}\n.placeholder\\:pink-lightest::placeholder {\n  color: #ffebef;\n}\n.text\\:transparent {\n  color: transparent;\n}\n.text\\:black {\n  color: #22292f;\n}\n.text\\:grey-darkest {\n  color: #3d4852;\n}\n.text\\:grey-darker {\n  color: #606f7b;\n}\n.text\\:grey-dark {\n  color: #8795a1;\n}\n.text\\:grey {\n  color: #b8c2cc;\n}\n.text\\:grey-light {\n  color: #dae1e7;\n}\n.text\\:grey-lighter {\n  color: #f1f5f8;\n}\n.text\\:grey-lightest {\n  color: #f8fafc;\n}\n.text\\:white {\n  color: #ffffff;\n}\n.text\\:red-darkest {\n  color: #3b0d0c;\n}\n.text\\:red-darker {\n  color: #621b18;\n}\n.text\\:red-dark {\n  color: #cc1f1a;\n}\n.text\\:red {\n  color: #f44040;\n}\n.text\\:red-light {\n  color: #f75f51;\n}\n.text\\:red-lighter {\n  color: #f9acaa;\n}\n.text\\:red-lightest {\n  color: #ffd8d4;\n}\n.text\\:orange-darkest {\n  color: #c64411;\n}\n.text\\:orange-darker {\n  color: #d86501;\n}\n.text\\:orange-dark {\n  color: #f27e19;\n}\n.text\\:orange {\n  color: #ff9334;\n}\n.text\\:orange-light {\n  color: #faad63;\n}\n.text\\:orange-lighter {\n  color: #fcd9b6;\n}\n.text\\:orange-lightest {\n  color: #fff5eb;\n}\n.text\\:yellow-darkest {\n  color: #453411;\n}\n.text\\:yellow-darker {\n  color: #684f1d;\n}\n.text\\:yellow-dark {\n  color: #f2d024;\n}\n.text\\:yellow {\n  color: #ffed4a;\n}\n.text\\:yellow-light {\n  color: #fff382;\n}\n.text\\:yellow-lighter {\n  color: #fff9c2;\n}\n.text\\:yellow-lightest {\n  color: #fcfbeb;\n}\n.text\\:teal-darkest {\n  color: #0d3331;\n}\n.text\\:teal-darker {\n  color: #006875;\n}\n.text\\:teal-dark {\n  color: #017887;\n}\n.text\\:teal, table thead th {\n  color: #019bae;\n}\n.text\\:teal-light {\n  color: #3bbcc7;\n}\n.text\\:teal-lighter {\n  color: #c0f1f5;\n}\n.text\\:teal-lightest {\n  color: #e8fffe;\n}\n.text\\:green-darkest {\n  color: #0f2f21;\n}\n.text\\:green-darker {\n  color: #1a4731;\n}\n.text\\:green-dark {\n  color: #1f9d55;\n}\n.text\\:green {\n  color: #11b776;\n}\n.text\\:green-light {\n  color: #51d88a;\n}\n.text\\:green-lighter {\n  color: #a2f5bf;\n}\n.text\\:green-lightest {\n  color: #e3fcec;\n}\n.text\\:blue-darkest {\n  color: #12283a;\n}\n.text\\:blue-darker {\n  color: #1c3d5a;\n}\n.text\\:blue-dark {\n  color: #2779bd;\n}\n.text\\:blue {\n  color: #3490dc;\n}\n.text\\:blue-light {\n  color: #6cb2eb;\n}\n.text\\:blue-lighter {\n  color: #bcdefa;\n}\n.text\\:blue-lightest {\n  color: #eff8ff;\n}\n.text\\:indigo-darkest {\n  color: #191e38;\n}\n.text\\:indigo-darker {\n  color: #2f365f;\n}\n.text\\:indigo-dark {\n  color: #5661b3;\n}\n.text\\:indigo {\n  color: #6574cd;\n}\n.text\\:indigo-light {\n  color: #7886d7;\n}\n.text\\:indigo-lighter {\n  color: #b2b7ff;\n}\n.text\\:indigo-lightest {\n  color: #e6e8ff;\n}\n.text\\:purple-darkest {\n  color: #21183c;\n}\n.text\\:purple-darker {\n  color: #382b5f;\n}\n.text\\:purple-dark {\n  color: #794acf;\n}\n.text\\:purple {\n  color: #9561e2;\n}\n.text\\:purple-light {\n  color: #a779e9;\n}\n.text\\:purple-lighter {\n  color: #d6bbfc;\n}\n.text\\:purple-lightest {\n  color: #f3ebff;\n}\n.text\\:pink-darkest {\n  color: #451225;\n}\n.text\\:pink-darker {\n  color: #6f213f;\n}\n.text\\:pink-dark {\n  color: #eb5286;\n}\n.text\\:pink {\n  color: #f66d9b;\n}\n.text\\:pink-light {\n  color: #fa7ea8;\n}\n.text\\:pink-lighter {\n  color: #ffbbca;\n}\n.text\\:pink-lightest {\n  color: #ffebef;\n}\n.hover\\:text\\:transparent:hover {\n  color: transparent;\n}\n.hover\\:text\\:black:hover {\n  color: #22292f;\n}\n.hover\\:text\\:grey-darkest:hover {\n  color: #3d4852;\n}\n.hover\\:text\\:grey-darker:hover {\n  color: #606f7b;\n}\n.hover\\:text\\:grey-dark:hover {\n  color: #8795a1;\n}\n.hover\\:text\\:grey:hover {\n  color: #b8c2cc;\n}\n.hover\\:text\\:grey-light:hover {\n  color: #dae1e7;\n}\n.hover\\:text\\:grey-lighter:hover {\n  color: #f1f5f8;\n}\n.hover\\:text\\:grey-lightest:hover {\n  color: #f8fafc;\n}\n.hover\\:text\\:white:hover {\n  color: #ffffff;\n}\n.hover\\:text\\:red-darkest:hover {\n  color: #3b0d0c;\n}\n.hover\\:text\\:red-darker:hover {\n  color: #621b18;\n}\n.hover\\:text\\:red-dark:hover {\n  color: #cc1f1a;\n}\n.hover\\:text\\:red:hover {\n  color: #f44040;\n}\n.hover\\:text\\:red-light:hover {\n  color: #f75f51;\n}\n.hover\\:text\\:red-lighter:hover {\n  color: #f9acaa;\n}\n.hover\\:text\\:red-lightest:hover {\n  color: #ffd8d4;\n}\n.hover\\:text\\:orange-darkest:hover {\n  color: #c64411;\n}\n.hover\\:text\\:orange-darker:hover {\n  color: #d86501;\n}\n.hover\\:text\\:orange-dark:hover {\n  color: #f27e19;\n}\n.hover\\:text\\:orange:hover {\n  color: #ff9334;\n}\n.hover\\:text\\:orange-light:hover {\n  color: #faad63;\n}\n.hover\\:text\\:orange-lighter:hover {\n  color: #fcd9b6;\n}\n.hover\\:text\\:orange-lightest:hover {\n  color: #fff5eb;\n}\n.hover\\:text\\:yellow-darkest:hover {\n  color: #453411;\n}\n.hover\\:text\\:yellow-darker:hover {\n  color: #684f1d;\n}\n.hover\\:text\\:yellow-dark:hover {\n  color: #f2d024;\n}\n.hover\\:text\\:yellow:hover {\n  color: #ffed4a;\n}\n.hover\\:text\\:yellow-light:hover {\n  color: #fff382;\n}\n.hover\\:text\\:yellow-lighter:hover {\n  color: #fff9c2;\n}\n.hover\\:text\\:yellow-lightest:hover {\n  color: #fcfbeb;\n}\n.hover\\:text\\:teal-darkest:hover {\n  color: #0d3331;\n}\n.hover\\:text\\:teal-darker:hover {\n  color: #006875;\n}\n.hover\\:text\\:teal-dark:hover {\n  color: #017887;\n}\n.hover\\:text\\:teal:hover {\n  color: #019bae;\n}\n.hover\\:text\\:teal-light:hover {\n  color: #3bbcc7;\n}\n.hover\\:text\\:teal-lighter:hover {\n  color: #c0f1f5;\n}\n.hover\\:text\\:teal-lightest:hover {\n  color: #e8fffe;\n}\n.hover\\:text\\:green-darkest:hover {\n  color: #0f2f21;\n}\n.hover\\:text\\:green-darker:hover {\n  color: #1a4731;\n}\n.hover\\:text\\:green-dark:hover {\n  color: #1f9d55;\n}\n.hover\\:text\\:green:hover {\n  color: #11b776;\n}\n.hover\\:text\\:green-light:hover {\n  color: #51d88a;\n}\n.hover\\:text\\:green-lighter:hover {\n  color: #a2f5bf;\n}\n.hover\\:text\\:green-lightest:hover {\n  color: #e3fcec;\n}\n.hover\\:text\\:blue-darkest:hover {\n  color: #12283a;\n}\n.hover\\:text\\:blue-darker:hover {\n  color: #1c3d5a;\n}\n.hover\\:text\\:blue-dark:hover {\n  color: #2779bd;\n}\n.hover\\:text\\:blue:hover {\n  color: #3490dc;\n}\n.hover\\:text\\:blue-light:hover {\n  color: #6cb2eb;\n}\n.hover\\:text\\:blue-lighter:hover {\n  color: #bcdefa;\n}\n.hover\\:text\\:blue-lightest:hover {\n  color: #eff8ff;\n}\n.hover\\:text\\:indigo-darkest:hover {\n  color: #191e38;\n}\n.hover\\:text\\:indigo-darker:hover {\n  color: #2f365f;\n}\n.hover\\:text\\:indigo-dark:hover {\n  color: #5661b3;\n}\n.hover\\:text\\:indigo:hover {\n  color: #6574cd;\n}\n.hover\\:text\\:indigo-light:hover {\n  color: #7886d7;\n}\n.hover\\:text\\:indigo-lighter:hover {\n  color: #b2b7ff;\n}\n.hover\\:text\\:indigo-lightest:hover {\n  color: #e6e8ff;\n}\n.hover\\:text\\:purple-darkest:hover {\n  color: #21183c;\n}\n.hover\\:text\\:purple-darker:hover {\n  color: #382b5f;\n}\n.hover\\:text\\:purple-dark:hover {\n  color: #794acf;\n}\n.hover\\:text\\:purple:hover {\n  color: #9561e2;\n}\n.hover\\:text\\:purple-light:hover {\n  color: #a779e9;\n}\n.hover\\:text\\:purple-lighter:hover {\n  color: #d6bbfc;\n}\n.hover\\:text\\:purple-lightest:hover {\n  color: #f3ebff;\n}\n.hover\\:text\\:pink-darkest:hover {\n  color: #451225;\n}\n.hover\\:text\\:pink-darker:hover {\n  color: #6f213f;\n}\n.hover\\:text\\:pink-dark:hover {\n  color: #eb5286;\n}\n.hover\\:text\\:pink:hover {\n  color: #f66d9b;\n}\n.hover\\:text\\:pink-light:hover {\n  color: #fa7ea8;\n}\n.hover\\:text\\:pink-lighter:hover {\n  color: #ffbbca;\n}\n.hover\\:text\\:pink-lightest:hover {\n  color: #ffebef;\n}\n.disabled\\:text\\:transparent:disabled {\n  color: transparent;\n}\n.disabled\\:text\\:black:disabled {\n  color: #22292f;\n}\n.disabled\\:text\\:grey-darkest:disabled {\n  color: #3d4852;\n}\n.disabled\\:text\\:grey-darker:disabled {\n  color: #606f7b;\n}\n.disabled\\:text\\:grey-dark:disabled {\n  color: #8795a1;\n}\n.disabled\\:text\\:grey:disabled {\n  color: #b8c2cc;\n}\n.disabled\\:text\\:grey-light:disabled {\n  color: #dae1e7;\n}\n.disabled\\:text\\:grey-lighter:disabled {\n  color: #f1f5f8;\n}\n.disabled\\:text\\:grey-lightest:disabled {\n  color: #f8fafc;\n}\n.disabled\\:text\\:white:disabled {\n  color: #ffffff;\n}\n.disabled\\:text\\:red-darkest:disabled {\n  color: #3b0d0c;\n}\n.disabled\\:text\\:red-darker:disabled {\n  color: #621b18;\n}\n.disabled\\:text\\:red-dark:disabled {\n  color: #cc1f1a;\n}\n.disabled\\:text\\:red:disabled {\n  color: #f44040;\n}\n.disabled\\:text\\:red-light:disabled {\n  color: #f75f51;\n}\n.disabled\\:text\\:red-lighter:disabled {\n  color: #f9acaa;\n}\n.disabled\\:text\\:red-lightest:disabled {\n  color: #ffd8d4;\n}\n.disabled\\:text\\:orange-darkest:disabled {\n  color: #c64411;\n}\n.disabled\\:text\\:orange-darker:disabled {\n  color: #d86501;\n}\n.disabled\\:text\\:orange-dark:disabled {\n  color: #f27e19;\n}\n.disabled\\:text\\:orange:disabled {\n  color: #ff9334;\n}\n.disabled\\:text\\:orange-light:disabled {\n  color: #faad63;\n}\n.disabled\\:text\\:orange-lighter:disabled {\n  color: #fcd9b6;\n}\n.disabled\\:text\\:orange-lightest:disabled {\n  color: #fff5eb;\n}\n.disabled\\:text\\:yellow-darkest:disabled {\n  color: #453411;\n}\n.disabled\\:text\\:yellow-darker:disabled {\n  color: #684f1d;\n}\n.disabled\\:text\\:yellow-dark:disabled {\n  color: #f2d024;\n}\n.disabled\\:text\\:yellow:disabled {\n  color: #ffed4a;\n}\n.disabled\\:text\\:yellow-light:disabled {\n  color: #fff382;\n}\n.disabled\\:text\\:yellow-lighter:disabled {\n  color: #fff9c2;\n}\n.disabled\\:text\\:yellow-lightest:disabled {\n  color: #fcfbeb;\n}\n.disabled\\:text\\:teal-darkest:disabled {\n  color: #0d3331;\n}\n.disabled\\:text\\:teal-darker:disabled {\n  color: #006875;\n}\n.disabled\\:text\\:teal-dark:disabled {\n  color: #017887;\n}\n.disabled\\:text\\:teal:disabled {\n  color: #019bae;\n}\n.disabled\\:text\\:teal-light:disabled {\n  color: #3bbcc7;\n}\n.disabled\\:text\\:teal-lighter:disabled {\n  color: #c0f1f5;\n}\n.disabled\\:text\\:teal-lightest:disabled {\n  color: #e8fffe;\n}\n.disabled\\:text\\:green-darkest:disabled {\n  color: #0f2f21;\n}\n.disabled\\:text\\:green-darker:disabled {\n  color: #1a4731;\n}\n.disabled\\:text\\:green-dark:disabled {\n  color: #1f9d55;\n}\n.disabled\\:text\\:green:disabled {\n  color: #11b776;\n}\n.disabled\\:text\\:green-light:disabled {\n  color: #51d88a;\n}\n.disabled\\:text\\:green-lighter:disabled {\n  color: #a2f5bf;\n}\n.disabled\\:text\\:green-lightest:disabled {\n  color: #e3fcec;\n}\n.disabled\\:text\\:blue-darkest:disabled {\n  color: #12283a;\n}\n.disabled\\:text\\:blue-darker:disabled {\n  color: #1c3d5a;\n}\n.disabled\\:text\\:blue-dark:disabled {\n  color: #2779bd;\n}\n.disabled\\:text\\:blue:disabled {\n  color: #3490dc;\n}\n.disabled\\:text\\:blue-light:disabled {\n  color: #6cb2eb;\n}\n.disabled\\:text\\:blue-lighter:disabled {\n  color: #bcdefa;\n}\n.disabled\\:text\\:blue-lightest:disabled {\n  color: #eff8ff;\n}\n.disabled\\:text\\:indigo-darkest:disabled {\n  color: #191e38;\n}\n.disabled\\:text\\:indigo-darker:disabled {\n  color: #2f365f;\n}\n.disabled\\:text\\:indigo-dark:disabled {\n  color: #5661b3;\n}\n.disabled\\:text\\:indigo:disabled {\n  color: #6574cd;\n}\n.disabled\\:text\\:indigo-light:disabled {\n  color: #7886d7;\n}\n.disabled\\:text\\:indigo-lighter:disabled {\n  color: #b2b7ff;\n}\n.disabled\\:text\\:indigo-lightest:disabled {\n  color: #e6e8ff;\n}\n.disabled\\:text\\:purple-darkest:disabled {\n  color: #21183c;\n}\n.disabled\\:text\\:purple-darker:disabled {\n  color: #382b5f;\n}\n.disabled\\:text\\:purple-dark:disabled {\n  color: #794acf;\n}\n.disabled\\:text\\:purple:disabled {\n  color: #9561e2;\n}\n.disabled\\:text\\:purple-light:disabled {\n  color: #a779e9;\n}\n.disabled\\:text\\:purple-lighter:disabled {\n  color: #d6bbfc;\n}\n.disabled\\:text\\:purple-lightest:disabled {\n  color: #f3ebff;\n}\n.disabled\\:text\\:pink-darkest:disabled {\n  color: #451225;\n}\n.disabled\\:text\\:pink-darker:disabled {\n  color: #6f213f;\n}\n.disabled\\:text\\:pink-dark:disabled {\n  color: #eb5286;\n}\n.disabled\\:text\\:pink:disabled {\n  color: #f66d9b;\n}\n.disabled\\:text\\:pink-light:disabled {\n  color: #fa7ea8;\n}\n.disabled\\:text\\:pink-lighter:disabled {\n  color: #ffbbca;\n}\n.disabled\\:text\\:pink-lightest:disabled {\n  color: #ffebef;\n}\n.visited\\:text\\:transparent:visited {\n  color: transparent;\n}\n.visited\\:text\\:black:visited {\n  color: #22292f;\n}\n.visited\\:text\\:grey-darkest:visited {\n  color: #3d4852;\n}\n.visited\\:text\\:grey-darker:visited {\n  color: #606f7b;\n}\n.visited\\:text\\:grey-dark:visited {\n  color: #8795a1;\n}\n.visited\\:text\\:grey:visited {\n  color: #b8c2cc;\n}\n.visited\\:text\\:grey-light:visited {\n  color: #dae1e7;\n}\n.visited\\:text\\:grey-lighter:visited {\n  color: #f1f5f8;\n}\n.visited\\:text\\:grey-lightest:visited {\n  color: #f8fafc;\n}\n.visited\\:text\\:white:visited {\n  color: #ffffff;\n}\n.visited\\:text\\:red-darkest:visited {\n  color: #3b0d0c;\n}\n.visited\\:text\\:red-darker:visited {\n  color: #621b18;\n}\n.visited\\:text\\:red-dark:visited {\n  color: #cc1f1a;\n}\n.visited\\:text\\:red:visited {\n  color: #f44040;\n}\n.visited\\:text\\:red-light:visited {\n  color: #f75f51;\n}\n.visited\\:text\\:red-lighter:visited {\n  color: #f9acaa;\n}\n.visited\\:text\\:red-lightest:visited {\n  color: #ffd8d4;\n}\n.visited\\:text\\:orange-darkest:visited {\n  color: #c64411;\n}\n.visited\\:text\\:orange-darker:visited {\n  color: #d86501;\n}\n.visited\\:text\\:orange-dark:visited {\n  color: #f27e19;\n}\n.visited\\:text\\:orange:visited {\n  color: #ff9334;\n}\n.visited\\:text\\:orange-light:visited {\n  color: #faad63;\n}\n.visited\\:text\\:orange-lighter:visited {\n  color: #fcd9b6;\n}\n.visited\\:text\\:orange-lightest:visited {\n  color: #fff5eb;\n}\n.visited\\:text\\:yellow-darkest:visited {\n  color: #453411;\n}\n.visited\\:text\\:yellow-darker:visited {\n  color: #684f1d;\n}\n.visited\\:text\\:yellow-dark:visited {\n  color: #f2d024;\n}\n.visited\\:text\\:yellow:visited {\n  color: #ffed4a;\n}\n.visited\\:text\\:yellow-light:visited {\n  color: #fff382;\n}\n.visited\\:text\\:yellow-lighter:visited {\n  color: #fff9c2;\n}\n.visited\\:text\\:yellow-lightest:visited {\n  color: #fcfbeb;\n}\n.visited\\:text\\:teal-darkest:visited {\n  color: #0d3331;\n}\n.visited\\:text\\:teal-darker:visited {\n  color: #006875;\n}\n.visited\\:text\\:teal-dark:visited {\n  color: #017887;\n}\n.visited\\:text\\:teal:visited {\n  color: #019bae;\n}\n.visited\\:text\\:teal-light:visited {\n  color: #3bbcc7;\n}\n.visited\\:text\\:teal-lighter:visited {\n  color: #c0f1f5;\n}\n.visited\\:text\\:teal-lightest:visited {\n  color: #e8fffe;\n}\n.visited\\:text\\:green-darkest:visited {\n  color: #0f2f21;\n}\n.visited\\:text\\:green-darker:visited {\n  color: #1a4731;\n}\n.visited\\:text\\:green-dark:visited {\n  color: #1f9d55;\n}\n.visited\\:text\\:green:visited {\n  color: #11b776;\n}\n.visited\\:text\\:green-light:visited {\n  color: #51d88a;\n}\n.visited\\:text\\:green-lighter:visited {\n  color: #a2f5bf;\n}\n.visited\\:text\\:green-lightest:visited {\n  color: #e3fcec;\n}\n.visited\\:text\\:blue-darkest:visited {\n  color: #12283a;\n}\n.visited\\:text\\:blue-darker:visited {\n  color: #1c3d5a;\n}\n.visited\\:text\\:blue-dark:visited {\n  color: #2779bd;\n}\n.visited\\:text\\:blue:visited {\n  color: #3490dc;\n}\n.visited\\:text\\:blue-light:visited {\n  color: #6cb2eb;\n}\n.visited\\:text\\:blue-lighter:visited {\n  color: #bcdefa;\n}\n.visited\\:text\\:blue-lightest:visited {\n  color: #eff8ff;\n}\n.visited\\:text\\:indigo-darkest:visited {\n  color: #191e38;\n}\n.visited\\:text\\:indigo-darker:visited {\n  color: #2f365f;\n}\n.visited\\:text\\:indigo-dark:visited {\n  color: #5661b3;\n}\n.visited\\:text\\:indigo:visited {\n  color: #6574cd;\n}\n.visited\\:text\\:indigo-light:visited {\n  color: #7886d7;\n}\n.visited\\:text\\:indigo-lighter:visited {\n  color: #b2b7ff;\n}\n.visited\\:text\\:indigo-lightest:visited {\n  color: #e6e8ff;\n}\n.visited\\:text\\:purple-darkest:visited {\n  color: #21183c;\n}\n.visited\\:text\\:purple-darker:visited {\n  color: #382b5f;\n}\n.visited\\:text\\:purple-dark:visited {\n  color: #794acf;\n}\n.visited\\:text\\:purple:visited {\n  color: #9561e2;\n}\n.visited\\:text\\:purple-light:visited {\n  color: #a779e9;\n}\n.visited\\:text\\:purple-lighter:visited {\n  color: #d6bbfc;\n}\n.visited\\:text\\:purple-lightest:visited {\n  color: #f3ebff;\n}\n.visited\\:text\\:pink-darkest:visited {\n  color: #451225;\n}\n.visited\\:text\\:pink-darker:visited {\n  color: #6f213f;\n}\n.visited\\:text\\:pink-dark:visited {\n  color: #eb5286;\n}\n.visited\\:text\\:pink:visited {\n  color: #f66d9b;\n}\n.visited\\:text\\:pink-light:visited {\n  color: #fa7ea8;\n}\n.visited\\:text\\:pink-lighter:visited {\n  color: #ffbbca;\n}\n.visited\\:text\\:pink-lightest:visited {\n  color: #ffebef;\n}\n.focus\\:text\\:transparent:focus {\n  color: transparent;\n}\n.focus\\:text\\:black:focus {\n  color: #22292f;\n}\n.focus\\:text\\:grey-darkest:focus {\n  color: #3d4852;\n}\n.focus\\:text\\:grey-darker:focus {\n  color: #606f7b;\n}\n.focus\\:text\\:grey-dark:focus {\n  color: #8795a1;\n}\n.focus\\:text\\:grey:focus {\n  color: #b8c2cc;\n}\n.focus\\:text\\:grey-light:focus {\n  color: #dae1e7;\n}\n.focus\\:text\\:grey-lighter:focus {\n  color: #f1f5f8;\n}\n.focus\\:text\\:grey-lightest:focus {\n  color: #f8fafc;\n}\n.focus\\:text\\:white:focus {\n  color: #ffffff;\n}\n.focus\\:text\\:red-darkest:focus {\n  color: #3b0d0c;\n}\n.focus\\:text\\:red-darker:focus {\n  color: #621b18;\n}\n.focus\\:text\\:red-dark:focus {\n  color: #cc1f1a;\n}\n.focus\\:text\\:red:focus {\n  color: #f44040;\n}\n.focus\\:text\\:red-light:focus {\n  color: #f75f51;\n}\n.focus\\:text\\:red-lighter:focus {\n  color: #f9acaa;\n}\n.focus\\:text\\:red-lightest:focus {\n  color: #ffd8d4;\n}\n.focus\\:text\\:orange-darkest:focus {\n  color: #c64411;\n}\n.focus\\:text\\:orange-darker:focus {\n  color: #d86501;\n}\n.focus\\:text\\:orange-dark:focus {\n  color: #f27e19;\n}\n.focus\\:text\\:orange:focus {\n  color: #ff9334;\n}\n.focus\\:text\\:orange-light:focus {\n  color: #faad63;\n}\n.focus\\:text\\:orange-lighter:focus {\n  color: #fcd9b6;\n}\n.focus\\:text\\:orange-lightest:focus {\n  color: #fff5eb;\n}\n.focus\\:text\\:yellow-darkest:focus {\n  color: #453411;\n}\n.focus\\:text\\:yellow-darker:focus {\n  color: #684f1d;\n}\n.focus\\:text\\:yellow-dark:focus {\n  color: #f2d024;\n}\n.focus\\:text\\:yellow:focus {\n  color: #ffed4a;\n}\n.focus\\:text\\:yellow-light:focus {\n  color: #fff382;\n}\n.focus\\:text\\:yellow-lighter:focus {\n  color: #fff9c2;\n}\n.focus\\:text\\:yellow-lightest:focus {\n  color: #fcfbeb;\n}\n.focus\\:text\\:teal-darkest:focus {\n  color: #0d3331;\n}\n.focus\\:text\\:teal-darker:focus {\n  color: #006875;\n}\n.focus\\:text\\:teal-dark:focus {\n  color: #017887;\n}\n.focus\\:text\\:teal:focus {\n  color: #019bae;\n}\n.focus\\:text\\:teal-light:focus {\n  color: #3bbcc7;\n}\n.focus\\:text\\:teal-lighter:focus {\n  color: #c0f1f5;\n}\n.focus\\:text\\:teal-lightest:focus {\n  color: #e8fffe;\n}\n.focus\\:text\\:green-darkest:focus {\n  color: #0f2f21;\n}\n.focus\\:text\\:green-darker:focus {\n  color: #1a4731;\n}\n.focus\\:text\\:green-dark:focus {\n  color: #1f9d55;\n}\n.focus\\:text\\:green:focus {\n  color: #11b776;\n}\n.focus\\:text\\:green-light:focus {\n  color: #51d88a;\n}\n.focus\\:text\\:green-lighter:focus {\n  color: #a2f5bf;\n}\n.focus\\:text\\:green-lightest:focus {\n  color: #e3fcec;\n}\n.focus\\:text\\:blue-darkest:focus {\n  color: #12283a;\n}\n.focus\\:text\\:blue-darker:focus {\n  color: #1c3d5a;\n}\n.focus\\:text\\:blue-dark:focus {\n  color: #2779bd;\n}\n.focus\\:text\\:blue:focus {\n  color: #3490dc;\n}\n.focus\\:text\\:blue-light:focus {\n  color: #6cb2eb;\n}\n.focus\\:text\\:blue-lighter:focus {\n  color: #bcdefa;\n}\n.focus\\:text\\:blue-lightest:focus {\n  color: #eff8ff;\n}\n.focus\\:text\\:indigo-darkest:focus {\n  color: #191e38;\n}\n.focus\\:text\\:indigo-darker:focus {\n  color: #2f365f;\n}\n.focus\\:text\\:indigo-dark:focus {\n  color: #5661b3;\n}\n.focus\\:text\\:indigo:focus {\n  color: #6574cd;\n}\n.focus\\:text\\:indigo-light:focus {\n  color: #7886d7;\n}\n.focus\\:text\\:indigo-lighter:focus {\n  color: #b2b7ff;\n}\n.focus\\:text\\:indigo-lightest:focus {\n  color: #e6e8ff;\n}\n.focus\\:text\\:purple-darkest:focus {\n  color: #21183c;\n}\n.focus\\:text\\:purple-darker:focus {\n  color: #382b5f;\n}\n.focus\\:text\\:purple-dark:focus {\n  color: #794acf;\n}\n.focus\\:text\\:purple:focus {\n  color: #9561e2;\n}\n.focus\\:text\\:purple-light:focus {\n  color: #a779e9;\n}\n.focus\\:text\\:purple-lighter:focus {\n  color: #d6bbfc;\n}\n.focus\\:text\\:purple-lightest:focus {\n  color: #f3ebff;\n}\n.focus\\:text\\:pink-darkest:focus {\n  color: #451225;\n}\n.focus\\:text\\:pink-darker:focus {\n  color: #6f213f;\n}\n.focus\\:text\\:pink-dark:focus {\n  color: #eb5286;\n}\n.focus\\:text\\:pink:focus {\n  color: #f66d9b;\n}\n.focus\\:text\\:pink-light:focus {\n  color: #fa7ea8;\n}\n.focus\\:text\\:pink-lighter:focus {\n  color: #ffbbca;\n}\n.focus\\:text\\:pink-lightest:focus {\n  color: #ffebef;\n}\n.first\\:text\\:transparent:first-child {\n  color: transparent;\n}\n.first\\:text\\:black:first-child {\n  color: #22292f;\n}\n.first\\:text\\:grey-darkest:first-child {\n  color: #3d4852;\n}\n.first\\:text\\:grey-darker:first-child {\n  color: #606f7b;\n}\n.first\\:text\\:grey-dark:first-child {\n  color: #8795a1;\n}\n.first\\:text\\:grey:first-child {\n  color: #b8c2cc;\n}\n.first\\:text\\:grey-light:first-child {\n  color: #dae1e7;\n}\n.first\\:text\\:grey-lighter:first-child {\n  color: #f1f5f8;\n}\n.first\\:text\\:grey-lightest:first-child {\n  color: #f8fafc;\n}\n.first\\:text\\:white:first-child {\n  color: #ffffff;\n}\n.first\\:text\\:red-darkest:first-child {\n  color: #3b0d0c;\n}\n.first\\:text\\:red-darker:first-child {\n  color: #621b18;\n}\n.first\\:text\\:red-dark:first-child {\n  color: #cc1f1a;\n}\n.first\\:text\\:red:first-child {\n  color: #f44040;\n}\n.first\\:text\\:red-light:first-child {\n  color: #f75f51;\n}\n.first\\:text\\:red-lighter:first-child {\n  color: #f9acaa;\n}\n.first\\:text\\:red-lightest:first-child {\n  color: #ffd8d4;\n}\n.first\\:text\\:orange-darkest:first-child {\n  color: #c64411;\n}\n.first\\:text\\:orange-darker:first-child {\n  color: #d86501;\n}\n.first\\:text\\:orange-dark:first-child {\n  color: #f27e19;\n}\n.first\\:text\\:orange:first-child {\n  color: #ff9334;\n}\n.first\\:text\\:orange-light:first-child {\n  color: #faad63;\n}\n.first\\:text\\:orange-lighter:first-child {\n  color: #fcd9b6;\n}\n.first\\:text\\:orange-lightest:first-child {\n  color: #fff5eb;\n}\n.first\\:text\\:yellow-darkest:first-child {\n  color: #453411;\n}\n.first\\:text\\:yellow-darker:first-child {\n  color: #684f1d;\n}\n.first\\:text\\:yellow-dark:first-child {\n  color: #f2d024;\n}\n.first\\:text\\:yellow:first-child {\n  color: #ffed4a;\n}\n.first\\:text\\:yellow-light:first-child {\n  color: #fff382;\n}\n.first\\:text\\:yellow-lighter:first-child {\n  color: #fff9c2;\n}\n.first\\:text\\:yellow-lightest:first-child {\n  color: #fcfbeb;\n}\n.first\\:text\\:teal-darkest:first-child {\n  color: #0d3331;\n}\n.first\\:text\\:teal-darker:first-child {\n  color: #006875;\n}\n.first\\:text\\:teal-dark:first-child {\n  color: #017887;\n}\n.first\\:text\\:teal:first-child {\n  color: #019bae;\n}\n.first\\:text\\:teal-light:first-child {\n  color: #3bbcc7;\n}\n.first\\:text\\:teal-lighter:first-child {\n  color: #c0f1f5;\n}\n.first\\:text\\:teal-lightest:first-child {\n  color: #e8fffe;\n}\n.first\\:text\\:green-darkest:first-child {\n  color: #0f2f21;\n}\n.first\\:text\\:green-darker:first-child {\n  color: #1a4731;\n}\n.first\\:text\\:green-dark:first-child {\n  color: #1f9d55;\n}\n.first\\:text\\:green:first-child {\n  color: #11b776;\n}\n.first\\:text\\:green-light:first-child {\n  color: #51d88a;\n}\n.first\\:text\\:green-lighter:first-child {\n  color: #a2f5bf;\n}\n.first\\:text\\:green-lightest:first-child {\n  color: #e3fcec;\n}\n.first\\:text\\:blue-darkest:first-child {\n  color: #12283a;\n}\n.first\\:text\\:blue-darker:first-child {\n  color: #1c3d5a;\n}\n.first\\:text\\:blue-dark:first-child {\n  color: #2779bd;\n}\n.first\\:text\\:blue:first-child {\n  color: #3490dc;\n}\n.first\\:text\\:blue-light:first-child {\n  color: #6cb2eb;\n}\n.first\\:text\\:blue-lighter:first-child {\n  color: #bcdefa;\n}\n.first\\:text\\:blue-lightest:first-child {\n  color: #eff8ff;\n}\n.first\\:text\\:indigo-darkest:first-child {\n  color: #191e38;\n}\n.first\\:text\\:indigo-darker:first-child {\n  color: #2f365f;\n}\n.first\\:text\\:indigo-dark:first-child {\n  color: #5661b3;\n}\n.first\\:text\\:indigo:first-child {\n  color: #6574cd;\n}\n.first\\:text\\:indigo-light:first-child {\n  color: #7886d7;\n}\n.first\\:text\\:indigo-lighter:first-child {\n  color: #b2b7ff;\n}\n.first\\:text\\:indigo-lightest:first-child {\n  color: #e6e8ff;\n}\n.first\\:text\\:purple-darkest:first-child {\n  color: #21183c;\n}\n.first\\:text\\:purple-darker:first-child {\n  color: #382b5f;\n}\n.first\\:text\\:purple-dark:first-child {\n  color: #794acf;\n}\n.first\\:text\\:purple:first-child {\n  color: #9561e2;\n}\n.first\\:text\\:purple-light:first-child {\n  color: #a779e9;\n}\n.first\\:text\\:purple-lighter:first-child {\n  color: #d6bbfc;\n}\n.first\\:text\\:purple-lightest:first-child {\n  color: #f3ebff;\n}\n.first\\:text\\:pink-darkest:first-child {\n  color: #451225;\n}\n.first\\:text\\:pink-darker:first-child {\n  color: #6f213f;\n}\n.first\\:text\\:pink-dark:first-child {\n  color: #eb5286;\n}\n.first\\:text\\:pink:first-child {\n  color: #f66d9b;\n}\n.first\\:text\\:pink-light:first-child {\n  color: #fa7ea8;\n}\n.first\\:text\\:pink-lighter:first-child {\n  color: #ffbbca;\n}\n.first\\:text\\:pink-lightest:first-child {\n  color: #ffebef;\n}\n.last\\:text\\:transparent:last-child {\n  color: transparent;\n}\n.last\\:text\\:black:last-child {\n  color: #22292f;\n}\n.last\\:text\\:grey-darkest:last-child {\n  color: #3d4852;\n}\n.last\\:text\\:grey-darker:last-child {\n  color: #606f7b;\n}\n.last\\:text\\:grey-dark:last-child {\n  color: #8795a1;\n}\n.last\\:text\\:grey:last-child {\n  color: #b8c2cc;\n}\n.last\\:text\\:grey-light:last-child {\n  color: #dae1e7;\n}\n.last\\:text\\:grey-lighter:last-child {\n  color: #f1f5f8;\n}\n.last\\:text\\:grey-lightest:last-child {\n  color: #f8fafc;\n}\n.last\\:text\\:white:last-child {\n  color: #ffffff;\n}\n.last\\:text\\:red-darkest:last-child {\n  color: #3b0d0c;\n}\n.last\\:text\\:red-darker:last-child {\n  color: #621b18;\n}\n.last\\:text\\:red-dark:last-child {\n  color: #cc1f1a;\n}\n.last\\:text\\:red:last-child {\n  color: #f44040;\n}\n.last\\:text\\:red-light:last-child {\n  color: #f75f51;\n}\n.last\\:text\\:red-lighter:last-child {\n  color: #f9acaa;\n}\n.last\\:text\\:red-lightest:last-child {\n  color: #ffd8d4;\n}\n.last\\:text\\:orange-darkest:last-child {\n  color: #c64411;\n}\n.last\\:text\\:orange-darker:last-child {\n  color: #d86501;\n}\n.last\\:text\\:orange-dark:last-child {\n  color: #f27e19;\n}\n.last\\:text\\:orange:last-child {\n  color: #ff9334;\n}\n.last\\:text\\:orange-light:last-child {\n  color: #faad63;\n}\n.last\\:text\\:orange-lighter:last-child {\n  color: #fcd9b6;\n}\n.last\\:text\\:orange-lightest:last-child {\n  color: #fff5eb;\n}\n.last\\:text\\:yellow-darkest:last-child {\n  color: #453411;\n}\n.last\\:text\\:yellow-darker:last-child {\n  color: #684f1d;\n}\n.last\\:text\\:yellow-dark:last-child {\n  color: #f2d024;\n}\n.last\\:text\\:yellow:last-child {\n  color: #ffed4a;\n}\n.last\\:text\\:yellow-light:last-child {\n  color: #fff382;\n}\n.last\\:text\\:yellow-lighter:last-child {\n  color: #fff9c2;\n}\n.last\\:text\\:yellow-lightest:last-child {\n  color: #fcfbeb;\n}\n.last\\:text\\:teal-darkest:last-child {\n  color: #0d3331;\n}\n.last\\:text\\:teal-darker:last-child {\n  color: #006875;\n}\n.last\\:text\\:teal-dark:last-child {\n  color: #017887;\n}\n.last\\:text\\:teal:last-child {\n  color: #019bae;\n}\n.last\\:text\\:teal-light:last-child {\n  color: #3bbcc7;\n}\n.last\\:text\\:teal-lighter:last-child {\n  color: #c0f1f5;\n}\n.last\\:text\\:teal-lightest:last-child {\n  color: #e8fffe;\n}\n.last\\:text\\:green-darkest:last-child {\n  color: #0f2f21;\n}\n.last\\:text\\:green-darker:last-child {\n  color: #1a4731;\n}\n.last\\:text\\:green-dark:last-child {\n  color: #1f9d55;\n}\n.last\\:text\\:green:last-child {\n  color: #11b776;\n}\n.last\\:text\\:green-light:last-child {\n  color: #51d88a;\n}\n.last\\:text\\:green-lighter:last-child {\n  color: #a2f5bf;\n}\n.last\\:text\\:green-lightest:last-child {\n  color: #e3fcec;\n}\n.last\\:text\\:blue-darkest:last-child {\n  color: #12283a;\n}\n.last\\:text\\:blue-darker:last-child {\n  color: #1c3d5a;\n}\n.last\\:text\\:blue-dark:last-child {\n  color: #2779bd;\n}\n.last\\:text\\:blue:last-child {\n  color: #3490dc;\n}\n.last\\:text\\:blue-light:last-child {\n  color: #6cb2eb;\n}\n.last\\:text\\:blue-lighter:last-child {\n  color: #bcdefa;\n}\n.last\\:text\\:blue-lightest:last-child {\n  color: #eff8ff;\n}\n.last\\:text\\:indigo-darkest:last-child {\n  color: #191e38;\n}\n.last\\:text\\:indigo-darker:last-child {\n  color: #2f365f;\n}\n.last\\:text\\:indigo-dark:last-child {\n  color: #5661b3;\n}\n.last\\:text\\:indigo:last-child {\n  color: #6574cd;\n}\n.last\\:text\\:indigo-light:last-child {\n  color: #7886d7;\n}\n.last\\:text\\:indigo-lighter:last-child {\n  color: #b2b7ff;\n}\n.last\\:text\\:indigo-lightest:last-child {\n  color: #e6e8ff;\n}\n.last\\:text\\:purple-darkest:last-child {\n  color: #21183c;\n}\n.last\\:text\\:purple-darker:last-child {\n  color: #382b5f;\n}\n.last\\:text\\:purple-dark:last-child {\n  color: #794acf;\n}\n.last\\:text\\:purple:last-child {\n  color: #9561e2;\n}\n.last\\:text\\:purple-light:last-child {\n  color: #a779e9;\n}\n.last\\:text\\:purple-lighter:last-child {\n  color: #d6bbfc;\n}\n.last\\:text\\:purple-lightest:last-child {\n  color: #f3ebff;\n}\n.last\\:text\\:pink-darkest:last-child {\n  color: #451225;\n}\n.last\\:text\\:pink-darker:last-child {\n  color: #6f213f;\n}\n.last\\:text\\:pink-dark:last-child {\n  color: #eb5286;\n}\n.last\\:text\\:pink:last-child {\n  color: #f66d9b;\n}\n.last\\:text\\:pink-light:last-child {\n  color: #fa7ea8;\n}\n.last\\:text\\:pink-lighter:last-child {\n  color: #ffbbca;\n}\n.last\\:text\\:pink-lightest:last-child {\n  color: #ffebef;\n}\n.capitalize {\n  text-transform: capitalize;\n}\n.lowercase {\n  text-transform: lowercase;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.italic {\n  font-style: italic;\n}\n.normal {\n  font-style: normal;\n}\n.oblique {\n  font-style: oblique;\n}\n.underline {\n  text-decoration: underline;\n}\n.line-through {\n  text-decoration: line-through;\n}\n.no-underline {\n  text-decoration: none;\n}\n.align\\:baseline {\n  vertical-align: baseline;\n}\n.align\\:top {\n  vertical-align: top;\n}\n.align\\:middle {\n  vertical-align: middle;\n}\n.align\\:bottom {\n  vertical-align: bottom;\n}\n.align\\:text-top {\n  vertical-align: text-top;\n}\n.align\\:text-bottom {\n  vertical-align: text-bottom;\n}\n.whitespace\\:normal {\n  white-space: normal;\n}\n.whitespace\\:no-wrap {\n  white-space: nowrap;\n}\n.whitespace\\:pre {\n  white-space: pre;\n}\n.whitespace\\:pre-line {\n  white-space: pre-line;\n}\n.whitespace\\:pre-wrap {\n  white-space: pre-wrap;\n}\n.break-words {\n  word-wrap: break-word;\n}\n.break-normal {\n  word-wrap: normal;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.arrow\\:r\\:transparent::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid transparent;\n}\n.arrow\\:t\\:transparent::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:transparent::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:r\\:black::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #22292f;\n}\n.arrow\\:t\\:black::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #22292f;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:black::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #22292f;\n}\n.arrow\\:r\\:grey-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #3d4852;\n}\n.arrow\\:t\\:grey-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #3d4852;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:grey-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #3d4852;\n}\n.arrow\\:r\\:grey-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #606f7b;\n}\n.arrow\\:t\\:grey-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #606f7b;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:grey-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #606f7b;\n}\n.arrow\\:r\\:grey-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #8795a1;\n}\n.arrow\\:t\\:grey-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #8795a1;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:grey-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #8795a1;\n}\n.arrow\\:r\\:grey::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #b8c2cc;\n}\n.arrow\\:t\\:grey::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #b8c2cc;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:grey::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #b8c2cc;\n}\n.arrow\\:r\\:grey-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #dae1e7;\n}\n.arrow\\:t\\:grey-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #dae1e7;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:grey-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #dae1e7;\n}\n.arrow\\:r\\:grey-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #f1f5f8;\n}\n.arrow\\:t\\:grey-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #f1f5f8;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:grey-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #f1f5f8;\n}\n.arrow\\:r\\:grey-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #f8fafc;\n}\n.arrow\\:t\\:grey-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #f8fafc;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:grey-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #f8fafc;\n}\n.arrow\\:r\\:white::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #ffffff;\n}\n.arrow\\:t\\:white::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #ffffff;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:white::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #ffffff;\n}\n.arrow\\:r\\:red-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #3b0d0c;\n}\n.arrow\\:t\\:red-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #3b0d0c;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:red-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #3b0d0c;\n}\n.arrow\\:r\\:red-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #621b18;\n}\n.arrow\\:t\\:red-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #621b18;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:red-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #621b18;\n}\n.arrow\\:r\\:red-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #cc1f1a;\n}\n.arrow\\:t\\:red-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #cc1f1a;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:red-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #cc1f1a;\n}\n.arrow\\:r\\:red::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #f44040;\n}\n.arrow\\:t\\:red::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #f44040;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:red::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #f44040;\n}\n.arrow\\:r\\:red-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #f75f51;\n}\n.arrow\\:t\\:red-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #f75f51;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:red-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #f75f51;\n}\n.arrow\\:r\\:red-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #f9acaa;\n}\n.arrow\\:t\\:red-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #f9acaa;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:red-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #f9acaa;\n}\n.arrow\\:r\\:red-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #ffd8d4;\n}\n.arrow\\:t\\:red-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #ffd8d4;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:red-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #ffd8d4;\n}\n.arrow\\:r\\:orange-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #c64411;\n}\n.arrow\\:t\\:orange-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #c64411;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:orange-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #c64411;\n}\n.arrow\\:r\\:orange-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #d86501;\n}\n.arrow\\:t\\:orange-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #d86501;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:orange-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #d86501;\n}\n.arrow\\:r\\:orange-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #f27e19;\n}\n.arrow\\:t\\:orange-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #f27e19;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:orange-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #f27e19;\n}\n.arrow\\:r\\:orange::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #ff9334;\n}\n.arrow\\:t\\:orange::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #ff9334;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:orange::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #ff9334;\n}\n.arrow\\:r\\:orange-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #faad63;\n}\n.arrow\\:t\\:orange-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #faad63;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:orange-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #faad63;\n}\n.arrow\\:r\\:orange-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #fcd9b6;\n}\n.arrow\\:t\\:orange-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #fcd9b6;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:orange-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #fcd9b6;\n}\n.arrow\\:r\\:orange-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #fff5eb;\n}\n.arrow\\:t\\:orange-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #fff5eb;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:orange-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #fff5eb;\n}\n.arrow\\:r\\:yellow-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #453411;\n}\n.arrow\\:t\\:yellow-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #453411;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:yellow-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #453411;\n}\n.arrow\\:r\\:yellow-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #684f1d;\n}\n.arrow\\:t\\:yellow-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #684f1d;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:yellow-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #684f1d;\n}\n.arrow\\:r\\:yellow-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #f2d024;\n}\n.arrow\\:t\\:yellow-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #f2d024;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:yellow-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #f2d024;\n}\n.arrow\\:r\\:yellow::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #ffed4a;\n}\n.arrow\\:t\\:yellow::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #ffed4a;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:yellow::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #ffed4a;\n}\n.arrow\\:r\\:yellow-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #fff382;\n}\n.arrow\\:t\\:yellow-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #fff382;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:yellow-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #fff382;\n}\n.arrow\\:r\\:yellow-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #fff9c2;\n}\n.arrow\\:t\\:yellow-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #fff9c2;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:yellow-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #fff9c2;\n}\n.arrow\\:r\\:yellow-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #fcfbeb;\n}\n.arrow\\:t\\:yellow-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #fcfbeb;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:yellow-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #fcfbeb;\n}\n.arrow\\:r\\:teal-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #0d3331;\n}\n.arrow\\:t\\:teal-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #0d3331;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:teal-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #0d3331;\n}\n.arrow\\:r\\:teal-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #006875;\n}\n.arrow\\:t\\:teal-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #006875;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:teal-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #006875;\n}\n.arrow\\:r\\:teal-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #017887;\n}\n.arrow\\:t\\:teal-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #017887;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:teal-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #017887;\n}\n.arrow\\:r\\:teal::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #019bae;\n}\n.arrow\\:t\\:teal::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #019bae;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:teal::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #019bae;\n}\n.arrow\\:r\\:teal-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #3bbcc7;\n}\n.arrow\\:t\\:teal-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #3bbcc7;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:teal-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #3bbcc7;\n}\n.arrow\\:r\\:teal-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #c0f1f5;\n}\n.arrow\\:t\\:teal-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #c0f1f5;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:teal-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #c0f1f5;\n}\n.arrow\\:r\\:teal-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #e8fffe;\n}\n.arrow\\:t\\:teal-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #e8fffe;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:teal-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #e8fffe;\n}\n.arrow\\:r\\:green-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #0f2f21;\n}\n.arrow\\:t\\:green-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #0f2f21;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:green-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #0f2f21;\n}\n.arrow\\:r\\:green-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #1a4731;\n}\n.arrow\\:t\\:green-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #1a4731;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:green-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #1a4731;\n}\n.arrow\\:r\\:green-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #1f9d55;\n}\n.arrow\\:t\\:green-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #1f9d55;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:green-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #1f9d55;\n}\n.arrow\\:r\\:green::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #11b776;\n}\n.arrow\\:t\\:green::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #11b776;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:green::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #11b776;\n}\n.arrow\\:r\\:green-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #51d88a;\n}\n.arrow\\:t\\:green-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #51d88a;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:green-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #51d88a;\n}\n.arrow\\:r\\:green-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #a2f5bf;\n}\n.arrow\\:t\\:green-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #a2f5bf;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:green-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #a2f5bf;\n}\n.arrow\\:r\\:green-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #e3fcec;\n}\n.arrow\\:t\\:green-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #e3fcec;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:green-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #e3fcec;\n}\n.arrow\\:r\\:blue-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #12283a;\n}\n.arrow\\:t\\:blue-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #12283a;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:blue-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #12283a;\n}\n.arrow\\:r\\:blue-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #1c3d5a;\n}\n.arrow\\:t\\:blue-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #1c3d5a;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:blue-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #1c3d5a;\n}\n.arrow\\:r\\:blue-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #2779bd;\n}\n.arrow\\:t\\:blue-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #2779bd;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:blue-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #2779bd;\n}\n.arrow\\:r\\:blue::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #3490dc;\n}\n.arrow\\:t\\:blue::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #3490dc;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:blue::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #3490dc;\n}\n.arrow\\:r\\:blue-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #6cb2eb;\n}\n.arrow\\:t\\:blue-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #6cb2eb;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:blue-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #6cb2eb;\n}\n.arrow\\:r\\:blue-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #bcdefa;\n}\n.arrow\\:t\\:blue-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #bcdefa;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:blue-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #bcdefa;\n}\n.arrow\\:r\\:blue-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #eff8ff;\n}\n.arrow\\:t\\:blue-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #eff8ff;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:blue-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #eff8ff;\n}\n.arrow\\:r\\:indigo-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #191e38;\n}\n.arrow\\:t\\:indigo-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #191e38;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:indigo-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #191e38;\n}\n.arrow\\:r\\:indigo-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #2f365f;\n}\n.arrow\\:t\\:indigo-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #2f365f;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:indigo-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #2f365f;\n}\n.arrow\\:r\\:indigo-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #5661b3;\n}\n.arrow\\:t\\:indigo-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #5661b3;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:indigo-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #5661b3;\n}\n.arrow\\:r\\:indigo::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #6574cd;\n}\n.arrow\\:t\\:indigo::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #6574cd;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:indigo::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #6574cd;\n}\n.arrow\\:r\\:indigo-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #7886d7;\n}\n.arrow\\:t\\:indigo-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #7886d7;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:indigo-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #7886d7;\n}\n.arrow\\:r\\:indigo-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #b2b7ff;\n}\n.arrow\\:t\\:indigo-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #b2b7ff;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:indigo-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #b2b7ff;\n}\n.arrow\\:r\\:indigo-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #e6e8ff;\n}\n.arrow\\:t\\:indigo-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #e6e8ff;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:indigo-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #e6e8ff;\n}\n.arrow\\:r\\:purple-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #21183c;\n}\n.arrow\\:t\\:purple-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #21183c;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:purple-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #21183c;\n}\n.arrow\\:r\\:purple-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #382b5f;\n}\n.arrow\\:t\\:purple-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #382b5f;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:purple-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #382b5f;\n}\n.arrow\\:r\\:purple-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #794acf;\n}\n.arrow\\:t\\:purple-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #794acf;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:purple-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #794acf;\n}\n.arrow\\:r\\:purple::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #9561e2;\n}\n.arrow\\:t\\:purple::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #9561e2;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:purple::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #9561e2;\n}\n.arrow\\:r\\:purple-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #a779e9;\n}\n.arrow\\:t\\:purple-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #a779e9;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:purple-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #a779e9;\n}\n.arrow\\:r\\:purple-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #d6bbfc;\n}\n.arrow\\:t\\:purple-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #d6bbfc;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:purple-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #d6bbfc;\n}\n.arrow\\:r\\:purple-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #f3ebff;\n}\n.arrow\\:t\\:purple-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #f3ebff;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:purple-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #f3ebff;\n}\n.arrow\\:r\\:pink-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #451225;\n}\n.arrow\\:t\\:pink-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #451225;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:pink-darkest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #451225;\n}\n.arrow\\:r\\:pink-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #6f213f;\n}\n.arrow\\:t\\:pink-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #6f213f;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:pink-darker::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #6f213f;\n}\n.arrow\\:r\\:pink-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #eb5286;\n}\n.arrow\\:t\\:pink-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #eb5286;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:pink-dark::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #eb5286;\n}\n.arrow\\:r\\:pink::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #f66d9b;\n}\n.arrow\\:t\\:pink::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #f66d9b;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:pink::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #f66d9b;\n}\n.arrow\\:r\\:pink-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #fa7ea8;\n}\n.arrow\\:t\\:pink-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #fa7ea8;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:pink-light::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #fa7ea8;\n}\n.arrow\\:r\\:pink-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #ffbbca;\n}\n.arrow\\:t\\:pink-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #ffbbca;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:pink-lighter::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #ffbbca;\n}\n.arrow\\:r\\:pink-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: -10px;\n  top: calc(50% - 7px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #ffebef;\n}\n.arrow\\:t\\:pink-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: -10px;\n  right: calc(50% - 10px);\n  border-bottom: 10px solid #ffebef;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n.arrow\\:l\\:pink-lightest::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  left: -10px;\n  top: calc(50% - 10px);\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 0 solid transparent;\n  border-right: 10px solid #ffebef;\n}\n.bg\\:transparent {\n  background-color: transparent;\n}\n.bg\\:black {\n  background-color: #22292f;\n}\n.bg\\:grey-darkest {\n  background-color: #3d4852;\n}\n.bg\\:grey-darker {\n  background-color: #606f7b;\n}\n.bg\\:grey-dark {\n  background-color: #8795a1;\n}\n.bg\\:grey {\n  background-color: #b8c2cc;\n}\n.bg\\:grey-light {\n  background-color: #dae1e7;\n}\n.bg\\:grey-lighter {\n  background-color: #f1f5f8;\n}\n.bg\\:grey-lightest, table tbody tr:nth-child(odd) {\n  background-color: #f8fafc;\n}\n.bg\\:white {\n  background-color: #ffffff;\n}\n.bg\\:red-darkest {\n  background-color: #3b0d0c;\n}\n.bg\\:red-darker {\n  background-color: #621b18;\n}\n.bg\\:red-dark {\n  background-color: #cc1f1a;\n}\n.bg\\:red {\n  background-color: #f44040;\n}\n.bg\\:red-light {\n  background-color: #f75f51;\n}\n.bg\\:red-lighter {\n  background-color: #f9acaa;\n}\n.bg\\:red-lightest {\n  background-color: #ffd8d4;\n}\n.bg\\:orange-darkest {\n  background-color: #c64411;\n}\n.bg\\:orange-darker {\n  background-color: #d86501;\n}\n.bg\\:orange-dark {\n  background-color: #f27e19;\n}\n.bg\\:orange {\n  background-color: #ff9334;\n}\n.bg\\:orange-light {\n  background-color: #faad63;\n}\n.bg\\:orange-lighter {\n  background-color: #fcd9b6;\n}\n.bg\\:orange-lightest {\n  background-color: #fff5eb;\n}\n.bg\\:yellow-darkest {\n  background-color: #453411;\n}\n.bg\\:yellow-darker {\n  background-color: #684f1d;\n}\n.bg\\:yellow-dark {\n  background-color: #f2d024;\n}\n.bg\\:yellow {\n  background-color: #ffed4a;\n}\n.bg\\:yellow-light {\n  background-color: #fff382;\n}\n.bg\\:yellow-lighter {\n  background-color: #fff9c2;\n}\n.bg\\:yellow-lightest {\n  background-color: #fcfbeb;\n}\n.bg\\:teal-darkest {\n  background-color: #0d3331;\n}\n.bg\\:teal-darker {\n  background-color: #006875;\n}\n.bg\\:teal-dark {\n  background-color: #017887;\n}\n.bg\\:teal {\n  background-color: #019bae;\n}\n.bg\\:teal-light {\n  background-color: #3bbcc7;\n}\n.bg\\:teal-lighter {\n  background-color: #c0f1f5;\n}\n.bg\\:teal-lightest {\n  background-color: #e8fffe;\n}\n.bg\\:green-darkest {\n  background-color: #0f2f21;\n}\n.bg\\:green-darker {\n  background-color: #1a4731;\n}\n.bg\\:green-dark {\n  background-color: #1f9d55;\n}\n.bg\\:green {\n  background-color: #11b776;\n}\n.bg\\:green-light {\n  background-color: #51d88a;\n}\n.bg\\:green-lighter {\n  background-color: #a2f5bf;\n}\n.bg\\:green-lightest {\n  background-color: #e3fcec;\n}\n.bg\\:blue-darkest {\n  background-color: #12283a;\n}\n.bg\\:blue-darker {\n  background-color: #1c3d5a;\n}\n.bg\\:blue-dark {\n  background-color: #2779bd;\n}\n.bg\\:blue {\n  background-color: #3490dc;\n}\n.bg\\:blue-light {\n  background-color: #6cb2eb;\n}\n.bg\\:blue-lighter {\n  background-color: #bcdefa;\n}\n.bg\\:blue-lightest {\n  background-color: #eff8ff;\n}\n.bg\\:indigo-darkest {\n  background-color: #191e38;\n}\n.bg\\:indigo-darker {\n  background-color: #2f365f;\n}\n.bg\\:indigo-dark {\n  background-color: #5661b3;\n}\n.bg\\:indigo {\n  background-color: #6574cd;\n}\n.bg\\:indigo-light {\n  background-color: #7886d7;\n}\n.bg\\:indigo-lighter {\n  background-color: #b2b7ff;\n}\n.bg\\:indigo-lightest {\n  background-color: #e6e8ff;\n}\n.bg\\:purple-darkest {\n  background-color: #21183c;\n}\n.bg\\:purple-darker {\n  background-color: #382b5f;\n}\n.bg\\:purple-dark {\n  background-color: #794acf;\n}\n.bg\\:purple {\n  background-color: #9561e2;\n}\n.bg\\:purple-light {\n  background-color: #a779e9;\n}\n.bg\\:purple-lighter {\n  background-color: #d6bbfc;\n}\n.bg\\:purple-lightest {\n  background-color: #f3ebff;\n}\n.bg\\:pink-darkest {\n  background-color: #451225;\n}\n.bg\\:pink-darker {\n  background-color: #6f213f;\n}\n.bg\\:pink-dark {\n  background-color: #eb5286;\n}\n.bg\\:pink {\n  background-color: #f66d9b;\n}\n.bg\\:pink-light {\n  background-color: #fa7ea8;\n}\n.bg\\:pink-lighter {\n  background-color: #ffbbca;\n}\n.bg\\:pink-lightest {\n  background-color: #ffebef;\n}\n.hover\\:bg\\:transparent:hover {\n  background-color: transparent;\n}\n.hover\\:bg\\:black:hover {\n  background-color: #22292f;\n}\n.hover\\:bg\\:grey-darkest:hover {\n  background-color: #3d4852;\n}\n.hover\\:bg\\:grey-darker:hover {\n  background-color: #606f7b;\n}\n.hover\\:bg\\:grey-dark:hover {\n  background-color: #8795a1;\n}\n.hover\\:bg\\:grey:hover {\n  background-color: #b8c2cc;\n}\n.hover\\:bg\\:grey-light:hover {\n  background-color: #dae1e7;\n}\n.hover\\:bg\\:grey-lighter:hover {\n  background-color: #f1f5f8;\n}\n.hover\\:bg\\:grey-lightest:hover {\n  background-color: #f8fafc;\n}\n.hover\\:bg\\:white:hover {\n  background-color: #ffffff;\n}\n.hover\\:bg\\:red-darkest:hover {\n  background-color: #3b0d0c;\n}\n.hover\\:bg\\:red-darker:hover {\n  background-color: #621b18;\n}\n.hover\\:bg\\:red-dark:hover {\n  background-color: #cc1f1a;\n}\n.hover\\:bg\\:red:hover {\n  background-color: #f44040;\n}\n.hover\\:bg\\:red-light:hover {\n  background-color: #f75f51;\n}\n.hover\\:bg\\:red-lighter:hover {\n  background-color: #f9acaa;\n}\n.hover\\:bg\\:red-lightest:hover {\n  background-color: #ffd8d4;\n}\n.hover\\:bg\\:orange-darkest:hover {\n  background-color: #c64411;\n}\n.hover\\:bg\\:orange-darker:hover {\n  background-color: #d86501;\n}\n.hover\\:bg\\:orange-dark:hover {\n  background-color: #f27e19;\n}\n.hover\\:bg\\:orange:hover {\n  background-color: #ff9334;\n}\n.hover\\:bg\\:orange-light:hover {\n  background-color: #faad63;\n}\n.hover\\:bg\\:orange-lighter:hover {\n  background-color: #fcd9b6;\n}\n.hover\\:bg\\:orange-lightest:hover {\n  background-color: #fff5eb;\n}\n.hover\\:bg\\:yellow-darkest:hover {\n  background-color: #453411;\n}\n.hover\\:bg\\:yellow-darker:hover {\n  background-color: #684f1d;\n}\n.hover\\:bg\\:yellow-dark:hover {\n  background-color: #f2d024;\n}\n.hover\\:bg\\:yellow:hover {\n  background-color: #ffed4a;\n}\n.hover\\:bg\\:yellow-light:hover {\n  background-color: #fff382;\n}\n.hover\\:bg\\:yellow-lighter:hover {\n  background-color: #fff9c2;\n}\n.hover\\:bg\\:yellow-lightest:hover {\n  background-color: #fcfbeb;\n}\n.hover\\:bg\\:teal-darkest:hover {\n  background-color: #0d3331;\n}\n.hover\\:bg\\:teal-darker:hover {\n  background-color: #006875;\n}\n.hover\\:bg\\:teal-dark:hover {\n  background-color: #017887;\n}\n.hover\\:bg\\:teal:hover {\n  background-color: #019bae;\n}\n.hover\\:bg\\:teal-light:hover {\n  background-color: #3bbcc7;\n}\n.hover\\:bg\\:teal-lighter:hover {\n  background-color: #c0f1f5;\n}\n.hover\\:bg\\:teal-lightest:hover {\n  background-color: #e8fffe;\n}\n.hover\\:bg\\:green-darkest:hover {\n  background-color: #0f2f21;\n}\n.hover\\:bg\\:green-darker:hover {\n  background-color: #1a4731;\n}\n.hover\\:bg\\:green-dark:hover {\n  background-color: #1f9d55;\n}\n.hover\\:bg\\:green:hover {\n  background-color: #11b776;\n}\n.hover\\:bg\\:green-light:hover {\n  background-color: #51d88a;\n}\n.hover\\:bg\\:green-lighter:hover {\n  background-color: #a2f5bf;\n}\n.hover\\:bg\\:green-lightest:hover {\n  background-color: #e3fcec;\n}\n.hover\\:bg\\:blue-darkest:hover {\n  background-color: #12283a;\n}\n.hover\\:bg\\:blue-darker:hover {\n  background-color: #1c3d5a;\n}\n.hover\\:bg\\:blue-dark:hover {\n  background-color: #2779bd;\n}\n.hover\\:bg\\:blue:hover {\n  background-color: #3490dc;\n}\n.hover\\:bg\\:blue-light:hover {\n  background-color: #6cb2eb;\n}\n.hover\\:bg\\:blue-lighter:hover {\n  background-color: #bcdefa;\n}\n.hover\\:bg\\:blue-lightest:hover, table tbody tr:hover {\n  background-color: #eff8ff;\n}\n.hover\\:bg\\:indigo-darkest:hover {\n  background-color: #191e38;\n}\n.hover\\:bg\\:indigo-darker:hover {\n  background-color: #2f365f;\n}\n.hover\\:bg\\:indigo-dark:hover {\n  background-color: #5661b3;\n}\n.hover\\:bg\\:indigo:hover {\n  background-color: #6574cd;\n}\n.hover\\:bg\\:indigo-light:hover {\n  background-color: #7886d7;\n}\n.hover\\:bg\\:indigo-lighter:hover {\n  background-color: #b2b7ff;\n}\n.hover\\:bg\\:indigo-lightest:hover {\n  background-color: #e6e8ff;\n}\n.hover\\:bg\\:purple-darkest:hover {\n  background-color: #21183c;\n}\n.hover\\:bg\\:purple-darker:hover {\n  background-color: #382b5f;\n}\n.hover\\:bg\\:purple-dark:hover {\n  background-color: #794acf;\n}\n.hover\\:bg\\:purple:hover {\n  background-color: #9561e2;\n}\n.hover\\:bg\\:purple-light:hover {\n  background-color: #a779e9;\n}\n.hover\\:bg\\:purple-lighter:hover {\n  background-color: #d6bbfc;\n}\n.hover\\:bg\\:purple-lightest:hover {\n  background-color: #f3ebff;\n}\n.hover\\:bg\\:pink-darkest:hover {\n  background-color: #451225;\n}\n.hover\\:bg\\:pink-darker:hover {\n  background-color: #6f213f;\n}\n.hover\\:bg\\:pink-dark:hover {\n  background-color: #eb5286;\n}\n.hover\\:bg\\:pink:hover {\n  background-color: #f66d9b;\n}\n.hover\\:bg\\:pink-light:hover {\n  background-color: #fa7ea8;\n}\n.hover\\:bg\\:pink-lighter:hover {\n  background-color: #ffbbca;\n}\n.hover\\:bg\\:pink-lightest:hover {\n  background-color: #ffebef;\n}\n.disabled\\:bg\\:transparent:disabled {\n  background-color: transparent;\n}\n.disabled\\:bg\\:black:disabled {\n  background-color: #22292f;\n}\n.disabled\\:bg\\:grey-darkest:disabled {\n  background-color: #3d4852;\n}\n.disabled\\:bg\\:grey-darker:disabled {\n  background-color: #606f7b;\n}\n.disabled\\:bg\\:grey-dark:disabled {\n  background-color: #8795a1;\n}\n.disabled\\:bg\\:grey:disabled {\n  background-color: #b8c2cc;\n}\n.disabled\\:bg\\:grey-light:disabled {\n  background-color: #dae1e7;\n}\n.disabled\\:bg\\:grey-lighter:disabled {\n  background-color: #f1f5f8;\n}\n.disabled\\:bg\\:grey-lightest:disabled {\n  background-color: #f8fafc;\n}\n.disabled\\:bg\\:white:disabled {\n  background-color: #ffffff;\n}\n.disabled\\:bg\\:red-darkest:disabled {\n  background-color: #3b0d0c;\n}\n.disabled\\:bg\\:red-darker:disabled {\n  background-color: #621b18;\n}\n.disabled\\:bg\\:red-dark:disabled {\n  background-color: #cc1f1a;\n}\n.disabled\\:bg\\:red:disabled {\n  background-color: #f44040;\n}\n.disabled\\:bg\\:red-light:disabled {\n  background-color: #f75f51;\n}\n.disabled\\:bg\\:red-lighter:disabled {\n  background-color: #f9acaa;\n}\n.disabled\\:bg\\:red-lightest:disabled {\n  background-color: #ffd8d4;\n}\n.disabled\\:bg\\:orange-darkest:disabled {\n  background-color: #c64411;\n}\n.disabled\\:bg\\:orange-darker:disabled {\n  background-color: #d86501;\n}\n.disabled\\:bg\\:orange-dark:disabled {\n  background-color: #f27e19;\n}\n.disabled\\:bg\\:orange:disabled {\n  background-color: #ff9334;\n}\n.disabled\\:bg\\:orange-light:disabled {\n  background-color: #faad63;\n}\n.disabled\\:bg\\:orange-lighter:disabled {\n  background-color: #fcd9b6;\n}\n.disabled\\:bg\\:orange-lightest:disabled {\n  background-color: #fff5eb;\n}\n.disabled\\:bg\\:yellow-darkest:disabled {\n  background-color: #453411;\n}\n.disabled\\:bg\\:yellow-darker:disabled {\n  background-color: #684f1d;\n}\n.disabled\\:bg\\:yellow-dark:disabled {\n  background-color: #f2d024;\n}\n.disabled\\:bg\\:yellow:disabled {\n  background-color: #ffed4a;\n}\n.disabled\\:bg\\:yellow-light:disabled {\n  background-color: #fff382;\n}\n.disabled\\:bg\\:yellow-lighter:disabled {\n  background-color: #fff9c2;\n}\n.disabled\\:bg\\:yellow-lightest:disabled {\n  background-color: #fcfbeb;\n}\n.disabled\\:bg\\:teal-darkest:disabled {\n  background-color: #0d3331;\n}\n.disabled\\:bg\\:teal-darker:disabled {\n  background-color: #006875;\n}\n.disabled\\:bg\\:teal-dark:disabled {\n  background-color: #017887;\n}\n.disabled\\:bg\\:teal:disabled {\n  background-color: #019bae;\n}\n.disabled\\:bg\\:teal-light:disabled {\n  background-color: #3bbcc7;\n}\n.disabled\\:bg\\:teal-lighter:disabled {\n  background-color: #c0f1f5;\n}\n.disabled\\:bg\\:teal-lightest:disabled {\n  background-color: #e8fffe;\n}\n.disabled\\:bg\\:green-darkest:disabled {\n  background-color: #0f2f21;\n}\n.disabled\\:bg\\:green-darker:disabled {\n  background-color: #1a4731;\n}\n.disabled\\:bg\\:green-dark:disabled {\n  background-color: #1f9d55;\n}\n.disabled\\:bg\\:green:disabled {\n  background-color: #11b776;\n}\n.disabled\\:bg\\:green-light:disabled {\n  background-color: #51d88a;\n}\n.disabled\\:bg\\:green-lighter:disabled {\n  background-color: #a2f5bf;\n}\n.disabled\\:bg\\:green-lightest:disabled {\n  background-color: #e3fcec;\n}\n.disabled\\:bg\\:blue-darkest:disabled {\n  background-color: #12283a;\n}\n.disabled\\:bg\\:blue-darker:disabled {\n  background-color: #1c3d5a;\n}\n.disabled\\:bg\\:blue-dark:disabled {\n  background-color: #2779bd;\n}\n.disabled\\:bg\\:blue:disabled {\n  background-color: #3490dc;\n}\n.disabled\\:bg\\:blue-light:disabled {\n  background-color: #6cb2eb;\n}\n.disabled\\:bg\\:blue-lighter:disabled {\n  background-color: #bcdefa;\n}\n.disabled\\:bg\\:blue-lightest:disabled {\n  background-color: #eff8ff;\n}\n.disabled\\:bg\\:indigo-darkest:disabled {\n  background-color: #191e38;\n}\n.disabled\\:bg\\:indigo-darker:disabled {\n  background-color: #2f365f;\n}\n.disabled\\:bg\\:indigo-dark:disabled {\n  background-color: #5661b3;\n}\n.disabled\\:bg\\:indigo:disabled {\n  background-color: #6574cd;\n}\n.disabled\\:bg\\:indigo-light:disabled {\n  background-color: #7886d7;\n}\n.disabled\\:bg\\:indigo-lighter:disabled {\n  background-color: #b2b7ff;\n}\n.disabled\\:bg\\:indigo-lightest:disabled {\n  background-color: #e6e8ff;\n}\n.disabled\\:bg\\:purple-darkest:disabled {\n  background-color: #21183c;\n}\n.disabled\\:bg\\:purple-darker:disabled {\n  background-color: #382b5f;\n}\n.disabled\\:bg\\:purple-dark:disabled {\n  background-color: #794acf;\n}\n.disabled\\:bg\\:purple:disabled {\n  background-color: #9561e2;\n}\n.disabled\\:bg\\:purple-light:disabled {\n  background-color: #a779e9;\n}\n.disabled\\:bg\\:purple-lighter:disabled {\n  background-color: #d6bbfc;\n}\n.disabled\\:bg\\:purple-lightest:disabled {\n  background-color: #f3ebff;\n}\n.disabled\\:bg\\:pink-darkest:disabled {\n  background-color: #451225;\n}\n.disabled\\:bg\\:pink-darker:disabled {\n  background-color: #6f213f;\n}\n.disabled\\:bg\\:pink-dark:disabled {\n  background-color: #eb5286;\n}\n.disabled\\:bg\\:pink:disabled {\n  background-color: #f66d9b;\n}\n.disabled\\:bg\\:pink-light:disabled {\n  background-color: #fa7ea8;\n}\n.disabled\\:bg\\:pink-lighter:disabled {\n  background-color: #ffbbca;\n}\n.disabled\\:bg\\:pink-lightest:disabled {\n  background-color: #ffebef;\n}\n.visited\\:bg\\:transparent:visited {\n  background-color: transparent;\n}\n.visited\\:bg\\:black:visited {\n  background-color: #22292f;\n}\n.visited\\:bg\\:grey-darkest:visited {\n  background-color: #3d4852;\n}\n.visited\\:bg\\:grey-darker:visited {\n  background-color: #606f7b;\n}\n.visited\\:bg\\:grey-dark:visited {\n  background-color: #8795a1;\n}\n.visited\\:bg\\:grey:visited {\n  background-color: #b8c2cc;\n}\n.visited\\:bg\\:grey-light:visited {\n  background-color: #dae1e7;\n}\n.visited\\:bg\\:grey-lighter:visited {\n  background-color: #f1f5f8;\n}\n.visited\\:bg\\:grey-lightest:visited {\n  background-color: #f8fafc;\n}\n.visited\\:bg\\:white:visited {\n  background-color: #ffffff;\n}\n.visited\\:bg\\:red-darkest:visited {\n  background-color: #3b0d0c;\n}\n.visited\\:bg\\:red-darker:visited {\n  background-color: #621b18;\n}\n.visited\\:bg\\:red-dark:visited {\n  background-color: #cc1f1a;\n}\n.visited\\:bg\\:red:visited {\n  background-color: #f44040;\n}\n.visited\\:bg\\:red-light:visited {\n  background-color: #f75f51;\n}\n.visited\\:bg\\:red-lighter:visited {\n  background-color: #f9acaa;\n}\n.visited\\:bg\\:red-lightest:visited {\n  background-color: #ffd8d4;\n}\n.visited\\:bg\\:orange-darkest:visited {\n  background-color: #c64411;\n}\n.visited\\:bg\\:orange-darker:visited {\n  background-color: #d86501;\n}\n.visited\\:bg\\:orange-dark:visited {\n  background-color: #f27e19;\n}\n.visited\\:bg\\:orange:visited {\n  background-color: #ff9334;\n}\n.visited\\:bg\\:orange-light:visited {\n  background-color: #faad63;\n}\n.visited\\:bg\\:orange-lighter:visited {\n  background-color: #fcd9b6;\n}\n.visited\\:bg\\:orange-lightest:visited {\n  background-color: #fff5eb;\n}\n.visited\\:bg\\:yellow-darkest:visited {\n  background-color: #453411;\n}\n.visited\\:bg\\:yellow-darker:visited {\n  background-color: #684f1d;\n}\n.visited\\:bg\\:yellow-dark:visited {\n  background-color: #f2d024;\n}\n.visited\\:bg\\:yellow:visited {\n  background-color: #ffed4a;\n}\n.visited\\:bg\\:yellow-light:visited {\n  background-color: #fff382;\n}\n.visited\\:bg\\:yellow-lighter:visited {\n  background-color: #fff9c2;\n}\n.visited\\:bg\\:yellow-lightest:visited {\n  background-color: #fcfbeb;\n}\n.visited\\:bg\\:teal-darkest:visited {\n  background-color: #0d3331;\n}\n.visited\\:bg\\:teal-darker:visited {\n  background-color: #006875;\n}\n.visited\\:bg\\:teal-dark:visited {\n  background-color: #017887;\n}\n.visited\\:bg\\:teal:visited {\n  background-color: #019bae;\n}\n.visited\\:bg\\:teal-light:visited {\n  background-color: #3bbcc7;\n}\n.visited\\:bg\\:teal-lighter:visited {\n  background-color: #c0f1f5;\n}\n.visited\\:bg\\:teal-lightest:visited {\n  background-color: #e8fffe;\n}\n.visited\\:bg\\:green-darkest:visited {\n  background-color: #0f2f21;\n}\n.visited\\:bg\\:green-darker:visited {\n  background-color: #1a4731;\n}\n.visited\\:bg\\:green-dark:visited {\n  background-color: #1f9d55;\n}\n.visited\\:bg\\:green:visited {\n  background-color: #11b776;\n}\n.visited\\:bg\\:green-light:visited {\n  background-color: #51d88a;\n}\n.visited\\:bg\\:green-lighter:visited {\n  background-color: #a2f5bf;\n}\n.visited\\:bg\\:green-lightest:visited {\n  background-color: #e3fcec;\n}\n.visited\\:bg\\:blue-darkest:visited {\n  background-color: #12283a;\n}\n.visited\\:bg\\:blue-darker:visited {\n  background-color: #1c3d5a;\n}\n.visited\\:bg\\:blue-dark:visited {\n  background-color: #2779bd;\n}\n.visited\\:bg\\:blue:visited {\n  background-color: #3490dc;\n}\n.visited\\:bg\\:blue-light:visited {\n  background-color: #6cb2eb;\n}\n.visited\\:bg\\:blue-lighter:visited {\n  background-color: #bcdefa;\n}\n.visited\\:bg\\:blue-lightest:visited {\n  background-color: #eff8ff;\n}\n.visited\\:bg\\:indigo-darkest:visited {\n  background-color: #191e38;\n}\n.visited\\:bg\\:indigo-darker:visited {\n  background-color: #2f365f;\n}\n.visited\\:bg\\:indigo-dark:visited {\n  background-color: #5661b3;\n}\n.visited\\:bg\\:indigo:visited {\n  background-color: #6574cd;\n}\n.visited\\:bg\\:indigo-light:visited {\n  background-color: #7886d7;\n}\n.visited\\:bg\\:indigo-lighter:visited {\n  background-color: #b2b7ff;\n}\n.visited\\:bg\\:indigo-lightest:visited {\n  background-color: #e6e8ff;\n}\n.visited\\:bg\\:purple-darkest:visited {\n  background-color: #21183c;\n}\n.visited\\:bg\\:purple-darker:visited {\n  background-color: #382b5f;\n}\n.visited\\:bg\\:purple-dark:visited {\n  background-color: #794acf;\n}\n.visited\\:bg\\:purple:visited {\n  background-color: #9561e2;\n}\n.visited\\:bg\\:purple-light:visited {\n  background-color: #a779e9;\n}\n.visited\\:bg\\:purple-lighter:visited {\n  background-color: #d6bbfc;\n}\n.visited\\:bg\\:purple-lightest:visited {\n  background-color: #f3ebff;\n}\n.visited\\:bg\\:pink-darkest:visited {\n  background-color: #451225;\n}\n.visited\\:bg\\:pink-darker:visited {\n  background-color: #6f213f;\n}\n.visited\\:bg\\:pink-dark:visited {\n  background-color: #eb5286;\n}\n.visited\\:bg\\:pink:visited {\n  background-color: #f66d9b;\n}\n.visited\\:bg\\:pink-light:visited {\n  background-color: #fa7ea8;\n}\n.visited\\:bg\\:pink-lighter:visited {\n  background-color: #ffbbca;\n}\n.visited\\:bg\\:pink-lightest:visited {\n  background-color: #ffebef;\n}\n.focus\\:bg\\:transparent:focus {\n  background-color: transparent;\n}\n.focus\\:bg\\:black:focus {\n  background-color: #22292f;\n}\n.focus\\:bg\\:grey-darkest:focus {\n  background-color: #3d4852;\n}\n.focus\\:bg\\:grey-darker:focus {\n  background-color: #606f7b;\n}\n.focus\\:bg\\:grey-dark:focus {\n  background-color: #8795a1;\n}\n.focus\\:bg\\:grey:focus {\n  background-color: #b8c2cc;\n}\n.focus\\:bg\\:grey-light:focus {\n  background-color: #dae1e7;\n}\n.focus\\:bg\\:grey-lighter:focus {\n  background-color: #f1f5f8;\n}\n.focus\\:bg\\:grey-lightest:focus {\n  background-color: #f8fafc;\n}\n.focus\\:bg\\:white:focus {\n  background-color: #ffffff;\n}\n.focus\\:bg\\:red-darkest:focus {\n  background-color: #3b0d0c;\n}\n.focus\\:bg\\:red-darker:focus {\n  background-color: #621b18;\n}\n.focus\\:bg\\:red-dark:focus {\n  background-color: #cc1f1a;\n}\n.focus\\:bg\\:red:focus {\n  background-color: #f44040;\n}\n.focus\\:bg\\:red-light:focus {\n  background-color: #f75f51;\n}\n.focus\\:bg\\:red-lighter:focus {\n  background-color: #f9acaa;\n}\n.focus\\:bg\\:red-lightest:focus {\n  background-color: #ffd8d4;\n}\n.focus\\:bg\\:orange-darkest:focus {\n  background-color: #c64411;\n}\n.focus\\:bg\\:orange-darker:focus {\n  background-color: #d86501;\n}\n.focus\\:bg\\:orange-dark:focus {\n  background-color: #f27e19;\n}\n.focus\\:bg\\:orange:focus {\n  background-color: #ff9334;\n}\n.focus\\:bg\\:orange-light:focus {\n  background-color: #faad63;\n}\n.focus\\:bg\\:orange-lighter:focus {\n  background-color: #fcd9b6;\n}\n.focus\\:bg\\:orange-lightest:focus {\n  background-color: #fff5eb;\n}\n.focus\\:bg\\:yellow-darkest:focus {\n  background-color: #453411;\n}\n.focus\\:bg\\:yellow-darker:focus {\n  background-color: #684f1d;\n}\n.focus\\:bg\\:yellow-dark:focus {\n  background-color: #f2d024;\n}\n.focus\\:bg\\:yellow:focus {\n  background-color: #ffed4a;\n}\n.focus\\:bg\\:yellow-light:focus {\n  background-color: #fff382;\n}\n.focus\\:bg\\:yellow-lighter:focus {\n  background-color: #fff9c2;\n}\n.focus\\:bg\\:yellow-lightest:focus {\n  background-color: #fcfbeb;\n}\n.focus\\:bg\\:teal-darkest:focus {\n  background-color: #0d3331;\n}\n.focus\\:bg\\:teal-darker:focus {\n  background-color: #006875;\n}\n.focus\\:bg\\:teal-dark:focus {\n  background-color: #017887;\n}\n.focus\\:bg\\:teal:focus {\n  background-color: #019bae;\n}\n.focus\\:bg\\:teal-light:focus {\n  background-color: #3bbcc7;\n}\n.focus\\:bg\\:teal-lighter:focus {\n  background-color: #c0f1f5;\n}\n.focus\\:bg\\:teal-lightest:focus {\n  background-color: #e8fffe;\n}\n.focus\\:bg\\:green-darkest:focus {\n  background-color: #0f2f21;\n}\n.focus\\:bg\\:green-darker:focus {\n  background-color: #1a4731;\n}\n.focus\\:bg\\:green-dark:focus {\n  background-color: #1f9d55;\n}\n.focus\\:bg\\:green:focus {\n  background-color: #11b776;\n}\n.focus\\:bg\\:green-light:focus {\n  background-color: #51d88a;\n}\n.focus\\:bg\\:green-lighter:focus {\n  background-color: #a2f5bf;\n}\n.focus\\:bg\\:green-lightest:focus {\n  background-color: #e3fcec;\n}\n.focus\\:bg\\:blue-darkest:focus {\n  background-color: #12283a;\n}\n.focus\\:bg\\:blue-darker:focus {\n  background-color: #1c3d5a;\n}\n.focus\\:bg\\:blue-dark:focus {\n  background-color: #2779bd;\n}\n.focus\\:bg\\:blue:focus {\n  background-color: #3490dc;\n}\n.focus\\:bg\\:blue-light:focus {\n  background-color: #6cb2eb;\n}\n.focus\\:bg\\:blue-lighter:focus {\n  background-color: #bcdefa;\n}\n.focus\\:bg\\:blue-lightest:focus {\n  background-color: #eff8ff;\n}\n.focus\\:bg\\:indigo-darkest:focus {\n  background-color: #191e38;\n}\n.focus\\:bg\\:indigo-darker:focus {\n  background-color: #2f365f;\n}\n.focus\\:bg\\:indigo-dark:focus {\n  background-color: #5661b3;\n}\n.focus\\:bg\\:indigo:focus {\n  background-color: #6574cd;\n}\n.focus\\:bg\\:indigo-light:focus {\n  background-color: #7886d7;\n}\n.focus\\:bg\\:indigo-lighter:focus {\n  background-color: #b2b7ff;\n}\n.focus\\:bg\\:indigo-lightest:focus {\n  background-color: #e6e8ff;\n}\n.focus\\:bg\\:purple-darkest:focus {\n  background-color: #21183c;\n}\n.focus\\:bg\\:purple-darker:focus {\n  background-color: #382b5f;\n}\n.focus\\:bg\\:purple-dark:focus {\n  background-color: #794acf;\n}\n.focus\\:bg\\:purple:focus {\n  background-color: #9561e2;\n}\n.focus\\:bg\\:purple-light:focus {\n  background-color: #a779e9;\n}\n.focus\\:bg\\:purple-lighter:focus {\n  background-color: #d6bbfc;\n}\n.focus\\:bg\\:purple-lightest:focus {\n  background-color: #f3ebff;\n}\n.focus\\:bg\\:pink-darkest:focus {\n  background-color: #451225;\n}\n.focus\\:bg\\:pink-darker:focus {\n  background-color: #6f213f;\n}\n.focus\\:bg\\:pink-dark:focus {\n  background-color: #eb5286;\n}\n.focus\\:bg\\:pink:focus {\n  background-color: #f66d9b;\n}\n.focus\\:bg\\:pink-light:focus {\n  background-color: #fa7ea8;\n}\n.focus\\:bg\\:pink-lighter:focus {\n  background-color: #ffbbca;\n}\n.focus\\:bg\\:pink-lightest:focus {\n  background-color: #ffebef;\n}\n.first\\:bg\\:transparent:first-child {\n  background-color: transparent;\n}\n.first\\:bg\\:black:first-child {\n  background-color: #22292f;\n}\n.first\\:bg\\:grey-darkest:first-child {\n  background-color: #3d4852;\n}\n.first\\:bg\\:grey-darker:first-child {\n  background-color: #606f7b;\n}\n.first\\:bg\\:grey-dark:first-child {\n  background-color: #8795a1;\n}\n.first\\:bg\\:grey:first-child {\n  background-color: #b8c2cc;\n}\n.first\\:bg\\:grey-light:first-child {\n  background-color: #dae1e7;\n}\n.first\\:bg\\:grey-lighter:first-child {\n  background-color: #f1f5f8;\n}\n.first\\:bg\\:grey-lightest:first-child {\n  background-color: #f8fafc;\n}\n.first\\:bg\\:white:first-child {\n  background-color: #ffffff;\n}\n.first\\:bg\\:red-darkest:first-child {\n  background-color: #3b0d0c;\n}\n.first\\:bg\\:red-darker:first-child {\n  background-color: #621b18;\n}\n.first\\:bg\\:red-dark:first-child {\n  background-color: #cc1f1a;\n}\n.first\\:bg\\:red:first-child {\n  background-color: #f44040;\n}\n.first\\:bg\\:red-light:first-child {\n  background-color: #f75f51;\n}\n.first\\:bg\\:red-lighter:first-child {\n  background-color: #f9acaa;\n}\n.first\\:bg\\:red-lightest:first-child {\n  background-color: #ffd8d4;\n}\n.first\\:bg\\:orange-darkest:first-child {\n  background-color: #c64411;\n}\n.first\\:bg\\:orange-darker:first-child {\n  background-color: #d86501;\n}\n.first\\:bg\\:orange-dark:first-child {\n  background-color: #f27e19;\n}\n.first\\:bg\\:orange:first-child {\n  background-color: #ff9334;\n}\n.first\\:bg\\:orange-light:first-child {\n  background-color: #faad63;\n}\n.first\\:bg\\:orange-lighter:first-child {\n  background-color: #fcd9b6;\n}\n.first\\:bg\\:orange-lightest:first-child {\n  background-color: #fff5eb;\n}\n.first\\:bg\\:yellow-darkest:first-child {\n  background-color: #453411;\n}\n.first\\:bg\\:yellow-darker:first-child {\n  background-color: #684f1d;\n}\n.first\\:bg\\:yellow-dark:first-child {\n  background-color: #f2d024;\n}\n.first\\:bg\\:yellow:first-child {\n  background-color: #ffed4a;\n}\n.first\\:bg\\:yellow-light:first-child {\n  background-color: #fff382;\n}\n.first\\:bg\\:yellow-lighter:first-child {\n  background-color: #fff9c2;\n}\n.first\\:bg\\:yellow-lightest:first-child {\n  background-color: #fcfbeb;\n}\n.first\\:bg\\:teal-darkest:first-child {\n  background-color: #0d3331;\n}\n.first\\:bg\\:teal-darker:first-child {\n  background-color: #006875;\n}\n.first\\:bg\\:teal-dark:first-child {\n  background-color: #017887;\n}\n.first\\:bg\\:teal:first-child {\n  background-color: #019bae;\n}\n.first\\:bg\\:teal-light:first-child {\n  background-color: #3bbcc7;\n}\n.first\\:bg\\:teal-lighter:first-child {\n  background-color: #c0f1f5;\n}\n.first\\:bg\\:teal-lightest:first-child {\n  background-color: #e8fffe;\n}\n.first\\:bg\\:green-darkest:first-child {\n  background-color: #0f2f21;\n}\n.first\\:bg\\:green-darker:first-child {\n  background-color: #1a4731;\n}\n.first\\:bg\\:green-dark:first-child {\n  background-color: #1f9d55;\n}\n.first\\:bg\\:green:first-child {\n  background-color: #11b776;\n}\n.first\\:bg\\:green-light:first-child {\n  background-color: #51d88a;\n}\n.first\\:bg\\:green-lighter:first-child {\n  background-color: #a2f5bf;\n}\n.first\\:bg\\:green-lightest:first-child {\n  background-color: #e3fcec;\n}\n.first\\:bg\\:blue-darkest:first-child {\n  background-color: #12283a;\n}\n.first\\:bg\\:blue-darker:first-child {\n  background-color: #1c3d5a;\n}\n.first\\:bg\\:blue-dark:first-child {\n  background-color: #2779bd;\n}\n.first\\:bg\\:blue:first-child {\n  background-color: #3490dc;\n}\n.first\\:bg\\:blue-light:first-child {\n  background-color: #6cb2eb;\n}\n.first\\:bg\\:blue-lighter:first-child {\n  background-color: #bcdefa;\n}\n.first\\:bg\\:blue-lightest:first-child {\n  background-color: #eff8ff;\n}\n.first\\:bg\\:indigo-darkest:first-child {\n  background-color: #191e38;\n}\n.first\\:bg\\:indigo-darker:first-child {\n  background-color: #2f365f;\n}\n.first\\:bg\\:indigo-dark:first-child {\n  background-color: #5661b3;\n}\n.first\\:bg\\:indigo:first-child {\n  background-color: #6574cd;\n}\n.first\\:bg\\:indigo-light:first-child {\n  background-color: #7886d7;\n}\n.first\\:bg\\:indigo-lighter:first-child {\n  background-color: #b2b7ff;\n}\n.first\\:bg\\:indigo-lightest:first-child {\n  background-color: #e6e8ff;\n}\n.first\\:bg\\:purple-darkest:first-child {\n  background-color: #21183c;\n}\n.first\\:bg\\:purple-darker:first-child {\n  background-color: #382b5f;\n}\n.first\\:bg\\:purple-dark:first-child {\n  background-color: #794acf;\n}\n.first\\:bg\\:purple:first-child {\n  background-color: #9561e2;\n}\n.first\\:bg\\:purple-light:first-child {\n  background-color: #a779e9;\n}\n.first\\:bg\\:purple-lighter:first-child {\n  background-color: #d6bbfc;\n}\n.first\\:bg\\:purple-lightest:first-child {\n  background-color: #f3ebff;\n}\n.first\\:bg\\:pink-darkest:first-child {\n  background-color: #451225;\n}\n.first\\:bg\\:pink-darker:first-child {\n  background-color: #6f213f;\n}\n.first\\:bg\\:pink-dark:first-child {\n  background-color: #eb5286;\n}\n.first\\:bg\\:pink:first-child {\n  background-color: #f66d9b;\n}\n.first\\:bg\\:pink-light:first-child {\n  background-color: #fa7ea8;\n}\n.first\\:bg\\:pink-lighter:first-child {\n  background-color: #ffbbca;\n}\n.first\\:bg\\:pink-lightest:first-child {\n  background-color: #ffebef;\n}\n.last\\:bg\\:transparent:last-child {\n  background-color: transparent;\n}\n.last\\:bg\\:black:last-child {\n  background-color: #22292f;\n}\n.last\\:bg\\:grey-darkest:last-child {\n  background-color: #3d4852;\n}\n.last\\:bg\\:grey-darker:last-child {\n  background-color: #606f7b;\n}\n.last\\:bg\\:grey-dark:last-child {\n  background-color: #8795a1;\n}\n.last\\:bg\\:grey:last-child {\n  background-color: #b8c2cc;\n}\n.last\\:bg\\:grey-light:last-child {\n  background-color: #dae1e7;\n}\n.last\\:bg\\:grey-lighter:last-child {\n  background-color: #f1f5f8;\n}\n.last\\:bg\\:grey-lightest:last-child {\n  background-color: #f8fafc;\n}\n.last\\:bg\\:white:last-child {\n  background-color: #ffffff;\n}\n.last\\:bg\\:red-darkest:last-child {\n  background-color: #3b0d0c;\n}\n.last\\:bg\\:red-darker:last-child {\n  background-color: #621b18;\n}\n.last\\:bg\\:red-dark:last-child {\n  background-color: #cc1f1a;\n}\n.last\\:bg\\:red:last-child {\n  background-color: #f44040;\n}\n.last\\:bg\\:red-light:last-child {\n  background-color: #f75f51;\n}\n.last\\:bg\\:red-lighter:last-child {\n  background-color: #f9acaa;\n}\n.last\\:bg\\:red-lightest:last-child {\n  background-color: #ffd8d4;\n}\n.last\\:bg\\:orange-darkest:last-child {\n  background-color: #c64411;\n}\n.last\\:bg\\:orange-darker:last-child {\n  background-color: #d86501;\n}\n.last\\:bg\\:orange-dark:last-child {\n  background-color: #f27e19;\n}\n.last\\:bg\\:orange:last-child {\n  background-color: #ff9334;\n}\n.last\\:bg\\:orange-light:last-child {\n  background-color: #faad63;\n}\n.last\\:bg\\:orange-lighter:last-child {\n  background-color: #fcd9b6;\n}\n.last\\:bg\\:orange-lightest:last-child {\n  background-color: #fff5eb;\n}\n.last\\:bg\\:yellow-darkest:last-child {\n  background-color: #453411;\n}\n.last\\:bg\\:yellow-darker:last-child {\n  background-color: #684f1d;\n}\n.last\\:bg\\:yellow-dark:last-child {\n  background-color: #f2d024;\n}\n.last\\:bg\\:yellow:last-child {\n  background-color: #ffed4a;\n}\n.last\\:bg\\:yellow-light:last-child {\n  background-color: #fff382;\n}\n.last\\:bg\\:yellow-lighter:last-child {\n  background-color: #fff9c2;\n}\n.last\\:bg\\:yellow-lightest:last-child {\n  background-color: #fcfbeb;\n}\n.last\\:bg\\:teal-darkest:last-child {\n  background-color: #0d3331;\n}\n.last\\:bg\\:teal-darker:last-child {\n  background-color: #006875;\n}\n.last\\:bg\\:teal-dark:last-child {\n  background-color: #017887;\n}\n.last\\:bg\\:teal:last-child {\n  background-color: #019bae;\n}\n.last\\:bg\\:teal-light:last-child {\n  background-color: #3bbcc7;\n}\n.last\\:bg\\:teal-lighter:last-child {\n  background-color: #c0f1f5;\n}\n.last\\:bg\\:teal-lightest:last-child {\n  background-color: #e8fffe;\n}\n.last\\:bg\\:green-darkest:last-child {\n  background-color: #0f2f21;\n}\n.last\\:bg\\:green-darker:last-child {\n  background-color: #1a4731;\n}\n.last\\:bg\\:green-dark:last-child {\n  background-color: #1f9d55;\n}\n.last\\:bg\\:green:last-child {\n  background-color: #11b776;\n}\n.last\\:bg\\:green-light:last-child {\n  background-color: #51d88a;\n}\n.last\\:bg\\:green-lighter:last-child {\n  background-color: #a2f5bf;\n}\n.last\\:bg\\:green-lightest:last-child {\n  background-color: #e3fcec;\n}\n.last\\:bg\\:blue-darkest:last-child {\n  background-color: #12283a;\n}\n.last\\:bg\\:blue-darker:last-child {\n  background-color: #1c3d5a;\n}\n.last\\:bg\\:blue-dark:last-child {\n  background-color: #2779bd;\n}\n.last\\:bg\\:blue:last-child {\n  background-color: #3490dc;\n}\n.last\\:bg\\:blue-light:last-child {\n  background-color: #6cb2eb;\n}\n.last\\:bg\\:blue-lighter:last-child {\n  background-color: #bcdefa;\n}\n.last\\:bg\\:blue-lightest:last-child {\n  background-color: #eff8ff;\n}\n.last\\:bg\\:indigo-darkest:last-child {\n  background-color: #191e38;\n}\n.last\\:bg\\:indigo-darker:last-child {\n  background-color: #2f365f;\n}\n.last\\:bg\\:indigo-dark:last-child {\n  background-color: #5661b3;\n}\n.last\\:bg\\:indigo:last-child {\n  background-color: #6574cd;\n}\n.last\\:bg\\:indigo-light:last-child {\n  background-color: #7886d7;\n}\n.last\\:bg\\:indigo-lighter:last-child {\n  background-color: #b2b7ff;\n}\n.last\\:bg\\:indigo-lightest:last-child {\n  background-color: #e6e8ff;\n}\n.last\\:bg\\:purple-darkest:last-child {\n  background-color: #21183c;\n}\n.last\\:bg\\:purple-darker:last-child {\n  background-color: #382b5f;\n}\n.last\\:bg\\:purple-dark:last-child {\n  background-color: #794acf;\n}\n.last\\:bg\\:purple:last-child {\n  background-color: #9561e2;\n}\n.last\\:bg\\:purple-light:last-child {\n  background-color: #a779e9;\n}\n.last\\:bg\\:purple-lighter:last-child {\n  background-color: #d6bbfc;\n}\n.last\\:bg\\:purple-lightest:last-child {\n  background-color: #f3ebff;\n}\n.last\\:bg\\:pink-darkest:last-child {\n  background-color: #451225;\n}\n.last\\:bg\\:pink-darker:last-child {\n  background-color: #6f213f;\n}\n.last\\:bg\\:pink-dark:last-child {\n  background-color: #eb5286;\n}\n.last\\:bg\\:pink:last-child {\n  background-color: #f66d9b;\n}\n.last\\:bg\\:pink-light:last-child {\n  background-color: #fa7ea8;\n}\n.last\\:bg\\:pink-lighter:last-child {\n  background-color: #ffbbca;\n}\n.last\\:bg\\:pink-lightest:last-child {\n  background-color: #ffebef;\n}\n.border\\:transparent {\n  border-color: transparent;\n}\n.border\\:black {\n  border-color: #22292f;\n}\n.border\\:grey-darkest {\n  border-color: #3d4852;\n}\n.border\\:grey-darker {\n  border-color: #606f7b;\n}\n.border\\:grey-dark {\n  border-color: #8795a1;\n}\n.border\\:grey {\n  border-color: #b8c2cc;\n}\n.border\\:grey-light {\n  border-color: #dae1e7;\n}\n.border\\:grey-lighter {\n  border-color: #f1f5f8;\n}\n.border\\:grey-lightest {\n  border-color: #f8fafc;\n}\n.border\\:white {\n  border-color: #ffffff;\n}\n.border\\:red-darkest {\n  border-color: #3b0d0c;\n}\n.border\\:red-darker {\n  border-color: #621b18;\n}\n.border\\:red-dark {\n  border-color: #cc1f1a;\n}\n.border\\:red {\n  border-color: #f44040;\n}\n.border\\:red-light {\n  border-color: #f75f51;\n}\n.border\\:red-lighter {\n  border-color: #f9acaa;\n}\n.border\\:red-lightest {\n  border-color: #ffd8d4;\n}\n.border\\:orange-darkest {\n  border-color: #c64411;\n}\n.border\\:orange-darker {\n  border-color: #d86501;\n}\n.border\\:orange-dark {\n  border-color: #f27e19;\n}\n.border\\:orange {\n  border-color: #ff9334;\n}\n.border\\:orange-light {\n  border-color: #faad63;\n}\n.border\\:orange-lighter {\n  border-color: #fcd9b6;\n}\n.border\\:orange-lightest {\n  border-color: #fff5eb;\n}\n.border\\:yellow-darkest {\n  border-color: #453411;\n}\n.border\\:yellow-darker {\n  border-color: #684f1d;\n}\n.border\\:yellow-dark {\n  border-color: #f2d024;\n}\n.border\\:yellow {\n  border-color: #ffed4a;\n}\n.border\\:yellow-light {\n  border-color: #fff382;\n}\n.border\\:yellow-lighter {\n  border-color: #fff9c2;\n}\n.border\\:yellow-lightest {\n  border-color: #fcfbeb;\n}\n.border\\:teal-darkest {\n  border-color: #0d3331;\n}\n.border\\:teal-darker {\n  border-color: #006875;\n}\n.border\\:teal-dark {\n  border-color: #017887;\n}\n.border\\:teal, table thead {\n  border-color: #019bae;\n}\n.border\\:teal-light {\n  border-color: #3bbcc7;\n}\n.border\\:teal-lighter {\n  border-color: #c0f1f5;\n}\n.border\\:teal-lightest {\n  border-color: #e8fffe;\n}\n.border\\:green-darkest {\n  border-color: #0f2f21;\n}\n.border\\:green-darker {\n  border-color: #1a4731;\n}\n.border\\:green-dark {\n  border-color: #1f9d55;\n}\n.border\\:green {\n  border-color: #11b776;\n}\n.border\\:green-light {\n  border-color: #51d88a;\n}\n.border\\:green-lighter {\n  border-color: #a2f5bf;\n}\n.border\\:green-lightest {\n  border-color: #e3fcec;\n}\n.border\\:blue-darkest {\n  border-color: #12283a;\n}\n.border\\:blue-darker {\n  border-color: #1c3d5a;\n}\n.border\\:blue-dark {\n  border-color: #2779bd;\n}\n.border\\:blue {\n  border-color: #3490dc;\n}\n.border\\:blue-light {\n  border-color: #6cb2eb;\n}\n.border\\:blue-lighter {\n  border-color: #bcdefa;\n}\n.border\\:blue-lightest {\n  border-color: #eff8ff;\n}\n.border\\:indigo-darkest {\n  border-color: #191e38;\n}\n.border\\:indigo-darker {\n  border-color: #2f365f;\n}\n.border\\:indigo-dark {\n  border-color: #5661b3;\n}\n.border\\:indigo {\n  border-color: #6574cd;\n}\n.border\\:indigo-light {\n  border-color: #7886d7;\n}\n.border\\:indigo-lighter {\n  border-color: #b2b7ff;\n}\n.border\\:indigo-lightest {\n  border-color: #e6e8ff;\n}\n.border\\:purple-darkest {\n  border-color: #21183c;\n}\n.border\\:purple-darker {\n  border-color: #382b5f;\n}\n.border\\:purple-dark {\n  border-color: #794acf;\n}\n.border\\:purple {\n  border-color: #9561e2;\n}\n.border\\:purple-light {\n  border-color: #a779e9;\n}\n.border\\:purple-lighter {\n  border-color: #d6bbfc;\n}\n.border\\:purple-lightest {\n  border-color: #f3ebff;\n}\n.border\\:pink-darkest {\n  border-color: #451225;\n}\n.border\\:pink-darker {\n  border-color: #6f213f;\n}\n.border\\:pink-dark {\n  border-color: #eb5286;\n}\n.border\\:pink {\n  border-color: #f66d9b;\n}\n.border\\:pink-light {\n  border-color: #fa7ea8;\n}\n.border\\:pink-lighter {\n  border-color: #ffbbca;\n}\n.border\\:pink-lightest {\n  border-color: #ffebef;\n}\n.hover\\:border\\:transparent:hover {\n  border-color: transparent;\n}\n.hover\\:border\\:black:hover {\n  border-color: #22292f;\n}\n.hover\\:border\\:grey-darkest:hover {\n  border-color: #3d4852;\n}\n.hover\\:border\\:grey-darker:hover {\n  border-color: #606f7b;\n}\n.hover\\:border\\:grey-dark:hover {\n  border-color: #8795a1;\n}\n.hover\\:border\\:grey:hover {\n  border-color: #b8c2cc;\n}\n.hover\\:border\\:grey-light:hover {\n  border-color: #dae1e7;\n}\n.hover\\:border\\:grey-lighter:hover {\n  border-color: #f1f5f8;\n}\n.hover\\:border\\:grey-lightest:hover {\n  border-color: #f8fafc;\n}\n.hover\\:border\\:white:hover {\n  border-color: #ffffff;\n}\n.hover\\:border\\:red-darkest:hover {\n  border-color: #3b0d0c;\n}\n.hover\\:border\\:red-darker:hover {\n  border-color: #621b18;\n}\n.hover\\:border\\:red-dark:hover {\n  border-color: #cc1f1a;\n}\n.hover\\:border\\:red:hover {\n  border-color: #f44040;\n}\n.hover\\:border\\:red-light:hover {\n  border-color: #f75f51;\n}\n.hover\\:border\\:red-lighter:hover {\n  border-color: #f9acaa;\n}\n.hover\\:border\\:red-lightest:hover {\n  border-color: #ffd8d4;\n}\n.hover\\:border\\:orange-darkest:hover {\n  border-color: #c64411;\n}\n.hover\\:border\\:orange-darker:hover {\n  border-color: #d86501;\n}\n.hover\\:border\\:orange-dark:hover {\n  border-color: #f27e19;\n}\n.hover\\:border\\:orange:hover {\n  border-color: #ff9334;\n}\n.hover\\:border\\:orange-light:hover {\n  border-color: #faad63;\n}\n.hover\\:border\\:orange-lighter:hover {\n  border-color: #fcd9b6;\n}\n.hover\\:border\\:orange-lightest:hover {\n  border-color: #fff5eb;\n}\n.hover\\:border\\:yellow-darkest:hover {\n  border-color: #453411;\n}\n.hover\\:border\\:yellow-darker:hover {\n  border-color: #684f1d;\n}\n.hover\\:border\\:yellow-dark:hover {\n  border-color: #f2d024;\n}\n.hover\\:border\\:yellow:hover {\n  border-color: #ffed4a;\n}\n.hover\\:border\\:yellow-light:hover {\n  border-color: #fff382;\n}\n.hover\\:border\\:yellow-lighter:hover {\n  border-color: #fff9c2;\n}\n.hover\\:border\\:yellow-lightest:hover {\n  border-color: #fcfbeb;\n}\n.hover\\:border\\:teal-darkest:hover {\n  border-color: #0d3331;\n}\n.hover\\:border\\:teal-darker:hover {\n  border-color: #006875;\n}\n.hover\\:border\\:teal-dark:hover {\n  border-color: #017887;\n}\n.hover\\:border\\:teal:hover {\n  border-color: #019bae;\n}\n.hover\\:border\\:teal-light:hover {\n  border-color: #3bbcc7;\n}\n.hover\\:border\\:teal-lighter:hover {\n  border-color: #c0f1f5;\n}\n.hover\\:border\\:teal-lightest:hover {\n  border-color: #e8fffe;\n}\n.hover\\:border\\:green-darkest:hover {\n  border-color: #0f2f21;\n}\n.hover\\:border\\:green-darker:hover {\n  border-color: #1a4731;\n}\n.hover\\:border\\:green-dark:hover {\n  border-color: #1f9d55;\n}\n.hover\\:border\\:green:hover {\n  border-color: #11b776;\n}\n.hover\\:border\\:green-light:hover {\n  border-color: #51d88a;\n}\n.hover\\:border\\:green-lighter:hover {\n  border-color: #a2f5bf;\n}\n.hover\\:border\\:green-lightest:hover {\n  border-color: #e3fcec;\n}\n.hover\\:border\\:blue-darkest:hover {\n  border-color: #12283a;\n}\n.hover\\:border\\:blue-darker:hover {\n  border-color: #1c3d5a;\n}\n.hover\\:border\\:blue-dark:hover {\n  border-color: #2779bd;\n}\n.hover\\:border\\:blue:hover {\n  border-color: #3490dc;\n}\n.hover\\:border\\:blue-light:hover {\n  border-color: #6cb2eb;\n}\n.hover\\:border\\:blue-lighter:hover {\n  border-color: #bcdefa;\n}\n.hover\\:border\\:blue-lightest:hover {\n  border-color: #eff8ff;\n}\n.hover\\:border\\:indigo-darkest:hover {\n  border-color: #191e38;\n}\n.hover\\:border\\:indigo-darker:hover {\n  border-color: #2f365f;\n}\n.hover\\:border\\:indigo-dark:hover {\n  border-color: #5661b3;\n}\n.hover\\:border\\:indigo:hover {\n  border-color: #6574cd;\n}\n.hover\\:border\\:indigo-light:hover {\n  border-color: #7886d7;\n}\n.hover\\:border\\:indigo-lighter:hover {\n  border-color: #b2b7ff;\n}\n.hover\\:border\\:indigo-lightest:hover {\n  border-color: #e6e8ff;\n}\n.hover\\:border\\:purple-darkest:hover {\n  border-color: #21183c;\n}\n.hover\\:border\\:purple-darker:hover {\n  border-color: #382b5f;\n}\n.hover\\:border\\:purple-dark:hover {\n  border-color: #794acf;\n}\n.hover\\:border\\:purple:hover {\n  border-color: #9561e2;\n}\n.hover\\:border\\:purple-light:hover {\n  border-color: #a779e9;\n}\n.hover\\:border\\:purple-lighter:hover {\n  border-color: #d6bbfc;\n}\n.hover\\:border\\:purple-lightest:hover {\n  border-color: #f3ebff;\n}\n.hover\\:border\\:pink-darkest:hover {\n  border-color: #451225;\n}\n.hover\\:border\\:pink-darker:hover {\n  border-color: #6f213f;\n}\n.hover\\:border\\:pink-dark:hover {\n  border-color: #eb5286;\n}\n.hover\\:border\\:pink:hover {\n  border-color: #f66d9b;\n}\n.hover\\:border\\:pink-light:hover {\n  border-color: #fa7ea8;\n}\n.hover\\:border\\:pink-lighter:hover {\n  border-color: #ffbbca;\n}\n.hover\\:border\\:pink-lightest:hover {\n  border-color: #ffebef;\n}\n.disabled\\:border\\:transparent:disabled {\n  border-color: transparent;\n}\n.disabled\\:border\\:black:disabled {\n  border-color: #22292f;\n}\n.disabled\\:border\\:grey-darkest:disabled {\n  border-color: #3d4852;\n}\n.disabled\\:border\\:grey-darker:disabled {\n  border-color: #606f7b;\n}\n.disabled\\:border\\:grey-dark:disabled {\n  border-color: #8795a1;\n}\n.disabled\\:border\\:grey:disabled {\n  border-color: #b8c2cc;\n}\n.disabled\\:border\\:grey-light:disabled {\n  border-color: #dae1e7;\n}\n.disabled\\:border\\:grey-lighter:disabled {\n  border-color: #f1f5f8;\n}\n.disabled\\:border\\:grey-lightest:disabled {\n  border-color: #f8fafc;\n}\n.disabled\\:border\\:white:disabled {\n  border-color: #ffffff;\n}\n.disabled\\:border\\:red-darkest:disabled {\n  border-color: #3b0d0c;\n}\n.disabled\\:border\\:red-darker:disabled {\n  border-color: #621b18;\n}\n.disabled\\:border\\:red-dark:disabled {\n  border-color: #cc1f1a;\n}\n.disabled\\:border\\:red:disabled {\n  border-color: #f44040;\n}\n.disabled\\:border\\:red-light:disabled {\n  border-color: #f75f51;\n}\n.disabled\\:border\\:red-lighter:disabled {\n  border-color: #f9acaa;\n}\n.disabled\\:border\\:red-lightest:disabled {\n  border-color: #ffd8d4;\n}\n.disabled\\:border\\:orange-darkest:disabled {\n  border-color: #c64411;\n}\n.disabled\\:border\\:orange-darker:disabled {\n  border-color: #d86501;\n}\n.disabled\\:border\\:orange-dark:disabled {\n  border-color: #f27e19;\n}\n.disabled\\:border\\:orange:disabled {\n  border-color: #ff9334;\n}\n.disabled\\:border\\:orange-light:disabled {\n  border-color: #faad63;\n}\n.disabled\\:border\\:orange-lighter:disabled {\n  border-color: #fcd9b6;\n}\n.disabled\\:border\\:orange-lightest:disabled {\n  border-color: #fff5eb;\n}\n.disabled\\:border\\:yellow-darkest:disabled {\n  border-color: #453411;\n}\n.disabled\\:border\\:yellow-darker:disabled {\n  border-color: #684f1d;\n}\n.disabled\\:border\\:yellow-dark:disabled {\n  border-color: #f2d024;\n}\n.disabled\\:border\\:yellow:disabled {\n  border-color: #ffed4a;\n}\n.disabled\\:border\\:yellow-light:disabled {\n  border-color: #fff382;\n}\n.disabled\\:border\\:yellow-lighter:disabled {\n  border-color: #fff9c2;\n}\n.disabled\\:border\\:yellow-lightest:disabled {\n  border-color: #fcfbeb;\n}\n.disabled\\:border\\:teal-darkest:disabled {\n  border-color: #0d3331;\n}\n.disabled\\:border\\:teal-darker:disabled {\n  border-color: #006875;\n}\n.disabled\\:border\\:teal-dark:disabled {\n  border-color: #017887;\n}\n.disabled\\:border\\:teal:disabled {\n  border-color: #019bae;\n}\n.disabled\\:border\\:teal-light:disabled {\n  border-color: #3bbcc7;\n}\n.disabled\\:border\\:teal-lighter:disabled {\n  border-color: #c0f1f5;\n}\n.disabled\\:border\\:teal-lightest:disabled {\n  border-color: #e8fffe;\n}\n.disabled\\:border\\:green-darkest:disabled {\n  border-color: #0f2f21;\n}\n.disabled\\:border\\:green-darker:disabled {\n  border-color: #1a4731;\n}\n.disabled\\:border\\:green-dark:disabled {\n  border-color: #1f9d55;\n}\n.disabled\\:border\\:green:disabled {\n  border-color: #11b776;\n}\n.disabled\\:border\\:green-light:disabled {\n  border-color: #51d88a;\n}\n.disabled\\:border\\:green-lighter:disabled {\n  border-color: #a2f5bf;\n}\n.disabled\\:border\\:green-lightest:disabled {\n  border-color: #e3fcec;\n}\n.disabled\\:border\\:blue-darkest:disabled {\n  border-color: #12283a;\n}\n.disabled\\:border\\:blue-darker:disabled {\n  border-color: #1c3d5a;\n}\n.disabled\\:border\\:blue-dark:disabled {\n  border-color: #2779bd;\n}\n.disabled\\:border\\:blue:disabled {\n  border-color: #3490dc;\n}\n.disabled\\:border\\:blue-light:disabled {\n  border-color: #6cb2eb;\n}\n.disabled\\:border\\:blue-lighter:disabled {\n  border-color: #bcdefa;\n}\n.disabled\\:border\\:blue-lightest:disabled {\n  border-color: #eff8ff;\n}\n.disabled\\:border\\:indigo-darkest:disabled {\n  border-color: #191e38;\n}\n.disabled\\:border\\:indigo-darker:disabled {\n  border-color: #2f365f;\n}\n.disabled\\:border\\:indigo-dark:disabled {\n  border-color: #5661b3;\n}\n.disabled\\:border\\:indigo:disabled {\n  border-color: #6574cd;\n}\n.disabled\\:border\\:indigo-light:disabled {\n  border-color: #7886d7;\n}\n.disabled\\:border\\:indigo-lighter:disabled {\n  border-color: #b2b7ff;\n}\n.disabled\\:border\\:indigo-lightest:disabled {\n  border-color: #e6e8ff;\n}\n.disabled\\:border\\:purple-darkest:disabled {\n  border-color: #21183c;\n}\n.disabled\\:border\\:purple-darker:disabled {\n  border-color: #382b5f;\n}\n.disabled\\:border\\:purple-dark:disabled {\n  border-color: #794acf;\n}\n.disabled\\:border\\:purple:disabled {\n  border-color: #9561e2;\n}\n.disabled\\:border\\:purple-light:disabled {\n  border-color: #a779e9;\n}\n.disabled\\:border\\:purple-lighter:disabled {\n  border-color: #d6bbfc;\n}\n.disabled\\:border\\:purple-lightest:disabled {\n  border-color: #f3ebff;\n}\n.disabled\\:border\\:pink-darkest:disabled {\n  border-color: #451225;\n}\n.disabled\\:border\\:pink-darker:disabled {\n  border-color: #6f213f;\n}\n.disabled\\:border\\:pink-dark:disabled {\n  border-color: #eb5286;\n}\n.disabled\\:border\\:pink:disabled {\n  border-color: #f66d9b;\n}\n.disabled\\:border\\:pink-light:disabled {\n  border-color: #fa7ea8;\n}\n.disabled\\:border\\:pink-lighter:disabled {\n  border-color: #ffbbca;\n}\n.disabled\\:border\\:pink-lightest:disabled {\n  border-color: #ffebef;\n}\n.visited\\:border\\:transparent:visited {\n  border-color: transparent;\n}\n.visited\\:border\\:black:visited {\n  border-color: #22292f;\n}\n.visited\\:border\\:grey-darkest:visited {\n  border-color: #3d4852;\n}\n.visited\\:border\\:grey-darker:visited {\n  border-color: #606f7b;\n}\n.visited\\:border\\:grey-dark:visited {\n  border-color: #8795a1;\n}\n.visited\\:border\\:grey:visited {\n  border-color: #b8c2cc;\n}\n.visited\\:border\\:grey-light:visited {\n  border-color: #dae1e7;\n}\n.visited\\:border\\:grey-lighter:visited {\n  border-color: #f1f5f8;\n}\n.visited\\:border\\:grey-lightest:visited {\n  border-color: #f8fafc;\n}\n.visited\\:border\\:white:visited {\n  border-color: #ffffff;\n}\n.visited\\:border\\:red-darkest:visited {\n  border-color: #3b0d0c;\n}\n.visited\\:border\\:red-darker:visited {\n  border-color: #621b18;\n}\n.visited\\:border\\:red-dark:visited {\n  border-color: #cc1f1a;\n}\n.visited\\:border\\:red:visited {\n  border-color: #f44040;\n}\n.visited\\:border\\:red-light:visited {\n  border-color: #f75f51;\n}\n.visited\\:border\\:red-lighter:visited {\n  border-color: #f9acaa;\n}\n.visited\\:border\\:red-lightest:visited {\n  border-color: #ffd8d4;\n}\n.visited\\:border\\:orange-darkest:visited {\n  border-color: #c64411;\n}\n.visited\\:border\\:orange-darker:visited {\n  border-color: #d86501;\n}\n.visited\\:border\\:orange-dark:visited {\n  border-color: #f27e19;\n}\n.visited\\:border\\:orange:visited {\n  border-color: #ff9334;\n}\n.visited\\:border\\:orange-light:visited {\n  border-color: #faad63;\n}\n.visited\\:border\\:orange-lighter:visited {\n  border-color: #fcd9b6;\n}\n.visited\\:border\\:orange-lightest:visited {\n  border-color: #fff5eb;\n}\n.visited\\:border\\:yellow-darkest:visited {\n  border-color: #453411;\n}\n.visited\\:border\\:yellow-darker:visited {\n  border-color: #684f1d;\n}\n.visited\\:border\\:yellow-dark:visited {\n  border-color: #f2d024;\n}\n.visited\\:border\\:yellow:visited {\n  border-color: #ffed4a;\n}\n.visited\\:border\\:yellow-light:visited {\n  border-color: #fff382;\n}\n.visited\\:border\\:yellow-lighter:visited {\n  border-color: #fff9c2;\n}\n.visited\\:border\\:yellow-lightest:visited {\n  border-color: #fcfbeb;\n}\n.visited\\:border\\:teal-darkest:visited {\n  border-color: #0d3331;\n}\n.visited\\:border\\:teal-darker:visited {\n  border-color: #006875;\n}\n.visited\\:border\\:teal-dark:visited {\n  border-color: #017887;\n}\n.visited\\:border\\:teal:visited {\n  border-color: #019bae;\n}\n.visited\\:border\\:teal-light:visited {\n  border-color: #3bbcc7;\n}\n.visited\\:border\\:teal-lighter:visited {\n  border-color: #c0f1f5;\n}\n.visited\\:border\\:teal-lightest:visited {\n  border-color: #e8fffe;\n}\n.visited\\:border\\:green-darkest:visited {\n  border-color: #0f2f21;\n}\n.visited\\:border\\:green-darker:visited {\n  border-color: #1a4731;\n}\n.visited\\:border\\:green-dark:visited {\n  border-color: #1f9d55;\n}\n.visited\\:border\\:green:visited {\n  border-color: #11b776;\n}\n.visited\\:border\\:green-light:visited {\n  border-color: #51d88a;\n}\n.visited\\:border\\:green-lighter:visited {\n  border-color: #a2f5bf;\n}\n.visited\\:border\\:green-lightest:visited {\n  border-color: #e3fcec;\n}\n.visited\\:border\\:blue-darkest:visited {\n  border-color: #12283a;\n}\n.visited\\:border\\:blue-darker:visited {\n  border-color: #1c3d5a;\n}\n.visited\\:border\\:blue-dark:visited {\n  border-color: #2779bd;\n}\n.visited\\:border\\:blue:visited {\n  border-color: #3490dc;\n}\n.visited\\:border\\:blue-light:visited {\n  border-color: #6cb2eb;\n}\n.visited\\:border\\:blue-lighter:visited {\n  border-color: #bcdefa;\n}\n.visited\\:border\\:blue-lightest:visited {\n  border-color: #eff8ff;\n}\n.visited\\:border\\:indigo-darkest:visited {\n  border-color: #191e38;\n}\n.visited\\:border\\:indigo-darker:visited {\n  border-color: #2f365f;\n}\n.visited\\:border\\:indigo-dark:visited {\n  border-color: #5661b3;\n}\n.visited\\:border\\:indigo:visited {\n  border-color: #6574cd;\n}\n.visited\\:border\\:indigo-light:visited {\n  border-color: #7886d7;\n}\n.visited\\:border\\:indigo-lighter:visited {\n  border-color: #b2b7ff;\n}\n.visited\\:border\\:indigo-lightest:visited {\n  border-color: #e6e8ff;\n}\n.visited\\:border\\:purple-darkest:visited {\n  border-color: #21183c;\n}\n.visited\\:border\\:purple-darker:visited {\n  border-color: #382b5f;\n}\n.visited\\:border\\:purple-dark:visited {\n  border-color: #794acf;\n}\n.visited\\:border\\:purple:visited {\n  border-color: #9561e2;\n}\n.visited\\:border\\:purple-light:visited {\n  border-color: #a779e9;\n}\n.visited\\:border\\:purple-lighter:visited {\n  border-color: #d6bbfc;\n}\n.visited\\:border\\:purple-lightest:visited {\n  border-color: #f3ebff;\n}\n.visited\\:border\\:pink-darkest:visited {\n  border-color: #451225;\n}\n.visited\\:border\\:pink-darker:visited {\n  border-color: #6f213f;\n}\n.visited\\:border\\:pink-dark:visited {\n  border-color: #eb5286;\n}\n.visited\\:border\\:pink:visited {\n  border-color: #f66d9b;\n}\n.visited\\:border\\:pink-light:visited {\n  border-color: #fa7ea8;\n}\n.visited\\:border\\:pink-lighter:visited {\n  border-color: #ffbbca;\n}\n.visited\\:border\\:pink-lightest:visited {\n  border-color: #ffebef;\n}\n.focus\\:border\\:transparent:focus {\n  border-color: transparent;\n}\n.focus\\:border\\:black:focus {\n  border-color: #22292f;\n}\n.focus\\:border\\:grey-darkest:focus {\n  border-color: #3d4852;\n}\n.focus\\:border\\:grey-darker:focus {\n  border-color: #606f7b;\n}\n.focus\\:border\\:grey-dark:focus {\n  border-color: #8795a1;\n}\n.focus\\:border\\:grey:focus {\n  border-color: #b8c2cc;\n}\n.focus\\:border\\:grey-light:focus {\n  border-color: #dae1e7;\n}\n.focus\\:border\\:grey-lighter:focus {\n  border-color: #f1f5f8;\n}\n.focus\\:border\\:grey-lightest:focus {\n  border-color: #f8fafc;\n}\n.focus\\:border\\:white:focus {\n  border-color: #ffffff;\n}\n.focus\\:border\\:red-darkest:focus {\n  border-color: #3b0d0c;\n}\n.focus\\:border\\:red-darker:focus {\n  border-color: #621b18;\n}\n.focus\\:border\\:red-dark:focus {\n  border-color: #cc1f1a;\n}\n.focus\\:border\\:red:focus {\n  border-color: #f44040;\n}\n.focus\\:border\\:red-light:focus {\n  border-color: #f75f51;\n}\n.focus\\:border\\:red-lighter:focus {\n  border-color: #f9acaa;\n}\n.focus\\:border\\:red-lightest:focus {\n  border-color: #ffd8d4;\n}\n.focus\\:border\\:orange-darkest:focus {\n  border-color: #c64411;\n}\n.focus\\:border\\:orange-darker:focus {\n  border-color: #d86501;\n}\n.focus\\:border\\:orange-dark:focus {\n  border-color: #f27e19;\n}\n.focus\\:border\\:orange:focus {\n  border-color: #ff9334;\n}\n.focus\\:border\\:orange-light:focus {\n  border-color: #faad63;\n}\n.focus\\:border\\:orange-lighter:focus {\n  border-color: #fcd9b6;\n}\n.focus\\:border\\:orange-lightest:focus {\n  border-color: #fff5eb;\n}\n.focus\\:border\\:yellow-darkest:focus {\n  border-color: #453411;\n}\n.focus\\:border\\:yellow-darker:focus {\n  border-color: #684f1d;\n}\n.focus\\:border\\:yellow-dark:focus {\n  border-color: #f2d024;\n}\n.focus\\:border\\:yellow:focus {\n  border-color: #ffed4a;\n}\n.focus\\:border\\:yellow-light:focus {\n  border-color: #fff382;\n}\n.focus\\:border\\:yellow-lighter:focus {\n  border-color: #fff9c2;\n}\n.focus\\:border\\:yellow-lightest:focus {\n  border-color: #fcfbeb;\n}\n.focus\\:border\\:teal-darkest:focus {\n  border-color: #0d3331;\n}\n.focus\\:border\\:teal-darker:focus {\n  border-color: #006875;\n}\n.focus\\:border\\:teal-dark:focus {\n  border-color: #017887;\n}\n.focus\\:border\\:teal:focus {\n  border-color: #019bae;\n}\n.focus\\:border\\:teal-light:focus {\n  border-color: #3bbcc7;\n}\n.focus\\:border\\:teal-lighter:focus {\n  border-color: #c0f1f5;\n}\n.focus\\:border\\:teal-lightest:focus {\n  border-color: #e8fffe;\n}\n.focus\\:border\\:green-darkest:focus {\n  border-color: #0f2f21;\n}\n.focus\\:border\\:green-darker:focus {\n  border-color: #1a4731;\n}\n.focus\\:border\\:green-dark:focus {\n  border-color: #1f9d55;\n}\n.focus\\:border\\:green:focus {\n  border-color: #11b776;\n}\n.focus\\:border\\:green-light:focus {\n  border-color: #51d88a;\n}\n.focus\\:border\\:green-lighter:focus {\n  border-color: #a2f5bf;\n}\n.focus\\:border\\:green-lightest:focus {\n  border-color: #e3fcec;\n}\n.focus\\:border\\:blue-darkest:focus {\n  border-color: #12283a;\n}\n.focus\\:border\\:blue-darker:focus {\n  border-color: #1c3d5a;\n}\n.focus\\:border\\:blue-dark:focus {\n  border-color: #2779bd;\n}\n.focus\\:border\\:blue:focus {\n  border-color: #3490dc;\n}\n.focus\\:border\\:blue-light:focus {\n  border-color: #6cb2eb;\n}\n.focus\\:border\\:blue-lighter:focus {\n  border-color: #bcdefa;\n}\n.focus\\:border\\:blue-lightest:focus {\n  border-color: #eff8ff;\n}\n.focus\\:border\\:indigo-darkest:focus {\n  border-color: #191e38;\n}\n.focus\\:border\\:indigo-darker:focus {\n  border-color: #2f365f;\n}\n.focus\\:border\\:indigo-dark:focus {\n  border-color: #5661b3;\n}\n.focus\\:border\\:indigo:focus {\n  border-color: #6574cd;\n}\n.focus\\:border\\:indigo-light:focus {\n  border-color: #7886d7;\n}\n.focus\\:border\\:indigo-lighter:focus {\n  border-color: #b2b7ff;\n}\n.focus\\:border\\:indigo-lightest:focus {\n  border-color: #e6e8ff;\n}\n.focus\\:border\\:purple-darkest:focus {\n  border-color: #21183c;\n}\n.focus\\:border\\:purple-darker:focus {\n  border-color: #382b5f;\n}\n.focus\\:border\\:purple-dark:focus {\n  border-color: #794acf;\n}\n.focus\\:border\\:purple:focus {\n  border-color: #9561e2;\n}\n.focus\\:border\\:purple-light:focus {\n  border-color: #a779e9;\n}\n.focus\\:border\\:purple-lighter:focus {\n  border-color: #d6bbfc;\n}\n.focus\\:border\\:purple-lightest:focus {\n  border-color: #f3ebff;\n}\n.focus\\:border\\:pink-darkest:focus {\n  border-color: #451225;\n}\n.focus\\:border\\:pink-darker:focus {\n  border-color: #6f213f;\n}\n.focus\\:border\\:pink-dark:focus {\n  border-color: #eb5286;\n}\n.focus\\:border\\:pink:focus {\n  border-color: #f66d9b;\n}\n.focus\\:border\\:pink-light:focus {\n  border-color: #fa7ea8;\n}\n.focus\\:border\\:pink-lighter:focus {\n  border-color: #ffbbca;\n}\n.focus\\:border\\:pink-lightest:focus {\n  border-color: #ffebef;\n}\n.first\\:border\\:transparent:first-child {\n  border-color: transparent;\n}\n.first\\:border\\:black:first-child {\n  border-color: #22292f;\n}\n.first\\:border\\:grey-darkest:first-child {\n  border-color: #3d4852;\n}\n.first\\:border\\:grey-darker:first-child {\n  border-color: #606f7b;\n}\n.first\\:border\\:grey-dark:first-child {\n  border-color: #8795a1;\n}\n.first\\:border\\:grey:first-child {\n  border-color: #b8c2cc;\n}\n.first\\:border\\:grey-light:first-child {\n  border-color: #dae1e7;\n}\n.first\\:border\\:grey-lighter:first-child {\n  border-color: #f1f5f8;\n}\n.first\\:border\\:grey-lightest:first-child {\n  border-color: #f8fafc;\n}\n.first\\:border\\:white:first-child {\n  border-color: #ffffff;\n}\n.first\\:border\\:red-darkest:first-child {\n  border-color: #3b0d0c;\n}\n.first\\:border\\:red-darker:first-child {\n  border-color: #621b18;\n}\n.first\\:border\\:red-dark:first-child {\n  border-color: #cc1f1a;\n}\n.first\\:border\\:red:first-child {\n  border-color: #f44040;\n}\n.first\\:border\\:red-light:first-child {\n  border-color: #f75f51;\n}\n.first\\:border\\:red-lighter:first-child {\n  border-color: #f9acaa;\n}\n.first\\:border\\:red-lightest:first-child {\n  border-color: #ffd8d4;\n}\n.first\\:border\\:orange-darkest:first-child {\n  border-color: #c64411;\n}\n.first\\:border\\:orange-darker:first-child {\n  border-color: #d86501;\n}\n.first\\:border\\:orange-dark:first-child {\n  border-color: #f27e19;\n}\n.first\\:border\\:orange:first-child {\n  border-color: #ff9334;\n}\n.first\\:border\\:orange-light:first-child {\n  border-color: #faad63;\n}\n.first\\:border\\:orange-lighter:first-child {\n  border-color: #fcd9b6;\n}\n.first\\:border\\:orange-lightest:first-child {\n  border-color: #fff5eb;\n}\n.first\\:border\\:yellow-darkest:first-child {\n  border-color: #453411;\n}\n.first\\:border\\:yellow-darker:first-child {\n  border-color: #684f1d;\n}\n.first\\:border\\:yellow-dark:first-child {\n  border-color: #f2d024;\n}\n.first\\:border\\:yellow:first-child {\n  border-color: #ffed4a;\n}\n.first\\:border\\:yellow-light:first-child {\n  border-color: #fff382;\n}\n.first\\:border\\:yellow-lighter:first-child {\n  border-color: #fff9c2;\n}\n.first\\:border\\:yellow-lightest:first-child {\n  border-color: #fcfbeb;\n}\n.first\\:border\\:teal-darkest:first-child {\n  border-color: #0d3331;\n}\n.first\\:border\\:teal-darker:first-child {\n  border-color: #006875;\n}\n.first\\:border\\:teal-dark:first-child {\n  border-color: #017887;\n}\n.first\\:border\\:teal:first-child {\n  border-color: #019bae;\n}\n.first\\:border\\:teal-light:first-child {\n  border-color: #3bbcc7;\n}\n.first\\:border\\:teal-lighter:first-child {\n  border-color: #c0f1f5;\n}\n.first\\:border\\:teal-lightest:first-child {\n  border-color: #e8fffe;\n}\n.first\\:border\\:green-darkest:first-child {\n  border-color: #0f2f21;\n}\n.first\\:border\\:green-darker:first-child {\n  border-color: #1a4731;\n}\n.first\\:border\\:green-dark:first-child {\n  border-color: #1f9d55;\n}\n.first\\:border\\:green:first-child {\n  border-color: #11b776;\n}\n.first\\:border\\:green-light:first-child {\n  border-color: #51d88a;\n}\n.first\\:border\\:green-lighter:first-child {\n  border-color: #a2f5bf;\n}\n.first\\:border\\:green-lightest:first-child {\n  border-color: #e3fcec;\n}\n.first\\:border\\:blue-darkest:first-child {\n  border-color: #12283a;\n}\n.first\\:border\\:blue-darker:first-child {\n  border-color: #1c3d5a;\n}\n.first\\:border\\:blue-dark:first-child {\n  border-color: #2779bd;\n}\n.first\\:border\\:blue:first-child {\n  border-color: #3490dc;\n}\n.first\\:border\\:blue-light:first-child {\n  border-color: #6cb2eb;\n}\n.first\\:border\\:blue-lighter:first-child {\n  border-color: #bcdefa;\n}\n.first\\:border\\:blue-lightest:first-child {\n  border-color: #eff8ff;\n}\n.first\\:border\\:indigo-darkest:first-child {\n  border-color: #191e38;\n}\n.first\\:border\\:indigo-darker:first-child {\n  border-color: #2f365f;\n}\n.first\\:border\\:indigo-dark:first-child {\n  border-color: #5661b3;\n}\n.first\\:border\\:indigo:first-child {\n  border-color: #6574cd;\n}\n.first\\:border\\:indigo-light:first-child {\n  border-color: #7886d7;\n}\n.first\\:border\\:indigo-lighter:first-child {\n  border-color: #b2b7ff;\n}\n.first\\:border\\:indigo-lightest:first-child {\n  border-color: #e6e8ff;\n}\n.first\\:border\\:purple-darkest:first-child {\n  border-color: #21183c;\n}\n.first\\:border\\:purple-darker:first-child {\n  border-color: #382b5f;\n}\n.first\\:border\\:purple-dark:first-child {\n  border-color: #794acf;\n}\n.first\\:border\\:purple:first-child {\n  border-color: #9561e2;\n}\n.first\\:border\\:purple-light:first-child {\n  border-color: #a779e9;\n}\n.first\\:border\\:purple-lighter:first-child {\n  border-color: #d6bbfc;\n}\n.first\\:border\\:purple-lightest:first-child {\n  border-color: #f3ebff;\n}\n.first\\:border\\:pink-darkest:first-child {\n  border-color: #451225;\n}\n.first\\:border\\:pink-darker:first-child {\n  border-color: #6f213f;\n}\n.first\\:border\\:pink-dark:first-child {\n  border-color: #eb5286;\n}\n.first\\:border\\:pink:first-child {\n  border-color: #f66d9b;\n}\n.first\\:border\\:pink-light:first-child {\n  border-color: #fa7ea8;\n}\n.first\\:border\\:pink-lighter:first-child {\n  border-color: #ffbbca;\n}\n.first\\:border\\:pink-lightest:first-child {\n  border-color: #ffebef;\n}\n.last\\:border\\:transparent:last-child {\n  border-color: transparent;\n}\n.last\\:border\\:black:last-child {\n  border-color: #22292f;\n}\n.last\\:border\\:grey-darkest:last-child {\n  border-color: #3d4852;\n}\n.last\\:border\\:grey-darker:last-child {\n  border-color: #606f7b;\n}\n.last\\:border\\:grey-dark:last-child {\n  border-color: #8795a1;\n}\n.last\\:border\\:grey:last-child {\n  border-color: #b8c2cc;\n}\n.last\\:border\\:grey-light:last-child {\n  border-color: #dae1e7;\n}\n.last\\:border\\:grey-lighter:last-child {\n  border-color: #f1f5f8;\n}\n.last\\:border\\:grey-lightest:last-child {\n  border-color: #f8fafc;\n}\n.last\\:border\\:white:last-child {\n  border-color: #ffffff;\n}\n.last\\:border\\:red-darkest:last-child {\n  border-color: #3b0d0c;\n}\n.last\\:border\\:red-darker:last-child {\n  border-color: #621b18;\n}\n.last\\:border\\:red-dark:last-child {\n  border-color: #cc1f1a;\n}\n.last\\:border\\:red:last-child {\n  border-color: #f44040;\n}\n.last\\:border\\:red-light:last-child {\n  border-color: #f75f51;\n}\n.last\\:border\\:red-lighter:last-child {\n  border-color: #f9acaa;\n}\n.last\\:border\\:red-lightest:last-child {\n  border-color: #ffd8d4;\n}\n.last\\:border\\:orange-darkest:last-child {\n  border-color: #c64411;\n}\n.last\\:border\\:orange-darker:last-child {\n  border-color: #d86501;\n}\n.last\\:border\\:orange-dark:last-child {\n  border-color: #f27e19;\n}\n.last\\:border\\:orange:last-child {\n  border-color: #ff9334;\n}\n.last\\:border\\:orange-light:last-child {\n  border-color: #faad63;\n}\n.last\\:border\\:orange-lighter:last-child {\n  border-color: #fcd9b6;\n}\n.last\\:border\\:orange-lightest:last-child {\n  border-color: #fff5eb;\n}\n.last\\:border\\:yellow-darkest:last-child {\n  border-color: #453411;\n}\n.last\\:border\\:yellow-darker:last-child {\n  border-color: #684f1d;\n}\n.last\\:border\\:yellow-dark:last-child {\n  border-color: #f2d024;\n}\n.last\\:border\\:yellow:last-child {\n  border-color: #ffed4a;\n}\n.last\\:border\\:yellow-light:last-child {\n  border-color: #fff382;\n}\n.last\\:border\\:yellow-lighter:last-child {\n  border-color: #fff9c2;\n}\n.last\\:border\\:yellow-lightest:last-child {\n  border-color: #fcfbeb;\n}\n.last\\:border\\:teal-darkest:last-child {\n  border-color: #0d3331;\n}\n.last\\:border\\:teal-darker:last-child {\n  border-color: #006875;\n}\n.last\\:border\\:teal-dark:last-child {\n  border-color: #017887;\n}\n.last\\:border\\:teal:last-child {\n  border-color: #019bae;\n}\n.last\\:border\\:teal-light:last-child {\n  border-color: #3bbcc7;\n}\n.last\\:border\\:teal-lighter:last-child {\n  border-color: #c0f1f5;\n}\n.last\\:border\\:teal-lightest:last-child {\n  border-color: #e8fffe;\n}\n.last\\:border\\:green-darkest:last-child {\n  border-color: #0f2f21;\n}\n.last\\:border\\:green-darker:last-child {\n  border-color: #1a4731;\n}\n.last\\:border\\:green-dark:last-child {\n  border-color: #1f9d55;\n}\n.last\\:border\\:green:last-child {\n  border-color: #11b776;\n}\n.last\\:border\\:green-light:last-child {\n  border-color: #51d88a;\n}\n.last\\:border\\:green-lighter:last-child {\n  border-color: #a2f5bf;\n}\n.last\\:border\\:green-lightest:last-child {\n  border-color: #e3fcec;\n}\n.last\\:border\\:blue-darkest:last-child {\n  border-color: #12283a;\n}\n.last\\:border\\:blue-darker:last-child {\n  border-color: #1c3d5a;\n}\n.last\\:border\\:blue-dark:last-child {\n  border-color: #2779bd;\n}\n.last\\:border\\:blue:last-child {\n  border-color: #3490dc;\n}\n.last\\:border\\:blue-light:last-child {\n  border-color: #6cb2eb;\n}\n.last\\:border\\:blue-lighter:last-child {\n  border-color: #bcdefa;\n}\n.last\\:border\\:blue-lightest:last-child {\n  border-color: #eff8ff;\n}\n.last\\:border\\:indigo-darkest:last-child {\n  border-color: #191e38;\n}\n.last\\:border\\:indigo-darker:last-child {\n  border-color: #2f365f;\n}\n.last\\:border\\:indigo-dark:last-child {\n  border-color: #5661b3;\n}\n.last\\:border\\:indigo:last-child {\n  border-color: #6574cd;\n}\n.last\\:border\\:indigo-light:last-child {\n  border-color: #7886d7;\n}\n.last\\:border\\:indigo-lighter:last-child {\n  border-color: #b2b7ff;\n}\n.last\\:border\\:indigo-lightest:last-child {\n  border-color: #e6e8ff;\n}\n.last\\:border\\:purple-darkest:last-child {\n  border-color: #21183c;\n}\n.last\\:border\\:purple-darker:last-child {\n  border-color: #382b5f;\n}\n.last\\:border\\:purple-dark:last-child {\n  border-color: #794acf;\n}\n.last\\:border\\:purple:last-child {\n  border-color: #9561e2;\n}\n.last\\:border\\:purple-light:last-child {\n  border-color: #a779e9;\n}\n.last\\:border\\:purple-lighter:last-child {\n  border-color: #d6bbfc;\n}\n.last\\:border\\:purple-lightest:last-child {\n  border-color: #f3ebff;\n}\n.last\\:border\\:pink-darkest:last-child {\n  border-color: #451225;\n}\n.last\\:border\\:pink-darker:last-child {\n  border-color: #6f213f;\n}\n.last\\:border\\:pink-dark:last-child {\n  border-color: #eb5286;\n}\n.last\\:border\\:pink:last-child {\n  border-color: #f66d9b;\n}\n.last\\:border\\:pink-light:last-child {\n  border-color: #fa7ea8;\n}\n.last\\:border\\:pink-lighter:last-child {\n  border-color: #ffbbca;\n}\n.last\\:border\\:pink-lightest:last-child {\n  border-color: #ffebef;\n}\n.border\\:solid {\n  border-style: solid;\n}\n.border\\:dashed {\n  border-style: dashed;\n}\n.border\\:dotted {\n  border-style: dotted;\n}\n.border\\:none {\n  border-style: none;\n}\n.border {\n  border-width: 1px;\n}\n.border\\:t {\n  border-top-width: 1px;\n}\n.border\\:r {\n  border-right-width: 1px;\n}\n.border\\:b, table tbody tr {\n  border-bottom-width: 1px;\n}\n.border\\:l {\n  border-left-width: 1px;\n}\n.border\\:x {\n  border-left-width: 1px;\n  border-right-width: 1px;\n}\n.border\\:y {\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n}\n.border\\:0 {\n  border-width: 0;\n}\n.border\\:t\\:0 {\n  border-top-width: 0;\n}\n.border\\:r\\:0 {\n  border-right-width: 0;\n}\n.border\\:b\\:0 {\n  border-bottom-width: 0;\n}\n.border\\:l\\:0 {\n  border-left-width: 0;\n}\n.border\\:x\\:0 {\n  border-right-width: 0;\n  border-left-width: 0;\n}\n.border\\:y\\:0 {\n  border-top-width: 0;\n  border-bottom-width: 0;\n}\n.border\\:1\\/8 {\n  border-width: 0.125rem;\n}\n.border\\:t\\:1\\/8 {\n  border-top-width: 0.125rem;\n}\n.border\\:r\\:1\\/8 {\n  border-right-width: 0.125rem;\n}\n.border\\:b\\:1\\/8, table thead {\n  border-bottom-width: 0.125rem;\n}\n.border\\:l\\:1\\/8 {\n  border-left-width: 0.125rem;\n}\n.border\\:x\\:1\\/8 {\n  border-right-width: 0.125rem;\n  border-left-width: 0.125rem;\n}\n.border\\:y\\:1\\/8 {\n  border-top-width: 0.125rem;\n  border-bottom-width: 0.125rem;\n}\n.border\\:1\\/4 {\n  border-width: 0.25rem;\n}\n.border\\:t\\:1\\/4 {\n  border-top-width: 0.25rem;\n}\n.border\\:r\\:1\\/4 {\n  border-right-width: 0.25rem;\n}\n.border\\:b\\:1\\/4 {\n  border-bottom-width: 0.25rem;\n}\n.border\\:l\\:1\\/4 {\n  border-left-width: 0.25rem;\n}\n.border\\:x\\:1\\/4 {\n  border-right-width: 0.25rem;\n  border-left-width: 0.25rem;\n}\n.border\\:y\\:1\\/4 {\n  border-top-width: 0.25rem;\n  border-bottom-width: 0.25rem;\n}\n.border\\:1\\/2 {\n  border-width: 0.5rem;\n}\n.border\\:t\\:1\\/2 {\n  border-top-width: 0.5rem;\n}\n.border\\:r\\:1\\/2 {\n  border-right-width: 0.5rem;\n}\n.border\\:b\\:1\\/2 {\n  border-bottom-width: 0.5rem;\n}\n.border\\:l\\:1\\/2 {\n  border-left-width: 0.5rem;\n}\n.border\\:x\\:1\\/2 {\n  border-right-width: 0.5rem;\n  border-left-width: 0.5rem;\n}\n.border\\:y\\:1\\/2 {\n  border-top-width: 0.5rem;\n  border-bottom-width: 0.5rem;\n}\n.border\\:3\\/4 {\n  border-width: 0.75rem;\n}\n.border\\:t\\:3\\/4 {\n  border-top-width: 0.75rem;\n}\n.border\\:r\\:3\\/4 {\n  border-right-width: 0.75rem;\n}\n.border\\:b\\:3\\/4 {\n  border-bottom-width: 0.75rem;\n}\n.border\\:l\\:3\\/4 {\n  border-left-width: 0.75rem;\n}\n.border\\:x\\:3\\/4 {\n  border-right-width: 0.75rem;\n  border-left-width: 0.75rem;\n}\n.border\\:y\\:3\\/4 {\n  border-top-width: 0.75rem;\n  border-bottom-width: 0.75rem;\n}\n.border\\:1 {\n  border-width: 1rem;\n}\n.border\\:t\\:1 {\n  border-top-width: 1rem;\n}\n.border\\:r\\:1 {\n  border-right-width: 1rem;\n}\n.border\\:b\\:1 {\n  border-bottom-width: 1rem;\n}\n.border\\:l\\:1 {\n  border-left-width: 1rem;\n}\n.border\\:x\\:1 {\n  border-right-width: 1rem;\n  border-left-width: 1rem;\n}\n.border\\:y\\:1 {\n  border-top-width: 1rem;\n  border-bottom-width: 1rem;\n}\n.flex\\:row {\n  flex-direction: row;\n}\n.flex\\:row-reverse {\n  flex-direction: row-reverse;\n}\n.flex\\:col {\n  flex-direction: column;\n}\n.flex\\:col-reverse {\n  flex-direction: column-reverse;\n}\n.flex\\:no-wrap {\n  flex-wrap: nowrap;\n}\n.flex\\:wrap {\n  flex-wrap: wrap;\n}\n.flex\\:wrap-reverse {\n  flex-wrap: wrap-reverse;\n}\n.items\\:start {\n  align-items: flex-start;\n}\n.items\\:center {\n  align-items: center;\n}\n.items\\:end {\n  align-items: flex-end;\n}\n.items\\:stretch {\n  align-items: stretch;\n}\n.items\\:baseline {\n  align-items: baseline;\n}\n.content\\:start {\n  align-content: flex-start;\n}\n.content\\:center {\n  align-content: center;\n}\n.content\\:end {\n  align-content: flex-end;\n}\n.content\\:stretch {\n  align-content: stretch;\n}\n.content\\:between {\n  align-content: space-between;\n}\n.content\\:around {\n  align-content: space-around;\n}\n.self\\:auto {\n  align-self: auto;\n}\n.self\\:start {\n  align-self: flex-start;\n}\n.self\\:center {\n  align-self: center;\n}\n.self\\:end {\n  align-self: flex-end;\n}\n.self\\:stretch {\n  align-self: stretch;\n}\n.justify\\:start {\n  justify-content: flex-start;\n}\n.justify\\:center {\n  justify-content: center;\n}\n.justify\\:end {\n  justify-content: flex-end;\n}\n.justify\\:between {\n  justify-content: space-between;\n}\n.justify\\:around {\n  justify-content: space-around;\n}\n.flex\\:auto {\n  flex: 1 1 auto;\n}\n.flex\\:initial {\n  flex: initial;\n}\n.flex\\:1 {\n  flex: 1 1 0%;\n}\n.flex\\:2 {\n  flex: 2 2 0%;\n}\n.flex\\:3 {\n  flex: 3 3 0%;\n}\n.flex\\:none {\n  flex: none;\n}\n.order\\:first {\n  order: -1;\n}\n.order\\:last {\n  order: 999;\n}\n.order\\:none {\n  order: 0;\n}\n.order\\:1 {\n  order: 1;\n}\n.order\\:2 {\n  order: 2;\n}\n.order\\:3 {\n  order: 3;\n}\n.order\\:4 {\n  order: 4;\n}\n.order\\:5 {\n  order: 5;\n}\n.flex\\:grow {\n  flex-grow: 1;\n}\n.flex\\:grow-none {\n  flex-grow: 0;\n}\n.flex\\:shrink {\n  flex-shrink: 1;\n}\n.flex\\:shrink-none {\n  flex-shrink: 0;\n}\n.flex\\:1\\/12 {\n  flex-basis: calc(1 * 100% / 12);\n}\n.flex\\:2\\/12 {\n  flex-basis: calc(2 * 100% / 12);\n}\n.flex\\:3\\/12 {\n  flex-basis: calc(3 * 100% / 12);\n}\n.flex\\:4\\/12 {\n  flex-basis: calc(4 * 100% / 12);\n}\n.flex\\:5\\/12 {\n  flex-basis: calc(5 * 100% / 12);\n}\n.flex\\:6\\/12 {\n  flex-basis: calc(6 * 100% / 12);\n}\n.flex\\:7\\/12 {\n  flex-basis: calc(7 * 100% / 12);\n}\n.flex\\:8\\/12 {\n  flex-basis: calc(8 * 100% / 12);\n}\n.flex\\:9\\/12 {\n  flex-basis: calc(9 * 100% / 12);\n}\n.flex\\:10\\/12 {\n  flex-basis: calc(10 * 100% / 12);\n}\n.flex\\:11\\/12 {\n  flex-basis: calc(11 * 100% / 12);\n}\n@media (min-width: 40rem) {\n.sm\\:flex\\:1\\/12 {\n    flex-basis: calc(1 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:flex\\:2\\/12 {\n    flex-basis: calc(2 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:flex\\:3\\/12 {\n    flex-basis: calc(3 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:flex\\:4\\/12 {\n    flex-basis: calc(4 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:flex\\:5\\/12 {\n    flex-basis: calc(5 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:flex\\:6\\/12 {\n    flex-basis: calc(6 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:flex\\:7\\/12 {\n    flex-basis: calc(7 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:flex\\:8\\/12 {\n    flex-basis: calc(8 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:flex\\:9\\/12 {\n    flex-basis: calc(9 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:flex\\:10\\/12 {\n    flex-basis: calc(10 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:flex\\:11\\/12 {\n    flex-basis: calc(11 * 100% / 12);\n}\n}\n@media (min-width: 40rem) {\n.sm\\:items\\:start {\n    align-items: flex-start;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:items\\:center {\n    align-items: center;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:items\\:end {\n    align-items: flex-end;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:items\\:stretch {\n    align-items: stretch;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:items\\:baseline {\n    align-items: baseline;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:content\\:start {\n    align-content: flex-start;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:content\\:center {\n    align-content: center;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:content\\:end {\n    align-content: flex-end;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:content\\:stretch {\n    align-content: stretch;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:content\\:between {\n    align-content: space-between;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:content\\:around {\n    align-content: space-around;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:justify\\:start {\n    justify-content: flex-start;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:justify\\:center {\n    justify-content: center;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:justify\\:end {\n    justify-content: flex-end;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:justify\\:between {\n    justify-content: space-between;\n}\n}\n@media (min-width: 40rem) {\n.sm\\:justify\\:around {\n    justify-content: space-around;\n}\n}\n@media (min-width: 50rem) {\n.md\\:flex\\:1\\/12 {\n    flex-basis: calc(1 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:flex\\:2\\/12 {\n    flex-basis: calc(2 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:flex\\:3\\/12 {\n    flex-basis: calc(3 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:flex\\:4\\/12 {\n    flex-basis: calc(4 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:flex\\:5\\/12 {\n    flex-basis: calc(5 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:flex\\:6\\/12 {\n    flex-basis: calc(6 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:flex\\:7\\/12 {\n    flex-basis: calc(7 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:flex\\:8\\/12 {\n    flex-basis: calc(8 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:flex\\:9\\/12 {\n    flex-basis: calc(9 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:flex\\:10\\/12 {\n    flex-basis: calc(10 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:flex\\:11\\/12 {\n    flex-basis: calc(11 * 100% / 12);\n}\n}\n@media (min-width: 50rem) {\n.md\\:items\\:start {\n    align-items: flex-start;\n}\n}\n@media (min-width: 50rem) {\n.md\\:items\\:center {\n    align-items: center;\n}\n}\n@media (min-width: 50rem) {\n.md\\:items\\:end {\n    align-items: flex-end;\n}\n}\n@media (min-width: 50rem) {\n.md\\:items\\:stretch {\n    align-items: stretch;\n}\n}\n@media (min-width: 50rem) {\n.md\\:items\\:baseline {\n    align-items: baseline;\n}\n}\n@media (min-width: 50rem) {\n.md\\:content\\:start {\n    align-content: flex-start;\n}\n}\n@media (min-width: 50rem) {\n.md\\:content\\:center {\n    align-content: center;\n}\n}\n@media (min-width: 50rem) {\n.md\\:content\\:end {\n    align-content: flex-end;\n}\n}\n@media (min-width: 50rem) {\n.md\\:content\\:stretch {\n    align-content: stretch;\n}\n}\n@media (min-width: 50rem) {\n.md\\:content\\:between {\n    align-content: space-between;\n}\n}\n@media (min-width: 50rem) {\n.md\\:content\\:around {\n    align-content: space-around;\n}\n}\n@media (min-width: 50rem) {\n.md\\:justify\\:start {\n    justify-content: flex-start;\n}\n}\n@media (min-width: 50rem) {\n.md\\:justify\\:center {\n    justify-content: center;\n}\n}\n@media (min-width: 50rem) {\n.md\\:justify\\:end {\n    justify-content: flex-end;\n}\n}\n@media (min-width: 50rem) {\n.md\\:justify\\:between {\n    justify-content: space-between;\n}\n}\n@media (min-width: 50rem) {\n.md\\:justify\\:around {\n    justify-content: space-around;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:flex\\:1\\/12 {\n    flex-basis: calc(1 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:flex\\:2\\/12 {\n    flex-basis: calc(2 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:flex\\:3\\/12 {\n    flex-basis: calc(3 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:flex\\:4\\/12 {\n    flex-basis: calc(4 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:flex\\:5\\/12 {\n    flex-basis: calc(5 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:flex\\:6\\/12 {\n    flex-basis: calc(6 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:flex\\:7\\/12 {\n    flex-basis: calc(7 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:flex\\:8\\/12 {\n    flex-basis: calc(8 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:flex\\:9\\/12 {\n    flex-basis: calc(9 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:flex\\:10\\/12 {\n    flex-basis: calc(10 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:flex\\:11\\/12 {\n    flex-basis: calc(11 * 100% / 12);\n}\n}\n@media (min-width: 80rem) {\n.lg\\:items\\:start {\n    align-items: flex-start;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:items\\:center {\n    align-items: center;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:items\\:end {\n    align-items: flex-end;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:items\\:stretch {\n    align-items: stretch;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:items\\:baseline {\n    align-items: baseline;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:content\\:start {\n    align-content: flex-start;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:content\\:center {\n    align-content: center;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:content\\:end {\n    align-content: flex-end;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:content\\:stretch {\n    align-content: stretch;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:content\\:between {\n    align-content: space-between;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:content\\:around {\n    align-content: space-around;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:justify\\:start {\n    justify-content: flex-start;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:justify\\:center {\n    justify-content: center;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:justify\\:end {\n    justify-content: flex-end;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:justify\\:between {\n    justify-content: space-between;\n}\n}\n@media (min-width: 80rem) {\n.lg\\:justify\\:around {\n    justify-content: space-around;\n}\n}\n[class^=\"responsive:\"],\n[class*=\"responsive:\"] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n[class^=\"responsive:\"] > div,\n[class*=\"responsive:\"] > div {\n  position: relative;\n}\n@media (min-width: 1920px) and (max-width: 2879px) {\n.responsive\\:2 > div {\n    flex-basis: 50%;\n}\n}\n@media (min-width: 960px) and (max-width: 1919px) {\n.responsive\\:2 > div {\n    flex-basis: 100%;\n}\n}\n@media (min-width: 1920px) and (max-width: 2559px) {\n.responsive\\:3 > div {\n    flex-basis: 33.3333333333%;\n}\n}\n@media (min-width: 1280px) and (max-width: 1919px) {\n.responsive\\:3 > div {\n    flex-basis: 50%;\n}\n}\n@media (min-width: 640px) and (max-width: 1279px) {\n.responsive\\:3 > div {\n    flex-basis: 100%;\n}\n}\n@media (min-width: 1920px) and (max-width: 2399px) {\n.responsive\\:4 > div {\n    flex-basis: 25%;\n}\n}\n@media (min-width: 1440px) and (max-width: 1919px) {\n.responsive\\:4 > div {\n    flex-basis: 33.3333333333%;\n}\n}\n@media (min-width: 960px) and (max-width: 1439px) {\n.responsive\\:4 > div {\n    flex-basis: 50%;\n}\n}\n@media (min-width: 480px) and (max-width: 959px) {\n.responsive\\:4 > div {\n    flex-basis: 100%;\n}\n}\n@media (min-width: 1920px) and (max-width: 2239px) {\n.responsive\\:6 > div {\n    flex-basis: 16.6666666667%;\n}\n}\n@media (min-width: 1600px) and (max-width: 1919px) {\n.responsive\\:6 > div {\n    flex-basis: 20%;\n}\n}\n@media (min-width: 1280px) and (max-width: 1599px) {\n.responsive\\:6 > div {\n    flex-basis: 25%;\n}\n}\n@media (min-width: 960px) and (max-width: 1279px) {\n.responsive\\:6 > div {\n    flex-basis: 33.3333333333%;\n}\n}\n@media (min-width: 640px) and (max-width: 959px) {\n.responsive\\:6 > div {\n    flex-basis: 50%;\n}\n}\n@media (min-width: 320px) and (max-width: 639px) {\n.responsive\\:6 > div {\n    flex-basis: 100%;\n}\n}\n@media (min-width: 1920px) and (max-width: 2159px) {\n.responsive\\:8 > div {\n    flex-basis: 12.5%;\n}\n}\n@media (min-width: 1680px) and (max-width: 1919px) {\n.responsive\\:8 > div {\n    flex-basis: 14.2857142857%;\n}\n}\n@media (min-width: 1440px) and (max-width: 1679px) {\n.responsive\\:8 > div {\n    flex-basis: 16.6666666667%;\n}\n}\n@media (min-width: 1200px) and (max-width: 1439px) {\n.responsive\\:8 > div {\n    flex-basis: 20%;\n}\n}\n@media (min-width: 960px) and (max-width: 1199px) {\n.responsive\\:8 > div {\n    flex-basis: 25%;\n}\n}\n@media (min-width: 720px) and (max-width: 959px) {\n.responsive\\:8 > div {\n    flex-basis: 33.3333333333%;\n}\n}\n@media (min-width: 480px) and (max-width: 719px) {\n.responsive\\:8 > div {\n    flex-basis: 50%;\n}\n}\n@media (min-width: 240px) and (max-width: 479px) {\n.responsive\\:8 > div {\n    flex-basis: 100%;\n}\n}\n@media (min-width: 1920px) and (max-width: 2111px) {\n.responsive\\:10 > div {\n    flex-basis: 10%;\n}\n}\n@media (min-width: 1728px) and (max-width: 1919px) {\n.responsive\\:10 > div {\n    flex-basis: 11.1111111111%;\n}\n}\n@media (min-width: 1536px) and (max-width: 1727px) {\n.responsive\\:10 > div {\n    flex-basis: 12.5%;\n}\n}\n@media (min-width: 1344px) and (max-width: 1535px) {\n.responsive\\:10 > div {\n    flex-basis: 14.2857142857%;\n}\n}\n@media (min-width: 1152px) and (max-width: 1343px) {\n.responsive\\:10 > div {\n    flex-basis: 16.6666666667%;\n}\n}\n@media (min-width: 960px) and (max-width: 1151px) {\n.responsive\\:10 > div {\n    flex-basis: 20%;\n}\n}\n@media (min-width: 768px) and (max-width: 959px) {\n.responsive\\:10 > div {\n    flex-basis: 25%;\n}\n}\n@media (min-width: 576px) and (max-width: 767px) {\n.responsive\\:10 > div {\n    flex-basis: 33.3333333333%;\n}\n}\n@media (min-width: 384px) and (max-width: 575px) {\n.responsive\\:10 > div {\n    flex-basis: 50%;\n}\n}\n@media (min-width: 192px) and (max-width: 383px) {\n.responsive\\:10 > div {\n    flex-basis: 100%;\n}\n}\n@media (min-width: 1920px) and (max-width: 2079px) {\n.responsive\\:12 > div {\n    flex-basis: 8.3333333333%;\n}\n}\n@media (min-width: 1760px) and (max-width: 1919px) {\n.responsive\\:12 > div {\n    flex-basis: 9.0909090909%;\n}\n}\n@media (min-width: 1600px) and (max-width: 1759px) {\n.responsive\\:12 > div {\n    flex-basis: 10%;\n}\n}\n@media (min-width: 1440px) and (max-width: 1599px) {\n.responsive\\:12 > div {\n    flex-basis: 11.1111111111%;\n}\n}\n@media (min-width: 1280px) and (max-width: 1439px) {\n.responsive\\:12 > div {\n    flex-basis: 12.5%;\n}\n}\n@media (min-width: 1120px) and (max-width: 1279px) {\n.responsive\\:12 > div {\n    flex-basis: 14.2857142857%;\n}\n}\n@media (min-width: 960px) and (max-width: 1119px) {\n.responsive\\:12 > div {\n    flex-basis: 16.6666666667%;\n}\n}\n@media (min-width: 800px) and (max-width: 959px) {\n.responsive\\:12 > div {\n    flex-basis: 20%;\n}\n}\n@media (min-width: 640px) and (max-width: 799px) {\n.responsive\\:12 > div {\n    flex-basis: 25%;\n}\n}\n@media (min-width: 480px) and (max-width: 639px) {\n.responsive\\:12 > div {\n    flex-basis: 33.3333333333%;\n}\n}\n@media (min-width: 320px) and (max-width: 479px) {\n.responsive\\:12 > div {\n    flex-basis: 50%;\n}\n}\n@media (min-width: 160px) and (max-width: 319px) {\n.responsive\\:12 > div {\n    flex-basis: 100%;\n}\n}\ndiv[class^=responsive].column-gap\\:0 > div {\n  padding-left: 0;\n  padding-right: 0;\n}\ndiv[class^=responsive].row-gap\\:0 > div {\n  padding-top: 0;\n  padding-bottom: 0;\n}\ndiv[class^=responsive].column-gap\\:1\\/5 > div {\n  padding-left: calc(1rem / 5);\n  padding-right: calc(1rem / 5);\n}\ndiv[class^=responsive].row-gap\\:1\\/5 > div {\n  padding-top: calc(1rem / 5);\n  padding-bottom: calc(1rem / 5);\n}\ndiv[class^=responsive].column-gap\\:1\\/4 > div {\n  padding-left: calc(1rem / 4);\n  padding-right: calc(1rem / 4);\n}\ndiv[class^=responsive].row-gap\\:1\\/4 > div {\n  padding-top: calc(1rem / 4);\n  padding-bottom: calc(1rem / 4);\n}\ndiv[class^=responsive].column-gap\\:1\\/3 > div {\n  padding-left: calc(1rem / 3);\n  padding-right: calc(1rem / 3);\n}\ndiv[class^=responsive].row-gap\\:1\\/3 > div {\n  padding-top: calc(1rem / 3);\n  padding-bottom: calc(1rem / 3);\n}\ndiv[class^=responsive].column-gap\\:2\\/5 > div {\n  padding-left: calc(2rem / 5);\n  padding-right: calc(2rem / 5);\n}\ndiv[class^=responsive].row-gap\\:2\\/5 > div {\n  padding-top: calc(2rem / 5);\n  padding-bottom: calc(2rem / 5);\n}\ndiv[class^=responsive].column-gap\\:1\\/2 > div {\n  padding-left: calc(1rem / 2);\n  padding-right: calc(1rem / 2);\n}\ndiv[class^=responsive].row-gap\\:1\\/2 > div {\n  padding-top: calc(1rem / 2);\n  padding-bottom: calc(1rem / 2);\n}\ndiv[class^=responsive].column-gap\\:3\\/5 > div {\n  padding-left: calc(3rem / 5);\n  padding-right: calc(3rem / 5);\n}\ndiv[class^=responsive].row-gap\\:3\\/5 > div {\n  padding-top: calc(3rem / 5);\n  padding-bottom: calc(3rem / 5);\n}\ndiv[class^=responsive].column-gap\\:2\\/3 > div {\n  padding-left: calc(2rem / 3);\n  padding-right: calc(2rem / 3);\n}\ndiv[class^=responsive].row-gap\\:2\\/3 > div {\n  padding-top: calc(2rem / 3);\n  padding-bottom: calc(2rem / 3);\n}\ndiv[class^=responsive].column-gap\\:3\\/4 > div {\n  padding-left: calc(3rem / 4);\n  padding-right: calc(3rem / 4);\n}\ndiv[class^=responsive].row-gap\\:3\\/4 > div {\n  padding-top: calc(3rem / 4);\n  padding-bottom: calc(3rem / 4);\n}\ndiv[class^=responsive].column-gap\\:4\\/5 > div {\n  padding-left: calc(4rem / 5);\n  padding-right: calc(4rem / 5);\n}\ndiv[class^=responsive].row-gap\\:4\\/5 > div {\n  padding-top: calc(4rem / 5);\n  padding-bottom: calc(4rem / 5);\n}\ndiv[class^=responsive].column-gap\\:1 > div {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\ndiv[class^=responsive].row-gap\\:1 > div {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\ndiv[class^=responsive].column-gap\\:5\\/4 > div {\n  padding-left: calc(5rem / 4);\n  padding-right: calc(5rem / 4);\n}\ndiv[class^=responsive].row-gap\\:5\\/4 > div {\n  padding-top: calc(5rem / 4);\n  padding-bottom: calc(5rem / 4);\n}\ndiv[class^=responsive].column-gap\\:3\\/2 > div {\n  padding-left: calc(3rem / 2);\n  padding-right: calc(3rem / 2);\n}\ndiv[class^=responsive].row-gap\\:3\\/2 > div {\n  padding-top: calc(3rem / 2);\n  padding-bottom: calc(3rem / 2);\n}\ndiv[class^=responsive].column-gap\\:7\\/4 > div {\n  padding-left: calc(7rem / 4);\n  padding-right: calc(7rem / 4);\n}\ndiv[class^=responsive].row-gap\\:7\\/4 > div {\n  padding-top: calc(7rem / 4);\n  padding-bottom: calc(7rem / 4);\n}\ndiv[class^=responsive].column-gap\\:2 > div {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\ndiv[class^=responsive].row-gap\\:2 > div {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\ndiv[class^=responsive].column-gap\\:5\\/2 > div {\n  padding-left: calc(5rem / 2);\n  padding-right: calc(5rem / 2);\n}\ndiv[class^=responsive].row-gap\\:5\\/2 > div {\n  padding-top: calc(5rem / 2);\n  padding-bottom: calc(5rem / 2);\n}\ndiv[class^=responsive].column-gap\\:3 > div {\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\ndiv[class^=responsive].row-gap\\:3 > div {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\ndiv[class^=responsive].column-gap\\:4 > div {\n  padding-left: 4rem;\n  padding-right: 4rem;\n}\ndiv[class^=responsive].row-gap\\:4 > div {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\ndiv[class^=responsive].column-gap\\:auto > div {\n  padding-left: auto;\n  padding-right: auto;\n}\ndiv[class^=responsive].row-gap\\:auto > div {\n  padding-top: auto;\n  padding-bottom: auto;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded\\:t {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.rounded\\:r {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.rounded\\:b {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.rounded\\:l {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.rounded\\:full {\n  border-radius: 9999px;\n}\n.hover\\:rounded:hover {\n  border-radius: 0.25rem;\n}\n.hover\\:rounded\\:t:hover {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.hover\\:rounded\\:r:hover {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.hover\\:rounded\\:b:hover {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.hover\\:rounded\\:l:hover {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.hover\\:rounded\\:full:hover {\n  border-radius: 9999px;\n}\n.disabled\\:rounded:disabled {\n  border-radius: 0.25rem;\n}\n.disabled\\:rounded\\:t:disabled {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.disabled\\:rounded\\:r:disabled {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.disabled\\:rounded\\:b:disabled {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.disabled\\:rounded\\:l:disabled {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.disabled\\:rounded\\:full:disabled {\n  border-radius: 9999px;\n}\n.visited\\:rounded:visited {\n  border-radius: 0.25rem;\n}\n.visited\\:rounded\\:t:visited {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.visited\\:rounded\\:r:visited {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.visited\\:rounded\\:b:visited {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.visited\\:rounded\\:l:visited {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.visited\\:rounded\\:full:visited {\n  border-radius: 9999px;\n}\n.focus\\:rounded:focus {\n  border-radius: 0.25rem;\n}\n.focus\\:rounded\\:t:focus {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.focus\\:rounded\\:r:focus {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.focus\\:rounded\\:b:focus {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.focus\\:rounded\\:l:focus {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.focus\\:rounded\\:full:focus {\n  border-radius: 9999px;\n}\n.first\\:rounded:first-child {\n  border-radius: 0.25rem;\n}\n.first\\:rounded\\:t:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.first\\:rounded\\:r:first-child {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.first\\:rounded\\:b:first-child {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.first\\:rounded\\:l:first-child {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.first\\:rounded\\:full:first-child {\n  border-radius: 9999px;\n}\n.last\\:rounded:last-child {\n  border-radius: 0.25rem;\n}\n.last\\:rounded\\:t:last-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.last\\:rounded\\:r:last-child {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.last\\:rounded\\:b:last-child {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.last\\:rounded\\:l:last-child {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.last\\:rounded\\:full:last-child {\n  border-radius: 9999px;\n}\n.rounded\\:0 {\n  border-radius: 0;\n}\n.rounded\\:t\\:0 {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.rounded\\:r\\:0 {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.rounded\\:b\\:0 {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.rounded\\:l\\:0 {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.rounded\\:1\\/8 {\n  border-radius: 0.125rem;\n}\n.rounded\\:t\\:1\\/8 {\n  border-top-left-radius: 0.125rem;\n  border-top-right-radius: 0.125rem;\n}\n.rounded\\:r\\:1\\/8 {\n  border-top-right-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem;\n}\n.rounded\\:b\\:1\\/8 {\n  border-bottom-left-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem;\n}\n.rounded\\:l\\:1\\/8 {\n  border-top-left-radius: 0.125rem;\n  border-bottom-left-radius: 0.125rem;\n}\n.rounded\\:1\\/2 {\n  border-radius: 0.5rem;\n}\n.rounded\\:t\\:1\\/2 {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n.rounded\\:r\\:1\\/2 {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.rounded\\:b\\:1\\/2 {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.rounded\\:l\\:1\\/2 {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n.rounded\\:3\\/4 {\n  border-radius: 0.75rem;\n}\n.rounded\\:t\\:3\\/4 {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\n.rounded\\:r\\:3\\/4 {\n  border-top-right-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.rounded\\:b\\:3\\/4 {\n  border-bottom-left-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.rounded\\:l\\:3\\/4 {\n  border-top-left-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n}\n.rounded\\:1 {\n  border-radius: 1rem;\n}\n.rounded\\:t\\:1 {\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n.rounded\\:r\\:1 {\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n.rounded\\:b\\:1 {\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n.rounded\\:l\\:1 {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n}\n.rounded\\:full {\n  border-radius: 9999px;\n}\n.rounded\\:t\\:full {\n  border-top-left-radius: 9999px;\n  border-top-right-radius: 9999px;\n}\n.rounded\\:r\\:full {\n  border-top-right-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.rounded\\:b\\:full {\n  border-bottom-left-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.rounded\\:l\\:full {\n  border-top-left-radius: 9999px;\n  border-bottom-left-radius: 9999px;\n}\n.hover\\:rounded\\:0:hover {\n  border-radius: 0;\n}\n.hover\\:rounded\\:t\\:0:hover {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.hover\\:rounded\\:r\\:0:hover {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.hover\\:rounded\\:b\\:0:hover {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.hover\\:rounded\\:l\\:0:hover {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.hover\\:rounded\\:1\\/8:hover {\n  border-radius: 0.125rem;\n}\n.hover\\:rounded\\:t\\:1\\/8:hover {\n  border-top-left-radius: 0.125rem;\n  border-top-right-radius: 0.125rem;\n}\n.hover\\:rounded\\:r\\:1\\/8:hover {\n  border-top-right-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem;\n}\n.hover\\:rounded\\:b\\:1\\/8:hover {\n  border-bottom-left-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem;\n}\n.hover\\:rounded\\:l\\:1\\/8:hover {\n  border-top-left-radius: 0.125rem;\n  border-bottom-left-radius: 0.125rem;\n}\n.hover\\:rounded\\:1\\/2:hover {\n  border-radius: 0.5rem;\n}\n.hover\\:rounded\\:t\\:1\\/2:hover {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n.hover\\:rounded\\:r\\:1\\/2:hover {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.hover\\:rounded\\:b\\:1\\/2:hover {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.hover\\:rounded\\:l\\:1\\/2:hover {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n.hover\\:rounded\\:3\\/4:hover {\n  border-radius: 0.75rem;\n}\n.hover\\:rounded\\:t\\:3\\/4:hover {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\n.hover\\:rounded\\:r\\:3\\/4:hover {\n  border-top-right-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.hover\\:rounded\\:b\\:3\\/4:hover {\n  border-bottom-left-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.hover\\:rounded\\:l\\:3\\/4:hover {\n  border-top-left-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n}\n.hover\\:rounded\\:1:hover {\n  border-radius: 1rem;\n}\n.hover\\:rounded\\:t\\:1:hover {\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n.hover\\:rounded\\:r\\:1:hover {\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n.hover\\:rounded\\:b\\:1:hover {\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n.hover\\:rounded\\:l\\:1:hover {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n}\n.hover\\:rounded\\:full:hover {\n  border-radius: 9999px;\n}\n.hover\\:rounded\\:t\\:full:hover {\n  border-top-left-radius: 9999px;\n  border-top-right-radius: 9999px;\n}\n.hover\\:rounded\\:r\\:full:hover {\n  border-top-right-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.hover\\:rounded\\:b\\:full:hover {\n  border-bottom-left-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.hover\\:rounded\\:l\\:full:hover {\n  border-top-left-radius: 9999px;\n  border-bottom-left-radius: 9999px;\n}\n.disabled\\:rounded\\:0:disabled {\n  border-radius: 0;\n}\n.disabled\\:rounded\\:t\\:0:disabled {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.disabled\\:rounded\\:r\\:0:disabled {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.disabled\\:rounded\\:b\\:0:disabled {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.disabled\\:rounded\\:l\\:0:disabled {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.disabled\\:rounded\\:1\\/8:disabled {\n  border-radius: 0.125rem;\n}\n.disabled\\:rounded\\:t\\:1\\/8:disabled {\n  border-top-left-radius: 0.125rem;\n  border-top-right-radius: 0.125rem;\n}\n.disabled\\:rounded\\:r\\:1\\/8:disabled {\n  border-top-right-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem;\n}\n.disabled\\:rounded\\:b\\:1\\/8:disabled {\n  border-bottom-left-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem;\n}\n.disabled\\:rounded\\:l\\:1\\/8:disabled {\n  border-top-left-radius: 0.125rem;\n  border-bottom-left-radius: 0.125rem;\n}\n.disabled\\:rounded\\:1\\/2:disabled {\n  border-radius: 0.5rem;\n}\n.disabled\\:rounded\\:t\\:1\\/2:disabled {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n.disabled\\:rounded\\:r\\:1\\/2:disabled {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.disabled\\:rounded\\:b\\:1\\/2:disabled {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.disabled\\:rounded\\:l\\:1\\/2:disabled {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n.disabled\\:rounded\\:3\\/4:disabled {\n  border-radius: 0.75rem;\n}\n.disabled\\:rounded\\:t\\:3\\/4:disabled {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\n.disabled\\:rounded\\:r\\:3\\/4:disabled {\n  border-top-right-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.disabled\\:rounded\\:b\\:3\\/4:disabled {\n  border-bottom-left-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.disabled\\:rounded\\:l\\:3\\/4:disabled {\n  border-top-left-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n}\n.disabled\\:rounded\\:1:disabled {\n  border-radius: 1rem;\n}\n.disabled\\:rounded\\:t\\:1:disabled {\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n.disabled\\:rounded\\:r\\:1:disabled {\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n.disabled\\:rounded\\:b\\:1:disabled {\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n.disabled\\:rounded\\:l\\:1:disabled {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n}\n.disabled\\:rounded\\:full:disabled {\n  border-radius: 9999px;\n}\n.disabled\\:rounded\\:t\\:full:disabled {\n  border-top-left-radius: 9999px;\n  border-top-right-radius: 9999px;\n}\n.disabled\\:rounded\\:r\\:full:disabled {\n  border-top-right-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.disabled\\:rounded\\:b\\:full:disabled {\n  border-bottom-left-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.disabled\\:rounded\\:l\\:full:disabled {\n  border-top-left-radius: 9999px;\n  border-bottom-left-radius: 9999px;\n}\n.visited\\:rounded\\:0:visited {\n  border-radius: 0;\n}\n.visited\\:rounded\\:t\\:0:visited {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.visited\\:rounded\\:r\\:0:visited {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.visited\\:rounded\\:b\\:0:visited {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.visited\\:rounded\\:l\\:0:visited {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.visited\\:rounded\\:1\\/8:visited {\n  border-radius: 0.125rem;\n}\n.visited\\:rounded\\:t\\:1\\/8:visited {\n  border-top-left-radius: 0.125rem;\n  border-top-right-radius: 0.125rem;\n}\n.visited\\:rounded\\:r\\:1\\/8:visited {\n  border-top-right-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem;\n}\n.visited\\:rounded\\:b\\:1\\/8:visited {\n  border-bottom-left-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem;\n}\n.visited\\:rounded\\:l\\:1\\/8:visited {\n  border-top-left-radius: 0.125rem;\n  border-bottom-left-radius: 0.125rem;\n}\n.visited\\:rounded\\:1\\/2:visited {\n  border-radius: 0.5rem;\n}\n.visited\\:rounded\\:t\\:1\\/2:visited {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n.visited\\:rounded\\:r\\:1\\/2:visited {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.visited\\:rounded\\:b\\:1\\/2:visited {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.visited\\:rounded\\:l\\:1\\/2:visited {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n.visited\\:rounded\\:3\\/4:visited {\n  border-radius: 0.75rem;\n}\n.visited\\:rounded\\:t\\:3\\/4:visited {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\n.visited\\:rounded\\:r\\:3\\/4:visited {\n  border-top-right-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.visited\\:rounded\\:b\\:3\\/4:visited {\n  border-bottom-left-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.visited\\:rounded\\:l\\:3\\/4:visited {\n  border-top-left-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n}\n.visited\\:rounded\\:1:visited {\n  border-radius: 1rem;\n}\n.visited\\:rounded\\:t\\:1:visited {\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n.visited\\:rounded\\:r\\:1:visited {\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n.visited\\:rounded\\:b\\:1:visited {\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n.visited\\:rounded\\:l\\:1:visited {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n}\n.visited\\:rounded\\:full:visited {\n  border-radius: 9999px;\n}\n.visited\\:rounded\\:t\\:full:visited {\n  border-top-left-radius: 9999px;\n  border-top-right-radius: 9999px;\n}\n.visited\\:rounded\\:r\\:full:visited {\n  border-top-right-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.visited\\:rounded\\:b\\:full:visited {\n  border-bottom-left-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.visited\\:rounded\\:l\\:full:visited {\n  border-top-left-radius: 9999px;\n  border-bottom-left-radius: 9999px;\n}\n.focus\\:rounded\\:0:focus {\n  border-radius: 0;\n}\n.focus\\:rounded\\:t\\:0:focus {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.focus\\:rounded\\:r\\:0:focus {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.focus\\:rounded\\:b\\:0:focus {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.focus\\:rounded\\:l\\:0:focus {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.focus\\:rounded\\:1\\/8:focus {\n  border-radius: 0.125rem;\n}\n.focus\\:rounded\\:t\\:1\\/8:focus {\n  border-top-left-radius: 0.125rem;\n  border-top-right-radius: 0.125rem;\n}\n.focus\\:rounded\\:r\\:1\\/8:focus {\n  border-top-right-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem;\n}\n.focus\\:rounded\\:b\\:1\\/8:focus {\n  border-bottom-left-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem;\n}\n.focus\\:rounded\\:l\\:1\\/8:focus {\n  border-top-left-radius: 0.125rem;\n  border-bottom-left-radius: 0.125rem;\n}\n.focus\\:rounded\\:1\\/2:focus {\n  border-radius: 0.5rem;\n}\n.focus\\:rounded\\:t\\:1\\/2:focus {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n.focus\\:rounded\\:r\\:1\\/2:focus {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.focus\\:rounded\\:b\\:1\\/2:focus {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.focus\\:rounded\\:l\\:1\\/2:focus {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n.focus\\:rounded\\:3\\/4:focus {\n  border-radius: 0.75rem;\n}\n.focus\\:rounded\\:t\\:3\\/4:focus {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\n.focus\\:rounded\\:r\\:3\\/4:focus {\n  border-top-right-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.focus\\:rounded\\:b\\:3\\/4:focus {\n  border-bottom-left-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.focus\\:rounded\\:l\\:3\\/4:focus {\n  border-top-left-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n}\n.focus\\:rounded\\:1:focus {\n  border-radius: 1rem;\n}\n.focus\\:rounded\\:t\\:1:focus {\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n.focus\\:rounded\\:r\\:1:focus {\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n.focus\\:rounded\\:b\\:1:focus {\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n.focus\\:rounded\\:l\\:1:focus {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n}\n.focus\\:rounded\\:full:focus {\n  border-radius: 9999px;\n}\n.focus\\:rounded\\:t\\:full:focus {\n  border-top-left-radius: 9999px;\n  border-top-right-radius: 9999px;\n}\n.focus\\:rounded\\:r\\:full:focus {\n  border-top-right-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.focus\\:rounded\\:b\\:full:focus {\n  border-bottom-left-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.focus\\:rounded\\:l\\:full:focus {\n  border-top-left-radius: 9999px;\n  border-bottom-left-radius: 9999px;\n}\n.first\\:rounded\\:0:first-child {\n  border-radius: 0;\n}\n.first\\:rounded\\:t\\:0:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.first\\:rounded\\:r\\:0:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.first\\:rounded\\:b\\:0:first-child {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.first\\:rounded\\:l\\:0:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.first\\:rounded\\:1\\/8:first-child {\n  border-radius: 0.125rem;\n}\n.first\\:rounded\\:t\\:1\\/8:first-child {\n  border-top-left-radius: 0.125rem;\n  border-top-right-radius: 0.125rem;\n}\n.first\\:rounded\\:r\\:1\\/8:first-child {\n  border-top-right-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem;\n}\n.first\\:rounded\\:b\\:1\\/8:first-child {\n  border-bottom-left-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem;\n}\n.first\\:rounded\\:l\\:1\\/8:first-child {\n  border-top-left-radius: 0.125rem;\n  border-bottom-left-radius: 0.125rem;\n}\n.first\\:rounded\\:1\\/2:first-child {\n  border-radius: 0.5rem;\n}\n.first\\:rounded\\:t\\:1\\/2:first-child {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n.first\\:rounded\\:r\\:1\\/2:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.first\\:rounded\\:b\\:1\\/2:first-child {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.first\\:rounded\\:l\\:1\\/2:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n.first\\:rounded\\:3\\/4:first-child {\n  border-radius: 0.75rem;\n}\n.first\\:rounded\\:t\\:3\\/4:first-child {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\n.first\\:rounded\\:r\\:3\\/4:first-child {\n  border-top-right-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.first\\:rounded\\:b\\:3\\/4:first-child {\n  border-bottom-left-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.first\\:rounded\\:l\\:3\\/4:first-child {\n  border-top-left-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n}\n.first\\:rounded\\:1:first-child {\n  border-radius: 1rem;\n}\n.first\\:rounded\\:t\\:1:first-child {\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n.first\\:rounded\\:r\\:1:first-child {\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n.first\\:rounded\\:b\\:1:first-child {\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n.first\\:rounded\\:l\\:1:first-child {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n}\n.first\\:rounded\\:full:first-child {\n  border-radius: 9999px;\n}\n.first\\:rounded\\:t\\:full:first-child {\n  border-top-left-radius: 9999px;\n  border-top-right-radius: 9999px;\n}\n.first\\:rounded\\:r\\:full:first-child {\n  border-top-right-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.first\\:rounded\\:b\\:full:first-child {\n  border-bottom-left-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.first\\:rounded\\:l\\:full:first-child {\n  border-top-left-radius: 9999px;\n  border-bottom-left-radius: 9999px;\n}\n.last\\:rounded\\:0:last-child {\n  border-radius: 0;\n}\n.last\\:rounded\\:t\\:0:last-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.last\\:rounded\\:r\\:0:last-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.last\\:rounded\\:b\\:0:last-child {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.last\\:rounded\\:l\\:0:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.last\\:rounded\\:1\\/8:last-child {\n  border-radius: 0.125rem;\n}\n.last\\:rounded\\:t\\:1\\/8:last-child {\n  border-top-left-radius: 0.125rem;\n  border-top-right-radius: 0.125rem;\n}\n.last\\:rounded\\:r\\:1\\/8:last-child {\n  border-top-right-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem;\n}\n.last\\:rounded\\:b\\:1\\/8:last-child {\n  border-bottom-left-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem;\n}\n.last\\:rounded\\:l\\:1\\/8:last-child {\n  border-top-left-radius: 0.125rem;\n  border-bottom-left-radius: 0.125rem;\n}\n.last\\:rounded\\:1\\/2:last-child {\n  border-radius: 0.5rem;\n}\n.last\\:rounded\\:t\\:1\\/2:last-child {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n.last\\:rounded\\:r\\:1\\/2:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.last\\:rounded\\:b\\:1\\/2:last-child {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.last\\:rounded\\:l\\:1\\/2:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n.last\\:rounded\\:3\\/4:last-child {\n  border-radius: 0.75rem;\n}\n.last\\:rounded\\:t\\:3\\/4:last-child {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\n.last\\:rounded\\:r\\:3\\/4:last-child {\n  border-top-right-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.last\\:rounded\\:b\\:3\\/4:last-child {\n  border-bottom-left-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.last\\:rounded\\:l\\:3\\/4:last-child {\n  border-top-left-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n}\n.last\\:rounded\\:1:last-child {\n  border-radius: 1rem;\n}\n.last\\:rounded\\:t\\:1:last-child {\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n.last\\:rounded\\:r\\:1:last-child {\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n.last\\:rounded\\:b\\:1:last-child {\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n.last\\:rounded\\:l\\:1:last-child {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n}\n.last\\:rounded\\:full:last-child {\n  border-radius: 9999px;\n}\n.last\\:rounded\\:t\\:full:last-child {\n  border-top-left-radius: 9999px;\n  border-top-right-radius: 9999px;\n}\n.last\\:rounded\\:r\\:full:last-child {\n  border-top-right-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.last\\:rounded\\:b\\:full:last-child {\n  border-bottom-left-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.last\\:rounded\\:l\\:full:last-child {\n  border-top-left-radius: 9999px;\n  border-bottom-left-radius: 9999px;\n}\n.border\\:collapse {\n  border-collapse: collapse;\n}\n.border\\:seperate {\n  border-collapse: seperate;\n}\n.table\\:auto {\n  table-layout: auto;\n}\n.table\\:fixed {\n  table-layout: fixed;\n}\n* {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  box-sizing: border-box;\n}\n*:focus {\n  outline-color: transparent;\n}\n*::selection {\n  background-color: #006875;\n  color: #ffffff;\n}\n* ::-webkit-scrollbar {\n  width: 4px;\n}\n* ::-webkit-scrollbar-track {\n  background: #3d4852;\n}\n* ::-webkit-scrollbar-thumb {\n  background: #2779bd;\n}\nhtml {\n  color: #22292f;\n  background-color: #22292f;\n}\ntable {\n  border-collapse: collapse;\n}\n.opacity-enter-active {\n  transition: all 0.3s ease;\n}\n.opacity-leave-active {\n  transition: all 0.3s ease;\n}\n.opacity-enter,\n.opacity-leave-to {\n  opacity: 0;\n}\n.flip-enter-active {\n  animation: flipInX 0.6s;\n}\n.flip-leave-active {\n  animation: flipOutX 0.6s;\n}\n.flip-enter,\n.flip-leave-to {\n  display: none;\n}\n@keyframes flipInX {\nfrom {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n}\n40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in;\n}\n60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n}\n80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n}\nto {\n    transform: perspective(400px);\n}\n}\n@keyframes flipOutX {\nfrom {\n    transform: perspective(400px);\n}\n30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n}\nto {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n}\n}\n:root {\n  --color-code-green: #b5f4a5;\n  --color-code-yellow: #ffe484;\n  --color-code-purple: #d9a9ff;\n  --color-code-red: #ff8383;\n  --color-code-blue: #93ddfd;\n  --color-code-white: #fff;\n}\ncode[class*=language-],\npre[class*=language-] {\n  color: #edf2f7;\n  direction: ltr;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n  margin: 0;\n}\npre[class*=language-] {\n  padding: 1rem;\n  overflow: auto;\n  border-radius: 0.3em;\n}\n:not(pre) > code[class*=language-],\npre[class*=language-] {\n  background: #1d1f21;\n}\n:not(pre) > code[class*=language-] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n}\n.token.cdata,\n.token.comment,\n.token.doctype,\n.token.prolog {\n  color: #a0aec0;\n}\n.token.punctuation {\n  color: #c5c8c6;\n}\n.namespace {\n  opacity: 0.7;\n}\n.token.keyword,\n.token.property,\n.token.tag {\n  color: #96cbfe;\n}\n.token.class-name {\n  color: #ffffb6;\n  text-decoration: underline;\n}\n.token.boolean,\n.token.constant {\n  color: #9c9;\n}\n.token.deleted,\n.token.symbol {\n  color: #f92672;\n}\n.token.number {\n  color: #ff73fd;\n}\n.token.attr-name,\n.token.builtin,\n.token.char,\n.token.inserted,\n.token.selector,\n.token.string {\n  color: #a8ff60;\n}\n.token.variable {\n  color: #c6c5fe;\n}\n.token.operator {\n  color: #ededed;\n}\n.token.entity {\n  color: #ffffb6;\n}\n.token.url {\n  color: #96cbfe;\n}\n.language-css .token.string,\n.style .token.string {\n  color: #87c38a;\n}\n.token.atrule,\n.token.attr-value {\n  color: #f9ee98;\n}\n.token.function {\n  color: #dad085;\n}\n.token.regex {\n  color: #e9c062;\n}\n.token.important {\n  color: #fd971f;\n}\n.token.bold,\n.token.important {\n  font-weight: 700;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n:not(pre) > code[class*=language-],\npre[class*=language-] {\n  background: transparent;\n  font-size: 0.875rem;\n}\ncode[class*=language-],\npre[class*=language-] {\n  -webkit-font-smoothing: auto !important;\n  -moz-osx-font-smoothing: auto !important;\n  color: var(--color-code-white) !important;\n  -webkit-overflow-scrolling: touch !important;\n}\n.token.comment {\n  color: #a0aec0 !important;\n}\n.token.atrule {\n  color: var(--color-code-white) !important;\n}\n.token.atrule > .token.property {\n  color: var(--color-code-white) !important;\n}\n.token.atrule > .token.property + .token.punctuation {\n  color: var(--color-code-white) !important;\n}\n.token.atrule > .token.property + .token.punctuation + .token.number + .token.unit {\n  color: var(--color-code-white) !important;\n}\n.token.atrule > .token.number {\n  color: var(--color-code-white) !important;\n}\n.token.atrule > .token.unit {\n  color: var(--color-code-white) !important;\n}\n.token.function {\n  color: var(--color-code-blue) !important;\n}\n.token.number {\n  color: var(--color-code-red) !important;\n}\n.token.unit {\n  color: var(--color-code-red) !important;\n}\n.token.punctuation {\n  color: var(--color-code-blue) !important;\n}\n.token.hexcode {\n  color: var(--color-code-blue) !important;\n}\n.token.tag {\n  color: var(--color-code-red) !important;\n}\n.token.attr-name {\n  color: var(--color-code-yellow) !important;\n}\n.token.attr-value {\n  color: var(--color-code-green) !important;\n}\n.token.string {\n  color: var(--color-code-green) !important;\n}\n.token.url {\n  color: var(--color-code-green) !important;\n}\n.token.selector {\n  color: var(--color-code-yellow) !important;\n}\n.token.property {\n  color: var(--color-code-yellow) !important;\n}\n.token.rule {\n  color: var(--color-code-purple) !important;\n}\n.token.important {\n  font-weight: inherit !important;\n  color: var(--color-code-purple) !important;\n}\ncode.language-js .token.operator,\npre.language-js .token.operator {\n  color: var(--color-code-blue) !important;\n}\ncode.language-js .token.punctuation,\npre.language-js .token.punctuation {\n  color: var(--color-code-white) !important;\n}\ncode.language-js .token.boolean,\npre.language-js .token.boolean {\n  color: var(--color-code-red) !important;\n}\ncode.language-js .token.keyword,\npre.language-js .token.keyword {\n  color: var(--color-code-white) !important;\n}\ncode.language-js .token.regex,\npre.language-js .token.regex {\n  color: var(--color-code-yellow) !important;\n}\ncode.language-bash .token.function,\npre.language-bash .token.function {\n  color: var(--color-code-white) !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/App.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/App.vue?vue&type=style&index=0&lang=scss&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Card.vue?vue&type=template&id=54cdc180&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Card.vue?vue&type=template&id=54cdc180& ***!
  \**********************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass:
          "flex flex:col shadow:large my:2 pb:1/4 bg:white rounded:1/2"
      },
      [
        _c(
          "div",
          {
            staticClass:
              "flex flex:wrap content:between relative m:1 pb:1/4 text:5/4 border:b:1/8 border:grey-lighter"
          },
          [_vm._t("header")],
          2
        ),
        _vm._v(" "),
        _vm._t("navigation"),
        _vm._v(" "),
        _c("div", { staticClass: "p:1" }, [_vm._t("content")], 2)
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/App.vue?vue&type=template&id=992092a6&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/App.vue?vue&type=template&id=992092a6& ***!
  \****************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("com-header", { attrs: { id: "header" } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex" },
        [
          _c("com-sidebar", { attrs: { id: "sidebar" } }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "px:2 py:1 h:screen w:screen overflow:auto",
              attrs: { id: "container" }
            },
            [
              _c(
                "transition",
                { attrs: { name: "opacity", mode: "out-in" } },
                [_c("router-view")],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./vue-multiselect.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-multiselect/dist/vue-multiselect.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=60)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var i=n(49)("wks"),r=n(30),o=n(0).Symbol,s="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=s&&o[t]||(s?o:r)("Symbol."+t))}).store=i},function(t,e,n){var i=n(5);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var i=n(0),r=n(10),o=n(8),s=n(6),u=n(11),a=function(t,e,n){var l,c,f,p,h=t&a.F,d=t&a.G,v=t&a.S,g=t&a.P,y=t&a.B,m=d?i:v?i[e]||(i[e]={}):(i[e]||{}).prototype,b=d?r:r[e]||(r[e]={}),_=b.prototype||(b.prototype={});d&&(n=e);for(l in n)c=!h&&m&&void 0!==m[l],f=(c?m:n)[l],p=y&&c?u(f,i):g&&"function"==typeof f?u(Function.call,f):f,m&&s(m,l,f,t&a.U),b[l]!=f&&o(b,l,p),g&&_[l]!=f&&(_[l]=f)};i.core=r,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){t.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var i=n(0),r=n(8),o=n(12),s=n(30)("src"),u=Function.toString,a=(""+u).split("toString");n(10).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,u){var l="function"==typeof n;l&&(o(n,"name")||r(n,"name",e)),t[e]!==n&&(l&&(o(n,s)||r(n,s,t[e]?""+t[e]:a.join(String(e)))),t===i?t[e]=n:u?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||u.call(this)})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(13),r=n(25);t.exports=n(4)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(14);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(2),r=n(41),o=n(29),s=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var i=n(7);t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e,n){var i=n(23),r=n(16);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(53),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e,n){var i=n(11),r=n(23),o=n(28),s=n(19),u=n(64);t.exports=function(t,e){var n=1==t,a=2==t,l=3==t,c=4==t,f=6==t,p=5==t||f,h=e||u;return function(e,u,d){for(var v,g,y=o(e),m=r(y),b=i(u,d,3),_=s(m.length),x=0,w=n?h(e,_):a?h(e,0):void 0;_>x;x++)if((p||x in m)&&(v=m[x],g=b(v,x,y),t))if(n)w[x]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:w.push(v)}else if(c)return!1;return f?-1:l||c?c:w}}},function(t,e,n){var i=n(5),r=n(0).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var i=n(9);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){t.exports=!1},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(13).f,r=n(12),o=n(1)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},function(t,e,n){var i=n(49)("keys"),r=n(30);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var i=n(16);t.exports=function(t){return Object(i(t))}},function(t,e,n){var i=n(5);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,n){"use strict";var i=n(0),r=n(12),o=n(9),s=n(67),u=n(29),a=n(7),l=n(77).f,c=n(45).f,f=n(13).f,p=n(51).trim,h=i.Number,d=h,v=h.prototype,g="Number"==o(n(44)(v)),y="trim"in String.prototype,m=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():p(e,3);var n,i,r,o=e.charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var s,a=e.slice(2),l=0,c=a.length;l<c;l++)if((s=a.charCodeAt(l))<48||s>r)return NaN;return parseInt(a,i)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(g?a(function(){v.valueOf.call(n)}):"Number"!=o(n))?s(new d(m(e)),n,h):m(e)};for(var b,_=n(4)?l(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;_.length>x;x++)r(d,b=_[x])&&!r(h,b)&&f(h,b,c(d,b));h.prototype=v,v.constructor=h,n(6)(i,"Number",h)}},function(t,e,n){"use strict";function i(t){return 0!==t&&(!(!Array.isArray(t)||0!==t.length)||!t)}function r(t){return function(){return!t.apply(void 0,arguments)}}function o(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}function s(t,e,n,i){return t.filter(function(t){return o(i(t,n),e)})}function u(t){return t.filter(function(t){return!t.$isLabel})}function a(t,e){return function(n){return n.reduce(function(n,i){return i[t]&&i[t].length?(n.push({$groupLabel:i[e],$isLabel:!0}),n.concat(i[t])):n},[])}}function l(t,e,i,r,o){return function(u){return u.map(function(u){var a;if(!u[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var l=s(u[i],t,e,o);return l.length?(a={},n.i(d.a)(a,r,u[r]),n.i(d.a)(a,i,l),a):[]})}}var c=n(59),f=n(54),p=(n.n(f),n(95)),h=(n.n(p),n(31)),d=(n.n(h),n(58)),v=n(91),g=(n.n(v),n(98)),y=(n.n(g),n(92)),m=(n.n(y),n(88)),b=(n.n(m),n(97)),_=(n.n(b),n(89)),x=(n.n(_),n(96)),w=(n.n(x),n(93)),S=(n.n(w),n(90)),O=(n.n(S),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce(function(t,e){return e(t)},t)}});e.a={data:function(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return i(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1}},mounted:function(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue:function(){return this.value||0===this.value?Array.isArray(this.value)?this.value:[this.value]:[]},filteredOptions:function(){var t=this.search||"",e=t.toLowerCase().trim(),n=this.options.concat();return n=this.internalSearch?this.groupValues?this.filterAndFlat(n,e,this.label):s(n,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(n):n,n=this.hideSelected?n.filter(r(this.isSelected)):n,this.taggable&&e.length&&!this.isExistingOption(e)&&("bottom"===this.tagPosition?n.push({isTag:!0,label:t}):n.unshift({isTag:!0,label:t})),n.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("input",this.multiple?[]:null))},search:function(){this.$emit("search-change",this.search,this.id)}},methods:{getValue:function(){return this.multiple?this.internalValue:0===this.internalValue.length?null:this.internalValue[0]},filterAndFlat:function(t,e,n){return O(l(e,n,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return O(a(this.groupValues,this.groupLabel),u)(t)},updateSearch:function(t){this.search=t},isExistingOption:function(t){return!!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isOptionDisabled:function(t){return!!t.$isDisabled},getOptionLabel:function(t){if(i(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return i(e)?"":e},select:function(t,e){if(t.$isLabel&&this.groupSelect)return void this.selectGroup(t);if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isDisabled||t.$isLabel)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.$emit("select",t,this.id),this.multiple?this.$emit("input",this.internalValue.concat([t]),this.id):this.$emit("input",t,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup:function(t){var e=this,n=this.options.find(function(n){return n[e.groupLabel]===t.$groupLabel});if(n)if(this.wholeGroupSelected(n)){this.$emit("remove",n[this.groupValues],this.id);var i=this.internalValue.filter(function(t){return-1===n[e.groupValues].indexOf(t)});this.$emit("input",i,this.id)}else{var r=n[this.groupValues].filter(function(t){return!(e.isOptionDisabled(t)||e.isSelected(t))});this.$emit("select",r,this.id),this.$emit("input",this.internalValue.concat(r),this.id)}},wholeGroupSelected:function(t){var e=this;return t[this.groupValues].every(function(t){return e.isSelected(t)||e.isOptionDisabled(t)})},wholeGroupDisabled:function(t){return t[this.groupValues].every(this.isOptionDisabled)},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled&&!t.$isDisabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===n.i(c.a)(t)?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);if(this.$emit("remove",t,this.id),this.multiple){var r=this.internalValue.slice(0,i).concat(this.internalValue.slice(i+1));this.$emit("input",r,this.id)}else this.$emit("input",null,this.id);this.closeOnSelect&&e&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return t.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}}}}},function(t,e,n){"use strict";var i=n(54),r=(n.n(i),n(31));n.n(r);e.a={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(t,e){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},groupHighlight:function(t,e){var n=this;if(!this.groupSelect)return["multiselect__option--group","multiselect__option--disabled"];var i=this.options.find(function(t){return t[n.groupLabel]===e.$groupLabel});return i&&!this.wholeGroupDisabled(i)?["multiselect__option--group",{"multiselect__option--highlight":t===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(i)}]:"multiselect__option--disabled"},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0}}}},function(t,e,n){"use strict";var i=n(36),r=n(74),o=n(15),s=n(18);t.exports=n(72)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e,n){"use strict";var i=n(31),r=(n.n(i),n(32)),o=n(33);e.a={name:"vue-multiselect",mixins:[r.a,o.a],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return"and ".concat(t," more")}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{isSingleLabelVisible:function(){return(this.singleValue||0===this.singleValue)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible:function(){return!(this.internalValue.length||this.searchable&&this.isOpen)},visibleValues:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue:function(){return this.internalValue[0]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText:function(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectGroupLabelText:function(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.searchable||this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.preferredOpenDirection},showSearchInput:function(){return this.searchable&&(!this.hasSingleSelectedSlot||!this.visibleSingleValue&&0!==this.visibleSingleValue||this.isOpen)}}}},function(t,e,n){var i=n(1)("unscopables"),r=Array.prototype;void 0==r[i]&&n(8)(r,i,{}),t.exports=function(t){r[i][t]=!0}},function(t,e,n){var i=n(18),r=n(19),o=n(85);t.exports=function(t){return function(e,n,s){var u,a=i(e),l=r(a.length),c=o(s,l);if(t&&n!=n){for(;l>c;)if((u=a[c++])!=u)return!0}else for(;l>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var i=n(9),r=n(1)("toStringTag"),o="Arguments"==i(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),r))?n:o?i(e):"Object"==(u=i(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){"use strict";var i=n(2);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var i=n(0).document;t.exports=i&&i.documentElement},function(t,e,n){t.exports=!n(4)&&!n(7)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(9);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,n){"use strict";function i(t){var e,n;this.promise=new t(function(t,i){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=i}),this.resolve=r(e),this.reject=r(n)}var r=n(14);t.exports.f=function(t){return new i(t)}},function(t,e,n){var i=n(2),r=n(76),o=n(22),s=n(27)("IE_PROTO"),u=function(){},a=function(){var t,e=n(21)("iframe"),i=o.length;for(e.style.display="none",n(40).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;i--;)delete a.prototype[o[i]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=i(t),n=new u,u.prototype=null,n[s]=t):n=a(),void 0===e?n:r(n,e)}},function(t,e,n){var i=n(79),r=n(25),o=n(18),s=n(29),u=n(12),a=n(41),l=Object.getOwnPropertyDescriptor;e.f=n(4)?l:function(t,e){if(t=o(t),e=s(e,!0),a)try{return l(t,e)}catch(t){}if(u(t,e))return r(!i.f.call(t,e),t[e])}},function(t,e,n){var i=n(12),r=n(18),o=n(37)(!1),s=n(27)("IE_PROTO");t.exports=function(t,e){var n,u=r(t),a=0,l=[];for(n in u)n!=s&&i(u,n)&&l.push(n);for(;e.length>a;)i(u,n=e[a++])&&(~o(l,n)||l.push(n));return l}},function(t,e,n){var i=n(46),r=n(22);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e,n){var i=n(2),r=n(5),o=n(43);t.exports=function(t,e){if(i(t),r(e)&&e.constructor===t)return e;var n=o.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var i=n(10),r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n(24)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var i=n(2),r=n(14),o=n(1)("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||void 0==(n=i(s)[o])?e:r(n)}},function(t,e,n){var i=n(3),r=n(16),o=n(7),s=n(84),u="["+s+"]",a="​",l=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),f=function(t,e,n){var r={},u=o(function(){return!!s[t]()||a[t]()!=a}),l=r[t]=u?e(p):s[t];n&&(r[n]=l),i(i.P+i.F*u,"String",r)},p=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(c,"")),t};t.exports=f},function(t,e,n){var i,r,o,s=n(11),u=n(68),a=n(40),l=n(21),c=n(0),f=c.process,p=c.setImmediate,h=c.clearImmediate,d=c.MessageChannel,v=c.Dispatch,g=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},b=function(t){m.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++g]=function(){u("function"==typeof t?t:Function(t),e)},i(g),g},h=function(t){delete y[t]},"process"==n(9)(f)?i=function(t){f.nextTick(s(m,t,1))}:v&&v.now?i=function(t){v.now(s(m,t,1))}:d?(r=new d,o=r.port2,r.port1.onmessage=b,i=s(o.postMessage,o,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(i=function(t){c.postMessage(t+"","*")},c.addEventListener("message",b,!1)):i="onreadystatechange"in l("script")?function(t){a.appendChild(l("script")).onreadystatechange=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(s(m,t,1),0)}),t.exports={set:p,clear:h}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){"use strict";var i=n(3),r=n(20)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),i(i.P+i.F*o,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(36)("find")},function(t,e,n){"use strict";var i,r,o,s,u=n(24),a=n(0),l=n(11),c=n(38),f=n(3),p=n(5),h=n(14),d=n(61),v=n(66),g=n(50),y=n(52).set,m=n(75)(),b=n(43),_=n(80),x=n(86),w=n(48),S=a.TypeError,O=a.process,L=O&&O.versions,k=L&&L.v8||"",P=a.Promise,T="process"==c(O),V=function(){},E=r=b.f,A=!!function(){try{var t=P.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(V,V)};return(T||"function"==typeof PromiseRejectionEvent)&&t.then(V)instanceof e&&0!==k.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},D=function(t,e){if(!t._n){t._n=!0;var n=t._c;m(function(){for(var i=t._v,r=1==t._s,o=0;n.length>o;)!function(e){var n,o,s,u=r?e.ok:e.fail,a=e.resolve,l=e.reject,c=e.domain;try{u?(r||(2==t._h&&$(t),t._h=1),!0===u?n=i:(c&&c.enter(),n=u(i),c&&(c.exit(),s=!0)),n===e.promise?l(S("Promise-chain cycle")):(o=C(n))?o.call(n,a,l):a(n)):l(i)}catch(t){c&&!s&&c.exit(),l(t)}}(n[o++]);t._c=[],t._n=!1,e&&!t._h&&j(t)})}},j=function(t){y.call(a,function(){var e,n,i,r=t._v,o=N(t);if(o&&(e=_(function(){T?O.emit("unhandledRejection",r,t):(n=a.onunhandledrejection)?n({promise:t,reason:r}):(i=a.console)&&i.error&&i.error("Unhandled promise rejection",r)}),t._h=T||N(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},$=function(t){y.call(a,function(){var e;T?O.emit("rejectionHandled",t):(e=a.onrejectionhandled)&&e({promise:t,reason:t._v})})},F=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),D(e,!0))},M=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=C(t))?m(function(){var i={_w:n,_d:!1};try{e.call(t,l(M,i,1),l(F,i,1))}catch(t){F.call(i,t)}}):(n._v=t,n._s=1,D(n,!1))}catch(t){F.call({_w:n,_d:!1},t)}}};A||(P=function(t){d(this,P,"Promise","_h"),h(t),i.call(this);try{t(l(M,this,1),l(F,this,1))}catch(t){F.call(this,t)}},i=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},i.prototype=n(81)(P.prototype,{then:function(t,e){var n=E(g(this,P));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=T?O.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&D(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new i;this.promise=t,this.resolve=l(M,t,1),this.reject=l(F,t,1)},b.f=E=function(t){return t===P||t===s?new o(t):r(t)}),f(f.G+f.W+f.F*!A,{Promise:P}),n(26)(P,"Promise"),n(83)("Promise"),s=n(10).Promise,f(f.S+f.F*!A,"Promise",{reject:function(t){var e=E(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(u||!A),"Promise",{resolve:function(t){return w(u&&this===s?P:this,t)}}),f(f.S+f.F*!(A&&n(73)(function(t){P.all(t).catch(V)})),"Promise",{all:function(t){var e=this,n=E(e),i=n.resolve,r=n.reject,o=_(function(){var n=[],o=0,s=1;v(t,!1,function(t){var u=o++,a=!1;n.push(void 0),s++,e.resolve(t).then(function(t){a||(a=!0,n[u]=t,--s||i(n))},r)}),--s||i(n)});return o.e&&r(o.v),n.promise},race:function(t){var e=this,n=E(e),i=n.reject,r=_(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,i)})});return r.e&&i(r.v),n.promise}})},function(t,e,n){"use strict";var i=n(3),r=n(10),o=n(0),s=n(50),u=n(48);i(i.P+i.R,"Promise",{finally:function(t){var e=s(this,r.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then(function(){return n})}:t,n?function(n){return u(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";function i(t){n(99)}var r=n(35),o=n(101),s=n(100),u=i,a=s(r.a,o.a,!1,u,null,null);e.a=a.exports},function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a=i},function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(t)}e.a=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(34),r=(n.n(i),n(55)),o=(n.n(r),n(56)),s=(n.n(o),n(57)),u=n(32),a=n(33);n.d(e,"Multiselect",function(){return s.a}),n.d(e,"multiselectMixin",function(){return u.a}),n.d(e,"pointerMixin",function(){return a.a}),e.default=s.a},function(t,e){t.exports=function(t,e,n,i){if(!(t instanceof e)||void 0!==i&&i in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var i=n(14),r=n(28),o=n(23),s=n(19);t.exports=function(t,e,n,u,a){i(e);var l=r(t),c=o(l),f=s(l.length),p=a?f-1:0,h=a?-1:1;if(n<2)for(;;){if(p in c){u=c[p],p+=h;break}if(p+=h,a?p<0:f<=p)throw TypeError("Reduce of empty array with no initial value")}for(;a?p>=0:f>p;p+=h)p in c&&(u=e(u,c[p],p,l));return u}},function(t,e,n){var i=n(5),r=n(42),o=n(1)("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),i(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var i=n(63);t.exports=function(t,e){return new(i(t))(e)}},function(t,e,n){"use strict";var i=n(8),r=n(6),o=n(7),s=n(16),u=n(1);t.exports=function(t,e,n){var a=u(t),l=n(s,a,""[t]),c=l[0],f=l[1];o(function(){var e={};return e[a]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,c),i(RegExp.prototype,a,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},function(t,e,n){var i=n(11),r=n(70),o=n(69),s=n(2),u=n(19),a=n(87),l={},c={},e=t.exports=function(t,e,n,f,p){var h,d,v,g,y=p?function(){return t}:a(t),m=i(n,f,e?2:1),b=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for(h=u(t.length);h>b;b++)if((g=e?m(s(d=t[b])[0],d[1]):m(t[b]))===l||g===c)return g}else for(v=y.call(t);!(d=v.next()).done;)if((g=r(v,m,d.value,e))===l||g===c)return g};e.BREAK=l,e.RETURN=c},function(t,e,n){var i=n(5),r=n(82).set;t.exports=function(t,e,n){var o,s=e.constructor;return s!==n&&"function"==typeof s&&(o=s.prototype)!==n.prototype&&i(o)&&r&&r(t,o),t}},function(t,e){t.exports=function(t,e,n){var i=void 0===n;switch(e.length){case 0:return i?t():t.call(n);case 1:return i?t(e[0]):t.call(n,e[0]);case 2:return i?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return i?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return i?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var i=n(15),r=n(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},function(t,e,n){var i=n(2);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}}},function(t,e,n){"use strict";var i=n(44),r=n(25),o=n(26),s={};n(8)(s,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(s,{next:r(1,n)}),o(t,e+" Iterator")}},function(t,e,n){"use strict";var i=n(24),r=n(3),o=n(6),s=n(8),u=n(15),a=n(71),l=n(26),c=n(78),f=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,d,v,g,y){a(n,e,d);var m,b,_,x=function(t){if(!p&&t in L)return L[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",S="values"==v,O=!1,L=t.prototype,k=L[f]||L["@@iterator"]||v&&L[v],P=k||x(v),T=v?S?x("entries"):P:void 0,V="Array"==e?L.entries||k:k;if(V&&(_=c(V.call(new t)))!==Object.prototype&&_.next&&(l(_,w,!0),i||"function"==typeof _[f]||s(_,f,h)),S&&k&&"values"!==k.name&&(O=!0,P=function(){return k.call(this)}),i&&!y||!p&&!O&&L[f]||s(L,f,P),u[e]=P,u[w]=h,v)if(m={values:S?P:x("values"),keys:g?P:x("keys"),entries:T},y)for(b in m)b in L||o(L,b,m[b]);else r(r.P+r.F*(p||O),e,m);return m}},function(t,e,n){var i=n(1)("iterator"),r=!1;try{var o=[7][i]();o.return=function(){r=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var o=[7],s=o[i]();s.next=function(){return{done:n=!0}},o[i]=function(){return s},t(o)}catch(t){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var i=n(0),r=n(52).set,o=i.MutationObserver||i.WebKitMutationObserver,s=i.process,u=i.Promise,a="process"==n(9)(s);t.exports=function(){var t,e,n,l=function(){var i,r;for(a&&(i=s.domain)&&i.exit();t;){r=t.fn,t=t.next;try{r()}catch(i){throw t?n():e=void 0,i}}e=void 0,i&&i.enter()};if(a)n=function(){s.nextTick(l)};else if(!o||i.navigator&&i.navigator.standalone)if(u&&u.resolve){var c=u.resolve(void 0);n=function(){c.then(l)}}else n=function(){r.call(i,l)};else{var f=!0,p=document.createTextNode("");new o(l).observe(p,{characterData:!0}),n=function(){p.data=f=!f}}return function(i){var r={fn:i,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},function(t,e,n){var i=n(13),r=n(2),o=n(47);t.exports=n(4)?Object.defineProperties:function(t,e){r(t);for(var n,s=o(e),u=s.length,a=0;u>a;)i.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var i=n(46),r=n(22).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},function(t,e,n){var i=n(12),r=n(28),o=n(27)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var i=n(6);t.exports=function(t,e,n){for(var r in e)i(t,r,e[r],n);return t}},function(t,e,n){var i=n(5),r=n(2),o=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n(11)(Function.call,n(45).f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){"use strict";var i=n(0),r=n(13),o=n(4),s=n(1)("species");t.exports=function(t){var e=i[t];o&&e&&!e[s]&&r.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var i=n(53),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(0),r=i.navigator;t.exports=r&&r.userAgent||""},function(t,e,n){var i=n(38),r=n(1)("iterator"),o=n(15);t.exports=n(10).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]}},function(t,e,n){"use strict";var i=n(3),r=n(20)(2);i(i.P+i.F*!n(17)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var i=n(3),r=n(37)(!1),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(s||!n(17)(o)),"Array",{indexOf:function(t){return s?o.apply(this,arguments)||0:r(this,t,arguments[1])}})},function(t,e,n){var i=n(3);i(i.S,"Array",{isArray:n(42)})},function(t,e,n){"use strict";var i=n(3),r=n(20)(1);i(i.P+i.F*!n(17)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var i=n(3),r=n(62);i(i.P+i.F*!n(17)([].reduce,!0),"Array",{reduce:function(t){return r(this,t,arguments.length,arguments[1],!1)}})},function(t,e,n){var i=Date.prototype,r=i.toString,o=i.getTime;new Date(NaN)+""!="Invalid Date"&&n(6)(i,"toString",function(){var t=o.call(this);return t===t?r.call(this):"Invalid Date"})},function(t,e,n){n(4)&&"g"!=/./g.flags&&n(13).f(RegExp.prototype,"flags",{configurable:!0,get:n(39)})},function(t,e,n){n(65)("search",1,function(t,e,n){return[function(n){"use strict";var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},n]})},function(t,e,n){"use strict";n(94);var i=n(2),r=n(39),o=n(4),s=/./.toString,u=function(t){n(6)(RegExp.prototype,"toString",t,!0)};n(7)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?u(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?r.call(t):void 0)}):"toString"!=s.name&&u(function(){return s.call(this)})},function(t,e,n){"use strict";n(51)("trim",function(t){return function(){return t(this,3)}})},function(t,e,n){for(var i=n(34),r=n(47),o=n(6),s=n(0),u=n(8),a=n(15),l=n(1),c=l("iterator"),f=l("toStringTag"),p=a.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=r(h),v=0;v<d.length;v++){var g,y=d[v],m=h[y],b=s[y],_=b&&b.prototype;if(_&&(_[c]||u(_,c,p),_[f]||u(_,f,y),a[y]=p,m))for(g in i)_[g]||o(_,g,i[g],!0)}},function(t,e){},function(t,e){t.exports=function(t,e,n,i,r,o){var s,u=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,u=t.default);var l="function"==typeof u?u.options:u;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):i&&(c=i),c){var f=l.functional,p=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:s,exports:u,options:l}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove},attrs:{tabindex:t.searchable?-1:t.tabindex},on:{focus:function(e){t.activate()},blur:function(e){!t.searchable&&t.deactivate()},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerForward()):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerBackward()):null}],keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")||!t._k(e.keyCode,"tab",9,e.key,"Tab")?(e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate()}}},[t._t("caret",[n("div",{staticClass:"multiselect__select",on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}}})],{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),n("div",{ref:"tags",staticClass:"multiselect__tags"},[t._t("selection",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValues.length>0,expression:"visibleValues.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValues,function(e,i){return[t._t("tag",[n("span",{key:i,staticClass:"multiselect__tag"},[n("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),n("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keypress:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;n.preventDefault(),t.removeElement(e)},mousedown:function(n){n.preventDefault(),t.removeElement(e)}}})])],{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[t._t("limit",[n("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})])]:t._e()],{search:t.search,remove:t.removeElement,values:t.visibleValues,isOpen:t.isOpen}),t._v(" "),n("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),t._v(" "),t.searchable?n("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"nope",placeholder:t.placeholder,disabled:t.disabled,tabindex:t.tabindex},domProps:{value:t.search},on:{input:function(e){t.updateSearch(e.target.value)},focus:function(e){e.preventDefault(),t.activate()},blur:function(e){e.preventDefault(),t.deactivate()},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate()},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"]))return null;e.preventDefault(),t.pointerForward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"]))return null;e.preventDefault(),t.pointerBackward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete"]))return null;e.stopPropagation(),t.removeLastElement()}],keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null}}}):t._e(),t._v(" "),t.isSingleLabelVisible?n("span",{staticClass:"multiselect__single",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("singleLabel",[[t._v(t._s(t.currentOptionLabel))]],{option:t.singleValue})],2):t._e(),t._v(" "),t.isPlaceholderVisible?n("span",{staticClass:"multiselect__placeholder",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("placeholder",[t._v("\n          "+t._s(t.placeholder)+"\n        ")])],2):t._e()],2),t._v(" "),n("transition",{attrs:{name:"multiselect"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},attrs:{tabindex:"-1"},on:{focus:t.activate,mousedown:function(t){t.preventDefault()}}},[n("ul",{staticClass:"multiselect__content",style:t.contentStyle},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?n("li",[n("span",{staticClass:"multiselect__option"},[t._t("maxElements",[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")])],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,i){return n("li",{key:i,staticClass:"multiselect__element"},[e&&(e.$isLabel||e.$isDisabled)?t._e():n("span",{staticClass:"multiselect__option",class:t.optionHighlight(i,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(n){n.stopPropagation(),t.select(e)},mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.pointerSet(i)}}},[t._t("option",[n("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?n("span",{staticClass:"multiselect__option",class:t.groupHighlight(i,e),attrs:{"data-select":t.groupSelect&&t.selectGroupLabelText,"data-deselect":t.groupSelect&&t.deselectGroupLabelText},on:{mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.groupSelect&&t.pointerSet(i)},mousedown:function(n){n.preventDefault(),t.selectGroup(e)}}},[t._t("option",[n("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2):t._e()])}):t._e(),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noResult",[t._v("No elements found. Consider changing the search query.")],{search:t.search})],2)]),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoOptions&&0===t.options.length&&!t.search&&!t.loading,expression:"showNoOptions && (options.length === 0 && !search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noOptions",[t._v("List is empty.")])],2)]),t._v(" "),t._t("afterList")],2)])])],2)},r=[],o={render:i,staticRenderFns:r};e.a=o}])});

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
  * vue-router v3.1.6
  * (c) 2020 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ( true && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function isExtendedError (constructor, err) {
  return (
    err instanceof constructor ||
    // _name is to support IE9 too
    (err && (err.name === constructor.name || err._name === constructor._name))
  )
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
      if (vnodeData.routerView) {
        depth++;
      }
      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;
      if (cachedComponent) {
        // #2301
        // pass props
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
        }
        return h(cachedComponent, data, children)
      } else {
        // render previous empty view
        return h()
      }
    }

    var matched = route.matched[depth];
    var component = matched && matched.components[name];

    // render empty node if no matched route or no config component
    if (!matched || !component) {
      cache[name] = null;
      return h()
    }

    // cache component
    cache[name] = { component: component };

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive &&
        vnode.componentInstance &&
        vnode.componentInstance !== matched.instances[name]
      ) {
        matched.instances[name] = vnode.componentInstance;
      }
    };

    var configProps = matched.props && matched.props[name];
    // save route and configProps in cachce
    if (configProps) {
      extend(cache[name], {
        route: route,
        configProps: configProps
      });
      fillPropsinData(component, data, route, configProps);
    }

    return h(component, data, children)
  }
};

function fillPropsinData (component, data, route, configProps) {
  // resolve props
  var propsToPass = data.props = resolveProps(route, configProps);
  if (propsToPass) {
    // clone to prevent mutation
    propsToPass = data.props = extend({}, propsToPass);
    // pass non-declared props as attrs
    var attrs = data.attrs = data.attrs || {};
    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     true && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  params = params || {};
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string
    if (typeof params.pathMatch === 'string') { params[0] = params.pathMatch; }

    return filler(params, { pretty: true })
  } catch (e) {
    if (true) {
      // Fix #3072 no warn if `pathMatch` is string
      warn(typeof params.pathMatch === 'string', ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next._normalized) {
    return next
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;
    if (params && typeof params === 'object') {
      next.params = extend({}, params);
    }
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var noop = function () {};

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(
      this.to,
      current,
      this.append
    );
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback =
      globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback =
      globalExactActiveClass == null
        ? 'router-link-exact-active'
        : globalExactActiveClass;
    var activeClass =
      this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass =
      this.exactActiveClass == null
        ? exactActiveClassFallback
        : this.exactActiveClass;

    var compareTarget = route.redirectedFrom
      ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = { class: classes };

    var scopedSlot =
      !this.$scopedSlots.$hasNormal &&
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        href: href,
        route: route,
        navigate: handler,
        isActive: classes[activeClass],
        isExactActive: classes[exactActiveClass]
      });

    if (scopedSlot) {
      if (scopedSlot.length === 1) {
        return scopedSlot[0]
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        if (true) {
          warn(
            false,
            ("RouterLink with to=\"" + (this.to) + "\" is trying to use a scoped slot but it didn't provide exactly one child. Wrapping the content with a span element.")
          );
        }
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
      }
    }

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = (a.data = extend({}, a.data));
        aData.on = aData.on || {};
        // transform existing events in both objects into arrays so we can push later
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        // append new listeners for router-link
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }

        var aAttrs = (a.data.attrs = extend({}, a.data.attrs));
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  if (true) {
    // warn if routes do not include leading slashes
    var found = pathList
    // check for missing leading slash
      .filter(function (path) { return path && path.charAt(0) !== '*' && path.charAt(0) !== '/'; });

    if (found.length > 0) {
      var pathNames = found.map(function (path) { return ("- " + path); }).join('\n');
      warn(false, ("Non-nested routes must include a leading slash character. Fix the following routes: \n" + pathNames));
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(
        path || name
      )) + " cannot be a " + "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions =
    route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (
        route.name &&
        !route.redirect &&
        route.children.some(function (child) { return /^\/?$/.test(child.path); })
      ) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
            "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
            "the default child route will not be rendered. Remove the name from " +
            "this route and use the name of the default child route for named " +
            "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];
      if ( true && alias === path) {
        warn(
          false,
          ("Found an alias with the same value as the path: \"" + path + "\". You have to remove that alias. It will be ignored in development.")
        );
        // skip in dev to make it work
        continue
      }

      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ( true && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
          "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (
  path,
  pathToRegexpOptions
) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(
        !keys[key.name],
        ("Duplicate param keys in route with path: \"" + path + "\"")
      );
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (
  path,
  parent,
  strict
) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
      return _createRoute(record, location, redirectedFrom)
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

// use User Timing api (if present) for more accurate key precision
var Time =
  inBrowser && window.performance && window.performance.now
    ? window.performance
    : Date;

function genStateKey () {
  return Time.now().toFixed(3)
}

var _key = genStateKey();

function getStateKey () {
  return _key
}

function setStateKey (key) {
  return (_key = key)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
  // window.location.protocol + '//' + window.location.host
  // location.host contains the port and location.hostname doesn't
  var protocolAndPath = window.location.protocol + '//' + window.location.host;
  var absolutePath = window.location.href.replace(protocolAndPath, '');
  // preserve existing history state as it could be overriden by the user
  var stateCopy = extend({}, window.history.state);
  stateCopy.key = getStateKey();
  window.history.replaceState(stateCopy, '', absolutePath);
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(
      router,
      to,
      from,
      isPop ? position : null
    );

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll
        .then(function (shouldScroll) {
          scrollToPosition((shouldScroll), position);
        })
        .catch(function (err) {
          if (true) {
            assert(false, err.toString());
          }
        });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

var hashStartsWithNumberRE = /^#\d/;

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
      ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
      : document.querySelector(shouldScroll.selector);

    if (el) {
      var offset =
        shouldScroll.offset && typeof shouldScroll.offset === 'object'
          ? shouldScroll.offset
          : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState =
  inBrowser &&
  (function () {
    var ua = window.navigator.userAgent;

    if (
      (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
      ua.indexOf('Mobile Safari') !== -1 &&
      ua.indexOf('Chrome') === -1 &&
      ua.indexOf('Windows Phone') === -1
    ) {
      return false
    }

    return window.history && 'pushState' in window.history
  })();

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, '', url);
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           true && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

var NavigationDuplicated = /*@__PURE__*/(function (Error) {
  function NavigationDuplicated (normalizedLocation) {
    Error.call(this);
    this.name = this._name = 'NavigationDuplicated';
    // passing the message to super() doesn't seem to work in the transpiled version
    this.message = "Navigating to current location (\"" + (normalizedLocation.fullPath) + "\") is not allowed";
    // add a stack property so services like Sentry can correctly display it
    Object.defineProperty(this, 'stack', {
      value: new Error().stack,
      writable: true,
      configurable: true
    });
    // we could also have used
    // Error.captureStackTrace(this, this.constructor)
    // but it only exists on node and chrome
  }

  if ( Error ) NavigationDuplicated.__proto__ = Error;
  NavigationDuplicated.prototype = Object.create( Error && Error.prototype );
  NavigationDuplicated.prototype.constructor = NavigationDuplicated;

  return NavigationDuplicated;
}(Error));

// support IE9
NavigationDuplicated._name = 'NavigationDuplicated';

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (
  location,
  onComplete,
  onAbort
) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(
    route,
    function () {
      this$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1.ensureURL();

      // fire ready cbs once
      if (!this$1.ready) {
        this$1.ready = true;
        this$1.readyCbs.forEach(function (cb) {
          cb(route);
        });
      }
    },
    function (err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1.ready) {
        this$1.ready = true;
        this$1.readyErrorCbs.forEach(function (cb) {
          cb(err);
        });
      }
    }
  );
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    // after merging https://github.com/vuejs/vue-router/pull/2771 we
    // When the user navigates through history through back/forward buttons
    // we do not want to throw the error. We only throw it if directly calling
    // push/replace. That's why it's not included in isError
    if (!isExtendedError(NavigationDuplicated, err) && isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort(new NavigationDuplicated(route))
  }

  var ref = resolveQueue(
    this.current.matched,
    route.matched
  );
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(
    activated,
    'beforeRouteEnter',
    function (guard, _, match, key) {
      return bindEnterGuard(guard, match, key, cbs, isValid)
    }
  )
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
      next(cb);
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = /*@__PURE__*/(function (History) {
  function HTML5History (router, base) {
    var this$1 = this;

    History.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History ) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = /*@__PURE__*/(function (History) {
  function HashHistory (router, base, fallback) {
    History.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History ) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(
      supportsPushState ? 'popstate' : 'hashchange',
      function () {
        var current = this$1.current;
        if (!ensureSlash()) {
          return
        }
        this$1.transitionTo(getHash(), function (route) {
          if (supportsScroll) {
            handleScroll(this$1.router, route, current, true);
          }
          if (!supportsPushState) {
            replaceHash(route.fullPath);
          }
        });
      }
    );
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        pushHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        replaceHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) { return '' }

  href = href.slice(index + 1);
  // decode the hash but not the search or hash
  // as search(query) is already decoded
  // https://github.com/vuejs/vue-router/issues/2708
  var searchIndex = href.indexOf('?');
  if (searchIndex < 0) {
    var hashIndex = href.indexOf('#');
    if (hashIndex > -1) {
      href = decodeURI(href.slice(0, hashIndex)) + href.slice(hashIndex);
    } else { href = decodeURI(href); }
  } else {
    href = decodeURI(href.slice(0, searchIndex)) + href.slice(searchIndex);
  }

  return href
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/(function (History) {
  function AbstractHistory (router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History ) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
        this$1.index++;
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(
      route,
      function () {
        this$1.index = targetIndex;
        this$1.updateRoute(route);
      },
      function (err) {
        if (isExtendedError(NavigationDuplicated, err)) {
          this$1.index = targetIndex;
        }
      }
    );
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

   true && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1.apps.indexOf(app);
    if (index > -1) { this$1.apps.splice(index, 1); }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1.app === app) { this$1.app = this$1.apps[0] || null; }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.push(location, resolve, reject);
    })
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.replace(location, resolve, reject);
    })
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  current = current || this.history.current;
  var location = normalizeLocation(
    to,
    current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.1.6';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
/* harmony import */ var pages_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pages/App */ "./src/pages/App.vue");
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Card */ "./src/components/Card.vue");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css");
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_5__);





vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('Card', components_Card__WEBPACK_IMPORTED_MODULE_3__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('Multiselect', vue_multiselect__WEBPACK_IMPORTED_MODULE_4___default.a);

new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#app',
  router: _router__WEBPACK_IMPORTED_MODULE_1__["default"],
  render: function render(h) {
    return h(pages_App__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
});

/***/ }),

/***/ "./src/components/Card.vue":
/*!*********************************!*\
  !*** ./src/components/Card.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_vue_vue_type_template_id_54cdc180___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=54cdc180& */ "./src/components/Card.vue?vue&type=template&id=54cdc180&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Card_vue_vue_type_template_id_54cdc180___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Card_vue_vue_type_template_id_54cdc180___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Card.vue?vue&type=template&id=54cdc180&":
/*!****************************************************************!*\
  !*** ./src/components/Card.vue?vue&type=template&id=54cdc180& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_54cdc180___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=template&id=54cdc180& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Card.vue?vue&type=template&id=54cdc180&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_54cdc180___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_54cdc180___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/App.vue":
/*!***************************!*\
  !*** ./src/pages/App.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_992092a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=992092a6& */ "./src/pages/App.vue?vue&type=template&id=992092a6&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/pages/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ "./src/pages/App.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_992092a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_992092a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/App.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/pages/App.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/App.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************!*\
  !*** ./src/pages/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/App.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/App.vue?vue&type=template&id=992092a6&":
/*!**********************************************************!*\
  !*** ./src/pages/App.vue?vue&type=template&id=992092a6& ***!
  \**********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_992092a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=992092a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/App.vue?vue&type=template&id=992092a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_992092a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_992092a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");





var Color = function Color() {
  return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! pages/utils/Color.vue */ "./src/pages/utils/Color.vue"));
};

var Typography = function Typography() {
  return __webpack_require__.e(/*! import() */ 46).then(__webpack_require__.bind(null, /*! pages/utils/Typography.vue */ "./src/pages/utils/Typography.vue"));
};

var Display = function Display() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! pages/utils/Display.vue */ "./src/pages/utils/Display.vue"));
};

var Position = function Position() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! pages/utils/Position.vue */ "./src/pages/utils/Position.vue"));
};

var Spacing = function Spacing() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! pages/utils/Spacing.vue */ "./src/pages/utils/Spacing.vue"));
};

var Width = function Width() {
  return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! pages/utils/Width.vue */ "./src/pages/utils/Width.vue"));
};

var Height = function Height() {
  return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! pages/utils/Height.vue */ "./src/pages/utils/Height.vue"));
};

var Effect = function Effect() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! pages/utils/Effect.vue */ "./src/pages/utils/Effect.vue"));
};

var Interactivity = function Interactivity() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! pages/utils/Interactivity.vue */ "./src/pages/utils/Interactivity.vue"));
};

var Animation = function Animation() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! pages/utils/Animation.vue */ "./src/pages/utils/Animation.vue"));
};

var Rounded = function Rounded() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! pages/utils/Rounded.vue */ "./src/pages/utils/Rounded.vue"));
};

var Float = function Float() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! pages/utils/Float.vue */ "./src/pages/utils/Float.vue"));
};

var Overflow = function Overflow() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! pages/utils/Overflow.vue */ "./src/pages/utils/Overflow.vue"));
};

var Zindex = function Zindex() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, /*! pages/utils/Z-index.vue */ "./src/pages/utils/Z-index.vue"));
};

var Responsive = function Responsive() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, /*! pages/utils/Responsive.vue */ "./src/pages/utils/Responsive.vue"));
};

var Flexbox = function Flexbox() {
  return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! pages/utils/Flexbox.vue */ "./src/pages/utils/Flexbox.vue"));
};

var FlexboxIntro = function FlexboxIntro() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, /*! pages/utils/flexbox/Intro.vue */ "./src/pages/utils/flexbox/Intro.vue"));
};

var FlexboxDirection = function FlexboxDirection() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, /*! pages/utils/flexbox/Direction.vue */ "./src/pages/utils/flexbox/Direction.vue"));
};

var FlexboxWrap = function FlexboxWrap() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, /*! pages/utils/flexbox/Wrap.vue */ "./src/pages/utils/flexbox/Wrap.vue"));
};

var FlexboxAlignItems = function FlexboxAlignItems() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, /*! pages/utils/flexbox/AlignItems.vue */ "./src/pages/utils/flexbox/AlignItems.vue"));
};

var FlexboxAlignContent = function FlexboxAlignContent() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, /*! pages/utils/flexbox/AlignContent.vue */ "./src/pages/utils/flexbox/AlignContent.vue"));
};

var FlexboxAlignSelf = function FlexboxAlignSelf() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, /*! pages/utils/flexbox/AlignSelf.vue */ "./src/pages/utils/flexbox/AlignSelf.vue"));
};

var FlexboxJustifyContent = function FlexboxJustifyContent() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(32)]).then(__webpack_require__.bind(null, /*! pages/utils/flexbox/JustifyContent.vue */ "./src/pages/utils/flexbox/JustifyContent.vue"));
};

var FlexboxFlex = function FlexboxFlex() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! pages/utils/flexbox/Flex.vue */ "./src/pages/utils/flexbox/Flex.vue"));
};

var FlexboxFlexGrow = function FlexboxFlexGrow() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, /*! pages/utils/flexbox/FlexGrow.vue */ "./src/pages/utils/flexbox/FlexGrow.vue"));
};

var FlexboxFlexShrink = function FlexboxFlexShrink() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, /*! pages/utils/flexbox/FlexShrink.vue */ "./src/pages/utils/flexbox/FlexShrink.vue"));
};

var FlexboxFlexBasic = function FlexboxFlexBasic() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, /*! pages/utils/flexbox/FlexBasic.vue */ "./src/pages/utils/flexbox/FlexBasic.vue"));
};

var FlexboxOrder = function FlexboxOrder() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(33)]).then(__webpack_require__.bind(null, /*! pages/utils/flexbox/Order.vue */ "./src/pages/utils/flexbox/Order.vue"));
};

var Text = function Text() {
  return __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! pages/utils/text.vue */ "./src/pages/utils/text.vue"));
};

var TextColor = function TextColor() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(37)]).then(__webpack_require__.bind(null, /*! pages/utils/text/Color.vue */ "./src/pages/utils/text/Color.vue"));
};

var TextSize = function TextSize() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(40)]).then(__webpack_require__.bind(null, /*! pages/utils/text/Size.vue */ "./src/pages/utils/text/Size.vue"));
};

var TextWeight = function TextWeight() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(41)]).then(__webpack_require__.bind(null, /*! pages/utils/text/Weight.vue */ "./src/pages/utils/text/Weight.vue"));
};

var TextAlignment = function TextAlignment() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(36)]).then(__webpack_require__.bind(null, /*! pages/utils/text/Alignment.vue */ "./src/pages/utils/text/Alignment.vue"));
};

var TextDecoration = function TextDecoration() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(38)]).then(__webpack_require__.bind(null, /*! pages/utils/text/Decoration.vue */ "./src/pages/utils/text/Decoration.vue"));
};

var TextLineHeight = function TextLineHeight() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(39)]).then(__webpack_require__.bind(null, /*! pages/utils/text/LineHeight.vue */ "./src/pages/utils/text/LineHeight.vue"));
};

var Border = function Border() {
  return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! pages/utils/Border.vue */ "./src/pages/utils/Border.vue"));
};

var BorderColor = function BorderColor() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! pages/utils/border/Color.vue */ "./src/pages/utils/border/Color.vue"));
};

var BorderStyle = function BorderStyle() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, /*! pages/utils/border/Style.vue */ "./src/pages/utils/border/Style.vue"));
};

var BorderWidth = function BorderWidth() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, /*! pages/utils/border/Width.vue */ "./src/pages/utils/border/Width.vue"));
};

var Transition = function Transition() {
  return __webpack_require__.e(/*! import() */ 42).then(__webpack_require__.bind(null, /*! pages/vue/Transition.vue */ "./src/pages/vue/Transition.vue"));
};

var NotFound = function NotFound() {
  return __webpack_require__.e(/*! import() */ 44).then(__webpack_require__.bind(null, /*! pages/NotFound.vue */ "./src/pages/NotFound.vue"));
};

var Welcome = function Welcome() {
  return __webpack_require__.e(/*! import() */ 45).then(__webpack_require__.bind(null, /*! pages/Welcome.vue */ "./src/pages/Welcome.vue"));
};

vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]({
  routes: [{
    path: '*',
    component: NotFound
  }, {
    path: '/',
    component: Welcome
  }, {
    path: '/flexbox',
    component: Flexbox,
    children: [{
      path: 'intro',
      component: FlexboxIntro
    }, {
      path: 'direction',
      component: FlexboxDirection
    }, {
      path: 'wrap',
      component: FlexboxWrap
    }, {
      path: 'align-items',
      component: FlexboxAlignItems
    }, {
      path: 'align-content',
      component: FlexboxAlignContent
    }, {
      path: 'align-self',
      component: FlexboxAlignSelf
    }, {
      path: 'justify-content',
      component: FlexboxJustifyContent
    }, {
      path: 'flex',
      component: FlexboxFlex
    }, {
      path: 'flex-grow',
      component: FlexboxFlexGrow
    }, {
      path: 'flex-shrink',
      component: FlexboxFlexShrink
    }, {
      path: 'flex-basic',
      component: FlexboxFlexBasic
    }, {
      path: 'order',
      component: FlexboxOrder
    }]
  }, {
    path: '/color',
    component: Color
  }, {
    path: '/typography',
    component: Typography
  }, {
    path: '/display',
    component: Display
  }, {
    path: '/position',
    component: Position
  }, {
    path: '/text',
    component: Text,
    children: [{
      path: 'color',
      component: TextColor
    }, {
      path: 'size',
      component: TextSize
    }, {
      path: 'weigth',
      component: TextWeight
    }, {
      path: 'alignment',
      component: TextAlignment
    }, {
      path: 'decoration',
      component: TextDecoration
    }, {
      path: 'line-height',
      component: TextLineHeight
    }]
  },, {
    path: '/border',
    component: Border,
    children: [{
      path: 'color',
      component: BorderColor
    }, {
      path: 'style',
      component: BorderStyle
    }, {
      path: 'width',
      component: BorderWidth
    }]
  }, {
    path: '/spacing',
    component: Spacing
  }, {
    path: '/width',
    component: Width
  }, {
    path: '/height',
    component: Height
  }, {
    path: '/effect',
    component: Effect
  }, {
    path: '/overflow',
    component: Overflow
  }, {
    path: '/interactivity',
    component: Interactivity
  }, {
    path: '/animation',
    component: Animation
  }, {
    path: '/float',
    component: Float
  }, {
    path: '/zindex',
    component: Zindex
  }, {
    path: '/rounded',
    component: Rounded
  }, {
    path: '/transition',
    component: Transition
  }, {
    path: '/responsive',
    component: Responsive
  }]
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./static/fonts/Montserrat/style.css":
/*!*******************************************!*\
  !*** ./static/fonts/Montserrat/style.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./static/fonts/Montserrat/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./src/app ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\apvhn\OneDrive - Agfa Gevaert\Documents\git\beta-scss-documentation\src\app */"./src/app.js");


/***/ })

/******/ });