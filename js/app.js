'use strict';

// console.log('I have been poisoned by one of my constiguents!');

// To Do: Get user name - prompt and alert greeting back to user
let userName = prompt("What is your name?");

alert("Welcome to my site, ${userName}! Let's play a guessing game. Please answer yes or no");

// To Do: Prompt 5 yes/no questions for the user to guess and alert when they are correct/incorrect
let questionOneGuess = prompt("Do I have a daughter?").toLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y'){
    alert("You Are Correct!");
} else if(questionOneGuess === 'no' || questionOneGuess === 'n'){
    alert("You Are Incorrect");
}

// To Do: Give them a final message with their name in the alert
alert("Thanks for playing, ${userName}!");