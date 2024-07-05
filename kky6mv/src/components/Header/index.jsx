import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaSignOutAlt } from "react-icons/fa"; // Import the Font Awesome icons
import "./index.css";

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="student-pic"
        src="https://herobot.app/wp-content/uploads/2022/11/AI-bot-1.jpg"
      />
      <p className="nav-para">AIMASTERHUB</p>
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/Home">
          <span className="i span">Home</span> <FaHome className="icon" />
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/aboutus">
          <FaInfoCircle className="icon" />{" "}
          <span className="i span">About</span>
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/Footer">
          <FaInfoCircle className="icon" />{" "}
          <span className="i span">Footer</span>
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/">
          <button type="button" className="logout i">
            Logout
          </button>
          <FaSignOutAlt className="icon" />
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;