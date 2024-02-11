function loadCharacters() {
    // fetch(`http://localhost:3000/results`)
    fetch(`https://swapi.dev/api/people`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        // ul.innerHTML = JSON.stringify(data) 
    })
}

function filterCharacters() {
    console.log("Hello World!")
}

document.addEventListener("DOMContentLoaded", (event) => {
    loadCharacters()
    filterCharacters()
})