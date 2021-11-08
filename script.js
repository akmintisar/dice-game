'use strict';

const scoreOfPlayer1 = document.querySelector('.player--0');
const scoreOfPlayer2 = document.querySelector('.player--1');
const newGame = document.querySelector('.btn--new');
const diceRoll = document.querySelector('.btn--roll');
const diceRollingButton = document.querySelector('.player--00');
const holdingGame = document.querySelector('.btn--hold');
const currentScoreOfPlayer1 = document.getElementById('current--0');
const currentScoreOfPlayer2 = document.getElementById('current--1');
const player1Display = document.querySelector('.player--0');
const player2Display = document.querySelector('.player--1');

const finalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

diceRoll.addEventListener('click', function () {
  let randomDiceNumberGenerator = Math.trunc(Math.random() * 6) + 1;
  document.querySelector('.dice').src = `dice-${randomDiceNumberGenerator}.png`;

  if (randomDiceNumberGenerator == 1) {
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    currentScore += randomDiceNumberGenerator - 1;
    if (currentScore > 20) {
      console.log(`player 2 wins!`);
      document
        .querySelector(`player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`player--${activePlayer}`)
        .classList.remove('player--active');
    }
    player1Display.classList.toggle('player--active');
    player2Display.classList.toggle('player--active');
  } else {
    currentScore += randomDiceNumberGenerator;
    if (currentScore > 20) {
      console.log(`player 1 wins!`);
      document
        .querySelector(`player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`player--${activePlayer}`)
        .classList.remove('player--active');
    }
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }

  console.log(randomDiceNumberGenerator);
});

holdingGame.addEventListener('click', function () {
  console.log(`holding clicked!`);
  document.getElementById(`score--${activePlayer}`).textContent = currentScore;

  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
});

newGame.addEventListener('click', function () {
  // document.getElementById('score--0').textContent = 0;
  // document.getElementById('score--1').textContent = 0;
  // document.getElementById('current--0').textContent = 0;
  // document.getElementById('current--1').textContent = 0;
  // currentScore = 0;
  // activePlayer = 0;
  // console.log(`need new game`);
  location.reload();
});
