const API_KEY = '306ac41a9c80c8da01b5661152208f37';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const fetchWeather = async (endpoint) => {
  const response = await fetch(`${BASE_URL}/${endpoint}&appid=${API_KEY}&units=metric&lang=kr`);

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return response.json();
};

// 현재 날씨 정보 조회
export const fetchCurrentWeather = (lat, lon) =>
  fetchWeather(`weather?lat=${lat}&lon=${lon}`);

// 시간대별 날씨 정보 조회
export const fetchHourlyWeather = (lat, lon) => {
  fetchWeather(`forecast?lat=${lat}&${lon}`);
}