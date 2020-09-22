import axios from 'axios';
import Deck from './models/Deck';
import * as gV from './views/gameView';
import {elements} from './views/base';

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


const controlSearch = async () => {
  // get guess from view

  // new deck object
  state.deck = new Deck();

  //prepare UI for results
  //4 Search for card
  await state.deck.getData();
  var deck_id = state.deck.deck_id;
  console.log(deck_id);

  await state.deck.newCard(deck_id);
  var value = state.deck.value;
  console.log(value);

  var playing = true;
  while(playing){
    const guess = gV.getInput();
    var value_int = findVal(value);
    if (parseInt(guess) > value_int){
      console.log("too high");
    } else if (parseInt(guess) < value_int) {
      console.log("too low");
    } else {
      console.log("You are right!");
    }
    console.log(guess);
    playing = false;
  }
  //5 render results on UI
  gV.renderCard(state.deck.card);
  

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