var cards = ['queen', 'queen', 'king', 'king'];
var cardOne = cards[0];
var cardTwo = cards[3];

var cardsInPlay = [];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

//if (cardsInPlay[]) {
//  alert("You've found a match!");
//} else {
// alert("You didn't get it this time. Try again")
//}
// let function = "createBoard"
// createBoard
console.log("user flipped " + cardOne);
console.log("user flipped " + cardTwo);
if(cardsInPlay.length === 2) {

	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");	
	}
}
