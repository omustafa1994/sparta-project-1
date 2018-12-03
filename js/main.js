//retrieve canvas
var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');

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
// Foreground properties
//*********************************************************************************************************************/

const foregroundClass = drawForeground();
console.log(foregroundClass);

function drawForeground() {
  //create and draw foreground image 
  foregroundImage = new Image();
  foregroundImage.src = 'assets/foreground.png';
  foregroundImage.onload = function () {
    context.drawImage(foregroundImage, 0, 400);
  }
}

//*********************************************************************************************************************/
// Pipes properties
//*********************************************************************************************************************/

//variables
var pipeGap = 100; //set distance between North and South pipes
var constant = pipeNorthImage.height + pipeGap; //the North pipe & pipe gap will determine where South pipe begins

function drawPipes() {
  //create and draw pipe images
  pipeNorthImage = new Image(); //north pipe
  pipeNorthImage.src = 'assets/pipeNorth.png';
  pipeNorthImage.onload = function () {
    context.drawImage(pipeNorthImage, 100, 0); //x and y axis
  }
  pipeSouthImage = new Image(); // south pipe
  pipeSouthImage.src = 'assets/pipeSouth.png';
  pipeSouthImage.onload = function () {
    context.drawImage(pipeSouthImage, 100, 0 + constant); //x and y axis (y axis is determined by variable 'constant')
  }
}
