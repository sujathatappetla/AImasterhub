import React, { useState } from "react";
import axios from "axios";
import "./index.css"; // Import your CSS file

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/forgot-password/", {
        username,
        new_password: newPassword,
      });

      if (response.status === 200) {
        setSuccessMsg("Password updated successfully");
        setErrorMsg("");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMsg(error.response.data.detail);
      } else {
        setErrorMsg("An error occurred. Please try again.");
      }
      setSuccessMsg("");
    }
  };

  return (
    <div className="jobby-app-containerf"> {/* Applied 'jobby-app-container' class */}
      <div className="cardf"> {/* Applied 'card' class */}
       
        <h1 className="heading-loginf">Reset Password</h1> {/* Applied 'heading-login' class */}
        <form onSubmit={handleSubmit} className="form-containerf"> {/* Applied 'form-container' class */}
          <div className="input-containerf">
            <label htmlFor="username" className="labelf">Username</label> {/* Applied 'label' class */}
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="user-input1f" // Applied 'user-input1' class
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="input-containerf">
            <label htmlFor="newPassword" className="labelf">New Password</label> {/* Applied 'label' class */}
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="user-input1f" // Applied 'user-input1' class
              placeholder="Enter your new password"
              required
            />
          </div>
          {errorMsg && <p className="error-msgf">{errorMsg}</p>} {/* Applied 'error-msg' class */}
          {successMsg && <p className="success-msgf">{successMsg}</p>} {/* Applied 'success-msg' class */}
          <button type="submit" className="login-buttonf">Reset Password</button> {/* Applied 'login-button' class */}
        </form>
        
        
      </div>
    </div>
  );
};

export default ForgotPassword;
