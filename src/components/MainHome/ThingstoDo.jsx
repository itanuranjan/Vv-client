import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/ThingstoDo.css";
import { Left, Right } from "./Arrows";
import { card3Data } from "./Image";

const ThingstoDo = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userdbToken = localStorage.getItem("userdbtoken");
    setIsLoggedIn(!!userdbToken); // Convert to boolean
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      window.location.href = "/admin/addhome/thingstodo";
    } else {
      window.location.href = "/login";
    }
  };

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
      <h3 style={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between' }}>Things to Do in India
      <button
        onClick={handleButtonClick}
        className="admin-link-button"
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "5px 10px",
          borderRadius: "5px",
          textDecoration: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span
      style={{ fontSize: '20px' }}
      dangerouslySetInnerHTML={{ __html: '&#8594;' }}
    ></span> Add Missing Activities
      </button>
      </h3>
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
};

export default ThingstoDo;
