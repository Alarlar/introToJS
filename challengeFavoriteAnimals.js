var myAnimals = ["Hippo", "Tiger", "Dog", "Cat", "Bear"];

fill(255, 0, 0);

var animalNum = 0;
while(animalNum < myAnimals.length) {
    text(myAnimals[animalNum], 10, 30 + animalNum*20);
    animalNum++;
}
