/*------------------------------------
Task-7: Create a deck of Cards
-------------------------------------
Created By: Krishna Naik 
Created Date: 29-03-2023
-------------------------------------*/
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Jack",
  "Queen",
  "King",
];

let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
  for (let x = 0; x < values.length; x++) {
    let card = { Value: values[x], Suit: suits[i] };
    deck.push(card);
  }
}

const Deal = () => {
  let randomCards = [];

  // shuffle the cards
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }

  // display 5 results
  for (let i = 0; i < 5; i++) {
    let newCard = randomCards.includes(`${deck[i].Value} of ${deck[i].Suit}`);
    if (!newCard) {
      //if its true means the value is already present so dont push the same value in the array
      randomCards.push(`${deck[i].Value} of ${deck[i].Suit}`);
    }
  }

  return randomCards.join(", <br />");
};
