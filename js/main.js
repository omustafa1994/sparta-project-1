document.addEventListener('DOMContentLoaded', function () {
  //AFTER RUNNING LIVE-SERVER A PAGE REFRESH IS REQUIRED!

  //retrieve canvas
  var canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  //*********************************************************************************************************************
  // Variables
  //*********************************************************************************************************************

  //create and draw background image 
  backgroundImage = new Image();
  backgroundImage.src = 'assets/background.png';


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
      context.drawImage(foregroundImage, 0, canvas.height - foregroundImage.height); //x and y axis 394
    }
  }

  //*********************************************************************************************************************
  // Pipes properties
  //*********************************************************************************************************************

  //variables
  var pipeGap = 100; //set distance between North and South pipes
  var constant = pipeNorthImage.height + pipeGap; //the North pipe & pipe gap will determine where South pipe begins
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