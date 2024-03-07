import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Images} from "./Image";
import "../Styles/hero.css";
import Searchbar from "./Searchbar";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
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
      {/* Include the Searchbar component above the Slider */}
      <Searchbar />
      
      <div className="hero-section">
        <Slider {...settings}>
          {Images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} className="slider-image" />
              <div className="slider-content">
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;