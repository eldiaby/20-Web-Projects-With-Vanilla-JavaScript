'use strict';

// Variables
const toggleBtn = document.querySelector('.nav-toggle');
const closeModleBtn = document.querySelector('.close-btn');
const openModalCta = document.querySelector('.cta-btn');
const modal = document.querySelector('.modal-container');

// Functions

// Add event listeners
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

openModalCta.addEventListener('click', () => {
  modal.classList.add('show-modal');
});

closeModleBtn.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

//

window.addEventListener('click', (e) =>
  e.target === modal ? modal.classList.remove('show-modal') : false
);
