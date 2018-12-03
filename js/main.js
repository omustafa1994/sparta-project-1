document.addEventListener('DOMContentLoaded', function () {
  //after you run live-server you will need to refresh the page one time. 

  //retrieve canvas
  var canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  //run all functions
  function runAll() {
    drawBackground(); //1st
    drawPipes(); //2nd
    drawForeground(); //3rd
    drawBird(); //4th
    requestAnimationFrame(runAll); //allows you to execute code on the next available screen repaint
  }
  runAll(); //run all functions in set order

  //*********************************************************************************************************************
  // Background properties
  //*********************************************************************************************************************

  function drawBackground() {
    //create and draw background image 
    backgroundImage = new Image();
    backgroundImage.src = 'assets/background.png';
    backgroundImage.onload = function () { //waits for image to load then continues to next stage
      context.drawImage(backgroundImage, 0, 0); //next stage is to draw and set axis 
    }
  }

  //*********************************************************************************************************************
  // Foreground properties
  //*********************************************************************************************************************

  function drawForeground() {
    //create and draw foreground image 
    foregroundImage = new Image();
    foregroundImage.src = 'assets/foreground.png';
    foregroundImage.onload = function () {
      context.drawImage(foregroundImage, 0, 400); //x and y axis
    }
  }

  //*********************************************************************************************************************
  // Pipes properties
  //*********************************************************************************************************************

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
    pipeSouthImage = new Image(); //south pipe
    pipeSouthImage.src = 'assets/pipeSouth.png';
    pipeSouthImage.onload = function () {
      context.drawImage(pipeSouthImage, 100, 0 + constant); //x and y axis (y axis is determined by variable 'constant')
    }
  }

  //*********************************************************************************************************************
  // Bird properties
  //*********************************************************************************************************************

  var birdXaxis = 10; //set x axis
  var birdYaxis = 150; //set y axis
  var gravity = 3; //set gravity

  function drawBird() {
    //create and draw background image 
    birdImage = new Image();
    birdImage.src = 'assets/bird.png';
    birdImage.onload = function () {
      context.drawImage(birdImage, birdXaxis, birdYaxis); //x and y axis
    }
    birdYaxis += gravity; //only y axis requires gravity
  }

});