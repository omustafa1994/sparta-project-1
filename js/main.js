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

    if (test3 > 300) {
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

    context.drawImage(foreground, x1--, canvas.height - foreground.height);
    context.drawImage(foreground, x2--, canvas.height - foreground.height);

    if (x1 < -288) {
      x1 = 288;
    }
    if (x2 < -288) {
      x2 = 288;
    }

    context.drawImage(start, 50, 20);

    animate(); //run bird flap animation

    requestAnimationFrame(drawAll); //executes code on the next available screen repaint
  }
  drawAll(); //runs all functions in a set order

});