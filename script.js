const searchBox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');

const apiKey = "0723c6c05f2972f827723463385a81d8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector('.city'). innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humudity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

}

searchButton.addEventListener('click',() => {
    checkWeather(searchBox.value);
})