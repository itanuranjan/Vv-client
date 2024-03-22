// Gallery.js

import React, { useState } from 'react';
import '../Styles/Gallary.css';

const Gallery = () => {
  const images = [
    'https://ucarecdn.com/fd4f2676-1408-47bb-a7ff-ceabaff1551f/Profile.jpg',
    'https://ucarecdn.com/fd4f2676-1408-47bb-a7ff-ceabaff1551f/Profile.jpg',
    'https://ucarecdn.com/fd4f2676-1408-47bb-a7ff-ceabaff1551f/Profile.jpg',
    'https://ucarecdn.com/fd4f2676-1408-47bb-a7ff-ceabaff1551f/Profile.jpg',
    'https://ucarecdn.com/fd4f2676-1408-47bb-a7ff-ceabaff1551f/Profile.jpg',
    'https://ucarecdn.com/fd4f2676-1408-47bb-a7ff-ceabaff1551f/Profile.jpg',
    'https://ucarecdn.com/fd4f2676-1408-47bb-a7ff-ceabaff1551f/Profile.jpg',
    // Add more image URLs here
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleCloseFullScreen = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item" onClick={() => handleImageClick(index)}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
      {selectedImage !== null && (
        <div className="fullscreen-overlay" onClick={handleCloseFullScreen}>
          <div className="fullscreen-image-container">
            <img src={images[selectedImage]} alt={`Image ${selectedImage + 1}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
