import React, { useState } from "react";

export default function TemperatureUnit(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="weather-temperature">
        <strong className="temperature">{Math.round(props.celsius)}</strong>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit} className="fahrenheit">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weather-temperature">
        <strong className="temperature">{Math.round(fahrenheit())}</strong>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>{" "}
          <span className="fahrenheit">| °F</span>
        </span>
      </div>
    );
  }
}
