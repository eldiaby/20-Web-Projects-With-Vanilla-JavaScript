'use strict';

// Variables

const mainContent = document.querySelector('.main');

const btnAddUser = document.querySelector('.add-user');
const btnDouble = document.querySelector('.double');
const btnShow = document.querySelector('.show-millionaires');
const btnSort = document.querySelector('.sort');
const btnCalcWeath = document.querySelector('.calculate-wealth');
const btnclearAllUsers = document.querySelector('.clear-all-users');

let users = [];

let userDataSet = 0;
//===================================================================================//
// Functions

// Format money
const formatMoney = function (number) {
  // pretier-ignore
  // https://medium.com/@samanthaming/format-currency-in-es6-with-intl-numberformat-f07e9b6321f9
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

// Update DOM all users
const updateDOMAllUsers = function (proeideData = users) {
  mainContent.querySelectorAll('h3').forEach((ele) => ele.remove());

  mainContent.innerHTML = `<h2 class="heading-secondry"><strong>Person</strong> Wealth</h2>`;
  proeideData.forEach((user) => {
    mainContent.insertAdjacentHTML(
      'beforeend',
      `<div class="person" data-index="${userDataSet++}"><strong> ${
        user.name
      }</strong> <span>${formatMoney(
        user.money
      )} <i class="fa-solid fa-xmark"></i> </span></div>`
    );
  });
};

// Update DOM
const updateDOM = function (user) {
  mainContent.querySelectorAll('h3').forEach((ele) => ele.remove());
  mainContent.insertAdjacentHTML(
    'beforeend',
    `<div class="person" data-index="${userDataSet++}"><strong>${
      user.name
    }</strong> <span>${formatMoney(
      user.money
    )} <i class="fa-solid fa-xmark"></i> </span> </div>`
  );
};

// Adding new object for the users array
const addUserData = function (obj) {
  users.push(obj);

  updateDOM(obj);
};

// Function to create a random user (fetch data)
const getRandomUser = function () {
  fetch(`https://randomuser.me/api/`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.results[0].name);
      const user = {
        name: `${data.results[0].name.title}. ${data.results[0].name.first} ${data.results[0].name.last}`,
        money: Math.floor(Math.random() * 1000000),
      };
      // console.log(data);
      addUserData(user);
    });
};

const init = function (times) {
  for (let i = 0; i < times; i++) {
    getRandomUser();
  }
};

// console.log(users);

// Double money button functionality
const doubleMoney = function () {
  users = users.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDOMAllUsers(users);
};

// Sort users based on the wealthy
const sortUsers = function () {
  users.sort((a, b) => b.money - a.money);
  updateDOMAllUsers();
};

// Filter the users
const filterUsers = function () {
  users = users.filter((user) => user.money > 1000000);
  updateDOMAllUsers();
};

// Calc entire money
const calcEntireMoney = function () {
  mainContent.querySelectorAll('h3').forEach((ele) => ele.remove());
  const total = users.reduce((acc, user) => (acc = acc + user.money), 0);
  mainContent.insertAdjacentHTML(
    'beforeend',
    `<h3><strong>Total</strong>${total}</ht>`
  );
};

// Remove user
const removeUser = function (e) {
  if (!e.target.closest('i')) return;

  const user = e.target.closest('.person');
  users.splice(user.dataset.index, 1);
  userDataSet = 0;
  updateDOMAllUsers();
};

// console.log(users);
init(5); //init the app with 5 users

//===================================================================================//
// Events listeners

btnAddUser.addEventListener('click', getRandomUser);

btnDouble.addEventListener('click', doubleMoney);

btnSort.addEventListener('click', sortUsers);

btnShow.addEventListener('click', filterUsers);

btnCalcWeath.addEventListener('click', calcEntireMoney);

btnclearAllUsers.addEventListener('click', (e) => {
  users = [];
  updateDOMAllUsers();
});

mainContent.addEventListener('click', removeUser);
