import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import './VaranasiImageGallary.css';
import { varanasiimagegallary } from "./Images";

const VaranasiImageGallary = () => {
  return (
    
    <div className="image-gallery-container" id='gallery'>
    <h2>Varanasi Image Gallery</h2>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}>
        <Masonry gutter="10px">
          {varanasiimagegallary.map((image, i) => (
            <div key={i} className="image-gallery-column">
              <img
                src={image}
                className="image-gallery-image"
                alt={`${i + 1}`}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default VaranasiImageGallary;
