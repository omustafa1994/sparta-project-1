document.addEventListener('DOMContentLoaded', function () {
  //AFTER RUNNING LIVE-SERVER A PAGE REFRESH IS REQUIRED!

  //retrieve canvas
  var canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  //*********************************************************************************************************************
  // Create objects
  //*********************************************************************************************************************

  //create background image 
  background = new Image();
  background.src = 'assets/background.png'; //source path

  //create pipe images
  pipeNorth = new Image(); //north pipe
  pipeNorth.src = 'assets/pipeNorth.png';

  pipeSouth = new Image(); //south pipe
  pipeSouth.src = 'assets/pipeSouth.png';

  //create foreground image 
  foreground = new Image();
  foreground.src = 'assets/foreground.png';

  //create bird image 
  bird = new Image();
  bird.src = 'assets/bird.png';

  //*********************************************************************************************************************
  // Draw images to canvas
  //*********************************************************************************************************************

  //draw all images using a function
  function drawAll() {
    context.drawImage(background, 0, 0); //x and y axis 
    context.drawImage(pipeNorth, 100, 0);
    context.drawImage(pipeSouth, 100, 0 + constant); //y axis is determined by pipe variable
    context.drawImage(foreground, 0, canvas.height - foreground.height); //
    context.drawImage(bird, birdAxisX, birdAxisY); //x and y axis is determined by bird variables
    birdAxisY += gravity; //adds gravity to y axis of bird
    requestAnimationFrame(drawAll); //executes code on the next available screen repaint
  }
  drawAll(); //runs all functions in a set order

  //*********************************************************************************************************************
  // Game variables
  //*********************************************************************************************************************

  //pipe variables
  var pipeGap = 100; //set distance between North pipe and South pipe
  var constant = pipeNorth.height + pipeGap; //the North pipe and pipe gap will determine height of South pipe

  //bird variables
  var birdAxisX = 10; //set x axis
  var birdAxisY = 150; //set y axis
  var gravity = 3; //set gravity

  //*********************************************************************************************************************
  // Move properties
  //*********************************************************************************************************************

});