import React, { createContext, useContext, useState, useEffect } from 'react';
import { useWeather } from './useWeather';

// WeatherContext 생성
const WeatherContext = createContext();

// WeatherProvider 컴포넌트: 상위 컴포넌트에서 데이터를 관리
export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState({ lat: null, lon: null });

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
    dailyTemperatureStats,
    dailyRainProbability,
    currentLoading,
    hourlyLoading,
    currentError,
    hourlyError,
  } = useWeather(location);

  return (
    <WeatherContext.Provider value={{
      activeWeatherData,
      activeHourlyData,
      dailyTemperatureStats,
      dailyRainProbability,
      currentLoading,
      hourlyLoading,
      currentError,
      hourlyError,
    }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);