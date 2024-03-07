import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/TopRecommendations.css'; // Change the CSS file name
import { Left, Right } from './Arrows';

class CustomCarousel extends React.Component {
  render() {
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

    const cardData = [
      {
        id: 1,
        title: 'Prem Mandir, Vrindavan',
        description: 'The temple was established by Jagadguru Shri Kripalu Ji Maharaj. It is maintained by Jagadguru Kripalu Parishat, an international non-profit, educational, spiritual, charitable trust.The temple was established by Jagadguru',
        imageUrl: 'https://ucarecdn.com/2d2ff2f4-0152-46b5-8fa0-a9de5028603d/PremMandir.jpg',
        route: 'new-york',
        ratings: 4.9,
        price: '$200',
      },
      {
        id: 2,
        title: 'Shri Ram Temple, Ayodhya',
        description: 'Ram Mandir, also known as the Shri Ram Janmabhoomi Mandir, is a Hindu temple complex under construction in Ayodhya.[94] The site is significant to Hindus as it is believed to be the birthplace of their revered deity Rama.',
        imageUrl: 'https://ucarecdn.com/8c3eb31b-27d3-4aa7-af86-21d2cdf49b9e/RamMandir.jpg',
        route: 'card-2',
        ratings: 4.9,
        price: '$150',
      },
      {
        id: 3,
        title: 'Shimla, Himachal',
        description: 'Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. Once the summer capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway, completed in 1903. ',
        imageUrl: 'https://ucarecdn.com/17399083-8a99-4ab0-a943-3c068eae484b/Shimla.jpg',
        route: 'card-3',
        ratings: 4.6,
        price: '$180',
      },
      {
        id: 4,
        title: 'Manali, Himachal',
        description: 'Manali is a high-altitude Himalayan resort town in India’s. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley.',
        imageUrl: 'https://ucarecdn.com/93952e40-ab6e-4cf5-8d18-4259dff8d18f/Manali.png',
        route: 'card-4',
        ratings: 4.5,
        price: '$250',
      },
      {
        id: 5,
        title: 'Taj Mahal, Agra',
        description: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; ',
        imageUrl: 'https://ucarecdn.com/745b52dc-6799-44da-960f-8d5b61798517/Tajmahal.jpg',
        route: 'card-5',
        ratings: 4.3,
        price: '$220',
      },
    ];

    return (
      <div className="custom-carousel-wrapper">
        <h2>Top Recommendations <span class="red-heart">&#9825;</span></h2>
        <Slider {...carouselSettings}>
          {cardData.map((card) => (
            <Link key={card.id} to={`/cards/${card.route}`} className="custom-card-link">
              <div className="custom-card">
                <img src={card.imageUrl} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="custom-card-details">
                  <p>Ratings<span class="red-star">★</span>: {card.ratings}</p>
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
