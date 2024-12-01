import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Todo } from '@/entities/task/model/interface';
import { deleteTodo, toggleTodo } from '@/entities/task/model/reducer';

type Props = {
  todo: Todo
};

const TaskCard: React.FC<Props> = ({ todo }: Props) => {
  const dispatch = useDispatch();

  const toggleTodoFunc = () => {
    dispatch(toggleTodo({ id: todo.id }))
  };

  const deleteTodoFunc = () => {
    dispatch(deleteTodo({ id: todo.id }))
  };

  return (
    <div className="flex my-2 h-20 shadow-md" data-testid="todoitem-card">
      <div
        className="h-20 w-11 flex items-center justify-center text-slate-500  rounded-full hover:bg-slate-200"
        data-testid={`todoitem-checkbox-${todo.id}`}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodoFunc}
          className=" opacity-0 w-11 h-20 absolute cursor-pointer"
        />
        {todo.completed ? (
          <MdCheckBox className="size-6  " />
        ) : (
          <MdCheckBoxOutlineBlank className="size-6" />
        )}
      </div>
      <div className="flex-1 py-3">
        <p
          className={`text-2xl ${todo.completed ? 'line-through' : 'no-underline'}`}
          data-testid={`todoitem-title-${todo.id}`}
        >
          {todo.title}
        </p>
        <p
          className={`${todo.completed ? 'line-through' : 'no-underline'}`}
          data-testid={`todoitem-description-${todo.id}`}
        >
          {todo.description}
        </p>
      </div>
      <button
        type="button"
        onClick={deleteTodoFunc}
        data-testid={`todoitem-delete-button-${todo.id}`}
        className="px-3 hover:bg-slate-200 hover-text-slate-600 rounded-full"
      >
        <MdDelete className="size-6 text-slate-500" />
      </button>
    </div>
  );
};

export default TaskCard;
