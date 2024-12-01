/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { rootStore } from '@/app/store';
import { render, screen } from '@/shared/tests/testUtils';
import { Todo } from '@/entities/task/model/interface';
import { TaskCard } from '@/entities/task/ui';

const dummyTodo: Todo = {
  id: 'Dummy Id',
  title: 'Dummy Title',
  description: 'Dummy Description',
  completed: false,
  parentTaskId: null,
  childrenTaskIds: [],
}

describe('Common Test', () => {
  beforeEach(() => {
    render(
      <Provider store={rootStore}>
        <TaskCard todo={dummyTodo} />
      </Provider>,
    )
  })

  it('Check Todo Title', () => {
    const expectedTitle = dummyTodo.title
    expect(screen.getByTestId(`todoitem-title-${dummyTodo.id}`).innerHTML).toEqual(expectedTitle)
  })

  it('Check Todo Title Style', () => {
    const expectedTitleStyle = 'no-underline'
    expect(screen.getByTestId(`todoitem-title-${dummyTodo.id}`)).toHaveClass(expectedTitleStyle)
  })

  it('Check Todo Description', () => {
    const expectedDescription = dummyTodo.description
    expect(screen.getByTestId(`todoitem-description-${dummyTodo.id}`).innerHTML).toEqual(
      expectedDescription,
    )
  })

  it('Check Todo Description Style', () => {
    const expectedDescriptionStyle = 'no-underline'
    expect(screen.getByTestId(`todoitem-description-${dummyTodo.id}`)).toHaveClass(
      expectedDescriptionStyle,
    )
  })
})

describe('Completed Todo Test', () => {
  beforeEach(() => {
    render(
      <Provider store={rootStore}>
        <TaskCard todo={{ ...dummyTodo, completed: true }} />
      </Provider>,
    )
  })

  it('Check Todo Title Style', () => {
    const expectedTitleStyle = 'line-through'
    expect(screen.getByTestId(`todoitem-title-${dummyTodo.id}`)).toHaveClass(expectedTitleStyle)
  })

  it('Check Todo Description Style', () => {
    const expectedDescriptionStyle = 'line-through'
    expect(screen.getByTestId(`todoitem-description-${dummyTodo.id}`)).toHaveClass(
      expectedDescriptionStyle,
    )
  })
})
