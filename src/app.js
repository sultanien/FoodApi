'use strict'

import { getMealList} from "./page/getMealList.js";
import { getMealRecipe } from "./page/getMealRecipe.js";
import { updateQuote } from "./page/updateQuote.js";


const searchBtn =  document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const input = document.getElementById("search-input");

searchBtn.addEventListener('click', getMealList);

mealList.addEventListener('click', getMealRecipe);


recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchBtn.click();
  }
});

const loadApp = () => {
    updateQuote();
  };
  
window.addEventListener('load', loadApp);