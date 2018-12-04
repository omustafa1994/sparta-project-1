document.addEventListener('DOMContentLoaded', function () {
  //AFTER RUNNING LIVE-SERVER A PAGE REFRESH IS REQUIRED!

  //retrieve canvas
  var canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  //*********************************************************************************************************************
  // Create and draw images
  //*********************************************************************************************************************

  //create and draw background image 
  background = new Image();
  background.src = 'assets/background.png';

  //create and draw pipe images
  pipeNorth = new Image(); //north pipe
  pipeNorth.src = 'assets/pipeNorth.png';
  pipeSouth = new Image(); //south pipe
  pipeSouth.src = 'assets/pipeSouth.png';

  //create and draw foreground image 
  foreground = new Image();
  foreground.src = 'assets/foreground.png';

  //create and draw bird image 
  bird = new Image();
  bird.src = 'assets/bird.png';

  //draw all functions
  function drawAll() {
    context.drawImage(background, 0, 0); //x and y axis 
    context.drawImage(pipeNorth, 100, 0);
    context.drawImage(pipeSouth, 100, 0 + constant); //y axis is determined by var constant
    context.drawImage(foreground, 0, canvas.height - foreground.height); //y axis is determined by var constant
    context.drawImage(bird, birdAxisX, birdAxisY); //x and y axis
    birdAxisY += gravity; //only y axis of bird will require gravity
    requestAnimationFrame(drawAll); //allows you to execute code on the next available screen repaint
  }
  drawAll(); //run all functions in a set order

  //*********************************************************************************************************************
  // Game variables
  //*********************************************************************************************************************

  //pipe variables
  var pipeGap = 100; //set distance between North and South pipes
  var constant = pipeNorth.height + pipeGap; //the North pipe & pipe gap will determine where South pipe begins

  //bird variables
  var birdAxisX = 10; //set x axis
  var birdAxisY = 150; //set y axis
  var gravity = 3; //set gravity

  //*********************************************************************************************************************
  // Move properties
  //*********************************************************************************************************************

});