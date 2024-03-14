import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "./navbar1.css";

const Navbar1 = (props) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h2><NavLink to="/">VentureVibes</NavLink></h2>
        </div>

        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
            <li>
              {props.userInfo ? (
                <NavLink to="/profile">{props.userInfo.name}</NavLink>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
      
      <ToastContainer />
    </nav>
  );
};

export default Navbar1;
