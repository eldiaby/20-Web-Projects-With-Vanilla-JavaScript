'use strict';

// Variables
const container = document.querySelector('.container');
const seats = document.querySelector('.count');
let totalSeats = 0;
const totalPrice = document.querySelector('.total-price');

const movieSelected = document.querySelector('#movies');
let priceTecket = +movieSelected.value;

// console.log(totalPrice, totalSeats, movieSelected.value, priceTecket);
// ============================================================== //
// Functoins
const uptadeParagraph = function (seat = totalSeats, value = priceTecket) {
  seats.textContent = seat;
  totalPrice.textContent = seat * value;
};

// ============================================================== //
// Events handlers

// Change the movie
movieSelected.addEventListener('change', function (e) {
  priceTecket = +e.target.value;
  uptadeParagraph();
});

// Seats selected
container.addEventListener('click', function (e) {
  // console.log(e.target);
  const target = e.target;
  if (
    target.classList.contains('seat') &&
    !target.classList.contains('seat--occupied')
  ) {
    target.classList.toggle('seat--selected');
    if (target.classList.contains('seat--selected'))
      uptadeParagraph(++totalSeats, priceTecket);
    else {
      uptadeParagraph(--totalSeats, priceTecket);
    }
  }
});

// Adding the locale storge fearure
