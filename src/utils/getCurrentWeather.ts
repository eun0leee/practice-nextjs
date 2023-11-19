import { CurrentWeatherProps } from '@/type/currentWeather';

export const getCurrentWeather = async (
  location: string
): Promise<CurrentWeatherProps> => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}&aqi=no`
  );

  if (!res.ok) {
    throw new Error('날씨 정보를 가져올 수 없습니다.');
  }

  return res.json();
};
