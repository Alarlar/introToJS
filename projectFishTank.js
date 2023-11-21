  var drawFish= function(x, y, bodyLenght, bodyHeight) {
        noStroke();
        fill(218, 227, 48);
        
        //body
        ellipse(x, y, bodyLenght, bodyHeight);
        //tail
        var tailWidth = bodyLenght / 4;
        var tailHeight = bodyHeight / 2;
        triangle(x - bodyLenght / 2, y, x - bodyLenght / 2 - tailWidth, y - tailHeight, x - bodyLenght / 2 - tailWidth, y + tailHeight);
        
        //eye
        fill(33, 28, 28);
        ellipse(x + bodyLenght / 4, y, bodyHeight / 5, bodyHeight / 5);
    };
    drawFish(100, 100, 100, 50);
    drawFish(200, 200, 200, 100);
    drawFish(300, 300, 300, 150);
    