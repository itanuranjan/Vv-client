import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/TopRecommendations.css'; // Change the CSS file name
import { Left, Right } from './Arrows';
import { TopRecommendationscardData } from './Image';

const CustomCarousel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userdbToken = localStorage.getItem('userdbtoken');
    setIsLoggedIn(!!userdbToken); // Convert to boolean
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      window.location.href = '/admin/addhome/toprecommendation';
    } else {
      window.location.href = '/login';
    }
  };

  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleKnowMoreClick = (cardId) => {
    setExpandedCardId((prevId) => (prevId === cardId ? null : cardId));
  };

  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.04,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1344,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          nextArrow: <Right />,
          prevArrow: <Left />,
        },
      },
    ],
  };

  return (
    <div className="custom-carousel-wrapper" id='recoment'>
      <h3 style={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between' }}>
        Top Recommended Places <span className="red-heart">&#9825;</span>
      
      <button
        onClick={handleButtonClick}
        className="admin-link-button"
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '5px',
          textDecoration: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
       <span
      style={{ fontSize: '20px' }}
      dangerouslySetInnerHTML={{ __html: '&#8594;' }}
    ></span> Add Missing Places
      </button>
      </h3>
      <Slider {...carouselSettings}>
        {TopRecommendationscardData.map((card) => (
          <Link key={card.id} to={`/places/${card.route}`} className="custom-card-link">
            <div className={`custom-card ${expandedCardId === card.id ? 'expanded' : ''}`}>
              <img src={card.imageUrl} alt={card.title} />
              <h3>{card.title}</h3>
              <p>
                {expandedCardId === card.id
                  ? card.fullDescription
                  : `${card.description.slice(0, 90)}...`}
              </p>
              {card.description.length > 100 && (
                <button
                  className="read-more-btn"
                  onClick={() => handleKnowMoreClick(card.id)}
                >
                  {expandedCardId === card.id ? 'Show Less' : 'Show More..'}
                </button>
              )}
              <div className="custom-card-details">
                <p>
                  Ratings<span className="red-star">★</span>: {card.ratings}
                </p>
                <p>Price: {card.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default CustomCarousel;
