'use strict';

// select players with unique id rather than class
// get element by id is faster than query selector

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore;
let activePlayer;
const scores = [0, 0];
let playing;

//initialization
const init = function () {
  //defining variables!
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  //setting the game!!
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  scores[0] = 0;
  scores[1] = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;
};

init();

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.generate  a randome number.
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. display the dice.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. check for 1 if true switch players.
    if (dice !== 1) {
      //add dice to the current score!
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayers();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to the score of active players
    scores[activePlayer] += currentScore;
    //console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //current = 0;
    // check if player's score is >=100 if so finish the game!

    if (scores[activePlayer] >= 50) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .getElementById(`current--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');

      playing = false;
    } else {
      // switch to next player
      switchPlayers();
    }
  }
});

const switchPlayers = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnNew.addEventListener('click', function () {
  init();
});
