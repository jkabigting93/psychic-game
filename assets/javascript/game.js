// Variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

// Computer Letter Choice and User Guess
document.onkeypress = function(event) {
    var userGuess = event.key;
    var computerChoice = letters[Math.floor(Math.random() * letters.length)];

// Game Loop
if(userGuess === computerChoice){
    wins++;
}else{
    guesses--;
}

if(guesses === 0){
    losses++
}

// Rewrite Stats
document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "losses: " + losses;
document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
}