import { fetchApi } from "../page/fetchApi.js";

const mealContainer = document.getElementById('container');

const listOfIngredients = document.createElement('ul');
listOfIngredients.id = 'uid-list';

export async function backCard(id){

    const data = await fetchApi(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    let reachedData = data.meals[0];

    const ingredients = Object.keys(reachedData)
        .filter((key) => key.includes('strIngredient'))
        .reduce((obj,key) =>{
            return Object.assign(obj, {
                [key]: reachedData[key]
              });
        }, {});
        
    generateIngredients(ingredients);
}


const generateIngredients = async (data) => {

    const object = await data;
    let html = '';


    if(data){
        for (let property in object){
            if(object[property])
            {html +=  `
            <li id= "${property}" >${object[property]}</li>
            `}
        }
    }
    listOfIngredients.innerHTML = html;

    mealContainer.appendChild(listOfIngredients);
}

