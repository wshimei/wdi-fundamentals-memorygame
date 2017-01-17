var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = [];

// function createCards() {
//   var gameBoard = document.getElementById('game-board');

//   for (var i = 0; i < 4; i++) {
//     var cards = document.createElement('div');
//     cards.className = 'card';
//     gameBoard.appendChild(cards);
//   }

// }
// createCards();

var board = document.getElementById('game-board');
function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElements = document.createElement('div');
    cardElements.className = 'card';
    cardElements.setAttribute('data-card',cards[i]);
    cardElements.addEventListener('click',isTwoCards);
    board.appendChild(cardElements);
    board.appendChild(cardElements);
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!")
  } else {
    alert ("Sorry, try again.")
  }
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>";
  } else {
    this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>";
  }
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

createBoard();
