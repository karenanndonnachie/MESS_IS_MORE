var redValue, greenValue, blueValue;
var fillCol;
function setup() {
 createCanvas(windowWidth, windowHeight);
 background(120);
 fill(255,0,0);
 fillCol=0;
}

function draw() {
  //background(120);
  //fill(fillCol);
  redValue= map(mouseX, 0, width, 0, 255);
  greenValue= map(mouseY, 0, height, 0, 255);
  blueValue= map(second(), 0, 59, 0, 255);
  fill(redValue, greenValue, blueValue);
  square(mouseX-50, mouseY-50, 100);
}

function mousePressed() {
 if (fillCol==120){
  stroke(0);
  fillCol=[0];
  circle(mouseX, mouseY, 80);
 }
 else if (fillCol==0){
  stroke(0);
  fillCol=[255,0,0];
  circle(mouseX, mouseY, 80);
 }
 else {
  fillCol=120;
  noStroke();
  circle(mouseX, mouseY, 80);
 }
}
function keyPressed() {
  background(120);
}
