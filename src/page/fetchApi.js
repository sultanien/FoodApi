export async function fetchApi(url){
    
    try{
        const response = await fetch(url);
        const data = response.json();
        return data;
    } catch(error) {
        console.log(error);
    }   
}