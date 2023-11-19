import { ForeCastWeatherProps } from '@/type/foreCastWeather';

export const getForeCast = async (
  location: string
): Promise<ForeCastWeatherProps> => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}&days=3&aqi=no&alerts=no`
  );

  if (!res.ok) {
    throw new Error('날씨 정보를 가져올 수 없습니다.');
  }

  return res.json();
};
