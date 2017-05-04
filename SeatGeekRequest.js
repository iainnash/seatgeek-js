'use strict';
//var fetch = require('node-fetch');

export default class SeatGeekRequest {
  constructor(clientId) {
    this.clientId = clientId;
    this.requestUrl = '';
    this.baseAPIUrl = 'https://api.seatgeek.com/2';
  }
  makeAPIRequest(reqUrl) {
    console.log('url', typeof reqUrl);
    return fetch(reqUrl, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false,
    }).then(function(res) {
      if (res.ok) {
        return res.json();
      }
      return res;
    });
  }
  createRequestUrl(endpointDict, clientId) {
    let endPointStr = '';
    if (endpointDict) {
      for(const key in endpointDict) {
        endPointStr = endPointStr + '/' + key;
        endpointDict[key].length > 0 ? endPointStr += '/' + endpointDict[key] : '';
      }
    }
    return this.baseAPIUrl + endPointStr + this.getClientIdStr(clientId);
  }
  getClientIdStr(clientId) {
    return '?client_id=' + clientId;
  }
  query(param, url) {
    return url + '&q='  + param;
  }
  get(url) {
    return this.makeAPIRequest(url);
  }
  perPage(resultsPerPage, url) {
    return url + '&per_page=' + resultsPerPage;
  }
  page(pageNumber, url) {
    return url + '&page=' + pageNumber;
  }
  sortResults(type, direction, url) {
    return url + '&sort=' + type + '.' + direction;
  }
}
