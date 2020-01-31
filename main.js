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

/***/ "./src/evolution.js":
/*!**************************!*\
  !*** ./src/evolution.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Population = __webpack_require__(/*! ./population */ \"./src/population.js\");\n// import { drawPoints, drawPaths, clearCanvas } from './util';\n\n// let mutProb = 0.1;\n// let crossProb = 0.5;\n\n// let p = new Population(100, 0.3, 0.05, [100, 100], [100, 200], [150, 360], [400, 500], [300, 100], [700, 100], [550, 300], [280,360], [590,430], [650,100], [200,190], [50,50], [50,500], [700,130], [400,180], [200,450], [300,550], [235,420], [50,150], [150,250], [760,280]);\n// let p = new Population(100, 0.3, 0.05, [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0,6], [0,7], [0,8], [0,9], [0,10], [0,11], [0,12], [0,13], [0,14], [0,15], [0,16], [0,17], [0,18], [0,19], [0,20]);\n// for (let i = 0; i < 300; i++) {\n//   p.createNextGen(); \n//   p.getTotalFitness();\n//   let fittest = p.getFittest();\n//   // let canvas = document.getElementById('canvas');\n//   // let ctx = canvas.getContext('2d');\n//   // ctx.beginPath();\n//   // fittest.chromosome.forEach((point, index) => {\n//   //   if (index === 0) {\n//   //     ctx.moveTo(point[0], point[1]);\n//   //   } else {\n//   //     ctx.lineTo(point[0], point[1])\n//   //   }\n//   // })\n\n//   // ctx.closePath();\n//   // ctx.stroke();\n//   console.log(`generation ${i+1} fitness: `, p.totalFitness)\n// }\n\n// let combinations = 1\n// for (let i = 20; i > 0; i--) {\n//   combinations = combinations * i\n// }\n// console.log('combinations: ', combinations)\n\n// window.addEventListener('DOMContentLoaded', (event) => {\n//   // let canvas = document.getElementById('canvas');\n//   // let ctx = canvas.getContext('2d');\n//   // ctx.fillStyle = 'red';\n//   // ctx.fillRect(100, 100, 400, 300); \n\n//   let mutProb = 0.1;\n//   let crossProb = 0.5;\n\n//   // let p = new Population(100, [100, 100], [100, 200], [150, 360], [400, 500], [300, 100], [700, 100], [550, 300], [280, 360], [590, 430], [650, 100], [200, 190], [50, 50], [50, 500], [700, 130], [400, 180], [200, 450], [300, 550], [235, 420], [50, 150], [150, 250], [760, 280]);\n//   let p = new Population(100, [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0,6], [0,7], [0,8], [0,9], [0,10], [0,11], [0,12], [0,13], [0,14], [0,15], [0,16], [0,17], [0,18], [0,19], [0,20]);\n//   for (let i = 0; i < 100; i++) {\n//     p.createNextGen();\n//     p.getTotalFitness();\n//     let fittest = p.getFittest();\n//     let canvas = document.getElementById('canvas');\n//     let ctx = canvas.getContext('2d');\n//     ctx.beginPath();\n//     fittest.chromosome.forEach((point, index) => {\n//       if (index === 0) {\n//         ctx.moveTo(point[0], point[1]);\n//       } else {\n//         ctx.lineTo(point[0], point[1])\n//       }\n//     })\n//     ctx.closePath();\n//     ctx.stroke();\n//     ctx.clearRect(0, 0, canvas.width, canvas.height);\n//     ctx.beginPath();\n//     ctx.moveTo(0, 0);\n//     console.log(`generation ${i + 1} fitness: `, p.totalFitness)\n//   }\n\n//   console.log('DOM fully loaded and parsed');\n// })\n\n\n\n//# sourceURL=webpack:///./src/evolution.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _population__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./population */ \"./src/population.js\");\n/* harmony import */ var _evolution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evolution */ \"./src/evolution.js\");\n/* harmony import */ var _evolution__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_evolution__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n// const Population = require('./population');\n// const Evolution = require('./evolution');\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  let canvas = document.getElementById('canvas');\n  let ctx = canvas.getContext('2d');\n\n  // let p = new Population(100, 0.3, 0.05, [100, 100], [100, 200], [150, 360], [400, 500], [300, 100], [700, 100], [550, 300], [280,360], [590,430], [650,100], [200,190], [50,50], [50,500], [700,130], [400,180], [200,450], [300,550], [235,420], [50,150], [150,250], [760,280]);\n  let population = new _population__WEBPACK_IMPORTED_MODULE_0__[\"default\"](200, 0.3, 0.05, [100, 200], [80, 300], [100, 400], [200, 500], [300, 540], [400, 560], [500, 540], [600, 500], [700, 400], [720, 300], [700, 200], [600, 100], [500, 60], [400, 40], [300, 60], [200, 100]);\n\n  Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"addButtonListeners\"])(ctx, population);\n\n  console.log('DOM fully loaded and parsed');\n})\n\n\nconsole.log('Webpack is working!');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/individual.js":
/*!***************************!*\
  !*** ./src/individual.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Individual {\n  constructor(...coordinates) {\n    this.geneCount = coordinates.length;\n    this.chromosome = coordinates.slice()\n    this.calculateFitness();\n\n    // console.log(`fitness: ${this.fitness}`)\n    // console.log('distance: ', this.distance)\n\n    // Code from dealing with chromosome as array of vectors rather than relying on orderered array\n    // let startPoint = shuffledCoords.pop();\n    // let loopCounts = shuffledCoords.length\n    // for (let i = 0; i < loopCounts; i++) {\n    //   let endPoint = shuffledCoords.pop();\n    //   this.genes[i] = [startPoint, endPoint];\n    //   // console.log(startPoint);\n    //   // console.log(endPoint);\n    //   startPoint = endPoint\n    // };\n  }\n\n  // refactor to normalize fitness values - logic may need to be at population level\n  calculateFitness() {\n    let sumDist = 0;\n    for (let i = 0; i < this.chromosome.length - 1; i++) {\n      sumDist += getDistance(this.chromosome[i], this.chromosome[i+1])\n    }\n    sumDist += getDistance(this.chromosome[0], this.chromosome.slice(-1)[0])\n    this.fitness = 1 / sumDist\n    this.distance = sumDist;\n    return 1 / sumDist;\n  }\n\n  mutate(mutProb) {\n    // console.log(JSON.stringify(this.chromosome))\n    if (Math.random() < mutProb) {\n      let idx1 = Math.floor(Math.random() * this.chromosome.length);\n      let idx2 = Math.floor(Math.random() * this.chromosome.length);\n      while (idx1 === idx2) idx2 = Math.floor(Math.random() * this.chromosome.length);\n      [this.chromosome[idx1], this.chromosome[idx2]] = \n        [this.chromosome[idx2], this.chromosome[idx1]];\n      // console.log(idx1, idx2)\n    }\n    // console.log(JSON.stringify(this.chromosome))\n    this.calculateFitness();\n    return this.chromosome\n  }\n\n  mate(crossProb, otherInd) {\n    // console.log('parent 1 chromosome: ', this.chromosome)\n    if (Math.random() < crossProb) {\n      let childChromosomes = [];\n      while (childChromosomes.length < 2) {\n        let idx1 = Math.floor(Math.random() * this.chromosome.length);\n        while (idx1 >= this.chromosome.length - 1) {\n          idx1 = Math.floor(Math.random() * this.chromosome.length);\n        }\n        let idx2 = idx1 + Math.ceil(Math.random() * (this.chromosome.length - idx1));\n        let segment = this.chromosome.slice(idx1, idx2);\n        // console.log('transplanted segment: ', segment)\n        // console.log(idx1, idx2)\n        let childChromosome = new Array(this.chromosome.length)\n        // inserts random segment of this parent into child at same indices\n        for (let i = idx1; i < idx2; i ++) {\n          childChromosome[i] = this.chromosome[i];\n        }\n        // re-arranges parent 2 to make filling child chromosome easier\n        let reorderedSecondParent = [];\n        for (let i = 0; i < this.chromosome.length; i++) {\n          reorderedSecondParent[i] = otherInd.chromosome[(idx2+i) % this.chromosome.length];\n        }\n        // console.log('childChrom before completion: ', childChromosome)\n        let childIdx = idx2;\n        reorderedSecondParent.forEach(gene => {\n          if (!childChromosome.some(ele => JSON.stringify(ele) === JSON.stringify(gene))) {\n            childChromosome[childIdx % this.chromosome.length] = gene;\n            childIdx += 1;\n            // console.log(childChromosome)\n          } \n        })\n        // console.log('parent2 original: ', otherInd.chromosome)\n        // console.log('parent2 reordered: ', reorderedSecondParent)\n        // console.log('childChromosome: ', childChromosome)\n        childChromosomes.push(childChromosome)\n        childChromosome = [];\n      }\n      // console.log('child chromosome 1: ', childChromosomes[0])\n      // console.log('child chromosome 2: ', childChromosomes[1])\n      let children = [];\n      childChromosomes.forEach(chromosome => {\n        let child = new Individual(...chromosome);\n        child.mutate(mutProb);\n        children.push(child)\n      })\n      // console.log('crossed', children);\n      return children;\n    } else {\n      // need to reassign w/ concat where this is called to build next gen\n      let firstParentClone = new Individual(...this.chromosome);\n      let secondParentClone = new Individual(...otherInd.chromosome);\n      firstParentClone.mutate(mutProb);\n      secondParentClone.mutate(mutProb);\n      // console.log('no cross: ', firstParentClone, secondParentClone)\n      return [firstParentClone, secondParentClone];\n    }\n  }\n}\n\nfunction getDistance(point1, point2) {\n  return Math.sqrt((point1[0] - point2[0])**2 + (point1[1] - point2[1])**2);\n}\n\n// let i2 = new Individual([0, 0], [4, 0], [4, 4], [0, 4]);\n// let i3 = new Individual([0, 4], [4, 4], [4, 0], [0, 0]);\n// i2.mate(1, i3);\n\nlet mutProb = 0.05\nlet crossProb = 0.3\n\nlet i4 = new Individual([0,0], [1,1], [2,2], [3,3], [4,4], [5,5])\n// console.log(i4);\nlet i5 = new Individual([2,2], [5,5], [3,3], [0,0], [1,1], [4,4])\n// i5.fitness = 1000\n// console.log('fitness: ', i5.fitness);\ni4.mate(0.5, i5);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Individual);\n// module.exports = Individual;\n\n//# sourceURL=webpack:///./src/individual.js?");

/***/ }),

/***/ "./src/population.js":
/*!***************************!*\
  !*** ./src/population.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _individual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./individual */ \"./src/individual.js\");\n// const Individual = require('./individual');\n\n\nclass Population {\n  constructor(popSize, crossProb, mutProb, ...coordinates) {\n    this.popSize = popSize;\n    this.crossProb = crossProb;\n    this.mutProb = mutProb;\n    this.totalFitness = 0;\n    this.currentGen = [];\n    for (let i = 0; i < popSize; i++) {\n      let chromosome = coordinates.slice().shuffle();\n      let individual = new _individual__WEBPACK_IMPORTED_MODULE_0__[\"default\"](...chromosome);\n      this.totalFitness += individual.fitness;\n      this.currentGen.push(individual);\n      // console.log('population total fitness: ', this.totalFitness)\n    }\n    // console.log('CURRENT POPULATION: ', this.currentGen)\n  }\n\n  createNextGen() {\n    let nextGen = [];\n    let matingPair = [];\n    while (nextGen.length < this.popSize) {\n      let fitnessThreshold = Math.random() * this.totalFitness;\n      let currentFitness = 0;\n      let individuals = this.currentGen.shuffle();\n      for (let i = 0; i < individuals.length; i++) {\n        currentFitness += individuals[i].fitness;\n        if (currentFitness >= fitnessThreshold) {\n          matingPair.push(individuals[i]);\n          if (matingPair.length === 2) {\n            // console.log('in loop')\n            let newChildren = matingPair[0].mate(this.crossProb, matingPair[1]);\n            nextGen = nextGen.concat(newChildren);\n            matingPair = [];\n            // console.log('growing next generation: ', nextGen)\n          }\n          break;\n        }\n      }\n    }\n    // console.log('complete next generation: ', nextGen);\n    this.currentGen = nextGen;\n  }\n\n  getTotalFitness() {\n    let fitness = 0;\n    this.currentGen.forEach(individual => {\n      fitness += individual.fitness;\n    });\n    this.totalFitness = fitness;\n  }\n\n  getFittest() {\n    let fittest = this.currentGen[0];\n    this.currentGen.forEach(individual => {\n      if (individual.fitness > fittest.fitness) {\n        fittest = individual;\n      }\n    })\n    console.log(`fittest individual's distance: ${fittest.distance}`)\n    return fittest;\n  }\n}\n\n// Shuffle via Fisher-Yates algorithm\nArray.prototype.shuffle = function () {\n  let currentIdx = this.length;\n  let randomIdx;\n  while (currentIdx) {\n    randomIdx = Math.floor(Math.random() * currentIdx);\n    currentIdx -= 1;\n    [this[currentIdx], this[randomIdx]] = [this[randomIdx], this[currentIdx]]\n  }\n  return this;\n};\n\nlet p = new Population(10, 0.3, 0.05, [0,0], [1, 1], [2, 2], [3, 3], [4, 4], [5,5], [6,6], [7,7]);\np.createNextGen();\n\n// module.exports = Population;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Population);\n\n//# sourceURL=webpack:///./src/population.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: drawPoints, drawPaths, clearCanvas, startEvolution, stopEvolution, evolutionLoop, addButtonListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawPoints\", function() { return drawPoints; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawPaths\", function() { return drawPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearCanvas\", function() { return clearCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startEvolution\", function() { return startEvolution; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stopEvolution\", function() { return stopEvolution; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"evolutionLoop\", function() { return evolutionLoop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addButtonListeners\", function() { return addButtonListeners; });\n/* harmony import */ var _population__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./population */ \"./src/population.js\");\n\n\nconst drawPoints = (ctx, individual) => {\n  const pxSize = 8;\n  const offset = pxSize / 2;\n  individual.chromosome.forEach(gene => {\n    ctx.fillRect(gene[0] - offset, gene[1] - offset, pxSize, pxSize);\n  });\n};\n\nconst drawPaths = (ctx, individual) => {\n  ctx.beginPath();\n  individual.chromosome.forEach((gene, idx) => {\n    if (idx === 0) {\n      ctx.moveTo(gene[0], gene[1]);\n    } else {\n      ctx.lineTo(gene[0], gene[1]);\n    }\n  });\n\n  ctx.closePath();\n  ctx.stroke();\n};\n\nconst clearCanvas = canvas => {\n  const ctx = canvas.getContext('2d');\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  // ctx.beginPath();\n  // ctx.moveTo(0, 0);\n};\n\nconst startEvolution = (ctx, population) => {\n  setInterval(() => {\n    population.createNextGen();\n    let fittest = population.getFittest();\n    clearCanvas(canvas);\n    drawPoints(ctx, fittest);\n    drawPaths(ctx, fittest);\n  }, 1000)\n}\n\nconst stopEvolution = () => {\n  clearInterval(evolveInt);\n}\n\nconst evolutionLoop = (ctx, population) => {\n  population.createNextGen();\n  let fittest = population.getFittest();\n  clearCanvas(canvas);\n  drawPoints(ctx, fittest);\n  drawPaths(ctx, fittest);\n};\n\nconst addButtonListeners = (ctx, population) => {\n  const startBtn = document.getElementById('start');\n  const stopBtn  = document.getElementById('stop');\n  let evolveInt = null;\n\n  const beginEvol = () => {\n    evolveInt = setInterval(() => evolutionLoop(ctx, population), 100);\n  }\n\n  const stopEvol = () => {\n    clearInterval(evolveInt);\n  }\n\n  startBtn.addEventListener('click', beginEvol)\n  stopBtn.addEventListener('click', stopEvol)\n}\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });