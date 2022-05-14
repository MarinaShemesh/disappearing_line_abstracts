console.log('line abstract');



function setup() {
  createCanvas(2000, 1750);
  background(100);
  

}


function draw() {
  
   //overly canvas with see-through rectangle
   blendMode(MULTIPLY);///makes the image darker
   noStroke();
   fill(150, 150, 150, 20);
   rect(0,0,width,height);
   noFill();
   blendMode(BLEND);
  //makes the older lines disappear
  
  
  strokeWeight(4);


  let colour = random(360);


  let startX = random(width);
  let startY = random(height);
  let endX = random(width);
  let endY = random(height);

  stroke(colour, 100, 100);

  line(startX, startY, endX, endY);


}

function mousePressed(){
  save('fade_out_line.png')
}