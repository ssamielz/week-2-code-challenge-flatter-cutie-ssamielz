
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
        //add votes
        let votesForm = document.getElementById("votes-form")
        votesForm.addEventListener("submit",(event)=>{
            event.preventDefault();
            let enteredVotes = parseInt(votesForm.querySelector("#votes").value,10)
                console.log(enteredVotes);
                console.log(animal.votes);
            let newVotes = animal.votes + enteredVotes

            let finder = animal.id

            fetch(`http://localhost:3000/characters/${finder}`, {
                method:"PATCH", 
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    "votes": newVotes
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let newVotes = data.votes
            let updatedVotes = document.getElementById("vote-count")
            updatedVotes.textContent = newVotes
            })
        });
        let resetBtn = document.getElementById("reset-btn")
        resetBtn.addEventListener("click", (event)=> {
            let finder = animal.id

            fetch(`http://localhost:3000/characters/${finder}`, {
                method:"PATCH", 
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    "votes": 0
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            let updatedVotes = document.getElementById("vote-count")
            updatedVotes.textContent = 0
            })
        })
    });

    function addVotes(animal){
        // enteredVotes=document.querySelector("#votes").value
            console.log(`added ${enteredVotes} votes to ${animal.name}`)
    }
   
}





getCharacter()

