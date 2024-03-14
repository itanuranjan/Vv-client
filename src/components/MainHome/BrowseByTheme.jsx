import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/BrowseByTheme.css";

const BrowseByTheme = () => {
  const categories = [
    "Tickets",
    "Tours",
    "Transportation",
    "Travel Services",
    "Cruises",
    "Food & Drink",
    "Entertainment",
    "Adventure",
    "Aerial Sight",
    "Water Sports",
    "Nature Wildlife",
    "Wellness",
    "Classes",
    "Specials",
    "Staycations",
    "Sports",
    "Theme Parks",
  ];

  const categoryItems = {
    Tickets: ["Item 1", "Item 2", "Item 3"],
    Tours: ["Item 4", "Item 5", "Item 6"],
    Transportation: ["Item 7", "Item 8", "Item 9"],
    "Travel Services": ["Item 1", "Item 2", "Item 3"],
    Cruises: ["Item 1", "Item 2", "Item 3"],
    "Food & Drink": ["Item 1", "Item 2", "Item 3"],
    Entertainment: ["Item 1", "Item 2", "Item 3"],
    Adventure: ["Item 1", "Item 2", "Item 3"],
    "Aerial Sight": ["Item 1", "Item 2", "Item 3"],
    "Water Sports": ["Item 1", "Item 2", "Item 3"],
    "Nature Wildlife": ["Item 1", "Item 2", "Item 3"],
    Wellness: ["Item 1", "Item 2", "Item 3"],
    Classes: ["Item 1", "Item 2", "Item 3"],
    Specials: ["Item 1", "Item 2", "Item 3"],
    Staycations: ["Item 1", "Item 2", "Item 3"],
    Sports: ["Item 1", "Item 2", "Item 3"],
    "Theme Parks": ["Item 1", "Item 2", "Item 3"],
  };

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
    <div className="theme-container">
      <h1>Browse By Themes</h1>
      <div className="categories-slider">
        <Slider ref={sliderRef} {...settings}>
          {categories.map((category, index) => (
            <div
              key={index}
              className={`category ${
                selectedCategory === index ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(index)}
            >
              {category}
            </div>
          ))}
        </Slider>
        <hr></hr>
      </div>
      <div className="items">
        {selectedCategory !== null &&
          categoryItems[categories[selectedCategory]].map((item, index) => (
            <div key={index} className="item">
              <Link to={`/category/${categories[selectedCategory]}/${item}`}>{item}</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BrowseByTheme;
