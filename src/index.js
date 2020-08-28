console.log('%c HI', 'color: firebrick')

const  dogImageContainer = document.getElementById("dog-image-container")
const img = document.createElement('img')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const ulBreed = document.querySelector('#dog-breeds')
const dropDown = document.querySelector('#breed-dropdown')

fetch(imgUrl)
    .then(resp => resp.json())
    .then(images => addDog(images.message))

fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => addBreed(breeds.message))


function addDog(images){
    for(const image of images){
        const img = document.createElement('img')
        img.src=`${image}`
        console.log(img)
       dogImageContainer.append(img)
    }
}

function addBreed(breeds){
    for(const breed in breeds){
        const li = document.createElement('li')
        li.innerText = breed
        ulBreed.append(li)
        addToDropDown(breed)
    }
}

ulBreed.addEventListener('click', function(e){
    alert("pressed")
    e.target.style.color = 'red'
})

function addToDropDown(breed){
    let exists = false
    for(const letter of dropDown){
        if(letter.value == breed[0]){
            exists = true
            break;
        }
    }
    if(!exists){
    selectValue = document.createElement('option')
    selectValue.value =`${breed[0]}` 
    selectValue.innerText = `${breed[0]}`
    dropDown.append(selectValue)
    }
}

dropDown.addEventListener('change', function(e){
    for(const breed of ulBreed.children){
        if(e.target.value != breed.innerText[0]){
            debugger
            breed.style.display = "none"
        } else if (e.target.value == breed.innerText[0]){
            breed.style.display = 'block'
        }
    }
    
})