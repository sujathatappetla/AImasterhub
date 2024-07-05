import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

class SignIn extends Component {
  state = {
    us: "",
    pd: "",
    showSubmitError: false,
    errorMsg: "",
    submitForm: false,
    usernameError: "",
    passwordError: "",
    showForgotPassword: false, // New state to manage displaying the forgot password option
  };

  onSubmitForm = async (event) => {
    event.preventDefault();

    const { us, pd } = this.state;

    // Reset error messages
    this.setState({ usernameError: "", passwordError: "", showSubmitError: false });

    // Validate inputs
    if (!us.trim() && !pd.trim()) {
      this.setState({ usernameError: "Username is required", passwordError: "Password is required" });
      return;
    } else if (!us.trim()) {
      this.setState({ usernameError: "Username is required" });
      return;
    } else if (!pd.trim()) {
      this.setState({ passwordError: "Password is required" });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/login/', {
        username: us,
        password: pd,
      });

      if (response.status === 200) {
        this.setState({ submitForm: true });
        this.props.setIsAuthenticated(true);
        console.log("success");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const { status, data } = error.response;
        if (status === 404) {
          this.setState({ showSubmitError: true, usernameError: "User not found. Please sign up first." });
        } else if (status === 400) {
          if (data.detail.includes("Invalid password")) {
            this.setState({ showSubmitError: true, passwordError: "Password is incorrect", usernameError: "" });
          } else if (data.detail.includes("Invalid username")) {
            this.setState({ showSubmitError: true, usernameError: "Username is incorrect", passwordError: "" });
          } else {
            this.setState({ showSubmitError: true, errorMsg: data.detail });
          }
          // Show forgot password option if password is incorrect
          if (data.detail.includes("Invalid password")) {
            this.setState({ showForgotPassword: true });
          }
        } else {
          this.setState({ showSubmitError: true, errorMsg: "An error occurred. Please try again." });
        }
      } else {
        this.setState({ showSubmitError: true, errorMsg: "*Invalid Username or Password" });
      }
      console.log("login failed");
    }
  };

  onEnterUsername = (event) => {
    this.setState({ us: event.target.value, usernameError: "", errorMsg: "" });
  };

  onChangePassword = (event) => {
    this.setState({ pd: event.target.value, passwordError: "", errorMsg: "" });
  };

  render() {
    const { us, pd, showSubmitError, errorMsg, submitForm, usernameError, passwordError, showForgotPassword } = this.state;
    console.log(submitForm);
    return (
      <div className="jobby-app-container">
        <div className="card">
         
          <center>
            <h1 className="heading-login">Signin</h1>
          </center>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-container">
              <label className="label" htmlFor="userName">
                USERNAME
              </label>
              <input
                type="text"
                id="userName"
                placeholder="Username"
                className="user-input1"
                value={us}
                onChange={this.onEnterUsername}
                style={{ color: "white" }}
              />
              {usernameError && <p className="error-msg">{usernameError}</p>}
            </div>
            <div className="input-container">
              <label className="label" htmlFor="password">
                PASSWORD
              </label>
              <input
                className="user-input1"
                id="password"
                type="password"
                placeholder="Password"
                value={pd}
                onChange={this.onChangePassword}
              />
              {passwordError && <p className="error-msg">{passwordError}</p>}
            </div>
            {showSubmitError && !usernameError && !passwordError && (
              <p className="error-msg">{errorMsg}</p>
            )}
            {showForgotPassword && (
              <p className="forgot-password-msg">
                 <Link to="/forgot-password">Forgot your password?</Link>
              </p>
            )}
            <button className="login-button" type="submit">
              Login
            </button>
            <div className="signupp">
              <p className="nothave">Don't have an account</p>
              <Link to="/signup">
                <p className="signup-para">Signup</p>
              </Link>
            </div>
          </form>
          {submitForm ? <Navigate to="/Home" /> : null}
        </div>
      </div>
    );
  }
}

export default SignIn;