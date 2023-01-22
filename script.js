const locationCity = document.getElementById("location-city");
const dateField = document.getElementById("day");
const temperatureField = document.getElementById("celsius_number");
const visibilityField = document.getElementById("VisibilityNumber");
const feelsLikeField = document.getElementById("FeelsLikeNumber");
const humidityField = document.getElementById("humidityNumber");
const windField = document.getElementById("windNumber");
const addButton = document.getElementById("add_button");
const locationSelect = document.getElementById("location_select");
const optionsContainer = document.getElementById("options_container");
const descriptionField = document.getElementById("description");

function getWeatherData() {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&units=metric&appid=af8978d47008294a10e9905586ea9468`;
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      locationCity.innerText = data.name;
      temperatureField.innerText = data.main.temp;
      feelsLikeField.innerText = data.main.feels_like;
      humidityField.innerText = data.main.humidity;
      windField.innerText = data.wind.speed;
    });
}

getWeatherData();

function displayDate() {
  var date = new Date();
  var weekDay = date.toLocaleString("default", { weekday: "long" });
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  var year = date.getFullYear().toString().slice(-2);
  document.getElementById("day").innerHTML =
    weekDay + ", " + day + "/" + month + "/" + year;
}

displayDate();
