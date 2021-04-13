import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logOut } from '../actions/actionCreator';

const Header = ({ dispatch, currentUser, loggedIn }) => (
  <header>
    <nav>
      <Link to="/">logo</Link>
      <div className="nav-links">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
        {loggedIn && <h2>{currentUser.name}</h2>}
        {loggedIn && <NavLink to={`users/${currentUser.id}/appointments`}>My appointments</NavLink>}
        <NavLink to="/" onClick={() => dispatch(logOut())}>
          logout
        </NavLink>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentUser: PropTypes.oneOfType([PropTypes.object]).isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Header;
