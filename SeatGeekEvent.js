'use strict';
var SeatGeekRequest = require('./SeatGeekRequest');
var _seatgeekRequest = new SeatGeekRequest();

class SeatGeekEvent extends SeatGeekRequest {
  constructor(clientId) {
    super(clientId);
  }
  allEvents() {
    const eventByIdEndpointDict = {};
    eventByIdEndpointDict['events'] = '';
    this.requestUrl = _seatgeekRequest.createRequestUrl(eventByIdEndpointDict, this.clientId);
    return this;
  }
  eventById(id) {
    const eventByIdEndpointDict = {};
    eventByIdEndpointDict['events'] = id;
    this.requestUrl = _seatgeekRequest.createRequestUrl(eventByIdEndpointDict, this.clientId);
    return this;
  }
  perPage(reqPerPage) {
    this.requestUrl = _seatgeekRequest.perPage(reqPerPage, this.requestUrl);
    return this;
  }
  page(pageNumber) {
    this.requestUrl = _seatgeekRequest.page(pageNumber, this.requestUrl);
    return this;
  }
  get() {
    return _seatgeekRequest.get(this.requestUrl);
  }
}

module.exports = SeatGeekEvent;
