'use strict';

//  Variables
const cardsContainer = document.querySelector('.cards-container');

const prevBtn = document.querySelector('.prev');
const currentEl = document.querySelector('.nav-current');
const nextBtn = document.querySelector('.next');

let currentActiveCard = 0;

const cardsEl = [];

const cardData = [
  {
    question: 'What must a varible begin with?',
    answer: 'A letter, $ or _.',
  },
  {
    question: 'What is a variable?',
    answer: 'Container for a piece of data.',
  },
  {
    question: 'Example of case sensitive variable?',
    answer: 'thisIsAVariable.',
  },
];

// ===============================================================================//
// Functions

const updateNavigationText = function () {
  currentEl.innerText = `${currentActiveCard + 1}/${cardData.length}`;
};

// Creat cards function
function createCards() {
  cardData.forEach((data, index) => createCard(data, index));
}

// Create card and display it on the DOM
function createCard(data, index) {
  const html = `
        <div class="card ${index === 0 ? 'active' : ''}" >
          <div class="inner-card">
            <div class="inner-card--front">
              <p>${data.question}</p>
            </div>
            <div class="inner-card--back">
              <p>${data.answer}</p>
            </div>
          </div>
        </div>
   `;

  cardsEl.push(html);
  cardsContainer.insertAdjacentHTML('beforeend', html);
}

(function () {
  createCards();
  updateNavigationText();
})();

// ===============================================================================//
// Event listener

cardsContainer.addEventListener('click', (e) => {
  const targetEle = e.target.closest('.card');
  if (!targetEle) return;
  targetEle.classList.toggle('show-answer');
});

nextBtn.addEventListener('click', () => {
  if (currentActiveCard < cardData.length)
    currentActiveCard = cardData.length - 1;
  document.querySelector('.card.active').className = 'card left';
  currentActiveCard++;
  document.querySelectorAll('.card')[currentActiveCard + 1].className =
    'card active';
});

prevBtn.addEventListener('click', () => {
  if (currentActiveCard < 0) currentActiveCard = 0;
  document.querySelector('.card.active').className = 'card right';
  currentActiveCard--;
  document.querySelectorAll('.card')[currentActiveCard + 1].className =
    'card active';
});
