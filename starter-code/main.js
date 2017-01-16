console.log("JS file is connected to HTML! Woo!")

var cards = ["queen", "queen", "king", "king"]

/* if (cardOne === cardTwo) {
	alert("You found a match!")
} else if (cardThree === cardFour) {
	alert("You found a match!")
} else {
	alert ("Sorry, try again.")
}*/

var createCards = function() {
  var gameBoard = document.getElementById('game-board');

  for (var i = 0; i < 4; i++) {
    var cards = document.createElement('div');
    cards.className = 'card';
    gameBoard.appendChild(cards);
  }

}

createCards();
