import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import '@testing-library/jest-dom';
import Registration from '../containers/Registration';

jest.mock('../containers/Registration', () => {
  const Registration = () => (<div>Mock RegistrationForm</div>);
  Registration.displayName = 'User Form';
  return Registration;
});

let renderReadyComponent;
beforeEach(() => {
  renderReadyComponent = (
    <BrowserRouter>
      <Redirect to="/second-page" />
      <Registration />
      <Switch>
        <Route exact path="/" render={() => <>Main Page</>} />
        <Route exact path="/second-page" render={() => <div>Second Page</div>} />
      </Switch>
    </BrowserRouter>
  );
});

describe('<Registration />', () => {
  describe('logged in status is false', () => {
    it('renders Registration Form if logged in status is false', () => {
      localStorage.loggedStatus = 'NOT_LOGGED_IN';
      render(renderReadyComponent);
      expect(screen.getByText(/Mock RegistrationForm/i)).toBeInTheDocument();
      expect(screen.getByText(/Second Page/i)).toBeInTheDocument();
      expect(screen.queryByText(/Main Page/i)).not.toBeInTheDocument();
    });

    it('renders correctly', () => {
      localStorage.token = '';
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });
  describe('logged in status is true', () => {
    it('redirect to \'/\'', () => {
      localStorage.loggedStatus = 'LOGGED_IN';
      render(renderReadyComponent);
      expect(screen.queryByText(/Second Page/i)).toBeInTheDocument();
    });

    it('renders correctly', () => {
      localStorage.loggedStatus = 'LOGGED_IN';
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });
});
