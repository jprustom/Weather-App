//MODULES
import express from 'express';
import {geocode} from './geocode';
import {forecast} from './forecast'
const chalk=require('chalk')
const morgan = require("morgan");


//MIDDLEWARE
const app=express();
app.use(morgan('dev'));


const address=process.argv[2]
if (!address)
    console.log(chalk.bold.underline.red("Hey, you have to provide an address in your terminal !"))

else 
    geocode(address,({longtitude,latitude}:{longtitude:number,latitude:number})=>{


        forecast(longtitude,latitude,({weatherDescription,city,temperature}:{weatherDescription:string,city:string,temperature:number})=>{
             
            console.log(weatherDescription+' in '+city+`. The current temperature is ${temperature} Degrees.`)
        })
    })




module.exports=app;