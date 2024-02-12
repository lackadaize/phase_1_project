// Global variables
const filmAll = "http://localhost:3000/characters"
let filmAllArray = [];

// Fetch array of all character objects
function initialFetch() {

    fetch(filmAll)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            filmAllArray.push(data) // doesn't work when it's just (data) without [0]
            console.log(filmAllArray)
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

// // Initial Character Load
// function loadCharacters() {
//     fetch(filmAll)
//       .then((response) => response.json())
//       .then((data) => {
//         filmAllArray = data
//         let characterContainer = document.getElementById("character-container")
//         data.forEach((character) => {
//           let characterCard = document.createElement("div")
//           characterCard.classList.add("character-card")
//           characterCard.innerHTML = `
//             <div class="character-img">
//                 <img src="${character.image_url}" alt="${character.name} image">
//             </div>
//             <div class="character-name">${character.name}</div>
//             `
//           characterContainer.appendChild(characterCard)
          
//         })
//       })
//       .catch((error) => {
//         console.error(error)
//       })
//   }



// function filterCharacters() {
//     const filmSelect = document.getElementById("film-select").value
//     const characterContainer = document.getElementById("character-container")

//     filmSelect.addEventListener("change", (event) => {
//         event.preventDefault()
//         console.log(characterContainer)
//     })
// }

document.addEventListener("DOMContentLoaded", (event) => {
    initialFetch()
    // filterCharacters()
})