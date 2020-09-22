import {elements} from './base';

export const getInput = () => elements.guessInput.value;

export const renderCard = card => {
  const markup = `
    <li>
      <img src="${card.image}"></img>
    </li>
  `;
  elements.searchCardList.insertAdjacentHTML('beforeend', markup);
}

export const renderCards = cards => {
  cards.foreach(renderCard);
}

