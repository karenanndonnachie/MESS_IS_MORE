//variable of total number of images without having to manually change the numbers
var totImages=78;

function preload(){
//display of the images and its range from 1-78
  let rand1=int(random(1,totImages))
  let rand2=int(random(1,totImages));
  let rand3=int(random(1,totImages));
  while(rand2 == rand1){
    let rand2=int(random(1,totImages));
  }

//rand or random functions make sure the same images arent picked at once
   while(rand3 == rand2 ||  rand3 == rand1){
    let rand3=int(random(1,totImages));
  }
  img = loadImage("data/tarot"+rand1+".jpg");
  img2 = loadImage("data/tarot"+rand2+".jpg");
  img3 = loadImage("data/tarot"+rand3+".jpg");

//loading what typeface is being used
  happyCodingFont = loadFont('https://happycoding.io/fonts/happycoding/happycoding.ttf');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
//basic page set up and where the text will look and be
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, 10);
  textSize(50);
  textFont(happyCodingFont);
  
  console.log(width);
  console.log(height);

//button to go back to home page controlled inside index.html page
  button = createButton ('nope' + '!');
  button.position (20,20);
  button.mousePressed(home);
 
//change image sizes
  img.resize (200,300);
  img2.resize (200,300);
  img3.resize (200,300);

}


function draw() {
//title of the screen
  text('You have been read', width/2, 100);

//print button next to the title
button = createButton('receipt' + '?');
  button.position(100, 20);
  
//the images and their placement on the screen
image(img,width/6, height/3);
    image(img2,width/2.4, height/3);
      image(img3,width-width/3, height/3);
        
}
