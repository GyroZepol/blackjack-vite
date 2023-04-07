import { takeCard, increaseScore, addCardToHtml } from './'

export const cpuTurn = (minScore, deck, playersScore) => {
  const playerNum = playersScore.length - 1;
  let cpuScore;
  do {
    const card = takeCard(deck);

    increaseScore(playerNum, playersScore, card);

    addCardToHtml(playerNum, card)
    
    cpuScore = playersScore[playerNum]
  } while (
    minScore <= 21 &&
    cpuScore <= minScore &&
    cpuScore + 1 !== 21 &&
    cpuScore < 21
  );
};