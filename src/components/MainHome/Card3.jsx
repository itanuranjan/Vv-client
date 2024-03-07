// Card3.jsx
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Card3.css";
import { Left, Right } from "./Arrows";

class Card3 extends React.Component {
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

    const cardData = [
      {
        id: 1,
        title: "Experience Varanasi at dawn",
        city: "Varanasi",
        imageUrl:
          "https://ucarecdn.com/697fe313-40bc-4050-8f26-caade0b8f8d3/varanasi.jpg", // Replace with your actual image URL
        route: "new-york",
      },
      {
        id: 2,
        title: "Set your eyes – and lens – on the iconic Taj Mahal",
        city: "Agra",
        imageUrl:
          "https://ucarecdn.com/7ae6a4df-314f-476a-b7f3-44627fa153da/TajMahalAgra.jpg", // Replace with your actual image URL
        route: "card-2",
      },
      {
        id: 3,
        title: "world’s largest mangrove forests in the Sundarbans",
        city: "Bay of Bengal",
        imageUrl:
          "https://ucarecdn.com/960d4ba1-dfc0-4dfa-8fb0-30e2e8ef044d/Sundarwan.jpg", // Replace with your actual image URL
        route: "card-3",
      },
      {
        id: 4,
        title: "Camp under the stars in the Thar Desert",
        city: "Rajasthan",
        imageUrl:
          "https://ucarecdn.com/0652593a-2213-473d-88b1-0cd6db9e60da/thardesert.jpg", // Replace with your actual image URL
        route: "card-4",
      },
      {
        id: 5,
        title: "Spend a day at Raghurajpur Arts and Crafts Village",
        city: "Odisha",
        imageUrl:
          "https://ucarecdn.com/9a88c135-ac89-47cf-a3e5-0a9a655b2ac4/raghurajourpainting.jpg", // Replace with your actual image URL
        route: "card-5",
      },
      // Add more cards as needed
    ];

    return (
      <div className="card3-carousel-container">
        <h3>Top Activities to Do</h3>
        <Slider {...settings}>
          {cardData.map((card) => (
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

export default Card3;
