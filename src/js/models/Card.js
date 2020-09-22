import axios from 'axios';

export default class Card {
  constructor() {
    // this.data = this.getData(deck_num);
    // console.log(this.data);
  } 
  
  async newCard(deck_id) {
    try {
      const res = await axios(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
      console.log(res);
      this.data = res.data.cards[0];
      this.image = res.data.cards[0].image;
      this.value = res.data.cards[0].value;
      this.code = res.data.cards[0].code;
      this.suit = res.data.cards[0].suit;
    } catch (error) {
      alert(error);
    }
  }
}
