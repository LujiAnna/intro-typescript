(function() {
    document.getElementById('guess-form').addEventListener("submit", compareUserGuess);

    function compareUserGuess (event) {
        event.preventDefault();

        const secretNumber = generateSecretNumber();
        const userNumber = document.getElementById('guess').value;

        if (secretNumber == userNumber) {
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        } else {
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }
    }

    function generateSecretNumber() {
        const secretNumber = getRandomArbitrary(1, 22);

        return secretNumber;
    }

    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
})();