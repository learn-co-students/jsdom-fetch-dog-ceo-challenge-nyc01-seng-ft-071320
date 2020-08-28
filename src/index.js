document.addEventListener('DOMContentLoaded', e => {
  function getDogPhotos() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(resp => resp.json())
      .then(json => addImages(json.message))
  }
  function addImages(array) {
    console.log(`addImages... ${array}`)
    let dogDiv = document.querySelector("#dog-image-container")
    for (let i = 0; i < array.length; i++) {
      let dogImg = document.createElement("img")
      dogImg.src = array[i]
      dogImg.style.width = "100px"
      dogDiv.append(dogImg)
    }
  }

////////////////////////////////////////////////////////////////

  function getDogBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(resp => resp.json())
      .then(json => addBreeds(json.message))
  }
  function addBreeds(array) {
    console.log(Object.keys(array));
    arr = Object.keys(array);
    console.log(arr)
    let breedsUl = document.querySelector("#dog-breeds")
    for(let i = 0; i < arr.length; i++) {
      let breedsLi = document.createElement("li")
      breedsLi.innerText = arr[i]
      breedsUl.append(breedsLi)
    }
  }

////////////////////////////////////////////////////////////////

function colorClick() {
  let colorChange = document.getElementsByTagName("ul")[0]
  console.log(colorChange[0])
  colorChange.addEventListener("click", e => {
    e.target.style.color = "red"
  })
}

////////////////////////////////////////////////////////////////

function filter() {
//   let dropdown = document.getElementById("breed-dropdown").value
//   dropdown.addEventListener('change', filterOut(dropdown))
// }
// function filterOut(lettter){
//   console.log(`the letter is --- ${lettter}`)
//   let lis = document.querySelectorAll("li")
//   console.log(`Line 56 ${lis[0]} `)
//   display(lis)
//   for(let i = 0; i < lis.length; i++){
//     let firstletter = lis[i].innerText[0]
//     console.log(`first letter ${firstletter}`)
//     console.log(`letter ${letter}`)
//     if(firstletter != letter) {
//       lis[i].style.display = "none"
//     }
//   }
  let dropdown = document.querySelector("#breed-dropdown")
  dropdown.onchange = function() {
    let lis = document.querySelectorAll('li')
    displayLis(lis)
    let letter = dropdown.value

    for(let i = 0; i < lis.length; i++) {
      let firstletter = lis[i].innerText[0]
      if(firstletter != letter){
        lis[i].style.display = "none"
      }
    }
  }
}
    function displayLis(lis){
      lis.style.display = "block"
    }

    getDogPhotos()
    getDogBreeds()
    colorClick()
    filter()
})
