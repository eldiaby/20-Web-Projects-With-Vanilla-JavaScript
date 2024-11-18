'use strict';

// Variables and elements
const dayEl = document.querySelector('.days');
const hourEl = document.querySelector('.hours');
const minuteEl = document.querySelector('.minutes');
const secontEl = document.querySelector('.seconds');
const countdownContainer = document.querySelector('.countdown-container');

const spinner = document.querySelector('.loading');
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`january 01 ${currentYear + 1} 00:00:00`);
const year = document.querySelector('.year');

// Set the new year to the UI
year.innerText = `${new Date().getFullYear() + 1}`;
// ============================================= //
// Functins

// Display the data
const displayTimes = function (days, hours, minutes, seconds) {
  dayEl.innerHTML = days;
  hourEl.innerHTML = String(hours).padStart(2, '0');
  minuteEl.innerHTML = String(minutes).padStart(2, '0');
  secontEl.innerHTML = String(seconds).padStart(2, '0');
};

// Updating the countdowns
const updateCountdown = function () {
  const currentTime = new Date();

  const diffrence = newYearTime - currentTime;

  const days = Math.floor(diffrence / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diffrence / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diffrence / 1000 / 60) % 60;
  const seconds = Math.floor(diffrence / 1000) % 60;

  displayTimes(days, hours, minutes, seconds);
};

//
setTimeout(() => {
  spinner.remove();
  countdownContainer.style.display = 'flex';
}, 1000);

//
setInterval(
  updateCountdown,

  1000
);
// ============================================= //
// Event listeners
