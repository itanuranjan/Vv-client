import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/BrowseByThemeTop.css";

const BrowseByThemeTop = () => {
  const categories = [
    "Tickets",
    "Tours",
    "Travel",
    "Cruises",
    "Entertainment",
    "Adventure",
    "Wildlife",
    "Wellness",
    "Classes",
    "Specials",
    "Staycations",
    "Sports",
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const sliderRef = useRef();

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    afterChange: (currentSlide) => setSelectedCategory(currentSlide),
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1344,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 4,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="theme-container1">
      <h1 className="h1-Browse">Browse By Themes</h1>
      <div className="categories-slider1">
        <Slider ref={sliderRef} {...settings}>
          {categories.map((category, index) => (
            <div
              key={index}
              className={`category ${
                selectedCategory === index ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(index)}
            >
              <Link className="link" to={`/category/${category}`}>
                {category}
              </Link>
            </div>
          ))}
        </Slider>
        {/* <hr></hr> */}
      </div>
    </div>
  );
};

export default BrowseByThemeTop;
