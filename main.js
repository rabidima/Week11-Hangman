// o   main.js will contain the logic of your app. 
// Running it in Terminal/Bash will start the game.
//
// main.js: main file requires prompt and word.js

// game object:  main game logic.
// game.wordbank: can have word bank of different words.
// game.wordsWon
// wordsWon : integer that tracks how many words have been guessed correctly.

// game.guessesRemaining : integer for guesses per word

// game.currentWrd : the word object

// game.startGame : method to start game. takes in a word object. 
// Reset guesses remaining using resetGuessesRemaining. 
// Get random word from word bank in game.js. 

// Populate currentWrd (made from Word constructor function) object with letters.
// Continue prompting user with this.keepPromptingUser.
// game.resetGuessesRemaining : resets guesses remaining to the default amount

// game.keepPromptingUser : uses prompt module and get method to retrieve and store letter user inputs. 

// Output the letter guessed to terminal. Check if letter was found using checkIfLetterFound() and save the value into a variable. 
// Use the variable to check If the user guessed incorrectly minus the number of guesses they have left via console.log. 
// If they guessed the letter correctly, then congratulate them via console.log. 
// if they guessed the word correctly, congratulate them on winning and return to exit game. 

// Render the word using wordRender() and display letters user has guessed already.  
// if guessesRemaining is greater than 0 and word has not been found, use keepPromptingUser(). 
//     Otherwise, end the game and log out what the answer was.

var Letter = require('./letter.js');
var chosenWord = require('./game.js');
var inquirer = require("inquirer");


var inputLetter = function(){

	console.log("\nGuess a letter\n");
		console.log(chosenWord);


	inquirer.prompt([{
	name: "letter",
	message: "Type the letter",

}]).then(function(answers) {
// run the constracter
		// var tryLetter = new updateGuesses('')

		console.log("\nanswer\n");
		

})
};
inputLetter();


// var lettersBank = new Word('Dima');
// console.log(lettersBank.isLetter('D'));
// console.log(lettersBank.getOrder('d'));

// console.log(lettersBank.getLetter());
// console.log(lettersBank.isALetter());

// console.log('get letter', lettersBank.getLetter());






















// end