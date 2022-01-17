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
var forecastDateEl1 = moment().add(1,'days').format('MM-DD-YYYY');
var forecastDateEl2 = moment().add(2,'days').format('MM-DD-YYYY');
var forecastDateEl3 = moment().add(3,'days').format('MM-DD-YYYY');
var forecastDateEl4 = moment().add(4,'days').format('MM-DD-YYYY');
var forecastDateEl5 = moment().add(5,'days').format('MM-DD-YYYY');

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

        var queryUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latVal + "&lon=" + longVal + "&exclude=minutely,hourly&appid=35de209ea2cd44495c1feb05459c71ed"
        fetch(queryUrl2).then(function(response) {
            if (response.ok)
            return response.json()
            .then(function(response) {
                console.log(response)
                uvIndexEl = response.current.uvi;
                iconEl = response.current.weather[0].icon
                $("#current-icon").attr("src", "https://openweathermap.org/img/w/" + iconEl + ".png")
                $("#current-uv").text(uvIndexEl)
                if (uvIndexEl >= 5) {
                    $("#current-uv").attr("class", "bg-danger")
                } else if (uvIndexEl >= 2 && uvIndexEl < 5) {
                    $("#current-uv").attr("class", "bg-warning")
                } else {
                    $("#current-uv").attr("class", "bg-success")
                } 
                $("#forecast-date1").text(forecastDateEl1)
                $("#forecast-date2").text(forecastDateEl2)
                $("#forecast-date3").text(forecastDateEl3)
                $("#forecast-date4").text(forecastDateEl4)
                $("#forecast-date5").text(forecastDateEl5)
                forecastIcon1 = response.daily[0].weather[0].icon
                $("#forecast-icon1").attr("src", "https://openweathermap.org/img/w/" + forecastIcon1 + ".png")
                forecastIcon2 = response.daily[1].weather[0].icon
                $("#forecast-icon2").attr("src", "https://openweathermap.org/img/w/" + forecastIcon2 + ".png")
                forecastIcon3 = response.daily[3].weather[0].icon
                $("#forecast-icon3").attr("src", "https://openweathermap.org/img/w/" + forecastIcon3 + ".png")
                forecastIcon4 = response.daily[4].weather[0].icon
                $("#forecast-icon4").attr("src", "https://openweathermap.org/img/w/" + forecastIcon4 + ".png")
                forecastIcon5 = response.daily[5].weather[0].icon
                $("#forecast-icon5").attr("src", "https://openweathermap.org/img/w/" + forecastIcon5 + ".png")
                
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


