console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    getDogs()
})

const getDogs2 = () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(dogString => renderDogs(dogString["message"]))
}

const getDogs = () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(dogString => dogString["message"].forEach(dog=>renderDog(dog))
    )
}

const renderDogs = dogs =>{
    for(const dog of dogs){
        renderDog(dog)
    }
}

function renderDog(dog){
    console.log(dog)
    const dogDiv = document.createElement('div')
    // // const dogImg = document.createElement('img')
    const dogCollection = document.getElementById("dog-image-container")
    dogDiv.innerHTML=`<img src ="${dog}" class="dog-pic" width:"20%">`
    dogCollection.appendChild(dogDiv)
}

