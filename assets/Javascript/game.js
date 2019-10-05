// Pseudocode
// 1.	User pushes key per game instructions “Guess what letter I’m thinking of” 
// 2.	On up-key, evaluate if the User Letter matches Computer-generated Random Letter
// 3.  If User letter does not match Computer-generated Random Letter, "Your Guesses So Far"
//     displays letters chosen && "Guesses Left", with counter starting at 9, decrements by 1.

// 4.  If User letter matches Computer Letter, counter at target area "Wins" increments by 1 (without refresh)
// 5.	On up-key, “Your Guesses So Far” will display letters pushed by user 

// 6.	If User guesses letter incorrectly 9 times, restart the game without a page refresh 
// 7.  If User matches letter, this is a Win, and all counters reset except "Wins" and "Losses"

// The letters available for Computer or User to choose from.

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// VARIABLES:

// wins variable score starts at 0 and increments each time User chooses correct letter
let wins = 0;

// losses variable, also starting at 0 and increments each time the user guesses wrong nine times.  
// Then, after the 9th wrong guess, game resets, and losses starts at 0 again
let losses = 0;

//guessesLeft variable begins at 9 and decrements each time User guesses wrong
let guessesLeft = 9;

//guessesSoFar variable displays each character the User guesses, followed by a comma.  At 9 letters, the game
//resets without a refresh

let userGuess = [];


function updateWins() {
    document.querySelector("#Wins").innerHTML = "Wins: " + wins;
}

function updateLosses() {
    document.querySelector("#Losses").innerHTML = "Losses: " + losses;
}

function updateGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function updateGuessesSoFar() {
    document.querySelector("#guessesSoFar").innerHTML = "Your Guesses So Far: " + userGuess;
}

function guessCounterReset() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

//FUNCTIONS

//This function captures the User's guess (converts it to lower case in the event
// that caps lock was on), and displays that letter on screen)
document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();

    console.log(userGuess);

    //Function to update Wins.  Referenced from Week 3 Activity 34 "Questions Game".
    //Function to update Guesses Left: Used same logic as updateWins function.
    //Function to update Guesses So Far: Used same logic as updateWins function.


    // function initialize() {
    //  document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + userGuess;



    //Another Reset function I treid to no avail

    //let resetGuesses = function (resetToNine) {
    //    resetGuessesCounter += resetToNine;
    //    document.querySelector("#guessesSoFar").innerHTML = resetGuessesCounter;
    //  }
    // 

    let computerRandomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerRandomLetter);

    if (guessesLeft === 1) {
        losses++
        guessCounterReset()
        updateLosses()
        guessesLeft = 10;


    }


    if (userGuess === computerRandomLetter) {
        wins++
        updateWins();

    } else {
        guessesLeft--
        updateGuessesLeft()
        updateGuessesSoFar()
        userGuess += [];

    }



}













