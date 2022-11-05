import { fetchApi } from "./fetchApi.js";
import { mealRecipeModal } from "../view/mealRecipeModal.js";

export async function getMealRecipe(e){
    e.preventDefault(); //prevent the link from following the URL.
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;

        const reachedData = await fetchApi(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`);
        mealRecipeModal(reachedData.meals);
    }
}