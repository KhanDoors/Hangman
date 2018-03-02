window.onload = function () {

   
//define words
var words = ["cowboys", "giants", "eagles", "redskins"];

var word=words[Math.floor(Math.random()* words.length)];

var answer=[];

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
    chosenWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("Words").innerHTML = chosenWord;
};
//execute above function
getWord();
//create dashes for amount of letters
var answer=[];

for (var i=0; i<word.length;i++) 
{
    answer[i]="_";
      }

  document.getElementById("spaces").innerHTML = answer;
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
  
 // remaining guess
 var remainingGuess=word.length;
while(remainingGuess>0){
  alert(answer.join(" "));
  var guess=prompt("Guess a letter or cancel to quit game");
  if (guess==null){
    break;
  }
  else if (guess.length!=1){
    alert("please enter a single letter");
  }
  else {
    for (var j=0;j<word.length;j++){
      if(word[j]==guess){
        answer[j]=guess;
        remainingGuess--;
      }
    }
  }
}
alert(answer.join(" "));
alert("You Won!"+ teamlist);

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

}