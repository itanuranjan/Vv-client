// Gallery.js
import React from 'react';
import styled from 'styled-components';

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;



const defaultImage = [
    'https://unsplash.it/200/300?image=1050',
    'https://unsplash.it/400/400?image=1039',
    // 'https://unsplash.it/400/300?image=1017',
    'https://unsplash.it/200/200?image=997',
    'https://unsplash.it/500/400?image=287',
    'https://unsplash.it/400/500?image=955',
    'https://unsplash.it/200/300?image=916',
    // 'https://unsplash.it/300/300?image=110',
    // 'https://unsplash.it/300/300?image=206',
  ];

const Gallery = ({ images }) => {
  const allImages = [defaultImage, ...images];

  return (
    <GalleryWrapper>
      {allImages.map((image, index) => (
        <Image key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </GalleryWrapper>
  );
};

export default Gallery;
