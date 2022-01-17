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

        var queryUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latVal + "&lon=" + longVal + "&exclude=minutely,hourly&units=imperial&appid=35de209ea2cd44495c1feb05459c71ed"
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
                forecastIcon1 = response.daily[1].weather[0].icon
                $("#forecast-icon1").attr("src", "https://openweathermap.org/img/w/" + forecastIcon1 + ".png")
                forecastIcon2 = response.daily[2].weather[0].icon
                $("#forecast-icon2").attr("src", "https://openweathermap.org/img/w/" + forecastIcon2 + ".png")
                forecastIcon3 = response.daily[3].weather[0].icon
                $("#forecast-icon3").attr("src", "https://openweathermap.org/img/w/" + forecastIcon3 + ".png")
                forecastIcon4 = response.daily[4].weather[0].icon
                $("#forecast-icon4").attr("src", "https://openweathermap.org/img/w/" + forecastIcon4 + ".png")
                forecastIcon5 = response.daily[5].weather[0].icon
                $("#forecast-icon5").attr("src", "https://openweathermap.org/img/w/" + forecastIcon5 + ".png")
                forecastTemp1 = response.daily[1].temp.max
                $("#forecast-temp1").text("Temp: " + forecastTemp1 + " F")
                forecastTemp2 = response.daily[2].temp.max
                $("#forecast-temp2").text("Temp: " + forecastTemp2 + " F")
                forecastTemp3 = response.daily[3].temp.max
                $("#forecast-temp3").text("Temp: " + forecastTemp3 + " F")
                forecastTemp4 = response.daily[4].temp.max
                $("#forecast-temp4").text("Temp: " + forecastTemp4 + " F")
                forecastTemp5 = response.daily[5].temp.max
                $("#forecast-temp5").text("Temp: " + forecastTemp5 + " F")
                forecastWind1 = response.daily[1].wind_speed
                $("#forecast-wind1").text("Wind: " + forecastWind1 + " mph")
                forecastWind2 = response.daily[2].wind_speed
                $("#forecast-wind2").text("Wind: " + forecastWind2 + " mph")
                forecastWind3 = response.daily[3].wind_speed
                $("#forecast-wind3").text("Wind: " + forecastWind3 + " mph")
                forecastWind4 = response.daily[4].wind_speed
                $("#forecast-wind4").text("Wind: " + forecastWind4 + " mph")
                forecastWind5 = response.daily[5].wind_speed
                $("#forecast-wind5").text("Wind: " + forecastWind5 + " mph")
                forecastHumidity1 = response.daily[1].humidity
                $("#forecast-humidity1").text("Humidity: " + forecastHumidity1)
                forecastHumidity2 = response.daily[2].humidity
                $("#forecast-humidity2").text("Humidity: " + forecastHumidity2)
                forecastHumidity3 = response.daily[3].humidity
                $("#forecast-humidity3").text("Humidity: " + forecastHumidity3)
                forecastHumidity4 = response.daily[4].humidity
                $("#forecast-humidity4").text("Humidity: " + forecastHumidity4)
                forecastHumidity5 = response.daily[5].humidity
                $("#forecast-humidity5").text("Humidity: " + forecastHumidity5)
                

                
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


