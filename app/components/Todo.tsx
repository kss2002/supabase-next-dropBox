'use client';

import { Checkbox, IconButton, Spinner } from '@material-tailwind/react';
import { deleteTodo, updateTodo } from 'app/actions/todo-action';
import { queryClient } from 'app/config/ReactQueryClientProvider';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

export default function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(todo.completed);
  const [title, setTitle] = useState(todo.title);

  const updateTodoMutation = useMutation({
    mutationFn: () =>
      updateTodo({
        id: todo.id,
        title,
        completed,
      }),
    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: () => deleteTodo(todo.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });

  return (
    <div className="w-full flex items-center gap-1">
      <Checkbox
        crossOrigin=""
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        checked={completed}
        onChange={async (e) => {
          await setCompleted(e.target.checked);
          await updateTodoMutation.mutate();
        }}
      />

      {isEditing ? (
        <input
          placeholder="할일을 입력하세요"
          className="flex-1 border-b-black border-b pb-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <p className={`flex-1 ${completed && 'line-through'}`}>{title}</p>
      )}

      {isEditing ? (
        <IconButton
          onClick={async () => {
            await updateTodoMutation.mutate();
          }}
          placeholder=""
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {updateTodoMutation.isPending ? (
            <Spinner
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          ) : (
            <i className="fas fa-check" />
          )}
        </IconButton>
      ) : (
        <IconButton
          onClick={() => setIsEditing(true)}
          placeholder=""
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <i className="fas fa-pen" />
        </IconButton>
      )}
      <IconButton
        onClick={() => deleteTodoMutation.mutate()}
        placeholder=""
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {deleteTodoMutation.isPending ? (
          <Spinner
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        ) : (
          <i className="fas fa-trash" />
        )}
      </IconButton>
    </div>
  );
}
