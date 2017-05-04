# seatgeek-js
Unofficial Javascript wrapper for the SeatGeek API

This library works with the SeatGeek API to provide an easy way to consume their API through Node.js and the browser.

To see simple examples of client or server, refer to `examples/client` and `examples/sever`

## Getting started
- Install via npm : `npm install seatgeek-js`
- Require the module `var SeatGeek = require('seatgeek-js')`
- Obtain an [API key from SeatGeek] (https://seatgeek.com/?next=%2Faccount%2Fdevelop#login).
- Initialize the `SeatGeek` object
```javascript
var seatgeek = new SeatGeek("YOUR_API_KEY");
```
- Begin using the API by chaining methods onto the created `SeatGeek` object.  



**Sample for the browser**  
```javascript
var _seatgeek = new SeatGeek("YOUR_API_KEY");

_seatgeek.Events.all().get().then(function(res) {

});
```

### To build for the browser:
`npm run rollup` and the output file is in `dist/seatgeek.js`.

# Currently Supported methods

All functions documented below will be available on the `SeatGeek` object unless otherwise noted.  
To invoke a request, `.get()` must be chained on all operations.

## Events

### Events.all()
**Purpose:** Retrieve all events (result set is returned in pages. See chaining for additional options)
```javascript
var _seatgeek = new SeatGeek("YOUR_API_KEY");
_seatgeek.Events.all().get().then(function(res) {

});
```

### Events.byId()
**Purpose:** Retrieve one specific event with an event ID.
```javascript
var _seatgeek = new SeatGeek("YOUR_API_KEY");
_seatgeek.Events.byId(739515).get().then(function(res) {

});
```

## Chaining methods

- `per_page` - Define size of result sets.
- `sortResults` - Define how result sets are sorted.
- `page` - Request specific page of result set, i.e. paginated results.

**Usage**
```javascript
var _seatgeek = new SeatGeek("YOUR_API_KEY");
_seatgeek.Events.all()
        .per_page(20)
        .page(5)
        .get()
        .then(function (res) {
        }
```

## Performers

### Performers.byId()
**Purpose:** Retrieve one specific performer with a performer ID.
```javascript
var _seatgeek = new SeatGeek("YOUR_API_KEY");
_seatgeek.Performers.byId(3).get().then(function(res) {

});
```

### Performers.byName()
**Purpose:** Retrieve one specific performer by name.
```javascript
var _seatgeek = new SeatGeek("YOUR_API_KEY");
_seatgeek.Performers.byName('New York Mets').get().then(function(res) {

});
```

### Performers.bySearch()
**Purpose:** Retrieve one specific performer by name.
```javascript
var _seatgeek = new SeatGeek("YOUR_API_KEY");
_seatgeek.Performers.bySearch('red hot').get().then(function(res) {

});
```

