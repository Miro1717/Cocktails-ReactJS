import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import "./login.module.css"

const LoginFromKeys = {
  Email: "email",
  Password: "password",
};

const Login = function () {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFromKeys.Email]: "",
    [LoginFromKeys.Password]: "",
  });

  return (

    <form class="form" onSubmit={onSubmit}>
      <p class="form-title">Sign in to your account</p>
      <div class="input-container">
        <input 
        type="email" 
        placeholder="Enter email" 
        name={LoginFromKeys.Email}
        onChange={onChange} />
        <span>
        </span>
      </div>
      <div class="input-container">
        <input 
        type="password" 
        placeholder="Enter password" 
        name={LoginFromKeys.Password}
        onChange={onChange} />
      </div>
      <button type="submit" class="submit">
        Sign in
      </button>

      <p class="signup-link">
        No account?
        <Link to="/users/register"> Sing up</Link>
      </p>
    </form>

  );
};

export default Login;


