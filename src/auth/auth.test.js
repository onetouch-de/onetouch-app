import { render, screen } from '@testing-library/react';
import Auth from './Auth';

test('renders Email address', () => {
  render(<Auth />);
  const linkElement = screen.getByText(/Email address/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders password', () => {
    render(<Auth />);
    const linkElement = screen.getByText(/Password/i);
    expect(linkElement).toBeInTheDocument();
  });