var city = "";
var tempEl = "";
var windEl = "";
var humidityEl = "";
var uvindexEl = "";
var cityReturned = "";
var currentDate = moment().format('MM-DD-YYYY');

function getWeather() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=35de209ea2cd44495c1feb05459c71ed&q=" + city;
    fetch(queryURL).then(function(response) {
    if (response.ok)
    return response.json()
    .then(function(response) {
        console.log(response)
        tempEl = response.main.temp
        windEl = response.wind.speed
        humidityEl = response.main.humidity
        cityReturned = response.name
        // uvindexEl = 
        $("#current-city-header").text(cityReturned)
        $("#current-date-h5").text(currentDate)
        $("#current-temp").text(tempEl)
        $("#current-wind").text(windEl)
        $("#current-humidity").text(humidityEl)
    }
    )}
    )};


function searchFunction() {
    event.preventDefault();
    city = $("#city-input").val();
    getWeather();
}

//event listener
$("#search-button").on("click", searchFunction)


