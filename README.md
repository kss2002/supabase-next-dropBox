## [풀스택 완성] Supabase로 웹사이트 3개 클론하기

인프런 강의 >

> https://inf.run/wX6Xr

## 이런 걸 배울 수 있어요

Supabase로 서버없이 풀스택 개발을 하는 법 (회원인증, 파일 업로드, 실시간 채팅)

Next.js 14버전 (feat. App Router, Server Action)

카카오 OAuth 로그인 구현

Tailwind CSS, React Query, Recoil 라이브러리

Vercel과 AWS를 통한 프로젝트 배포방법

무한 스크롤, 드래그 앤 드롭 기능 구현

도메인 구매 및 연동

## dropbox

이 프로젝트는 drop box를 만드는 프로젝트입니다. 데이터베이스는 슈퍼베이스.
실제로 CRUD가 가능함.

## 배포

배포된 링크 >

## 테일윈드 4.1 버전 설치하기

https://tailwindcss.com/docs/installation/framework-guides/nextjs

1. next를 이용해서 프로젝트 설치하기

```bash
npx create-next-app@latest my-project --typescript --eslint --app
cd my-project
```

2. 4.1버전의 테일윈드 설치하기

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

3. mjs 세팅하기

// postcss.config.mjs

```js
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
export default config;
```

4. 글로벌에 세팅하기

```css
@import 'tailwindcss';
```

5. 예시

```tsx
// page.tsx
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <p>hello tailwind CSS!</p>
    </>
  );
}
```
