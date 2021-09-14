"use strict";
(function () {
    document.getElementById('guess-form').addEventListener("submit", compareUserGuess);
    function compareUserGuess(event) {
        event.preventDefault();
        var secretNumber = generateSecretNumber();
        var userNumber = document.getElementById('guess').value;
        // console.log(userNumber);
        if (secretNumber == parseInt(userNumber)) {
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        }
        else {
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }
    }
    function generateSecretNumber() {
        var secretNumber = getRandomArbitrary(1, 22);
        return secretNumber;
    }
    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
})();
