import {
  createDeck,
  takeCard,
  addCardToHtml,
  increaseScore,
  cpuTurn,
  displayToast,
} from "./functions";
import {
  takeCardButton,
  scoresContainers,
  cardsContainer,
  newGameButton,
  stopGameButton,
} from "./constants/html-elements";

/**
 * 2C = Two of Clubs (Treboles)
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const types = ["C", "D", "H", "S"],
  specialCards = ["A", "J", "Q", "K"];

let playersScore = [];

const initGame = (playersNum = 2) => {
  deck = createDeck(types, specialCards);
  playersScore = [];
  for (let i = 0; i < playersNum; i++) {
    playersScore.push(0);
  }
  cardsContainer.forEach((cardContainer) => {
    cardContainer.innerHTML = "";
  });
  scoresContainers.forEach((scoreHTML) => {
    scoreHTML.innerText = 0;
  });
  takeCardButton.disabled = false;
  stopGameButton.disabled = false;
};

const endGame = () => {
  takeCardButton.disabled = true;
  stopGameButton.disabled = true;

  let minScore = playersScore[0];

  let cpuPlayerNum = playersScore.length - 1;
  cpuTurn(minScore, deck, playersScore);
  let cpuScore = playersScore[cpuPlayerNum];

  if (
    (minScore === 21 && cpuScore !== minScore) ||
    cpuScore > 21 ||
    (cpuScore < minScore && minScore < 21)
  ) {
    displayToast("Player Wins");
    return;
  }
  if (minScore === cpuScore) {
    displayToast("Draw");
    return;
  }
  displayToast("CPU wins");
};

takeCardButton.addEventListener("click", () => {
  let playerNum = 0;
  const card = takeCard(deck);
  increaseScore(playerNum, playersScore, card);

  addCardToHtml(playerNum, card);

  if (playersScore[playerNum] >= 21) {
    endGame();
  }
});

stopGameButton.addEventListener("click", () => {
  endGame();
});

newGameButton.addEventListener("click", () => {
  initGame();
});
