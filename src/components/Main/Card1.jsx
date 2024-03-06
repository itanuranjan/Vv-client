import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardCarousel.css';
import { Left, Right } from './Arrows';
// import NewYork from './NewYork';

class ResponsiveCardCarousel extends React.Component {
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
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            nextArrow: <Right />,
        prevArrow: <Left />,
          }
        },
      ],
    };

    const cardData = [
      {
        id: 1,
        title: 'Card 1',
        description: 'Description for Card 1',
        imageUrl: 'https://placekitten.com/300/200', // Replace with your actual image URL
        route: './new-york',
      },
      {
        id: 2,
        title: 'Card 2',
        description: 'Description for Card 2',
        imageUrl: 'https://placekitten.com/300/200', // Replace with your actual image URL
        route: 'card-2',
      },
      {
        id: 3,
        title: 'Card 3',
        description: 'Description for Card 3',
        imageUrl: 'https://placekitten.com/300/200', // Replace with your actual image URL
        route: 'card-3',
      },
      {
        id: 4,
        title: 'Card 4',
        description: 'Description for Card 4',
        imageUrl: 'https://placekitten.com/300/200', // Replace with your actual image URL
        route: 'card-4',
      },
      {
        id: 5,
        title: 'Card 5',
        description: 'Description for Card 5',
        imageUrl: 'https://placekitten.com/300/200', // Replace with your actual image URL
        route: 'card-5',
      },
      // Add more cards as needed
    ];

    return (
      <div className="responsive-card-carousel-wrapper">
      <h3>Explore India's Top Destinations</h3>
        <Slider {...settings}>
          {cardData.map((card) => (
            <Link key={card.id} to={`/cards/${card.route}`} className="card-link">
              <div className="card" >
                <img src={card.imageUrl} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    );
  }
}

export default ResponsiveCardCarousel;
