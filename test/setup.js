var fs = require('fs');
var fileName = './config.json';
var file = require(fileName);
var prompt = require('prompt');
var colors = require("colors/safe");

prompt.message = colors.rainbow("API WRAPPER SETUP");
prompt.start();
prompt.get({
    properties: {
        apiKey: {
            description: colors.magenta("enter your SeatGeek API Key:")
        }
    }
}, function (err, result) {
    file.API_KEY = result.apiKey;
    fs.writeFile(fileName, JSON.stringify(file), function (err) {
        if (err) return console.log(err);
        console.log('api key saved to config file!');
    });
});


