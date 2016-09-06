var express = require('express');
var app = express();

var SeatGeek = require('../../SeatGeek.js');
var seatgeek = new SeatGeek("");

app.listen(3001);

console.log('Example server running: http://localhost:3001');
console.log('Test an endpoint: http://localhost:3001/events')

app.get('/events/:eventId', _getEvent);
app.get('/events', _getAllEvents);

function _getEvent(request, response) {
  return seatgeek.eventById(request.params.eventId)
                 .get()
                 .then(function (res) {
                    response.send(res);
  });
}

function _getAllEvents(request, response){
  return seatgeek.allEvents()
                 .get()
                 .then(function (res) {
                    response.send(res);
  });
}

