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

let deckSize = deck.length;
const Deal = () => {
  let randomCards = [];

  // shuffle the cards
  for (let i = deckSize - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }

  // How shuffling will happen
  if (deckSize > 5) {
    // display 5 results (bug noticed as per code after adding 5 records it shouldnt display more cards)
    for (let i = 0; i < 5; i++) {
      randomCards.push(`${deck[i].Value} of ${deck[i].Suit}`);
    }

    deckSize = deckSize - 5;
    return randomCards.join(", <br />");
  } else {
    return "Less Cards";
  }
};

//will have to reduce the size of the deck by the number of cards displayed each time
//eg:- 51 - 5 = 46 | 46-5 = 41 | 41-5 = 36
