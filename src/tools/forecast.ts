const fetch=require('node-fetch')
const chalk=require('chalk')

const unitsUsed:string='metric';
const language:string='en';
const weatherApiKey:string='bc791a7427c8eb9965dac97ffdaa4cfd';


export const forecast:Function=(lon:number,lat:number,callback:Function)=>{
    const weatherURL='https://api.openweathermap.org/data/2.5/weather?'+'lat='+lat+'&lon='+lon+'&appid='+weatherApiKey+'&units='+unitsUsed+'&lang='+language;
    fetch(weatherURL)
        .then((fetchedData: { json: () => any; })=>fetchedData.json())
        .then((parsedJson: { features: { center: number[]; }[]; })=>{
            callback(parsedJson)
        })
        .catch((err: { message: any; })=>console.log(chalk.red.bold('In forecast: '+err.message)))      
}


 