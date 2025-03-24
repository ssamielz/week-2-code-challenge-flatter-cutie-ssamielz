
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
    //displaying image with click event
    animalName.addEventListener('click',()=>{ 
        console.log(`clicked ${animal.name}`)
        document.getElementById("votes").value=null
        document.getElementById("vote-count").innerHTML=""
        document.getElementById("image").src = animal.image

    //displaying character name and votes
        document.getElementById("name").innerHTML = animal.name
        document.getElementById("vote-count").innerHTML = `${animal.votes}`      
        let votesForm = document.getElementById("votes-form")
        votesForm.addEventListener("submit",()=>{
            event.preventDefault();
            let enteredVotes=parseInt(votesForm.querySelector("#votes").value)
            document.getElementById("vote-count").innerHTML = enteredVotes + parseInt(document.getElementById("vote-count").innerHTML)     

        });
    });

    function addVotes(animal){
        // enteredVotes=document.querySelector("#votes").value
            console.log(`added ${enteredVotes} votes to ${animal.name}`)
    }
   
}


//add votes 


getCharacter()

