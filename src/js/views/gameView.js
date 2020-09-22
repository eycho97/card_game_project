import {elements} from './base';

export const getInput = () => elements.guessInput.value;

export const renderCard = card => {
  elements.cardsList.style.display = 'block'
  const markup = `
    <li>
      <img class="card-image" src="${card.image}"></img>
    </li>
  `;
  elements.searchCardList.insertAdjacentHTML('afterbegin', markup);
}

export const renderCards = cards => {
  cards.foreach(renderCard);
}

export const hideCards = () => elements.cardsList.style.display = 'None';


export const hideStartBtn = () => elements.searchStartBtn.style.display ='none';

export const showGuessForm = () => elements.guessForm.style.display = 'block';

export const hideGuessForm = () => elements.guessForm.style.display = 'none';

export const showGameResult = status => {
  elements.searchGameResult.style.display = 'block';
  if (status) {
    elements.winBlock.style.display = 'block';
  } else {
    elements.loseBlock.style.display = 'block';
  }
}

export const hideGameResult = () => {
  elements.searchGameResult.style.display = 'none';
  elements.winBlock.style.display = 'none';
  elements.loseBlock.style.display = 'none';
}