console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function(e){
    let breedsUl = document.getElementById("dog-breeds")
    let dropMenu = document.getElementById("breed-dropdown")

    function fetchImages() {
        fetch(imgUrl)
            .then(resp => resp.json())
            .then(images => addImages(images.message))
    }

    
    function addImages(images) {
        for(let image of images) {
            addImage(image)
        }
    }
    
    function addImage(image) {
        let imgDiv = document.getElementById("dog-image-container")
        let img = document.createElement(`img`)
        img.setAttribute('src', image)
        imgDiv.append(img)
    }

    function fetchBreeds() {
        fetch(breedUrl)
            .then(resp => resp.json())
            .then(breeds => addBreeds(breeds.message))
    }

    function addBreeds(breeds) {
        console.log(breeds)
        for(let breed in breeds) {
            addBreed(breed)
        }
    }

    function addBreed(breed) {
        let breedLi = document.createElement("li")
        breedLi.innerText = breed
        breedsUl.append(breedLi)
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    breedsUl.addEventListener('click', function(e) {
        function makeTextRandomColor() {
            let color = getRandomColor()
            e.target.style.color = color
        }

        makeTextRandomColor()
    })

    dropMenu.addEventListener('change', function(e) {
        console.log(breedsUl)
        let lis = breedsUl.children
        console.log(lis)
        for(let li of lis) {
            if (li.innerText[0] != dropMenu.value) {
                li.style.display = "none"
            } 
            else if (li.innerText[0] == dropMenu.value) {
                li.style.display = "block"
            }
        }
    })


    fetchImages()
    fetchBreeds()
})