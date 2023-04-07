export const shuffleDeck = (deck) => {
  let i, j, temp;
  let newDeck = deck;
  for (i = newDeck.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = newDeck[i];
    newDeck[i] = newDeck[j];
    newDeck[j] = temp;
  }
  return newDeck;
};