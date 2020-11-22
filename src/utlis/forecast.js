const request = require('request')

const forecast = (lon, lat, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f8856fbe2cc37cc640fce768b7a19337&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(lon)
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently '  + body.current.temperature + ' degress out. The Percentage of clouds is ' + body.current.cloudcover + '%. The wind speed is ' + body.current.wind_speed + ' km/h.')
        }
    })
}
module.exports = forecast