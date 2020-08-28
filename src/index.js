console.log('%c HI', 'color: firebrick');

document.addEventListener("DOMContentLoaded", () => {

    const getImages = () => {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
        const imgDiv = document.querySelector('#dog-image-container');

        fetch(imgUrl)
            .then(res => res.json())
            .then(imgs => {
                console.log(`${imgs.status} getting images`)
                for(const url of imgs.message) {
                    const newImg = document.createElement('img');
                    newImg.src = url;
                    imgDiv.append(newImg);
                }
            })
    }

    const getBreeds = (letter="") => {
        const breedUrl = 'https://dog.ceo/api/breeds/list/all';
        const ul = document.querySelector('#dog-breeds')
        ul.innerHTML = ''

        fetch(breedUrl)
            .then(res => res.json())
            .then(obj => {
                console.log(`${obj.status} getting ${letter} breeds`)
                const breedObj = obj.message
                const breeds = Object.keys(breedObj)

                for(const breed of breeds) {
                    const nameString = breed
                    const newLi = document.createElement('li')

                    if (breedObj[breed].length > 0) {
                        for(const a of breedObj[breed]) {
                            if(letter === ""){
                                newLi.dataset.breedName = `${a} ${breed}`
                                newLi.innerHTML = `<h4>${a} ${breed}</h4>`
                                ul.append(newLi)
                            } else {
                                if(a[0] === letter){
                                    newLi.dataset.breedName = `${a} ${breed}`
                                    newLi.innerHTML = `<h4>${a} ${breed}</h4>`
                                    ul.append(newLi)
                                }
                            }
                        }
                    } else {
                        if(nameString.charAt(0) === letter){
                            newLi.dataset.breedName = breed
                            newLi.innerHTML = `<h4>${breed}</h4>`
                            ul.append(newLi)
                        }
                    } //this prints some of the inner breeds but not all -- suspect issue with the loops and object property syntax usage
                }
            })
    }

    getImages();

    document.addEventListener("click", function(e){
        let select = document.querySelector('#breed-dropdown')

        if(e.target === select){
            if(select.value === 'a'){
                getBreeds('a')
            } else if(select.value === 'b'){
                getBreeds('b')
            } else if(select.value === 'c'){
                getBreeds('c')
            } else if(select.value === 'd'){
                getBreeds('d')
            }
        } else {
            let li = e.target.closest('li')

            if(li.style.color === "red"){
                li.style.color = "black"
                console.log(`${li.innerHTML} unselected!`)
            } else {
                li.style.color = "red";
                console.log(`${li.innerHTML} selected!`)
            }
        }
    })




})