document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {   //name needs to be the same name as the image for program to run
            name: 'handsHeart',
            img: 'images/handsHeart.png'
        },
        {
            name: 'handsHeart',
            img: 'images/handsHeart.png'
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

    //refresh game with cards in new places
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create your game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/allCardBack.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')            //pick up all the images from createBoard
        const optionOneId = cardsChosenId[0]                    //we have 2 values - can only pick 2/turn
        const optionTwoId = cardsChosenId[1]
        if (optionOneId == optionTwoId) {
            alert("You've chosen the same card. Try again.")
            cards[optionOneId].setAttribute('src', 'images/allCardBack.jpg')
            cards[optionTwoId].setAttribute('src', 'images/allCardBack.jpg')
        } else if (cardsChosen[0] === cardsChosen[1]) {                       //if same, change to white & remove from play
            alert('You found a match! 👏😁')
            cards[optionOneId].setAttribute('src', 'images/white.png')      
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener("click", flipCard);
            cards[optionTwoId].removeEventListener("click", flipCard);
            cardsWon.push(cardsChosen)                                     
        } else {                                                //if cards different, want to reflip them
            cards[optionOneId].setAttribute('src', 'images/allCardBack.jpg')
            cards[optionTwoId].setAttribute('src', 'images/allCardBack.jpg')
            alert('Sorry, try again. 🤷‍♀️😢')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "🎉🎉🎉 Congrats! You've found all the matches! 🎉🎉🎉"
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')               //gets id from createBoard function
        cardsChosen.push(cardArray[cardId].name)                //adds card name to array
        cardsChosenId.push(cardId)                              //adds card id to array
        this.setAttribute('src', cardArray[cardId].img)         //sets image to the image from the card id
        if (cardsChosen.length === 2) {                                //want to invoke function check for match
            setTimeout(checkForMatch, 500)                      //times out after 500ms when match found
        }
    }

    createBoard()




})