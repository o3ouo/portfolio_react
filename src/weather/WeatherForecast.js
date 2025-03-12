import React from 'react';

export const getTime = (timeUnix) => {
  const date = new Date(timeUnix * 1000);
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  const icon = hours >= 12 ? "sunset" : "sunrise";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  return (
    <>
      <p className="am-pm">{period}</p>
      <p className="time">{formattedHours}:{minutes}</p>
      <figure className="sun-icon">
        <img src={`${process.env.PUBLIC_URL}/weather/${icon}.png`} alt={`${icon}-icon`} />
      </figure>
    </>
  )
};

function WeatherForecast({ activeWeatherData, activeHourlyData, weeklyTemperatureStats, dailyRainProbability }) {
  if (!activeWeatherData) return <div className='error'><img src={`${process.env.PUBLIC_URL}/image/error.jpeg`} alt="error-img" /></div>

  const { name, main, weather, sys } = activeWeatherData;
  const weatherMain = weather[0].main;
  const { sunrise, sunset } = sys;

  const nowTime = new Date();
  const hours = nowTime.getHours();

  console.log("weather:", weather);

  return (
    <div className="weather-forecast">
      <div className="left">
        <div className="top">
          <figure className="weather-icon">
            <img src={`${process.env.PUBLIC_URL}/weather/${weather[0].icon}.png`} alt={weatherMain} />
          </figure>
          <p className="temp">{Math.round(main.temp)}°</p>
        </div>
        <p className="city">{weather[0].description}</p>
        <div className="max-min-temp">
          <p className="h">H:{Math.round(weeklyTemperatureStats[0].maxTemp)}°&nbsp;</p>
          <p className="l">L:{Math.round(weeklyTemperatureStats[0].minTemp)}°</p>
        </div>
      </div>
   
      <div className="right">
        <div className="rain">
          <figure className="rain-icon">
            <img src={`${process.env.PUBLIC_URL}/weather/rain-probability.png`} alt="rain-probability" />
          </figure>
          <p className="rain-txt">{dailyRainProbability}%</p>
        </div>
        {
          hours >= 12 ? (
            <div className="sun-time">{getTime(sunset)}</div>
          ) : (
            <div className="sun-time">{getTime(sunrise)}</div>
          )
        }
      </div>
    </div>
  );
}

export default WeatherForecast;
