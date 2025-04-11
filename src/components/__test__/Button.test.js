import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For matchers like toHaveTextContent

import { Button } from '../Button';

describe('Button Component', () => {
  test('renders the correct button text', () => {
    const buttonText = 'Click Me!';
    render(<Button>{buttonText}</Button>);

    // Using getByRole (recommended for buttons)
    const buttonElementByRole = screen.getByRole('button');
    expect(buttonElementByRole).toHaveTextContent(buttonText);

    // Alternatively, you can use getByText if you know the exact text
    const buttonElementByText = screen.getByText(buttonText);
    expect(buttonElementByText).toBeInTheDocument(); // Ensure the element exists
  });

  test('renders different button text', () => {
    const differentText = 'Submit Form';
    render(<Button>{differentText}</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent(differentText);
  });
});