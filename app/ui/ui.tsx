'use client';

import { Button, Input } from '@material-tailwind/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createTodo, getTodos } from 'app/actions/todo-action';
import Todo from '../components/todo';
import { useState } from 'react';

export default function UI() {
  const [searchInput, setSearchInput] = useState('');

  const todosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos({ searchInput }),
  });

  const createTodoMutation = useMutation({
    mutationFn: () =>
      createTodo({
        title: '할 일을 입력하세요',
        completed: false,
      }),

    onSuccess: () => {
      todosQuery.refetch();
    },
  });

  return (
    <div className="w-2/3 mx-auto flex flex-col items-center py-10 gap-2">
      <h1 className="text-xl">오늘의 할일 리스트</h1>

      <Input
        crossOrigin=""
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        label="할 일 검색"
        placeholder="할 일 검색"
        icon={<i className="fas fa-search" />}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {todosQuery.isPending && <p>로딩 중...</p>}
      {todosQuery.data &&
        todosQuery.data.map((todo) => <Todo key={todo.id} todo={todo} />)}
      <Button
        placeholder=""
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        onClick={() => createTodoMutation.mutate()}
        loading={createTodoMutation.isPending}
      >
        <i className="fas fa-plus mr-2" />할 일 추가
      </Button>
    </div>
  );
}
