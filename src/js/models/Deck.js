import axios from 'axios';

export default class Deck {
  constructor(deck_num) {
    this.deck_num = deck_num;
  } 

  async getData(deck_num) {
    try {
      const res = await axios(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deck_num}`);
      this.remaining = res.data.remaining;
      this.deck_id = res.data.deck_id;
    } catch (error) {
      alert(error);
    }
  }
}
