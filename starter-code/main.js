console.log("JS file is connected to HTML! Woo!")
var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";

/* if (cardOne === cardTwo) {
	alert("You found a match!")
} else if (cardThree === cardFour) {
	alert("You found a match!")
} else {
	alert ("Sorry, try again.")
}*/ 

var gameBoard = document.getElementById('game-board');

for (var i = 0; i <= 4; i++) {
	var cards = document.createElement('div').innerHTML;
	cards.className = 'card';
	document.getElementById('game-board').appendChild(cards);
}

var createCards = function() {

}

createCards();