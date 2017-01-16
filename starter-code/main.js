console.log("JS file is connected to HTML! Woo!")

var cards = ["queen", "queen", "king", "king"]

var cardsInPlay = [];

var createCards = function() {
  var gameBoard = document.getElementById('game-board');

  for (var i = 0; i < 4; i++) {
    var cards = document.createElement('div');
    cards.className = 'card';
    gameBoard.appendChild(cards);
  }

}

createCards();

function createBoard() {
  for (var i = 0; i < cards.length; i++);
    var cardsElements = document.createElement('div');
    cardsElements.className = 'card';
    cardsElements.setAttribute('data-card',cards[i]);
    cardsElements.addEventListener('click',isTwoCards);
    board.appendChild(cardElements);
    board.appendChild(cardElements);

}

createBoard();

function isMatch() {
  if (card[0] === card[1]) {
    alert("You found a match!")
  } else {
    alert ("Sorry, try again.")
  }
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('date-card'));
  console.log(this.getAttribute('date-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
  } else {
    this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
  }
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
}
}



