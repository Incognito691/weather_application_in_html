let button = document.querySelector(".button");
let inputvalue = document.querySelector(".inputValue");
let nameVal = document.querySelector(".location");
let temp = document.querySelector(".temp");
let description = document.querySelector(".description");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=6d6d7f2d375c5b5d84b0f8b72e207a11"
  )
    .then((Response) => Response.json())
    .then(displayData)
    .catch((error) => {
      console.log("Error:", error);
    });
});

const displayData = (weather) => {
  temp.innerHTML = `${weather.main.temp} deg C`;
  description.innerHTML = `${weather.weather[0].main}`;
};
