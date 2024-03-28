import React, { useState } from 'react';
import '../Styles/BookingPage.css';

const placesData = [
  {
    id: 1,
    name: 'Dehradun Tour',
    description: "Dehradun is the capital city of the Indian state of Uttarakhand, near the Himalayan foothills. At its core is the 6-sided Ghanta Ghar clock tower. To the southwest is Paltan Bazaar, a busy shopping area. Just east is the Sikh temple Gurdwara Nanaksar, topped with ornate white and golden domes. In Clement Town to the city’s southwest, Mindrolling Monastery is a Tibetan Buddhist center with shrine rooms in its Great Stupa.",
    image: 'https://ucarecdn.com/14936592-a3ee-45ef-8366-b0a9e129dc62/dehradun.jpeg',
    details: 'Details of Dehradun',
    ride: 'Robber’s Cave, Sahastradhara, and many more places',
  },
];

const DehradunBookingPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const initialPrice = 4000;
  const discount = initialPrice * 0.1; // 10% discount

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  const totalPrice = (initialPrice - discount) * quantity;

  const handleBookClick = () => {
    console.log('Navigate to payment page');
  };

  return (
    <div className="booking-page">
      {placesData.map(place => (
        <div key={place.id} className="place-container">
          <h2>{place.name}</h2>
          <img src={place.image} alt={place.name} />
          <p>{place.description}</p>
          <p>{place.details}</p>
          <p>{place.ride}</p>
        </div>
      ))}
      <div className="booking-container">
        <h2>Book Your Tour</h2>
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
        />
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={`RS : ${totalPrice}`}
          readOnly
        />
        <button onClick={handleBookClick}>Book Now</button>
      </div>
    </div>
  );
};

export default DehradunBookingPage;
