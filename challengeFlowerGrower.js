/*************
*OBJECT TYPES
**************/
/******************
*Flower Object Type
*******************/
var Flower = function(x, y, height) {
    this.x = x;
    this.y = y;
    this.height = height;
};

Flower.prototype.growBy = function(amount) {
    this.height += amount * 2;
};

/*****************
*Tulip Object Type
******************/
var Tulip = function(x, y, height) {
    Flower.call(this, x, y, height);
};
//Set the Tulip prototype to inherit from the Flower prototype
Tulip.prototype = Object.create(Flower.prototype);

Tulip.prototype.draw = function() {
    noStroke();
    fill(16, 122, 12);
    rect(this.x, this.y, 10, -this.height);
    fill(255, 0, 0);
    // petals
    ellipse(this.x+5, this.y-this.height, 44, 44);
    triangle(this.x-16, this.y-this.height, 
            this.x+20, this.y-this.height,
            this.x-20, this.y-this.height-31);
    triangle(this.x-14, this.y-this.height, 
            this.x+24, this.y-this.height,
            this.x+3, this.y-this.height-39);
    triangle(this.x+-4, this.y-this.height, 
            this.x+26, this.y-this.height,
            this.x+29, this.y-this.height-36);
};


/*********************
*Sunflower Object Type
**********************/

var Sunflower = function(x, y, height){
    Flower.call(this, x, y, height);
};

Sunflower.prototype = Object.create(Flower.prototype);

    Sunflower.prototype.draw = function() {
    fill(16, 122, 12);
    
    rect(this.x, this.y, 10, -this.height);
    
    // petals
    stroke(0, 0, 0);
    fill(255, 221, 0);
    ellipse(this.x-10, this.y-this.height, 20, 18);
    ellipse(this.x+5, this.y-this.height-15, 20, 18);
    ellipse(this.x+5, this.y-this.height+15, 20, 18);
    ellipse(this.x+20, this.y-this.height, 20, 18);
    fill(20, 20, 20);
    ellipse(this.x+5, this.y-this.height, 20, 20);
};


/**************
*MAIN PROGRAM
***************/

/** create object instances **/
var tulip1 = new Tulip(90, 390, 150);

//Add new flower object instances
var tulip2 = new Tulip(240, 390, 100);

var sunflower1 = new Sunflower(38, 290, 100);

//Add new flower object instances
var sunflower2 = new Sunflower(186, 290, 150);

//Modify drawScene() to draw all flowers
var drawScene = function() {
    background(207, 250, 255);
    tulip1.draw();
    tulip2.draw();
    sunflower1.draw();
    sunflower2.draw();
};

mouseClicked = function() {
    tulip1.growBy(10);
    tulip2.growBy(10);
    sunflower1.growBy(20);
    sunflower2.growBy(20);
    drawScene();
};

drawScene();
