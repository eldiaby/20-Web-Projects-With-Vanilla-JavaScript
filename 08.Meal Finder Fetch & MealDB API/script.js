// 'use strict';

// Variables

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.input-search');
const searchBtn = document.querySelector('.search-btn');
const randomBtn = document.querySelector('.random-btn');
const resultHeading = document.querySelector('.result-heading');
const mealsContainer = document.querySelector('.meals-container');
const mealContainer = document.querySelector('.single-meal-container');

let meals = [];

// Functions

const displayMeals = function (meals) {
  // console.log(meals);
  mealsContainer.innerHTML = '';
  meals.forEach((meal) => {
    const html = `<div class="meal" data-meal-id="${meal.idMeal}">
            <img class="meal-image" src="${meal.strMealThumb}">
            <div class="meal-info">
            <h3 class="meal-title">${meal.strMeal}</h3>
            </div>
            </div>
            `;
    mealsContainer.insertAdjacentHTML('beforeend', html);
  });
};

const searchMessage = function (message) {
  mealsContainer.innerHTML = '';
  mealContainer.innerHTML = '';
  resultHeading.innerHTML = `<h3>${message}</h3>`;
};

const getMeals = function (e) {
  e.preventDefault();

  // Clear the meal container
  mealContainer.innerHTML = '';

  // Get the search value

  if (searchInput.value) {
    const term =
      searchInput.value.trim()[0].toUpperCase() + searchInput.value.slice(1);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals === null) {
          searchMessage(
            `Ther is no search results for your term '${term}', Please try again.`
          );
        } else {
          searchMessage(`Search results for your term '${term}':`);
          displayMeals(data.meals);
          meals = data.meals;
        }
      });
  } else {
    searchMessage(`Please enter a search term.`);
  }
};

// Show meal details when click

const displayMeal = function (meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (!meal[`strIngredient${i}`]) break;

    ingredients.push(
      `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
    );
  }

  const html = `
            <div">
              <h3>${meal.strMeal}</h3>
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              <div class="single-meal-info">
                ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
                ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
              </div>
              <div class="meal-instructions">
                <p>${meal.strInstructions}</p>
                <ul>
                  ${ingredients.map((ing) => `<li>${ing}</li>`).join('')}
                </ul>
              </div>
            </div>
            `;

  mealContainer.innerHTML = html;
};

// Fetching meal by id
const getMeal = function (mealId) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then((res) => res.json())
    .then((data) => {
      displayMeal(data.meals[0]);
    });

  // displayMeal(meals.find((meal) => meal.idMeal === mealId));
};

// Event listners
searchForm.addEventListener('submit', getMeals);

mealsContainer.addEventListener('click', function (e) {
  if (!e.target.closest('.meal')) return;

  // const mealId = e.target.closest('.meal').dataset.mealId;

  // Fetching meal by id
  getMeal(e.target.closest('.meal').dataset.mealId);
});

// random meals
randomBtn.addEventListener('click', function (e) {
  e.preventDefault();

  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((res) => res.json())
    .then((data) => {
      searchMessage(`here is your random meal '${data.meals[0].strMeal}':`);
      displayMeal(data.meals[0]);
    });
});
