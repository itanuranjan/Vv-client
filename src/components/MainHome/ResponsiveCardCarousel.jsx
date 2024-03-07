import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/CardCarousel.css";
import { Left, Right } from "./Arrows";
import { cardData } from "./Image";

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
            slidesToShow: 2.06,
            slidesToScroll: 2,
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
      <div className="responsive-card-carousel-wrapper">
        <h3>India's Top Destinations</h3>
        <Slider {...settings}>
          {cardData.map((cities) => (
            <Link
              key={cities.id}
              to={`/cities/${cities.route}`}
              className="card-link"
            >
              <div className="card">
                <img src={cities.imageUrl} alt={cities.title} />
                <h3>{cities.title}</h3>
                <p>{cities.description}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    );
  }
}

export default ResponsiveCardCarousel;
