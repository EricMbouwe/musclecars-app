import { render } from '@testing-library/react';
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
    it('renders correctly', () => {
      initStore.user.username = 'mockName';
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });

  describe('If username does not exist', () => {
    it('renders correctly', () => {
      initStore.user.username = '';
      const renderedContainer = render(renderReadyComponent);

      expect(renderedContainer).toMatchSnapshot();
    });
  });
});
