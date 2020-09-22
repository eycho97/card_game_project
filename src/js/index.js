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
  const guess = gV.getInput();
  console.log(guess);

  if (guess) {
    // new deck object
    state.deck = new Deck();

    //prepare UI for results

    //4 Search for card
    await state.deck.getData();

    var deck_id = state.deck.deck_id;
    console.log(deck_id);
    //5 render results on UI
    await state.deck.newCard(deck_id);
    var value = state.deck.value;
    console.log(value);
  }

}
