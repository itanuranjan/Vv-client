import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Packege.css';

const Card = ({ title, subtitle, price, description, premium, image, link }) => (
  <Link to={link} className={`pkgcard ${premium ? 'premium' : ''}`}>
    <div className="pkgcard-title">{title}</div>
    <div className="pkgcard-subtitle">{subtitle}</div>
    <img src={image} alt={title} className="card-image" />
    <div className="pkgcard-price">{price}</div>
    <div className="pkgcard-description">{description}</div>
  </Link>
);

const PremiumCard = ({ title, subtitle, price, description, image, link }) => (
  <Card
    title={title}
    subtitle={subtitle}
    price={price}
    description={description}
    premium
    image={image}
    link={link}
  />
);

const EuropeGroupTourCard = () => {
  return (
    <div className="pkg-container">
      <div className="left-side-text">
        {/* Add your left side text here */}
        <h1>Kashmir</h1>
        <p>Kashmir Tour Packages , Kashmir Tourism, Kashmir Honeymoon Packages.</p>
       
      </div>
      <div className="pkgcard-container">
        <Card
        //   title="Budget"
          subtitle="Kashmir the heart of India"
        //   price="Starting at 1,62,000"
        //   description="Discover great deals for your next Holiday Package"
          image="https://ucarecdn.com/ec5ae9e4-4790-44ef-a54d-43e2a3e87455/apple.jpeg"
          link="/budget-tour/kasmir"
        />
        {/* <PremiumCard
          title="Premium"
          subtitle="Kashmir"
        //   price="Starting at 1,89,000"
        //   description="Discover great deals for your next Holiday Package"
          image="https://ucarecdn.com/19cc03cb-6b76-47fb-a66a-1db56c7ea2b0/premmandir.jpg"
          link="/premium-tour"
        /> */}
      </div>
    </div>
  );
};

export default EuropeGroupTourCard;
