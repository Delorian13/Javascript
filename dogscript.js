// Constructor function to define Dog objects
function Dog(name, breed, movie, mySound, note, canTalk) {
    this.name = name;
    this.breed = breed;
    this.movie = movie;
    this.mySound = mySound;
    this.note = note;
    this.canTalk = canTalk; // Property to determine if the dog can talk

    // Method to greet and display whether the dog can talk
    this.myGreeting = function() {
        let talkMessage = this.canTalk ? "I can talk!" : "I cannot talk.";
        return "My name is " + this.name + ". I am a " + this.breed + 
               ". I am known from " + this.movie + 
               ". Whenever I bark, " + this.mySound + 
               ". I am " + this.note + ". " + talkMessage;
    };

    // Method to display the dog's details
    this.showFeatures = function() {
        window.alert(this.myGreeting());
    };
}

// Create two fictional dog objects from Wikipedia list
var scoobyDoo = new Dog("Scooby-Doo", "Great Dane", "Scooby-Doo", 
                        "I say 'Ruh-Roh'", "the mystery-solving dog", true);
var brian = new Dog("Brian Griffin", "Labrador", "Family Guy", 
                   "I am sarcastic and witty", "the intellectual dog", true);

// List of fictional dogs
var dogs = {
    "Scooby-Doo": scoobyDoo,
    "Brian Griffin": brian
};

// For...in loop to display all properties of a dog
function displayDogProperties(dog) {
    let dogInfo = "";
    for (let prop in dog) {
        if (typeof dog[prop] !== 'function') { // Avoid showing the methods
            dogInfo += `${prop}: ${dog[prop]}\n`;
        }
    }
    return dogInfo;
}

// Function to prompt user for dog selection and display dog info
function selectDog() {
    let dogName = prompt("Please enter the name of the dog (Scooby-Doo or Brian Griffin):");
    let selectedDog = dogs[dogName];

    if (selectedDog) {
        // Display selected dog's information and greet
        document.getElementById("dog-info").innerText = displayDogProperties(selectedDog);
        selectedDog.showFeatures(); // Display greeting with talk info
    } else {
        // Error message if the dog is not in the list
        window.alert("Sorry, the dog you selected does not exist in our list.");
    }
}

// Call the selectDog function when the page loads
window.onload = function() {
    selectDog();
};

