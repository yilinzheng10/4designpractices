document.addEventListener('DOMContentLoaded', () => {
    let input = document.querySelector(".zipcode");
    let btn = document.querySelector(".search-button");
    let form = document.querySelector("form");

    let CITY_NAME = document.querySelector(".city_name");
    let CITY_TEMP = document.querySelector(".temperature");

//function to get weather data
const getWeatherData = (zip) => {
    let API_KEY = config.WEATHER_API_KEY;
    let API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${config.WEATHER_API_KEY}`;

    fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
            //store the data in a variable of choosing
            let local_weather_data = data
            //log the data to the browser console
            console.log(local_weather_data);

            //manipulate city name content
            CITY_NAME.textContent = local_weather_data.name;

            //process temp data before manipulating the content
            let weather_in_celsius = Math.round(
                local_weather_data.main.temp - 273
            );
            CITY_TEMP.textContent = weather_in_celsius + " C";

            //get weather icon
            let WEATHER_ICON = local_weather_data.weather[0].icon;
            image.setAttribute('src', `https://openweathermap.org/img/wn/${WEATHER_ICON}@2x.png`)
        });
};

// function for form submission
const getZipCode = (event) => {
    event.preventDefault();
    let ZIP_CODE = input.value;
    getWeatherData(ZIP_CODE);
};

btn.addEventListener('click', getZipCode);

form.reset();
input.focus();

let image = document.querySelector("img");

});