/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { rootStore } from '@/app/store';
import { render, screen } from '@/shared/tests/testUtils';
import { TaskFilter } from '@/features/filterTask/ui';

const mockCallbackOnChengeFunction = jest.fn()

describe('Common Test', () => {
  it('Check Select Button Title (filterState null)', () => {
    render(
      <Provider store={rootStore}>
        <TaskFilter filterState={null} callbackOnChengeFunction={mockCallbackOnChengeFunction} />
      </Provider>,
    )

    const expectedSelectButtonTitle = 'ALL'
    expect(screen.getByTestId('select-button-title').innerHTML).toEqual(expectedSelectButtonTitle)
  })

  it('Check Select Button Title (filterState false)', () => {
    render(
      <Provider store={rootStore}>
        <TaskFilter filterState={false} callbackOnChengeFunction={mockCallbackOnChengeFunction} />
      </Provider>,
    )

    const expectedSelectButtonTitle = 'Incompleted'
    expect(screen.getByTestId('select-button-title').innerHTML).toEqual(expectedSelectButtonTitle)
  })

  it('Check Select Button Title (filterState true)', () => {
    render(
      <Provider store={rootStore}>
        <TaskFilter filterState={true} callbackOnChengeFunction={mockCallbackOnChengeFunction} />
      </Provider>,
    )

    const expectedSelectButtonTitle = 'Completed'
    expect(screen.getByTestId('select-button-title').innerHTML).toEqual(expectedSelectButtonTitle)
  })
})
