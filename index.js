// Global variables
const filmAll = "http://localhost:3000/characters"
let filmCurrent = [] // Designates the film currently chosen with #film-select
let filmAllArray = [] // For characters in all films
let filmOneArray = []
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
        .catch((error) => console.log(error))
}

// Populate characters on page load and when "film-select" value is changed
function loadCharacters(filmCurrent) {
    let characterContainer = document.getElementById("characters-container")
    characterContainer.replaceChildren() // Remove any current child content
    filmCurrent.forEach((character) => { // Iterate over filmCurrent array to create elements on the front-end
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
                <div>Films: ${character.films.join(", ")}</div>
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
                } else { 
                characterInfo.style.display = "none"
            }
        })
        
        let characterCardBackground = document.getElementById(`character-card-background`)
        characterCardBackground.style.display = "none"
        characterCard.addEventListener("click", () => {
          characterCardBackground.style.display = "block"
        })
        characterCardBackground.addEventListener("click", () => {
          characterCardBackground.style.display = "none"
        })
    })
}

// Filter characters based on 'film-select' value chosen
function filterCharacters() {
    const filmSelect = document.getElementById("film-select")
    filmSelect.addEventListener("change", () => filmChange())
    const filmChange = () => {
        const selectedFilm = filmSelect.value;     
        switch (selectedFilm) {
          case "film-all": filmCurrent = filmAllArray   
            break      
          case "film-one": filmCurrent = filmOneArray    
            break
          case "film-two": filmCurrent = filmTwoArray
            break
          case "film-three": filmCurrent = filmThreeArray
            break
          case "film-four": filmCurrent = filmFourArray
            break
          case "film-five": filmCurrent = filmFiveArray
            break
          case "film-six": filmCurrent = filmSixArray
            break
          default: console.log("THE FORCE IS NOT STRONG WITH US!")
            break
        }        
        loadCharacters(filmCurrent)
    }
}  

// Initial load
document.addEventListener("DOMContentLoaded", () => {
    initialFetch()
    filterCharacters()
})