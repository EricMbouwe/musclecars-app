import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">logo</Link>
      <div className="nav-links">
        <Link to="/">Login</Link>
        <Link to="/">Sign up</Link>
        <div>Current_user_name</div>
        <Link to="/">logout</Link>
      </div>
    </nav>
  </header>
);

export default Header;
