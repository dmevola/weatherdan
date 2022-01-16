var city = "";

function getWeather() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=35de209ea2cd44495c1feb05459c71ed&q=" + city;
    fetch(queryURL).then(function(response) {
    if (response.ok)
    response.json().then(function(data) {
    console.log(data)
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


