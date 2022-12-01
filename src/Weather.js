import React, { useState } from "react";
import axios from "axios";

function Weather() {
  let [city, setCity] = useState("");
  let [answer, setAnswer] = useState(false);
  let [weather, setWeather] = useState({});

  function displayInfo(response) {
    setAnswer(true);
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
    <form className="Search-Bar" onSubmit={handleCity}>
      <input type="search" placeholder="Search a city" onChange={searchCity} />
      <button type="submit" value="search">
        Search
      </button>
    </form>
  );

  return <div>{form}</div>;
}

export default Weather;
