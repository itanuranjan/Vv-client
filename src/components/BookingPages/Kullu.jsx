import React, { useState } from 'react';
import '../Styles/BookingPage.css';

const placesData = [
  {
    id: 1,
    name: 'Kullu Tour',
    description: "Kullu is a district in Himachal Pradesh, India. The district stretches from the village of Rampur in the south to the Rohtang Pass in the north. The largest valley in the district is called the Kullu Valley, which is also known as the Valley of the Gods. Kullu valley is famous for its temples, beauty and its majestic hills covered with pine and deodar forest and sprawling apple orchards.",
    image: 'https://ucarecdn.com/f0c009d4-f081-429b-beca-ef23bcafc23b/kullu.jpeg',
    details: 'Details of Kullu',
    ride: 'Great Himalayan National Park, Rafting in Beas River, and many more places',
  },
];

const KulluBookingPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const initialPrice = 2500;
  const discount = initialPrice * 0.25; // 25% discount

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

export default KulluBookingPage;
