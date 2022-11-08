import { fetchApi } from "./fetchApi.js"

const quote = document.querySelector("blockquote p");
const cite = document.querySelector("blockquote cite");

export  async function updateQuote() {

    const reachedData = await fetchApi("https://api.quotable.io/random");

    if(!reachedData){
        return
    }
    if (reachedData){
      quote.textContent = reachedData.content;
      cite.textContent = `~ ${reachedData.author}`;
    }
  }