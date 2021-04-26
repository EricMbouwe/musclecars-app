import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import '@testing-library/jest-dom';
import Registration from '../containers/Registration';

jest.mock('../containers/Registration', () => {
  const Registration = () => (<div>Mock RegistrationForm</div>);
  Registration.displayName = 'UserFormContainer';
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
  describe('if token is empty', () => {
    it('renders Registration Form if logged in status is false', () => {
      localStorage.loggedStatus = 'NOT_LOGGED_IN';
      render(renderReadyComponent);
      expect(screen.getByText(/Mock User Form/i)).toBeInTheDocument();
      expect(screen.getByText(/Second Page/i)).toBeInTheDocument();
      expect(screen.queryByText(/Main Page/i)).not.toBeInTheDocument();
    });

    it('renders correctly', () => {
      localStorage.token = '';
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });
  describe('if token isn\'t empty', () => {
    it('redirect to \'/\'', () => {
      localStorage.loggedStatus = 'LOGGED_IN';
      render(renderReadyComponent);
      expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
      expect(screen.queryByText(/Second Page/i)).not.toBeInTheDocument();
    });

    it('renders correctly', () => {
      localStorage.loggedStatus = 'LOGGED_IN';
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });
});
