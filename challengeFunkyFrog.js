var x = 300;
var y = 300;
var pupilSize = 10;
noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(x, y, 200, 100); // face
ellipse(x - 50, y - 50, 40, 40); // left eye socket
ellipse(x + 50, y - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(x - 50, y - 50, 30, 30); // left eyeball
ellipse(x + 50, y - 50, 30, 30); // right eyeball

//Mouth
fill(18, 1, 1);
ellipse(x, y, 114, 79);

//Pupils
rect(x - 51, y - 57, 10, pupilSize);
rect(x + 47, y - 57, 10, pupilSize);
