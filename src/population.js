// const Individual = require('./individual');
import Individual from './individual';

class Population {
  constructor(popSize, crossProb, mutProb, ...coordinates) {
    this.coordinates = coordinates
    this.popSize = popSize;
    this.crossProb = crossProb;
    this.mutProb = mutProb;
    this.totalFitness = 0;
    this.currentGen = [];
    this.genNumber = 0;
    
    for (let i = 0; i < popSize; i++) {
      let chromosome = coordinates.slice().shuffle();
      let individual = new Individual(...chromosome);
      this.totalFitness += individual.fitness;
      this.currentGen.push(individual);
      // console.log('population total fitness: ', this.totalFitness)
    }
    // console.log('CURRENT POPULATION: ', this.currentGen)
  }

  createNextGen() {
    let nextGen = [];
    let matingPair = [];
    while (nextGen.length < this.popSize) {
      let fitnessThreshold = Math.random() * this.totalFitness;
      let currentFitness = 0;
      let individuals = this.currentGen.shuffle();
      for (let i = 0; i < individuals.length; i++) {
        currentFitness += individuals[i].fitness;
        if (currentFitness >= fitnessThreshold) {
          matingPair.push(individuals[i]);
          if (matingPair.length === 2) {
            // console.log('in loop')
            let newChildren = matingPair[0].mate(this.crossProb, matingPair[1]);
            nextGen = nextGen.concat(newChildren);
            matingPair = [];
            // console.log('growing next generation: ', nextGen)
          }
          break;
        }
      }
    }
    // console.log('complete next generation: ', nextGen);
    this.currentGen = nextGen;
  }

  getTotalFitness() {
    let fitness = 0;
    this.currentGen.forEach(individual => {
      fitness += individual.fitness;
    });
    this.totalFitness = fitness;
  }

  getFittest() {
    let fittest = this.currentGen[0];
    this.currentGen.forEach(individual => {
      if (individual.fitness > fittest.fitness) {
        fittest = individual;
      }
    })
    console.log(`fittest individual's distance: ${fittest.distance}`)
    return fittest;
  }
}

// Shuffle via Fisher-Yates algorithm
Array.prototype.shuffle = function () {
  let currentIdx = this.length;
  let randomIdx;
  while (currentIdx) {
    randomIdx = Math.floor(Math.random() * currentIdx);
    currentIdx -= 1;
    [this[currentIdx], this[randomIdx]] = [this[randomIdx], this[currentIdx]]
  }
  return this;
};

let p = new Population(10, 0.3, 0.05, [0,0], [1, 1], [2, 2], [3, 3], [4, 4], [5,5], [6,6], [7,7]);
p.createNextGen();

// module.exports = Population;
export default Population;