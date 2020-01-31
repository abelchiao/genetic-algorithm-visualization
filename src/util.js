import Population from './population';

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

export const addButtonListeners = (ctx, population) => {
  const startBtn = document.getElementById('start');
  const stopBtn  = document.getElementById('stop');
  const resetBtn = document.getElementById('reset')
  let evolveInt = null;

  const beginEvol = () => {
    evolveInt = setInterval(() => evolutionLoop(ctx, population), 100);
  }

  const stopEvol = () => {
    clearInterval(evolveInt);
  }

  const resetPop = () => {
    clearInterval(evolveInt);
    population = new Population(population.popSize, population.crossProb, population.mutProb, ...population.coordinates)
    clearCanvas(canvas)
    const pxSize = 5;
    const offset = pxSize / 2;
    population.coordinates.forEach(gene => {
      ctx.fillRect(gene[0] - offset, gene[1] - offset, pxSize, pxSize);
    });
    console.log('resetting')
  }

  startBtn.addEventListener('click', beginEvol)
  stopBtn.addEventListener('click', stopEvol)
  resetBtn.addEventListener('click', resetPop)
}
