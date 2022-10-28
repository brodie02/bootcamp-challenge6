var apiKey = "47f166773e351368285402b79068ea73" 

function getCityInput() {
    var city = document.getElementById("city-input").value

    fetchGeoCodeAPI(city)
    addWeatherInfo(city)
}

function addWeatherInfo(city) {
    var cityEl = document.querySelector(".weather-section")
    
    cityEl.textContent = "City: " + city
}

document.getElementById("search-button").addEventListener("click", getCityInput)

function fetchGeoCodeAPI(city) {
    var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + apiKey
    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        //console.log(data);
        fetchWeatherAPI(data[0].lat, data[0].lon)
    })
}

function fetchWeatherAPI(lat, lon) {
    var url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=metric&appid=" + apiKey
    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        console.log(data.current.temp + "°C");
        console.log(data.current.wind_speed + " " + "KMPH");
        console.log(data.current.humidity + "%");
        console.log(data.current.uvi);
    })
}