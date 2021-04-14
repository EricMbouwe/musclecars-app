import {
  Route,
  Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarDetails from './CarDetails';
import Home from './Home';
import Appointments from './Appointments';
import './App.css';
import Header from '../components/Header';
import Registration from './Registration';
import AdminLogin from './AdminLogin';
import CarRegistration from './CarRegistration';
import Login from './Login';
import { checkLoggedInStatus } from '../actions/actionCreator';
import history from '../history';

function App() {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.app);
  const { loggedInStatus, user } = appState;

  useEffect(() => {
    dispatch(checkLoggedInStatus());
  }, []);

  const loggedIn = loggedInStatus === 'LOGGED_IN';
  const isAdmin = user.role === 'admin';

  return (
    <div className="App">
      <Router history={history}>
        <Header
          dispatch={dispatch}
          currentUser={user}
          loggedIn={loggedIn}
          isAdmin={isAdmin}
        />
        <Switch>
          <Route exact path="/">
            <Home
              dispatch={dispatch}
              currentUser={user}
              isAdmin={isAdmin}
            />
          </Route>
          <Route exact path="/admin" component={AdminLogin} />
          <Route exact path="/admin/cars/new">
            <CarRegistration
              dispatch={dispatch}
              currentUser={user}
            />
          </Route>
          <Route exact path="/admin/cars/:id/update">
            <CarRegistration
              dispatch={dispatch}
              currentUser={user}
            />
          </Route>
          <Route exact path="/signup">
            <Registration
              dispatch={dispatch}
              currentUser={user}
            />
          </Route>
          <Route exact path="/login">
            <Login
              dispatch={dispatch}
              currentUser={user}
            />
          </Route>
          <Route exact path="/cars/:id">
            <CarDetails
              dispatch={dispatch}
              currentUser={user}
              isAdmin={isAdmin}
            />
          </Route>
          <Route exact path="/users/:id/appointments">
            <Appointments
              dispatch={dispatch}
              currentUser={user}
              isAdmin={isAdmin}
            />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
