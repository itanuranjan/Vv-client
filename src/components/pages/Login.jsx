import React from "react";
import "./Login.css";

const SignInForm = ({ onClose }) => {
  return (
    <div className="signin-popup">
      <div className="signin-content">
        <div className="close-icon" onClick={onClose}>
          <i className="fas fa-times"></i>
        </div>
        <form action="#" className="sign-in-form">
          <h2 className="title">Welcome</h2>
          <p>Sign in to get cashback as credits, insider-only offers and exclusive deals</p>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" className="btn solid" />
          <p className="social-text">Or Sign in with social platforms</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
