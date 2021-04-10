import { Route, Router, Switch } from 'react-router';
import Car from '../containers/Car';
import Cars from '../containers/Cars';
import Appointments from '../containers/Appointments';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Cars} />
          <Route exact path="/admin" component={} />
          <Route exact path="/login" component={} />
          <Route exact path="/signup" component={} />
          <Route exact path="/cars/:id" component={Car} />
          <Route exact path="/appointments" component={Appointments} />
          <Redirect to="/cars" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
