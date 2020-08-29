console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", () => {
    
    renderDogPics(dogPicUrl)
    renderDogBreeds(dogBreedsUrl)
    textChangeColor()
    breedFilter()
    

});
        
        
const dogPicUrl = 'https://dog.ceo/api/breeds/image/random/4'
const dogBreedsUrl = 'https://dog.ceo/api/breeds/list/all'

function renderDogPics(url){
    
    fetch(url)
    .then(function(response){return response.json()})
    .then(function(dogPics){
        let pics = dogPics['message'];
        addDogPicsToDOM(pics); 
    })
    
}

function addDogPicsToDOM(dogPics){
    picContainer = document.querySelector('#dog-image-container')
    
    for (dogPic of dogPics) {
        let img = document.createElement('img')
        img.src = dogPic
        picContainer.appendChild(img)
    }
}

function renderDogBreeds(url){
    
    fetch(url)
    .then(function(response){return response.json()})
    .then(function(dogBreeds){
        let breeds = dogBreeds['message'];
        addDogBreedsToDOM(Object.keys(breeds)); 
    })
    
}

function addDogBreedsToDOM(dogBreeds){
    const breedsList = document.querySelector('#dog-breeds')
    
    for (dogBreed of dogBreeds) {
        let li = document.createElement('li')
        li.className = "dogBreed"
        li.innerText = dogBreed
        breedsList.appendChild(li)
    } 
}

function textChangeColor(){
    const breedsList = document.querySelector('#dog-breeds')

    breedsList.addEventListener('click', function(e){
        if (e.target.matches('#dogBreed')){
            e.target.style.color = 'red'
        }
    })
}

function breedFilter() {
    const dropDown = document.querySelector('#breed-dropdown')
    const breeds = document.getElementsByClassName('dogBreed')
    
    dropDown.addEventListener('change', function(e){
        const selectedLetter = e.target.value 
            for (const breed of breeds){
                if (breed.innerText.startsWith(selectedLetter)){
                    breed.style.display = "block"
                } else {
                        breed.style.display = "none"
                }
            }
        })
    }
    