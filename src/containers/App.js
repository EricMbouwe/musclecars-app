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

  return (
    <div className="App">
      <Router history={history}>
        <Header
          dispatch={dispatch}
          loggedInStatus={loggedInStatus}
          currentUser={user}
        />
        <Switch>
          <Route exact path="/">
            <Home dispatch={dispatch} currentUser={user} />
          </Route>
          <Route exact path="/admin" component={AdminLogin} />
          <Route exact path="/admin/cars/new" component={CarRegistration} />
          <Route exact path="/signup">
            <Registration
              dispatch={dispatch}
              loggedInStatus={loggedInStatus}
              currentUser={user}
            />
          </Route>
          <Route exact path="/login">
            <Login
              dispatch={dispatch}
              loggedInStatus={loggedInStatus}
              currentUser={user}
            />
          </Route>
          <Route exact path="/cars/:id">
            <CarDetails
              dispatch={dispatch}
              loggedInStatus={loggedInStatus}
              currentUser={user}
            />
          </Route>
          <Route exact path="/appointments" component={Appointments} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
