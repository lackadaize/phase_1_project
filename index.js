// Global variables
filmAll = "http://localhost:3000/characters"
// filmAll = "https://swapi.dev/api/people"
function loadCharacters(film) {
    fetch(`http://localhost:3000/characters`)
    // fetch(`https://swapi.dev/api/people`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // let characterContainer = document.getElementById("character-container")
        // data.results.forEach(() => {
        //   let characterCard = document.createElement("div")
        //   characterCard.classList.add("character-card")
        //   characterCard.innerHTML = `
        //     <div>Name: ${data.results.name}<br/>Homeworld: `
        //   characterContainer.appendChild(characterCard)
        // });
        // document.getElementById("character-container").appendChild(characterCard)
      })
      .catch((error) => {
        console.error(error)
      });
  }

// function filterCharacters() {
//     const filmSelect = document.getElementById("film-select").value
//     const characterContainer = document.getElementById("character-container")

//     filmSelect.addEventListener("change", (event) => {
//         event.preventDefault()
//         console.log(characterContainer)
//     })
// }

document.addEventListener("DOMContentLoaded", (event) => {
    loadCharacters()
    // filterCharacters()
})