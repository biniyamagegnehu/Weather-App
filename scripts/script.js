let searchBox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

const apiKey = "0723c6c05f2972f827723463385a81d8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.all-weather').style.display = "none";
    } else {
        var data = await response.json();
        
        document.querySelector('.city'). innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humudity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

        console.log(data);

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/cloud.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if(data.weather[0].main == "Sun") {
            weatherIcon.src = "images/sun.png";
        } else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/sun (2).png";
        } else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/rainy-dat.png";
        }

        document.querySelector('.all-weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
    }
    
}

searchButton.addEventListener('click',() => {
    checkWeather(searchBox.value);
    searchBox.value = '';
});

searchBox.addEventListener('keydown',(event) => {
    if(event.key == "Enter"){
        searchButton.click();
    }
})