const btn = document.querySelector('button');
const imgDog = document.querySelector('.img-dog');

const URL = 'https://dog.ceo/api/breeds/image/random'

let activeSlideNumber = 1

let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');


let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active')
    activeElement.classList.remove('active')
}

let showSlide = (slideNumber) => {
    hideActiveSlide()
    document.querySelector('#slide' + slideNumber).classList.add('active')
}


let showNextSlide = () => {
    if (activeSlideNumber === 3) {
       activeSlideNumber = 1
    } else {
        activeSlideNumber = activeSlideNumber + 1
   }
    showSlide(activeSlideNumber)
}

let showPreviousSlide = () => {
    if (activeSlideNumber === 1) {
        activeSlideNumber = 3
    } else {
        activeSlideNumber = activeSlideNumber -1
    }
    showSlide(activeSlideNumber)
}


for (let i = 1; i <= 3; i++){
    let showSlideI = () => {
        activeSlideNumber = i
    showSlide(i)
    }
    document.querySelector('#dot' + i).addEventListener('click', showSlideI)
}

arrowRight.addEventListener('click', showNextSlide)
arrowLeft.addEventListener('click', showPreviousSlide)
setInterval(showNextSlide, 5000);


btn.addEventListener('click', () => {
    fetch(URL)
        .then(res => res.json())
        .then(data => imgDog.setAttribute('src', data.message))
        .catch(err => {
            console.error(err);
            imgDog.alt = 'Nie udało się pobrać zdjęcia psa.';
        });
});


