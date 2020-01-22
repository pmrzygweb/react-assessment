import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Home and Todos Link', () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
