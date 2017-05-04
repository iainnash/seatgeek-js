var SeatGeek = (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

//var fetch = require('node-fetch');

var SeatGeekRequest = function () {
  function SeatGeekRequest(clientId) {
    classCallCheck(this, SeatGeekRequest);

    this.clientId = clientId;
    this.requestUrl = '';
    this.baseAPIUrl = 'https://api.seatgeek.com/2';
  }

  createClass(SeatGeekRequest, [{
    key: 'makeAPIRequest',
    value: function makeAPIRequest(reqUrl) {
      console.log('url', typeof reqUrl === 'undefined' ? 'undefined' : _typeof(reqUrl));
      return fetch(reqUrl, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
        return res;
      });
    }
  }, {
    key: 'createRequestUrl',
    value: function createRequestUrl(endpointDict, clientId) {
      var endPointStr = '';
      if (endpointDict) {
        for (var key in endpointDict) {
          endPointStr = endPointStr + '/' + key;
          endpointDict[key].length > 0 ? endPointStr += '/' + endpointDict[key] : '';
        }
      }
      return this.baseAPIUrl + endPointStr + this.getClientIdStr(clientId);
    }
  }, {
    key: 'getClientIdStr',
    value: function getClientIdStr(clientId) {
      return '?client_id=' + clientId;
    }
  }, {
    key: 'query',
    value: function query(param, url) {
      return url + '&q=' + param;
    }
  }, {
    key: 'get',
    value: function get$$1(url) {
      return this.makeAPIRequest(url);
    }
  }, {
    key: 'perPage',
    value: function perPage(resultsPerPage, url) {
      return url + '&per_page=' + resultsPerPage;
    }
  }, {
    key: 'page',
    value: function page(pageNumber, url) {
      return url + '&page=' + pageNumber;
    }
  }, {
    key: 'sortResults',
    value: function sortResults(type, direction, url) {
      return url + '&sort=' + type + '.' + direction;
    }
  }]);
  return SeatGeekRequest;
}();

var _seatgeekRequest = new SeatGeekRequest();

var SeatGeekPerformer = function (_SeatGeekRequest) {
  inherits(SeatGeekPerformer, _SeatGeekRequest);

  function SeatGeekPerformer(clientId) {
    classCallCheck(this, SeatGeekPerformer);
    return possibleConstructorReturn(this, (SeatGeekPerformer.__proto__ || Object.getPrototypeOf(SeatGeekPerformer)).call(this, clientId));
  }

  createClass(SeatGeekPerformer, [{
    key: 'performerById',
    value: function performerById(name) {
      var eventByIdEndpointDict = {};
      eventByIdEndpointDict['performers'] = name.replace(/ /g, "-");
      this.requestUrl = _seatgeekRequest.createRequestUrl(eventByIdEndpointDict, this.clientId);
      return this;
    }
  }, {
    key: 'performerByName',
    value: function performerByName() {
      var eventByIdEndpointDict = {};
      eventByIdEndpointDict['performers'] = '';
      this.requestUrl = _seatgeekRequest.createRequestUrl(eventByIdEndpointDict, this.clientId);
      return this;
    }
  }, {
    key: 'perPage',
    value: function perPage(reqPerPage) {
      this.requestUrl = _seatgeekRequest.perPage(reqPerPage, this.requestUrl);
      return this;
    }
  }, {
    key: 'page',
    value: function page(pageNumber) {
      this.requestUrl = _seatgeekRequest.page(pageNumber, this.requestUrl);
      return this;
    }
  }, {
    key: 'query',
    value: function query(_query) {
      this.requestUrl = _seatgeekRequest.query(_query, this.requestUrl);
      return this;
    }
  }, {
    key: 'get',
    value: function get$$1() {
      return _seatgeekRequest.get(this.requestUrl);
    }
  }]);
  return SeatGeekPerformer;
}(SeatGeekRequest);

var _seatgeekRequest$1 = new SeatGeekRequest();

var SeatGeekEvent = function (_SeatGeekRequest) {
  inherits(SeatGeekEvent, _SeatGeekRequest);

  function SeatGeekEvent(clientId) {
    classCallCheck(this, SeatGeekEvent);
    return possibleConstructorReturn(this, (SeatGeekEvent.__proto__ || Object.getPrototypeOf(SeatGeekEvent)).call(this, clientId));
  }

  createClass(SeatGeekEvent, [{
    key: 'allEvents',
    value: function allEvents() {
      var eventByIdEndpointDict = {};
      eventByIdEndpointDict['events'] = '';
      this.requestUrl = _seatgeekRequest$1.createRequestUrl(eventByIdEndpointDict, this.clientId);
      return this;
    }
  }, {
    key: 'eventById',
    value: function eventById(id) {
      var eventByIdEndpointDict = {};
      eventByIdEndpointDict['events'] = id;
      this.requestUrl = _seatgeekRequest$1.createRequestUrl(eventByIdEndpointDict, this.clientId);
      return this;
    }
  }, {
    key: 'perPage',
    value: function perPage(reqPerPage) {
      this.requestUrl = _seatgeekRequest$1.perPage(reqPerPage, this.requestUrl);
      return this;
    }
  }, {
    key: 'page',
    value: function page(pageNumber) {
      this.requestUrl = _seatgeekRequest$1.page(pageNumber, this.requestUrl);
      return this;
    }
  }, {
    key: 'get',
    value: function get$$1() {
      return _seatgeekRequest$1.get(this.requestUrl);
    }
  }]);
  return SeatGeekEvent;
}(SeatGeekRequest);

var SeatGeek = function SeatGeek(clientId) {
  classCallCheck(this, SeatGeek);

  if (!clientId || clientId.length < 1) {
    throw Error('API Key required');
  }
  this.Event = new SeatGeekEvent(clientId);
  this.Performer = new SeatGeekPerformer(clientId);
  return this;
};

return SeatGeek;

}());
