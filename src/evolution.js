const Population = require('./population');
// import { drawPoints, drawPaths, clearCanvas } from './util';

// let mutProb = 0.1;
// let crossProb = 0.5;

// let p = new Population(100, 0.3, 0.05, [100, 100], [100, 200], [150, 360], [400, 500], [300, 100], [700, 100], [550, 300], [280,360], [590,430], [650,100], [200,190], [50,50], [50,500], [700,130], [400,180], [200,450], [300,550], [235,420], [50,150], [150,250], [760,280]);
// let p = new Population(100, 0.3, 0.05, [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0,6], [0,7], [0,8], [0,9], [0,10], [0,11], [0,12], [0,13], [0,14], [0,15], [0,16], [0,17], [0,18], [0,19], [0,20]);
// for (let i = 0; i < 300; i++) {
//   p.createNextGen(); 
//   p.getTotalFitness();
//   let fittest = p.getFittest();
//   // let canvas = document.getElementById('canvas');
//   // let ctx = canvas.getContext('2d');
//   // ctx.beginPath();
//   // fittest.chromosome.forEach((point, index) => {
//   //   if (index === 0) {
//   //     ctx.moveTo(point[0], point[1]);
//   //   } else {
//   //     ctx.lineTo(point[0], point[1])
//   //   }
//   // })

//   // ctx.closePath();
//   // ctx.stroke();
//   console.log(`generation ${i+1} fitness: `, p.totalFitness)
// }

// let combinations = 1
// for (let i = 20; i > 0; i--) {
//   combinations = combinations * i
// }
// console.log('combinations: ', combinations)

// window.addEventListener('DOMContentLoaded', (event) => {
//   // let canvas = document.getElementById('canvas');
//   // let ctx = canvas.getContext('2d');
//   // ctx.fillStyle = 'red';
//   // ctx.fillRect(100, 100, 400, 300); 

//   let mutProb = 0.1;
//   let crossProb = 0.5;

//   // let p = new Population(100, [100, 100], [100, 200], [150, 360], [400, 500], [300, 100], [700, 100], [550, 300], [280, 360], [590, 430], [650, 100], [200, 190], [50, 50], [50, 500], [700, 130], [400, 180], [200, 450], [300, 550], [235, 420], [50, 150], [150, 250], [760, 280]);
//   let p = new Population(100, [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0,6], [0,7], [0,8], [0,9], [0,10], [0,11], [0,12], [0,13], [0,14], [0,15], [0,16], [0,17], [0,18], [0,19], [0,20]);
//   for (let i = 0; i < 100; i++) {
//     p.createNextGen();
//     p.getTotalFitness();
//     let fittest = p.getFittest();
//     let canvas = document.getElementById('canvas');
//     let ctx = canvas.getContext('2d');
//     ctx.beginPath();
//     fittest.chromosome.forEach((point, index) => {
//       if (index === 0) {
//         ctx.moveTo(point[0], point[1]);
//       } else {
//         ctx.lineTo(point[0], point[1])
//       }
//     })
//     ctx.closePath();
//     ctx.stroke();
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath();
//     ctx.moveTo(0, 0);
//     console.log(`generation ${i + 1} fitness: `, p.totalFitness)
//   }

//   console.log('DOM fully loaded and parsed');
// })

