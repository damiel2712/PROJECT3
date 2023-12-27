//Make sound when the website load 
window.onload = function() {
    let siteMusic = document.getElementById("load");
    siteMusic.play();
}

let currentImage = null; // Store the reference to the current image

let siteMusic = document.getElementById("load");
//Waiting for the user to press a key
document.addEventListener('keydown', function(event) {
    let key = event.key.toLowerCase(); // Convert the pressed key to lowercase
    let audioToPlay;
    //If an image exists, delete it
    if (currentImage) {
        currentImage.remove(); // Remove the previous image if exists
        currentImage = null; // Reset current image reference
    }
    //Plays music and displays an image depending on the button pressed
    switch (key) {
        case 'a':
            handleAnimal('dragon', 'music1', 'images/fire-flames.gif');
            break;
        case 'd':
            handleAnimal('dolphin', 'music2', 'images/jumpdolfin.gif');
            break;
        case 'c':
            handleAnimal('crub', 'music3', 'images/crabGif.gif');
            break;
        case 'w':
            handleAnimal('whale', 'music4', 'images/whilgif.gif');
            break;
        case 's':
            handleAnimal('seelion', 'music5', 'images/seelion.gif');
            break;
        case 'b':
            handleAnimal('bob', 'music6', 'images/bob.gif');
            break;
        case 'r':
            handleAnimal('diver', 'music7', 'images/diver.gif');
            break;
        default:
            alert("Sorry, we don't have an animal that responds to this signal");
            break;
    }
});

// Play audio
function playAudio(audio) {
    audio.play();
}

// Stop all music 
function stopAllMusic() {
    let allAudio = document.querySelectorAll('audio');
    allAudio.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

// Function to handle button clicks
function handleButtonClick(animal) {
    if (currentImage) {
        currentImage.remove();
        currentImage = null;
    }
    //Same as the last one
    switch (animal) {
        case 'dragon':
            handleAnimal('dragon', 'music1', 'images/fire-flames.gif');
            break;
        case 'dolphin':
            handleAnimal('dolphin', 'music2', 'images/jumpdolfin.gif');
            break;
        case 'crub':
            handleAnimal('crub', 'music3', 'images/crabGif.gif');
            break;
        case 'whale':
            handleAnimal('whale', 'music4', 'images/whilgif.gif');
            break;
        case 'seelion':
            handleAnimal('seelion', 'music5', 'images/seelion.gif');
            break;
        case 'bob':
            handleAnimal('bob', 'music6', 'images/bob.gif');
            break;
        case 'diver':
            handleAnimal('diver', 'music7', 'images/diver.gif');
            break;
        default:
            break;
    }
}

// Function to handle animal actions
function handleAnimal(animal, audioId, imageSrc) {
    let audioToPlay = document.getElementById(audioId);
    stopAllMusic(); // Stop all music
    playAudio(audioToPlay);
    //Add img with class to div with ID effect
    currentImage = document.createElement('img');
    currentImage.src = imageSrc;
    currentImage.classList.add('bottomImage');
    document.getElementById('effect').appendChild(currentImage);

    audioToPlay.addEventListener('ended', function() {
        if (currentImage) {
            currentImage.remove();
            currentImage = null;
            playAudio(siteMusic);
        }
    });
}

//Function that darkens the other buttons and enlarges the current button
document.addEventListener('DOMContentLoaded', function() {
    let images = document.querySelectorAll('.buttonI');

    images.forEach(function(image) {
        image.addEventListener('mouseover', function() {
            images.forEach(function(otherImage) {
                if (otherImage !== image) {
                    otherImage.classList.add('dimmed');
                }
            });
            image.classList.add('enlarged');
        });

        image.addEventListener('mouseout', function() {
            images.forEach(function(otherImage) {
                otherImage.classList.remove('dimmed');
            });
            image.classList.remove('enlarged');
        });
    });
});