// Global variables
const filmAll = "http://localhost:3000/characters" // fetch url
let filmAllArray = [] // Array variable for characters in all films
let filmCurrent = [] // variable to be used to designate the film currently chosen 
let filmOneArray = [] // The following array variables are for specific films
let filmTwoArray = []
let filmThreeArray = []
let filmFourArray = []
let filmFiveArray = []
let filmSixArray = []

// Fetch array of all character objects from db.json
function initialFetch() {
    fetch(filmAll)
        .then(response => response.json())
        .then((data) => {
            filmAllArray = data.sort(function(){return .5 - Math.random()}) 
            filmCurrent = filmAllArray
            filmOneArray = filmAllArray.filter((film) => film.films.includes("The Phantom Menace")).sort(function(){return .5 - Math.random()})
            filmTwoArray = filmAllArray.filter((film) => film.films.includes("Attack of the Clones")).sort(function(){return .5 - Math.random()})
            filmThreeArray = filmAllArray.filter((film) => film.films.includes("Revenge of the Sith")).sort(function(){return .5 - Math.random()})
            filmFourArray = filmAllArray.filter((film) => film.films.includes("A New Hope")).sort(function(){return .5 - Math.random()})
            filmFiveArray = filmAllArray.filter((film) => film.films.includes("The Empire Strikes Back")).sort(function(){return .5 - Math.random()})
            filmSixArray = filmAllArray.filter((film) => film.films.includes("Return of the Jedi")).sort(function(){return .5 - Math.random()})
            loadCharacters(filmCurrent) 
        })
        .catch((error) => {
        console.log(error)
    })
}

// Populate characters on page load and when "film-select" value is changed
function loadCharacters(filmCurrent) {
    let characterContainer = document.getElementById("character-container")
    characterContainer.replaceChildren() // Remove any current child content
    filmCurrent.forEach((character) => { //Iterate over filmCurrent array to create elements on the front-end
        let characterCard = document.createElement("div")
        characterCard.setAttribute("class", "character-card")
        characterCard.setAttribute("id", `character-${character.id}-card`)
        characterCard.innerHTML = 
            `
            <div class="character-img">
                <img src="${character.image_url}" alt="${character.name} image">
            </div>
            <div class="character-name">${character.name}</div>
            <div id="character-${character.id}-info" class="character-info /*character-info-hide*/">
                <button class="close-button">X</button>
                <div>Species: ${character.species}</div>
                <div>Homeworld: ${character.homeworld}</div>
                <div>Birth Year: ${character.birth_year}</div>
                <div>Height: ${character.height}</div>
                <div>Mass: ${character.mass}</div>
                <div>Hair Color: ${character.hair_color}</div>
                <div>Skin Color: ${character.skin_color}</div>
                <div>Eye Color: ${character.eye_color}</div>
                <!--<div>Films: ${character.films}</div>-->
                <!--<div>Films: ${character.starships}</div>-->
            </div>
            `
        characterContainer.appendChild(characterCard)
        
        // Click characterCard Events
        let characterInfo = document.getElementById(`character-${character.id}-info`)
        characterInfo.style.display = "none"
        characterCard.addEventListener("click", () => {
            // Show characterCard if hidden.  Hide characterCard if shown
            if (characterInfo.style.display === "none") {
                characterInfo.style.display = "block" 
                // characterInfo.style.animation = "animation 3s 2"
                } else { 
                characterInfo.style.display = "none"
            }
        })
    })
}

// Filter characters based on 'film-select' value chosen
function filterCharacters() {
    const filmSelect = document.getElementById("film-select");
    filmSelect.addEventListener("change", (event) => {
        event.preventDefault()
        const selectedFilm = filmSelect.value;  
        if (selectedFilm === "film-all") {
        filmCurrent = filmAllArray
        } else if (selectedFilm === "film-one") {
        filmCurrent = filmOneArray
        } else if (selectedFilm === "film-two") {
        filmCurrent = filmTwoArray
        } else if (selectedFilm === "film-three") {
        filmCurrent = filmThreeArray
        } else if (selectedFilm === "film-four") {
        filmCurrent = filmFourArray
        } else if (selectedFilm === "film-five") {
        filmCurrent = filmFiveArray
        } else if (selectedFilm === "film-six") {
        filmCurrent = filmSixArray
        }      
        loadCharacters(filmCurrent)
    })
}  

// Initial load
document.addEventListener("DOMContentLoaded", (event) => {
    initialFetch()
    filterCharacters()
})