import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders the component with initial elements', () => {
    // Arrange: Render the component
    render(<App />);

    // Assert: Check if the main heading is present
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();

    // Assert: Check if the button is present with initial count
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument();

    // Assert: Check if the Vite and React logos are present
    expect(screen.getByAltText(/Vite logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/React logo/i)).toBeInTheDocument();

    // Assert: Check if the "Edit src/App.jsx and save to test HMR" text is present
    expect(screen.getByText(/Edit src\/App.jsx and save to test HMR/i)).toBeInTheDocument();
  });

  test('increments the count when the button is clicked', () => {
    // Arrange: Render the component
    render(<App />);

    // Act: Click the button
    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);

    // Assert: Check if the count has incremented
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
  });
});
