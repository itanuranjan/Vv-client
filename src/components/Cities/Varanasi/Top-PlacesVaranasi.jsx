import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Top-PlacesVaranasi.css'; 
import { Left, Right } from '../../MainHome/Arrows';
import { TopPlacesVaranasi } from "./Images";

class TopPlaceVaranasi extends React.Component {
  render() {
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
      <div className="custom-carousel-wrapper">
        <h2>Top Places in Varanasi <span class="red-heart">&#9825;</span></h2>
        <Slider {...carouselSettings}>
          {TopPlacesVaranasi.map((card) => (
            <Link key={card.id} to={`/cards/${card.route}`} className="custom-card-link">
              <div className="custom-card">
                <img src={card.imageUrl} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="custom-card-details">
                  <p>Ratings<span class="red-star">★</span>: {card.ratings}</p>
                  <p>Price: {card.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    );
  }
}

export default TopPlaceVaranasi;
