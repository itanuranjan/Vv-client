// Gallery.js

import React, { useState } from 'react';
import '../Styles/Gallary.css';

const Gallery = () => {
  const images = [
    "https://ucarecdn.com/d3ab2f68-48e0-4f98-bf7b-e6418633b35a/BharatKalaBhavanMuseum.jpeg",
      "https://ucarecdn.com/d5820543-8dd8-49a9-b022-36ed4103f780/varanasiaarti.jpg",
      "https://ucarecdn.com/6100971e-ee32-4e35-8fd4-b70f7dfedd7f/varanasighat.jpg",
      "https://ucarecdn.com/ca915ba0-5ae8-4cef-b498-4dbb949f8755/ManikarnikaGhat.jpg",
      "https://ucarecdn.com/10a9164f-430e-4086-8b1e-e55e53b2a576/ManmandirGhat.jpg",
      "https://ucarecdn.com/b570d4db-cf15-4eda-bcdb-8327f6563166/AssiGhat.jpg",
      "https://ucarecdn.com/3ca1ca93-c96f-4cf1-a9cb-084b2e605939/Snapchat1236441475.jpg",
      "https://ucarecdn.com/583401cd-12d9-4c98-9262-4ec7fc4fa589/Snapchat1069723154.jpg",
      "https://ucarecdn.com/2fca9dc5-b89b-4528-bbd7-fa83f21d0837/Snapchat931780964.jpg",
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
