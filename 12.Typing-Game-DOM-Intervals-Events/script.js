'use strict';

// Variables
const gameWordEl = document.querySelector('.game-word');
const userInput = document.querySelector('.user-input');

const scorEl = document.querySelector('.score');
const timeEl = document.querySelector('.time');

const endGameContainer = document.querySelector('.end-game-container');

const settingsBtn = document.querySelector('.settings-btn');
const settingsContainer = document.querySelector('.settings');
const settingsForm = document.querySelector('.settings-form');

const gameDifficultySelect = document.querySelector('#difficulty');

const words = [];

// Init difficulty
let difficulty;

// Init score
let randomWord;

// Init score
let score;

// Init time
let time;

// ======================================================================================
// Functions

// Set init words array
const setWords = async function () {
  let res = await fetch(
    `https://random-word-api.herokuapp.com/word?number=100`
  );
  res = await await res.json();
  words.push(...res);
};

// Get randome word
const getRandomeWord = function () {
  return words[Math.floor(Math.random() * words.length)];
};

// Display a random word in the DOM
const displayRandomWord = function () {
  gameWordEl.innerText = randomWord = getRandomeWord();
};

//  Updating the score
const scoreUpdate = function () {
  scorEl.innerText = ++score;
};

// Game over functionality
const gameOver = function () {
  endGameContainer.innerHTML = `
<h1>Time ran out!</h1>
<p>Your score is ${score}</p>
<button onclick="location.reload()">Reload</button>
  `;
  endGameContainer.style.display = 'flex';
};

// Adding the timing feature
const updateTiming = function () {
  timeEl.innerText = `${String(--time).padStart(2, '0')}s`;

  if (time === 0) {
    clearInterval(TimingInterval);
    gameOver();
  }
};
const TimingInterval = setInterval(updateTiming, 1000);

// self invoke function to init the game
(async function () {
  await setWords();
  displayRandomWord();
  userInput.focus();
  score = 0;
  setDificullty();
})();

//  Set the game difficulty
const setDificullty = function (difficulty) {
  difficulty = localStorage.getItem('difficulty') || 'easy';
  difficulty === 'hard'
    ? (time = 20)
    : difficulty === 'medium'
    ? (time = 40)
    : (time = 60);
  gameDifficultySelect.value = difficulty =
    localStorage.getItem('difficulty') || 'easy';
};
// ======================================================================================
// Events listener

userInput.addEventListener('input', (e) => {
  const userInputValue = e.target.value.toLowerCase();

  if (userInputValue === randomWord) {
    // Display another word
    displayRandomWord();

    // Update the score
    scoreUpdate();

    // Clear the input field
    e.target.value = '';

    // Update timing
    time += time;
    console.log(time);
  }
});

// Toggle Sittings display on screen
settingsBtn.addEventListener('click', () =>
  settingsContainer.classList.toggle('hide')
);

settingsForm.addEventListener('change', (e) => {
  localStorage.setItem('difficulty', e.target.value);

  // update dificullty
  setDificullty(difficulty);
});
