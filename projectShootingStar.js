noStroke();
var xPos = 19;
var yPos = 10;
var aPos = 97;
var bPos = 53;

draw = function() {
    
    background(29, 40, 115);
  
    fill(255, 242, 0);
    rect(xPos, yPos, xPos + 10, yPos + 5, yPos + 10);
    ellipse(aPos, bPos, 10, 10);
    
    xPos += 4;
    bPos += 5;
};
