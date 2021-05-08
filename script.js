'use strict';

let highScore = 0;
let score = 20;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  // when there is no guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number :(';
  }
  //when guess is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Guess!! :D';

    document.querySelector('body').style.backgroundColor = '#f19393';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when player doesnot guess right
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       'Number too High Try Again :(';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = 'You lost the game!! :(';
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       'Number too Low...Try Again!! :(';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = 'You lost the game!! :(';
  //   }
  // }
  if (guess !== secretNumber)
    if (score > 1) {
      let answer = guess > secretNumber ? ' Too high!' : ' Too low!';
      score--;
      document.querySelector('.message').textContent = `${answer} Try Again!!`;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing!!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(116, 20, 95)';
  document.querySelector('.number').style.width = '15rem';
});
