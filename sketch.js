function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
  background(20)
  noFill()
  frameRate(12)
}

function draw() {
  
//  stroke (240)
  translate(width/2,height/2)
  rotate(frameCount*3)
 // var i=map(0,1,1,0,10)
  stroke(lerpColor(color('#ea0043'), color('#0fefca'), (frameCount%120)/120))
  
  ellipse(100,0,250,250)

}
