let happyCodingFont;
    
function preload() {
//loading what typeface is being used
  happyCodingFont = loadFont('https://happycoding.io/fonts/happycoding/happycoding.ttf');
}

function setup() {
//basic page setup and where the text will look and be
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, 20);
  textSize(150);
  textFont(happyCodingFont);

//to remember the width and heights of the screen
  console.log(width);
  console.log(height);
  
//the input text bar
  input = createInput();
  input.position(620,500);
  
//the button next to the input bar
  button = createButton('read me');
  button.position(input.x + input.width, 500);
  
//the results is the image generation screen
//the index.html file has the link to the 'results' page/sketch
  button.mousePressed(results);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
//creating the background and what colour the text will be  
  background(32);
  fill(255);

//writing of the title Tarot Booth
  text('Tarot', width / 2, height / 2 - 50);
  text('Booth', width / 2, height / 2 + 50);
}
