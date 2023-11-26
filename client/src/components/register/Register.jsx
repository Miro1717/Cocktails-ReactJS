import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/useForm";
import "./register.module.css"

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
    <form className="form">
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" className="input"/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" className="input"/>
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" className="input"/>
        <span>Confirm password</span>
    </label>
    <button className="submit">Submit</button>
    <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
  );
};

export default Register;
{/* <Link to="/users/login">here</Link>
 name={[RegisterFormKeys.RePassword]}
 onChange={onChange}
 value={values[RegisterFormKeys.RePassword]} */}