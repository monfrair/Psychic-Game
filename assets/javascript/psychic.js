<script type="text/javascript">
    // Creates an array that lists out all the letters of the alphabet.
      
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
      // Creating variables to hold the number of wins, losses, guesses made and guesses remaining. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessesRemaining = 9;
      
    //This variable will store users guesses in an array
    var guessesMade = [];
      
      // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      
        // Determines which key was pressed saves it to userGuess and changes it to lower case.
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      
        // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      
        
      // Add the user's guess to guessesSoFar array but 
	// only if it wasn't already previously picked by the user
	// also make sure that the character user picks is within
	// the alphabet, and not any non-usable character
	if (guessesMade.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
		guessesMade[guessesMade.length]=userGuess;
		// if it is a new letter then decrease remaining guesses by 1
		guessesRemaining--;
	}
        
        // if letterToBeGuessed is same as userGuess then record it as a win
	// and then reset guessesLeft to 9, and empty the guessesSoFar array
	// also have the computer make a new random pick
	if (computerGuess == userGuess) {
		wins++;
		console.log("You Guesses Correctly!");
		guessesRemaining = 9;
		guessesMade = [];
		computerGuess = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesRemaining + " Guesses so far: " + guessesMade + " Computer picked: " + computerGuess);

        
          // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>Your letter: " + userGuess + "</p>" +
          "<p>The computers letter: " + computerGuess + "</p>" +
          "<p>correct guesses: " + wins + "</p>" +
          "<p>incorrect guesses: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }
    };
  </script>
