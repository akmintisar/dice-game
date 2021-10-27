'use strict';

const scoreOfPlayer1 = document.querySelector('.player--0');
const scoreOfPlayer2 = document.querySelector('.player--1');
const newGame = document.querySelector('.btn--new');
const diceRoll = document.querySelector('.btn--roll');
const diceRollingButton = document.querySelector('.player--00');
const holdingGame = document.querySelector('.btn--hold');
const currentScoreOfPlayer1 = document.getElementById('current--0');
const currentScoreOfPlayer2 = document.getElementById('current--1');

diceRoll.addEventListener('click', function () {
  let randomDiceNumberGenerator = Math.trunc(Math.random() * 6) + 1;
  document.querySelector('.dice').src = `dice-${randomDiceNumberGenerator}.png`;
  if (randomDiceNumberGenerator == 1) {
    currentScoreOfPlayer2.textContent = randomDiceNumberGenerator;
  } else {
    currentScoreOfPlayer1.textContent = randomDiceNumberGenerator;
  }

  console.log(randomDiceNumberGenerator);
});


