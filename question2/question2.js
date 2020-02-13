/*
Add the following element to a page called question2.html:

<div class="results"></div>
Make a call to https://api.rawg.io/api/games 
and pass the JSON object it returns to a function called createGames.
For each game object in the results, the createGames function should create the following HTML in a loop. 
Replace the placeholder values with the relevant properties from each object:
*/



// Make a call to https://api.rawg.io/api/games 
//and pass the JSON object it returns to a function 
//called createGames.

const createGames = "https://api.rawg.io/api/games";

fetch(createGames)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
    })
    .catch(function(error) {
        console.log(error);
    });

    


