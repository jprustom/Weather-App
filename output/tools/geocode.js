"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.geocode = void 0;
var fetch = require('node-fetch');
var chalk = require('chalk');
exports.geocode = function (address, callback) {
    var accessToken = 'pk.eyJ1IjoiamVhbnBhdWxydXN0b20iLCJhIjoiY2tjcm5wYThzMWdncjJybGY5ZnA0OHN3cSJ9.giq9Z1wG6YKt_NkkWdqurw';
    var geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + accessToken;
    fetch(geocodeURL)
        .then(function (fetchedData) { return fetchedData.json(); })
        .then(function (parsedJson) {
        callback(parsedJson);
    })
        .catch(function (err) { return console.log(chalk.red.bold(err.message)); });
};
