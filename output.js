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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/graf1.js":
/*!*********************!*\
  !*** ./js/graf1.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Highcharts.chart('graf1', {\n  chart: {\n    type: 'column'\n  },\n  title: {\n    text: 'Češi na třetím místě'\n  },\n  subtitle: {\n    text: 'Účast europoslanců při (jmenovitých) hlasováních v Evropském parlamentu 2014–2019'\n  },\n  xAxis: {\n    categories: [\"Rakousko\", \"Malta\", \"Česká republika\", \"Belgie\", \"Portugalsko\", \"Slovensko\", \"Polsko\", \"Chorvatsko\", \"Slovinsko\", \"Nizozemsko\", \"Francie\", \"Španělsko\", \"Německo\", \"Lucembursko\", \"Irsko\", \"Švédsko\", \"Estonsko\", \"Bulharsko\", \"Itálie\", \"Dánsko\", \"Rumunsko\", \"Finsko\", \"Litva\", \"Kypr\", \"Řecko\", \"Maďarsko\", \"Lotyšsko\", \"Británie\"],\n    crosshair: true\n  },\n  yAxis: {\n    min: 50,\n    title: {\n      text: 'průměrná účast v procentech'\n    }\n  },\n  credits: {\n    text: \"Zdroj: votewatch.eu\",\n    href: \"https://www.votewatch.eu/en/term8-member-states-attendance.html#/#0/0/2014-07-01/2019-08-01\"\n  },\n  tooltip: {\n    shared: true,\n    valueSuffix: \" %\"\n  },\n  plotOptions: {},\n  legend: {\n    enabled: false\n  },\n  series: [{\n    name: 'průměrná účast',\n    data: [95.11, 94.75, {\n      y: 92.29,\n      color: \"#d52834\",\n      dataLabels: {\n        enabled: true,\n        format: '{y} %',\n        rotation: 270,\n        inside: true,\n        y: -75\n      }\n    }, 92.17, 91.73, 91.51, 91.38, 91.37, 91.36, 90.70, 90.16, 89.61, 89.12, 89.08, 88.98, 88.35, 87.98, 87.92, 87.82, 87.26, 86.63, 85.45, 85.33, 84.14, 83.72, 83.13, 82.83, 82.17],\n    color: \"#C0C0C0\"\n  }]\n});\n\n//# sourceURL=webpack:///./js/graf1.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _targetblank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./targetblank */ \"./js/targetblank.js\");\n/* harmony import */ var _targetblank__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_targetblank__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graf1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graf1 */ \"./js/graf1.js\");\n/* harmony import */ var _graf1__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_graf1__WEBPACK_IMPORTED_MODULE_1__);\n // pro otvírání odkazů v novém okně\n\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./js/targetblank.js":
/*!***************************!*\
  !*** ./js/targetblank.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var links = document.getElementsByTagName(\"a\");\n  Array.prototype.forEach.call(links, function (link) {\n    if (link.hostname !== window.location.hostname) {\n      link.target = \"_blank\";\n      link.rel = \"noopener noreferrer\";\n    }\n  });\n});\n\n//# sourceURL=webpack:///./js/targetblank.js?");

/***/ })

/******/ });