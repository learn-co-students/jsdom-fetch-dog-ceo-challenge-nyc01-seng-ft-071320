document.addEventListener('DOMContentLoaded', function(e) {
    console.log('%c HI', 'color: firebrick')
    
    const imgURL = "https://dog.ceo/api/breeds/image/random/4"
    const breedURL = 'https://dog.ceo/api/breeds/list/all'
    const breedUl = document.querySelector("#dog-breeds")
    const breedDropdown = document.querySelector('#breed-dropdown')

    const renderDog = (dogObj) => {
        const dogBreedContainer = document.querySelector("#dog-image-container")
        const dogImgNode = document.createElement("IMG")
        dogImgNode.src = dogObj
        dogImgNode.classList.add("dog-photo")
        dogBreedContainer.append(dogImgNode)
    }
    

    const renderDogPics = () => {
        fetch(imgURL)
        .then(resp => resp.json())
        .then(dogImg => {
            dogImg.message.forEach(dog => {renderDog(dog)})})  
    }


    const renderBreed = (breedObj) => {
        const breedLi = document.createElement("li")
        breedUl.append(breedLi)
        breedLi.innerText = breedObj
    }
    
    let breeds = []

    const renderDogBreeds = () => {
        fetch (breedURL)
        .then(resp => resp.json())
        .then(dogBreed => {
            Object.keys(dogBreed.message).forEach(breed => {renderBreed(breed)}) 
        })
    }


    const textChanger = () => {
        breedUl.addEventListener('click', function(e){
            e.target.style.color = "lightblue"
            })
    }


    // find ul
    // put inner text into array
    // call .filter on array & filter ones that start with lettersreturn new array?
    const breedNodeList = breedUl.childNodes
    
    function sortList(breedNodeList){
        breedDropdown.addEventListener('change', function(e){
            renderBreed(breedNodeList)
            if (e.target.value == "a") {console.log("a")
                breedUl.childNodes.filter(breed => breed.startsWith("a"))
                breedNodeList.forEach(breed => renderBreed(breed))}
                //     renderBreed(breedUl.childNodes)
                // }
            
            else if (e.target.value == "b"){console.log("b")}
            else if (e.target.value == "c"){console.log("c")}
            else if (e.target.value == "d"){console.log("d")}
        })
        console.log(breedNodeList)  
    }   




sortList(breedNodeList);
textChanger();
renderDogBreeds();
renderDogPics();
})

