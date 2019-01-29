//retrieve canvas
var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');

//*********************************************************************************************************************
// Create objects
//*********************************************************************************************************************

//create background image 
background = new Image();
background.src = '../assets/background.png'; //source path

//create pipe images
pipeNorth = new Image(); //north pipe
pipeNorth.src = '../assets/pipeNorth.png';

pipeSouth = new Image(); //south pipe
pipeSouth.src = '../assets/pipeSouth.png';

//create foreground image 
foreground = new Image();
foreground.src = '../assets/foreground.png';

//create bird image 
bird = new Image();
bird.src = '../assets/bird1.png';

//create pipe co-ordinates
var pipe = []; //empty array 
pipe[0] = { //set x and y co-ordinates
  x: canvas.width,
  y: 0
};

//*********************************************************************************************************************
// Draw images to canvas 
//*********************************************************************************************************************

pipeSpeed = 1 //pipe speed
pipeDistance = 47 //pipe distance (needs to be odd?)

//draw all images using a function
function drawAll() {
  context.drawImage(background, 0, 0); //x and y axis 

  //loop pipes to be randomly generated
  for (var i = 0; i < pipe.length; i++) {
    constant = pipeNorth.height + pipeGap; //determines height of South pipe
    context.drawImage(pipeNorth, pipe[i].x, pipe[i].y); //x and y axis of North pipe
    context.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant); //x and y axis of South pipe
    pipe[i].x = pipe[i].x - pipeSpeed; //decrement the x axis of the generated pipes (moving effect)
    
    if (pipe[i].x == pipeDistance) { //creates distance between the generated pipes 
      pipe.push({
        x: canvas.width,
        y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height //randomly generate y axis of North pipe 
      });
    }

    //pipe speed and distance difficulty increase
    if (score >= 8) {
      pipeSpeed = 2;
      pipeDistance = 56; //(needs to be even?)
    }
 
    //scoreboard
    if (pipe[i].x == 20) { //checks if pipe x axis passes the x axis of the bird (bird being on x axis of 10)
      pointSound.play(); //play MP3 sound 
      score++; //increment score by 1 
    }

    //collision detection
    if (birdAxisX + bird.width >= pipe[i].x && birdAxisX <= pipe[i].x + pipeNorth.width && (birdAxisY <= pipe[i].y + pipeNorth.height || birdAxisY + bird.height >= pipe[i].y + constant) || birdAxisY + bird.height >= canvas.height - foreground.height) { // compares x and y axis of the bird and the pipes/the foreground to check for any overlap
      location.reload(); //reload the page if there is an overlap
    }
  }
  
  context.drawImage(foreground, 0, 400); //y axis places foreground at bottom of canvas
  context.drawImage(bird, birdAxisX, birdAxisY); //x and y axis is determined by bird variables
  velocity += gravity; //apply gravity to velocity
  birdAxisY += velocity; //apply velocity to bird y axis

  context.font = "25px Verdana"; //text font style
  context.fillText("Score : " + score, 10, 30); //x and y axis of text and score
  context.fillText("Tap space-bar", 40, 470); //x and y axis of text and score

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

var gravity = 0.15; //set gravity
var velocity = 0; //set velocity 
var lift = -3.0; //set lift 

var score = 0; //set score

//*********************************************************************************************************************
// Audio files
//*********************************************************************************************************************

// var flySound = new Audio();
var pointSound = new Audio();
pointSound.src = '../audio/points.mp3';

//*********************************************************************************************************************
// Move properties
//*********************************************************************************************************************

//playable for desktop 
document.addEventListener("keydown", checkKeyPressed, false); //event listener checks for key pressed
function checkKeyPressed(e) { //keycodes: left = 37 || up = 38 || right = 39 || down = 40
  if (e.keyCode == "32") { //if key code for SPACE is pressed then move y axis of bird
    velocity += lift; //adds lift to the current velocity 
  }
};

//playable for mobile
document.onclick = function checkKeyPressed() { //event listener checks for click pressed 
  velocity += lift; //adds lift to the current velocity 
};