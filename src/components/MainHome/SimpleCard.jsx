import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; // Import Link
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SimpleCardImages } from "./Image";
import "../Styles/SimpleCard.css";

const SimpleCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="simplecard-container">
        <h3>Most Visited Places</h3>
        <Slider {...settings}>
          {SimpleCardImages.map((item) => (
            <div key={item.id}>
              <div className="simplecard">
                {/* Wrap the image with Link */}
                <Link to={`/place/${item.route}`}>
                  <div className="simplecard-content">
                    <h3 className="cardtitle">{item.title}</h3>
                    <p className="cardcity">{item.city}</p>
                  </div>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="simplecardslider-image"
                  />
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimpleCard;
