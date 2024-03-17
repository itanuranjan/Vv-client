import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "./navbar1.css";

const Navbar = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown menu
  const location = useLocation();
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  useEffect(() => {
      const token = localStorage.getItem("userdbtoken");
      const email = localStorage.getItem("email");
      setUserLoggedIn(token !== null);
      setUserEmail(email || "");

      // Show welcome message and remove after 10 seconds
    if (token !== null) {
      setShowWelcomeMessage(true);
      setTimeout(() => {
        setShowWelcomeMessage(false);
      }, 10000);
    }

  }, [location]);

  const handleLogout = () => {
      localStorage.removeItem("userdbtoken");
      localStorage.removeItem("email");
      setUserLoggedIn(false);
      setUserEmail("");
  };

  const displayUserName = () => {
    const atIndex = userEmail.indexOf("@");
    if (atIndex !== -1) {
      return userEmail.slice(0, atIndex); // Display only the part of email before '@'
    }
    return userEmail;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h2><NavLink to="/">VentureVibes</NavLink></h2>
        </div>

        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
            {userLoggedIn ? (
              <li>
                <div className="user-profile" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Hello, {displayUserName()} {/* Display user's name */}
                  {dropdownOpen && (
                    <div className="dropdown-menu">
                      <NavLink to="/profile">Profile</NavLink>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </div>
              </li>
            ) : (
              <li>
                <NavLink className="login-btn" to="/login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>

      {showWelcomeMessage && (
        <div className="welcome-message">
          <h2>Welcome, {displayUserName()}!</h2>
        </div>
      )}
      
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
