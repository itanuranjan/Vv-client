// src/App.js
import React, { useState } from "react";
import '../../InputData.css';
import axios from "axios";

function InputData() {
  const [formData, setFormData] = useState({
    src: "",
    alt: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/hero", formData)
      .then((response) => {
        alert("Data added successfully:", response.data);
        setFormData({
          src: "",
          alt: "",
        });
      })
      .catch((error) => {
        console.error("Error adding city:", error);
      });
  };

  return (
    <div className="add-city-container">
      <h1>Add Hero Section Images</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Image URL/Src:</label>
          <input className="input-data" type="text" name="src" value={formData.src} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Alt/ Image Name :</label>
          <input className="input-data" type="text" name="alt" value={formData.alt} onChange={handleChange} required />
        </div>

        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};


export default InputData;
