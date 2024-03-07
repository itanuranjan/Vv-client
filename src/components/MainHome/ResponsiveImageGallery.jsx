import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import '../Styles/ResponsiveImageGallery.css';
import { memoriesimages } from "./Image";

const ResponsiveImageGallery = () => {
  return (
    
    <div className="responsive-gallery-container">
    <h2>Our Memories</h2>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 3, 750: 2, 900: 6 }}>
        <Masonry gutter="10px">
          {memoriesimages.map((image, i) => (
            <div key={i} className="responsive-gallery-column">
              <img
                src={image}
                className="responsive-gallery-image"
                alt={`${i + 1}`}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ResponsiveImageGallery;
