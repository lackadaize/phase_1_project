// Global variables
const filmAll = "http://localhost:3000/characters" // fetch url
let filmAllArray = [] // Array variable for characters in all films
let filmCurrent = []// variable to be used to designate the film currently chosen 
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
            filmAllArray = data 
            filmCurrent = filmAllArray
            filmOneArray = filmAllArray.filter((film) => film.films.includes("The Phantom Menace"))
            filmTwoArray = filmAllArray.filter((film) => film.films.includes("Attack of the Clones"))
            filmThreeArray = filmAllArray.filter((film) => film.films.includes("Revenge of the Sith"))
            filmFourArray = filmAllArray.filter((film) => film.films.includes("A New Hope"))
            filmFiveArray = filmAllArray.filter((film) => film.films.includes("The Empire Strikes Back"))
            filmSixArray = filmAllArray.filter((film) => film.films.includes("Return of the Jedi"))
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
    filmCurrent.forEach((character) => {
        let characterCard = document.createElement("div")
        characterCard.setAttribute("class", "character-card")
        characterCard.setAttribute("id", `character-${character.id}-card`)
        characterCard.innerHTML = 
            `
            <div class="character-img">
                <img src="${character.image_url}" alt="${character.name} image">
            </div>
            <div class="character-name">${character.name}</div>
            <div id="character-${character.id}-info" class="character-info character-info-hidden">
                <div>Species: ${character.species}</div>
                <div>Homeworld: ${character.homeworld}</div>
                <div>Birth Year: ${character.birth_year}</div>
                <div>Heigth: ${character.height}</div>
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
        characterCard.addEventListener("click", () => {
            console.log("Hello")
            // Add your code to expand character information here
        })

    })
}

// Filter characters based on select film chosen
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