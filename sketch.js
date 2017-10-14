var hc_1;

function setup() {
  createCanvas(640, 480);
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
  image(hc_1, 0, 0);

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
