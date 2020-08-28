console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    getDogs()
    getBreed()
    dogDropDown()
})

const getDogs = () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(dogString => dogString["message"].forEach(dog=>renderDog(dog))
    )
}

function renderDog(dog){
    const dogDiv = document.createElement('div')
    const dogCollection = document.getElementById("dog-image-container")
    dogDiv.innerHTML=`<img src ="${dog}" class="dog-pic" width:"20px">`
    dogCollection.appendChild(dogDiv)
}

const getBreed = () =>{
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(breedString => Object.keys(breedString["message"]).forEach(breed=>renderBreed(breed))
    )
}

function renderBreed(breed){
    const breedCollection = document.getElementById("dog-breeds")
    const breedLi = document.createElement('li')
    breedLi.innerText=breed
    breedCollection.appendChild(breedLi);
    breedLi.addEventListener('click', function(e){
        if (e.target.style.color != "red"){e.target.style.color = "red"}else {e.target.style.color = "blue"}
    })
}

function dogDropDown (){
    const dropdown = document.getElementById("breed-dropdown")
    dropdown.addEventListener('change', e => {
        document.querySelectorAll('li').forEach(breed => {breed.style.display = 'block'})
        if (dropdown.value == "a" ) 
            {
            document.querySelectorAll('li').forEach(breed => {if(breed.innerText[0] !=="a"){breed.style.display = 'none'}})
            };
        if (dropdown.value == "b" )
            {
            document.querySelectorAll('li').forEach(breed => {if(breed.innerText[0] !=="b"){breed.style.display = 'none'}})
            };
        if (dropdown.value == "c" ) 
            {
            document.querySelectorAll('li').forEach(breed => {if(breed.innerText[0] !=="c"){breed.style.display = 'none'}})
            };
        if (dropdown.value == "d" ) 
            {
            document.querySelectorAll('li').forEach(breed => {if(breed.innerText[0] !=="d"){breed.style.display = 'none'}})
            };
        }
    );
}
