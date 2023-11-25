import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  RePassword: "rePassword",
};

const Register = function () {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.RePassword]: "",
  });

  return (
    <form
      onSubmit={onSubmit}
      style={{
        position: "absolute",
        top: "300px",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "10px",
      }}
    >
      <FloatingLabel
        controlId="floatingInputEmail"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          onChange={onChange}
          name={[RegisterFormKeys.Email]}
          value={values[RegisterFormKeys.Email]}
          style={{ marginTop: "10px" }}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="Password"
        style={{ marginTop: "10px" }}
      >
        <Form.Control
          type="password"
          placeholder="Password"
          name={[RegisterFormKeys.Password]}
          onChange={onChange}
          value={values[RegisterFormKeys.Password]}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingRePassword"
        label="rePassword"
        style={{ marginTop: "10px" }}
      >
        <Form.Control
          type="password"
          placeholder="Password"
          name={[RegisterFormKeys.RePassword]}
          onChange={onChange}
          value={values[RegisterFormKeys.RePassword]}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputFirstName"
        label="First name"
        style={{ marginTop: "10px" }}
      >
        <Form.Control type="text" placeholder="John" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputLastName"
        label="Last name"
        style={{ marginTop: "10px" }}
      >
        <Form.Control type="text" placeholder="Doe" />
      </FloatingLabel>

      <Button
        variant="secondary"
        type="submit"
        style={{ margin: "10px 140px" }}
      >
        Register
      </Button>
      <p style={{ color: "white", margin: "20px" }}>
        <span>
          If you already have profile click <Link to="/users/login">here</Link>
        </span>
      </p>
    </form>
  );
};

export default Register;
