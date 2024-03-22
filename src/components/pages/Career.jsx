// CareerPage.js

import React from 'react';
import CareerForm from './CareerForm';
import '../Styles/Career.css';

const CareerPage = () => {
  return (
    <div className="career-page">
      <h1>Careers at VentureVibe</h1>
      <p>Join our team of talented individuals who are passionate about innovation and technology.</p>
      <div className="positions">
        <CareerForm position="Frontend Developer" />
        <CareerForm position="Backend Developer" />
        <CareerForm position="Dev Ops" />
        <CareerForm position="SEO" />
        <CareerForm position="Marketing" />
      </div>
    </div>
  );
};

export default CareerPage;
