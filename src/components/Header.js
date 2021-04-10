import { Link, NavLink } from 'react-router';

const Header = () => (
  <header>
    <nav>
      <Link to="/">logo</Link>
      <div className="nav-links">
        <NavLink>Home</NavLink>
        <NavLink>Cars</NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
