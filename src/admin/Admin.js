// Admin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const [mainHomeExpanded, setMainHomeExpanded] = useState(false);

  const toggleMainHome = () => {
    setMainHomeExpanded(!mainHomeExpanded);
  };

  return (
    <div className='admin-container'>
      <h1>Hello! Admin</h1>
      <div>
        <div className="admin-btn" onClick={toggleMainHome}>
          Add MainHome Data
        </div>
        {mainHomeExpanded && (
          <div>
            <Link to="/admin/addhome/hero" className="admin-btn sub-btn">
              Add Hero Section Data
            </Link>
            <Link to="/admin/addhome/topcities" className="admin-btn sub-btn">
              Add TopCities Data
            </Link>
            <Link to="/admin/addhome/toprecommendation" className="admin-btn sub-btn">
              Add TopRecommentation Data
            </Link>
            <Link to="/admin/addhome/thingstodo" className="admin-btn sub-btn">
              Add ThingstoDo Data
            </Link>
            <Link to="/admin/addhome/gallery" className="admin-btn sub-btn">
              Add Gallary Data
            </Link>
          </div>
        )}
      </div>
      <div>
        <Link to="/admin/addcities" className="admin-btn">
          Add Cities Data
        </Link>
      </div>
      {/* Add other links as needed */}
    </div>
  );
};

export default Admin;
