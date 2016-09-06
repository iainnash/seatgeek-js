# seatgeek-js
Unofficial Javascript wrapper for the SeatGeek API

This library works with the SeatGeek API to provide an easy way to consume their API through Node.js and the browser.

To see simple examples of client or server, refer to `examples/client` and `examples/sever`

### Getting started
- Obtain an [API key from SeatGeek] (https://seatgeek.com/?next=%2Faccount%2Fdevelop#login).
- Initialize the `SeatGeek` object
```javascript
var seatgeek = new SeatGeek("YOUR_API_KEY");
```
- Begin using the API by chaining methods onto the created `SeatGeek` object.  


**Node.js Express sample server**  

```javascript
var SeatGeek = require('SeatGeek.js');
var seatgeek = new SeatGeek("YOUR_API_KEY");

app.listen(3001);
app.get('/events', _getAllEvents);

function _getAllEvents(request, response) {
  return seatgeek.allEvents().get().then(function (res) {
  
  });
}
```

**Sample for the browser**  
```javascript
var _seatgeek = new SeatGeek("YOUR_API_KEY");

_seatgeek.allEvents().get().then(function(res) {

});
```
