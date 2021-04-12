import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logOut } from '../actions/actionCreator';

const Header = ({ dispatch, currentUser }) => (
  <header>
    <nav>
      <Link to="/">logo</Link>
      <div className="nav-links">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
        <div>{currentUser?.name?.toUpperCase()}</div>
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
};

export default Header;
