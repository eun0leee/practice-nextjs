import RevalidateButton from '@/components/RevalidateButton';
import { PramsProps } from '@/type/common';
import { getCurrentWeather } from '@/utils/getCurrentWeather';
import { getTime } from '@/utils/getTime';
import Link from 'next/link';

export default async function Home({ params }: PramsProps) {
  const res = await getCurrentWeather('seoul');
  const time = await getTime(res.location.tz_id);

  return (
    <main>
      <h1>메인 페이지</h1>
      <h3>{time.dateTime}</h3>
      <ul>
        <li>
          <Link href="/detail/seoul">서울</Link>
        </li>
        <li>
          <Link href="/detail/newyork">뉴욕</Link>
        </li>
        <li>
          <Link href="/detail/london">런던</Link>
        </li>
      </ul>
      <RevalidateButton tag={'time'} />
    </main>
  );
}
