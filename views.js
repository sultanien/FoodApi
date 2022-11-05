/*
"use strict";

const mealResultList = document.querySelector(".meal-result");
const mealResultElements = document.createElement('div');
mealResultElements.id = 'meal';
mealResultList.appendChild(mealResultElements);

export const generateMealList = (data) => {

  for (let i = 0; i < data.meals.length; i++) {
    const mealItem = document.createElement('div');
    mealItem.classList.add('meal-item');
    mealItem.setAttribute('data-id', `${data.meals[i].idMeal}` )
    mealItem.innerHTML = `
        <div class = "meal-img">
            <img src = "${data.meals[i].strMealThumb}" alt = "food">
        </div>
        <div class = "meal-name">
            <h3>${data.meals[i].strMeal}</h3>
            <a href = "#" class = "recipe-btn">Get Recipe</a>
        </div>
        `;
    mealResultElements.appendChild(mealItem);
  }
  // Why doesn't it give an array???
  /*
    data.meals.forEach(meal =>{
        mealResultList.innerHTML = `
        <div class = "meal-item" data-id = "${meal.idMeal}" >
        <div class = "meal-img">
            <img src = "${meal.strMealThumb}" alt = "food">
        </div>
        <div class = "meal-name">
            <h3>${meal.strMeal}</h3>
            <a href = "#" class = "recipe-btn">Get Recipe</a>
        </div>
    </div>`;

    mealResultList.appendChild('mealContainer')

    })
    */
};
*/