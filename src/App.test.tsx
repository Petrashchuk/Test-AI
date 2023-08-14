import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders first page', () => {
  render(<App />);
  expect(screen.getAllByText('Login')[0]).toBeInTheDocument();
});
