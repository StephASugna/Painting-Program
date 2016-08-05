var myRed = 15;
var myBlue = 40;
var myGreen = 255;

function square(x, y, side){
rect(x, y, side, side);
}

function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);
}

function draw() {
  fill(myRed, myGreen, myBlue);
  square(mouseX, mouseY, 20);
  myRed = myRed + 0.5;
  if (myRed > 255) {
    myRed = 0;
  }
  myBlue = myBlue - 1;
  if (myBlue <= 0) {
    myBlue = 10
  }
  
}