const apiKey = "{API key}";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
  } catch {
    alert("An error occurred in the API request");
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
