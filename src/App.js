import "./App.css";
import React from "react";

export default function WeatherApp() {
  return (
    <div className="weather-app">
      <header className="header">
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </header>

      <main>
        <div className="current-weather">
          <h1 className="city">San Francisco</h1>
          <p className="date-time">Saturday 14:29</p>
          <p className="description">scattered clouds</p>

          <div className="weather-details">
            <div className="temperature">
              <span className="temp-value">11</span>
              <span className="temp-unit">°C</span>
            </div>

            <div className="extra-info">
              <p>
                Humidity: <strong>84%</strong>
              </p>
              <p>
                Wind: <strong>4.02 km/h</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="forecast">
          {[
            { day: "Sat", max: 16, min: 11 },
            { day: "Sun", max: 16, min: 12 },
            { day: "Mon", max: 16, min: 11 },
            { day: "Tue", max: 18, min: 12 },
            { day: "Wed", max: 19, min: 12 },
          ].map((item, index) => (
            <div className="forecast-day" key={index}>
              <div className="forecast-name">{item.day}</div>
              <div className="forecast-temps">
                <span className="max">{item.max}°</span>
                <span className="min">{item.min}°</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>
          This project was coded by Laura and is open‑sourced on{" "}
          <a href="https://github.com/dashboard"> GitHub </a> and hosted on{" "}
          <a href="https://weather-react-003.netlify.app/"> Netlify</a>.
        </p>
      </footer>
    </div>
  );
}
