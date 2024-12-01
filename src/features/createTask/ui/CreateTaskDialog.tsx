import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/entities/task/model/reducer';

type Props = {
  isOpen: boolean
  closeDialog: VoidFunction
};

const CreateTaskDialog: React.FC<Props> = ({ isOpen, closeDialog }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect((): void => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) {
      return;
    }
    if (isOpen) {
      if (dialogElement.hasAttribute('open')) {
        return;
      }
      dialogElement.showModal();
    } else {
      if (!dialogElement.hasAttribute('open')) {
        return;
      }
      dialogElement.close();
    };
  }, [isOpen]);

  const addTodoFunc: VoidFunction = () => {
    dispatch(addTodo({ title: title, description: description }));
    setTitle('');
    setDescription('');
    closeDialog();
  };

  const stopPropagation = useCallback((event: React.MouseEvent<HTMLDivElement>): void => {
    event.stopPropagation();
  }, []);

  return (
    <dialog className=" h-56 w-72 rounded-lg" ref={dialogRef} onClick={closeDialog}>
      <div className="px-4 h-56 w-72" onClick={stopPropagation}>
        <div className="flex justify-center py-4">
          <p className="text-xl">Please Input Todo Property</p>
        </div>
        <div className="grid gap-3">
          <input
            type="text"
            aria-label="Title"
            placeholder="Please Input Title"
            required
            className="h-10 border-slate-300 border-[1px] rounded-md pl-3"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value)
            }}
          />
          <textarea
            aria-label="Description"
            placeholder="Description"
            className="h-10 border-slate-300 border-[1px] rounded-md pl-3 leading-10"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setDescription(e.target.value)
            }}
          />
        </div>
        <div className="flex gap-3 my-4 justify-center">
          <button
            type="button"
            disabled={title === ''}
            onClick={addTodoFunc}
            className="h-10 px-3 rounded-md bg-slate-200 hover:bg-slate-300 disabled:bg-gray-200 disabled:text-gray-400"
          >
            Create Todo
          </button>
          <button
            type="button"
            onClick={closeDialog}
            className="h-10 px-3 rounded-md text-red-700 hover:bg-red-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default CreateTaskDialog;
