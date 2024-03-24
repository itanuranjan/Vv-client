// Card3.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Review.css";
import { Left, Right } from "../../MainHome/Arrows";
import { FaStar } from "react-icons/fa";

class ReviewsVaranasi extends React.Component {
  // Sample data for demonstration
  card3Data = [
    {
      id: 1,
      imageUrl: "https://ucarecdn.com/6100971e-ee32-4e35-8fd4-b70f7dfedd7f/varanasighat.jpg",
      // title: "Title 1",
      rating: 4,
      username: "Anuranjan",
      reviewText: "A review on softlist.io praises DeepAI's ability to explore different artistic styles and allow users to choose a distinct aesthetic. ",
    },
    {
      id: 2,
      imageUrl: "https://ucarecdn.com/d5820543-8dd8-49a9-b022-36ed4103f780/varanasiaarti.jpg",
      // title: "Title 2",
      rating: 5,
      username: "Rocky",
      reviewText: "A review on softlist.io praises DeepAI's ability to explore different artistic styles and allow users to choose a distinct aesthetic. ",
    },
    {
      id: 3,
      imageUrl: "https://ucarecdn.com/19cc03cb-6b76-47fb-a66a-1db56c7ea2b0/premmandir.jpg",
      // title: "Title 2",
      rating: 2,
      username: "Rocky",
      reviewText: "A review on softlist.io praises DeepAI's ability to explore different artistic styles and allow users to choose a distinct aesthetic. ",
    },
    {
      id: 4,
      imageUrl: "https://ucarecdn.com/6100971e-ee32-4e35-8fd4-b70f7dfedd7f/varanasighat.jpg",
      // title: "Title 2",
      rating: 3,
      username: "Rocky",
      reviewText: "A review on softlist.io praises DeepAI's ability to explore different artistic styles and allow users to choose a distinct aesthetic. ",
    },
    {
      id: 5,
      imageUrl: "https://ucarecdn.com/c77e1c6f-fe71-42c6-b175-3e00be16871e/rammandirdupli.jpg",
      // title: "Title 2",
      rating: 4,
      username: "Rocky",
      reviewText: "A review on softlist.io praises DeepAI's ability to explore different artistic styles and allow users to choose a distinct aesthetic. ",
    },
    // Add more sample data as needed
  ];

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
          {this.card3Data.map((card) => (
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
