import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logOut } from '../actions/actionCreator';

const Header = ({
  dispatch, currentUser, loggedIn, isAdmin,
}) => (
  <header>
    <nav className="flex justify-center py-4">
      <Link to="/">Logo</Link>
      <ul className="nav-links ml-3 flex">
        {!loggedIn && (
          <li className="mr-2">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        {!loggedIn && (
          <li className="mr-2">
            <NavLink to="/signup">Sign up</NavLink>
          </li>
        )}
        {loggedIn && (
          <li className="mr-2">
            <NavLink to={`/users/${currentUser.id}/appointments`}>
              My appointments
            </NavLink>
          </li>
        )}
        {isAdmin && (
          <li className="mr-2">
            <NavLink to="/admin/cars/new">New Car</NavLink>
          </li>
        )}
        {loggedIn && (
          <li className="mr-2 font-bold">
            <h2>{currentUser.name}</h2>
          </li>
        )}
        {loggedIn && (
          <li>
            <NavLink to="/" onClick={() => dispatch(logOut())}>
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentUser: PropTypes.oneOfType([PropTypes.object]).isRequired,
  loggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default Header;
