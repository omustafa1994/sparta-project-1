//retrieve canvas
var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');

//*********************************************************************************************************************
// Create objects
//*********************************************************************************************************************

//create background image 
background = new Image();
background.src = 'assets/background.png'; //source path

//create foreground image 
foreground = new Image();
foreground.src = 'assets/foreground.png';

//create bird image 
bird1 = new Image();
bird1.src = 'assets/bird1.png';
// bird2 = new Image();
// bird2.src = 'assets/bird2.png';
// bird3 = new Image();
// bird3.src = 'assets/bird3.png';
// bird4 = new Image();
// bird4.src = 'assets/bird4.png';

//create start image
start = new Image();
start.src = 'assets/start.png';

//create instruction image
tap = new Image();
tap.src = 'assets/tap.png';

//*********************************************************************************************************************
// Game variables
//*********************************************************************************************************************

//foreground variables
var foregroundAxisX1 = 0;
var foregroundAxisX2 = 288; // canvas width 

//*********************************************************************************************************************
// Draw images to canvas
//*********************************************************************************************************************

function drawAll() {
  context.drawImage(background, 0, 0); //x and y axis 
  
  context.drawImage(foreground, foregroundAxisX1--, 400); //x axis scrolls constantly
  context.drawImage(foreground, foregroundAxisX2--, 400);

  if (foregroundAxisX1 < -288) { //when foreground image has panned, add another
    foregroundAxisX1 = 288;
  }
  if (foregroundAxisX2 < -288) {
    foregroundAxisX2 = 288;
  }
  
  context.drawImage(start, 50, 20); //x and y axis 
  context.drawImage(tap, 83, 170); //x and y axis 
  
  // animate(); run bird flap animation
  
  requestAnimationFrame(drawAll); //executes code on the next available screen repaint
  }
  drawAll(); //runs all functions in a set order