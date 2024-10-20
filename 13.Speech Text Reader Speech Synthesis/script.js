'use strict';

// Variables
const mainPageContent = document.querySelector('.main-page-content');
const voicesSelector = document.querySelector('.voices-select');
const textArea = document.querySelector('.text-area');

const readBtn = document.querySelector('.btn--read');
const toggleBtn = document.querySelector('.btn--toggle');
const closeBtn = document.querySelector('.text-box-close-btn');

const data = [
  {
    image: './img/drink.jpg',
    text: "I'm Thirsty",
  },
  {
    image: './img/food.jpg',
    text: "I'm Hungry",
  },
  {
    image: './img/tired.jpg',
    text: "I'm Tired",
  },
  {
    image: './img/hurt.jpg',
    text: "I'm Hurt",
  },
  {
    image: './img/happy.jpg',
    text: "I'm Happy",
  },
  {
    image: './img/angry.jpg',
    text: "I'm Angry",
  },
  {
    image: './img/sad.jpg',
    text: "I'm Sad",
  },
  {
    image: './img/scared.jpg',
    text: "I'm Scared",
  },
  {
    image: './img/outside.jpg',
    text: 'I Want To Go Outside',
  },
  {
    image: './img/home.jpg',
    text: 'I Want To Go Home',
  },
  {
    image: './img/school.jpg',
    text: 'I Want To Go To School',
  },
  {
    image: './img/grandma.jpg',
    text: 'I Want To Go To Grandmas',
  },
];

let voices;
const message = new SpeechSynthesisUtterance();

// ==================================================================
// Functions
// Creat speech boexes
const createBox = function (item) {
  const { image, text } = item;

  // Create the element
  const html = `
  <div class="box">
  <img src="${image}" title="${text}" alt="${text}" />
  <p class="info">${text}</p>
  </div>
  `;

  // inject the element in the DOM
  mainPageContent.insertAdjacentHTML('beforeend', html);
};

// Get voices and display it in the DOM
function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement('option');

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelector.appendChild(option);
  });
}

/* Speaking functionality */
// Set text
const setTextMessage = function (_message) {
  message.text = _message;
  speakText();
};
// Speak the text
const speakText = function () {
  speechSynthesis.speak(message);
};

// Change the voice
const serVoice = function (e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
};

// Init application function
(function () {
  data.forEach(createBox);
  window.speechSynthesis.onvoiceschanged = getVoices;
})();

// ==================================================================
// Events listeners

// Toggle the text box
toggleBtn.addEventListener('click', () =>
  document.querySelector('.text-box').classList.toggle('show')
);

// remove the text box
closeBtn.addEventListener('click', () =>
  document.querySelector('.text-box').classList.remove('show')
);

// Voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices);

// Adding speach functionality for boxes container
mainPageContent.addEventListener('click', (e) => {
  if (!e.target.closest('.box')) return;

  const target = e.target.closest('.box');
  const message = target.querySelector('.info').innerText;

  setTextMessage(message);

  target.classList.add('active');

  setTimeout(() => target.classList.remove('active'), 1000);
});

// Changing voice
voicesSelector.addEventListener('change', serVoice);

// read user input text
readBtn.addEventListener('click', () => {
  if (textArea.value === '')
    textArea.placeholder = 'Please enter a massege here to read...';
  setTextMessage(textArea.value);
});
