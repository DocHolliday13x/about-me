'use strict';

let userName = prompt('What is your name?');
let userScore = 0;

alert(`Welcome to my site, ${userName}! Let's play a guessing game. Please answer "yes" or "no", or answer "y" or "n"`);

function questionOne (){

  let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();
  if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
    alert('You Are Correct!');
    userScore += 1;
  } else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
    alert('You Are Incorrect');
  }
}
questionOne();

function questionTwo(){
  let questionTwoGuess = prompt('Was I in the Army?').toLowerCase();
  if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
    alert('You Are Correct!');
    userScore += 1;
  } else if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
    alert('You Are Incorrect');
  }
}
questionTwo();

function questionThree(){
  let questionThreeGuess = prompt('Am I a student at CodeFellows?').toLowerCase();
  if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
    alert('You Are Correct!');
    userScore += 1;
  } else if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
    alert('You Are Incorrect');
  }
}

questionThree();

function questionFour(){
  let questionFourGuess = prompt('Do I live in Oregon?').toLowerCase();
  if (questionFourGuess === 'no' || questionFourGuess === 'n') {
    alert('You Are Correct!');
    userScore += 1;
  } else if (questionFourGuess === 'yes' || questionFourGuess === 'y') {
    alert('You Are Incorrect');
  }
}

questionFour();

function questionFive(){
  let questionFiveGuess = prompt('Am I married?').toLowerCase();
  if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
    alert('You Are Correct!');
    userScore += 1;
  } else if (questionFiveGuess === 'no' || questionFiveGuess === 'n') {
    alert('You Are Incorrect');
  }
}

questionFive();

function questionSix(){
  let userGuess = +prompt('My lucky number is between 10 and 20. What is it?');
  for (let i = 0; i < 4; i++) {
    if (userGuess < 10 || userGuess > 20) {
      userGuess = prompt('You must enter a two digit number between 10 and 20.');
    }
    else if (i === 3) {
      alert(`Game Over, ${userName}! You have run out of guesses. The correct answer is 13.`);
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
}
questionSix();

function questionSeven(){
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
}
questionSeven();


alert(`Thanks for playing, ${userName}! Your score is ${userScore}!`);



