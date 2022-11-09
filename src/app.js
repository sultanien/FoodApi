'use strict'

import { getMealList} from "./page/getMealList.js";
import { getMealRecipe } from "./page/getMealRecipe.js";
import { updateQuote } from "./page/updateQuote.js";


const searchBtn =  document.getElementById('search-btn');
const input = document.getElementById('search-input') ;
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

searchBtn.addEventListener('click', getMealList);

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchBtn.click();
  }
});


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
    getMealList();
    updateQuote();
  };
  
window.addEventListener('load', loadApp);
