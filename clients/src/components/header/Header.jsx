import { Link } from "react-router-dom";

const Header = function () {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cocktails/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/cocktails/create">Create Cocktails</Link>
        </li>
        <li>
          <Link to="/users/profile">Profile</Link>
        </li>
        <li>
          <Link to="/users/logout">Logout</Link>
        </li>
        <li>
          <Link to="/users/register">Register</Link>
        </li>
        <li>
          <Link to="/users/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
