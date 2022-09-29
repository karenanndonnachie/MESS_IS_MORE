var song;
var amp;
var started=false;

var volhistory=[];


function preload(){
  song = loadSound("YarraRiver002.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  angleMode(DEGREES);
  //layer = createGraphics(width, height)
  getAudioContext().suspend();
  amp=new p5.Amplitude();
  background('black')
  
}

function draw() {
  var vol=amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();
  
  
  translate(width/2,height/2);
  beginShape();
  for(var i = 0; i < 360; i++){
    var r=map(volhistory[i],0,1,50,1000);
    var x=r*cos(i);
    var y=r*sin(i);
    
    point(x,y);
  }
  endShape();

if (volhistory.length>360){
  volhistory.splice(0,10);
}


}

function mouseClicked() {
   if (!started){
    userStartAudio();
    started=!started;
  }
  if (song.isPlaying()) {
    song.pause();
    noLoop();
  } else {
    song.play();
    loop();
  }
}
function keyPressed() {
  if (keyCode === 82) {
  clear();
  }
  if (keyCode === ENTER) {
    save();
  } 
}
