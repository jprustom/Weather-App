const fetch=require('node-fetch')
const chalk=require('chalk')

export const geocode = (address:string,callback:Function)=>{
    const accessToken:string='pk.eyJ1IjoiamVhbnBhdWxydXN0b20iLCJhIjoiY2tjcm5wYThzMWdncjJybGY5ZnA0OHN3cSJ9.giq9Z1wG6YKt_NkkWdqurw'
    const geocodeURL:string='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token='+accessToken;

    fetch(geocodeURL)
        .then((fetchedData: { json: () => any; })=>fetchedData.json())
        .then((parsedJson: { features: { center: number[]; }[]; })=>{
        callback({
            longtitude:parsedJson.features[0].center[0],
            latitude:parsedJson.features[0].center[1]
        })
        })
        .catch((err: { message: any; })=>console.log(chalk.red.bold(err.message)))

}