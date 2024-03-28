import React, { useState } from 'react';
import '../Styles/BookingPage.css';

const placesData = [
  {
    id: 1,
    name: 'Mussoriee Tour',
    description: "Mussoorie is a hill station and a municipal board in the Dehradun District of the Indian state of Uttarakhand. It is about 35 kilometres (22 mi) from the state capital of Dehradun and 290 km (180 mi) north of the national capital of New Delhi. The hill station is in the foothills of the Garhwal Himalayan range.",
    image: 'https://ucarecdn.com/ef649365-520b-401b-89ba-a4a5f404b792/mussorie.jpeg',
    details: 'Details of Mussoriee',
    ride: 'Kempty Falls, Gun Hill, and many more places',
  },
];

const MussorieeBookingPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const initialPrice = 3000;
  const discount = initialPrice * 0.2; // 20% discount

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

export default MussorieeBookingPage;
