draw = function() {
    background(20, 18, 18);
    fill(245, 245, 245);
textSize(30);
text("Cotton T-shirt!", 10, 30);

textSize(21);
text("100% USA Cotton", 10, 80);

textSize(16);
text("Discount for students", 10, 130);

//ellipse
fill(103, 191, 137);
stroke(170, 230, 206);
strokeWeight(-5);
beginShape();
vertex(196, 100);
vertex(257, 100);
vertex(255, 200);
vertex(215, 200);
vertex(215, 154);
endShape(CLOSE);

fill(242, 234, 230);
ellipse(300, 76, 20, 20);

fill(237, 228, 228);
line(94, 271, 222, 271);
};
