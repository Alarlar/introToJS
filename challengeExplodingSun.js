noStroke();
// the beautiful blue sky
var sunSize = 30;

    // the starting size for the sun
    draw = function() {
     sunSize = sunSize + 1;
     // the beautiful blue sky
    background(82, 222, 240);
   
    // The sun, a little circle on the        horizon
    fill(255, 204, 0);
    ellipse(200, 298, sunSize, sunSize);

    // The land, blocking half of the sun
    fill(76, 168, 67);
    rect(0, 300, 400, 100);
    };