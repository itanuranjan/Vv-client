import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./navbar1.css";
import logoImage from "../../assets/vv-logo.png";

const Navbar = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [welcomeMessageDisplayed, setWelcomeMessageDisplayed] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userdbtoken");
    const email = localStorage.getItem("email");
    setUserLoggedIn(token !== null);
    setUserEmail(email || "");

    if (token !== null && !welcomeMessageDisplayed) {
      setShowWelcomeMessage(true);
      setWelcomeMessageDisplayed(true);
      setTimeout(() => {
        setShowWelcomeMessage(false);
      }, 1000);
    }
  }, [location, welcomeMessageDisplayed]);

  const handleLogout = () => {
    localStorage.removeItem("userdbtoken");
    localStorage.removeItem("email");
    setUserLoggedIn(false);
    setUserEmail("");
    setWelcomeMessageDisplayed(false);
    window.location.href = "/";
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
          <img
            src={logoImage}
            alt="VentureVibes Logo"
            // style={{ height: "40px", width: "60px" }} 
          />
          <h2>
            <NavLink to="/">VentureVibe</NavLink>
          </h2>
        </div>

        <div className="nav-elements">
          <ul>
            {userLoggedIn ? (
              <li>
                <div
                  className="user-profile"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {displayUserName()}
                  {dropdownOpen && (
                    <div className="dropdown-menu">
                      <NavLink className="drpdn-profile" to="/profile">Profile</NavLink>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </div>
              </li>
            ) : (
              <li>
                <NavLink className="login-btn" to="/login">
                  Login
                </NavLink>
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
