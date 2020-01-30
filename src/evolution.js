const Population = require('./population');

let mutProb = 0.1;
let crossProb = 0.4;

let p = new Population(50, [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0,6], [0,7], [0,8], [0,9]);
for (let i = 0; i < 100; i++) {
  p.createNextGen();
  p.getTotalFitness();
  p.getFittest();
  console.log(`generation ${i+1} fitness: `, p.totalFitness)
}