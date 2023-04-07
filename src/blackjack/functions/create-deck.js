import { shuffleDeck } from '../utils/shuffle-deck'

/**
 * This function creates a new deck
 * @param {Array<String>} types Example: ["C", "D", "H", "S"]
 * @param {Array<String>} specialCards Example: ["A", "J", "Q", "K"]
 * @returns {Array<String>} Returns a new deck
 */

export const createDeck = (types, specialCards) => {

  if(!types || !types.length) throw new Error('Missing Types')
  if(!specialCards || !specialCards.length) throw new Error('Missing specialCards')

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let type of types) {
      deck.push(i + type);
    }
  }

  for (let type of types) {
    for (let specialCard of specialCards) {
      deck.push(specialCard + type);
    }
  }

  return shuffleDeck(deck);
};