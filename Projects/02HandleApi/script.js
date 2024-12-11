document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input")
    const getWeatherBtn = document.getElementById("get-weather-button")
    const weatherInfo = document.getElementById("weather-info")
    const cityNameDisplay = document.getElementById("city-name")
    const tempratureDisplay = document.getElementById("temprature")
    const descriptionDisplay = document.getElementById("description")
    const errorMessage = document.getElementById("error-message")

    const API_KEY = '884f31b234ed46764b95c481dfe0830b'

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if (!city) return;

        // it may through an error
        // server/database is always in another continent

        try {
            const weatherData = await fetchWeatherData(city)
            displayWatherData(weatherData)
        } catch (error) {
            showError()
        }
    })

    async function fetchWeatherData(city) {
        //get weather data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

        const response = await fetch(url)
        console.log(typeof response);
        console.log("RESPONSE",response);
        
        if (!response.ok) {
            throw new Error("City not found")
        }

        const data = await response.json()
        return data
    }

    function displayWatherData(data) {
        console.log(data)
        const { name, main, weather } = data
        
        cityNameDisplay.textContent = name
        tempratureDisplay.textContent = `Temperature: ${main.temp}`
        descriptionDisplay.textContent = `Weather: ${weather[0].description}`

        // unlock the display
        weatherInfo.classList.remove("hidden")
        errorMessage.classList.add("hidden")
    }

    function showError() {
        weatherInfo.classList.add("hidden")
        errorMessage.classList.remove("hidden")
    }
})