// o   letter.js should control whether or not a letter appears as a "_" or as itself on-screen.
// o   Both letter.js and word.js should be constructor files:
// use letter.js to store a constructor function that takes in a letter. 
// The letter constructor can have a property to check if the letter passed in is supposed to appear 
// and a method that, based on the property for the letter appearing, shows the letter or shows an underscore.

// 2) The letter.js constructor can be used inside the word.js file. 

var updateGuesses = function(letter) {

	this.letter = letter;
	this.letterIn = function (passedLetter) {
		return letter.toLowerCase().indexOf(passedLetter) > -1;
	

	}
	
};

module.exports = updateGuesses;


	

	// this.letterIn = function (passedLetter) {		// if the letter in 
	// 	return letter.toLowerCase().indexOf(passedLetter) > -1;
	// }
	// this.getOrder = function (passedLetter) {		//what index of letter
	// 	if (this.isLetter(passedLetter)) {
	// 		return word.toLowerCase().indexOf(passedLetter);
	// 	}
	// 	return null;
	// }
	// this.getLetter = function () {
	// 	return this.passedLetter;
	// }	

	// var lettersBank = new Word('Dima');
// console.log(lettersBank.isLetter('D'));
// console.log(lettersBank.getOrder('d'));
