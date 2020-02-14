const baseUrl = "https://api.rawg.io/api/games/4200";

fetch(baseUrl)
.then(function(response) {
    return response.json()
})
.then(function(json) {
    createGameDetails(json);
    console.dir(json);
})
.catch(function(error) {
    console.log(error);
})



function createGameDetails(json){

    const list = document.querySelector("container");
    


}




// Use either the background_image or background_image_additional property 
// as the background image of the <div class="image"> element.