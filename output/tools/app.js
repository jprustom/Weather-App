"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//MODULES
var express_1 = __importDefault(require("express"));
var geocode_1 = require("./geocode");
var forecast_1 = require("./forecast");
var morgan = require("morgan");
//MIDDLEWARE
var app = express_1.default();
app.use(morgan('dev'));
geocode_1.geocode('Beirut', function (parsedJson) {
    var longtitude = parsedJson.features[0].center[0];
    var latitude = parsedJson.features[0].center[1];
    forecast_1.forecast(longtitude, latitude, (function (parsedJsonWeatherData) {
        var weatherDescription = parsedJsonWeatherData.weather[0].main;
        var city = parsedJsonWeatherData.name;
        console.log('The weather at ' + city + ' is characterized with ' + weatherDescription);
    }));
});
module.exports = app;
