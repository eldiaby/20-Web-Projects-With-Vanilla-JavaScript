'use strict';

// DOM Elements and Variables
const container = document.querySelector('.container');
const text = document.querySelector('.text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// =============================================================//
// Functions

// Breathe animation
const breatheAnimation = function () {
  text.innerText = `Breathe In!`;
  container.classList = `container grow`;

  setTimeout(() => {
    text.innerText = `Hold!`;
    container.classList = `container hold`;

    setTimeout(() => {
      text.innerText = `Breathe Out!`;
      container.classList = `container shrink`;
    }, holdTime);
  }, breatheTime);
};

setInterval(breatheAnimation, totalTime);

// =============================================================//
// Event Listeners
