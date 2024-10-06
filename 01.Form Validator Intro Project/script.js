'use strict';

// Elements variables
const form = document.querySelector('.form');
const formInputs = document.querySelectorAll('input');
const userName = document.querySelector('.input--username');
const email = document.querySelector('.input--email');
const password = document.querySelector('.input--password');
console.log(password);
const repassword = document.querySelector('.input--repassword');

// ========================================================================
// Functions

// show errors
const showError = function (input, message) {
  const controler = input.closest('.form-controller');
  controler.querySelector('.error-message').textContent = `${message}.`;
  controler.classList.add('error');
};

// show success
const showSuccess = function (input) {
  const controler = input.closest('.form-controller');
  controler.classList.remove('error');
  controler.classList.add('success');
};

// email validation
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// password validation
const validatePassword = (password) =>
  String(password).match(
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  );

const checkLength = function (input, min, max) {
  if (input.value.length > min - 1 && input.value.length < max) return true;
  else if (input.value.length < min)
    showError(input, `the lenght showld be at least ${min}`);
  else if (input.value.length > max)
    showError(input, `the length should be less than ${max}`);
};

const checkMathingPassword = function () {
  if (password.value !== repassword.value) return false;
  else return true;
};
// ========================================================================
// Events handlers

userName.addEventListener('input', function (e) {
  if (checkLength(userName, 3, 15)) showSuccess(userName);
});

email.addEventListener('input', function (e) {
  if (checkLength(this, 10, 32)) {
    if (!validateEmail(this.value)) {
      showError(this, 'this email is not valid');
    } else {
      showSuccess(this);
    }
  }
});

password.addEventListener('input', function (e) {
  if (checkLength(password, 6, 15)) {
    if (!validatePassword(password.value)) {
      showError(
        password,
        'has at least a number, and at least a special character'
      );
    } else {
      showSuccess(password);
    }
  }
});

repassword.addEventListener('input', (e) => {
  if (!checkMathingPassword()) showError(repassword, 'Passwords must maching');
  else showSuccess(repassword);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formInputs.forEach((input) => {
    if (input.value === '') showError(input, 'This field is required');
  });
});

/*
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // User name
  if (userName.value === '') {
    showError(userName, 'this field is required');
  } else {
    showSuccess(userName);
  }
  // Email
  if (email.value === '') {
    showError(email, 'this field is required');
  } else if (!validateEmail(email.value)) {
    showError(email, 'this email is not valid');
  } else {
    showSuccess(email);
  }
  // Password
  if (password.value === '') {
    showError(password, 'this field is required');
  } else if (!validatePassword(password.value)) {
    showError(
      password,
      'has at least a number, and at least a special character'
    );
  } else {
    showSuccess(password);
  }
  // repassword
  if (repassword.value === '') {
    showError(repassword, 'this field is required');
  } else {
    showSuccess(repassword);
  }
});
*/
