const inputBox = document.querySelector(".inputBox");
const weatherImg = document.querySelector('.weatherImg');
const searchbtn = document.querySelector('.searchbtn');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");

async function checkWeather(city){
    const apiKey = "f75ce7360840eea182d9c1a24b0d73c5"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city}&lon={lon}&appid=${apiKey}`
    

    const weatherData = await fetch(`${url}`).then
    (response =>  response.json());

    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;

    description.innerHTML = `${weatherData.weather[0].description}`;

    humidity.innerHTML = `${weatherData.main.humidity}%`;

    windSpeed.innerHTML = `${weatherData.wind.speed}km/H`;

    switch(weatherData.weather[0].main){
        case 'weather':
            weatherImg.src = "./images/weather.jpg";
            break;

            case 'rain':
            weatherImg.src = "./images/rain.jpg";
            break;

            case 'cloud':
            weatherImg.src = "./images/cloud.webp";
            break;

            case 'mist':
            weatherImg.src = "./images/mist.jpeg";
            break;
    }

 
}

searchbtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});