import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/BrowseByThemeTop.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const BrowseByThemeTop = () => {
  const categories = [
    "Cities",
    "Packages",
    "Recoment",
    "WhyWe",
    "Things",
    "Historical",
    "PkgExpense",
    "Review",
    "Quotes",
    "Faqs",
    "Query",
    "Calculator",
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
    slidesToShow: 8,
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
          slidesToShow: 8,
          slidesToScroll: 4,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="theme-container1">
      {/* <h1 className="h1-Browse">Browse By Themes</h1> */}
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
              <AnchorLink
                className="link"
                href={`#${category.toLowerCase()}`}
                offset={() => 100} // Adjust the offset if necessary
              >
                {category}
              </AnchorLink>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrowseByThemeTop;
