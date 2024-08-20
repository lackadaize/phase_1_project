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
const initialFetch = () => {
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
const loadCharacters = (filmCurrent) => {
  let characterContainer = document.getElementById("characters-container")
  characterContainer.replaceChildren() // Remove any current child content
  characterContainer.classList.add("fade-in")
  filmCurrent.forEach((character) => { // Iterate over filmCurrent array to create elements on the front-end
    characterCard = document.createElement("div")
    characterCard.setAttribute("class", "character-card")
    characterCard.setAttribute("id", `character-${character.id}`)
    characterCard.innerHTML = 
      `
      <div class="character-img">
        <img src="${character.image_url}" alt="${character.name} image">
      </div>
      <div class="character-name">${character.name}</div>
      `
    characterContainer.appendChild(characterCard)  
    clickCharacter(character)
  })
}

// Click character to open modal with character info
const clickCharacter = (character) => {
  let characterBackground = document.getElementById(`character-card-background`)
  characterBackground.style.display = "none"
  characterCard.addEventListener("click", () => {
    // Show #character-card-background
    characterBackground.classList.add("fade-in")
    characterBackground.style.display = "block"
    // Populate character info
    document.querySelector('#character-card-container-image img').src = character.image_url
    document.getElementById('character-card-container-name').textContent = character.name
    document.getElementById('character-species').textContent = character.species
    document.getElementById('character-homeworld').textContent = character.homeworld
    document.getElementById('character-birth-year').textContent = character.birth_year
    document.getElementById('character-height').textContent = character.height
    document.getElementById('character-mass').textContent = character.mass
    document.getElementById('character-hair-color').textContent = character.hair_color
    document.getElementById('character-skin-color').textContent = character.skin_color
    document.getElementById('character-eye-color').textContent = character.eye_color
    document.getElementById('character-films').textContent = character.films.join(", ")
  })
  characterBackground.addEventListener("click", () => {
    // Hide #character-card-background
    characterBackground.style.display = "none"
  })
}

// Filter characters based on 'film-select' value chosen
const filterCharacters = () => {
  const filmSelect = document.getElementById("film-select")
  const filmName = document.getElementById('film-name')
  filmSelect.addEventListener("change", () => filmChange())
  const filmChange = () => {
    const selectedFilm = filmSelect.value     
    switch (selectedFilm) {
      case "film-all": filmCurrent = filmAllArray   
        filmName.textContent = "All Films"
        break      
      case "film-one": filmCurrent = filmOneArray   
        filmName.textContent = "The Phantom Menace" 
        break
      case "film-two": filmCurrent = filmTwoArray
        filmName.textContent = "Attack of the Clones"
        break
      case "film-three": filmCurrent = filmThreeArray
        filmName.textContent = "Revenge of the Sith"
        break
      case "film-four": filmCurrent = filmFourArray
        filmName.textContent = "A New Hope"
        break
      case "film-five": filmCurrent = filmFiveArray
        filmName.textContent = "The Empire Strikes Back"
        break
      case "film-six": filmCurrent = filmSixArray
        filmName.textContent = "Return of the Jedi"
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