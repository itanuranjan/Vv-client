// Card3.jsx
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/ThingstoDo.css";
import { Left, Right } from "./Arrows";
import { card3Data } from "./Image";

class ThingstoDo extends React.Component {
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
      <div className="card3-carousel-container" id="things">
        <h3>Things to Do in India</h3>
        <Slider {...settings}>
          {card3Data.map((card) => (
            <Link
              key={card.id}
              to={`/activities/${card.route}`}
              className="card3-link"
            >
              <div className="card3">
                <img src={card.imageUrl} alt={card.title} />
              </div>
              <div className="card3-dis">
                <h3>{card.title}</h3>
                <p>{card.city}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    );
  }
}

export default ThingstoDo;
