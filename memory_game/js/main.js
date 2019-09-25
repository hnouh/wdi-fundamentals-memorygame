
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

var cards =[
{
rank: "queen",
cardImage: "images/queen-of-hearts.png",
suit: "hearts"
},
{
rank: "king",
cardImage: "images/king-of-hearts.png",
suit: "hearts"
},
{
rank: "queen",
cardImage: "images/queen-of-diamonds.png",
suit: "diamonds"
},
{
rank: "king",
cardImage: "images/king-of-diamonds.png",
suit: "diamonds"
}
];

const cardsInPlay = [];

function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

function flipCard(cardId){

cardsInPlay.push(cards[cardId].rank);

console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

    if ( cardsInPlay.length === 2){
      checkForMatch();
    }
}

flipCard(0);
flipCard(1);
