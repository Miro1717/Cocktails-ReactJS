import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../../context/authContext";
import "./Header.css";

const Header = function () {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">Cocktails</label>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="cocktails/catalog">Catalog</Link>
        </li>

        {!isAuthenticated && (
          <>
            <li>
              <Link to="/users/login">Login</Link>
            </li>
            <li>
              <Link to="/users/register">Register</Link>
            </li>
          </>
        )}

        {isAuthenticated && (
          <>
            <li>
              <Link to="/cocktails/create">Create</Link>
            </li>
            <li>
              <Link to="/users/profile">My Cocktails</Link>
            </li>

            <li>
              <Link to="/users/logout">Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
