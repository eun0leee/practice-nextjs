'use client';

import { POST } from '@/api/revalidate/route';

type Props = {
  tag: string;
};

export default function RevalidateButton({ tag }: Props) {
  const handleClick = async () => {
    const res = await fetch('/api/revalidate?tag=' + tag, { method: 'POST' });
    console.log(res);
    const result = await res.json();
    return result;
  };

  return (
    <button type="button" onClick={handleClick}>
      캐시비우기
    </button>
  );
}
