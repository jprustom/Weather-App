"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forecast = void 0;
var fetch = require('node-fetch');
var chalk = require('chalk');
var unitsUsed = 'metric';
var language = 'en';
var weatherApiKey = 'bc791a7427c8eb9965dac97ffdaa4cfd';
exports.forecast = function (lon, lat, callback) {
    var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?' + 'lat=' + lat + '&lon=' + lon + '&appid=' + weatherApiKey + '&units=' + unitsUsed + '&lang=' + language;
    fetch(weatherURL)
        .then(function (fetchedData) { return fetchedData.json(); })
        .then(function (parsedJson) {
        callback(parsedJson);
    })
        .catch(function (err) { return console.log(chalk.red.bold('In forecast: ' + err.message)); });
};
