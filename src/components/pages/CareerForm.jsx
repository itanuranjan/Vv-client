// CareerForm.js

import React, { useState } from 'react';

const CareerForm = ({ position }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend or handle submission here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: '',
    });
  };

  return (
    <div className="career-form">
      <h2>{position}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
        <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
        <textarea name="coverLetter" placeholder="Your Cover Letter" value={formData.coverLetter} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CareerForm;
