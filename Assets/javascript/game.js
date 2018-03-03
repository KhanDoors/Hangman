


//define words
var words = ["cowboys", "giants", "eagles", "redskins"];

var answer = [];

var guessLeft = 9;

var winCounter = 0;

var loseCounter = 0;

var chosenWord = "";

var dashes = 0;

var lettersInTheWord = [];

var letterGuessed = "";

var wrongGuess = [];

var rightGuessDashes = [];

getword();

document.onkeyup = function(event) {
  // Converts all key clicks to lowercase letters.
  letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(letterGuessed);
  startGame(letterGuessed);
  roundComplete();
};

function getword() {
  guessLeft = 9;
  var chosenWord = words[Math.floor(Math.random() * words.length)];
  console.log(chosenWord);
  lettersInTheWord = chosenWord.split("");
  console.log(lettersInTheWord);
  dashes = lettersInTheWord.length;
  rightGuessDashes = [];
  wrongGuess = [];
  for (var i = 0; i < dashes; i++) {
    rightGuessDashes.push("_");
  }
  console.log(rightGuessDashes);
  document.getElementById("guesses-left").innerHTML = guessLeft;
  document.getElementById("Words").innerHTML = rightGuessDashes;
  document.getElementById("wrong-guess").innerHTML = wrongGuess;
 };
 function startGame(letter){
   var goodLetter = false;
   for(var i =0; i < dashes; i++){
     if(chosenWord[i] === letter){
       goodLetter = true;
     }
   }
   if(goodLetter){
     for(var j = 0; j < dashes; j++){
       if(chosenWord[j] === letter){
         rightGuessDashes[j] = letter;

       }
     }
     console.log(rightGuessDashes);
   } else
   {
     wrongGuess.push(letter);
     guessLeft--;
   }
   console.log("The user pressed " + letter);

 };
 function roundComplete(){
   console.log("In round completer");

 };


var answer = [];
