import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather-app-wrapper">
      <div className="weather-app">
        <form className="mb-4">
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
              />
            </div>

            <div className="col-5">
              <input
                type="submit"
                value="Search"
                className="btn btn-light w-100"
              />
            </div>

            <div className="col-3"></div>
          </div>
        </form>
        <div className="overview">
          <h1>Edmonton,AB</h1>
          <ul>
            <li>Friday 08:00AM</li>
            <li>Partly Cloudy</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                className="float-left"
              />
              <div className="float-left">
                <strong>15°C</strong>
                <span className="units">
                  <a href="/" className="active">
                    {" "}
                    °C{" "}
                  </a>
                  | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <ul>
              <li>
                Humidity:<span> 43</span>%
              </li>
              <li>
                Wind: <span>25 </span>km/h
              </li>
            </ul>
          </div>
        </div>
        <br />
        <p>Hourly Forecast</p>
        <div className="row weather-forecast"></div>
      </div>
      <small className="coded">
        <a
          href="https://github.com/awolkailer/Weather-React"
          target="_blank"
          className="github"
        >
          Open-Source code{" "}
        </a>{" "}
        by Kaila Turpin
      </small>
    </div>
  );
}
