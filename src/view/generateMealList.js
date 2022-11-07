
"use strict";

import { getBackCard } from "../page/getIngredientsList.js";


const mealList = document.getElementById('meal');

export const generateMealList = (data) => {
    let html = '';
    if(data.meals){
        data.meals.forEach(meal => {
            html += `
            <div class = "meal-item" data-id = "${meal.idMeal}">
                <div class = 'container'>
                    <div class = 'card'>
                        <div class = "meal-img front">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = 'back'>
                        </div>
                    </div>
                </div>
                <div class = "meal-name">
                    <h3>${meal.strMeal}</h3>
                    <a href = "#" class = "recipe-btn">Get Recipe</a>
                </div>
            </div>
            `
        });
        mealList.classList.remove('not-found');
    }else {
        html = "Sorry, we didn't find any meal!";
        mealList.classList.add('not-found');
    }
    mealList.innerHTML = html;

    const mealItems = mealList.querySelectorAll('.meal-item')
    if (!mealItems || mealItems.length === 0) {
        return;
    }

    mealItems.forEach((mealItem)=>{
        const mealCard = mealItem.querySelector('.card');
        const backCardItem = mealItem.querySelector('.back');
        const id = mealItem.getAttribute('data-id');

        if(!mealCard || !id) {
            return;
        }

        const backCardHandler = async (event)=> {
            getBackCard(id, backCardItem);
            mealCard.removeEventListener('mouseover', backCardHandler);
        };

        mealCard.addEventListener('mouseover', backCardHandler);
    });
}
