// Get the viewport width
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

const context = document.querySelector('canvas').getContext('2d');

// Set canvas' size
const canvasHeight = context.canvas.height = 200;
const canvasWidth = context.canvas.width = vw * 0.8;

let rectangle = {
  height: 40,
  width: 40,
  x: 0,
  y: 0
}

// Center of the canvas
rectangle.y = (canvasHeight - rectangle.height) / 2;

let loop = () => {
  // Rectangle speed
  rectangle.x += 3;

  // Define canvas's background color and paint
  context.fillStyle = '#202020';
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  // Create rectangle shape and color red
  context.fillStyle = '#ff0000';
  context.beginPath();
  context.rect(
    rectangle.x,
    rectangle.y,
    rectangle.width,
    rectangle.height
  );
  context.fill();

  if (rectangle.x > canvasWidth)
    rectangle.x = -rectangle.width;

  // Call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

// starting looping
window.requestAnimationFrame(loop);
