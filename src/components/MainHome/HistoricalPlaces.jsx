// Card3.jsx
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/HistoricalPlaces.css";
import { Left, Right } from "./Arrows";
import { card3Data } from "./Image";

class HistoricalPlaces extends React.Component {
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
      <div className="hcard-carousel-container">
        <h3>Historical places in India</h3>
        <Slider {...settings}>
          {card3Data.map((card) => (
            <Link
              key={card.id}
              to={`/activities/${card.route}`}
              className="hcard-link"
            >
              <div className="hcard">
                <img src={card.imageUrl} alt={card.title} />
              </div>
              <div className="hcard-discription">
                <h6>{card.title}</h6>
                <p>{card.city}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    );
  }
}

export default HistoricalPlaces;
