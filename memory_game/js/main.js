
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

///////////////////////////////////////////////////

/*console.log("Up and running!");
alert('Hello, friends.');*/

/////////////////////////////////////////////////

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

var cardOne;

cardOne = cards[0];
cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

/////////////////////////////////////////////////

if ( cardsInPlay.length === 2){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
}
  else{
  alert("Sorry, try again.");
}
}