'use client';

import { useRouter } from 'next/navigation';

export default function HomeButton() {
  const router = useRouter();

  const handleClickButton = () => {
    router.push('/');
  };

  return (
    <button type="button" onClick={handleClickButton}>
      홈으로
    </button>
  );
}
