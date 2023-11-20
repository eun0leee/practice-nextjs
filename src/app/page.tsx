import { PramsProps } from '@/type/common';
import { getCurrentWeather } from '@/utils/getCurrentWeather';
import Link from 'next/link';

export default async function Home({ params }: PramsProps) {
  const res = await getCurrentWeather('seoul');

  return (
    <main>
      <h1>메인 페이지</h1>
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
    </main>
  );
}
