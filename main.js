//retrieve canvas
var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');

//create variables

//run functions
draw_background();
pipes();

function draw_background() {
  //create and draw background image 
  background_image = new Image();
  background_image.src = 'assets/background.png';
  background_image.onload = function () {
    context.drawImage(background_image, 0, 0);
  }
}

function pipes() {
  //create and draw pipe images
  pipeNorth_image = new Image();
  pipeNorth_image.src = 'assets/pipeNorth.png';
  pipeNorth_image.onload = function () {
    context.drawImage(pipeNorth_image, 110, 0); //x and y axis
  }
  pipeSouth_image = new Image();
  pipeSouth_image.src = 'assets/pipeSouth.png';
  pipeSouth_image.onload = function () {
    context.drawImage(pipeSouth_image, 0, 0); //x and y axis
  }
}