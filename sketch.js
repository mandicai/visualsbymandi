var hc_1;
var hc_2;
var hc_3;

var ghost_1;

var x, y;
var x2;

var ghosts = []; // array of Ghost objects

function setup() {
  createCanvas(640, 480);

  // Create ghost objects
  for (var i=0; i<10; i++) {
    ghosts.push(new Ghost());
  }

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
  background(0, 0, 0);

  // Set the hill of the cemetery
  fill(60,60,60);
  noStroke();
  ellipse(320,850,1000,1000);

  for (var i=0; i<ghosts.length; i++) {
    ghosts[i].move();
    ghosts[i].display();
  }

  textSize(62);
  fill(255, 255, 255, 51);
  text("ghosts of our past", 75, 160);
  fill(255, 255, 255, 51);
  text("ghosts of our past", 75, 220);
  fill(255, 255, 255, 51);
  text("ghosts of our past", 75, 280);

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
 }

 // Jitter class
function Ghost() {
  ghost_1 = loadImage("ghost1.png");
  this.x = random(width);
  this.y = random(height);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    image(ghost_1, this.x, this.y);
  };
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
