import React, { useState, useEffect } from 'react';
import { useWeather } from './useWeather';

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
    currentLoading,
    hourlyLoading,
    currentError,
    hourlyError,
  } = useWeather(location);

  if (currentLoading || hourlyLoading) return <div><img src={`${process.env.PUBLIC_URL}/image/spinner-icon.png`} alt="spinner-icon" /></div>

  if (currentError || hourlyError) {
    console.error("API 요청 실패:", { currentError, hourlyError});
    return <p>Error</p>
  }

  return (
    <div className="weather-wrap">
      
      
    </div>
  );
}

export default Weather;
