/* eslint-disable global-require */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

jest.mock('../components/Button', () => {
  const PropTypes = require('prop-types');

  const Button = ({ name, action }) => (
    <button type="button" onClick={action}>
      {name}
    </button>
  );

  Button.propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  };
  return Button;
});

const fn = jest.fn();

describe('Button component', () => {
  test('Renders the button correctly', () => {
    render(<Button name="delete" action={fn} />);
    expect(screen.getByText(/delete/i)).toBeInTheDocument();
  });
});
