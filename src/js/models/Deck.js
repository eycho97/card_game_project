import axios from 'axios';

export default class Deck {
  constructor(deck_num=1) {
    this.deck_num = deck_num;
    // this.data = this.getData(deck_num);
    // console.log(this.data);
  } 

  async getData() {
    try {
      const res = await axios(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
      this.remaining = res.data.remaining;
      this.deck_id = res.data.deck_id;
      
    } catch (error) {
      alert(error);
    }
  }
}
