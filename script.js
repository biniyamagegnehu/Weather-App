let searchBox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

const apiKey = "0723c6c05f2972f827723463385a81d8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();
    

    document.querySelector('.city'). innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humudity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

    console.log(data);

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloud.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png";
    } else if(data.weather[0].main == "Sun") {
        weatherIcon.src = "sun.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "sun (2).png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "rainy-dat.png";
    }
}

searchButton.addEventListener('click',() => {
    checkWeather(searchBox.value);
    searchBox.value = '';
});