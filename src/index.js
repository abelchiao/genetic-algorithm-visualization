const Population = require('./population');
const Evolution = require('./evolution');
import { drawPoints, drawPaths, clearCanvas } from './util';


window.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  // let p = new Population(100, 0.3, 0.05, [100, 100], [100, 200], [150, 360], [400, 500], [300, 100], [700, 100], [550, 300], [280,360], [590,430], [650,100], [200,190], [50,50], [50,500], [700,130], [400,180], [200,450], [300,550], [235,420], [50,150], [150,250], [760,280]);
  let population = new Population(200, 0.3, 0.05, [100, 200], [80, 300], [100, 400], [200, 500], [300, 540], [400, 560], [500, 540], [600, 500], [700, 400], [720, 300], [700, 200], [600, 100], [500, 60], [400, 40], [300, 60], [200, 100]);
  // setInterval(() => {
  //     p.createNextGen();
  //     let fittest = p.getFittest();
  //     clearCanvas(canvas);
  //     drawPoints(ctx, fittest);
  //     drawPaths(ctx, fittest);
  //     // console.log('done drawing')
  // }, 25)
  // drawPoints(ctx, fittest);
  // drawPaths(ctx, fittest);

  document.getElementById('test').addEventListener('click', () => console.log('hello'));

  document.getElementById('start').addEventListener('click', (population) => {
    let startEvolution = setInterval(() => {
      population.createNextGen();
      let fittest = population.getFittest();
      clearCanvas(canvas);
      drawPoints(ctx, fittest);
      drawPaths(ctx, fittest);
    }, 25)
  })

  document.getElementById('stop').addEventListener('click', () => {
    clearInterval(startEvolution);
  })

  console.log('DOM fully loaded and parsed');
})


console.log('Webpack is working!');