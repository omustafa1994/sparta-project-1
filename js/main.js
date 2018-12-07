document.addEventListener('DOMContentLoaded', function () {
  //AFTER RUNNING LIVE-SERVER A PAGE REFRESH IS REQUIRED!

  //retrieve canvas
  var canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  canvas.style = "position:absolute; left: 6.3%; width: 350px; margin-top: 79px;"; //canvas position

  //*********************************************************************************************************************
  // Create objects
  //*********************************************************************************************************************

  //create background image 
  background = new Image();
  background.src = 'assets/background.png'; //source path

  //create foreground image 
  foreground = new Image();
  foreground.src = 'assets/foreground.png';

  //create bird image 
  bird1 = new Image();
  bird1.src = 'assets/bird1.png';
  bird2 = new Image();
  bird2.src = 'assets/bird2.png';
  bird3 = new Image();
  bird3.src = 'assets/bird3.png';
  bird4 = new Image();
  bird4.src = 'assets/bird4.png';

  //create start image
  start = new Image();
  start.src = 'assets/start.png';

  //create instruction image
  tap = new Image();
  tap.src = 'assets/tap.png';

  //*********************************************************************************************************************
  // Game variables
  //*********************************************************************************************************************

  //foreground variables
  var x1 = 0;
  var x2 = 288;

  //timer for bird animation
  test = Date.now()

  function animate() {
    test2 = Date.now();
    test3 = test2 - test

    if (test3 > 300) { //every 100 miliseconds the bird changes image
      context.drawImage(bird1, 10, 150);
      if (test3 > 400) //creates delay of extra 100 milliseconds for bird animation loop
        test = test2;
    } else if (test3 > 200)
      context.drawImage(bird2, 10, 150);
    else if (test3 > 100)
      context.drawImage(bird3, 10, 150);
    else
      context.drawImage(bird2, 10, 150);
  }

  //*********************************************************************************************************************
  // Draw images to canvas
  //*********************************************************************************************************************

  function drawAll() {

    context.drawImage(background, 0, 0); //x and y axis 

    context.drawImage(foreground, x1--, 400); //x axis scrolls constantly
    context.drawImage(foreground, x2--, 400);

    if (x1 < -288) { //when first image has panned, start second image 
      x1 = 288;
    }
    if (x2 < -288) {
      x2 = 288;
    }

    context.drawImage(start, 50, 20); //x and y axis 

    context.drawImage(tap, 83, 170); //x and y axis 

    animate(); //run bird flap animation

    requestAnimationFrame(drawAll); //executes code on the next available screen repaint
  }
  drawAll(); //runs all functions in a set order

});