import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import "./login.css";

const LoginFromKeys = {
    Email: "email",
    Password: "password",
};

const Login = function () {
    const { loginSubmitHandler, showErrorMessage, errorMessage, hideErrorBox } =
        useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFromKeys.Email]: "",
        [LoginFromKeys.Password]: "",
    });

    return (
        <>
            {showErrorMessage && errorMessage && (
                <div style={{ background: "red" }} role="alert">
                    {errorMessage}
                    <button
                        style={{ width: "50px", height: "20px" }}
                        type="button"
                        onClick={hideErrorBox}
                    >
                        OK
                    </button>
                </div>
            )}

            <form className="form-login" onSubmit={onSubmit}>
                <p className="form-title">Sign in to your account</p>
                <label className="input-container">
                    <input
                        type="email"
                        placeholder="Enter email"
                        name={LoginFromKeys.Email}
                        onChange={onChange}
                    />
                    <span></span>
                </label>
                <label className="input-container">
                    <input
                        type="password"
                        placeholder="Enter password"
                        name={LoginFromKeys.Password}
                        onChange={onChange}
                    />
                </label>
                <button type="submit" className="submit">
                    Sign in
                </button>

                <p className="signup-link">
                    No account?
                    <Link to="/users/register"> Sing up</Link>
                </p>
            </form>
        </>
    );
};

export default Login;
