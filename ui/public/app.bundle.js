/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/App.js":
/*!***********************!*\
  !*** ./public/App.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: [BABEL] D:\\CS5610\\CS5610\\FakeRisk\\ui\\public\\App.js: Could not find plugin \"proposal-class-static-block\". Ensure there is an entry in ./available-plugins.js for it. (While processing: \"D:\\\\CS5610\\\\CS5610\\\\FakeRisk\\\\ui\\\\node_modules\\\\@babel\\\\preset-env\\\\lib\\\\index.js\")\n    at getPlugin (D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\@babel\\preset-env\\lib\\index.js:67:11)\n    at D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\@babel\\preset-env\\lib\\index.js:258:62\n    at Array.map (<anonymous>)\n    at D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\@babel\\preset-env\\lib\\index.js:258:43\n    at D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\@babel\\helper-plugin-utils\\lib\\index.js:22:12\n    at async (D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\@babel\\core\\lib\\gensync-utils\\async.js:43:33)\n    at async (D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\gensync\\index.js:186:15)\n    at D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\gensync\\index.js:216:13\n    at Generator.next (<anonymous>)\n    at D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\@babel\\core\\lib\\config\\full.js:217:21\n    at Generator.next (<anonymous>)\n    at Function.<anonymous> (D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\@babel\\core\\lib\\gensync-utils\\async.js:24:3)\n    at Generator.next (<anonymous>)\n    at step (D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\gensync\\index.js:269:25)\n    at evaluateAsync (D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\gensync\\index.js:291:5)\n    at Function.errback (D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\gensync\\index.js:113:7)\n    at errback (D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\@babel\\core\\lib\\gensync-utils\\async.js:71:18)\n    at async (D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\gensync\\index.js:188:17)\n    at onFirstPause (D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\gensync\\index.js:216:13)\n    at Generator.next (<anonymous>)\n    at cachedFunction (D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\@babel\\core\\lib\\config\\caching.js:66:46)\n    at cachedFunction.next (<anonymous>)\n    at loadPresetDescriptor (D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\@babel\\core\\lib\\config\\full.js:313:43)\n    at loadPresetDescriptor.next (<anonymous>)\n    at recursePresetDescriptors (D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\@babel\\core\\lib\\config\\full.js:114:30)\n    at recursePresetDescriptors.next (<anonymous>)\n    at D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\@babel\\core\\lib\\config\\full.js:191:21\n    at Generator.next (<anonymous>)\n    at loadFullConfig (D:\\CS5610\\CS5610\\FakeRisk\\ui\\node_modules\\@babel\\core\\lib\\config\\full.js:144:5)\n    at loadFullConfig.next (<anonymous>)");

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map