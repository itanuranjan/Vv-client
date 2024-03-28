import React, { useState } from 'react';
import '../Styles/BookingPage.css';

const placesData = [
  {
    id: 1,
    name: 'Ladakh Tour',
    description: "Ladakh is a region in the Indian state of Jammu and Kashmir that extends from the Kunlun mountain range to the main Great Himalayas to the south, inhabited by people of Indo-Aryan and Tibetan descent. It is one of the most sparsely populated regions in Jammu and Kashmir and its culture and history are closely related to that of Tibet.",
    image: 'https://ucarecdn.com/701e62ca-679a-454f-94bb-bc011b0f2b08/ladakh.cms',
    details: 'Details of Ladakh',
    ride: 'Pangong Lake, Nubra Valley, and many more places',
  },
];

const LadakhBookingPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const initialPrice = 2000;
  const discount = initialPrice * 0.15; // 15% discount

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

export default LadakhBookingPage;
