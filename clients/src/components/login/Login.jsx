import { Link } from "react-router-dom";
import "./login.css";

const Login = function () {
  return (
    <section id="login-page">
      <div className="loginSection">
        <form method="POST" className="loginForm">
          <h2>Login</h2>
          <ul className="noBullet">
            <li>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="inputFields"
                id="email"
                name="email"
                placeholder="name@gmail.com"
              />
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="inputFields"
                id="password"
                name="password"
                placeholder="*******"
              />
            </li>

            <li id="center-btn">
              <button id="login-btn">Login</button>
            </li>
          </ul>
        </form>
        <p className="field">
          <span>
            If you don't have profile click{" "}
            <Link to="/users/register">here</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
