var SeatGeekRequest = require('./SeatGeekRequest');
var _seatgeekRequest = new SeatGeekRequest();

function SeatGeek(clientId) {
    if(!clientId || clientId.length < 1){ throw Error('API Key required') }
    this.client_id = clientId;
    this.request_url = '';
    return this;
}

SeatGeek.prototype.eventById = _eventById;
SeatGeek.prototype.allEvents = _allEvents;
SeatGeek.prototype.per_page = _per_page;
SeatGeek.prototype.sortResults = _sortResults;
SeatGeek.prototype.page = _page;
SeatGeek.prototype.get = _get;

// endpoint --> /events/:id
function _eventById(id) {
    var eventByIdEndpointDict = {};
    eventByIdEndpointDict["events"] = id;
    this.request_url = _seatgeekRequest.createRequestUrl(eventByIdEndpointDict, this.client_id);
    return this;
}

// endpoint --> /events
function _allEvents() {
    var eventByIdEndpointDict = {};
    eventByIdEndpointDict["events"] = '';
    this.request_url = _seatgeekRequest.createRequestUrl(eventByIdEndpointDict, this.client_id);
    return this;
}

function _per_page(resultsPerPage){
    if(_urlIsSet(this.request_url)){
        this.request_url += '&per_page=' + resultsPerPage;
    }
    return this;
}

function _page(pageNumber){
    if(_urlIsSet(this.request_url)){
        this.request_url += '&page=' + pageNumber;
    }
    return this;
}

function _sortResults(type, direction){
    if(_urlIsSet(this.request_url)){
        this.request_url += '&sort=' + type + '.' + direction;;
    }
    return this;
}

// CURRENTLY NOT SUPPORTED.
function _filter(){
    if(_urlIsSet(this.request_url) && this.request_url.includes('/events/') ){
        // todo: 
    }
}

function _get() {
    var _url = this.request_url;
    this.request_url = '';
    return _seatgeekRequest.makeAPIRequest(_url);
}

function _urlIsSet(url){
    return url && url.length > 0
}

module.exports = SeatGeek;