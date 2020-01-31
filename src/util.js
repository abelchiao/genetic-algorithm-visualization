import Population from './population';

export const drawPoints = (ctx, individual) => {
  const pxSize = 8;
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

export const startEvolution = population => {
  let evolveInt = setInterval(() => {
    population.createNextGen()
  })
}