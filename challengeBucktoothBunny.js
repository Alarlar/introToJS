var eyeSize = 60; // Define and assign  variable
var toothLenght = 17; // Define and ssign Teeth 

ellipse(150, 70, 60, 120);  // left ear
ellipse(240, 70, 60, 120);  // right ear

ellipse(200, 170, 150, 150);    // face

fill(0, 0, 0);
ellipse(170, 150, eyeSize, eyeSize);  // left eye
ellipse(230, 150, eyeSize, eyeSize);  // right eye

line(150, 200, 250, 200);   // mouth

noFill();
rect(185, 200, 15, toothLenght); // left tooth
rect(200, 200, 15, toothLenght); // right tooth
