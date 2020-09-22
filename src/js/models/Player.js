import axios from 'axios';

export default class Player {
  constructor(bank = 1000, bet=50, hand) {
    this.bank = bank;
    this.bet = bet;
    this.hand = hand;
  } 

}
