var hc_1;
var x, y;

function setup() {
  createCanvas(640, 480);
  x = width/2;
  y = height;
  hc_1 = loadImage("hc1.png");
}

function draw() {
  // Set the background color
  background(34, 47, 96);

  // Set the hill of the cemetery
  fill(168,168,170);
  noStroke();
  ellipse(320,850,1000,1000);

  // Load in Hillary Clinton
  image(hc_1, x, y);

 // Jiggling randomly on the horizontal axis
 x = x + random(-5, 5);
 // Moving up at a constant speed
 y = y - 1;

 // Reset to the bottom
 if (y < 0) {
   y = height;
 }

  // fill(255);
  // noStroke();
  // ellipse(mouseX, mouseY, 60, 60);

  // if (mouseIsPressed) {
  //   console.log("Pressed!");
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);
}
