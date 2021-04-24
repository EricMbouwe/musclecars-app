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
import PrivateRoute from '../components/PrivateRoute';

function App() {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.app);
  const { user } = appState;

  useEffect(() => {
    dispatch(checkLoggedInStatus());
  }, []);

  const localLogStatus = localStorage.getItem('loggedStatus');
  const localUser = JSON.parse(localStorage.getItem('user'));

  // console.log('LOCAL-LOG-STATUS:', localLogStatus);
  // console.log('USER:', localUser);
  // console.log('USERNAME:', localUser?.name);
  // console.log('SERVER-LOG-STATUS:', loggedInStatus);

  const userRole = localUser?.role;
  const loggedIn = localLogStatus === 'LOGGED_IN';
  const isAdmin = userRole === 'admin';

  return (
    <div className="App text-gray-700">
      <Router history={history}>
        <Header
          dispatch={dispatch}
          currentUser={localUser}
          user={user}
          loggedIn={loggedIn}
          isAdmin={isAdmin}
        />
        <Switch>
          <Route exact path="/">
            <Home dispatch={dispatch} currentUser={localUser} isAdmin={isAdmin} />
          </Route>
          <Route exact path="/admin">
            <AdminLogin />
          </Route>
          <PrivateRoute
            exact
            path="/admin/cars/new"
            isAuthenticated={isAdmin}
            privatePath="A"
          >
            <CarRegistration dispatch={dispatch} currentUser={localUser} />
          </PrivateRoute>
          <PrivateRoute
            exact
            path="/admin/cars/:id/update"
            isAuthenticated={isAdmin}
            privatePath="A"
          >
            <CarRegistration dispatch={dispatch} currentUser={localUser} />
          </PrivateRoute>
          <Route exact path="/signup">
            <Registration dispatch={dispatch} currentUser={localUser} />
          </Route>
          <Route exact path="/login">
            <Login dispatch={dispatch} currentUser={localUser} />
          </Route>
          <PrivateRoute
            exact
            path="/cars/:id"
            isAuthenticated={loggedIn}
            privatePath="L"
          >
            <CarDetails
              dispatch={dispatch}
              currentUser={localUser}
              isAdmin={isAdmin}
            />
          </PrivateRoute>
          <Route exact path="/users/:id/appointments">
            <Appointments
              dispatch={dispatch}
              currentUser={localUser}
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
