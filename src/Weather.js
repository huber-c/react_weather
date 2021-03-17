import React, { useState } from "react";
import axios from "axios";
import bootstrap from "bootstrap";
import "./App.css";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  let weatherData = {
    city: "Manchester",
    temperature: 4,
    date: "Sunday 19:30",
    description: "Rainy",
    imgUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    humidity: 80,
    wind: 10,
  };

  if (ready) {
    return (
      <div className="Wrapper">
        <div className="Weather">
          <form className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search for a city..."
                  className="form-control"
                  autoComplete="off"
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
          <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>Last updated: {weatherData.date}</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="float-left">
                  <strong className="temperature">
                    {Math.round(temperature)}
                  </strong>
                  <span className="units">
                    <a href="/">°C</a> | <a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
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
    const apiKey = "2ceada01b7fc7d0d21b702ddd8150d97";
    let city = "Manchester";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Content is loading...";
  }
}
