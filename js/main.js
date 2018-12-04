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

  //
  var pipe = [];
  pipe[0] = {
    x: canvas.width,
    y: 0
  };

  //*********************************************************************************************************************
  // Draw images to canvas
  //*********************************************************************************************************************

  //draw all images using a function
  function drawAll() {
    context.drawImage(background, 0, 0); //x and y axis 

    //
    for (var i = 0; i < pipe.length; i++) {
      constant = pipeNorth.height + pipeGap;
      context.drawImage(pipeNorth, pipe[i].x, pipe[i].y); //
      context.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant); //
      pipe[i].x--;

      if (pipe[i].x == 125) {
        pipe.push({
          x: canvas.width,
          y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
        });
      }
    }

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
  var gravity = 1; //set gravity

  //*********************************************************************************************************************
  // Move properties
  //*********************************************************************************************************************

  document.addEventListener("keydown", checkKeyPressed, false); //event listener to check which key is pressed

  function checkKeyPressed(e) { //keycodes: left = 37 || up = 38 || right = 39 || down = 40
    if (e.keyCode == "38") { //if key code for UP-Arrow is pressed then move y axis of bird
      birdAxisY -= 25;
    }
  }

});