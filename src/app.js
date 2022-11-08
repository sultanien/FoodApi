'use strict'

import { getMealList} from "./page/getMealList.js";
import { getMealRecipe } from "./page/getMealRecipe.js";
import { updateQuote } from "./page/updateQuote.js";


const searchBtn =  document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

searchBtn.addEventListener('click', getMealList);

mealList.addEventListener('click', getMealRecipe);


recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});

const loadApp = () => {
    updateQuote();
    console.log(updateQuote())
  };
  
window.addEventListener('load', loadApp);