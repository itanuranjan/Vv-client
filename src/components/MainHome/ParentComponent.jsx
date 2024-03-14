import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from '../Navbar/Navbar1';
import Otp from '../pages/Otp';

const ParentComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />
      <Otp onLoginSuccess={handleLogin} />
      {/* Other components */}
      <ToastContainer />
    </div>
  );
};

export default ParentComponent;
