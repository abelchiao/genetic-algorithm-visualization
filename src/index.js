const Population = require('./population');

window.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(100, 100, 400, 300); 
  console.log('DOM fully loaded and parsed');
})

console.log('Webpack is working!');