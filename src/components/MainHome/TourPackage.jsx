import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Styles/TourPackage.css';
import { tourPackages } from "./Image";

const TourPackageCard = ({ imgSrc, price, offer, placeName, placeCity, route }) => {
  const handleBook = () => {
    // Here you can navigate to the booking page with a dynamic route
    // For simplicity, let's just log a message
    console.log(`Book ${placeName}`);
  };

  return (
    <div className="tour-package-card" id='packages'>
      <div className="offer">{offer}</div>
      <img src={imgSrc} alt={placeName} />
      <div className="pdetails">
        <h4>{placeName}</h4>
        <p>{placeCity}</p>
        <p>Price: ${price}</p>
        <Link to={`/book/${route}`}><button onClick={handleBook}>Book Now</button></Link>
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

  return (
    <div className="all-places-packages">
      <div className="left-section">
        <button className="prev" onClick={() => handleScroll(-150)}>&#10094;</button>
        <button className="next" onClick={() => handleScroll(150)}>&#10095;</button>
        <h1>Tour Package</h1>
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
