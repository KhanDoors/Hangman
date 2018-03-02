


//define words
var teamList = ["cowboys", "giants", "eagles", "redskins"];

var guessLeft = 9;

var winCounter = 0;

var loseCounter = 0;

var chosenWord = "";

var dashes = 0;

var lettersInTheWord = [];

var letterGuessed = "";

var wrongGuess = [];

var rightGuessDashes = [];


//randomly select the word
function getWord() { 
    chosenWord = teamList[Math.floor(Math.random() * teamList.length)];
    document.getElementById("Words").innerHTML = chosenWord;
};
//execute above function
getWord();
//create dashes for amount of letters
var answerArray = [];

for (var i = 0; i <teamList.length; i++) {

    answerArray[i] = "_";
      }

  document.getElementById("spaces").innerHTML = answerArray;
//get user input
var guess = prompt("Guess a letter, or click Cancel to stop playing.");

if (guess === null) 

 if (guess.length !== 1) {

   alert("Please enter a single letter.");

 } 
  
else if (guess.length !== 1)

for (var j = 0; j < word.length; j++) {

 if (word[j] === guess) {

     answerArray[j] = guess;

   remainingLetters--;

   }

 }

  
//compare user input to the word
function Search() {
    if (guess == answerArray) {
        document.writeln("Yes!");
    } else {
        alert("Uh-Oh");
    }
}
//win or lose

//
//alert(answerArray.join(" "));

//alert("Good job! The answer was " + word);


