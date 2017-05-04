'use strict';
import SeatGeekRequest from './SeatGeekRequest';
let _seatgeekRequest = new SeatGeekRequest();

export default class SeatGeekPerformer extends SeatGeekRequest {
  constructor(clientId) {
    super(clientId);
  }
  performerById(name) {
    const eventByIdEndpointDict = {};
    eventByIdEndpointDict['performers'] = name.replace(/ /g,"-");
    this.requestUrl = _seatgeekRequest.createRequestUrl(eventByIdEndpointDict, this.clientId);
    return this;
  }
  performerByName() {
    const eventByIdEndpointDict = {};
    eventByIdEndpointDict['performers'] = '';
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
  query(query) {
    this.requestUrl = _seatgeekRequest.query(query, this.requestUrl);
    return this;
  }
  get() {
    return _seatgeekRequest.get(this.requestUrl);
  }
}
