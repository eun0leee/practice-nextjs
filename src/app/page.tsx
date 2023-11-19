import Link from 'next/link';

export default function Home() {
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
