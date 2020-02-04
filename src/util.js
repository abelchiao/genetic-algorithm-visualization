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

export const evolutionLoop = (ctx, fittestCtx, population) => {
  population.createNextGen();
  let currentGenFittest = population.getFittest();
  clearCanvas(canvas);
  fittestCtx.clearRect(0, 0, canvas.width, canvas.height)
  // clearCanvas(fittestCanvas);
  drawPoints(ctx, currentGenFittest);
  drawPaths(ctx, currentGenFittest);
  document.getElementById('current-generation').innerHTML = population.genNumber;
  document.getElementById('individuals-screened').innerHTML = population.genNumber * population.popSize.toLocaleString();
  let fittestEver = population.fittestEver
  document.getElementById('best-distance').innerHTML = Math.floor(fittestEver.distance)

  const pxSize = 2;
  const offset = pxSize / 2;
  fittestEver.chromosome.forEach((gene, ix) => {
    fittestCtx.fillRect(gene[0]/2 - offset, gene[1]/2 - offset, pxSize, pxSize);
  });
  fittestCtx.beginPath();
  fittestEver.chromosome.forEach((gene, idx) => {
    if (idx === 0) {
      fittestCtx.moveTo(gene[0]/2, gene[1]/2);
    } else {
      fittestCtx.lineTo(gene[0]/2, gene[1]/2);
    }
  });
  fittestCtx.closePath();
  fittestCtx.stroke();
};

export const addButtonListeners = (ctx, fittestCtx) => {
  const startBtn = document.getElementById('start');
  const stopBtn  = document.getElementById('stop');
  const resetBtn = document.getElementById('reset');
  const clearBtn = document.getElementById('clear');
  let coordinates = [[407.8377416386715, 418.07147742662283],
  [360.5979273594664, 440.3050970991086],
  [309.2132865052777, 449.55456093008706],
  [257.1855974331843, 445.1895332449387],
  [208.060461173628, 427.507483466857],
  [165.18567457957127, 397.71341406724946],
  [131.48308350346423, 357.8377416386715],
  [109.24946383097844, 310.59792735946644],
  [100, 259.2132865052777],
  [104.36502768514839, 207.1855974331843],
  [122.04707746323004, 158.06046117362803],
  [151.84114686283763, 115.18567457957127],
  [191.71681929141556, 81.48308350346426],
  [238.95663357062062, 59.24946383097847],
  [290.3412744248092, 50],
  [342.36896349690255, 54.36502768514836],
  [391.49409975645904, 72.04707746323004],
  [434.3688863505157, 101.84114686283758],
  [468.0714774266228, 141.71681929141556],
  [490.3050970991086, 188.9566335706206],
  [499.55456093008706, 240.34127442480923],
  [495.1895332449387, 292.3689634969027],
  [477.507483466857, 341.49409975645904],
  [447.71341406724946, 384.3688863505157]]
  // let coordinates = [[300, 50], [100, 250], [500, 250], [300,450], [200, 80], [400, 80], [200, 420], [400, 420], [130, 150], [470, 150], [130, 350], [470,350]];
  let evolveInt = null;
  let population;

  let totalRoutesDisplay = document.getElementById('total-possible-routes')
  document.getElementById('current-generation').innerHTML = 0
  document.getElementById('individuals-screened').innerHTML = 0

  const pxSize = 5;
  const offset = pxSize / 2;
  coordinates.forEach(point => {
    ctx.fillRect(point[0] - offset, point[1] - offset, pxSize, pxSize);
  });
  totalRoutesDisplay.innerHTML = factorial(coordinates.length).toLocaleString();

  const beginEvol = () => {
    population = population ? population : new Population(popSize, crossProb, mutProb, ...coordinates)
    // let population = new Population(popSize, crossProb, mutProb, ...coordinates)
    evolveInt = setInterval(() => evolutionLoop(ctx, fittestCtx, population), 100);
    document.getElementById('starting-distance').innerHTML = Math.floor(population.getFittest().distance);
    document.getElementById('best-distance').innerHTML = Math.floor(population.fittestEver.distance)
  }

  const stopEvol = () => {
    clearInterval(evolveInt);
  }

  const resetPop = () => {
    clearInterval(evolveInt);
    population = new Population(popSize, crossProb, mutProb, ...coordinates)
    clearCanvas(canvas)
    fittestCtx.clearRect(0, 0, canvas.width, canvas.height)
    const pxSize = 5;
    const offset = pxSize / 2;
    population.coordinates.forEach(gene => {
      ctx.fillRect(gene[0] - offset, gene[1] - offset, pxSize, pxSize);
    });
    document.getElementById('current-generation').innerHTML = 0
    document.getElementById('individuals-screened').innerHTML = 0
    console.log('resetting')
  }

  const clearPop = () => {
    clearInterval(evolveInt)
    coordinates = [];
    population = null;
    clearCanvas(canvas);
    fittestCtx.clearRect(0, 0, canvas.width, canvas.height)
    console.log('clearing');
    totalRoutesDisplay.innerHTML = ''
    document.getElementById('current-generation').innerHTML = 0
    document.getElementById('individuals-screened').innerHTML = 0
    document.getElementById('starting-distance').innerHTML = '';
    document.getElementById('best-distance').innerHTML = '';
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
    totalRoutesDisplay.innerHTML = factorial(coordinates.length).toLocaleString();
  }, false);

  console.log(`popsize: ${popSize}, mutprob: ${mutProb}, crossprob: ${crossProb}`)

  startBtn.addEventListener('click', beginEvol);
  stopBtn.addEventListener('click', stopEvol);
  resetBtn.addEventListener('click', resetPop);
  clearBtn.addEventListener('click', clearPop);
}
