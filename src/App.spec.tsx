import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders halo message', () => {
  render(<App />)
  const linkElement = screen.getByText(/halo/i)
  expect(linkElement).toBeInTheDocument()
})
