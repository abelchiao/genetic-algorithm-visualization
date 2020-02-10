import Individual from './individual';
import { factorial } from './util';

class Population {
  constructor(popSize, crossProb, mutProb, elitismRate, ...coordinates) {
    this.coordinates = coordinates
    this.popSize = popSize;
    this.crossProb = crossProb;
    this.mutProb = mutProb;
    this.elitismRate = elitismRate
    this.totalFitness = 0;
    this.currentGen = [];
    this.genNumber = 0;
    this.numPossibleRoutes = factorial(coordinates.length)
    // this.getFittest()
    
    for (let i = 0; i < popSize; i++) {
      let chromosome = coordinates.slice().shuffle();
      let individual = new Individual(mutProb, ...chromosome);
      this.totalFitness += individual.fitness;
      this.currentGen.push(individual);
      // console.log('population total fitness: ', this.totalFitness)
    }
    // console.log('CURRENT POPULATION: ', this.currentGen)
    this.fittestEver = this.getFittest();
  }

  createNextGen() {
    if (this.elitismRate) this.passElites();
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
            let newChildren = matingPair[0].mate(this.crossProb, this.mutProb, matingPair[1]);
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
    this.genNumber += 1
    let currentGenFittest = this.getFittest();
    if (currentGenFittest.fitness > this.fittestEver.fitness) {
      this.fittestEver = currentGenFittest
    };
  }

  passElites() {
    let sortedInds = this.currentGen.sort((a, b) => (a.distance > b.distance) ? 1 : -1)
    console.log(sortedInds)
    return sortedInds
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
    // console.log(`fittest individual's distance: ${fittest.distance}`)
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

export default Population;