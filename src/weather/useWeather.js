import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { fetchCurrentWeather, fetchHourlyWeather } from './weatherAPI';

// 현재 위치 기반 날씨 데이터 가져오는 커스텀 훅
export const useWeather = (location) => {
  // 현재 위치 날씨
  const { data: currentData, error: currentError, isLoading: currentLoading } = useQuery({
    queryKey: ["currentWeather", location.lat, location.lon],
    queryFn: () => fetchCurrentWeather(location.lat, location.lon),
    enabled: !!location.lat && !!location.lon,
  });

  // 시간별 날씨
  const { data: hourlyData, error: hourlyError, isLoading: hourlyLoading } = useQuery({
    queryKey: ["hourlyWeather", location.lat, location.lon],
    queryFn: () => fetchHourlyWeather(location.lat, location.lon),
    enabled: !!location.lat && !!location.lon,
  });

  const activeWeatherData = currentData;
  const activeHourlyData = hourlyData;

  // 6일 동안의 최고/최저 온도 계산
  const dailyTemperatureStats = useMemo(() => {
    if (!activeHourlyData || !activeHourlyData.list) return [];

    const today = new Date().toISOString().split("T")[0]; 

    const tempStats = { maxTemp: -Infinity, minTemp: Infinity };

    activeHourlyData.list.forEach((hour) => {
      const date = hour.dt_txt.split(" ")[0];

      if (date === today) {
        tempStats.maxTemp = Math.max(tempStats.maxTemp, hour.main.temp);
        tempStats.minTemp = Math.min(tempStats.minTemp, hour.main.temp);
      }
    });

    // 최고/최저 온도가 갱신되지 않으면 빈 배열 반환
    if (tempStats.maxTemp === -Infinity || tempStats.minTemp === Infinity) return [];

    return [{ date: today, ...tempStats }];
  }, [activeHourlyData]);
  
  // 오늘 강수 확률 계산
  const dailyRainProbability = useMemo(() => {
    if (!activeHourlyData || !activeHourlyData.list) return 0;

    const pops = activeHourlyData.list.map((hour) => hour.pop || 0);
    return pops.length ? Math.round((pops.reduce((sum, pop) => sum + pop, 0) / pops.length) * 100) : 0;
  }, [activeHourlyData]);

  return {
    activeWeatherData,
    activeHourlyData,
    dailyTemperatureStats,
    dailyRainProbability,
    currentLoading,
    hourlyLoading,
    currentError,
    hourlyError,
  };
};