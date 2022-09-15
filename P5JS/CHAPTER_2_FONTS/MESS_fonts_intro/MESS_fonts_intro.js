var font1, font2, font3;

function preload() {
  font1 = loadFont('data/inconsolata.otf');
  font2 = loadFont('data/DIN.otf');
  //font3 = loadFont('data/coldera.otf');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(220);
  fill(0);
  textSize(32);
  textFont(font1); //textFont(font,32);
  textAlign(CENTER);
}


function draw() {
  push();
  textSize(32);
  textFont(font1);
  text ('inconsolata', 300,400);
  pop();
  textSize(60);
  textFont(font2);
  text ('DIN', 300,100);
  textSize(32);
  textFont(font3);
  text ('FONTYFONTS', 300,250);
}
