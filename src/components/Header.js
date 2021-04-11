import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">logo</Link>
      <div className="nav-links">
        <NavLink to="/">Login</NavLink>
        <NavLink to="/">Sign up</NavLink>
        <div>Current_User_Name</div>
        <NavLink to="/">logout</NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
