import React, { useRef } from 'react';
import '../Styles/TourPackage.css';

const TourPackageCard = ({ imgSrc, price, offer, placeName, placeCity }) => {
  return (
    <div className="tour-package-card" id='packages'>
      <div className="offer">{offer}</div>
      <img src={imgSrc} alt={placeName} />
      <div className="pdetails">
        <h4>{placeName}</h4>
        <p>{placeCity}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

// AllPlacesPackages component
const AllPlacesPackages = () => {
  const scrollRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  // Assuming data for different tour packages
  const tourPackages = [
    {
      imgSrc: 'https://ucarecdn.com/ae4bdacb-4ece-4ea3-a5a4-75e23e99e2a6/Haridwar.jpg',
      price: 1000,
      offer: '10% off',
      placeName: 'Varanasi',
      placeCity: 'Example City 1',
    },
    {
      imgSrc: 'https://ucarecdn.com/ae4bdacb-4ece-4ea3-a5a4-75e23e99e2a6/Haridwar.jpg',
      price: 1200,
      offer: '20% off',
      placeName: 'Delhi',
      placeCity: 'Example City 2',
    },
    {
      imgSrc: 'https://ucarecdn.com/ae4bdacb-4ece-4ea3-a5a4-75e23e99e2a6/Haridwar.jpg',
      price: 1500,
      offer: '15% off',
      placeName: 'Agra',
      placeCity: 'Example City 3',
    },
    {
      imgSrc: 'https://ucarecdn.com/ae4bdacb-4ece-4ea3-a5a4-75e23e99e2a6/Haridwar.jpg',
      price: 1500,
      offer: '15% off',
      placeName: 'Rishikesh',
      placeCity: 'Example City 3',
    },
    {
      imgSrc: 'https://ucarecdn.com/ae4bdacb-4ece-4ea3-a5a4-75e23e99e2a6/Haridwar.jpg',
      price: 1500,
      offer: '15% off',
      placeName: 'Mumbai',
      placeCity: 'Example City 3',
    },
  ];

  return (
    <div className="all-places-packages">
      <div className="left-section">
      
      <button className="prev" onClick={() => handleScroll(-150)}>&#10094;</button>
        <button className="next" onClick={() => handleScroll(150)}>&#10095;</button>
        <h1>Tour Package</h1>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rerum!</p> */}
        
      
      </div>
      <div className="right-section">
        <div className="carousel">
         
          <div className="scroll-container" ref={scrollRef}>
            {tourPackages.map((tourPackage, index) => (
              <TourPackageCard key={index} {...tourPackage} />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AllPlacesPackages;
