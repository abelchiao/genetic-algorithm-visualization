class Individual {
  constructor(...coordinates) {
    this.geneCount = coordinates.length;
    this.genes = {};

    let shuffledCoords = coordinates.shuffle();
    console.log(shuffledCoords);
    let startPoint = shuffledCoords.pop();
    let loopCounts = shuffledCoords.length
    for (let i = 0; i < loopCounts; i++) {
      let endPoint = shuffledCoords.pop();
      this.genes[i] = [startPoint, endPoint];
      // console.log(startPoint);
      // console.log(endPoint);
      startPoint = endPoint
    };
    console.log(shuffledCoords);
    console.log(this.genes);
  }

  calculateFitness() {
    let sumDistance = 0;
    Object.values(this.genes).forEach(gene => {
      let startPoint = gene[0];
      let endPoint = gene[1];
      sumDistance += Math.sqrt((startPoint[0]-endPoint[0])**2 + (startPoint[1] - endPoint[1])**2)
    })
    console.log(sumDistance)
  }
}

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

let i = new Individual([1, 2,], [2, 3], [3, 3], [8, 4], [9, 4], [10, 17], [6, 6])
i.calculateFitness();

let i2 = new Individual([0, 0], [4, 0], [4, 4], [0, 4]);
i2.calculateFitness();