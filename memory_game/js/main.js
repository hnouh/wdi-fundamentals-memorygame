
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

function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}

function flipCard(cardId){

cardsInPlay.push(cards[cardId]);

console.log("User flipped" + cards[cardId]);
    if ( cardsInPlay.length === 2){
      checkForMatch();
    }
}

flipCard(0);
flipCard(1);
