function shuffle(array) {
    var copy = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * array.length);
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
  
    return copy;
  }
  
  class Card{
      constructor(suit, value){
          this.suit = suit;
          this.value = value;
      }
  }

  class Deck{
      constructor(){
      var suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
      var value = ["A", 2,3,4,5,6,7,8,9,10,"J", "Q", "K"];
      this.deck = [];
      for (let i = 0; i< suits.length; i++){
        //   console.log(suits[i]);
        for (let j=0; j < value.length; j++){
            // console.log(suits[i] + " " + value[j]);
            var newCard = new Card(suits[i], value[j]);
            // console.log(newCard.suit + " " + newCard.value);
            this.deck.push(newCard);
        }
        this.shuffle = function(deck){
            var copy = [], n = deck.length, i;
            while (n) {
                i = Math.floor(Math.random() * deck.length);
                if (i in deck) {
                copy.push(deck[i]);
                delete deck[i];
                n--;
                }
            }
            return copy;
        }
        this.deal = function(deck, num){
            let n = num, i;
            while (n){
            i = Math.floor(Math.random() * deck.length);
            console.log(deck[i]);
            var temp = deck[i];
            deck[i] = deck[deck.length-1];
            deck.pop(deck.length);
            n--;
            
            }
            console.log(deck.length);
        }
    }


  console.log(this.deck);
}
}
var test = new Deck();
// console.log(test.deck);
console.log(test.deal(test.deck, 7));