// The word.js constructor can have the following properties:

// word: equivalent to the word passed in.
// lets: array of letter objects
// found: boolean
// getLets: method to construct letter objects from the word passed in and push the letter objects to the lets array.

// didWeFindTheWord: method that sets this.found in the word object to true or false if all letter objects have a true value in their appear property.
// checkIfLetterFound: method that checks to see if the letter that was guessed matches the letter(s) in the word.
// wordRender: render the word as string from lets objects.

//	word.js should contain all of the methods which will check the letters guessed versus the random word selected.
var Letter = require('./letter.js');

var Word = function(word){
	this.word = word;
	this.lets = [];
	this.found = false;
	this.getLets = function(word){
		for (i = 0 ; i < lenght.word; i++){

		}
	}
}


module.exports = WORD;