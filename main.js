var canvs = document.getElementById("canvas");
var contxt = canvs.getContext("2d");

//Load images
var bird = new Image();
var background = new Image();
var foreground = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "assets/bird.png";
background.src = "assets/background.png";
foreground.src = "assets/foreground.png";
pipeNorth.src = "assets/pipeNorth.png";
pipeSouth.src = "assets/pipeSouth.png";


function draw() {
  contxt.drawImage(background, 0, 0);
}

draw();
