import { fetchApi } from "./fetchApi.js";
import { generateIngredients } from "../view/generateIngredients.js";

export async function getBackCard(id, backCardElement){
    
    const data = await fetchApi(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    let reachedData = data.meals[0];

    const ingredientsObject = Object.keys(reachedData)
        .filter((key) => key.includes('strIngredient'))
        
        .reduce((obj,key) =>{
            return Object.assign(obj, {
                [key]: reachedData[key]
              });
        }, {});
    
    const ingredients = Object.values(ingredientsObject)

    const ingredientsListElement = generateIngredients(ingredients);

    backCardElement.appendChild(ingredientsListElement);

    console.log('backCardElement', backCardElement);

}