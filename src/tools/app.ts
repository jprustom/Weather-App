//MODULES
import express from 'express';
import {geocode} from './geocode';
import {forecast} from './forecast'
const morgan = require("morgan");


//MIDDLEWARE
const app=express();
app.use(morgan('dev'));


geocode('Beirut',(parsedJson: { features: { center: number[]; }[]; })=>{

        let longtitude:number=parsedJson.features[0].center[0]
        let latitude:number=parsedJson.features[0].center[1]
     
        forecast(longtitude,latitude,((parsedJsonWeatherData: { weather: { main: string; }[]; name: string; })=>{
             let weatherDescription:string=parsedJsonWeatherData.weather[0].main;
             let city:string=parsedJsonWeatherData.name
            console.log('The weather at '+ city +' is characterized with '+weatherDescription)
        }))
    });




   
   


module.exports=app;