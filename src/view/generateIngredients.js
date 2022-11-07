'use strict'



export const generateIngredients = (data) => {

    const listOfIngredients = document.createElement('ul');

    const object = data;

    let html = '';

    object.forEach(element => {
        if(element){
            html +=  `
            <li>${element}</li>
            `
        }
    });

    listOfIngredients.innerHTML = html;

    return listOfIngredients
    
}

