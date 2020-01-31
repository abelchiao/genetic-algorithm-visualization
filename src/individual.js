class Individual {
  constructor(...coordinates) {
    this.geneCount = coordinates.length;
    this.chromosome = coordinates.slice()
    this.calculateFitness();

    // console.log(`fitness: ${this.fitness}`)
    // console.log('distance: ', this.distance)

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

  // refactor to normalize fitness values - logic may need to be at population level
  calculateFitness() {
    let sumDist = 0;
    for (let i = 0; i < this.chromosome.length - 1; i++) {
      sumDist += getDistance(this.chromosome[i], this.chromosome[i+1])
    }
    sumDist += getDistance(this.chromosome[0], this.chromosome.slice(-1)[0])
    this.fitness = 1 / sumDist
    this.distance = sumDist;
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
    // console.log('parent 1 chromosome: ', this.chromosome)
    if (Math.random() < crossProb) {
      let childChromosomes = [];
      while (childChromosomes.length < 2) {
        let idx1 = Math.floor(Math.random() * this.chromosome.length);
        while (idx1 >= this.chromosome.length - 1) {
          idx1 = Math.floor(Math.random() * this.chromosome.length);
        }
        let idx2 = idx1 + Math.ceil(Math.random() * (this.chromosome.length - idx1));
        let segment = this.chromosome.slice(idx1, idx2);
        // console.log('transplanted segment: ', segment)
        // console.log(idx1, idx2)
        let childChromosome = new Array(this.chromosome.length)
        // inserts random segment of this parent into child at same indices
        for (let i = idx1; i < idx2; i ++) {
          childChromosome[i] = this.chromosome[i];
        }
        // re-arranges parent 2 to make filling child chromosome easier
        let reorderedSecondParent = [];
        for (let i = 0; i < this.chromosome.length; i++) {
          reorderedSecondParent[i] = otherInd.chromosome[(idx2+i) % this.chromosome.length];
        }
        // console.log('childChrom before completion: ', childChromosome)
        let childIdx = idx2;
        reorderedSecondParent.forEach(gene => {
          if (!childChromosome.some(ele => JSON.stringify(ele) === JSON.stringify(gene))) {
            childChromosome[childIdx % this.chromosome.length] = gene;
            childIdx += 1;
            // console.log(childChromosome)
          } 
        })
        // console.log('parent2 original: ', otherInd.chromosome)
        // console.log('parent2 reordered: ', reorderedSecondParent)
        // console.log('childChromosome: ', childChromosome)
        childChromosomes.push(childChromosome)
        childChromosome = [];
      }
      // console.log('child chromosome 1: ', childChromosomes[0])
      // console.log('child chromosome 2: ', childChromosomes[1])
      let children = [];
      childChromosomes.forEach(chromosome => {
        let child = new Individual(...chromosome);
        child.mutate(mutProb);
        children.push(child)
      })
      // console.log('crossed', children);
      return children;
    } else {
      // need to reassign w/ concat where this is called to build next gen
      let firstParentClone = new Individual(...this.chromosome);
      let secondParentClone = new Individual(...otherInd.chromosome);
      firstParentClone.mutate(mutProb);
      secondParentClone.mutate(mutProb);
      // console.log('no cross: ', firstParentClone, secondParentClone)
      return [firstParentClone, secondParentClone];
    }
  }
}

function getDistance(point1, point2) {
  return Math.sqrt((point1[0] - point2[0])**2 + (point1[1] - point2[1])**2);
}

// let i2 = new Individual([0, 0], [4, 0], [4, 4], [0, 4]);
// let i3 = new Individual([0, 4], [4, 4], [4, 0], [0, 0]);
// i2.mate(1, i3);

let mutProb = 0.05
let crossProb = 0.3

let i4 = new Individual([0,0], [1,1], [2,2], [3,3], [4,4], [5,5])
// console.log(i4);
let i5 = new Individual([2,2], [5,5], [3,3], [0,0], [1,1], [4,4])
// i5.fitness = 1000
// console.log('fitness: ', i5.fitness);
i4.mate(0.5, i5);

export default Individual;
// module.exports = Individual;