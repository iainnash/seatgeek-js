var expect = require("chai").expect;
var seatgeek = require("../SeatGeek");
var rewire = require('rewire');
var apiKey = require('./config.json').API_KEY;

var should = require('chai').should();
var assert = require('chai').assert;

var _seatgeekRewired = rewire('../SeatGeek');

describe("SeatGeek object", function () {
    var _seatgeek;

    describe("Passing an api key into constructor should create an instance of SeatGeek", function () {
        _seatgeek = new seatgeek(apiKey);
        it('should be defined', function () {
            _seatgeek.should.be.a('object');
        });

        it('should throw an error with no API key', function () {
            expect(function () { new seatgeek() }).to.throw('API Key required');
        });
    });
});

describe("Events", function () {
    var _seatgeek;

    beforeEach(function () {
         _seatgeek = new _seatgeekRewired(apiKey);
    })
    describe("allEvents", function () {

        it('should set the requestUrl correctly', function () {
            _seatgeek.Event.allEvents();
            expect(_seatgeek.Event.requestUrl)
            .to
            .equal('https://api.seatgeek.com/2/events?client_id='+ apiKey);

        });
    });

    describe("eventById", function () {
        it('should set the requestUrl correctly', function () {
            _seatgeek.Event.eventById('1');
            expect(_seatgeek.Event.requestUrl)
            .to
            .equal('https://api.seatgeek.com/2/events/1?client_id='+ apiKey);
        });
    });
});


describe("Performers", function () {
    var _seatgeek;

    beforeEach(function () {
         _seatgeek = new _seatgeekRewired(apiKey);
    })
    describe("performerById", function () {
        it('should set the requestUrl correctly', function () {
            _seatgeek.Performer.performerById('266')
            expect(_seatgeek.Performer.requestUrl)
            .to
            .equal('https://api.seatgeek.com/2/performers/266?client_id='+ apiKey);

        });
    });

    describe("performerById", function () {
        it('get the performer by id', function () {
            return _seatgeek.Performer.performerById('266').perPage(4).get()
            .then((response) => {

              expect(response.short_name).to.equal('Beastie Boys');
              expect(response.slug).to.equal('beastie-boys');

              return true;
            });
        });
    });

    describe("performerByName", function () {
        it('should set the requestUrl correctly', function () {
            _seatgeek.Performer.performerByName().query('U2')
            expect(_seatgeek.Performer.requestUrl)
            .to
            .equal('https://api.seatgeek.com/2/performers?client_id='+ apiKey +'&q=U2');

        });
    });

    describe("performerByName", function () {
        it('get the performer by name', function () {
            return _seatgeek.Performer.performerByName().perPage(4).query('U2').get()
            .then((response) => {
              expect(response.performers.length).to.equal(4);
              expect(response.performers[0].short_name).to.equal('U2');
              return true;
            }).catch(e => console.log(e));
        });
    });
});

describe("Result Manipulation", function () {
    var _seatgeek;

    beforeEach(function () {
         _seatgeek = new seatgeek(apiKey);
    })
    describe("per_page", function () {
        it('should set the requestUrl correctly', function () {
            _seatgeek.Event.allEvents().perPage(10);
            expect(_seatgeek.Event.requestUrl)
            .to
            .equal('https://api.seatgeek.com/2/events?client_id='+ apiKey + '&per_page=10');
        });

        it('should limit the API results', function () {
            return _seatgeek.Event.allEvents().perPage(5).get().then(function(res){
                expect(res.meta.per_page).to.equal(5);
                expect(res.events.length).to.equal(5);
                return true;
            });
        });
    });

    describe("page", function () {
        it('should set the requestUrl correctly', function () {
            _seatgeek.Event.allEvents().page(22);
            expect(_seatgeek.Event.requestUrl)
            .to
            .equal('https://api.seatgeek.com/2/events?client_id='+ apiKey + '&page=22');
        });

        it('should retrieve the correct page number', function () {
            return _seatgeek.Event.allEvents().page(22).get().then(function(res){
                expect(res.meta.page).to.equal(22);
                return true;
            });
        });
    });
});
