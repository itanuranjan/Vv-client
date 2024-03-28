import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/CardCarousel.css';
import { Left, Right } from './Arrows';
import { citiesData } from './Image';

const ResponsiveCardCarousel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userdbToken = localStorage.getItem('userdbtoken');
    setIsLoggedIn(!!userdbToken); // Convert to boolean
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      window.location.href = '/admin/addhome/topcities';
    } else {
      window.location.href = '/login';
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1344,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          nextArrow: <Right />,
          prevArrow: <Left />,
        },
      },
    ],
  };

  return (
    <div className="responsive-card-carousel-wrapper" id="cities">
      <h3 style={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between' }}>
        <span>Top cities to visit India</span>
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
    ></span>Add Missing Places
        </button>
      </h3>

      <Slider {...settings}>
        {citiesData.map((city) => (
          <Link key={city.id} to={`/cities/${city.route}`} className="card-link">
            <div className="card">
              <img src={city.imageUrl} alt={city.title} />
              <h3>{city.title}</h3>
              <p>{city.description}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ResponsiveCardCarousel;
