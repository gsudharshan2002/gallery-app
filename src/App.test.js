import React from 'react';  // Add this import

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Image Gallery link', () => {
  render(<App/>);
  const linkElement = screen.getByText(i);
  expect(linkElement).toBeInTheDocument();
});

