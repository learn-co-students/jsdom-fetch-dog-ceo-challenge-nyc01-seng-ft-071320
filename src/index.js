console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
  const div = document.getElementById("dog-image-container")
  const ul = document.getElementById('dog-breeds')
  //get a global const for this to assign things to <div id="dog-image-container">
  
  


  const fetchImages = () => { 
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res => res.json())
    .then(results => {    
        const urls = results.message
        for (const url of urls) {
          renderMovie(url)
        }
    });
  };

  const renderMovie = (url) => {
    let img = document.createElement("img")
    img.src = url 
    div.append(img)
  }

  const fetchBreeds = () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
    .then(res => res.json())
    .then(results => {
      const breeds = results.message
      for (const breed in breeds) {
        renderBreed(breed)
      }
    })
  }
  
  const renderBreed = (breed) => {
    let li = document.createElement("li")
    
    li.innerText = breed 
    li.dataset.breed = breed 
    li.classList.add("dog-breed")
    ul.append(li)
  }

  const handleClicks = () => {
    document.addEventListener('click', (e) => {
      if (e.target.matches(".dog-breed")) {
        e.target.style.color = "blue" 
      }
    })
  }

  const selectHandler = () => {
    document.addEventListener("change", (e) => {
      if (e.target.matches("#breed-dropdown")) {
        const dogBreeds = document.querySelectorAll('ul li')
        for (const dog of dogBreeds) {
          dog.style.display = ""
          if (dog.dataset.breed[0] === e.target.value[0]) {
            console.log(dog)
          } else {
            dog.style.display = "none"
          }
        }
      }
    })
  }

fetchBreeds()
fetchImages()
handleClicks()
selectHandler()  
});