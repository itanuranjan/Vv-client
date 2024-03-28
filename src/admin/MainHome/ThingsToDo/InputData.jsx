// src/App.js
import React, { useState } from "react";
import '../../InputData.css';
import axios from "axios";

function InputData() {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    imageUrl: "",
    route: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://venturevibe-server.onrender.com/api/thingstodo", formData)
      .then((response) => {
        alert("Data added successfully:", response.data);
        setFormData({
          title: "",
          city: "",
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
      <h1>Add Things To Do Data</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input className="input-data" type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>City:</label>
          <input className="input-data" type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Image URL:</label>
          <input className="input-data" type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Route:</label>
          <input className="input-data" type="text" name="route" value={formData.route} onChange={handleChange} required />
        </div>

        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};


export default InputData;
