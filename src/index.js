console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const dogCollection = document.getElementById('dog-image-container')
  const breedCollection = document.getElementById('dog-breeds')
  const breedSearch = document.getElementById('breed-dropdown')
  const breeds = document.getElementsByClassName('dog-breed')
  let firstLetter = 'a'

  const clickHandler = () => {
    document.addEventListener('click', e => {
      if (e.target.matches('.dog-breed')) {
        e.target.style.color = 'red'
      }
    })
  }

  const dropdownhandler = () => {
    document.addEventListener('change', e => {
      if (e.target.matches('#breed-dropdown')) {
        firstLetter = e.target.value
        for (const breed of breeds) {
          if (breed.dataset.letter === firstLetter) {
            breed.style.display = ""
          } else {
            breed.style.display = "none"
          }
        }
      }
    })
  }
  
  const getImages = () => {
    fetch(imgUrl)
    .then(response => response.json())
    .then(obj => {
      for(const image of obj.message) {
        const img = document.createElement('img')
        img.src = image
        dogCollection.append(img)
      }
    })
  }
  
  const getBreeds = () => {
    fetch(breedUrl)
    .then(response => response.json())
    .then(obj => {
      for(const breed in obj.message) {
        const breedLi = document.createElement('li')
        breedLi.textContent = breed
        breedLi.className = 'dog-breed'
        breedLi.dataset.letter = breed[0]
        if (breed[0] === firstLetter) {
          breedLi.style.display = ""
        } else {
          breedLi.style.display = "none"
        }
        breedCollection.append(breedLi)
        }
      })
  }
  
  clickHandler()
  dropdownhandler()
  getImages()
  getBreeds()
})
