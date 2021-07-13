import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logOut } from '../actions/actionCreator';

const Header = ({
  dispatch, currentUser, loggedIn, isAdmin,
}) => (
  <header className="bg-green-50">
    <nav className="flex justify-between py-5 md:container md:mx-auto">
      <Link to="/" className="font-extrabold text-xl">
        MUSCLECARS
      </Link>
      <ul className="nav-links ml-3 flex">
        {!loggedIn && (
          <li className="mr-2 px-2 hover:text-green-600 hover:border-b-4">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        {!loggedIn && (
          <li className="mr-2 px-2 hover:text-green-600 hover:border-b-4">
            <NavLink to="/signup">Sign up</NavLink>
          </li>
        )}
        {loggedIn && (
          <li className="mr-2 px-2 hover:text-green-600 hover:border-b-4">
            <NavLink to={`/users/${currentUser?.id}/appointments`}>
              My appointments
            </NavLink>
          </li>
        )}
        {isAdmin && (
          <li className="mr-2 px-2 hover:text-green-600 hover:border-b-4">
            <NavLink to="/admin/cars/new">New Car</NavLink>
          </li>
        )}
        {loggedIn && (
          <li className="mr-2 px-2">
            <h2 className="font-extrabold capitalize text-green-500">{currentUser?.name}</h2>
          </li>
        )}
        {loggedIn && (
          <li className="pl-2 hover:text-green-500">
            <NavLink to="/" onClick={() => dispatch(logOut())} className=" hover:border-green-500 border-b-4 py-1">
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  </header>
);

Header.defaultProps = {
  currentUser: null,
};

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentUser: PropTypes.oneOfType([PropTypes.object]),
  loggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default Header;
