// Creates the array that contains all the letters of the alphabet.

var computerChooses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, guesses remaining and guesses made. Guesses start at 0.
var wins = 0;
var losses = 0;
var guessesRemaining = 10;

//This variable will store the users guesses in an array called guessesMade
var guessesMade = [];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed saves it to userGuess array and changes it to lower case.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // Randomly choosing a letter from the computerChoices array. This is the Computer's guess.
    var computerGuess = computerChooses[Math.floor(Math.random() * computerChooses.length)];


    // This code will add the user's guess to guessesMade array. 
    // it will check to make sure the letter was not already chosen.
    // will also verify the characted entered is a letter of
    // the alphabet, and not a non-usable character
    if (guessesMade.indexOf(userGuess) < 0 && computerChooses.indexOf(userGuess) >= 0) {
        guessesMade[guessesMade.length] = userGuess;
        // if the letter chosen is a new letter decrease guessesRemaining by 1
        guessesRemaining--;
    }

    // if computerGuess = userGuess then record it as a win
    // and then set guessesRemaining to 9, and empty the guessesMade array
    // also make the computer choose another letter
    if (computerGuess === userGuess) {
        wins++;
        document.getElementById("niceWork").play();
        alert("You Won! Press ok to play again");
        guessesRemaining = 10;
        guessesMade = [];
        computerGuess = computerChooses[Math.floor(Math.random() * computerChooses.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesRemaining + " Guesses so far: " + guessesMade + " Computer picked: " + computerGuess);
    }

    // if guessesRemaining gets to 0 then record it as a loss
    // and then reset guessesRemaining to 10, and empty the guessesMade array
    // also have the computer make a new random pick
    if (guessesRemaining === 0) {
        losses++;
        document.getElementById("maybeNextTime").play();
        alert("The computer won! Press ok to play again");
        guessesRemaining = 10;
        guessesMade = [];
        computerGuess = computerChooses[Math.floor(Math.random() * computerChooses.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " Guesses Remaining: " + guessesRemaining + " Guesses Made: " + guessesMade + " Computer picked: " + computerGuess);
    }

    // Displaying game stats in HTML
    var html = "<p><h1>Psychic Alphabet Letter guessing game</h1></p>" + "<p><h4>Guess what letter this Computer is thinking of from A-Z.</h4></p>" + "<p><h4>You have 10 chances to guess the letter to win the game, you can't choose the same letter twice.</h4></p>" + "<p><h3>Wins: " + wins + "</h3></p>" + "<p><h3>Losses: " + losses + "</h3></p>" + "<p><h3>Guesses Remaining: " +  guessesRemaining + "</h3></p>" + "<p><h3>Letters Used: " + "" + guessesMade + " </h3></p>";
    // place html into the game ID
    document.querySelector("#game").innerHTML = html;

}