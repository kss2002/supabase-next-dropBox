import Link from 'next/link';
import style from './404.module.css';

export default function NotFound() {
  return (
    <main className={style.not__main}>
      <h1 className={style.not__h1}>404 - Page Not Found</h1>
      <p className={style.not__text}>
        죄송합니다. 존재하지 않는 페이지입니다.
      </p>
      <p className={style.not__text}>
        다음 버튼을 누르고 홈 화면으로 이동하세요
        <br />
        <button className={style.not__button}>
          <Link href="/">홈 화면으로 이동</Link>
        </button>
      </p>
    </main>
  );
}
