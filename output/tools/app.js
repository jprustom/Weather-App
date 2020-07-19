"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//MODULES
var express_1 = __importDefault(require("express"));
var geocode_1 = require("./geocode");
var forecast_1 = require("./forecast");
var chalk = require('chalk');
var morgan = require("morgan");
//MIDDLEWARE
var app = express_1.default();
app.use(morgan('dev'));
var address = process.argv[2];
if (!address)
    console.log(chalk.bold.underline.red("Hey, you have to provide an address in your terminal !"));
else
    geocode_1.geocode(address, function (_a) {
        var longtitude = _a.longtitude, latitude = _a.latitude;
        forecast_1.forecast(longtitude, latitude, function (_a) {
            var weatherDescription = _a.weatherDescription, city = _a.city, temperature = _a.temperature;
            console.log(weatherDescription + ' in ' + city + (". The current temperature is " + temperature + " Degrees."));
        });
    });
module.exports = app;
