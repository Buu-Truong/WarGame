// -	Deal 26 Cards to two Players from a Deck. 
// -	Iterate through the turns where each Player plays a Card
// -	The Player who played the higher card is awarded a point
// o	Ties result in zero points for either Player
// -	After all cards have been played, display the score.





// Iterate through the turns where each Player plays a Card

// players take turn drawing one card

// Ties result in zero points for either Player

// After all cards have been played, display the score.

// Global declare of suits and value of the deck.


class Deck{
      constructor(cards = newDeck) {
          this.cards = cards
      }
  }

  class Card {
      constructor(suit, value) {
          this.suit = suit
          this.value = value
      }
  }

function freshDeck(){
    return Suits.flatMap(suit => {
        return Values.map(value =>{
            return new Card(suit, value)
        })
    })
}
const Suits = ['Heart', 'club', 'Spade', 'Diamond']
const Values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
       this._cards.push(new Card(ranks[j], suits[i], values[j]));



// Deal 26 Cards to two Players from a Deck.
class Player {
 
    constructor(name) {
        this._playerName = name;
        this._playerScore = 0;
        this._playerDeck = [];
    }
  
  get name() {
    return this._playerName;
  }
 
  get deck() {
    return this._playerDeck;
  }
  
  get score() {
    return this._playerScore;
  }
 
  set deck(newDeck) {
    if (Array.isArray(newDeck)) {
      this._playerDeck = newDeck;
    }
  }
 
  set score(newScore) {
    if (!isNaN(newScore)) {
      this._playerScore = newScore;
    }
  }
 }

 class GameMenu {
 
    constructor() {
    this._players = [];
    this._deck = [];
    }
 
  start() {
    
        console.log("\t\t\t\t**** Game Menu ****")
      let input = prompt("0- exit; 1- play");
        while (input != '0') {
            switch (input) {
                case '0':
                    exit;
                case '1':
                              this._createGame();
                    break;
                  }  
                    input = prompt("0- exit; 1- play");
            }
    }
 
  _createGame() {
 
  
    this._players[0] = new Player("Player 1");
    this._players[1] = new Player("Player 2");
    
   
    this._cards = new Deck().buildDeck();
    
    
    this._players[0].deck = [...this._cards.slice(0,26)];
    this._players[1].deck = [...this._cards.slice(26,52)];
    
       
    console.log("\t\t\t\t**** Dealing Hands ****")
    for (let i = 0; i < this._players[0].deck.length; i++) {
      if (this._players[0].deck[i].value > this._players[1].deck[i].value) {
        this._players[0].score +=1;
        let winningHand = `${this._players[0].deck[i].rank} of ${this._players[0].deck[i].suit}`;
        console.log(`Player 1 won with a ${winningHand}`);
      } else {
        this._players[1].score +=1;
        let winningHand = `${this._players[1].deck[i].rank} of ${this._players[0].deck[i].suit}`;
        console.log(`Player 2 won with a ${winningHand}`);
      }
    }
    
    
    console.log("\t\t\t\t**** Hands Finished ****")
    if (this._players[0].score > this._players[1].score) {
      console.log(`PLAYER 1 WON WAR with a score of ${this._players[0].score}`);
    } else if (this._players[0].score < this._players[1].score){
       console.log(`PLAYER 2 WON WAR with a score of ${this._players[1].score}`);
    } else {
      console.log("PLAYER 1 AND PLAYER 2 TIED!");
    }
  }
 }  
 
 const game = new GameMaster();
 game.start();
// Not sure why the game won't start