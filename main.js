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
/***/ (function(module, exports) {

eval("const factorial = num => {\n  if (num <= 1) {\n    return 1\n} else {\n  return num * factorial(num-1);\n}};\n\n\n//# sourceURL=webpack:///./src/evolution.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _population__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./population */ \"./src/population.js\");\n/* harmony import */ var _evolution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evolution */ \"./src/evolution.js\");\n/* harmony import */ var _evolution__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_evolution__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n// const Population = require('./population');\n// const Evolution = require('./evolution');\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  let canvas = document.getElementById('canvas');\n  let ctx = canvas.getContext('2d');\n\n  let fittestCanvas = document.getElementById('fittest');\n  let fittestCtx = fittestCanvas.getContext('2d');\n  // let popSize, crossProb, mutProb;\n  // let popSize = 1000;\n  // let mutProb = 0.05;\n  // let crossProb = 0.3;\n  // let coordinates = [[100, 200], [80, 300], [100, 400], [200, 500], [300, 540], [400, 560], [500, 540], [600, 500], [700, 400], [720, 300], [700, 200], [600, 100], [500, 60], [400, 40], [300, 60], [200, 100]]\n  // let coordinates = []\n\n  \n  // const popSizeLabel = document.getElementById('popsize-label');\n  // const popSizeSlider = document.getElementById('popsize-slider');\n  // let popSize = popSizeSlider.value;\n  // popSizeLabel.innerHTML = `Population size: ${popSizeSlider.value}`;\n  // popSizeSlider.oninput = () => {\n  //   popSize = popSizeSlider.value\n  //   popSizeLabel.innerHTML = `Population size: ${popSize}`\n  //   console.log(popSize);\n  // };\n  // const mutationLabel = document.getElementById('mutation-label');\n  // const mutationSlider = document.getElementById('mutation-slider');\n  // let mutProb = mutationSlider.value;\n  // mutationLabel.innerHTML = `Mutation rate: ${mutationSlider.value}`;\n  // mutationSlider.oninput = () => {\n  //   mutProb = mutationSlider.value\n  //   mutationLabel.innerHTML = `Mutation rate: ${mutProb}`\n  //   console.log(mutProb);\n  // };\n  // const crossLabel = document.getElementById('cross-label');\n  // const crossSlider = document.getElementById('cross-slider');\n  // let crossProb = crossSlider.value;\n  // crossLabel.innerHTML = `Crossover rate: ${crossSlider.value}`;\n  // crossSlider.oninput = () => {\n  //   crossProb = crossSlider.value\n  //   crossLabel.innerHTML = `Crossover rate: ${crossProb}`\n  //   console.log(crossProb);\n  // };\n  \n  // canvas.addEventListener('click', function (event) {\n  //   var rect = canvas.getBoundingClientRect();\n  //   var x = event.clientX - rect.left;\n  //   var y = event.clientY - rect.top;\n  //   console.log(\"x: \" + x + \" y: \" + y);\n  //   coordinates.push([x, y])\n  //   console.log('coordinates: ', coordinates)\n  //   const pxSize = 5;\n  //   const offset = pxSize / 2;\n  //   ctx.fillRect(x - offset, y - offset, pxSize, pxSize);\n  // }, false);\n  \n  // console.log(`popsize: ${popSize}, mutprob: ${mutProb}, crossprob: ${crossProb}`)\n  \n  Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"addButtonListeners\"])(ctx, fittestCtx);\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/individual.js":
/*!***************************!*\
  !*** ./src/individual.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Individual {\n  constructor(mutProb, ...coordinates) {\n    this.geneCount = coordinates.length;\n    this.mutProb = mutProb;\n    this.chromosome = coordinates.slice();\n    this.calculateFitness();\n    // console.log(`fitness: ${this.fitness}`)\n    // console.log('distance: ', this.distance)\n  }\n\n  // refactor to normalize fitness values - logic may need to be at population level\n  calculateFitness() {\n    let sumDist = 0;\n    for (let i = 0; i < this.chromosome.length - 1; i++) {\n      sumDist += getDistance(this.chromosome[i], this.chromosome[i+1])\n    }\n    sumDist += getDistance(this.chromosome[0], this.chromosome.slice(-1)[0])\n    this.fitness = 1 / sumDist\n    this.distance = sumDist;\n    return 1 / sumDist;\n  }\n\n  mutate() {\n    // console.log(JSON.stringify(this.chromosome))\n    if (Math.random() < this.mutProb) {\n      let idx1 = Math.floor(Math.random() * this.chromosome.length);\n      let idx2 = Math.floor(Math.random() * this.chromosome.length);\n      while (idx1 === idx2) idx2 = Math.floor(Math.random() * this.chromosome.length);\n      [this.chromosome[idx1], this.chromosome[idx2]] = \n        [this.chromosome[idx2], this.chromosome[idx1]];\n      // console.log(idx1, idx2)\n    }\n    // console.log(JSON.stringify(this.chromosome))\n    this.calculateFitness();\n    return this.chromosome\n  }\n\n  mate(crossProb, mutProb, otherInd) {\n    // console.log('parent 1 chromosome: ', this.chromosome)\n    if (Math.random() < crossProb) {\n      let childChromosomes = [];\n      while (childChromosomes.length < 2) {\n        let idx1 = Math.floor(Math.random() * this.chromosome.length);\n        while (idx1 >= this.chromosome.length - 1) {\n          idx1 = Math.floor(Math.random() * this.chromosome.length);\n        }\n        let idx2 = idx1 + Math.ceil(Math.random() * (this.chromosome.length - idx1));\n        // let segment = this.chromosome.slice(idx1, idx2);\n        // console.log('transplanted segment: ', segment)\n        // console.log(idx1, idx2)\n        let childChromosome = new Array(this.chromosome.length)\n        // inserts random segment of this parent into child at same indices\n        for (let i = idx1; i < idx2; i ++) {\n          childChromosome[i] = this.chromosome[i];\n        }\n        // re-arranges parent 2 to make filling child chromosome easier\n        let reorderedSecondParent = [];\n        for (let i = 0; i < this.chromosome.length; i++) {\n          reorderedSecondParent[i] = otherInd.chromosome[(idx2+i) % this.chromosome.length];\n        }\n        // console.log('childChrom before completion: ', childChromosome)\n        let childIdx = idx2;\n        reorderedSecondParent.forEach(gene => {\n          if (!childChromosome.some(ele => JSON.stringify(ele) === JSON.stringify(gene))) {\n            childChromosome[childIdx % this.chromosome.length] = gene;\n            childIdx += 1;\n            // console.log(childChromosome)\n          } \n        })\n        // console.log('parent2 original: ', otherInd.chromosome)\n        // console.log('parent2 reordered: ', reorderedSecondParent)\n        // console.log('childChromosome: ', childChromosome)\n        childChromosomes.push(childChromosome)\n        childChromosome = [];\n      }\n      // console.log('child chromosome 1: ', childChromosomes[0])\n      // console.log('child chromosome 2: ', childChromosomes[1])\n      let children = [];\n      childChromosomes.forEach(chromosome => {\n        let child = new Individual(this.mutProb, ...chromosome);\n        child.mutate(this.mutProb);\n        children.push(child)\n      })\n      // console.log('crossed', children);\n      return children;\n    } else {\n      // need to reassign w/ concat where this is called to build next gen\n      let firstParentClone = new Individual(this.mutProb, ...this.chromosome);\n      let secondParentClone = new Individual(this.mutProb, ...otherInd.chromosome);\n      firstParentClone.mutate(this.mutProb);\n      secondParentClone.mutate(this.mutProb);\n      // console.log('no cross: ', firstParentClone, secondParentClone)\n      return [firstParentClone, secondParentClone];\n    }\n  }\n}\n\nfunction getDistance(point1, point2) {\n  return Math.sqrt((point1[0] - point2[0])**2 + (point1[1] - point2[1])**2);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Individual);\n// module.exports = Individual;\n\n//# sourceURL=webpack:///./src/individual.js?");

/***/ }),

/***/ "./src/population.js":
/*!***************************!*\
  !*** ./src/population.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _individual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./individual */ \"./src/individual.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\nclass Population {\n  constructor(popSize, crossProb, mutProb, elitismRate, ...coordinates) {\n    this.coordinates = coordinates\n    this.popSize = popSize;\n    this.crossProb = crossProb;\n    this.mutProb = mutProb;\n    this.elitismRate = elitismRate\n    this.totalFitness = 0;\n    this.currentGen = [];\n    this.genNumber = 0;\n    this.numPossibleRoutes = Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"factorial\"])(coordinates.length)\n    // this.getFittest()\n    \n    for (let i = 0; i < popSize; i++) {\n      let chromosome = coordinates.slice().shuffle();\n      let individual = new _individual__WEBPACK_IMPORTED_MODULE_0__[\"default\"](mutProb, ...chromosome);\n      this.totalFitness += individual.fitness;\n      this.currentGen.push(individual);\n      // console.log('individual distance: ', individual.distance)\n      // console.log('population total fitness: ', this.totalFitness)\n    }\n    // console.log('CURRENT POPULATION: ', this.currentGen)\n    this.fittestEver = this.getFittest();\n  }\n\n  createNextGen() {\n    let nextGen = [];\n    if (this.elitismRate) nextGen = nextGen.concat(this.passElites());\n    // console.log('next generation elites: ', nextGen);\n    let matingPair = [];\n    while (nextGen.length < this.popSize) {\n      let fitnessThreshold = Math.random() * this.totalFitness;\n      let currentFitness = 0;\n      let individuals = this.currentGen.shuffle();\n      for (let i = 0; i < individuals.length; i++) {\n        currentFitness += individuals[i].fitness;\n        if (currentFitness >= fitnessThreshold) {\n          matingPair.push(individuals[i]);\n          if (matingPair.length === 2) {\n            let newChildren = matingPair[0].mate(this.crossProb, this.mutProb, matingPair[1]);\n            nextGen = nextGen.concat(newChildren);\n            matingPair = [];\n            // console.log('growing next generation: ', nextGen)\n          }\n          break;\n        }\n      }\n    }\n    // console.log('complete next generation: ', nextGen);\n    this.currentGen = nextGen;\n    this.genNumber += 1\n    let currentGenFittest = this.getFittest();\n    if (currentGenFittest.fitness > this.fittestEver.fitness) {\n      this.fittestEver = currentGenFittest\n    };\n  }\n\n  passElites() {\n    let sortedInds = this.currentGen.sort((a, b) => (a.fitness > b.fitness) ? -1 : 1)\n    // console.log(JSON.stringify(sortedInds));\n    let numElites = Math.floor(this.elitismRate * this.popSize);\n    let elites = sortedInds.slice(0, numElites)\n    // console.log(elites)\n    return elites\n  }\n\n  getTotalFitness() {\n    let fitness = 0;\n    this.currentGen.forEach(individual => {\n      fitness += individual.fitness;\n    });\n    this.totalFitness = fitness;\n  }\n\n  getFittest() {\n    let fittest = this.currentGen[0];\n    this.currentGen.forEach(individual => {\n      if (individual.fitness > fittest.fitness) {\n        fittest = individual;\n      }\n    })\n    // console.log(`fittest individual's distance: ${fittest.distance}`)\n    return fittest;\n  }\n}\n\n// Shuffle via Fisher-Yates algorithm\nArray.prototype.shuffle = function () {\n  let currentIdx = this.length;\n  let randomIdx;\n  while (currentIdx) {\n    randomIdx = Math.floor(Math.random() * currentIdx);\n    currentIdx -= 1;\n    [this[currentIdx], this[randomIdx]] = [this[randomIdx], this[currentIdx]]\n  }\n  return this;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Population);\n\n//# sourceURL=webpack:///./src/population.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: factorial, drawPoints, drawPaths, clearCanvas, startEvolution, stopEvolution, evolutionLoop, addButtonListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"factorial\", function() { return factorial; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawPoints\", function() { return drawPoints; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawPaths\", function() { return drawPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearCanvas\", function() { return clearCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startEvolution\", function() { return startEvolution; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stopEvolution\", function() { return stopEvolution; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"evolutionLoop\", function() { return evolutionLoop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addButtonListeners\", function() { return addButtonListeners; });\n/* harmony import */ var _population__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./population */ \"./src/population.js\");\n\n\nconst factorial = num => {\n  return (num <= 1) ? 1 : num * factorial(num-1)\n};\n\nconst drawPoints = (ctx, individual) => {\n  const pxSize = 5;\n  const offset = pxSize / 2;\n  individual.chromosome.forEach(gene => {\n    ctx.fillRect(gene[0] - offset, gene[1] - offset, pxSize, pxSize);\n  });\n};\n\nconst drawPaths = (ctx, individual) => {\n  ctx.beginPath();\n  individual.chromosome.forEach((gene, idx) => {\n    if (idx === 0) {\n      ctx.moveTo(gene[0], gene[1]);\n    } else {\n      ctx.lineTo(gene[0], gene[1]);\n    }\n  });\n\n  ctx.closePath();\n  ctx.stroke();\n};\n\nconst clearCanvas = canvas => {\n  const ctx = canvas.getContext('2d');\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n};\n\nconst startEvolution = (ctx, population) => {\n  setInterval(() => {\n    population.createNextGen();\n    let fittest = population.getFittest();\n    clearCanvas(canvas);\n    drawPoints(ctx, fittest);\n    drawPaths(ctx, fittest);\n  }, 1000)\n}\n\nconst stopEvolution = () => {\n  clearInterval(evolveInt);\n}\n\nconst evolutionLoop = (ctx, fittestCtx, population) => {\n  population.createNextGen();\n  let currentGenFittest = population.getFittest();\n  clearCanvas(canvas);\n  fittestCtx.clearRect(0, 0, canvas.width, canvas.height)\n  // clearCanvas(fittestCanvas);\n  drawPoints(ctx, currentGenFittest);\n  drawPaths(ctx, currentGenFittest);\n  document.getElementById('current-generation').innerHTML = population.genNumber;\n  document.getElementById('individuals-screened').innerHTML = population.genNumber * population.popSize.toLocaleString();\n  let fittestEver = population.fittestEver\n  document.getElementById('best-distance').innerHTML = Math.floor(fittestEver.distance)\n\n  const pxSize = 2;\n  const offset = pxSize / 2;\n  fittestEver.chromosome.forEach((gene, ix) => {\n    fittestCtx.fillRect(gene[0]/2 - offset, gene[1]/2 - offset, pxSize, pxSize);\n  });\n  fittestCtx.beginPath();\n  fittestEver.chromosome.forEach((gene, idx) => {\n    if (idx === 0) {\n      fittestCtx.moveTo(gene[0]/2, gene[1]/2);\n    } else {\n      fittestCtx.lineTo(gene[0]/2, gene[1]/2);\n    }\n  });\n  fittestCtx.closePath();\n  fittestCtx.stroke();\n};\n\nconst addButtonListeners = (ctx, fittestCtx) => {\n  const startBtn = document.getElementById('start');\n  const stopBtn  = document.getElementById('stop');\n  const resetBtn = document.getElementById('reset');\n  const clearBtn = document.getElementById('clear');\n  let coordinates = [[407.8377416386715, 418.07147742662283],\n  [360.5979273594664, 440.3050970991086],\n  [309.2132865052777, 449.55456093008706],\n  [257.1855974331843, 445.1895332449387],\n  [208.060461173628, 427.507483466857],\n  [165.18567457957127, 397.71341406724946],\n  [131.48308350346423, 357.8377416386715],\n  [109.24946383097844, 310.59792735946644],\n  [100, 259.2132865052777],\n  [104.36502768514839, 207.1855974331843],\n  [122.04707746323004, 158.06046117362803],\n  [151.84114686283763, 115.18567457957127],\n  [191.71681929141556, 81.48308350346426],\n  [238.95663357062062, 59.24946383097847],\n  [290.3412744248092, 50],\n  [342.36896349690255, 54.36502768514836],\n  [391.49409975645904, 72.04707746323004],\n  [434.3688863505157, 101.84114686283758],\n  [468.0714774266228, 141.71681929141556],\n  [490.3050970991086, 188.9566335706206],\n  [499.55456093008706, 240.34127442480923],\n  [495.1895332449387, 292.3689634969027],\n  [477.507483466857, 341.49409975645904],\n  [447.71341406724946, 384.3688863505157]]\n  let evolveInt = null;\n  let population;\n\n  let totalRoutesDisplay = document.getElementById('total-possible-routes')\n  document.getElementById('current-generation').innerHTML = 0\n  document.getElementById('individuals-screened').innerHTML = 0\n\n  const pxSize = 5;\n  const offset = pxSize / 2;\n  coordinates.forEach(point => {\n    ctx.fillRect(point[0] - offset, point[1] - offset, pxSize, pxSize);\n  });\n  totalRoutesDisplay.innerHTML = factorial(coordinates.length).toLocaleString();\n\n  const beginEvol = () => {\n    population = population ? population : new _population__WEBPACK_IMPORTED_MODULE_0__[\"default\"](popSize, crossProb, mutProb, elitismRate, ...coordinates)\n    evolveInt = setInterval(() => evolutionLoop(ctx, fittestCtx, population), 100);\n    document.getElementById('starting-distance').innerHTML = Math.floor(population.getFittest().distance);\n    document.getElementById('best-distance').innerHTML = Math.floor(population.fittestEver.distance)\n  }\n\n  const stopEvol = () => {\n    clearInterval(evolveInt);\n  }\n\n  const resetPop = () => {\n    clearInterval(evolveInt);\n    population = new _population__WEBPACK_IMPORTED_MODULE_0__[\"default\"](popSize, crossProb, mutProb, elitismRate, ...coordinates)\n    clearCanvas(canvas)\n    fittestCtx.clearRect(0, 0, canvas.width, canvas.height)\n    const pxSize = 5;\n    const offset = pxSize / 2;\n    population.coordinates.forEach(gene => {\n      ctx.fillRect(gene[0] - offset, gene[1] - offset, pxSize, pxSize);\n    });\n    document.getElementById('current-generation').innerHTML = 0\n    document.getElementById('individuals-screened').innerHTML = 0\n    // console.log('resetting')\n  }\n\n  const clearPop = () => {\n    clearInterval(evolveInt)\n    coordinates = [];\n    population = null;\n    clearCanvas(canvas);\n    fittestCtx.clearRect(0, 0, canvas.width, canvas.height)\n    // console.log('clearing');\n    totalRoutesDisplay.innerHTML = ''\n    document.getElementById('current-generation').innerHTML = 0\n    document.getElementById('individuals-screened').innerHTML = 0\n    document.getElementById('starting-distance').innerHTML = '';\n    document.getElementById('best-distance').innerHTML = '';\n  }\n\n  const popSizeLabel = document.getElementById('popsize-label');\n  const popSizeSlider = document.getElementById('popsize-slider');\n  let popSize = popSizeSlider.value;\n  popSizeLabel.innerHTML = `${popSizeSlider.value}`;\n  popSizeSlider.oninput = () => {\n    popSize = popSizeSlider.value\n    popSizeLabel.innerHTML = `${popSize}`\n    // console.log(popSize);\n  };\n  const mutationLabel = document.getElementById('mutation-label');\n  const mutationSlider = document.getElementById('mutation-slider');\n  let mutProb = mutationSlider.value;\n  mutationLabel.innerHTML = `${mutationSlider.value}`;\n  mutationSlider.oninput = () => {\n    mutProb = mutationSlider.value\n    mutationLabel.innerHTML = `${mutProb}`\n    // console.log(mutProb);\n  };\n  const crossLabel = document.getElementById('cross-label');\n  const crossSlider = document.getElementById('cross-slider');\n  let crossProb = crossSlider.value;\n  crossLabel.innerHTML = `${crossSlider.value}`;\n  crossSlider.oninput = () => {\n    crossProb = crossSlider.value\n    crossLabel.innerHTML = `${crossProb}`\n    // console.log(crossProb);\n  };\n  const elitismLabel = document.getElementById('elitism-label');\n  const elitismSlider = document.getElementById('elitism-slider');\n  let elitismRate = elitismSlider.value;\n  elitismLabel.innerHTML = `${elitismSlider.value}`;\n  elitismSlider.oninput = () => {\n    elitismRate = elitismSlider.value\n    elitismLabel.innerHTML = `${elitismRate}`\n    console.log(elitismRate);\n  };\n\n  canvas.addEventListener('click', function (event) {\n    var rect = canvas.getBoundingClientRect();\n    var x = event.clientX - rect.left;\n    var y = event.clientY - rect.top;\n    // console.log(\"x: \" + x + \" y: \" + y);\n    coordinates.push([x, y])\n    // console.log('coordinates: ', coordinates)\n    const pxSize = 5;\n    const offset = pxSize / 2;\n    ctx.fillRect(x - offset, y - offset, pxSize, pxSize);\n    totalRoutesDisplay.innerHTML = Math.ceil(factorial(coordinates.length - 1)/2).toLocaleString();\n  }, false);\n\n  // console.log(`popsize: ${popSize}, mutprob: ${mutProb}, crossprob: ${crossProb}`)\n\n  startBtn.addEventListener('click', beginEvol);\n  stopBtn.addEventListener('click', stopEvol);\n  resetBtn.addEventListener('click', resetPop);\n  clearBtn.addEventListener('click', clearPop);\n}\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });