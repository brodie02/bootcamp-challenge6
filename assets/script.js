var apiKey = "cb85dae758eedd554f85531872892ce8" 

// API fetch for geocode API (to convert cities into latitude and longitude)
function fetchGeocodeAPI() {
    var geocodeAPI = "http://api.openweathermap.org/geo/1.0/direct?q=London&appid=" + apiKey
    fetch(geocodeAPI)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data[0].lat);
            console.log(data[0].lon);
        })
}

function fetchWeatherAPI() {
    var weatherAPI = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=" + apiKey
    fetch(weatherAPI)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
    })
}




function init() {
    fetchGeocodeAPI()
}

init()