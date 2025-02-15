import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src="" alt="logo" className="logo" />
      <div className="navbar-div-list">
        <ul className="navbar-list">
          <Link to="/">
            <li>Home</li>
          </Link>
          <a href="#stats-container">Features</a>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar-buttons">
        <Link to="/login">
          <button>SignIn</button>
        </Link>
        <Link to="/admin-login">
          <button>Admin</button>
        </Link>
      </div>
    </div>
  );
}
