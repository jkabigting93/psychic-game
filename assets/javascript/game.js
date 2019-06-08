// Variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessesSoFar = [];

// Computer Letter Choice and User Guess
document.onkeypress = function(event) {
    var userGuess = event.key;
    var computerChoice = letters[Math.floor(Math.random() * letters.length)];

// Game Loop - Win
if (letters.indexOf(userGuess) > -1) {
    if (userGuess === computerChoice) {
        wins++;
        numGuesses = 9;
        guessesSoFar = [];
    }
    else {

// Game Loop - Already Guessed
        if (guessesSoFar.includes(userGuess)) {
        }

// Game Loop - Lose Life
        else {
            numGuesses--;
            guessesSoFar.push(userGuess);
        }
    }

// Game Loop - Lose Game
    if (numGuesses === 0) {
        numGuesses = 9;
        losses++;
        guessesSoFar = [];
    }
}   

// Rewrite Stats
document.getElementById("winsStat").innerHTML = "" + wins;
document.getElementById("lossesStat").innerHTML = "" + losses;
document.getElementById("guessesLeftStat").innerHTML = "" + numGuesses;
document.getElementById("guessesSoFarStat").innerHTML = "" + userGuess;
}