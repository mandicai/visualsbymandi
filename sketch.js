var hillaryOne, hillaryTwo, hillaryThree;

var ghostOne, ghostTwo, ghostThree;

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
              "I don't practice I just perform",
              "marry brett, kill john, fuck the exterminator"];

var tick = 0;

var spookyFont;

function preload() {
  spookyFont = loadFont('assets/Tippa.ttf');
}

function setup() {
  createCanvas(640, 480);

  x = width/2;
  x2 = width/2 - 200;
  x3 = width/2 + 200;

  y = height;
  y2 = height + 200;
  y3 = height + 250;

  hillaryOne = loadImage("hc1.png");
  hillaryTwo = loadImage("hc2.png");
  hillaryThree = loadImage("hc3.png");

  ghostOne = loadImage("ghost1.png");
  ghostTwo = loadImage("ghost2.png");
  ghostThree = loadImage("ghost3.png");
  all_ghosts = [ghostOne, ghostTwo, ghostThree];

  // Create ghost objects
  for (var i=0; i<10; i++) {
    ghosts.push(new Ghost(all_ghosts));
  }

  // Pick a random quote to display
  quote = quotes[ceil(random(0, quotes.length-1))];
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

  // Load in Hillary Clinton
  image(hillaryOne, x, y);
  image(hillaryTwo, x2, y2);
  image(hillaryThree, x3, y3);

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

  // Display quotes
  drawQuote(quote);
  tick+=1;

  // Change the quote after 10 seconds
  if (tick == (60 * 10)) {
    quote = quotes[ceil(random(0, quotes.length-1))];
    tick = 0;
  }
 }

// Draw a quote
 function drawQuote(quote) {
   textSize(height/20);
   textFont(spookyFont);
   textAlign(CENTER, CENTER);
	 fill(255, 255, 255);
	 text(quote, width/8, height/4, [500]);
 }

 // Ghost class
function Ghost(all_ghosts) {
  var ghost = all_ghosts[ceil(random(0,2))];

  this.x = random(width);
  this.y = random(height/2, height);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    image(ghost, this.x, this.y);
  };
}
