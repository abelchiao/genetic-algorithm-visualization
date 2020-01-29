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

eval("const Population = __webpack_require__(/*! ./population */ \"./src/population.js\");\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  let canvas = document.getElementById('canvas');\n  let ctx = canvas.getContext('2d');\n  ctx.fillStyle = 'red';\n  ctx.fillRect(100, 100, 400, 300); \n  console.log('DOM fully loaded and parsed');\n})\n\nconsole.log('Webpack is working!');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/individual.js":
/*!***************************!*\
  !*** ./src/individual.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Individual {\n  constructor(...coordinates) {\n    this.geneCount = coordinates.length;\n    this.chromosome = coordinates.slice()\n    this.calculateFitness();\n\n    console.log(`fitness: ${this.fitness}`)\n    console.log('distance: ', this.distance)\n    // Code from dealing with chromosome as array of vectors rather than relying on orderered array\n    // let startPoint = shuffledCoords.pop();\n    // let loopCounts = shuffledCoords.length\n    // for (let i = 0; i < loopCounts; i++) {\n    //   let endPoint = shuffledCoords.pop();\n    //   this.genes[i] = [startPoint, endPoint];\n    //   // console.log(startPoint);\n    //   // console.log(endPoint);\n    //   startPoint = endPoint\n    // };\n  }\n\n  // refactor to normalize fitness values - logic may need to be at population level\n  calculateFitness() {\n    let sumDist = 0;\n    for (let i = 0; i < this.chromosome.length - 1; i++) {\n      sumDist += getDistance(this.chromosome[i], this.chromosome[i+1])\n    }\n    sumDist += getDistance(this.chromosome[0], this.chromosome.slice(-1)[0])\n    this.fitness = 1 / sumDist\n    this.distance = sumDist;\n    return 1 / sumDist;\n  }\n\n  mutate(mutProb) {\n    // console.log(JSON.stringify(this.chromosome))\n    if (Math.random() < mutProb) {\n      let idx1 = Math.floor(Math.random() * this.chromosome.length);\n      let idx2 = Math.floor(Math.random() * this.chromosome.length);\n      while (idx1 === idx2) idx2 = Math.floor(Math.random() * this.chromosome.length);\n      [this.chromosome[idx1], this.chromosome[idx2]] = \n        [this.chromosome[idx2], this.chromosome[idx1]];\n      // console.log(idx1, idx2)\n    }\n    // console.log(JSON.stringify(this.chromosome))\n    this.calculateFitness();\n    return this.chromosome\n  }\n\n  // i'm so sorry\n  mate(crossProb, otherInd) {\n    console.log('parent 1 chromosome: ', this.chromosome)\n    if (Math.random() < crossProb) {\n      let childChromosomes = [];\n      while (childChromosomes.length < 2) {\n        let idx1 = Math.floor(Math.random() * this.chromosome.length);\n        while (idx1 >= this.chromosome.length - 1) {\n          idx1 = Math.floor(Math.random() * this.chromosome.length);\n        }\n        let idx2 = idx1 + Math.ceil(Math.random() * (this.chromosome.length - idx1));\n        let segment = this.chromosome.slice(idx1, idx2);\n        console.log('transplanted segment: ', segment)\n        console.log(idx1, idx2)\n        let childChromosome = new Array(this.chromosome.length)\n        // inserts random segment of this parent into child at same indices\n        for (let i = idx1; i < idx2; i ++) {\n          childChromosome[i] = this.chromosome[i];\n        }\n        // re-arranges parent 2 to make filling child chromosome easier\n        let reorderedSecondParent = [];\n        for (let i = 0; i < this.chromosome.length; i++) {\n          reorderedSecondParent[i] = otherInd.chromosome[(idx2+i) % this.chromosome.length];\n        }\n        console.log('childChrom before completion: ', childChromosome)\n        let childIdx = idx2;\n        reorderedSecondParent.forEach(gene => {\n          if (!childChromosome.some(ele => JSON.stringify(ele) === JSON.stringify(gene))) {\n            childChromosome[childIdx % this.chromosome.length] = gene;\n            childIdx += 1;\n            console.log(childChromosome)\n          } \n        })\n        console.log('parent2 original: ', otherInd.chromosome)\n        console.log('parent2 reordered: ', reorderedSecondParent)\n        console.log('childChromosome: ', childChromosome)\n        childChromosomes.push(childChromosome)\n        childChromosome = [];\n      }\n      console.log('child chromosome 1: ', childChromosomes[0])\n      console.log('child chromosome 2: ', childChromosomes[1])\n      let children = [];\n      childChromosomes.forEach(chromosome => {\n        children.push(new Individual(...chromosome))\n      })\n      console.log(children);\n      return children;\n    } else {\n      // need to reassign w/ concat where this is called to build next gen\n      return [this, otherInd]\n    }\n  }\n}\n\n//   Code from when treating chromosome as array of vectors\n//   calculateFitness() {\n//     let sumDistance = 0;\n//     Object.values(this.chromosome).forEach(gene => {\n//       let startPoint = gene[0];\n//       let endPoint = gene[1];\n//       sumDistance += Math.sqrt((startPoint[0]-endPoint[0])**2 + (startPoint[1] - endPoint[1])**2)\n//     })\n//     console.log(sumDistance);\n//     return sumDistance;\n//   }\n// }\n\nfunction getDistance(point1, point2) {\n  return Math.sqrt((point1[0] - point2[0])**2 + (point1[1] - point2[1])**2);\n}\n\n// Shuffle via Fisher-Yates algorithm\n// Array.prototype.shuffle = function() {\n//   let currentIdx = this.length;\n//   let randomIdx;\n//   while (currentIdx) {\n//     randomIdx = Math.floor(Math.random() * currentIdx);\n//     currentIdx -= 1;\n//     [this[currentIdx], this[randomIdx]] = [this[randomIdx], this[currentIdx]]\n//   }\n//   return this;\n// };\n\n\n// let i2 = new Individual([0, 0], [4, 0], [4, 4], [0, 4]);\n// let i3 = new Individual([0, 4], [4, 4], [4, 0], [0, 0]);\n// i2.mate(1, i3);\n\nlet i4 = new Individual([0,0], [1,1], [2,2], [3,3], [4,4], [5,5])\n// console.log(i4);\nlet i5 = new Individual([2,2], [5,5], [3,3], [0,0], [1,1], [4,4])\n// i4.mate(1, i5);\n\nmodule.exports = Individual;\n\n//# sourceURL=webpack:///./src/individual.js?");

/***/ }),

/***/ "./src/population.js":
/*!***************************!*\
  !*** ./src/population.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Individual = __webpack_require__(/*! ./individual */ \"./src/individual.js\");\n\nclass Population {\n  constructor(popSize, ...coordinates) {\n    this.individuals = [];\n    for (let i = 0; i < popSize; i++) {\n      let chromosome = coordinates.slice().shuffle();\n      this.individuals.push(new Individual(...chromosome))\n    }\n    console.log('CURRENT POPULATION: ', this.individuals)\n  }\n\n  getFittest() {\n\n  }\n\n  \n}\n\n// Shuffle via Fisher-Yates algorithm\nArray.prototype.shuffle = function () {\n  let currentIdx = this.length;\n  let randomIdx;\n  while (currentIdx) {\n    randomIdx = Math.floor(Math.random() * currentIdx);\n    currentIdx -= 1;\n    [this[currentIdx], this[randomIdx]] = [this[randomIdx], this[currentIdx]]\n  }\n  return this;\n};\n\nlet p = new Population(100, [0,0], [1, 1], [2, 2], [3, 3], [4, 4]);\n\nmodule.exports = Population;\n\n//# sourceURL=webpack:///./src/population.js?");

/***/ })

/******/ });