
var canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d');

make_base();

function make_base() {
  base_image = new Image();
  base_image.src = 'assets/background.png';
  base_image.onload = function () {
    context.drawImage(base_image, 0, 0);
  }
}

make_base2();

function make_base2() {
  base_image2 = new Image();
  base_image2.src = 'assets/bird.png';
  base_image2.onload = function () {
    context.drawImage(base_image2, 0, 0);
  }
}