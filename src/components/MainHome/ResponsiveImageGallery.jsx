import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import '../Styles/ResponsiveImageGallery.css';

const images = [
  'https://unsplash.it/200/300?image=1050',
  'https://unsplash.it/200/300?image=1050',
  'https://unsplash.it/200/300?image=1050',
  'https://unsplash.it/200/300?image=1050',
  'https://unsplash.it/200/300?image=1050',
  'https://unsplash.it/200/300?image=1050',
  'https://unsplash.it/200/300?image=1050',
  'https://unsplash.it/200/300?image=1050',
  'https://unsplash.it/200/300?image=1050',
  'https://unsplash.it/200/300?image=1050',
  'https://unsplash.it/200/300?image=1050',
  'https://unsplash.it/200/300?image=1050',
  // 'https://unsplash.it/200/300?image=1050',
  // 'https://unsplash.it/200/300?image=1050',
  // 'https://unsplash.it/400/400?image=1039',
  // 'https://unsplash.it/400/300?image=1017',
  // 'https://unsplash.it/200/200?image=997',
  // 'https://unsplash.it/500/400?image=287',
  // 'https://unsplash.it/400/500?image=955',
  // 'https://unsplash.it/200/300?image=916',
  // 'https://unsplash.it/300/300?image=110',
  // 'https://unsplash.it/300/300?image=206',
];

const ResponsiveImageGallery = () => {
  return (
    
    <div className="responsive-gallery-container">
    <h2>Image Galary</h2>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 3, 750: 2, 900: 6 }}>
        <Masonry gutter="10px">
          {images.map((image, i) => (
            <div key={i} className="responsive-gallery-column">
              <img
                src={image}
                className="responsive-gallery-image"
                alt={`Image ${i + 1}`}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ResponsiveImageGallery;
