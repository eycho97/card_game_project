import axios from 'axios';
import Deck from './models/Deck';
import * as gV from './views/gameView';
import {elements} from './views/base';
import Card from './models/Card';

/** Global state of the app
 * - Deck object
 * - Player object (hand)
 * - Dealer object (hand)
 */

const state = {};

elements.guessForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

elements.searchStartBtn.addEventListener('click', e => {
  e.preventDefault;
  startGame();
})


const startGame = async () => {
  // get guess from view

  // new deck object
  state.deck = new Deck();

  //prepare UI for results
  //4 Search for card
  await state.deck.getData();
  var deck_id = state.deck.deck_id;
  console.log(deck_id);
  
  state.card = new Card();

  await state.card.newCard(deck_id);
  var value = state.card.value;
  console.log(value);

  state.guesses = 5;
  gV.hideStartBtn();
  gV.showGuessForm();
}

const controlSearch = async () => {

  const guess = gV.getInput();
  var value_int = findVal(state.card.value);
  var correct = false;
  if (parseInt(guess) > value_int){
    console.log("too high");
  } else if (parseInt(guess) < value_int) {
    console.log("too low");
  } else {
    correct = true;
    console.log("You are right!");
  }
  console.log(guess);
  //5 render results on UI
  state.guesses--;
  console.log(state.guesses);
  if (state.guesses == 0 || correct){
    gV.renderCard(state.card.data);
  }
  

}

function findVal(value) {
  switch(value){
    case 'ACE':
      return 1;
    case 'KING':
      return 13;
    case 'QUEEN':
      return 12;
    case 'JACK':
      return 11;
    default:
      return parseInt(value);
  }
}