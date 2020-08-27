console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", e => {
    function getDogPhotos() {
        fetch("https://dog.ceo/api/breeds/image/random/4")
            .then(resp => resp.json())
            .then(json => appendImages(json.message))
    }
    function appendImages(array) {
        let dogDiv = document.querySelector('#dog-image-container')
        for (let i = 0; i < array.length; i++) {
            let img = document.createElement('img');
            img.src = array[i];
            img.style.width = "100px";
            img.style.margin = "15px";
            dogDiv.append(img);
        }

    }
    function getDogBreeds() {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(resp => resp.json())
            .then(json => listBreeds(json.message))
    }
    function listBreeds(hash) {
        let ul = document.createElement('ul');
        array = Object.keys(hash)
        for (let i = 0; i < array.length; i++) {
            let li = document.createElement('li')
            li.textContent = array[i]
            ul.append(li)
        }
        document.body.append(ul)

    }

    document.addEventListener('click', e => {
        if (e.target.matches('li')) {
            let breed = e.target;
            breed.style.color = 'magenta'
        }
    })

    let dropDown = document.querySelector('#breed-dropdown')

    dropDown.onchange = function () {
        let lis = document.querySelectorAll('li')
        displayLis(lis)
        let letter = dropDown.value

        for (let i = 0; i < lis.length; i++) {
            let firstLetter = lis[i].innerText[0]

            if (firstLetter != letter) {
                lis[i].style.display = "none";
            }
        }
    }

    function displayLis(lis) {
        lis.forEach(li => li.style.display = "block")
    }


    getDogPhotos()
    getDogBreeds()
});