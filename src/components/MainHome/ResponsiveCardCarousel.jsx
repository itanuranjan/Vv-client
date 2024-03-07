import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/CardCarousel.css';
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
            slidesToShow: 2.06,
            slidesToScroll: 2,
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
        title: 'Himachal',
        description: '"Mountain State" and "Dev Bhumi"',
        imageUrl: 'https://ucarecdn.com/fd61b641-ffe3-4485-abca-8bf4bc2f4a00/Himachal.jpg', // Replace with your actual image URL
        route: 'new-york',
      },
      {
        id: 2,
        title: 'Uttrakhand',
        description: 'Devbhoomi, or "the land of the gods"',
        imageUrl: 'https://ucarecdn.com/a11b9bff-21c5-4f36-994a-73feb423d66c/Uttrakhand.jpg', // Replace with your actual image URL
        route: 'card-2',
      },
      {
        id: 3,
        title: 'Chandigarh',
        description: 'The City Beautiful',
        imageUrl: 'https://ucarecdn.com/03d93cbd-c7f6-4e86-844f-1faaec2da83e/Chandigarh.jpeg', // Replace with your actual image URL
        route: 'card-3',
      },
      {
        id: 4,
        title: 'Delhi',
        description: '"City of Hearts" and "Mini India"',
        imageUrl: 'https://ucarecdn.com/d77e533c-c13e-4c87-a803-56f2a34b882c/Delhi.jpg', // Replace with your actual image URL
        route: 'card-4',
      },
      {
        id: 5,
        title: 'Bihar',
        description: 'Land of Monasteries',
        imageUrl: 'https://ucarecdn.com/66c1970e-8682-4b19-b9c6-231591f2d85e/Bihar.jpg', // Replace with your actual image URL
        route: 'card-5',
      },
      // Add more cards as needed
    ];

    return (
      <div className="responsive-card-carousel-wrapper">
        <h3>India's Top Destinations</h3>
        <Slider {...settings}>
          {cardData.map((card) => (
            <Link key={card.id} to={`/cards/${card.route}`} className="card-link">
              <div className="card">
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