import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/CardCarousel.css";
import { Left, Right } from "./Arrows";
import { citiesData } from "./Image"; // Import city data from Image.js

class ResponsiveCardCarousel extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0, // Set initialSlide for smaller screens
          },
        },
        {
          breakpoint: 1344,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            nextArrow: <Right />,
            prevArrow: <Left />,
          },
        },
      ],
    };

    return (
      <div className="responsive-card-carousel-wrapper" id="cities">
        <h3>Top cities to visit in India</h3>
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
  }
}

export default ResponsiveCardCarousel;
