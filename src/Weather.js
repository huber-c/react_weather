import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Weather.css";
import "./App.css";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setcity] = useState(props.defaultCity);
  function handleResponse(response) {
    setweatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  function search() {
    const apiKey = "2ceada01b7fc7d0d21b702ddd8150d97";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //search for a city
  }

  function handleCityChange(event) {
    setcity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Wrapper">
        <div className="Weather">
          <form className="mb-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9 Searchbox">
                <input
                  type="search"
                  placeholder="Search for a city..."
                  className="form-control"
                  autoComplete="off"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3 search-button">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <Forecast city={weatherData.city} />
          <p className="footer">
            Open source by{" "}
            <a
              href="https://github.com/huber-c/react_weather"
              target="_blank"
              rel="noreferrer"
            >
              Carina H.
            </a>
          </p>
        </div>
      </div>
    );
  } else {
    search();
    return "Content is loading...";
  }
}
