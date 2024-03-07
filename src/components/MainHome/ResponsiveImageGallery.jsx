import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import '../Styles/ResponsiveImageGallery.css';

const images = [
  // 'https://unsplash.it/200/300?image=1050',
  // 'https://unsplash.it/200/300?image=1050',
  // 'https://unsplash.it/200/300?image=1050',
  'https://ucarecdn.com/5bec9f05-99c0-4d75-9170-f7072d7fb432/Snapchat469456077.jpg',
  'https://ucarecdn.com/9831e1c8-c4a2-4cc4-a31e-6538175bd0f5/Snapchat677437992.jpg',
  'https://ucarecdn.com/2fca9dc5-b89b-4528-bbd7-fa83f21d0837/Snapchat931780964.jpg',
  'https://ucarecdn.com/583401cd-12d9-4c98-9262-4ec7fc4fa589/Snapchat1069723154.jpg',
  'https://ucarecdn.com/ff0d2481-e5e0-4d06-a46e-5fc677e7087e/Snapchat973452318.jpg',
  'https://ucarecdn.com/3ca1ca93-c96f-4cf1-a9cb-084b2e605939/Snapchat1236441475.jpg',
  'https://ucarecdn.com/3ede05e8-464f-42e4-9d3e-5cc502a07696/Snapchat1354236014.jpg',
  'https://ucarecdn.com/cd35a4fc-e08f-415f-b9e9-879c5da3272d/Snapchat1947586847.jpg',
  'https://ucarecdn.com/2950b212-f14e-4353-9b6e-8314a8194233/Snapchat1191276580.jpg',
  'https://ucarecdn.com/df7c5227-0d49-474c-b93a-858eec42eabd/Snapchat1885368327.jpg',
  'https://ucarecdn.com/8fd0ba2a-ebe2-4ad9-99d8-5c61ecc4bf67/Snapchat1165264034.jpg',
  'https://ucarecdn.com/a3cf3905-074d-4f92-8d02-da047b214431/Snapchat1236441475.jpg',
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
