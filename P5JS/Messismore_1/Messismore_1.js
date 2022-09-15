var cx,cy; //this initiates the variables for the centre of the screen

function setup() {
createCanvas(windowWidth,windowHeight);
background(255,200,100); //this sets the canvas background colour
cx=width/2 ; //this sets cx as centre horizontal
cy=height/2 ; //this sets cx as centre vertical
noStroke(); //this turns stroke off
ellipse(cx,cy, 300,400); //this makes an oval shape
stroke(0); //this turns stroke back on and makes it black
strokeWeight(10); //this makes stroke 10px wide
}

function draw() {
//background(255,200,100);
//line(cx,cy-200,mouseX,mouseY);
strokeWeight(5); //this is line thickness 5px
circle(mouseX,mouseY,20); //draws circle on mouse coordinates
line(cx,cy-200,mouseX,mouseY); //draws hairlines
circle(cx-60,cy-60,40); //lefteye
circle(cx+60,cy-60,40); //righteye
//square(cx-50,cy+40,100);
arc(cx-160, cy, 50, 150,PI,0);
rect(cx-50,cy+80,100,60,20); //this is the mouth
fill(200,200,200,100); 
strokeWeight(4);
triangle(cx,cy-20,cx-50,cy+50,cx+50,cy+50);
line(cx,cy-200,mouseX,mouseY);
}

function mousePressed(){
  background(255,200,100);
  ellipse(cx,cy, 300,400);
}