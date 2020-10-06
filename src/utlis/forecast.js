const request = require('request')

const forecast = (lon, lat, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + encodeURIComponent(lat) + '&lon=' + encodeURIComponent(lon) + '&appid=443d9e7768d8b67b221c6bd4969832da'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, body.daily[0].weather[0].description + '. It is currently '  + body.current.temp + ' degress out. The Percentage of clouds is ' + body.daily[0].clouds + '%. The wind speed is ' + body.daily[0].wind_speed + ' km/h.')
        }
    })
}
module.exports = forecast