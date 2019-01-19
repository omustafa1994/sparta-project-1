//retrieve canvas
var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');

//*********************************************************************************************************************
// Create objects
//*********************************************************************************************************************

//create background image 
background = new Image();
background.src = '../assets/background.png'; //source path

//create foreground image 
foreground = new Image();
foreground.src = '../assets/foreground.png';

//create bird image 
bird1 = new Image();
bird1.src = '../assets/bird1.png';
bird2 = new Image();
bird2.src = '../assets/bird2.png';
bird3 = new Image();
bird3.src = '../assets/bird3.png';
bird4 = new Image();
bird4.src = '../assets/bird4.png';

//create start image
start = new Image();
start.src = '../assets/start.png';

//*********************************************************************************************************************
// Game variables
//*********************************************************************************************************************

//foreground variables
var foregroundAxisX1 = 0;
var foregroundAxisX2 = 288; //canvas width

//timer for bird animation
dateBefore = Date.now()

function animate() {
  dateAfter = Date.now();
  dateNow = dateAfter - dateBefore
  
  if (dateNow > 300) { //every 100 miliseconds the bird changes image
    context.drawImage(bird1, 10, 150);
    if (dateNow > 400) //creates delay of extra 100 milliseconds for smoother bird animation loop
    dateBefore = dateAfter;
  } else if (dateNow > 200) { //every 100 miliseconds the bird changes image
    context.drawImage(bird2, 10, 150);
  } else if (dateNow > 100) { //every 100 miliseconds the bird changes image
    context.drawImage(bird3, 10, 150);
  } else { //every 100 miliseconds the bird changes image
    context.drawImage(bird2, 10, 150);
  }
};

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

  context.font = "25px Verdana"; //text font style
  context.fillText("Click anywhere", 40, 470); //x and y axis of text and score
  context.font = "10px Verdana"; //text font style
  context.fillText("{ SOUND WARNING }", 80, 490); //x and y axis of text and score
  
  animate(); //run bird flap animation
  
  requestAnimationFrame(drawAll); //executes code on the next available screen repaint
};
drawAll(); //runs all functions in a set order