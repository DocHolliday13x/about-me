'use strict';

// console.log('I have been poisoned by one of my constiguents!');

// To Do: Get user name - prompt and alert greeting back to user

let userName = prompt("What is your name?");
let userScore = 0;

alert(`Welcome to my site, ${userName}! Let's play a guessing game. Please answer "yes" or "no", or answer "y" or "n"`);

// To Do: Prompt 5 yes/no questions for the user to guess and alert when they are correct/incorrect
let questionOneGuess = prompt("Do I have a daughter?").toLowerCase();

if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
    alert("You Are Correct!");
    userScore += 1;
} else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
    alert("You Are Incorrect");
}

let questionTwoGuess = prompt("Was I in the Army?").toLowerCase();

if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
    alert("You Are Correct!");
    userScore += 1;
} else if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
    alert("You Are Incorrect");
}

let questionThreeGuess = prompt("Am I a student at CodeFellows?").toLowerCase();

if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
    alert("You Are Correct!");
    userScore += 1;
} else if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
    alert("You Are Incorrect");
}

let questionFourGuess = prompt("Do I live in Oregon?").toLowerCase();

if (questionFourGuess === 'no' || questionTwoGuess === 'n') {
    alert("You Are Correct!");
    userScore += 1;
} else if (questionTwoGuess === 'yes' || questionFourGuess === 'y') {
    alert("You Are Incorrect");
}

let questionFiveGuess = prompt("Am I married?").toLowerCase();

if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
    alert("You Are Correct!");
    userScore += 1;
} else if (questionFiveGuess === 'no' || questionFiveGuess === 'n') {
    alert("You Are Incorrect");
}

// Lab03 Objectives

let luckyNumber = 13;
let userGuess = prompt('My lucky number is between 10 and 20. What is it?')

// Always check user input first!
// Why the fuck is this not working?! 
// NM, it's working enough now.
// Still accepts letters as a correct answer. That is NOT ok. *Bangs my head on wall repeatedly.
// Fuck it, good enough for government work.

for (let i = 0; i < 4; i++) {
    if (userGuess < 10 || userGuess > 20) {
        userGuess = prompt('You must enter a two digit number between 10 and 20.')
    }
    else if (i === 3) {
        alert(`Game Over, ${userName}! You have run out of guesses. The correct answer is 13.`)
    }
    else if (userGuess <= 12) {
        userGuess = prompt('That guess is too low. Try again!');
    } else if (userGuess >= 14) {
        userGuess = prompt('That guess is too high. Try again!');
    } else {
        alert(`Congrats ${userName}, you have guessed correctly!`);
        userScore += 1;
        break;
    }
}

// ToDo: This question will have multiple correct answers stored within an array, and the user has 6 opportunities to guess. Run until out of attempts, or until a correct answer is given.

//If we could use .includes we could do something like this
// for (let i = 0; i < 6; i++) {
//     if (topTenDest.includes(destGuess.toLowerCase)) {
    //         prompt(`Congrats ${userName}! You have guessed correctly!`)
    //         userScore +=1;
    //         break;
    //     } else if (i === 5){
        //         alert(`Game Over, ${userName}! You have run out of attempts.`)
        //     } else {
            //         prompt(`Good guess, ${userName}. But that is not one of my top ten adventure destinations. Try again!`)
            //     }
            // }
            
           
           
 // let myLife === completelyFucked
 // Attempt #4,071 - This is gonna be it, I can feel it in my bones!

const topTenDest = ['australia', 'malta', 'bahamas', 'hawaii', 'paris', 'glacier national park', 'crater lake national park', 'mount rainier', 'the moon', 'antarctica'];
let numOfGuess = 0;
let correctAns = false;

while (numOfGuess < 6 && correctAns === false) {
    let destGuess = prompt(`One more game for you, ${userName}. You have 6 attempts to guess as many of my Top 10 Adventure Destinations as you can.`).toLowerCase();
    for (let i = 0; i < topTenDest.length; i++) {
        if (destGuess === topTenDest[i]) {
            alert(`Nice Work, ${userName}! You got one! My top 10 destinations are ` + topTenDest);
            userScore += 1;
            correctAns = true;
            break;
        } 
        if (i === topTenDest.length - 1) {
            numOfGuess++;
            alert(`Nice guess ${userName}, but that is not on my list.`);
        }
    }
}



// This doesn't work either. I'm such a piece of fucking garbage.
// for (let i = 0; i < 6; i++) {
//     if (destGuess.toLowerCase === 'australia') {
//         destGuess = prompt(`Great Guess, ${userName}!`)
//         userScore +=1;
//     } else if (destGuess.toLowerCase === 'malta') {
//         destGuess = prompt(`Great Guess, ${userName}!`)
//         userScore +=1;
//     } else if (destGuess.toLowerCase === 'bahamas') {
//         destGuess = prompt(`Great Guess, ${userName}!`)
//         userScore +=1;
//     } else if (destGuess.toLowerCase === 'hawaii') {
//         destGuess = prompt(`Great Guess, ${userName}!`)
//         userScore +=1;
//     } else if (destGuess.toLowerCase === 'paris') {
//         destGuess = prompt(`Great Guess, ${userName}!`)
//         userScore +=1;
//     } else if (destGuess.toLowerCase === 'glacier national park') {
//         destGuess = prompt(`Great Guess, ${userName}!`)
//         userScore +=1;
//     } else if (destGuess.toLowerCase === 'crater lake national park') {
//         destGuess = prompt(`Great Guess, ${userName}!`)
//         userScore +=1;
//     } else if (destGuess.toLowerCase === 'mount rainier') {
//         destGuess = prompt(`Great Guess, ${userName}!`)
//         userScore +=1;
//     } else if (destGuess.toLowerCase === 'the moon') {
//         destGuess = prompt(`Great Guess, ${userName}!`)
//         userScore +=1;
//     } else if (destGuess.toLowerCase === 'antarctica') {
//         destGuess = prompt(`Great Guess, ${userName}!`)
//         userScore +=1;
//     } else if (i === 5) {
//         alert(`Game Over, ${userName}! You have ran out of attempts.`)
//     } else {
//         alert(`Ohh, that was a good guess ${userName} but that's not on my list!`)
//     }
// }



// for (let i = 0; i < 6; i++) {
//     if (i === 5) {
//         alert(`GAME OVER! ${userName} LOSES!`)
//         break;
//     } else if (destGuess)






// To Do: Give them a final message with their name in the alert
alert(`Thanks for playing, ${userName}! Your score is ${userScore}!`);

// let bonusQuestionGuess = prompt("Is Joe Davitt my sage and spirit guide?").toLowerCase();

// if (bonusQuestionGuess === 'yes' || bonusQuestionGuess === 'y') {
//     alert("That is correct!");
// } else if (bonusQuestionGuess === 'no' || 'n'){
//     alert("Ohhhh, that is incorrect. Joe Davitt is a saint and I am lucky to know him.");
// }
