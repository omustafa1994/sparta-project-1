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

  //draw all functions
  function drawAll() {
    context.drawImage(background, 0, 0);
    context.drawImage(pipeNorth, 100, 0); //x and y axis
    context.drawImage(pipeSouth, 100, 0 + constant); //x and y axis (y axis is determined by variable 'constant')
    context.drawImage(foreground, 0, canvas.height - foreground.height); //x and y axis 394
    requestAnimationFrame(drawAll); //allows you to execute code on the next available screen repaint
  }
  drawAll(); //run all functions in set order

  //*********************************************************************************************************************
  // Game variables
  //*********************************************************************************************************************

  var pipeGap = 100; //set distance between North and South pipes
  var constant = pipeNorth.height + pipeGap; //the North pipe & pipe gap will determine where South pipe begins

  //*********************************************************************************************************************
  // Foreground properties
  //*********************************************************************************************************************

  //*********************************************************************************************************************
  // Pipes properties
  //*********************************************************************************************************************

  var pipe = []

  pipe[0] = {
    x: canvas.width,
    y: 0,

  }

  function drawPipes() {
    for (var i = 0; i < pipe.length; i++) {
      //create and draw pipe images
      pipeNorthImage = new Image(); //north pipe
      pipeNorthImage.src = 'assets/pipeNorth.png';
      context.drawImage(pipeNorthImage, pipe[i].x, pipe[i].y); //x and y axis
      pipeSouthImage = new Image(); //south pipe
      pipeSouthImage.src = 'assets/pipeSouth.png';
      context.drawImage(pipeSouthImage, pipe[i].x, pipe[i].y + constant); //x and y axis (y axis is determined by variable 'constant')
      pipe[i].x--;

      if (pipe[i].x == 125) {
        pipe.push({
          x: canvas.width,
          y: Math.floor(Math.random() + pipeNorthImage.height) - pipeNorthImage.height
        });
      }
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

  //*********************************************************************************************************************
  // Moving properties
  //*********************************************************************************************************************

  document.addEventListener("keyboard", moveUp);
  function moveUp() {
    birdYaxis -= 20;
  }

});