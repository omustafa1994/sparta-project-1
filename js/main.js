//retrieve canvas
var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');

//variables

//run functions
drawBackground();
drawPipes();

//*********************************************************************************************************************/
// Background properties
//*********************************************************************************************************************/
function drawBackground() {
  //create and draw background image 
  backgroundImage = new Image();
  backgroundImage.src = 'assets/background.png';
  backgroundImage.onload = function () {
    context.drawImage(backgroundImage, 0, 0);
  }
}

//*********************************************************************************************************************/
// Pipes properties
//*********************************************************************************************************************/
function drawPipes() {
  //create and draw pipe images
  pipeNorthImage = new Image();
  pipeNorthImage.src = 'assets/pipeNorth.png';
  pipeNorthImage.onload = function () {
    context.drawImage(pipeNorthImage, 110, 0); //x and y axis
  }
  pipeSouthImage = new Image();
  pipeSouthImage.src = 'assets/pipeSouth.png';
  pipeSouthImage.onload = function () {
    context.drawImage(pipeSouthImage, 0, 0); //x and y axis
  }
}