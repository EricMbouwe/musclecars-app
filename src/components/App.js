import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import Car from '../containers/Car';
import Cars from '../containers/Cars';
import Appointments from '../containers/Appointments';
import './App.css';
import Header from './Header';
import Registration from '../containers/Registration';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Cars} />
          <Route exact path="/admin" component={Registration} />
          <Route exact path="/cars/:id" component={Car} />
          <Route exact path="/appointments" component={Appointments} />
          <Redirect to="/cars" />
        </Switch>
      </Router>
    </div>
  );
}

// <Route exact path="/login" component={} />
// <Route exact path="/signup" component={} />

export default App;
