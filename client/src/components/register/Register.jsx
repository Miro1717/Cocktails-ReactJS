import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  RePassword: "rePassword",
  Username: "Username",
};

const Register = function () {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.RePassword]: "",
    [RegisterFormKeys.Username]: "",
  });

  return (
    <form className="form-login" id="login" onSubmit={onSubmit}>
      <p className="form-title">Sign up to your account</p>
      <div className="input-container">
        <input
          type="text"
          id="email"
          placeholder="Enter email"
          name="email"
          onChange={onChange}
          value={values[RegisterFormKeys.Email]}
        />
        <span></span>
      </div>
      <div className="input-container">
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          name="password"
          onChange={onChange}
          value={values[RegisterFormKeys.Password]}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          id="rePassword"
          name="rePassword"
          placeholder="Enter repeat password"
          onChange={onChange}
          value={values[RegisterFormKeys.RePassword]}
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          id="register-username"
          placeholder="Enter username"
          name={RegisterFormKeys.Username}
          onChange={onChange}
          value={values[RegisterFormKeys.Username]}
        />
      </div>
      <button type="submit" className="submit">
        Sign up
      </button>

      <p className="signup-link">
        Already have an acount ?<Link to="/users/login"> Sing in</Link>
      </p>
    </form>
  );
};

export default Register;
{
  /* <Link to="/users/login">here</Link>
 name={[RegisterFormKeys.RePassword]}
 onChange={onChange}
 value={values[RegisterFormKeys.RePassword]} */
}
