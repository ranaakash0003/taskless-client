import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h3>Log In</h3>
      </div>
      <div className="login-content">
        <label for="email">email</label>
        <input type="text" name="email" id="" required />
        <label for="password">password</label>
        <input type="password" name="password" id="" required />
      </div>
      <button className="login-btn">submit</button>
      <p>
        <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
