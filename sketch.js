var hc_1;
var hc_2;
var hc_3;

var x, y;
var x2;

function setup() {
  createCanvas(640, 480);

  x = width/2;
  x2 = width/2 - 200;
  x3 = width/2 + 200;

  y = height;
  y2 = height + 200;
  y3 = height + 250;

  hc_1 = loadImage("hc1.png");
  hc_2 = loadImage("hc2.png");
  hc_3 = loadImage("hc3.png");
}

function draw() {
  // Set the background color
  background(34, 47, 96);

  // Set the hill of the cemetery
  fill(60,60,60);
  noStroke();
  ellipse(320,850,1000,1000);

  textSize(72);
  fill(255, 255, 255, 51);
  text("what happened", 75, 160);
  fill(0, 102, 153);
  text("what happened", 75, 220);
  fill(0, 102, 153, 51);
  text("what happened", 75, 280);

  // Load in Hillary Clinton
  image(hc_1, x, y);
  image(hc_2, x2, y2);
  image(hc_3, x3, y3);

   // Jiggling randomly on the horizontal axis
   x = x + random(-1, 1);
   x2 = x2 + random(-1, 1);
   x3 = x3 + random(-1, 1);
   // Moving up at a constant speed
   y = y - random(1, 3);
   y2 = y2 - random(2, 4);
   y3 = y3 - random(-1, 4);
   // Reset to the bottom
   if (y < 0 && y2 < 0 && y3 < 0) {
     y = height;
     y2 = height;
     y3 = height;
     x = random(0, width/2 + 200);
     x2 = random(0, width/2 + 200);
     x3 = random(0, width/2 + 200);
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
