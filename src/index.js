document.addEventListener('DOMContentLoaded', () => {
    const imageDiv = document.querySelector('div#dog-image-container');
    const breedList = document.querySelector('ul#dog-breeds');
    console.log('%c HI', 'color: firebrick')
    
    function getImages() {
        fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(images => {
            for (const image of images['message']){
                
                renderImages(image);
            }
        });
    }

    function renderImages(image) {
        imageDiv.insertAdjacentHTML('beforeend', `<img src="${image}">`);
    }

    function getBreeds() {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(breeds => {
            for (const breed of Object.keys(breeds['message'])) {
                renderBreeds(breed);
            };
        })
    }

    function renderBreeds(breed) {
        breedList.insertAdjacentHTML('beforeend', `<li class="breed">${breed}</li>`)
    }

    function clickHandler() {
        document.addEventListener('click', function (e) {
            if (e.target.matches('li.breed')) {
                e.target.style.color = "blue";
            }
        })
    }

    function changeHandler() {
        document.addEventListener('change', function(e) {
            if (e.target.matches('select#breed-dropdown')) {
                console.log(breedList.querySelectorAll('li.breed'));
                let breeds = breedList.querySelectorAll('li.breed');
                for (const breed of breeds) {
                    if(breed.innerText.charAt(0) != e.target.value) {
                        breed.style.display = 'none';
                    }
                }
            }
        })
    }

    
    getImages();
    getBreeds();
    clickHandler();
    changeHandler();
});



