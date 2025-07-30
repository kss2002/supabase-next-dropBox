import { NextResponse } from 'next/server';

const DB = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Alice' },
  { id: 4, name: 'Bob' },
];

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const name = searchParams.get('name') as string;

  return NextResponse.json({
    users: DB.filter((user) => user.name.includes(name)),
  });
}

// route.ts는 HTTP API 요청 구현하는데 사용한다.
// route.ts를 잘 이용하면 서버구축을 따로 하지 않고도 next.js를 서버로도 이용 가능하다.
// GET, POST, PUT, DELETE 등 HTTP 메소드를 지원한다.
// 이 예제에서는 GET 요청을 처리하는 API를 구현한다.
// 이 API는 /api/users 경로로 요청이 들어오면 사용자 목록을 JSON 형식으로 반환한다.
// 또한 함수 이름은 무조건 GET, POST, PUT, DELETE 등 HTTP 메소드 이름이여야 함.
