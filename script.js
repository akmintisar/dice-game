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

    currentScore += randomDiceNumberGenerator;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    player1Display.classList.toggle('player--active');
    player2Display.classList.toggle('player--active');
  } else {
    currentScore += randomDiceNumberGenerator;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }

  console.log(randomDiceNumberGenerator);
});
