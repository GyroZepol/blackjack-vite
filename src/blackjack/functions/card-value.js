/**
 * Obtains the card value
 * @param {String} card 
 * @returns {Number} card value
 */

export const cardValue = (card) => {
  if(!card) throw new Error('Card Missing')

  const value = card.substring(0, card.length - 1);
  if (isNaN(value)) {
    return value === "A" ? 11 : 10;
  } else {
    return value * 1;
  }
};