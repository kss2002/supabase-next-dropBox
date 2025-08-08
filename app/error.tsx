'use client';

import Link from 'next/link';
import style from './404.module.css';

export default function Errorpage() {
  return (
    <>
      <div className={style.not__main}>
        <h1 className={style.not__h1}>오류가 발생되었습니다</h1>
        <button className={style.not__button}>
          <Link href="/">홈으로 돌아가기</Link>
        </button>
      </div>
    </>
  );
}
