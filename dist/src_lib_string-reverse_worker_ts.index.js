/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/worker-loader/dist/runtime/inline.js":
/*!***********************************************************!*\
  !*** ./node_modules/worker-loader/dist/runtime/inline.js ***!
  \***********************************************************/
/***/ ((module) => {



/* eslint-env browser */

/* eslint-disable no-undef, no-use-before-define, new-cap */
module.exports = function (content, workerConstructor, workerOptions, url) {
  var globalScope = self || window;

  try {
    try {
      var blob;

      try {
        // New API
        blob = new globalScope.Blob([content]);
      } catch (e) {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = globalScope.BlobBuilder || globalScope.WebKitBlobBuilder || globalScope.MozBlobBuilder || globalScope.MSBlobBuilder;
        blob = new BlobBuilder();
        blob.append(content);
        blob = blob.getBlob();
      }

      var URL = globalScope.URL || globalScope.webkitURL;
      var objectURL = URL.createObjectURL(blob);
      var worker = new globalScope[workerConstructor](objectURL, workerOptions);
      URL.revokeObjectURL(objectURL);
      return worker;
    } catch (e) {
      return new globalScope[workerConstructor]("data:application/javascript,".concat(encodeURIComponent(content)), workerOptions);
    }
  } catch (e) {
    if (!url) {
      throw Error("Inline worker is not supported");
    }

    return new globalScope[workerConstructor](url, workerOptions);
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./src/lib/string-reverse.worker.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Worker_fn)
/* harmony export */ });
/* harmony import */ var _node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../node_modules/worker-loader/dist/runtime/inline.js */ "./node_modules/worker-loader/dist/runtime/inline.js");
/* harmony import */ var _node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0__);



function Worker_fn() {
  return _node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0___default()("/******/ (() => { // webpackBootstrap\n/******/ \t\"use strict\";\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ \"./node_modules/babel-loader/lib/index.js!./src/lib/string-reverse.worker.ts\":\n/*!***********************************************************************************!*\\\n  !*** ./node_modules/babel-loader/lib/index.js!./src/lib/string-reverse.worker.ts ***!\n  \\***********************************************************************************/\n/***/ ((module, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_string_reverse_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wasm/string-reverse.wasm */ \"./src/wasm/string-reverse.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wasm_string_reverse_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_wasm_string_reverse_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-ignore\n\n/**\n * Web worker used to call wasm with input to reverse\n */\n\nself.onmessage = function (e) {\n  // prepare memory\n  var input = e.data;\n  var memory = _wasm_string_reverse_wasm__WEBPACK_IMPORTED_MODULE_0__.memory;\n  var array = new Uint8Array(memory.buffer, 0, input.length);\n\n  for (var i = 0; i < input.length; ++i) {\n    array[i] = input.charCodeAt(i);\n  } // call string reverse and notify result\n\n\n  _wasm_string_reverse_wasm__WEBPACK_IMPORTED_MODULE_0__.stringReverse(input.length, array.byteOffset);\n  postMessage(new TextDecoder(\"utf8\").decode(array));\n}; // notify main thread worker is ready to be used\n\n\npostMessage(\"ready\");\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n/***/ }),\n\n/***/ \"./src/wasm/string-reverse.wasm\":\n/*!**************************************!*\\\n  !*** ./src/wasm/string-reverse.wasm ***!\n  \\**************************************/\n/***/ ((module, exports, __webpack_require__) => {\n\nmodule.exports = __webpack_require__.v(exports, module.id, \"af0ff64f74f215f2ce3f\");\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t// The module cache\n/******/ \tvar __webpack_module_cache__ = {};\n/******/ \t\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/ \t\t// Check if module is in cache\n/******/ \t\tvar cachedModule = __webpack_module_cache__[moduleId];\n/******/ \t\tif (cachedModule !== undefined) {\n/******/ \t\t\treturn cachedModule.exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = __webpack_module_cache__[moduleId] = {\n/******/ \t\t\tid: moduleId,\n/******/ \t\t\t// no module.loaded needed\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/ \t\n/******/ \t\t// Execute the module function\n/******/ \t\t__webpack_modules__[moduleId](module, module.exports, __webpack_require__);\n/******/ \t\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/ \t\n/************************************************************************/\n/******/ \t/* webpack/runtime/async module */\n/******/ \t(() => {\n/******/ \t\tvar webpackQueues = typeof Symbol === \"function\" ? Symbol(\"webpack queues\") : \"__webpack_queues__\";\n/******/ \t\tvar webpackExports = typeof Symbol === \"function\" ? Symbol(\"webpack exports\") : \"__webpack_exports__\";\n/******/ \t\tvar webpackError = typeof Symbol === \"function\" ? Symbol(\"webpack error\") : \"__webpack_error__\";\n/******/ \t\tvar resolveQueue = (queue) => {\n/******/ \t\t\tif(queue && !queue.d) {\n/******/ \t\t\t\tqueue.d = 1;\n/******/ \t\t\t\tqueue.forEach((fn) => (fn.r--));\n/******/ \t\t\t\tqueue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));\n/******/ \t\t\t}\n/******/ \t\t}\n/******/ \t\tvar wrapDeps = (deps) => (deps.map((dep) => {\n/******/ \t\t\tif(dep !== null && typeof dep === \"object\") {\n/******/ \t\t\t\tif(dep[webpackQueues]) return dep;\n/******/ \t\t\t\tif(dep.then) {\n/******/ \t\t\t\t\tvar queue = [];\n/******/ \t\t\t\t\tqueue.d = 0;\n/******/ \t\t\t\t\tdep.then((r) => {\n/******/ \t\t\t\t\t\tobj[webpackExports] = r;\n/******/ \t\t\t\t\t\tresolveQueue(queue);\n/******/ \t\t\t\t\t}, (e) => {\n/******/ \t\t\t\t\t\tobj[webpackError] = e;\n/******/ \t\t\t\t\t\tresolveQueue(queue);\n/******/ \t\t\t\t\t});\n/******/ \t\t\t\t\tvar obj = {};\n/******/ \t\t\t\t\tobj[webpackQueues] = (fn) => (fn(queue));\n/******/ \t\t\t\t\treturn obj;\n/******/ \t\t\t\t}\n/******/ \t\t\t}\n/******/ \t\t\tvar ret = {};\n/******/ \t\t\tret[webpackQueues] = x => {};\n/******/ \t\t\tret[webpackExports] = dep;\n/******/ \t\t\treturn ret;\n/******/ \t\t}));\n/******/ \t\t__webpack_require__.a = (module, body, hasAwait) => {\n/******/ \t\t\tvar queue;\n/******/ \t\t\thasAwait && ((queue = []).d = 1);\n/******/ \t\t\tif(queue) queue.moduleId = module.id;\n/******/ \t\t\tvar depQueues = new Set();\n/******/ \t\t\tvar exports = module.exports;\n/******/ \t\t\tvar currentDeps;\n/******/ \t\t\tvar outerResolve;\n/******/ \t\t\tvar reject;\n/******/ \t\t\tvar promise = new Promise((resolve, rej) => {\n/******/ \t\t\t\treject = rej;\n/******/ \t\t\t\touterResolve = resolve;\n/******/ \t\t\t});\n/******/ \t\t\tpromise[webpackExports] = exports;\n/******/ \t\t\tpromise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise[\"catch\"](x => {}));\n/******/ \t\t\tpromise.moduleId = module.id;\n/******/ \t\t\tmodule.exports = promise;\n/******/ \t\t\tbody((deps) => {\n/******/ \t\t\t\tcurrentDeps = wrapDeps(deps);\n/******/ \t\t\t\tvar fn;\n/******/ \t\t\t\tvar getResult = () => (currentDeps.map((d) => {\n/******/ \t\t\t\t\tif(d[webpackError]) throw d[webpackError];\n/******/ \t\t\t\t\treturn d[webpackExports];\n/******/ \t\t\t\t}))\n/******/ \t\t\t\tvar promise = new Promise((resolve) => {\n/******/ \t\t\t\t\tfn = () => (resolve(getResult));\n/******/ \t\t\t\t\tfn.r = 0;\n/******/ \t\t\t\t\tvar fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));\n/******/ \t\t\t\t\tcurrentDeps.map((dep) => (dep[webpackQueues](fnQueue)));\n/******/ \t\t\t\t});\n/******/ \t\t\t\treturn fn.r ? promise : getResult();\n/******/ \t\t\t}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));\n/******/ \t\t\tqueue && (queue.d = 0);\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/global */\n/******/ \t(() => {\n/******/ \t\t__webpack_require__.g = (function() {\n/******/ \t\t\tif (typeof globalThis === 'object') return globalThis;\n/******/ \t\t\ttry {\n/******/ \t\t\t\treturn this || new Function('return this')();\n/******/ \t\t\t} catch (e) {\n/******/ \t\t\t\tif (typeof window === 'object') return window;\n/******/ \t\t\t}\n/******/ \t\t})();\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/make namespace object */\n/******/ \t(() => {\n/******/ \t\t// define __esModule on exports\n/******/ \t\t__webpack_require__.r = (exports) => {\n/******/ \t\t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t\t}\n/******/ \t\t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/wasm loading */\n/******/ \t(() => {\n/******/ \t\t__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {\n/******/ \t\t\tvar req = fetch(__webpack_require__.p + \"\" + wasmModuleHash + \".module.wasm\");\n/******/ \t\t\tif (typeof WebAssembly.instantiateStreaming === 'function') {\n/******/ \t\t\t\treturn WebAssembly.instantiateStreaming(req, importsObj)\n/******/ \t\t\t\t\t.then((res) => (Object.assign(exports, res.instance.exports)));\n/******/ \t\t\t}\n/******/ \t\t\treturn req\n/******/ \t\t\t\t.then((x) => (x.arrayBuffer()))\n/******/ \t\t\t\t.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))\n/******/ \t\t\t\t.then((res) => (Object.assign(exports, res.instance.exports)));\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/publicPath */\n/******/ \t(() => {\n/******/ \t\tvar scriptUrl;\n/******/ \t\tif (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + \"\";\n/******/ \t\tvar document = __webpack_require__.g.document;\n/******/ \t\tif (!scriptUrl && document) {\n/******/ \t\t\tif (document.currentScript)\n/******/ \t\t\t\tscriptUrl = document.currentScript.src\n/******/ \t\t\tif (!scriptUrl) {\n/******/ \t\t\t\tvar scripts = document.getElementsByTagName(\"script\");\n/******/ \t\t\t\tif(scripts.length) scriptUrl = scripts[scripts.length - 1].src\n/******/ \t\t\t}\n/******/ \t\t}\n/******/ \t\t// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration\n/******/ \t\t// or pass an empty string (\"\") and set the __webpack_public_path__ variable from your code to use your own logic.\n/******/ \t\tif (!scriptUrl) throw new Error(\"Automatic publicPath is not supported in this browser\");\n/******/ \t\tscriptUrl = scriptUrl.replace(/#.*$/, \"\").replace(/\\?.*$/, \"\").replace(/\\/[^\\/]+$/, \"/\");\n/******/ \t\t__webpack_require__.p = scriptUrl;\n/******/ \t})();\n/******/ \t\n/************************************************************************/\n/******/ \t\n/******/ \t// startup\n/******/ \t// Load entry module and return exports\n/******/ \t// This entry module used 'module' so it can't be inlined\n/******/ \tvar __webpack_exports__ = __webpack_require__(\"./node_modules/babel-loader/lib/index.js!./src/lib/string-reverse.worker.ts\");\n/******/ \t\n/******/ })()\n;\n", "Worker", undefined, undefined);
}

})();

/******/ })()
;
//# sourceMappingURL=src_lib_string-reverse_worker_ts.index.js.map