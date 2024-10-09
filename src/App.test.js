import { render, screen } from '@testing-library/react';
import App from './App';  // Make sure to point to the correct path of your App component

test('renders the ToDo List title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Assignment 2: Ayaz Mohammed ToDo List/i);
  expect(titleElement).toBeInTheDocument();
});
