// src/App.js
import React, { useState } from "react";
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
        console.log("City added successfully:", response.data);
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
    <div>
      <h1>Add City</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} required />

        <label>Image URL:</label>
        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />

        <label>Route:</label>
        <input type="text" name="route" value={formData.route} onChange={handleChange} required />

        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default InputData;
