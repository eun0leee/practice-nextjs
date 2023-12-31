import RevalidateButton from '@/components/RevalidateButton';
import { ParamsProps } from '@/type/common';
import { TimeProps } from '@/type/time';
import { getCurrentWeather } from '@/utils/getCurrentWeather';
import { getTime } from '@/utils/getTime';
import Link from 'next/link';

export default async function Home() {
  const res = await getCurrentWeather('seoul');
  const time: TimeProps = await getTime(res.location.tz_id);

  return (
    <main>
      <h1>메인 페이지</h1>
      <h3>{time.dateTime}</h3>
      <ul>
        <li>
          <Link href="/detail/seoul?name=서울">서울</Link>
        </li>
        <li>
          <Link href="/detail/NYC?name=뉴욕">뉴욕</Link>
        </li>
        <li>
          <Link href="/detail/london?name=런던">런던</Link>
        </li>
      </ul>
      <RevalidateButton tag={'time'} />
    </main>
  );
}
