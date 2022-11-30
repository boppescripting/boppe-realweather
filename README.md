# boppe-realweather
## Dependencies
- qb-weathersync
- yarn
## Installation
1. Create an account on [RapidAPI](https://rapidapi.com/hub)
2. Visit the [WeatherAPI.com API page](https://rapidapi.com/weatherapi/api/weatherapi-com)
3. Click the blue subscribe button in the middle of the page
4. Select the free plan
5. Copy your `X-RapidAPI-Key` and paste it in the config.json file
6. Set the zip code you'd like weather to be based on in the config.json file
7. In `qb-weathersync/config.lua`, set `Config.Disabled` to true
## Notice
I have not been able to run through all of the different weather types that the api returns to us. If, and when, you run into a weather type that isn't in the config, the script will default to SUNNY so there are no errors.

To add a new weather type, check your console for the log message stating what the weather type we got from the API was. Then go to `config.json` and add a new weather type, just like partly cloudy and light rain. **ENSURE THE WEATHER TYPE RECEIVED FROM THE API IS TYPED INTO THE CONFIG IN ALL LOWERCASE.** Then set that weather type equal to the equivalent given in the qb-weathersync configuration file.

I ask that anyone creates a pull request when they run into new weather types so I can update the repository!