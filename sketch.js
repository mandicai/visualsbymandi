function preload() {
 // for fonts
 hotFont = loadFont('assets/Znikomit.otf')
}

function setup() {
  createCanvas(640, 480)
  background(9, 68, 125)

  strokeWeight(2)
  stroke(getRandomInt(0,255),getRandomInt(0,255),getRandomInt(0,255))

  frameRate(20)

  // are_you_the_one = loadImage("areyoutheone.png")
}

// random numbers for background and hearts
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// yields rectangular coordinates from a polar equation that yields a heart graph
function rectHeart(t, scale) {
  let a = Math.sin(t)
  let b = Math.sqrt(Math.abs(Math.cos(t)))
  let c = Math.sin(t) + (7/5)
  let d = (-2 * Math.sin(t)) + 2
  let r = -(scale) *((a * b)/c + d) // polar equation

  let heart_x = (r * Math.cos(t)) + (width/2) // 320
  let heart_y = (r * Math.sin(t)) + ((height/2.75)-(scale)) //
  // bigger hearts should be moved less in terms of height

  let rec_coord = []
  rec_coord.push(heart_x)
  rec_coord.push(heart_y)
  return rec_coord
}

let a = 75
let b = 125
let c = 175
let d = 225

// rerenders continuously
function draw() {
  // are_you_the_one.resize(275,0)
  // image(are_you_the_one, width/3.5, height/6.25)

  textSize(height/10);
  textFont(hotFont);
  textAlign(CENTER, CENTER);
  fill(255);
  text('are you the one?', width/3, height/3.5, [250]);

  a++
  b++
  c++
  d++

  for(t=0;t<2*Math.PI;t+=0.001) {
      let rec_coord = rectHeart(t, a)
      line(rec_coord[0], rec_coord[1], rectHeart(t+=0.001, a)[0], rectHeart(t+=0.001, a)[1])
  }

  for(t=0;t<2*Math.PI;t+=0.001) {
      let rec_coord = rectHeart(t, b)
      line(rec_coord[0], rec_coord[1], rectHeart(t+=0.001, b)[0], rectHeart(t+=0.001, b)[1])
  }

  for(t=0;t<2*Math.PI;t+=0.001) {
      let rec_coord = rectHeart(t, c)
      line(rec_coord[0], rec_coord[1], rectHeart(t+=0.001, c)[0], rectHeart(t+=0.001, c)[1])
  }

  for(t=0;t<2*Math.PI;t+=0.001) {
      let rec_coord = rectHeart(t, d)
      line(rec_coord[0], rec_coord[1], rectHeart(t+=0.001, d)[0], rectHeart(t+=0.001, d)[1])
  }

  if (a === 125) {
    clear()
    a = 75
  }

  if (b === 175) {
    clear()
    b = 125
  }

  if (c === 225) {
    clear()
    c = 175
  }

  if (d === 275) {
    clear()
    background(getRandomInt(0,255), getRandomInt(0,255), getRandomInt(0,255))
    stroke(getRandomInt(0,255),getRandomInt(0,255),getRandomInt(0,255))
    d = 225
  }
}
