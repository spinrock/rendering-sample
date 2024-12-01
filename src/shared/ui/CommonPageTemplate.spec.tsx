/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import CommonPageTemplate from '@/shared/ui/CommonPageTemplate';

const dummyComponentText = 'Dummy Component'

describe('Common Test', () => {
  beforeEach(() => {
    render(
      <CommonPageTemplate>
        <div data-testid="dummy-component">{dummyComponentText}</div>
      </CommonPageTemplate>,
    )
  })

  it('Check Header Title', () => {
    const expectedHeaderTitle = 'This is Next.js Template'
    expect(screen.getByTestId('header-title').innerHTML).toEqual(expectedHeaderTitle)
  })

  it('Check ReactComponent', () => {
    const expectedDummyComponentText = dummyComponentText
    expect(screen.getByTestId('dummy-component').innerHTML).toEqual(expectedDummyComponentText)
  })
})
