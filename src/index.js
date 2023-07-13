console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', fetchData)

function fetchData() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((data) => {
        //console.log(data);
        const imgCont = document.getElementById('dog-image-container');
        data.message.forEach(dogImgUrl => {
           const dogImg = document.createElement('img');
           dogImg.src = dogImgUrl
           imgCont.appendChild(dogImg)
        })
    });

    fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((data) => {
        const list = document.getElementById('dog-breeds')
        const breedList = Object.keys(data.message);

        const filterDd = document.getElementById('breed-dropdown');

        filterDd.addEventListener('change', () => {
            list.innerHTML = ""
            const option = filterDd.value;
            console.log(option)
            const filteredList = breedList.filter(dog => dog.startsWith(option));
            console.log(filteredList);
            filteredList.forEach(dog=> {
                const breed = document.createElement('li');
                breed.textContent = dog
                list.appendChild(breed);
                breed.addEventListener('click', () => {
                    breed.style.color = "blue"
                });
            });
        });



        breedList.forEach(dog=> {
            const breed = document.createElement('li');
            breed.textContent = dog
            list.appendChild(breed);
            breed.addEventListener('click', () => {
                breed.style.color = "blue"
            });
        });

    });


        
}; //end of fetchData