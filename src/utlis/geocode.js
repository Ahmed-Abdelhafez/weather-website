const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiM29tZGEiLCJhIjoiY2tmb3V2ODR4MGJndzJ4cGZhcW1iMGFkaCJ9.aByCKSliArXPlCmMow3PTA&limit=1'
    request({ url , json: true }, (error, {body}) => {
        if(error){
            callback('unable to connect to location services!', undefined)
        }else if(body.features.length === 0 ){
           callback('unable to find location!', undefined)
        } else{
            callback(undefined,{
            longitude: body.features[0].center[0],
            latitude: body.features[0].center[1],
            location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode