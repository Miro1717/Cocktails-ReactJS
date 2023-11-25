import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

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
    <form
      onSubmit={onSubmit}
      style={{
        position: "absolute",
        top: "200px",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "10px",
      }}
    >
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="email"
          name={LoginFromKeys.Email}
          placeholder="name@example.com"
          onChange={onChange}
          value={values[LoginFromKeys.Email]}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          name={LoginFromKeys.Password}
          type="password"
          onChange={onChange}
          value={values[LoginFromKeys.Password]}
          placeholder="Password"
        />
      </FloatingLabel>
      <Button
        variant="secondary"
        style={{ margin: "10px 140px" }}
        type="submit"
      >
        Log In
      </Button>
      <p>
        <span style={{ color: "white", margin: "55px" }}>
          If you don't have profile click <Link to="/users/register">here</Link>
        </span>
      </p>
    </form>
  );
};

export default Login;
