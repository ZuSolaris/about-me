'use strict';
// Scoring logic
let score = -1;
// Quiz Start
let username = prompt('Nice to meet you, What is your name?');
while (username === '') {
  username = prompt('Try Again!, What is your name?');
}

console.log(username);
alert('Welcome the site of Zoe, ' + username);
// User Question Verification

function safetyNet() {
  let safetynet = prompt('Have you read the page?'); {

    while (safetynet !== 'y' && safetynet !== 'yes' && safetynet !== 'no' && safetynet !== 'n')

      safetynet = prompt('Ok just to make sure ' + username + ' one more time... Yes or No? Its not as fun if you dont read it').toLowerCase();


    if (safetynet === 'y' || safetynet === 'yes') {
      alert('Continue on!');
      score++;
    }

    else if (safetynet === 'n' || safetynet === 'no') {
      alert('Please Read & Refresh');
      document.write('PLEASE READ THROUGH THE PAGE');
    }
  }
}

safetyNet();

function questionOne() {

  let question1 = prompt('Hi ' + username + ' is my Motion City Soundtrack my favorite band?').toLowerCase();

  while (question1 !== 'y' && question1 !== 'yes' && question1 !== 'no' && question1 !== 'n') {
    question1 = prompt('Sorry thats not a valid answer ' + username + ' is my Motion City Soundtrack my favorite band?').toLowerCase();
  }

  if (question1 === 'y' || question1 === 'yes') {
    alert('*DING DING DING DING!*!');
    score++;
  } else if (question1 === 'n' || question1 === 'no') {
    alert('*INSERTBLARING HORN!*');
  }
}

questionOne();

function questionTwo() {

  let question2 = prompt('Yo ' + username + ' do I own a Mustang Cobra?').toLowerCase();

  while (question2 !== 'y' && question2 !== 'yes' && question2 !== 'no' && question2 !== 'n') {
    question2 = prompt('No thats not a valid answer ' + username + ' do I own a Mustang Cobra?').toLowerCase();

  }

  if (question2 === 'y' || question2 === 'yes') {
    alert('*DING DING DING DING!*!');
    score++;
  }
  else if (question2 === 'n' || question2 === 'no') {
    alert('*INSERTBLARING HORN!*');
  }
}

questionTwo();


function questionThree() {

  let question3 = prompt('Now on to question 3! ' + username + ' Have I ever fallen into the middle of the Pacific Ocean?').toLowerCase();

  while (question3 !== 'y' && question3 !== 'yes' && question3 !== 'no' && question3 !== 'n') {
    question3 = prompt('No thats not a valid answer ' + username + ' Have I ever fallen into the middle of the Pacific Ocean?').toLowerCase();

  }

  if (question3 === 'y' || question3 === 'yes') {
    alert('*INSERTBLARING HORN!*');

  }
  else if (question3 === 'n' || question3 === 'no') {
    alert('*DING DING DING DING!*');
    score++;
  }
}

questionThree();

function questionFour() {

  let question4 = prompt('Now on to question 4! ' + username + ' Have I gotten an animation featured by a video game?').toLowerCase();

  while (question4 !== 'y' && question4 !== 'yes' && question4 !== 'no' && question4 !== 'n') {
    question4 = prompt('No thats not a valid answer ' + username + ' ?').toLowerCase();
  }

  if (question4 === 'y' || question4 === 'yes') {
    alert('*DING DING DING DING!*!');
    score++;
  }
  else if (question4 === 'n' || question4 === 'no') {
    alert('*INSERTBLARING HORN!*');
  }
}

questionFour();

function questionFive() {

  let question5 = prompt('Now on to question 5? ' + username + ' Have I met an astronaut in person?').toLowerCase();

  while (question5 !== 'y' && question5 !== 'yes' && question5 !== 'no' && question5 !== 'n') {
    question5 = prompt('No thats not a valid answer ' + username + ' Have I met an astronaut in person?').toLowerCase();
  }

  if (question5 === 'y' || question5 === 'yes') {
    alert('*INSERTBLARING HORN*!');
  }
  else if (question5 === 'n' || question5 === 'no') {
    alert('*DING DING DING DING!*');
    score++;
  }
}

questionFive();


let chances = [1, 2, 3];


console.log(chances);

function questionSix() {

  let agequest = prompt('Guess how old I am from 20-30? You got 4 chances!');

  while (agequest !== '22') {
    agequest = prompt('Wrong try again? Guess how old I am from 20-30? You still have 4 chances!');

    if (chances.length < 1) {
      alert('Your out of chances... Better luck next time, Im actually 22!');
      break;
    }
    else if (agequest === '22') {
      alert('DING, DING, DING! I am 22 years old!');
      score++;
    }

    else if (agequest > '22') {
      alert('A little cooler!');
      chances.pop();
      console.log(chances);
    }

    else if (agequest < '22') {
      alert('A little warmer!');
      chances.pop();
      console.log(chances);
    }
  }
}

questionSix();

// let chances1 = 0;

function questionSeven() {

  let carbrands = ['ford', 'pagani', 'toyota', 'mini'];
  // let favcars = prompt('Favorite carbrands?');
  let bool = false;
  for (let i = 0; i < 6; i++) {
    let favcars = prompt('BONUS Question! What are my favorite car brands?').toLowerCase();
    for (let j = 0; j < carbrands.length; j++) {

      if (favcars === carbrands[j]) {
        alert('You are correct, the following were correct. Ford, Pagani, Toyota, and Mini!');
        bool = true;
        i = 6;
        score++;
        break;
      }
    }
    if (bool === false) {
      alert('Sorry Try again!');
    }
  }
}

questionSeven();

alert('The following car brands were correct! Ford, Pagani, Toyota, and Mini!');

alert('Congrats you completed the test! ' + username + ' you got ' + score + ' out of 7 right!, I am so proud of you!');
