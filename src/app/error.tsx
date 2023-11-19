/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect } from 'react';

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error.message);
  }, []);

  return (
    <div>
      <h1>에러페이지</h1>
      <button
        type="button"
        onClick={() => {
          reset();
        }}
      >
        새로고침
      </button>
    </div>
  );
}
