import { useState } from "react";
import { NavLink } from "react-router-dom";
import SignInForm from "../pages/Login"; // Import your SignInForm component
import "./navbar1.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSignInPopup, setShowSignInPopup] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleShowSignInPopup = () => {
    setShowSignInPopup(!showSignInPopup);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1><NavLink to="/">VentureVibes</NavLink></h1>
        </div>

        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
            <li>
              <button className="btn1" onClick={handleShowSignInPopup}> Sign in</button>
            </li>
          </ul>
        </div>
      </div>
      

      {showSignInPopup && <SignInForm onClose={handleShowSignInPopup} />}
    </nav>
  );
};

export default Navbar;
