import React from 'react';
import { useWeatherContext } from '../weather/WeatherContext';

export const getTime = (timeUnix) => {
  const date = new Date(timeUnix * 1000);
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  const icon = hours >= 12 ? "sunset" : "sunrise";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  return (
    <>
      <p className="am_pm">{period}</p>
      <p className="time">{formattedHours}:{minutes}</p>
      <figure className="sun_icon">
        <img src={`${process.env.PUBLIC_URL}/image/${icon}.webp`} alt={`${icon}_icon`} />
      </figure>
    </>
  )
};

function LockWidgets() {
  const {
    activeWeatherData = {},
    dailyTemperatureStats = [],
    dailyRainProbability = 0,
    currentLoading,
    hourlyLoading,
    currentError,
    hourlyError,
  } = useWeatherContext();

  if (!activeWeatherData && !dailyTemperatureStats && !dailyRainProbability) return <div className='error'><img src={`${process.env.PUBLIC_URL}/image/error.webp`} alt="date_error_img" /></div>

  if (currentLoading || hourlyLoading) {
    <div className='loding'><img src={`${process.env.PUBLIC_URL}/image/spinner_icon.webp`} alt="spinner_icon" /></div>
  }
  if (currentError || hourlyError) {
    <div className='error'><img src={`${process.env.PUBLIC_URL}/image/error.webp`} alt="error_img" /></div>
  }

  const { main = {}, weather = [], sys = {} } = activeWeatherData || {};
  const weatherMain = weather.length > 0 ? weather[0]?.main : "Unkown";
  const { sunrise = 0, sunset = 0 } = sys;

  const nowTime = new Date();
  const hours = nowTime.getHours();

  return (
    <div className="lock_widgets">
      <div className="left">
        <div className="top">
          <figure className="weather_icon">
            <img src={`${process.env.PUBLIC_URL}/image/${weather.length > 0 ? weather[0]?.icon : "default"}.webp`} alt={weatherMain} />
          </figure>
          <p className="temp">{Math.round(main?.temp)}°</p>
        </div>
        <p className="city">{weather[0]?.description}</p>
        <div className="max_min_temp">
          <p className="h">H:{Math.round(dailyTemperatureStats[0]?.maxTemp)}°&nbsp;</p>
          <p className="l">L:{Math.round(dailyTemperatureStats[0]?.minTemp)}°</p>
        </div>
      </div>

      <div className="right">
        <div className="rain">
          <div className="rain_icon"></div>
          <p className="rain_txt">{dailyRainProbability}%</p>
        </div>
        {
          hours >= 12 ? (
            <div className="sun_time">{getTime(sunset)}</div>
          ) : (
            <div className="sun_time">{getTime(sunrise)}</div>
          )
        }
      </div>
    </div>
  );
}

export default LockWidgets;
