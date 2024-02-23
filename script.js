const apiKey = "{API key}";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
  try {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    console.log(data);
  } catch {
    alert("An error occurred in the API request");
  }
}

checkWeather();
