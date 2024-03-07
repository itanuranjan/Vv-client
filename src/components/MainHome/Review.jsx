// Review.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/CustomReviewCard.css'; // Import your CSS file
import { Left, Right } from './Arrows';

const CustomerReviewCard = ({ reviewerName, rating, reviewText, timestamp, imageUrl }) => {
  return (
    <div className="customer-review-card">
      <div className="card-content">
        <div className="review-header">
          <h3>{reviewerName}</h3>
          <p>{timestamp}</p>
        </div>
        <div className="rating">{`Rating: ${rating}`}</div>
        <div className="review-text">{reviewText}</div>
      </div>
    </div>
  );
};

CustomerReviewCard.propTypes = {
  reviewerName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewText: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const Review = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviewsData = [
    {
      reviewerName: 'John Doe',
      rating: 4.5,
      reviewText: 'This is a great product!',
      timestamp: '2024-03-07',
      imageUrl: 'https://placekitten.com/300/200',
    },
    // Add more reviews as needed
  ];

  return (
    <div className="customer-reviews-container">
      <h1>Customer Reviews</h1>
      <Slider {...settings}>
        {reviewsData.map((review, index) => (
          <CustomerReviewCard key={index} {...review} />
        ))}
      </Slider>
    </div>
  );
};

export default Review;
