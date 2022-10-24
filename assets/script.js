var apiKey = "cb85dae758eedd554f85531872892ce8" 
var cityInput = document.querySelector("#city-input")

function fetchCurrentWeatherAPI() {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=" + apiKey
    var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=" + apiKey
    fetch(oneCallUrl)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
    })
}

function fetchFutureWeatherAPI() {
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=" + apiKey
    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
    })
}

function init() {
    fetchCurrentWeatherAPI()
    fetchFutureWeatherAPI()
}

init()