/**
 * @jest-environment jsdom
 */

import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@/shared/tests/testUtils';
import { rootStore } from '@/app/store';
import IndexPage from '@/pages/tasksList';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Provider store={rootStore}>
        <IndexPage />
      </Provider>,
      {},
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
