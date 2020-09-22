import {elements} from './base';

export const getInput = () => elements.guessInput.value;

export const renderCard = card => {
  const markup = `
    <li>
      <img class="card-image" src="${card.image}"></img>
    </li>
  `;
  elements.searchCardList.insertAdjacentHTML('beforeend', markup);
}

export const renderCards = cards => {
  cards.foreach(renderCard);
}

export const hideStartBtn = () => elements.searchStartBtn.style.display ='none';

export const showGuessForm = () => elements.guessForm.style.display = 'block';