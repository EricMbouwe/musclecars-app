import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import Car from './Car';
import CarList from './CarList';
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
          <Route exact path="/" component={CarList} />
          <Route exact path="/admin" component={Registration} />
          <Route exact path="/signup" component={Registration} />
          <Route exact path="/login" component={Registration} />
          <Route exact path="/cars/:id" component={Car} />
          <Route exact path="/appointments" component={Appointments} />
          <Redirect to="/cars" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
