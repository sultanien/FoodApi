
"use strict";

import { backCard } from "./generateIngredients.js";


const mealList = document.getElementById('meal');

export const generateMealList = (data) => {
    let html = '';
    if(data.meals){
        data.meals.forEach(meal => {
            html += `
            <div id = "container">
            <div class = "meal-item" data-id = "${meal.idMeal}">
                    <div class = "meal-img front">
                        <img src = "${meal.strMealThumb}" alt = "food">
                    </div>
                <div class = "meal-name">
                    <h3>${meal.strMeal}</h3>
                    <a href = "#" class = "recipe-btn">Get Recipe</a>
                </div>
            </div>
            </div>
            `
            backCard(meal.idMeal);
        });
        mealList.classList.remove('not-found');
    }else {
        html = "Sorry, we didn't find any meal!";
        mealList.classList.add('not-found');
    }
    mealList.innerHTML = html;
    console.log(mealList)
}
