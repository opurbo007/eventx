import React, { useState } from "react";
import "../style.css";
import Logo from "../components/LogoSections";

const LoginPage = () => {
  const [activeForm, setActiveForm] = useState("login");

  const handleToggleForm = () => {
    setActiveForm(activeForm === "login" ? "register" : "login");
  };

  return (
    <>
      <div className="App">
        <header className="headerk"></header>
        <div className="backgroundk"></div>
        <div className="containerk">
          <Logo />
          <div>
            {activeForm === "login" ? (
              <Login onToggleForm={handleToggleForm} />
            ) : (
              <SignUp onToggleForm={handleToggleForm} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

function Login({ onToggleForm }) {
  return (
    <div className="login-sectionk bodyk">
      <div className="form-boxk login">
        <form action="">
          <h2>Sign In</h2>
          <div className="input-boxk">
            <span className="iconk">
              <i className="bx bxs-envelope"></i>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-boxk">
            <span className="iconk">
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-passwordk">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forget Password</a>
          </div>
          <button className="btnk">Login In</button>
          <div className="create-accountk">
            <p>
              Create A New Account? <br />
              <span className="register-link" onClick={onToggleForm}>
                Sign Up
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

function SignUp({ onToggleForm }) {
  return (
    <div className="login-sectionk">
      <div className="form-boxk register">
        <form action="">
          <h2>Sign Up</h2>

          <div className="input-boxk">
            <span className="iconk">
              <i className="bx bxs-user"></i>
            </span>
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-boxk">
            <span className="iconk">
              <i className="bx bxs-envelope"></i>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-boxk">
            <span className="iconk">
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-passwordk">
            <label>
              <input type="checkbox" />I agree with this statement
            </label>
          </div>
          <button className="btnk">Sign Up</button>
          <div className="create-accountk">
            <p>
              Already Have An Account?
              <br />
              <span className="login-link" onClick={onToggleForm}>
                Sign In
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
