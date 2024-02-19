// Global variables
const filmAll = "http://localhost:3000/characters" // fetch url
let filmAllArray = [] // Array variable for characters in all films
let filmCurrent // variable to be used to designate the film currently chosen 
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
            filmOneArray = filmAllArray.filter((film) => film.films.includes("https://swapi.dev/api/films/1/"))
            filmTwoArray = filmAllArray.filter((film) => film.films.includes("https://swapi.dev/api/films/2/"))
            filmThreeArray = filmAllArray.filter((film) => film.films.includes("https://swapi.dev/api/films/3/"))
            filmFourArray = filmAllArray.filter((film) => film.films.includes("https://swapi.dev/api/films/4/"))
            filmFiveArray = filmAllArray.filter((film) => film.films.includes("https://swapi.dev/api/films/5/"))
            filmSixArray = filmAllArray.filter((film) => film.films.includes("https://swapi.dev/api/films/6/"))
            loadCharacters(filmCurrent) 
        })
        .catch((error) => {
        console.log(error);
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
                <a href=""><img src="${character.image_url}" alt="${character.name} image"></a>
            </div>
            <div class="character-name"><a href="">${character.name}</a></div>
            <div id="character-${character.id}-info" class="character-info hidden">Test</div>
            `
        characterContainer.appendChild(characterCard)
    })
}

// Filter characters based on select film chosen
function filterCharacters() {
    const filmSelect = document.getElementById("film-select");
    filmSelect.addEventListener("change", (event) => {
        event.preventDefault();
        const selectedFilm = filmSelect.value;    
        if (selectedFilm === "film-all") {
        filmCurrent = filmAllArray;
        } else if (selectedFilm === "film-one") {
        filmCurrent = filmOneArray;
        } else if (selectedFilm === "film-two") {
        filmCurrent = filmTwoArray;
        } else if (selectedFilm === "film-three") {
        filmCurrent = filmThreeArray;
        } else if (selectedFilm === "film-four") {
        filmCurrent = filmFourArray;
        } else if (selectedFilm === "film-five") {
        filmCurrent = filmFiveArray;
        } else if (selectedFilm === "film-six") {
        filmCurrent = filmSixArray;
        }      
        loadCharacters(filmCurrent)
    })
}  

// Initial load
document.addEventListener("DOMContentLoaded", (event) => {
    initialFetch()
    filterCharacters()
})