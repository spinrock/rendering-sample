/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from '@/shared/ui/Footer';

describe('Common Test', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('Check Footer Text Meesage', () => {
    const expectedFooterTextMessage = 'Created By'
    expect(screen.getByTestId('footer-message').innerHTML).toMatch(expectedFooterTextMessage)
  })

  it('Check Footer Link Meesage', () => {
    const expectedFooterLinkMessage = 'Spinrock'
    expect(screen.getByTestId('footer-link').innerHTML).toMatch(expectedFooterLinkMessage)
  })

  it('Check Footer Link URL', () => {
    const expectedFooterLinkMessage = 'https://github.com/spinrock/nextjs-template'
    expect(screen.getByTestId('footer-link')).toHaveAttribute('href', expectedFooterLinkMessage)
  })
})
