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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Population = __webpack_require__(/*! ./population */ \"./src/population.js\");\n\nconsole.log('Webpack is working!');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/individual.js":
/*!***************************!*\
  !*** ./src/individual.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Individual {\n  constructor(...coordinates) {\n    this.geneCount = coordinates.length;\n    this.genes = {};\n    \n    let shuffledCoords = coordinates.shuffle();\n    console.log(shuffledCoords);\n    let startPoint = shuffledCoords.pop();\n    let loopCounts = shuffledCoords.length\n    for (let i = 0; i < loopCounts; i++) {\n      let endPoint = shuffledCoords.pop();\n      this.genes[i] = [startPoint, endPoint];\n      // console.log(startPoint);\n      // console.log(endPoint);\n      startPoint = endPoint\n    };\n    \n    this.fitness = this.calculateFitness();\n    console.log(shuffledCoords);\n    console.log(this.genes);\n    console.log(`fitness: ${this.fitness}`)\n  }\n\n  calculateFitness() {\n    let sumDistance = 0;\n    Object.values(this.genes).forEach(gene => {\n      let startPoint = gene[0];\n      let endPoint = gene[1];\n      sumDistance += Math.sqrt((startPoint[0]-endPoint[0])**2 + (startPoint[1] - endPoint[1])**2)\n    })\n    console.log(sumDistance);\n    return sumDistance;\n  }\n}\n\n// Shuffle via Fisher-Yates algorithm\nArray.prototype.shuffle = function() {\n  let currentIdx = this.length;\n  let randomIdx;\n\n  while (currentIdx) {\n    randomIdx = Math.floor(Math.random() * currentIdx);\n    currentIdx -= 1;\n    [this[currentIdx], this[randomIdx]] = [this[randomIdx], this[currentIdx]]\n  }\n\n  return this;\n};\n\nlet i = new Individual([1, 2,], [2, 3], [3, 3], [8, 4], [9, 4], [10, 17], [6, 6])\ni.calculateFitness();\n\nlet i2 = new Individual([0, 0], [4, 0], [4, 4], [0, 4]);\ni2.calculateFitness();\n\nmodule.exports = Individual;\n\n//# sourceURL=webpack:///./src/individual.js?");

/***/ }),

/***/ "./src/population.js":
/*!***************************!*\
  !*** ./src/population.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Individual = __webpack_require__(/*! ./individual */ \"./src/individual.js\");\n\nclass Population {\n  constructor(...individuals) {\n\n  }\n}\n\nmodule.exports = Population;\n\n//# sourceURL=webpack:///./src/population.js?");

/***/ })

/******/ });