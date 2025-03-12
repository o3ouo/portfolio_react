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
    if (!activeWeatherData?.list) return [];

    const tempByDate = {};
  }) 
}