import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/TopRecommendations.css'; // Change the CSS file name
import { Left, Right } from './Arrows';
import { TopRecommendationscardData } from './Image';

class CustomCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedCardId: null,
    };
  }

  handleKnowMoreClick = (cardId) => {
    this.setState((prevState) => ({
      expandedCardId: prevState.expandedCardId === cardId ? null : cardId,
    }));
  };

  render() {
    const { expandedCardId } = this.state;

    const carouselSettings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.04,
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
      <div className="custom-carousel-wrapper">
        <h2>
          Top Recommendations <span className="red-heart">&#9825;</span>
        </h2>
        <Slider {...carouselSettings}>
          {TopRecommendationscardData.map((card) => (
            <Link key={card.id} to={`/cards/${card.route}`} className="custom-card-link">
              <div className={`custom-card ${expandedCardId === card.id ? 'expanded' : ''}`}>
                <img src={card.imageUrl} alt={card.title} />
                <h3>{card.title}</h3>
                <p>
                  {expandedCardId === card.id
                    ? card.fullDescription
                    : `${card.description.slice(0, 100)}...`}
                </p>
                {card.description.length > 100 && (
                  <button
                    className="read-more-btn"
                    onClick={() => this.handleKnowMoreClick(card.id)}
                  >
                    {expandedCardId === card.id ? 'Show Less' : 'Show More..'}
                  </button>
                )}
                <div className="custom-card-details">
                  <p>
                    Ratings<span className="red-star">★</span>: {card.ratings}
                  </p>
                  <p>Price: {card.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    );
  }
  
}

export default CustomCarousel;
