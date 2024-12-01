/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '@/shared/ui/Header';

const dummyTitle = 'Dummy Title'

describe('Common Test', () => {
  beforeEach(() => {
    render(<Header title={dummyTitle} />)
  })

  it('Check Header Title', () => {
    const expectedHeaderTitle = dummyTitle
    expect(screen.getByTestId('header-title').innerHTML).toEqual(expectedHeaderTitle)
  })
})
