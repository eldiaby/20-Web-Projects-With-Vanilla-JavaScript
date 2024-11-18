'use strict';

// Variables and elements

const droggableList = document.querySelector('.draggable-list');
const checkBtn = document.querySelector('.check-btn');

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page',
];

// ===========================================/
// Functions

// Insert list items inton DOM
const createList = function () {
  [...richestPeople]
    .map((a) => ({ value: a, index: Math.random() }))
    .sort((a, b) => a.index - b.index)
    .map((a) => a.value)
    .forEach((person, index) => {
      droggableList.insertAdjacentHTML(
        'beforeend',
        `
          <li data-index="${index}">
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
              <p class="person-name">${person}</p>
              <i class="fas fa-grip-lines" aria-hidden="true"></i>
            </div>
          </li>
      `
      );
    });
};

(function () {
  createList();
})();
// ===========================================/
// Event listeners
