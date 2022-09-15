var font1;
var spin=0;
var beige;
function preload() {
  font1 = loadFont('data/AGaramondProRegular.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  fill(0);
  noStroke();
  textFont(font1);
  textSize(120);
  beige=color(247, 218, 180);
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 0, 5);
  // black text block starts here
  push();
  noStroke();
  translate(width/2, height/2);
  spin=map(mouseX, 0, width/2, 0, 360);
  rotate(spin);
  fill(beige);
  textSize(mouseY/4);
  textAlign(CENTER, CENTER);
  text('DIZZY', 0, 0);
  pop();
  // text ends here
  //red text starts here
  push();
  translate(0,50);
  rotate(30);
  fill(255,0,0);
  //text('Garamond', 0, 0);
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
