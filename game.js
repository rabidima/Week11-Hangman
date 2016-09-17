
var wordsList  = ["Alabama  ", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho"];


function selectWord(){

    // var objKeys = Object.keys(this.wordsList);
    // this.choice = objKeys[Math.floor(Math.random() * objKeys.length)];
      
        return wordsList[Math.floor(Math.random() * wordsList.length)];
    };

console.log(selectWord());

// var objKeys = Object.keys(this.wordsToPick);
//         this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];
