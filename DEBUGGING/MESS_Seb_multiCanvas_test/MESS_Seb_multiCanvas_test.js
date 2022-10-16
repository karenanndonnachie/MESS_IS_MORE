let pgleft, pgright, capture;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pgleft = createGraphics(width, height);
  pgright = createGraphics(width, height);
  capture = createCapture(VIDEO);
  if (width>height){
  capture.size(width, width*2/3);
  }
  else {capture.size(height*3/2, height);}
  textSize(120);
  textAlign(CENTER,CENTER);
  background(200);      
}

function draw() {
  pgleft.noStroke();
  pgleft.fill(255);
  pgleft.image(capture, 0,0,capture.width,capture.height);
  pgleft.ellipse(mouseX, mouseY, 50);
  pgright.square(mouseX, mouseY, 50)
  image(pgleft, 0, 0,width,height);
    image(pgright, 0, 0,width,height);

  text('MESS is More!', 50, 0,  width, height/2);
  circle(mouseX, mouseY, 40);
}
