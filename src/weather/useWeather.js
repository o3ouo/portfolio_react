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

  const activeWeatherData = useMemo(() => currentData);
  const activeHourlyData = useMemo(() => hourlyData);

  // 6일 동안의 최고/최저 온도 계산
  const weeklyTemperatureStats = useMemo(() => {
    if (!activeHourlyData || !activeHourlyData.list) return [];

    const tempByDate = {};
    activeHourlyData.list.forEach((hour) => {
      const date = hour.dt_txt.split(" ")[0];

      if (!tempByDate[date]) {
        tempByDate[date] = { maxTemp: hour.main.temp, minTemp: hour.main.temp };
      } else {
        tempByDate[date].maxTemp = Math.max(tempByDate[date].maxTemp, hour.main.temp);
        tempByDate[date].minTemp = Math.min(tempByDate[date].minTemp, hour.main.temp);
      }
    });

    return Object.entries(tempByDate)
      .slice(0, 6)
      .map(([date, temps]) => ({ date, ...temps }));
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
    weeklyTemperatureStats,
    dailyRainProbability,
    currentLoading,
    hourlyLoading,
    currentError,
    hourlyError,
  };
};