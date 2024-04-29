// const API_KEY = "2d0b505bc82420738afcbd80308892e8";
// const weather = document.getElementById("Weather");
const apiKey = "2d0b505bc82420738afcbd80308892e8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const loc = document.getElementById("location");
const search = document.getElementById("search");
const locName = document.getElementById("name");
const temp = document.getElementById("temp");
const desc = document.getElementById("desc");
const icons = document.getElementById("icon");

search.addEventListener("click", () => {
  const location = loc.value;
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const icon = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      icons.innerHTML = `<img src="${iconUrl}" />`;

      locName.innerText = data.name;
      temp.innerText = `${Math.round(data.main.temp)}°C`;
      desc.innerText = data.weather[0].description;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
