let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");

getWeatherData = (zip) => {
    let API_KEY = config.WEATHER_API_KEY;
    let API_ENDPOINT = `http://api.openweathermap.org/data/2.5/weather?zip=10128&APPID=${config.WEATHER_API_KEY}`;

    fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
            //store the data in a variable of choosing
            let local_weather_data = data
            //log the data to the browser console
            console.log(data);
        });
} 

const getZipCode = (event) => {
    event.preventDefault();
    let ZIP_CODE = input.value;
    getWeatherData(getZipCode);
};

btn.addEventListener('click', getZipCode);