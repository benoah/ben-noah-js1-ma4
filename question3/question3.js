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



function createGameDetails(json) {
    console.dir(json);

    const image = document.querySelector(".image");
    image.alt = json.name;

    // set the img.src property depending on what properties are available in the JSON
    if (json.image) {
        image.src = json.image;
    } else if (json.image_background) {
        image.src = json.image_background;
    } else {
        image.src = "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg";
    }

    const name = document.querySelector(".image");
    name.innerHTML = json.image_background;

    const gameCount = document.querySelector(".description");
    gameCount.innerHTML = json.description;

    const description = document.querySelector(".h1");
    description.innerHTML = json.name;
}







\   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||






// Use either the background_image or background_image_additional property 
// as the background image of the <div class="image"> element.

/*

function createCreator(json) {
    console.dir(json);

    const image = document.querySelector(".creator-image");
    image.alt = json.name;

    // set the img.src property depending on what properties are available in the JSON
    if (json.image) {
        image.src = json.image;
    } else if (json.image_background) {
        image.src = json.image_background;
    } else {
        image.src = "https://via.placeholder.com/250";
    }

    const name = document.querySelector(".creator-name");
    name.innerHTML = json.name;

    const gameCount = document.querySelector(".game-count");
    gameCount.innerHTML = json.games_count;

    const description = document.querySelector(".creator-description");
    description.innerHTML = json.description;
}

*/















