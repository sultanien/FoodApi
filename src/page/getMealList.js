import { generateMealList } from "../view/generateMealList.js";
import { fetchApi } from "./fetchApi.js";

export async function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    const reachedData = await fetchApi(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`);
    generateMealList(reachedData)
}
