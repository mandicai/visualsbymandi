function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    console.log("Pressed!");
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
