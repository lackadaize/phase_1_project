// Global variables
const filmAll = "http://localhost:3000/characters"
let filmAllArray = [];

// Fetch array of all character objects
function initialFetch() {

    fetch(filmAll)
        .then(response => response.json())
        .then((data) => {
            filmAllArray = data
            loadCharacters(filmAllArray)
        })
        .catch((error) => {
        console.log(error);
    })
}

// Populate all characters on page load
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

// remove() note
// removeChild()
// innHTML reset children of 'character-container' if time is of essence but insecure
    //  State in READM.md

function filterCharacters() {
    const filmSelect = document.getElementById("film-select").value
    const characterContainer = document.getElementById("character-container")

    filmSelect.addEventListener("change", (event) => {
        event.preventDefault()
        console.log(characterContainer)
    })
}   

document.addEventListener("DOMContentLoaded", (event) => {
    initialFetch()
    filterCharacters()
})