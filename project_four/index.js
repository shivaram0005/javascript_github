const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult')
const lowOrHI = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultPara');

const p = document.createElement('p')
