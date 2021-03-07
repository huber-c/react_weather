import React from "react";
import axios from "axios";
import bootstrap from "bootstrap";
import "./App.css";
import "./Weather.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  let weatherData = {
    city: "Manchester",
    temperature: 4,
    date: "Sunday 19:30",
    description: "Rainy",
    imgUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div>
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
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
                <strong>{weatherData.temperature}</strong>
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
      </div>
      <p className="footer">
        Open source by{" "}
        <a href="https://github.com/huber-c/WeatherApp_React" target="_blank">
          Carina H.
        </a>
      </p>
    </div>
  );
}
