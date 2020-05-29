import React from "react";
import "./signup.css";
import { useDispatch } from "react-redux";
import * as actions from "../../actions/auth";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please Input");
    }
    dispatch(actions.register(email, password));
  };
  return (
    <div className="signUp-container">
      <div className="signUp-header">
        <h3>Sign Up</h3>
      </div>
      <div className="signUp-content">
        <label for="email">email</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="signUp-btn" onClick={(e) => handleSubmit(e)}>
        submit
      </button>
    </div>
  );
};

export default SignUp;
