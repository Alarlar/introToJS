
draw = function() {
    noStroke();
    fill(255, 0, 0);
    //ellipse(mouseX, mouseY, 20, 20);
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 20, 20);
    }
};
