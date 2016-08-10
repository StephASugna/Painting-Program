var myRed = 15;
var myBlue = 40;
var myGreen = 255;
var x = 50;

function square(x, y, side){
  rect(x, y, side, side);
}

function circle(x, y, diameter) {
  ellipse(x, y, diameter, diameter);
}

function mousePressed() {
  bullseye(50, 75, 100, 4, 'red', 'blue');
}



function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);

  for(var x=0; x<width; x=x+30.5){
    fill(25, 75, 20);
    ellipse(x, 300, 25, 25)
  }
}

function draw() {
  fill(myRed, myGreen, myBlue);
  square(mouseX, mouseY, 20);
  if (mouseIsPressed){
    fill(0, 0, 0);
    square(mouseX, mouseY, 20);
    myRed = myRed + 0.5;
  }
  if (myRed > 255) {
    myRed = 0;
  }
  myBlue = myBlue - 1;
  if (myBlue <= 0) {
    myBlue = 10;

  
  }
    
   
  }
  