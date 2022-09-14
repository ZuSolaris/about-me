'use strict';
let username = prompt('Nice to meet you, What is your name?');

while (username === ''){
  username = prompt('Try Again!, What is your name?');
}

console.log(username);
alert('Welcome the site of Zoe, ' + username);

let safetynet =  prompt('Have you read the page?');{

  while (safetynet !== 'y' && safetynet !== 'yes' && safetynet !== 'no' && safetynet !=='n')

    safetynet = prompt('Ok just to make sure ' + username + ' one more time... Yes or No? Its not as fun if you dont read it').toLowerCase();


  if(safetynet === 'y' || safetynet === 'yes'){
    alert('Continue on!');




    let question1 = prompt('Hi ' + username + ' is my Motion City Soundtrack my favorite band?').toLowerCase();

    while (question1 !== 'y' && question1 !== 'yes' && question1 !== 'no' && question1 !=='n'){
      question1 = prompt('Sorry thats not a valid answer ' + username + ' is my Motion City Soundtrack my favorite band?').toLowerCase();
    }

    if(question1 === 'y' || question1 === 'yes'){
      alert('*DING DING DING DING!*!');} else if(question1 === 'n' || question1 === 'no'){
      alert('*INSERTBLARING HORN!*');
    }


    let question2 = prompt('Yo ' + username + ' do I own a Mustang Cobra?').toLowerCase();

    while (question2 !== 'y' && question2 !== 'yes' && question2 !== 'no' && question2 !=='n'){
      question2 = prompt('No thats not a valid answer ' + username + ' do I own a Mustang Cobra?').toLowerCase();

    }

    if(question2 === 'y' || question2 === 'yes'){
      alert('*DING DING DING DING!*!');
    }
    else if(question2 === 'n' || question2 === 'no'){
      alert('*INSERTBLARING HORN!*');
    }


    let question3 = prompt('Now on to question 3! ' + username + ' Have I ever fallen into the middle of the Pacific Ocean?').toLowerCase();

    while (question3 !== 'y' && question3 !== 'yes' && question3 !== 'no' && question3 !=='n'){
      question3 = prompt('No thats not a valid answer ' + username + ' Have I ever fallen into the middle of the Pacific Ocean?').toLowerCase();

    }

    if(question3 === 'y' || question3 === 'yes'){
      alert('*INSERTBLARING HORN!*');}
    else if(question3 === 'n' || question3 === 'no'){
      alert('*DING DING DING DING!*');}

    let question4 = prompt('Now on to question 4! ' + username + ' Have I gotten an animation featured by a video game?').toLowerCase();

    while (question4 !== 'y' && question4 !== 'yes' && question4!== 'no' && question4 !=='n')
    {
      question4 = prompt('No thats not a valid answer ' + username + ' ?').toLowerCase();}

    if(question4 === 'y' || question4 === 'yes'){
      alert('*DING DING DING DING!*!');
    }
    else if(question4 === 'n' || question4 === 'no'){
      alert('*INSERTBLARING HORN!*');
    }
    let question5 = prompt('Now on to question 5? ' + username + ' Have I met an astronaut in person?').toLowerCase();

    while (question5 !== 'y' && question5 !== 'yes' && question5!== 'no' && question5 !=='n'){
      question5 = prompt('No thats not a valid answer ' + username + ' Have I met an astronaut in person?').toLowerCase();
    }

    if(question5 === 'y' || question5 === 'yes'){
      alert('*INSERTBLARING HORN*!');
    }
    else if(question5 === 'n' || question5 === 'no'){
      alert('*DING DING DING DING!*');
    }
    alert('Welcome ' + username + ' to my Site!');
    alert('If you got more than 3 right congrats! (Grading Function still in progress!)');

  }


  else if(safetynet === 'n' || safetynet === 'no'){
    alert('Please Read & Refresh');
    document.write('PLEASE READ THROUGH THE PAGE');

  }
}
