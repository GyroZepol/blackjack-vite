
/**
 * Take a card from deck
 * @param {Array<String>} deck Example: ["1C", "5D", "7H", "2S"]
 * @returns {String} card name
 */

export const takeCard = (deck) => {
  if (!deck) {
    throw new Error('Deck mising')
  }

  if (!deck.length) {
    alert("There aren't more cards");
    throw "Deck empty";
  }
  return deck.pop();
};