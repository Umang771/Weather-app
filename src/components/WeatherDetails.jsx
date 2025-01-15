import React, { useState } from "react";
import WeatherForecsat from "./WeatherForecsat";
import HourlyForecast from "./hourlyForecast";

const WeatherDetails = (props) => {
  let { aqi, desc, temp, details } = props;
  console.log(details);

  var [first, setfirst] = useState(details.forecast.forecastday);
  

  const [hour, sethour] = useState(first[0].hour);
  

  return (
    <>
      <div className="container">
        <main className="content">
          <section className="weather-overview">
            <h2>Today's Weather</h2>
            <div className="weather-summary">
              <div>
                <h1>{temp}°C</h1>
                <p>{desc}</p>
              </div>
              <div>
                <h2>Details</h2>
                <p>Humidity:{details.current.humidity}</p>
                <p>WindSpeed:{details.current.wind_kph}</p>
                <p>Feels Like:{details.current.feelslike_c}°C</p>
              </div>
            </div>
          </section>

          <aside className="Aqi">
            <h2>AQI Report</h2>
            <hr></hr>
            <h3>{details.current.air_quality.pm2_5}</h3>
            <div>
              <li className="good">0–50: Good air quality</li>
              <li className="moderate">51–150: Moderate air quality</li>
              <li className="moderate">151–200: Unhealthy</li>
              <li className="harmful">201–300: Very unhealthy</li>
            </div>
          </aside>

          <section className="Forecast">
            <h4>
              <b>7-Days Forecast</b>
            </h4>
            <table className="table tablefor">
              {first.map((element) => {
                return (
                  <div key={element.date}>
                    <WeatherForecsat
                    date={element.date}
                      min={element.day.mintemp_c}
                      max={element.day.maxtemp_c}
                      desc={element.day.condition.text}
                    />
                  </div>
                );
              })}
            </table>
          </section>

          <section className="hourly">
            <h4>
              <b>Hourly Forecast</b>
            </h4>
            <table className="table tablehour">
              {hour.map((element) => {
                return (
                  <div key={element.time}>
                    <HourlyForecast
                      time={element.time}
                      temp={element.temp_c}
                      wind={element.wind_kph}
                    />
                  </div>
                );
              })}
            </table>
          </section>
        </main>
      </div>
    </>
  );
};

export default WeatherDetails;
