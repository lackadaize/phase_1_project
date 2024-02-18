// Global variables
const filmAll = "http://localhost:3000/characters" // fetch url
let filmAllArray = [] // Array for characters in all films
let filmOneArray = [1]
let filmTwoArray = [2]
let filmThreeArray = [3]
let filmFourArray = [4]
let filmFiveArray = [5]
let filmSixArray = [6]
let filmCurrent = filmAllArray // Array for the current film selected


// Fetch array of all character objects
function initialFetch() {
    fetch(filmAll)
        .then(response => response.json())
        .then((data) => {
            filmAllArray = data // replace filmAllArray variable with 'data' response
            loadCharacters(filmAllArray) // will need to pass a parameter/argument somewhere here
        })
        .catch((error) => {
        console.log(error);
    })
}

// Populate characters on page load and when "film-select" value is changed
function loadCharacters(filmCurrent) {
    let characterContainer = document.getElementById("character-container")
    characterContainer.innerHTML = ''
    filmCurrent.forEach((character) => {
        let characterCard = document.createElement("div")
        characterCard.classList.add("character-card")
        characterCard.innerHTML = 
            `
            <div class="character-img">
                <a href=""><img src="${character.image_url}" alt="${character.name} image"></a>
            </div>
            <div class="character-name"><a href="">${character.name}</a></div>
            `
        characterContainer.appendChild(characterCard)
    })
}

// remove()
// removeChild()
// replaceChildren()
// innerHTML reset children of 'character-container' if time is of essence but insecure
    //  State in READM.md

function filterCharacters(filmCurrent) {
    const filmSelect = document.getElementById("film-select")
    filmSelect.addEventListener("change", (event) => {
        // event.preventDefault() // Look to get rid of form unless 'submit' is necessary
        filmCurrent = filmSelect.value
        console.log(filmCurrent)
    })
}   

document.addEventListener("DOMContentLoaded", (event) => {
    initialFetch()
    filterCharacters()
})

// Each of your event listeners should also have its own unique callback function!