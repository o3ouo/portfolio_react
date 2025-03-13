import React, { useState, useEffect } from 'react';
import { useWeather } from './useWeather';
import WeatherForecast from './WeatherForecast';

function Weather() {
  const [location, setLocation] = useState({ lat: null, lon: null });
  
  // 컴포넌트가 마운트될 때 사용자의 위치 정보를 가져옴
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, []);

  const {
    activeWeatherData,
    activeHourlyData,
    weeklyTemperatureStats,
    dailyRainProbability,
    currentLoading,
    hourlyLoading,
    currentError,
    hourlyError,
  } = useWeather(location);

  if (currentLoading || hourlyLoading) return <div className='loding'><img src={`${process.env.PUBLIC_URL}/image/spinner_icon.png`} alt="spinner_icon" /></div>

  if (currentError || hourlyError) {
    console.error("API 요청 실패:", { currentError, hourlyError});
    return <div className='error'><img src={`${process.env.PUBLIC_URL}/image/error_07.jpeg`} alt="error_img" /></div>
  }

  return (
    <div className="weather_wrap">
      <WeatherForecast 
        activeWeatherData={activeWeatherData}
        activeHourlyData={activeHourlyData}
        weeklyTemperatureStats={weeklyTemperatureStats}
        dailyRainProbability={dailyRainProbability}
      />
    </div>
  );
}

export default Weather;
