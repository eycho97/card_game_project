import axios from 'axios';

export default class Hand {
  constructor() {
    this.cards = [];
    this.type = 'hard';
    this.rank = [];
    this.isbusted = false;
    this.isblackjack = false;
    this.ispair = false;
    this.isdouble = false;
    this.total = this.getTotal();
  } 

  updateStatus() {
    var total = 0
    var aceCount = 0
    for(var card of this.cards){

    }
  }

  getTotal() {
    return this.rank.reduce((a, b) => a + b, 0)
  }

  add(card) {
    this.cards.push(card);
  }
}
