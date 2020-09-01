document.addEventListener("DOMContentLoaded", function () {
  getDogPhotos();
  getDogBreeds();
});

function getDogPhotos() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((pic) => addPhotos(pic.message));
}

function addPhotos(picArray) {
  const petContainer = document.querySelector("#dog-image-container");
  picArray.forEach((pic) => {
    const image = document.createElement("img");
    image.setAttribute("src", pic);
    petContainer.append(image);
  });
}

function getDogBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((breed) => addBreeds(breed.message));
}

function addBreeds(breedHash) {
  const breedContainer = document.querySelector("#dog-breeds");
  const breedArray = Object.keys(breedHash);
  breedArray.forEach((breed) => {
    const li = document.createElement("li");
    li.innerText = breed;
    breedContainer.append(li);
    li.addEventListener('click', function(e){
      if (e.target.style.color != "red"){e.target.style.color = "red"}else {e.target.style.color = "blue"}
  })
}
