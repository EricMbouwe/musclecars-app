import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Login from '../containers/Login';

const initStore = { user: { } };
const mockStore = configureStore();
const store = mockStore(initStore);

let renderReadyComponent;
beforeEach(() => {
  renderReadyComponent = (
    <BrowserRouter>
      <Provider store={store}>
        <Redirect to="/second-page" />
        <Login />
        <Switch>
          <Route exact path="/" render={() => <>Main Page</>} />
          <Route exact path="/second-page" render={() => <div>Second Page</div>} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
});

describe('<Login />', () => {
  describe('If username exists', () => {
    it('redirect to \'/\' ', () => {
      initStore.user.username = 'mockName';
      render(renderReadyComponent);

      expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
      expect(screen.queryByText(/Second Page/i)).not.toBeInTheDocument();
    });

    it('renders correctly', () => {
      initStore.user.username = 'mockName';
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });

  describe('If username does not exist', () => {
    it('renders Login Form if username is empty', () => {
      initStore.user.username = '';
      render(renderReadyComponent);

      expect(screen.getByText(/Second Page/i)).toBeInTheDocument();
      expect(screen.getByText(/Log In/i)).toBeInTheDocument();
      expect(screen.queryByText(/Main Page/i)).not.toBeInTheDocument();
    });

    it('renders correctly', () => {
      initStore.user.username = '';
      const renderedContainer = render(renderReadyComponent);

      expect(renderedContainer).toMatchSnapshot();
    });
  });
});
