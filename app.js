let cardsArrey = [{
        img: "./PNG/2C.png",
        value: 2
    },
    {
        img: "./PNG/2D.png",
        value: 2
    },
    {
        img: "./PNG/2H.png",
        value: 2
    }, {
        img: "./PNG/2S.png",
        value: 2
    }, {
        img: "./PNG/3C.png",
        value: 3
    }, {
        img: "./PNG/3D.png",
        value: 3
    }, {
        img: "./PNG/3H.png",
        value: 3
    }, {
        img: "./PNG/3S.png",
        value: 3
    }, {
        img: "./PNG/4D.png",
        value: 4
    }, {
        img: "./PNG/4H.png",
        value: 4
    }, {
        img: "./PNG/4S.png",
        value: 4
    }, {
        img: "./PNG/4C.png",
        value: 4
    }, {
        img: "./PNG/5C.png",
        value: 5
    }, {
        img: "./PNG/5D.png",
        value: 5
    }, {
        img: "./PNG/5H.png",
        value: 5
    }, {
        img: "./PNG/5S.png",
        value: 5
    }, {
        img: "./PNG/6C.png",
        value: 6
    }, {
        img: "./PNG/6D.png",
        value: 6
    }, {
        img: "./PNG/6H.png",
        value: 6
    }, {
        img: "./PNG/6S.png",
        value: 6
    }, {
        img: "./PNG/7C.png",
        value: 7
    }, {
        img: "./PNG/7D.png",
        value: 7
    }, {
        img: "./PNG/7H.png",
        value: 7
    }, {
        img: "./PNG/7S.png",
        value: 7
    }, {
        img: "./PNG/8C.png",
        value: 8
    }, {
        img: "./PNG/8D.png",
        value: 8
    }, {
        img: "./PNG/8H.png",
        value: 8
    }, {
        img: "./PNG/8S.png",
        value: 8
    }, {
        img: "./PNG/9C.png",
        value: 9
    }, {
        img: "./PNG/9D.png",
        value: 9
    }, {
        img: "./PNG/9H.png",
        value: 9
    }, {
        img: "./PNG/9S.png",
        value: 9
    }, {
        img: "./PNG/10C.png",
        value: 10
    }, {
        img: "./PNG/10D.png",
        value: 10
    }, {
        img: "./PNG/10H.png",
        value: 10
    }, {
        img: "./PNG/10S.png",
        value: 10
    }, {
        img: "./PNG/jC.png",
        value: 10
    }, {
        img: "./PNG/jD.png",
        value: 10
    }, {
        img: "./PNG/jH.png",
        value: 10
    }, {
        img: "./PNG/jS.png",
        value: 10
    }, {
        img: "./PNG/kC.png",
        value: 10
    }, {
        img: "./PNG/kD.png",
        value: 10
    }, {
        img: "./PNG/kH.png",
        value: 10
    }, {
        img: "./PNG/kS.png",
        value: 10
    }, {
        img: "./PNG/qC.png",
        value: 10
    }, {
        img: "./PNG/qD.png",
        value: 10
    }, {
        img: "./PNG/qH.png",
        value: 10
    }, {
        img: "./PNG/qS.png",
        value: 10
    }, {
        img: "./PNG/aC.png",
        value: 11
    }, {
        img: "./PNG/aD.png",
        value: 11
    }, {
        img: "./PNG/aH.png",
        value: 11
    }, {
        img: "./PNG/aS.png",
        value: 11
    }

];

const $hit = document.getElementById('hit');
const $stop = document.getElementById('stop');
const $newGame = document.getElementById('newGame');
const $cards = document.querySelector('.cards');
const $massage = document.querySelector('.massage');
const $score = document.querySelector('.score');
const $dealerCards = document.querySelector('.dealer-cards');

let value = 0;
let randomDealer = 0;
let dealerValue = 0
let inputDealer = "";
let inputDealer2 = "";

function dealerCards() {
    randomDealer = Math.floor(Math.random() * cardsArrey.length);
    inputDealer = `<div class="single-card"><img src="${cardsArrey[randomDealer].img}"</img> <img src="./PNG/blue_back.png"<div>`
    $dealerCards.innerHTML = inputDealer;
    dealerValue = cardsArrey[randomDealer].value

};
dealerCards();


$hit.addEventListener('click', () => {

    let random = Math.floor(Math.random() * cardsArrey.length);
    console.log(random);

    let input = `<div class="single-card"><img src="${cardsArrey[random].img}"</img><div>`
    value += cardsArrey[random].value;
    if (value > 21 && cardsArrey[random].value == 11) {
        value = value - 10;
    }
    $cards.innerHTML += input
    $score.innerHTML = "you: " + value;

    cardsArrey.splice(random, 1);

    if (value > 21) {
        $massage.innerHTML = "You Lost";
        $hit.disabled = true;
        $stop.disabled = true;
    }
    if (value == 21) {
        $massage.innerHTML = "BLACK JACK";
        $hit.disabled = true;
        $stop.disabled = true;
    }

});


$stop.addEventListener('click', () => {
    inputDealer = `<div class="single-card"><img src="${cardsArrey[randomDealer].img}"</img><div>`

    while (dealerValue <= 21 && dealerValue < value) {
        let randomDealer2 = Math.floor(Math.random() * cardsArrey.length);

        inputDealer += `<div class="single-card"><img src="${cardsArrey[randomDealer2].img}"</img><div>`

        dealerValue += cardsArrey[randomDealer2].value
        if (dealerValue > 21 && cardsArrey[randomDealer2].value == 11) {
            dealerValue = dealerValue - 10;
        }
        $dealerCards.innerHTML = inputDealer;


    }


    if (dealerValue > 21) {
        $massage.innerHTML = "You Won - Dealer got: " + dealerValue;;

    };

    if (dealerValue > value && dealerValue <= 21) {
        $massage.innerHTML = "You Lost - Dealer got: " + dealerValue;

    };
    if (dealerValue == value) {
        $massage.innerHTML = "Nobody won Dealer got also: " + dealerValue;

    };
    if (dealerValue < value) {
        $massage.innerHTML = "You Won - Dealer got: " + dealerValue;

    };

    $hit.disabled = true;
    $stop.disabled = true;




});

$newGame.addEventListener('click', () => {
    location.reload();
})