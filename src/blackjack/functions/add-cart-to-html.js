import { cardsContainer } from "../constants/html-elements";

export const addCardToHtml = (playerNum, card) => {
  const cardImg = document.createElement("img");
  cardImg.src = `assets/bj-cards/${card}.png`;
  cardImg.classList.add("bj-playing-card");
  cardsContainer[playerNum].append(cardImg)
};