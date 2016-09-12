'use strict';
const SeatGeekEvent = require('./SeatGeekEvent');

class SeatGeek {
  constructor(clientId) {
    if(!clientId || clientId.length < 1){ throw Error('API Key required'); }
    this.Event = new SeatGeekEvent(clientId);
    return this;
  }
}

module.exports = SeatGeek;
