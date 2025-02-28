import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ FullNav, showFullNav }) {
  return (
    <div className="navbar">
      <img src="" alt="logo" className="logo" />
      <div className="navbar-div-list">
        {FullNav ? (
          <ul className="navbar-list">
            <Link to="/">
              <li>Home</li>
            </Link>
            <a href="#stats-container">Features</a>
            <a href="#revi-container">Reviews</a>
            <a href="#footer-section">Contact</a>
          </ul>
        ) : (
          <></>
        )}
      </div>
      <div className="navbar-buttons">
        {FullNav ? (
          <>
            <Link to="/login">
              <button
                onClick={() => {
                  showFullNav(false);
                }}
              >
                SignIn
              </button>
            </Link>
            <Link to="/admin-login">
              <button
                onClick={() => {
                  showFullNav(false);
                }}
              >
                Admin
              </button>
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
