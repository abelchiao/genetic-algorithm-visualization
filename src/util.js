import Population from './population';

export const factorial = num => {
  return (num <= 1) ? 1 : num * factorial(num-1)
};

export const drawPoints = (ctx, individual) => {
  const pxSize = 5;
  const offset = pxSize / 2;
  individual.chromosome.forEach(gene => {
    ctx.fillRect(gene[0] - offset, gene[1] - offset, pxSize, pxSize);
  });
};

export const drawPaths = (ctx, individual) => {
  ctx.beginPath();
  individual.chromosome.forEach((gene, idx) => {
    if (idx === 0) {
      ctx.moveTo(gene[0], gene[1]);
    } else {
      ctx.lineTo(gene[0], gene[1]);
    }
  });

  ctx.closePath();
  ctx.stroke();
};

export const clearCanvas = canvas => {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.beginPath();
  // ctx.moveTo(0, 0);
};

export const startEvolution = (ctx, population) => {
  setInterval(() => {
    population.createNextGen();
    let fittest = population.getFittest();
    clearCanvas(canvas);
    drawPoints(ctx, fittest);
    drawPaths(ctx, fittest);
  }, 1000)
}

export const stopEvolution = () => {
  clearInterval(evolveInt);
}

export const evolutionLoop = (ctx, population) => {
  population.createNextGen();
  let fittest = population.getFittest();
  clearCanvas(canvas);
  drawPoints(ctx, fittest);
  drawPaths(ctx, fittest);
};

export const addButtonListeners = (ctx) => {
  const startBtn = document.getElementById('start');
  const stopBtn  = document.getElementById('stop');
  const resetBtn = document.getElementById('reset');
  const clearBtn = document.getElementById('clear');
  let coordinates = [];
  let evolveInt = null;
  let population;

  const beginEvol = () => {
    let population = new Population(popSize, crossProb, mutProb, ...coordinates)
    evolveInt = setInterval(() => evolutionLoop(ctx, population), 100);
  }

  const stopEvol = () => {
    clearInterval(evolveInt);
  }

  const resetPop = () => {
    clearInterval(evolveInt);
    population = new Population(popSize, crossProb, mutProb, ...coordinates)
    clearCanvas(canvas)
    const pxSize = 5;
    const offset = pxSize / 2;
    population.coordinates.forEach(gene => {
      ctx.fillRect(gene[0] - offset, gene[1] - offset, pxSize, pxSize);
    });
    console.log('resetting')
  }

  const clearPop = () => {
    clearInterval(evolveInt)
    coordinates = [];
    clearCanvas(canvas);
    console.log('clearing');
  }

  const popSizeLabel = document.getElementById('popsize-label');
  const popSizeSlider = document.getElementById('popsize-slider');
  let popSize = popSizeSlider.value;
  popSizeLabel.innerHTML = `${popSizeSlider.value}`;
  popSizeSlider.oninput = () => {
    popSize = popSizeSlider.value
    popSizeLabel.innerHTML = `${popSize}`
    console.log(popSize);
  };
  const mutationLabel = document.getElementById('mutation-label');
  const mutationSlider = document.getElementById('mutation-slider');
  let mutProb = mutationSlider.value;
  mutationLabel.innerHTML = `${mutationSlider.value}`;
  mutationSlider.oninput = () => {
    mutProb = mutationSlider.value
    mutationLabel.innerHTML = `${mutProb}`
    console.log(mutProb);
  };
  const crossLabel = document.getElementById('cross-label');
  const crossSlider = document.getElementById('cross-slider');
  let crossProb = crossSlider.value;
  crossLabel.innerHTML = `${crossSlider.value}`;
  crossSlider.oninput = () => {
    crossProb = crossSlider.value
    crossLabel.innerHTML = `${crossProb}`
    console.log(crossProb);
  };

  canvas.addEventListener('click', function (event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
    coordinates.push([x, y])
    console.log('coordinates: ', coordinates)
    const pxSize = 5;
    const offset = pxSize / 2;
    ctx.fillRect(x - offset, y - offset, pxSize, pxSize);
  }, false);

  console.log(`popsize: ${popSize}, mutprob: ${mutProb}, crossprob: ${crossProb}`)

  startBtn.addEventListener('click', beginEvol);
  stopBtn.addEventListener('click', stopEvol);
  resetBtn.addEventListener('click', resetPop);
  clearBtn.addEventListener('click', clearPop);
}

// export const addButtonListeners = (ctx, population) => {
//   const startBtn = document.getElementById('start');
//   const stopBtn  = document.getElementById('stop');
//   const resetBtn = document.getElementById('reset')
//   let evolveInt = null;

//   const beginEvol = () => {
//     evolveInt = setInterval(() => evolutionLoop(ctx, population), 100);
//   }

//   const stopEvol = () => {
//     clearInterval(evolveInt);
//   }

//   const resetPop = () => {
//     clearInterval(evolveInt);
//     population = new Population(population.popSize, population.crossProb, population.mutProb, ...population.coordinates)
//     clearCanvas(canvas)
//     const pxSize = 5;
//     const offset = pxSize / 2;
//     population.coordinates.forEach(gene => {
//       ctx.fillRect(gene[0] - offset, gene[1] - offset, pxSize, pxSize);
//     });
//     console.log('resetting')
//   }

//   startBtn.addEventListener('click', beginEvol)
//   stopBtn.addEventListener('click', stopEvol)
//   resetBtn.addEventListener('click', resetPop)
// }
