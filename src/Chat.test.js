import React from 'react';
import { render } from '@testing-library/react';
import Chat from './Chat';

test('renders learn react link', () => {
  const { getByText } = render(<Chat />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
