'use strict';

// Variables

const balanceTotal = document.querySelector('.balance');
const money_Income = document.querySelector('.money.income');
const money_Expense = document.querySelector('.money.expense');
const listHistory = document.querySelector('.list');

// Form variables
const form = document.querySelector('.form');
const textInput = document.querySelector('.form-text');
const amountInput = document.querySelector('.form-amount');
const formBtn = document.querySelector('.form-btn');
const errorMessage = document.querySelector('.error-message');

// const dummyTransactions = [
//   { id: 1, text: 'Flower', amount: -20 },
//   { id: 2, text: 'Salary', amount: 300 },
//   { id: 3, text: 'Book', amount: -10 },
//   { id: 4, text: 'Camera', amount: 150 },
// ];

// const localStorgeTransactions = localStorage.getItem('transactions');

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
// Functions

// Update local storage transacions
const updateLocalStorageTransacions = function () {
  localStorage.setItem('transactions', JSON.stringify(transactions));
};

// Generat transaction ID
const generatID = () => Math.floor(Math.random() * 100000000);

// Add a new transaction
const addTransaction = function (e) {
  e.preventDefault();

  if (textInput.value === '' || amountInput.value === '') {
    errorMessage.innerHTML = 'Please add a text and an amount!';
    errorMessage.style.visibility = 'visible';
  } else {
    errorMessage.innerHTML = '';

    const transaction = {
      id: generatID(),
      text: textInput.value.trim()[0].toUpperCase() + textInput.value.slice(1),
      amount: +amountInput.value,
    };

    transactions.push(transaction);
    displayTransaction(transaction);
    updateValues();
    updateLocalStorageTransacions();
    textInput.value = '';
    amountInput.value = '';
  }
};

// Format money
const formatNumbers = function (money) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(money);
};

const displayTransaction = function (transaction) {
  listHistory.insertAdjacentHTML(
    'beforeend',
    `
    <li class="${transaction.amount > 0 ? 'income' : 'expense'}">${
      transaction.text
    }<span>${transaction.amount > 0 ? '+' : '-'} ${formatNumbers(
      Math.abs(transaction.amount)
    )}</span><button type="button" class="delete-btn" data-id="${
      transaction.id
    }">x</button></li>
    `
  );
};

// Calculate the totol and income and expense and display them

const displayValue = function (element, value) {
  element.innerHTML = formatNumbers(value);
};

const updateValues = function () {
  const amounts = transactions.map((trans) => trans.amount);

  // =======================================================
  //  the income value
  // const total = amounts.reduce((acc, item) => (acc += item), 0);
  // balanceTotal.innerHTML = formatNumbers(total);

  displayValue(
    balanceTotal,
    amounts.reduce((acc, item) => (acc += item), 0)
  );

  // =======================================================
  //  the income value
  // const income = amounts
  //   .filter((item) => item > 0)
  //   .reduce((accu, item) => (accu += item), 0);
  // money_Income.innerHTML = formatNumbers(income);

  displayValue(
    money_Income,
    amounts.filter((item) => item > 0).reduce((accu, item) => (accu += item), 0)
  );

  // =======================================================
  //  the expense value

  // const expense = amounts
  //   .filter((item) => item < 0)
  //   .reduce((accu, item) => (accu += item), 0);
  // money_Expense.innerHTML = formatNumbers(expense);

  displayValue(
    money_Expense,
    amounts
      .filter((item) => item < 0)
      .reduce((accu, item) => (accu += item), 0) * -1
  );
};

// Self invoc function to init the app
const init = function () {
  listHistory.innerHTML = '';
  transactions.forEach((tran) => displayTransaction(tran));
  updateValues();
};
init();
// Events listeners
form.addEventListener('submit', addTransaction);

listHistory.addEventListener('click', function (e) {
  if (!e.target.classList.contains('delete-btn')) return;

  transactions.splice(
    transactions.findIndex((item) => item.id === +e.target.dataset.id),
    1
  );
  updateLocalStorageTransacions();
  init();
});
