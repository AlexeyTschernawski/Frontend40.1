document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    const suggestionsContainer = document.getElementById('suggestions');

    
    
    document.getElementById('cityForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const cityName = cityInput.value.trim();
        if (cityName) {
            try {
                const weatherData = await getWeather(cityName);
                displayWeather(weatherData);
            } catch (error) {
                console.error('Error:', error);
                alert(error.message);
            }
        } else {
            alert('Please enter a city name');
        }
    });

    async function getWeather(cityName) {
        const apiKey = '7044d243704252df0e9af5cb94a90375';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=ru`;
        
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    
function getWeatherIconUrl(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
}

function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weatherInfo');
    const iconUrl = getWeatherIconUrl(weatherData.weather[0].icon); // Получаем URL иконки погоды
    weatherInfo.innerHTML = `
        <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
        <p>температура: ${Math.round(weatherData.main.temp - 273.15)}°C</p>
        <p>погода: ${weatherData.weather[0].description}</p>
        <img src="${iconUrl}" alt="Weather Icon"> <!-- Отображаем иконку погоды -->
        <p>скорость ветра: ${weatherData.wind.speed} m/s</p>
        <p>направление ветра: ${weatherData.wind.deg}°</p>
        <p>порыв ветра: ${weatherData.wind.gust} m/s</p>
    `;
}

});