// const Population = require('./population');
// const Evolution = require('./evolution');

import Population from './population';
import Evolution from './evolution'
import { drawPoints, drawPaths, clearCanvas, startEvolution, stopEvolution, addButtonListeners, factorial } from './util';


window.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  let fittestCanvas = document.getElementById('fittest');
  let fittestCtx = fittestCanvas.getContext('2d');
  // let popSize, crossProb, mutProb;
  // let popSize = 1000;
  // let mutProb = 0.05;
  // let crossProb = 0.3;
  // let coordinates = [[100, 200], [80, 300], [100, 400], [200, 500], [300, 540], [400, 560], [500, 540], [600, 500], [700, 400], [720, 300], [700, 200], [600, 100], [500, 60], [400, 40], [300, 60], [200, 100]]
  // let coordinates = []

  
  // const popSizeLabel = document.getElementById('popsize-label');
  // const popSizeSlider = document.getElementById('popsize-slider');
  // let popSize = popSizeSlider.value;
  // popSizeLabel.innerHTML = `Population size: ${popSizeSlider.value}`;
  // popSizeSlider.oninput = () => {
  //   popSize = popSizeSlider.value
  //   popSizeLabel.innerHTML = `Population size: ${popSize}`
  //   console.log(popSize);
  // };
  // const mutationLabel = document.getElementById('mutation-label');
  // const mutationSlider = document.getElementById('mutation-slider');
  // let mutProb = mutationSlider.value;
  // mutationLabel.innerHTML = `Mutation rate: ${mutationSlider.value}`;
  // mutationSlider.oninput = () => {
  //   mutProb = mutationSlider.value
  //   mutationLabel.innerHTML = `Mutation rate: ${mutProb}`
  //   console.log(mutProb);
  // };
  // const crossLabel = document.getElementById('cross-label');
  // const crossSlider = document.getElementById('cross-slider');
  // let crossProb = crossSlider.value;
  // crossLabel.innerHTML = `Crossover rate: ${crossSlider.value}`;
  // crossSlider.oninput = () => {
  //   crossProb = crossSlider.value
  //   crossLabel.innerHTML = `Crossover rate: ${crossProb}`
  //   console.log(crossProb);
  // };
  
  // canvas.addEventListener('click', function (event) {
  //   var rect = canvas.getBoundingClientRect();
  //   var x = event.clientX - rect.left;
  //   var y = event.clientY - rect.top;
  //   console.log("x: " + x + " y: " + y);
  //   coordinates.push([x, y])
  //   console.log('coordinates: ', coordinates)
  //   const pxSize = 5;
  //   const offset = pxSize / 2;
  //   ctx.fillRect(x - offset, y - offset, pxSize, pxSize);
  // }, false);
  
  // console.log(`popsize: ${popSize}, mutprob: ${mutProb}, crossprob: ${crossProb}`)
  
  addButtonListeners(ctx, fittestCtx);
})
