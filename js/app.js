'use strict';

// console.log('I have been poisoned by one of my constiguents!');

// To Do: Get user name - prompt and alert greeting back to user
let userName = prompt("What is your name?");

alert(`Welcome to my site, ${userName}! Let's play a guessing game. Please answer "yes" or "no", or answer "y" or "n"`);

// To Do: Prompt 5 yes/no questions for the user to guess and alert when they are correct/incorrect
let questionOneGuess = prompt("Do I have a daughter?").toLowerCase();

if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
    alert("You Are Correct!");
} else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
    alert("You Are Incorrect");
}

let questionTwoGuess = prompt("Was I in the Army?").toLowerCase();

if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
    alert("You Are Correct!");
} else if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
    alert("You Are Incorrect");
}

let questionThreeGuess = prompt("Am I a student at CodeFellows?").toLocaleLowerCase();

if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
    alert("You Are Correct!");
} else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
    alert("You Are Incorrect");
}

let questionFourGuess = prompt("Do I live in Oregon?").toLowerCase();

if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
    alert("You Are Correct!");
} else if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
    alert("You Are Incorrect");
}

let questionFiveGuess = prompt("Am I married?").toLowerCase();

if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
    alert("You Are Correct!");
} else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
    alert("You Are Incorrect");
}


// let bonusQuestionGuess = prompt("Is Joe Davitt my sage and spirit guide?").toLowerCase();

// if (bonusQuestionGuess === 'yes' || bonusQuestionGuess === 'y') {
//     alert("That is correct!");
// } else if (bonusQuestionGuess === 'no' || 'n'){
//     alert("Ohhhh, that is incorrect. Joe Davitt is a saint and I am lucky to know him.");
// }

// To Do: Give them a final message with their name in the alert
alert(`Thanks for playing, ${userName}!`);