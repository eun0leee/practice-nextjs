import HomeButton from '@/components/HomeButton';
import { ParamsProps } from '@/type/common';
import { getForeCast } from '@/utils/getForecast';

export function generateMetadata({ params, searchParams }: ParamsProps) {
  return {
    title: `날씨앱 - ${params.location}`,
    description: `${searchParams.name}의 3일간 날씨 예보를 알려드립니다.`,
  };
}

export default async function Detail({ params, searchParams }: ParamsProps) {
  const res = await getForeCast(params.location);

  return (
    <div>
      <h1>{searchParams?.name}의 3일 예보</h1>
      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>
            날짜 : {day.date}, 최고기온 : {day.day.maxtemp_c}, 최저기온 :{' '}
            {day.day.mintemp_c}
          </li>
        ))}
      </ul>
      <HomeButton />
    </div>
  );
}
