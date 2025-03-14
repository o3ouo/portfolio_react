import React from 'react';

function HomeWidgets({ activeWeatherData, activeHourlyData, dailyTemperatureStats }) {
  console.log("activeWeatherData:", activeWeatherData);
  console.log("activeHourlyData:", activeHourlyData);
  console.log("dailyTemperatureStats:", dailyTemperatureStats);

  const { name, main, weather } = activeWeatherData;

  return (
    <div className="home_widegets">
      <div className="inner">
        <div className="current_weather">
          <div className="city_temp_box">
            <p className="city">{name}</p>
            <p className="current_temp">{Math.round(main.temp)}°</p>
          </div>
          <div className="icon_description_box">
            <figure className="weather_icon">
              <img src={`${process.env.PUBLIC_URL}/weather/${weather[0].icon}.png`} alt="curren_weather_icon" />
            </figure>
            <div className="text">
              <p className="description">{weather[0].description}</p>
              <p className="high_low">H:{Math.round(dailyTemperatureStats[0].maxTemp)}° L:{Math.round(dailyTemperatureStats[0].minTemp)}°</p>
            </div>
          </div>
        </div>
        <ul className="hourly_weather">
          {activeHourlyData.list.slice(0, 6).map((hour, index) => (
            <li key={index}>
              <p className="time">{hour.dt_txt.substring(11, 13)}</p>
              <figure className="time-icon">
                <img src={`${process.env.PUBLIC_URL}/weather/${hour.weather[0].icon}.png`} alt={hour.dt_txt} />
              </figure>
              <p className="hourly_temp">{Math.round(hour.main.temp)}°</p>
            </li>
          ))}

        </ul>
      </div>
      <p className="title">Weather</p>
    </div>
  );
}

export default HomeWidgets;
