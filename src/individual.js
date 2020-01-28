class Individual {
  constructor(...coordinates) {
    this.geneCount = coordinates.length;
    this.chromosome = coordinates.slice().shuffle();
    this.calculateFitness();

    console.log(`fitness: ${this.fitness}`)

    // Code from dealing with chromosome as array of vectors rather than relying on orderered array
    // let startPoint = shuffledCoords.pop();
    // let loopCounts = shuffledCoords.length
    // for (let i = 0; i < loopCounts; i++) {
    //   let endPoint = shuffledCoords.pop();
    //   this.genes[i] = [startPoint, endPoint];
    //   // console.log(startPoint);
    //   // console.log(endPoint);
    //   startPoint = endPoint
    // };

  }

  calculateFitness() {
    let sumDist = 0;
    for (let i = 0; i < this.chromosome.length - 1; i++) {
      sumDist += getDistance(this.chromosome[i], this.chromosome[i+1])
    }
    sumDist += getDistance(this.chromosome[0], this.chromosome.slice(-1)[0])
    this.fitness = 1 / sumDist
    return 1 / sumDist;
  }

  mutate(mutProb) {
    // console.log(JSON.stringify(this.chromosome))
    if (Math.random() < mutProb) {
      let idx1 = Math.floor(Math.random() * this.chromosome.length);
      let idx2 = Math.floor(Math.random() * this.chromosome.length);
      while (idx1 === idx2) idx2 = Math.floor(Math.random() * this.chromosome.length);
      [this.chromosome[idx1], this.chromosome[idx2]] = 
        [this.chromosome[idx2], this.chromosome[idx1]];
      // console.log(idx1, idx2)
    }
    // console.log(JSON.stringify(this.chromosome))
    this.calculateFitness();
    return this.chromosome
  }

  mate(crossProb, otherInd) {
    if (Math.random() < crossProb) {
      // pulls random segment from self
      let idx1 = Math.floor(Math.random() * this.chromosome.length);
      while (idx1 >= this.chromosome.length - 1) {
        idx1 = Math.floor(Math.random() * this.chromosome.length);
      } 
      console.log(idx1);
      let idx2 = idx1 + Math.floor(Math.random() * (this.chromosome.length - idx1 + 1));
      // while (idx1 === idx2 || idx1 > idx2) idx2 = Math.floor(Math.random() * this.chromosome.length);
      let segment = this.chromosome.slice(idx1, idx2);
      console.log(segment);
      console.log(idx1, idx2)
      let child = new Array(this.chromosome.length)
      for (let i = idx1; i < idx2; i ++) {
        // child[i] = 
      }
    } else {
      // need to reassign w/ concat where this is called to build next gen
      return [this, otherInd]
    }
  }

  // mutate(mutProb) {
  //   if (Math.random() < mutProb) {
  //     let idx1 = Math.floor(Math.random() * this.chromosome.length);
  //     let idx2 = Math.floor(Math.random() * this.chromosome.length);
  //     [this.chromosome[idx1], this.chromosome[idx2]] = 
  //       [this.chromosome[idx2], this.chromosome[idx1]]
  //     // console.log(this.chromosome)
  //     console.log(idx1, idx2)
  //     console.log(this.chromosome[idx1], this.chromosome[idx2])
  //   }
  //   return this.chromosome
  // }
}

//   Code from when treating chromosome as array of vectors
//   calculateFitness() {
//     let sumDistance = 0;
//     Object.values(this.chromosome).forEach(gene => {
//       let startPoint = gene[0];
//       let endPoint = gene[1];
//       sumDistance += Math.sqrt((startPoint[0]-endPoint[0])**2 + (startPoint[1] - endPoint[1])**2)
//     })
//     console.log(sumDistance);
//     return sumDistance;
//   }
// }

// Shuffle via Fisher-Yates algorithm
Array.prototype.shuffle = function() {
  let currentIdx = this.length;
  let randomIdx;
  while (currentIdx) {
    randomIdx = Math.floor(Math.random() * currentIdx);
    currentIdx -= 1;
    [this[currentIdx], this[randomIdx]] = [this[randomIdx], this[currentIdx]]
  }
  return this;
};

function getDistance(point1, point2) {
  return Math.sqrt((point1[0] - point2[0])**2 + (point1[1] - point2[1])**2);
}

// let i = new Individual([1, 2,], [2, 3], [3, 3], [8, 4], [9, 4], [10, 17], [6, 6])
// i.calculateFitness();
// i.mutate(0.9)
// console.log(i)
// i.mutate(0.9)
// console.log(i)
// i.mutate(0.9)
// console.log(i)
// i.mutate(0.9)
// console.log(i)
// i.mutate(0.9)
// console.log(i)
// i.mutate(0.9)
// console.log(i)

let i2 = new Individual([0, 0], [4, 0], [4, 4], [0, 4]);
let i3 = new Individual([0, 4], [4, 4], [4, 0], [0, 0]);

i2.mate(1, i3);
// i2.calculateFitness();
// i2.mutate(1);
// console.log(i2)
// i2.mutate(1);
// console.log(i2)
// i2.mutate(1);
// console.log(i2)
// i2.mutate(1);
// console.log(i2)
// i2.mutate(1);
// console.log(i2)

module.exports = Individual;