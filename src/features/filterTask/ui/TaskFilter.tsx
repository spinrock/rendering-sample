import React, { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const menuItemList = [
  { menuValue: 'ALL', stateValue: null },
  { menuValue: 'Incompleted', stateValue: false },
  { menuValue: 'Completed', stateValue: true },
];

type Props = {
  filterState: boolean | null
  callbackOnChengeFunction: (state: boolean | null) => void
};

const TaskFilter: React.FC<Props> = ({ filterState, callbackOnChengeFunction }: Props) => {
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);
  const handleClickSelect = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  const handleClickSelectItem = (menuValue: string) => {
    callbackOnChengeFunction(
      menuItemList.find((menuItem) => menuItem.menuValue === menuValue)?.stateValue ?? null,
    );
  };

  return (
    <div className="flex justify-end">
      <div
        role="combobox"
        aria-controls="todo-filter"
        aria-expanded={isToggleOpen}
        tabIndex={0}
        className=" relative flex w-40 h-14 border-slate-300 border-[1px] rounded-md select-none hover:cursor-pointer hover:border-slate-500"
        onClick={handleClickSelect}
      >
        <p className="flex-grow pl-3 leading-[56px]" data-testid="select-button-title">
          {menuItemList.find((menuItem) => menuItem.stateValue === filterState)?.menuValue ?? 'ALL'}
        </p>
        {isToggleOpen ? (
          <MdArrowDropUp className=" size-6 my-auto mr-1" />
        ) : (
          <MdArrowDropDown className=" size-6 my-auto mr-1" />
        )}
        {isToggleOpen ? (
          <ul className="absolute top-14 bg-white shadow-2xl w-40 py-2 rounded-md border-[1px] border-slate-100">
            {menuItemList.map((menuItem) => (
              <li
                key={menuItem.menuValue}
                className="pl-3 h-9 leading-9 hover:bg-slate-100"
                onClick={() => {
                  handleClickSelectItem(menuItem.menuValue)
                }}
              >
                {menuItem.menuValue}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default TaskFilter;
