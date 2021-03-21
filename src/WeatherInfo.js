import React from "react";
import DateFunction from "./DateFunction";
import WeatherIcon from "./WeatherIcon";
import TemperatureUnit from "./TemperatureUnit";
import "./Weather.css";
import "boxicons";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6 overview">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              Last updated: <DateFunction date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6 temperature-display">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
            <TemperatureUnit celsius={Math.round(props.data.temperature)} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <box-icon name="water" color="#fff"></box-icon> Humidity:{" "}
              {props.data.humidity}%
            </li>
            <li>
              <box-icon name="wind" color="#fff"></box-icon> Wind:{" "}
              {props.data.wind} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
