var city = "";
var tempEl = "";
var windEl = "";
var humidityEl = "";
var uvIndexEl = "";
var cityReturned = "";
var currentDate = moment().format('MM-DD-YYYY');
var latVal = "";
var longVal = "";
var iconEl = "";

function getWeather() {
    var queryUrl1 = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=35de209ea2cd44495c1feb05459c71ed&q=" + city;
    

    fetch(queryUrl1).then(function(response) {
    if (response.ok)
    return response.json()
    .then(function(response) {
        console.log(response)
        tempEl = response.main.temp
        windEl = response.wind.speed
        humidityEl = response.main.humidity
        cityReturned = response.name
        latVal = response.coord.lat
        longVal = response.coord.lon
        $("#current-city-header").text(cityReturned)
        $("#current-date-h5").text(currentDate)
        $("#current-temp").text(tempEl)
        $("#current-wind").text(windEl)
        $("#current-humidity").text(humidityEl)

        var queryUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latVal + "&lon=" + longVal + "&exclude=hourly,daily&appid=35de209ea2cd44495c1feb05459c71ed"
        fetch(queryUrl2).then(function(response) {
            if (response.ok)
            return response.json()
            .then(function(response) {
                uvIndexEl = response.current.uvi;
                iconEl = response.current.weather[0].icon
                $("#current-icon").attr("src", "https://openweathermap.org/img/w/" + iconEl + ".png")
                $("#current-uv").text(uvIndexEl)
              }
            )}
        )}
    )}
    )};


function searchFunction() {
    event.preventDefault();
    city = $("#city-input").val();
    getWeather();
}

//event listener
$("#search-button").on("click", searchFunction)


