  var theNumber = 0;
    
    fill(0, 0, 0);
    textSize(30);
    text("Analysis of: " + theNumber, 10, 36);
    
    text("It's positive", 10, 90);
    text("It's negative", 10, 140);
    text("It's zero", 10, 190);
    
    noFill();
    if (theNumber > 0) {
    rect(5, 60, 200, 40);
    }
    if (theNumber < 0) {
        rect(5, 108, 200, 40);
    }
    if (theNumber === 0) {
       rect(5, 154, 200, 40); 
    }
    