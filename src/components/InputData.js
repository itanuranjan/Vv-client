// src/App.js
import React, { useState } from "react";
import './InputData.css';
import axios from "axios";

function InputData() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    route: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/cities", formData)
      .then((response) => {
        alert("City added successfully:", response.data);
        setFormData({
          title: "",
          description: "",
          imageUrl: "",
          route: "",
        });
      })
      .catch((error) => {
        console.error("Error adding city:", error);
      });
  };

  return (
    <div className="add-city-container">
      <h1>Add City</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input className="input-data" type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <input className="input-data" type="text" name="description" value={formData.description} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Image URL:</label>
          <input className="input-data" type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Route:</label>
          <input className="input-data" type="text" name="route" value={formData.route} onChange={handleChange} required />
        </div>

        <button className="btn" type="submit">Add City</button>
      </form>
    </div>
  );
};


export default InputData;
