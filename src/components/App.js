import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import CarDetails from '../containers/CarDetails';
import Home from '../containers/Home';
import Appointments from '../containers/Appointments';
import './App.css';
import Header from './Header';
import Registration from '../containers/Registration';
import AdminLogin from '../containers/AdminLogin';
import CarRegistration from '../containers/CarRegistration';
import Login from '../containers/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={AdminLogin} />
          <Route exact path="/admin/cars/new" component={CarRegistration} />
          <Route exact path="/signup" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cars/:id" component={CarDetails} />
          <Route exact path="/appointments" component={Appointments} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
