var apiKey = "47f166773e351368285402b79068ea73" 

function getCityInput() {
    var city = document.getElementById("city-input").value

    fetchGeoCodeAPI(city)
    addCityName(city)
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
        // console.log(data.timezone.split("/")[1]);
        // console.log(data.current.temp + "°C");
        // console.log(data.current.wind_speed + " " + "KMPH");
        // console.log(data.current.humidity + "%");
        // console.log(data.current.uvi);
        // console.log(data.current.weather[0].description);
    
        addWeatherInfo(data.timezone.split("/")[1], data.current.temp + "°C", data.current.wind_speed + " " + "KMPH", data.current.humidity + "%", data.current.uvi)
        addWeatherIcon(data.current.weather[0].main)
    })
}

function addCityName(city) {
    var cityEl = document.querySelector("#city")

    cityEl.innerHTML = "City: " + city + " (" + moment().format("Do MMM YYYY") + ")"
}

function addWeatherInfo(city, temp, wind, humid, uvi) {
    var tempEl = document.querySelector(".weather-section").children[1]
    var windEl = document.querySelector(".weather-section").children[2]
    var humidEl = document.querySelector(".weather-section").children[3]
    var uviEl = document.querySelector("#uv")

    tempEl.textContent = "Temperature: " + temp
    windEl.textContent = "Wind Speed: " + wind
    humidEl.textContent = "Humidity: " + humid
    uviEl.textContent = uvi
    
    if (uvi < 3) {
        uviEl.classList.add("favorable")
        uviEl.classList.remove("severe")
        uviEl.classList.remove("moderate")
    } else if (uvi > 7) {
        uviEl.classList.add("severe")
        uviEl.classList.remove("moderate")
        uviEl.classList.remove("favorable")
    } else { 
        uviEl.classList.add("moderate")
        uviEl.classList.remove("favorable")
        uviEl.classList.remove("severe")
    }
}

function addWeatherIcon(weather) {
    var iconEl = document.querySelector("#icon")

    switch (weather) {
        case "Clear":
            iconEl.innerHTML = '<iconify-icon inline icon="wi:day-sunny"></iconify-icon>'
            break;
        case "Clouds":
            iconEl.innerHTML = '<iconify-icon inline icon="wi:day-cloudy"></iconify-icon>'
            break;
        case "Rain":
            iconEl.innerHTML = '<iconify-icon inline icon="wi:day-rain"></iconify-icon>'
            break;
        case "Drizzle":
            iconEl.innerHTML = '<iconify-icon inline icon="wi:day-rain"></iconify-icon>'
            break;
        case "Thunderstorm":
            iconEl.innerHTML = '<iconify-icon inline icon="wi:thunderstorm"></iconify-icon>'
            break;
        case "Snow":
            iconEl.innerHTML = '<iconify-icon inline icon="wi:snowflake-cold"></iconify-icon>'
            break;
        case "Mist":
        case "Smoke":
        case "Haze":
        case "Fog":
            iconEl.innerHTML = '<iconify-icon inline icon="wi:fog"></iconify-icon>'
            break;
        case "Dust":
        case "Sand":
        case "Ash":
            iconEl.innerHTML = '<iconify-icon inline icon="wi:sandstorm"></iconify-icon>'
            break;
        case "Squall":
            iconEl.innerHTML = '<iconify-icon inline icon="wi:strong-wind"></iconify-icon>'
            break;
        case "Tornado":
            iconEl.innerHTML = '<iconify-icon inline icon="wi:tornado"></iconify-icon>'
            break;
    }
}