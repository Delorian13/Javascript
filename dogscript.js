var myDog = new Object();

myDog.name = "Dollar";
myDog.breed = "Dalmatian";
myDog.movie = "Richie Rich";
myDog.mySound = "I bark to help humans";
myDog.note = "the family dog";

function myAlert (){
    window.alert(" My name is " + myDog.name + " I am a " + myDog.breed + " I am known from " + myDog.movie + " whenever I bark " + myDog.mySound + " I am " + myDog.note );
}

myDog.showFeatures = myAlert;
myDog.showFeatures ();

