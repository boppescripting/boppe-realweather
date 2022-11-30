const { weather_check_timer_in_minutes, zip_code, rapid_api_key, weather_types } = require('./config.json')
const fetch = require('node-fetch')

setInterval(function() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': rapid_api_key,
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=%3C${zip_code}%3E`, options)
        .then(response => response.json())
        .then(response => {
            let condition = response['current']["condition"]["text"].toLowerCase()
            let new_weather = (weather_types[condition] ? weather_types[condition] : 'SUNNY')
            exports['qb-weathersync'].setWeather(new_weather)
            console.log(`[boppe-realweather] Set weather to ${new_weather} based on the retrieved condition of ${condition}.`)
        })
        .catch(err => {
            console.error(err)
            console.log(`[boppe-realweather] There was an error retreiving API endpoint data.`)
        });
}, weather_check_timer_in_minutes * 60000)