var request = require('request');
var Promise = require('promise');

function SeatGeekRequest() {
    this.baseAPIUrl = 'https://api.seatgeek.com/2';
}

SeatGeekRequest.prototype.makeAPIRequest = _makeAPIRequest;
SeatGeekRequest.prototype.createRequestUrl = _createRequestUrl;


function _makeAPIRequest(reqUrl) {
    return new Promise(function (resolve, reject) {
        return request.get({
            url: reqUrl,
            headers: { 'Content-Type': 'application/json' },
            withCredentials: false
        }, function (err, data, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

function _createRequestUrl(endpointDict, client_id) {
    var endPointStr = '';
    if (endpointDict) {
        for (var key in endpointDict) {
            endPointStr += '/' + key;
            endpointDict[key].length > 0 ? endPointStr += '/' + endpointDict[key] : '';
        }
    }
    return this.baseAPIUrl + endPointStr + _getClientIdStr(client_id);
}

function _getClientIdStr(client_id) {
    return '?client_id=' + client_id;
}

module.exports = SeatGeekRequest;