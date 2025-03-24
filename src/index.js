// Your code here
function getCharacter() {

fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(animals => animals.forEach(animal => displayCharacters(animal)))
}

function displayCharacters(animal){
    let characterBar = document.getElementById("character-bar")
    let animalName = document.createElement("span")
    animalName.innerHTML = `${animal.name}`
    characterBar.appendChild(animalName)
}

getCharacter()