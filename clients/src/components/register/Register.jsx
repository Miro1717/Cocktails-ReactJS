import { Link } from "react-router-dom";

const Register = function () {
  return (
    <section id="register-page">
      <div className="signupSection">
        <form method="POST" className="signupForm">
          <h2>Sign Up</h2>
          <ul className="noBullet">
            <li>
              <label htmlFor="first-name">First Name:</label>
              <input
                type="text"
                className="inputFields"
                id="first-name"
                name="firstName"
                placeholder="Alex"
              />
            </li>
            <li>
              <label htmlFor="last-name">Last Name:</label>
              <input
                type="text"
                className="inputFields"
                id="last-name"
                name="lastName"
                placeholder="Petkov"
              />
            </li>
            <li>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="inputFields"
                id="email"
                name="email"
                placeholder="alex@gmail.com"
              />
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="inputFields"
                id="password"
                name="password"
                placeholder="******"
              />
            </li>
            <li>
              <label htmlFor="repeat-password">Repeat-Password:</label>
              <input
                type="password"
                className="inputFields"
                id="repeat-password"
                name="repeatPassword"
                placeholder="******"
              />
            </li>
            <li id="center-btn">
              <button id="join-btn">JOIN</button>
            </li>
          </ul>
        </form>
        <p className="field">
          <span>
            If you already have profile click{" "}
            <Link to="/users/login">here</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Register;
