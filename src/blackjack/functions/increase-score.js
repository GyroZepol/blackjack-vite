import { scoresContainers } from './../constants/html-elements'
import { cardValue } from './card-value'

export const increaseScore = (playerNum, playersScore, card) => {
  playersScore[playerNum] += cardValue(card);
  scoresContainers[playerNum].innerText = playersScore[playerNum];
};