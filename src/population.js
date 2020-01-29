const Individual = require('./individual');

class Population {
  constructor(popSize, ...coordinates) {
    this.individuals = [];
    for (let i = 0; i < popSize; i++) {
      let chromosome = coordinates.slice().shuffle();
      this.individuals.push(new Individual(...chromosome))
    }
    console.log('CURRENT POPULATION: ', this.individuals)
  }

  getFittest() {

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

let p = new Population(100, [0,0], [1, 1], [2, 2], [3, 3], [4, 4]);

module.exports = Population;