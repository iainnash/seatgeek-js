'use strict';
var SeatGeekRequest = require('./SeatGeekRequest');
var _seatgeekRequest = new SeatGeekRequest();

class SeatGeekPerformer extends SeatGeekRequest {
  constructor(clientId) {
    super(clientId);
  }
  performerByName(name) {
    const eventByIdEndpointDict = {};
    eventByIdEndpointDict['performers'] = name.replace(/ /g,"-");
    this.requestUrl = _seatgeekRequest.createRequestUrl(eventByIdEndpointDict, this.clientId);
    return this;
  }
  performerById(id) {
    const performerByIdEndpointDict = {};
    performerByIdEndpointDict['performers'] = id;
    this.requestUrl = _seatgeekRequest.createRequestUrl(performerByIdEndpointDict, this.clientId);
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
