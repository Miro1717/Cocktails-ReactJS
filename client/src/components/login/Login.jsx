import { Link } from "react-router-dom";
import "./login.css";

const Login = function () {
  return (
    <form>
      <h3>Login</h3>

      <label for="username">Email</label>
      <input type="text" placeholder="name@gmail.com" id="username" />

      <label for="password">Password</label>
      <input type="password" placeholder="Password" id="password" />

      <button>Log In</button>

      <span>
        If you don't have profile click <Link to="/users/register">here</Link>
      </span>
    </form>
  );
};

export default Login;
