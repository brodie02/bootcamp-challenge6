var apiKey = "cb85dae758eedd554f85531872892ce8" 
var city = document.querySelector("#city-input").value

function fetchGeoCodeAPI(city) {
    var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + apiKey
    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        //console.log(data);
        fetchCurrentWeatherAPI(data[0].lat, data[0].lon)
    })
}

function fetchCurrentWeatherAPI(lat, lon) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=" + apiKey
    var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,daily&appid=d1acb13869b02cbe9450cb2a103eba92"
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
    fetchGeoCodeAPI("Adelaide")
    //fetchFutureWeatherAPI()
}

init()