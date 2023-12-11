var paintBrush = {
    x: 318,
    y: 253,
    img: getImage("avatars/leaf-red")
};

var paintCanvas = function() {
    imageMode(CENTER);
    image(paintBrush.img, paintBrush.x, paintBrush.y);
};
mouseMoved = function() {
    paintBrush.x = mouseX;
    paintBrush.y = mouseY;
    paintCanvas();
};

//paintCanvas();