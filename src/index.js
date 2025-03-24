
function getCharacter() {
//fetching data from json server
fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(animals => animals.forEach(animal => displayCharacters(animal)))
}

//display characters
function displayCharacters(animal) {

    let characterBar = document.getElementById("character-bar")
    let animalName = document.createElement("span")
    animalName.innerHTML = `${animal.name}`
    characterBar.appendChild(animalName)
    animalName.addEventListener('click',()=>{
        console.log(`clicked ${animal.name}`)
        document.getElementById("image").src = animal.image
    });

    
}

getCharacter()

