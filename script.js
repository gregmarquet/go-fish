class Card {
  constructor(suit, value, image){
    this.suit = suit;
    this.value = value;
    this.image = image;
  }
}

class Player {
  constructor(name, hand){
    this.name = name;
    this.hand = hand;
  }
}

var deck = [];
const suit = ["spades", "hearts", "diamonds", "clubs"];
const values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

function createDeck (){
  for(var i = 0; i < suit.length; i++) {
    for (var j = 0; j < values.length; j++) {
      image =`${values[j]}_of_${suit[i]}.png`;
      newCard = new Card(suit[i], values[j], image);
      deck.push(newCard);
    }
  }
  return deck;
}
createDeck();
console.log(deck);

