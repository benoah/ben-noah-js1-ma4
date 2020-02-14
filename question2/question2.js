/*
Add the following element to a page called question2.html:

<div class="results"></div>
Make a call to https://api.rawg.io/api/games 
and pass the JSON object it returns to a function called createGames.
For each game object in the results, the createGames function should create the following HTML in a loop. 
Replace the placeholder values with the relevant properties from each object:
*/





//called createGames.


// Make a call to https://api.rawg.io/api/games 
const baseUrl = "https://api.rawg.io/api/games";

//and pass the JSON object it returns to a function 
fetch(baseUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGames(json);
    })
    .catch(function(error) {
        console.log(error);
    });

    
    function createGames(json) {
        const resultsContainer = document.querySelector(".results");
        const results = json.results;
    
        let html = "";
    
        results.forEach(function(results) {
            html += `<div class="game">
            <h2>${results.name}</h2>
            <img src=${results.background_image} alt="Name of game">
            </div>`
        });


        resultsContainer.innerHTML = html;
    }






