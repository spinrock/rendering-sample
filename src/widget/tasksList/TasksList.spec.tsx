/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { rootStore } from '@/app/store';
import { render, screen } from '@/shared/tests/testUtils';
import TasksList from './TasksList';
import type { Todo } from '@/entities/task/model/interface';

describe('Common Test', () => {
  beforeEach(() => {
    render(
      <Provider store={rootStore}>
        <TasksList />
      </Provider>,
    );
  });

  it('Check TodoList Length', () => {
    expect(screen.getAllByTestId('todoitem-card').length).toEqual(rootStore.getState().todo.length);
  });

  it.each(rootStore.getState().todo)('', (todo: Todo) => {
    const expectedTitle = todo.title;
    const expectedDescription = todo.description;

    expect(screen.getByTestId(`todoitem-title-${todo.id}`).innerHTML).toEqual(expectedTitle);
    expect(screen.getByTestId(`todoitem-description-${todo.id}`).innerHTML).toEqual(
      expectedDescription,
    );
  });
});

describe('Checked Todo Test', () => {
  const targetCheckboxId = `todoitem-checkbox-${rootStore.getState().todo[0].id}`;

  beforeEach(async () => {
    render(
      <Provider store={rootStore}>
        <TasksList />
      </Provider>,
    );

    const checkbox = screen.getByTestId(targetCheckboxId).querySelector("input[type='checkbox']");
    checkbox ? (await userEvent.click(checkbox,)) : null;
  });

  it('Check TodoList Length', async () => {
    expect(screen.getAllByTestId('todoitem-card').length).toEqual(rootStore.getState().todo.length - 1);

    await userEvent.click(screen.getByText('Incompleted'));
    await userEvent.click(screen.getByText('ALL'));
    const checkbox = screen.getByTestId(targetCheckboxId).querySelector("input[type='checkbox']");
    checkbox ? (await userEvent.click(checkbox,)) : null;
  });

  it('Update Filter(Imcompleted -> ALL)', async () => {
    await userEvent.click(screen.getByText('Incompleted'));
    await userEvent.click(screen.getByText('ALL'));

    expect(screen.getAllByTestId('todoitem-card').length).toEqual(rootStore.getState().todo.length);

    const checkbox = screen.getByTestId(targetCheckboxId).querySelector("input[type='checkbox']");
    checkbox ? (await userEvent.click(checkbox,)) : null;
  });

  it('Update Filter(Imcompleted -> Completed)', async () => {
    await userEvent.click(screen.getByText('Incompleted'));
    await userEvent.click(screen.getByText('Completed'));

    expect(screen.getAllByTestId('todoitem-card').length).toEqual(rootStore.getState().todo.length - 3);

    await userEvent.click(screen.getAllByText('Completed')[0]);
    await userEvent.click(screen.getByText('ALL'));
    const checkbox = screen.getByTestId(targetCheckboxId).querySelector("input[type='checkbox']");
    checkbox ? (await userEvent.click(checkbox,)) : null;
  });
});

describe('Delete Todo Test', () => {
  const targetDeleteButtonId = `todoitem-delete-button-${rootStore.getState().todo[0].id}`;

  it('Check TodoList Length', async () => {
    render(
      <Provider store={rootStore}>
        <TasksList />
      </Provider>,
    );
    await userEvent.click(screen.getByTestId(targetDeleteButtonId));

    // Check Delete Todo not found(default filter state)
    expect(screen.queryByTestId(targetDeleteButtonId)).toBeNull();

    // Check Delete Todo not found(ALL filter state)
    await userEvent.click(screen.getAllByText('Incompleted')[0]);
    await userEvent.click(screen.getByText('ALL'));

    expect(screen.queryByTestId(targetDeleteButtonId)).toBeNull();

    // Check Delete Todo not found(Completed filter state)
    await userEvent.click(screen.getAllByText('ALL')[0]);
    await userEvent.click(screen.getByText('Completed'));

    expect(screen.queryByTestId(targetDeleteButtonId)).toBeNull();
  });
});
