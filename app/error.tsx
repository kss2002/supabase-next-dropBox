'use client';

import Link from 'next/link';

export default function Errorpage() {
  return (
    <>
      <div>
        <h1>오류가 발생되었습니다</h1>
        <Link href="/">홈으로 돌아가기</Link>
      </div>
    </>
  );
}
