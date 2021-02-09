const block = document.querySelector('.block');
const blockRed = document.querySelector('.block_red');
const blockGreen = document.querySelector('.block_green');
const blockBlue = document.querySelector('.block_blue');
const blockYellow = document.querySelector('.block_yellow');
const conteinerCard = document.querySelector('.conteiner-card')[0];
const cards = document.querySelectorAll('.card');
conteinerBlock = document.querySelector('.conteiner-block')
const headerInput = document.querySelector('.header__input')

function toggle(evt) {
    if (evt.target.classList.contains('block_red')) {
        blockRed.classList.add('click_padding');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add('color_red');
        }
    } else {
        blockRed.classList.remove('click_padding');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('color_red');
        }
    }
    if (evt.target.classList.contains('block_blue')) {
        blockBlue.classList.add('click_padding');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add('color_blue');
        }
    } else {
        blockBlue.classList.remove('click_padding');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('color_blue');
        }
    }
    if (evt.target.classList.contains('block_green')) {
        blockGreen.classList.add('click_padding');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add('color_green');
        }
    } else {
        blockGreen.classList.remove('click_padding');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('color_green');
        }
    }
    if (evt.target.classList.contains('block_yellow')) {
        blockYellow.classList.add('click_padding');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add('color_yellow');
        }
    } else {
        blockYellow.classList.remove('click_padding');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('color_yellow');
        }
    }
}

cards.forEach((element) => {
    element.addEventListener('click', () => {
        let num = +element.textContent
        headerInput.textContent = num;
    })
});


function shuffle() {
    cards.forEach((card) => {
        let random = Math.floor(Math.random() * cards.length);
        card.style.order = random;
    })
}

setInterval(() => {
    shuffle();
}, 3000);

const headerButton = document.querySelector('.header__button')

conteinerBlock.addEventListener('click', toggle);
headerButton.addEventListener('click', function () {
    if (headerButton) {
        headerInput.textContent = "";
    }
})