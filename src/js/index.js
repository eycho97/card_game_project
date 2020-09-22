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
    var value_int = 0;
    switch(value){
      case 'ACE':
        value_int = 1;
        break;
      case 'KING':
        value_int = 13;
        break;
      case 'QUEEN':
        value_int = 12;
        break;
      case 'JACK':
        value_int = 11;
        break;
      default:
        value_int = parseInt(value);
        break;
    }
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
