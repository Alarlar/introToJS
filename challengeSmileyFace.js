//Constructor
var SmileyFace = function(centerX, centerY) {
    this.centerX = centerX;
    this.centerY = centerY;
};

SmileyFace.prototype.draw = function() {
    fill(168, 124, 70);
    ellipse(this.centerX, this.centerY, 150, 150);
    fill(0, 0, 0);
    ellipse(this.centerX - 30, this.centerY-30, 20, 20); 
    ellipse(this.centerX + 30, this.centerY-30, 20, 20); 
    noFill(); 
    strokeWeight(3);
    arc(this.centerX, this.centerY + 10, 64, 40, 0, 180);
};

var face = new SmileyFace(200, 300);
face.draw();

SmileyFace.prototype.speak = function(message) {
    text(message, this.centerX + 50, this.centerY + 50);
};
var face0 = new SmileyFace(200, 300);
face.draw();
face.speak("Hello, smiley fcae!");

var face1 = new SmileyFace(100, 100);
face1.draw();
face1.speak("Hello evryone");

var face2 = new SmileyFace(200, 200);
face2.draw();
face2.speak("Hello class");

