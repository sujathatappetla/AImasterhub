import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [res, setRes] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError(""); // Clear error message when user starts typing
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear error message when user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Clear error message when user starts typing
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError(""); // Clear error message when user starts typing
  };

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    // Basic password validation: at least 6 characters
    return password.length >= 6;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formValid = true;

    // Validate username
    if (!username) {
      setUsernameError("Username is required");
      formValid = false;
    }

    // Validate email
    if (!email) {
      setEmailError("Email is required");
      formValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      formValid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      formValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long");
      formValid = false;
    }

    // Validate confirmPassword
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password is required");
      formValid = false;
    }

    // Validate password match
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      setConfirmPasswordError("Passwords do not match");
      formValid = false;
    }

    if (formValid) {
      try {
        const response = await axios.post('http://localhost:8000/signup/', {
          username,
          email,
          password
        });
        setRes("User signed up successfully");
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate("/signin"); // Redirect to signin page after successful signup
      } catch (error) {
        if (error.response && error.response.data) {
          setRes(error.response.data.detail);
        } else {
          setRes("account has already existed with the given email");
        }
      }
    }
  };

  return (
    <div className="bg">
      <div className="card-container">
        
        <center>
          <h1 className="heading-signup">Signup</h1>
        </center>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inner-form">
            <label className="label">USERNAME</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="user-input"
              placeholder="Username"
            />
            {usernameError && <p className="error-message">{usernameError}</p>}
          </div>
          <div className="inner-form">
            <label className="label">EMAIL</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="user-input"
              placeholder="Email"
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="inner-form">
            <label className="label">PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="user-input"
              placeholder="Password"
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <div className="inner-form">
            <label className="label">CONFIRM PASSWORD</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="user-input"
              placeholder="Confirm Password"
            />
            {confirmPasswordError && (
              <p className="error-message">{confirmPasswordError}</p>
            )}
          </div>
          <p className="response-message">{res}</p>
          <button type="submit" className="submit-button">
            Signup
          </button>
          <div className="signin">
            <p className="already">Already have an account?</p>
            <Link to="/signin">
              <p className="login-button-signup-page">Signin</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;