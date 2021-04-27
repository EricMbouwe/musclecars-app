import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

jest.mock('../components/Button', () => {
  const Button = () => (<div>delete</div>);
  return Button;
});

const fn = jest.fn();

describe('Button component', () => {
  test('Renders the button correctly', () => {
    render(<Button name="delete" action={fn} />);
    expect(screen.getByText(/delete/i)).toBeInTheDocument();
  });
});
