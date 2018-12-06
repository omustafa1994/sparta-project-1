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
  // var bird = context.drawImage(bird1, 10, 150);

  //
  start = new Image();
  start.src = 'assets/start.png';

  var x1 = 0;
  var x2 = 288;

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

    // 
    // setInterval(() => {
    //   setTimeout(() => {
    //     bird
    //   }, 100)
    //   setTimeout(() => {
    //     bird2
    //   }, 200)
    //   setTimeout(() => {
    //     bird3
    //   }, 300)
    //   setTimeout(() => {
    //     bird2
    //   }, 400)
    // }, 2)

    requestAnimationFrame(drawAll); //executes code on the next available screen repaint
  }
  drawAll(); //runs all functions in a set order

});
