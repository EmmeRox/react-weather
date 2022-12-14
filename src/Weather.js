import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function Weather() {
  let [city, setCity] = useState("");
  let [answer, setAnswer] = useState(false);
  let [weather, setWeather] = useState({});

  function displayInfo(response) {
    setAnswer(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.date.wind.speed,
      humidity: response.date.main.humidity,
      description: response.date.weather[0].description,
    });
  }

  function handleCity(event) {
    event.preventDefault();

    let apiKey = "f81614abe2395d5dfecd45b9298041de";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayInfo);
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="search" onSubmit={handleCity}>
      <input type="search" placeholder="Search a city" onChange={searchCity} />
      <button type="submit" value="search">
        Search
      </button>
    </form>
  );

  if (answer) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {weather.temperature}</li>
          <li>Wind: {weather.wind}</li>
          <li>Humidity: {weather.humidity}</li>
          <li>Description: {weather.description}</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

export default Weather;
