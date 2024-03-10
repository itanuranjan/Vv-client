// Admin.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  return (
    <div className='admin-container'>
      <h1>Admin Page</h1>
      <div>
        <Link to="/admin/add" className="admin-btn">
          Add Data
        </Link>
      </div>
      <div>
        <Link to="/admin/remove" className="admin-btn">
          Remove Data
        </Link>
      </div>
      <div>
        <Link to="/admin/show" className="admin-btn">
          Show Data
        </Link>
      </div>
      <div>
        <Link to="/admin/all" className="admin-btn">
          All Data
        </Link>
      </div>
    </div>
  );
};

export default Admin;
