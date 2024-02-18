// Global variables
const filmAll = "http://localhost:3000/characters" // fetch url
let filmAllArray = [] // Array for characters in all films
let filmOneArray = []
let filmTwoArray = []
let filmThreeArray = []
let filmFourArray = []
let filmFiveArray = []
let filmSixArray = []
let filmCurrent = []


// Fetch array of all character objects
function initialFetch() {
    fetch(filmAll)
        .then(response => response.json())
        .then((data) => {
            filmAllArray = data // replace array variables with 'data' response
            filmCurrent = filmAllArray
            filmOneArray = filmAllArray.filter((film) => film.films.includes("https://swapi.dev/api/films/1/"))
            filmTwoArray = filmAllArray.filter((film) => film.films.includes("https://swapi.dev/api/films/2/"))
            filmThreeArray = filmAllArray.filter((film) => film.films.includes("https://swapi.dev/api/films/3/"))
            filmFourArray = filmAllArray.filter((film) => film.films.includes("https://swapi.dev/api/films/4/"))
            filmFiveArray = filmAllArray.filter((film) => film.films.includes("https://swapi.dev/api/films/5/"))
            filmSixArray = filmAllArray.filter((film) => film.films.includes("https://swapi.dev/api/films/6/"))
            loadCharacters(filmCurrent) // will need to pass a parameter/argument somewhere here
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

    function filterCharacters() {
        const filmSelect = document.getElementById("film-select");
        filmSelect.addEventListener("change", (event) => {
          event.preventDefault();
          const selectedFilm = filmSelect.value;
      
          // Update filmCurrent based on the selected film
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
      
          loadCharacters(filmCurrent);
        });
      }  

document.addEventListener("DOMContentLoaded", (event) => {
    initialFetch()
    filterCharacters()
})

// Each of your event listeners should also have its own unique callback function!