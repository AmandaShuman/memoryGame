document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {   //name needs to be the same name as the image for program to run
            name: 'handsHeart',
            img: 'images/handsHeart.png'
        },
        {
            name: '2handsHeart',
            img: 'images/2handsHeart.png'
        },
        {
            name: 'angryPenguin',
            img: 'images/angryPenguin.png'
        },
        {
            name: 'angryPenguin',
            img: 'images/angryPenguin.png'
        },
        {
            name: 'balloons',
            img: 'images/balloons.png'
        },
        {
            name: 'balloons',
            img: 'images/balloons.png'
        },
        {
            name: 'heartInHand',
            img: 'images/heartInHand.png'
        },
        {
            name: 'heartInHand',
            img: 'images/heartInHand.png'
        },
        {
            name: 'helloKitty',
            img: 'images/helloKitty.png'
        },
        {
            name: 'helloKitty',
            img: 'images/helloKitty.png'
        },
        {
            name: 'key',
            img: 'images/key.png'
        },
        {
            name: 'key',
            img: 'images/key.png'
        },
        {
            name: 'openSign',
            img: 'images/openSign.png'
        },
        {
            name: 'openSign',
            img: 'images/openSign.png'
        },
        {
            name: 'pig',
            img: 'images/pig.png'
        },
        {
            name: 'pig',
            img: 'images/pig.png'
        },
        {
            name: 'present',
            img: 'images/present.png'
        },
        {
            name: 'present',
            img: 'images/present.png'
        },
        {
            name: 'raccoon',
            img: 'images/raccoon.png'
        },
        {
            name: 'raccoon',
            img: 'images/raccoon.png'
        }
    ]

    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []

    //create your game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/allCardBack.jpg')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')               //gets id from createBoard function
        cardsChosen.push(cardArray[cardId].name)                //adds card name to array
        cardsChosenId.push(cardId)                              //adds card id to array
        this.setAttribute('src', cardArray[cardId].img)         //sets image to the image from the card id
        if (cardsChosen === 2) {                                //want to invoke function check for match
            setTimeout(checkForMatch, 500)                      //times out after 500ms when match found
        }
    }

    createBoard()




})