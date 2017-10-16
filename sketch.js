var hc_1, hc_2, hc_3;

var ghost_1, ghost_2, ghost_3;

var x, y, x2, y2, x3, y3;

var ghosts = []; // array of Ghost objects
var quotes = ["You're my nightmare dressed as a nightmare",
              "I don't know which I would join first: the naked donut run or the military",
              "Jello and Mormonism are of equal importance in my life",
              "That's why I've never dated anyone - no one's been up to the task",
              "Wearing a Taylor Swift shirt is a risky move on this campus",
              "I'm going to fall out of bed turning on my noise machine. That would be a noble way to go.",
              "I'm all about democracy if I'm the dictator",
              "I never want to be part of a household ... I can't be a part of the system.",
              "I want a cvs tank for spring weekend",
              "I literally threw up in my sleep",
              "I don't practice I just perform"];

var tick = 0;

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

  ghost_1 = loadImage("ghost1.png");
  ghost_2 = loadImage("ghost2.png");
  ghost_3 = loadImage("ghost3.png");
  all_ghosts = [ghost_1, ghost_2, ghost_3];

  // Create ghost objects
  for (var i=0; i<10; i++) {
    ghosts.push(new Ghost(all_ghosts));
  }

  // Pick a random quote to display
  quote = quotes[ceil(random(0, quotes.length))];
}

function draw() {
  // Set the background color
  background(0, 0, 0);

  // Set the hill of the cemetery
  fill(60,60,60);
  noStroke();
  ellipse(320,850,1000,1000);

  // Display ghosts
  for (var i=0; i<ghosts.length; i++) {
    ghosts[i].move();
    ghosts[i].display();
  }

  // Display quotes
  drawQuote(quote);
  tick+=1;

  // Change the quote after 10 seconds
  if (tick == (60 * 1)) {
    quote = quotes[ceil(random(0, quotes.length-1))];
    tick = 0;
  }

  // Load in Hillary Clinton
  image(hc_1, x, y);
  image(hc_2, x2, y2);
  image(hc_3, x3, y3);

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

// Draw a quote
 function drawQuote(quote) {
   textSize(24);
	 fill(255, 255, 255);
	 text(quote, 75, 220);
 }

 // Ghost class
function Ghost(all_ghosts) {
  var ghost = all_ghosts[ceil(random(0,2))];

  this.x = random(width);
  this.y = random(height);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    image(ghost, this.x, this.y);
  };
}
