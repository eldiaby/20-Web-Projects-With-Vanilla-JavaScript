'use strict';

// Variables and elements
const showRulesBtn = document.querySelector('.btn-rules');
const rulesContainer = document.querySelector('.rules-box');
const closeRulesBtn = document.querySelector('.btn-close');

// ======================================================//
// Functions

// ======================================================//
// Event listeners
showRulesBtn.addEventListener('click', () => {
  rulesContainer.classList.add('show');
});

closeRulesBtn.addEventListener('click', () => {
  rulesContainer.classList.remove('show');
});
