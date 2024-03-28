// Card3.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Review.css";
import { Left, Right } from "../../MainHome/Arrows";
import { FaStar } from "react-icons/fa";
import { varanasiplacesreview } from "./Images";

class ReviewsVaranasi extends React.Component {
 
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
            slidesToShow: 1.01,
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
            // prevArrow: <Left />,
          },
        },
      ],
    };

    return (
      <div className="review-card-container1" id="review">
        <h3 className="review-card-h1title" ><span class="red-star">★</span>Places Reviews <span class="red-star">★</span></h3>
        <Slider {...settings}>
          {varanasiplacesreview.map((card) => (
            <div key={card.id} className="review-card">
              <img src={card.imageUrl} alt={card.title} />
              <div className="review-card-body">
                <h5 className="review-card-title">{card.title}</h5>
                <div className="review-rating">
                  {[...Array(card.rating)].map((star, index) => (
                    <FaStar key={index} color="#ffc107" />
                  ))}
                </div>
                <p className="review-card-username">{card.username}</p>
                <p className="review-card-text">{card.reviewText}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default ReviewsVaranasi;
