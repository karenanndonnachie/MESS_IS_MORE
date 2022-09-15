var font1, font2, font3, spin;

function preload() {
  font1 = loadFont('data/inconsolata.otf');
  font2 = loadFont('data/DIN.otf');
  font3 = loadFont('data/coldera.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  fill(0);
  textSize(32);
  textFont(font1); //textFont(font,32);
  textAlign(CENTER);
  angleMode(DEGREES);
  spin=0;
}


function draw() {
  background(220, 170, 30, 20); //add alpha value for 'motion blur effect'
  //push();
  //textSize(width/10);
  //textFont(font1);
  //text ('inconsolata', width/2, height/2);
  //pop();
  
  //push();
  //fill(255, 0, 0);
  //textSize(mouseX/5);
  //textFont(font2);
  //text ('DIN', width/2, height/4);
  //pop();
  
  push();
  translate(width/2, height/2);
  spin = map(mouseX, 0, width, -10, 730);
  rotate(spin);
  
  textSize(mouseY/4);
  textFont(font3);
  text ('COLDERA', 0, width/20);
  pop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
