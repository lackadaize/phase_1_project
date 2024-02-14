// Global variables
const filmAll = "http://localhost:3000/characters" // fetch url
let filmAllArray = [] // Array for characters in all films
let filmOneArray =[1]
let filmTwoArray =[2]
let filmThreeArray =[3]
let filmFourArray =[4]
let filmFiveArray =[5]
let filmSixArray =[6]
let filmCurrent = filmAllArray // Array for the current film selection

// Fetch array of all character objects
function initialFetch() {
    fetch(filmAll)
        .then(response => response.json())
        .then((data) => {
            filmAllArray = data // replace filmAllArray variable with 'data' response
            loadCharacters(filmAllArray)
        })
        .catch((error) => {
        console.log(error);
    })
}

// Populate characters on page load and when "film-select" value is changed
function loadCharacters(array) {
    let characterContainer = document.getElementById("character-container")
    array.forEach((character) => {
        let characterCard = document.createElement("div")
        characterCard.classList.add("character-card")
        characterCard.innerHTML = 
        `
        <div class="character-img">
            <img src="${character.image_url}" alt="${character.name} image">
        </div>
        <div class="character-name">${character.name}</div>
        `
        characterContainer.appendChild(characterCard)
    })
}

function filterCharacters(filmCurrent) {
    const filmSelect = document.getElementById("film-select")
    filmSelect.addEventListener("change", (event) => {
        event.preventDefault()
        filmCurrent = filmSelect.value
        console.log(filmCurrent)
    })
} 

// remove() note
// removeChild()
// innHTML reset children of 'character-container' if time is of essence but insecure
    //  State in READM.md  

document.addEventListener("DOMContentLoaded", (event) => {
    initialFetch()
    filterCharacters()
    // filmCurrent = filmAllArray;
    // console.log(filmCurrent);
})