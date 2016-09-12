'use strict';
const request = require('request');
const Promise = require('promise');

class SeatGeekRequest {
  constructor(clientId) {
    this.clientId = clientId;
    this.requestUrl = '';
    this.baseAPIUrl = 'https://api.seatgeek.com/2';
  }

  makeAPIRequest(reqUrl) {
    console.log('the url:');
    console.log(reqUrl)
    return new Promise(function executeReq(resolve, reject) {
      return request.get({
        url: reqUrl,
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false,
      }, function apiSuccess(err, data, res) {
        if (err) {
          reject(err);
        }
        else {
          resolve(res);
        }
      });
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

module.exports = SeatGeekRequest;
