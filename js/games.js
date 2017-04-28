var randomNumber = getRandomNumber();
var guessCounter = 0;

$('#guessingGameForm').submit(checkGuess);

function checkGuess(e) {
    var guessInput = $('#guessedNumber');
    var guessFeedback = $('#guessFeedback');
    var guess = guessInput.val();
    guessCounter++;

    if (guess > randomNumber) {
        guessFeedback.html('You guessed too high')
    } else if (guess < randomNumber) {
        guessFeedback.html('You guessed too low')
    } else {
        guessFeedback.html('You guessed right! It took you ' + guessCounter + ' tries. Start guessing to play again')
        randomNumber = getRandomNumber();
        guessCounter = 0
    }

    guessInput.val('');
    e.preventDefault();
}

function getRandomNumber() {
    return Math.floor((Math.random() * 99) + 1);
}