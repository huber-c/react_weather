import React from "react";
import DateFunction from "./DateFunction";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            Last updated:
            <DateFunction date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <strong className="temperature">
                {Math.round(props.data.temperature)}
              </strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
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
  );
}
